import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, role, content, avatarUrl } = body

    // Validate the data
    if (!name || !content) {
      return NextResponse.json({ error: "Missing required fields: name and content" }, { status: 400 })
    }

    // Send to Discord webhook
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL // Use the environment variable

    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `New Testimonial Submission:`,
        embeds: [
          {
            title: "New Testimonial",
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Role", value: role || "N/A", inline: true },
              { name: "Content", value: content },
              { name: "Avatar URL", value: avatarUrl || "N/A" },
            ],
            color: 5793266, // A nice green color for success
          },
        ],
      }),
    })

    if (!response.ok) {
      console.error("Failed to send to Discord:", response.status, response.statusText, await response.text())
      return NextResponse.json({ error: "Failed to send testimonial to Discord" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Testimonial submitted successfully!" })
  } catch (error) {
    console.error("Error in testimonial submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

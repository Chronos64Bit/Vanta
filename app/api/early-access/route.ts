import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { discordUsername, discordId, currentRole, message } = body

    // Validate the data
    if (!discordUsername || !currentRole || !message) {
      return NextResponse.json(
        { error: "Missing required fields: Discord Username, Current Role, and Message" },
        { status: 400 },
      )
    }

    // Send to Discord webhook
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `New Early Access Request:`,
        embeds: [
          {
            title: "V.E.S Early Access Application",
            fields: [
              { name: "Discord Username", value: discordUsername, inline: true },
              { name: "Discord User ID", value: discordId || "N/A", inline: true },
              { name: "Current Role", value: currentRole, inline: false },
              { name: "Message", value: message, inline: false },
            ],
            color: 3447003, // A nice blue color for applications
          },
        ],
      }),
    })

    if (!response.ok) {
      console.error("Failed to send to Discord:", response.status, response.statusText, await response.text())
      return NextResponse.json({ error: "Failed to send early access request to Discord" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Early access request submitted successfully!" })
  } catch (error) {
    console.error("Error in early access submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

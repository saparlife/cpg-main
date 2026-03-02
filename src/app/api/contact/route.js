import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, service, message, token } = await request.json();

  if (!name || !email || !service || !message) {
    return NextResponse.json({ success: false, error: "Заполните все поля" }, { status: 500 });
  }

  if (!token) {
    return NextResponse.json({ success: false, error: "Ошибка проверки капчи" }, { status: 500 });
  }

  // Verify HCaptcha token
  const hcaptchaSecret = process.env.HCAPTCHA_SECRET_KEY;
  const verifyResponse = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${hcaptchaSecret}&response=${token}`,
  });

  const verifyData = await verifyResponse.json();
  if (!verifyData.success) {
    return NextResponse.json({ success: false, error: "Ошибка проверки капчи" }, { status: 500 });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;

  const text = `Новый лид с сайта\nИмя: ${name}\nEmail: ${email}\nУслуга: ${service}\nСообщение:\n\n${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHANNEL_ID,
        text: text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ success: false, error: "Ошибка при отправке сообщения" }, { status: 500 });
    }
    return NextResponse.json({ success: true, ...response.data });
  } catch (err) {
    console.error("❌ Error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, service, message } = await request.json();

  if (!name || !email || !service || !message) {
    return NextResponse.json({ success: false, error: "Заполните все поля" }, { status: 400 });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;

  const text = `📩 Новый лид с сайта\n\n👤 Имя: ${name}\n📧 Email: ${email}\n🔧 Услуга: ${service}\n💬 Сообщение:\n${message}`;

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
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}

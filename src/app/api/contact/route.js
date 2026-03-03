import { NextResponse } from "next/server";

// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { timestamp: now, count: 1 });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Слишком много запросов. Попробуйте через минуту." },
      { status: 429 }
    );
  }

  const { name, email, service, message } = await request.json();

  if (!name || !email || !service || !message) {
    return NextResponse.json({ success: false, error: "Заполните все поля" }, { status: 400 });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;

  const text = `📩 Новый лид с сайта\n\n👤 Имя: ${name}\n📧 Email: ${email}\n🔧 Услуга: ${service}\n💬 Сообщение:\n${message}\n\n🔗 Источник: https://cpgmediagroup.com/contact`;

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

import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);

// Vercel webhook handler
export default async function handler(req, res) {
  if (req.method === "POST") {
    bot.processUpdate(req.body);
    res.status(200).send("OK");
  } else {
    res.status(200).send("Telegram Test Bot ishlayapti 🚀");
  }
}

// /start komandasi
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Salom!\n\n📘 IELTS Test Botga xush kelibsiz!\n\nTez orada testlar qo‘shiladi 🔥"
  );
});
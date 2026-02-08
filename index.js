import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);

export default async function handler(req, res) {
  if (req.method === "POST") {
    bot.processUpdate(req.body);
    res.status(200).send("OK");
  } else {
    res.status(200).send("Bot ishlayapti 🚀");
  }
}

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Salom! Telegram Test Bot ishlayapti ✅"
  );
});
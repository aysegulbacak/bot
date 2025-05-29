const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const BOT_TOKEN = "8098361264:AAEbl35uNI_T83HO-_0a_dejTXlOs_yGXOc";

app.post("/webhook", async (req, res) => {
  const msg = req.body.message;

  if (msg && msg.text) {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        text: "Merhaba! Yeni mesajları görmek için /yenimesajlar yazın. Cevap vermek için /cevapver yazın."
      });
    }

    if (text === "/yenimesajlar") {
      // 🔧 Burada daha sonra gelen mesajları çekme kodu eklenecek
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        text: "📩 Son gelen mesajlar: (örnek veri)"
      });
    }

    if (text === "/cevapver") {
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        text: "🎤 Şimdi sesli yanıtınızı gönderin, biz onu yazıya çevirip müşterinize iletelim."
      });
    }
  }

  res.send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("🚀 Bot çalışıyor. Port:", process.env.PORT || 3000);
});

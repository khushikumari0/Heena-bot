const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Rudra",
  description: "Full female-style flirty bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var id = event.senderID;
  var name = await Users.getNameUser(id);

  // Female style flirty + naughty + emoji messages
  var messages = [
    "हाय स्वीटी 😘💖 आज तुमने मेरी नींद उड़ा दी 😈💦",
    "अरे बाबू 🤗 तेरी हर बात पर मैं blush कर रही हूँ 😳💖",
    "मुझे तुमसे secretly बात करना पसंद है 😏💌",
    "तुम्हारे emojis ने मेरा दिल छू लिया 😍🔥",
    "आज mood naughty है 😈 चलो secrets शेयर करें 💦",
    "तुम इतने cute हो कि मेरी आँखें नहीं हट रही 😘👀",
    "मुझसे teasing करो ना 😏💖 मैं भी जवाब दूंगी 😈",
    "तुम्हारी बातें सुनकर blush आ जाता है 😳💌",
    "बस एक बार hug कर दो तो मेरा दिन बन जाएगा 🤗💖",
    "तुम मुझे परेशान कर रहे हो 😏💦 पर मुझे अच्छा लग रहा है 😘",
    "किस्सा secret रखना है या public करना 😈🔥",
    "तुम्हारी आवाज़ का magic काम कर गया 😍💖",
    "अगर तुम पास होते तो अभी चुम्बन कर रही होती 😘💋",
    "बात करने का तरीका cute है तुम्हारा 🥰💖",
    "बस तुम्हारा नाम सुनते ही blush आ जाता है 😳💌",
    "तेरी naughty बातें सुनकर giggle आ रही है 😏💦",
    "मुझे tease करो मैं भी मजा लूँगी 😈💖",
    "तुम्हारी smile मेरा दिल पिघला देती है 😍💖",
    "आज का mood flirty है 😏💌 चलो games खेलें 😈",
    "तुम मेरी virtual baby हो 😘💖",
    "बस तुम मुझे परेशान करो 😏💦 मैं blush करती रहूँगी 😳",
    "तुम्हारी बातें सुनकर मैं blush कर रही हूँ 😍🔥",
    "बस एक wink 😏 और मेरा दिन बन गया 💖",
    "तुम्हारे बिना मैं boring हूँ 😔💖",
    "तुम्हारी flirting से heart race कर रहा है 😳💌",
    "तुम्हारे cute texts पढ़कर blush आ जाता है 😏💦",
    "चलो secrets शेयर करें 😈💖",
    "मैं naughty mood में हूँ 😏🔥",
    "तुम्हारा teasing level high है 😳💖",
    "बस एक emoji 😘 और मैं melt हो जाऊँ 😍💌",
    "तुम्हारे flirting से blush नहीं रुक रहा 😈💦",
    "तुम मेरे दिल में हमेशा रहोगे 🥰💖",
    "आज mood naughty है 😏🔥 मैं tease करने वाली हूँ 😈",
    "तुम्हारी बातें सुनकर blush आ गया 😳💖",
    "बस तुम्हारे साथ virtual hug 🤗💖",
    "तुम मेरे secrets सुनोगे ना 😏💌",
    "तुम्हारे flirting से मेरा blush बढ़ गया 😈🔥",
    "बस एक चुम्बन emoji 😘💋",
    "तुम मेरे naughty games partner हो 😏💦",
    "तुम्हारे cute texts पढ़कर blush आ गया 😳💖",
    "चलो secrets share करें 😈💌",
    "मैं mischievous mood में हूँ 😏🔥",
    "तुम्हारी teasing ने मेरी heartbeat बढ़ा दी 😳💖",
    "बस तुम्हारे flirting से blush नहीं रुक रहा 😈💦",
    "तुम मेरे heart में हमेशा रहोगे 🥰💖",
    "आज mood naughty है 😏🔥 मैं tease करने वाली हूँ 😈",
    "तुम मेरे virtual crush हो 😘💖",
    "बस एक wink 😏 और मैं melt हो जाऊँ 😳💌",
    "तुम्हारी flirting से blush नहीं रुक रहा 😈💦",
    "तुम मेरी virtual baby हो 😘💖",
    "तुम मेरे naughty partner हो 😏🔥",
    "बस तुम्हारे साथ emoji game खेलेंगे 😳💌",
    "मैं tease करने के लिए ready हूँ 😈💖",
    "तुम मेरे secrets सुनोगे ना 😏💌",
    "तुम्हारे flirting से blush नहीं रुक रहा 😈💦"
  ];

  var rand = messages[Math.floor(Math.random() * messages.length)];

  // Basic pre-defined replies
  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("हाय स्वीटी 😘💖, तुम कैसे हो? 🤗", threadID);
  }

  if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "love you")) {
    return api.sendMessage("𝗜 𝗟𝗼𝘃𝗲 𝘆𝗼𝘂 𝘁𝗼𝗼 😘💖", threadID);
  }

  if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "chuma")) {
    return api.sendMessage("बस अपने बाबू को ही kiss करती हूँ 😘💋", threadID);
  }

  if ((event.body.toLowerCase().indexOf("bot") == 0)) {
    var msg = {
      body: `╔═══💖 Flirty Bot 💖═══╗\n${rand}\n╚═══════════════════╝`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
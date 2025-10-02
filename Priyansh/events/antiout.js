module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐊𝐇𝐔𝐒𝐇𝐈 𝐊𝐔𝐌𝐀𝐑𝐈 Ke Permission Ke Bina Bhag Nhi Sakte ${name} Group Mai Lagta Hai Usne Mujhe Block Kardiya😥 :( `, event.threadID)
   } else api.sendMessage(`𝐊𝐇𝐔𝐒𝐇𝐈 𝐊𝐔𝐌𝐀𝐑𝐈 Ke Permission Ke Bina Bhag Ke Jaane Ka Nhi, ${name} Baby, Dekho Phir Se Add Kardiya Aapko`, event.threadID);
  })
 }
}

const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, realcode) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.RichEmbed()
    .setDescription(`Melodia`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(`Rütbeler`, `\`rütbe-ekle\`, \`rütbe-sil\`, \`rütbe-liste\``)
    .setThumbnail("")
    .setColor("BLACK")
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım, y"],
  permLevel: 2
};
exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};

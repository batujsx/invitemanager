const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("Bu komutu kullanmak için **Üyeleri Atma** yetkisine sahip olmalısınız. :x:")
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Davet sayısı ekleyeceğim kullanıcıyı etiketlemeniz gerekmektedir.")
        .setColor("BLACK")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Ne kadar davet sayısı eklenecek? Bunuda belirtir misiniz?")
        .setColor("BLACK")
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`${u} kullanıcısına toplamda; ${m} davet eklendi. İŞLEM BAŞARILI :star:`);
  message.channel.send(embed);

  db.add(`davet_${u.id}_${message.guild.id}`, +m);
};

module.exports.conf = {
  aliases: ["davetekle"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-ekle",
  description: "davet-ekle",
  usage: "davet-ekle"
};

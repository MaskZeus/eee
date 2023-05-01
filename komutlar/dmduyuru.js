const Discord = require('discord.js');
const kurucuID = '802976725956952104' //sizin idniz  //detayli video youtube.com/matadors

exports.run = (client, message, args) => {

    if (message.author.id !== kurucuID) return message.channel.send("Bu komutu sadece kurucum kullabilir.");
    if (!message.guild) {
    const mesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Dostum ne yapıyorsun?', 'Ben bir botum, beni sunucunda dene lütfen.')
    return message.author.sendEmbed(mesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('31.');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);
  
      client.users.forEach(u => {
u.send(mesaj)
})

message.channel.send(`✅ Mesaj **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** tane kullanıcıya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyuru'],
  permLevel: 0
};

exports.help = {
  description: 'Mesajınızı botun bulunduğu sunucudaki insanlara duyurur.',
  name: 'duyuru',
  usage: 'duyuru [mesaj]'
};

let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = "PREFIX GIR"



exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(
  new Discord.MessageEmbed()
  .setDescription("Abone rolünü ayarlamamışsın!")
  .setColor("RED")
  .setTitle(":x: Başarısız!")
  )
  if(!abonelog) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("Abone log kanalı ayarlanmamış!")
    .setColor("RED")
    .setTitle(":x: Başarısız!")
  )
  if(!aboneyetkilisi) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("Abone yetkili rolünü ayarlamamışsın!")
    .setColor("RED")
    .setTitle(":x: Başarısız!")
    
  )
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Bu komutu kullanabilmek için ${aboneyetkilisi} rolüne sahip olmalısın!`)
    .setColor("RED")
    .setTitle(":x: Başarısız!")
  )
  
  if(!message.mentions.users.first()) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("Lütfen bir kullanıcı etiketle!")
    .setColor("RED")
    .setTitle(":x: Başarısız!")
  )
  
  await(abonekisi.roles.add(abonerol))
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Abone Rolü Verildi!`)
  .addField(`Abone Rolünü Veren Kişi:`, `${message.author.tag}`, true)
  .addField(`Abone Rolü Verilen Kişi`, `${user}`, true)
  .setThumbnail(user.avatarURL())
  .setColor(`GOLD`)
  .setFooter("Godzilla")
  .setImage('https://cdn.discordapp.com/attachments/945022876128518284/955437567954800691/standard.gif');
  message.guild.channels.cache.get(abonelog).send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone'],
  perm: 0
}
exports.help = {
  name: 'a'
}

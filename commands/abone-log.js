const Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = "PREFIX GIR"



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("Bu komutu kullanabilmek için **Yönetici* yetkisine sahip olman gerekir!")
    .setTitle("x: Başarısız!")
    .setColor("RED")
  )
  
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Bir kanal etiketlemen gerekmekte!\n${ayarlar}abone-log #kanal`)
    .setColor("RED")
    .setTitle(":x: Başarısız!")
  )
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Abone kanalı başarıyla ${log} olarak ayarlandı!`)
    .setColor("RED")
    .setTitle(":white_check_mark: Başarılı!")
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abone-log'
}
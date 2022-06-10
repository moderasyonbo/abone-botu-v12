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
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Bir rol etiketlemen gerekmekte!\n${ayarlar}abone-yetkili @rol`)
    .setColor("RED")
    .setTitle(":x: Başarısız!")
  )
  
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı!`)
    .setColor("RED")
    .setTitle(":white_check_mark: Başarılı!")
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-y-rol'],
  perm: 0
}
exports.help = {
  name: 'abone-yetkili'
}
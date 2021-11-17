/*CMD
  command: 🖲Check Info
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⏏Send Order Id

Note - please send orders that are created from this bot!
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("*Checking Info...*")
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key="+Bot.getProperty("apikey")+"&action=status&order=" +
    message +
    "",
  success: "/orderInfoSuccess"
})


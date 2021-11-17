/*CMD
  command: 📍Free Views
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Forward The Post You Want To Get Views⛓

If this returns error 
Please /start again and use the no error edition button
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if (!request.forward_from_chat) {
  Bot.sendMessage("Please Forward A Message From A Channel")
  return
}
if (!request.forward_from_message_id) {
  Bot.sendMessage("*Error Can't Extract Data!*")
  return
}
var msgid = request.forward_from_message_id
var username = request.forward_from_chat.username

var limk = "https://t.me/" + username + "/" + msgid + ""
var link = Bot.getProperty("order" + limk)
if (link) {
  Bot.sendMessage(
    "Don't Send A Post Which Is Already Boosted!\n\nBoosted id: `" + limk + "`"
  )
  return
}
Bot.run({ command: "/freeViewsNum", options: { postlink: limk } })


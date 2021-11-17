/*CMD
  command: /freeViewapisuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  Bot.sendMessage("Internal Server Error")
  return
}
if (!params) {
  Bot.sendMessage("Internal Server Error")
  return
}
var result = JSON.parse(content)
var id = result.order
Bot.sendMessage(
  "*✅Order Processed!*\n------------\n⏏Order Info\n\n📶Order Id : `" + id + "`"
)
Bot.setProperty("order" + params, id, "string")


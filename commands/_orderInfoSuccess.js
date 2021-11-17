/*CMD
  command: /orderInfoSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = JSON.parse(content)
var status = result.status
var remains = result.remains
Bot.sendMessage(
  "*✳Info Extracted*\n---------\n📦Order Status : " +
    status +
    "\n🧾Remains : " +
    remains +
    ""
)


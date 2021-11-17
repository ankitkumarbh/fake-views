/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type != "private") {
  return
}
Bot.sendMessage("⚠️Unknown Command")


/*CMD
  command: ⏏Get Bot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Gmail For Getting This Bot!
  keyboard: 
  aliases: 
CMD*/

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}
if (!validateEmail(message)) {
  Bot.sendMessage("Invalid Email")
  return
}
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "*✳Bot Sent!*\n\n🖨Email : " +
    message +
    "\n\nPlease Give Credits To : *@Praveen_xd* And *@ROBBING_GAMER*\n\nIf You Don't Give Credits On Posting This To A Channel\nWe Will Take Strict Action!"
)


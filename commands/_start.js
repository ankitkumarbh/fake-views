/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var apikey = Bot.getProperty("apikey")
if (!apikey) {
  Bot.sendMessage(
    "ApiKey Not Set By The Admin..\nUse /setApikey For Setupping It!"
  )
  return
}
Bot.sendKeyboard(
  "📍Free Views,🖲Check Info\n🪃Get Free Views (NO ERROR EDITION)\n⏏Get Bot",
  "Hey,\nWelcome To Free Views Bot!\n\nUi Design and 80% Code By *@ROBBING_GAMER*\n20% Coded By *@Praveen_xd* (He Gave The Api Raw Code)."
)


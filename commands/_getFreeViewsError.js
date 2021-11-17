/*CMD
  command: /getFreeViewsError
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⚗Send Post Link!
  keyboard: 
  aliases: 🪃get free views (no error edition)
CMD*/

if (message.slice(0, 13) != "https://t.me/") {
  Bot.sendMessage("Invalid Post Link")
  return
}
var link = Bot.getProperty("order" + message)
if (link) {
  Bot.sendMessage(
    "Don't Send A Post Which Is Already Boosted!\n\nBoosted id: `" + link + "`"
  )
  return
}
Bot.run({ command: "/freeViewsNum", options: { postlink: message } })


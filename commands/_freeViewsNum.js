/*CMD
  command: /freeViewsNum
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send Number Of Views You Want!

Minimum : 100 Views
Maximum : 2500 views
  ANSWER
  keyboard: 
  aliases: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
if (message < 100) {
  Bot.sendMessage("*Minimum : 100*")
  return
}
if (message > 2500) {
  Bot.sendMessage("*Maximum : 2500*")
  return
}
Bot.sendMessage("*Processing Post Link With " + options.postlink + " .....*", {
  disable_web_page_preview: true
})
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key=" +
    Bot.getProperty("apikey") +
    "&action=add&service=69&link=" +
    options.postlink +
    "&quantity=" +
    message +
    "",
  success: "/freeViewapisuccess " + options.postlink + ""
})


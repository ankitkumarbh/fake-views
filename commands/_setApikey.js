/*CMD
  command: /setApikey
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  Bot.sendMessage("Api Key Should Be Put In The Params")
  return
}
if (user.telegramid != 859187586) {
  Bot.sendMessage("Not Admin!")
  return
}
if (params.length != 32) {
  Bot.sendMessage(
    "The Api Key Should Be From Telesubs.com\nContact @ROBBING_GAMER for help!"
  )
  return
}
if (params.length == 32) {
  Bot.sendMessage("*ApiKey Setupped To :* `" + params + "`")
  Bot.setProperty("apikey", params)
  return
}


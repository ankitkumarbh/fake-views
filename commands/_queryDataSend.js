/*CMD
  command: /queryDataSend
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
if (params.split(" ")[1] != user.telegramid) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❌You Didn't Send This Message",
    show_alert: false
  })
  return
}
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Getting Info.....",
  show_alert: false
})
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key=" +
    Bot.getProperty("apikey") +
    "&action=status&order=" +
    params.split(" ")[0] +
    "",
  success:
    "/queryDataSendSuccess " +
    request.inline_message_id +
    " " +
    params.split(" ")[0] +
    ""
})


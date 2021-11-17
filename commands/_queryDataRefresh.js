/*CMD
  command: /queryDataRefresh
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "reloaded",
  show_alert: false
})
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key=630dd1fcdfa229b68e29bccd60775b14&action=status&order=" +
    params.split(" ")[1] +
    "",
  success:
    "/queryDataSendSuccess " +
    params.split(" ")[0] +
    "" +
    params.split(" ")[1] +
    ""
})


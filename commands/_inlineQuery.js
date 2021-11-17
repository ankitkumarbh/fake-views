/*CMD
  command: /inlineQuery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!request.query) {
  return
}
var query = request.query
var results = []
var totalResult = 0
var infodata = {
  type: "article",
  id: totalResult,
  title: "ORDER INFO",
  description: "sends Order Info",
  thumb_url: "https://i.imgur.com/C1bE6NX.png",
  input_message_content: {
    message_text:
      "Press The Button Below To Get The Order Info Of : " + query + ""
  },

  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🔏 See Info",
          callback_data: "/queryDataSend " + query + " " + user.telegramid + ""
        }
      ]
    ]
  }
}
results.push(infodata)

Api.answerInlineQuery({
  inline_query_id: request.id,
  results: results,
  cache_time: 50000
})


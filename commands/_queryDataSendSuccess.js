/*CMD
  command: /queryDataSendSuccess
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
var result = JSON.parse(content)
var status = result.status
var remains = result.remains
if (!status) {
  Api.editMessageText({
    inline_message_id: params.split(" ")[0],
    text: "❌Invalid Id",
    parse_mode: "Markdown"
  })
  return
}
Api.editMessageText({
  inline_message_id: params.split(" ")[0],
  text:
    "*✳Info Extracted*\n---------\n📦Order Status : " +
    status +
    "\n🧾Remains : " +
    remains +
    "",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🔃Reload",
          callback_data:
            "/queryDataRefresh " +
            params.split(" ")[0] +
            " " +
            params.split(" ")[1] +
            ""
        }
      ]
    ]
  }
})


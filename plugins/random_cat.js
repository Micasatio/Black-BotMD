let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `
*GATO PEDOFILOOO*
`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*[β] π΄πππΎπ*'
}}
handler.help = ['cat']
handler.tags = ['general']
handler.command = /^cat$/i
handler.fail = null
module.exports = handler

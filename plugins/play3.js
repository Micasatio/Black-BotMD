let fs = require('fs')
let fetch = require('node-fetch')
let { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] y que mierda querΓ©s que busque pon el nombre de la canciΓ³n por ejemplo ${usedPrefix + command} wenamechiinsama*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
let caption = `π *ππΈπππ»πΎ:* ${title}
π *π³π΄ππ²ππΈπΏπ²πΈπΎπ½:* ${description}
π *πΏππ±π»πΈπ²π°π³πΎ:* ${publishedTime}
β *π³πππ°π²πΈπΎπ½:* ${durationH}
π *ππΈπππ°π:* ${viewH}
π *πππ»:* ${url}`.trim()
let buttons = [
{ buttonId: `${usedPrefix}getaud ${url}`, buttonText: { displayText: 'πππππ' }, type: 1 },
{ buttonId: `${usedPrefix}getvid ${url}`, buttonText: { displayText: 'πππππ' }, type: 1 }]
let buttonMessage = {
image: await fetch(thumbnail),
caption: caption,
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'π πππ’ππ’πππ¨πππ¬ ππ¨π¬π­ π',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://chat.whatsapp.com/F0fU7LSlBBcBm6ny5fVSuT`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
} catch {
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*')
}}
handler.command = /^(play3)$/i
module.exports = handler

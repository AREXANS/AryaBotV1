import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Pesan :* ${m.text}\n*Balasan :* Waalaikumsalam Wr.Wb\n_ArexansBot By Aryaa_`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'ᴡᴀᴀʟᴀɪᴋᴜᴍᴍᴜꜱꜱᴀʟᴀᴍ', sourceUrl: owner, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(assalamualaikum|salam)$/i
handler.command = new RegExp

export default handler
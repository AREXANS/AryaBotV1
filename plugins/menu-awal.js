import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '🤖',
            key: m.key,
          }})
conn.reply(m.chat, '⏳ _*Loading...*_', m)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `❏═┅─『 *AREXANS BOT* 』─┅═❏\n\nHaii *${await conn.getName(m.sender)}*`,botintro + '\n\n' + wm3 + '\n\n' + botdate, thumbdoc, [['LIST MENU','.tesm'],['REPORT BOT','.report']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: wm2,
                        body: 'Jangan Lupa Subs Ya',          previewType: 0,
                        thumbnail: fs.readFileSync("./MenuAwal.jpg"),
                        sourceUrl: syt
                      }}
})
await conn.sendFile(m.chat, './mp3/Arexans.opus', 'sound.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: 1080\n`,wm + '\n\n' + botdate, thumbdoc, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'RizkyEditz',          previewType: 0,
                        thumbnail: fs.readFileSync("./MenuAwal.jpg"),
                        sourceUrl: syt
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler
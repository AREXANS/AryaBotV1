import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/1b69cb22e9f4058b58be2.jpg`
    return conn.sendButton(m.chat, '┌─「 Donasi • Pulsa 」\n│ • *Three:* 089518030035\n│ • *Dana:* 08995946444\n❏────', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/arxans_",
                mediaType: "VIDEO",
                title: 'Donasi To Arexans ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler
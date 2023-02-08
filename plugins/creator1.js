import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ArexansBot\nNICKNAME:👑 Owner Arya\nORG:YT : @Arexans\nTITLE:soft\nitem1.TEL;waid=6289518030035:+62 895-1803-0035\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://chat.whatsapp.com/I3vA3TS6Au81uO35sgNg3i\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: arexanss@gmail.com\nitem3.X-ABLabel:💌 Mail Owner ArexansBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 Private\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: author, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *ArexansBot* Ya Njg`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['nomor']
handler.tags = ['nomor']

handler.command = /^(nomor)$/i

export default handler
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/2144d9ab5599922a27158.jpg'
let text = `\n┏━━ꕥ *[ Rules ]* ꕥ━━━⬣\n┃\n┃1. Spam Arexans Bot\n┃    _Sanksi : Peringatan/Blockir_\n┃\n┃2. Telepon/VidCall Bot\n┃   _Sanksi : Blockir_\n┃\n┃3. Memasukan Nomor Bot Ke Grup\n┃    Tanpa Izin\n┃   _Sanksi : Peringatan_\n┃\n┗━━ꕥ *[ Arexans Bot ]* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'NOMOR DEVELOP', url: `https://wa.me/6289518030035`}},
    {index: 4, quickReplyButton: {displayText: 'Donasi', id: '.donasi'}},
]
let tm = {
text: text,
footer: global.wm3,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['rules']
handler.tags = ['rules']
handler.command = /^(rules)$/i

export default handler
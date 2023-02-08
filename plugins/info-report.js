let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `┏━━━ꕥ〔 Report 〕ꕥ━⬣\n┃Lapor Bug/Error Di Bawah Ya\n┗━━━ꕥ`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🔧 Laporkan di sini', url: 'https://wa.me/6289518030035?text=Hai+Kak,+Saya+Ingin+Lapor+Tentang+Bot+Kakak'}},
]
let tm = {
text: text,
footer: global.wm3,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['report','complaint']
handler.tags = ['info']
handler.command = /^report|complaint$/i

export default handler

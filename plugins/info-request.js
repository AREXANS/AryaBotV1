let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *REQUEST* ${htka}


Request Fitur Silahkan\nKlik Di bawah Ini
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Di Sini', url: 'https://wa.me/6289518030035'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['request']
handler.tags = ['info']
handler.command = /^request$/i

export default handler

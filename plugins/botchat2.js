let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let img = './src/RadBot.png'
let user = global.db.data.users[m.sender]
conn.send3Button(m.chat, `Halloπ, ${conn.getName(m.sender)}\n\nBot ππΈπ’γΏπ³πͺ ππ§π€ disini, siap membantu anda `, 'ππΈπ’γΏπ³πͺ ππ§π€', 'Menu', '#Menu', 'Owner', '.owner', 'Sewa', '.sewabot', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()}\nπ€ ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/awakri.jpg')
}}})
}
handler.customPrefix = /^(hy|hay|Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello)$/i
handler.command = new RegExp

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "π¬ *Turu Ngab*"
    if (time >= 4) {
        res = "π¬ *Pagi Ngab*"
    }
    if (time > 10) {
        res = "π¬ *Siang Ngab*"
    }
    if (time >= 15) {
        res = "π¬ *Sore Ngab*"
    }
    if (time >= 18) {
        res = "π¬ *Malam Ngab*"
    }
    return res
}

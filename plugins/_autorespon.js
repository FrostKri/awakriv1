let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'ππΈπ’π¬π³πͺ ππ§π§πͺπ€πͺπ’π­ tidak aktif' : banned ? 'kamu dibanned' : 'Bot ππΈπ’π¬π³πͺ ππ§π§πͺπ€πͺπ’π­ disini, Siap membantu anda',
                'ππΈπ’γΏπ³πͺ ππ§π€',
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `ββββββ *γ ππ‘π©ππ§π ππ₯π¨π£ γ*βββββ
β₯ Allo mypren Kalau mau Invite Bayar ya gengsπ
β₯ Jangan mau enak aja, tenang bakalan dijagain Grup lu
βββββββββββββββββββββββββ
ββ­βββ γ ππ’π‘ππ¦π γ βββββββ
βββΈ *DANA* : 081360482998
βββΈ *PULSA*: 081360482998
βββΈ *GOPAY*: 081360482998
βββΈ *OVO*    : 081360482998
ββ°ββββββββββββββββββ
β ββββββββββββββββββββββββ
ββ­βββ γ π¦ππͺπ ππ’π§ γ ββββββ
βββΈ π α°IαGGα    : _Rp._ *5.000*
βββΈ π α·ααͺα©α       : _Rp._ *10.000*
βββΈ π α·ααͺα©α : _Rp._ *20.000*
βββΈ α­Eαα°α©αEα : _Rp._ *25.000*
ββ°ββββββββββββββββββ    
βββββββγ ${namabot} γβββββββββ
`.trim(), footer, 'MENU', '#menu', 'RULES', '#rules', 'STORE', '#store', m)
}

    // salam
    let reg = /(ass?alam|Ψ§ΩΩΨ³ΩΩΩΨ§ΩΩΩ ΨΉΩΩΩΩΩΩΩΩΩ|Ψ§ΩΨ³ΩΨ§Ω ΨΉΩΩΪ©Ω)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        this.sendSticker(m.chat, fs.readFileSync('./src/salam.webp'), m, {sendEphemeral: true})
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`π§ Aktif selama ${uptime} | β¨οΈ Mode: ${global.opts['self'] ? 'Offline' : setting.groupOnly ? 'Hanya Grup' : 'Online'} | π¬ α΄Ήα΄Ώππ©π¨π π§π ΓαΦΝΓ`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

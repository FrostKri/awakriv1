let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(image')).buffer(), `
๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐๐ ๐๐ ๐ ๐๐ ๐๐๐๐

โตอกอโช ๐ถ๐ธ๐๐ท๐๐ฑ :
github.com/frostkri

โตอกอโช ๐๐พ๐ ๐๐๐ฑ๐ด :
youtube.com/c/hokenbeusz

`.trim(), ' ๐๐ฐ๐ฏ๐ต ๐ง๐ฐ๐ณ๐จ๐ฆ๐ต ๐ต๐ฐ ๐ง๐ฐ๐ญ๐ญ๐ฐ๐ธ ๐ฎ๐บ ๐ข๐ค๐ค๐ฐ๐ถ๐ฏ๐ต', 'Thanks', '.tqto', 'Menu','.menu')
handler.help = ['kode Awakri']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Allo mypren๐, ${conn.getName(m.sender)}`,
                     "description": `
โโโใ ๐๐๐๐๐๐๐ ๐๐๐๐๐ ใโึ
โ Fitur Bot ini untuk 
โ mengaktifkan dan mematikan 
โ Fitur Bot yang berada di Grup
โโโโโโโโโโโโโโโึ
โโโใ ๐ผ๐พ๐พ๐๐๐๐ ๐๐๐๐๐ ใโึ
โโฌฃ GROUP OFFICIAL KRIZYN
โโฅ tinyurl.com/KRIZYNOFC
โโฌฃ ALL SOSMED OWNER BOT
โโฅ lynk.id/kri.com
โโฌฃ GROUP WANGSAF BOTZ
โโฅ tinyurl.com/KRIZYNWANGSAFBOTz
โโโโโโโโโโโโโโโึ`.trim(),
                        "footerText": "๐๐ช๐ฌ๐ข ๐ฎ๐ฆ๐ฏ๐ฆ๐ฎ๐ถ๐ฌ๐ข๐ฏ ๐ฃ๐ถ๐จ ๐ฅ๐ข๐ญ๐ข๐ฎ ๐ฑ๐ฆ๐ฏ๐จ๐จ๐ถ๐ฏ๐ข๐ข๐ฏ\n๐๐ช๐ญ๐ข๐ฉ๐ฌ๐ข๐ฏ ๐ญ๐ข๐ฑ๐ฐ๐ณ๐ฌ๐ข๐ฏ ๐ฐ๐ณ ๐ต๐ข๐ฏ๐บ๐ข๐ฌ๐ข๐ฏ ๐ฌ๐ฆ๐ฑ๐ข๐ฅ๐ข ๐๐ฌ๐ฃ๐๐ง",
                        "buttonText": "Setting",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "WELCOME๐",
                                        "description": "mengaktifkan fitur welcome",
                                        "rowId": ".on welcome"
                                        },{
                                    	"title": "OFF WELCOME๐",
                                        "description": "menonaktifkan fitur welcome",
                                        "rowId": ".off welcome"
                                          },{
                                    	"title": "AUTOREAD๐ฌ",
                                        "description": "mengaktifkan fitur autoread",
                                        "rowId": ".on autoread"
                                            },{
                                    	"title": "OFF AUTOREAD๐ฌ",
                                        "description": "menonaktifkan fitur autoread",
                                        "rowId": "off autoreas"
                                              },{
                                    	"title": "AUTOLEVELUPโฐ",
                                        "description": "mengaktifkan fitur utolevelup",
                                        "rowId": ".on autolevelup"
                                                },{
                                    	"title": "OFF AUTOLEVELUPโฐ",
                                        "description": "enonaktifkan fitur autolevelup",
                                        "rowId": ".off autolevelup"
                                        },{
                                    	"title": "ANTI DELETEโ",
                                        "description": "mengaktifkan fitur antidelete",
                                        "rowId": ".on delete"
                                        },{
                                        "title": "OFF ANTI DELETEโ",
                                        "description": "menonaktifkan fitur antidelete",
                                        "rowId": ".off delete"
                                        },{
                                        "title": "VIEWONCE๐พ",
                                        "description": "mengaktifkan fitur viewonce",
                                        "rowId": ".on viewonce"
                                        },{
                                        "title": "OFF VIEWONCE๐พ",
                                        "description": "menonaktifkan fitur viewonce",
                                        "rowId": ".off viewonce"     
                                          },{
                                    	"title": "RESTRICTโ๏ธ",
                                        "description": "mengaktifkan fitur restrict",
                                        "rowId": ".on restrict"
                                            },{
                                    	"title": "OFF RESTRICTโ๏ธ",
                                        "description": "menonaktifkan fitur restrict",
                                        "rowId": ".on restrict"
                                        },{
                                        "title": "DETECTโ",
                                        "description": "mengaktifkan fitur detect",
                                        "rowId": ".on detect"
                                        },{
                                        "title": "OFF DETECTโ",
                                        "description": "menonaktifkan fitur detect",
                                        "rowId": ".off detect"
                                        },{
                                    	"title": "ANTISPAM๐ซ",
                                        "description": "mengaktifkan fitur antispam",
                                        "rowId": ".on antispam"
                                        },{
                                    	"title": "OFF ANTISPAM๐ซ",
                                        "description": "menonaktifkan fitur antispam",
                                        "rowId": ".off antispam"
                                         },{
                                      	"title": "ANTITROLI๐ซ",
                                        "description": "mengaktifkan fitur antitroli",
                                        "rowId": ".off antitroli"
                                        },{
                                    	"title": "OFF ANTITROLI๐ซ",
                                        "description": "menonaktifkan fitur antitroli",
                                        "rowId": ".off antitroli"
                                        },{
                                    	"title": "ANTILINKโ",
                                        "description": "mengaktifkan fitur antilink",
                                        "rowId": ".on antilink"
                                        },{
                                    	"title": "OFF ANTILINKโ",
                                        "description": "menonaktifkan fitur antilink",
                                        "rowId": ".off antilink"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['Setting Bot']
handler.tags = ['main']
handler.command = /^(grups|setelangrub|grubsett|settingsgrub|grubsettings|settgrub|groupsett)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

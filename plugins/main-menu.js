let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Assets/IMG-20231118-WA0205.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *MR-Malik* ❯
│ _*_MR-Malik_*  Menu Ⓜ _
╰─────────────⦁
\n *Follow me on Facebook:*
facebook.com/NasrullahMachi\n
╭───❮ *Download* ❯
│ _${usedPrefix}yts *Youtube search*_
│ _${usedPrefix}play (Audio)_
│ _${usedPrefix}play2 (Video)_
│ _${usedPrefix}play.1_
│ _${usedPrefix}play.2_
│ _${usedPrefix}playdoc (Doc file audio)_
│ _${usedPrefix}playdoc2 (Doc file video)_
│ _${usedPrefix}video_
│ _${usedPrefix}video2_
│ _${usedPrefix}insta *link*_
│ _${usedPrefix}img_
│ _${usedPrefix}pinterest_
│ _${usedPrefix}mediafire *link*_
│ _${usedPrefix}gdrive *link*_
│ _${usedPrefix}twitter *link*_
│ _${usedPrefix}tiktok *link*_
│ _${usedPrefix}tiktokstalk_
│ _${usedPrefix}fb *fb link*_
│ _${usedPrefix}fb2 *fb link*_
│ _${usedPrefix}apk *app name*_
│ _${usedPrefix}modapk_
│ _${usedPrefix}meme *get random meme*_
╰─────────────⦁

${readMore}
╭─❮ *Powerfull Tools* ❯
│ _${usedPrefix}quran *surah No.*_
│ _${usedPrefix}chatgpt *text*_
│ _${usedPrefix}bard *text/img*_
│ _${usedPrefix}imgai (Generate ai img)_
│ _${usedPrefix}removebg (img bg remover)_
│ _${usedPrefix}logo_
│ _${usedPrefix}geo *Geo News*_
│ _${usedPrefix}cricket_
│ _${usedPrefix}weather_
│ _${usedPrefix}toanime_
│ _${usedPrefix}tomp3_
│ _${usedPrefix}toimg_
│ _${usedPrefix}tovid_
╰─────────────⦁


╭───❮ *Convrt Audio* ❯
│ _${usedPrefix}bass_
│ _${usedPrefix}blown_
│ _${usedPrefix}deep_
│ _${usedPrefix}earrape_
│ _${usedPrefix}fat_
│ _${usedPrefix}fast_
│ _${usedPrefix}nightcore_
│ _${usedPrefix}reverse_
│ _${usedPrefix}squrrel_
│ _${usedPrefix}slow_
╰─────────────⦁


╭───❮ *Tools Sticker* ❯
│ _${usedPrefix}sticker_
│ _${usedPrefix}take_
│ _${usedPrefix}smaker_
│ _${usedPrefix}getsticker_
│ _${usedPrefix}emix_
│ _${usedPrefix}attp_
╰─────────────⦁

╭───❮ *Other Tools* ❯
│ _${usedPrefix}autosticker_
│ _${usedPrefix}whatmusic_
│ _${usedPrefix}tempmail_
│ _${usedPrefix}checkmail_
│ _${usedPrefix}pokedex_
│ _${usedPrefix}calc_
│ _${usedPrefix}google_
│ _${usedPrefix}lyrics_
│ _${usedPrefix}readmore_
│ _${usedPrefix}ssweb_
│ _${usedPrefix}tts_
│ _${usedPrefix}trt_
│ _${usedPrefix}wiki_
│ _${usedPrefix}nowa_
│ _${usedPrefix}qrmaker_
│ _${usedPrefix}true_
│ _${usedPrefix}fancy_
│ _${usedPrefix}itunes_
╰─────────────⦁


╭❮  *🇵🇰☆M-r Malik☆🇵🇰* ❯
│      ◇○○○○○○○◇
│     《《《♡♡♡》》》  
│     Bot
│ 💡 Created By 
│ 📎 *NASRULLAH*
╰────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('⌨')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menu'] 

export default handler

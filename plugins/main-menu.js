let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Assets/IMG-20231118-WA0205.jpg'
let more = String.fromCharCode(8206)
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let readMore = more.repeat(850) 
let lkr = `\n🚀 *_Buckle up ${name}, Welcome To Mr-Malik! We're going on an adventure!_* 🚀\n\n╭───❮ *MR-Malik* ❯
\n *Follow me on Facebook:*
facebook.com/NasrullahMachi\n

╭─❮ *Tools List* ❯
│ 🔹 *${usedPrefix}QURAN*
│ 🔹 *${usedPrefix}CHATGPT*
│ 🔹 *${usedPrefix}BARD*
│ 🔹 *${usedPrefix}BARD2*
│ 🔹 *${usedPrefix}BING* (English only)
│ 🔹 *${usedPrefix}BING2*
│ 🔹 *${usedPrefix}GEMINI* (Eglish only)
│ 🔹 *${usedPrefix}IMGAI*
│ 🔹 *${usedPrefix}REMOVEBG*
│ 🔹 *${usedPrefix}LOGO*
│ 🔹 *${usedPrefix}GEO*
│ 🔹 *${usedPrefix}TOANIME*
│ 🔹 *${usedPrefix}TOMP3*
│ 🔹 *${usedPrefix}TOIMG*
│ 🔹 *${usedPrefix}TOVID*
╰─────────────⦁

${readMore}
╭───❮ *Download* ❯
│ 🔹 *${usedPrefix}YTS*
│ 🔹 *${usedPrefix}yts2*
│ 🔹 *${usedPrefix}play*
│ 🔹 *${usedPrefix}play2*
│ 🔹 *${usedPrefix}play3*
│ 🔹 *${usedPrefix}play4*
│ 🔹 *${usedPrefix}playdoc*
│ 🔹 *${usedPrefix}playdoc2*
│ 🔹 *${usedPrefix}video*
│ 🔹 *${usedPrefix}video2* (soon)
│ 🔹 *${usedPrefix}insta* (soon)
│ 🔹 *${usedPrefix}img*
│ 🔹 *${usedPrefix}pinterest*
│ 🔹 *${usedPrefix}mediafire*
│ 🔹 *${usedPrefix}gdrive*
│ 🔹 *${usedPrefix}twitter*
│ 🔹 *${usedPrefix}tiktok*
│ 🔹 *${usedPrefix}tiktokstalk*
│ 🔹 *${usedPrefix}fb*
│ 🔹 *${usedPrefix}fb2*
│ 🔹 *${usedPrefix}apk*
│ 🔹 *${usedPrefix}modapk*
│ 🔹 *${usedPrefix}cricket*
│ 🔹 *${usedPrefix}weather*
│ 🔹 *${usedPrefix}meme*
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
│ _${usedPrefix}translate_
│ _${usedPrefix}wiki_
│ _${usedPrefix}nowa_
│ _${usedPrefix}qrmaker_
│ _${usedPrefix}true_
│ _${usedPrefix}fancy_
│ _${usedPrefix}itunes_
╰─────────────⦁


╭❮  *M-r Malik* ❯
│        🦹‍♂️
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

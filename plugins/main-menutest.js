import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
    try {
    let { exp, diamantes, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    exp = exp || 'Desconocida';
    role = role || 'Aldeano';

    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

        await m.react('🌹')
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/ninsr8.jpg')

const vid = ['https://qu.ax/gfgZa.mp4', 'https://qu.ax/gfgZa.mp4', 'https://qu.ax/gfgZa.mp4']

  let txt = `
> Holis, Soy ${botname}\n   ${(conn.user.jid == global.conn.user.jid ? '*͜͡☔ 𝙱𝙾𝚃 𝙾𝙵𝙲 👑*͜͡' : '*͜͡🍃 𝚂𝚄𝙱-𝙱𝙾𝚃 💙*͜͡')}
*⚘ ᥴ᥆mᥙᥒіძᥲძ ᥆𝖿ᥴ:* 
https://chat.whatsapp.com/GgPP07cL54iL6C1lrwX0fz

Aquí tienes la lista de mis comandos:

╭┈────── ❃
│ 👤 *Usuario:* @${userId.split('@')[0]}
│ 🪷 *Modo:* Privado
│ 🕒 *Activa hace:* ${uptime}
│ 👥 *Usuarios:* *${totalreg}*
│ 🤍 *Comandos:* ${totalCommands}
│ 🍫 *Baileys:* MekBaileys
╰─➤ ✎

> Puedes crear tu *SUB-BOT* con #code o #qr 💙

> ･::ﾟ･ﾟ☆ 𝐈𝐧𝐟𝐨 𝐁𝐨𝐭 ☆･ﾟ:･ﾟ::･> 
Comandos para ver el estado e información de la Bot.
*꒰ 🍀 ꒱* #help • #menu
» Ver la lista de comandos de la Bot.
*꒰ 🍀 ꒱* #uptime • #runtime
» Ver tiempo activo o en línea de la Bot.
*꒰ 🍀 ꒱* #serbot • #serbot code
» Crea una sesión de Sub-Bot.
*꒰ 🍀 ꒱* #bots • #sockets
» Ver la lista de Sub-Bots activos.
*꒰ 🍀 ꒱* #creador
» Contacto del creador de la Bot.
*꒰ 🍀 ꒱* #status • #estado
» Ver el estado actual de la Bot.
*꒰ 🍀 ꒱* #links • #grupos
» Ver los enlaces oficiales de la Bot.
*꒰ 🍀 ꒱* #infobot • #infobot
» Ver la información completa de la Bot.
*꒰ 🍀 ꒱* #sug • #newcommand
» Sugiere un nuevo comando.
*꒰ 🍀 ꒱* #p • #ping
» Ver la velocidad de respuesta del Bot.
*꒰ 🍀 ꒱* #reporte • #reportar
» Reporta alguna falla o problema de la Bot.
*꒰ 🍀 ꒱* #sistema • #system
» Ver estado del sistema de alojamiento.
*꒰ 🍀 ꒱* #speed • #speedtest
» Ver las estadísticas de velocidad de la Bot.
*꒰ 🍀 ꒱* #views • #usuarios
» Ver la cantidad de usuarios registrados en el sistema.
*꒰ 🍀 ꒱* #funciones • #totalfunciones
» Ver todas las funciones de la Bot.
*꒰ 🍀 ꒱* #ds • #fixmsgespera
» Eliminar archivos de sesión innecesarios.
*꒰ 🍀 ꒱* #editautoresponder
» Configurar un Prompt personalizado de la Bot.

> ･::::･ﾟ☆ 𝐁𝐮𝐬𝐜𝐚𝐝𝐨𝐫𝐞𝐬 ☆･ﾟ★･ﾟ::･> 
Comandos para realizar búsquedas en distintas plataformas.
*꒰ 🔍 ꒱* #wallpapersearch + [ búsqueda ]
» Buscador de wallpapers.
*꒰ 🔍 ꒱* #tiktoksearch • #tiktoks
» Buscador de videos de tiktok.
*꒰ 🔍 ꒱* #tweetposts
» Buscador de posts de Twitter/X.
*꒰ 🔍 ꒱* #ytsearch • #yts
» Realiza búsquedas de Youtube.
*꒰ 🔍 ꒱* #githubsearch
» Buscador de usuarios de GitHub.
*꒰ 🔍 ꒱* #cuevana • #cuevanasearch
» Buscador de películas/series por Cuevana.
*꒰ 🔍 ꒱* #google
» Realiza búsquedas por Google.
*꒰ 🔍 ꒱* #pin • #pinterest
» Buscador de imágenes de Pinterest.
*꒰ 🔍 ꒱* #imagen • #image
» Buscador de imágenes de Google.
*꒰ 🔍 ꒱* #infoanime
» Buscador de información de anime/manga.
*꒰ 🔍 ꒱* #hentaisearch • #searchhentai
» Buscador de capítulos hentai.
*꒰ 🔍 ꒱* #xnxxsearch • #xnxxs
» Buscador de vídeos de Xnxx.
*꒰ 🔍 ꒱* #xvsearch • #xvideossearch
» Buscador de vídeos de Xvideos.
*꒰ 🔍 ꒱* #pornhubsearch • #phsearch
» Buscador de videos de Pornhub.
*꒰ 🔍 ꒱* #npmjs
» Buscador de npmjs.

> ･::･ﾟ☆ 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬 ☆･ﾟ:,★ﾟ::･> 
Comandos de descargas para varios archivos.
*꒰ 📥 ꒱* #ttstalk • #tiktokstalk + [username]
» Mira la info de algún usuario de tiktok.
*꒰ 📥 ꒱* #tiktok • #tt
» Descarga videos de TikTok.
*꒰ 📥 ꒱* #mediafire • #mf
» Descargar un archivo de MediaFire.
*꒰ 📥 ꒱* #pinvid • #pinvideo + [enlacé]
» Descargar vídeos de Pinterest.
*꒰ 📥 ꒱* #mega • #mg + [enlacé]
» Descargar un archivo de MEGA.
*꒰ 📥 ꒱* #play • #play2
» Descarga música/video de YouTube.
*꒰ 📥 ꒱* #ytmp3 • #ytmp4
» Descarga música/video de YouTube mediante url.
*꒰ 📥 ꒱* #fb • #facebook
» Descarga videos de Facebook.
*꒰ 📥 ꒱* #twitter • #x + [Link]
» Descargar un video de Twitter/X
*꒰ 📥 ꒱* #ig • #instagram
» Descarga contenido de Instagram.
*꒰ 📥 ꒱* #tts • #tiktoks + [busqueda]
» Buscar videos de tiktok
*꒰ 📥 ꒱* #terabox • #tb + [enlace]
» Descargar archivos por Terabox.
*꒰ 📥 ꒱* #ttimg • #ttmp3 + <url
» Descarga fotos/audios de tiktok.
*꒰ 📥 ꒱* #gitclone + <url
» Descarga un repositorio de github.
*꒰ 📥 ꒱* #xvideosdl
» Descarga videos porno de (Xvideos).
*꒰ 📥 ꒱* #xnxxdl
» Descarga videos porno de (xnxx).
*꒰ 📥 ꒱* #apk • #modapk
» Descarga un apk de Aptoide.
*꒰ 📥 ꒱* #tiktokrandom • #ttrandom
» Descarga un video aleatorio de tiktok.
*꒰ 📥 ꒱* #npmdl • #npmdownloader
» Descarga paquetes de NPMJs.

> ･:,:ﾟ☆ 𝐄𝐜𝐨𝐧𝐨𝐦𝐢́𝐚 ☆･ﾟ:::･> 
Comandos de economía y RPG para ganar dinerito y otros recursos.
*꒰ 💰 ꒱* #w • #work • #trabajar
» Trabaja para ganar ${moneda}.
*꒰ 💰 ꒱* #slut • #protituirse
» Trabaja como prostituta y gana ${moneda}.
*꒰ 💰 ꒱* #cf • #suerte
» Apuesta tus ${moneda} a cara o cruz.
*꒰ 💰 ꒱* #crime • #crimen
» Trabaja como ladrón para ganar ${moneda}.
*꒰ 💰 ꒱* #ruleta • #roulette • #rt
» Apuesta ${moneda} al color rojo o negro.
*꒰ 💰 ꒱* #casino • #apostar
» Apuesta tus ${moneda} en el casino.
*꒰ 💰 ꒱* #slot
» Apuesta tus ${moneda} en la ruleta y prueba tu suerte.
*꒰ 💰 ꒱* #cartera • #wallet
» Ver tus ${moneda} en la cartera.
*꒰ 💰 ꒱* #banco • #bank
» Ver tus ${moneda} en el banco.
*꒰ 💰 ꒱* #deposit • #depositar • #d
» Deposita tus ${moneda} al banco.
*꒰ 💰 ꒱* #with • #retirar • #withdraw
» Retira tus ${moneda} del banco.
*꒰ 💰 ꒱* #transfer • #pay
» Transfiere ${moneda} o XP a otros usuarios.
*꒰ 💰 ꒱* #miming • #minar • #mine
» Trabaja como minero y recolecta recursos.
*꒰ 💰 ꒱* #buyall • #buy
» Compra ${moneda} con tu XP.
*꒰ 💰 ꒱* #daily • #diario
» Reclama tu recompensa diaria.
*꒰ 💰 ꒱* #cofre
» Reclama un cofre diario lleno de recursos.
*꒰ 💰 ꒱* #weekly • #semanal
» Reclama tu regalo semanal.
*꒰ 💰 ꒱* #monthly • #mensual
» Reclama tu recompensa mensual.
*꒰ 💰 ꒱* #steal • #robar • #rob
» Intenta robarle ${moneda} a alguien.
*꒰ 💰 ꒱* #robarxp • #robxp
» Intenta robar XP a un usuario.
*꒰ 💰 ꒱* #eboard • #baltop
» Ver el ranking de usuarios con más ${moneda}.
*꒰ 💰 ꒱* #aventura • #adventure
» Aventúrate en un nuevo reino y recolecta recursos.
*꒰ 💰 ꒱* #curar • #heal
» Cura tu salud para volverte a aventurar.
*꒰ 💰 ꒱* #cazar • #hunt • #berburu
» Aventúrate en una caza de animales.
*꒰ 💰 ꒱* #inv • #inventario
» Ver tu inventario con todos tus ítems.
*꒰ 💰 ꒱* #mazmorra • #explorar
» Explorar mazmorras para ganar ${moneda}.
*꒰ 💰 ꒱* #halloween
» Reclama tu dulce o truco (Solo en Halloween).
*꒰ 💰 ꒱* #christmas • #navidad
» Reclama tu regalo navideño (Solo en Navidad).

> ･ﾟ★,> ☆ 𝐆𝐚𝐜𝐡𝐚 ☆,★::･> 
Comandos de gacha para reclamar y coleccionar personajes.
*꒰ 🎲 ꒱* #rollwaifu • #rw • #roll
» Waifu o husbando aleatorio.
*꒰ 🎲 ꒱* #claim • #c • #reclamar
» Reclamar un personaje.
*꒰ 🎲 ꒱* #harem • #waifus • #claims
» Ver tus personajes reclamados.
*꒰ 🎲 ꒱* #charimage • #waifuimage • #wimage
» Ver una imagen aleatoria de un personaje.
*꒰ 🎲 ꒱* #charinfo • #winfo • #waifuinfo
» Ver información de un personaje.
*꒰ 🎲 ꒱* #givechar • #givewaifu • #regalar
» Regalar un personaje a otro usuario.
*꒰ 🎲 ꒱* #vote • #votar
» Votar por un personaje para subir su valor.
*꒰ 🎲 ꒱* #waifusboard • #waifustop • #topwaifus
» Ver el top de personajes con mayor valor.

> ･ﾟ★,･ﾟ☆ 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 ☆･ﾟ･> ,★･ﾟ･> 
Comandos para creaciones de stickers, ¡qué divertido!
*꒰ ✨ ꒱* #sticker • #s
» Crea stickers de (imagen/video)
*꒰ ✨ ꒱* #setmeta
» Establece un pack y autor para los stickers.
*꒰ ✨ ꒱* #delmeta
» Elimina tu pack de stickers.
*꒰ ✨ ꒱* #pfp • #getpic
» Obtén la foto de perfil de un usuario.
*꒰ ✨ ꒱* #qc
» Crea stickers con texto o de un usuario.
*꒰ ✨ ꒱* #toimg • #img
» Convierte stickers en imagen.
*꒰ ✨ ꒱* #brat • #ttp • #attp
» Crea stickers con texto.
*꒰ ✨ ꒱* #emojimix
» Fusiona 2 emojis para crear un sticker.
*꒰ ✨ ꒱* #wm
» Cambia el nombre de los stickers.

> ･:★,> ･ﾟ☆ 𝐇𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬 ☆･ﾟ:★･ﾟ･> 
Comandos de herramientas con muchas funciones útiles.
*꒰ 🛠️ ꒱* #calcular • #calcular • #cal
» Calcular todo tipo de ecuaciones.
*꒰ 🛠️ ꒱* #tiempo • #clima
» Ver el clima de un país.
*꒰ 🛠️ ꒱* #horario
» Ver el horario global de los países.
*꒰ 🛠️ ꒱* #fake • #fakereply
» Crea un mensaje falso de un usuario.
*꒰ 🛠️ ꒱* #enhance • #remini • #hd
» Mejora la calidad de una imagen.
*꒰ 🛠️ ꒱* #letra #letra1
» Cambia la fuente de las letras.
*꒰ 🛠️ ꒱* #read • #readviewonce • #ver
» Ver imágenes de una sola vista.
*꒰ 🛠️ ꒱* #whatmusic • #shazam
» Descubre el nombre de canciones o vídeos.
*꒰ 🛠️ ꒱* #ss • #ssweb
» Ver el estado de una página web.
*꒰ 🛠️ ꒱* #length • #tamaño
» Cambia el tamaño de imágenes y vídeos.
*꒰ 🛠️ ꒱* #say • #decir + [texto]
» Repetir un mensaje.
*꒰ 🛠️ ꒱* #todoc • #toducument
» Crea documentos de (audio, imágenes y vídeos).
*꒰ 🛠️ ꒱* #translate • #traducir • #trad
» Traduce palabras en otros idiomas.

> ･:･:･ﾟ☆ 𝐏𝐞𝐫𝐟𝐢𝐥 ☆･ﾟ::::･> 
Comandos de perfil para ver, configurar y comprobar estados de tu perfil.
*꒰ 👤 ꒱* #reg • #verificar • #register
» Registra tu nombre y edad en el bot.
*꒰ 👤 ꒱* #unreg
» Elimina tu registro del bot.
*꒰ 👤 ꒱* #profile
» Muestra tu perfil de usuario.
*꒰ 👤 ꒱* #marry [mension / etiquetar]
» Propón matrimonio a otro usuario.
*꒰ 👤 ꒱* #divorce
» Divorciarte de tu pareja.
*꒰ 👤 ꒱* #setgenre • #setgenero
» Establece tu género en el perfil del bot.
*꒰ 👤 ꒱* #delgenre • #delgenero
» Elimina tu género del perfil del bot.
*꒰ 👤 ꒱* #setbirth • #setnacimiento
» Establece tu fecha de nacimiento en el perfil del bot.
*꒰ 👤 ꒱* #delbirth • #delnacimiento
» Elimina tu fecha de nacimiento del perfil del bot.
*꒰ 👤 ꒱* #setdescription • #setdesc
» Establece una descripción en tu perfil del bot.
*꒰ 👤 ꒱* #deldescription • #deldesc
» Elimina la descripción de tu perfil del bot.
*꒰ 👤 ꒱* #lb • #lboard + <Paginá
» Top de usuarios con más (experiencia y nivel).
*꒰ 👤 ꒱* #level • #lvl + <@Mencion
» Ver tu nivel y experiencia actual.
*꒰ 👤 ꒱* #comprarpremium • #premium
» Compra un pase premium para usar el bot sin límites.
*꒰ 👤 ꒱* #confesiones • #confesar
» Confiesa tus sentimientos a alguien de manera anónima.

> ･::･ﾟ☆ 𝐆𝐫𝐮𝐩𝐨𝐬 ☆･ﾟ::ﾟ::･> 
Comandos de grupos para una mejor gestión de ellos.
*꒰ 👥 ꒱* #hidetag
» Envía un mensaje mencionando a todos los usuarios
*꒰ 👥 ꒱* #gp • #infogrupo
» Ver la Información del grupo.
*꒰ 👥 ꒱* #linea • #listonline
» Ver la lista de los usuarios en línea.
*꒰ 👥 ꒱* #link
» El bot envía el link del grupo.
*꒰ 👥 ꒱* admins • admin
» Mencionar a los admins para solicitar ayuda.
*꒰ 👥 ꒱* #restablecer • #revoke
» Restablecer el enlace del grupo.
*꒰ 👥 ꒱* #grupo • #group [open / abrir]
» Cambia ajustes del grupo para que todos los usuarios envíen mensaje.
*꒰ 👥 ꒱* #grupo • #gruop [close / cerrar]
» Cambia ajustes del grupo para que solo los administradores envíen mensaje.
*꒰ 👥 ꒱* #kick [número / mension]
» Elimina un usuario de un grupo.
*꒰ 👥 ꒱* #add • #añadir • #agregar [número]
» Invita a un usuario a tu grupo.
*꒰ 👥 ꒱* #promote [mension / etiquetar]
» El bot dará administrador al usuario mencionando.
*꒰ 👥 ꒱* #demote [mension / etiquetar]
» El bot quitará administrador al usuario mencionando.
*꒰ 👥 ꒱* #gpbanner • #groupimg
» Cambiar la imagen del grupo.
*꒰ 👥 ꒱* #gpname • #groupname
» Cambiar el nombre del grupo.
*꒰ 👥 ꒱* #gpdesc • #groupdesc
» Cambiar la descripción del grupo.
*꒰ 👥 ꒱* #advertir • #warn • #warning
» Darle una advertencia a un usuario.
*꒰ 👥 ꒱* #unwarn • #delwarn
» Quitar advertencias.
*꒰ 👥 ꒱* #advlist • #listadv
» Ver lista de usuarios advertidos.
*꒰ 👥 ꒱* #bot on
» Enciende el bot en un grupo.
*꒰ 👥 ꒱* #bot off
» Apaga el bot en un grupo.
*꒰ 👥 ꒱* #mute [mension / etiquetar]
» El bot elimina los mensajes del usuario.
*꒰ 👥 ꒱* #unmute [mension / etiquetar]
» El bot deja de eliminar los mensajes del usuario.
*꒰ 👥 ꒱* #encuesta • #poll
» Crea una encuesta.
*꒰ 👥 ꒱* #delete • #del
» Elimina mensaje de otros usuarios.
*꒰ 👥 ꒱* #fantasmas
» Ver lista de inactivos del grupo.
*꒰ 👥 ꒱* #kickfantasmas
» Elimina a los inactivos del grupo.
*꒰ 👥 ꒱* #invocar • #tagall • #todos
» Invoca a todos los usuarios de un grupo.
*꒰ 👥 ꒱* #setemoji • #setemo
» Cambia el emoji que se usa en la invitación de usuarios.
*꒰ 👥 ꒱* #listnum • #kicknum
» Elimina a usuario por el prefijo de país.

> ･::･ﾟ☆ 𝐀𝐧𝐢𝐦𝐞 ☆･ﾟ::･> 
Comandos de reacciones de anime, ¡tan tiernas!
*꒰ 🌸 ꒱* #angry • #enojado + <mencion
» Estar enojado
*꒰ 🌸 ꒱* #bite + <mencion
» Muerde a alguien
*꒰ 🌸 ꒱* #bleh + <mencion
» Sacar la lengua
*꒰ 🌸 ꒱* #blush + <mencion
» Sonrojarte
*꒰ 🌸 ꒱* #bored • #aburrido + <mencion
» Estar aburrido
*꒰ 🌸 ꒱* #cry + <mencion
» Llorar por algo o alguien
*꒰ 🌸 ꒱* #cuddle + <mencion
» Acurrucarse
*꒰ 🌸 ꒱* #dance + <mencion
» Sácate los pasitos prohibidos
*꒰ 🌸 ꒱* #drunk + <mencion
» Estar borracho
*꒰ 🌸 ꒱* #eat • #comer + <mencion
» Comer algo delicioso
*꒰ 🌸 ꒱* #facepalm + <mencion
» Darte una palmada en la cara
*꒰ 🌸 ꒱* #happy • #feliz + <mencion
» Salta de felicidad
*꒰ 🌸 ꒱* #hug + <mencion
» Dar un abrazo
*꒰ 🌸 ꒱* #impregnate • #preg + <mencion
» Embarazar a alguien
*꒰ 🌸 ꒱* #kill + <mencion
» Toma tu arma y mata a alguien
*꒰ 🌸 ꒱* #kiss • #besar • #kiss2 + <mencion
» Dar un beso
*꒰ 🌸 ꒱* #laugh + <mencion
» Reírte de algo o alguien
*꒰ 🌸 ꒱* #lick + <mencion
» Lamer a alguien
*꒰ 🌸 ꒱* #love • #amor + <mencion
» Sentirse enamorado
*꒰ 🌸 ꒱* #pat + <mencion
» Acaricia a alguien
*꒰ 🌸 ꒱* #poke + <mencion
» Picar a alguien
*꒰ 🌸 ꒱* #pout + <mencion
» Hacer pucheros
*꒰ 🌸 ꒱* #punch + <mencion
» Dar un puñetazo
*꒰ 🌸 ꒱* #run + <mencion
» Correr
*꒰ 🌸 ꒱* #sad • #triste + <mencion
» Expresar tristeza
*꒰ 🌸 ꒱* #scared + <mencion
» Estar asustado
*꒰ 🌸 ꒱* #seduce + <mencion
» Seducir a alguien
*꒰ 🌸 ꒱* #shy • #timido + <mencion
» Sentir timidez
*꒰ 🌸 ꒱* #slap + <mencion
» Dar una bofetada
*꒰ 🌸 ꒱* #dias • #days
» Darle los buenos días a alguien
*꒰ 🌸 ꒱* #noches • #nights
» Darle las buenas noches a alguien
*꒰ 🌸 ꒱* #sleep + <mencion
» Tumbarte a dormir
*꒰ 🌸 ꒱* #smoke + <mencion
» Fumar
*꒰ 🌸 ꒱* #think + <mencion
» Pensar en algo

> ･:::･ﾟ☆ 🔞 𝐍𝐒𝐅𝐖 🔞 ☆･ﾟ::::･> 
Comandos NSFW (Contenido para adultos), ¡solo para mayores!
*꒰ 🔥 ꒱* #anal + <mencion
» Hacer un anal
*꒰ 🔥 ꒱* #waifu
» Busca una waifu aleatoria.
*꒰ 🔥 ꒱* #bath + <mencion
» Bañarse
*꒰ 🔥 ꒱* #blowjob • #mamada • #bj + <mencion
» Dar una mamada
*꒰ 🔥 ꒱* #boobjob + <mencion
» Hacer una rusa
*꒰ 🔥 ꒱* #cum + <mencion
» Venirse en alguien.
*꒰ 🔥 ꒱* #fap + <mencion
» Hacerse una paja
*꒰ 🔥 ꒱* #ppcouple • #ppcp
» Genera imágenes para amistades o parejas.
*꒰ 🔥 ꒱* #footjob + <mencion
» Hacer una paja con los pies
*꒰ 🔥 ꒱* #fuck • #coger • #fuck2 + <mencion
» Follarte a alguien
*꒰ 🔥 ꒱* #cafe • #coffe
» Tómate un cafecito con alguien
*꒰ 🔥 ꒱* #violar • #perra + <mencion
» Viola a alguien
*꒰ 🔥 ꒱* #grabboobs + <mencion
» Agarrar tetas
*꒰ 🔥 ꒱* #grop + <mencion
» Manosear a alguien
*꒰ 🔥 ꒱* #lickpussy + <mencion
» Lamer un coño
*꒰ 🔥 ꒱* #rule34 • #r34 + [Tags]
» Buscar imágenes en Rule34
*꒰ 🔥 ꒱* #sixnine • #69 + <mencion
» Haz un 69 con alguien
*꒰ 🔥 ꒱* #spank • #nalgada + <mencion
» Dar una nalgada
*꒰ 🔥 ꒱* #suckboobs + <mencion
» Chupar tetas
*꒰ 🔥 ꒱* #undress • #encuerar + <mencion
» Desnudar a alguien
*꒰ 🔥 ꒱* #yuri • #tijeras + <mencion
» Hacer tijeras.

> ･:･:･ﾟ☆ 🎮 𝐉𝐮𝐞𝐠𝐨𝐬 🎮 ☆･ﾟ･ﾟ::･> 
Comandos de juegos para jugar con tus amigos, ¡a divertirse!
*꒰ 🎲 ꒱* #amistad • #amigorandom
» Hacer amigos con un juego.
*꒰ 🎲 ꒱* #chaqueta • #jalamela
» Hacerte una chaqueta.
*꒰ 🎲 ꒱* #chiste
» La bot te cuenta un chiste.
*꒰ 🎲 ꒱* #consejo
» La bot te da un consejo.
*꒰ 🎲 ꒱* #doxeo • #doxear + <mencion
» Simular un doxeo falso.
*꒰ 🎲 ꒱* #facto
» La bot te lanza un facto.
*꒰ 🎲 ꒱* #formarpareja
» Forma una pareja.
*꒰ 🎲 ꒱* #formarpareja5
» Forma 5 parejas diferentes.
*꒰ 🎲 ꒱* #frase
» La bot te da una frase.
*꒰ 🎲 ꒱* #huevo
» Agárrale el huevo a alguien.
*꒰ 🎲 ꒱* #chupalo + <mencion
» Hacer que un usuario te la chupe.
*꒰ 🎲 ꒱* #aplauso + <mencion
» Aplaudirle a alguien.
*꒰ 🎲 ꒱* #marron + <mencion
» Burlarte del color de piel de un usuario.
*꒰ 🎲 ꒱* #suicidar
» Suicídate.
*꒰ 🎲 🎲 ꒱* #iq • #iqtest + <mencion
» Calcular el iq de alguna persona.
*꒰ 🎲 ꒱* #meme
» La bot te envía un meme aleatorio.
*꒰ 🎲 ꒱* #morse
» Convierte un texto a código morse.
*꒰ 🎲 ꒱* #nombreninja
» Busca un nombre ninja aleatorio.
*꒰ 🎲 ꒱* #paja • #pajeame
» La bot te hace una paja.
*꒰ 🎲 ꒱* #personalidad + <mencion
» La bot busca tu personalidad.
*꒰ 🎲 ꒱* #piropo
» Lanza un piropo.
*꒰ 🎲 ꒱* #pregunta
» Hazle una pregunta a la bot.
*꒰ 🎲 ꒱* #ship • #pareja
» La bot te da la probabilidad de enamorarte de una persona.
*꒰ 🎲 ꒱* #sorteo
» Empieza un sorteo.
*꒰ 🎲 ꒱* #top
» Empieza un top de personas.
*꒰ 🎲 ꒱* #formartrio + <mencion
» Forma un trío.
*꒰ 🎲 ꒱* #ahorcado
» Diviértete con la bot jugando el juego ahorcado.
*꒰ 🎲 ꒱* #mates • #matematicas
» Responde las preguntas de matemáticas para ganar recompensas.
*꒰ 🎲 ꒱* #ppt
» Juega piedra papel o tijeras con la bot.
*꒰ 🎲 ꒱* #sopa • #buscarpalabra
» Juega el famoso juego de sopa de letras.
*꒰ 🎲 ꒱* #pvp • #suit + <mencion
» Juega un pvp contra otro usuario.
*꒰ 🎲 ꒱* #ttt
» Crea una sala de juego.

`.trim()

        await conn.sendMessage(m.chat, {
            video: { url: vid.getRandom() }, // Vid
            caption: menu,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 999,
                externalAdReply: {
                    title: '⏤͟͞ू⃪ ፝͜⁞Sʜᴀᴅᴏᴡ✰⃔࿐\nNᴜᴇᴠᴀ Vᴇʀsɪᴏɴ Uʟᴛʀᴀ 🌤️',
                    thumbnailUrl: perfil,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            },
            gifPlayback: true,
            gifAttribution: 0
        }, { quoted: null })
    } catch (e) {
        await m.reply(`*✖️ Ocurrió un error al enviar el menú.*\n\n${e}`)
    }
}

handler.help = ['menuff'];
handler.tags = ['main'];
handler.command = /^(menutest|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }

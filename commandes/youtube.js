//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                    //
//                                             W H A T S A P P _ U S E R _ BOT                                        //
//                                                                                                                    //
//                                                     V E R S I O N：１.0                                             //
//                                                                                                                    //
//            ███╗░░░███╗░░█████╗░░███████╗░████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░         //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░         //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░         // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░         //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░         //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝ ░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░░         //
//                                                                                                                    //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                          //  
//                                                                                                                    //
//                                                                                                                    //
//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const fs = require('fs');
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎵'
}, async (_0x2bf970, _0x53ecde, _0x4efe73) => {
  const {
    ms: _0x4a6440,
    repondre: _0xce6e47,
    arg: _0x301f62
  } = _0x4efe73;
  if (!_0x301f62[0]) {
    _0xce6e47("wich song do you want.");
    return;
  }
  try {
    let _0x45b56c = _0x301f62.join(" ");
    const _0x4f29a2 = await yts(_0x45b56c);
    const _0x505dd5 = _0x4f29a2.videos;
    if (_0x505dd5 && _0x505dd5.length > 0 && _0x505dd5[0]) {
      const _0x5c65ff = _0x505dd5[0].url;
      let _0x5f3176 = {
        'image': {
          'url': _0x505dd5[0].thumbnail
        },
        'caption': "\n *MASTER-MD SONG DOWNLOADER__🥷🏻🎼*\n\n*🔰.𝐓ɪᴛʟᴇ :* *" + _0x505dd5[0].title + "*\n\n*🔰.𝐃ᴜʀᴀᴛɪᴏɴ:* *" + _0x505dd5[0].timestamp + "*\n\n*🔰.𝐕ɪᴇᴡᴇʀꜱ:* *" + _0x505dd5[0].views + "*\n\n*🔰.𝐔ᴘʟᴏᴀᴅᴇᴅ:* *" + _0x505dd5[0].ago + "*\n\n*🔰.𝐀ᴜᴛʜᴏʀ:* *" + _0x505dd5[0].author.name + "*\n\n*🔰.𝐔ʀʟ:* *" + _0x505dd5[0].url + "*\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n*𝚈𝚘𝚞𝚛 𝚂𝚘𝚗𝚐 𝚒𝚜 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚒𝚗𝚐⬇️*\n*𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝 Sir___⏳*\n▬▬▬▬▬▬▬▬▬▬▬▬\n*© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ*"
      };
      _0x53ecde.sendMessage(_0x2bf970, _0x5f3176, {
        'quoted': _0x4a6440
      });
      const _0x31d01c = ytdl(_0x5c65ff, {
        'filter': "audioonly",
        'quality': "highestaudio"
      });
      const _0x1a9bf2 = fs.createWriteStream("audio.mp3");
      _0x31d01c.pipe(_0x1a9bf2);
      _0x1a9bf2.on("finish", () => {
        _0x53ecde.sendMessage(_0x2bf970, {
          'audio': {
            'url': "audio.mp3"
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x4a6440,
          'ptt': false
        });
        console.log("Envoi du fichier audio terminé !");
      });
      _0x1a9bf2.on("error", _0x330fc4 => {
        console.error("Erreur lors de l'écriture du fichier audio :", _0x330fc4);
        _0xce6e47("Une erreur est survenue lors de l'écriture du fichier audio.");
      });
    } else {
      _0xce6e47("Aucune vidéo trouvée.");
    }
  } catch (_0x1346b0) {
    console.error("Erreur lors de la recherche ou du téléchargement de la vidéo :", _0x1346b0);
    _0xce6e47("Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.");
  }
});
zokou({
  'nomCom': "video",
  'categorie': "Download",
  'reaction': '🎥'
}, async (_0x215ebd, _0x111037, _0x54db2e) => {
  const {
    arg: _0x3457ca,
    ms: _0x29817d,
    repondre: _0x1cba0b
  } = _0x54db2e;
  if (!_0x3457ca[0]) {
    _0x1cba0b("insert video name");
    return;
  }
  const _0x8e99a6 = _0x3457ca.join(" ");
  try {
    const _0x1d9561 = await yts(_0x8e99a6);
    const _0x14dffe = _0x1d9561.videos;
    if (_0x14dffe && _0x14dffe.length > 0 && _0x14dffe[0]) {
      const _0x5c73da = _0x14dffe[0];
      let _0x1fc2c7 = {
        'image': {
          'url': _0x14dffe[0].thumbnail
        },
        'caption': "*MASTER-MD VIDEO DOWNLOADER__🥷🏻📽️*\n\n*🔰.𝐓ɪᴛʟᴇ:* *" + _0x5c73da.title + "*\n\n*🔰.𝐃ᴜʀᴀᴛɪᴏɴ:* *" + _0x5c73da.timestamp + "*\n\n*🔰.𝐕ɪᴇᴡᴇʀꜱ:* *" + _0x5c73da.views + "*\n\n*🔰.𝐔ᴘʟᴏᴀᴅᴇᴅ:* *" + _0x5c73da.ago + "*\n\n*🔰.𝐀ᴜᴛʜᴏʀ:* *" + _0x5c73da.author.name + "*\n\n*🔰.𝐔ʀʟ:* *" + _0x5c73da.url + "*\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n*𝚈𝚘𝚞𝚛 𝚟𝚒𝚍𝚎𝚘 𝚒𝚜 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚒𝚗𝚐⬇️*\n*𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝___⏳*\n▬▬▬▬▬▬▬▬▬▬▬▬\n*© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ*"
      };
      _0x111037.sendMessage(_0x215ebd, _0x1fc2c7, {
        'quoted': _0x29817d
      });
      const _0x154d80 = await ytdl.getInfo(_0x5c73da.url);
      const _0xfc35cc = ytdl.chooseFormat(_0x154d80.formats, {
        'quality': '18'
      });
      const _0x522efe = ytdl.downloadFromInfo(_0x154d80, {
        'format': _0xfc35cc
      });
      const _0x52c644 = fs.createWriteStream("video.mp4");
      _0x522efe.pipe(_0x52c644);
      _0x52c644.on("finish", () => {
        _0x111037.sendMessage(_0x215ebd, {
          'video': {
            'url': "./video.mp4"
          },
          'caption': "*© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ*",
          'gifPlayback': false
        }, {
          'quoted': _0x29817d
        });
      });
      _0x52c644.on("error", _0x34bb00 => {
        console.error("Erreur lors de l'écriture du fichier vidéo :", _0x34bb00);
        _0x1cba0b("Une erreur est survenue lors de l'écriture du fichier vidéo.");
      });
    } else {
      _0x1cba0b("No video found");
    }
  } catch (_0x1dd6e8) {
    console.error("Erreur lors de la recherche ou du téléchargement de la vidéo :", _0x1dd6e8);
    _0x1cba0b("Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.");
  }
});
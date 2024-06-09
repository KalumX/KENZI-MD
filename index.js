'use strict';

var __createBinding = this && this.__createBinding || (Object.create ? function (_0x5f22cb, _0x1ff9a1, _0x33ae19, _0x3df7c4) {
  if (_0x3df7c4 === undefined) {
    _0x3df7c4 = _0x33ae19;
  }
  var _0x25dce3 = Object.getOwnPropertyDescriptor(_0x1ff9a1, _0x33ae19);
  if (!_0x25dce3 || ("get" in _0x25dce3 ? !_0x1ff9a1.__esModule : _0x25dce3.writable || _0x25dce3.configurable)) {
    _0x25dce3 = {
      'enumerable': true,
      'get': function () {
        return _0x1ff9a1[_0x33ae19];
      }
    };
  }
  Object.defineProperty(_0x5f22cb, _0x3df7c4, _0x25dce3);
} : function (_0x224943, _0x4310fb, _0x3ee22c, _0x54dd72) {
  if (_0x54dd72 === undefined) {
    _0x54dd72 = _0x3ee22c;
  }
  _0x224943[_0x54dd72] = _0x4310fb[_0x3ee22c];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x2444e3, _0x4a48f8) {
  Object.defineProperty(_0x2444e3, "default", {
    'enumerable': true,
    'value': _0x4a48f8
  });
} : function (_0x28f753, _0x569256) {
  _0x28f753["default"] = _0x569256;
});
var __importStar = this && this.__importStar || function (_0xa45933) {
  if (_0xa45933 && _0xa45933.__esModule) {
    return _0xa45933;
  }
  var _0x1f989f = {};
  if (_0xa45933 != null) {
    for (var _0x49d9b6 in _0xa45933) if (_0x49d9b6 !== "default" && Object.prototype.hasOwnProperty.call(_0xa45933, _0x49d9b6)) {
      __createBinding(_0x1f989f, _0xa45933, _0x49d9b6);
    }
  }
  __setModuleDefault(_0x1f989f, _0xa45933);
  return _0x1f989f;
};
var __importDefault = this && this.__importDefault || function (_0x14fc2f) {
  return _0x14fc2f && _0x14fc2f.__esModule ? _0x14fc2f : {
    'default': _0x14fc2f
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./set");
let fs = require("fs-extra");
let path = require("path");
const FileType = require("file-type");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./bdd/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./bdd/antibot");
let evt = require(__dirname + "/framework/zokou");
let {
  reagir
} = require(__dirname + "/framework/app");
var session = conf.session.replace(/MASTER-MD;;;=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/auth/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/auth/creds.json") && session != "zokk") {
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    }
  } catch (_0x2983ca) {
    console.log("Session Invalide " + _0x2983ca);
    return;
  }
}
authentification();
0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
setTimeout(() => {
  async function _0x47ba04() {
    0;
    0;
    const {
      state: _0x3b2bd8,
      saveCreds: _0x94906b
    } = await baileys_1.useMultiFileAuthState(__dirname + "/auth");
    0;
    const _0x408006 = {
      'version': _0x5a6617,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ["Flash-Md", "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x3b2bd8.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x3b2bd8.keys, logger)
      },
      'getMessage': async _0x33430c => {
        if (store) {
          const _0x30791b = await store.loadMessage(_0x33430c.remoteJid, _0x33430c.id, undefined);
          return _0x30791b.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0;
    const _0x229866 = baileys_1["default"](_0x408006);
    store.bind(_0x229866.ev);
    setInterval(() => {
      store.writeToFile("store.json");
    }, 3000);
    _0x229866.ev.on("messages.upsert", async _0x403a04 => {
      const {
        messages: _0x4af6da
      } = _0x403a04;
      const _0x53da14 = _0x4af6da[0];
      if (!_0x53da14.message) {
        return;
      }
      const _0x251733 = _0x471fcf => {
        if (!_0x471fcf) {
          return _0x471fcf;
        }
        if (/:\d+@/gi.test(_0x471fcf)) {
          0;
          let _0x3f3ede = baileys_1.jidDecode(_0x471fcf) || {};
          return _0x3f3ede.user && _0x3f3ede.server && _0x3f3ede.user + '@' + _0x3f3ede.server || _0x471fcf;
        } else {
          return _0x471fcf;
        }
      };
      0;
      var _0x58831a = baileys_1.getContentType(_0x53da14.message);
      var _0x4afdd1 = _0x58831a == "conversation" ? _0x53da14.message.conversation : _0x58831a == "imageMessage" ? _0x53da14.message.imageMessage?.["caption"] : _0x58831a == "videoMessage" ? _0x53da14.message.videoMessage?.["caption"] : _0x58831a == "extendedTextMessage" ? _0x53da14.message?.["extendedTextMessage"]?.["text"] : _0x58831a == "buttonsResponseMessage" ? _0x53da14?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x58831a == "listResponseMessage" ? _0x53da14.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] : _0x58831a == "messageContextInfo" ? _0x53da14?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x53da14.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x53da14.text : '';
      var _0x1cfa23 = _0x53da14.key.remoteJid;
      var _0xd56685 = _0x251733(_0x229866.user.id);
      var _0x41b2ef = _0xd56685.split('@')[0];
      const _0x5aaf1a = _0x1cfa23?.["endsWith"]("@g.us");
      var _0x413674 = _0x5aaf1a ? await _0x229866.groupMetadata(_0x1cfa23) : '';
      var _0x4b638f = _0x5aaf1a ? _0x413674.subject : '';
      var _0x2f1def = _0x53da14.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x4dcc0f = _0x251733(_0x53da14.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
      var _0xdee490 = _0x5aaf1a ? _0x53da14.key.participant ? _0x53da14.key.participant : _0x53da14.participant : _0x1cfa23;
      if (_0x53da14.key.fromMe) {
        _0xdee490 = _0xd56685;
      }
      var _0x12f726 = _0x5aaf1a ? _0x53da14.key.participant : '';
      const {
        getAllSudoNumbers: _0xe5c6a9
      } = require("./bdd/sudo");
      const _0x275bfc = _0x53da14.pushName;
      const _0x35869b = await _0xe5c6a9();
      const _0x388bc0 = [_0x41b2ef, "254757835036", "254751284190", "254750948696", "254742063632", conf.NUMERO_OWNER].map(_0x1fcaf1 => _0x1fcaf1.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x16bc8e = _0x388bc0.concat(_0x35869b);
      const _0x62d3b2 = _0x16bc8e.includes(_0xdee490);
      var _0x565fd9 = ["254757835036", "254751284190", "254750948696", "254742063632"].map(_0xc252a3 => _0xc252a3.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0xdee490);
      function _0x166886(_0x26fab5) {
        _0x229866.sendMessage(_0x1cfa23, {
          'text': _0x26fab5
        }, {
          'quoted': _0x53da14
        });
      }
      console.log("\t [][]...{MASTER-MD}...[][]");
      console.log("=========== New message ===========");
      if (_0x5aaf1a) {
        console.log("message from the group : " + _0x4b638f);
      }
      console.log("message sent By : [" + _0x275bfc + " : " + _0xdee490.split("@s.whatsapp.net")[0] + " ]");
      console.log("message type : " + _0x58831a);
      console.log("------ message content ------");
      console.log(_0x4afdd1);
      function _0x32ecd6(_0x463cb2) {
        let _0x713210 = [];
        for (_0x403a04 of _0x463cb2) {
          if (_0x403a04.admin == null) {
            continue;
          }
          _0x713210.push(_0x403a04.id);
        }
        return _0x713210;
      }
      var _0xec6250 = conf.ETAT;
      if (_0xec6250 == 1) {
        await _0x229866.sendPresenceUpdate("available", _0x1cfa23);
      } else {
        if (_0xec6250 == 2) {
          await _0x229866.sendPresenceUpdate("composing", _0x1cfa23);
        } else if (_0xec6250 == 3) {
          await _0x229866.sendPresenceUpdate("recording", _0x1cfa23);
        } else {
          await _0x229866.sendPresenceUpdate("unavailable", _0x1cfa23);
        }
      }
      const _0x5830a4 = _0x5aaf1a ? await _0x413674.participants : '';
      let _0x50ab27 = _0x5aaf1a ? _0x32ecd6(_0x5830a4) : '';
      const _0x41009f = _0x5aaf1a ? _0x50ab27.includes(_0xdee490) : false;
      var _0x2a08f3 = _0x5aaf1a ? _0x50ab27.includes(_0xd56685) : false;
      const _0x2c8eef = _0x4afdd1 ? _0x4afdd1.trim().split(/ +/).slice(1) : null;
      const _0x99872f = _0x4afdd1 ? _0x4afdd1.startsWith(prefixe) : false;
      const _0x309a84 = _0x99872f ? _0x4afdd1.slice(1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x4ae24b = conf.URL.split(',');
      function _0x5ea089() {
        const _0x3c0da6 = Math.floor(Math.random() * _0x4ae24b.length);
        const _0x1cd791 = _0x4ae24b[_0x3c0da6];
        return _0x1cd791;
      }
      var _0x230d90 = {
        'superUser': _0x62d3b2,
        'dev': _0x565fd9,
        'verifGroupe': _0x5aaf1a,
        'mbre': _0x5830a4,
        'membreGroupe': _0x12f726,
        'verifAdmin': _0x41009f,
        'infosGroupe': _0x413674,
        'nomGroupe': _0x4b638f,
        'auteurMessage': _0xdee490,
        'nomAuteurMessage': _0x275bfc,
        'idBot': _0xd56685,
        'verifZokouAdmin': _0x2a08f3,
        'prefixe': prefixe,
        'arg': _0x2c8eef,
        'repondre': _0x166886,
        'mtype': _0x58831a,
        'groupeAdmin': _0x32ecd6,
        'msgRepondu': _0x2f1def,
        'auteurMsgRepondu': _0x4dcc0f,
        'ms': _0x53da14,
        'mybotpic': _0x5ea089
      };
      if (_0x53da14.message.protocolMessage && _0x53da14.message.protocolMessage.type === 0 && conf.ADM.toLocaleLowerCase() === "yes") {
        if (_0x53da14.key.fromMe || _0x53da14.message.protocolMessage.key.fromMe) {
          console.log("Message supprimer me concernant");
          return;
        }
        console.log("Message supprimer");
        let _0x33cb31 = _0x53da14.message.protocolMessage.key;
        try {
          const _0x4cb2b1 = fs.readFileSync("./store.json", "utf8");
          const _0x992871 = JSON.parse(_0x4cb2b1);
          let _0xd583dc = _0x992871.messages[_0x33cb31.remoteJid];
          let _0x2b0bda;
          for (let _0x483465 = 0; _0x483465 < _0xd583dc.length; _0x483465++) {
            if (_0xd583dc[_0x483465].key.id === _0x33cb31.id) {
              _0x2b0bda = _0xd583dc[_0x483465];
              break;
            }
          }
          if (_0x2b0bda === null || !_0x2b0bda || _0x2b0bda === "undefined") {
            console.log("Message non trouver");
            return;
          }
          await _0x229866.sendMessage(_0xd56685, {
            'image': {
              'url': "./media/deleted-message.jpg"
            },
            'caption': "        😈Anti-delete-message😈\n Message from @" + _0x2b0bda.key.participant.split('@')[0] + '​',
            'mentions': [_0x2b0bda.key.participant]
          }).then(() => {
            _0x229866.sendMessage(_0xd56685, {
              'forward': _0x2b0bda
            }, {
              'quoted': _0x2b0bda
            });
          });
        } catch (_0x116ea2) {
          console.log(_0x116ea2);
        }
      }
      if (_0x53da14.key && _0x53da14.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x229866.readMessages([_0x53da14.key]);
      }
      if (_0x53da14.key && _0x53da14.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x53da14.message.extendedTextMessage) {
          var _0xfb81ba = _0x53da14.message.extendedTextMessage.text;
          await _0x229866.sendMessage(_0xd56685, {
            'text': _0xfb81ba
          }, {
            'quoted': _0x53da14
          });
        } else {
          if (_0x53da14.message.imageMessage) {
            var _0x16940d = _0x53da14.message.imageMessage.caption;
            var _0x2726f2 = await _0x229866.downloadAndSaveMediaMessage(_0x53da14.message.imageMessage);
            await _0x229866.sendMessage(_0xd56685, {
              'image': {
                'url': _0x2726f2
              },
              'caption': _0x16940d
            }, {
              'quoted': _0x53da14
            });
          } else {
            if (_0x53da14.message.videoMessage) {
              var _0x16940d = _0x53da14.message.videoMessage.caption;
              var _0x2f0e76 = await _0x229866.downloadAndSaveMediaMessage(_0x53da14.message.videoMessage);
              await _0x229866.sendMessage(_0xd56685, {
                'video': {
                  'url': _0x2f0e76
                },
                'caption': _0x16940d
              }, {
                'quoted': _0x53da14
              });
            }
          }
        }
      }
      if (!_0x565fd9 && _0x1cfa23 == "120363158701337904@g.us") {
        return;
      }
      if (_0x4afdd1 && _0xdee490.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x4f8717
        } = require("./bdd/level");
        try {
          await _0x4f8717(_0xdee490);
        } catch (_0x511d56) {
          console.error(_0x511d56);
        }
      }
      try {
        if (_0x53da14.message[_0x58831a].contextInfo.mentionedJid && (_0x53da14.message[_0x58831a].contextInfo.mentionedJid.includes(_0xd56685) || _0x53da14.message[_0x58831a].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x1cfa23 == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x62d3b2) {
            console.log("hummm");
            return;
          }
          let _0x3f75d4 = require("./bdd/mention");
          let _0x31c5bd = await _0x3f75d4.recupererToutesLesValeurs();
          let _0x15fe8a = _0x31c5bd[0];
          if (_0x15fe8a.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x9d8faa;
          if (_0x15fe8a.type.toLocaleLowerCase() === "image") {
            _0x9d8faa = {
              'image': {
                'url': _0x15fe8a.url
              },
              'caption': _0x15fe8a.message
            };
          } else {
            if (_0x15fe8a.type.toLocaleLowerCase() === "video") {
              _0x9d8faa = {
                'video': {
                  'url': _0x15fe8a.url
                },
                'caption': _0x15fe8a.message
              };
            } else {
              if (_0x15fe8a.type.toLocaleLowerCase() === "sticker") {
                let _0xb431a8 = new Sticker(_0x15fe8a.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x42c1cf = await _0xb431a8.toBuffer();
                _0x9d8faa = {
                  'sticker': _0x42c1cf
                };
              } else if (_0x15fe8a.type.toLocaleLowerCase() === "audio") {
                _0x9d8faa = {
                  'audio': {
                    'url': _0x15fe8a.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x229866.sendMessage(_0x1cfa23, _0x9d8faa, {
            'quoted': _0x53da14
          });
        }
      } catch (_0x79ac37) {}
      try {
        const _0x254ea1 = await verifierEtatJid(_0x1cfa23);
        if (_0x4afdd1.includes("https://") && _0x5aaf1a && _0x254ea1) {
          console.log("lien detecté");
          var _0x5f230d = _0x5aaf1a ? _0x50ab27.includes(_0xd56685) : false;
          if (_0x62d3b2 || _0x41009f || !_0x5f230d) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x329e89 = {
            'remoteJid': _0x1cfa23,
            'fromMe': false,
            'id': _0x53da14.key.id,
            'participant': _0xdee490
          };
          var _0x43dd2f = "link detected, \n";
          var _0x25f72b = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Master-Md",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x25f72b.toFile("st1.webp");
          var _0x5e06a8 = await recupererActionJid(_0x1cfa23);
          if (_0x5e06a8 === "remove") {
            _0x43dd2f += "message deleted \n @" + _0xdee490.split('@')[0] + " removed from group.";
            await _0x229866.sendMessage(_0x1cfa23, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            await _0x229866.sendMessage(_0x1cfa23, {
              'text': _0x43dd2f,
              'mentions': [_0xdee490]
            }, {
              'quoted': _0x53da14
            });
            try {
              await _0x229866.groupParticipantsUpdate(_0x1cfa23, [_0xdee490], "remove");
            } catch (_0xa625d3) {
              console.log("antiien ") + _0xa625d3;
            }
            await _0x229866.sendMessage(_0x1cfa23, {
              'delete': _0x329e89
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x5e06a8 === "delete") {
              _0x43dd2f += "Goodbye \n @" + _0xdee490.split('@')[0] + " Sending other group links here is prohibited!.";
              await _0x229866.sendMessage(_0x1cfa23, {
                'text': _0x43dd2f,
                'mentions': [_0xdee490]
              }, {
                'quoted': _0x53da14
              });
              await _0x229866.sendMessage(_0x1cfa23, {
                'delete': _0x329e89
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x5e06a8 === "warn") {
                const {
                  getWarnCountByJID: _0x373e2e,
                  ajouterUtilisateurAvecWarnCount: _0x2bcc36
                } = require("./bdd/warn");
                let _0x17013d = await _0x373e2e(_0xdee490);
                let _0x1444ec = conf.WARN_COUNT;
                if (_0x17013d >= _0x1444ec) {
                  var _0x5313c1 = "link detected , you will be remove because of reaching warn-limit";
                  await _0x229866.sendMessage(_0x1cfa23, {
                    'text': _0x5313c1,
                    'mentions': [_0xdee490]
                  }, {
                    'quoted': _0x53da14
                  });
                  await _0x229866.groupParticipantsUpdate(_0x1cfa23, [_0xdee490], "remove");
                  await _0x229866.sendMessage(_0x1cfa23, {
                    'delete': _0x329e89
                  });
                } else {
                  var _0x2ace17 = _0x1444ec - _0x17013d;
                  var _0x27e37c = "Link detected , your warn_count was upgrade ;\n rest : " + _0x2ace17 + " ";
                  await _0x2bcc36(_0xdee490);
                  await _0x229866.sendMessage(_0x1cfa23, {
                    'text': _0x27e37c,
                    'mentions': [_0xdee490]
                  }, {
                    'quoted': _0x53da14
                  });
                  await _0x229866.sendMessage(_0x1cfa23, {
                    'delete': _0x329e89
                  });
                }
              }
            }
          }
        }
      } catch (_0x16f505) {
        console.log("bdd err " + _0x16f505);
      }
      try {
        const _0x238caa = _0x53da14.key?.['id']?.["startsWith"]("BAES") && _0x53da14.key?.['id']?.["length"] === 16;
        const _0xaf85e9 = _0x53da14.key?.['id']?.["startsWith"]("BAE5") && _0x53da14.key?.['id']?.["length"] === 16;
        if (_0x238caa || _0xaf85e9) {
          if (_0x58831a === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x2a3324 = await atbverifierEtatJid(_0x1cfa23);
          if (!_0x2a3324) {
            return;
          }
          ;
          if (_0x41009f || _0xdee490 === _0xd56685) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x5ad273 = {
            'remoteJid': _0x1cfa23,
            'fromMe': false,
            'id': _0x53da14.key.id,
            'participant': _0xdee490
          };
          var _0x43dd2f = "bot detected, \n";
          var _0x25f72b = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Master-Md",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x25f72b.toFile("st1.webp");
          var _0x5e06a8 = await atbrecupererActionJid(_0x1cfa23);
          if (_0x5e06a8 === "remove") {
            _0x43dd2f += "message deleted \n @" + _0xdee490.split('@')[0] + " removed from group.";
            await _0x229866.sendMessage(_0x1cfa23, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            await _0x229866.sendMessage(_0x1cfa23, {
              'text': _0x43dd2f,
              'mentions': [_0xdee490]
            }, {
              'quoted': _0x53da14
            });
            try {
              await _0x229866.groupParticipantsUpdate(_0x1cfa23, [_0xdee490], "remove");
            } catch (_0x443408) {
              console.log("antibot ") + _0x443408;
            }
            await _0x229866.sendMessage(_0x1cfa23, {
              'delete': _0x5ad273
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x5e06a8 === "delete") {
              _0x43dd2f += "message delete \n @" + _0xdee490.split('@')[0] + " Avoid sending link.";
              await _0x229866.sendMessage(_0x1cfa23, {
                'text': _0x43dd2f,
                'mentions': [_0xdee490]
              }, {
                'quoted': _0x53da14
              });
              await _0x229866.sendMessage(_0x1cfa23, {
                'delete': _0x5ad273
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x5e06a8 === "warn") {
                const {
                  getWarnCountByJID: _0x35644b,
                  ajouterUtilisateurAvecWarnCount: _0x4f0302
                } = require("./bdd/warn");
                let _0x38ebf5 = await _0x35644b(_0xdee490);
                let _0x19d11b = conf.WARN_COUNT;
                if (_0x38ebf5 >= _0x19d11b) {
                  var _0x5313c1 = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x229866.sendMessage(_0x1cfa23, {
                    'text': _0x5313c1,
                    'mentions': [_0xdee490]
                  }, {
                    'quoted': _0x53da14
                  });
                  await _0x229866.groupParticipantsUpdate(_0x1cfa23, [_0xdee490], "remove");
                  await _0x229866.sendMessage(_0x1cfa23, {
                    'delete': _0x5ad273
                  });
                } else {
                  var _0x2ace17 = _0x19d11b - _0x38ebf5;
                  var _0x27e37c = "bot detected , your warn_count was upgrade ;\n rest : " + _0x2ace17 + " ";
                  await _0x4f0302(_0xdee490);
                  await _0x229866.sendMessage(_0x1cfa23, {
                    'text': _0x27e37c,
                    'mentions': [_0xdee490]
                  }, {
                    'quoted': _0x53da14
                  });
                  await _0x229866.sendMessage(_0x1cfa23, {
                    'delete': _0x5ad273
                  });
                }
              }
            }
          }
        }
      } catch (_0x1c1479) {
        console.log(".... " + _0x1c1479);
      }
      if (_0x99872f) {
        const _0x2363b5 = evt.cm.find(_0xb125da => _0xb125da.nomCom === _0x309a84);
        if (_0x2363b5) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x62d3b2) {
              return;
            }
            if (!_0x62d3b2 && _0x1cfa23 === _0xdee490 && conf.PM_PERMIT === "yes") {
              _0x166886("You don't have acces to commands here");
              return;
            }
            if (!_0x62d3b2 && _0x5aaf1a) {
              let _0x1f47ce = await isGroupBanned(_0x1cfa23);
              if (_0x1f47ce) {
                return;
              }
            }
            if (!_0x41009f && _0x5aaf1a) {
              let _0x28c187 = await isGroupOnlyAdmin(_0x1cfa23);
              if (_0x28c187) {
                return;
              }
            }
            if (!_0x62d3b2) {
              let _0x100b13 = await isUserBanned(_0xdee490);
              if (_0x100b13) {
                _0x166886("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x1cfa23, _0x229866, _0x53da14, _0x2363b5.reaction);
            _0x2363b5.fonction(_0x1cfa23, _0x229866, _0x230d90);
          } catch (_0x3c3a21) {
            console.log("😡😡 " + _0x3c3a21);
            _0x229866.sendMessage(_0x1cfa23, {
              'text': "😡😡 " + _0x3c3a21
            }, {
              'quoted': _0x53da14
            });
          }
        }
      }
    });
    const {
      recupevents: _0x504636
    } = require("./bdd/welcome");
    _0x229866.ev.on("group-participants.update", async _0x21d95b => {
      console.log(_0x21d95b);
      let _0x42ef1c;
      try {
        _0x42ef1c = await _0x229866.profilePictureUrl(_0x21d95b.id, "image");
      } catch {
        _0x42ef1c = "https://telegra.ph/file/ebdb1b88647fd8de9551f.jpg";
      }
      try {
        const _0x2bacf0 = await _0x229866.groupMetadata(_0x21d95b.id);
        if (_0x21d95b.action == "add" && (await _0x504636(_0x21d95b.id, "welcome")) == 'on') {
          let _0x4f02b7 = "◇MASTER-MD◇\n";
          let _0x519e46 = _0x21d95b.participants;
          for (let _0x2cf5f7 of _0x519e46) {
            _0x4f02b7 += "Hello @" + _0x2cf5f7.split('@')[0] + "\n";
          }
          _0x4f02b7 += "*You are welcomed here.* \n            \n*You MAY read the group description FOR more info and Avoid getting removed*\n            \n     \n            \n ◇ *GROUP DESCRIPTION*  ◇\n\n" + _0x2bacf0.desc + "\n\n*© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ*";
          _0x229866.sendMessage(_0x21d95b.id, {
            'image': {
              'url': _0x42ef1c
            },
            'caption': _0x4f02b7,
            'mentions': _0x519e46
          });
        } else {
          if (_0x21d95b.action == "remove" && (await _0x504636(_0x21d95b.id, "goodbye")) == 'on') {
            let _0x5bc36c = " *සමුහයෙන් එක් අයෙකු පිට විය... 📌 [POWER BY MASTER MIND]*\n";
            let _0x1e3026 = _0x21d95b.participants;
            for (let _0x115696 of _0x1e3026) {
              _0x5bc36c += '@' + _0x115696.split('@')[0] + "\n";
            }
            _0x229866.sendMessage(_0x21d95b.id, {
              'text': _0x5bc36c,
              'mentions': _0x1e3026
            });
          } else {
            if (_0x21d95b.action == "promote" && (await _0x504636(_0x21d95b.id, "antipromote")) == 'on') {
              if (_0x21d95b.author == _0x2bacf0.owner || _0x21d95b.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x21d95b.author == decodeJid(_0x229866.user.id) || _0x21d95b.author == _0x21d95b.participants[0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x229866.groupParticipantsUpdate(_0x21d95b.id, [_0x21d95b.author, _0x21d95b.participants[0]], "demote");
              _0x229866.sendMessage(_0x21d95b.id, {
                'text': '@' + _0x21d95b.author.split('@')[0] + " has violated the anti-promotion rule, therefore both " + _0x21d95b.author.split('@')[0] + " and @" + _0x21d95b.participants[0].split('@')[0] + " have been removed from administrative rights.",
                'mentions': [_0x21d95b.author, _0x21d95b.participants[0]]
              });
            } else {
              if (_0x21d95b.action == "demote" && (await _0x504636(_0x21d95b.id, "antidemote")) == 'on') {
                if (_0x21d95b.author == _0x2bacf0.owner || _0x21d95b.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x21d95b.author == decodeJid(_0x229866.user.id) || _0x21d95b.author == _0x21d95b.participants[0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x229866.groupParticipantsUpdate(_0x21d95b.id, [_0x21d95b.author], "demote");
                await _0x229866.groupParticipantsUpdate(_0x21d95b.id, [_0x21d95b.participants[0]], "promote");
                _0x229866.sendMessage(_0x21d95b.id, {
                  'text': '@' + _0x21d95b.author.split('@')[0] + " has violated the anti-demotion rule by removing @" + _0x21d95b.participants[0].split('@')[0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x21d95b.author, _0x21d95b.participants[0]]
                });
              }
            }
          }
        }
      } catch (_0x45eab8) {
        console.error(_0x45eab8);
      }
    });
    async function _0xb48e0c() {
      const _0x10ef35 = require("node-cron");
      const {
        getCron: _0x56fba5
      } = require("./bdd/cron");
      let _0x40024e = await _0x56fba5();
      console.log(_0x40024e);
      if (_0x40024e.length > 0) {
        for (let _0x85d8ba = 0; _0x85d8ba < _0x40024e.length; _0x85d8ba++) {
          if (_0x40024e[_0x85d8ba].mute_at != null) {
            let _0x331561 = _0x40024e[_0x85d8ba].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x40024e[_0x85d8ba].group_id + " a " + _0x331561[0] + " H " + _0x331561[1]);
            _0x10ef35.schedule(_0x331561[1] + " " + _0x331561[0] + " * * *", async () => {
              await _0x229866.groupSettingUpdate(_0x40024e[_0x85d8ba].group_id, "announcement");
              _0x229866.sendMessage(_0x40024e[_0x85d8ba].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
          if (_0x40024e[_0x85d8ba].unmute_at != null) {
            let _0x9f468c = _0x40024e[_0x85d8ba].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x9f468c[0] + " H " + _0x9f468c[1] + " ");
            _0x10ef35.schedule(_0x9f468c[1] + " " + _0x9f468c[0] + " * * *", async () => {
              await _0x229866.groupSettingUpdate(_0x40024e[_0x85d8ba].group_id, "not_announcement");
              _0x229866.sendMessage(_0x40024e[_0x85d8ba].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x229866.ev.on("contacts.upsert", async _0x4146dd => {
      const _0x192c3a = _0x426778 => {
        for (const _0x5f5038 of _0x426778) {
          if (store.contacts[_0x5f5038.id]) {
            Object.assign(store.contacts[_0x5f5038.id], _0x5f5038);
          } else {
            store.contacts[_0x5f5038.id] = _0x5f5038;
          }
        }
        return;
      };
      _0x192c3a(_0x4146dd);
    });
    _0x229866.ev.on("connection.update", async _0x4c727d => {
      const {
        lastDisconnect: _0x4e0982,
        connection: _0x41c12a
      } = _0x4c727d;
      if (_0x41c12a === "connecting") {
        console.log("ℹ️ Connexion en cours...");
      } else {
        if (_0x41c12a === "open") {
          console.log("✅ connexion reussie! ☺️");
          console.log('--');
          0;
          await baileys_1.delay(200);
          console.log("------");
          0;
          await baileys_1.delay(300);
          console.log("------------------/-----");
          console.log("le bot est en ligne 🕸\n\n");
          console.log("chargement des commandes ...\n");
          fs.readdirSync(__dirname + "/commandes").forEach(_0x46887a => {
            if (path.extname(_0x46887a).toLowerCase() == ".js") {
              try {
                require(__dirname + "/commandes/" + _0x46887a);
                console.log(_0x46887a + " installé ✔️");
              } catch (_0x4e6281) {
                console.log(_0x46887a + " n'a pas pu être chargé pour les raisons suivantes : " + _0x4e6281);
              }
              0;
              baileys_1.delay(300);
            }
          });
          0;
          baileys_1.delay(700);
          var _0x34f149;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x34f149 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x34f149 = "private";
          } else {
            _0x34f149 = "undefined";
          }
          console.log("chargement des commandes terminé ✅");
          await _0xb48e0c();
          if (conf.DP.toLowerCase() === "yes") {
            let _0x3101a3 = "\n*MASTER-MD IS CONNECTED ✅*\n\n     \n║❒Creator: *SAHAN*\n║❒Prefix : [ " + prefixe + " ]\n║❒Mode :" + _0x34f149 + "\n║❒Time : " + temps + " \n║❒Date : " + date + "\n║❒Total Commands : " + evt.cm.length + "︎\n║❒User : " + s.OWNER_NAME + "\n║❒Ram : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n║❒Platform : " + os.platform() + "\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n║❒ Supported : Hemal veenath\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n     *MASTER-MD*";
            await _0x229866.sendMessage(_0x229866.user.id, {
              'text': _0x3101a3
            });
          }
        } else {
          if (_0x41c12a == "close") {
            let _0x29ed20 = new boom_1.Boom(_0x4e0982?.["error"])?.["output"]["statusCode"];
            if (_0x29ed20 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id érronée veuillez rescanner le qr svp ...");
            } else {
              if (_0x29ed20 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x47ba04();
              } else {
                if (_0x29ed20 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connexion au serveur perdue 😞 ,,, reconnexion en cours ... ");
                  _0x47ba04();
                } else {
                  if (_0x29ed20 === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x29ed20 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x29ed20 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x47ba04();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x29ed20);
                        const {
                          exec: _0xf58bc9
                        } = require("child_process");
                        _0xf58bc9("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x41c12a);
            _0x47ba04();
          }
        }
      }
    });
    _0x229866.ev.on("creds.update", _0x94906b);
    _0x229866.downloadAndSaveMediaMessage = async (_0x3928f1, _0x4c2be6 = '', _0x48d2cc = true) => {
      let _0x11d866 = _0x3928f1.msg ? _0x3928f1.msg : _0x3928f1;
      let _0x16453b = (_0x3928f1.msg || _0x3928f1).mimetype || '';
      let _0x2304d2 = _0x3928f1.mtype ? _0x3928f1.mtype.replace(/Message/gi, '') : _0x16453b.split('/')[0];
      0;
      const _0x29b8ea = await baileys_1.downloadContentFromMessage(_0x11d866, _0x2304d2);
      let _0x400761 = Buffer.from([]);
      for await (const _0x45093a of _0x29b8ea) {
        _0x400761 = Buffer.concat([_0x400761, _0x45093a]);
      }
      let _0x38e564 = await FileType.fromBuffer(_0x400761);
      let _0xb73099 = './' + _0x4c2be6 + '.' + _0x38e564.ext;
      await fs.writeFileSync(_0xb73099, _0x400761);
      return _0xb73099;
    };
    _0x229866.awaitForMessage = async (_0x15731a = {}) => {
      return new Promise((_0x525d57, _0x4980a1) => {
        if (typeof _0x15731a !== "object") {
          _0x4980a1(new Error("Options must be an object"));
        }
        if (typeof _0x15731a.sender !== "string") {
          _0x4980a1(new Error("Sender must be a string"));
        }
        if (typeof _0x15731a.chatJid !== "string") {
          _0x4980a1(new Error("ChatJid must be a string"));
        }
        if (_0x15731a.timeout && typeof _0x15731a.timeout !== "number") {
          _0x4980a1(new Error("Timeout must be a number"));
        }
        if (_0x15731a.filter && typeof _0x15731a.filter !== "function") {
          _0x4980a1(new Error("Filter must be a function"));
        }
        const _0x2761a2 = _0x15731a?.["timeout"] || undefined;
        const _0x258037 = _0x15731a?.["filter"] || (() => true);
        let _0x18a72c = undefined;
        let _0x4065a9 = _0xfedb69 => {
          let {
            type: _0x2f75aa,
            messages: _0x46ffe7
          } = _0xfedb69;
          if (_0x2f75aa == "notify") {
            for (let _0x410fb3 of _0x46ffe7) {
              const _0x56c9ca = _0x410fb3.key.fromMe;
              const _0x4fd450 = _0x410fb3.key.remoteJid;
              const _0x3aaa25 = _0x4fd450.endsWith("@g.us");
              const _0x351add = _0x4fd450 == "status@broadcast";
              const _0x146d88 = _0x56c9ca ? _0x229866.user.id.replace(/:.*@/g, '@') : _0x3aaa25 || _0x351add ? _0x410fb3.key.participant.replace(/:.*@/g, '@') : _0x4fd450;
              if (_0x146d88 == _0x15731a.sender && _0x4fd450 == _0x15731a.chatJid && _0x258037(_0x410fb3)) {
                _0x229866.ev.off("messages.upsert", _0x4065a9);
                clearTimeout(_0x18a72c);
                _0x525d57(_0x410fb3);
              }
            }
          }
        };
        _0x229866.ev.on("messages.upsert", _0x4065a9);
        if (_0x2761a2) {
          _0x18a72c = setTimeout(() => {
            _0x229866.ev.off("messages.upsert", _0x4065a9);
            _0x4980a1(new Error("Timeout"));
          }, _0x2761a2);
        }
      });
    };
    return _0x229866;
  }
  let _0xa9129a = require.resolve(__filename);
  fs.watchFile(_0xa9129a, () => {
    fs.unwatchFile(_0xa9129a);
    console.log("mise à jour " + __filename);
    delete require.cache[_0xa9129a];
    require(_0xa9129a);
  });
  _0x47ba04();
}, 5000);
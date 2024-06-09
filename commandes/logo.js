const {
  zokou
} = require("../framework/zokou");
var mumaker = require("mumaker");
zokou({
  'nomCom': "hacker",
  'categorie': "Logo",
  'reaction': "👨🏿‍💻"
}, async (_0x5a5d8f, _0x4d70eb, _0x1405aa) => {
  const {
    prefixe: _0x1cf0a6,
    arg: _0xa4ea8e,
    ms: _0x2bc415,
    repondre: _0x3cf609
  } = _0x1405aa;
  if (!_0xa4ea8e || _0xa4ea8e == '') {
    _0x3cf609("*__Exemple : * " + _0x1cf0a6 + "MASTER-MD LOGO");
    return;
  }
  try {
    let _0x343280 = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0xa4ea8e);
    _0x3cf609("*processing...*");
    await _0x4d70eb.sendMessage(_0x5a5d8f, {
      'image': {
        'url': _0x343280.image
      },
      'caption': "\t *Logo by MASTER-MD*"
    }, {
      'quoted': _0x2bc415
    });
  } catch (_0x5a363c) {
    _0x3cf609("🥵🥵 " + _0x5a363c);
  }
});
zokou({
  'nomCom': "dragonball",
  'categorie': "Logo",
  'reaction': '🐉'
}, async (_0x57ce2f, _0x514146, _0x3e5fb3) => {
  let {
    arg: _0x55a186,
    repondre: _0x2f6523,
    prefixe: _0x3008b6,
    ms: _0x226314
  } = _0x3e5fb3;
  try {
    const _0x1d388b = "*_EXEMPLE *:  " + _0x3008b6 + "dragonball FranceKing";
    if (_0x55a186 == '' || !_0x55a186) {
      _0x2f6523(_0x1d388b);
      return;
    }
    const _0x5b820d = await mumaker.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", _0x55a186.join(" "));
    await _0x514146.sendMessage(_0x57ce2f, {
      'text': " *\t Traitement en cours ...*"
    }, {
      'quoted': _0x226314
    });
    await _0x514146.sendMessage(_0x57ce2f, {
      'image': {
        'url': _0x5b820d.image
      },
      'caption': " \t *Logo by MASTER-MD*"
    }, {
      'quoted': _0x226314
    });
  } catch (_0xe92475) {
    _0x2f6523("🥵🥵 " + _0xe92475);
  }
});
zokou({
  'nomCom': "naruto",
  'categorie': "Logo",
  'reaction': '⛩'
}, async (_0x4233ac, _0x183a53, _0x127efd) => {
  let {
    ms: _0x22f7c9,
    arg: _0x106683,
    repondre: _0x2cb7ad,
    prefixe: _0x26aa38
  } = _0x127efd;
  try {
    if (!_0x106683 || _0x106683 == '') {
      _0x2cb7ad("*_Exemple : * " + _0x26aa38 + "naruto *MASTER-MD*");
      return;
    }
    _0x2cb7ad("*traitement en cours...*");
    var _0x38e2c1 = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", _0x106683.join(" "));
    await _0x183a53.sendMessage(_0x4233ac, {
      'image': {
        'url': _0x38e2c1.image
      },
      'caption': "\t *Logo by MASTER-MD*"
    }, {
      'quoted': _0x22f7c9
    });
  } catch (_0x1a1837) {
    _0x2cb7ad("🥵🥵 " + _0x1a1837);
  }
});
zokou({
  'nomCom': "didong",
  'categorie': "Logo",
  'reaction': '📱'
}, async (_0x3e8ccb, _0x3dd757, _0x1c5809) => {
  try {
    if (!_0x40e0bc || _0x40e0bc == '') {
      _0x4ecfbe("*exemple :* " + _0x5e30df + "didong *MASTER-MD*");
      return;
    }
    var _0x2a4297 = await mumaker.ephoto("https://ephoto360.com/tao-anh-che-vui-tu-choi-cuoc-goi-voi-ten-cua-ban-930.html", _0x40e0bc.join(" "));
    _0x4ecfbe("*processing...*");
    await _0x3dd757.sendMessage(_0x3e8ccb, {
      'image': {
        'url': _0x2a4297.image
      },
      'caption': "\t *Logo by MASTER-MD*"
    });
  } catch (_0x52df0d) {
    _0x4ecfbe("🥵🥵 " + _0x52df0d);
  }
});
zokou({
  'nomCom': "wall",
  'categorie': "Logo",
  'reaction': '👍'
}, async (_0x4dcf33, _0x4da13b, _0x22b33f) => {
  const {
    arg: _0x596b13,
    repondre: _0x9173a8,
    ms: _0x2da904,
    prefixe: _0x35d890
  } = _0x22b33f;
  if (!_0x596b13[0]) {
    _0x9173a8("Exemple of using commande:\n " + _0x35d890 + "wall *MASTER-MD*");
    return;
  }
  let _0x52cd5c = _0x596b13.join(" ");
  mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", _0x52cd5c).then(_0x348c2a => {
    _0x4da13b.sendMessage(_0x4dcf33, {
      'image': {
        'url': _0x348c2a.image
      },
      'caption': "Logo by *MASTER-MD*"
    }, {
      'quoted': _0x2da904
    });
  })["catch"](console.log);
});
zokou({
  'nomCom': "summer",
  'categorie': "Logo",
  'reaction': '🌞'
}, async (_0x36875c, _0x46a390, _0x5607fc) => {
  const {
    arg: _0x5a0495,
    repondre: _0x3b3453,
    ms: _0x5ccc4f,
    prefixe: _0x15dcde
  } = _0x5607fc;
  if (!_0x5a0495[0]) {
    _0x3b3453("Exemple of using commande:\n " + _0x15dcde + "summer My text");
    return;
  }
  const _0x24bf81 = _0x5a0495.join(" ");
  mumaker.textpro("https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html", _0x24bf81).then(_0x2e9891 => {
    _0x46a390.sendMessage(_0x36875c, {
      'image': {
        'url': _0x2e9891.image
      },
      'caption': "Logo by *premium MASTER-MD*"
    }, {
      'quoted': _0x5ccc4f
    });
  })["catch"](console.error);
});
zokou({
  'nomCom': "neonlight",
  'categorie': "Logo",
  'reaction': '💡'
}, async (_0x424455, _0x5d5df2, _0x28fc7a) => {
  const {
    arg: _0x42550f,
    repondre: _0x5bd7e3,
    ms: _0x2f301f,
    prefixe: _0x4e4e0e
  } = _0x28fc7a;
  if (!_0x42550f || _0x42550f == '') {
    _0x5bd7e3("Exemple of using commande:\n " + _0x4e4e0e + "neonlight My text");
    return;
  }
  try {
    let _0x2bd2bc = await mumaker.textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", _0x42550f);
    _0x5d5df2.sendMessage(_0x424455, {
      'image': {
        'url': _0x2bd2bc.image
      },
      'caption': "Logo by *MASTER-MD*"
    }, {
      'quoted': _0x2f301f
    });
  } catch (_0x5ba3e4) {
    _0x5bd7e3("🥵🥵 " + _0x5ba3e4);
  }
});
zokou({
  'nomCom': "greenneon",
  'categorie': "Logo",
  'reaction': '🟢'
}, async (_0x377eda, _0x291f23, _0x4e4df5) => {
  const {
    arg: _0x4c05a3,
    repondre: _0x1f9bad,
    ms: _0x3f8e39,
    prefixe: _0x21fdbf
  } = _0x4e4df5;
  if (!_0x4c05a3[0]) {
    _0x1f9bad("Exemple of using commande:\n " + _0x21fdbf + "greenneon My text");
    return;
  }
  const _0x3f8360 = _0x4c05a3.join(" ");
  mumaker.textpro("https://textpro.me/green-neon-text-effect-874.html", _0x3f8360).then(_0x361729 => {
    _0x291f23.sendMessage(_0x377eda, {
      'image': {
        'url': _0x361729.image
      },
      'caption': "Logo by *MASTER-MD*"
    }, {
      'quoted': _0x3f8e39
    });
  })["catch"](console.error);
});
zokou({
  'nomCom': "glitch",
  'categorie': "Logo",
  'reaction': "🎛️"
}, async (_0xa464c5, _0x340c4f, _0x3b9012) => {
  const {
    arg: _0x58f4a4,
    repondre: _0x5eacc3,
    ms: _0x1fb9eb,
    prefixe: _0x1e46c3
  } = _0x3b9012;
  if (!_0x58f4a4[0]) {
    _0x5eacc3("Exemple of using commande:\n " + _0x1e46c3 + "glitch My text");
    return;
  }
  const _0x3b54a7 = _0x58f4a4.join(" ");
  mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", _0x3b54a7).then(_0x329b71 => {
    _0x340c4f.sendMessage(_0xa464c5, {
      'image': {
        'url': _0x329b71.image
      },
      'caption': "Logo by *Sahan-MD*"
    }, {
      'quoted': _0x1fb9eb
    });
  })["catch"](console.error);
});
zokou({
  'nomCom': "devil",
  'categorie': "Logo",
  'reaction': '😈'
}, async (_0x392da8, _0x3c66f8, _0xc7aa66) => {
  const {
    arg: _0x546b02,
    repondre: _0x273be1,
    ms: _0x3279a1,
    prefixe: _0x25c0e0
  } = _0xc7aa66;
  if (!_0x546b02[0]) {
    _0x273be1("Exemple of using commande:\n " + _0x25c0e0 + "devil My text");
    return;
  }
  mumaker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", _0x546b02).then(_0x562307 => {
    _0x3c66f8.sendMessage(_0x392da8, {
      'image': {
        'url': _0x562307.image
      },
      'caption': "Logo by *MASTER-MD*"
    }, {
      'quoted': _0x3279a1
    });
  })["catch"](console.error);
});
zokou({
  'nomCom': "boom",
  'categorie': "Logo",
  'reaction': '💥'
}, async (_0xcb9bf6, _0x5f3268, _0x253d3d) => {
  if (!_0x5763f2 || _0x5763f2 == '') {
    _0x40eec3("  Exemple :* " + _0x58fea0 + "boom *MASTER-MD*");
    return;
  }
  try {
    console.log(_0x5763f2);
    var _0x3b47e5 = await mumaker.ephoto("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", _0x5763f2);
    _0x40eec3("  processing ...");
    await _0x5f3268.sendMessage(_0xcb9bf6, {
      'image': {
        'url': _0x3b47e5.image
      },
      'caption': "\t *Logo by *MASTER-MD*"
    });
  } catch (_0xdebf6a) {
    _0x40eec3("🥵🥵 " + _0xdebf6a);
  }
});
zokou({
  'nomCom': "water",
  'categorie': "Logo",
  'reation': '💦'
}, async (_0x5559f9, _0x59e58d, _0x30e6cd) => {
  if (!_0x5f4e45 || _0x5f4e45 == '') {
    _0x4f6e68(_0x198e58 + "water zokou");
    return;
  }
  try {
    var _0x4cc1b0 = await mumaker.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", _0x5f4e45);
    _0x4f6e68(" processing ...");
    await _0x59e58d.sendMessage(_0x5559f9, {
      'image': {
        'url': _0x4cc1b0.image
      },
      'caption': "  *Logo by *MASTER-MD*"
    });
  } catch (_0x28fe4c) {
    _0x4f6e68("🥵🥵 " + _0x28fe4c);
  }
});
zokou({
  'nomCom': "snow",
  'categorie': "Logo",
  'reaction': '❄️'
}, async (_0x5e6021, _0x3a2a6a, _0x506bfc) => {
  const {
    arg: _0x161aae,
    ms: _0xab509d,
    prefixe: _0x1fdf74,
    repondre: _0x27bd4b
  } = _0x506bfc;
  if (!_0x161aae[0]) {
    _0x27bd4b("Exemple of using commande:\n " + _0x1fdf74 + "Snow My text");
    return;
  }
  const _0x1d6897 = _0x161aae.join(" ");
  mumaker.textpro("https://textpro.me/create-beautiful-3d-snow-text-effect-online-1101.html", _0x1d6897).then(_0xa2d08b => {
    _0x3a2a6a.sendMessage(_0x5e6021, {
      'image': {
        'url': _0xa2d08b.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0xab509d
    });
  })["catch"](_0x486173 => {
    console.error("Une erreur s'est produite :", _0x486173);
  });
});
zokou({
  'nomCom': "transformer",
  'categorie': "Logo",
  'reaction': '🤖'
}, async (_0x1438c9, _0x2f7e42, _0x237f19) => {
  const {
    arg: _0xfb2511,
    ms: _0x229b86,
    prefixe: _0x3ab135,
    repondre: _0x1d4d3e
  } = _0x237f19;
  if (!_0xfb2511[0]) {
    _0x1d4d3e("Exemple of using commande:\n " + _0x3ab135 + "Transformer My text");
    return;
  }
  const _0x37fcc4 = _0xfb2511.join(" ");
  mumaker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", _0x37fcc4).then(_0x31dd56 => {
    _0x2f7e42.sendMessage(_0x1438c9, {
      'image': {
        'url': _0x31dd56.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0x229b86
    });
  })["catch"](_0x1c5a10 => {
    console.error("Une erreur s'est produite :", _0x1c5a10);
  });
});
zokou({
  'nomCom': "thunder",
  'categorie': "Logo",
  'reaction': '⚡'
}, async (_0x37fdf0, _0x4a658e, _0x4ed36a) => {
  const {
    arg: _0x410756,
    ms: _0x848c3f,
    prefixe: _0x144225,
    repondre: _0x2a614a
  } = _0x4ed36a;
  if (!_0x410756[0]) {
    _0x2a614a("Exemple of using commande:\n " + _0x144225 + "Thunder My text");
    return;
  }
  const _0x53ed39 = _0x410756.join(" ");
  mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", _0x53ed39).then(_0x19f323 => {
    _0x4a658e.sendMessage(_0x37fdf0, {
      'image': {
        'url': _0x19f323.image
      },
      'caption': "Logo by *MASTER-MD*"
    }, {
      'quoted': _0x848c3f
    });
  })["catch"](_0x54fc89 => {
    console.error("Une erreur s'est produite :", _0x54fc89);
  });
});
zokou({
  'nomCom': "harrypotter",
  'categorie': "Logo",
  'reaction': "🧙‍♂️"
}, async (_0x1f427a, _0x5609b9, _0x219684) => {
  const {
    arg: _0x565027,
    ms: _0x57cff0,
    prefixe: _0x369149,
    repondre: _0x4e352a
  } = _0x219684;
  if (!_0x565027[0]) {
    _0x4e352a("Exemple of using commande:\n " + _0x369149 + "HarryPotter My text");
    return;
  }
  const _0x4a105c = _0x565027.join(" ");
  mumaker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", _0x4a105c).then(_0x2637f6 => {
    _0x5609b9.sendMessage(_0x1f427a, {
      'image': {
        'url': _0x2637f6.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0x57cff0
    });
  })["catch"](_0x461059 => {
    console.error("Une erreur s'est produite :", _0x461059);
  });
});
zokou({
  'nomCom': "cat",
  'categorie': "Logo",
  'reaction': '🪟'
}, async (_0x3dc2b2, _0x3e8108, _0x5d8a0d) => {
  const {
    arg: _0x3e76b6,
    ms: _0x413c8c,
    prefixe: _0x2f7d32
  } = _0x5d8a0d;
  if (!_0x3e76b6[0]) {
    repondre("Exemple of using commande:\n " + _0x2f7d32 + "FoggyWindow My text");
    return;
  }
  const _0x3274e6 = _0x3e76b6.join(" ");
  mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", _0x3274e6).then(_0x2ff505 => {
    _0x3e8108.sendMessage(_0x3dc2b2, {
      'image': {
        'url': _0x2ff505.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0x413c8c
    });
  })["catch"](_0x443cf3 => {
    console.error("Une erreur s'est produite :", _0x443cf3);
  });
});
zokou({
  'nomCom': "whitegold",
  'categorie': "Logo",
  'reaction': '💫'
}, async (_0x2a759e, _0x20bea0, _0x4261e2) => {
  const {
    arg: _0x5526ba,
    ms: _0xeb8de5,
    prefixe: _0xf553ce,
    repondre: _0x15ae45
  } = _0x4261e2;
  if (!_0x5526ba[0]) {
    _0x15ae45("Exemple of using commande:\n " + _0xf553ce + "WhiteGold My text");
    return;
  }
  const _0x1ab0ac = _0x5526ba.join(" ");
  mumaker.textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", _0x1ab0ac).then(_0x3d2cf3 => {
    _0x20bea0.sendMessage(_0x2a759e, {
      'image': {
        'url': _0x3d2cf3.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0xeb8de5
    });
  })["catch"](_0x4575d5 => {
    console.error("Une erreur s'est produite :", _0x4575d5);
  });
});
zokou({
  'nomCom': "lightglow",
  'categorie': "Logo",
  'reaction': '🌟'
}, async (_0x33d7b1, _0x1765a3, _0x41b937) => {
  const {
    arg: _0x5584f0,
    ms: _0x493eb7,
    prefixe: _0x4c9daa,
    repondre: _0x2d6594
  } = _0x41b937;
  if (!_0x5584f0[0]) {
    _0x2d6594("Exemple of using commande:\n " + _0x4c9daa + "LightGlow My text");
    return;
  }
  const _0x527a6c = _0x5584f0.join(" ");
  mumaker.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", _0x527a6c).then(_0x1172a0 => {
    _0x1765a3.sendMessage(_0x33d7b1, {
      'image': {
        'url': _0x1172a0.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0x493eb7
    });
  })["catch"](_0x1ce5e7 => {
    console.error("Une erreur s'est produite :", _0x1ce5e7);
  });
});
zokou({
  'nomCom': "thor",
  'categorie': "Logo",
  'reaction': '🔨'
}, async (_0x4014d6, _0x22e576, _0x4ada94) => {
  const {
    arg: _0x54bc68,
    ms: _0x40d1f4,
    prefixe: _0x59979e,
    repondre: _0x7bd1c
  } = _0x4ada94;
  if (!_0x54bc68[0]) {
    _0x7bd1c("Exemple of using commande:\n " + _0x59979e + "Thor My text");
    return;
  }
  const _0x1afc21 = _0x54bc68.join(" ");
  mumaker.textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", _0x1afc21).then(_0x3be2a0 => {
    _0x22e576.sendMessage(_0x4014d6, {
      'image': {
        'url': _0x3be2a0.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0x40d1f4
    });
  })["catch"](_0x594b33 => {
    console.error("Une erreur s'est produite :", _0x594b33);
  });
});
zokou({
  'nomCom': "neon",
  'categorie': "Logo",
  'reaction': '💡'
}, async (_0x3473b4, _0x114aa5, _0x22b424) => {
  const {
    arg: _0x49746a,
    ms: _0x276f60,
    prefixe: _0x355386,
    repondre: _0x126141
  } = _0x22b424;
  if (!_0x49746a[0]) {
    _0x126141("Exemple of using commande:\n " + _0x355386 + "Neon My text");
    return;
  }
  const _0x4ccba3 = _0x49746a.join(" ");
  mumaker.textpro("https://textpro.me/neon-text-effect-online-879.html", _0x4ccba3).then(_0x80b53e => {
    _0x114aa5.sendMessage(_0x3473b4, {
      'image': {
        'url': _0x80b53e.image
      },
      'caption': "Logo BY *Sahan-MD*"
    }, {
      'quoted': _0x276f60
    });
  })["catch"](_0x5b52e5 => {
    console.error("Une erreur s'est produite :", _0x5b52e5);
  });
});
zokou({
  'nomCom': "purple",
  'categorie': "Logo",
  'reaction': '🧳'
}, async (_0x23b00f, _0xfb7d31, _0x41678a) => {
  try {
    if (!_0x4a96b3 || _0x4a96b3 == '') {
      _0xc2c886(_0x56f873 + "purple sahan");
      return;
    }
    var _0x560543 = await mumaker.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", _0x4a96b3);
    _0xc2c886(" processing ...");
    await _0xfb7d31.sendMessage(_0x23b00f, {
      'image': {
        'url': _0x560543.image
      },
      'caption': "*Logo by Sahan-MD*"
    });
  } catch (_0x242f49) {
    _0xc2c886(_0x242f49);
  }
});
zokou({
  'nomCom': "gold",
  'categorie': "Logo",
  'reaction': "🧚🏿‍♀️"
}, async (_0x390396, _0x386877, _0x3ed13d) => {
  let {
    ms: _0x4967ea,
    arg: _0xd425c4,
    prefixe: _0x504437,
    repondre: _0x1c61c8
  } = _0x3ed13d;
  try {
    if (!_0xd425c4 || _0xd425c4 == '') {
      _0x1c61c8(_0x504437 + "gold Sahan-MD");
      return;
    }
    var _0x12e5d2 = await mumaker.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", _0xd425c4);
    _0x1c61c8("processing ...");
    await _0x386877.sendMessage(_0x390396, {
      'image': {
        'url': _0x12e5d2.image
      },
      'caption': " *Logo by Sahan-MD*"
    }, {
      'quoted': _0x4967ea
    });
  } catch (_0x47d9d2) {
    _0x1c61c8(_0x47d9d2);
  }
});
zokou({
  'nomCom': "arena",
  'categorie': "Logo",
  'reaction': '🥵'
}, async (_0x432cec, _0x52ad7b, _0x489e72) => {
  let {
    ms: _0x58e8bd,
    arg: _0x19f6c0,
    prefixe: _0x633de4,
    repondre: _0xc75eef
  } = _0x489e72;
  try {
    if (!_0x19f6c0 || _0x19f6c0 == '') {
      _0xc75eef(_0x633de4 + "arena *MASTER-MD*");
      return;
    }
    var _0x462884 = await mumaker.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x19f6c0.join(" "));
    _0xc75eef("processing ...");
    await _0x52ad7b.sendMessage(_0x432cec, {
      'image': {
        'url': _0x462884.image
      },
      'caption': " *Logo by *MASTER-MD*"
    }, {
      'quoted': _0x58e8bd
    });
  } catch (_0x4763bc) {
    _0xc75eef(_0x4763bc);
  }
});
zokou({
  'nomCom': "incandescent",
  'categorie': "Logo",
  'reaction': '😋'
}, async (_0x1d36be, _0x196c3e, _0x41e58b) => {
  let {
    ms: _0x3971f0,
    arg: _0x568104,
    prefixe: _0x29df0e,
    repondre: _0x1cb162
  } = _0x41e58b;
  try {
    if (!_0x568104 || _0x568104 == '') {
      _0x1cb162(_0x29df0e + "incandescent *MASTER-MD*");
      return;
    }
    var _0x28bb3c = await mumaker.ephoto("https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html", _0x568104.join(" "));
    _0x1cb162("processing ...");
    await _0x196c3e.sendMessage(_0x1d36be, {
      'image': {
        'url': _0x28bb3c.image
      },
      'caption': " *Logo by *MASTER-MD*"
    }, {
      'quoted': _0x3971f0
    });
  } catch (_0x292e16) {
    _0x1cb162(_0x292e16);
  }
});
zokou({
  'nomCom': "child",
  'categorie': "Logo",
  'reaction': '😇'
}, async (_0x232bfd, _0x4d8792, _0x371227) => {
  let {
    ms: _0x391193,
    arg: _0x5e15a9,
    prefixe: _0x556d64,
    repondre: _0x36f2be
  } = _0x371227;
  try {
    if (!_0x5e15a9 || _0x5e15a9 == '') {
      _0x36f2be(_0x556d64 + "child *MASTER-MD*");
      return;
    }
    var _0x5ef0a9 = await mumaker.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0x5e15a9.join(" "));
    _0x36f2be("processing ...");
    await _0x4d8792.sendMessage(_0x232bfd, {
      'image': {
        'url': _0x5ef0a9.image
      },
      'caption': " *Logo by *MASTER-MD*"
    }, {
      'quoted': _0x391193
    });
  } catch (_0x15dd43) {
    _0x36f2be(_0x15dd43);
  }
});
zokou({
  'nomCom': "typo",
  'categorie': "Logo",
  'reaction': '😇'
}, async (_0x3b1e79, _0x124030, _0x2ecaf6) => {
  let {
    ms: _0x3a47a0,
    arg: _0x14633c,
    prefixe: _0xf38131,
    repondre: _0x50af08
  } = _0x2ecaf6;
  try {
    if (!_0x14633c || _0x14633c == '') {
      _0x50af08(_0xf38131 + "typo *MASTER-MD*");
      return;
    }
    var _0x39d74d = await mumaker.ephoto("https://en.ephoto360.com/typography-text-effect-on-pavement-online-774.html", _0x14633c.join(" "));
    _0x50af08("processing ...");
    await _0x124030.sendMessage(_0x3b1e79, {
      'image': {
        'url': _0x39d74d.image
      },
      'caption': " *Logo by *MASTER-MD*"
    }, {
      'quoted': _0x3a47a0
    });
  } catch (_0x5b8977) {
    _0x50af08(_0x5b8977);
  }
});
zokou({
  'nomCom': "light",
  'categorie': "Logo",
  'reaction': '🌠'
}, async (_0x563190, _0x493f42, _0x22f1e6) => {
  let {
    ms: _0x2ff547,
    arg: _0x16cb7c,
    prefixe: _0x49f685,
    repondre: _0x46b07c
  } = _0x22f1e6;
  try {
    if (!_0x16cb7c || _0x16cb7c == '') {
      _0x46b07c(_0x49f685 + "light *MASTER-MD*");
      return;
    }
    var _0xdb9149 = await mumaker.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", _0x16cb7c.join(" "));
    _0x46b07c("processing ...");
    await _0x493f42.sendMessage(_0x563190, {
      'image': {
        'url': _0xdb9149.image
      },
      'caption': " *Logo by *MASTER-MD*"
    }, {
      'quoted': _0x2ff547
    });
  } catch (_0x1c4e4e) {
    _0x46b07c(_0x1c4e4e);
  }
});
zokou({
  'nomCom': "steel",
  'categorie': "Logo",
  'reaction': '🌠'
}, async (_0x244295, _0x36a8d9, _0x1df546) => {
  let {
    ms: _0x439569,
    arg: _0x785cca,
    prefixe: _0x4bfd2d,
    repondre: _0x334d6f
  } = _0x1df546;
  try {
    if (!_0x785cca || _0x785cca == '') {
      _0x334d6f(_0x4bfd2d + "steel *MASTER-MD*");
      return;
    }
    var _0x53d45b = await mumaker.ephoto("https://en.ephoto360.com/dragon-steel-text-effect-online-347.html", _0x785cca.join(" "));
    _0x334d6f("processing ...");
    await _0x36a8d9.sendMessage(_0x244295, {
      'image': {
        'url': _0x53d45b.image
      },
      'caption': " *Logo by *MASTER-MD*"
    }, {
      'quoted': _0x439569
    });
  } catch (_0x4e76b3) {
    _0x334d6f(_0x4e76b3);
  }
});
zokou({
  'nomCom': "sunlight",
  'categorie': "Logo",
  'reaction': '🌠'
}, async (_0x41826c, _0x4c8d77, _0x11232f) => {
  let {
    ms: _0x25ad01,
    arg: _0x1fc9b5,
    prefixe: _0x34a604,
    repondre: _0x1e2d57
  } = _0x11232f;
  try {
    if (!_0x1fc9b5 || _0x1fc9b5 == '') {
      _0x1e2d57(_0x34a604 + "sunlight *MASTER-MD*");
      return;
    }
    var _0x3646fe = await mumaker.ephoto("https://en.ephoto360.com/sunlight-shadow-text-204.html", _0x1fc9b5.join(" "));
    _0x1e2d57("processing ...");
    await _0x4c8d77.sendMessage(_0x41826c, {
      'image': {
        'url': _0x3646fe.image
      },
      'caption': " *Logo by *MASTER-MD*"
    }, {
      'quoted': _0x25ad01
    });
  } catch (_0x568496) {
    _0x1e2d57(_0x568496);
  }
});
zokou({
  'nomCom': "scifi",
  'categorie': "Logo",
  'reaction': '💥'
}, async (_0x220259, _0x23de55, _0x1caa99) => {
  const {
    arg: _0xb834b6,
    ms: _0x217f0e,
    prefixe: _0x57df2e,
    repondre: _0x1e03d5
  } = _0x1caa99;
  if (!_0xb834b6[0]) {
    _0x1e03d5("Example of using command:\n " + _0x57df2e + "scifi My text");
    return;
  }
  const _0x25f5fa = _0xb834b6.join(" ");
  mumaker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", _0x25f5fa).then(_0x2933c7 => {
    _0x23de55.sendMessage(_0x220259, {
      'image': {
        'url': _0x2933c7.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0x217f0e
    });
  })["catch"](_0xf08e41 => {
    console.error("Une erreur s'est produite :", _0xf08e41);
  });
});
zokou({
  'nomCom': "magma",
  'categorie': "Logo",
  'reaction': '♨️'
}, async (_0x17a335, _0x48b817, _0x5ab549) => {
  const {
    arg: _0x58cd00,
    ms: _0x418321,
    prefixe: _0x4b6cb6,
    repondre: _0x3fd8f0
  } = _0x5ab549;
  if (!_0x58cd00[0]) {
    _0x3fd8f0("Example of using command:\n " + _0x4b6cb6 + "magma My text");
    return;
  }
  const _0x2e1c7f = _0x58cd00.join(" ");
  mumaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", _0x2e1c7f).then(_0x157557 => {
    _0x48b817.sendMessage(_0x17a335, {
      'image': {
        'url': _0x157557.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0x418321
    });
  })["catch"](_0x35bc8c => {
    console.error("Une erreur s'est produite :", _0x35bc8c);
  });
});
zokou({
  'nomCom': "leaves",
  'categorie': "Logo",
  'reaction': '☘️'
}, async (_0x531ef1, _0x134f12, _0x481975) => {
  const {
    arg: _0x102b24,
    ms: _0x57980d,
    prefixe: _0x1f3f21,
    repondre: _0xab2dcf
  } = _0x481975;
  if (!_0x102b24[0]) {
    _0xab2dcf("Example of using command:\n " + _0x1f3f21 + "leaves My text");
    return;
  }
  const _0x1b035c = _0x102b24.join(" ");
  mumaker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", _0x1b035c).then(_0x10ecdc => {
    _0x134f12.sendMessage(_0x531ef1, {
      'image': {
        'url': _0x10ecdc.image
      },
      'caption': "Logo BY *MASTER-MD*"
    }, {
      'quoted': _0x57980d
    });
  })["catch"](_0x271527 => {
    console.error("Une erreur s'est produite :", _0x271527);
  });
});
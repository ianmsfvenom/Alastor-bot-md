const _0x38ae22=_0x407d;(function(_0x3098f6,_0x259586){const _0x50fb54=_0x407d,_0x296d27=_0x3098f6();while(!![]){try{const _0x17ef6d=-parseInt(_0x50fb54(0xe5))/0x1+parseInt(_0x50fb54(0xcf))/0x2+parseInt(_0x50fb54(0xe3))/0x3+-parseInt(_0x50fb54(0xee))/0x4*(parseInt(_0x50fb54(0xdb))/0x5)+parseInt(_0x50fb54(0xd6))/0x6*(-parseInt(_0x50fb54(0xf6))/0x7)+-parseInt(_0x50fb54(0xf4))/0x8*(parseInt(_0x50fb54(0xf3))/0x9)+parseInt(_0x50fb54(0xf1))/0xa;if(_0x17ef6d===_0x259586)break;else _0x296d27['push'](_0x296d27['shift']());}catch(_0xa47f8b){_0x296d27['push'](_0x296d27['shift']());}}}(_0x165d,0x82bc0));const readline=require(_0x38ae22(0xd5)),fs=require(_0x38ae22(0xd3)),extract=require(_0x38ae22(0xf7)),chalk=require(_0x38ae22(0xe6)),axios=require('axios'),getBuffer=async(_0x337cba,_0x5dacd6)=>{const _0x551ce0=_0x38ae22;try{_0x5dacd6?_0x5dacd6:{};const _0x2731e6=await axios({'method':'get','url':_0x337cba,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x5dacd6,'responseType':_0x551ce0(0xe4)});return _0x2731e6['data'];}catch(_0x1250e7){console[_0x551ce0(0xeb)](_0x551ce0(0xce)+_0x1250e7);}},rl=readline['createInterface']({'input':process[_0x38ae22(0xe9)],'output':process['stdout']});function _0x407d(_0x50a7a3,_0x10c112){const _0x165dc4=_0x165d();return _0x407d=function(_0x407da1,_0x283ffb){_0x407da1=_0x407da1-0xce;let _0x1096c0=_0x165dc4[_0x407da1];return _0x1096c0;},_0x407d(_0x50a7a3,_0x10c112);}function _0x165d(){const _0x5e0b8b=['writeFileSync','AlastorBot.zip','Alastor\x20bot\x20atualizado\x20com\x20sucesso!','./Alastor-bot-md-main','rmdirSync','Escolha\x20de\x20que\x20forma\x20deseja\x20atualizar:\x0a1-\x20Manter\x20o\x20banco\x20de\x20dados\x0a2-\x20Limpar\x20dados\x0a3-\x20Sair\x0a\x0a','clear','340236yNTDJh','arraybuffer','920178XZjdzC','chalk','exit','unlinkSync','stdin','red','log','question','./src','908bPpTTX','readdirSync','green','33885550hOeiIu','./backup','18qeWeSm','3297144BsbAWp','Mensagem\x20inválida','77NszjTG','extract-zip','./backup/src','copySync','Error\x20:\x20','1462568kSKlbJ','mkdirSync','existsSync','./Alastor-bot-md-main/','fs-extra','./backup/src/','readline','540942uENfVQ','yellow','bold','forEach','./AlastorBot.zip','21180jaIuIc'];_0x165d=function(){return _0x5e0b8b;};return _0x165d();}console[_0x38ae22(0xe2)](),rl[_0x38ae22(0xec)](chalk[_0x38ae22(0xd7)][_0x38ae22(0xd8)](_0x38ae22(0xe1)),async _0x58f327=>{const _0x31983e=_0x38ae22;if(isNaN(_0x58f327))return console[_0x31983e(0xeb)](chalk[_0x31983e(0xea)][_0x31983e(0xd8)](_0x31983e(0xf5)));if(_0x58f327==0x3)process['exit']();if(_0x58f327==0x2){var _0x5aef7f=await getBuffer('https://github.com/ianmsfvenom/Alastor-bot-md/archive/refs/heads/main.zip');fs[_0x31983e(0xdc)](_0x31983e(0xda),_0x5aef7f),await extract(_0x31983e(0xdd),{'dir':__dirname});const _0x4dba43=await fs[_0x31983e(0xef)]('./Alastor-bot-md-main');_0x4dba43['forEach'](async(_0x551c9b,_0x5241b6)=>{const _0x166275=_0x31983e;fs['moveSync'](_0x166275(0xd2)+_0x551c9b,'./'+_0x551c9b,{'overwrite':!![]});}),fs[_0x31983e(0xe0)](_0x31983e(0xdf),{'recursive':!![]}),fs[_0x31983e(0xe8)](_0x31983e(0xda)),console[_0x31983e(0xeb)](chalk[_0x31983e(0xf0)][_0x31983e(0xd8)]('Alastor\x20bot\x20atualizado\x20com\x20sucesso!')),process[_0x31983e(0xe7)]();}else{if(_0x58f327==0x1){var _0x5aef7f=await getBuffer('https://github.com/ianmsfvenom/Alastor-bot-md/archive/refs/heads/main.zip');fs[_0x31983e(0xdc)](_0x31983e(0xda),_0x5aef7f),await extract(_0x31983e(0xdd),{'dir':__dirname});if(!fs['existsSync'](_0x31983e(0xf2)))fs[_0x31983e(0xd0)]('./backup');if(fs[_0x31983e(0xd1)](_0x31983e(0xed)))await fs['copySync'](_0x31983e(0xed),_0x31983e(0xf8),{'overwrite':!![]});const _0x25cc2c=await fs[_0x31983e(0xef)]('./Alastor-bot-md-main');await _0x25cc2c[_0x31983e(0xd9)](async(_0xb13e54,_0x3a03b3)=>{const _0x1e54f5=_0x31983e;fs[_0x1e54f5(0xf9)](_0x1e54f5(0xd2)+_0xb13e54,'./'+_0xb13e54,{'overwrite':!![]});}),fs[_0x31983e(0xf9)](_0x31983e(0xd4),_0x31983e(0xed),{'overwrite':!![]}),fs[_0x31983e(0xe0)](_0x31983e(0xdf),{'recursive':!![]}),fs[_0x31983e(0xe8)](_0x31983e(0xda)),console[_0x31983e(0xeb)](chalk[_0x31983e(0xf0)][_0x31983e(0xd8)](_0x31983e(0xde))),process[_0x31983e(0xe7)]();}else console[_0x31983e(0xeb)](chalk[_0x31983e(0xea)][_0x31983e(0xd8)]('Escolha\x20uma\x20opção\x20válida')),process['exit']();}});
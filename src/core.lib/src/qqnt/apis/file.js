function _0x3cdf(){const _0x23561d=['25036SzCvuo','getFileType','service','removeKernelMsgListener','下载超时','1144215VNxxyu','downloadMedia','basename','7jzybpD','kkPxs','filePath','getImageSize','kernelService','getFileSize','3148158NjznOp','msg','defaultFileDownloadPath','1008493ZsAyKt','190vGvvwJ','indexOf','wrapper','801qjqwfL','ext','IrTcj','3408rGfltg','uKkSo','msgId','downloadRichMedia','uploadFile','util','35230fzvyYc','1565960JZDcFH','qRxUy','79475GecnLI','PIC','copyFile','2hTfBpN','getRichMediaFilePathForGuild','NELej','lOIcS','fileTypeFromFile'];_0x3cdf=function(){return _0x23561d;};return _0x3cdf();}const _0x59daf3=_0x5f04;(function(_0xb328e5,_0x164c38){const _0x211b30=_0x5f04,_0x4e8677=_0xb328e5();while(!![]){try{const _0x54093f=parseInt(_0x211b30(0xdd))/0x1+-parseInt(_0x211b30(0xf0))/0x2*(-parseInt(_0x211b30(0xd1))/0x3)+parseInt(_0x211b30(0xf5))/0x4*(parseInt(_0x211b30(0xde))/0x5)+-parseInt(_0x211b30(0xda))/0x6*(-parseInt(_0x211b30(0xd4))/0x7)+parseInt(_0x211b30(0xeb))/0x8+-parseInt(_0x211b30(0xe1))/0x9*(-parseInt(_0x211b30(0xea))/0xa)+parseInt(_0x211b30(0xed))/0xb*(-parseInt(_0x211b30(0xe4))/0xc);if(_0x54093f===_0x164c38)break;else _0x4e8677['push'](_0x4e8677['shift']());}catch(_0x2a56a9){_0x4e8677['push'](_0x4e8677['shift']());}}}(_0x3cdf,0x94e21));import{ElementType}from'@/core/qqnt/entities';import _0x232d54 from'path';import _0x18122d from'fs';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x3a7f86 from'file-type';import{MsgListener}from'@/core/qqnt/listeners';import _0x25df7f from'image-size';function _0x5f04(_0x1a8fa9,_0x57c4b1){const _0x3cdf7d=_0x3cdf();return _0x5f04=function(_0x5f0451,_0x234a2e){_0x5f0451=_0x5f0451-0xce;let _0x52d7d3=_0x3cdf7d[_0x5f0451];return _0x52d7d3;},_0x5f04(_0x1a8fa9,_0x57c4b1);}import{sessionConfig}from'@/core/qqnt/sessionConfig';export class NTQQFileApi{static async['getFileType'](_0x30d2b3){const _0x5cbf7a=_0x5f04;return _0x3a7f86[_0x5cbf7a(0xf4)](_0x30d2b3);}static async[_0x59daf3(0xef)](_0x2c8c3c,_0x4397cc){const _0x38ec26=_0x59daf3;await napCatCore['wrapper'][_0x38ec26(0xe9)][_0x38ec26(0xef)](_0x2c8c3c,_0x4397cc);}static async[_0x59daf3(0xd9)](_0x2d767e){const _0x13ec4f=_0x59daf3;return await napCatCore[_0x13ec4f(0xe0)][_0x13ec4f(0xe9)][_0x13ec4f(0xd9)](_0x2d767e);}static async[_0x59daf3(0xe8)](_0x3ef3f4,_0x456d7a=ElementType[_0x59daf3(0xee)],_0x5482fe=0x0){const _0x472066=_0x59daf3,_0x5b44dc={'OnRww':function(_0x2898aa,_0x31efff){return _0x2898aa(_0x31efff);}},_0x3589e8=await _0x5b44dc['OnRww'](calculateFileMD5,_0x3ef3f4);let _0x3d0fe5=(await NTQQFileApi[_0x472066(0xf6)](_0x3ef3f4))?.[_0x472066(0xe2)]||'';_0x3d0fe5&&(_0x3d0fe5='.'+_0x3d0fe5);let _0x10fce9=''+_0x232d54[_0x472066(0xd3)](_0x3ef3f4);_0x10fce9[_0x472066(0xdf)]('.')===-0x1&&(_0x10fce9+=_0x3d0fe5);const _0x4b4307=napCatCore[_0x472066(0xce)]['msg'][_0x472066(0xd8)][_0x472066(0xf1)]({'md5HexStr':_0x3589e8,'fileName':_0x10fce9,'elementType':_0x456d7a,'elementSubType':_0x5482fe,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi[_0x472066(0xef)](_0x3ef3f4,_0x4b4307);const _0x33d17a=await NTQQFileApi[_0x472066(0xd9)](_0x3ef3f4);return{'md5':_0x3589e8,'fileName':_0x10fce9,'path':_0x4b4307,'fileSize':_0x33d17a,'ext':_0x3d0fe5};}static async[_0x59daf3(0xd2)](_0xc775ee,_0x420c4d,_0x28a611,_0x185f91,_0x3b67d8,_0x3b6178,_0x4e173d=0x3e8*0x3c*0x2){const _0x47f9ea=_0x59daf3,_0x3ade49={'lOIcS':function(_0x410e06,_0x550161){return _0x410e06===_0x550161;},'uKkSo':function(_0x503437,_0x16da29){return _0x503437(_0x16da29);},'kkPxs':function(_0x185744,_0x580483){return _0x185744(_0x580483);},'IrTcj':_0x47f9ea(0xd0)};if(_0x3b6178&&_0x18122d['existsSync'](_0x3b6178))return _0x3b6178;const _0x266d71=new MsgListener();return new Promise((_0x187dd9,_0x210012)=>{const _0x5c2ed6=_0x47f9ea;let _0xc9c7bb=![];_0x266d71['onRichMediaDownloadComplete']=_0x138729=>{const _0x5e21ca=_0x5f04;if(_0x3ade49[_0x5e21ca(0xf3)](_0x138729[_0x5e21ca(0xe6)],_0xc775ee)){_0xc9c7bb=!![];let _0x404745=_0x138729[_0x5e21ca(0xd6)];if(_0x404745['startsWith']('\x5c')){const _0x37807b=sessionConfig?.[_0x5e21ca(0xdc)];_0x404745=_0x232d54['join'](_0x37807b,_0x404745);}_0x3ade49[_0x5e21ca(0xe5)](_0x187dd9,_0x404745),napCatCore['service'][_0x5e21ca(0xdb)]['kernelService']?.[_0x5e21ca(0xcf)](_0x35b8da);}};const _0x35b8da=napCatCore[_0x5c2ed6(0xce)]['msg']['addMsgListener'](_0x266d71);setTimeout(()=>{const _0x361c18=_0x5c2ed6;!_0xc9c7bb&&(_0x3ade49[_0x361c18(0xd5)](_0x210012,new Error(_0x3ade49[_0x361c18(0xe3)])),napCatCore[_0x361c18(0xce)][_0x361c18(0xdb)][_0x361c18(0xd8)]?.[_0x361c18(0xcf)](_0x35b8da));},_0x4e173d),napCatCore[_0x5c2ed6(0xce)]['msg'][_0x5c2ed6(0xd8)]?.[_0x5c2ed6(0xe7)]({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0xc775ee,'chatType':_0x420c4d,'peerUid':_0x28a611,'elementId':_0x185f91,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x3b67d8});});}static async[_0x59daf3(0xd7)](_0x19cb6a){const _0x459677={'NELej':function(_0x2865f8,_0x5679b0){return _0x2865f8(_0x5679b0);},'qRxUy':function(_0x2cf716,_0x867234,_0x57a85d){return _0x2cf716(_0x867234,_0x57a85d);}};return new Promise((_0x2e131f,_0x3c53f5)=>{const _0x11c006=_0x5f04;_0x459677[_0x11c006(0xec)](_0x25df7f,_0x19cb6a,(_0x2edc41,_0x1be064)=>{const _0x24d739=_0x11c006;_0x2edc41?_0x459677[_0x24d739(0xf2)](_0x3c53f5,_0x2edc41):_0x459677[_0x24d739(0xf2)](_0x2e131f,_0x1be064);});});}}
const _0x528df8=_0x3f96;(function(_0x127b5b,_0x1359b0){const _0x103384=_0x3f96,_0x17df46=_0x127b5b();while(!![]){try{const _0x4289eb=parseInt(_0x103384(0x114))/0x1+-parseInt(_0x103384(0x11a))/0x2+parseInt(_0x103384(0xf8))/0x3*(parseInt(_0x103384(0xab))/0x4)+-parseInt(_0x103384(0x119))/0x5*(parseInt(_0x103384(0x8c))/0x6)+parseInt(_0x103384(0x93))/0x7*(-parseInt(_0x103384(0x109))/0x8)+parseInt(_0x103384(0xde))/0x9*(parseInt(_0x103384(0xac))/0xa)+parseInt(_0x103384(0x9a))/0xb;if(_0x4289eb===_0x1359b0)break;else _0x17df46['push'](_0x17df46['shift']());}catch(_0x41e2c0){_0x17df46['push'](_0x17df46['shift']());}}}(_0xa852,0xcb9ec));function _0x3f96(_0x3fdece,_0x1fd3dd){const _0xa8520b=_0xa852();return _0x3f96=function(_0x3f96c6,_0x5b2bf9){_0x3f96c6=_0x3f96c6-0x7f;let _0x570daa=_0xa8520b[_0x3f96c6];return _0x570daa;},_0x3f96(_0x3fdece,_0x1fd3dd);}function _0xa852(){const _0x47124c=['PERFROMER','176553eEDwNt','rZQag','tCJdc','获取龙王信息失败','JzxkD','20fUCpIA','3259330YbWlGE','strong_newbie','uxpvx','desc','&page_limit=20','SHOEi','push','XuwNU','oRvVA','charCodeAt','PYpbC','tcoLZ','name','SBjzE','current_talkative','QriiU','xXxTS','&text=','wDgso','dIvti','LEGEND','789072gZCBxY','errcode','ZLOIf','ALL','cmUTB','p_skey=','TBnBV','5152vhPsyT','emotion','umkzF','gMYah','CCRgl','getGrouptNotice','oifqX','19167676rGBcFy','toString','webapi\x20获取群成员','talkativeList','gOxfe','EGZYk','actorList','mOKNi','MgMnw','JVsjY','MLfWs','MXdDC','EMOTION',';\x20skey=','getSkey','LFzgV','CDfid','1971604GZofHm','146770QaPTqr','emotion_list','RUNhM','avatar','EoxJu','TuKpp','&qid=','&page_start=','https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?st=0&end=40&sort=1&gc=','wZIij','获取快乐源泉失败','QDwmM','CfWAs','performer_list',';\x20p_uin=o','crZcU','mems','kQVSg','BIeQJ','iCzaN','Xqvhm','&end=','1|0|5|3|2|4','&pinned=0&type=1&settings={\x22is_show_edit_card\x22:1,\x22tip_window_type\x22:1,\x22confirm_required\x22:1}','&bkn=','MkOkC','RnvRY','setGroupNotice','LLegI','&group_code=','&sort=1&gc=','onaoL','获取群聊炽焰失败','genBkn','NBgxh','https://web.qun.qq.com/cgi-bin/announce/get_t_list?bkn=','HttpGetJson','NoRwd','strong_newbie_list','reSRj','ceil','qun.qq.com','GroupData','IOXNA','DrmYp','XDaoy','talkative','获取群聊之火失败','set','获取当前群荣耀失败','414KnRfwM','svHrC','QTrCL','zXgvI','HcGFq','NuWrp','GroupTime','parse','RZFHU','XVYWy','bFojG','WRRRc','description','ehRST','POST','nAIPX','now','RPaFb','jfZJW','hwWKD','legend_list','count','GET','length','eIcGi','https://web.qun.qq.com/cgi-bin/announce/add_qun_notice?bkn=','6evYHPd','pQxGv','OXWLd','TALKACTIVE','getGroupMembers','XvPzb','match','VBaFn','jKRwZ','sMRVw','get','NAqOa','HttpGetText','legend','StmdL','uin','iKmuD','6416RoKpoh','CMjBO','talkative_list','ahrop','cHJAS','lbJZW','rPNwg','BfnDF','bEWmS','getPSkey'];_0xa852=function(){return _0x47124c;};return _0xa852();}import{WebGroupData,selfInfo}from'@/core/data';import{logDebug}from'@/common/utils/log';import{NTQQUserApi}from'./user';import{RequestUtil}from'@/common/utils/request';export var WebHonorType;(function(_0x269a64){const _0x4a0d2e=_0x3f96,_0x105f6d={'iCzaN':_0x4a0d2e(0xc2),'pJBFl':_0x4a0d2e(0xda),'VBaFn':'all','oifqX':'STORONGE_NEWBI','bFojG':_0x4a0d2e(0x11b),'NzICV':_0x4a0d2e(0x8b),'OXWLd':_0x4a0d2e(0x105),'hwWKD':_0x4a0d2e(0x94),'rPNwg':'PERFROMER','reSRj':'performer'},_0x26d784=_0x105f6d[_0x4a0d2e(0xbf)]['split']('|');let _0x3714b9=0x0;while(!![]){switch(_0x26d784[_0x3714b9++]){case'0':_0x269a64[_0x4a0d2e(0xfb)]=_0x105f6d['pJBFl'];continue;case'1':_0x269a64[_0x4a0d2e(0x8f)]=_0x105f6d[_0x4a0d2e(0xff)];continue;case'2':_0x269a64[_0x105f6d[_0x4a0d2e(0x99)]]=_0x105f6d[_0x4a0d2e(0xe8)];continue;case'3':_0x269a64[_0x105f6d['NzICV']]=_0x105f6d[_0x4a0d2e(0xfa)];continue;case'4':_0x269a64[_0x4a0d2e(0xa6)]=_0x105f6d[_0x4a0d2e(0xf1)];continue;case'5':_0x269a64[_0x105f6d[_0x4a0d2e(0x10f)]]=_0x105f6d[_0x4a0d2e(0xd3)];continue;}break;}}(WebHonorType||(WebHonorType={})));export class WebApi{static async['getGroupEssenceMsg'](_0x9f6b80,_0x2e3425){const _0x176fef=_0x3f96,_0x3206fd={'HcGFq':_0x176fef(0xd5),'QriiU':function(_0x3737ad,_0x26022b){return _0x3737ad+_0x26022b;},'zXgvI':function(_0xef7e5b,_0x19b037){return _0xef7e5b+_0x19b037;},'ZLOIf':function(_0x436b75,_0x38ab09){return _0x436b75+_0x38ab09;},'byKNs':function(_0x415751,_0x180fb8){return _0x415751+_0x180fb8;},'crZcU':';\x20uin=o','BIeQJ':'https://qun.qq.com/cgi-bin/group_digest/digest_list?bkn=','RUNhM':_0x176fef(0xc9),'MLfWs':_0x176fef(0xb3),'CzoXv':_0x176fef(0x11e),'onaoL':_0x176fef(0xf4),'XvPzb':function(_0x587c29,_0x55013c){return _0x587c29!==_0x55013c;}},_0x2c7f94=(await NTQQUserApi['getPSkey']([_0x3206fd[_0x176fef(0xe2)]]))[_0x3206fd[_0x176fef(0xe2)]],_0x4605da=await NTQQUserApi['getSkey'](),_0x2645a4=_0x3206fd[_0x176fef(0x86)](_0x3206fd[_0x176fef(0xe1)](_0x3206fd[_0x176fef(0x8e)](_0x3206fd['byKNs'](_0x3206fd[_0x176fef(0x8e)]('p_skey=',_0x2c7f94),';\x20skey='),_0x4605da),';\x20p_uin=o'),selfInfo[_0x176fef(0x107)])+_0x3206fd[_0x176fef(0xbb)]+selfInfo['uin'];if(!_0x4605da||!_0x2c7f94)return undefined;const _0x1bebd9=WebApi[_0x176fef(0xcd)](_0x4605da),_0x1ac65a=_0x3206fd['ZLOIf'](_0x3206fd[_0x176fef(0x86)](_0x3206fd[_0x176fef(0xe1)](_0x3206fd[_0x176fef(0x8e)](_0x3206fd[_0x176fef(0xbe)],_0x1bebd9),_0x3206fd[_0x176fef(0xae)])+_0x9f6b80,_0x3206fd[_0x176fef(0xa4)]),_0x2e3425)+_0x3206fd['CzoXv'];let _0x41650a;try{_0x41650a=await RequestUtil[_0x176fef(0xd0)](_0x1ac65a,_0x3206fd[_0x176fef(0xcb)],'',{'Cookie':_0x2645a4});}catch{return undefined;}if(_0x3206fd[_0x176fef(0xfd)](_0x41650a['retcode'],0x0))return undefined;return _0x41650a;}static async[_0x528df8(0xfc)](_0x3915b1,_0x27ee03=!![]){const _0x5cf6c5=_0x528df8,_0x5ed17a={'NBgxh':function(_0x30ef52,_0xe322cd,_0x1a072b){return _0x30ef52(_0xe322cd,_0x1a072b);},'NAqOa':_0x5cf6c5(0x9c),'TBnBV':function(_0x430593,_0x36e8a4){return _0x430593-_0x36e8a4;},'SBjzE':function(_0x32be01,_0x4b6d1c){return _0x32be01*_0x4b6d1c;},'kQVSg':'qun.qq.com','MkOkC':function(_0x4da0e3,_0xb50fb3){return _0x4da0e3+_0xb50fb3;},'IOXNA':function(_0x48d5f7,_0x16d10a){return _0x48d5f7+_0x16d10a;},'JVsjY':function(_0x2a2fed,_0x10f1dd){return _0x2a2fed+_0x10f1dd;},'RnvRY':function(_0xbc0621,_0x3d3267){return _0xbc0621+_0x3d3267;},'QDwmM':_0x5cf6c5(0x91),'oRvVA':_0x5cf6c5(0xa7),'mOKNi':_0x5cf6c5(0xba),'XDaoy':function(_0xbb11b1,_0x4e7f3c){return _0xbb11b1+_0x4e7f3c;},'nAIPX':_0x5cf6c5(0xc4),'CfWAs':_0x5cf6c5(0xec),'FfqAd':function(_0x19e7f0,_0x43e5f1){return _0x19e7f0/_0x43e5f1;},'CDfid':function(_0x471117,_0x5756d7){return _0x471117<=_0x5756d7;},'tCJdc':function(_0x2e6c1d,_0x4fa5e6){return _0x2e6c1d+_0x4fa5e6;},'svHrC':function(_0x231dd0,_0x102035){return _0x231dd0+_0x102035;},'QTrCL':function(_0x5f3ccd,_0x5c56cd){return _0x5f3ccd+_0x5c56cd;},'OnSUM':function(_0x55245e,_0x1573a5){return _0x55245e+_0x1573a5;},'CCRgl':function(_0x2faf90,_0x2efaba){return _0x2faf90+_0x2efaba;},'dIvti':'https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?st=','sFweJ':function(_0x60edd,_0x38067a){return _0x60edd*_0x38067a;},'lbJZW':_0x5cf6c5(0xc1),'XHtuX':function(_0x400955,_0x1d3674){return _0x400955*_0x1d3674;},'DrmYp':_0x5cf6c5(0xca)};_0x5ed17a[_0x5cf6c5(0xce)](logDebug,_0x5ed17a[_0x5cf6c5(0x103)],_0x3915b1);let _0x5950d8=new Array();try{let _0x18fe49=WebGroupData[_0x5cf6c5(0xd6)][_0x5cf6c5(0x102)](_0x3915b1),_0x5864b7=WebGroupData[_0x5cf6c5(0xe4)][_0x5cf6c5(0x102)](_0x3915b1);if(!_0x5864b7||_0x5ed17a[_0x5cf6c5(0x92)](Date[_0x5cf6c5(0xee)](),_0x5864b7)>_0x5ed17a[_0x5cf6c5(0x84)](0x708,0x3e8)||!_0x27ee03){const _0x31e8c4=(await NTQQUserApi[_0x5cf6c5(0x112)]([_0x5cf6c5(0xd5)]))[_0x5ed17a[_0x5cf6c5(0xbd)]],_0x587427=await NTQQUserApi[_0x5cf6c5(0xa8)](),_0xe4b5fb=_0x5ed17a['MkOkC'](_0x5ed17a[_0x5cf6c5(0xc5)](_0x5ed17a[_0x5cf6c5(0xd7)](_0x5ed17a[_0x5cf6c5(0xa3)](_0x5ed17a[_0x5cf6c5(0xc6)](_0x5ed17a[_0x5cf6c5(0xb7)],_0x31e8c4),_0x5ed17a[_0x5cf6c5(0x7f)]),_0x587427),_0x5ed17a[_0x5cf6c5(0xa1)]),selfInfo[_0x5cf6c5(0x107)]);if(!_0x587427||!_0x31e8c4)return _0x5950d8;const _0x27e479=WebApi['genBkn'](_0x587427),_0x2a8560=[],_0x199d1b=await RequestUtil[_0x5cf6c5(0xd0)](_0x5ed17a[_0x5cf6c5(0xd9)](_0x5ed17a['IOXNA'](_0x5cf6c5(0xb4),_0x3915b1)+_0x5ed17a[_0x5cf6c5(0xed)],_0x27e479),_0x5ed17a[_0x5cf6c5(0xb8)],'',{'Cookie':_0xe4b5fb});if(!_0x199d1b?.[_0x5cf6c5(0xf3)]||_0x199d1b?.[_0x5cf6c5(0x8d)]!==0x0||!_0x199d1b?.[_0x5cf6c5(0xbc)])return[];else for(const _0x457060 in _0x199d1b[_0x5cf6c5(0xbc)]){_0x5950d8[_0x5cf6c5(0x120)](_0x199d1b[_0x5cf6c5(0xbc)][_0x457060]);}const _0x3e0862=Math[_0x5cf6c5(0xd4)](_0x5ed17a['FfqAd'](_0x199d1b[_0x5cf6c5(0xf3)],0x28));for(let _0xadc80d=0x2;_0x5ed17a[_0x5cf6c5(0xaa)](_0xadc80d,_0x3e0862);_0xadc80d++){const _0x366e27=RequestUtil['HttpGetJson'](_0x5ed17a[_0x5cf6c5(0x116)](_0x5ed17a[_0x5cf6c5(0xdf)](_0x5ed17a[_0x5cf6c5(0xe0)](_0x5ed17a['OnSUM'](_0x5ed17a[_0x5cf6c5(0x97)](_0x5ed17a[_0x5cf6c5(0x8a)],_0x5ed17a['sFweJ'](_0xadc80d-0x1,0x28)),_0x5ed17a[_0x5cf6c5(0x10e)])+_0x5ed17a['XHtuX'](_0xadc80d,0x28),_0x5ed17a[_0x5cf6c5(0xd8)]),_0x3915b1),_0x5ed17a[_0x5cf6c5(0xed)])+_0x27e479,_0x5cf6c5(0xec),'',{'Cookie':_0xe4b5fb});_0x2a8560['push'](_0x366e27);}for(let _0x5307b6=0x1;_0x5ed17a[_0x5cf6c5(0xaa)](_0x5307b6,_0x3e0862);_0x5307b6++){const _0x4537a8=await _0x2a8560[_0x5307b6];if(!_0x4537a8?.['count']||_0x4537a8?.[_0x5cf6c5(0x8d)]!==0x0||!_0x4537a8?.[_0x5cf6c5(0xbc)])continue;for(const _0x4bb049 in _0x4537a8[_0x5cf6c5(0xbc)]){_0x5950d8[_0x5cf6c5(0x120)](_0x4537a8[_0x5cf6c5(0xbc)][_0x4bb049]);}}WebGroupData['GroupData'][_0x5cf6c5(0xdc)](_0x3915b1,_0x5950d8),WebGroupData[_0x5cf6c5(0xe4)]['set'](_0x3915b1,Date[_0x5cf6c5(0xee)]());}else _0x5950d8=_0x18fe49;}catch{return _0x5950d8;}return _0x5950d8;}static async[_0x528df8(0xc7)](_0x114d6d,_0x43fe35=''){const _0x4e5c0d=_0x528df8,_0x3a8be1={'rZQag':_0x4e5c0d(0xd5),'jKRwZ':function(_0x3caf9c,_0x347a38){return _0x3caf9c+_0x347a38;},'pQxGv':function(_0x476543,_0x5196bd){return _0x476543+_0x5196bd;},'uxpvx':function(_0x3497ec,_0x31584b){return _0x3497ec+_0x31584b;},'gOxfe':function(_0x5ae262,_0x54266f){return _0x5ae262+_0x54266f;},'pRCtk':'p_skey=','iKmuD':_0x4e5c0d(0xa7),'SHOEi':_0x4e5c0d(0xba),'jfZJW':function(_0x55920b,_0x4375f5){return _0x55920b||_0x4375f5;},'EGZYk':function(_0x36a061,_0x4836b8){return _0x36a061+_0x4836b8;},'QQBvC':'qid=','ALaxd':_0x4e5c0d(0xc4),'RPaFb':_0x4e5c0d(0x88),'JzxkD':_0x4e5c0d(0xc3)},_0x288884=(await NTQQUserApi[_0x4e5c0d(0x112)]([_0x3a8be1[_0x4e5c0d(0x115)]]))[_0x4e5c0d(0xd5)],_0x4583a4=await NTQQUserApi[_0x4e5c0d(0xa8)](),_0xc9a3f9=_0x3a8be1[_0x4e5c0d(0x100)](_0x3a8be1['pQxGv'](_0x3a8be1['uxpvx'](_0x3a8be1[_0x4e5c0d(0x9e)](_0x3a8be1['pRCtk'],_0x288884),_0x3a8be1[_0x4e5c0d(0x108)])+_0x4583a4,_0x3a8be1[_0x4e5c0d(0x11f)]),selfInfo['uin']);let _0x1fc96a=undefined;if(_0x3a8be1[_0x4e5c0d(0xf0)](!_0x4583a4,!_0x288884))return undefined;const _0x133596=WebApi[_0x4e5c0d(0xcd)](_0x4583a4),_0x185434=_0x3a8be1[_0x4e5c0d(0x100)](_0x3a8be1[_0x4e5c0d(0x11c)](_0x3a8be1[_0x4e5c0d(0x9f)](_0x3a8be1[_0x4e5c0d(0x11c)](_0x3a8be1['QQBvC'],_0x114d6d)+_0x3a8be1['ALaxd'],_0x133596),_0x3a8be1[_0x4e5c0d(0xef)]),_0x43fe35)+_0x3a8be1[_0x4e5c0d(0x118)],_0x3ca02c=_0x3a8be1[_0x4e5c0d(0xf9)](_0x4e5c0d(0xf7),_0x133596);try{return _0x1fc96a=await RequestUtil[_0x4e5c0d(0xd0)](_0x3ca02c,'GET','',{'Cookie':_0xc9a3f9}),_0x1fc96a;}catch(_0x3fc531){return undefined;}return undefined;}static async[_0x528df8(0x98)](_0x38e739){const _0x498d7b=_0x528df8,_0x110c2a={'CMjBO':_0x498d7b(0xd5),'WRRRc':function(_0x4f8991,_0x1fecd9){return _0x4f8991+_0x1fecd9;},'peYNP':_0x498d7b(0x91),'StmdL':_0x498d7b(0xa7),'MgMnw':';\x20p_uin=o','cmUTB':function(_0x47b42a,_0x2253b6){return _0x47b42a||_0x2253b6;},'RsOZX':function(_0x4ca273,_0xdcf641){return _0x4ca273+_0xdcf641;},'NuWrp':function(_0x5103f1,_0x36299d){return _0x5103f1+_0x36299d;},'PYpbC':_0x498d7b(0xcf),'EoxJu':_0x498d7b(0xb2),'wDgso':_0x498d7b(0xf4)},_0x31cea8=(await NTQQUserApi[_0x498d7b(0x112)]([_0x110c2a[_0x498d7b(0x10a)]]))[_0x110c2a[_0x498d7b(0x10a)]],_0x3d3fbd=await NTQQUserApi[_0x498d7b(0xa8)](),_0x300426=_0x110c2a[_0x498d7b(0xe9)](_0x110c2a[_0x498d7b(0xe9)](_0x110c2a[_0x498d7b(0xe9)](_0x110c2a[_0x498d7b(0xe9)](_0x110c2a['peYNP'],_0x31cea8),_0x110c2a[_0x498d7b(0x106)]),_0x3d3fbd)+_0x110c2a[_0x498d7b(0xa2)],selfInfo['uin']);let _0x386111=undefined;if(_0x110c2a[_0x498d7b(0x90)](!_0x3d3fbd,!_0x31cea8))return undefined;const _0x3718ee=WebApi[_0x498d7b(0xcd)](_0x3d3fbd),_0x4cb27c=_0x110c2a['RsOZX'](_0x110c2a[_0x498d7b(0xe3)](_0x110c2a[_0x498d7b(0x81)]+_0x3718ee,_0x110c2a[_0x498d7b(0xb0)]),_0x38e739)+'&ft=23&ni=1&n=1&i=1&log_read=1&platform=1&s=-1&n=20';try{_0x386111=await RequestUtil[_0x498d7b(0xd0)](_0x4cb27c,_0x110c2a[_0x498d7b(0x89)],'',{'Cookie':_0x300426});if(_0x386111?.['ec']!==0x0)return undefined;return _0x386111;}catch(_0x5c8198){return undefined;}return undefined;}static[_0x528df8(0xcd)](_0x3d67af){const _0x195c87=_0x528df8,_0x1ed934={'rDJde':function(_0x42ed4a,_0x1b9554){return _0x42ed4a+_0x1b9554;},'BfnDF':function(_0x559448,_0x38ecd4){return _0x559448<<_0x38ecd4;},'umkzF':function(_0x418437,_0x252a89){return _0x418437&_0x252a89;}};_0x3d67af=_0x3d67af||'';let _0x368549=0x1505;for(let _0xab7d81=0x0;_0xab7d81<_0x3d67af[_0x195c87(0xf5)];_0xab7d81++){const _0x469acb=_0x3d67af[_0x195c87(0x80)](_0xab7d81);_0x368549=_0x1ed934['rDJde'](_0x368549+_0x1ed934[_0x195c87(0x110)](_0x368549,0x5),_0x469acb);}return _0x1ed934[_0x195c87(0x95)](_0x368549,0x7fffffff)[_0x195c87(0x9b)]();}static async['getGroupHonorInfo'](_0x28f5de,_0x1c3925){const _0x19548a=_0x528df8,_0x4bd829={'wZIij':function(_0x414710,_0x3bbcec){return _0x414710+_0x3bbcec;},'ahrop':function(_0x4d31dd,_0x1d55ab){return _0x4d31dd+_0x1d55ab;},'Xqvhm':'https://qun.qq.com/interactive/honorlist?gc=','TECBH':_0x19548a(0xf4),'XVYWy':'qun.qq.com','RZFHU':function(_0x10b52d,_0x388969){return _0x10b52d||_0x388969;},'LLegI':function(_0x4e0519,_0x5d53b2){return _0x4e0519+_0x5d53b2;},'kICbD':function(_0x59b462,_0x25f841){return _0x59b462+_0x25f841;},'ZfVBl':_0x19548a(0xba),'sMRVw':';\x20uin=o','gMYah':function(_0x562cee,_0x25df31){return _0x562cee===_0x25df31;},'bEWmS':function(_0x4523d9,_0x2d6002,_0x3cc168){return _0x4523d9(_0x2d6002,_0x3cc168);},'cHJAS':_0x19548a(0x117),'TuKpp':function(_0x30f866,_0x833254){return _0x30f866(_0x833254);},'tcoLZ':function(_0x4a2951,_0x1402ff){return _0x4a2951===_0x1402ff;},'XuwNU':function(_0x53ae55,_0x1be85f,_0x3a3d0d){return _0x53ae55(_0x1be85f,_0x3a3d0d);},'xXxTS':_0x19548a(0xdb),'ehRST':function(_0xb860bd,_0x434448){return _0xb860bd===_0x434448;},'MXdDC':function(_0xb1d5e,_0x40f374){return _0xb1d5e===_0x40f374;},'XsXWn':_0x19548a(0xcc),'NoRwd':_0x19548a(0xb6),'eIcGi':function(_0x5b5e0c,_0x1d1c50,_0x21ae97){return _0x5b5e0c(_0x1d1c50,_0x21ae97);},'LFzgV':function(_0x2692ab,_0x46ddbc){return _0x2692ab===_0x46ddbc;}},_0x50be3a=(await NTQQUserApi[_0x19548a(0x112)]([_0x4bd829[_0x19548a(0xe7)]]))[_0x4bd829[_0x19548a(0xe7)]],_0x125e34=await NTQQUserApi[_0x19548a(0xa8)]();if(_0x4bd829[_0x19548a(0xe6)](!_0x125e34,!_0x50be3a))return undefined;async function _0x425c5c(_0x3d44c1,_0x535894){const _0x3754d0=_0x19548a;let _0x2f2410=_0x4bd829[_0x3754d0(0xb5)](_0x4bd829[_0x3754d0(0x10c)](_0x4bd829[_0x3754d0(0xc0)]+_0x3d44c1,'&type='),_0x535894[_0x3754d0(0x9b)]()),_0xca9356='',_0x171eba;try{_0xca9356=await RequestUtil[_0x3754d0(0x104)](_0x2f2410,_0x4bd829['TECBH'],'',{'Cookie':_0x3647a2});const _0x18277d=_0xca9356[_0x3754d0(0xfe)](/window\.__INITIAL_STATE__=(.*?);/);return _0x18277d&&(_0x171eba=JSON[_0x3754d0(0xe5)](_0x18277d[0x1]['trim']())),_0x535894===0x1?_0x171eba?.[_0x3754d0(0x9d)]:_0x171eba?.[_0x3754d0(0xa0)];}catch(_0x3a2e8f){logDebug(_0x3754d0(0xdd),_0x2f2410,_0x3a2e8f);}return undefined;}let _0xeb5904={'group_id':_0x28f5de};const _0x3647a2=_0x4bd829['LLegI'](_0x4bd829[_0x19548a(0xc8)](_0x4bd829[_0x19548a(0xc8)](_0x4bd829[_0x19548a(0x10c)](_0x4bd829['kICbD'](_0x4bd829[_0x19548a(0x10c)](_0x19548a(0x91),_0x50be3a),_0x19548a(0xa7)),_0x125e34),_0x4bd829['ZfVBl']),selfInfo[_0x19548a(0x107)]),_0x4bd829[_0x19548a(0x101)])+selfInfo[_0x19548a(0x107)];if(_0x4bd829[_0x19548a(0x96)](_0x1c3925,WebHonorType['TALKACTIVE'])||_0x4bd829[_0x19548a(0x96)](_0x1c3925,WebHonorType[_0x19548a(0x8f)]))try{let _0x584bf6=await _0x4bd829[_0x19548a(0x111)](_0x425c5c,_0x28f5de,0x1);if(!_0x584bf6)throw new Error(_0x4bd829[_0x19548a(0x10d)]);_0xeb5904[_0x19548a(0x85)]={'user_id':_0x584bf6[0x0]?.[_0x19548a(0x107)],'avatar':_0x584bf6[0x0]?.['avatar'],'nickname':_0x584bf6[0x0]?.['name'],'day_count':0x0,'description':_0x584bf6[0x0]?.[_0x19548a(0x11d)]},_0xeb5904[_0x19548a(0x10b)]=[];for(const _0x5b9dec of _0x584bf6){_0xeb5904['talkative_list'][_0x19548a(0x120)]({'user_id':_0x5b9dec?.['uin'],'avatar':_0x5b9dec?.['avatar'],'description':_0x5b9dec?.[_0x19548a(0x11d)],'day_count':0x0,'nickname':_0x5b9dec?.[_0x19548a(0x83)]});}}catch(_0x2f2f55){_0x4bd829[_0x19548a(0xb1)](logDebug,_0x2f2f55);}if(_0x1c3925===WebHonorType[_0x19548a(0x113)]||_0x4bd829[_0x19548a(0x82)](_0x1c3925,WebHonorType[_0x19548a(0x8f)]))try{let _0x4fa21e=await _0x4bd829['XuwNU'](_0x425c5c,_0x28f5de,0x2);if(!_0x4fa21e)throw new Error(_0x4bd829[_0x19548a(0x87)]);_0xeb5904[_0x19548a(0xb9)]=[];for(const _0x342280 of _0x4fa21e){_0xeb5904[_0x19548a(0xb9)][_0x19548a(0x120)]({'user_id':_0x342280?.[_0x19548a(0x107)],'nickname':_0x342280?.[_0x19548a(0x83)],'avatar':_0x342280?.[_0x19548a(0xaf)],'description':_0x342280?.[_0x19548a(0x11d)]});}}catch(_0xa8eab2){logDebug(_0xa8eab2);}if(_0x4bd829[_0x19548a(0xeb)](_0x1c3925,WebHonorType[_0x19548a(0x113)])||_0x4bd829[_0x19548a(0xa5)](_0x1c3925,WebHonorType[_0x19548a(0x8f)]))try{let _0x47d9c2=await _0x425c5c(_0x28f5de,0x3);if(!_0x47d9c2)throw new Error(_0x19548a(0xcc));_0xeb5904['legend_list']=[];for(const _0x50acee of _0x47d9c2){_0xeb5904[_0x19548a(0xf2)][_0x19548a(0x120)]({'user_id':_0x50acee?.[_0x19548a(0x107)],'nickname':_0x50acee?.['name'],'avatar':_0x50acee?.['avatar'],'desc':_0x50acee?.[_0x19548a(0xea)]});}}catch(_0x47d65c){_0x4bd829[_0x19548a(0x121)](logDebug,_0x4bd829['XsXWn'],_0x47d65c);}if(_0x4bd829[_0x19548a(0x96)](_0x1c3925,WebHonorType['EMOTION'])||_0x4bd829[_0x19548a(0xeb)](_0x1c3925,WebHonorType[_0x19548a(0x8f)]))try{let _0x14c21d=await _0x4bd829[_0x19548a(0x111)](_0x425c5c,_0x28f5de,0x6);if(!_0x14c21d)throw new Error(_0x4bd829[_0x19548a(0xd1)]);_0xeb5904['emotion_list']=[];for(const _0x5466c0 of _0x14c21d){_0xeb5904[_0x19548a(0xad)][_0x19548a(0x120)]({'user_id':_0x5466c0?.[_0x19548a(0x107)],'nickname':_0x5466c0?.[_0x19548a(0x83)],'avatar':_0x5466c0?.[_0x19548a(0xaf)],'desc':_0x5466c0?.[_0x19548a(0xea)]});}}catch(_0x2a3a9b){_0x4bd829[_0x19548a(0xf6)](logDebug,_0x4bd829[_0x19548a(0xd1)],_0x2a3a9b);}return(_0x4bd829[_0x19548a(0xa5)](_0x1c3925,WebHonorType['EMOTION'])||_0x4bd829[_0x19548a(0xa9)](_0x1c3925,WebHonorType['ALL']))&&(_0xeb5904[_0x19548a(0xd2)]=[]),_0xeb5904;}}
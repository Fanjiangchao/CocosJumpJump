System.register("chunks:///_virtual/ClickFishCtr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts","./MyFish.ts"],(function(t){"use strict";var i,e,n,c,o,s,r,a,l,u,h,y,C,f,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,c=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,r=t.Camera,a=t.CCFloat,l=t.geometry,u=t.input,h=t.Input,y=t.PhysicsSystem,C=t.Component},function(t){f=t.GameSys},function(t){p=t.MyFish}],execute:function(){var d,_,v,m,k,T,b;o._RF.push({},"742afIBq/ZNo7glNtjbTUz3","ClickFishCtr",void 0);var g=s.ccclass,D=s.property;t("ClickFishCtr",(d=g("ClickFishCtr"),_=D({type:r,visible:!0,displayName:"相机"}),v=D({type:a,visible:!0,displayName:"点击冷却时间"}),d((T=i((k=function(t){function i(){for(var i,e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return(i=t.call.apply(t,[this].concat(o))||this)._canCheck=void 0,n(i,"_cam",T,c(i)),i._ray=void 0,i._isInCd=void 0,n(i,"_cdDuration",b,c(i)),i}e(i,t);var o=i.prototype;return o.start=function(){this.init()},o.onDestroy=function(){this.myDestroy()},o.update=function(t){},o.init=function(){this._ray=new l.Ray,u.on(h.EventType.TOUCH_START,this.onTouchStart,this),this.enableClickCheck(),this.exitCd()},o.myDestroy=function(){u.off(h.EventType.TOUCH_START,this.onTouchStart,this)},o.enableClickCheck=function(){this._canCheck=!0},o.disableClickCheck=function(){this._canCheck=!1},o.onTouchStart=function(t){if(f.instance.level.isInLevel&&this._canCheck&&!this._isInCd&&(this._cam.screenPointToRay(t.getLocation().x,t.getLocation().y,this._ray),y.instance.raycast(this._ray)))for(var i=y.instance.raycastResults,e=0;e<i.length;e++){var n=i[e].collider.node.getComponent(p);if(n){n.click(),this.enterCd();break}}},o.enterCd=function(){var t=this;this._isInCd=!0,setTimeout((function(){t.exitCd()}),1e3*this._cdDuration)},o.exitCd=function(){this._isInCd=!1},i}(C)).prototype,"_cam",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=i(k.prototype,"_cdDuration",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.8}}),m=k))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/FanTest.ts",["./rollupPluginModLoBabelHelpers.js","cc","./LevelData.ts"],(function(e){"use strict";var t,n,i,o,a,s,r,l,c,u,p,h,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,r=e.input,l=e.Input,c=e.director,u=e.KeyCode,p=e.Component,h=e.Vec2},function(e){f=e.LevelData}],execute:function(){var D,y,v,_,d;a._RF.push({},"2702c9Y5pdM3LOEca2AcbPK","FanTest",void 0);var m=s.ccclass,g=s.property;e("FanTest",(D=m("FanTest"),y=g({visible:!0,displayName:"测试用size"}),D((d=t((_=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this)._levelData=void 0,i(t,"_mapSize",d,o(t)),t}n(t,e);var a=t.prototype;return a.start=function(){this.init()},a.onDestroy=function(){this.myDestroy()},a.update=function(e){},a.init=function(){r.on(l.EventType.KEY_DOWN,this.onKeyDown,this),this._levelData=c.getScene().getComponentInChildren(f)},a.myDestroy=function(){r.off(l.EventType.KEY_DOWN,this.onKeyDown,this),this._levelData=null},a.onKeyDown=function(e){e.keyCode==u.SPACE&&this.doSth()},a.doSth=function(){var e=this._levelData.getFirstData(),t=this._levelData.getNextData(this._mapSize),n=this._levelData.isLastData(this._mapSize),i=this._levelData.getIndex(this._mapSize);console.info("第一关："+e),console.info("当前关的Index："+i),console.info("是否是最后一关："+n),console.info("下一关："+t),console.info("........")},t}(p)).prototype,"_mapSize",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new h(0,0)}}),v=_))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Fish.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,r,a,o,u,s,c,l,h,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized,a=e.createClass},function(e){o=e.cclegacy,u=e._decorator,s=e.animation,c=e.SkinnedMeshRenderer,l=e.Material,h=e.CCFloat,f=e.Component}],execute:function(){var p,d,y,_,b,v,m,g,x,I,w,k,T;o._RF.push({},"40006aUPbVJsbybdoemAh+E","Fish",void 0);var z=u.ccclass,A=u.property;e("Fish",(p=z("Fish"),d=A({type:s.AnimationController,visible:!0}),y=A({type:c,visible:!0}),_=A({type:[l],visible:!0}),b=A({type:h,visible:!0}),v=A({type:s.AnimationController,visible:!0}),p((x=t((g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"_ac",x,r(t)),i(t,"_skinRenderer",I,r(t)),i(t,"_mats",w,r(t)),t._curIndex=0,i(t,"_interval",k,r(t)),t._canTurnOver=void 0,i(t,"_shadowAc",T,r(t)),t}n(t,e);var o=t.prototype;return o.onLoad=function(){this.init()},o.start=function(){},o.update=function(e){},o.onDestroy=function(){this.myDestroy()},o.turnOver=function(){this.curIndex++,this._ac.setValue("TurnOver",this.curIndex),this._shadowAc.setValue("TurnOver",this.curIndex),this.changeMat(300)},o.init=function(){this._curIndex=0,this.changeMat(),this._canTurnOver=!0,this._canTurnOver=!1},o.myDestroy=function(){},o.onTouchStart=function(e){},o.changeMat=function(e){var t=this;setTimeout((function(){return t._skinRenderer.setMaterial(t._mats[t._curIndex],0)}),300)},a(t,[{key:"maxIndex",get:function(){return this._mats.length-1}},{key:"curIndex",get:function(){return this._curIndex},set:function(e){(e<0||e>this.maxIndex)&&(e=0),this._curIndex=e}},{key:"isRight",get:function(){return 0==this.curIndex}}]),t}(f)).prototype,"_ac",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(g.prototype,"_skinRenderer",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(g.prototype,"_mats",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),k=t(g.prototype,"_interval",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),T=t(g.prototype,"_shadowAc",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=g))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/FishGroup.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts","./MyFish.ts"],(function(e){"use strict";var i,t,s,r,n,o,h,l,a,u,c,f,d,y;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,s=e.initializerDefineProperty,r=e.assertThisInitialized,n=e.createForOfIteratorHelperLoose,o=e.createClass},function(e){h=e.cclegacy,l=e._decorator,a=e.Prefab,u=e.Vec2,c=e.instantiate,f=e.Component},function(e){d=e.Level},function(e){y=e.MyFish}],execute:function(){var v,p,F,_,m;h._RF.push({},"0e635cFw5JOq55YwCuPCtqk","FishGroup",void 0);var b=l.ccclass,g=l.property,w=(e("FishGroup",(v=b("FishGroup"),p=g({type:a,visible:!0}),v((m=i((_=function(e){function i(){for(var i,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(i=e.call.apply(e,[this].concat(n))||this)._fishes=void 0,s(i,"_myFishPrefab",m,r(i)),i._level=void 0,i}t(i,e);var h=i.prototype;return h.init=function(e){this._level=e,this._fishes=new Array},h.myDestroy=function(){this.destroyAllFishes(),this._level=null},h.createFishes=function(e){this.destroyAllFishes(),this._fishes=new Array;for(var i=0;i<e.x;i++)for(var t=0;t<e.y;t++){var s=new u(i,t),r=(this.idToKey(s),c(this._myFishPrefab).getComponent(y));r.init(s,this),this.node.addChild(r.node),this._fishes.push(new w(s,r))}},h.destroyAllFishes=function(){this._fishes.splice(0,this._fishes.length),this._fishes=null,this.node.removeAllChildren()},h.idToKey=function(e){return 100*e.x+e.y},h.keyToId=function(e){return new u(Number((e/100).toFixed(0)),e%100)},h.turnover=function(e,i,t){var s=this;if(void 0===t&&(t=.001),this.isValidId(e)){var r=this.idToFish(e);r&&(r.turnOver(),setTimeout((function(){for(var t,r=s.getNeighborIds(e),o=n(r);!(t=o()).done;){var h=t.value,l=s.idToFish(h);l&&l.turnOver()}i&&s._level.checkIsWin()}),1e3*t))}},h.isValidId=function(e){return e.x>=0&&e.y>=0&&e.x<d.instance.mapSize.x&&e.y<d.instance.mapSize.y},h.getNeighborIds=function(e){for(var i=[new u(e.x-1,e.y),new u(e.x+1,e.y),new u(e.x,e.y-1),new u(e.x,e.y+1)],t=i.length-1;t>=0;t--){var s=i[t];this.isValidId(s)||i.splice(t,1)}return i},h.idToFish=function(e){for(var i,t=null,s=n(this._fishes);!(i=s()).done;){var r=i.value;if(r.id.equals(e)){t=r.myFish;break}}return t},o(i,[{key:"fishes",get:function(){return this._fishes}}]),i}(f)).prototype,"_myFishPrefab",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=_))||F)),function(e,i){this.id=void 0,this.myFish=void 0,this.id=e,this.myFish=i});h._RF.pop()}}}));

System.register("chunks:///_virtual/GameSys.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts","./LevelData.ts","./LevelTimer.ts","./LevelBeginWnd.ts","./LevelWinWnd.ts"],(function(e){"use strict";var n,t,i,l,s,a,v,c;return{setters:[function(e){n=e.createClass},function(e){t=e.cclegacy,i=e.director},function(e){l=e.Level},function(e){s=e.LevelData},function(e){a=e.LevelTimer},function(e){v=e.LevelBeginWnd},function(e){c=e.LevelWinWnd}],execute:function(){t._RF.push({},"281521rQlFGVqhawN6VzqZO","GameSys",void 0),e("GameSys",function(){function e(){this._level=void 0,this._levelData=void 0,this._levelBeginWnd=void 0,this._levelTimer=void 0,this._levelWinWnd=void 0}return e.init=function(){var n=this;this._instance||(this._instance=new e,this._instance._level=i.getScene().getComponentInChildren(l),this._instance.level.init(),this._instance._levelData=i.getScene().getComponentInChildren(s),this._instance.levelData.init(),this._instance._levelBeginWnd=i.getScene().getComponentInChildren(v),this._instance._levelBeginWnd.init(this._instance.level,this._instance.levelData),this._instance._levelTimer=i.getScene().getComponentInChildren(a),this._instance._levelTimer.init(this._instance.level),this._instance._levelWinWnd=i.getScene().getComponentInChildren(c),this._instance._levelWinWnd.init(this._instance.level,this._instance.levelData,this._instance._levelTimer),setTimeout((function(){n._instance.level.setSize(n._instance.levelData.getFirstData())}),1))},e.prototype.myDestroy=function(){this.level&&(this.level.myDestroy(),this._level=null),this.levelData&&(this.levelData.myDestroy(),this._levelData=null),this._levelBeginWnd&&(this._levelBeginWnd.myDestroy(),this._levelBeginWnd=null),this._levelTimer&&(this._levelTimer.myDestroy(),this._levelTimer=null),this._levelWinWnd&&(this._levelWinWnd.myDestroy(),this._levelWinWnd=null),e._instance=null},n(e,[{key:"level",get:function(){return this._level}},{key:"levelData",get:function(){return this._levelData}}],[{key:"instance",get:function(){return this._instance}}]),e}())._instance=void 0,t._RF.pop()}}}));

System.register("chunks:///_virtual/Launch.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts"],(function(t){"use strict";var n,o,e,i,c;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,i=t.Component},function(t){c=t.GameSys}],execute:function(){var r;o._RF.push({},"229e5tHUkFDt5xlouC6BLkl","Launch",void 0);var s=e.ccclass;e.property,t("Launch",s("Launch")(r=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.start=function(){this.init()},e.onDestroy=function(){this.myDestroy()},e.init=function(){c.init()},e.myDestroy=function(){c.instance.myDestroy()},o}(i))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/Level.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FishGroup.ts"],(function(e){"use strict";var i,t,n,a,s,r,p,o,h,u,l,v,c,z,m,S;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized,s=e.createClass,r=e.createForOfIteratorHelperLoose},function(e){p=e.cclegacy,o=e._decorator,h=e.CCInteger,u=e.CCFloat,l=e.Vec2,v=e.randomRangeInt,c=e.EventTarget,z=e.Vec3,m=e.Component},function(e){S=e.FishGroup}],execute:function(){var f,_,g,y,M,L,X,Y,E,d;p._RF.push({},"081f4vBtXVEgpn8VG2jEJsI","Level",void 0);var w=o.ccclass,b=o.property;e("Level",(f=w("Level"),_=b({type:h,visible:!0,displayName:"地图 宽"}),g=b({type:h,visible:!0,displayName:"地图 高"}),y=b({type:u,visible:!0,displayName:"地图单元格边长"}),f(((d=function(e){function i(){for(var i,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return i=e.call.apply(e,[this].concat(s))||this,n(i,"_mapSizeX",X,a(i)),n(i,"_mapSizeY",Y,a(i)),n(i,"_mapElementSize",E,a(i)),i._fishGroup=void 0,i._eventTarget=void 0,i._isInLevel=void 0,i}t(i,e);var p=i.prototype;return p.createLv=function(){do{this._fishGroup.createFishes(new l(this._mapSizeX,this._mapSizeY));for(var e=v(this._mapSizeX+this._mapSizeY,this._mapSizeX*this._mapSizeY),t=0;t<e;t++){var n=new l(v(0,this._mapSizeX),v(0,this._mapSizeY));this._fishGroup.turnover(n,!1)}}while(this.isWin);this.eventTarget.emit(i.LevelBeginEvent,new l(this.mapSizeX,this.mapSizeY)),this._isInLevel=!0},p.init=function(){i._instance=this,this._fishGroup=this.getComponent(S),this._fishGroup.init(this),this._eventTarget=new c},p.myDestroy=function(){this._fishGroup.myDestroy(),this._eventTarget=null},p.getElementPosById=function(e){return this.getElementPos(e.x,e.y)},p.getElementPos=function(e,i){return new z(e*this._mapElementSize,i*this._mapElementSize,0)},p.setSizeX=function(e){this.setSize(new l(e,this.mapSizeY))},p.setSizeY=function(e){this.setSize(new l(this.mapSizeX,e))},p.setSize=function(e){var t=Math.round(e.x);t<i.MapMinSizeX?t=i.MapMinSizeX:t>i.MapMaxSizeX&&(t=i.MapMaxSizeX);var n=Math.round(e.y);n<i.MapMinSizeY?n=i.MapMinSizeY:n>i.MapMaxSizeY&&(n=i.MapMaxSizeY),this._mapSizeX=t,this._mapSizeY=n,this.createLv(),this._eventTarget.emit(i.LevelMapSizeChangeEvent,new l(this.mapSizeX,this.mapSizeY))},p.checkIsWin=function(){return this.isWin&&(this.eventTarget.emit(i.LevelWinEvent,new l(this.mapSizeX,this.mapSizeY)),this._isInLevel=!1),this.isWin},s(i,[{key:"mapSizeX",get:function(){return this._mapSizeX}},{key:"mapSizeY",get:function(){return this._mapSizeY}},{key:"mapSize",get:function(){return new l(this._mapSizeX,this._mapSizeY)}},{key:"eventTarget",get:function(){return this._eventTarget}},{key:"isInLevel",get:function(){return this._isInLevel}},{key:"isWin",get:function(){var e=!1;if(this._fishGroup&&this._fishGroup.fishes){e=!0;for(var i,t=r(this._fishGroup.fishes);!(i=t()).done;){if(!i.value.myFish.isRight){e=!1;break}}}return e}}],[{key:"instance",get:function(){return i._instance}}]),i}(m))._instance=void 0,d.MapMinSizeX=2,d.MapMaxSizeX=5,d.MapMinSizeY=2,d.MapMaxSizeY=6,d.LevelMapSizeChangeEvent="LevelMapSizeChangeEvent",d.LevelBeginEvent="LevelBeginEvent",d.LevelWinEvent="LevelWinEvent",X=i((L=d).prototype,"_mapSizeX",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),Y=i(L.prototype,"_mapSizeY",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),E=i(L.prototype,"_mapElementSize",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),M=L))||M));p._RF.pop()}}}));

System.register("chunks:///_virtual/LevelBeginWnd.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts"],(function(e){"use strict";var t,i,n,l,o,a,r,s,v,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,r=e.Node,s=e.Label,v=e.CCFloat,c=e.Component},function(e){u=e.Level}],execute:function(){var p,h,d,_,f,g,y,b,L;o._RF.push({},"c6989VugppKeIlUnCwR0t0a","LevelBeginWnd",void 0);var D=a.ccclass,m=a.property;e("LevelBeginWnd",(p=D("LevelBeginWnd"),h=m({type:r,visible:!0,displayName:"窗口Node"}),d=m({type:s,visible:!0,displayName:"关卡序号描述"}),_=m({type:v,visible:!0,displayName:"显示持续时长"}),p((y=t((g=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this)._level=void 0,t._levelData=void 0,n(t,"_wnd",y,l(t)),n(t,"_levelIndexLabel",b,l(t)),n(t,"_openDuration",L,l(t)),t}i(t,e);var o=t.prototype;return o.init=function(e,t){this._level=e,this._level.eventTarget.on(u.LevelBeginEvent,this.onLevelBegin,this),this._levelData=t,this.close()},o.myDestroy=function(){this._level&&(this._level.eventTarget.off(u.LevelBeginEvent,this.onLevelBegin,this),this._level=null),this._levelData&&(this._levelData=null)},o.onLevelBegin=function(e){var t=this,i=this._levelData.getIndex(e)+1;this.open(i),setTimeout((function(){t.close()}),1e3*this._openDuration)},o.open=function(e){this._levelIndexLabel.string="过场表现\n第"+e.toFixed()+"关",this._wnd.active=!0},o.close=function(){this._wnd.active=!1},t}(c)).prototype,"_wnd",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(g.prototype,"_levelIndexLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(g.prototype,"_openDuration",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),f=g))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/LevelData.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,a,r,i,n,s,o,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,a=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized,n=t.createClass},function(t){s=t.cclegacy,o=t._decorator,c=t.Component}],execute:function(){var u,l,h,p,d;s._RF.push({},"83e92SgYMxMxoy5ZSyzEDX8","LevelData",void 0);var f=o.ccclass,y=o.property;t("LevelData",(u=f("LevelData"),l=y({visible:!0,displayName:"各关的MapSize"}),u((d=e((p=function(t){function e(){for(var e,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n))||this,r(e,"_data",d,i(e)),e}a(e,t);var s=e.prototype;return s.init=function(){},s.myDestroy=function(){},s.getFirstData=function(){return this._data[0]},s.getNextData=function(t){var e=this._data.length-1;return this.isLastData(t)||(e=this.getIndex(t)+1),this._data[e]},s.isLastData=function(t){return this.getIndex(t)==this._data.length-1},s.getIndex=function(t){var e,a=!1;for(e=0;e<this._data.length;e++)if(this._data[e].equals(t)){a=!0;break}return a||(e=-1),e},n(e,[{key:"data",get:function(){return this._data}}]),e}(c)).prototype,"_data",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Array}}),h=p))||h));s._RF.pop()}}}));

System.register("chunks:///_virtual/LevelTimer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts"],(function(e){"use strict";var i,t,n,r,o,l,s,h,a;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,s=e.Label,h=e.Component},function(e){a=e.Level}],execute:function(){var u,v,c,f,m;o._RF.push({},"602d8347FZGCKc5SMFprkAg","LevelTimer",void 0);var L=l.ccclass,g=l.property;e("LevelTimer",(u=L("LevelTimer"),v=g({type:s,visible:!0,displayName:"显示时间"}),u((m=i((f=function(e){function i(){for(var i,t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];return(i=e.call.apply(e,[this].concat(o))||this)._time=void 0,n(i,"_timeLabel",m,r(i)),i._level=void 0,i}t(i,e);var o=i.prototype;return o.init=function(e){this._level=e,this._level.eventTarget.on(a.LevelBeginEvent,this.onLevelBegin,this),this._level.eventTarget.on(a.LevelWinEvent,this.onLevelWin,this),this.hideLabel()},o.myDestroy=function(){this._level&&(this._level.eventTarget.off(a.LevelBeginEvent,this.onLevelBegin,this),this._level.eventTarget.off(a.LevelWinEvent,this.onLevelWin,this),this._level=null)},o.onLevelBegin=function(e){this.beginTime()},o.onLevelWin=function(e){this.endTime()},o.beginTime=function(){var e=this;setTimeout((function(){e._time=0,e.schedule(e.refreshTime,1),e.refreshLabel(),e.showLabel()}),1e3)},o.endTime=function(){this.unschedule(this.refreshTime),this.hideLabel()},o.refreshTime=function(){this._time++,this.refreshLabel()},o.getTime=function(){return Math.round(this._time)},o.getFormatTime=function(){return this.formatTime(this._time)},o.formatTime=function(e){var i=this.rounding(e/3600),t=(i<10?"0"+i:i).toString(),n=this.rounding((e-3600*i)/60),r=n<10?"0"+n:n.toString(),o=this.rounding(e-3600*i-60*n);return t+":"+r+":"+(o<10?"0"+o:o.toString())},o.rounding=function(e){return Math.floor(e)},o.hideLabel=function(){this._timeLabel.node.active=!1},o.showLabel=function(){this._timeLabel.node.active=!0},o.refreshLabel=function(){this._timeLabel.string=this.getFormatTime()},i}(h)).prototype,"_timeLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=f))||c));o._RF.pop()}}}));

System.register("chunks:///_virtual/LevelWinWnd.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts"],(function(e){"use strict";var t,i,n,l,o,a,s,v,r,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,s=e.Node,v=e.Button,r=e.Label,c=e.Component},function(e){u=e.Level}],execute:function(){var p,h,L,_,d,y,f,b,m,x,T;o._RF.push({},"128acmo2cBFT7nIJWadVDy/","LevelWinWnd",void 0);var g=a.ccclass,W=a.property;e("LevelWinWnd",(p=g("LevelWinWnd"),h=W({type:s,visible:!0,displayName:"窗口Node"}),L=W({type:v,visible:!0,displayName:"按钮：下一关"}),_=W({type:r,visible:!0,displayName:"地图大小描述：下一关"}),d=W({type:r,visible:!0,displayName:"通过本关所花费的时长"}),p((b=t((f=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this)._level=void 0,t._levelData=void 0,t._levelTimer=void 0,n(t,"_wnd",b,l(t)),n(t,"_nextLevelBtn",m,l(t)),n(t,"_nextLevelMapSizeLabel",x,l(t)),n(t,"_useTimeLabel",T,l(t)),t._nextLevelMapSize=void 0,t}i(t,e);var o=t.prototype;return o.init=function(e,t,i){this._level=e,this._level.eventTarget.on(u.LevelWinEvent,this.onLevelWin,this),this._levelData=t,this._levelTimer=i,this._nextLevelBtn.node.on(v.EventType.CLICK,this.onClickNextLvBtn,this),this.close()},o.myDestroy=function(){this._level&&(this._level.eventTarget.off(u.LevelWinEvent,this.onLevelWin,this),this._level=null),this._levelData&&(this._levelData=null),this._levelTimer=null,this._nextLevelBtn.node.off(v.EventType.CLICK,this.onClickNextLvBtn,this)},o.onLevelWin=function(e){var t=this;setTimeout((function(){t.open(t._levelData.getNextData(e))}),500)},o.open=function(e){this._nextLevelMapSizeLabel.string=e.x.toFixed()+"x"+e.y.toFixed(),this._nextLevelMapSize=e,this._useTimeLabel.string=this._levelTimer.getFormatTime(),this._wnd.active=!0},o.close=function(){this._wnd.active=!1},o.onClickNextLvBtn=function(){this.toNextLv()},o.toNextLv=function(){this.close(),this._level.setSize(this._nextLevelMapSize)},t}(c)).prototype,"_wnd",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=t(f.prototype,"_nextLevelBtn",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=t(f.prototype,"_nextLevelMapSizeLabel",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=t(f.prototype,"_useTimeLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=f))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./FanTest.ts","./ClickFishCtr.ts","./Fish.ts","./FishGroup.ts","./GameSys.ts","./Launch.ts","./Level.ts","./LevelData.ts","./LevelTimer.ts","./MapSizeListenerTransCtr.ts","./MyFish.ts","./SetMapSizeCtr.ts","./LevelBeginWnd.ts","./LevelWinWnd.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MapSizeListenerTransCtr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts"],(function(e){"use strict";var t,i,n,r,a,o,s,l,u,c,p,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.createClass,n=e.inheritsLoose,r=e.initializerDefineProperty,a=e.assertThisInitialized,o=e.createForOfIteratorHelperLoose},function(e){s=e.cclegacy,l=e._decorator,u=e.Vec2,c=e.Vec3,p=e.director,f=e.Component},function(e){h=e.Level}],execute:function(){var v,y,d,_,b,m,g,z,D,T,L,C,S,w,M,N,k,j;s._RF.push({},"d596eTq+v5DJ5c4ef7jo9HQ","MapSizeListenerTransCtr",void 0);var q=l.ccclass,E=l.property,A=e("MapSizeTransformData",(v=q("MapSizeTransformData"),y=E({visible:!0,displayName:"地图宽高"}),d=E({visible:!0,displayName:"位置"}),_=E({visible:!0,displayName:"角度"}),b=E({visible:!0,displayName:"缩放"}),v((z=t((g=function(){function e(){r(this,"_size",z,this),r(this,"_pos",D,this),r(this,"_rotation",T,this),r(this,"_scale",L,this)}return e.prototype.isEqual=function(e){return this._size.equals(e)},i(e,[{key:"pos",get:function(){return this._pos}},{key:"rotation",get:function(){return this._rotation}},{key:"scale",get:function(){return this._scale}}]),e}()).prototype,"_size",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new u}}),D=t(g.prototype,"_pos",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),T=t(g.prototype,"_rotation",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),L=t(g.prototype,"_scale",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(1,1,1)}}),m=g))||m));e("MapSizeListenerTransCtr",(C=q("MapSizeListenerTransCtr"),S=E({type:A,visible:!0,displayName:"默认"}),w=E({type:[A],visible:!0,displayName:"各种情况"}),C((k=t((N=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this)._level=void 0,r(t,"_defaultTransformData",k,a(t)),r(t,"_transformData",j,a(t)),t}n(t,e);var i=t.prototype;return i.start=function(){this.init(p.getScene().getComponentInChildren(h))},i.onDestroy=function(){this.myDestroy()},i.update=function(e){},i.init=function(e){this._level=e,this._level.eventTarget.on(h.LevelMapSizeChangeEvent,this.onLevelMapSizeChanged,this)},i.myDestroy=function(){this._level&&(this._level.eventTarget.off(h.LevelMapSizeChangeEvent,this.onLevelMapSizeChanged,this),this._level=null)},i.onLevelMapSizeChanged=function(e){this.adjustTrans(e)},i.adjustTrans=function(e){for(var t,i=this._defaultTransformData,n=o(this._transformData);!(t=n()).done;){var r=t.value;if(r.isEqual(e)){i=r;break}}this.node.position=i.pos,this.node.eulerAngles=i.rotation,this.node.scale=i.scale},t}(f)).prototype,"_defaultTransformData",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=t(N.prototype,"_transformData",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Array}}),M=N))||M));s._RF.pop()}}}));

System.register("chunks:///_virtual/MyFish.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Fish.ts","./Level.ts"],(function(i){"use strict";var e,t,r,n,s,o,u,c,h,l,a;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,r=i.initializerDefineProperty,n=i.assertThisInitialized,s=i.createClass},function(i){o=i.cclegacy,u=i._decorator,c=i.CCFloat,h=i.Component},function(i){l=i.Fish},function(i){a=i.Level}],execute:function(){var y,f,p,_,v,d,m;o._RF.push({},"00c26tkJxxJWa830jKiSBWP","MyFish",void 0);var g=u.ccclass,b=u.property;i("MyFish",(y=g("MyFish"),f=b({type:c,visible:!0,displayName:"自己翻身后，邻居等多久才翻身"}),p=b({type:l,visible:!0}),y((d=e((v=function(i){function e(){for(var e,t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return(e=i.call.apply(i,[this].concat(s))||this)._myId=void 0,r(e,"_neighborDelayTurnOverTime",d,n(e)),r(e,"_fish",m,n(e)),e._fishGroup=void 0,e}t(e,i);var o=e.prototype;return o.init=function(i,e){this._myId=i,this._fishGroup=e,this.node.setPosition(a.instance.getElementPosById(this._myId))},o.myDestroy=function(){this._fishGroup=null},o.turnOver=function(){this._fish.turnOver()},o.click=function(){this._fishGroup.turnover(this._myId,!0,this._neighborDelayTurnOverTime)},s(e,[{key:"id",get:function(){return this._myId}},{key:"isRight",get:function(){return this._fish&&this._fish.isRight}}]),e}(h)).prototype,"_neighborDelayTurnOverTime",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.2}}),m=e(v.prototype,"_fish",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=v))||_));o._RF.pop()}}}));

System.register("chunks:///_virtual/SetMapSizeCtr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts"],(function(e){"use strict";var i,t,n,o,s,r,l,a,d,h;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){s=e.cclegacy,r=e._decorator,l=e.EditBox,a=e.director,d=e.Component},function(e){h=e.Level}],execute:function(){var p,c,u,v,f,_,g;s._RF.push({},"7aff0vIc1VMWpV31YRKuvcM","SetMapSizeCtr",void 0);var y=r.ccclass,S=r.property;e("SetMapSizeCtr",(p=y("SetMapSizeCtr"),c=S({type:l,visible:!0,displayName:"设置地图 宽"}),u=S({type:l,visible:!0,displayName:"设置地图 高"}),p((_=i((f=function(e){function i(){for(var i,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return i=e.call.apply(e,[this].concat(s))||this,n(i,"_editBoxX",_,o(i)),n(i,"_editBoxY",g,o(i)),i._level=void 0,i}t(i,e);var s=i.prototype;return s.start=function(){this.init(a.getScene().getComponentInChildren(h))},s.onDestroy=function(){this.myDestroy()},s.update=function(e){},s.init=function(e){this._level=e,this._level.eventTarget.on(h.LevelMapSizeChangeEvent,this.onlevelMapSizeChanged,this),this._editBoxX.node.on("editing-did-ended",this.onEndEditX,this),this._editBoxY.node.on("editing-did-ended",this.onEndEditY,this)},s.myDestroy=function(){this._level&&(this._level.eventTarget.off(h.LevelMapSizeChangeEvent,this.onlevelMapSizeChanged,this),this._level=null),this._editBoxX.node.off("editing-did-ended",this.onEndEditX,this),this._editBoxY.node.off("editing-did-ended",this.onEndEditY,this)},s.onEndEditX=function(e){var i=parseInt(e.string);i?this._level.setSizeX(i):this.refreshMapSizeDisplay()},s.onEndEditY=function(e){var i=parseInt(e.string);i?this._level.setSizeY(i):this.refreshMapSizeDisplay()},s.refreshMapSizeDisplay=function(){this._editBoxX.string=this._level.mapSizeX+"",this._editBoxY.string=this._level.mapSizeY+""},s.onlevelMapSizeChanged=function(e){this.refreshMapSizeDisplay()},i}(d)).prototype,"_editBoxX",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=i(f.prototype,"_editBoxY",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=f))||v));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
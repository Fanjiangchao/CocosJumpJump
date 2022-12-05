System.register("chunks:///_virtual/GameSys.ts",["./rollupPluginModLoBabelHelpers.js","cc","./InputCtr.ts","./RpsLogic.ts","./ViewSys.ts"],(function(t){"use strict";var n,e,i,s,c,o,r,u;return{setters:[function(t){n=t.createClass},function(t){e=t.cclegacy,i=t.director,s=t.Vec2,c=t.EventTarget},function(t){o=t.InputCtr},function(t){r=t.RpsLogic},function(t){u=t.ViewSys}],execute:function(){e._RF.push({},"7c86aQVVa5CMZC07oBwQlNK","GameSys",void 0),t("GameSys",function(){function t(){this._eventTarget=void 0,this._rpsLogic=void 0,this._viewSys=void 0,this._inputCtr=void 0,this._eventTarget=new c}return t.init=function(){t.instance||(this._instance=new t,this._instance._rpsLogic=new r,this._instance._viewSys=i.getScene().getComponentInChildren(u),this._instance._viewSys.init(this._instance._rpsLogic),this._instance._inputCtr=new o(this._instance._rpsLogic),console.info("初始化GameSys"),this._instance._rpsLogic.create(new s(5,5),3),this._instance._inputCtr.enable())},t.prototype.myDestroy=function(){var n,e,i;t.instance==this&&(null==(n=this._inputCtr)||n.myDestroy(),this._inputCtr=null,null==(e=this._viewSys)||e.myDestroy(),this._viewSys=null,null==(i=this._rpsLogic)||i.myDestroy(),this._rpsLogic=null,this._eventTarget=null,t._instance=null,console.info("销毁GameSys"))},n(t,[{key:"eventTarget",get:function(){return this._eventTarget}}],[{key:"instance",get:function(){return this._instance}}]),t}())._instance=void 0,e._RF.pop()}}}));

System.register("chunks:///_virtual/GridMapView.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var e,r,t,o,n,s,a,l,c,d,u,p,_;return{setters:[function(i){e=i.applyDecoratedDescriptor,r=i.inheritsLoose,t=i.initializerDefineProperty,o=i.assertThisInitialized,n=i.createForOfIteratorHelperLoose,s=i.createClass},function(i){a=i.cclegacy,l=i._decorator,c=i.CCFloat,d=i.Node,u=i.Vec3,p=i.instantiate,_=i.Component}],execute:function(){var h,g,v,y,f,m,N,P,b;a._RF.push({},"ad3e14jhV5Knp/PNVQR4L8l","GridMapView",void 0);var w=l.ccclass,W=l.property;i("GridMapView",(h=w("GridMapView"),g=W({type:c,visible:!0,displayName:"格子间距"}),v=W({type:d,visible:!0,displayName:"地图中点位置"}),y=W({type:d,visible:!0,displayName:"格子背景模板"}),h((N=e((m=function(i){function e(){for(var e,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return e=i.call.apply(i,[this].concat(n))||this,t(e,"_gridInterval",N,o(e)),t(e,"_centerNode",P,o(e)),e._curW=void 0,e._curH=void 0,t(e,"_gridTemplateNode",b,o(e)),e._grids=void 0,e._originalPos=void 0,e}r(e,i);var a=e.prototype;return a.init=function(){this._gridTemplateNode.active=!1,this._grids=new Array},a.myDestroy=function(){this.clearGrids(),this._grids=null},a.createGripMap=function(i,e){this.clearGrids(),this._curW=i,this._curH=e,this._originalPos=new u(this._centerNode.getWorldPosition().x-(this._curW-1)/2*this._gridInterval,this._centerNode.getWorldPosition().y-(this._curH-1)/2*this._gridInterval,this._centerNode.getWorldPosition().z);for(var r=0;r<this._curW;r++)for(var t=0;t<this._curH;t++){var o=p(this._gridTemplateNode);o.setParent(this._gridTemplateNode.parent),o.setWorldPosition(this.getPos(r,t)),o.active=!0,o.name="grid_"+r+"_"+t,this._grids.push(o)}},a.getPos=function(i,e){return new u(this._originalPos.x+i*this._gridInterval,this._originalPos.y+e*this._gridInterval,this._originalPos.z)},a.clearGrids=function(){for(var i,e=n(this._grids);!(i=e()).done;){i.value.destroy()}this._grids.splice(0,this._grids.length)},s(e,[{key:"curW",get:function(){return this._curW}},{key:"curH",get:function(){return this._curH}}]),e}(_)).prototype,"_gridInterval",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),P=e(m.prototype,"_centerNode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=e(m.prototype,"_gridTemplateNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=m))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/InputCtr.ts",["cc","./RpsLogic.ts","./SlideScreenSys.ts"],(function(t){"use strict";var n,e,i,s,c;return{setters:[function(t){n=t.cclegacy,e=t._decorator},function(t){i=t.MoveDir},function(t){s=t.SlideScreenSys,c=t.SlideScreenDir}],execute:function(){n._RF.push({},"890f5BkmzxE06ryadiEX2wf","InputCtr",void 0);e.ccclass,e.property;t("InputCtr",function(){function t(t){this._rpsLogic=void 0,this._isInCD=void 0,this._canInput=void 0,this._rpsLogic=t,s.instance.eventTarget.on(s.SlideScreenEvent,this.onSlideScreen,this),this._isInCD=!1,this.disable()}var n=t.prototype;return n.myDestroy=function(){var t,n;this._rpsLogic=null,null==s||null==(t=s.instance)||null==(n=t.eventTarget)||n.off(s.SlideScreenEvent,this.onSlideScreen,this)},n.enable=function(){this._canInput||(this._canInput=!0)},n.disable=function(){this._canInput&&(this._canInput=!1)},n.onSlideScreen=function(n){var e=this;if(this._canInput&&!this._isInCD){var s=i.None;switch(n){case c.Up:s=i.Up;break;case c.Down:s=i.Down;break;case c.Left:s=i.Left;break;case c.Right:s=i.Right}this._rpsLogic.move(s),this._isInCD=!0,setTimeout((function(){e._isInCD=!1}),1e3*t.inputInterval)}},t}()).inputInterval=.2,n._RF.pop()}}}));

System.register("chunks:///_virtual/Launch.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts"],(function(t){"use strict";var n,o,c,e,i;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,c=t._decorator,e=t.Component},function(t){i=t.GameSys}],execute:function(){var r;o._RF.push({},"d3154chF/lI8rcdaYJDbZ9F","Launch",void 0);var s=c.ccclass;c.property,t("Launch",s("Launch")(r=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var c=o.prototype;return c.onLoad=function(){this.init()},c.onDestroy=function(){this.myDestroy()},c.init=function(){i.init()},c.myDestroy=function(){i.instance.myDestroy()},o}(e))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameSys.ts","./InputCtr.ts","./Launch.ts","./RpsElement.ts","./RpsLogic.ts","./SlideScreenSys.ts","./GridMapView.ts","./RpsElementView.ts","./ViewSys.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/RpsElement.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,s,n,o;return{setters:[function(e){t=e.createClass},function(e){s=e.cclegacy,n=e._decorator,o=e.EventTarget}],execute:function(){e("RpsType",void 0),s._RF.push({},"f76begfLjVNiaP7IiHu/ZOT","RpsElement",void 0);var i;n.ccclass,n.property;!function(e){e[e.None=0]="None",e[e.Rock=1]="Rock",e[e.Paper=2]="Paper",e[e.Scissors=3]="Scissors"}(i||(i=e("RpsType",{})));var r=e("RpsElement",function(){var e=s.prototype;function s(e){this.type=void 0,this._eventTarget=void 0,this._pos=void 0,this.type=e,this._eventTarget=new o}return e.setPos=function(e){this._pos&&this._pos.equals(e)||(this._pos=e,this.eventTarget.emit(s.SetPosEvent,this,this.pos))},e.myDestroy=function(){this._eventTarget=null},t(s,[{key:"eventTarget",get:function(){return this._eventTarget}},{key:"pos",get:function(){return this._pos}}]),s}());r.SetPosEvent=r.name+"SetPosEvent",s._RF.pop()}}}));

System.register("chunks:///_virtual/RpsElementView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RpsElement.ts"],(function(e){"use strict";var t,i,r,n,o,s,a,l,p,u,c,v,m,y,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.createClass,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,s=e.createForOfIteratorHelperLoose},function(e){a=e.cclegacy,l=e._decorator,p=e.Enum,u=e.SpriteFrame,c=e.CCFloat,v=e.Sprite,m=e.Vec3,y=e.Component},function(e){f=e.RpsType}],execute:function(){var _,d,h,b,S,F,w,I,P,g,R,D,z,E,N,V;a._RF.push({},"d3721KpO+NKUqh3MGPnZPXQ","RpsElementView",void 0);var k=l.ccclass,C=l.property,W=(_=k("RpsElementViewSprite"),d=C({type:p(f),visible:!0,displayName:"类型"}),h=C({type:u,visible:!0,displayName:"外观Sprite"}),_((F=t((S=function(){function e(){n(this,"_type",F,this),n(this,"_spriteFrame",w,this)}return i(e,[{key:"type",get:function(){return this._type}},{key:"spriteFrame",get:function(){return this._spriteFrame}}]),e}()).prototype,"_type",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return f.None}}),w=t(S.prototype,"_spriteFrame",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=S))||b);e("RpsElementView",(I=k("RpsElementView"),P=C({type:c,visible:!0,displayName:"移动时长(秒)"}),g=C({type:v,visible:!0,displayName:"外观Sprite"}),R=C({type:[W],visible:!0,displayName:"外观Sprite"}),I((E=t((z=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,n(t,"_moveDuration",E,o(t)),n(t,"_sprite",N,o(t)),n(t,"_availableSprites",V,o(t)),t._isFirstSetPos=void 0,t._moveIntervalId=void 0,t}r(t,e);var i=t.prototype;return i.init=function(e){this._isFirstSetPos=!0,this.setSprite(e)},i.myDestroy=function(){},i.setPos=function(e){this._isFirstSetPos?(this.node.setWorldPosition(e),this._isFirstSetPos=!1):this.move(e)},i.move=function(e){var t=this;clearInterval(this._moveIntervalId);var i=0,r=this.node.getWorldPosition();this._moveIntervalId=setInterval((function(){if(i>=t._moveDuration)t.node.setWorldPosition(e),clearInterval(t._moveIntervalId);else{var n=new m;m.lerp(n,r,e,i/t._moveDuration),t.node.setWorldPosition(n)}i+=.02}),20)},i.setSprite=function(e){for(var t,i=s(this._availableSprites);!(t=i()).done;){var r=t.value;if(r.type==e){this._sprite.spriteFrame=r.spriteFrame;break}}},t}(y)).prototype,"_moveDuration",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.15}}),N=t(z.prototype,"_sprite",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=t(z.prototype,"_availableSprites",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Array}}),D=z))||D));a._RF.pop()}}}));

System.register("chunks:///_virtual/RpsLogic.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RpsElement.ts"],(function(e){"use strict";var t,r,n,s,a,i,o,l,c;return{setters:[function(e){t=e.createForOfIteratorHelperLoose,r=e.createClass},function(e){n=e.cclegacy,s=e._decorator,a=e.randomRangeInt,i=e.Vec2,o=e.EventTarget},function(e){l=e.RpsElement,c=e.RpsType}],execute:function(){e("MoveDir",void 0),n._RF.push({},"77b09aT+4ZLyKQc8xEnVRd7","RpsLogic",void 0);var h,v;s.ccclass,s.property;!function(e){e[e.None=0]="None",e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.Right=4]="Right"}(h||(h=e("MoveDir",{}))),function(e){e[e.None=0]="None",e[e.X=1]="X",e[e.Y=2]="Y"}(v||(v={}));var u=e("RpsLogic",function(){function e(){this._elements=void 0,this._eventTarget=void 0,this._curMapSize=void 0,this._availableElementTypes=void 0,this._elements=new Array,this._eventTarget=new o,this._availableElementTypes=[c.Rock,c.Paper,c.Scissors]}var n=e.prototype;return n.myDestroy=function(){this.clearElements(),this._elements=null,this._eventTarget=null,this._availableElementTypes.splice(0,this._availableElementTypes.length),this._availableElementTypes=null},n.create=function(t,r){this.clearElements(),this._curMapSize=t,this.eventTarget.emit(e.CreateMapEvent,this._curMapSize);for(var n=0;n<r;n++)this.createElement();for(var s=this.createNonRepeatPositions(r),a=0;a<r;a++)this._elements[a].setPos(s[a])},n.clearElements=function(){for(var e=this._elements.length-1;e>=0;e--)this.destroyElement(this._elements[e]);this._elements.splice(0,this._elements.length)},n.destroyElement=function(t,r){void 0===r&&(r=!0),this.eventTarget.emit(e.DestroyElementEvent,t,r),this._elements.splice(this._elements.indexOf(t),1),t.myDestroy()},n.createElement=function(){var t=new l(this._availableElementTypes[a(0,this._availableElementTypes.length)]);return this._elements.push(t),this.eventTarget.emit(e.CreateElementEvent,t),t},n.createNonRepeatPositions=function(e){for(var r=new Array;!(r.length>=e);){for(var n,s=new i(a(0,this._curMapSize.x),a(0,this._curMapSize.y)),o=!0,l=t(r);!(n=l()).done;){var c=n.value;if(c.x==s.x||c.y==s.y){o=!1;break}}o&&r.push(s)}return r},n.move=function(e){var t=new Map;switch(e){case h.Up:t=this.classifyElements(v.X,!0);break;case h.Down:t=this.classifyElements(v.X,!1);break;case h.Left:t=this.classifyElements(v.Y,!1);break;case h.Right:t=this.classifyElements(v.Y,!0)}this.moveElements(e,t),this.tryCreateElementAfterMove()},n.classifyElements=function(e,r){for(var n,s=new Map,a=t(this._elements);!(n=a()).done;){var i=n.value,o=0;e==v.X?o=i.pos.x:e==v.Y&&(o=i.pos.y),s.has(o)||s.set(o,new Array),s.get(o).push(i)}for(var l,c=t(s.keys());!(l=c()).done;){var h=l.value;s.set(h,s.get(h).sort((function(t,n){var s=0,a=0;return e==v.X?(s=t.pos.y,a=n.pos.y):e==v.Y&&(s=t.pos.x,a=n.pos.x),r&&(s*=-1,a*=-1),s<a?-1:s==a?0:1})))}return s},n.moveElements=function(e,r){for(var n,s=new Array,a=t(r.keys());!(n=a()).done;){for(var o=n.value,l=r.get(o),c=1;c<l.length;c++){var v=l[c-1],u=l[c];this.canKill(u,v)&&s.push(v)}for(var f=l.length-1;f>=0;f--)s.indexOf(l[f])>=0&&l.splice(f,1);r.set(o,l)}for(var p=s.length-1;p>=0;p--)this.destroyElement(s[p],!1);s=null;for(var y,m=t(r.keys());!(y=m()).done;){var g=y.value,E=0,_=0;switch(e){case h.Up:E=g,_=this._curMapSize.y-1;break;case h.Down:E=g,_=0;break;case h.Left:E=0,_=g;break;case h.Right:E=this._curMapSize.x-1,_=g}for(var w=r.get(g),d=0;d<w.length;d++)switch(w[d].setPos(new i(E,_)),e){case h.Up:_--;break;case h.Down:_++;break;case h.Left:E++;break;case h.Right:E--}}},n.canKill=function(e,t){var r=e.type,n=t.type;return r==c.Paper&&n==c.Rock||r==c.Rock&&n==c.Scissors||r==c.Scissors&&n==c.Paper},n.tryCreateElementAfterMove=function(){for(var e,r=new Map,n=t(this._elements);!(e=n()).done;){var s=e.value;r.set(this.vec2ToStr(s.pos),s)}for(var a=new Array,o=0;o<this._curMapSize.x;o++)for(var l=0;l<this._curMapSize.y;l++){var c=this.vec2ToStr(new i(o,l));r.has(c)||a.push(c)}for(var h=new Map,v=Array.from(r.keys()),u=0,f=a;u<f.length;u++){var p=f[u],y=this.getBlankNeighborCnt(p,this._curMapSize,v);h.has(y)||h.set(y,new Array),h.get(y).push(p)}var m=Array.from(h.keys());m=m.sort();for(var g=new Array,E=m.length-1;E>=0;E--){var _=m[E],w=h.get(_);g=g.concat(this.shuffleArray(w))}var d=this.strToVec2(g[0]);this.createElement().setPos(d)},n.vec2ToStr=function(e){return e.x+"_"+e.y},n.strToVec2=function(e){var t=e.split("_");return new i(Number(t[0]),Number(t[1]))},n.getBlankNeighborCnt=function(e,r,n){for(var s,a=0,i=this.getNeighborIds(this.strToVec2(e),r),o=t(i);!(s=o()).done;){var l=s.value;n.indexOf(this.vec2ToStr(l))<0&&a++}return a},n.getNeighborIds=function(e,t){for(var r=[new i(e.x-1,e.y),new i(e.x+1,e.y),new i(e.x,e.y-1),new i(e.x,e.y+1)],n=r.length-1;n>=0;n--){var s=r[n];(s.x<0||s.x>=t.x||s.y<0||s.y>=t.y)&&r.splice(n,1)}return r},n.shuffleArray=function(e){for(var t=e.length-1;t>0;){var r=a(0,t),n=e[r];e[r]=e[t],e[t]=n,t--}return e},r(e,[{key:"eventTarget",get:function(){return this._eventTarget}}]),e}());u.CreateMapEvent=u.name+"CreateLevelEvent",u.CreateElementEvent=u.name+"CreateElementEvent",u.DestroyElementEvent=u.name+"DestroyElementEvent",n._RF.pop()}}}));

System.register("chunks:///_virtual/SlideScreenSys.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,i,o,s,c;return{setters:[function(t){e=t.createClass},function(t){n=t.cclegacy,i=t._decorator,o=t.input,s=t.Input,c=t.EventTarget}],execute:function(){t("SlideScreenDir",void 0),n._RF.push({},"662862TDb9MxLvm8oNiv85X","SlideScreenSys",void 0);var h;i.ccclass,i.property;!function(t){t[t.None=0]="None",t[t.Up=1]="Up",t[t.Down=2]="Down",t[t.Left=3]="Left",t[t.Right=4]="Right"}(h||(h=t("SlideScreenDir",{})));var u=t("SlideScreenSys",function(){function t(){this._touchId=void 0,this._eventTarget=void 0,this._downTime=void 0,this._downPos=void 0,o.on(s.EventType.TOUCH_START,this.onTouchStart,this),o.on(s.EventType.TOUCH_END,this.onTouchEnd,this),this.resetTouchId(),this._eventTarget=new c}var n=t.prototype;return n.myDestroy=function(){o.off(s.EventType.TOUCH_START,this.onTouchStart,this),o.off(s.EventType.TOUCH_END,this.onTouchEnd,this),this._eventTarget=null,t.instance==this&&(t._instance=null)},n.resetTouchId=function(){this._touchId=t.defaultTouchId},n.hasTouchId=function(){return this._touchId!=t.defaultTouchId},n.onTouchStart=function(t){this.hasTouchId()||(this._touchId=t.touch.getID(),this._downTime=(new Date).getTime(),this._downPos=t.touch.getLocation())},n.onTouchEnd=function(e){if(this._touchId==e.touch.getID()){if(((new Date).getTime()-this._downTime)/1e3<=t.maxSlideDuration){var n=e.touch.getLocation(),i=h.None,o=n.x-this._downPos.x,s=n.y-this._downPos.y;i=Math.abs(o)>Math.abs(s)?o>=0?h.Right:h.Left:s>=0?h.Up:h.Down,this.eventTarget.emit(t.SlideScreenEvent,i)}this.resetTouchId()}},e(t,[{key:"eventTarget",get:function(){return this._eventTarget}}],[{key:"instance",get:function(){return this._instance||(this._instance=new t),this._instance}}]),t}());u.defaultTouchId=-1,u.SlideScreenEvent="SlideScreenEvent",u._instance=void 0,u.maxSlideDuration=.3,n._RF.pop()}}}));

System.register("chunks:///_virtual/ViewSys.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RpsElement.ts","./RpsLogic.ts","./GridMapView.ts","./RpsElementView.ts"],(function(e){"use strict";var t,n,i,s,o,r,a,l,p,c,m,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,a=e.instantiate,l=e.Component},function(e){p=e.RpsElement},function(e){c=e.RpsLogic},function(e){m=e.GridMapView},function(e){h=e.RpsElementView}],execute:function(){var u,y,g,v,_,f,d;o._RF.push({},"0a087AW1CFPVp1vFmponaES","ViewSys",void 0);var E=r.ccclass,M=r.property;e("ViewSys",(u=E("ViewSys"),y=M({type:m,visible:!0,displayName:"格子地图"}),g=M({type:h,visible:!0,displayName:"element模板"}),u((f=t((_=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this)._rpsLogic=void 0,i(t,"_gridMap",f,s(t)),i(t,"_elementTemplate",d,s(t)),t._elementMap=void 0,t}n(t,e);var o=t.prototype;return o.init=function(e){this._rpsLogic=e,this._rpsLogic.eventTarget.on(c.CreateMapEvent,this.onCreateMap,this),this._rpsLogic.eventTarget.on(c.CreateElementEvent,this.onCreateElement,this),this._rpsLogic.eventTarget.on(c.DestroyElementEvent,this.onDestroyElement,this),this._gridMap.init(),this._elementTemplate.node.active=!1,this._elementMap=new Map},o.myDestroy=function(){var e,t,n,i,s,o;null==(e=this._rpsLogic)||null==(t=e.eventTarget)||t.off(c.CreateMapEvent,this.onCreateMap,this),null==(n=this._rpsLogic)||null==(i=n.eventTarget)||i.off(c.CreateElementEvent,this.onCreateElement,this),null==(s=this._rpsLogic)||null==(o=s.eventTarget)||o.off(c.DestroyElementEvent,this.onDestroyElement,this),this._rpsLogic=null,this._gridMap.myDestroy(),this._elementMap.clear(),this._elementMap=null},o.onCreateMap=function(e){this._gridMap.createGripMap(e.x,e.y)},o.onCreateElement=function(e){e.eventTarget.on(p.SetPosEvent,this.onSetElementPos,this);var t=a(this._elementTemplate.node).getComponent(h);t.init(e.type),t.node.setParent(this._elementTemplate.node.parent),t.node.active=!0,this._elementMap.set(e,t)},o.onDestroyElement=function(e,t){e.eventTarget.off(p.SetPosEvent,this.onSetElementPos,this);var n=this._elementMap.get(e);t?(n.myDestroy(),n.node.destroy()):setTimeout((function(){n.myDestroy(),n.node.destroy()}),100),this._elementMap.delete(e)},o.onSetElementPos=function(e,t){var n=this._gridMap.getPos(t.x,t.y);this._elementMap.get(e).setPos(n)},t}(l)).prototype,"_gridMap",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=t(_.prototype,"_elementTemplate",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=_))||v));o._RF.pop()}}}));

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
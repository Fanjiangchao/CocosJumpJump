System.register("chunks:///_virtual/AreaEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,c,n;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,c=e._decorator,n=e.Component}],execute:function(){var o;r._RF.push({},"fdc1fHCUOJPS77rhcL98d+H","AreaEffect",void 0);var s=c.ccclass;c.property,e("AreaEffect",s("AreaEffect")(o=function(e){function r(){return e.apply(this,arguments)||this}return t(r,e),r}(n))||o);r._RF.pop()}}}));

System.register("chunks:///_virtual/AreaEffectChangeRabbitSpeed.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Rabbit.ts","./AreaEffect.ts"],(function(e){"use strict";var t,r,a,n,i,o,c,f,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,a=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,o=e._decorator,c=e.CCFloat},function(e){f=e.Rabbit},function(e){p=e.AreaEffect}],execute:function(){var s,u,l,b,d;i._RF.push({},"4b3fa9IHgFLdb8vnpkgQJ3N","AreaEffectChangeRabbitSpeed",void 0);var v=o.ccclass,g=o.property;e("AreaEffectChangeRabbitSpeed",(s=v("AreaEffectChangeRabbitSpeed"),u=g({type:c,visible:!0,displayName:"移动速度系数"}),s((d=t((b=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,a(t,"_moveSpeedFactor",d,n(t)),t}r(t,e);var i=t.prototype;return i.enterEffect=function(e){var t=e.getComponent(f);t&&t.setMoveSpeedFactor(this._moveSpeedFactor)},i.exitEffect=function(e){var t=e.getComponent(f);t&&t.resetMoveSpeed()},t}(p)).prototype,"_moveSpeedFactor",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),l=b))||l));i._RF.pop()}}}));

System.register("chunks:///_virtual/AreaEffectChangeWolfSpeed.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Wolf.ts","./AreaEffect.ts"],(function(e){"use strict";var t,r,a,o,c,n,i,f,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,a=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){c=e.cclegacy,n=e._decorator,i=e.CCFloat},function(e){f=e.Wolf},function(e){l=e.AreaEffect}],execute:function(){var p,s,u,d,y,v,h;c._RF.push({},"dd76cMycj9AmaC5/Z8JnT32","AreaEffectChangeWolfSpeed",void 0);var m=n.ccclass,g=n.property;e("AreaEffectChangeWolfSpeed",(p=m("AreaEffectChangeWolfSpeed"),s=g({type:i,visible:!0,displayName:"最大移动速度系数"}),u=g({type:i,visible:!0,displayName:"加速度系数"}),p((v=t((y=function(e){function t(){for(var t,r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return t=e.call.apply(e,[this].concat(c))||this,a(t,"_maxMoveSpeedFactor",v,o(t)),a(t,"_accFactor",h,o(t)),t}r(t,e);var c=t.prototype;return c.enterEffect=function(e){var t=e.getComponent(f);t&&t.setSpeedParamFactor(this._maxMoveSpeedFactor,this._accFactor)},c.exitEffect=function(e){var t=e.getComponent(f);t&&t.resetSpeedParam()},t}(l)).prototype,"_maxMoveSpeedFactor",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),h=t(y.prototype,"_accFactor",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),d=y))||d));c._RF.pop()}}}));

System.register("chunks:///_virtual/AreaEffectKillWolf.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Wolf.ts","./AreaEffect.ts"],(function(t){"use strict";var e,f,r,c,o;return{setters:[function(t){e=t.inheritsLoose},function(t){f=t.cclegacy,r=t._decorator},function(t){c=t.Wolf},function(t){o=t.AreaEffect}],execute:function(){var n;f._RF.push({},"2d8f2Kp9glL0aaHZ4/m+3wT","AreaEffectKillWolf",void 0);var l=r.ccclass;r.property,t("AreaEffectKillWolf",l("AreaEffectKillWolf")(n=function(t){function f(){return t.apply(this,arguments)||this}e(f,t);var r=f.prototype;return r.enterEffect=function(t){var e=t.getComponent(c);e&&e.kill()},r.exitEffect=function(t){},f}(o))||n);f._RF.pop()}}}));

System.register("chunks:///_virtual/AreaEffectKnockbackWolf.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Wolf.ts","./AreaEffect.ts"],(function(e){"use strict";var t,r,i,n,o,c,a,f,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,a=e.CCFloat},function(e){f=e.Wolf},function(e){l=e.AreaEffect}],execute:function(){var s,u,p,b,d,y,k;o._RF.push({},"727f0QFr1dKkYi+rE/GBAKn","AreaEffectKnockbackWolf",void 0);var v=c.ccclass,_=c.property;e("AreaEffectKnockbackWolf",(s=v("AreaEffectKnockbackWolf"),u=_({type:a,visible:!0,displayName:"移动速度"}),p=_({type:a,visible:!0,displayName:"持续时间"}),s((y=t((d=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o))||this,i(t,"_speed",y,n(t)),i(t,"_duration",k,n(t)),t}r(t,e);var o=t.prototype;return o.enterEffect=function(e){var t=e.getComponent(f);t&&t.startKnockback(this._duration,this._speed)},o.exitEffect=function(e){},t}(l)).prototype,"_speed",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),k=t(d.prototype,"_duration",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),b=d))||b));o._RF.pop()}}}));

System.register("chunks:///_virtual/AreaTrigger.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Rabbit.ts","./Wolf.ts"],(function(t){"use strict";var e,r,i,n,o,a,g,s,l,c,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,g=t.Collider,s=t.Enum,l=t.Component},function(t){c=t.Rabbit},function(t){f=t.Wolf}],execute:function(){var h,u,p,y,T,b,_;t("CharType",void 0),o._RF.push({},"acf4e0/lDNHao6NlzcV1jbW","AreaTrigger",void 0);var d,C=a.ccclass,E=a.property;!function(t){t[t.None=0]="None",t[t.Rabbit=1]="Rabbit",t[t.Wolf=2]="Wolf"}(d||(d=t("CharType",{})));t("AreaTrigger",(h=C("AreaTrigger"),u=E({type:g,visible:!0,displayName:"触发器"}),p=E({type:s(d),visible:!0,displayName:"目标类型"}),h((b=e((T=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,i(e,"_trigger",b,n(e)),e._effect=void 0,i(e,"_targetCharType",_,n(e)),e}r(e,t);var o=e.prototype;return o.start=function(){this.init()},o.onDestroy=function(){this.myDestroy()},o.init=function(){this._trigger.isTrigger=!0,this._trigger.on("onTriggerEnter",this.onTriggerEnter,this),this._trigger.on("onTriggerExit",this.onTriggerExit,this),this._effect=this.getComponent("AreaEffect")},o.myDestroy=function(){var t,e;null==(t=this._trigger)||t.off("onTriggerEnter",this.onTriggerEnter,this),null==(e=this._trigger)||e.off("onTriggerExit",this.onTriggerExit,this)},o.onTriggerEnter=function(t){this.isTargetChar(t.otherCollider.node)&&this._effect.enterEffect(t.otherCollider.node)},o.onTriggerExit=function(t){this.isTargetChar(t.otherCollider.node)&&this._effect.exitEffect(t.otherCollider.node)},o.isTargetChar=function(t){return this._targetCharType==d.Rabbit&&null!=t.getComponent(c)||this._targetCharType==d.Wolf&&null!=t.getComponent(f)},e}(l)).prototype,"_trigger",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=e(T.prototype,"_targetCharType",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return d.None}}),y=T))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/DrawLineCtr.ts",["cc","./Rabbit.ts","./SingleTouchCtr.ts","./Target.ts"],(function(t){"use strict";var n,e,i,s,o,h,c;return{setters:[function(t){n=t.cclegacy,e=t._decorator,i=t.PhysicsSystem,s=t.geometry},function(t){o=t.Rabbit},function(t){h=t.SingleTouchCtr},function(t){c=t.Target}],execute:function(){var u;n._RF.push({},"ae514uqyk5DZq5w8VUrGUAd","DrawLineCtr",void 0);var r=e.ccclass;e.property,t("DrawLineCtr",r("DrawLineCtr")(u=function(){function t(t,n,e){this._touchCtr=void 0,this._sys=void 0,this._cam=void 0,this._ray=void 0,this._canCheck=void 0,this._touchCtr=t,this._touchCtr.eventTarget.on(h.SingleTouchDownEvent,this.onTouchBegin,this),this._touchCtr.eventTarget.on(h.SingleTouchMoveEvent,this.onTouchMove,this),this._touchCtr.eventTarget.on(h.SingleTouchUpEvent,this.onTouchEnd,this),this._sys=n,this._cam=e,this._ray=new s.Ray,this.enableCheck()}var n=t.prototype;return n.myDestroy=function(){var t,n,e;this._touchCtr&&(null==(t=this._touchCtr.eventTarget)||t.off(h.SingleTouchDownEvent,this.onTouchBegin,this),null==(n=this._touchCtr.eventTarget)||n.off(h.SingleTouchMoveEvent,this.onTouchMove,this),null==(e=this._touchCtr.eventTarget)||e.off(h.SingleTouchUpEvent,this.onTouchEnd,this),this._touchCtr=null);this._sys=null,this._cam=null,this._ray=null,this.disableCheck()},n.onTouchBegin=function(t){this._canCheck&&this.isTouchedRabbit(t)&&this._sys.beginDraw()},n.onTouchMove=function(t){this._canCheck&&this.isTouchedTarget(t)&&!this._sys.isInPause&&this._sys.endDraw(!0)},n.onTouchEnd=function(t){this._canCheck&&this._sys.endDraw(this.isTouchedTarget(t)&&!this._sys.isInPause)},n.getTouchNode=function(t){var n=null;(this._cam.screenPointToRay(t.x,t.y,this._ray),i.instance.raycastClosest(this._ray))&&(n=i.instance.raycastClosestResult.collider.node);return n},n.isTouchedRabbit=function(t){var n;return null!=(null==(n=this.getTouchNode(t))?void 0:n.getComponent(o))},n.isTouchedTarget=function(t){var n;return null!=(null==(n=this.getTouchNode(t))?void 0:n.getComponent(c))},n.enableCheck=function(){this._canCheck=!0},n.disableCheck=function(){this._canCheck=!1},t}())||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/DrawLineSys.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Obstacle.ts","./SingleTouchCtr.ts"],(function(t){"use strict";var i,n,s,e,o,h,r,a,_;return{setters:[function(t){i=t.createClass},function(t){n=t.cclegacy,s=t._decorator,e=t.Vec3,o=t.PhysicsSystem,h=t.geometry,r=t.EventTarget},function(t){a=t.Obstacle},function(t){_=t.SingleTouchCtr}],execute:function(){var u,c;n._RF.push({},"0358aKsvtNMUYr+eRL0Ua2R","DrawLineSys",void 0);var l=s.ccclass;s.property,t("DrawLineSys",l("DrawLineSys")(((c=function(){function t(t,i,n,s){this._touchCtr=void 0,this._cam=void 0,this._ray=void 0,this._beginNode=void 0,this._endNode=void 0,this._points=void 0,this._eventTarget=void 0,this._isInDraw=void 0,this._isInPause=void 0,this._linkPoint=void 0,this._touchCtr=t,this._cam=i,this._beginNode=n,this._endNode=s,this._ray=new h.Ray,this._points=null,this._eventTarget=new r}var n=t.prototype;return n.myDestroy=function(){this._touchCtr=null,this._cam=null,this._beginNode=null,this._endNode=null,this._ray=null,this._points.splice(0,this._points.length),this._points=null,this._eventTarget=null},n.beginDraw=function(){this._points=new Array,this._points.push(this._beginNode.worldPosition),this._touchCtr.eventTarget.on(_.SingleTouchMoveEvent,this.onTouchMove,this),this._isInDraw=!0,this._linkPoint=e.ZERO,this._isInPause=!1},n.endDraw=function(i){this._isInDraw&&(this._isInDraw=!1,i?this._points&&(this._points.push(this._endNode.worldPosition),this.eventTarget.emit(t.CreatePointEvent,this._points)):this._points&&(this._points.splice(0,this._points.length),this._points=null),this.eventTarget.emit(t.EndDrawEvent,i,this._points),this._touchCtr.eventTarget.off(_.SingleTouchMoveEvent,this.onTouchMove,this))},n.onTouchMove=function(i){if(this._cam.screenPointToRay(i.x,i.y,this._ray),o.instance.raycastClosest(this._ray)){var n=o.instance.raycastClosestResult,s=null!=n.collider.getComponent(a);if(!this._isInPause&&s)this._linkPoint=new e(n.hitPoint.x,n.hitPoint.y,n.hitPoint.z),this._isInPause=!0;else if(this._isInPause&&!s&&e.distance(n.hitPoint,this._linkPoint)<3.2){this._linkPoint=e.ZERO,this._isInPause=!1;var h=new e(n.hitPoint.x,this._beginNode.worldPosition.y,n.hitPoint.z);this._points.push(h),this.eventTarget.emit(t.CreatePointEvent,this._points)}else if(!this._isInPause&&!s){var r=new e(n.hitPoint.x,this._beginNode.worldPosition.y,n.hitPoint.z);this._points.push(r),this.eventTarget.emit(t.CreatePointEvent,this._points)}}},i(t,[{key:"eventTarget",get:function(){return this._eventTarget}},{key:"isInPause",get:function(){return this._isInPause}}]),t}()).CreatePointEvent="DrawLineSysCreatePointEvent",c.EndDrawEvent="DrawLineSysEndDrawEvent",u=c))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/GameSys.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DrawLineCtr.ts","./DrawLineSys.ts","./Rabbit.ts","./SingleTouchCtr.ts","./Target.ts","./WolfGroup.ts"],(function(t){"use strict";var n,e,i,s,a,r,c,o,_,h,u,l;return{setters:[function(t){n=t.createClass},function(t){e=t.cclegacy,i=t._decorator,s=t.director,a=t.Camera,r=t.EventTarget},function(t){c=t.DrawLineCtr},function(t){o=t.DrawLineSys},function(t){_=t.Rabbit},function(t){h=t.SingleTouchCtr},function(t){u=t.Target},function(t){l=t.WolfGroup}],execute:function(){var v,w;e._RF.push({},"902b55p265Hw7bmcu79XEX6","GameSys",void 0);var d=i.ccclass;i.property,t("GameSys",d("GameSys")(((w=function(){function t(){this._rabbit=void 0,this._target=void 0,this._drawLineSys=void 0,this._drawLineCtr=void 0,this._wolfGroup=void 0,this._eventTarget=void 0,this._eventTarget=new r}t.init=function(){if(!t.instance){this._instance=new t,this._instance._rabbit=s.getScene().getComponentInChildren(_),this._instance._rabbit.init(),this._instance._target=s.getScene().getComponentInChildren(u),this._instance._target.init();var n=s.getScene().getChildByName("Main Camera").getComponent(a);this._instance._drawLineSys=new o(h.instance,n,this._instance._rabbit.node,this._instance._target.node),this._instance._drawLineSys.eventTarget.on(o.EndDrawEvent,this._instance.onEndDraw,this._instance),this._instance._drawLineCtr=new c(h.instance,this._instance._drawLineSys,n),this._instance._wolfGroup=new l(this._instance._rabbit)}},t.myDestroy=function(){t.instance&&(this._instance._wolfGroup&&(this._instance._wolfGroup.myDestroy(),this._instance._wolfGroup=null),this._instance._rabbit&&(this._instance._rabbit.myDestroy(),this._instance._rabbit=null),this._instance._target&&(this._instance._target.myDestroy(),this._instance._target=null),this._instance._drawLineSys.eventTarget.off(o.EndDrawEvent,this._instance.onEndDraw,this._instance),this._instance._drawLineSys.myDestroy(),this._instance._drawLineSys=null,this._instance._drawLineCtr.myDestroy(),this._instance._drawLineCtr=null,this._instance._eventTarget=null,this._instance=null)};var e=t.prototype;return e.onEndDraw=function(t,n){t&&(this._drawLineCtr.disableCheck(),this.beginChase(n))},e.beginChase=function(t){this._rabbit.move(t),this._wolfGroup.startCheck()},e.GameOver=function(n){this._wolfGroup.stopMove(),this.eventTarget.emit(t.GameOverEvent,n)},e.Restart=function(){this._drawLineCtr.enableCheck(),this._rabbit.resetState(),this._wolfGroup.resetState(),this.eventTarget.emit(t.RestartEvent)},n(t,[{key:"drawLineSys",get:function(){return this._drawLineSys}},{key:"eventTarget",get:function(){return this._eventTarget}}],[{key:"instance",get:function(){return this._instance}}]),t}())._instance=void 0,w.GameOverEvent="GameSysGameOverEvent",w.RestartEvent="GameSysRestartEvent",v=w))||v);e._RF.pop()}}}));

System.register("chunks:///_virtual/Launch.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts"],(function(n){"use strict";var t,o,e,i,r;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,e=n._decorator,i=n.Component},function(n){r=n.GameSys}],execute:function(){var c;o._RF.push({},"16a52zennpH45V0IbIVrqU+","Launch",void 0);var s=e.ccclass;e.property,n("Launch",s("Launch")(c=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var e=o.prototype;return e.onLoad=function(){this.init()},e.onDestroy=function(){this.myDestroy()},e.init=function(){r.init()},e.myDestroy=function(){r.myDestroy()},o}(i))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/LevelSys.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,c,s;return{setters:[function(e){t=e.createClass},function(e){n=e.cclegacy,c=e._decorator,s=e.director}],execute:function(){var i,r;n._RF.push({},"ddd5evjDg1NkaaQ0zIaIUW1","LevelSys",void 0);var o=c.ccclass;c.property,e("LevelSys",o("LevelSys")(((r=function(){function e(){this._curLevelId=void 0,this._curLevelId=1}var n=e.prototype;return n.myDestroy=function(){e.instance==this&&(e._instance=null)},n.toNextLevel=function(){this._curLevelId++,s.loadScene("Level_"+this._curLevelId)},t(e,null,[{key:"instance",get:function(){return this._instance||(this._instance=new e),this._instance}}]),e}())._instance=void 0,i=r))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AreaEffect.ts","./AreaEffectChangeRabbitSpeed.ts","./AreaEffectChangeWolfSpeed.ts","./AreaEffectKillWolf.ts","./AreaEffectKnockbackWolf.ts","./AreaTrigger.ts","./DrawLineCtr.ts","./DrawLineSys.ts","./GameSys.ts","./Launch.ts","./LevelSys.ts","./MyLine.ts","./RestartBtn.ts","./Obstacle.ts","./Rabbit.ts","./SingleTouchCtr.ts","./Target.ts","./Wolf.ts","./WolfDetector.ts","./WolfGroup.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MyLine.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DrawLineSys.ts","./GameSys.ts"],(function(e){"use strict";var t,n,i,s,r,a,o,l,h,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,s=e.assertThisInitialized,r=e.createForOfIteratorHelperLoose},function(e){a=e.cclegacy,o=e._decorator,l=e.Line,h=e.Component},function(e){c=e.DrawLineSys},function(e){u=e.GameSys}],execute:function(){var y,p,v,d,f;a._RF.push({},"822f2bg32xB7q9I0TiHBGSl","MyLine",void 0);var _=o.ccclass,L=o.property;e("MyLine",(y=_("MyLine"),p=L({type:l,visible:!0,displayName:"线模板"}),y((f=t((d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this)._drawLineSys=void 0,i(t,"_lineTemplate",f,s(t)),t._lines=void 0,t}n(t,e);var a=t.prototype;return a.start=function(){this.init(u.instance.drawLineSys)},a.onDestroy=function(){this.myDestroy()},a.init=function(e){var t,n;this._drawLineSys=e,this._drawLineSys.eventTarget.on(c.CreatePointEvent,this.onCreatePoints,this),this._drawLineSys.eventTarget.on(c.EndDrawEvent,this.onEndDraw,this),this._lines=new Array,null==(t=u.instance)||null==(n=t.eventTarget)||n.on(u.RestartEvent,this.onRestart,this)},a.myDestroy=function(){var e,t;this._drawLineSys&&(this._drawLineSys.eventTarget.off(c.CreatePointEvent,this.onCreatePoints,this),this._drawLineSys.eventTarget.off(c.EndDrawEvent,this.onEndDraw,this),this._drawLineSys=null),this.clearLines(),this._lines=null,null==(e=u.instance)||null==(t=e.eventTarget)||t.off(u.RestartEvent,this.onRestart,this)},a.onCreatePoints=function(e){this.drawLine(e)},a.onEndDraw=function(e,t){e||this.clearLines()},a.drawLine=function(e){for(var t=Math.ceil(e.length/100),n=Math.max(0,t-this._lines.length),i=0;i<n;i++){var s=this._lineTemplate.node.addComponent(l);s.width=this._lineTemplate.width,s.color=this._lineTemplate.color,this._lines.push(s)}for(var a,o=new Array,h=r(e);!(a=h()).done;){var c=a.value;o.push(c)}for(var u=0;u<this._lines.length;u++){var y=o.splice(0,Math.min(99,o.length));o[0]&&y.push(o[0]),this._lines[u].positions=y}},a.clearLines=function(){for(var e,t=r(this._lines);!(e=t()).done;){e.value.destroy()}this._lines.splice(0,this._lines.length)},a.onRestart=function(){this.clearLines()},t}(h)).prototype,"_lineTemplate",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=d))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Obstacle.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,o,c;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,c=t.Component}],execute:function(){var r;e._RF.push({},"a83b0WggKtA8b1m61beSjVF","Obstacle",void 0);var s=o.ccclass;o.property,t("Obstacle",s("Obstacle")(r=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){this.init()},o.onDestroy=function(){this.myDestroy()},o.update=function(t){},o.init=function(){},o.myDestroy=function(){},e}(c))||r);e._RF.pop()}}}));

System.register("chunks:///_virtual/Rabbit.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts"],(function(e){"use strict";var i,t,o,n,r,s,a,d,l,h,v,u,c;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized,r=e.createForOfIteratorHelperLoose},function(e){s=e.cclegacy,a=e._decorator,d=e.CCFloat,l=e.SphereCollider,h=e.Vec3,v=e.PhysicsSystem,u=e.Component},function(e){c=e.GameSys}],execute:function(){var p,_,f,g,m,y,w,S,b,P,M,z;s._RF.push({},"480davk2ntOqpQuO11JBbSQ","Rabbit",void 0);var R=a.ccclass,F=a.property;e("Rabbit",(p=R("Rabbit"),_=F({type:d,visible:!0,displayName:"默认移动速度"}),f=F({type:l,visible:!0,displayName:"触发器"}),g=F({type:d,visible:!0,displayName:"触发器半径：画线时"}),m=F({type:d,visible:!0,displayName:"触发器半径：运动时"}),p(((z=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(i=e.call.apply(e,[this].concat(r))||this)._initPos=void 0,i._initForward=void 0,o(i,"_defaultMoveSpeed",S,n(i)),i._moveSpeed=void 0,i._movePoints=void 0,i._isInMove=void 0,o(i,"_trigger",b,n(i)),o(i,"_triggerSizeWhenDraw",P,n(i)),o(i,"_triggerSizeWhenMove",M,n(i)),i}t(i,e);var s=i.prototype;return s.setTriggerRadius=function(e){this._trigger.radius=e},s.init=function(){this._initPos=new h(this.node.worldPosition.x,this.node.worldPosition.y,this.node.worldPosition.z),this._initForward=new h(this.node.forward.x,this.node.forward.y,this.node.forward.z),this._isInMove=!1,this._movePoints=null,this.resetState()},s.update=function(e){if(v.instance.fixedTimeStep=e,this._isInMove){var i,t=0;do{if(t>=this._movePoints.length)break;i=this._movePoints[t],t++}while(h.distance(this.node.worldPosition,i)<=this._moveSpeed*e);this._movePoints.splice(0,t-1);var o=new h(this.node.worldPosition.x,this.node.worldPosition.y,this.node.worldPosition.z);this.node.forward=o.subtract(i).normalize();var n=this.node.getWorldPosition().add(this.node.forward.multiplyScalar(this._moveSpeed*e*-1));this.node.setWorldPosition(n),1==this._movePoints.length&&(console.info("到达目的地"),this._isInMove=!1,c.instance.GameOver(!0))}},s.myDestroy=function(){this._initPos=h.ZERO,this._initForward=h.ZERO,this._isInMove=!1,this._movePoints=null},s.move=function(e){if(e){this._movePoints=new Array;for(var i,t=r(e);!(i=t()).done;){var o=i.value;this._movePoints.push(o)}this._isInMove=!0,this.setTriggerRadius(this._triggerSizeWhenMove)}},s.catch=function(){this._isInMove=!1},s.resetState=function(){this.node.setWorldPosition(this._initPos),this.node.forward=this._initForward,this.setTriggerRadius(this._triggerSizeWhenDraw),this.resetMoveSpeed()},s.resetMoveSpeed=function(){this._moveSpeed=this._defaultMoveSpeed},s.setMoveSpeed=function(e){this._moveSpeed=e},s.setMoveSpeedFactor=function(e){this.setMoveSpeed(this._defaultMoveSpeed*e)},i}(u)).arriveDistance=1,S=i((w=z).prototype,"_defaultMoveSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),b=i(w.prototype,"_trigger",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=i(w.prototype,"_triggerSizeWhenDraw",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),M=i(w.prototype,"_triggerSizeWhenMove",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),y=w))||y));s._RF.pop()}}}));

System.register("chunks:///_virtual/RestartBtn.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts","./LevelSys.ts"],(function(t){"use strict";var e,i,n,s,a,o,r,l,c,u,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,r=t.Button,l=t.Label,c=t.Component},function(t){u=t.GameSys},function(t){h=t.LevelSys}],execute:function(){var y,v,p,_,f,m,b,d,g;a._RF.push({},"8c7269Tw4ZLALrOFvURZdaY","RestartBtn",void 0);var L=o.ccclass,S=o.property;t("RestartBtn",(y=L("RestartBtn"),v=S({type:r,visible:!0,displayName:"按钮"}),p=S({type:l,visible:!0,displayName:"结果"}),_=S({type:Boolean,visible:!0,displayName:"是否是最后一关"}),y((b=e((m=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,n(e,"_btn",b,s(e)),n(e,"_label",d,s(e)),n(e,"_isLastLevel",g,s(e)),e._isSuccess=void 0,e._gameSys=void 0,e}i(e,t);var a=e.prototype;return a.start=function(){this.init(u.instance)},a.onDestroy=function(){this.myDestroy()},a.init=function(t){this._btn.node.on(r.EventType.CLICK,this.onclickBtn,this),this._gameSys=t,this._gameSys.eventTarget.on(u.GameOverEvent,this.onGameOver,this),this.hide()},a.myDestroy=function(){var t,e,i;(null==(t=this._btn)||null==(e=t.node)||e.off(r.EventType.CLICK,this.onclickBtn,this),this._gameSys)&&(null==(i=this._gameSys.eventTarget)||i.off(u.GameOverEvent,this.onGameOver,this),this._gameSys=null)},a.onGameOver=function(t){this._isSuccess=t,this._label.string=this._isSuccess?"胜利":"失败",this.show()},a.onclickBtn=function(){this._isSuccess&&!this._isLastLevel?h.instance.toNextLevel():(this._gameSys.Restart(),this.hide())},a.hide=function(){this._btn.node.active=!1},a.show=function(){this._btn.node.active=!0},e}(c)).prototype,"_btn",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=e(m.prototype,"_label",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=e(m.prototype,"_isLastLevel",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=m))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/SingleTouchCtr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,i,c,h;return{setters:[function(t){e=t.createClass},function(t){n=t.cclegacy,o=t._decorator,i=t.input,c=t.Input,h=t.EventTarget}],execute:function(){n._RF.push({},"54698923mJMKI8rgIkWSgRh","SingleTouchCtr",void 0);o.ccclass,o.property;var u=t("SingleTouchCtr",function(){function t(){this._touchId=void 0,this._eventTarget=void 0,i.on(c.EventType.TOUCH_START,this.onTouchStart,this),i.on(c.EventType.TOUCH_MOVE,this.onTouchMove,this),i.on(c.EventType.TOUCH_END,this.onTouchEnd,this),this.resetTouchId(),this._eventTarget=new h}var n=t.prototype;return n.myDestroy=function(){i.off(c.EventType.TOUCH_START,this.onTouchStart,this),i.off(c.EventType.TOUCH_MOVE,this.onTouchMove,this),i.off(c.EventType.TOUCH_END,this.onTouchEnd,this),this._eventTarget=null,t.instance==this&&(t._instance=null)},n.resetTouchId=function(){this._touchId=t.defaultTouchId},n.hasTouchId=function(){return this._touchId!=t.defaultTouchId},n.onTouchStart=function(e){this.hasTouchId()||(this._touchId=e.touch.getID(),this.eventTarget.emit(t.SingleTouchDownEvent,e.touch.getLocation()))},n.onTouchMove=function(e){this._touchId==e.touch.getID()&&this.eventTarget.emit(t.SingleTouchMoveEvent,e.touch.getLocation())},n.onTouchEnd=function(e){this._touchId==e.touch.getID()&&(this.eventTarget.emit(t.SingleTouchUpEvent,e.touch.getLocation()),this.resetTouchId())},e(t,[{key:"eventTarget",get:function(){return this._eventTarget}}],[{key:"instance",get:function(){return this._instance||(this._instance=new t),this._instance}}]),t}());u._instance=void 0,u.defaultTouchId=-1,u.SingleTouchDownEvent="SingleTouchDownEvent",u.SingleTouchMoveEvent="SingleTouchMoveEvent",u.SingleTouchUpEvent="SingleTouchUpEvent",n._RF.pop()}}}));

System.register("chunks:///_virtual/Target.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,e,n,o;return{setters:[function(t){r=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,o=t.Component}],execute:function(){var c;e._RF.push({},"3b072q0g/JBMJs9KBh8+LyL","Target",void 0);var i=n.ccclass;n.property,t("Target",i("Target")(c=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.init=function(){},n.myDestroy=function(){},e}(o))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/Wolf.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts","./WolfDetector.ts"],(function(t){"use strict";var i,e,o,a,n,r,s,c,l,h,d,u,_;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){n=t.cclegacy,r=t._decorator,s=t.CCFloat,c=t.RigidBody,l=t.BoxCollider,h=t.Vec3,d=t.Component},function(t){u=t.GameSys},function(t){_=t.WolfDetector}],execute:function(){var b,p,f,v,y,m,w,k,M,S,P,g,F,x;n._RF.push({},"690dbSYUQVP77xBxilH5jbT","Wolf",void 0);var V=r.ccclass,z=r.property;t("Wolf",(b=V("Wolf"),p=z({type:s,visible:!0,displayName:"默认最大移动速度"}),f=z({type:s,visible:!0,displayName:"默认加速度"}),v=z({type:c,visible:!0,displayName:"刚体"}),y=z({type:l,visible:!0,displayName:"碰撞体"}),m=z({type:_,visible:!0,displayName:"视野"}),b(((x=function(t){function i(){for(var i,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(i=t.call.apply(t,[this].concat(n))||this)._initPos=void 0,i._initForward=void 0,o(i,"_defaultMaxMoveSpeed",M,a(i)),i._maxMoveSpeed=void 0,o(i,"_defaultAcceleration",S,a(i)),i._acceleration=void 0,o(i,"_rb",P,a(i)),o(i,"_col",g,a(i)),i._rabbit=void 0,i._isInMove=void 0,o(i,"_detector",F,a(i)),i._isInKnockBack=void 0,i}e(i,t);var n=i.prototype;return n.init=function(t){this._initPos=new h(this.node.worldPosition.x,this.node.worldPosition.y,this.node.worldPosition.z),this._initForward=new h(this.node.forward.x,this.node.forward.y,this.node.forward.z),this._rabbit=t,this.stopMove(),this._col.enabled=!1,this._detector.init(this,this._rabbit),this.resetState()},n.update=function(t){!this._isInKnockBack&&this._isInMove&&(this.adjustVelocity(.016667),this.adjustForward(),this.canCatch()&&this.catch())},n.myDestroy=function(){this._initPos=h.ZERO,this._initForward=h.ZERO,this._rabbit=null,this.stopMove(),this._detector.myDestroy()},n.startCheck=function(){this._col.enabled=!0,this._rb.linearFactor=h.ZERO,this._rb.angularFactor=h.ZERO,this._detector.startCheck()},n.startMove=function(){this._rb.linearFactor=h.ONE,this._rb.angularFactor=h.ONE,this._isInMove=!0,this._rb.setLinearVelocity(new h(0,0,1))},n.adjustVelocity=function(t){var i=new h;h.subtract(i,this._rabbit.node.worldPosition,this.node.worldPosition);var e=(i=i.normalize()).multiplyScalar(this._rb.mass*this._acceleration*1e3*t);this._rb.applyForce(e);var o=new h;this._rb.getLinearVelocity(o),o.length()>this._maxMoveSpeed&&this._rb.setLinearVelocity(o.normalize().multiplyScalar(this._maxMoveSpeed))},n.adjustForward=function(){var t=new h;this._rb.getLinearVelocity(t),t=t.normalize(),this.node.forward=t.negative()},n.canCatch=function(){return h.distance(this.node.worldPosition,this._rabbit.node.worldPosition)<=i.catchDistance},n.catch=function(){this.stopMove(),this._rabbit.catch(),u.instance.GameOver(!1)},n.stopMove=function(){this._isInMove&&(this._col.enabled=!1,this._isInMove=!1,this._rb.clearVelocity(),this._rb.enabled=!1,this._rb.enabled=!0)},n.resetState=function(){this.node.setWorldPosition(this._initPos),this.node.forward=this._initForward,this._detector.stopCheck(),this.resetSpeedParam(),this.stopKnockback(),this.relive(),this._rb.clearVelocity()},n.resetSpeedParam=function(){this.setSpeedParam(this._defaultMaxMoveSpeed,this._defaultAcceleration)},n.setSpeedParam=function(t,i){this._maxMoveSpeed=t,this._acceleration=i},n.setSpeedParamFactor=function(t,i){this.setSpeedParam(this._defaultMaxMoveSpeed*t,this._defaultAcceleration*i)},n.startKnockback=function(t,i){var e=this;this._isInKnockBack=!0;var o=new h;this._rb.getLinearVelocity(o),o=o.normalize().negative().multiplyScalar(i),this._rb.setLinearVelocity(o),setTimeout((function(){e.stopKnockback()}),1e3*t)},n.stopKnockback=function(){this._isInKnockBack&&(this._rb.clearVelocity(),this._isInKnockBack=!1,this._rb.setLinearVelocity(new h(0,0,1)))},n.kill=function(){this.stopKnockback(),this.stopMove(),this.node.active=!1},n.relive=function(){this.node.active=!0},i}(d)).catchDistance=1,M=i((k=x).prototype,"_defaultMaxMoveSpeed",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 11}}),S=i(k.prototype,"_defaultAcceleration",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),P=i(k.prototype,"_rb",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=i(k.prototype,"_col",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(k.prototype,"_detector",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=k))||w));n._RF.pop()}}}));

System.register("chunks:///_virtual/WolfDetector.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,o,n,c,s,r,a,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){c=t.cclegacy,s=t._decorator,r=t.CCFloat,a=t.Vec3,l=t.Component}],execute:function(){var h,u,p,f,_;c._RF.push({},"f1236Fhs11NxKzVZm9e2lmO","WolfDetector",void 0);var d=s.ccclass,y=s.property;t("WolfDetector",(h=d("WolfDetector"),u=y({type:r,visible:!0,displayName:"检测距离"}),h((_=e((f=function(t){function e(){for(var e,i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))||this)._wolf=void 0,e._target=void 0,o(e,"_checkDistance",_,n(e)),e._isInCheck=void 0,e}i(e,t);var c=e.prototype;return c.update=function(t){this._isInCheck&&a.distance(this._wolf.node.position,this._target.node.position)<=this._checkDistance&&(this._wolf.startMove(),this.stopCheck())},c.init=function(t,e){this._wolf=t,this._target=e,this.stopCheck();var i=new a(1,1,1).multiplyScalar(2*this._checkDistance);this.node.setWorldScale(i)},c.myDestroy=function(){this._wolf=null,this._target=null},c.startCheck=function(){this._isInCheck=!0},c.stopCheck=function(){this._isInCheck=!1},e}(l)).prototype,"_checkDistance",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),p=f))||p));c._RF.pop()}}}));

System.register("chunks:///_virtual/WolfGroup.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Wolf.ts"],(function(t){"use strict";var e,o,s,i,r,l;return{setters:[function(t){e=t.createForOfIteratorHelperLoose,o=t.createClass},function(t){s=t.cclegacy,i=t._decorator,r=t.director},function(t){l=t.Wolf}],execute:function(){var n;s._RF.push({},"adafeIIF1hCKLEf9Eus8dH0","WolfGroup",void 0);var v=i.ccclass;i.property,t("WolfGroup",v("WolfGroup")(n=function(){function t(t){this._rabbit=void 0,this._wolves=void 0,this._rabbit=t,this._wolves=r.getScene().getComponentsInChildren(l);for(var o,s=e(this._wolves);!(o=s()).done;){o.value.init(this._rabbit)}}var s=t.prototype;return s.myDestroy=function(){if(this.wolvesExist){for(var t,o=e(this._wolves);!(t=o()).done;){t.value.myDestroy()}this._wolves.splice(0,this._wolves.length),this._wolves=null}this._rabbit=null},s.startCheck=function(){if(this.wolvesExist)for(var t,o=e(this._wolves);!(t=o()).done;){t.value.startCheck()}},s.stopMove=function(){if(this.wolvesExist)for(var t,o=e(this._wolves);!(t=o()).done;){t.value.stopMove()}},s.resetState=function(){if(this.wolvesExist)for(var t,o=e(this._wolves);!(t=o()).done;){t.value.resetState()}},o(t,[{key:"wolvesExist",get:function(){return this._wolves&&this._wolves.length>0}}]),t}())||n);s._RF.pop()}}}));

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
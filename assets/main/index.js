System.register("chunks:///_virtual/DrawLineCtr.ts",["cc","./Rabbit.ts","./SingleTouchCtr.ts","./Target.ts"],(function(t){"use strict";var n,e,i,s,o,c,h;return{setters:[function(t){n=t.cclegacy,e=t._decorator,i=t.PhysicsSystem,s=t.geometry},function(t){o=t.Rabbit},function(t){c=t.SingleTouchCtr},function(t){h=t.Target}],execute:function(){var r;n._RF.push({},"ae514uqyk5DZq5w8VUrGUAd","DrawLineCtr",void 0);var u=e.ccclass;e.property,t("DrawLineCtr",u("DrawLineCtr")(r=function(){function t(t,n,e){this._touchCtr=void 0,this._sys=void 0,this._cam=void 0,this._ray=void 0,this._canCheck=void 0,this._touchCtr=t,this._touchCtr.eventTarget.on(c.SingleTouchDownEvent,this.onTouchBegin,this),this._touchCtr.eventTarget.on(c.SingleTouchUpEvent,this.onTouchEnd,this),this._sys=n,this._cam=e,this._ray=new s.Ray,this.enableCheck()}var n=t.prototype;return n.myDestroy=function(){var t,n;this._touchCtr&&(null==(t=this._touchCtr.eventTarget)||t.off(c.SingleTouchDownEvent,this.onTouchBegin,this),null==(n=this._touchCtr.eventTarget)||n.off(c.SingleTouchUpEvent,this.onTouchEnd,this),this._touchCtr=null);this._sys=null,this._cam=null,this._ray=null,this.disableCheck()},n.onTouchBegin=function(t){this._canCheck&&this.isTouchedRabbit(t)&&this._sys.beginDraw()},n.onTouchEnd=function(t){this._canCheck&&this._sys.endDraw(this.isTouchedTarget(t))},n.getTouchNode=function(t){var n=null;(this._cam.screenPointToRay(t.x,t.y,this._ray),i.instance.raycastClosest(this._ray))&&(n=i.instance.raycastClosestResult.collider.node);return n},n.isTouchedRabbit=function(t){var n;return null!=(null==(n=this.getTouchNode(t))?void 0:n.getComponent(o))},n.isTouchedTarget=function(t){var n;return null!=(null==(n=this.getTouchNode(t))?void 0:n.getComponent(h))},n.enableCheck=function(){this._canCheck=!0},n.disableCheck=function(){this._canCheck=!1},t}())||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/DrawLineSys.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SingleTouchCtr.ts"],(function(t){"use strict";var i,e,n,s,o,h,r,a;return{setters:[function(t){i=t.createClass},function(t){e=t.cclegacy,n=t._decorator,s=t.PhysicsSystem,o=t.Vec3,h=t.geometry,r=t.EventTarget},function(t){a=t.SingleTouchCtr}],execute:function(){var c,u;e._RF.push({},"0358aKsvtNMUYr+eRL0Ua2R","DrawLineSys",void 0);var _=n.ccclass;n.property,t("DrawLineSys",_("DrawLineSys")(((u=function(){function t(t,i,e,n){this._touchCtr=void 0,this._cam=void 0,this._ray=void 0,this._beginNode=void 0,this._endNode=void 0,this._points=void 0,this._eventTarget=void 0,this._touchCtr=t,this._cam=i,this._beginNode=e,this._endNode=n,this._ray=new h.Ray,this._points=null,this._eventTarget=new r}var e=t.prototype;return e.myDestroy=function(){this._touchCtr=null,this._cam=null,this._beginNode=null,this._endNode=null,this._ray=null,this._points.splice(0,this._points.length),this._points=null,this._eventTarget=null},e.beginDraw=function(){this._points=new Array,this._points.push(this._beginNode.worldPosition),this._touchCtr.eventTarget.on(a.SingleTouchMoveEvent,this.onTouchMove,this)},e.endDraw=function(i){i?this._points&&this._points.push(this._endNode.worldPosition):this._points&&(this._points.splice(0,this._points.length),this._points=null),this.eventTarget.emit(t.EndDrawEvent,i,this._points),this._touchCtr.eventTarget.off(a.SingleTouchMoveEvent,this.onTouchMove,this)},e.onTouchMove=function(i){if(this._cam.screenPointToRay(i.x,i.y,this._ray),s.instance.raycastClosest(this._ray)){var e=s.instance.raycastClosestResult,n=new o(e.hitPoint.x,this._beginNode.worldPosition.y,e.hitPoint.z);this._points.push(n),this.eventTarget.emit(t.CreatePointEvent,this._points)}},i(t,[{key:"eventTarget",get:function(){return this._eventTarget}}]),t}()).CreatePointEvent="DrawLineSysCreatePointEvent",u.EndDrawEvent="DrawLineSysEndDrawEvent",c=u))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/GameSys.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DrawLineCtr.ts","./DrawLineSys.ts","./Rabbit.ts","./SingleTouchCtr.ts","./Target.ts","./WolfGroup.ts"],(function(t){"use strict";var n,e,i,s,a,r,o,c,_,h,u,l;return{setters:[function(t){n=t.createClass},function(t){e=t.cclegacy,i=t._decorator,s=t.director,a=t.Camera,r=t.EventTarget},function(t){o=t.DrawLineCtr},function(t){c=t.DrawLineSys},function(t){_=t.Rabbit},function(t){h=t.SingleTouchCtr},function(t){u=t.Target},function(t){l=t.WolfGroup}],execute:function(){var v,w;e._RF.push({},"902b55p265Hw7bmcu79XEX6","GameSys",void 0);var d=i.ccclass;i.property,t("GameSys",d("GameSys")(((w=function(){function t(){this._rabbit=void 0,this._target=void 0,this._drawLineSys=void 0,this._drawLineCtr=void 0,this._wolfGroup=void 0,this._eventTarget=void 0,this._eventTarget=new r}t.init=function(){if(!t.instance){this._instance=new t,this._instance._rabbit=s.getScene().getComponentInChildren(_),this._instance._rabbit.init(),this._instance._target=s.getScene().getComponentInChildren(u),this._instance._target.init();var n=s.getScene().getChildByName("Main Camera").getComponent(a);this._instance._drawLineSys=new c(h.instance,n,this._instance._rabbit.node,this._instance._target.node),this._instance._drawLineSys.eventTarget.on(c.EndDrawEvent,this._instance.onEndDraw,this._instance),this._instance._drawLineCtr=new o(h.instance,this._instance._drawLineSys,n),this._instance._wolfGroup=new l(this._instance._rabbit)}},t.myDestroy=function(){t.instance&&(this._instance._wolfGroup&&(this._instance._wolfGroup.myDestroy(),this._instance._wolfGroup=null),this._instance._rabbit&&(this._instance._rabbit.myDestroy(),this._instance._rabbit=null),this._instance._target&&(this._instance._target.myDestroy(),this._instance._target=null),this._instance._drawLineSys.eventTarget.off(c.EndDrawEvent,this._instance.onEndDraw,this._instance),this._instance._drawLineSys.myDestroy(),this._instance._drawLineSys=null,this._instance._drawLineCtr.myDestroy(),this._instance._drawLineCtr=null,this._instance._eventTarget=null,this._instance=null)};var e=t.prototype;return e.onEndDraw=function(t,n){t&&(this._drawLineCtr.disableCheck(),this.beginChase(n))},e.beginChase=function(t){this._rabbit.move(t),this._wolfGroup.move()},e.GameOver=function(n){this._wolfGroup.stopMove(),this.eventTarget.emit(t.GameOverEvent,n)},e.Restart=function(){this._drawLineCtr.enableCheck(),this._rabbit.resetPos(),this._wolfGroup.resetPos(),this.eventTarget.emit(t.RestartEvent)},n(t,[{key:"drawLineSys",get:function(){return this._drawLineSys}},{key:"eventTarget",get:function(){return this._eventTarget}}],[{key:"instance",get:function(){return this._instance}}]),t}())._instance=void 0,w.GameOverEvent="GameSysGameOverEvent",w.RestartEvent="GameSysRestartEvent",v=w))||v);e._RF.pop()}}}));

System.register("chunks:///_virtual/Launch.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts"],(function(n){"use strict";var t,o,e,i,r;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,e=n._decorator,i=n.Component},function(n){r=n.GameSys}],execute:function(){var c;o._RF.push({},"16a52zennpH45V0IbIVrqU+","Launch",void 0);var s=e.ccclass;e.property,n("Launch",s("Launch")(c=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var e=o.prototype;return e.onLoad=function(){this.init()},e.onDestroy=function(){this.myDestroy()},e.init=function(){r.init()},e.myDestroy=function(){r.myDestroy()},o}(i))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./DrawLineCtr.ts","./DrawLineSys.ts","./GameSys.ts","./Launch.ts","./MyLine.ts","./RestartBtn.ts","./Rabbit.ts","./SingleTouchCtr.ts","./Target.ts","./Wolf.ts","./WolfGroup.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MyLine.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DrawLineSys.ts","./GameSys.ts"],(function(e){"use strict";var t,n,i,s,r,a,o,l,h,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,s=e.assertThisInitialized,r=e.createForOfIteratorHelperLoose},function(e){a=e.cclegacy,o=e._decorator,l=e.Line,h=e.Component},function(e){c=e.DrawLineSys},function(e){u=e.GameSys}],execute:function(){var y,p,v,d,f;a._RF.push({},"822f2bg32xB7q9I0TiHBGSl","MyLine",void 0);var _=o.ccclass,L=o.property;e("MyLine",(y=_("MyLine"),p=L({type:l,visible:!0,displayName:"线模板"}),y((f=t((d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this)._drawLineSys=void 0,i(t,"_lineTemplate",f,s(t)),t._lines=void 0,t}n(t,e);var a=t.prototype;return a.start=function(){this.init(u.instance.drawLineSys)},a.onDestroy=function(){this.myDestroy()},a.init=function(e){var t,n;this._drawLineSys=e,this._drawLineSys.eventTarget.on(c.CreatePointEvent,this.onCreatePoints,this),this._drawLineSys.eventTarget.on(c.EndDrawEvent,this.onEndDraw,this),this._lines=new Array,null==(t=u.instance)||null==(n=t.eventTarget)||n.on(u.RestartEvent,this.onRestart,this)},a.myDestroy=function(){var e,t;this._drawLineSys&&(this._drawLineSys.eventTarget.off(c.CreatePointEvent,this.onCreatePoints,this),this._drawLineSys.eventTarget.off(c.EndDrawEvent,this.onEndDraw,this),this._drawLineSys=null),this.clearLines(),this._lines=null,null==(e=u.instance)||null==(t=e.eventTarget)||t.off(u.RestartEvent,this.onRestart,this)},a.onCreatePoints=function(e){this.drawLine(e)},a.onEndDraw=function(e,t){e||this.clearLines()},a.drawLine=function(e){for(var t=Math.ceil(e.length/100),n=Math.max(0,t-this._lines.length),i=0;i<n;i++){var s=this._lineTemplate.node.addComponent(l);s.width=this._lineTemplate.width,s.color=this._lineTemplate.color,this._lines.push(s)}for(var a,o=new Array,h=r(e);!(a=h()).done;){var c=a.value;o.push(c)}for(var u=0;u<this._lines.length;u++){var y=o.splice(0,Math.min(99,o.length));o[0]&&y.push(o[0]),this._lines[u].positions=y}},a.clearLines=function(){for(var e,t=r(this._lines);!(e=t()).done;){e.value.destroy()}this._lines.splice(0,this._lines.length)},a.onRestart=function(){this.clearLines()},t}(h)).prototype,"_lineTemplate",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=d))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Rabbit.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts"],(function(i){"use strict";var o,t,e,n,s,r,a,d,h,l,c;return{setters:[function(i){o=i.applyDecoratedDescriptor,t=i.inheritsLoose,e=i.initializerDefineProperty,n=i.assertThisInitialized,s=i.createForOfIteratorHelperLoose},function(i){r=i.cclegacy,a=i._decorator,d=i.CCFloat,h=i.Vec3,l=i.Component},function(i){c=i.GameSys}],execute:function(){var v,u,_,f,p,P;r._RF.push({},"480davk2ntOqpQuO11JBbSQ","Rabbit",void 0);var w=a.ccclass,m=a.property;i("Rabbit",(v=w("Rabbit"),u=m({type:d,visible:!0,displayName:"移动速度"}),v(((P=function(i){function o(){for(var o,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(o=i.call.apply(i,[this].concat(s))||this)._initPos=void 0,o._initForward=void 0,e(o,"_moveSpeed",p,n(o)),o._movePoints=void 0,o._isInMove=void 0,o}t(o,i);var r=o.prototype;return r.init=function(){this._initPos=new h(this.node.worldPosition.x,this.node.worldPosition.y,this.node.worldPosition.z),this._initForward=new h(this.node.forward.x,this.node.forward.y,this.node.forward.z),this._isInMove=!1,this._movePoints=null},r.update=function(i){if(this._isInMove){var t,e=0;do{if(e>=this._movePoints.length)break;t=this._movePoints[e],e++}while(h.distance(this.node.worldPosition,t)<=o.arriveDistance);this._movePoints.splice(0,e-1);var n=new h(this.node.worldPosition.x,this.node.worldPosition.y,this.node.worldPosition.z);this.node.forward=n.subtract(t).normalize(),this.node.worldPosition.add(this.node.forward.multiplyScalar(this._moveSpeed*i*-1)),this.node.setWorldPosition(this.node.worldPosition),1==this._movePoints.length&&(console.info("到达目的地"),this._isInMove=!1,c.instance.GameOver(!0))}},r.myDestroy=function(){this._initPos=h.ZERO,this._initForward=h.ZERO,this._isInMove=!1,this._movePoints=null},r.move=function(i){if(i){this._movePoints=new Array;for(var o,t=s(i);!(o=t()).done;){var e=o.value;this._movePoints.push(e)}this._isInMove=!0}},r.catch=function(){this._isInMove=!1},r.resetPos=function(){this.node.setWorldPosition(this._initPos),this.node.forward=this._initForward},o}(l)).arriveDistance=.1,p=o((f=P).prototype,"_moveSpeed",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),_=f))||_));r._RF.pop()}}}));

System.register("chunks:///_virtual/RestartBtn.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts"],(function(t){"use strict";var e,n,i,s,r,a,o,l,c,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,o=t.Button,l=t.Label,c=t.Component},function(t){h=t.GameSys}],execute:function(){var u,y,p,v,f,m,_;r._RF.push({},"8c7269Tw4ZLALrOFvURZdaY","RestartBtn",void 0);var b=a.ccclass,d=a.property;t("RestartBtn",(u=b("RestartBtn"),y=d({type:o,visible:!0,displayName:"按钮"}),p=d({type:l,visible:!0,displayName:"结果"}),u((m=e((f=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,i(e,"_btn",m,s(e)),i(e,"_label",_,s(e)),e._gameSys=void 0,e}n(e,t);var r=e.prototype;return r.start=function(){this.init(h.instance)},r.onDestroy=function(){this.myDestroy()},r.init=function(t){this._btn.node.on(o.EventType.CLICK,this.onclickBtn,this),this._gameSys=t,this._gameSys.eventTarget.on(h.GameOverEvent,this.onGameOver,this),this.hide()},r.myDestroy=function(){var t,e,n;(null==(t=this._btn)||null==(e=t.node)||e.off(o.EventType.CLICK,this.onclickBtn,this),this._gameSys)&&(null==(n=this._gameSys.eventTarget)||n.off(h.GameOverEvent,this.onGameOver,this),this._gameSys=null)},r.onGameOver=function(t){this._label.string=t?"胜利":"失败",this.show()},r.onclickBtn=function(){this._gameSys.Restart(),this.hide()},r.hide=function(){this._btn.node.active=!1},r.show=function(){this._btn.node.active=!0},e}(c)).prototype,"_btn",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=e(f.prototype,"_label",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=f))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/SingleTouchCtr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,i,c,h;return{setters:[function(t){e=t.createClass},function(t){n=t.cclegacy,o=t._decorator,i=t.input,c=t.Input,h=t.EventTarget}],execute:function(){n._RF.push({},"54698923mJMKI8rgIkWSgRh","SingleTouchCtr",void 0);o.ccclass,o.property;var u=t("SingleTouchCtr",function(){function t(){this._touchId=void 0,this._eventTarget=void 0,i.on(c.EventType.TOUCH_START,this.onTouchStart,this),i.on(c.EventType.TOUCH_MOVE,this.onTouchMove,this),i.on(c.EventType.TOUCH_END,this.onTouchEnd,this),this.resetTouchId(),this._eventTarget=new h}var n=t.prototype;return n.myDestroy=function(){i.off(c.EventType.TOUCH_START,this.onTouchStart,this),i.off(c.EventType.TOUCH_MOVE,this.onTouchMove,this),i.off(c.EventType.TOUCH_END,this.onTouchEnd,this),this._eventTarget=null,t.instance==this&&(t._instance=null)},n.resetTouchId=function(){this._touchId=t.defaultTouchId},n.hasTouchId=function(){return this._touchId!=t.defaultTouchId},n.onTouchStart=function(e){this.hasTouchId()||(this._touchId=e.touch.getID(),this.eventTarget.emit(t.SingleTouchDownEvent,e.touch.getLocation()))},n.onTouchMove=function(e){this._touchId==e.touch.getID()&&this.eventTarget.emit(t.SingleTouchMoveEvent,e.touch.getLocation())},n.onTouchEnd=function(e){this._touchId==e.touch.getID()&&(this.eventTarget.emit(t.SingleTouchUpEvent,e.touch.getLocation()),this.resetTouchId())},e(t,[{key:"eventTarget",get:function(){return this._eventTarget}}],[{key:"instance",get:function(){return this._instance||(this._instance=new t),this._instance}}]),t}());u._instance=void 0,u.defaultTouchId=-1,u.SingleTouchDownEvent="SingleTouchDownEvent",u.SingleTouchMoveEvent="SingleTouchMoveEvent",u.SingleTouchUpEvent="SingleTouchUpEvent",n._RF.pop()}}}));

System.register("chunks:///_virtual/Target.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,e,n,o;return{setters:[function(t){r=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,o=t.Component}],execute:function(){var c;e._RF.push({},"3b072q0g/JBMJs9KBh8+LyL","Target",void 0);var i=n.ccclass;n.property,t("Target",i("Target")(c=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.init=function(){},n.myDestroy=function(){},e}(o))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/Wolf.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameSys.ts"],(function(i){"use strict";var t,e,o,n,r,a,s,l,c,d,h,u;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,o=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){r=i.cclegacy,a=i._decorator,s=i.CCFloat,l=i.RigidBody,c=i.BoxCollider,d=i.Vec3,h=i.Component},function(i){u=i.GameSys}],execute:function(){var b,_,p,y,v,f,w,m,P,g,M,z;r._RF.push({},"690dbSYUQVP77xBxilH5jbT","Wolf",void 0);var x=a.ccclass,F=a.property;i("Wolf",(b=x("Wolf"),_=F({type:s,visible:!0,displayName:"最大移动速度"}),p=F({type:s,visible:!0,displayName:"加速度"}),y=F({type:l,visible:!0,displayName:"刚体"}),v=F({type:c,visible:!0,displayName:"碰撞体"}),b(((z=function(i){function t(){for(var t,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(t=i.call.apply(i,[this].concat(r))||this)._initPos=void 0,t._initForward=void 0,o(t,"_maxMoveSpeed",m,n(t)),o(t,"_acceleration",P,n(t)),o(t,"_rb",g,n(t)),o(t,"_col",M,n(t)),t._rabbit=void 0,t._isInMove=void 0,t}e(t,i);var r=t.prototype;return r.init=function(i){this._initPos=new d(this.node.worldPosition.x,this.node.worldPosition.y,this.node.worldPosition.z),this._initForward=new d(this.node.forward.x,this.node.forward.y,this.node.forward.z),this._rabbit=i,this.stopMove(),this._col.enabled=!1},r.update=function(i){this._isInMove&&(this.adjustVelocity(i),this.adjustForward(),this.canCatch()&&this.catch());var t=new d;this._rb.getLinearVelocity(t)},r.myDestroy=function(){this._initPos=d.ZERO,this._initForward=d.ZERO,this._rabbit=null,this.stopMove()},r.move=function(){this._isInMove=!0,this._col.enabled=!0,this._rb.setLinearVelocity(new d(0,0,1))},r.adjustVelocity=function(i){var t=new d;d.subtract(t,this._rabbit.node.worldPosition,this.node.worldPosition);var e=(t=t.normalize()).multiplyScalar(this._rb.mass*this._acceleration*1e3*i);this._rb.applyForce(e);var o=new d;this._rb.getLinearVelocity(o),o.length()>this._maxMoveSpeed&&this._rb.setLinearVelocity(o.normalize().multiplyScalar(this._maxMoveSpeed))},r.adjustForward=function(){var i=new d;this._rb.getLinearVelocity(i),i=i.normalize(),this.node.forward=i.negative()},r.canCatch=function(){return d.distance(this.node.worldPosition,this._rabbit.node.worldPosition)<=t.catchDistance},r.catch=function(){this.stopMove(),this._rabbit.catch(),u.instance.GameOver(!1)},r.stopMove=function(){this._isInMove&&(this._col.enabled=!1,this._isInMove=!1,this._rb.clearVelocity(),this._rb.enabled=!1,this._rb.enabled=!0)},r.resetPos=function(){this.node.setWorldPosition(this._initPos),this.node.forward=this._initForward},t}(h)).catchDistance=1,m=t((w=z).prototype,"_maxMoveSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),P=t(w.prototype,"_acceleration",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),g=t(w.prototype,"_rb",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=t(w.prototype,"_col",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=w))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/WolfGroup.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Wolf.ts"],(function(o){"use strict";var e,t,s,i,r,l;return{setters:[function(o){e=o.createForOfIteratorHelperLoose,t=o.createClass},function(o){s=o.cclegacy,i=o._decorator,r=o.director},function(o){l=o.Wolf}],execute:function(){var n;s._RF.push({},"adafeIIF1hCKLEf9Eus8dH0","WolfGroup",void 0);var v=i.ccclass;i.property,o("WolfGroup",v("WolfGroup")(n=function(){function o(o){this._rabbit=void 0,this._wolves=void 0,this._rabbit=o,this._wolves=r.getScene().getComponentsInChildren(l);for(var t,s=e(this._wolves);!(t=s()).done;){t.value.init(this._rabbit)}}var s=o.prototype;return s.myDestroy=function(){if(this.wolvesExist){for(var o,t=e(this._wolves);!(o=t()).done;){o.value.myDestroy()}this._wolves.splice(0,this._wolves.length),this._wolves=null}this._rabbit=null},s.move=function(){if(this.wolvesExist)for(var o,t=e(this._wolves);!(o=t()).done;){o.value.move()}},s.stopMove=function(){if(this.wolvesExist)for(var o,t=e(this._wolves);!(o=t()).done;){o.value.stopMove()}},s.resetPos=function(){if(this.wolvesExist)for(var o,t=e(this._wolves);!(o=t()).done;){o.value.resetPos()}},t(o,[{key:"wolvesExist",get:function(){return this._wolves&&this._wolves.length>0}}]),o}())||n);s._RF.pop()}}}));

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
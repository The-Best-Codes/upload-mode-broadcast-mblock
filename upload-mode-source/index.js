(function(a,b){if("function"==typeof define&&define.amd)define(["exports"],b);else if("undefined"!=typeof exports)b(exports);else{var c={exports:{}};b(c.exports),a.unknown=c.exports}})(this,function(a){"use strict";function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function c(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),a}function d(a,b){if(!g(a,b))throw new TypeError("Cannot call a class as a function")}function e(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function f(a){return function(){var b=this,c=arguments;return new Promise(function(d,f){function g(a){e(i,d,f,g,h,"next",a)}function h(a){e(i,d,f,g,h,"throw",a)}var i=a.apply(b,c);g(void 0)})}}function g(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):a instanceof b}function h(a){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},h(a)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,!function(a){function b(a,b,c,e){var f=b&&g(b.prototype,d)?b:d,h=Object.create(f.prototype),i=new o(e||[]);return h._invoke=k(a,c,i),h}function c(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function d(){}function e(){}function f(){}function i(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function j(a){function b(d,e,f,g){var i=c(a[d],a,e);if("throw"===i.type)g(i.arg);else{var j=i.arg,k=j.value;return k&&"object"===h(k)&&s.call(k,"__await")?Promise.resolve(k.__await).then(function(a){b("next",a,f,g)},function(a){b("throw",a,f,g)}):Promise.resolve(k).then(function(a){j.value=a,f(j)},function(a){return b("throw",a,f,g)})}}function d(a,c){function d(){return new Promise(function(d,e){b(a,c,d,e)})}return e=e?e.then(d,d):d()}var e;this._invoke=d}function k(a,b,d){var e="suspendedStart";return function(f,g){if(e==="executing")throw new Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;return q()}for(d.method=f,d.arg=g;;){var h=d.delegate;if(h){var i=l(h,d);if(i){if(i===z)continue;return i}}if("next"===d.method)d.sent=d._sent=d.arg;else if("throw"===d.method){if("suspendedStart"===e)throw e="completed",d.arg;d.dispatchException(d.arg)}else"return"===d.method&&d.abrupt("return",d.arg);e="executing";var j=c(a,b,d);if("normal"===j.type){if(e=d.done?"completed":"suspendedYield",j.arg===z)continue;return{value:j.arg,done:d.done}}"throw"===j.type&&(e="completed",d.method="throw",d.arg=j.arg)}}}function l(a,b){var d=a.iterator[b.method];if(void 0===d){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=void 0,l(a,b),"throw"===b.method))return z;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return z}var e=c(d,a.iterator,b.arg);if("throw"===e.type)return b.method="throw",b.arg=e.arg,b.delegate=null,z;var f=e.arg;if(!f)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,z;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0);else return f;return b.delegate=null,z}function m(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function n(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function o(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(m,this),this.reset(!0)}function p(a){if(a){var b=a[u];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(s.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=void 0,b.done=!0,b};return d.next=d}}return{next:q}}function q(){return{value:void 0,done:!0}}var r=Object.prototype,s=r.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},u=t.iterator||"@@iterator",v=t.asyncIterator||"@@asyncIterator",w=t.toStringTag||"@@toStringTag",x="object"===("undefined"==typeof module?"undefined":h(module)),y=a.regeneratorRuntime;if(y)return void(x&&(module.exports=y));y=a.regeneratorRuntime=x?module.exports||{}:{},y.wrap=b;var z={},A={};A[u]=function(){return this};var B=Object.getPrototypeOf,C=B&&B(B(p([])));C&&C!==r&&s.call(C,u)&&(A=C);var D=f.prototype=d.prototype=Object.create(A);e.prototype=D.constructor=f,f.constructor=e,f[w]=e.displayName="GeneratorFunction",y.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===e||"GeneratorFunction"===(b.displayName||b.name))},y.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,f):(a.__proto__=f,!(w in a)&&(a[w]="GeneratorFunction")),a.prototype=Object.create(D),a},y.awrap=function(a){return{__await:a}},i(j.prototype),j.prototype[v]=function(){return this},y.AsyncIterator=j,y.async=function(a,c,d,e){var f=new j(b(a,c,d,e));return y.isGeneratorFunction(c)?f:f.next().then(function(a){return a.done?a.value:f.next()})},i(D),D[w]="Generator",D[u]=function(){return this},D.toString=function(){return"[object Generator]"},y.keys=function(a){var b=[];for(var c in a)b.push(c);return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}return c.done=!0,c}},y.values=p,o.prototype={constructor:o,reset:function reset(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(n),!a)for(var b in this)"t"===b.charAt(0)&&s.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function stop(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if("throw"===b.type)throw b.arg;return this.rval},dispatchException:function dispatchException(a){function b(b,d){return f.type="throw",f.arg=a,c.next=b,d&&(c.method="next",c.arg=void 0),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if("root"===e.tryLoc)return b("end");if(e.tryLoc<=this.prev){var g=s.call(e,"catchLoc"),h=s.call(e,"finallyLoc");if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error("try statement without catch or finally");else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function abrupt(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&s.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var e=c;break}e&&("break"===a||"continue"===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method="next",this.next=e.finallyLoc,z):this.complete(f)},complete:function complete(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),z},finish:function finish(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),n(b),z},catch:function _catch(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var e=d.arg;n(b)}return e}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(a,b,c){return this.delegate={iterator:p(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),z}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":h(self))&&self}()||Function("return this")());var i,j,k,l,m=[],n={},o=[255,85],p=[13,10],q=function(){var a=f(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),r={zh:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},en:{arduino_broadcast:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [MESSAGE] ",BLOCK_1546413597853:"send upload mode message [MESSAGE] with value [VALUE] ",BLOCK_1546413700881:"when receiving upload mode message [MESSAGE] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},de:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},es:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},fr:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},id:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},ja:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},"ja-jph":{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},ko:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},pl:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},uk:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},"zh-hant":{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},nl:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},it:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},hr:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},ru:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},pt:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},fi:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},tr:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"},tk:{arduino_broadcast:"Upload Mode",extensionName:"Upload Mode",extensionDescription:"By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",BLOCK_1546412605792:"send upload mode message [string_1] ",BLOCK_1546413597853:"send upload mode message [string_1] with value [VALUE]",BLOCK_1546413700881:"when receiving upload mode message [string_1] ",BLOCK_1546415356012:"upload mode message value",cate_d9ae47fa:"Upload Mode Broadcast"}},s={arduinoc:{}},t=[{lang:"arduinoc",template:"//( include //)\n\n//( lib //)\n\n//({\n    this.$ALL_VARIABLES.length==0?'':this.$ALL_VARIABLES.map(v=>\"float \"+v+\" = 0;\").join('\\n')\n}//)\n\n//( declare //)\n\nvoid _delay(float seconds) {\n  long endTime = millis() + seconds * 1000;\n  while(millis() < endTime) _loop();\n}\n\n//(\nvoid setup() {\n  //( setup //)\n  //( code //)\n}\n//)\n\nvoid _loop() {\n  //( _loop //)\n}\n\nvoid loop() {\n  //( loop //)\n  _loop();\n}",splitor:{frame:{left:"//(",right:"//)"},expression:{left:"/*{",right:"}*/"}},reducers:[{name:"include",reduce:function reduce(a){var b=[],c=!0,d=!1,e=void 0;try{for(var f,g=a[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i="";"string"==typeof h?i=h:"function"==typeof h&&(i=h()),-1===b.indexOf(i)&&b.push(i)}}catch(a){d=!0,e=a}finally{try{c||null==g.return||g.return()}finally{if(d)throw e}}return 0===b.length?void 0:b.map(function(a){return"#include "+a}).join("\n")+"\n"}}]}],u={arduino:[{filename:"src/OfflineBroadcast.cpp",code:"#include \"OfflineBroadcast.h\"\nunsigned char prevc;\nbyte index = 0;\nbyte dataLen;\nbool isAvailable,isStart;\nuint8_t command_index = 0;\nchar serialRead;\nchar buffer[52];\n#define MAX_LISTENER 10\n\nstruct Listener\n{\n    String msg;\n    void (*callback)(void);\n};\nstruct Listener listenList[20];\nint listenerP=0;\nOfflineBroadcast::OfflineBroadcast(void)\n{}\nvoid OfflineBroadcast::readSerial(){\n  isAvailable = false;\n  if(Serial.available()>0){\n    isAvailable = true;\n    serialRead = Serial.read();\n  }\n}\nunsigned char OfflineBroadcast::readBuffer(int index){\n return buffer[index]; \n}\nvoid OfflineBroadcast::loop()\n{\n\treadSerial();\n  if(isAvailable){\n\tunsigned char c = serialRead&0xff;\n\tif(c==0x55&&isStart==false){\n\t if(prevc==0xff){\n\t  index=1;\n\t  isStart = true;\n\t }\n\t}else{\n\t  prevc = c;\n\t  if(isStart){\n\t\tif(index==2){\n\t\t dataLen = c; \n\t\t}else if(index>2){\n\t\t  dataLen--;\n\t\t}\n\t\twriteBuffer(index,c);\n\t  }\n\t}\n\t index++;\n\t if(index>51){\n\t  index=0; \n\t  isStart=false;\n\t }\n\t if(isStart&&dataLen==0&&index>3){ \n\t\tisStart = false;\n\t\tparseData(); \n\t\tindex=0;\n\t }\n  }\n}\nvoid OfflineBroadcast::broadcast( String msg){\n  uint8_t arr[50]={0,0,1,0x46,1,1};\n  int len = msg.length();\n  int size = 6;\n  if(len==0){\n    return;\n  }\n  arr[5] = len;\n\tfor(int i=0;i<len;i++){\n    \tarr[size] = uint8_t(msg[i]);\n    \tsize++;\n  }\n  arr[0] = size-1;\n  writeHead();\n  for(int i=0;i<size;i++)\n  {\n    writeSerial(arr[i]);\n  }\n  writeEnd();\n  delay(100);\n}\nvoid OfflineBroadcast::broadcast(String msg,String value){\n  uint8_t arr[50]={0,0,1,0x46,2,1};\n  int len = msg.length();\n  if(len==0){\n    return;\n  }\n  int len2 = value.length();\n  int size = 6;\n  arr[5] = len;\n  for(int i=0;i<len;i++){\n      arr[size] = uint8_t(msg[i]);\n      size++;\n  }\n  arr[size++] = len2;\n  for(int i=0;i<len2;i++){\n      arr[size++] = uint8_t(value[i]);\n  }\n  arr[0] = size-1;\n  writeHead();\n  for(int i=0;i<size;i++)\n  {\n    writeSerial(arr[i]);\n  }\n  writeEnd();\n  delay(100);\n}\n\nvoid OfflineBroadcast::readSensor(int device){\n   /**************************************************\n      ff    55      len idx action device type len name  \n      0     1       2   3   4      5      6    7    8\n      0xff  0x55   0x4 0x3 0x1    0x46    0x1  0x2  48 69\n      -----------------------------------------------\n      ff    55      len idx action device type len name len message\n      0   1   2 3 4   5   6 7 8 9 10\n  ***************************************************/\n  int type;\n  switch(device){\n    case  BROADCAST:{\n      type = readBuffer(6);\n      // \u65E0\u9644\u52A0\u503C\n      if(type==1){\n        int len = readBuffer(7);\n        broadcastMsg = readString(8,len); \n        broadcastValue = \"\";\n      }\n      // \u6709\u9644\u52A0\u503C\n      else if(type==2){\n        int nlen = readBuffer(7);\n        broadcastMsg = readString(8,nlen);\n        int vlen = readBuffer(7+nlen+1);\n        broadcastValue = readString(7+nlen+2,vlen);\n      }\n      bool hasCallback = false;\n      for(int i=0;i<MAX_LISTENER;i++){\n        if(broadcastMsg.equals(listenList[i].msg)){\n          listenList[i].callback();\n          hasCallback = true;\n        }\n      } \n      if(!hasCallback){\n        callOK();\n      }\n    }\n    break;\n  }\n}\nvoid OfflineBroadcast::parseData(){\n  isStart = false;\n  int idx = readBuffer(3);\n  command_index = (uint8_t)idx;\n  int action = readBuffer(4);\n  int device = readBuffer(5);\n  switch(action){\n    case GET:{\n        readSensor(device);\n     }\n     break;\n  }\n}\n\nvoid OfflineBroadcast::writeBuffer(int index,unsigned char c){\n  buffer[index]=c;\n}\nvoid OfflineBroadcast::writeHead(){\n  writeSerial(0xff);\n  writeSerial(0x55);\n}\nvoid OfflineBroadcast::writeEnd(){\n Serial.println(); \n}\nvoid OfflineBroadcast::writeSerial(unsigned char c){\n Serial.write(c);\n}\nchar _receiveStr[20] = {};\nuint8_t _receiveUint8[16] = {};\nString OfflineBroadcast::readString(int idx,int len){\n  char p[50];\n  for(int i=0;i<len;i++){\n    p[i]=readBuffer(idx+i);\n  }\n  p[len] = '\\0';\n  return String(p);\n}\nvoid OfflineBroadcast::callOK(){\n    uint8_t arr[5]={4,0,1,0x46,3};\n    writeHead();\n    for(int i=0;i<5;i++)\n    {\n      writeSerial(arr[i]);\n    }\n    writeEnd();\n}\nvoid OfflineBroadcast::on(String msg,void(*callback)(void)){\n  struct Listener listener;\n  listener.msg = msg;\n  listener.callback = callback;\n  if(listenerP<MAX_LISTENER){\n    listenList[listenerP++] = listener;\n  }\n}\r\n"},{filename:"src/OfflineBroadcast.h",code:"#ifndef OfflineBoardcast_H\n#define OfflineBoardcast_H\n#include \"MeSerial.h\"\n#include <Arduino.h>\n\n#define BROADCAST 70\n#define GET 1\n\nclass OfflineBroadcast\n{\npublic:\n\tOfflineBroadcast(void);\n\tvoid loop();\n\tString broadcastMsg = \"\";\n\tString broadcastValue = \"\";\n\tvoid broadcast(String msg,String value);\n  void broadcast(String msg);\n  void callOK();\n  void on(String msg,void(*callback)(void));\nprivate:\n  void readSensor(int device);\n  unsigned char readBuffer(int index);\n  void writeBuffer(int index,unsigned char c);\n  void parseData();\n  void writeEnd();\n  void writeSerial(unsigned char c);\n  void readSerial();\n  String readString(int idx,int len);\n  void writeHead();\n};\n#endif\r\n"}]},v={onLoad:function(a,b){var c=this;c.__workerSetupInstance||(c.__workerSetupInstance=c.workerSetup({app:a}).then(function(){c.worker.remote.runExtension("onLoad",b.id)}))},onUnload:function(){this.__workerSetupInstance=null,this.worker.remote.runExtension("onUnload"),this.worker.dispose()},onConnect:function(a,b){this.worker.remote.runExtension("onConnect",b.id)},onDisconnect:function(a,b){this.worker.remote.runExtension("onDisconnect",b.id)},onStopAll:function(a,b){this.worker.remote.runExtension("onStopAll",b.id)},beforeChangeUploadMode:function(a,b){return this.worker.remote.runExtension("beforeChangeUploadMode",b.id)},beforeChangeDebugMode:function(a,b){return this.worker.remote.runExtension("beforeChangeDebugMode",b.id)},afterChangeUploadMode:function(a,b){this.worker.remote.runExtension("afterChangeUploadMode",b.id)},afterChangeDebugMode:function(a,b){this.worker.remote.runExtension("afterChangeDebugMode",b.id)},onSelect:function(a,b){var c=this;return this.worker?void this.worker.remote.runExtension("onSelect",b.id):void setTimeout(function(){c.onSelect(a,b)},200)},onUnselect:function(a,b){this.worker.remote.runExtension("onUnselect",b.id)},beforeCodeUpload:function(a,b){this.worker.remote.runExtension("beforeCodeUpload",b.id)},afterCodeUpload:function(a,b){this.worker.remote.runExtension("afterCodeUpload",b.id)},onRead:function(a,b){this.worker.remote.runExtension("onRead",b.id)}},w=function(){function a(){var b=this;d(this,a),this.checkFirmwareInForce="undefined"!=typeof checkFirmwareInForce&&checkFirmwareInForce;var c=window.MbApi.getExtResPath("arduino_broadcast/handlerProxy.js","arduino_broadcast"),e=this;e.workerSetup=function(){var a=f(regeneratorRuntime.mark(function a(b){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,window.__web_worker_rpc.create(c,b).then(function(a){return a.CONFIG.TIMEOUT=42e3,a.CONFIG.HEARTBEAT=4200,a.onFail=function(){e.worker=null,e.workerSetup(b);var a=b.app;a&&a.workspace.resetEvents()},a});case 2:e.worker=a.sent;case 3:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),this.funcs={block1546412605792CodesLoop:["broadcaster.loop();"],BLOCK_1546412605792:{onRun:function onRun(a,c,d,e){return b.worker.remote.runBlock("BLOCK_1546412605792","onRun",d.id,{id:e.id,opcode:e.opcode,arguments:e.arguments},Object.assign({},a))}},block1546413597853CodesLoop:["broadcaster.loop();"],BLOCK_1546413597853:{onRun:function onRun(a,c,d,e){return b.worker.remote.runBlock("BLOCK_1546413597853","onRun",d.id,{id:e.id,opcode:e.opcode,arguments:e.arguments},Object.assign({},a))}},block1546413700881CodesLib:function block1546413700881CodesLib(){return i.includes("mcore")?["#include <MeMCore.h>"]:i.includes("auriga")?["#include <MeAuriga.h>"]:["#include <Arduino.h>"]},block1546413700881CodesDeclare:["OfflineBroadcast broadcaster;","void broadcastHandler/*{$INDEX}*/(){\n  /*{$BRANCH}*/\n  broadcaster.callOK();\n}"],block1546413700881CodesLoop:["broadcaster.loop();"],BLOCK_1546413700881:{onRun:function onRun(a,c,d,e){return b.worker.remote.runBlock("BLOCK_1546413700881","onRun",d.id,{id:e.id,opcode:e.opcode,arguments:e.arguments},Object.assign({},a))},onAdd:function onAdd(a,c,d){b.worker.remote.runBlock("BLOCK_1546413700881","onAdd",c.id,{id:d.id,opcode:d.opcode,arguments:d.arguments})},onRemove:function onRemove(a,c,d){b.worker.remote.runBlock("BLOCK_1546413700881","onRemove",c.id,{id:d.id,opcode:d.opcode,arguments:d.arguments})}},block1546415356012CodesLoop:["broadcaster.loop();"],BLOCK_1546415356012:{onRun:function onRun(a,c,d,e){return b.worker.remote.runBlock("BLOCK_1546415356012","onRun",d.id,{id:e.id,opcode:e.opcode,arguments:e.arguments},Object.assign({},a))}}}}return c(a,[{key:"getInfo",value:function getInfo(){return{id:"arduino_broadcast",targets:[{name:"mcore",options:{upload:{middlewares:[{name:"arduino",params:{sources:u.arduino}}]}}},{name:"auriga",options:{upload:{middlewares:[{name:"arduino",params:{sources:u.arduino}}]}}},{name:"arduino_uno",options:{upload:{middlewares:[{name:"arduino",params:{sources:u.arduino}}]}}},{name:"arduino_mega2560",options:{upload:{middlewares:[{name:"arduino",params:{sources:u.arduino}}]}}}],codeTypes:["arduinoc"],version:"0.0.9",platform:["mblockpc","mblockweb"],categories:[{name:"cate_d9ae47fa",colors:["#6886C4","#5275BC","#4366AD"],menuIconURI:"",blockIcon:{type:"image",width:28,height:26,src:window.MbApi.getExtResPath("arduino_broadcast/imgs/2fd59a2aa3514c44b57327a22f5ac44f.svg","arduino_broadcast")},blocks:[{opcode:"BLOCK_1546412605792",blockType:"command",checkboxInFlyout:!1,hidden:!1,gap:12,arguments:{string_1:{type:"string",defaultValue:"message"}},branchCount:0,platform:["mblockpc","mblockweb"],codes:{arduinoc:{code:"broadcaster.broadcast(String(/*{MESSAGE}*/));",sections:{include:["\"src/OfflineBroadcast.h\""],declare:"OfflineBroadcast broadcaster;",setup:"Serial.begin(115200);",_loop:this.funcs.block1546412605792CodesLoop}}},handler:this.funcs.BLOCK_1546412605792},{opcode:"BLOCK_1546413597853",blockType:"command",checkboxInFlyout:!1,hidden:!1,gap:36,arguments:{string_1:{type:"string",defaultValue:"message"},VALUE:{type:"string",defaultValue:"1",checkNumber:!0}},branchCount:0,platform:["mblockpc","mblockweb"],codes:{arduinoc:{code:"broadcaster.broadcast(String(/*{MESSAGE}*/),String(/*{VALUE}*/));",sections:{include:["\"src/OfflineBroadcast.h\""],declare:"OfflineBroadcast broadcaster;",setup:"Serial.begin(115200);",_loop:this.funcs.block1546413597853CodesLoop}}},handler:this.funcs.BLOCK_1546413597853},{opcode:"BLOCK_1546413700881",blockType:"hat",checkboxInFlyout:!1,hidden:!1,gap:12,arguments:{string_1:{type:"string",defaultValue:"message"}},branchCount:0,platform:["mblockpc","mblockweb"],codes:{arduinoc:{code:"broadcaster.on(String(/*{MESSAGE}*/),broadcastHandler/*{$INDEX}*/);",sections:{include:["\"src/OfflineBroadcast.h\""],lib:this.funcs.block1546413700881CodesLib,declare:this.funcs.block1546413700881CodesDeclare,setup:"Serial.begin(115200);",_loop:this.funcs.block1546413700881CodesLoop}}},handler:this.funcs.BLOCK_1546413700881},{opcode:"BLOCK_1546415356012",blockType:"string",checkboxInFlyout:!1,hidden:!1,gap:36,arguments:{},branchCount:0,platform:["mblockpc","mblockweb"],codes:{arduinoc:{code:"broadcaster.broadcastValue",sections:{include:["\"src/OfflineBroadcast.h\""],declare:"OfflineBroadcast broadcaster;",setup:"Serial.begin(115200);",_loop:this.funcs.block1546415356012CodesLoop}}},handler:this.funcs.BLOCK_1546415356012}],menus:{}}],generators:t,translationMap:r,snippets:s,generatorStartBlocks:["BLOCK_1546413700881"],feature:["worker"]}}},{key:"getHandler",value:function getHandler(){return"object"===h(v)?v:"function"==typeof v?new v:void 0}}]),a}();a.default=w});
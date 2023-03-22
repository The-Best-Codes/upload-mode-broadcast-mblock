"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

self.rpc.CONFIG.TIMEOUT = 42000;
self.rpc.CONFIG.HEARTBEAT = 4200;
var __context = {
  app: self.rpc.remote.app,
  getDevice: function getDevice(deviceId) {
    return new Proxy({}, {
      get: function get(target, name) {
        if (name == "id") {
          return deviceId;
        }

        return function () {
          var runDevice = __context.app.runDevice;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return runDevice.apply(void 0, [deviceId, name].concat(args));
        };
      }
    });
  }
};
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      module.exports = runtime;
    }

    return;
  }

  runtime = global.regeneratorRuntime = inModule ? module.exports || {} : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && _instanceof(outerFn.prototype, Generator) ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap;

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator;

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      return info;
    }

    context.delegate = null;
    return ContinueSentinel;
  }

  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(function () {
  return this || (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self;
}() || Function("return this")());
var currDevice;
var engine;
var appContext;
var cacheBuffer = [];
var broadcastMap = {};
var listeners = [];
var currBroadcast;
var appCancelSubscribe;

function broadcast(message, value) {
  var protocol = [0xff, 0x55, 0, 0, 1, 70, 1, 0];
  var size = 8;
  var msgLen = message.length;
  protocol[7] = msgLen;

  for (var i = 0; i < msgLen; i++) {
    protocol[size] = message[i].charCodeAt(0);
    size++;
  }

  if (value != null) {
    protocol[6] = 2;
    var valueLen = String(value).length;
    protocol[size++] = valueLen;

    for (i = 0; i < valueLen; i++) {
      protocol[size++] = String(value)[i].charCodeAt(0);
    }
  }

  protocol[2] = size - 3;

  if (engine) {
    engine.writeRaw(Uint8Array.from(protocol));
  }
}

function subscribeMessage(app) {
  appContext = app;

  if (!appCancelSubscribe) {
    appCancelSubscribe = appContext.subscribeMessage("sprite2robotBroadcast", function (data) {
      broadcast(data.msg, data.value);
    });
  }
}

function unsubscribeMessage() {
  appCancelSubscribe && appCancelSubscribe();
  appCancelSubscribe = null;
}

function readRaw(buffer) {
  var datas = doParse(buffer);
  if (!datas) return;
  datas.forEach(function (data) {
    if (data[0] == data.length - 1) {
      if (data[3] === 70) {
        var resultData = parseBroadcast(data);
        appContext.sendMessage("robot2spriteBroadcast", resultData);
      }
    }
  });
}

function parseBroadcast(data) {
  if (data[4] == 1) {
    var len1 = data[5];
    var msgArr = data.slice(6, 6 + len1);
    var msg = '';
    msgArr.map(function (item) {
      msg += String.fromCharCode(item);
    });
    broadcastMap[msg] = "";
  } else if (data[4] == 2) {
    var len1 = data[5];
    var msgArr = data.slice(6, 6 + len1);
    var msg = '';
    msgArr.map(function (item) {
      msg += String.fromCharCode(item);
    });
    var len2 = data[6 + len1];
    var valueArr = data.slice(6 + len1 + 1, 6 + len1 + 1 + len2);
    var value = '';
    valueArr.map(function (item) {
      value += String.fromCharCode(item);
    });
    broadcastMap[msg] = value;
  } else if (data[4] == 3) {
    return {
      type: 'cmd',
      msg: 'threadFinish'
    };
  }

  return {
    msg: msg,
    value: value || ""
  };
}

function doParse(buffData) {
  var data = arrayFromArrayBuffer(buffData);
  var totalData = cacheBuffer = cacheBuffer.concat(data);
  var index = findIndexOfStart(totalData);

  if (index !== -1) {
    cacheBuffer = totalData.slice(index);
  } else {
    return undefined;
  }

  return getContentFromCacheBuffer();
}

function arrayFromArrayBuffer(buffer) {
  var dataView = new Uint8Array(buffer);
  var result = [];

  for (var i = 0; i < dataView.length; i++) {
    result.push(dataView[i]);
  }

  return result;
}

function getContentFromCacheBuffer() {
  var contents = [];

  while (cacheBuffer.length >= 4) {
    var headerIndex = findIndexOfStart(cacheBuffer);
    var footerIndex = findIndexOfEnd(cacheBuffer);
    if (headerIndex === -1 || footerIndex === -1 || footerIndex < headerIndex) break;
    var content = cacheBuffer.slice(headerIndex + 2, footerIndex);

    if (content.length >= REC_BUF_MAX_LENGTH) {
      console.warn("receive buffer overflow!");
    }

    contents.push(content);
    cacheBuffer = cacheBuffer.slice(footerIndex + 2);
  }

  return contents.length > 0 ? contents : null;
}

var REC_BUF_MAX_LENGTH = 36;
var BUF_START_FLAG = [0xff, 0x55];
var BUF_END_FLAG = [0x0d, 0x0a];

function checkStart(flag1, flag2) {
  return flag1 === BUF_START_FLAG[0] && flag2 === BUF_START_FLAG[1];
}

function checkEnd(flag1, flag2) {
  return flag1 === BUF_END_FLAG[0] && flag2 === BUF_END_FLAG[1];
}

function findIndexOfStart(data) {
  if (Array.isArray(data)) {
    return data.findIndex(function (num, index) {
      return checkStart(num, data[index + 1]);
    });
  }

  return -1;
}

function findIndexOfEnd(data) {
  if (Array.isArray(data)) {
    return data.findIndex(function (num, index) {
      return checkEnd(num, data[index + 1]);
    });
  }

  return -1;
}

var disableBlocks = {
  debug: ["arduino_broadcast.BLOCK_1546412605792", "arduino_broadcast.BLOCK_1546413597853", "arduino_broadcast.BLOCK_1546413700881", "arduino_broadcast.BLOCK_1546415356012"],
  upload: []
};
var mustLoginBlocks = [];

var triggerBlocksStatus = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(mode, app) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function triggerBlocksStatus(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var blockHandlers = {
  'block1546412605792CodesLoop': ['broadcaster.loop();'],
  'BLOCK_1546412605792': {
    onRun: function onRun(args, app, device, block) {}
  },
  'block1546413597853CodesLoop': ['broadcaster.loop();'],
  'BLOCK_1546413597853': {
    onRun: function onRun(args, app, device, block) {}
  },
  'block1546413700881CodesLib': function block1546413700881CodesLib(args) {
    if (currDevice.includes('mcore')) {
      return ['#include <MeMCore.h>'];
    } else if (currDevice.includes('auriga')) {
      return ['#include <MeAuriga.h>'];
    } else {
      return ['#include <Arduino.h>'];
    }
  },
  'block1546413700881CodesDeclare': ['OfflineBroadcast broadcaster;', "void broadcastHandler/*{$INDEX}*/(){\n  /*{$BRANCH}*/\n  broadcaster.callOK();\n}"],
  'block1546413700881CodesLoop': ['broadcaster.loop();'],
  'BLOCK_1546413700881': {
    onRun: function onRun(args, app, device, block) {},
    onAdd: function onAdd(app, device, block) {},
    onRemove: function onRemove(app, device, block) {}
  },
  'block1546415356012CodesLoop': ['broadcaster.loop();'],
  'BLOCK_1546415356012': {
    onRun: function onRun(args, app, device, block) {}
  }
};
var ExtHandler = {
  onLoad: function onLoad(app, target) {
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var account, isLogin, _app$workspace;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              account = app.getService('account');

              if (!account) {
                _context2.next = 8;
                break;
              }

              _context2.next = 4;
              return account.isLogin();

            case 4:
              isLogin = _context2.sent;

              if (!isLogin) {
                (_app$workspace = app.workspace).disableBlocks.apply(_app$workspace, mustLoginBlocks);
              }

              account.onLogin(function () {
                var _app$workspace2;

                (_app$workspace2 = app.workspace).enableBlocks.apply(_app$workspace2, mustLoginBlocks);
              });
              account.onLogout(function () {
                var _app$workspace3;

                (_app$workspace3 = app.workspace).disableBlocks.apply(_app$workspace3, mustLoginBlocks);
              });

            case 8:
              if (target && typeof target.isUploadMode === 'function') {
                triggerBlocksStatus(target.isUploadMode() ? 'upload' : 'debug', app);
              }

              subscribeMessage(app);

              if (target.tar.name) {
                currDevice = target.tar.name;
              } else if (target.tar.sprite) {
                currDevice = target.tar.sprite.name;
              }

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  onUnload: function onUnload(app, target) {
    unsubscribeMessage();
  },
  onConnect: function onConnect(app, device) {},
  onDisconnect: function onDisconnect(app, device) {},
  onStopAll: function onStopAll(app, device) {},
  beforeChangeUploadMode: function beforeChangeUploadMode(app, device) {
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", true);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  beforeChangeDebugMode: function beforeChangeDebugMode(app, device) {
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", true);

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  afterChangeUploadMode: function afterChangeUploadMode(app, device) {
    triggerBlocksStatus('upload', app, device);
    return true;
  },
  afterChangeDebugMode: function afterChangeDebugMode(app, device) {
    triggerBlocksStatus('debug', app, device);
    return true;
  },
  onSelect: function onSelect(app, device) {
    engine = device;
    setTimeout(function () {
      triggerBlocksStatus(device.isUploadMode() ? 'upload' : 'debug', app, device);
    }, 0);

    if (device.tar.sprite) {
      currDevice = device.tar.sprite.name;
    }
  },
  onUnselect: function onUnselect(app, device) {
    triggerBlocksStatus('', app, device);
  },
  beforeCodeUpload: function beforeCodeUpload(app, device) {},
  afterCodeUpload: function afterCodeUpload(app, device) {},
  onRead: function onRead(app, device) {
    engine = device;
    readRaw(device.readRaw(true));
  }
};
self.rpc.exports = {
  runBlock: function runBlock(opcode, method, deviceId, block, args) {
    var blockHandler = blockHandlers[opcode];

    if (!blockHandler) {
      console.error('cannot find opcode of ' + opcode);
      return null;
    }

    var handle = blockHandler[method];
    var app = __context.app;

    var device = __context.getDevice(deviceId);

    if (method === 'onRun') {
      return handle(args, app, device, block);
    } else {
      return handle(app, device, block);
    }
  },
  runExtension: function runExtension(srcMethod, deviceId) {
    var method = ExtHandler[srcMethod];

    if (!method) {
      console.error('method of ' + srcMethod + ' is no valid');
      return null;
    }

    var app = __context.app;

    if (deviceId) {
      var device = __context.getDevice(deviceId);

      return method(app, device);
    } else {
      return method(app);
    }
  }
};
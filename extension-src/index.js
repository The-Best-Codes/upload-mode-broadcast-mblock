(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.unknown = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  !function (global) {
    "use strict";

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var inModule = typeof module === "object";
    var runtime = global.regeneratorRuntime;

    if (runtime) {
      if (inModule) {
        module.exports = runtime;
      }

      return;
    }

    runtime = global.regeneratorRuntime = inModule ? module.exports || {} : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
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

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
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
      reset: function (skipTempReset) {
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
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
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
      abrupt: function (type, arg) {
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
      complete: function (record, afterLoc) {
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
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
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
      delegateYield: function (iterable, resultName, nextLoc) {
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
    return this || typeof self === "object" && self;
  }() || Function("return this")());
  var currDevice;
  var engine;
  var appContext;
  var cacheBuffer = [];
  var broadcastMap = {};
  var listeners = [];
  var currBroadcast;
  let appCancelSubscribe;

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
          let resultData = parseBroadcast(data);
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
      msg,
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

  const disableBlocks = {
    debug: ["arduino_broadcast.BLOCK_1546412605792", "arduino_broadcast.BLOCK_1546413597853", "arduino_broadcast.BLOCK_1546413700881", "arduino_broadcast.BLOCK_1546415356012"],
    upload: []
  };
  const mustLoginBlocks = [];

  const triggerBlocksStatus = async (mode, app) => {};

  class ExtImpl {
    constructor() {}

  }

  const extTranslationMap = {
    "zh": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "en": {
      "arduino_broadcast": "Upload Mode Broadcast",
      "extensionName": "Upload Mode Broadcast",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE] ",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "de": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "es": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "fr": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "id": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "ja": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "ja-jph": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "ko": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "pl": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "uk": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "zh-hant": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "nl": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "it": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "hr": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "ru": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "pt": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "fi": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "tr": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    },
    "tk": {
      "arduino_broadcast": "Upload Mode",
      "extensionName": "Upload Mode",
      "extensionDescription": "By adding this extension, you enable a device to interact with a sprite in the Upload Mode.",
      "BLOCK_1546412605792": "send upload mode message [MESSAGE] ",
      "BLOCK_1546413597853": "send upload mode message [MESSAGE] with value [VALUE]",
      "BLOCK_1546413700881": "when receiving upload mode message [MESSAGE] ",
      "BLOCK_1546415356012": "upload mode message value",
      "cate_d9ae47fa": "Upload Mode Broadcast"
    }
  };
  const codeSnippets = {
    arduinoc: {}
  };
  const extGenerators = [{
    lang: 'arduinoc',
    template: `//( include //)

//( lib //)

//({
    this.$ALL_VARIABLES.length==0?'':this.$ALL_VARIABLES.map(v=>"float "+v+" = 0;").join('\\n')
}//)

//( declare //)

void _delay(float seconds) {
  long endTime = millis() + seconds * 1000;
  while(millis() < endTime) _loop();
}

//(
void setup() {
  //( setup //)
  //( code //)
}
//)

void _loop() {
  //( _loop //)
}

void loop() {
  //( loop //)
  _loop();
}`,
    splitor: {
      frame: {
        left: "//(",
        right: "//)"
      },
      expression: {
        left: "/*{",
        right: "}*/"
      }
    },
    reducers: [{
      name: 'include',
      reduce: codes => {
        let codes1 = [];

        for (let code of codes) {
          let codeStr = '';

          if (typeof code === 'string') {
            codeStr = code;
          } else if (typeof code === 'function') {
            codeStr = code();
          }

          if (codes1.indexOf(codeStr) === -1) {
            codes1.push(codeStr);
          }
        }

        if (codes1.length === 0) {
          return undefined;
        }

        return codes1.map(code => {
          return '#include ' + code;
        }).join('\n') + '\n';
      }
    }]
  }];
  const extSources = {
    arduino: [{
      filename: "src/OfflineBroadcast.cpp",
      code: "#include \"OfflineBroadcast.h\"\nunsigned char prevc;\nbyte index = 0;\nbyte dataLen;\nbool isAvailable,isStart;\nuint8_t command_index = 0;\nchar serialRead;\nchar buffer[52];\n#define MAX_LISTENER 10\n\nstruct Listener\n{\n    String msg;\n    void (*callback)(void);\n};\nstruct Listener listenList[20];\nint listenerP=0;\nOfflineBroadcast::OfflineBroadcast(void)\n{}\nvoid OfflineBroadcast::readSerial(){\n  isAvailable = false;\n  if(Serial.available()>0){\n    isAvailable = true;\n    serialRead = Serial.read();\n  }\n}\nunsigned char OfflineBroadcast::readBuffer(int index){\n return buffer[index]; \n}\nvoid OfflineBroadcast::loop()\n{\n\treadSerial();\n  if(isAvailable){\n\tunsigned char c = serialRead&0xff;\n\tif(c==0x55&&isStart==false){\n\t if(prevc==0xff){\n\t  index=1;\n\t  isStart = true;\n\t }\n\t}else{\n\t  prevc = c;\n\t  if(isStart){\n\t\tif(index==2){\n\t\t dataLen = c; \n\t\t}else if(index>2){\n\t\t  dataLen--;\n\t\t}\n\t\twriteBuffer(index,c);\n\t  }\n\t}\n\t index++;\n\t if(index>51){\n\t  index=0; \n\t  isStart=false;\n\t }\n\t if(isStart&&dataLen==0&&index>3){ \n\t\tisStart = false;\n\t\tparseData(); \n\t\tindex=0;\n\t }\n  }\n}\nvoid OfflineBroadcast::broadcast( String msg){\n  uint8_t arr[50]={0,0,1,0x46,1,1};\n  int len = msg.length();\n  int size = 6;\n  if(len==0){\n    return;\n  }\n  arr[5] = len;\n\tfor(int i=0;i<len;i++){\n    \tarr[size] = uint8_t(msg[i]);\n    \tsize++;\n  }\n  arr[0] = size-1;\n  writeHead();\n  for(int i=0;i<size;i++)\n  {\n    writeSerial(arr[i]);\n  }\n  writeEnd();\n  delay(100);\n}\nvoid OfflineBroadcast::broadcast(String msg,String value){\n  uint8_t arr[50]={0,0,1,0x46,2,1};\n  int len = msg.length();\n  if(len==0){\n    return;\n  }\n  int len2 = value.length();\n  int size = 6;\n  arr[5] = len;\n  for(int i=0;i<len;i++){\n      arr[size] = uint8_t(msg[i]);\n      size++;\n  }\n  arr[size++] = len2;\n  for(int i=0;i<len2;i++){\n      arr[size++] = uint8_t(value[i]);\n  }\n  arr[0] = size-1;\n  writeHead();\n  for(int i=0;i<size;i++)\n  {\n    writeSerial(arr[i]);\n  }\n  writeEnd();\n  delay(100);\n}\n\nvoid OfflineBroadcast::readSensor(int device){\n   /**************************************************\n      ff    55      len idx action device type len name  \n      0     1       2   3   4      5      6    7    8\n      0xff  0x55   0x4 0x3 0x1    0x46    0x1  0x2  48 69\n      -----------------------------------------------\n      ff    55      len idx action device type len name len message\n      0   1   2 3 4   5   6 7 8 9 10\n  ***************************************************/\n  int type;\n  switch(device){\n    case  BROADCAST:{\n      type = readBuffer(6);\n      // 无附加值\n      if(type==1){\n        int len = readBuffer(7);\n        broadcastMsg = readString(8,len); \n        broadcastValue = \"\";\n      }\n      // 有附加值\n      else if(type==2){\n        int nlen = readBuffer(7);\n        broadcastMsg = readString(8,nlen);\n        int vlen = readBuffer(7+nlen+1);\n        broadcastValue = readString(7+nlen+2,vlen);\n      }\n      bool hasCallback = false;\n      for(int i=0;i<MAX_LISTENER;i++){\n        if(broadcastMsg.equals(listenList[i].msg)){\n          listenList[i].callback();\n          hasCallback = true;\n        }\n      } \n      if(!hasCallback){\n        callOK();\n      }\n    }\n    break;\n  }\n}\nvoid OfflineBroadcast::parseData(){\n  isStart = false;\n  int idx = readBuffer(3);\n  command_index = (uint8_t)idx;\n  int action = readBuffer(4);\n  int device = readBuffer(5);\n  switch(action){\n    case GET:{\n        readSensor(device);\n     }\n     break;\n  }\n}\n\nvoid OfflineBroadcast::writeBuffer(int index,unsigned char c){\n  buffer[index]=c;\n}\nvoid OfflineBroadcast::writeHead(){\n  writeSerial(0xff);\n  writeSerial(0x55);\n}\nvoid OfflineBroadcast::writeEnd(){\n Serial.println(); \n}\nvoid OfflineBroadcast::writeSerial(unsigned char c){\n Serial.write(c);\n}\nchar _receiveStr[20] = {};\nuint8_t _receiveUint8[16] = {};\nString OfflineBroadcast::readString(int idx,int len){\n  char p[50];\n  for(int i=0;i<len;i++){\n    p[i]=readBuffer(idx+i);\n  }\n  p[len] = '\\0';\n  return String(p);\n}\nvoid OfflineBroadcast::callOK(){\n    uint8_t arr[5]={4,0,1,0x46,3};\n    writeHead();\n    for(int i=0;i<5;i++)\n    {\n      writeSerial(arr[i]);\n    }\n    writeEnd();\n}\nvoid OfflineBroadcast::on(String msg,void(*callback)(void)){\n  struct Listener listener;\n  listener.msg = msg;\n  listener.callback = callback;\n  if(listenerP<MAX_LISTENER){\n    listenList[listenerP++] = listener;\n  }\n}\r\n"
    }, {
      filename: "src/OfflineBroadcast.h",
      code: "#ifndef OfflineBoardcast_H\n#define OfflineBoardcast_H\n#include \"MeSerial.h\"\n#include <Arduino.h>\n\n#define BROADCAST 70\n#define GET 1\n\nclass OfflineBroadcast\n{\npublic:\n\tOfflineBroadcast(void);\n\tvoid loop();\n\tString broadcastMsg = \"\";\n\tString broadcastValue = \"\";\n\tvoid broadcast(String msg,String value);\n  void broadcast(String msg);\n  void callOK();\n  void on(String msg,void(*callback)(void));\nprivate:\n  void readSensor(int device);\n  unsigned char readBuffer(int index);\n  void writeBuffer(int index,unsigned char c);\n  void parseData();\n  void writeEnd();\n  void writeSerial(unsigned char c);\n  void readSerial();\n  String readString(int idx,int len);\n  void writeHead();\n};\n#endif\r\n"
    }]
  };
  const extFacePanels = {};
  const ExtHandler = {
    onLoad: function onLoad(app, target) {
      const that = this;

      if (!that.__workerSetupInstance) {
        that.__workerSetupInstance = that.workerSetup({
          app
        }).then(() => {
          that.worker.remote.runExtension('onLoad', target.id);
        });
      }
    },
    onUnload: function onUnload(app) {
      this.__workerSetupInstance = null;
      this.worker.remote.runExtension('onUnload');
      this.worker.dispose();
    },
    onConnect: function onConnect(app, device) {
      this.worker.remote.runExtension('onConnect', device.id);
    },
    onDisconnect: function onDisconnect(app, device) {
      this.worker.remote.runExtension('onDisconnect', device.id);
    },
    onStopAll: function onStopAll(app, device) {
      this.worker.remote.runExtension('onStopAll', device.id);
    },
    beforeChangeUploadMode: function beforeChangeUploadMode(app, device) {
      return this.worker.remote.runExtension('beforeChangeUploadMode', device.id);
    },
    beforeChangeDebugMode: function beforeChangeDebugMode(app, device) {
      return this.worker.remote.runExtension('beforeChangeDebugMode', device.id);
    },
    afterChangeUploadMode: function afterChangeUploadMode(app, device) {
      this.worker.remote.runExtension('afterChangeUploadMode', device.id);
    },
    afterChangeDebugMode: function afterChangeDebugMode(app, device) {
      this.worker.remote.runExtension('afterChangeDebugMode', device.id);
    },
    onSelect: function onSelect(app, device) {
      if (!this.worker) {
        setTimeout(() => {
          this.onSelect(app, device);
        }, 200);
        return;
      }

      this.worker.remote.runExtension('onSelect', device.id);
    },
    onUnselect: function onUnselect(app, device) {
      this.worker.remote.runExtension('onUnselect', device.id);
    },
    beforeCodeUpload: function beforeCodeUpload(app, device) {
      this.worker.remote.runExtension('beforeCodeUpload', device.id);
    },
    afterCodeUpload: function afterCodeUpload(app, device) {
      this.worker.remote.runExtension('afterCodeUpload', device.id);
    },
    onRead: function onRead(app, device) {
      this.worker.remote.runExtension('onRead', device.id);
    },
    beforeFirmwareUpdate: function beforeFirmwareUpdate(app, device) {
      this.worker.remote.runExtension('beforeFirmwareUpdate', device.id);
    },
    afterFirmwareUpdate: function afterFirmwareUpdate(app, device) {
      this.worker.remote.runExtension('afterFirmwareUpdate', device.id);
    }
  };

  class ExtArduinoBroadcast {
    constructor() {
      this.checkFirmwareInForce = typeof checkFirmwareInForce !== 'undefined' ? checkFirmwareInForce : false;
      const handlerProxyUrl = window.MbApi.getExtResPath('arduino_broadcast/handlerProxy.js', 'arduino_broadcast');
      const that = this;

      that.workerSetup = async function (exports) {
        that.worker = await window.__web_worker_rpc.create(handlerProxyUrl, exports).then(worker => {
          worker.CONFIG.TIMEOUT = 42000;
          worker.CONFIG.HEARTBEAT = 4200;

          worker.onFail = () => {
            that.worker = null;
            that.workerSetup(exports);
            const app = exports.app;

            if (app) {
              app.workspace.resetEvents();
            }
          };

          return worker;
        });
      };

      this.funcs = {
        'block1546412605792CodesLoop': ['broadcaster.loop();'],
        'BLOCK_1546412605792': {
          onRun: (args, app, device, block) => {
            return this.worker.remote.runBlock('BLOCK_1546412605792', 'onRun', device.id, {
              id: block.id,
              opcode: block.opcode,
              arguments: block.arguments
            }, Object.assign({}, args));
          }
        },
        'block1546413597853CodesLoop': ['broadcaster.loop();'],
        'BLOCK_1546413597853': {
          onRun: (args, app, device, block) => {
            return this.worker.remote.runBlock('BLOCK_1546413597853', 'onRun', device.id, {
              id: block.id,
              opcode: block.opcode,
              arguments: block.arguments
            }, Object.assign({}, args));
          }
        },
        'block1546413700881CodesLib': args => {
          if (currDevice.includes('mcore')) {
            return ['#include <MeMCore.h>'];
          } else if (currDevice.includes('auriga')) {
            return ['#include <MeAuriga.h>'];
          } else {
            return ['#include <Arduino.h>'];
          }
        },
        'block1546413700881CodesDeclare': ['OfflineBroadcast broadcaster;', `void broadcastHandler/*{$INDEX}*/(){
  /*{$BRANCH}*/
  broadcaster.callOK();
}`],
        'block1546413700881CodesLoop': ['broadcaster.loop();'],
        'BLOCK_1546413700881': {
          onRun: (args, app, device, block) => {
            return this.worker.remote.runBlock('BLOCK_1546413700881', 'onRun', device.id, {
              id: block.id,
              opcode: block.opcode,
              arguments: block.arguments
            }, Object.assign({}, args));
          },
          onAdd: (app, device, block) => {
            this.worker.remote.runBlock('BLOCK_1546413700881', 'onAdd', device.id, {
              id: block.id,
              opcode: block.opcode,
              arguments: block.arguments
            });
          },
          onRemove: (app, device, block) => {
            this.worker.remote.runBlock('BLOCK_1546413700881', 'onRemove', device.id, {
              id: block.id,
              opcode: block.opcode,
              arguments: block.arguments
            });
          }
        },
        'block1546415356012CodesLoop': ['broadcaster.loop();'],
        'BLOCK_1546415356012': {
          onRun: (args, app, device, block) => {
            return this.worker.remote.runBlock('BLOCK_1546415356012', 'onRun', device.id, {
              id: block.id,
              opcode: block.opcode,
              arguments: block.arguments
            }, Object.assign({}, args));
          }
        }
      };
    }

    getInfo() {
      return {
        "id": "arduino_broadcast",
        "targets": [{
          "name": "mcore",
          "options": {
            "upload": {
              "middlewares": [{
                "name": "arduino",
                "params": {
                  "sources": extSources.arduino
                }
              }]
            }
          }
        }, {
          "name": "auriga",
          "options": {
            "upload": {
              "middlewares": [{
                "name": "arduino",
                "params": {
                  "sources": extSources.arduino
                }
              }]
            }
          }
        }, {
          "name": "arduino_uno",
          "options": {
            "upload": {
              "middlewares": [{
                "name": "arduino",
                "params": {
                  "sources": extSources.arduino
                }
              }]
            }
          }
        }, {
          "name": "arduino_mega2560",
          "options": {
            "upload": {
              "middlewares": [{
                "name": "arduino",
                "params": {
                  "sources": extSources.arduino
                }
              }]
            }
          }
        }],
        "codeTypes": ["arduinoc"],
        "version": "0.0.9",
        "platform": ["mblockpc", "mblockweb"],
        "categories": [{
          "name": "cate_d9ae47fa",
          "colors": ["#6886C4", "#5275BC", "#4366AD"],
          "menuIconURI": "",
          "blockIcon": {
            "type": "image",
            "width": 28,
            "height": 26,
            "src": window.MbApi.getExtResPath('arduino_broadcast/imgs/2fd59a2aa3514c44b57327a22f5ac44f.svg', 'arduino_broadcast')
          },
          "blocks": [{
            "opcode": "BLOCK_1546412605792",
            "blockType": "command",
            "checkboxInFlyout": false,
            "hidden": false,
            "gap": 12,
            "arguments": {
              "MESSAGE": {
                "type": "string",
                "defaultValue": "message"
              }
            },
            "branchCount": 0,
            "platform": ["mblockpc", "mblockweb"],
            "codes": {
              "arduinoc": {
                "code": `broadcaster.broadcast(String(/*{MESSAGE}*/));`,
                "sections": {
                  "include": ["\"src/OfflineBroadcast.h\""],
                  "declare": `OfflineBroadcast broadcaster;`,
                  "setup": `Serial.begin(115200);`,
                  "_loop": this.funcs.block1546412605792CodesLoop
                }
              }
            },
            "handler": this.funcs.BLOCK_1546412605792
          }, {
            "opcode": "BLOCK_1546413597853",
            "blockType": "command",
            "checkboxInFlyout": false,
            "hidden": false,
            "gap": 36,
            "arguments": {
              "MESSAGE": {
                "type": "string",
                "defaultValue": "message"
              },
              "VALUE": {
                "type": "string",
                "defaultValue": "1",
                "checkNumber": true
              }
            },
            "branchCount": 0,
            "platform": ["mblockpc", "mblockweb"],
            "codes": {
              "arduinoc": {
                "code": `broadcaster.broadcast(String(/*{MESSAGE}*/),String(/*{VALUE}*/));`,
                "sections": {
                  "include": ["\"src/OfflineBroadcast.h\""],
                  "declare": `OfflineBroadcast broadcaster;`,
                  "setup": `Serial.begin(115200);`,
                  "_loop": this.funcs.block1546413597853CodesLoop
                }
              }
            },
            "handler": this.funcs.BLOCK_1546413597853
          }, {
            "opcode": "BLOCK_1546413700881",
            "blockType": "hat",
            "checkboxInFlyout": false,
            "hidden": false,
            "gap": 12,
            "arguments": {
              "MESSAGE": {
                "type": "string",
                "defaultValue": "message"
              }
            },
            "branchCount": 0,
            "platform": ["mblockpc", "mblockweb"],
            "codes": {
              "arduinoc": {
                "code": `broadcaster.on(String(/*{MESSAGE}*/),broadcastHandler/*{$INDEX}*/);`,
                "sections": {
                  "include": ["\"src/OfflineBroadcast.h\""],
                  "lib": this.funcs.block1546413700881CodesLib,
                  "declare": this.funcs.block1546413700881CodesDeclare,
                  "setup": `Serial.begin(115200);`,
                  "_loop": this.funcs.block1546413700881CodesLoop
                }
              }
            },
            "handler": this.funcs.BLOCK_1546413700881
          }, {
            "opcode": "BLOCK_1546415356012",
            "blockType": "string",
            "checkboxInFlyout": false,
            "hidden": false,
            "gap": 36,
            "arguments": {},
            "branchCount": 0,
            "platform": ["mblockpc", "mblockweb"],
            "codes": {
              "arduinoc": {
                "code": `broadcaster.broadcastValue`,
                "sections": {
                  "include": ["\"src/OfflineBroadcast.h\""],
                  "declare": `OfflineBroadcast broadcaster;`,
                  "setup": `Serial.begin(115200);`,
                  "_loop": this.funcs.block1546415356012CodesLoop
                }
              }
            },
            "handler": this.funcs.BLOCK_1546415356012
          }],
          "menus": {}
        }],
        "generators": extGenerators,
        "translationMap": extTranslationMap,
        "snippets": codeSnippets,
        "generatorStartBlocks": ["BLOCK_1546413700881"],
        "feature": ["worker"],
        "mustLoginBlocks": [],
        "disabledOffline": [],
        "disabledOnline": ["arduino_broadcast.BLOCK_1546412605792", "arduino_broadcast.BLOCK_1546413597853", "arduino_broadcast.BLOCK_1546413700881", "arduino_broadcast.BLOCK_1546415356012"]
      };
    }

    getHandler() {
      if (typeof ExtHandler === 'object') {
        return ExtHandler;
      } else if (typeof ExtHandler === 'function') {
        return new ExtHandler();
      }
    }

  }

  var _default = ExtArduinoBroadcast;
  _exports.default = _default;
});
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.function.bind.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.split.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.for-each.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('core-js/modules/es.array.flat-map.js'), require('core-js/modules/es.array.unscopables.flat-map.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.promise.js'), require('core-js/modules/es.string.iterator.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('core-js/modules/es.set.js'), require('core-js/modules/es.array.sort.js'), require('core-js/modules/es.array.reverse.js'), require('core-js/modules/es.parse-float.js'), require('core-js/modules/es.object.keys.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.array.includes.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.object.assign.js', 'core-js/modules/es.function.bind.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.concat.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.split.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.for-each.js', 'core-js/modules/web.dom-collections.for-each.js', 'core-js/modules/es.array.flat-map.js', 'core-js/modules/es.array.unscopables.flat-map.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.iterator.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.promise.js', 'core-js/modules/es.string.iterator.js', 'core-js/modules/web.dom-collections.iterator.js', 'core-js/modules/es.set.js', 'core-js/modules/es.array.sort.js', 'core-js/modules/es.array.reverse.js', 'core-js/modules/es.parse-float.js', 'core-js/modules/es.object.keys.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.array.includes.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.animatedSwimmerPlot = factory());
}(this, (function () { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function addElement(name, parent) {
    var _this = this;

    var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (d, i) {
      _newArrowCheck(this, _this);

      return i;
    }.bind(this);
    return data ? parent.selectAll("".concat(tagName, ".asp-").concat(name, ".asp-").concat(tagName)).data(data, id).join(tagName).classed("asp-".concat(name, " asp-").concat(tagName), true) // multiple elements
    : parent.append(tagName).classed("asp-".concat(name, " asp-").concat(tagName), true); // single element
  }

  function addIcon(parent, icon) {
    Math.max(icon[0], icon[1]);
    var scale = this.settings.buttonSize / Math.max(icon[0], icon[1]);
    var diffWidth = this.settings.buttonSize - icon[0] * scale;
    var diffHeight = this.settings.buttonSize - icon[1] * scale;
    var path = parent.append('svg').attr('width', "".concat(this.settings.buttonSize, "px")).attr('height', "".concat(this.settings.buttonSize, "px")).append('g').append('path').attr('transform', "translate(".concat(diffWidth / 2, ",").concat(diffHeight / 2, ") scale(").concat(scale, ")")).attr('d', icon[4]);
    return path;
  }

  var util = {
    addElement: addElement,
    addIcon: addIcon
  };

  function settings() {
    return {
      // data mappings
      id_var: 'USUBJID',
      timepoint_var: 'ADY',
      duration_var: 'ADUR',
      censor_var: 'CNSR',
      censor_timepoint_var: 'CNSRDY',
      result_var: 'AVALC',
      result_order_var: 'AVAL',
      result_color_var: 'ACOLOR',
      visit_var: 'AVISIT',
      visit_order_var: 'AVISITN',
      stratum_var: null,
      // controls
      view: 'OverallSurvival',
      // ['OverallSurvival', 'CurrentResponse']
      split: 'vertical',
      // ['vertical', 'horizontal']
      splitFactor: 1,
      play: true,
      timepoint: 1,
      timepointUnit: 'day',
      timepointMin: null,
      timepointMax: null,
      duration: 250,
      delay: 5000,
      speedFactor: 50,
      // dimensions
      dimensions: {
        width: null,
        height: null
      },
      margin: {
        top: 40,
        right: 10,
        bottom: 50,
        left: 125
      },
      padding: 0.1,
      buttonSize: 25,
      barSize: null,
      // miscellaneous
      displayIds: false,
      criteria: 'Response',
      update: function update() {
        if (this.stratum_var) {
          this.split = 'horizontal';
          this.splitFactor = 0.5;
        }

        return this;
      }
    };
  }

  function getDimensions(container) {
    var width = container.node().clientWidth - 20;
    var height = width * screen.height / screen.width * 3 / 4;
    return {
      width: width,
      height: height
    };
  }

  /*!
   * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   */
  var faPause = {
    prefix: 'fas',
    iconName: 'pause',
    icon: [448, 512, [], "f04c", "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"]
  };
  var faPlay = {
    prefix: 'fas',
    iconName: 'play',
    icon: [448, 512, [], "f04b", "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"]
  };
  var faRedo = {
    prefix: 'fas',
    iconName: 'redo',
    icon: [512, 512, [], "f01e", "M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"]
  };
  var faStepBackward = {
    prefix: 'fas',
    iconName: 'step-backward',
    icon: [448, 512, [], "f048", "M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"]
  };
  var faStepForward = {
    prefix: 'fas',
    iconName: 'step-forward',
    icon: [448, 512, [], "f051", "M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"]
  };

  function toggle() {
    console.log(this.settings.play ? 'pause' : 'play');
    this.settings.play = !this.settings.play;
    this.controls.playPause.attr('title', this.settings.play ? 'Pause animation' : 'Play animation');
    this.controls.playPause.select('path').attr('d', (this.settings.play ? faPause : faPlay).icon[4]);
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  createCommonjsModule(function (module) {
  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
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

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
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
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
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
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
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

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

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
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
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
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
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

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
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

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
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

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
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

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  function id(data) {
    var _this = this;

    var set = new Set(data.map(function (d) {
      _newArrowCheck(this, _this);

      return d.id;
    }.bind(this)));
    return set;
  }

  function visit(data) {
    var _this = this;

    var set = d3.rollups(data.filter(function (d) {
      _newArrowCheck(this, _this);

      return !/Unscheduled/.test(d.visit);
    }.bind(this)), // && d.timepoint > 1),
    function (group) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      return d3.median(group, function (d) {
        _newArrowCheck(this, _this2);

        return d.timepoint;
      }.bind(this));
    }.bind(this), function (d) {
      _newArrowCheck(this, _this);

      return d.visit;
    }.bind(this));
    return set;
  }

  function result(data) {
    var _this = this;

    var set = _toConsumableArray(new Set(data.map(function (d) {
      _newArrowCheck(this, _this);

      return "".concat(d.result_order, "|").concat(d.result, "|").concat(d.result_color);
    }.bind(this))).values()).map(function (d) {
      _newArrowCheck(this, _this);

      return [+d.split('|')[0], d.split('|')[1], d.split('|')[2]];
    }.bind(this)).sort(function (_ref, _ref2) {
      _newArrowCheck(this, _this);

      var _ref3 = _slicedToArray(_ref, 1),
          a = _ref3[0];

      var _ref4 = _slicedToArray(_ref2, 1),
          b = _ref4[0];

      return a - b;
    }.bind(this));

    var result = set.map(function (_ref5) {
      _newArrowCheck(this, _this);

      var _ref6 = _slicedToArray(_ref5, 3);
          _ref6[0];
          var result = _ref6[1];
          _ref6[2];

      return result;
    }.bind(this));
    var result_color = set.map(function (_ref7) {
      _newArrowCheck(this, _this);

      var _ref8 = _slicedToArray(_ref7, 3);
          _ref8[0];
          _ref8[1];
          var result_color = _ref8[2];

      return result_color;
    }.bind(this));
    return {
      result: result,
      result_color: result_color
    };
  }

  function set() {
    return _objectSpread2({
      id: id.call(this, this.data.mutated),
      visit: visit.call(this, this.data.mutated)
    }, result.call(this, this.data.mutated));
  }

  function x(range) {
    return d3.scaleLinear().domain([0, 1]).range(range);
  }

  function y(id) {
    return d3.scaleBand().domain(d3.range(id.size).reverse()).range([this.settings.height - this.settings.margin.bottom, this.settings.margin.top]).padding(this.settings.padding);
  }

  function color() {
    return d3.scaleOrdinal().domain(this.set.result).range(this.set.result_color.length > 1 ? this.set.result_color.concat(d3.schemeTableau10) : d3.schemeTableau10);
  }

  function scale() {
    return {
      x: x.call(this, [this.settings.margin.left, this.settings.width - this.settings.margin.right]),
      y: y.call(this, this.set.id),
      color: color.call(this)
    };
  }

  function legend() {
    var main = this;
    var width = 128;
    var height = width / 2;
    var swatches = this.layout.legend.selectAll('div').data(this.scale.color.domain()).join('div').style('display', 'inline-block');
    swatches.each(function (d, i) {
      var _this = this;

      var swatch = d3.select(this);
      var svg = swatch.append('svg').attr('width', "".concat(width, "px")).attr('height', "".concat(height, "px"));
      if (i === 0) svg.append('text').attr('x', 0).attr('y', 0).attr('alignment-baseline', 'hanging').attr('fill', 'black').style('font-weight', 'bold').style('font-size', height / 4).text(main.settings.criteria);
      svg.append('rect').attr('x', 0).attr('y', height / 4).attr('width', width).attr('height', height).attr('fill', function (d) {
        _newArrowCheck(this, _this);

        return main.scale.color(d);
      }.bind(this));
      svg.append('text').attr('x', width / 2).attr('y', height / 2).attr('text-anchor', 'middle').attr('alignment-baseline', 'hanging').attr('fill', 'white').style('font-weight', 'bold').style('font-size', height / 3).text(function (d) {
        _newArrowCheck(this, _this);

        return d;
      }.bind(this));
    });
    return {
      width: width,
      container: this.layout.legend,
      swatches: swatches
    };
  }

  function layout$1(plot) {
    var _this = this;

    var canvas = this.util.addElement('canvas', this.layout.plots).classed("asp-canvas--".concat(this.settings.split), true);
    var svg = this.util.addElement('svg', canvas, 'svg') //.attr('viewBox', [0, 0, plot.settings.width, this.settings.height]);
    .attr('width', plot.settings.width).attr('height', this.settings.height);
    var title = this.util.addElement('g--title', svg, 'g').attr('transform', function (d) {
      _newArrowCheck(this, _this);

      return "translate(".concat(plot.settings.translateX //plot.settings.margin.left +
      //(plot.settings.width - plot.settings.margin.right - plot.settings.margin.left) /
      //    2
      , ",").concat(plot.settings.margin.top / 2, ")");
    }.bind(this)).append('text') //.attr('text-anchor', 'middle')
    .attr('text-anchor', plot.i % 2 === 0 ? 'end' : 'start').attr('alignment-baseline', 'middle').attr('x', -5 * plot.settings.sign).attr('y', 5).text(plot.stratum !== '' ? "".concat(plot.stratum) : null); //.text(plot.stratum !== '' ? `${this.settings.stratum_var} = ${plot.stratum}` : null);

    var n = this.util.addElement('g--n', svg, 'g').attr('transform', function (d) {
      _newArrowCheck(this, _this);

      return "translate(".concat(plot.settings.translateX, ",").concat(this.settings.margin.top / 2, ")");
    }.bind(this)).append('text') //.attr('text-anchor', plot.settings.textAnchor)
    .attr('text-anchor', 'middle').attr('alignment-baseline', 'middle') //.attr('x', plot.settings.sign * 10)
    .attr('x', plot.settings.sign * plot.settings.strokeWidth / 2).attr('y', 5);
    var groups = this.util.addElement('g--groups', svg, 'g').style('font', 'bold 12px var(--sans-serif)').style('font-variant-numeric', 'tabular-nums').attr('stroke-opacity', 0.6).attr('fill-opacity', 1);
    var bars = this.util.addElement('g--bars', svg, 'g').attr('fill-opacity', 0.6);
    var xAxisTop = this.util.addElement('g--x-axis', svg, 'g').attr('transform', "translate(0,".concat(this.settings.margin.top, ")")); //.call((g) =>
    //    this.util
    //        .addElement('x-axis__label', g, 'text')
    //        .attr(
    //            'x',
    //            plot.settings.mirror
    //                ? plot.settings.width - plot.settings.margin.right - 18
    //                : plot.settings.margin.left + 18
    //        )
    //        .attr('y', -25)
    //        .attr('fill', 'currentColor')
    //        .attr('text-anchor', plot.settings.mirror ? 'end' : 'start')
    //        .attr('alignment-baseline', 'baseline')
    //        .text(plot.settings.mirror ? '← Time (days)' : 'Time (days) →')
    //);

    var xAxisBottom = this.util.addElement('g--x-axis', svg, 'g').attr('transform', "translate(0,".concat(this.settings.height - this.settings.margin.bottom, ")")).call(function (g) {
      _newArrowCheck(this, _this);

      return this.util.addElement('x-axis__label', g, 'text').attr('x', plot.settings.mirror ? plot.settings.width - plot.settings.margin.right - 18 : plot.settings.margin.left + 18).attr('y', 25).attr('fill', 'currentColor').attr('text-anchor', plot.settings.mirror ? 'end' : 'start').attr('alignment-baseline', 'hanging').text(plot.settings.mirror ? '← Time (days)' : 'Time (days) →');
    }.bind(this));
    var yAxis = this.util.addElement('g--y-axis', svg, 'g').attr('transform', "translate(".concat(this.settings.margin.left, ",0)"));
    var labels = this.util.addElement('g--labels', svg, 'g').style('font', 'bold 12px var(--sans-serif)').style('font-variant-numeric', 'tabular-nums').attr('text-anchor', 'start'); //const ticker = this.util
    //    .addElement('ticker', svg, 'text')
    //    .attr('text-anchor', plot.settings.mirror ? 'start' : 'end')
    //    .attr(
    //        'x',
    //        plot.settings.mirror
    //            ? plot.settings.margin.left + 18
    //            : plot.settings.width - plot.settings.margin.right - 18
    //    )
    //    .attr('y', this.settings.height - this.settings.margin.bottom - 36)
    //    .attr('dy', '0.32em');
    //.text(`Day ${this.data.timepoints[0][0]}`);

    return {
      canvas: canvas,
      svg: svg,
      title: title,
      n: n,
      groups: groups,
      bars: bars,
      xAxisTop: xAxisTop,
      xAxisBottom: xAxisBottom,
      yAxis: yAxis,
      labels: labels //    ticker,

    };
  }

  function data$2(data, stratum) {
    var _this = this;

    var interpolated = this.data.interpolated.filter(function (d) {
      _newArrowCheck(this, _this);

      return d.stratum === stratum;
    }.bind(this));
    var timepoints = this.data.timepoints.map(function (_ref) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      var _ref2 = _slicedToArray(_ref, 2),
          timepoint = _ref2[0],
          data = _ref2[1];

      // Define mutable rank given current view.
      var stratumData = data.filter(function (d) {
        _newArrowCheck(this, _this2);

        return d.stratum === stratum;
      }.bind(this)).sort(function (a, b) {
        _newArrowCheck(this, _this2);

        return a["rank".concat(this.settings.view)] - b["rank".concat(this.settings.view)];
      }.bind(this));
      stratumData.forEach(function (d, i) {
        _newArrowCheck(this, _this2);

        d["rank".concat(stratum)] = i;
      }.bind(this));
      return [timepoint, stratumData];
    }.bind(this));
    return {
      mutated: data,
      interpolated: interpolated,
      timepoints: timepoints
    };
  }

  function groupByResponse(plot, data) {
    var _this = this;

    var groupedByResponse = d3.rollups(data, function (group) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      group.sort(function (a, b) {
        _newArrowCheck(this, _this2);

        return a["rank".concat(plot.stratum)] - b["rank".concat(plot.stratum)];
      }.bind(this));
      return {
        state: group[0].state,
        state_order: group[0].state_order,
        n: group.length,
        rankMin: group[0]["rank".concat(plot.stratum)],
        rankMax: group[group.length - 1]["rank".concat(plot.stratum)],
        pct: d3.format('.0%')(group.length / plot.set.id.size)
      };
    }.bind(this), function (d) {
      _newArrowCheck(this, _this);

      return d.state;
    }.bind(this));
    return groupedByResponse;
  }

  function groups(plot) {
    var _this = this;

    var groups = plot.layout.groups.selectAll('g');
    return function (_ref, transition) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      var _ref2 = _slicedToArray(_ref, 2);
          _ref2[0];
          var data = _ref2[1];

      return groups = groups.data(groupByResponse.call(this, plot, data), function (d) {
        _newArrowCheck(this, _this2);

        return d[0];
      }.bind(this)).join(function (enter) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        return enter.append('g').attr('transform', function (d) {
          _newArrowCheck(this, _this3);

          return "translate(".concat(plot.settings.translateX, ",").concat(plot.scale.y(d[1].rankMin), ")");
        }.bind(this)).call(function (g) {
          var _this4 = this;

          _newArrowCheck(this, _this3);

          g.append('line').classed('asp-line asp-line--group', true).attr('x1', plot.settings.sign * plot.settings.strokeWidth / 2).attr('x2', plot.settings.sign * plot.settings.strokeWidth / 2).attr('y1', 0).attr('y2', 0).attr('stroke', function (d) {
            _newArrowCheck(this, _this4);

            return this.scale.color(d[0]);
          }.bind(this)).attr('stroke-width', plot.settings.strokeWidth - 4);
          g.append('text').classed('asp-text asp-text--percent', true) //.attr('text-anchor', plot.settings.textAnchor)
          .attr('text-anchor', 'middle').attr('alignment-baseline', 'middle') //.attr('x', plot.settings.sign * 10)
          .attr('x', plot.settings.sign * plot.settings.strokeWidth / 2).attr('y', function (d) {
            _newArrowCheck(this, _this4);

            return (plot.scale.y(d[1].rankMax) - plot.scale.y(d[1].rankMin)) / 2 + plot.scale.y.bandwidth() / 2 + 1;
          }.bind(this)).text(function (d) {
            _newArrowCheck(this, _this4);

            return "".concat(d[1].n, " (").concat(d[1].pct, ")");
          }.bind(this));
        }.bind(this));
      }.bind(this), function (update) {
        _newArrowCheck(this, _this2);

        return update;
      }.bind(this), function (exit) {
        _newArrowCheck(this, _this2);

        exit.select('line.asp-line--group').transition(transition).duration(this.settings.duration).attr('y2', 0);
        exit.transition(transition).duration(this.settings.duration).attr('stroke-opacity', 0).attr('fill-opacity', 0).remove();
      }.bind(this)).call(function (g) {
        var _this5 = this;

        _newArrowCheck(this, _this2);

        g.transition(transition).duration(this.settings.duration).attr('transform', function (d) {
          _newArrowCheck(this, _this5);

          return "translate(".concat(plot.settings.translateX, ",").concat(plot.scale.y(d[1].rankMin), ")");
        }.bind(this));
        g.select('text.asp-text--percent').transition(transition).duration(this.settings.duration).attr('y', function (d) {
          _newArrowCheck(this, _this5);

          return (plot.scale.y(d[1].rankMax) - plot.scale.y(d[1].rankMin)) / 2 + plot.scale.y.bandwidth() / 2 + 1;
        }.bind(this)).style('display', function (d) {
          var el = this;
          var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
          var fontSize = parseFloat(style);
          return d[1].n * plot.scale.y.bandwidth() > fontSize ? null : 'none';
        }).text(function (d) {
          _newArrowCheck(this, _this5);

          return "".concat(d[1].n, " (").concat(d[1].pct, ")");
        }.bind(this));
        g.select('line.asp-line--group').transition(transition).duration(this.settings.duration).attr('y2', function (d) {
          _newArrowCheck(this, _this5);

          return plot.scale.y(d[1].rankMax) - plot.scale.y(d[1].rankMin) + plot.scale.y.bandwidth();
        }.bind(this));
      }.bind(this));
    }.bind(this);
  }

  function bars(plot) {
    var _this = this;

    var bars = plot.layout.bars.selectAll('g');

    var getX = function getX(d) {
      _newArrowCheck(this, _this);

      return plot.settings.mirror ? plot.scale.x(d.start_timepoint + d.duration) : plot.scale.x(d.start_timepoint);
    }.bind(this);

    var getWidth = function getWidth(d) {
      _newArrowCheck(this, _this);

      return plot.settings.mirror ? plot.scale.x(d.start_timepoint) - plot.scale.x(d.start_timepoint + d.duration) : plot.scale.x(d.start_timepoint + d.duration) - plot.scale.x(d.start_timepoint);
    }.bind(this);

    return function (_ref, transition) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      var _ref2 = _slicedToArray(_ref, 2);
          _ref2[0];
          var data = _ref2[1];

      bars = bars.data(data, function (d) {
        _newArrowCheck(this, _this2);

        return d.id;
      }.bind(this)).join(function (enter) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        return enter.append('g').attr('class', function (d) {
          _newArrowCheck(this, _this3);

          return "asp-g--bar asp-g--".concat(d.id);
        }.bind(this)).attr('height', plot.scale.y.bandwidth()).attr('y', plot.scale.y(plot.set.id.size));
      }.bind(this), function (update) {
        _newArrowCheck(this, _this2);

        return update;
      }.bind(this), function (exit) {
        _newArrowCheck(this, _this2);

        return exit.transition(transition).remove().attr('y', plot.scale.y(plot.set.id.size + 1));
      }.bind(this)).call(function (g) {
        var _this4 = this;

        _newArrowCheck(this, _this2);

        g.transition(transition).duration(this.settings.duration).attr('transform', function (d) {
          _newArrowCheck(this, _this4);

          return "translate(".concat(0, ",", plot.scale.y(d["rank".concat(plot.stratum)]), ")");
        }.bind(this));
        g.selectAll('rect').data(function (d) {
          _newArrowCheck(this, _this4);

          return d["states".concat(this.settings.view)];
        }.bind(this), function (d) {
          _newArrowCheck(this, _this4);

          return d.sequence;
        }.bind(this)).join('rect').attr('fill', function (d) {
          _newArrowCheck(this, _this4);

          return this.scale.color(d.state);
        }.bind(this)).attr('y', 0).attr('height', plot.scale.y.bandwidth()).attr('rx', '4px').attr('ry', '4px').call(function (rect) {
          var _this5 = this;

          _newArrowCheck(this, _this4);

          return rect.transition(transition).duration(this.settings.duration).attr('x', function (d) {
            _newArrowCheck(this, _this5);

            return getX(d);
          }.bind(this)).attr('width', function (d) {
            _newArrowCheck(this, _this5);

            return getWidth(d);
          }.bind(this));
        }.bind(this));
      }.bind(this));
    }.bind(this);
  }

  function axis(plot) {
    var _this = this;

    //this.layout.svg
    //    .append('text')
    //    .style('font', `bold 12px var(--sans-serif)`)
    //    .style('font-variant-numeric', 'tabular-nums')
    //    .attr('alignment-baseline', 'baseline')
    //    .style('font', 'bold 12px var(--sans-serif)')
    //    .style('font-variant-numeric', 'tabular-nums')
    //    .attr('text-anchor', 'start')
    //    .attr('x', this.settings.margin.left + 6)
    //    .attr('y', this.settings.margin.top - 6)
    //    .text(`ID`);
    plot.xAxisTop = d3.axisTop(plot.scale.x).ticks(this.settings.width / 160).tickSizeOuter(0).tickSizeInner(-(this.settings.height - this.settings.margin.top - this.settings.margin.bottom));
    plot.xAxisBottom = d3.axisBottom(plot.scale.x).ticks(this.settings.width / 160).tickSizeOuter(0).tickSizeInner(0);
    return function (_, transition) {
      _newArrowCheck(this, _this);

      plot.layout.xAxisTop.transition(transition).call(plot.xAxisTop);
      plot.layout.xAxisBottom.transition(transition).call(plot.xAxisBottom); //if (this.settings.view === 'OverallSurvival') {
      //    plot.layout.xAxisTop.select('.tick:first-of-type').remove();
      //    plot.layout.xAxisBottom.select('.tick:first-of-type').remove();
      //}

      plot.layout.xAxisTop.selectAll('.tick line').attr('stroke', '#999').attr('stroke-opacity', 0.6);
      plot.layout.xAxisTop.select('.domain').remove();
      plot.layout.xAxisBottom.select('.domain').remove();
    }.bind(this);
  }

  function labels(plot) {
    var _this = this;

    var labels = plot.layout.labels.selectAll('text');
    return function (_ref, transition) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      var _ref2 = _slicedToArray(_ref, 2);
          _ref2[0];
          var data = _ref2[1];

      labels = labels.data(data, function (d) {
        _newArrowCheck(this, _this2);

        return d.id;
      }.bind(this)).join(function (enter) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        return enter.append('text').attr('alignment-baseline', 'middle').attr('transform', function (d) {
          _newArrowCheck(this, _this3);

          return "translate(".concat(0, ",", plot.scale.y(d["rank".concat(plot.stratum)]), ")");
        }.bind(this)).attr('x', this.settings.margin.left + 6).attr('y', plot.scale.y.bandwidth() / 2 + 1).text(function (d) {
          _newArrowCheck(this, _this3);

          return d.id;
        }.bind(this));
      }.bind(this), function (update) {
        _newArrowCheck(this, _this2);

        return update;
      }.bind(this), function (exit) {
        var _this4 = this;

        _newArrowCheck(this, _this2);

        return exit.transition(transition).remove().attr('transform', function (d) {
          _newArrowCheck(this, _this4);

          return "translate(".concat(0, ",", plot.scale.y(plot.set.id.size + 1), ")");
        }.bind(this));
      }.bind(this)).call(function (label) {
        var _this5 = this;

        _newArrowCheck(this, _this2);

        return label.transition(transition).attr('transform', function (d) {
          _newArrowCheck(this, _this5);

          return "translate(".concat(0, ",", plot.scale.y(d["rank".concat(plot.stratum)]), ")");
        }.bind(this));
      }.bind(this));
    }.bind(this);
  }

  function ticker(plot) {
    var _this = this;

    return function (_ref, transition) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      var _ref2 = _slicedToArray(_ref, 1),
          timepoint = _ref2[0];

      // TODO: figure out why this is throwing a [ Uncaught (in promise) ] error
      transition.end().then(function () {
        _newArrowCheck(this, _this2);

        plot.layout.ticker.text("Day ".concat(timepoint));
      }.bind(this));
    }.bind(this);
  }

  function plot() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var stratum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (this.settings.stratum_var === null) i = 1;
    var plot = {
      stratum: stratum,
      i: i
    };
    plot.settings = {
      width: Math.floor(this.settings.width * this.settings.splitFactor),
      margin: _objectSpread2(_objectSpread2({}, this.settings.margin), {}, {
        left: i % 2 === 0 ? this.settings.margin.right : this.settings.margin.left,
        right: i % 2 === 0 ? this.settings.margin.left : this.settings.margin.right
      }),
      textAnchor: plot.i % 2 === 0 ? 'start' : 'end',
      sign: plot.i % 2 === 0 ? 1 : -1,
      mirror: plot.i % 2 === 0 ? true : false
    };
    plot.settings.xRange = plot.i % 2 === 0 ? [plot.settings.width - plot.settings.margin.right, plot.settings.margin.left] : [plot.settings.margin.left, plot.settings.width - plot.settings.margin.right];
    plot.settings.translateX = plot.i % 2 === 0 ? plot.settings.width - plot.settings.margin.right : plot.settings.margin.left;
    plot.settings.strokeWidth = i === 0 ? plot.settings.margin.right : plot.settings.margin.left;
    plot.layout = layout$1.call(this, plot);
    plot.data = data === null ? this.data : data$2.call(this, data, stratum);
    plot.set = {
      id: id.call(this, plot.data.mutated)
    };
    plot.scale = {
      x: x.call(this, plot.settings.xRange),
      y: y.call(this, plot.set.id)
    };
    plot.layout.n.text("n=".concat(plot.set.id.size));
    plot.update = {
      groups: groups.call(this, plot),
      bars: bars.call(this, plot),
      axis: axis.call(this, plot),
      labels: labels.call(this, plot),
      ticker: ticker.call(this, plot)
    };
    return plot;
  }

  function updateTimepoint(timepoint) {
    var _this = this;

    this.settings.timepoint = timepoint;
    this.data.timepoint = this.data.timepoints.find(function (d) {
      _newArrowCheck(this, _this);

      return d[0] === timepoint;
    }.bind(this));
    this.plots.forEach(function (plot) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      plot.data.timepoint = plot.data.timepoints.find(function (d) {
        _newArrowCheck(this, _this2);

        return d[0] === timepoint;
      }.bind(this));
    }.bind(this));
    this.layout.ticker.text("Study day ".concat(timepoint));
    this.controls.range.input.property('value', timepoint);
    this.controls.range.output.text(
    /*this.settings.timepointUnit*/
    'Study day'.concat(" ", this.settings.timepoint));
  }

  function init() {
    var _this = this;

    this.set = set.call(this);
    this.scale = scale.call(this);
    this.legend = legend.call(this);
    this.plots = this.settings.stratum_var ? d3.groups(this.data.mutated, function (d) {
      _newArrowCheck(this, _this);

      return d.stratum;
    }.bind(this)).map(function (_ref, i) {
      _newArrowCheck(this, _this);

      var _ref2 = _slicedToArray(_ref, 2),
          stratum = _ref2[0],
          data = _ref2[1];

      return plot.call(this, data, stratum, i);
    }.bind(this)) : [plot.call(this)];
    runAnimation.call(this);
    this["break"] = true;
    this.delayTimeout = d3.timeout(function () {
      _newArrowCheck(this, _this);

      runAnimation.call(this);
      if (this.settings.play === false) this["break"] = true;
    }.bind(this), this.settings.delay);
  }
  function runAnimation() {
    return _runAnimation.apply(this, arguments);
  }

  function _runAnimation() {
    _runAnimation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this2 = this;

      var _iterator, _step, timepoint, allStates, x1, x2, transitions;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(this.data.timepoints.filter(function (d) {
                _newArrowCheck(this, _this2);

                return d[0] >= this.settings.timepoint && d[0] <= this.settings.timepointMax;
              }.bind(this)));
              _context.prev = 1;

              _iterator.s();

            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 20;
                break;
              }

              timepoint = _step.value;

              if (!this["break"]) {
                _context.next = 9;
                break;
              }

              this.plots.forEach(function (plot) {
                _newArrowCheck(this, _this2);

                plot.layout.svg.interrupt();
              }.bind(this));
              delete this["break"];
              return _context.abrupt("break", 20);

            case 9:
              // Update timepoint settings, data, and UI components.
              updateTimepoint.call(this, timepoint[0]); // Re-calculate x-domain.

              allStates = this.data.interpolated.flatMap(function (d) {
                _newArrowCheck(this, _this2);

                return d["states".concat(this.settings.view)];
              }.bind(this)); //const x1 = this.settings.view === 'OverallSurvival'
              //    ? Math.max(
              //        d3.min(allStates, (d) => d.start_timepoint),
              //        this.settings.timepointMin
              //    ) : d3.min(allStates, (d) => d.start_timepoint);

              x1 = d3.min(allStates, function (d) {
                _newArrowCheck(this, _this2);

                return d.start_timepoint;
              }.bind(this));
              x2 = Math.min(d3.max(allStates, function (d) {
                _newArrowCheck(this, _this2);

                return d.start_timepoint + d.duration;
              }.bind(this)), this.settings.timepointMax);
              this.xDomain = [x1, x2]; // Transition plots to next timepoint.

              transitions = this.plots.map(function (plot) {
                var _this3 = this;

                _newArrowCheck(this, _this2);

                plot.data.timepoint = plot.data.timepoints.find(function (_ref3) {
                  _newArrowCheck(this, _this3);

                  var _ref4 = _slicedToArray(_ref3, 2),
                      timepoint = _ref4[0];
                      _ref4[1];

                  return timepoint === this.settings.timepoint;
                }.bind(this));
                return transitionAnimation.call(this, plot);
              }.bind(this));
              this.transition = transitions; // Await end of all transitions.

              _context.next = 18;
              return Promise.allSettled(transitions.map(function (transition) {
                _newArrowCheck(this, _this2);

                return transition.end();
              }.bind(this)));

            case 18:
              _context.next = 3;
              break;

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](1);

              _iterator.e(_context.t0);

            case 25:
              _context.prev = 25;

              _iterator.f();

              return _context.finish(25);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 22, 25, 28]]);
    }));
    return _runAnimation.apply(this, arguments);
  }

  function transitionAnimation(plot) {
    var transition = plot.layout.svg.transition().duration(this.settings.duration).ease(d3.easeLinear); // Update the x-domain.

    plot.scale.x.domain(this.xDomain); // Update the plot components.

    plot.update.groups(plot.data.timepoint, transition);
    plot.update.bars(plot.data.timepoint, transition);
    plot.update.axis(plot.data.timepoint, transition);
    if (this.settings.displayIds) plot.update.labels(plot.data.timepoint, transition);
    return transition;
  }

  function playPause(form) {
    var _this = this;

    var button = this.util.addElement('button', form, 'button').attr('type', 'button').attr('title', this.settings.play ? 'Pause animation' : 'Play animation');
    this.util.addIcon.call(this, button, (this.settings.play ? faPause : faPlay).icon);
    button.on('click', function () {
      _newArrowCheck(this, _this);

      toggle.call(this); // Break animation loop on pause.

      if (this.settings.play === false && this["break"] === undefined) this["break"] = true; // Resume animation on play.
      else {
          delete this["break"];
          runAnimation.call(this);
        }
    }.bind(this));
    return button;
  }

  function stepBackward(form) {
    var _this = this;

    var button = this.util.addElement('button', form, 'button').attr('type', 'button').attr('title', 'Step backward one timepoint');
    this.util.addIcon.call(this, button, faStepBackward.icon); // TODO: disable buttoon at minimum timepoint

    button.on('click', function () {
      var _this2 = this;

      _newArrowCheck(this, _this);

      this["break"] = true;
      if (this.settings.play) toggle.call(this);
      d3.timeout(function () {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        updateTimepoint.call(this, this.settings.timepoint - 1);
        this.plots.forEach(function (plot) {
          _newArrowCheck(this, _this3);

          transitionAnimation.call(this, plot);
        }.bind(this));
      }.bind(this), this.settings.duration);
    }.bind(this));
    return button;
  }

  function stepForward(form) {
    var _this = this;

    var button = this.util.addElement('button', form, 'button').attr('type', 'button').attr('title', 'Step forward one timepoint');
    this.util.addIcon.call(this, button, faStepForward.icon); // TODO: disable buttoon at maximum timepoint

    button.on('click', function () {
      var _this2 = this;

      _newArrowCheck(this, _this);

      this["break"] = true;
      if (this.settings.play) toggle.call(this);
      d3.timeout(function () {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        updateTimepoint.call(this, this.settings.timepoint + 1);
        this.plots.forEach(function (plot) {
          _newArrowCheck(this, _this3);

          transitionAnimation.call(this, plot);
        }.bind(this));
      }.bind(this), this.settings.duration);
    }.bind(this));
    return button;
  }

  function reset(form) {
    var _this = this;

    var button = this.util.addElement('button', form, 'button').attr('type', 'button').attr('title', 'Restart animation');
    this.util.addIcon.call(this, button, faRedo.icon); // TODO: make reset work

    button.on('click', function () {
      var _this2 = this;

      _newArrowCheck(this, _this);

      console.log('reset'); // Break animation loop on reset.

      this["break"] = true;
      d3.timeout(function () {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        updateTimepoint.call(this, this.settings.timepointMin); // TODO: disable button at maximum timepoint

        this.plots.forEach(function (plot) {
          _newArrowCheck(this, _this3);

          transitionAnimation.call(this, plot);
        }.bind(this));
        if (this.settings.play) runAnimation.call(this);
      }.bind(this), this.settings.duration);
    }.bind(this));
    return button;
  }

  function range(form) {
    var main = this;
    var label = this.util.addElement('label', form, 'label');
    var output = this.util.addElement('output', label, 'output');
    var input = this.util.addElement('input', label, 'input').attr('type', 'range').attr('step', 1);
    input.on('mousedown', function () {
      main["break"] = true;
      if (main.settings.play) toggle.call(main);
    });
    input.on('change', function () {
      var _this = this;

      console.log(this.value);
      main["break"] = true;
      if (main.settings.play) toggle.call(main); //d3.timeout(() => {

      updateTimepoint.call(main, +this.value);
      main.plots.forEach(function (plot) {
        _newArrowCheck(this, _this);

        transitionAnimation.call(main, plot);
      }.bind(this)); //}, this.settings.duration);
    });
    return {
      input: input,
      output: output
    };
  }

  var playerFunctions = {
    playPause: playPause,
    stepBackward: stepBackward,
    stepForward: stepForward,
    //speedDown,
    //speedUp,
    reset: reset,
    range: range
  };

  function player(controls) {
    var container = this.util.addElement('player', controls);
    var form = this.util.addElement('player__form', container, 'form');
    var player = {};

    for (var playerFunction in playerFunctions) {
      player[playerFunction] = playerFunctions[playerFunction].call(this, form);
    }

    return player;
  }

  function data$1() {
    return [{
      setting: 'OverallSurvival',
      value: 'overall-survival',
      label: 'Overall Survival'
    }, {
      setting: 'CurrentResponse',
      value: 'current-response',
      label: 'Current Response'
    }];
  }

  function view(controls) {
    var _this = this;

    var container = this.util.addElement('view', controls);
    var form = this.util.addElement('view__form', container, 'form');
    form.append('span').text('View');
    var inputs = this.util.addElement('div', form).selectAll('input').data(data$1).join('input').attr('type', 'radio').attr('name', 'view').attr('value', function (d) {
      _newArrowCheck(this, _this);

      return d.value;
    }.bind(this)).property('checked', function (d) {
      _newArrowCheck(this, _this);

      return d.setting === this.settings.view;
    }.bind(this)).each(function (d) {
      var label = document.createElement('label');
      label.textContent = d.label;
      this.parentNode.insertBefore(label, this);
    }); // TODO: handle rank calculation for strata

    inputs.on('change', function () {
      var _this2 = this;

      _newArrowCheck(this, _this);

      var d = form.selectAll('input:checked').datum();
      console.log("view: ".concat(d.setting));
      this.settings.view = d.setting; // Re-calculate x-domain.

      var allStates = this.data.interpolated.flatMap(function (d) {
        _newArrowCheck(this, _this2);

        return d["states".concat(this.settings.view)];
      }.bind(this));
      var x1 = d3.min(allStates, function (d) {
        _newArrowCheck(this, _this2);

        return d.start_timepoint;
      }.bind(this));
      var x2 = d3.max(allStates, function (d) {
        _newArrowCheck(this, _this2);

        return d.start_timepoint + d.duration;
      }.bind(this));
      this.xDomain = [x1, x2];
      this.plots.forEach(function (plot) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        plot.data.timepoints.forEach(function (_ref) {
          var _this4 = this;

          _newArrowCheck(this, _this3);

          var _ref2 = _slicedToArray(_ref, 2);
              _ref2[0];
              var data = _ref2[1];

          // Define mutable rank given current view.
          data.sort(function (a, b) {
            _newArrowCheck(this, _this4);

            return a["rank".concat(this.settings.view)] - b["rank".concat(this.settings.view)];
          }.bind(this));
          data.forEach(function (d, i) {
            _newArrowCheck(this, _this4);

            d["rank".concat(plot.stratum)] = i;
          }.bind(this));
        }.bind(this));
      }.bind(this));
      if (this.settings.play === false) this.plots.forEach(function (plot) {
        _newArrowCheck(this, _this2);

        transitionAnimation.call(this, plot);
      }.bind(this));
    }.bind(this));
    return inputs;
  }

  function controls$1(main) {
    var controls = this.util.addElement('controls', main);
    var view$1 = view.call(this, controls);
    var player$1 = player.call(this, controls);
    return {
      controls: controls,
      view: view$1,
      player: player$1
    };
  }

  function resize() {
    var _this = this;

    this.settings.dimensions = getDimensions.call(this, this.layout.main);
    this.settings.width = this.settings.dimensions.width;
    this.settings.height = this.settings.dimensions.height;
    this.plots.forEach(function (plot) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      plot.settings.width = Math.floor(this.settings.width * this.settings.splitFactor);
      plot.settings.xRange = plot.i % 2 === 0 ? [plot.settings.width - plot.settings.margin.right, plot.settings.margin.left] : [plot.settings.margin.left, plot.settings.width - plot.settings.margin.right];
      plot.settings.translateX = plot.i % 2 === 0 ? plot.settings.width - plot.settings.margin.right : plot.settings.margin.left;
      plot.layout.svg //.attr('viewBox', [0, 0, plot.settings.width, this.settings.height]);
      .attr('width', plot.settings.width).attr('height', this.settings.height);
      plot.layout.title.attr('transform', function (d) {
        _newArrowCheck(this, _this2);

        return "translate(".concat(plot.settings.margin.left + (plot.settings.width - plot.settings.margin.right - plot.settings.margin.left) / 2, ",").concat(plot.settings.margin.top / 2, ")");
      }.bind(this));
      plot.layout.xAxisTop.call(function (g) {
        _newArrowCheck(this, _this2);

        return g.select('.asp-x-axis__label').attr('x', plot.settings.mirror ? plot.settings.width - plot.settings.margin.right - 18 : plot.settings.margin.left + 18);
      }.bind(this));
      plot.layout.xAxisBottom.call(function (g) {
        _newArrowCheck(this, _this2);

        return g.select('.asp-x-axis__label').attr('x', plot.settings.mirror ? plot.settings.width - plot.settings.margin.right - 18 : plot.settings.margin.left + 18);
      }.bind(this));
      plot.scale.x.range(plot.settings.xRange);
      plot.xAxisTop = d3.axisTop(plot.scale.x).ticks(this.settings.width / 160).tickSizeOuter(0).tickSizeInner(-(this.settings.height - this.settings.margin.top - this.settings.margin.bottom));
      plot.xAxisBottom = d3.axisBottom(plot.scale.x).ticks(this.settings.width / 160).tickSizeOuter(0).tickSizeInner(0);
      plot.scale.y.range([this.settings.height - this.settings.margin.bottom, this.settings.margin.top]);
    }.bind(this));
  }

  function layout() {
    var main = this.util.addElement('main', d3.select(this.element));
    var dimensions = getDimensions.call(this, main);
    this.settings.width = dimensions.width;
    this.settings.height = dimensions.height;
    var legend = this.util.addElement('legend', main);
    var plots = this.util.addElement('plots', main);
    var ticker = this.util.addElement('ticker', plots);
    var controls = controls$1.call(this, main);
    window.addEventListener('resize', resize.bind(this));
    return _objectSpread2({
      main: main,
      legend: legend,
      plots: plots,
      ticker: ticker
    }, controls);
  }

  function mapVariables(d) {
    var _this = this;

    var datum = {};

    var _iterator = _createForOfIteratorHelper(Object.keys(this.settings).filter(function (key) {
      _newArrowCheck(this, _this);

      return /_var$/.test(key);
    }.bind(this))),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var setting = _step.value;
        var variable = setting.replace(/_var$/, '');
        datum[variable] = ['timepoint', 'duration', 'censor_timepoint', 'result_order', 'visit_order'].includes(variable) ? +d[this.settings[setting]] : d[this.settings[setting]];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return datum;
  }

  function encodeResponse(datum) {
    // response order
    if (datum[this.settings.result_order_var] !== undefined) datum.result_order = datum[this.settings.result_order_var];else {
      switch (datum.result.toLowerCase()) {
        // Complete Response
        case 'cr':
          datum.result_order = 0;
          break;

        case 'complete response':
          datum.result_order = 0;
          break;

        case 'complete response (cr)':
          datum.result_order = 0;
          break;
        // Partial Response

        case 'pr':
          datum.result_order = 1;
          break;

        case 'partial response':
          datum.result_order = 1;
          break;

        case 'partial response (pr)':
          datum.result_order = 1;
          break;
        // Stable Disease

        case 'sd':
          datum.result_order = 2;
          break;

        case 'stable disease':
          datum.result_order = 2;
          break;

        case 'stable disease (sd)':
          datum.result_order = 2;
          break;
        // Non-Progressive Disease

        case 'non-pd':
          datum.result_order = 2;
          break;

        case 'non-progressive disease':
          datum.result_order = 2;
          break;
        // Non-CR/Non-PD

        case 'non-cr/non-pd':
          datum.result_order = 3;
          break;

        case 'non-complete reponse/non-progressive disease':
          datum.result_order = 3;
          break;
        // Not Evaluated

        case 'ne':
          datum.result_order = 4;
          break;

        case 'not evaluated':
          datum.result_order = 4;
          break;

        case 'not evaluated (ne)':
          datum.result_order = 4;
          break;

        case 'not all evaluated':
          datum.result_order = 4;
          break;

        case 'not all evaluated (ne)':
          datum.result_order = 4;
          break;
        // Unknown / Undefined

        case 'un':
          datum.result_order = 5;
          break;

        case 'unknown':
          datum.result_order = 5;
          break;

        case 'unknown (un)':
          datum.result_order = 5;
          break;

        case 'undefined':
          datum.result_order = 5;
          break;

        case 'undefined (un)':
          datum.result_order = 5;
          break;
        // Unconfirmed Progressive Disease

        case 'pdu':
          datum.result_order = 6;
          break;

        case 'unconfirmed progressive disease':
          datum.result_order = 6;
          break;
        // Progressive Disease

        case 'pd':
          datum.result_order = 7;
          break;

        case 'progressive disease':
          datum.result_order = 7;
          break;

        case 'progressive disease (pd)':
          datum.result_order = 7;
          break;
        // Confirmed Progressive Disease

        case 'pdc':
          datum.result_order = 7;
          break;

        case 'confirmed progressive disease':
          datum.result_order = 7;
          break;

        default:
          datum.result_order = -1;
          break;
      }
    } // color

    datum.result_color = datum[this.settings.result_color_var] !== undefined ? datum[this.settings.result_color_var] : datum.result === 'CR' ? '#2166ac' : datum.result === 'PR' ? '#4393c3' : datum.result === 'SD' ? '#92c5de' : datum.result === 'NE' ? '#969696' : datum.result === 'UN' ? '#bdbdbd' : datum.result === 'PD' ? '#d6604d' : null;
  }

  function addVariables(datum) {
    // Define additional time units.
    datum.week = datum.timepoint / 7;
    datum.month = datum.timepoint / (365.25 / 12);
    datum.year = datum.timepoint / 365.25;
  }

  function getDuration(mutated) {
    var _this = this;

    d3.rollup(mutated, function (group) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      group.sort(function (a, b) {
        _newArrowCheck(this, _this2);

        return a.timepoint - b.timepoint;
      }.bind(this));
      d3.pairs(group).forEach(function (pair, i, pairs) {
        _newArrowCheck(this, _this2);

        if (isNaN(pair[0].duration)) pair[0].duration = pair[1].timepoint - pair[0].timepoint;
      }.bind(this));
      var last = group[group.length - 1];
      if (isNaN(last.duration)) last.duration = last.censor_timepoint !== undefined ? last.censor_timepoint - last.timepoint : 1;
    }.bind(this), function (d) {
      _newArrowCheck(this, _this);

      return d.id;
    }.bind(this));
  }

  function mutate(data) {
    var _this = this;

    var mutated = data.map(function (d) {
      _newArrowCheck(this, _this);

      var datum = mapVariables.call(this, d);
      encodeResponse.call(this, datum);
      addVariables.call(this, datum);
      return datum;
    }.bind(this)); // Calculate duration of each response.

    getDuration(mutated);
    return mutated;
  }

  function currentResponse(states) {
    var _this = this;

    var total_duration = 0;
    var currentResponse = states.map(function (state) {
      _newArrowCheck(this, _this);

      return _objectSpread2({}, state);
    }.bind(this)).reverse().map(function (state, i, states) {
      _newArrowCheck(this, _this);

      if (i === 0) {
        state.start_timepoint = 1;
      } else {
        state.duration = state.duration;
        total_duration -= state.duration;
        state.start_timepoint = total_duration;
      }

      return state;
    }.bind(this));
    return currentResponse;
  }

  // output data: one record per ID per day on study

  function interpolate(mutated) {
    var _this = this;

    var interpolated = d3.rollup(mutated, function (group) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      var _long = [];
      var state;
      var state_duration;
      var states = [];
      var total_duration = d3.min(group, function (d) {
        _newArrowCheck(this, _this2);

        return d.timepoint;
      }.bind(this));
      var sequence = 0; // Pair each record for the given participant to define a start and end timepoint.

      group.sort(function (a, b) {
        _newArrowCheck(this, _this2);

        return a.timepoint - b.timepoint;
      }.bind(this)).forEach(function (d, i) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        // Update state initially and when state changes.
        if (i === 0 || d.result !== group[i - 1].result) {
          state = d.result;
          state_duration = 0;
          states.push({
            state: state,
            // current state
            start_timepoint: total_duration,
            // starting timepoint of current state,
            duration: 0,
            // duration of current state
            sequence: sequence
          });
          sequence++;
        } // Define an item for each day between the current timepoint (pair[0]) and the next timepoint (pair[1]).


        for (var _i = 0; _i < d.duration; _i++) {
          var datum = _objectSpread2({}, d);

          datum.timepoint = datum.timepoint + _i; // Increment timepoint.

          datum.duration = state_duration + _i + 1; // Increment duration of current state.

          datum.total_duration = total_duration + _i + 1; // Increment total duration.

          states[states.length - 1].duration++; // Increase duration of the current state.

          datum.statesOverallSurvival = states.map(function (state) {
            _newArrowCheck(this, _this3);

            return _objectSpread2({}, state);
          }.bind(this));
          datum.statesCurrentResponse = currentResponse(datum.statesOverallSurvival);
          datum.state = datum.result;
          datum.state_order = datum.result_order;

          _long.push(datum);
        } // Add difference between timepoints to duration.


        state_duration = state_duration + d.duration;
        total_duration += d.duration;
      }.bind(this));
      return _long;
    }.bind(this), function (d) {
      _newArrowCheck(this, _this);

      return d.id;
    }.bind(this));

    var flattened = _toConsumableArray(interpolated.values()).flatMap(function (d) {
      _newArrowCheck(this, _this);

      return d;
    }.bind(this));

    return flattened;
  }

  function rankOverallSurvival(group) {
    var _this = this;

    // In overall view, sort by:
    //   1. current state
    //   3. descending total duration
    //   2. descending duration of current state
    //   4. ID
    group.sort(function (a, b) {
      _newArrowCheck(this, _this);

      var state_order_diff = a.state_order - b.state_order;
      var total_duration_diff = b.total_duration - a.total_duration;
      var duration_diff = b.duration - a.duration;
      var id_diff = a.id < b.id ? -1 : 1;
      return state_order_diff || total_duration_diff || duration_diff || id_diff;
    }.bind(this)).forEach(function (d, i) {
      _newArrowCheck(this, _this);

      d.rankOverallSurvival = i; // rank positions IDs along y-axis
    }.bind(this));
  }

  function rankCurrentResponse(group) {
    var _this = this;

    // In current state view, sort by:
    // 1. current state
    // 2. descending duration of current state
    // 3. descending total duration
    // 4. ID
    group.sort(function (a, b) {
      _newArrowCheck(this, _this);

      var state_order_diff = a.state_order - b.state_order;
      var duration_diff = b.duration - a.duration; // sort the earlier responders first

      var total_duration_diff = a.total_duration - b.total_duration;
      var id_diff = a.id < b.id ? -1 : 1;
      return state_order_diff || duration_diff || total_duration_diff || id_diff;
    }.bind(this)).forEach(function (d, i) {
      _newArrowCheck(this, _this);

      d.rankCurrentResponse = i;
    }.bind(this));
  }

  function rank(group) {
    var _this = this;

    // Define mutable rank given current view.
    group.sort(function (a, b) {
      _newArrowCheck(this, _this);

      return a["rank".concat(this.settings.view)] - b["rank".concat(this.settings.view)];
    }.bind(this)).forEach(function (d, i) {
      _newArrowCheck(this, _this);

      d.rank = i;
    }.bind(this));
  }

  function groupByTimepoint(interpolated, finalTimepoint) {
    var _this = this;

    var timepoints = d3.rollups(interpolated, function (group) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      // Capture IDs at each timepoint.
      var groupIds = new Set(group.map(function (d) {
        _newArrowCheck(this, _this2);

        return d.id;
      }.bind(this))); // If ID is missing at given timepoint, add final record to given timepoint.

      finalTimepoint.forEach(function (_ref) {
        _newArrowCheck(this, _this2);

        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (groupIds.has(key) === false) group.push(_objectSpread2({}, value));
      }.bind(this)); // TODO: add overall survival rank not grouped by response.
      // Rank IDs.

      rankOverallSurvival.call(this, group);
      rankCurrentResponse.call(this, group);
      rank.call(this, group);
      return group;
    }.bind(this), function (d) {
      _newArrowCheck(this, _this);

      return d.timepoint;
    }.bind(this));
    return timepoints;
  }

  function data(data) {
    var _this = this;

    var mutated = mutate.call(this, data);
    var interpolated = interpolate.call(this, mutated);
    var finalTimepoint = d3.rollups(interpolated, function (group) {
      _newArrowCheck(this, _this);

      return group[group.length - 1];
    }.bind(this), function (d) {
      _newArrowCheck(this, _this);

      return d.id;
    }.bind(this));
    var timepoints = groupByTimepoint.call(this, interpolated, finalTimepoint);
    return {
      data: data,
      mutated: mutated,
      interpolated: interpolated,
      finalTimepoint: finalTimepoint,
      timepoints: timepoints
    };
  }

  function controls() {
    var _this = this;

    var controls = _objectSpread2(_objectSpread2({
      container: this.layout.controls,
      player: this.layout.player
    }, this.layout.player), {}, {
      view: this.layout.view
    }); // Update settings.


    this.settings.timepointMin = this.settings.timeopintMin !== null ? this.settings.timepointMin : d3.min(this.data.timepoints, function (_ref) {
      _newArrowCheck(this, _this);

      var _ref2 = _slicedToArray(_ref, 1),
          d = _ref2[0];

      return d;
    }.bind(this));
    this.settings.timepointMax = this.settings.timepointMax !== null ? this.settings.timepointMax : d3.max(this.data.timepoints, function (_ref3) {
      _newArrowCheck(this, _this);

      var _ref4 = _slicedToArray(_ref3, 1),
          d = _ref4[0];

      return d;
    }.bind(this));
    this.settings.timepoint = this.settings.timepoint !== undefined && this.settings.timepoint >= this.settings.timepointMin && this.settings.timepoint <= this.settings.timepointMax ? this.settings.timepoint : this.settings.timepointMin; // Update controls.

    controls.range.input.attr('min', this.settings.timepointMin).attr('max', this.settings.timepointMax).attr('value', this.settings.timepoint);
    controls.range.output.text("".concat(this.settings.timepointUnit, " ").concat(this.settings.timepoint));
    return controls;
  }

  function animatedSwimmerPlot(_data_) {
    var _element_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';

    var _settings_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var fdg = {
      element: _element_,
      settings: Object.assign(settings(), _settings_).update(),
      util: util
    };
    fdg.layout = layout.call(fdg);
    fdg.data = data.call(fdg, _data_);
    fdg.controls = controls.call(fdg);
    init.call(fdg);
    return fdg;
  }

  return animatedSwimmerPlot;

})));

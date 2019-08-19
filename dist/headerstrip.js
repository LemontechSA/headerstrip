(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(factory((global.headerstrip = {}),global.React,global.ReactDOM));
}(this, (function (exports,React,ReactDOM) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var reactIs_development = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;

	var hasWarnedAboutDeprecatedIsAsyncMode = false;

	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}
	});

	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development;
	}
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	{
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  {
	    loggedTypeFailures = {};
	  }
	};

	var checkPropTypes_1 = checkPropTypes;

	var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning$1 = function() {};

	{
	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if ("development" !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$1(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!reactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      {
	        if (arguments.length > 1) {
	          printWarning$1(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has$1(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$1(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var ReactIs = reactIs;

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
	}
	});

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if ('object' !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
			// register as 'classnames', consistent with npm package name
			undefined('classnames', [], function () {
				return classNames;
			});
		} else {
			window.classNames = classNames;
		}
	}());
	});

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var bugfixes = undefined;
	var applyAnimatedValues = undefined;
	var colorNames = [];
	var requestFrame = function requestFrame(cb) {
	  return global.requestAnimationFrame(cb);
	};
	var cancelFrame = function cancelFrame(cb) {
	  return global.cancelAnimationFrame(cb);
	};
	var interpolation = undefined;
	var injectApplyAnimatedValues = function injectApplyAnimatedValues(fn, transform) {
	  return applyAnimatedValues = {
	    fn: fn,
	    transform: transform
	  };
	};
	var injectColorNames = function injectColorNames(names) {
	  return colorNames = names;
	};
	var injectBugfixes = function injectBugfixes(fn) {
	  return bugfixes = fn;
	};
	var injectInterpolation = function injectInterpolation(cls) {
	  return interpolation = cls;
	};
	var injectFrame = function injectFrame(raf, caf) {
	  var _ref;

	  return _ref = [raf, caf], requestFrame = _ref[0], cancelFrame = _ref[1], _ref;
	};

	var Globals = /*#__PURE__*/Object.freeze({
	  get bugfixes () { return bugfixes; },
	  get applyAnimatedValues () { return applyAnimatedValues; },
	  get colorNames () { return colorNames; },
	  get requestFrame () { return requestFrame; },
	  get cancelFrame () { return cancelFrame; },
	  get interpolation () { return interpolation; },
	  injectApplyAnimatedValues: injectApplyAnimatedValues,
	  injectColorNames: injectColorNames,
	  injectBugfixes: injectBugfixes,
	  injectInterpolation: injectInterpolation,
	  injectFrame: injectFrame
	});

	var colors = {
	  transparent: 0x00000000,
	  // http://www.w3.org/TR/css3-color/#svg-color
	  aliceblue: 0xf0f8ffff,
	  antiquewhite: 0xfaebd7ff,
	  aqua: 0x00ffffff,
	  aquamarine: 0x7fffd4ff,
	  azure: 0xf0ffffff,
	  beige: 0xf5f5dcff,
	  bisque: 0xffe4c4ff,
	  black: 0x000000ff,
	  blanchedalmond: 0xffebcdff,
	  blue: 0x0000ffff,
	  blueviolet: 0x8a2be2ff,
	  brown: 0xa52a2aff,
	  burlywood: 0xdeb887ff,
	  burntsienna: 0xea7e5dff,
	  cadetblue: 0x5f9ea0ff,
	  chartreuse: 0x7fff00ff,
	  chocolate: 0xd2691eff,
	  coral: 0xff7f50ff,
	  cornflowerblue: 0x6495edff,
	  cornsilk: 0xfff8dcff,
	  crimson: 0xdc143cff,
	  cyan: 0x00ffffff,
	  darkblue: 0x00008bff,
	  darkcyan: 0x008b8bff,
	  darkgoldenrod: 0xb8860bff,
	  darkgray: 0xa9a9a9ff,
	  darkgreen: 0x006400ff,
	  darkgrey: 0xa9a9a9ff,
	  darkkhaki: 0xbdb76bff,
	  darkmagenta: 0x8b008bff,
	  darkolivegreen: 0x556b2fff,
	  darkorange: 0xff8c00ff,
	  darkorchid: 0x9932ccff,
	  darkred: 0x8b0000ff,
	  darksalmon: 0xe9967aff,
	  darkseagreen: 0x8fbc8fff,
	  darkslateblue: 0x483d8bff,
	  darkslategray: 0x2f4f4fff,
	  darkslategrey: 0x2f4f4fff,
	  darkturquoise: 0x00ced1ff,
	  darkviolet: 0x9400d3ff,
	  deeppink: 0xff1493ff,
	  deepskyblue: 0x00bfffff,
	  dimgray: 0x696969ff,
	  dimgrey: 0x696969ff,
	  dodgerblue: 0x1e90ffff,
	  firebrick: 0xb22222ff,
	  floralwhite: 0xfffaf0ff,
	  forestgreen: 0x228b22ff,
	  fuchsia: 0xff00ffff,
	  gainsboro: 0xdcdcdcff,
	  ghostwhite: 0xf8f8ffff,
	  gold: 0xffd700ff,
	  goldenrod: 0xdaa520ff,
	  gray: 0x808080ff,
	  green: 0x008000ff,
	  greenyellow: 0xadff2fff,
	  grey: 0x808080ff,
	  honeydew: 0xf0fff0ff,
	  hotpink: 0xff69b4ff,
	  indianred: 0xcd5c5cff,
	  indigo: 0x4b0082ff,
	  ivory: 0xfffff0ff,
	  khaki: 0xf0e68cff,
	  lavender: 0xe6e6faff,
	  lavenderblush: 0xfff0f5ff,
	  lawngreen: 0x7cfc00ff,
	  lemonchiffon: 0xfffacdff,
	  lightblue: 0xadd8e6ff,
	  lightcoral: 0xf08080ff,
	  lightcyan: 0xe0ffffff,
	  lightgoldenrodyellow: 0xfafad2ff,
	  lightgray: 0xd3d3d3ff,
	  lightgreen: 0x90ee90ff,
	  lightgrey: 0xd3d3d3ff,
	  lightpink: 0xffb6c1ff,
	  lightsalmon: 0xffa07aff,
	  lightseagreen: 0x20b2aaff,
	  lightskyblue: 0x87cefaff,
	  lightslategray: 0x778899ff,
	  lightslategrey: 0x778899ff,
	  lightsteelblue: 0xb0c4deff,
	  lightyellow: 0xffffe0ff,
	  lime: 0x00ff00ff,
	  limegreen: 0x32cd32ff,
	  linen: 0xfaf0e6ff,
	  magenta: 0xff00ffff,
	  maroon: 0x800000ff,
	  mediumaquamarine: 0x66cdaaff,
	  mediumblue: 0x0000cdff,
	  mediumorchid: 0xba55d3ff,
	  mediumpurple: 0x9370dbff,
	  mediumseagreen: 0x3cb371ff,
	  mediumslateblue: 0x7b68eeff,
	  mediumspringgreen: 0x00fa9aff,
	  mediumturquoise: 0x48d1ccff,
	  mediumvioletred: 0xc71585ff,
	  midnightblue: 0x191970ff,
	  mintcream: 0xf5fffaff,
	  mistyrose: 0xffe4e1ff,
	  moccasin: 0xffe4b5ff,
	  navajowhite: 0xffdeadff,
	  navy: 0x000080ff,
	  oldlace: 0xfdf5e6ff,
	  olive: 0x808000ff,
	  olivedrab: 0x6b8e23ff,
	  orange: 0xffa500ff,
	  orangered: 0xff4500ff,
	  orchid: 0xda70d6ff,
	  palegoldenrod: 0xeee8aaff,
	  palegreen: 0x98fb98ff,
	  paleturquoise: 0xafeeeeff,
	  palevioletred: 0xdb7093ff,
	  papayawhip: 0xffefd5ff,
	  peachpuff: 0xffdab9ff,
	  peru: 0xcd853fff,
	  pink: 0xffc0cbff,
	  plum: 0xdda0ddff,
	  powderblue: 0xb0e0e6ff,
	  purple: 0x800080ff,
	  rebeccapurple: 0x663399ff,
	  red: 0xff0000ff,
	  rosybrown: 0xbc8f8fff,
	  royalblue: 0x4169e1ff,
	  saddlebrown: 0x8b4513ff,
	  salmon: 0xfa8072ff,
	  sandybrown: 0xf4a460ff,
	  seagreen: 0x2e8b57ff,
	  seashell: 0xfff5eeff,
	  sienna: 0xa0522dff,
	  silver: 0xc0c0c0ff,
	  skyblue: 0x87ceebff,
	  slateblue: 0x6a5acdff,
	  slategray: 0x708090ff,
	  slategrey: 0x708090ff,
	  snow: 0xfffafaff,
	  springgreen: 0x00ff7fff,
	  steelblue: 0x4682b4ff,
	  tan: 0xd2b48cff,
	  teal: 0x008080ff,
	  thistle: 0xd8bfd8ff,
	  tomato: 0xff6347ff,
	  turquoise: 0x40e0d0ff,
	  violet: 0xee82eeff,
	  wheat: 0xf5deb3ff,
	  white: 0xffffffff,
	  whitesmoke: 0xf5f5f5ff,
	  yellow: 0xffff00ff,
	  yellowgreen: 0x9acd32ff
	};

	var linear = function linear(t) {
	  return t;
	};

	var Interpolation =
	/*#__PURE__*/
	function () {
	  function Interpolation() {}

	  Interpolation.create = function create(config) {
	    if (typeof config === 'function') return config;
	    if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);
	    var outputRange = config.output;
	    var inputRange = config.range;
	    var easing = config.easing || linear;
	    var extrapolateLeft = 'extend';
	    var map = config.map;

	    if (config.extrapolateLeft !== undefined) {
	      extrapolateLeft = config.extrapolateLeft;
	    } else if (config.extrapolate !== undefined) {
	      extrapolateLeft = config.extrapolate;
	    }

	    var extrapolateRight = 'extend';

	    if (config.extrapolateRight !== undefined) {
	      extrapolateRight = config.extrapolateRight;
	    } else if (config.extrapolate !== undefined) {
	      extrapolateRight = config.extrapolate;
	    }

	    return function (input) {
	      var range = findRange(input, inputRange);
	      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
	    };
	  };

	  return Interpolation;
	}();

	function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
	  var result = map ? map(input) : input; // Extrapolate

	  if (result < inputMin) {
	    if (extrapolateLeft === 'identity') {
	      return result;
	    } else if (extrapolateLeft === 'clamp') {
	      result = inputMin;
	    }
	  }

	  if (result > inputMax) {
	    if (extrapolateRight === 'identity') {
	      return result;
	    } else if (extrapolateRight === 'clamp') {
	      result = inputMax;
	    }
	  }

	  if (outputMin === outputMax) return outputMin;

	  if (inputMin === inputMax) {
	    if (input <= inputMin) return outputMin;
	    return outputMax;
	  } // Input Range


	  if (inputMin === -Infinity) {
	    result = -result;
	  } else if (inputMax === Infinity) {
	    result = result - inputMin;
	  } else {
	    result = (result - inputMin) / (inputMax - inputMin);
	  } // Easing


	  result = easing(result); // Output Range

	  if (outputMin === -Infinity) {
	    result = -result;
	  } else if (outputMax === Infinity) {
	    result = result + outputMin;
	  } else {
	    result = result * (outputMax - outputMin) + outputMin;
	  }

	  return result;
	}

	function findRange(input, inputRange) {
	  for (var i = 1; i < inputRange.length - 1; ++i) {
	    if (inputRange[i] >= input) break;
	  }

	  return i - 1;
	}

	/*
	https://github.com/react-community/normalize-css-color

	BSD 3-Clause License

	Copyright (c) 2016, React Community
	All rights reserved.

	Redistribution and use in source and binary forms, with or without
	modification, are permitted provided that the following conditions are met:

	* Redistributions of source code must retain the above copyright notice, this
	  list of conditions and the following disclaimer.

	* Redistributions in binary form must reproduce the above copyright notice,
	  this list of conditions and the following disclaimer in the documentation
	  and/or other materials provided with the distribution.

	* Neither the name of the copyright holder nor the names of its
	  contributors may be used to endorse or promote products derived from
	  this software without specific prior written permission.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
	FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
	DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
	SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
	CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
	OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	function normalizeColor(color) {
	  var match;

	  if (typeof color === 'number') {
	    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
	  } // Ordered based on occurrences on Facebook codebase


	  if (match = matchers.hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
	  if (colors.hasOwnProperty(color)) return colors[color];

	  if (match = matchers.rgb.exec(color)) {
	    return (parse255(match[1]) << 24 | // r
	    parse255(match[2]) << 16 | // g
	    parse255(match[3]) << 8 | // b
	    0x000000ff) >>> // a
	    0;
	  }

	  if (match = matchers.rgba.exec(color)) {
	    return (parse255(match[1]) << 24 | // r
	    parse255(match[2]) << 16 | // g
	    parse255(match[3]) << 8 | // b
	    parse1(match[4])) >>> // a
	    0;
	  }

	  if (match = matchers.hex3.exec(color)) {
	    return parseInt(match[1] + match[1] + // r
	    match[2] + match[2] + // g
	    match[3] + match[3] + // b
	    'ff', // a
	    16) >>> 0;
	  } // https://drafts.csswg.org/css-color-4/#hex-notation


	  if (match = matchers.hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

	  if (match = matchers.hex4.exec(color)) {
	    return parseInt(match[1] + match[1] + // r
	    match[2] + match[2] + // g
	    match[3] + match[3] + // b
	    match[4] + match[4], // a
	    16) >>> 0;
	  }

	  if (match = matchers.hsl.exec(color)) {
	    return (hslToRgb(parse360(match[1]), // h
	    parsePercentage(match[2]), // s
	    parsePercentage(match[3]) // l
	    ) | 0x000000ff) >>> // a
	    0;
	  }

	  if (match = matchers.hsla.exec(color)) {
	    return (hslToRgb(parse360(match[1]), // h
	    parsePercentage(match[2]), // s
	    parsePercentage(match[3]) // l
	    ) | parse1(match[4])) >>> // a
	    0;
	  }

	  return null;
	}

	function hue2rgb(p, q, t) {
	  if (t < 0) t += 1;
	  if (t > 1) t -= 1;
	  if (t < 1 / 6) return p + (q - p) * 6 * t;
	  if (t < 1 / 2) return q;
	  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	  return p;
	}

	function hslToRgb(h, s, l) {
	  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	  var p = 2 * l - q;
	  var r = hue2rgb(p, q, h + 1 / 3);
	  var g = hue2rgb(p, q, h);
	  var b = hue2rgb(p, q, h - 1 / 3);
	  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
	} // var INTEGER = '[-+]?\\d+';


	var NUMBER = '[-+]?\\d*\\.?\\d+';
	var PERCENTAGE = NUMBER + '%';

	function toArray(arrayLike) {
	  return Array.prototype.slice.call(arrayLike, 0);
	}

	function call() {
	  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
	}

	var matchers = {
	  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
	  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
	  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
	  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
	  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	  hex6: /^#([0-9a-fA-F]{6})$/,
	  hex8: /^#([0-9a-fA-F]{8})$/
	};

	function parse255(str) {
	  var int = parseInt(str, 10);
	  if (int < 0) return 0;
	  if (int > 255) return 255;
	  return int;
	}

	function parse360(str) {
	  var int = parseFloat(str);
	  return (int % 360 + 360) % 360 / 360;
	}

	function parse1(str) {
	  var num = parseFloat(str);
	  if (num < 0) return 0;
	  if (num > 1) return 255;
	  return Math.round(num * 255);
	}

	function parsePercentage(str) {
	  // parseFloat conveniently ignores the final %
	  var int = parseFloat(str, 10);
	  if (int < 0) return 0;
	  if (int > 100) return 1;
	  return int / 100;
	}

	function colorToRgba(input) {
	  var int32Color = normalizeColor(input);
	  if (int32Color === null) return input;
	  int32Color = int32Color || 0;
	  var r = (int32Color & 0xff000000) >>> 24;
	  var g = (int32Color & 0x00ff0000) >>> 16;
	  var b = (int32Color & 0x0000ff00) >>> 8;
	  var a = (int32Color & 0x000000ff) / 255;
	  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
	} // Problem: https://github.com/animatedjs/animated/pull/102
	// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


	var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	/**
	 * Supports string shapes by extracting numbers so new values can be computed,
	 * and recombines those values into new strings of the same shape.  Supports
	 * things like:
	 *
	 *   rgba(123, 42, 99, 0.36)           // colors
	 *   -45deg                            // values with units
	 */

	function createInterpolation(config) {
	  var outputRange = config.output.map(colorToRgba); // ->
	  // [
	  //   [0, 50],
	  //   [100, 150],
	  //   [200, 250],
	  //   [0, 0.5],
	  // ]

	  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
	    return [];
	  });
	  outputRange.forEach(function (value) {
	    value.match(stringShapeRegex).forEach(function (number, i) {
	      return outputRanges[i].push(+number);
	    });
	  });
	  var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
	    return Interpolation.create(_extends({}, config, {
	      output: outputRanges[i]
	    }));
	  });
	  var shouldRound = /^rgb/.test(outputRange[0]);
	  return function (input) {
	    var i = 0;
	    return outputRange[0].replace(stringShapeRegex, function () {
	      var val = interpolations[i++](input);
	      return String(shouldRound && i < 4 ? Math.round(val) : val);
	    });
	  };
	}

	var Animated =
	/*#__PURE__*/
	function () {
	  function Animated() {}

	  var _proto = Animated.prototype;

	  _proto.__attach = function __attach() {};

	  _proto.__detach = function __detach() {};

	  _proto.__getValue = function __getValue() {};

	  _proto.__getAnimatedValue = function __getAnimatedValue() {
	    return this.__getValue();
	  };

	  _proto.__addChild = function __addChild(child) {};

	  _proto.__removeChild = function __removeChild(child) {};

	  _proto.__getChildren = function __getChildren() {
	    return [];
	  };

	  return Animated;
	}();

	var AnimatedTracking =
	/*#__PURE__*/
	function (_Animated) {
	  _inheritsLoose(AnimatedTracking, _Animated);

	  function AnimatedTracking(value, parent, animationClass, animationConfig, callback) {
	    var _this;

	    _this = _Animated.call(this) || this;
	    _this.update = throttle(function () {
	      _this._value.animate(new _this._animationClass(_extends({}, _this._animationConfig, {
	        to: _this._animationConfig.to.__getValue()
	      })), _this._callback);
	    }, 1000 / 30);
	    _this._value = value;
	    _this._parent = parent;
	    _this._animationClass = animationClass;
	    _this._animationConfig = animationConfig;
	    _this._callback = callback;

	    _this.__attach();

	    return _this;
	  }

	  var _proto = AnimatedTracking.prototype;

	  _proto.__getValue = function __getValue() {
	    return this._parent.__getValue();
	  };

	  _proto.__attach = function __attach() {
	    this._parent.__addChild(this);
	  };

	  _proto.__detach = function __detach() {
	    this._parent.__removeChild(this);
	  };

	  return AnimatedTracking;
	}(Animated);

	function throttle(callback, limit) {
	  var wait = false;
	  return function () {
	    if (!wait) {
	      callback.call();
	      wait = true;
	      setTimeout(function () {
	        return wait = false;
	      }, limit);
	    }
	  };
	}

	var AnimatedWithChildren =
	/*#__PURE__*/
	function (_Animated) {
	  _inheritsLoose(AnimatedWithChildren, _Animated);

	  function AnimatedWithChildren() {
	    var _this;

	    _this = _Animated.call(this) || this;
	    _this._children = [];
	    return _this;
	  }

	  var _proto = AnimatedWithChildren.prototype;

	  _proto.__addChild = function __addChild(child) {
	    if (this._children.length === 0) this.__attach();

	    this._children.push(child);
	  };

	  _proto.__removeChild = function __removeChild(child) {
	    var index = this._children.indexOf(child);

	    if (index === -1) {
	      console.warn("Trying to remove a child that doesn't exist");
	      return;
	    }

	    this._children.splice(index, 1);

	    if (this._children.length === 0) this.__detach();
	  };

	  _proto.__getChildren = function __getChildren() {
	    return this._children;
	  };

	  return AnimatedWithChildren;
	}(Animated);

	var AnimatedInterpolation =
	/*#__PURE__*/
	function (_AnimatedWithChildren) {
	  _inheritsLoose(AnimatedInterpolation, _AnimatedWithChildren);

	  function AnimatedInterpolation(parents, config) {
	    var _this;

	    _this = _AnimatedWithChildren.call(this) || this;
	    _this._parents = Array.isArray(parents) ? parents : [parents];
	    _this._interpolation = Interpolation.create(config);
	    return _this;
	  }

	  var _proto = AnimatedInterpolation.prototype;

	  _proto.__getValue = function __getValue() {
	    return this._interpolation.apply(this, this._parents.map(function (value) {
	      return value.__getValue();
	    }));
	  };

	  _proto.__attach = function __attach() {
	    for (var i = 0; i < this._parents.length; ++i) {
	      if (this._parents[i] instanceof Animated) this._parents[i].__addChild(this);
	    }
	  };

	  _proto.__detach = function __detach() {
	    for (var i = 0; i < this._parents.length; ++i) {
	      if (this._parents[i] instanceof Animated) this._parents[i].__removeChild(this);
	    }
	  };

	  _proto.__update = function __update(config) {
	    this._interpolation = Interpolation.create(config);
	    return this;
	  };

	  _proto.interpolate = function interpolate(config) {
	    return new AnimatedInterpolation(this, config);
	  };

	  return AnimatedInterpolation;
	}(AnimatedWithChildren);

	var _uniqueId = 0;
	/**
	 * Animated works by building a directed acyclic graph of dependencies
	 * transparently when you render your Animated components.
	 *
	 *               new Animated.Value(0)
	 *     .interpolate()        .interpolate()    new Animated.Value(1)
	 *         opacity               translateY      scale
	 *          style                         transform
	 *         View#234                         style
	 *                                         View#123
	 *
	 * A) Top Down phase
	 * When an Animated.Value is updated, we recursively go down through this
	 * graph in order to find leaf nodes: the views that we flag as needing
	 * an update.
	 *
	 * B) Bottom Up phase
	 * When a view is flagged as needing an update, we recursively go back up
	 * in order to build the new value that it needs. The reason why we need
	 * this two-phases process is to deal with composite props such as
	 * transform which can receive values from multiple parents.
	 */

	function findAnimatedStyles(node, styles) {
	  if (typeof node.update === 'function') styles.add(node);else node.__getChildren().forEach(function (child) {
	    return findAnimatedStyles(child, styles);
	  });
	}
	/**
	 * Standard value for driving animations.  One `Animated.Value` can drive
	 * multiple properties in a synchronized fashion, but can only be driven by one
	 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
	 * or calling `setValue`) will stop any previous ones.
	 */


	var AnimatedValue =
	/*#__PURE__*/
	function (_AnimatedWithChildren) {
	  _inheritsLoose(AnimatedValue, _AnimatedWithChildren);

	  function AnimatedValue(value) {
	    var _this;

	    _this = _AnimatedWithChildren.call(this) || this;
	    _this._value = value;
	    _this._animation = null;
	    _this._animatedStyles = new Set();
	    _this._listeners = {};
	    return _this;
	  }

	  var _proto = AnimatedValue.prototype;

	  _proto.__detach = function __detach() {
	    this.stopAnimation();
	  };

	  _proto.__getValue = function __getValue() {
	    return this._value;
	  };

	  _proto._update = function _update() {
	    findAnimatedStyles(this, this._animatedStyles);
	  };

	  _proto._flush = function _flush() {
	    if (this._animatedStyles.size === 0) this._update();

	    this._animatedStyles.forEach(function (animatedStyle) {
	      return animatedStyle.update();
	    });
	  };

	  _proto._updateValue = function _updateValue(value) {
	    this._value = value;

	    this._flush();

	    for (var key in this._listeners) {
	      this._listeners[key]({
	        value: this.__getValue()
	      });
	    }
	  };
	  /**
	   * Directly set the value.  This will stop any animations running on the value
	   * and update all the bound properties.
	   */


	  _proto.setValue = function setValue(value) {
	    if (this._animation) {
	      this._animation.stop();

	      this._animation = null;
	    }

	    this._animatedStyles.clear();

	    this._updateValue(value);
	  };
	  /**
	   * Stops any running animation or tracking.  `callback` is invoked with the
	   * final value after stopping the animation, which is useful for updating
	   * state to match the animation position with layout.
	   */


	  _proto.stopAnimation = function stopAnimation(callback) {
	    this.stopTracking();
	    this._animation && this._animation.stop();
	    this._animation = null;
	    callback && callback(this.__getValue());
	  };
	  /**
	   * Interpolates the value before updating the property, e.g. mapping 0-1 to
	   * 0-10.
	   */


	  _proto.interpolate = function interpolate(config) {
	    return new AnimatedInterpolation(this, config);
	  };
	  /**
	   * Typically only used internally, but could be used by a custom Animation
	   * class.
	   */


	  _proto.animate = function animate(animation, callback) {
	    var _this2 = this;

	    var previousAnimation = this._animation;
	    this._animation && this._animation.stop();
	    this._animation = animation;

	    this._animatedStyles.clear();

	    animation.start(this._value, function (value) {
	      return _this2._updateValue(value);
	    }, function (result) {
	      _this2._animation = null;
	      callback && callback(result);
	    }, previousAnimation);
	  };
	  /**
	   * Adds an asynchronous listener to the value so you can observe updates from
	   * animations.  This is useful because there is no way to
	   * synchronously read the value because it might be driven natively.
	   */


	  _proto.addListener = function addListener(callback) {
	    var id = String(_uniqueId++);
	    this._listeners[id] = callback;
	    return id;
	  };

	  _proto.removeListener = function removeListener(id) {
	    delete this._listeners[id];
	  };

	  _proto.removeAllListeners = function removeAllListeners() {
	    this._listeners = {};
	  };
	  /**
	   * Typically only used internally.
	   */


	  _proto.stopTracking = function stopTracking() {
	    this._tracking && this._tracking.__detach();
	    this._tracking = null;
	  };
	  /**
	   * Typically only used internally.
	   */


	  _proto.track = function track(tracking) {
	    this.stopTracking();
	    this._tracking = tracking;
	  };

	  return AnimatedValue;
	}(AnimatedWithChildren);

	function shallowEqual(a, b) {
	  for (var i in a) {
	    if (!(i in b)) return false;
	  }

	  for (var _i in b) {
	    if (a[_i] !== b[_i]) return false;
	  }

	  return true;
	}
	function callProp(arg, state) {
	  return typeof arg === 'function' ? arg(state) : arg;
	}
	function getValues(object) {
	  return Object.keys(object).map(function (k) {
	    return object[k];
	  });
	}
	function getForwardProps(props) {
	  var to = props.to,
	      from = props.from,
	      config = props.config,
	      native = props.native,
	      onRest = props.onRest,
	      onFrame = props.onFrame,
	      children = props.children,
	      render = props.render,
	      reset = props.reset,
	      force = props.force,
	      immediate = props.immediate,
	      impl = props.impl,
	      inject = props.inject,
	      delay = props.delay,
	      attach = props.attach,
	      forward = _objectWithoutProperties(props, ["to", "from", "config", "native", "onRest", "onFrame", "children", "render", "reset", "force", "immediate", "impl", "inject", "delay", "attach"]);

	  return forward;
	}
	function renderChildren(props, componentProps) {
	  var forward = _extends({}, componentProps, getForwardProps(props));

	  return props.render ? props.render(_extends({}, forward, {
	    children: props.children
	  })) : props.children(forward);
	}
	function convertToAnimatedValue(acc, _ref) {
	  var _extends2;

	  var name = _ref[0],
	      value = _ref[1];
	  return _extends({}, acc, (_extends2 = {}, _extends2[name] = new AnimatedValue(value), _extends2));
	}
	function convertValues(props) {
	  var from = props.from,
	      to = props.to,
	      native = props.native;
	  var allProps = Object.entries(_extends({}, from, to));
	  return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
	}

	var check = function check(value) {
	  return value === 'auto';
	};

	var overwrite = function overwrite(width, height) {
	  return function (acc, _ref) {
	    var _extends2;

	    var name = _ref[0],
	        value = _ref[1];
	    return _extends({}, acc, (_extends2 = {}, _extends2[name] = value === 'auto' ? ~name.indexOf('height') ? height : width : value, _extends2));
	  };
	};

	function fixAuto(props, callback) {
	  var from = props.from,
	      to = props.to; // Dry-route props back if nothing's using 'auto' in there

	  if (!getValues(from).concat(getValues(to)).some(check)) return; // Fetch render v-dom

	  var element = renderChildren(props, convertValues(props)); // A spring can return undefined/null, check against that (#153)

	  if (!element) return;
	  var elementStyles = element.props.style; // Return v.dom with injected ref

	  return React__default.createElement(element.type, _extends({}, element.props, {
	    style: _extends({}, elementStyles, {
	      position: 'absolute',
	      visibility: 'hidden'
	    }),
	    ref: function ref(_ref2) {
	      if (_ref2) {
	        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
	        var node = ReactDOM.findDOMNode(_ref2);
	        var width, height;
	        var cs = getComputedStyle(node);

	        if (cs.boxSizing === 'border-box') {
	          width = node.offsetWidth;
	          height = node.offsetHeight;
	        } else {
	          var paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
	          var paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
	          var borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
	          var borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
	          width = node.offsetWidth - paddingX - borderX;
	          height = node.offsetHeight - paddingY - borderY;
	        }

	        var convert = overwrite(width, height);
	        callback(_extends({}, props, {
	          from: Object.entries(from).reduce(convert, from),
	          to: Object.entries(to).reduce(convert, to)
	        }));
	      }
	    }
	  }));
	}

	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  columns: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridRowEnd: true,
	  gridRowSpan: true,
	  gridRowStart: true,
	  gridColumn: true,
	  gridColumnEnd: true,
	  gridColumnSpan: true,
	  gridColumnStart: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	var prefixKey = function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	};

	var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  return prefixes.forEach(function (pre) {
	    return isUnitlessNumber[prefixKey(pre, prop)] = isUnitlessNumber[prop];
	  });
	});

	function dangerousStyleValue(name, value, isCustomProperty) {
	  if (value == null || typeof value === 'boolean' || value === '') return '';
	  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

	  return ('' + value).trim();
	}

	injectInterpolation(createInterpolation);
	injectColorNames(colors);
	injectBugfixes(fixAuto);
	injectApplyAnimatedValues(function (instance, props) {
	  if (instance.nodeType && instance.setAttribute !== undefined) {
	    var style = props.style,
	        attributes = _objectWithoutProperties(props, ["style"]); // Set styles ...


	    for (var styleName in style) {
	      if (!style.hasOwnProperty(styleName)) continue;
	      var isCustomProperty = styleName.indexOf('--') === 0;
	      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
	      if (styleName === 'float') styleName = 'cssFloat';
	      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
	    } // Set attributes ...


	    for (var name in attributes) {
	      if (instance.getAttribute(name)) instance.setAttribute(name, attributes[name]);
	    }
	  } else return false;
	}, function (style) {
	  return style;
	});

	// Important note: start() and stop() will only be called at most once.
	// Once an animation has been stopped or finished its course, it will
	// not be reused.
	var Animation =
	/*#__PURE__*/
	function () {
	  function Animation() {}

	  var _proto = Animation.prototype;

	  _proto.start = function start(fromValue, onUpdate, onEnd, previousAnimation) {};

	  _proto.stop = function stop() {}; // Helper function for subclasses to make sure onEnd is only called once.


	  _proto.__debouncedOnEnd = function __debouncedOnEnd(result) {
	    var onEnd = this.__onEnd;
	    this.__onEnd = null;
	    onEnd && onEnd(result);
	  };

	  return Animation;
	}();

	var withDefault = function withDefault(value, defaultValue) {
	  return value === undefined || value === null ? defaultValue : value;
	};

	var tensionFromOrigamiValue = function tensionFromOrigamiValue(oValue) {
	  return (oValue - 30) * 3.62 + 194;
	};

	var frictionFromOrigamiValue = function frictionFromOrigamiValue(oValue) {
	  return (oValue - 8) * 3 + 25;
	};

	var fromOrigamiTensionAndFriction = function fromOrigamiTensionAndFriction(tension, friction) {
	  return {
	    tension: tensionFromOrigamiValue(tension),
	    friction: frictionFromOrigamiValue(friction)
	  };
	};

	var SpringAnimation =
	/*#__PURE__*/
	function (_Animation) {
	  _inheritsLoose(SpringAnimation, _Animation);

	  function SpringAnimation(config) {
	    var _this;

	    _this = _Animation.call(this) || this;

	    _this.onUpdate = function () {
	      var position = _this._lastPosition;
	      var velocity = _this._lastVelocity;
	      var tempPosition = _this._lastPosition;
	      var tempVelocity = _this._lastVelocity; // If for some reason we lost a lot of frames (e.g. process large payload or
	      // stopped in the debugger), we only advance by 4 frames worth of
	      // computation and will continue on the next frame. It's better to have it
	      // running at faster speed than jumping to the end.

	      var MAX_STEPS = 64;
	      var now = Date.now();
	      if (now > _this._lastTime + MAX_STEPS) now = _this._lastTime + MAX_STEPS; // We are using a fixed time step and a maximum number of iterations.
	      // The following post provides a lot of thoughts into how to build this
	      // loop: http://gafferongames.com/game-physics/fix-your-timestep/

	      var TIMESTEP_MSEC = 1;
	      var numSteps = Math.floor((now - _this._lastTime) / TIMESTEP_MSEC);

	      for (var i = 0; i < numSteps; ++i) {
	        // Velocity is based on seconds instead of milliseconds
	        var step = TIMESTEP_MSEC / 1000; // This is using RK4. A good blog post to understand how it works:
	        // http://gafferongames.com/game-physics/integration-basics/

	        var aVelocity = velocity;
	        var aAcceleration = _this._tension * (_this._to - tempPosition) - _this._friction * tempVelocity;
	        var tempPosition = position + aVelocity * step / 2;
	        var tempVelocity = velocity + aAcceleration * step / 2;
	        var bVelocity = tempVelocity;
	        var bAcceleration = _this._tension * (_this._to - tempPosition) - _this._friction * tempVelocity;
	        tempPosition = position + bVelocity * step / 2;
	        tempVelocity = velocity + bAcceleration * step / 2;
	        var cVelocity = tempVelocity;
	        var cAcceleration = _this._tension * (_this._to - tempPosition) - _this._friction * tempVelocity;
	        tempPosition = position + cVelocity * step / 2;
	        tempVelocity = velocity + cAcceleration * step / 2;
	        var dVelocity = tempVelocity;
	        var dAcceleration = _this._tension * (_this._to - tempPosition) - _this._friction * tempVelocity;
	        tempPosition = position + cVelocity * step / 2;
	        tempVelocity = velocity + cAcceleration * step / 2;
	        var dxdt = (aVelocity + 2 * (bVelocity + cVelocity) + dVelocity) / 6;
	        var dvdt = (aAcceleration + 2 * (bAcceleration + cAcceleration) + dAcceleration) / 6;
	        position += dxdt * step;
	        velocity += dvdt * step;
	      }

	      _this._lastTime = now;
	      _this._lastPosition = position;
	      _this._lastVelocity = velocity;

	      _this._onUpdate(position); // a listener might have stopped us in _onUpdate


	      if (!_this.__active) return; // Conditions for stopping the spring animation

	      var isOvershooting = false;

	      if (_this._overshootClamping && _this._tension !== 0) {
	        if (_this._startPosition < _this._to) {
	          isOvershooting = position > _this._to;
	        } else {
	          isOvershooting = position < _this._to;
	        }
	      }

	      var isVelocity = Math.abs(velocity) <= _this._restSpeedThreshold;

	      var isDisplacement = true;
	      if (_this._tension !== 0) isDisplacement = Math.abs(_this._to - position) <= _this._restDisplacementThreshold;

	      if (isOvershooting || isVelocity && isDisplacement) {
	        // Ensure that we end up with a round value
	        if (_this._tension !== 0) _this._onUpdate(_this._to);
	        return _this.__debouncedOnEnd({
	          finished: true
	        });
	      }

	      _this._animationFrame = requestFrame(_this.onUpdate);
	    };

	    _this._overshootClamping = withDefault(config.overshootClamping, false);
	    _this._restDisplacementThreshold = withDefault(config.restDisplacementThreshold, 0.0001);
	    _this._restSpeedThreshold = withDefault(config.restSpeedThreshold, 0.0001);
	    _this._initialVelocity = config.velocity;
	    _this._lastVelocity = withDefault(config.velocity, 0);
	    _this._to = config.to;
	    var springConfig = fromOrigamiTensionAndFriction(withDefault(config.tension, 40), withDefault(config.friction, 7));
	    _this._tension = springConfig.tension;
	    _this._friction = springConfig.friction;
	    return _this;
	  }

	  var _proto = SpringAnimation.prototype;

	  _proto.start = function start(fromValue, onUpdate, onEnd, previousAnimation) {
	    this.__active = true;
	    this._startPosition = fromValue;
	    this._lastPosition = this._startPosition;
	    this._onUpdate = onUpdate;
	    this.__onEnd = onEnd;
	    this._lastTime = Date.now();

	    if (previousAnimation instanceof SpringAnimation) {
	      var internalState = previousAnimation.getInternalState();
	      this._lastPosition = internalState.lastPosition;
	      this._lastVelocity = internalState.lastVelocity;
	      this._lastTime = internalState.lastTime;
	    }

	    if (typeof fromValue === 'string') {
	      this._onUpdate(fromValue);

	      return this.__debouncedOnEnd({
	        finished: true
	      });
	    }

	    if (this._initialVelocity !== undefined && this._initialVelocity !== null) this._lastVelocity = this._initialVelocity;
	    this.onUpdate();
	  };

	  _proto.getInternalState = function getInternalState() {
	    return {
	      lastPosition: this._lastPosition,
	      lastVelocity: this._lastVelocity,
	      lastTime: this._lastTime
	    };
	  };

	  _proto.stop = function stop() {
	    this.__active = false;
	    clearTimeout(this._timeout);
	    cancelFrame(this._animationFrame);

	    this.__debouncedOnEnd({
	      finished: false
	    });
	  };

	  return SpringAnimation;
	}(Animation);

	var AnimatedArray =
	/*#__PURE__*/
	function (_AnimatedWithChildren) {
	  _inheritsLoose(AnimatedArray, _AnimatedWithChildren);

	  function AnimatedArray(array) {
	    var _this;

	    _this = _AnimatedWithChildren.call(this) || this;
	    _this._values = array.map(function (n) {
	      return new AnimatedValue(n);
	    });
	    return _this;
	  }

	  var _proto = AnimatedArray.prototype;

	  _proto.setValue = function setValue(values) {
	    var _this2 = this;

	    values.forEach(function (n, i) {
	      return _this2._values[i].setValue(n);
	    });
	  };

	  _proto.__getValue = function __getValue() {
	    return this._values.map(function (v) {
	      return v.__getValue();
	    });
	  };

	  _proto.stopAnimation = function stopAnimation(callback) {
	    this._values.forEach(function (v) {
	      return v.stopAnimation();
	    });

	    callback && callback(this.__getValue());
	  };

	  _proto.__attach = function __attach() {
	    for (var i = 0; i < this._values.length; ++i) {
	      if (this._values[i] instanceof Animated) this._values[i].__addChild(this);
	    }
	  };

	  _proto.__detach = function __detach() {
	    for (var i = 0; i < this._values.length; ++i) {
	      if (this._values[i] instanceof Animated) this._values[i].__removeChild(this);
	    }
	  };

	  return AnimatedArray;
	}(AnimatedWithChildren);

	function maybeVectorAnim(array, _ref, anim, impl) {
	  var tension = _ref.tension,
	      friction = _ref.friction,
	      to = _ref.to;
	  // { tension, friction, to: [...]}
	  if (array instanceof AnimatedArray) return parallel(array._values.map(function (v, i) {
	    return anim(v, {
	      tension: tension,
	      friction: friction,
	      to: to[i]
	    }, impl);
	  }), {
	    stopTogether: false
	  });
	  return null;
	}

	function parallel(animations, config) {
	  var doneCount = 0;
	  var hasEnded = {};
	  var stopTogether = !(config && config.stopTogether === false);
	  var result = {
	    start: function start(callback) {
	      if (doneCount === animations.length) return callback && callback({
	        finished: true
	      });
	      animations.forEach(function (animation, idx) {
	        var cb = function cb(endResult) {
	          hasEnded[idx] = true;
	          doneCount++;

	          if (doneCount === animations.length) {
	            doneCount = 0;
	            return callback && callback(endResult);
	          }

	          if (!endResult.finished && stopTogether) result.stop();
	        };

	        if (!animation) cb({
	          finished: true
	        });else animation.start(cb);
	      });
	    },
	    stop: function stop() {
	      animations.forEach(function (animation, idx) {
	        !hasEnded[idx] && animation.stop();
	        hasEnded[idx] = true;
	      });
	    }
	  };
	  return result;
	}

	function controller(value, config, impl) {
	  if (impl === void 0) {
	    impl = SpringAnimation;
	  }

	  return maybeVectorAnim(value, config, controller, impl) || {
	    start: function start(callback) {
	      var singleValue = value;
	      var singleConfig = config;
	      singleValue.stopTracking();
	      if (config.to instanceof Animated) singleValue.track(new AnimatedTracking(singleValue, config.to, impl, singleConfig, callback));else singleValue.animate(new impl(singleConfig), callback);
	    },
	    stop: function stop() {
	      value.stopAnimation();
	    }
	  };
	}

	var AnimatedStyle =
	/*#__PURE__*/
	function (_AnimatedWithChildren) {
	  _inheritsLoose(AnimatedStyle, _AnimatedWithChildren);

	  function AnimatedStyle(style) {
	    var _this;

	    _this = _AnimatedWithChildren.call(this) || this;
	    style = style || {};
	    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
	    _this._style = style;
	    return _this;
	  }

	  var _proto = AnimatedStyle.prototype;

	  _proto.__getValue = function __getValue() {
	    var style = {};

	    for (var key in this._style) {
	      var value = this._style[key];
	      style[key] = value instanceof Animated ? value.__getValue() : value;
	    }

	    return style;
	  };

	  _proto.__getAnimatedValue = function __getAnimatedValue() {
	    var style = {};

	    for (var key in this._style) {
	      var value = this._style[key];
	      if (value instanceof Animated) style[key] = value.__getAnimatedValue();
	    }

	    return style;
	  };

	  _proto.__attach = function __attach() {
	    for (var key in this._style) {
	      var value = this._style[key];
	      if (value instanceof Animated) value.__addChild(this);
	    }
	  };

	  _proto.__detach = function __detach() {
	    for (var key in this._style) {
	      var value = this._style[key];
	      if (value instanceof Animated) value.__removeChild(this);
	    }
	  };

	  return AnimatedStyle;
	}(AnimatedWithChildren);

	var AnimatedProps =
	/*#__PURE__*/
	function (_Animated) {
	  _inheritsLoose(AnimatedProps, _Animated);

	  function AnimatedProps(props, callback) {
	    var _this;

	    _this = _Animated.call(this) || this;

	    if (props.style) {
	      props = _extends({}, props, {
	        style: new AnimatedStyle(props.style)
	      });
	    }

	    _this._props = props;
	    _this._callback = callback;

	    _this.__attach();

	    return _this;
	  }

	  var _proto = AnimatedProps.prototype;

	  _proto.__getValue = function __getValue() {
	    var props = {};

	    for (var key in this._props) {
	      var value = this._props[key];
	      if (value instanceof Animated) props[key] = value.__getValue();else props[key] = value;
	    }

	    return props;
	  };

	  _proto.__getAnimatedValue = function __getAnimatedValue() {
	    var props = {};

	    for (var key in this._props) {
	      var value = this._props[key];
	      if (value instanceof Animated) props[key] = value.__getAnimatedValue();
	    }

	    return props;
	  };

	  _proto.__attach = function __attach() {
	    for (var key in this._props) {
	      var value = this._props[key];
	      if (value instanceof Animated) value.__addChild(this);
	    }
	  };

	  _proto.__detach = function __detach() {
	    for (var key in this._props) {
	      var value = this._props[key];
	      if (value instanceof Animated) value.__removeChild(this);
	    }
	  };

	  _proto.update = function update() {
	    this._callback();
	  };

	  return AnimatedProps;
	}(Animated);

	function createAnimatedComponent(Component) {
	  return (
	    /*#__PURE__*/
	    function (_React$Component) {
	      _inheritsLoose(AnimatedComponent, _React$Component);

	      function AnimatedComponent() {
	        return _React$Component.apply(this, arguments) || this;
	      }

	      var _proto = AnimatedComponent.prototype;

	      _proto.componentWillUnmount = function componentWillUnmount() {
	        this._propsAnimated && this._propsAnimated.__detach();
	      };

	      _proto.setNativeProps = function setNativeProps(props) {
	        var didUpdate = applyAnimatedValues.fn(this.node, props, this);
	        if (didUpdate === false) this.forceUpdate();
	      };

	      _proto.componentWillMount = function componentWillMount() {
	        this.attachProps(this.props);
	      };

	      _proto.attachProps = function attachProps(nextProps) {
	        var _this = this;

	        var oldPropsAnimated = this._propsAnimated; // The system is best designed when setNativeProps is implemented. It is
	        // able to avoid re-rendering and directly set the attributes that
	        // changed. However, setNativeProps can only be implemented on leaf
	        // native components. If you want to animate a composite component, you
	        // need to re-render it. In this case, we have a fallback that uses
	        // forceUpdate.

	        var callback = function callback() {
	          if (_this.node) {
	            var didUpdate = applyAnimatedValues.fn(_this.node, _this._propsAnimated.__getAnimatedValue(), _this);
	            if (didUpdate === false) _this.forceUpdate();
	          }
	        };

	        this._propsAnimated = new AnimatedProps(nextProps, callback); // When you call detach, it removes the element from the parent list
	        // of children. If it goes to 0, then the parent also detaches itself
	        // and so on.
	        // An optimization is to attach the new elements and THEN detach the old
	        // ones instead of detaching and THEN attaching.
	        // This way the intermediate state isn't to go to 0 and trigger
	        // this expensive recursive detaching to then re-attach everything on
	        // the very next operation.

	        oldPropsAnimated && oldPropsAnimated.__detach();
	      };

	      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.attachProps(nextProps);
	      };

	      _proto.render = function render() {
	        var _this2 = this;

	        var props = this._propsAnimated.__getValue();

	        return React__default.createElement(Component, _extends({}, props, {
	          ref: function ref(node) {
	            return _this2.node = node;
	          }
	        }));
	      };

	      return AnimatedComponent;
	    }(React__default.Component)
	  );
	}

	var config = {
	  default: {
	    tension: 170,
	    friction: 26
	  },
	  gentle: {
	    tension: 120,
	    friction: 14
	  },
	  wobbly: {
	    tension: 180,
	    friction: 12
	  },
	  stiff: {
	    tension: 210,
	    friction: 20
	  },
	  slow: {
	    tension: 280,
	    friction: 60
	  }
	};

	var Spring =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Spring, _React$Component);

	  function Spring() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.state = {
	      lastProps: {
	        from: {},
	        to: {}
	      },
	      changed: false,
	      dry: false
	    };
	    _this.didUpdate = false;
	    _this.didInject = false;
	    _this.animations = {};
	    _this.interpolators = {};

	    _this.start = function () {
	      var _this$props = _this.props,
	          config$$1 = _this$props.config,
	          impl = _this$props.impl;
	      if (_this.props.onStart) _this.props.onStart();
	      Object.keys(_this.animations).forEach(function (name) {
	        var _this$animations$name = _this.animations[name],
	            animation = _this$animations$name.animation,
	            to = _this$animations$name.toValue; // TODO: figure out why this is needed ...

	        if (!to.__getValue && animation.__getValue() === to) return _this.finishAnimation(name);
	        controller(animation, _extends({
	          to: to
	        }, callProp(config$$1, name)), impl).start(!to.__getValue && function (props) {
	          return props.finished && _this.finishAnimation(name);
	        });
	      });
	    };

	    _this.stop = function () {
	      return getValues(_this.animations).forEach(function (_ref) {
	        var animation = _ref.animation;
	        return animation.stopAnimation();
	      });
	    };

	    _this.finishAnimation = function (name) {
	      if (!_this.mounted) return;
	      var _this$animations$name2 = _this.animations[name],
	          animation = _this$animations$name2.animation,
	          to = _this$animations$name2.toValue;
	      _this.animations[name].stopped = true;

	      if (getValues(_this.animations).every(function (a) {
	        return a.stopped;
	      })) {
	        var current = _extends({}, _this.props.from, _this.props.to);

	        if (_this.props.onRest) _this.props.onRest(current); // Restore end-state

	        if (_this.didInject) {
	          _this.afterInject = convertValues(_this.props);
	          _this.didInject = false;

	          _this.setState({
	            dry: true
	          });
	        }
	      }
	    };

	    return _this;
	  }

	  var _proto = Spring.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    // componentDidUpdate isn't called on mount, we call it here to start animating
	    this.componentDidUpdate();
	    this.mounted = true;
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    // Stop all ongoing animtions
	    this.mounted = false;
	    this.stop();
	  };

	  Spring.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
	    var changed = _ref2.changed,
	        dry = _ref2.dry,
	        lastProps = _ref2.lastProps;
	    // The following is a test against props that could alter the animation
	    var from = props.from,
	        to = props.to,
	        reset = props.reset,
	        force = props.force;
	    changed = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset || force && !dry;
	    return {
	      changed: changed,
	      lastProps: props,
	      dry: false
	    };
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var propsChanged = this.state.changed; // Handle injected frames, for instance targets/web/fix-auto
	    // An inject will return an intermediary React node which measures itself out
	    // .. and returns a callback when the values sought after are ready, usually "auto".

	    if (this.props.inject && propsChanged && !this.injectProps) {
	      var frame = this.props.inject(this.props, function (injectProps) {
	        // The inject frame has rendered, now let's update animations...
	        _this2.injectProps = injectProps;

	        _this2.setState({
	          dry: true
	        });
	      }); // Render out injected frame

	      if (frame) return frame;
	    } // Update animations, this turns from/to props into AnimatedValues
	    // An update can occur on injected props, or when own-props have changed.


	    if (this.injectProps) {
	      this.updateAnimations(this.injectProps);
	      this.injectProps = undefined; // didInject is needed, because there will be a 3rd stage, where the original values
	      // .. will be restored after the animation is finished. When someone animates towards
	      // .. "auto", the end-result should be "auto", not "1999px", which would block nested
	      // .. height/width changes.

	      this.didInject = true;
	    } else if (propsChanged) this.updateAnimations(this.props); // Render out raw values or AnimatedValues depending on "native"


	    var values = this.getAnimatedValues();
	    return values && Object.keys(values).length ? renderChildren(this.props, _extends({}, values, this.afterInject)) : null;
	  };

	  _proto.componentDidUpdate = function componentDidUpdate() {
	    // The animation has to start *after* render, since at that point the scene
	    // .. graph should be established, so we do it here. Unfortunatelly, non-native
	    // .. animations as well as "auto" injects call forceUpdate, so it's causing a loop.
	    // .. didUpdate prevents that as it gets set only on prop changes.
	    if (this.didUpdate) {
	      if (this.props.delay) {
	        if (this.timeout) clearTimeout(this.timeout);
	        this.timeout = setTimeout(this.start, this.props.delay);
	      } else this.start();
	    }

	    this.didUpdate = false;
	  };

	  _proto.updateAnimations = function updateAnimations(_ref3) {
	    var _this3 = this;

	    var from = _ref3.from,
	        to = _ref3.to,
	        attach = _ref3.attach,
	        reset = _ref3.reset,
	        immediate = _ref3.immediate,
	        onFrame = _ref3.onFrame,
	        native = _ref3.native;
	    // This function will turn own-props into AnimatedValues, it tries to re-use
	    // .. exsting animations as best as it can by detecting the changes made
	    // Attachment handling, trailed springs can "attach" themselves to a previous spring
	    var target = attach && attach(this);
	    var animationsChanged = false;
	    var allProps = Object.entries(_extends({}, from, to));
	    this.animations = allProps.reduce(function (acc, _ref4, i) {
	      var _extends2, _extends3;

	      var name = _ref4[0],
	          value = _ref4[1];
	      var entry = reset === false && acc[name] || {
	        stopped: true
	      };
	      var isNumber = typeof value === 'number';
	      var isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
	      var isArray = !isNumber && !isString && Array.isArray(value);
	      var fromValue = from[name] !== undefined ? from[name] : value;
	      var fromAnimated = fromValue instanceof AnimatedValue;
	      var toValue = isNumber || isArray ? value : 1;

	      if (target) {
	        // Attach value to target animation
	        var attachedAnimation = target.animations[name];
	        if (attachedAnimation) toValue = attachedAnimation.animation;
	      }

	      var old = entry.animation;
	      var animation, interpolation$$1;

	      if (fromAnimated) {
	        // Use provided animated value
	        animation = interpolation$$1 = fromValue;
	      } else if (isNumber || isString) {
	        // Create animated value
	        animation = interpolation$$1 = entry.animation || new AnimatedValue(fromValue);
	      } else if (isArray) {
	        // Create animated array
	        animation = interpolation$$1 = entry.animation || new AnimatedArray(fromValue);
	      } else {
	        // Deal with interpolations
	        var previous = entry.interpolation && entry.interpolation._interpolation(entry.animation._value);

	        if (entry.animation) {
	          animation = entry.animation;
	          animation.setValue(0);
	        } else animation = new AnimatedValue(0);

	        var _config = {
	          range: [0, 1],
	          output: [previous !== undefined ? previous : fromValue, value]
	        };
	        if (entry.interpolation) interpolation$$1 = entry.interpolation.__update(_config);else interpolation$$1 = animation.interpolate(_config);
	      }

	      if (old !== animation) animationsChanged = true; // Set immediate values

	      if (callProp(immediate, name)) animation.setValue(toValue); // Save interpolators

	      _this3.interpolators = _extends({}, _this3.interpolators, (_extends2 = {}, _extends2[name] = interpolation$$1, _extends2));
	      return _extends({}, acc, (_extends3 = {}, _extends3[name] = _extends({}, entry, {
	        name: name,
	        animation: animation,
	        interpolation: interpolation$$1,
	        toValue: toValue,
	        stopped: false
	      }), _extends3));
	    }, this.animations); // Update animated props (which from now on will take care of the animation)

	    if (animationsChanged) {
	      var oldAnimatedProps = this.animatedProps;
	      this.animatedProps = new AnimatedProps(this.interpolators, function () {
	        // This gets called on every animation frame ...
	        if (onFrame) onFrame(_this3.animatedProps.__getValue());
	        if (!native) _this3.setState({
	          dry: true
	        });
	      });
	      oldAnimatedProps && oldAnimatedProps.__detach();
	    } // Flag an update that occured, componentDidUpdate will start the animation later on


	    this.didUpdate = true;
	    this.afterInject = undefined;
	    this.didInject = false;
	  };

	  _proto.flush = function flush() {
	    getValues(this.animations).forEach(function (_ref5) {
	      var animation = _ref5.animation;
	      return animation._update && animation._update();
	    });
	  };

	  _proto.getValues = function getValues$$1() {
	    return this.animatedProps ? this.animatedProps.__getValue() : {};
	  };

	  _proto.getAnimatedValues = function getAnimatedValues() {
	    return this.props.native ? this.interpolators : this.getValues();
	  };

	  return Spring;
	}(React__default.Component);

	Spring.defaultProps = {
	  from: {},
	  to: {},
	  config: config.default,
	  native: false,
	  immediate: false,
	  reset: false,
	  force: false,
	  impl: SpringAnimation,
	  inject: bugfixes
	};

	var empty = function empty() {
	  return null;
	};

	var ref = function ref(object, key, defaultValue) {
	  return typeof object === 'function' ? object(key) : object || defaultValue;
	};

	var get = function get(props) {
	  var keys = props.keys,
	      children = props.children,
	      render = props.render,
	      items = props.items,
	      rest = _objectWithoutProperties(props, ["keys", "children", "render", "items"]);

	  children = render || children || empty;
	  keys = typeof keys === 'function' ? items.map(keys) : keys;

	  if (!Array.isArray(children)) {
	    children = [children];
	    keys = keys !== void 0 ? [keys] : children.map(function (c) {
	      return c.toString();
	    });
	  } // Make sure numeric keys are interpreted as Strings (5 !== "5")


	  keys = keys.map(function (k) {
	    return String(k);
	  });
	  return _extends({
	    keys: keys,
	    children: children,
	    items: items
	  }, rest);
	};

	var guid = 0;

	var Transition =
	/*#__PURE__*/
	function (_React$PureComponent) {
	  _inheritsLoose(Transition, _React$PureComponent);

	  function Transition(prevProps) {
	    var _this;

	    _this = _React$PureComponent.call(this, prevProps) || this;
	    _this.springs = [];
	    _this.state = {
	      transitions: [],
	      current: {},
	      deleted: [],
	      prevProps: prevProps
	    };
	    return _this;
	  }

	  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref) {
	    var prevProps = _ref.prevProps,
	        state = _objectWithoutProperties(_ref, ["prevProps"]);

	    var _get = get(props),
	        keys = _get.keys,
	        children = _get.children,
	        items = _get.items,
	        from = _get.from,
	        enter = _get.enter,
	        leave = _get.leave,
	        update = _get.update;

	    var _get2 = get(prevProps),
	        _keys = _get2.keys,
	        _items = _get2.items;

	    var current = _extends({}, state.current);

	    var deleted = state.deleted.concat(); // Compare next keys with current keys

	    var currentKeys = Object.keys(current);
	    var currentSet = new Set(currentKeys);
	    var nextSet = new Set(keys);
	    var added = keys.filter(function (item) {
	      return !currentSet.has(item);
	    });
	    var removed = currentKeys.filter(function (item) {
	      return !nextSet.has(item);
	    });
	    var updated = keys.filter(function (item) {
	      return currentSet.has(item);
	    });
	    added.forEach(function (key) {
	      var keyIndex = keys.indexOf(key);
	      var item = items ? items[keyIndex] : key;
	      current[key] = {
	        children: children[keyIndex],
	        key: guid++,
	        item: item,
	        to: ref(enter, item),
	        from: ref(from, item)
	      };
	    });
	    removed.forEach(function (key) {
	      var keyIndex = _keys.indexOf(key);

	      deleted.push(_extends({
	        destroyed: true,
	        lastIndex: keyIndex
	      }, current[key], {
	        to: ref(leave, _items ? _items[keyIndex] : key)
	      }));
	      delete current[key];
	    });
	    updated.forEach(function (key) {
	      var keyIndex = keys.indexOf(key);
	      var item = items ? items[keyIndex] : key;
	      current[key] = _extends({}, current[key], {
	        children: children[keyIndex],
	        to: ref(update, item, current[key].to)
	      });
	    });
	    var transitions = keys.map(function (key) {
	      return current[key];
	    });
	    deleted.forEach(function (_ref2) {
	      var i = _ref2.lastIndex,
	          t = _objectWithoutProperties(_ref2, ["lastIndex"]);

	      return transitions = transitions.slice(0, i).concat([t], transitions.slice(i));
	    });
	    return {
	      transitions: transitions,
	      current: current,
	      deleted: deleted,
	      prevProps: props
	    };
	  };

	  var _proto = Transition.prototype;

	  _proto.getValues = function getValues() {
	    return undefined;
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        render = _this$props.render,
	        _this$props$from = _this$props.from,
	        _this$props$enter = _this$props.enter,
	        _this$props$leave = _this$props.leave,
	        _this$props$native = _this$props.native,
	        native = _this$props$native === void 0 ? false : _this$props$native,
	        keys = _this$props.keys,
	        items = _this$props.items,
	        onFrame = _this$props.onFrame,
	        onRest = _this$props.onRest,
	        extra = _objectWithoutProperties(_this$props, ["render", "from", "enter", "leave", "native", "keys", "items", "onFrame", "onRest"]);

	    var props = _extends({
	      native: native
	    }, extra);

	    return this.state.transitions.map(function (transition, i) {
	      var key = transition.key,
	          item = transition.item,
	          children = transition.children,
	          from = transition.from,
	          rest = _objectWithoutProperties(transition, ["key", "item", "children", "from"]);

	      return React__default.createElement(Spring, _extends({
	        ref: function ref(r) {
	          return r && (_this2.springs[key] = r.getValues());
	        },
	        key: key,
	        onRest: rest.destroyed ? function () {
	          return _this2.setState(function (_ref3) {
	            var deleted = _ref3.deleted;
	            return {
	              deleted: deleted.filter(function (t) {
	                return t.key !== key;
	              })
	            };
	          }, function () {
	            return delete _this2.springs[key];
	          });
	        } : onRest && function (values) {
	          return onRest(item, values);
	        },
	        onFrame: onFrame && function (values) {
	          return onFrame(item, values);
	        }
	      }, rest, props, {
	        from: rest.destroyed ? _this2.springs[key] || from : from,
	        render: render && children,
	        children: render ? _this2.props.children : children
	      }));
	    });
	  };

	  return Transition;
	}(React__default.PureComponent);

	var Trail =
	/*#__PURE__*/
	function (_React$PureComponent) {
	  _inheritsLoose(Trail, _React$PureComponent);

	  function Trail() {
	    return _React$PureComponent.apply(this, arguments) || this;
	  }

	  var _proto = Trail.prototype;

	  _proto.getValues = function getValues() {
	    return this.instance && this.instance.getValues();
	  };

	  _proto.componentDidMount = function componentDidMount() {
	    this.instance && this.instance.flush();
	  };

	  _proto.componentDidUpdate = function componentDidUpdate() {
	    this.instance && this.instance.flush();
	  };

	  _proto.render = function render() {
	    var _this = this;

	    var _this$props = this.props,
	        children = _this$props.children,
	        render = _this$props.render,
	        _this$props$from = _this$props.from,
	        from = _this$props$from === void 0 ? {} : _this$props$from,
	        _this$props$to = _this$props.to,
	        to = _this$props$to === void 0 ? {} : _this$props$to,
	        _this$props$native = _this$props.native,
	        native = _this$props$native === void 0 ? false : _this$props$native,
	        keys = _this$props.keys,
	        delay = _this$props.delay,
	        onRest = _this$props.onRest,
	        extra = _objectWithoutProperties(_this$props, ["children", "render", "from", "to", "native", "keys", "delay", "onRest"]);

	    var animations = new Set();

	    var hook = function hook(index, animation) {
	      animations.add(animation);
	      if (index === 0) return undefined;else return Array.from(animations)[index - 1];
	    };

	    var props = _extends({}, extra, {
	      native: native,
	      from: from,
	      to: to
	    });

	    var target = render || children;
	    return target.map(function (child, i) {
	      var attachedHook = function attachedHook(animation) {
	        return hook(i, animation);
	      };

	      var firstDelay = i === 0 && delay;
	      return React__default.createElement(Spring, _extends({
	        ref: function ref(_ref) {
	          return i === 0 && (_this.instance = _ref);
	        },
	        onRest: i === 0 ? onRest : null,
	        key: keys[i]
	      }, props, {
	        delay: firstDelay || undefined,
	        attach: attachedHook,
	        render: render && child,
	        children: render ? children : child
	      }));
	    });
	  };

	  return Trail;
	}(React__default.PureComponent);

	var DEFAULT = '__default';

	var Keyframes =
	/*#__PURE__*/
	function (_React$PureComponent) {
	  _inheritsLoose(Keyframes, _React$PureComponent);

	  function Keyframes() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
	    _this.guid = 0;
	    _this.state = {
	      props: {},
	      oldProps: {},
	      resolve: function resolve() {
	        return null;
	      }
	    };

	    _this.next = function (props) {
	      _this.running = true;
	      return new Promise(function (resolve) {
	        _this.setState(function (state) {
	          return {
	            props: props,
	            oldProps: _extends({}, _this.state.props),
	            resolve: resolve
	          };
	        }, function () {
	          return _this.running = false;
	        });
	      });
	    };

	    return _this;
	  }

	  var _proto = Keyframes.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.componentDidUpdate({});
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var _this2 = this;

	    if (prevProps.state !== this.props.state || this.props.reset && !this.running) {
	      (function () {
	        var _this2$props = _this2.props,
	            states = _this2$props.states,
	            f = _this2$props.filter,
	            state = _this2$props.state;

	        if (states && state) {
	          (function () {
	            var localId = ++_this2.guid;
	            var slots = states[state];

	            if (slots) {
	              if (Array.isArray(slots)) {
	                var q = Promise.resolve();

	                var _loop = function _loop() {
	                  if (_isArray) {
	                    if (_i >= _iterator.length) return "break";
	                    _ref = _iterator[_i++];
	                  } else {
	                    _i = _iterator.next();
	                    if (_i.done) return "break";
	                    _ref = _i.value;
	                  }

	                  var s = _ref;
	                  q = q.then(function () {
	                    return localId === _this2.guid && _this2.next(f(s));
	                  });
	                };

	                for (var _iterator = slots, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	                  var _ref;

	                  var _ret = _loop();

	                  if (_ret === "break") break;
	                }
	              } else if (typeof slots === 'function') {
	                slots(function (props) {
	                  return localId === _this2.guid && _this2.next(f(props));
	                }, _this2.props);
	              } else {
	                _this2.next(f(states[state]));
	              }
	            }
	          })();
	        }
	      })();
	    }
	  };

	  _proto.render = function render() {
	    var _this3 = this;

	    var _this$state = this.state,
	        props = _this$state.props,
	        oldProps = _this$state.oldProps,
	        resolve = _this$state.resolve;

	    var _this$props = this.props,
	        Component = _this$props.primitive,
	        ownFrom = _this$props.from,
	        _onRest = _this$props.onRest,
	        rest = _objectWithoutProperties(_this$props, ["primitive", "from", "onRest"]);

	    var current = this.instance && this.instance.getValues();
	    var from = typeof props.from === 'function' ? props.from : _extends({}, oldProps.from, current, props.from);
	    return props ? React__default.createElement(Component, _extends({
	      ref: function ref(_ref2) {
	        return _this3.instance = _ref2;
	      }
	    }, rest, props, {
	      from: _extends({}, from, ownFrom),
	      onRest: function onRest(args) {
	        resolve(args);
	        if (_onRest) _onRest(args);
	      }
	    })) : null;
	  };

	  return Keyframes;
	}(React__default.PureComponent);

	Keyframes.defaultProps = {
	  state: DEFAULT
	};

	Keyframes.create = function (primitive) {
	  return function (states, filter) {
	    var _states;

	    if (filter === void 0) {
	      filter = function filter(states) {
	        return states;
	      };
	    }

	    if (typeof states === 'function' || Array.isArray(states)) states = (_states = {}, _states[DEFAULT] = states, _states);
	    return function (props) {
	      return React__default.createElement(Keyframes, _extends({
	        primitive: primitive,
	        states: states,
	        filter: filter
	      }, props));
	    };
	  };
	};

	var interpolateTo = function interpolateTo(props) {
	  var forward = getForwardProps(props);
	  var rest = Object.keys(props).reduce(function (acc, key) {
	    var _extends2;

	    return forward[key] ? acc : _extends({}, acc, (_extends2 = {}, _extends2[key] = props[key], _extends2));
	  }, {});
	  return _extends({
	    to: forward
	  }, rest);
	};

	Keyframes.Spring = Keyframes.create(Spring);

	Keyframes.Spring.to = function (states) {
	  return Keyframes.Spring(states, interpolateTo);
	};

	Keyframes.Trail = Keyframes.create(Trail);

	Keyframes.Trail.to = function (states) {
	  return Keyframes.Trail(states, interpolateTo);
	};

	Keyframes.Transition = Keyframes.create(Transition);

	var AnimatedDiv = createAnimatedComponent('div');

	var _React$createContext = React__default.createContext(null),
	    Provider = _React$createContext.Provider,
	    Consumer = _React$createContext.Consumer;

	function getScrollType(horizontal) {
	  return horizontal ? 'scrollLeft' : 'scrollTop';
	}

	var START_TRANSLATE_3D = 'translate3d(0px,0px,0px)';
	var START_TRANSLATE = 'translate(0px,0px)';
	var ParallaxLayer =
	/*#__PURE__*/
	function (_React$PureComponent) {
	  _inheritsLoose(ParallaxLayer, _React$PureComponent);

	  function ParallaxLayer() {
	    return _React$PureComponent.apply(this, arguments) || this;
	  }

	  var _proto = ParallaxLayer.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    var parent = this.parent;

	    if (parent) {
	      parent.layers = parent.layers.concat(this);
	      parent.update();
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    var _this = this;

	    var parent = this.parent;

	    if (parent) {
	      parent.layers = parent.layers.filter(function (layer) {
	        return layer !== _this;
	      });
	      parent.update();
	    }
	  };

	  _proto.setPosition = function setPosition(height, scrollTop, immediate) {
	    if (immediate === void 0) {
	      immediate = false;
	    }

	    var _this$parent$props = this.parent.props,
	        config$$1 = _this$parent$props.config,
	        impl = _this$parent$props.impl;
	    var targetScroll = Math.floor(this.props.offset) * height;
	    var offset = height * this.props.offset + targetScroll * this.props.speed;
	    var to = parseFloat(-(scrollTop * this.props.speed) + offset);
	    if (!immediate) controller(this.animatedTranslate, _extends({
	      to: to
	    }, config$$1), impl).start();else this.animatedTranslate.setValue(to);
	  };

	  _proto.setHeight = function setHeight(height, immediate) {
	    if (immediate === void 0) {
	      immediate = false;
	    }

	    var _this$parent$props2 = this.parent.props,
	        config$$1 = _this$parent$props2.config,
	        impl = _this$parent$props2.impl;
	    var to = parseFloat(height * this.props.factor);
	    if (!immediate) controller(this.animatedSpace, _extends({
	      to: to
	    }, config$$1), impl).start();else this.animatedSpace.setValue(to);
	  };

	  _proto.initialize = function initialize() {
	    var props = this.props;
	    var parent = this.parent;
	    var targetScroll = Math.floor(props.offset) * parent.space;
	    var offset = parent.space * props.offset + targetScroll * props.speed;
	    var to = parseFloat(-(parent.current * props.speed) + offset);
	    this.animatedTranslate = new AnimatedValue(to);
	    this.animatedSpace = new AnimatedValue(parent.space * props.factor);
	  };

	  _proto.renderLayer = function renderLayer() {
	    var _extends2;

	    var _this$props = this.props,
	        style = _this$props.style,
	        children = _this$props.children,
	        offset = _this$props.offset,
	        speed = _this$props.speed,
	        factor = _this$props.factor,
	        className = _this$props.className,
	        props = _objectWithoutProperties(_this$props, ["style", "children", "offset", "speed", "factor", "className"]);

	    var horizontal = this.parent.props.horizontal;
	    var translate3d = this.animatedTranslate.interpolate({
	      range: [0, 1],
	      output: horizontal ? [START_TRANSLATE_3D, 'translate3d(1px,0,0)'] : [START_TRANSLATE_3D, 'translate3d(0,1px,0)']
	    });
	    return React__default.createElement(AnimatedDiv, _extends({}, props, {
	      className: className,
	      style: _extends((_extends2 = {
	        position: 'absolute',
	        backgroundSize: 'auto',
	        backgroundRepeat: 'no-repeat',
	        willChange: 'transform'
	      }, _extends2[horizontal ? 'height' : 'width'] = '100%', _extends2[horizontal ? 'width' : 'height'] = this.animatedSpace, _extends2.WebkitTransform = translate3d, _extends2.MsTransform = translate3d, _extends2.transform = translate3d, _extends2), style)
	    }), children);
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    return React__default.createElement(Consumer, null, function (parent) {
	      if (parent && !_this2.parent) {
	        _this2.parent = parent;

	        _this2.initialize();
	      }

	      return _this2.renderLayer();
	    });
	  };

	  return ParallaxLayer;
	}(React__default.PureComponent);
	ParallaxLayer.defaultProps = {
	  factor: 1,
	  offset: 0,
	  speed: 0
	};

	var Parallax =
	/*#__PURE__*/
	function (_React$PureComponent2) {
	  _inheritsLoose(Parallax, _React$PureComponent2);

	  function Parallax() {
	    var _this3;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this3 = _React$PureComponent2.call.apply(_React$PureComponent2, [this].concat(args)) || this;
	    _this3.state = {
	      ready: false
	    };
	    _this3.layers = [];
	    _this3.space = 0;
	    _this3.current = 0;
	    _this3.offset = 0;
	    _this3.busy = false;

	    _this3.moveItems = function () {
	      _this3.layers.forEach(function (layer) {
	        return layer.setPosition(_this3.space, _this3.current);
	      });

	      _this3.busy = false;
	    };

	    _this3.scrollerRaf = function () {
	      return requestAnimationFrame(_this3.moveItems);
	    };

	    _this3.onScroll = function (event) {
	      var horizontal = _this3.props.horizontal;

	      if (!_this3.busy) {
	        _this3.busy = true;

	        _this3.scrollerRaf();

	        _this3.current = event.target[getScrollType(horizontal)];
	      }
	    };

	    _this3.update = function () {
	      var _this3$props = _this3.props,
	          scrolling = _this3$props.scrolling,
	          horizontal = _this3$props.horizontal;
	      var scrollType = getScrollType(horizontal);
	      if (!_this3.container) return;
	      _this3.space = _this3.container[horizontal ? 'clientWidth' : 'clientHeight'];
	      if (scrolling) _this3.current = _this3.container[scrollType];else _this3.container[scrollType] = _this3.current = _this3.offset * _this3.space;
	      if (_this3.content) _this3.content.style[horizontal ? 'width' : 'height'] = _this3.space * _this3.props.pages + "px";

	      _this3.layers.forEach(function (layer) {
	        layer.setHeight(_this3.space, true);
	        layer.setPosition(_this3.space, _this3.current, true);
	      });
	    };

	    _this3.updateRaf = function () {
	      requestAnimationFrame(_this3.update); // Some browsers don't fire on maximize

	      setTimeout(_this3.update, 150);
	    };

	    _this3.scrollStop = function (event) {
	      return _this3.animatedScroll && _this3.animatedScroll.stopAnimation();
	    };

	    return _this3;
	  }

	  var _proto2 = Parallax.prototype;

	  _proto2.scrollTo = function scrollTo(offset) {
	    var _this$props2 = this.props,
	        horizontal = _this$props2.horizontal,
	        config$$1 = _this$props2.config,
	        impl = _this$props2.impl;
	    var scrollType = getScrollType(horizontal);
	    this.scrollStop();
	    this.offset = offset;
	    var target = this.container;
	    this.animatedScroll = new AnimatedValue(target[scrollType]);
	    this.animatedScroll.addListener(function (_ref) {
	      var value = _ref.value;
	      return target[scrollType] = value;
	    });
	    controller(this.animatedScroll, _extends({
	      to: offset * this.space
	    }, config$$1), impl).start();
	  };

	  _proto2.componentDidMount = function componentDidMount() {
	    window.addEventListener('resize', this.updateRaf, false);
	    this.update();
	    this.setState({
	      ready: true
	    });
	  };

	  _proto2.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('resize', this.updateRaf, false);
	  };

	  _proto2.componentDidUpdate = function componentDidUpdate() {
	    this.update();
	  };

	  _proto2.render = function render() {
	    var _this4 = this,
	        _extends3;

	    var _this$props3 = this.props,
	        style = _this$props3.style,
	        innerStyle = _this$props3.innerStyle,
	        pages = _this$props3.pages,
	        className = _this$props3.className,
	        scrolling = _this$props3.scrolling,
	        children = _this$props3.children,
	        horizontal = _this$props3.horizontal;
	    var overflow = scrolling ? 'scroll' : 'hidden';
	    return React__default.createElement("div", {
	      ref: function ref(node) {
	        return _this4.container = node;
	      },
	      onScroll: this.onScroll,
	      onWheel: scrolling ? this.scrollStop : null,
	      onTouchStart: scrolling ? this.scrollStop : null,
	      style: _extends({
	        position: 'absolute',
	        width: '100%',
	        height: '100%',
	        overflow: overflow,
	        overflowY: horizontal ? 'hidden' : overflow,
	        overflowX: horizontal ? overflow : 'hidden',
	        WebkitOverflowScrolling: 'touch',
	        WebkitTransform: START_TRANSLATE,
	        MsTransform: START_TRANSLATE,
	        transform: START_TRANSLATE_3D
	      }, style),
	      className: className
	    }, this.state.ready && React__default.createElement("div", {
	      ref: function ref(node) {
	        return _this4.content = node;
	      },
	      style: _extends((_extends3 = {
	        position: 'absolute'
	      }, _extends3[horizontal ? 'height' : 'width'] = '100%', _extends3.WebkitTransform = START_TRANSLATE, _extends3.MsTransform = START_TRANSLATE, _extends3.transform = START_TRANSLATE_3D, _extends3.overflow = 'hidden', _extends3[horizontal ? 'width' : 'height'] = this.space * pages, _extends3), innerStyle)
	    }, React__default.createElement(Provider, {
	      value: this
	    }, children)));
	  };

	  return Parallax;
	}(React__default.PureComponent);

	Parallax.Layer = ParallaxLayer;
	Parallax.defaultProps = {
	  config: config.slow,
	  scrolling: true,
	  horizontal: false,
	  impl: SpringAnimation
	};

	var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	var elements = domElements.reduce(function (acc, element) {
	  var _extends2;

	  return _extends({}, acc, (_extends2 = {}, _extends2[element] = createAnimatedComponent(element), _extends2));
	}, {});
	Object.assign(createAnimatedComponent, elements);

	var topbar = createCommonjsModule(function (module) {
	(function(window, document) {
	(function() {
	        var lastTime = 0;
	        var vendors = ['ms', 'moz', 'webkit', 'o'];
	        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
	                || window[vendors[x]+'CancelRequestAnimationFrame'];
	        }
	        if (!window.requestAnimationFrame)
	            window.requestAnimationFrame = function(callback, element) {
	                var currTime = new Date().getTime();
	                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	                    timeToCall);
	                lastTime = currTime + timeToCall;
	                return id;
	            };
	        if (!window.cancelAnimationFrame)
	            window.cancelAnimationFrame = function(id) {
	                clearTimeout(id);
	            };
	    }());

	    var canvas, progressTimerId, fadeTimerId, currentProgress, showing,
	        addEvent = function(elem, type, handler) {
	            if (elem.addEventListener) elem.addEventListener(type, handler, false);
	            else if (elem.attachEvent) elem.attachEvent('on' + type, handler);
	            else                       elem['on' + type] = handler;
	        },
	        options = {
	            autoRun      : true,
	            barThickness : 3,
	            barColors    : {
	                '0'      : 'rgba(26,  188, 156, .9)',
	                '.25'    : 'rgba(52,  152, 219, .9)',
	                '.50'    : 'rgba(241, 196, 15,  .9)',
	                '.75'    : 'rgba(230, 126, 34,  .9)',
	                '1.0'    : 'rgba(211, 84,  0,   .9)'
	            },
	            shadowBlur   : 10,
	            shadowColor  : 'rgba(0,   0,   0,   .6)'
	        },
	        repaint = function() {
	            canvas.width = window.innerWidth;
	            canvas.height = options.barThickness * 5; // need space for shadow

	            var ctx = canvas.getContext('2d');
	            ctx.shadowBlur = options.shadowBlur;
	            ctx.shadowColor = options.shadowColor;

	            var lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
	            for (var stop in options.barColors)
	                lineGradient.addColorStop(stop, options.barColors[stop]);
	            ctx.lineWidth = options.barThickness;
	            ctx.beginPath();
	            ctx.moveTo(0, options.barThickness/2);
	            ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness/2);
	            ctx.strokeStyle = lineGradient;
	            ctx.stroke();
	        },
	        createCanvas = function() {
	            canvas = document.createElement('canvas');
	            var style = canvas.style;
	            style.position = 'fixed';
	            style.top = style.left = style.right = style.margin = style.padding = 0;
	            style.zIndex = 100001;
	            style.display = 'none';
	            document.body.appendChild(canvas);
	            addEvent(window, 'resize', repaint);
	        },
	        topbar = {
	            config: function(opts) {
	                for (var key in opts)
	                    if (options.hasOwnProperty(key))
	                        options[key] = opts[key];
	            },
	            show: function() {
	                if (showing) return
	                showing = true;
	                if (fadeTimerId !== null)
	                    window.cancelAnimationFrame(fadeTimerId); 
	                if (!canvas) createCanvas();
	                canvas.style.opacity = 1;
	                canvas.style.display = 'block';
	                topbar.progress(0);
	                if (options.autoRun) {
	                    (function loop() {
	                        progressTimerId = window.requestAnimationFrame(loop);
	                        topbar.progress('+' + (.05 * Math.pow(1-Math.sqrt(currentProgress), 2)));
	                    })();
	                }
	            },
	            progress: function(to) {
	                if (typeof to === "undefined")
	                    return currentProgress
	                if (typeof to === "string") {
	                    to = (to.indexOf('+') >= 0 || to.indexOf('-') >= 0 ? currentProgress : 0) + parseFloat(to);
	                }
	                currentProgress = to > 1 ? 1 : to;
	                repaint();
	                return currentProgress
	            },
	            hide: function() {
	                if (!showing) return
	                showing = false;
	                if (progressTimerId != null) {
	                    window.cancelAnimationFrame(progressTimerId);
	                    progressTimerId = null;
	                }
	                (function loop() {
	                    if (topbar.progress('+.1') >= 1) {
	                        canvas.style.opacity -= .05;
	                        if (canvas.style.opacity <= .05) {
	                            canvas.style.display = 'none';
	                            fadeTimerId = null;
	                            return
	                        } 
	                    }
	                    fadeTimerId = window.requestAnimationFrame(loop);
	                })();
	            }
	        };

	    {
	        module.exports = topbar;
	    }
	}).call(commonjsGlobal, window, document);
	});

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _react2 = _interopRequireDefault(React__default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* eslint-disable no-unused-vars */
	// for React, since flow type is converted to props

	// topbar require window, so here is an universal workaround
	var topbar$$1 = typeof window === "undefined" ? {
	  show: function show() {},
	  hide: function hide() {},
	  config: function config() {}
	} : topbar;

	var semaphore = 0;

	var getTopBar = function getTopBar(props) {
	  return props.topbar || topbar$$1;
	};

	var TopBar = function (_Component) {
	  _inherits(TopBar, _Component);

	  function TopBar() {
	    _classCallCheck(this, TopBar);

	    return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
	  }

	  _createClass(TopBar, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      if (semaphore === 0) {
	        getTopBar(this.props).show();
	      }
	      semaphore++;
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      semaphore--;
	      if (semaphore === 0) {
	        getTopBar(this.props).hide();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return null;
	    }
	  }]);

	  return TopBar;
	}(React__default.Component);

	TopBar.config = topbar$$1.config;
	TopBar.propTypes = {
	  topbar: propTypes.any
	};
	exports.default = TopBar;
	});

	var TopBarProgress = unwrapExports(lib);

	var css = { "headerstrip": "Headerstrip_headerstrip__1S5pD", "headerstrip-options": "Headerstrip_headerstrip-options__3bcOD", "headerstrip-option": "Headerstrip_headerstrip-option__171Rb", "headerstip-option": "Headerstrip_headerstip-option__4qRlv", "headerstrip-rounded-option": "Headerstrip_headerstrip-rounded-option__2S_Z2", "headerstrip-title-nps": "Headerstrip_headerstrip-title-nps__2KZnx", "headerstrip-title-nps-options": "Headerstrip_headerstrip-title-nps-options__1eTPS", "headerstrip-nps-content": "Headerstrip_headerstrip-nps-content__2i20P", "headerstrip-ranking": "Headerstrip_headerstrip-ranking__2OV6u", "headerstrip-ranking-cell": "Headerstrip_headerstrip-ranking-cell__2pEnM" };

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var _extends$1 = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var _class, _temp;

	var NpsRanking = (_temp = _class = function (_React$PureComponent) {
	  inherits(NpsRanking, _React$PureComponent);

	  function NpsRanking() {
	    classCallCheck(this, NpsRanking);
	    return possibleConstructorReturn(this, (NpsRanking.__proto__ || Object.getPrototypeOf(NpsRanking)).apply(this, arguments));
	  }

	  createClass(NpsRanking, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          npsTexts = _props.npsTexts,
	          callback = _props.callback,
	          title = _props.title,
	          ranking = _props.ranking;

	      var data = Array.from(Array(ranking), function (x, index) {
	        return index + 1;
	      });
	      return React__default.createElement(
	        'div',
	        { className: classnames(css['headerstrip-nps-content']) },
	        React__default.createElement(
	          'div',
	          { className: classnames(css['headerstrip-title-nps']) },
	          title
	        ),
	        React__default.createElement(
	          'div',
	          { className: classnames(css['headerstrip-ranking']) },
	          React__default.createElement(
	            'div',
	            {
	              style: { marginRight: 4 },
	              className: classnames(css['headerstrip-title-nps-options'])
	            },
	            npsTexts.left
	          ),
	          data.map(function (index) {
	            return React__default.createElement(
	              'div',
	              {
	                key: index,
	                role: 'button',
	                tabIndex: '0',
	                className: classnames(css['headerstrip-ranking-cell']),
	                onClick: function onClick(event) {
	                  callback(event, index);
	                },
	                onKeyPress: function onKeyPress(event) {
	                  callback(event, index);
	                }
	              },
	              index
	            );
	          }),
	          React__default.createElement(
	            'div',
	            {
	              style: { marginLeft: 4 },
	              className: classnames(css['headerstrip-title-nps-options'])
	            },
	            npsTexts.right
	          )
	        )
	      );
	    }
	  }]);
	  return NpsRanking;
	}(React__default.PureComponent), _class.propTypes = {
	  callback: propTypes.func,
	  npsTexts: propTypes.shape({
	    left: propTypes.string,
	    right: propTypes.string
	  }),
	  ranking: propTypes.number,
	  title: propTypes.string
	}, _class.defaultProps = {
	  npsTexts: {
	    left: 'Poco probable',
	    right: 'Muy probable'
	  },
	  ranking: 10,
	  callback: function callback() {},
	  title: 'Default Title'
	}, _temp);

	var Option = function Option(props) {
	  var text = props.text,
	      _onClick = props.onClick,
	      className = props.className;

	  return React__default.createElement(
	    'div',
	    {
	      className: className,
	      role: 'button',
	      tabIndex: 0,
	      onClick: function onClick() {
	        _onClick();
	      },
	      onKeyPress: function onKeyPress() {
	        _onClick();
	      }
	    },
	    text
	  );
	};

	Option.propTypes = {
	  className: propTypes.string,
	  onClick: propTypes.func,
	  text: propTypes.string
	};

	Option.defaultProps = {
	  className: classnames(css['headerstrip-option']),
	  onClick: function onClick() {},
	  text: 'text option'
	};

	var _class$1, _temp$1;

	var moment = require('moment');

	var Headerstrip = (_temp$1 = _class$1 = function (_Component) {
	  inherits(Headerstrip, _Component);

	  function Headerstrip(props) {
	    classCallCheck(this, Headerstrip);

	    var _this = possibleConstructorReturn(this, (Headerstrip.__proto__ || Object.getPrototypeOf(Headerstrip)).call(this, props));

	    _this.onAccept = function (event) {
	      event.preventDefault();
	      if (typeof _this.props.onAccept === 'function') {
	        _this.props.onAccept();
	      }
	      _this.setStorage('accepted');
	    };

	    _this.onAcceptNps = function (event, index) {
	      event.preventDefault();
	      if (typeof _this.props.onAccept === 'function') {
	        _this.props.onAccept(index);
	      }
	      _this.setState({ showNpsAccept: true }, function () {
	        localStorage.setItem(_this.statusKey(), index);
	        localStorage.setItem(_this.actionKey(), moment().format('YYYY-MM-DD'));
	        setTimeout(function () {
	          _this.setState({ status: 'accepted' });
	        }, 4000);
	      });
	    };

	    _this.onDismiss = function (event) {
	      event.preventDefault();
	      if (typeof _this.props.onDismiss === 'function') {
	        _this.props.onDismiss();
	      }
	      _this.setStorage('dismissed');
	    };

	    _this.onSnooze = function (event) {
	      event.preventDefault();
	      if (typeof _this.props.onSnooze === 'function') {
	        _this.props.onSnooze();
	      }
	      _this.setStorage('snoozed');
	    };

	    _this.setStorage = function (status) {
	      localStorage.setItem(_this.statusKey(), status);
	      localStorage.setItem(_this.actionKey(), moment().format('YYYY-MM-DD'));
	      _this.setState({ status: status });
	    };

	    _this.state = {
	      status: localStorage.getItem(_this.statusKey()),
	      showNpsAccept: false
	    };
	    TopBarProgress.config({
	      barColors: {
	        '0': props.nps.progressColor,
	        '1.0': props.nps.progressColor
	      },
	      shadowBlur: 2
	    });
	    return _this;
	  }

	  createClass(Headerstrip, [{
	    key: 'statusKey',
	    value: function statusKey() {
	      return this.props.id + '-status';
	    }
	  }, {
	    key: 'actionKey',
	    value: function actionKey() {
	      return this.props.id + '-action-at';
	    }
	  }, {
	    key: 'shouldDisplay',
	    value: function shouldDisplay() {
	      var id = this.props.id;
	      var status = this.state.status;

	      var actionAt = moment(localStorage.getItem(id + '-action-at')).add(1, 'days');
	      var snoozed = status === 'snoozed';
	      var dismissed = status === 'dismissed';
	      var accepted = status === 'accepted';
	      var daysBetweenSnooze = moment().diff(actionAt, 'days');

	      if (dismissed || accepted) {
	        return false;
	      }

	      if (snoozed && daysBetweenSnooze < 1) {
	        return false;
	      }

	      return true;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          title = _props.title,
	          texts = _props.texts,
	          id = _props.id,
	          showDismiss = _props.showDismiss,
	          npsShow = _props.npsShow,
	          showSnooze = _props.showSnooze,
	          nps = _props.nps;
	      var showNpsAccept = this.state.showNpsAccept;

	      var shouldHide = !id || !this.shouldDisplay();
	      var HeaderstripBar = React__default.createElement(
	        'div',
	        { className: classnames(css.headerstrip, className) },
	        showNpsAccept ? React__default.createElement(
	          React.Fragment,
	          null,
	          React__default.createElement(TopBarProgress, null),
	          React__default.createElement(
	            'div',
	            { className: classnames(css['headerstrip-title-nps']) },
	            texts.accept || 'Accept'
	          )
	        ) : React__default.createElement(
	          React.Fragment,
	          null,
	          npsShow && React__default.createElement(NpsRanking, {
	            ranking: nps.ranking,
	            npsTexts: nps.texts,
	            callback: this.onAcceptNps,
	            title: title
	          }),
	          !npsShow && React__default.createElement(
	            'div',
	            { className: classnames(css['headerstrip-title']) },
	            title
	          ),
	          React__default.createElement(
	            'div',
	            { className: classnames(css['headerstrip-options']) },
	            showDismiss && React__default.createElement(Option, {
	              className: classnames(css['headerstrip-option'], css['' + (npsShow && 'headerstrip-title-nps-options')]),
	              text: texts.dismiss || 'Dismiss',
	              onClick: this.onDismiss
	            }),
	            showSnooze && React__default.createElement(Option, {
	              className: classnames(css['headerstrip-option'], css['' + (npsShow && 'headerstrip-title-nps-options')]),
	              text: texts.remind_me_later || 'Remind me later',
	              onClick: this.onSnooze
	            }),
	            !npsShow && React__default.createElement(Option, {
	              className: classnames(css['headerstrip-option'], css['headerstrip-rounded-option']),
	              text: texts.accept || 'Accept',
	              onClick: this.onAccept
	            })
	          )
	        )
	      );

	      return React__default.createElement(
	        Transition,
	        {
	          from: { opacity: 0, height: 0 },
	          enter: { opacity: 1, height: 'auto' },
	          leave: { opacity: 0, height: 0 }
	        },
	        !shouldHide && function (styles) {
	          return React__default.createElement(
	            'div',
	            { style: styles },
	            HeaderstripBar
	          );
	        }
	      );
	    }
	  }]);
	  return Headerstrip;
	}(React.Component), _class$1.propTypes = {
	  className: propTypes.string,
	  id: propTypes.string,
	  nps: propTypes.object,
	  npsShow: propTypes.bool,
	  onAccept: propTypes.func,
	  onDismiss: propTypes.func,
	  onSnooze: propTypes.func,
	  showDismiss: propTypes.bool,
	  showSnooze: propTypes.bool,
	  texts: propTypes.objectOf(propTypes.string),
	  title: propTypes.string
	}, _class$1.defaultProps = {
	  title: 'Placeholder title',
	  showDismiss: true,
	  showSnooze: true,
	  texts: {
	    accept: 'Accept',
	    dismiss: 'Dismiss',
	    remind_me_later: 'Snooze'
	  },
	  npsShow: false,
	  nps: {
	    ranking: 10,
	    texts: {
	      left: 'Poco probable',
	      right: 'Muy probable'
	    },
	    progressColor: 'rgba(230,123,47,1)'
	  }
	}, _temp$1);

	var _class$2, _temp2;

	var moment$1 = require('moment');

	var FirestoreHeaderstrip = (_temp2 = _class$2 = function (_PureComponent) {
	  inherits(FirestoreHeaderstrip, _PureComponent);

	  function FirestoreHeaderstrip() {
	    var _ref;

	    var _temp, _this, _ret;

	    classCallCheck(this, FirestoreHeaderstrip);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FirestoreHeaderstrip.__proto__ || Object.getPrototypeOf(FirestoreHeaderstrip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      loading: true,
	      campaign: null
	    }, _this.shouldFetch = function () {
	      if (localStorage.getItem('no-campaign')) {
	        var since = moment$1(localStorage.getItem('no-campaign')).add(6, 'hours');

	        var hoursBetweenLastFetch = moment$1.duration(since.diff(moment$1())).asHours();

	        if (hoursBetweenLastFetch < 6) {
	          return false;
	        }

	        localStorage.removeItem('no-campaign');
	        return true;
	      }

	      return true;
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  createClass(FirestoreHeaderstrip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetchCampaign();
	    }
	  }, {
	    key: 'buildId',
	    value: function buildId(campaign, user) {
	      var isExcluded = campaign.exclude && campaign.exclude.includes(this.props.tenant);
	      var builtKey = campaign.id + '-' + user.id;
	      return campaign.id && !isExcluded ? builtKey : null;
	    }
	  }, {
	    key: 'fetchCampaign',
	    value: function fetchCampaign() {
	      var _this2 = this;

	      var _props = this.props,
	          db = _props.db,
	          countryCode = _props.countryCode,
	          product = _props.product;


	      if (!this.shouldFetch()) {
	        return null;
	      }

	      return db.collection('campaigns').where('country', '==', countryCode).where('product', '==', product).where('valid_until', '>=', moment$1().toDate()).where('active', '==', true).get().then(function (querySnapshot) {
	        var doc = querySnapshot.docs[0];

	        if (!doc) {
	          localStorage.setItem('no-campaign', moment$1().format('X'));
	          return {};
	        }

	        return _extends$1({}, doc.data(), { id: doc.id });
	      }).then(function (doc) {
	        _this2.setState({
	          loading: false,
	          campaign: doc
	        });
	      });
	    }
	  }, {
	    key: 'buildCallbacks',
	    value: function buildCallbacks() {
	      var _this3 = this;

	      var _props2 = this.props,
	          db = _props2.db,
	          tenant = _props2.tenant,
	          user = _props2.user;
	      var campaign = this.state.campaign;


	      var interactionsRef = db.collection('interactions');
	      var docRef = interactionsRef.doc(campaign.id + '-' + tenant + '-' + user.id);

	      var notifyAction = function notifyAction(actionStr) {
	        docRef.set({
	          name: user.name,
	          email: user.email,
	          id: user.id,
	          campaign_key: campaign.id,
	          action: actionStr,
	          action_at: moment$1().toDate()
	        });
	      };

	      var onDismiss = function onDismiss() {
	        notifyAction('dismiss');
	      };

	      var onAccept = function onAccept() {
	        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accept';

	        notifyAction(value);
	        if (typeof _this3.props.onAccept === 'function') {
	          _this3.props.onAccept(campaign);
	        }
	      };

	      var onSnooze = function onSnooze() {
	        notifyAction('snooze');
	      };

	      return { onDismiss: onDismiss, onAccept: onAccept, onSnooze: onSnooze };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          loading = _state.loading,
	          campaign = _state.campaign;
	      var _props3 = this.props,
	          user = _props3.user,
	          npsShow = _props3.npsShow,
	          nps = _props3.nps;


	      if (loading) {
	        return null;
	      }

	      var _buildCallbacks = this.buildCallbacks(),
	          onDismiss = _buildCallbacks.onDismiss,
	          onAccept = _buildCallbacks.onAccept,
	          onSnooze = _buildCallbacks.onSnooze;

	      var id = this.buildId(campaign, user);
	      var texts = {
	        accept: campaign.accept ? campaign.accept : undefined,
	        dismiss: campaign.dismiss ? campaign.dismiss : undefined,
	        remind_me_later: campaign.remind_me_later ? campaign.remind_me_later : undefined
	      };

	      return React__default.createElement(Headerstrip, {
	        id: id,
	        title: campaign.title,
	        texts: texts,
	        onDismiss: onDismiss,
	        onAccept: onAccept,
	        onSnooze: onSnooze,
	        showDismiss: campaign.showDismiss !== null ? campaign.showDismiss : true,
	        showSnooze: campaign.showSnooze !== null ? campaign.showSnooze : true,
	        npsShow: npsShow,
	        nps: nps
	      });
	    }
	  }]);
	  return FirestoreHeaderstrip;
	}(React.PureComponent), _class$2.propTypes = {
	  countryCode: propTypes.string,
	  db: propTypes.object,
	  nps: propTypes.object,
	  npsShow: propTypes.bool,
	  onAccept: propTypes.func,
	  product: propTypes.string,
	  tenant: propTypes.string,
	  user: propTypes.object
	}, _class$2.defaultProps = {
	  npsShow: false
	}, _temp2);

	exports.default = Headerstrip;
	exports.FirestoreHeaderstrip = FirestoreHeaderstrip;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

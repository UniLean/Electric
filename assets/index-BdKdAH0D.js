(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const d of u.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && i(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = r(a);
    fetch(a.href, u);
  }
})();
function $l(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
function bm(o) {
  if (Object.prototype.hasOwnProperty.call(o, "__esModule")) return o;
  var n = o.default;
  if (typeof n == "function") {
    var r = function i() {
      return this instanceof i
        ? Reflect.construct(n, arguments, this.constructor)
        : n.apply(this, arguments);
    };
    r.prototype = n.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(o).forEach(function (i) {
      var a = Object.getOwnPropertyDescriptor(o, i);
      Object.defineProperty(
        r,
        i,
        a.get
          ? a
          : {
              enumerable: !0,
              get: function () {
                return o[i];
              },
            }
      );
    }),
    r
  );
}
var el = { exports: {} },
  ws = {},
  tl = { exports: {} },
  ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function _m() {
  if (Id) return ve;
  Id = 1;
  var o = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function x(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (w && C[w]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    L = {};
  function P(C, I, re) {
    (this.props = C),
      (this.context = I),
      (this.refs = L),
      (this.updater = re || S);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (C, I) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, C, I, "setState");
    }),
    (P.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function q() {}
  q.prototype = P.prototype;
  function W(C, I, re) {
    (this.props = C),
      (this.context = I),
      (this.refs = L),
      (this.updater = re || S);
  }
  var A = (W.prototype = new q());
  (A.constructor = W), _(A, P.prototype), (A.isPureReactComponent = !0);
  var R = Array.isArray,
    Q = Object.prototype.hasOwnProperty,
    B = { current: null },
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(C, I, re) {
    var ue,
      me = {},
      de = null,
      be = null;
    if (I != null)
      for (ue in (I.ref !== void 0 && (be = I.ref),
      I.key !== void 0 && (de = "" + I.key),
      I))
        Q.call(I, ue) && !M.hasOwnProperty(ue) && (me[ue] = I[ue]);
    var $ = arguments.length - 2;
    if ($ === 1) me.children = re;
    else if (1 < $) {
      for (var J = Array($), ne = 0; ne < $; ne++) J[ne] = arguments[ne + 2];
      me.children = J;
    }
    if (C && C.defaultProps)
      for (ue in (($ = C.defaultProps), $))
        me[ue] === void 0 && (me[ue] = $[ue]);
    return {
      $$typeof: o,
      type: C,
      key: de,
      ref: be,
      props: me,
      _owner: B.current,
    };
  }
  function pe(C, I) {
    return {
      $$typeof: o,
      type: C.type,
      key: I,
      ref: C.ref,
      props: C.props,
      _owner: C._owner,
    };
  }
  function oe(C) {
    return typeof C == "object" && C !== null && C.$$typeof === o;
  }
  function ge(C) {
    var I = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (re) {
        return I[re];
      })
    );
  }
  var Pe = /\/+/g;
  function Ae(C, I) {
    return typeof C == "object" && C !== null && C.key != null
      ? ge("" + C.key)
      : I.toString(36);
  }
  function ae(C, I, re, ue, me) {
    var de = typeof C;
    (de === "undefined" || de === "boolean") && (C = null);
    var be = !1;
    if (C === null) be = !0;
    else
      switch (de) {
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case o:
            case n:
              be = !0;
          }
      }
    if (be)
      return (
        (be = C),
        (me = me(be)),
        (C = ue === "" ? "." + Ae(be, 0) : ue),
        R(me)
          ? ((re = ""),
            C != null && (re = C.replace(Pe, "$&/") + "/"),
            ae(me, I, re, "", function (ne) {
              return ne;
            }))
          : me != null &&
            (oe(me) &&
              (me = pe(
                me,
                re +
                  (!me.key || (be && be.key === me.key)
                    ? ""
                    : ("" + me.key).replace(Pe, "$&/") + "/") +
                  C
              )),
            I.push(me)),
        1
      );
    if (((be = 0), (ue = ue === "" ? "." : ue + ":"), R(C)))
      for (var $ = 0; $ < C.length; $++) {
        de = C[$];
        var J = ue + Ae(de, $);
        be += ae(de, I, re, J, me);
      }
    else if (((J = x(C)), typeof J == "function"))
      for (C = J.call(C), $ = 0; !(de = C.next()).done; )
        (de = de.value), (J = ue + Ae(de, $++)), (be += ae(de, I, re, J, me));
    else if (de === "object")
      throw (
        ((I = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (I === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : I) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return be;
  }
  function ye(C, I, re) {
    if (C == null) return C;
    var ue = [],
      me = 0;
    return (
      ae(C, ue, "", "", function (de) {
        return I.call(re, de, me++);
      }),
      ue
    );
  }
  function Se(C) {
    if (C._status === -1) {
      var I = C._result;
      (I = I()),
        I.then(
          function (re) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = re));
          },
          function (re) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = re));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = I));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var fe = { current: null },
    j = { transition: null },
    U = {
      ReactCurrentDispatcher: fe,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: B,
    };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ve.Children = {
      map: ye,
      forEach: function (C, I, re) {
        ye(
          C,
          function () {
            I.apply(this, arguments);
          },
          re
        );
      },
      count: function (C) {
        var I = 0;
        return (
          ye(C, function () {
            I++;
          }),
          I
        );
      },
      toArray: function (C) {
        return (
          ye(C, function (I) {
            return I;
          }) || []
        );
      },
      only: function (C) {
        if (!oe(C))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return C;
      },
    }),
    (ve.Component = P),
    (ve.Fragment = r),
    (ve.Profiler = a),
    (ve.PureComponent = W),
    (ve.StrictMode = i),
    (ve.Suspense = m),
    (ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
    (ve.act = D),
    (ve.cloneElement = function (C, I, re) {
      if (C == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            C +
            "."
        );
      var ue = _({}, C.props),
        me = C.key,
        de = C.ref,
        be = C._owner;
      if (I != null) {
        if (
          (I.ref !== void 0 && ((de = I.ref), (be = B.current)),
          I.key !== void 0 && (me = "" + I.key),
          C.type && C.type.defaultProps)
        )
          var $ = C.type.defaultProps;
        for (J in I)
          Q.call(I, J) &&
            !M.hasOwnProperty(J) &&
            (ue[J] = I[J] === void 0 && $ !== void 0 ? $[J] : I[J]);
      }
      var J = arguments.length - 2;
      if (J === 1) ue.children = re;
      else if (1 < J) {
        $ = Array(J);
        for (var ne = 0; ne < J; ne++) $[ne] = arguments[ne + 2];
        ue.children = $;
      }
      return {
        $$typeof: o,
        type: C.type,
        key: me,
        ref: de,
        props: ue,
        _owner: be,
      };
    }),
    (ve.createContext = function (C) {
      return (
        (C = {
          $$typeof: d,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (C.Provider = { $$typeof: u, _context: C }),
        (C.Consumer = C)
      );
    }),
    (ve.createElement = Y),
    (ve.createFactory = function (C) {
      var I = Y.bind(null, C);
      return (I.type = C), I;
    }),
    (ve.createRef = function () {
      return { current: null };
    }),
    (ve.forwardRef = function (C) {
      return { $$typeof: p, render: C };
    }),
    (ve.isValidElement = oe),
    (ve.lazy = function (C) {
      return { $$typeof: v, _payload: { _status: -1, _result: C }, _init: Se };
    }),
    (ve.memo = function (C, I) {
      return { $$typeof: g, type: C, compare: I === void 0 ? null : I };
    }),
    (ve.startTransition = function (C) {
      var I = j.transition;
      j.transition = {};
      try {
        C();
      } finally {
        j.transition = I;
      }
    }),
    (ve.unstable_act = D),
    (ve.useCallback = function (C, I) {
      return fe.current.useCallback(C, I);
    }),
    (ve.useContext = function (C) {
      return fe.current.useContext(C);
    }),
    (ve.useDebugValue = function () {}),
    (ve.useDeferredValue = function (C) {
      return fe.current.useDeferredValue(C);
    }),
    (ve.useEffect = function (C, I) {
      return fe.current.useEffect(C, I);
    }),
    (ve.useId = function () {
      return fe.current.useId();
    }),
    (ve.useImperativeHandle = function (C, I, re) {
      return fe.current.useImperativeHandle(C, I, re);
    }),
    (ve.useInsertionEffect = function (C, I) {
      return fe.current.useInsertionEffect(C, I);
    }),
    (ve.useLayoutEffect = function (C, I) {
      return fe.current.useLayoutEffect(C, I);
    }),
    (ve.useMemo = function (C, I) {
      return fe.current.useMemo(C, I);
    }),
    (ve.useReducer = function (C, I, re) {
      return fe.current.useReducer(C, I, re);
    }),
    (ve.useRef = function (C) {
      return fe.current.useRef(C);
    }),
    (ve.useState = function (C) {
      return fe.current.useState(C);
    }),
    (ve.useSyncExternalStore = function (C, I, re) {
      return fe.current.useSyncExternalStore(C, I, re);
    }),
    (ve.useTransition = function () {
      return fe.current.useTransition();
    }),
    (ve.version = "18.3.1"),
    ve
  );
}
var $d;
function Rs() {
  return $d || (($d = 1), (tl.exports = _m())), tl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function Sm() {
  if (Dd) return ws;
  Dd = 1;
  var o = Rs(),
    n = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, m, g) {
    var v,
      w = {},
      x = null,
      S = null;
    g !== void 0 && (x = "" + g),
      m.key !== void 0 && (x = "" + m.key),
      m.ref !== void 0 && (S = m.ref);
    for (v in m) i.call(m, v) && !u.hasOwnProperty(v) && (w[v] = m[v]);
    if (p && p.defaultProps)
      for (v in ((m = p.defaultProps), m)) w[v] === void 0 && (w[v] = m[v]);
    return {
      $$typeof: n,
      type: p,
      key: x,
      ref: S,
      props: w,
      _owner: a.current,
    };
  }
  return (ws.Fragment = r), (ws.jsx = d), (ws.jsxs = d), ws;
}
var Ud;
function km() {
  return Ud || ((Ud = 1), (el.exports = Sm())), el.exports;
}
var h = km(),
  K = Rs();
const Dl = $l(K);
var Hi = {},
  nl = { exports: {} },
  ft = {},
  rl = { exports: {} },
  sl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd;
function jm() {
  return (
    Fd ||
      ((Fd = 1),
      (function (o) {
        function n(j, U) {
          var D = j.length;
          j.push(U);
          e: for (; 0 < D; ) {
            var C = (D - 1) >>> 1,
              I = j[C];
            if (0 < a(I, U)) (j[C] = U), (j[D] = I), (D = C);
            else break e;
          }
        }
        function r(j) {
          return j.length === 0 ? null : j[0];
        }
        function i(j) {
          if (j.length === 0) return null;
          var U = j[0],
            D = j.pop();
          if (D !== U) {
            j[0] = D;
            e: for (var C = 0, I = j.length, re = I >>> 1; C < re; ) {
              var ue = 2 * (C + 1) - 1,
                me = j[ue],
                de = ue + 1,
                be = j[de];
              if (0 > a(me, D))
                de < I && 0 > a(be, me)
                  ? ((j[C] = be), (j[de] = D), (C = de))
                  : ((j[C] = me), (j[ue] = D), (C = ue));
              else if (de < I && 0 > a(be, D))
                (j[C] = be), (j[de] = D), (C = de);
              else break e;
            }
          }
          return U;
        }
        function a(j, U) {
          var D = j.sortIndex - U.sortIndex;
          return D !== 0 ? D : j.id - U.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          o.unstable_now = function () {
            return u.now();
          };
        } else {
          var d = Date,
            p = d.now();
          o.unstable_now = function () {
            return d.now() - p;
          };
        }
        var m = [],
          g = [],
          v = 1,
          w = null,
          x = 3,
          S = !1,
          _ = !1,
          L = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function A(j) {
          for (var U = r(g); U !== null; ) {
            if (U.callback === null) i(g);
            else if (U.startTime <= j)
              i(g), (U.sortIndex = U.expirationTime), n(m, U);
            else break;
            U = r(g);
          }
        }
        function R(j) {
          if (((L = !1), A(j), !_))
            if (r(m) !== null) (_ = !0), Se(Q);
            else {
              var U = r(g);
              U !== null && fe(R, U.startTime - j);
            }
        }
        function Q(j, U) {
          (_ = !1), L && ((L = !1), q(Y), (Y = -1)), (S = !0);
          var D = x;
          try {
            for (
              A(U), w = r(m);
              w !== null && (!(w.expirationTime > U) || (j && !ge()));

            ) {
              var C = w.callback;
              if (typeof C == "function") {
                (w.callback = null), (x = w.priorityLevel);
                var I = C(w.expirationTime <= U);
                (U = o.unstable_now()),
                  typeof I == "function"
                    ? (w.callback = I)
                    : w === r(m) && i(m),
                  A(U);
              } else i(m);
              w = r(m);
            }
            if (w !== null) var re = !0;
            else {
              var ue = r(g);
              ue !== null && fe(R, ue.startTime - U), (re = !1);
            }
            return re;
          } finally {
            (w = null), (x = D), (S = !1);
          }
        }
        var B = !1,
          M = null,
          Y = -1,
          pe = 5,
          oe = -1;
        function ge() {
          return !(o.unstable_now() - oe < pe);
        }
        function Pe() {
          if (M !== null) {
            var j = o.unstable_now();
            oe = j;
            var U = !0;
            try {
              U = M(!0, j);
            } finally {
              U ? Ae() : ((B = !1), (M = null));
            }
          } else B = !1;
        }
        var Ae;
        if (typeof W == "function")
          Ae = function () {
            W(Pe);
          };
        else if (typeof MessageChannel < "u") {
          var ae = new MessageChannel(),
            ye = ae.port2;
          (ae.port1.onmessage = Pe),
            (Ae = function () {
              ye.postMessage(null);
            });
        } else
          Ae = function () {
            P(Pe, 0);
          };
        function Se(j) {
          (M = j), B || ((B = !0), Ae());
        }
        function fe(j, U) {
          Y = P(function () {
            j(o.unstable_now());
          }, U);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            _ || S || ((_ = !0), Se(Q));
          }),
          (o.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (pe = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return r(m);
          }),
          (o.unstable_next = function (j) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = x;
            }
            var D = x;
            x = U;
            try {
              return j();
            } finally {
              x = D;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (j, U) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var D = x;
            x = j;
            try {
              return U();
            } finally {
              x = D;
            }
          }),
          (o.unstable_scheduleCallback = function (j, U, D) {
            var C = o.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? C + D : C))
                : (D = C),
              j)
            ) {
              case 1:
                var I = -1;
                break;
              case 2:
                I = 250;
                break;
              case 5:
                I = 1073741823;
                break;
              case 4:
                I = 1e4;
                break;
              default:
                I = 5e3;
            }
            return (
              (I = D + I),
              (j = {
                id: v++,
                callback: U,
                priorityLevel: j,
                startTime: D,
                expirationTime: I,
                sortIndex: -1,
              }),
              D > C
                ? ((j.sortIndex = D),
                  n(g, j),
                  r(m) === null &&
                    j === r(g) &&
                    (L ? (q(Y), (Y = -1)) : (L = !0), fe(R, D - C)))
                : ((j.sortIndex = I), n(m, j), _ || S || ((_ = !0), Se(Q))),
              j
            );
          }),
          (o.unstable_shouldYield = ge),
          (o.unstable_wrapCallback = function (j) {
            var U = x;
            return function () {
              var D = x;
              x = U;
              try {
                return j.apply(this, arguments);
              } finally {
                x = D;
              }
            };
          });
      })(sl)),
    sl
  );
}
var Md;
function Cm() {
  return Md || ((Md = 1), (rl.exports = jm())), rl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function Nm() {
  if (zd) return ft;
  zd = 1;
  var o = Rs(),
    n = Cm();
  function r(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        s = 1;
      s < arguments.length;
      s++
    )
      t += "&args[]=" + encodeURIComponent(arguments[s]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    a = {};
  function u(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    w = {};
  function x(e) {
    return m.call(w, e)
      ? !0
      : m.call(v, e)
      ? !1
      : g.test(e)
      ? (w[e] = !0)
      : ((v[e] = !0), !1);
  }
  function S(e, t, s, l) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : s !== null
          ? !s.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _(e, t, s, l) {
    if (t === null || typeof t > "u" || S(e, t, s, l)) return !0;
    if (l) return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function L(e, t, s, l, c, f, y) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = c),
      (this.mustUseProperty = s),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = y);
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      P[e] = new L(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      P[t] = new L(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      P[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      P[e] = new L(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        P[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      P[e] = new L(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      P[e] = new L(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      P[e] = new L(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      P[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var q = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(q, W);
      P[t] = new L(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(q, W);
        P[t] = new L(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(q, W);
      P[t] = new L(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      P[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (P.xlinkHref = new L(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      P[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function A(e, t, s, l) {
    var c = P.hasOwnProperty(t) ? P[t] : null;
    (c !== null
      ? c.type !== 0
      : l ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (_(t, s, c, l) && (s = null),
      l || c === null
        ? x(t) &&
          (s === null ? e.removeAttribute(t) : e.setAttribute(t, "" + s))
        : c.mustUseProperty
        ? (e[c.propertyName] = s === null ? (c.type === 3 ? !1 : "") : s)
        : ((t = c.attributeName),
          (l = c.attributeNamespace),
          s === null
            ? e.removeAttribute(t)
            : ((c = c.type),
              (s = c === 3 || (c === 4 && s === !0) ? "" : "" + s),
              l ? e.setAttributeNS(l, t, s) : e.setAttribute(t, s))));
  }
  var R = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Q = Symbol.for("react.element"),
    B = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    Y = Symbol.for("react.strict_mode"),
    pe = Symbol.for("react.profiler"),
    oe = Symbol.for("react.provider"),
    ge = Symbol.for("react.context"),
    Pe = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    ae = Symbol.for("react.suspense_list"),
    ye = Symbol.for("react.memo"),
    Se = Symbol.for("react.lazy"),
    fe = Symbol.for("react.offscreen"),
    j = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var D = Object.assign,
    C;
  function I(e) {
    if (C === void 0)
      try {
        throw Error();
      } catch (s) {
        var t = s.stack.trim().match(/\n( *(at )?)/);
        C = (t && t[1]) || "";
      }
    return (
      `
` +
      C +
      e
    );
  }
  var re = !1;
  function ue(e, t) {
    if (!e || re) return "";
    re = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (T) {
            var l = T;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (T) {
            l = T;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (T) {
          l = T;
        }
        e();
      }
    } catch (T) {
      if (T && l && typeof T.stack == "string") {
        for (
          var c = T.stack.split(`
`),
            f = l.stack.split(`
`),
            y = c.length - 1,
            b = f.length - 1;
          1 <= y && 0 <= b && c[y] !== f[b];

        )
          b--;
        for (; 1 <= y && 0 <= b; y--, b--)
          if (c[y] !== f[b]) {
            if (y !== 1 || b !== 1)
              do
                if ((y--, b--, 0 > b || c[y] !== f[b])) {
                  var k =
                    `
` + c[y].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= y && 0 <= b);
            break;
          }
      }
    } finally {
      (re = !1), (Error.prepareStackTrace = s);
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ue(e.type, !1)), e;
      case 11:
        return (e = ue(e.type.render, !1)), e;
      case 1:
        return (e = ue(e.type, !0)), e;
      default:
        return "";
    }
  }
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case B:
        return "Portal";
      case pe:
        return "Profiler";
      case Y:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ge:
          return (e.displayName || "Context") + ".Consumer";
        case oe:
          return (e._context.displayName || "Context") + ".Provider";
        case Pe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ye:
          return (
            (t = e.displayName || null), t !== null ? t : de(e.type) || "Memo"
          );
        case Se:
          (t = e._payload), (e = e._init);
          try {
            return de(e(t));
          } catch {}
      }
    return null;
  }
  function be(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return de(t);
      case 8:
        return t === Y ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function $(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function J(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ne(e) {
    var t = J(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var c = s.get,
        f = s.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            (l = "" + y), f.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ce(e) {
    e._valueTracker || (e._valueTracker = ne(e));
  }
  function Fe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var s = t.getValue(),
      l = "";
    return (
      e && (l = J(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== s ? (t.setValue(e), !0) : !1
    );
  }
  function Le(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function De(e, t) {
    var s = t.checked;
    return D({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: s ?? e._wrapperState.initialChecked,
    });
  }
  function Wn(e, t) {
    var s = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    (s = $(t.value != null ? t.value : s)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: s,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Hn(e, t) {
    (t = t.checked), t != null && A(e, "checked", t, !1);
  }
  function Ar(e, t) {
    Hn(e, t);
    var s = $(t.value),
      l = t.type;
    if (s != null)
      l === "number"
        ? ((s === 0 && e.value === "") || e.value != s) && (e.value = "" + s)
        : e.value !== "" + s && (e.value = "" + s);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ir(e, t.type, s)
      : t.hasOwnProperty("defaultValue") && Ir(e, t.type, $(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function $s(e, t, s) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (s = e.name),
      s !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      s !== "" && (e.name = s);
  }
  function Ir(e, t, s) {
    (t !== "number" || Le(e.ownerDocument) !== e) &&
      (s == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var jn = Array.isArray;
  function It(e, t, s, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < s.length; c++) t["$" + s[c]] = !0;
      for (s = 0; s < e.length; s++)
        (c = t.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== c && (e[s].selected = c),
          c && l && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + $(s), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === s) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function uo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
    return D({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Hl(e, t) {
    var s = t.value;
    if (s == null) {
      if (((s = t.children), (t = t.defaultValue), s != null)) {
        if (t != null) throw Error(r(92));
        if (jn(s)) {
          if (1 < s.length) throw Error(r(93));
          s = s[0];
        }
        t = s;
      }
      t == null && (t = ""), (s = t);
    }
    e._wrapperState = { initialValue: $(s) };
  }
  function Kl(e, t) {
    var s = $(t.value),
      l = $(t.defaultValue);
    s != null &&
      ((s = "" + s),
      s !== e.value && (e.value = s),
      t.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
      l != null && (e.defaultValue = "" + l);
  }
  function ql(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Jl(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function co(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Jl(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ds,
    Gl = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, s, l, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, s, l, c);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ds = Ds || document.createElement("div"),
            Ds.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ds.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function $r(e, t) {
    if (t) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    jh = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dr).forEach(function (e) {
    jh.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
    });
  });
  function Ql(e, t, s) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : s || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Yl(e, t) {
    e = e.style;
    for (var s in t)
      if (t.hasOwnProperty(s)) {
        var l = s.indexOf("--") === 0,
          c = Ql(s, t[s], l);
        s === "float" && (s = "cssFloat"), l ? e.setProperty(s, c) : (e[s] = c);
      }
  }
  var Ch = D(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function fo(e, t) {
    if (t) {
      if (Ch[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(r(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(r(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(r(62));
    }
  }
  function ho(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var po = null;
  function mo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var go = null,
    Kn = null,
    qn = null;
  function Xl(e) {
    if ((e = is(e))) {
      if (typeof go != "function") throw Error(r(280));
      var t = e.stateNode;
      t && ((t = oi(t)), go(e.stateNode, e.type, t));
    }
  }
  function Zl(e) {
    Kn ? (qn ? qn.push(e) : (qn = [e])) : (Kn = e);
  }
  function eu() {
    if (Kn) {
      var e = Kn,
        t = qn;
      if (((qn = Kn = null), Xl(e), t)) for (e = 0; e < t.length; e++) Xl(t[e]);
    }
  }
  function tu(e, t) {
    return e(t);
  }
  function nu() {}
  var vo = !1;
  function ru(e, t, s) {
    if (vo) return e(t, s);
    vo = !0;
    try {
      return tu(e, t, s);
    } finally {
      (vo = !1), (Kn !== null || qn !== null) && (nu(), eu());
    }
  }
  function Ur(e, t) {
    var s = e.stateNode;
    if (s === null) return null;
    var l = oi(s);
    if (l === null) return null;
    s = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(r(231, t, typeof s));
    return s;
  }
  var yo = !1;
  if (p)
    try {
      var Fr = {};
      Object.defineProperty(Fr, "passive", {
        get: function () {
          yo = !0;
        },
      }),
        window.addEventListener("test", Fr, Fr),
        window.removeEventListener("test", Fr, Fr);
    } catch {
      yo = !1;
    }
  function Nh(e, t, s, l, c, f, y, b, k) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(s, T);
    } catch (z) {
      this.onError(z);
    }
  }
  var Mr = !1,
    Us = null,
    Fs = !1,
    xo = null,
    Eh = {
      onError: function (e) {
        (Mr = !0), (Us = e);
      },
    };
  function Ph(e, t, s, l, c, f, y, b, k) {
    (Mr = !1), (Us = null), Nh.apply(Eh, arguments);
  }
  function Oh(e, t, s, l, c, f, y, b, k) {
    if ((Ph.apply(this, arguments), Mr)) {
      if (Mr) {
        var T = Us;
        (Mr = !1), (Us = null);
      } else throw Error(r(198));
      Fs || ((Fs = !0), (xo = T));
    }
  }
  function Cn(e) {
    var t = e,
      s = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (s = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? s : null;
  }
  function su(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function iu(e) {
    if (Cn(e) !== e) throw Error(r(188));
  }
  function Th(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Cn(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var s = e, l = t; ; ) {
      var c = s.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (((l = c.return), l !== null)) {
          s = l;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === s) return iu(c), e;
          if (f === l) return iu(c), t;
          f = f.sibling;
        }
        throw Error(r(188));
      }
      if (s.return !== l.return) (s = c), (l = f);
      else {
        for (var y = !1, b = c.child; b; ) {
          if (b === s) {
            (y = !0), (s = c), (l = f);
            break;
          }
          if (b === l) {
            (y = !0), (l = c), (s = f);
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = f.child; b; ) {
            if (b === s) {
              (y = !0), (s = f), (l = c);
              break;
            }
            if (b === l) {
              (y = !0), (l = f), (s = c);
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(r(189));
        }
      }
      if (s.alternate !== l) throw Error(r(190));
    }
    if (s.tag !== 3) throw Error(r(188));
    return s.stateNode.current === s ? e : t;
  }
  function ou(e) {
    return (e = Th(e)), e !== null ? au(e) : null;
  }
  function au(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = au(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var lu = n.unstable_scheduleCallback,
    uu = n.unstable_cancelCallback,
    Lh = n.unstable_shouldYield,
    Rh = n.unstable_requestPaint,
    Me = n.unstable_now,
    Ah = n.unstable_getCurrentPriorityLevel,
    wo = n.unstable_ImmediatePriority,
    cu = n.unstable_UserBlockingPriority,
    Ms = n.unstable_NormalPriority,
    Ih = n.unstable_LowPriority,
    du = n.unstable_IdlePriority,
    zs = null,
    $t = null;
  function $h(e) {
    if ($t && typeof $t.onCommitFiberRoot == "function")
      try {
        $t.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var jt = Math.clz32 ? Math.clz32 : Fh,
    Dh = Math.log,
    Uh = Math.LN2;
  function Fh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Dh(e) / Uh) | 0)) | 0;
  }
  var Bs = 64,
    Vs = 4194304;
  function zr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ws(e, t) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var l = 0,
      c = e.suspendedLanes,
      f = e.pingedLanes,
      y = s & 268435455;
    if (y !== 0) {
      var b = y & ~c;
      b !== 0 ? (l = zr(b)) : ((f &= y), f !== 0 && (l = zr(f)));
    } else (y = s & ~c), y !== 0 ? (l = zr(y)) : f !== 0 && (l = zr(f));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      (t & c) === 0 &&
      ((c = l & -l), (f = t & -t), c >= f || (c === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((l & 4) !== 0 && (l |= s & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t; )
        (s = 31 - jt(t)), (c = 1 << s), (l |= e[s]), (t &= ~c);
    return l;
  }
  function Mh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zh(e, t) {
    for (
      var s = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        f = e.pendingLanes;
      0 < f;

    ) {
      var y = 31 - jt(f),
        b = 1 << y,
        k = c[y];
      k === -1
        ? ((b & s) === 0 || (b & l) !== 0) && (c[y] = Mh(b, t))
        : k <= t && (e.expiredLanes |= b),
        (f &= ~b);
    }
  }
  function bo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function fu() {
    var e = Bs;
    return (Bs <<= 1), (Bs & 4194240) === 0 && (Bs = 64), e;
  }
  function _o(e) {
    for (var t = [], s = 0; 31 > s; s++) t.push(e);
    return t;
  }
  function Br(e, t, s) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - jt(t)),
      (e[t] = s);
  }
  function Bh(e, t) {
    var s = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var c = 31 - jt(s),
        f = 1 << c;
      (t[c] = 0), (l[c] = -1), (e[c] = -1), (s &= ~f);
    }
  }
  function So(e, t) {
    var s = (e.entangledLanes |= t);
    for (e = e.entanglements; s; ) {
      var l = 31 - jt(s),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (s &= ~c);
    }
  }
  var ke = 0;
  function hu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var pu,
    ko,
    mu,
    gu,
    vu,
    jo = !1,
    Hs = [],
    tn = null,
    nn = null,
    rn = null,
    Vr = new Map(),
    Wr = new Map(),
    sn = [],
    Vh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function yu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        nn = null;
        break;
      case "mouseover":
      case "mouseout":
        rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wr.delete(t.pointerId);
    }
  }
  function Hr(e, t, s, l, c, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: s,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [c],
        }),
        t !== null && ((t = is(t)), t !== null && ko(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function Wh(e, t, s, l, c) {
    switch (t) {
      case "focusin":
        return (tn = Hr(tn, e, t, s, l, c)), !0;
      case "dragenter":
        return (nn = Hr(nn, e, t, s, l, c)), !0;
      case "mouseover":
        return (rn = Hr(rn, e, t, s, l, c)), !0;
      case "pointerover":
        var f = c.pointerId;
        return Vr.set(f, Hr(Vr.get(f) || null, e, t, s, l, c)), !0;
      case "gotpointercapture":
        return (
          (f = c.pointerId), Wr.set(f, Hr(Wr.get(f) || null, e, t, s, l, c)), !0
        );
    }
    return !1;
  }
  function xu(e) {
    var t = Nn(e.target);
    if (t !== null) {
      var s = Cn(t);
      if (s !== null) {
        if (((t = s.tag), t === 13)) {
          if (((t = su(s)), t !== null)) {
            (e.blockedOn = t),
              vu(e.priority, function () {
                mu(s);
              });
            return;
          }
        } else if (t === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ks(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var s = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var l = new s.constructor(s.type, s);
        (po = l), s.target.dispatchEvent(l), (po = null);
      } else return (t = is(s)), t !== null && ko(t), (e.blockedOn = s), !1;
      t.shift();
    }
    return !0;
  }
  function wu(e, t, s) {
    Ks(e) && s.delete(t);
  }
  function Hh() {
    (jo = !1),
      tn !== null && Ks(tn) && (tn = null),
      nn !== null && Ks(nn) && (nn = null),
      rn !== null && Ks(rn) && (rn = null),
      Vr.forEach(wu),
      Wr.forEach(wu);
  }
  function Kr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      jo ||
        ((jo = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Hh)));
  }
  function qr(e) {
    function t(c) {
      return Kr(c, e);
    }
    if (0 < Hs.length) {
      Kr(Hs[0], e);
      for (var s = 1; s < Hs.length; s++) {
        var l = Hs[s];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      tn !== null && Kr(tn, e),
        nn !== null && Kr(nn, e),
        rn !== null && Kr(rn, e),
        Vr.forEach(t),
        Wr.forEach(t),
        s = 0;
      s < sn.length;
      s++
    )
      (l = sn[s]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < sn.length && ((s = sn[0]), s.blockedOn === null); )
      xu(s), s.blockedOn === null && sn.shift();
  }
  var Jn = R.ReactCurrentBatchConfig,
    qs = !0;
  function Kh(e, t, s, l) {
    var c = ke,
      f = Jn.transition;
    Jn.transition = null;
    try {
      (ke = 1), Co(e, t, s, l);
    } finally {
      (ke = c), (Jn.transition = f);
    }
  }
  function qh(e, t, s, l) {
    var c = ke,
      f = Jn.transition;
    Jn.transition = null;
    try {
      (ke = 4), Co(e, t, s, l);
    } finally {
      (ke = c), (Jn.transition = f);
    }
  }
  function Co(e, t, s, l) {
    if (qs) {
      var c = No(e, t, s, l);
      if (c === null) Wo(e, t, l, Js, s), yu(e, l);
      else if (Wh(c, e, t, s, l)) l.stopPropagation();
      else if ((yu(e, l), t & 4 && -1 < Vh.indexOf(e))) {
        for (; c !== null; ) {
          var f = is(c);
          if (
            (f !== null && pu(f),
            (f = No(e, t, s, l)),
            f === null && Wo(e, t, l, Js, s),
            f === c)
          )
            break;
          c = f;
        }
        c !== null && l.stopPropagation();
      } else Wo(e, t, l, null, s);
    }
  }
  var Js = null;
  function No(e, t, s, l) {
    if (((Js = null), (e = mo(l)), (e = Nn(e)), e !== null))
      if (((t = Cn(e)), t === null)) e = null;
      else if (((s = t.tag), s === 13)) {
        if (((e = su(t)), e !== null)) return e;
        e = null;
      } else if (s === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Js = e), null;
  }
  function bu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ah()) {
          case wo:
            return 1;
          case cu:
            return 4;
          case Ms:
          case Ih:
            return 16;
          case du:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var on = null,
    Eo = null,
    Gs = null;
  function _u() {
    if (Gs) return Gs;
    var e,
      t = Eo,
      s = t.length,
      l,
      c = "value" in on ? on.value : on.textContent,
      f = c.length;
    for (e = 0; e < s && t[e] === c[e]; e++);
    var y = s - e;
    for (l = 1; l <= y && t[s - l] === c[f - l]; l++);
    return (Gs = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Qs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ys() {
    return !0;
  }
  function Su() {
    return !1;
  }
  function mt(e) {
    function t(s, l, c, f, y) {
      (this._reactName = s),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null);
      for (var b in e)
        e.hasOwnProperty(b) && ((s = e[b]), (this[b] = s ? s(f) : f[b]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Ys
          : Su),
        (this.isPropagationStopped = Su),
        this
      );
    }
    return (
      D(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = Ys));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = Ys));
        },
        persist: function () {},
        isPersistent: Ys,
      }),
      t
    );
  }
  var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Po = mt(Gn),
    Jr = D({}, Gn, { view: 0, detail: 0 }),
    Jh = mt(Jr),
    Oo,
    To,
    Gr,
    Xs = D({}, Jr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ro,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Gr &&
              (Gr && e.type === "mousemove"
                ? ((Oo = e.screenX - Gr.screenX), (To = e.screenY - Gr.screenY))
                : (To = Oo = 0),
              (Gr = e)),
            Oo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : To;
      },
    }),
    ku = mt(Xs),
    Gh = D({}, Xs, { dataTransfer: 0 }),
    Qh = mt(Gh),
    Yh = D({}, Jr, { relatedTarget: 0 }),
    Lo = mt(Yh),
    Xh = D({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zh = mt(Xh),
    ep = D({}, Gn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    tp = mt(ep),
    np = D({}, Gn, { data: 0 }),
    ju = mt(np),
    rp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    sp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ip = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function op(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ip[e])
      ? !!t[e]
      : !1;
  }
  function Ro() {
    return op;
  }
  var ap = D({}, Jr, {
      key: function (e) {
        if (e.key) {
          var t = rp[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? sp[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ro,
      charCode: function (e) {
        return e.type === "keypress" ? Qs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Qs(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    lp = mt(ap),
    up = D({}, Xs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Cu = mt(up),
    cp = D({}, Jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ro,
    }),
    dp = mt(cp),
    fp = D({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hp = mt(fp),
    pp = D({}, Xs, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    mp = mt(pp),
    gp = [9, 13, 27, 32],
    Ao = p && "CompositionEvent" in window,
    Qr = null;
  p && "documentMode" in document && (Qr = document.documentMode);
  var vp = p && "TextEvent" in window && !Qr,
    Nu = p && (!Ao || (Qr && 8 < Qr && 11 >= Qr)),
    Eu = " ",
    Pu = !1;
  function Ou(e, t) {
    switch (e) {
      case "keyup":
        return gp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Tu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qn = !1;
  function yp(e, t) {
    switch (e) {
      case "compositionend":
        return Tu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Pu = !0), Eu);
      case "textInput":
        return (e = t.data), e === Eu && Pu ? null : e;
      default:
        return null;
    }
  }
  function xp(e, t) {
    if (Qn)
      return e === "compositionend" || (!Ao && Ou(e, t))
        ? ((e = _u()), (Gs = Eo = on = null), (Qn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Nu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var wp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wp[e.type] : t === "textarea";
  }
  function Ru(e, t, s, l) {
    Zl(l),
      (t = ri(t, "onChange")),
      0 < t.length &&
        ((s = new Po("onChange", "change", null, s, l)),
        e.push({ event: s, listeners: t }));
  }
  var Yr = null,
    Xr = null;
  function bp(e) {
    Yu(e, 0);
  }
  function Zs(e) {
    var t = tr(e);
    if (Fe(t)) return e;
  }
  function _p(e, t) {
    if (e === "change") return t;
  }
  var Au = !1;
  if (p) {
    var Io;
    if (p) {
      var $o = "oninput" in document;
      if (!$o) {
        var Iu = document.createElement("div");
        Iu.setAttribute("oninput", "return;"),
          ($o = typeof Iu.oninput == "function");
      }
      Io = $o;
    } else Io = !1;
    Au = Io && (!document.documentMode || 9 < document.documentMode);
  }
  function $u() {
    Yr && (Yr.detachEvent("onpropertychange", Du), (Xr = Yr = null));
  }
  function Du(e) {
    if (e.propertyName === "value" && Zs(Xr)) {
      var t = [];
      Ru(t, Xr, e, mo(e)), ru(bp, t);
    }
  }
  function Sp(e, t, s) {
    e === "focusin"
      ? ($u(), (Yr = t), (Xr = s), Yr.attachEvent("onpropertychange", Du))
      : e === "focusout" && $u();
  }
  function kp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zs(Xr);
  }
  function jp(e, t) {
    if (e === "click") return Zs(t);
  }
  function Cp(e, t) {
    if (e === "input" || e === "change") return Zs(t);
  }
  function Np(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ct = typeof Object.is == "function" ? Object.is : Np;
  function Zr(e, t) {
    if (Ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var s = Object.keys(e),
      l = Object.keys(t);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var c = s[l];
      if (!m.call(t, c) || !Ct(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Uu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fu(e, t) {
    var s = Uu(e);
    e = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (((l = e + s.textContent.length), e <= t && l >= t))
          return { node: s, offset: t - e };
        e = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Uu(s);
    }
  }
  function Mu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Mu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function zu() {
    for (var e = window, t = Le(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof t.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = t.contentWindow;
      else break;
      t = Le(e.document);
    }
    return t;
  }
  function Do(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Ep(e) {
    var t = zu(),
      s = e.focusedElem,
      l = e.selectionRange;
    if (
      t !== s &&
      s &&
      s.ownerDocument &&
      Mu(s.ownerDocument.documentElement, s)
    ) {
      if (l !== null && Do(s)) {
        if (
          ((t = l.start),
          (e = l.end),
          e === void 0 && (e = t),
          "selectionStart" in s)
        )
          (s.selectionStart = t),
            (s.selectionEnd = Math.min(e, s.value.length));
        else if (
          ((e = ((t = s.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var c = s.textContent.length,
            f = Math.min(l.start, c);
          (l = l.end === void 0 ? f : Math.min(l.end, c)),
            !e.extend && f > l && ((c = l), (l = f), (f = c)),
            (c = Fu(s, f));
          var y = Fu(s, l);
          c &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== c.node ||
              e.anchorOffset !== c.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(c.node, c.offset),
            e.removeAllRanges(),
            f > l
              ? (e.addRange(t), e.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = s; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < t.length; s++)
        (e = t[s]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Pp = p && "documentMode" in document && 11 >= document.documentMode,
    Yn = null,
    Uo = null,
    es = null,
    Fo = !1;
  function Bu(e, t, s) {
    var l =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Fo ||
      Yn == null ||
      Yn !== Le(l) ||
      ((l = Yn),
      "selectionStart" in l && Do(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (es && Zr(es, l)) ||
        ((es = l),
        (l = ri(Uo, "onSelect")),
        0 < l.length &&
          ((t = new Po("onSelect", "select", null, t, s)),
          e.push({ event: t, listeners: l }),
          (t.target = Yn))));
  }
  function ei(e, t) {
    var s = {};
    return (
      (s[e.toLowerCase()] = t.toLowerCase()),
      (s["Webkit" + e] = "webkit" + t),
      (s["Moz" + e] = "moz" + t),
      s
    );
  }
  var Xn = {
      animationend: ei("Animation", "AnimationEnd"),
      animationiteration: ei("Animation", "AnimationIteration"),
      animationstart: ei("Animation", "AnimationStart"),
      transitionend: ei("Transition", "TransitionEnd"),
    },
    Mo = {},
    Vu = {};
  p &&
    ((Vu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Xn.animationend.animation,
      delete Xn.animationiteration.animation,
      delete Xn.animationstart.animation),
    "TransitionEvent" in window || delete Xn.transitionend.transition);
  function ti(e) {
    if (Mo[e]) return Mo[e];
    if (!Xn[e]) return e;
    var t = Xn[e],
      s;
    for (s in t) if (t.hasOwnProperty(s) && s in Vu) return (Mo[e] = t[s]);
    return e;
  }
  var Wu = ti("animationend"),
    Hu = ti("animationiteration"),
    Ku = ti("animationstart"),
    qu = ti("transitionend"),
    Ju = new Map(),
    Gu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function an(e, t) {
    Ju.set(e, t), u(t, [e]);
  }
  for (var zo = 0; zo < Gu.length; zo++) {
    var Bo = Gu[zo],
      Op = Bo.toLowerCase(),
      Tp = Bo[0].toUpperCase() + Bo.slice(1);
    an(Op, "on" + Tp);
  }
  an(Wu, "onAnimationEnd"),
    an(Hu, "onAnimationIteration"),
    an(Ku, "onAnimationStart"),
    an("dblclick", "onDoubleClick"),
    an("focusin", "onFocus"),
    an("focusout", "onBlur"),
    an(qu, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ts =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Lp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ts)
    );
  function Qu(e, t, s) {
    var l = e.type || "unknown-event";
    (e.currentTarget = s), Oh(l, t, void 0, e), (e.currentTarget = null);
  }
  function Yu(e, t) {
    t = (t & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var l = e[s],
        c = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = l.length - 1; 0 <= y; y--) {
            var b = l[y],
              k = b.instance,
              T = b.currentTarget;
            if (((b = b.listener), k !== f && c.isPropagationStopped()))
              break e;
            Qu(c, b, T), (f = k);
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((b = l[y]),
              (k = b.instance),
              (T = b.currentTarget),
              (b = b.listener),
              k !== f && c.isPropagationStopped())
            )
              break e;
            Qu(c, b, T), (f = k);
          }
      }
    }
    if (Fs) throw ((e = xo), (Fs = !1), (xo = null), e);
  }
  function Oe(e, t) {
    var s = t[Qo];
    s === void 0 && (s = t[Qo] = new Set());
    var l = e + "__bubble";
    s.has(l) || (Xu(t, e, 2, !1), s.add(l));
  }
  function Vo(e, t, s) {
    var l = 0;
    t && (l |= 4), Xu(s, e, l, t);
  }
  var ni = "_reactListening" + Math.random().toString(36).slice(2);
  function ns(e) {
    if (!e[ni]) {
      (e[ni] = !0),
        i.forEach(function (s) {
          s !== "selectionchange" && (Lp.has(s) || Vo(s, !1, e), Vo(s, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ni] || ((t[ni] = !0), Vo("selectionchange", !1, t));
    }
  }
  function Xu(e, t, s, l) {
    switch (bu(t)) {
      case 1:
        var c = Kh;
        break;
      case 4:
        c = qh;
        break;
      default:
        c = Co;
    }
    (s = c.bind(null, t, s, e)),
      (c = void 0),
      !yo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, s, { capture: !0, passive: c })
          : e.addEventListener(t, s, !0)
        : c !== void 0
        ? e.addEventListener(t, s, { passive: c })
        : e.addEventListener(t, s, !1);
  }
  function Wo(e, t, s, l, c) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var b = l.stateNode.containerInfo;
          if (b === c || (b.nodeType === 8 && b.parentNode === c)) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var k = y.tag;
              if (
                (k === 3 || k === 4) &&
                ((k = y.stateNode.containerInfo),
                k === c || (k.nodeType === 8 && k.parentNode === c))
              )
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (((y = Nn(b)), y === null)) return;
            if (((k = y.tag), k === 5 || k === 6)) {
              l = f = y;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    ru(function () {
      var T = f,
        z = mo(s),
        V = [];
      e: {
        var F = Ju.get(e);
        if (F !== void 0) {
          var G = Po,
            Z = e;
          switch (e) {
            case "keypress":
              if (Qs(s) === 0) break e;
            case "keydown":
            case "keyup":
              G = lp;
              break;
            case "focusin":
              (Z = "focus"), (G = Lo);
              break;
            case "focusout":
              (Z = "blur"), (G = Lo);
              break;
            case "beforeblur":
            case "afterblur":
              G = Lo;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Qh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = dp;
              break;
            case Wu:
            case Hu:
            case Ku:
              G = Zh;
              break;
            case qu:
              G = hp;
              break;
            case "scroll":
              G = Jh;
              break;
            case "wheel":
              G = mp;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = tp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Cu;
          }
          var ee = (t & 4) !== 0,
            ze = !ee && e === "scroll",
            E = ee ? (F !== null ? F + "Capture" : null) : F;
          ee = [];
          for (var N = T, O; N !== null; ) {
            O = N;
            var H = O.stateNode;
            if (
              (O.tag === 5 &&
                H !== null &&
                ((O = H),
                E !== null &&
                  ((H = Ur(N, E)), H != null && ee.push(rs(N, H, O)))),
              ze)
            )
              break;
            N = N.return;
          }
          0 < ee.length &&
            ((F = new G(F, Z, null, s, z)),
            V.push({ event: F, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (G = e === "mouseout" || e === "pointerout"),
            F &&
              s !== po &&
              (Z = s.relatedTarget || s.fromElement) &&
              (Nn(Z) || Z[Vt]))
          )
            break e;
          if (
            (G || F) &&
            ((F =
              z.window === z
                ? z
                : (F = z.ownerDocument)
                ? F.defaultView || F.parentWindow
                : window),
            G
              ? ((Z = s.relatedTarget || s.toElement),
                (G = T),
                (Z = Z ? Nn(Z) : null),
                Z !== null &&
                  ((ze = Cn(Z)), Z !== ze || (Z.tag !== 5 && Z.tag !== 6)) &&
                  (Z = null))
              : ((G = null), (Z = T)),
            G !== Z)
          ) {
            if (
              ((ee = ku),
              (H = "onMouseLeave"),
              (E = "onMouseEnter"),
              (N = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ee = Cu),
                (H = "onPointerLeave"),
                (E = "onPointerEnter"),
                (N = "pointer")),
              (ze = G == null ? F : tr(G)),
              (O = Z == null ? F : tr(Z)),
              (F = new ee(H, N + "leave", G, s, z)),
              (F.target = ze),
              (F.relatedTarget = O),
              (H = null),
              Nn(z) === T &&
                ((ee = new ee(E, N + "enter", Z, s, z)),
                (ee.target = O),
                (ee.relatedTarget = ze),
                (H = ee)),
              (ze = H),
              G && Z)
            )
              t: {
                for (ee = G, E = Z, N = 0, O = ee; O; O = Zn(O)) N++;
                for (O = 0, H = E; H; H = Zn(H)) O++;
                for (; 0 < N - O; ) (ee = Zn(ee)), N--;
                for (; 0 < O - N; ) (E = Zn(E)), O--;
                for (; N--; ) {
                  if (ee === E || (E !== null && ee === E.alternate)) break t;
                  (ee = Zn(ee)), (E = Zn(E));
                }
                ee = null;
              }
            else ee = null;
            G !== null && Zu(V, F, G, ee, !1),
              Z !== null && ze !== null && Zu(V, ze, Z, ee, !0);
          }
        }
        e: {
          if (
            ((F = T ? tr(T) : window),
            (G = F.nodeName && F.nodeName.toLowerCase()),
            G === "select" || (G === "input" && F.type === "file"))
          )
            var te = _p;
          else if (Lu(F))
            if (Au) te = Cp;
            else {
              te = kp;
              var se = Sp;
            }
          else
            (G = F.nodeName) &&
              G.toLowerCase() === "input" &&
              (F.type === "checkbox" || F.type === "radio") &&
              (te = jp);
          if (te && (te = te(e, T))) {
            Ru(V, te, s, z);
            break e;
          }
          se && se(e, F, T),
            e === "focusout" &&
              (se = F._wrapperState) &&
              se.controlled &&
              F.type === "number" &&
              Ir(F, "number", F.value);
        }
        switch (((se = T ? tr(T) : window), e)) {
          case "focusin":
            (Lu(se) || se.contentEditable === "true") &&
              ((Yn = se), (Uo = T), (es = null));
            break;
          case "focusout":
            es = Uo = Yn = null;
            break;
          case "mousedown":
            Fo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Fo = !1), Bu(V, s, z);
            break;
          case "selectionchange":
            if (Pp) break;
          case "keydown":
          case "keyup":
            Bu(V, s, z);
        }
        var ie;
        if (Ao)
          e: {
            switch (e) {
              case "compositionstart":
                var le = "onCompositionStart";
                break e;
              case "compositionend":
                le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                le = "onCompositionUpdate";
                break e;
            }
            le = void 0;
          }
        else
          Qn
            ? Ou(e, s) && (le = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (le = "onCompositionStart");
        le &&
          (Nu &&
            s.locale !== "ko" &&
            (Qn || le !== "onCompositionStart"
              ? le === "onCompositionEnd" && Qn && (ie = _u())
              : ((on = z),
                (Eo = "value" in on ? on.value : on.textContent),
                (Qn = !0))),
          (se = ri(T, le)),
          0 < se.length &&
            ((le = new ju(le, e, null, s, z)),
            V.push({ event: le, listeners: se }),
            ie
              ? (le.data = ie)
              : ((ie = Tu(s)), ie !== null && (le.data = ie)))),
          (ie = vp ? yp(e, s) : xp(e, s)) &&
            ((T = ri(T, "onBeforeInput")),
            0 < T.length &&
              ((z = new ju("onBeforeInput", "beforeinput", null, s, z)),
              V.push({ event: z, listeners: T }),
              (z.data = ie)));
      }
      Yu(V, t);
    });
  }
  function rs(e, t, s) {
    return { instance: e, listener: t, currentTarget: s };
  }
  function ri(e, t) {
    for (var s = t + "Capture", l = []; e !== null; ) {
      var c = e,
        f = c.stateNode;
      c.tag === 5 &&
        f !== null &&
        ((c = f),
        (f = Ur(e, s)),
        f != null && l.unshift(rs(e, f, c)),
        (f = Ur(e, t)),
        f != null && l.push(rs(e, f, c))),
        (e = e.return);
    }
    return l;
  }
  function Zn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Zu(e, t, s, l, c) {
    for (var f = t._reactName, y = []; s !== null && s !== l; ) {
      var b = s,
        k = b.alternate,
        T = b.stateNode;
      if (k !== null && k === l) break;
      b.tag === 5 &&
        T !== null &&
        ((b = T),
        c
          ? ((k = Ur(s, f)), k != null && y.unshift(rs(s, k, b)))
          : c || ((k = Ur(s, f)), k != null && y.push(rs(s, k, b)))),
        (s = s.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var Rp = /\r\n?/g,
    Ap = /\u0000|\uFFFD/g;
  function ec(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Rp,
        `
`
      )
      .replace(Ap, "");
  }
  function si(e, t, s) {
    if (((t = ec(t)), ec(e) !== t && s)) throw Error(r(425));
  }
  function ii() {}
  var Ho = null,
    Ko = null;
  function qo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jo = typeof setTimeout == "function" ? setTimeout : void 0,
    Ip = typeof clearTimeout == "function" ? clearTimeout : void 0,
    tc = typeof Promise == "function" ? Promise : void 0,
    $p =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof tc < "u"
        ? function (e) {
            return tc.resolve(null).then(e).catch(Dp);
          }
        : Jo;
  function Dp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Go(e, t) {
    var s = t,
      l = 0;
    do {
      var c = s.nextSibling;
      if ((e.removeChild(s), c && c.nodeType === 8))
        if (((s = c.data), s === "/$")) {
          if (l === 0) {
            e.removeChild(c), qr(t);
            return;
          }
          l--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || l++;
      s = c;
    } while (s);
    qr(t);
  }
  function ln(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function nc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (t === 0) return e;
          t--;
        } else s === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var er = Math.random().toString(36).slice(2),
    Dt = "__reactFiber$" + er,
    ss = "__reactProps$" + er,
    Vt = "__reactContainer$" + er,
    Qo = "__reactEvents$" + er,
    Up = "__reactListeners$" + er,
    Fp = "__reactHandles$" + er;
  function Nn(e) {
    var t = e[Dt];
    if (t) return t;
    for (var s = e.parentNode; s; ) {
      if ((t = s[Vt] || s[Dt])) {
        if (
          ((s = t.alternate),
          t.child !== null || (s !== null && s.child !== null))
        )
          for (e = nc(e); e !== null; ) {
            if ((s = e[Dt])) return s;
            e = nc(e);
          }
        return t;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function is(e) {
    return (
      (e = e[Dt] || e[Vt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(r(33));
  }
  function oi(e) {
    return e[ss] || null;
  }
  var Yo = [],
    nr = -1;
  function un(e) {
    return { current: e };
  }
  function Te(e) {
    0 > nr || ((e.current = Yo[nr]), (Yo[nr] = null), nr--);
  }
  function Ne(e, t) {
    nr++, (Yo[nr] = e.current), (e.current = t);
  }
  var cn = {},
    tt = un(cn),
    at = un(!1),
    En = cn;
  function rr(e, t) {
    var s = e.type.contextTypes;
    if (!s) return cn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      f;
    for (f in s) c[f] = t[f];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function lt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ai() {
    Te(at), Te(tt);
  }
  function rc(e, t, s) {
    if (tt.current !== cn) throw Error(r(168));
    Ne(tt, t), Ne(at, s);
  }
  function sc(e, t, s) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
      return s;
    l = l.getChildContext();
    for (var c in l) if (!(c in t)) throw Error(r(108, be(e) || "Unknown", c));
    return D({}, s, l);
  }
  function li(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        cn),
      (En = tt.current),
      Ne(tt, e),
      Ne(at, at.current),
      !0
    );
  }
  function ic(e, t, s) {
    var l = e.stateNode;
    if (!l) throw Error(r(169));
    s
      ? ((e = sc(e, t, En)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        Te(at),
        Te(tt),
        Ne(tt, e))
      : Te(at),
      Ne(at, s);
  }
  var Wt = null,
    ui = !1,
    Xo = !1;
  function oc(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
  }
  function Mp(e) {
    (ui = !0), oc(e);
  }
  function dn() {
    if (!Xo && Wt !== null) {
      Xo = !0;
      var e = 0,
        t = ke;
      try {
        var s = Wt;
        for (ke = 1; e < s.length; e++) {
          var l = s[e];
          do l = l(!0);
          while (l !== null);
        }
        (Wt = null), (ui = !1);
      } catch (c) {
        throw (Wt !== null && (Wt = Wt.slice(e + 1)), lu(wo, dn), c);
      } finally {
        (ke = t), (Xo = !1);
      }
    }
    return null;
  }
  var sr = [],
    ir = 0,
    ci = null,
    di = 0,
    xt = [],
    wt = 0,
    Pn = null,
    Ht = 1,
    Kt = "";
  function On(e, t) {
    (sr[ir++] = di), (sr[ir++] = ci), (ci = e), (di = t);
  }
  function ac(e, t, s) {
    (xt[wt++] = Ht), (xt[wt++] = Kt), (xt[wt++] = Pn), (Pn = e);
    var l = Ht;
    e = Kt;
    var c = 32 - jt(l) - 1;
    (l &= ~(1 << c)), (s += 1);
    var f = 32 - jt(t) + c;
    if (30 < f) {
      var y = c - (c % 5);
      (f = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (c -= y),
        (Ht = (1 << (32 - jt(t) + c)) | (s << c) | l),
        (Kt = f + e);
    } else (Ht = (1 << f) | (s << c) | l), (Kt = e);
  }
  function Zo(e) {
    e.return !== null && (On(e, 1), ac(e, 1, 0));
  }
  function ea(e) {
    for (; e === ci; )
      (ci = sr[--ir]), (sr[ir] = null), (di = sr[--ir]), (sr[ir] = null);
    for (; e === Pn; )
      (Pn = xt[--wt]),
        (xt[wt] = null),
        (Kt = xt[--wt]),
        (xt[wt] = null),
        (Ht = xt[--wt]),
        (xt[wt] = null);
  }
  var gt = null,
    vt = null,
    Re = !1,
    Nt = null;
  function lc(e, t) {
    var s = kt(5, null, null, 0);
    (s.elementType = "DELETED"),
      (s.stateNode = t),
      (s.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [s]), (e.flags |= 16)) : t.push(s);
  }
  function uc(e, t) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return (
          (t =
            t.nodeType !== 1 || s.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (gt = e), (vt = ln(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (gt = e), (vt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((s = Pn !== null ? { id: Ht, overflow: Kt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: s,
                retryLane: 1073741824,
              }),
              (s = kt(18, null, null, 0)),
              (s.stateNode = t),
              (s.return = e),
              (e.child = s),
              (gt = e),
              (vt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ta(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function na(e) {
    if (Re) {
      var t = vt;
      if (t) {
        var s = t;
        if (!uc(e, t)) {
          if (ta(e)) throw Error(r(418));
          t = ln(s.nextSibling);
          var l = gt;
          t && uc(e, t)
            ? lc(l, s)
            : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (gt = e));
        }
      } else {
        if (ta(e)) throw Error(r(418));
        (e.flags = (e.flags & -4097) | 2), (Re = !1), (gt = e);
      }
    }
  }
  function cc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    gt = e;
  }
  function fi(e) {
    if (e !== gt) return !1;
    if (!Re) return cc(e), (Re = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !qo(e.type, e.memoizedProps))),
      t && (t = vt))
    ) {
      if (ta(e)) throw (dc(), Error(r(418)));
      for (; t; ) lc(e, t), (t = ln(t.nextSibling));
    }
    if ((cc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (t === 0) {
                vt = ln(e.nextSibling);
                break e;
              }
              t--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        vt = null;
      }
    } else vt = gt ? ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function dc() {
    for (var e = vt; e; ) e = ln(e.nextSibling);
  }
  function or() {
    (vt = gt = null), (Re = !1);
  }
  function ra(e) {
    Nt === null ? (Nt = [e]) : Nt.push(e);
  }
  var zp = R.ReactCurrentBatchConfig;
  function os(e, t, s) {
    if (
      ((e = s.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (s._owner) {
        if (((s = s._owner), s)) {
          if (s.tag !== 1) throw Error(r(309));
          var l = s.stateNode;
        }
        if (!l) throw Error(r(147, e));
        var c = l,
          f = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === f
          ? t.ref
          : ((t = function (y) {
              var b = c.refs;
              y === null ? delete b[f] : (b[f] = y);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != "string") throw Error(r(284));
      if (!s._owner) throw Error(r(290, e));
    }
    return e;
  }
  function hi(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        r(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function fc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hc(e) {
    function t(E, N) {
      if (e) {
        var O = E.deletions;
        O === null ? ((E.deletions = [N]), (E.flags |= 16)) : O.push(N);
      }
    }
    function s(E, N) {
      if (!e) return null;
      for (; N !== null; ) t(E, N), (N = N.sibling);
      return null;
    }
    function l(E, N) {
      for (E = new Map(); N !== null; )
        N.key !== null ? E.set(N.key, N) : E.set(N.index, N), (N = N.sibling);
      return E;
    }
    function c(E, N) {
      return (E = xn(E, N)), (E.index = 0), (E.sibling = null), E;
    }
    function f(E, N, O) {
      return (
        (E.index = O),
        e
          ? ((O = E.alternate),
            O !== null
              ? ((O = O.index), O < N ? ((E.flags |= 2), N) : O)
              : ((E.flags |= 2), N))
          : ((E.flags |= 1048576), N)
      );
    }
    function y(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function b(E, N, O, H) {
      return N === null || N.tag !== 6
        ? ((N = Ja(O, E.mode, H)), (N.return = E), N)
        : ((N = c(N, O)), (N.return = E), N);
    }
    function k(E, N, O, H) {
      var te = O.type;
      return te === M
        ? z(E, N, O.props.children, H, O.key)
        : N !== null &&
          (N.elementType === te ||
            (typeof te == "object" &&
              te !== null &&
              te.$$typeof === Se &&
              fc(te) === N.type))
        ? ((H = c(N, O.props)), (H.ref = os(E, N, O)), (H.return = E), H)
        : ((H = Di(O.type, O.key, O.props, null, E.mode, H)),
          (H.ref = os(E, N, O)),
          (H.return = E),
          H);
    }
    function T(E, N, O, H) {
      return N === null ||
        N.tag !== 4 ||
        N.stateNode.containerInfo !== O.containerInfo ||
        N.stateNode.implementation !== O.implementation
        ? ((N = Ga(O, E.mode, H)), (N.return = E), N)
        : ((N = c(N, O.children || [])), (N.return = E), N);
    }
    function z(E, N, O, H, te) {
      return N === null || N.tag !== 7
        ? ((N = Un(O, E.mode, H, te)), (N.return = E), N)
        : ((N = c(N, O)), (N.return = E), N);
    }
    function V(E, N, O) {
      if ((typeof N == "string" && N !== "") || typeof N == "number")
        return (N = Ja("" + N, E.mode, O)), (N.return = E), N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Q:
            return (
              (O = Di(N.type, N.key, N.props, null, E.mode, O)),
              (O.ref = os(E, null, N)),
              (O.return = E),
              O
            );
          case B:
            return (N = Ga(N, E.mode, O)), (N.return = E), N;
          case Se:
            var H = N._init;
            return V(E, H(N._payload), O);
        }
        if (jn(N) || U(N))
          return (N = Un(N, E.mode, O, null)), (N.return = E), N;
        hi(E, N);
      }
      return null;
    }
    function F(E, N, O, H) {
      var te = N !== null ? N.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return te !== null ? null : b(E, N, "" + O, H);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Q:
            return O.key === te ? k(E, N, O, H) : null;
          case B:
            return O.key === te ? T(E, N, O, H) : null;
          case Se:
            return (te = O._init), F(E, N, te(O._payload), H);
        }
        if (jn(O) || U(O)) return te !== null ? null : z(E, N, O, H, null);
        hi(E, O);
      }
      return null;
    }
    function G(E, N, O, H, te) {
      if ((typeof H == "string" && H !== "") || typeof H == "number")
        return (E = E.get(O) || null), b(N, E, "" + H, te);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Q:
            return (
              (E = E.get(H.key === null ? O : H.key) || null), k(N, E, H, te)
            );
          case B:
            return (
              (E = E.get(H.key === null ? O : H.key) || null), T(N, E, H, te)
            );
          case Se:
            var se = H._init;
            return G(E, N, O, se(H._payload), te);
        }
        if (jn(H) || U(H)) return (E = E.get(O) || null), z(N, E, H, te, null);
        hi(N, H);
      }
      return null;
    }
    function Z(E, N, O, H) {
      for (
        var te = null, se = null, ie = N, le = (N = 0), Ge = null;
        ie !== null && le < O.length;
        le++
      ) {
        ie.index > le ? ((Ge = ie), (ie = null)) : (Ge = ie.sibling);
        var _e = F(E, ie, O[le], H);
        if (_e === null) {
          ie === null && (ie = Ge);
          break;
        }
        e && ie && _e.alternate === null && t(E, ie),
          (N = f(_e, N, le)),
          se === null ? (te = _e) : (se.sibling = _e),
          (se = _e),
          (ie = Ge);
      }
      if (le === O.length) return s(E, ie), Re && On(E, le), te;
      if (ie === null) {
        for (; le < O.length; le++)
          (ie = V(E, O[le], H)),
            ie !== null &&
              ((N = f(ie, N, le)),
              se === null ? (te = ie) : (se.sibling = ie),
              (se = ie));
        return Re && On(E, le), te;
      }
      for (ie = l(E, ie); le < O.length; le++)
        (Ge = G(ie, E, le, O[le], H)),
          Ge !== null &&
            (e &&
              Ge.alternate !== null &&
              ie.delete(Ge.key === null ? le : Ge.key),
            (N = f(Ge, N, le)),
            se === null ? (te = Ge) : (se.sibling = Ge),
            (se = Ge));
      return (
        e &&
          ie.forEach(function (wn) {
            return t(E, wn);
          }),
        Re && On(E, le),
        te
      );
    }
    function ee(E, N, O, H) {
      var te = U(O);
      if (typeof te != "function") throw Error(r(150));
      if (((O = te.call(O)), O == null)) throw Error(r(151));
      for (
        var se = (te = null), ie = N, le = (N = 0), Ge = null, _e = O.next();
        ie !== null && !_e.done;
        le++, _e = O.next()
      ) {
        ie.index > le ? ((Ge = ie), (ie = null)) : (Ge = ie.sibling);
        var wn = F(E, ie, _e.value, H);
        if (wn === null) {
          ie === null && (ie = Ge);
          break;
        }
        e && ie && wn.alternate === null && t(E, ie),
          (N = f(wn, N, le)),
          se === null ? (te = wn) : (se.sibling = wn),
          (se = wn),
          (ie = Ge);
      }
      if (_e.done) return s(E, ie), Re && On(E, le), te;
      if (ie === null) {
        for (; !_e.done; le++, _e = O.next())
          (_e = V(E, _e.value, H)),
            _e !== null &&
              ((N = f(_e, N, le)),
              se === null ? (te = _e) : (se.sibling = _e),
              (se = _e));
        return Re && On(E, le), te;
      }
      for (ie = l(E, ie); !_e.done; le++, _e = O.next())
        (_e = G(ie, E, le, _e.value, H)),
          _e !== null &&
            (e &&
              _e.alternate !== null &&
              ie.delete(_e.key === null ? le : _e.key),
            (N = f(_e, N, le)),
            se === null ? (te = _e) : (se.sibling = _e),
            (se = _e));
      return (
        e &&
          ie.forEach(function (wm) {
            return t(E, wm);
          }),
        Re && On(E, le),
        te
      );
    }
    function ze(E, N, O, H) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === M &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case Q:
            e: {
              for (var te = O.key, se = N; se !== null; ) {
                if (se.key === te) {
                  if (((te = O.type), te === M)) {
                    if (se.tag === 7) {
                      s(E, se.sibling),
                        (N = c(se, O.props.children)),
                        (N.return = E),
                        (E = N);
                      break e;
                    }
                  } else if (
                    se.elementType === te ||
                    (typeof te == "object" &&
                      te !== null &&
                      te.$$typeof === Se &&
                      fc(te) === se.type)
                  ) {
                    s(E, se.sibling),
                      (N = c(se, O.props)),
                      (N.ref = os(E, se, O)),
                      (N.return = E),
                      (E = N);
                    break e;
                  }
                  s(E, se);
                  break;
                } else t(E, se);
                se = se.sibling;
              }
              O.type === M
                ? ((N = Un(O.props.children, E.mode, H, O.key)),
                  (N.return = E),
                  (E = N))
                : ((H = Di(O.type, O.key, O.props, null, E.mode, H)),
                  (H.ref = os(E, N, O)),
                  (H.return = E),
                  (E = H));
            }
            return y(E);
          case B:
            e: {
              for (se = O.key; N !== null; ) {
                if (N.key === se)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === O.containerInfo &&
                    N.stateNode.implementation === O.implementation
                  ) {
                    s(E, N.sibling),
                      (N = c(N, O.children || [])),
                      (N.return = E),
                      (E = N);
                    break e;
                  } else {
                    s(E, N);
                    break;
                  }
                else t(E, N);
                N = N.sibling;
              }
              (N = Ga(O, E.mode, H)), (N.return = E), (E = N);
            }
            return y(E);
          case Se:
            return (se = O._init), ze(E, N, se(O._payload), H);
        }
        if (jn(O)) return Z(E, N, O, H);
        if (U(O)) return ee(E, N, O, H);
        hi(E, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          N !== null && N.tag === 6
            ? (s(E, N.sibling), (N = c(N, O)), (N.return = E), (E = N))
            : (s(E, N), (N = Ja(O, E.mode, H)), (N.return = E), (E = N)),
          y(E))
        : s(E, N);
    }
    return ze;
  }
  var ar = hc(!0),
    pc = hc(!1),
    pi = un(null),
    mi = null,
    lr = null,
    sa = null;
  function ia() {
    sa = lr = mi = null;
  }
  function oa(e) {
    var t = pi.current;
    Te(pi), (e._currentValue = t);
  }
  function aa(e, t, s) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function ur(e, t) {
    (mi = e),
      (sa = lr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ut = !0), (e.firstContext = null));
  }
  function bt(e) {
    var t = e._currentValue;
    if (sa !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), lr === null)) {
        if (mi === null) throw Error(r(308));
        (lr = e), (mi.dependencies = { lanes: 0, firstContext: e });
      } else lr = lr.next = e;
    return t;
  }
  var Tn = null;
  function la(e) {
    Tn === null ? (Tn = [e]) : Tn.push(e);
  }
  function mc(e, t, s, l) {
    var c = t.interleaved;
    return (
      c === null ? ((s.next = s), la(t)) : ((s.next = c.next), (c.next = s)),
      (t.interleaved = s),
      qt(e, l)
    );
  }
  function qt(e, t) {
    e.lanes |= t;
    var s = e.alternate;
    for (s !== null && (s.lanes |= t), s = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (s = e.alternate),
        s !== null && (s.childLanes |= t),
        (s = e),
        (e = e.return);
    return s.tag === 3 ? s.stateNode : null;
  }
  var fn = !1;
  function ua(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function gc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Jt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function hn(e, t, s) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (we & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (l.pending = t),
        qt(e, s)
      );
    }
    return (
      (c = l.interleaved),
      c === null ? ((t.next = t), la(l)) : ((t.next = c.next), (c.next = t)),
      (l.interleaved = t),
      qt(e, s)
    );
  }
  function gi(e, t, s) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (s & 4194240) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (s |= l), (t.lanes = s), So(e, s);
    }
  }
  function vc(e, t) {
    var s = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), s === l)) {
      var c = null,
        f = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var y = {
            eventTime: s.eventTime,
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          };
          f === null ? (c = f = y) : (f = f.next = y), (s = s.next);
        } while (s !== null);
        f === null ? (c = f = t) : (f = f.next = t);
      } else c = f = t;
      (s = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = s);
      return;
    }
    (e = s.lastBaseUpdate),
      e === null ? (s.firstBaseUpdate = t) : (e.next = t),
      (s.lastBaseUpdate = t);
  }
  function vi(e, t, s, l) {
    var c = e.updateQueue;
    fn = !1;
    var f = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var k = b,
        T = k.next;
      (k.next = null), y === null ? (f = T) : (y.next = T), (y = k);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (b = z.lastBaseUpdate),
        b !== y &&
          (b === null ? (z.firstBaseUpdate = T) : (b.next = T),
          (z.lastBaseUpdate = k)));
    }
    if (f !== null) {
      var V = c.baseState;
      (y = 0), (z = T = k = null), (b = f);
      do {
        var F = b.lane,
          G = b.eventTime;
        if ((l & F) === F) {
          z !== null &&
            (z = z.next =
              {
                eventTime: G,
                lane: 0,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null,
              });
          e: {
            var Z = e,
              ee = b;
            switch (((F = t), (G = s), ee.tag)) {
              case 1:
                if (((Z = ee.payload), typeof Z == "function")) {
                  V = Z.call(G, V, F);
                  break e;
                }
                V = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = ee.payload),
                  (F = typeof Z == "function" ? Z.call(G, V, F) : Z),
                  F == null)
                )
                  break e;
                V = D({}, V, F);
                break e;
              case 2:
                fn = !0;
            }
          }
          b.callback !== null &&
            b.lane !== 0 &&
            ((e.flags |= 64),
            (F = c.effects),
            F === null ? (c.effects = [b]) : F.push(b));
        } else
          (G = {
            eventTime: G,
            lane: F,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            z === null ? ((T = z = G), (k = V)) : (z = z.next = G),
            (y |= F);
        if (((b = b.next), b === null)) {
          if (((b = c.shared.pending), b === null)) break;
          (F = b),
            (b = F.next),
            (F.next = null),
            (c.lastBaseUpdate = F),
            (c.shared.pending = null);
        }
      } while (!0);
      if (
        (z === null && (k = V),
        (c.baseState = k),
        (c.firstBaseUpdate = T),
        (c.lastBaseUpdate = z),
        (t = c.shared.interleaved),
        t !== null)
      ) {
        c = t;
        do (y |= c.lane), (c = c.next);
        while (c !== t);
      } else f === null && (c.shared.lanes = 0);
      (An |= y), (e.lanes = y), (e.memoizedState = V);
    }
  }
  function yc(e, t, s) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          c = l.callback;
        if (c !== null) {
          if (((l.callback = null), (l = s), typeof c != "function"))
            throw Error(r(191, c));
          c.call(l);
        }
      }
  }
  var as = {},
    Ut = un(as),
    ls = un(as),
    us = un(as);
  function Ln(e) {
    if (e === as) throw Error(r(174));
    return e;
  }
  function ca(e, t) {
    switch ((Ne(us, t), Ne(ls, e), Ne(Ut, as), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : co(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = co(t, e));
    }
    Te(Ut), Ne(Ut, t);
  }
  function cr() {
    Te(Ut), Te(ls), Te(us);
  }
  function xc(e) {
    Ln(us.current);
    var t = Ln(Ut.current),
      s = co(t, e.type);
    t !== s && (Ne(ls, e), Ne(Ut, s));
  }
  function da(e) {
    ls.current === e && (Te(Ut), Te(ls));
  }
  var Ie = un(0);
  function yi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var s = t.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var fa = [];
  function ha() {
    for (var e = 0; e < fa.length; e++)
      fa[e]._workInProgressVersionPrimary = null;
    fa.length = 0;
  }
  var xi = R.ReactCurrentDispatcher,
    pa = R.ReactCurrentBatchConfig,
    Rn = 0,
    $e = null,
    We = null,
    qe = null,
    wi = !1,
    cs = !1,
    ds = 0,
    Bp = 0;
  function nt() {
    throw Error(r(321));
  }
  function ma(e, t) {
    if (t === null) return !1;
    for (var s = 0; s < t.length && s < e.length; s++)
      if (!Ct(e[s], t[s])) return !1;
    return !0;
  }
  function ga(e, t, s, l, c, f) {
    if (
      ((Rn = f),
      ($e = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (xi.current = e === null || e.memoizedState === null ? Kp : qp),
      (e = s(l, c)),
      cs)
    ) {
      f = 0;
      do {
        if (((cs = !1), (ds = 0), 25 <= f)) throw Error(r(301));
        (f += 1),
          (qe = We = null),
          (t.updateQueue = null),
          (xi.current = Jp),
          (e = s(l, c));
      } while (cs);
    }
    if (
      ((xi.current = Si),
      (t = We !== null && We.next !== null),
      (Rn = 0),
      (qe = We = $e = null),
      (wi = !1),
      t)
    )
      throw Error(r(300));
    return e;
  }
  function va() {
    var e = ds !== 0;
    return (ds = 0), e;
  }
  function Ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qe === null ? ($e.memoizedState = qe = e) : (qe = qe.next = e), qe;
  }
  function _t() {
    if (We === null) {
      var e = $e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = qe === null ? $e.memoizedState : qe.next;
    if (t !== null) (qe = t), (We = e);
    else {
      if (e === null) throw Error(r(310));
      (We = e),
        (e = {
          memoizedState: We.memoizedState,
          baseState: We.baseState,
          baseQueue: We.baseQueue,
          queue: We.queue,
          next: null,
        }),
        qe === null ? ($e.memoizedState = qe = e) : (qe = qe.next = e);
    }
    return qe;
  }
  function fs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ya(e) {
    var t = _t(),
      s = t.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = e;
    var l = We,
      c = l.baseQueue,
      f = s.pending;
    if (f !== null) {
      if (c !== null) {
        var y = c.next;
        (c.next = f.next), (f.next = y);
      }
      (l.baseQueue = c = f), (s.pending = null);
    }
    if (c !== null) {
      (f = c.next), (l = l.baseState);
      var b = (y = null),
        k = null,
        T = f;
      do {
        var z = T.lane;
        if ((Rn & z) === z)
          k !== null &&
            (k = k.next =
              {
                lane: 0,
                action: T.action,
                hasEagerState: T.hasEagerState,
                eagerState: T.eagerState,
                next: null,
              }),
            (l = T.hasEagerState ? T.eagerState : e(l, T.action));
        else {
          var V = {
            lane: z,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          };
          k === null ? ((b = k = V), (y = l)) : (k = k.next = V),
            ($e.lanes |= z),
            (An |= z);
        }
        T = T.next;
      } while (T !== null && T !== f);
      k === null ? (y = l) : (k.next = b),
        Ct(l, t.memoizedState) || (ut = !0),
        (t.memoizedState = l),
        (t.baseState = y),
        (t.baseQueue = k),
        (s.lastRenderedState = l);
    }
    if (((e = s.interleaved), e !== null)) {
      c = e;
      do (f = c.lane), ($e.lanes |= f), (An |= f), (c = c.next);
      while (c !== e);
    } else c === null && (s.lanes = 0);
    return [t.memoizedState, s.dispatch];
  }
  function xa(e) {
    var t = _t(),
      s = t.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = e;
    var l = s.dispatch,
      c = s.pending,
      f = t.memoizedState;
    if (c !== null) {
      s.pending = null;
      var y = (c = c.next);
      do (f = e(f, y.action)), (y = y.next);
      while (y !== c);
      Ct(f, t.memoizedState) || (ut = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (s.lastRenderedState = f);
    }
    return [f, l];
  }
  function wc() {}
  function bc(e, t) {
    var s = $e,
      l = _t(),
      c = t(),
      f = !Ct(l.memoizedState, c);
    if (
      (f && ((l.memoizedState = c), (ut = !0)),
      (l = l.queue),
      wa(kc.bind(null, s, l, e), [e]),
      l.getSnapshot !== t || f || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        hs(9, Sc.bind(null, s, l, c, t), void 0, null),
        Je === null)
      )
        throw Error(r(349));
      (Rn & 30) !== 0 || _c(s, t, c);
    }
    return c;
  }
  function _c(e, t, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: s }),
      (t = $e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          ($e.updateQueue = t),
          (t.stores = [e]))
        : ((s = t.stores), s === null ? (t.stores = [e]) : s.push(e));
  }
  function Sc(e, t, s, l) {
    (t.value = s), (t.getSnapshot = l), jc(t) && Cc(e);
  }
  function kc(e, t, s) {
    return s(function () {
      jc(t) && Cc(e);
    });
  }
  function jc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var s = t();
      return !Ct(e, s);
    } catch {
      return !0;
    }
  }
  function Cc(e) {
    var t = qt(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function Nc(e) {
    var t = Ft();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fs,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Hp.bind(null, $e, e)),
      [t.memoizedState, e]
    );
  }
  function hs(e, t, s, l) {
    return (
      (e = { tag: e, create: t, destroy: s, deps: l, next: null }),
      (t = $e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          ($e.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((s = t.lastEffect),
          s === null
            ? (t.lastEffect = e.next = e)
            : ((l = s.next), (s.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function Ec() {
    return _t().memoizedState;
  }
  function bi(e, t, s, l) {
    var c = Ft();
    ($e.flags |= e),
      (c.memoizedState = hs(1 | t, s, void 0, l === void 0 ? null : l));
  }
  function _i(e, t, s, l) {
    var c = _t();
    l = l === void 0 ? null : l;
    var f = void 0;
    if (We !== null) {
      var y = We.memoizedState;
      if (((f = y.destroy), l !== null && ma(l, y.deps))) {
        c.memoizedState = hs(t, s, f, l);
        return;
      }
    }
    ($e.flags |= e), (c.memoizedState = hs(1 | t, s, f, l));
  }
  function Pc(e, t) {
    return bi(8390656, 8, e, t);
  }
  function wa(e, t) {
    return _i(2048, 8, e, t);
  }
  function Oc(e, t) {
    return _i(4, 2, e, t);
  }
  function Tc(e, t) {
    return _i(4, 4, e, t);
  }
  function Lc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Rc(e, t, s) {
    return (
      (s = s != null ? s.concat([e]) : null), _i(4, 4, Lc.bind(null, t, e), s)
    );
  }
  function ba() {}
  function Ac(e, t) {
    var s = _t();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return l !== null && t !== null && ma(t, l[1])
      ? l[0]
      : ((s.memoizedState = [e, t]), e);
  }
  function Ic(e, t) {
    var s = _t();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return l !== null && t !== null && ma(t, l[1])
      ? l[0]
      : ((e = e()), (s.memoizedState = [e, t]), e);
  }
  function $c(e, t, s) {
    return (Rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = s))
      : (Ct(s, t) ||
          ((s = fu()), ($e.lanes |= s), (An |= s), (e.baseState = !0)),
        t);
  }
  function Vp(e, t) {
    var s = ke;
    (ke = s !== 0 && 4 > s ? s : 4), e(!0);
    var l = pa.transition;
    pa.transition = {};
    try {
      e(!1), t();
    } finally {
      (ke = s), (pa.transition = l);
    }
  }
  function Dc() {
    return _t().memoizedState;
  }
  function Wp(e, t, s) {
    var l = vn(e);
    if (
      ((s = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Uc(e))
    )
      Fc(t, s);
    else if (((s = mc(e, t, s, l)), s !== null)) {
      var c = ot();
      Tt(s, e, l, c), Mc(s, t, l);
    }
  }
  function Hp(e, t, s) {
    var l = vn(e),
      c = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Uc(e)) Fc(t, c);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            b = f(y, s);
          if (((c.hasEagerState = !0), (c.eagerState = b), Ct(b, y))) {
            var k = t.interleaved;
            k === null
              ? ((c.next = c), la(t))
              : ((c.next = k.next), (k.next = c)),
              (t.interleaved = c);
            return;
          }
        } catch {
        } finally {
        }
      (s = mc(e, t, c, l)),
        s !== null && ((c = ot()), Tt(s, e, l, c), Mc(s, t, l));
    }
  }
  function Uc(e) {
    var t = e.alternate;
    return e === $e || (t !== null && t === $e);
  }
  function Fc(e, t) {
    cs = wi = !0;
    var s = e.pending;
    s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (e.pending = t);
  }
  function Mc(e, t, s) {
    if ((s & 4194240) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (s |= l), (t.lanes = s), So(e, s);
    }
  }
  var Si = {
      readContext: bt,
      useCallback: nt,
      useContext: nt,
      useEffect: nt,
      useImperativeHandle: nt,
      useInsertionEffect: nt,
      useLayoutEffect: nt,
      useMemo: nt,
      useReducer: nt,
      useRef: nt,
      useState: nt,
      useDebugValue: nt,
      useDeferredValue: nt,
      useTransition: nt,
      useMutableSource: nt,
      useSyncExternalStore: nt,
      useId: nt,
      unstable_isNewReconciler: !1,
    },
    Kp = {
      readContext: bt,
      useCallback: function (e, t) {
        return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: bt,
      useEffect: Pc,
      useImperativeHandle: function (e, t, s) {
        return (
          (s = s != null ? s.concat([e]) : null),
          bi(4194308, 4, Lc.bind(null, t, e), s)
        );
      },
      useLayoutEffect: function (e, t) {
        return bi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return bi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var s = Ft();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (s.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, s) {
        var l = Ft();
        return (
          (t = s !== void 0 ? s(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = Wp.bind(null, $e, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ft();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Nc,
      useDebugValue: ba,
      useDeferredValue: function (e) {
        return (Ft().memoizedState = e);
      },
      useTransition: function () {
        var e = Nc(!1),
          t = e[0];
        return (e = Vp.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, s) {
        var l = $e,
          c = Ft();
        if (Re) {
          if (s === void 0) throw Error(r(407));
          s = s();
        } else {
          if (((s = t()), Je === null)) throw Error(r(349));
          (Rn & 30) !== 0 || _c(l, t, s);
        }
        c.memoizedState = s;
        var f = { value: s, getSnapshot: t };
        return (
          (c.queue = f),
          Pc(kc.bind(null, l, f, e), [e]),
          (l.flags |= 2048),
          hs(9, Sc.bind(null, l, f, s, t), void 0, null),
          s
        );
      },
      useId: function () {
        var e = Ft(),
          t = Je.identifierPrefix;
        if (Re) {
          var s = Kt,
            l = Ht;
          (s = (l & ~(1 << (32 - jt(l) - 1))).toString(32) + s),
            (t = ":" + t + "R" + s),
            (s = ds++),
            0 < s && (t += "H" + s.toString(32)),
            (t += ":");
        } else (s = Bp++), (t = ":" + t + "r" + s.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    qp = {
      readContext: bt,
      useCallback: Ac,
      useContext: bt,
      useEffect: wa,
      useImperativeHandle: Rc,
      useInsertionEffect: Oc,
      useLayoutEffect: Tc,
      useMemo: Ic,
      useReducer: ya,
      useRef: Ec,
      useState: function () {
        return ya(fs);
      },
      useDebugValue: ba,
      useDeferredValue: function (e) {
        var t = _t();
        return $c(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = ya(fs)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: wc,
      useSyncExternalStore: bc,
      useId: Dc,
      unstable_isNewReconciler: !1,
    },
    Jp = {
      readContext: bt,
      useCallback: Ac,
      useContext: bt,
      useEffect: wa,
      useImperativeHandle: Rc,
      useInsertionEffect: Oc,
      useLayoutEffect: Tc,
      useMemo: Ic,
      useReducer: xa,
      useRef: Ec,
      useState: function () {
        return xa(fs);
      },
      useDebugValue: ba,
      useDeferredValue: function (e) {
        var t = _t();
        return We === null ? (t.memoizedState = e) : $c(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = xa(fs)[0],
          t = _t().memoizedState;
        return [e, t];
      },
      useMutableSource: wc,
      useSyncExternalStore: bc,
      useId: Dc,
      unstable_isNewReconciler: !1,
    };
  function Et(e, t) {
    if (e && e.defaultProps) {
      (t = D({}, t)), (e = e.defaultProps);
      for (var s in e) t[s] === void 0 && (t[s] = e[s]);
      return t;
    }
    return t;
  }
  function _a(e, t, s, l) {
    (t = e.memoizedState),
      (s = s(l, t)),
      (s = s == null ? t : D({}, t, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var ki = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Cn(e) === e : !1;
    },
    enqueueSetState: function (e, t, s) {
      e = e._reactInternals;
      var l = ot(),
        c = vn(e),
        f = Jt(l, c);
      (f.payload = t),
        s != null && (f.callback = s),
        (t = hn(e, f, c)),
        t !== null && (Tt(t, e, c, l), gi(t, e, c));
    },
    enqueueReplaceState: function (e, t, s) {
      e = e._reactInternals;
      var l = ot(),
        c = vn(e),
        f = Jt(l, c);
      (f.tag = 1),
        (f.payload = t),
        s != null && (f.callback = s),
        (t = hn(e, f, c)),
        t !== null && (Tt(t, e, c, l), gi(t, e, c));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var s = ot(),
        l = vn(e),
        c = Jt(s, l);
      (c.tag = 2),
        t != null && (c.callback = t),
        (t = hn(e, c, l)),
        t !== null && (Tt(t, e, l, s), gi(t, e, l));
    },
  };
  function zc(e, t, s, l, c, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, f, y)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Zr(s, l) || !Zr(c, f)
        : !0
    );
  }
  function Bc(e, t, s) {
    var l = !1,
      c = cn,
      f = t.contextType;
    return (
      typeof f == "object" && f !== null
        ? (f = bt(f))
        : ((c = lt(t) ? En : tt.current),
          (l = t.contextTypes),
          (f = (l = l != null) ? rr(e, c) : cn)),
      (t = new t(s, f)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ki),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = c),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function Vc(e, t, s, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(s, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(s, l),
      t.state !== e && ki.enqueueReplaceState(t, t.state, null);
  }
  function Sa(e, t, s, l) {
    var c = e.stateNode;
    (c.props = s), (c.state = e.memoizedState), (c.refs = {}), ua(e);
    var f = t.contextType;
    typeof f == "object" && f !== null
      ? (c.context = bt(f))
      : ((f = lt(t) ? En : tt.current), (c.context = rr(e, f))),
      (c.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == "function" && (_a(e, t, f, s), (c.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function" ||
        (typeof c.UNSAFE_componentWillMount != "function" &&
          typeof c.componentWillMount != "function") ||
        ((t = c.state),
        typeof c.componentWillMount == "function" && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == "function" &&
          c.UNSAFE_componentWillMount(),
        t !== c.state && ki.enqueueReplaceState(c, c.state, null),
        vi(e, s, c, l),
        (c.state = e.memoizedState)),
      typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function dr(e, t) {
    try {
      var s = "",
        l = t;
      do (s += me(l)), (l = l.return);
      while (l);
      var c = s;
    } catch (f) {
      c =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: c, digest: null };
  }
  function ka(e, t, s) {
    return { value: e, source: null, stack: s ?? null, digest: t ?? null };
  }
  function ja(e, t) {
    try {
      console.error(t.value);
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  var Gp = typeof WeakMap == "function" ? WeakMap : Map;
  function Wc(e, t, s) {
    (s = Jt(-1, s)), (s.tag = 3), (s.payload = { element: null });
    var l = t.value;
    return (
      (s.callback = function () {
        Ti || ((Ti = !0), (Ma = l)), ja(e, t);
      }),
      s
    );
  }
  function Hc(e, t, s) {
    (s = Jt(-1, s)), (s.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = t.value;
      (s.payload = function () {
        return l(c);
      }),
        (s.callback = function () {
          ja(e, t);
        });
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (s.callback = function () {
          ja(e, t),
            typeof l != "function" &&
              (mn === null ? (mn = new Set([this])) : mn.add(this));
          var y = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: y !== null ? y : "",
          });
        }),
      s
    );
  }
  function Kc(e, t, s) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Gp();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(s) || (c.add(s), (e = um.bind(null, e, t, s)), t.then(e, e));
  }
  function qc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Jc(e, t, s, l, c) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (s.flags |= 131072),
            (s.flags &= -52805),
            s.tag === 1 &&
              (s.alternate === null
                ? (s.tag = 17)
                : ((t = Jt(-1, 1)), (t.tag = 2), hn(s, t, 1))),
            (s.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = c), e);
  }
  var Qp = R.ReactCurrentOwner,
    ut = !1;
  function it(e, t, s, l) {
    t.child = e === null ? pc(t, null, s, l) : ar(t, e.child, s, l);
  }
  function Gc(e, t, s, l, c) {
    s = s.render;
    var f = t.ref;
    return (
      ur(t, c),
      (l = ga(e, t, s, l, f, c)),
      (s = va()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~c),
          Gt(e, t, c))
        : (Re && s && Zo(t), (t.flags |= 1), it(e, t, l, c), t.child)
    );
  }
  function Qc(e, t, s, l, c) {
    if (e === null) {
      var f = s.type;
      return typeof f == "function" &&
        !qa(f) &&
        f.defaultProps === void 0 &&
        s.compare === null &&
        s.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Yc(e, t, f, l, c))
        : ((e = Di(s.type, null, l, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), (e.lanes & c) === 0)) {
      var y = f.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Zr), s(y, l) && e.ref === t.ref)
      )
        return Gt(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = xn(f, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Yc(e, t, s, l, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Zr(f, l) && e.ref === t.ref)
        if (((ut = !1), (t.pendingProps = l = f), (e.lanes & c) !== 0))
          (e.flags & 131072) !== 0 && (ut = !0);
        else return (t.lanes = e.lanes), Gt(e, t, c);
    }
    return Ca(e, t, s, l, c);
  }
  function Xc(e, t, s) {
    var l = t.pendingProps,
      c = l.children,
      f = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ne(hr, yt),
          (yt |= s);
      else {
        if ((s & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | s : s),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ne(hr, yt),
            (yt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = f !== null ? f.baseLanes : s),
          Ne(hr, yt),
          (yt |= l);
      }
    else
      f !== null ? ((l = f.baseLanes | s), (t.memoizedState = null)) : (l = s),
        Ne(hr, yt),
        (yt |= l);
    return it(e, t, c, s), t.child;
  }
  function Zc(e, t) {
    var s = t.ref;
    ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ca(e, t, s, l, c) {
    var f = lt(s) ? En : tt.current;
    return (
      (f = rr(t, f)),
      ur(t, c),
      (s = ga(e, t, s, l, f, c)),
      (l = va()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~c),
          Gt(e, t, c))
        : (Re && l && Zo(t), (t.flags |= 1), it(e, t, s, c), t.child)
    );
  }
  function ed(e, t, s, l, c) {
    if (lt(s)) {
      var f = !0;
      li(t);
    } else f = !1;
    if ((ur(t, c), t.stateNode === null))
      Ci(e, t), Bc(t, s, l), Sa(t, s, l, c), (l = !0);
    else if (e === null) {
      var y = t.stateNode,
        b = t.memoizedProps;
      y.props = b;
      var k = y.context,
        T = s.contextType;
      typeof T == "object" && T !== null
        ? (T = bt(T))
        : ((T = lt(s) ? En : tt.current), (T = rr(t, T)));
      var z = s.getDerivedStateFromProps,
        V =
          typeof z == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function";
      V ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((b !== l || k !== T) && Vc(t, y, l, T)),
        (fn = !1);
      var F = t.memoizedState;
      (y.state = F),
        vi(t, l, y, c),
        (k = t.memoizedState),
        b !== l || F !== k || at.current || fn
          ? (typeof z == "function" && (_a(t, s, z, l), (k = t.memoizedState)),
            (b = fn || zc(t, s, b, l, F, k, T))
              ? (V ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof y.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = k)),
            (y.props = l),
            (y.state = k),
            (y.context = T),
            (l = b))
          : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (y = t.stateNode),
        gc(e, t),
        (b = t.memoizedProps),
        (T = t.type === t.elementType ? b : Et(t.type, b)),
        (y.props = T),
        (V = t.pendingProps),
        (F = y.context),
        (k = s.contextType),
        typeof k == "object" && k !== null
          ? (k = bt(k))
          : ((k = lt(s) ? En : tt.current), (k = rr(t, k)));
      var G = s.getDerivedStateFromProps;
      (z =
        typeof G == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function") ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((b !== V || F !== k) && Vc(t, y, l, k)),
        (fn = !1),
        (F = t.memoizedState),
        (y.state = F),
        vi(t, l, y, c);
      var Z = t.memoizedState;
      b !== V || F !== Z || at.current || fn
        ? (typeof G == "function" && (_a(t, s, G, l), (Z = t.memoizedState)),
          (T = fn || zc(t, s, T, l, F, Z, k) || !1)
            ? (z ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" &&
                  y.componentWillUpdate(l, Z, k),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(l, Z, k)),
              typeof y.componentDidUpdate == "function" && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (b === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (b === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = Z)),
          (y.props = l),
          (y.state = Z),
          (y.context = k),
          (l = T))
        : (typeof y.componentDidUpdate != "function" ||
            (b === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (b === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return Na(e, t, s, l, f, c);
  }
  function Na(e, t, s, l, c, f) {
    Zc(e, t);
    var y = (t.flags & 128) !== 0;
    if (!l && !y) return c && ic(t, s, !1), Gt(e, t, f);
    (l = t.stateNode), (Qp.current = t);
    var b =
      y && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = ar(t, e.child, null, f)), (t.child = ar(t, null, b, f)))
        : it(e, t, b, f),
      (t.memoizedState = l.state),
      c && ic(t, s, !0),
      t.child
    );
  }
  function td(e) {
    var t = e.stateNode;
    t.pendingContext
      ? rc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && rc(e, t.context, !1),
      ca(e, t.containerInfo);
  }
  function nd(e, t, s, l, c) {
    return or(), ra(c), (t.flags |= 256), it(e, t, s, l), t.child;
  }
  var Ea = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function rd(e, t, s) {
    var l = t.pendingProps,
      c = Ie.current,
      f = !1,
      y = (t.flags & 128) !== 0,
      b;
    if (
      ((b = y) ||
        (b = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0),
      b
        ? ((f = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (c |= 1),
      Ne(Ie, c & 1),
      e === null)
    )
      return (
        na(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((y = l.children),
            (e = l.fallback),
            f
              ? ((l = t.mode),
                (f = t.child),
                (y = { mode: "hidden", children: y }),
                (l & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = y))
                  : (f = Ui(y, l, 0, null)),
                (e = Un(e, l, s, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Pa(s)),
                (t.memoizedState = Ea),
                e)
              : Oa(t, y))
      );
    if (((c = e.memoizedState), c !== null && ((b = c.dehydrated), b !== null)))
      return Yp(e, t, y, l, b, c, s);
    if (f) {
      (f = l.fallback), (y = t.mode), (c = e.child), (b = c.sibling);
      var k = { mode: "hidden", children: l.children };
      return (
        (y & 1) === 0 && t.child !== c
          ? ((l = t.child),
            (l.childLanes = 0),
            (l.pendingProps = k),
            (t.deletions = null))
          : ((l = xn(c, k)), (l.subtreeFlags = c.subtreeFlags & 14680064)),
        b !== null ? (f = xn(b, f)) : ((f = Un(f, y, s, null)), (f.flags |= 2)),
        (f.return = t),
        (l.return = t),
        (l.sibling = f),
        (t.child = l),
        (l = f),
        (f = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Pa(s)
            : {
                baseLanes: y.baseLanes | s,
                cachePool: null,
                transitions: y.transitions,
              }),
        (f.memoizedState = y),
        (f.childLanes = e.childLanes & ~s),
        (t.memoizedState = Ea),
        l
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (l = xn(f, { mode: "visible", children: l.children })),
      (t.mode & 1) === 0 && (l.lanes = s),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((s = t.deletions),
        s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Oa(e, t) {
    return (
      (t = Ui({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ji(e, t, s, l) {
    return (
      l !== null && ra(l),
      ar(t, e.child, null, s),
      (e = Oa(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Yp(e, t, s, l, c, f, y) {
    if (s)
      return t.flags & 256
        ? ((t.flags &= -257), (l = ka(Error(r(422)))), ji(e, t, y, l))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((f = l.fallback),
          (c = t.mode),
          (l = Ui({ mode: "visible", children: l.children }, c, 0, null)),
          (f = Un(f, c, y, null)),
          (f.flags |= 2),
          (l.return = t),
          (f.return = t),
          (l.sibling = f),
          (t.child = l),
          (t.mode & 1) !== 0 && ar(t, e.child, null, y),
          (t.child.memoizedState = Pa(y)),
          (t.memoizedState = Ea),
          f);
    if ((t.mode & 1) === 0) return ji(e, t, y, null);
    if (c.data === "$!") {
      if (((l = c.nextSibling && c.nextSibling.dataset), l)) var b = l.dgst;
      return (
        (l = b), (f = Error(r(419))), (l = ka(f, l, void 0)), ji(e, t, y, l)
      );
    }
    if (((b = (y & e.childLanes) !== 0), ut || b)) {
      if (((l = Je), l !== null)) {
        switch (y & -y) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        (c = (c & (l.suspendedLanes | y)) !== 0 ? 0 : c),
          c !== 0 &&
            c !== f.retryLane &&
            ((f.retryLane = c), qt(e, c), Tt(l, e, c, -1));
      }
      return Ka(), (l = ka(Error(r(421)))), ji(e, t, y, l);
    }
    return c.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = cm.bind(null, e)),
        (c._reactRetry = t),
        null)
      : ((e = f.treeContext),
        (vt = ln(c.nextSibling)),
        (gt = t),
        (Re = !0),
        (Nt = null),
        e !== null &&
          ((xt[wt++] = Ht),
          (xt[wt++] = Kt),
          (xt[wt++] = Pn),
          (Ht = e.id),
          (Kt = e.overflow),
          (Pn = t)),
        (t = Oa(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function sd(e, t, s) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), aa(e.return, t, s);
  }
  function Ta(e, t, s, l, c) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: s,
          tailMode: c,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = s),
        (f.tailMode = c));
  }
  function id(e, t, s) {
    var l = t.pendingProps,
      c = l.revealOrder,
      f = l.tail;
    if ((it(e, t, l.children, s), (l = Ie.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && sd(e, s, t);
          else if (e.tag === 19) sd(e, s, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((Ne(Ie, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (s = t.child, c = null; s !== null; )
            (e = s.alternate),
              e !== null && yi(e) === null && (c = s),
              (s = s.sibling);
          (s = c),
            s === null
              ? ((c = t.child), (t.child = null))
              : ((c = s.sibling), (s.sibling = null)),
            Ta(t, !1, c, s, f);
          break;
        case "backwards":
          for (s = null, c = t.child, t.child = null; c !== null; ) {
            if (((e = c.alternate), e !== null && yi(e) === null)) {
              t.child = c;
              break;
            }
            (e = c.sibling), (c.sibling = s), (s = c), (c = e);
          }
          Ta(t, !0, s, null, f);
          break;
        case "together":
          Ta(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ci(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Gt(e, t, s) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (An |= t.lanes),
      (s & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, s = xn(e, e.pendingProps), t.child = s, s.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = xn(e, e.pendingProps)),
          (s.return = t);
      s.sibling = null;
    }
    return t.child;
  }
  function Xp(e, t, s) {
    switch (t.tag) {
      case 3:
        td(t), or();
        break;
      case 5:
        xc(t);
        break;
      case 1:
        lt(t.type) && li(t);
        break;
      case 4:
        ca(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          c = t.memoizedProps.value;
        Ne(pi, l._currentValue), (l._currentValue = c);
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ne(Ie, Ie.current & 1), (t.flags |= 128), null)
            : (s & t.child.childLanes) !== 0
            ? rd(e, t, s)
            : (Ne(Ie, Ie.current & 1),
              (e = Gt(e, t, s)),
              e !== null ? e.sibling : null);
        Ne(Ie, Ie.current & 1);
        break;
      case 19:
        if (((l = (s & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return id(e, t, s);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Ne(Ie, Ie.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Xc(e, t, s);
    }
    return Gt(e, t, s);
  }
  var od, La, ad, ld;
  (od = function (e, t) {
    for (var s = t.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === t) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === t) return;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
  }),
    (La = function () {}),
    (ad = function (e, t, s, l) {
      var c = e.memoizedProps;
      if (c !== l) {
        (e = t.stateNode), Ln(Ut.current);
        var f = null;
        switch (s) {
          case "input":
            (c = De(e, c)), (l = De(e, l)), (f = []);
            break;
          case "select":
            (c = D({}, c, { value: void 0 })),
              (l = D({}, l, { value: void 0 })),
              (f = []);
            break;
          case "textarea":
            (c = uo(e, c)), (l = uo(e, l)), (f = []);
            break;
          default:
            typeof c.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = ii);
        }
        fo(s, l);
        var y;
        s = null;
        for (T in c)
          if (!l.hasOwnProperty(T) && c.hasOwnProperty(T) && c[T] != null)
            if (T === "style") {
              var b = c[T];
              for (y in b) b.hasOwnProperty(y) && (s || (s = {}), (s[y] = ""));
            } else
              T !== "dangerouslySetInnerHTML" &&
                T !== "children" &&
                T !== "suppressContentEditableWarning" &&
                T !== "suppressHydrationWarning" &&
                T !== "autoFocus" &&
                (a.hasOwnProperty(T)
                  ? f || (f = [])
                  : (f = f || []).push(T, null));
        for (T in l) {
          var k = l[T];
          if (
            ((b = c != null ? c[T] : void 0),
            l.hasOwnProperty(T) && k !== b && (k != null || b != null))
          )
            if (T === "style")
              if (b) {
                for (y in b)
                  !b.hasOwnProperty(y) ||
                    (k && k.hasOwnProperty(y)) ||
                    (s || (s = {}), (s[y] = ""));
                for (y in k)
                  k.hasOwnProperty(y) &&
                    b[y] !== k[y] &&
                    (s || (s = {}), (s[y] = k[y]));
              } else s || (f || (f = []), f.push(T, s)), (s = k);
            else
              T === "dangerouslySetInnerHTML"
                ? ((k = k ? k.__html : void 0),
                  (b = b ? b.__html : void 0),
                  k != null && b !== k && (f = f || []).push(T, k))
                : T === "children"
                ? (typeof k != "string" && typeof k != "number") ||
                  (f = f || []).push(T, "" + k)
                : T !== "suppressContentEditableWarning" &&
                  T !== "suppressHydrationWarning" &&
                  (a.hasOwnProperty(T)
                    ? (k != null && T === "onScroll" && Oe("scroll", e),
                      f || b === k || (f = []))
                    : (f = f || []).push(T, k));
        }
        s && (f = f || []).push("style", s);
        var T = f;
        (t.updateQueue = T) && (t.flags |= 4);
      }
    }),
    (ld = function (e, t, s, l) {
      s !== l && (t.flags |= 4);
    });
  function ps(e, t) {
    if (!Re)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var s = null; t !== null; )
            t.alternate !== null && (s = t), (t = t.sibling);
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = e.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), (s = s.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (s |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 14680064),
          (l |= c.flags & 14680064),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (s |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = s), t;
  }
  function Zp(e, t, s) {
    var l = t.pendingProps;
    switch ((ea(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rt(t), null;
      case 1:
        return lt(t.type) && ai(), rt(t), null;
      case 3:
        return (
          (l = t.stateNode),
          cr(),
          Te(at),
          Te(tt),
          ha(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (fi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Nt !== null && (Va(Nt), (Nt = null)))),
          La(e, t),
          rt(t),
          null
        );
      case 5:
        da(t);
        var c = Ln(us.current);
        if (((s = t.type), e !== null && t.stateNode != null))
          ad(e, t, s, l, c),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(r(166));
            return rt(t), null;
          }
          if (((e = Ln(Ut.current)), fi(t))) {
            (l = t.stateNode), (s = t.type);
            var f = t.memoizedProps;
            switch (((l[Dt] = t), (l[ss] = f), (e = (t.mode & 1) !== 0), s)) {
              case "dialog":
                Oe("cancel", l), Oe("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", l);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ts.length; c++) Oe(ts[c], l);
                break;
              case "source":
                Oe("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Oe("error", l), Oe("load", l);
                break;
              case "details":
                Oe("toggle", l);
                break;
              case "input":
                Wn(l, f), Oe("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!f.multiple }),
                  Oe("invalid", l);
                break;
              case "textarea":
                Hl(l, f), Oe("invalid", l);
            }
            fo(s, f), (c = null);
            for (var y in f)
              if (f.hasOwnProperty(y)) {
                var b = f[y];
                y === "children"
                  ? typeof b == "string"
                    ? l.textContent !== b &&
                      (f.suppressHydrationWarning !== !0 &&
                        si(l.textContent, b, e),
                      (c = ["children", b]))
                    : typeof b == "number" &&
                      l.textContent !== "" + b &&
                      (f.suppressHydrationWarning !== !0 &&
                        si(l.textContent, b, e),
                      (c = ["children", "" + b]))
                  : a.hasOwnProperty(y) &&
                    b != null &&
                    y === "onScroll" &&
                    Oe("scroll", l);
              }
            switch (s) {
              case "input":
                Ce(l), $s(l, f, !0);
                break;
              case "textarea":
                Ce(l), ql(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (l.onclick = ii);
            }
            (l = c), (t.updateQueue = l), l !== null && (t.flags |= 4);
          } else {
            (y = c.nodeType === 9 ? c : c.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Jl(s)),
              e === "http://www.w3.org/1999/xhtml"
                ? s === "script"
                  ? ((e = y.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                  ? (e = y.createElement(s, { is: l.is }))
                  : ((e = y.createElement(s)),
                    s === "select" &&
                      ((y = e),
                      l.multiple
                        ? (y.multiple = !0)
                        : l.size && (y.size = l.size)))
                : (e = y.createElementNS(e, s)),
              (e[Dt] = t),
              (e[ss] = l),
              od(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((y = ho(s, l)), s)) {
                case "dialog":
                  Oe("cancel", e), Oe("close", e), (c = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Oe("load", e), (c = l);
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ts.length; c++) Oe(ts[c], e);
                  c = l;
                  break;
                case "source":
                  Oe("error", e), (c = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Oe("error", e), Oe("load", e), (c = l);
                  break;
                case "details":
                  Oe("toggle", e), (c = l);
                  break;
                case "input":
                  Wn(e, l), (c = De(e, l)), Oe("invalid", e);
                  break;
                case "option":
                  c = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (c = D({}, l, { value: void 0 })),
                    Oe("invalid", e);
                  break;
                case "textarea":
                  Hl(e, l), (c = uo(e, l)), Oe("invalid", e);
                  break;
                default:
                  c = l;
              }
              fo(s, c), (b = c);
              for (f in b)
                if (b.hasOwnProperty(f)) {
                  var k = b[f];
                  f === "style"
                    ? Yl(e, k)
                    : f === "dangerouslySetInnerHTML"
                    ? ((k = k ? k.__html : void 0), k != null && Gl(e, k))
                    : f === "children"
                    ? typeof k == "string"
                      ? (s !== "textarea" || k !== "") && $r(e, k)
                      : typeof k == "number" && $r(e, "" + k)
                    : f !== "suppressContentEditableWarning" &&
                      f !== "suppressHydrationWarning" &&
                      f !== "autoFocus" &&
                      (a.hasOwnProperty(f)
                        ? k != null && f === "onScroll" && Oe("scroll", e)
                        : k != null && A(e, f, k, y));
                }
              switch (s) {
                case "input":
                  Ce(e), $s(e, l, !1);
                  break;
                case "textarea":
                  Ce(e), ql(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + $(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (f = l.value),
                    f != null
                      ? It(e, !!l.multiple, f, !1)
                      : l.defaultValue != null &&
                        It(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == "function" && (e.onclick = ii);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return rt(t), null;
      case 6:
        if (e && t.stateNode != null) ld(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(r(166));
          if (((s = Ln(us.current)), Ln(Ut.current), fi(t))) {
            if (
              ((l = t.stateNode),
              (s = t.memoizedProps),
              (l[Dt] = t),
              (f = l.nodeValue !== s) && ((e = gt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  si(l.nodeValue, s, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    si(l.nodeValue, s, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else
            (l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l)),
              (l[Dt] = t),
              (t.stateNode = l);
        }
        return rt(t), null;
      case 13:
        if (
          (Te(Ie),
          (l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Re && vt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            dc(), or(), (t.flags |= 98560), (f = !1);
          else if (((f = fi(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(r(318));
              if (
                ((f = t.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(r(317));
              f[Dt] = t;
            } else
              or(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            rt(t), (f = !1);
          } else Nt !== null && (Va(Nt), (Nt = null)), (f = !0);
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = s), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ie.current & 1) !== 0
                  ? He === 0 && (He = 3)
                  : Ka())),
            t.updateQueue !== null && (t.flags |= 4),
            rt(t),
            null);
      case 4:
        return (
          cr(),
          La(e, t),
          e === null && ns(t.stateNode.containerInfo),
          rt(t),
          null
        );
      case 10:
        return oa(t.type._context), rt(t), null;
      case 17:
        return lt(t.type) && ai(), rt(t), null;
      case 19:
        if ((Te(Ie), (f = t.memoizedState), f === null)) return rt(t), null;
        if (((l = (t.flags & 128) !== 0), (y = f.rendering), y === null))
          if (l) ps(f, !1);
          else {
            if (He !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((y = yi(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      ps(f, !1),
                      l = y.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = s,
                      s = t.child;
                    s !== null;

                  )
                    (f = s),
                      (e = l),
                      (f.flags &= 14680066),
                      (y = f.alternate),
                      y === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = y.childLanes),
                          (f.lanes = y.lanes),
                          (f.child = y.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = y.memoizedProps),
                          (f.memoizedState = y.memoizedState),
                          (f.updateQueue = y.updateQueue),
                          (f.type = y.type),
                          (e = y.dependencies),
                          (f.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (s = s.sibling);
                  return Ne(Ie, (Ie.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            f.tail !== null &&
              Me() > pr &&
              ((t.flags |= 128), (l = !0), ps(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = yi(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (s = e.updateQueue),
                s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                ps(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !y.alternate &&
                  !Re)
              )
                return rt(t), null;
            } else
              2 * Me() - f.renderingStartTime > pr &&
                s !== 1073741824 &&
                ((t.flags |= 128), (l = !0), ps(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((s = f.last),
              s !== null ? (s.sibling = y) : (t.child = y),
              (f.last = y));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = Me()),
            (t.sibling = null),
            (s = Ie.current),
            Ne(Ie, l ? (s & 1) | 2 : s & 1),
            t)
          : (rt(t), null);
      case 22:
      case 23:
        return (
          Ha(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
            ? (yt & 1073741824) !== 0 &&
              (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : rt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function em(e, t) {
    switch ((ea(t), t.tag)) {
      case 1:
        return (
          lt(t.type) && ai(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          cr(),
          Te(at),
          Te(tt),
          ha(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return da(t), null;
      case 13:
        if (
          (Te(Ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          or();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Te(Ie), null;
      case 4:
        return cr(), null;
      case 10:
        return oa(t.type._context), null;
      case 22:
      case 23:
        return Ha(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ni = !1,
    st = !1,
    tm = typeof WeakSet == "function" ? WeakSet : Set,
    X = null;
  function fr(e, t) {
    var s = e.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (l) {
          Ue(e, t, l);
        }
      else s.current = null;
  }
  function Ra(e, t, s) {
    try {
      s();
    } catch (l) {
      Ue(e, t, l);
    }
  }
  var ud = !1;
  function nm(e, t) {
    if (((Ho = qs), (e = zu()), Do(e))) {
      if ("selectionStart" in e)
        var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var c = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, f.nodeType;
            } catch {
              s = null;
              break e;
            }
            var y = 0,
              b = -1,
              k = -1,
              T = 0,
              z = 0,
              V = e,
              F = null;
            t: for (;;) {
              for (
                var G;
                V !== s || (c !== 0 && V.nodeType !== 3) || (b = y + c),
                  V !== f || (l !== 0 && V.nodeType !== 3) || (k = y + l),
                  V.nodeType === 3 && (y += V.nodeValue.length),
                  (G = V.firstChild) !== null;

              )
                (F = V), (V = G);
              for (;;) {
                if (V === e) break t;
                if (
                  (F === s && ++T === c && (b = y),
                  F === f && ++z === l && (k = y),
                  (G = V.nextSibling) !== null)
                )
                  break;
                (V = F), (F = V.parentNode);
              }
              V = G;
            }
            s = b === -1 || k === -1 ? null : { start: b, end: k };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Ko = { focusedElem: e, selectionRange: s }, qs = !1, X = t;
      X !== null;

    )
      if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (X = e);
      else
        for (; X !== null; ) {
          t = X;
          try {
            var Z = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Z !== null) {
                    var ee = Z.memoizedProps,
                      ze = Z.memoizedState,
                      E = t.stateNode,
                      N = E.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ee : Et(t.type, ee),
                        ze
                      );
                    E.__reactInternalSnapshotBeforeUpdate = N;
                  }
                  break;
                case 3:
                  var O = t.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (H) {
            Ue(t, t.return, H);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (X = e);
            break;
          }
          X = t.return;
        }
    return (Z = ud), (ud = !1), Z;
  }
  function ms(e, t, s) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var c = (l = l.next);
      do {
        if ((c.tag & e) === e) {
          var f = c.destroy;
          (c.destroy = void 0), f !== void 0 && Ra(t, s, f);
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function Ei(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var s = (t = t.next);
      do {
        if ((s.tag & e) === e) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== t);
    }
  }
  function Aa(e) {
    var t = e.ref;
    if (t !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function cd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), cd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Dt],
          delete t[ss],
          delete t[Qo],
          delete t[Up],
          delete t[Fp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function dd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function fd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || dd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ia(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? s.nodeType === 8
            ? s.parentNode.insertBefore(e, t)
            : s.insertBefore(e, t)
          : (s.nodeType === 8
              ? ((t = s.parentNode), t.insertBefore(e, s))
              : ((t = s), t.appendChild(e)),
            (s = s._reactRootContainer),
            s != null || t.onclick !== null || (t.onclick = ii));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Ia(e, t, s), e = e.sibling; e !== null; )
        Ia(e, t, s), (e = e.sibling);
  }
  function $a(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? s.insertBefore(e, t) : s.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for ($a(e, t, s), e = e.sibling; e !== null; )
        $a(e, t, s), (e = e.sibling);
  }
  var Xe = null,
    Pt = !1;
  function pn(e, t, s) {
    for (s = s.child; s !== null; ) hd(e, t, s), (s = s.sibling);
  }
  function hd(e, t, s) {
    if ($t && typeof $t.onCommitFiberUnmount == "function")
      try {
        $t.onCommitFiberUnmount(zs, s);
      } catch {}
    switch (s.tag) {
      case 5:
        st || fr(s, t);
      case 6:
        var l = Xe,
          c = Pt;
        (Xe = null),
          pn(e, t, s),
          (Xe = l),
          (Pt = c),
          Xe !== null &&
            (Pt
              ? ((e = Xe),
                (s = s.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(s)
                  : e.removeChild(s))
              : Xe.removeChild(s.stateNode));
        break;
      case 18:
        Xe !== null &&
          (Pt
            ? ((e = Xe),
              (s = s.stateNode),
              e.nodeType === 8
                ? Go(e.parentNode, s)
                : e.nodeType === 1 && Go(e, s),
              qr(e))
            : Go(Xe, s.stateNode));
        break;
      case 4:
        (l = Xe),
          (c = Pt),
          (Xe = s.stateNode.containerInfo),
          (Pt = !0),
          pn(e, t, s),
          (Xe = l),
          (Pt = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !st &&
          ((l = s.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          c = l = l.next;
          do {
            var f = c,
              y = f.destroy;
            (f = f.tag),
              y !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Ra(s, t, y),
              (c = c.next);
          } while (c !== l);
        }
        pn(e, t, s);
        break;
      case 1:
        if (
          !st &&
          (fr(s, t),
          (l = s.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = s.memoizedProps),
              (l.state = s.memoizedState),
              l.componentWillUnmount();
          } catch (b) {
            Ue(s, t, b);
          }
        pn(e, t, s);
        break;
      case 21:
        pn(e, t, s);
        break;
      case 22:
        s.mode & 1
          ? ((st = (l = st) || s.memoizedState !== null), pn(e, t, s), (st = l))
          : pn(e, t, s);
        break;
      default:
        pn(e, t, s);
    }
  }
  function pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new tm()),
        t.forEach(function (l) {
          var c = dm.bind(null, e, l);
          s.has(l) || (s.add(l), l.then(c, c));
        });
    }
  }
  function Ot(e, t) {
    var s = t.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var c = s[l];
        try {
          var f = e,
            y = t,
            b = y;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case 5:
                (Xe = b.stateNode), (Pt = !1);
                break e;
              case 3:
                (Xe = b.stateNode.containerInfo), (Pt = !0);
                break e;
              case 4:
                (Xe = b.stateNode.containerInfo), (Pt = !0);
                break e;
            }
            b = b.return;
          }
          if (Xe === null) throw Error(r(160));
          hd(f, y, c), (Xe = null), (Pt = !1);
          var k = c.alternate;
          k !== null && (k.return = null), (c.return = null);
        } catch (T) {
          Ue(c, t, T);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) md(t, e), (t = t.sibling);
  }
  function md(e, t) {
    var s = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ot(t, e), Mt(e), l & 4)) {
          try {
            ms(3, e, e.return), Ei(3, e);
          } catch (ee) {
            Ue(e, e.return, ee);
          }
          try {
            ms(5, e, e.return);
          } catch (ee) {
            Ue(e, e.return, ee);
          }
        }
        break;
      case 1:
        Ot(t, e), Mt(e), l & 512 && s !== null && fr(s, s.return);
        break;
      case 5:
        if (
          (Ot(t, e),
          Mt(e),
          l & 512 && s !== null && fr(s, s.return),
          e.flags & 32)
        ) {
          var c = e.stateNode;
          try {
            $r(c, "");
          } catch (ee) {
            Ue(e, e.return, ee);
          }
        }
        if (l & 4 && ((c = e.stateNode), c != null)) {
          var f = e.memoizedProps,
            y = s !== null ? s.memoizedProps : f,
            b = e.type,
            k = e.updateQueue;
          if (((e.updateQueue = null), k !== null))
            try {
              b === "input" && f.type === "radio" && f.name != null && Hn(c, f),
                ho(b, y);
              var T = ho(b, f);
              for (y = 0; y < k.length; y += 2) {
                var z = k[y],
                  V = k[y + 1];
                z === "style"
                  ? Yl(c, V)
                  : z === "dangerouslySetInnerHTML"
                  ? Gl(c, V)
                  : z === "children"
                  ? $r(c, V)
                  : A(c, z, V, T);
              }
              switch (b) {
                case "input":
                  Ar(c, f);
                  break;
                case "textarea":
                  Kl(c, f);
                  break;
                case "select":
                  var F = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!f.multiple;
                  var G = f.value;
                  G != null
                    ? It(c, !!f.multiple, G, !1)
                    : F !== !!f.multiple &&
                      (f.defaultValue != null
                        ? It(c, !!f.multiple, f.defaultValue, !0)
                        : It(c, !!f.multiple, f.multiple ? [] : "", !1));
              }
              c[ss] = f;
            } catch (ee) {
              Ue(e, e.return, ee);
            }
        }
        break;
      case 6:
        if ((Ot(t, e), Mt(e), l & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (c = e.stateNode), (f = e.memoizedProps);
          try {
            c.nodeValue = f;
          } catch (ee) {
            Ue(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (
          (Ot(t, e), Mt(e), l & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            qr(t.containerInfo);
          } catch (ee) {
            Ue(e, e.return, ee);
          }
        break;
      case 4:
        Ot(t, e), Mt(e);
        break;
      case 13:
        Ot(t, e),
          Mt(e),
          (c = e.child),
          c.flags & 8192 &&
            ((f = c.memoizedState !== null),
            (c.stateNode.isHidden = f),
            !f ||
              (c.alternate !== null && c.alternate.memoizedState !== null) ||
              (Fa = Me())),
          l & 4 && pd(e);
        break;
      case 22:
        if (
          ((z = s !== null && s.memoizedState !== null),
          e.mode & 1 ? ((st = (T = st) || z), Ot(t, e), (st = T)) : Ot(t, e),
          Mt(e),
          l & 8192)
        ) {
          if (
            ((T = e.memoizedState !== null),
            (e.stateNode.isHidden = T) && !z && (e.mode & 1) !== 0)
          )
            for (X = e, z = e.child; z !== null; ) {
              for (V = X = z; X !== null; ) {
                switch (((F = X), (G = F.child), F.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ms(4, F, F.return);
                    break;
                  case 1:
                    fr(F, F.return);
                    var Z = F.stateNode;
                    if (typeof Z.componentWillUnmount == "function") {
                      (l = F), (s = F.return);
                      try {
                        (t = l),
                          (Z.props = t.memoizedProps),
                          (Z.state = t.memoizedState),
                          Z.componentWillUnmount();
                      } catch (ee) {
                        Ue(l, s, ee);
                      }
                    }
                    break;
                  case 5:
                    fr(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      yd(V);
                      continue;
                    }
                }
                G !== null ? ((G.return = F), (X = G)) : yd(V);
              }
              z = z.sibling;
            }
          e: for (z = null, V = e; ; ) {
            if (V.tag === 5) {
              if (z === null) {
                z = V;
                try {
                  (c = V.stateNode),
                    T
                      ? ((f = c.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none"))
                      : ((b = V.stateNode),
                        (k = V.memoizedProps.style),
                        (y =
                          k != null && k.hasOwnProperty("display")
                            ? k.display
                            : null),
                        (b.style.display = Ql("display", y)));
                } catch (ee) {
                  Ue(e, e.return, ee);
                }
              }
            } else if (V.tag === 6) {
              if (z === null)
                try {
                  V.stateNode.nodeValue = T ? "" : V.memoizedProps;
                } catch (ee) {
                  Ue(e, e.return, ee);
                }
            } else if (
              ((V.tag !== 22 && V.tag !== 23) ||
                V.memoizedState === null ||
                V === e) &&
              V.child !== null
            ) {
              (V.child.return = V), (V = V.child);
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null; ) {
              if (V.return === null || V.return === e) break e;
              z === V && (z = null), (V = V.return);
            }
            z === V && (z = null),
              (V.sibling.return = V.return),
              (V = V.sibling);
          }
        }
        break;
      case 19:
        Ot(t, e), Mt(e), l & 4 && pd(e);
        break;
      case 21:
        break;
      default:
        Ot(t, e), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (dd(s)) {
              var l = s;
              break e;
            }
            s = s.return;
          }
          throw Error(r(160));
        }
        switch (l.tag) {
          case 5:
            var c = l.stateNode;
            l.flags & 32 && ($r(c, ""), (l.flags &= -33));
            var f = fd(e);
            $a(e, f, c);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              b = fd(e);
            Ia(e, b, y);
            break;
          default:
            throw Error(r(161));
        }
      } catch (k) {
        Ue(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rm(e, t, s) {
    (X = e), gd(e);
  }
  function gd(e, t, s) {
    for (var l = (e.mode & 1) !== 0; X !== null; ) {
      var c = X,
        f = c.child;
      if (c.tag === 22 && l) {
        var y = c.memoizedState !== null || Ni;
        if (!y) {
          var b = c.alternate,
            k = (b !== null && b.memoizedState !== null) || st;
          b = Ni;
          var T = st;
          if (((Ni = y), (st = k) && !T))
            for (X = c; X !== null; )
              (y = X),
                (k = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? xd(c)
                  : k !== null
                  ? ((k.return = y), (X = k))
                  : xd(c);
          for (; f !== null; ) (X = f), gd(f), (f = f.sibling);
          (X = c), (Ni = b), (st = T);
        }
        vd(e);
      } else
        (c.subtreeFlags & 8772) !== 0 && f !== null
          ? ((f.return = c), (X = f))
          : vd(e);
    }
  }
  function vd(e) {
    for (; X !== null; ) {
      var t = X;
      if ((t.flags & 8772) !== 0) {
        var s = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                st || Ei(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !st)
                  if (s === null) l.componentDidMount();
                  else {
                    var c =
                      t.elementType === t.type
                        ? s.memoizedProps
                        : Et(t.type, s.memoizedProps);
                    l.componentDidUpdate(
                      c,
                      s.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var f = t.updateQueue;
                f !== null && yc(t, f, l);
                break;
              case 3:
                var y = t.updateQueue;
                if (y !== null) {
                  if (((s = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        s = t.child.stateNode;
                        break;
                      case 1:
                        s = t.child.stateNode;
                    }
                  yc(t, y, s);
                }
                break;
              case 5:
                var b = t.stateNode;
                if (s === null && t.flags & 4) {
                  s = b;
                  var k = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && s.focus();
                      break;
                    case "img":
                      k.src && (s.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var T = t.alternate;
                  if (T !== null) {
                    var z = T.memoizedState;
                    if (z !== null) {
                      var V = z.dehydrated;
                      V !== null && qr(V);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
          st || (t.flags & 512 && Aa(t));
        } catch (F) {
          Ue(t, t.return, F);
        }
      }
      if (t === e) {
        X = null;
        break;
      }
      if (((s = t.sibling), s !== null)) {
        (s.return = t.return), (X = s);
        break;
      }
      X = t.return;
    }
  }
  function yd(e) {
    for (; X !== null; ) {
      var t = X;
      if (t === e) {
        X = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (X = s);
        break;
      }
      X = t.return;
    }
  }
  function xd(e) {
    for (; X !== null; ) {
      var t = X;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var s = t.return;
            try {
              Ei(4, t);
            } catch (k) {
              Ue(t, s, k);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var c = t.return;
              try {
                l.componentDidMount();
              } catch (k) {
                Ue(t, c, k);
              }
            }
            var f = t.return;
            try {
              Aa(t);
            } catch (k) {
              Ue(t, f, k);
            }
            break;
          case 5:
            var y = t.return;
            try {
              Aa(t);
            } catch (k) {
              Ue(t, y, k);
            }
        }
      } catch (k) {
        Ue(t, t.return, k);
      }
      if (t === e) {
        X = null;
        break;
      }
      var b = t.sibling;
      if (b !== null) {
        (b.return = t.return), (X = b);
        break;
      }
      X = t.return;
    }
  }
  var sm = Math.ceil,
    Pi = R.ReactCurrentDispatcher,
    Da = R.ReactCurrentOwner,
    St = R.ReactCurrentBatchConfig,
    we = 0,
    Je = null,
    Be = null,
    Ze = 0,
    yt = 0,
    hr = un(0),
    He = 0,
    gs = null,
    An = 0,
    Oi = 0,
    Ua = 0,
    vs = null,
    ct = null,
    Fa = 0,
    pr = 1 / 0,
    Qt = null,
    Ti = !1,
    Ma = null,
    mn = null,
    Li = !1,
    gn = null,
    Ri = 0,
    ys = 0,
    za = null,
    Ai = -1,
    Ii = 0;
  function ot() {
    return (we & 6) !== 0 ? Me() : Ai !== -1 ? Ai : (Ai = Me());
  }
  function vn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (we & 2) !== 0 && Ze !== 0
      ? Ze & -Ze
      : zp.transition !== null
      ? (Ii === 0 && (Ii = fu()), Ii)
      : ((e = ke),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bu(e.type))),
        e);
  }
  function Tt(e, t, s, l) {
    if (50 < ys) throw ((ys = 0), (za = null), Error(r(185)));
    Br(e, s, l),
      ((we & 2) === 0 || e !== Je) &&
        (e === Je && ((we & 2) === 0 && (Oi |= s), He === 4 && yn(e, Ze)),
        dt(e, l),
        s === 1 &&
          we === 0 &&
          (t.mode & 1) === 0 &&
          ((pr = Me() + 500), ui && dn()));
  }
  function dt(e, t) {
    var s = e.callbackNode;
    zh(e, t);
    var l = Ws(e, e === Je ? Ze : 0);
    if (l === 0)
      s !== null && uu(s), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((s != null && uu(s), t === 1))
        e.tag === 0 ? Mp(bd.bind(null, e)) : oc(bd.bind(null, e)),
          $p(function () {
            (we & 6) === 0 && dn();
          }),
          (s = null);
      else {
        switch (hu(l)) {
          case 1:
            s = wo;
            break;
          case 4:
            s = cu;
            break;
          case 16:
            s = Ms;
            break;
          case 536870912:
            s = du;
            break;
          default:
            s = Ms;
        }
        s = Pd(s, wd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = s);
    }
  }
  function wd(e, t) {
    if (((Ai = -1), (Ii = 0), (we & 6) !== 0)) throw Error(r(327));
    var s = e.callbackNode;
    if (mr() && e.callbackNode !== s) return null;
    var l = Ws(e, e === Je ? Ze : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = $i(e, l);
    else {
      t = l;
      var c = we;
      we |= 2;
      var f = Sd();
      (Je !== e || Ze !== t) && ((Qt = null), (pr = Me() + 500), $n(e, t));
      do
        try {
          am();
          break;
        } catch (b) {
          _d(e, b);
        }
      while (!0);
      ia(),
        (Pi.current = f),
        (we = c),
        Be !== null ? (t = 0) : ((Je = null), (Ze = 0), (t = He));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((c = bo(e)), c !== 0 && ((l = c), (t = Ba(e, c)))),
        t === 1)
      )
        throw ((s = gs), $n(e, 0), yn(e, l), dt(e, Me()), s);
      if (t === 6) yn(e, l);
      else {
        if (
          ((c = e.current.alternate),
          (l & 30) === 0 &&
            !im(c) &&
            ((t = $i(e, l)),
            t === 2 && ((f = bo(e)), f !== 0 && ((l = f), (t = Ba(e, f)))),
            t === 1))
        )
          throw ((s = gs), $n(e, 0), yn(e, l), dt(e, Me()), s);
        switch (((e.finishedWork = c), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Dn(e, ct, Qt);
            break;
          case 3:
            if (
              (yn(e, l),
              (l & 130023424) === l && ((t = Fa + 500 - Me()), 10 < t))
            ) {
              if (Ws(e, 0) !== 0) break;
              if (((c = e.suspendedLanes), (c & l) !== l)) {
                ot(), (e.pingedLanes |= e.suspendedLanes & c);
                break;
              }
              e.timeoutHandle = Jo(Dn.bind(null, e, ct, Qt), t);
              break;
            }
            Dn(e, ct, Qt);
            break;
          case 4:
            if ((yn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, c = -1; 0 < l; ) {
              var y = 31 - jt(l);
              (f = 1 << y), (y = t[y]), y > c && (c = y), (l &= ~f);
            }
            if (
              ((l = c),
              (l = Me() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * sm(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = Jo(Dn.bind(null, e, ct, Qt), l);
              break;
            }
            Dn(e, ct, Qt);
            break;
          case 5:
            Dn(e, ct, Qt);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return dt(e, Me()), e.callbackNode === s ? wd.bind(null, e) : null;
  }
  function Ba(e, t) {
    var s = vs;
    return (
      e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
      (e = $i(e, t)),
      e !== 2 && ((t = ct), (ct = s), t !== null && Va(t)),
      e
    );
  }
  function Va(e) {
    ct === null ? (ct = e) : ct.push.apply(ct, e);
  }
  function im(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var s = t.updateQueue;
        if (s !== null && ((s = s.stores), s !== null))
          for (var l = 0; l < s.length; l++) {
            var c = s[l],
              f = c.getSnapshot;
            c = c.value;
            try {
              if (!Ct(f(), c)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((s = t.child), t.subtreeFlags & 16384 && s !== null))
        (s.return = t), (t = s);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function yn(e, t) {
    for (
      t &= ~Ua,
        t &= ~Oi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var s = 31 - jt(t),
        l = 1 << s;
      (e[s] = -1), (t &= ~l);
    }
  }
  function bd(e) {
    if ((we & 6) !== 0) throw Error(r(327));
    mr();
    var t = Ws(e, 0);
    if ((t & 1) === 0) return dt(e, Me()), null;
    var s = $i(e, t);
    if (e.tag !== 0 && s === 2) {
      var l = bo(e);
      l !== 0 && ((t = l), (s = Ba(e, l)));
    }
    if (s === 1) throw ((s = gs), $n(e, 0), yn(e, t), dt(e, Me()), s);
    if (s === 6) throw Error(r(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Dn(e, ct, Qt),
      dt(e, Me()),
      null
    );
  }
  function Wa(e, t) {
    var s = we;
    we |= 1;
    try {
      return e(t);
    } finally {
      (we = s), we === 0 && ((pr = Me() + 500), ui && dn());
    }
  }
  function In(e) {
    gn !== null && gn.tag === 0 && (we & 6) === 0 && mr();
    var t = we;
    we |= 1;
    var s = St.transition,
      l = ke;
    try {
      if (((St.transition = null), (ke = 1), e)) return e();
    } finally {
      (ke = l), (St.transition = s), (we = t), (we & 6) === 0 && dn();
    }
  }
  function Ha() {
    (yt = hr.current), Te(hr);
  }
  function $n(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var s = e.timeoutHandle;
    if ((s !== -1 && ((e.timeoutHandle = -1), Ip(s)), Be !== null))
      for (s = Be.return; s !== null; ) {
        var l = s;
        switch ((ea(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && ai();
            break;
          case 3:
            cr(), Te(at), Te(tt), ha();
            break;
          case 5:
            da(l);
            break;
          case 4:
            cr();
            break;
          case 13:
            Te(Ie);
            break;
          case 19:
            Te(Ie);
            break;
          case 10:
            oa(l.type._context);
            break;
          case 22:
          case 23:
            Ha();
        }
        s = s.return;
      }
    if (
      ((Je = e),
      (Be = e = xn(e.current, null)),
      (Ze = yt = t),
      (He = 0),
      (gs = null),
      (Ua = Oi = An = 0),
      (ct = vs = null),
      Tn !== null)
    ) {
      for (t = 0; t < Tn.length; t++)
        if (((s = Tn[t]), (l = s.interleaved), l !== null)) {
          s.interleaved = null;
          var c = l.next,
            f = s.pending;
          if (f !== null) {
            var y = f.next;
            (f.next = c), (l.next = y);
          }
          s.pending = l;
        }
      Tn = null;
    }
    return e;
  }
  function _d(e, t) {
    do {
      var s = Be;
      try {
        if ((ia(), (xi.current = Si), wi)) {
          for (var l = $e.memoizedState; l !== null; ) {
            var c = l.queue;
            c !== null && (c.pending = null), (l = l.next);
          }
          wi = !1;
        }
        if (
          ((Rn = 0),
          (qe = We = $e = null),
          (cs = !1),
          (ds = 0),
          (Da.current = null),
          s === null || s.return === null)
        ) {
          (He = 1), (gs = t), (Be = null);
          break;
        }
        e: {
          var f = e,
            y = s.return,
            b = s,
            k = t;
          if (
            ((t = Ze),
            (b.flags |= 32768),
            k !== null && typeof k == "object" && typeof k.then == "function")
          ) {
            var T = k,
              z = b,
              V = z.tag;
            if ((z.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
              var F = z.alternate;
              F
                ? ((z.updateQueue = F.updateQueue),
                  (z.memoizedState = F.memoizedState),
                  (z.lanes = F.lanes))
                : ((z.updateQueue = null), (z.memoizedState = null));
            }
            var G = qc(y);
            if (G !== null) {
              (G.flags &= -257),
                Jc(G, y, b, f, t),
                G.mode & 1 && Kc(f, T, t),
                (t = G),
                (k = T);
              var Z = t.updateQueue;
              if (Z === null) {
                var ee = new Set();
                ee.add(k), (t.updateQueue = ee);
              } else Z.add(k);
              break e;
            } else {
              if ((t & 1) === 0) {
                Kc(f, T, t), Ka();
                break e;
              }
              k = Error(r(426));
            }
          } else if (Re && b.mode & 1) {
            var ze = qc(y);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256),
                Jc(ze, y, b, f, t),
                ra(dr(k, b));
              break e;
            }
          }
          (f = k = dr(k, b)),
            He !== 4 && (He = 2),
            vs === null ? (vs = [f]) : vs.push(f),
            (f = y);
          do {
            switch (f.tag) {
              case 3:
                (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                var E = Wc(f, k, t);
                vc(f, E);
                break e;
              case 1:
                b = k;
                var N = f.type,
                  O = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof N.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (mn === null || !mn.has(O))))
                ) {
                  (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                  var H = Hc(f, b, t);
                  vc(f, H);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        jd(s);
      } catch (te) {
        (t = te), Be === s && s !== null && (Be = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Sd() {
    var e = Pi.current;
    return (Pi.current = Si), e === null ? Si : e;
  }
  function Ka() {
    (He === 0 || He === 3 || He === 2) && (He = 4),
      Je === null ||
        ((An & 268435455) === 0 && (Oi & 268435455) === 0) ||
        yn(Je, Ze);
  }
  function $i(e, t) {
    var s = we;
    we |= 2;
    var l = Sd();
    (Je !== e || Ze !== t) && ((Qt = null), $n(e, t));
    do
      try {
        om();
        break;
      } catch (c) {
        _d(e, c);
      }
    while (!0);
    if ((ia(), (we = s), (Pi.current = l), Be !== null)) throw Error(r(261));
    return (Je = null), (Ze = 0), He;
  }
  function om() {
    for (; Be !== null; ) kd(Be);
  }
  function am() {
    for (; Be !== null && !Lh(); ) kd(Be);
  }
  function kd(e) {
    var t = Ed(e.alternate, e, yt);
    (e.memoizedProps = e.pendingProps),
      t === null ? jd(e) : (Be = t),
      (Da.current = null);
  }
  function jd(e) {
    var t = e;
    do {
      var s = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((s = Zp(s, t, yt)), s !== null)) {
          Be = s;
          return;
        }
      } else {
        if (((s = em(s, t)), s !== null)) {
          (s.flags &= 32767), (Be = s);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (He = 6), (Be = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function Dn(e, t, s) {
    var l = ke,
      c = St.transition;
    try {
      (St.transition = null), (ke = 1), lm(e, t, s, l);
    } finally {
      (St.transition = c), (ke = l);
    }
    return null;
  }
  function lm(e, t, s, l) {
    do mr();
    while (gn !== null);
    if ((we & 6) !== 0) throw Error(r(327));
    s = e.finishedWork;
    var c = e.finishedLanes;
    if (s === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
      throw Error(r(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var f = s.lanes | s.childLanes;
    if (
      (Bh(e, f),
      e === Je && ((Be = Je = null), (Ze = 0)),
      ((s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0) ||
        Li ||
        ((Li = !0),
        Pd(Ms, function () {
          return mr(), null;
        })),
      (f = (s.flags & 15990) !== 0),
      (s.subtreeFlags & 15990) !== 0 || f)
    ) {
      (f = St.transition), (St.transition = null);
      var y = ke;
      ke = 1;
      var b = we;
      (we |= 4),
        (Da.current = null),
        nm(e, s),
        md(s, e),
        Ep(Ko),
        (qs = !!Ho),
        (Ko = Ho = null),
        (e.current = s),
        rm(s),
        Rh(),
        (we = b),
        (ke = y),
        (St.transition = f);
    } else e.current = s;
    if (
      (Li && ((Li = !1), (gn = e), (Ri = c)),
      (f = e.pendingLanes),
      f === 0 && (mn = null),
      $h(s.stateNode),
      dt(e, Me()),
      t !== null)
    )
      for (l = e.onRecoverableError, s = 0; s < t.length; s++)
        (c = t[s]), l(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ti) throw ((Ti = !1), (e = Ma), (Ma = null), e);
    return (
      (Ri & 1) !== 0 && e.tag !== 0 && mr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === za ? ys++ : ((ys = 0), (za = e))) : (ys = 0),
      dn(),
      null
    );
  }
  function mr() {
    if (gn !== null) {
      var e = hu(Ri),
        t = St.transition,
        s = ke;
      try {
        if (((St.transition = null), (ke = 16 > e ? 16 : e), gn === null))
          var l = !1;
        else {
          if (((e = gn), (gn = null), (Ri = 0), (we & 6) !== 0))
            throw Error(r(331));
          var c = we;
          for (we |= 4, X = e.current; X !== null; ) {
            var f = X,
              y = f.child;
            if ((X.flags & 16) !== 0) {
              var b = f.deletions;
              if (b !== null) {
                for (var k = 0; k < b.length; k++) {
                  var T = b[k];
                  for (X = T; X !== null; ) {
                    var z = X;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ms(8, z, f);
                    }
                    var V = z.child;
                    if (V !== null) (V.return = z), (X = V);
                    else
                      for (; X !== null; ) {
                        z = X;
                        var F = z.sibling,
                          G = z.return;
                        if ((cd(z), z === T)) {
                          X = null;
                          break;
                        }
                        if (F !== null) {
                          (F.return = G), (X = F);
                          break;
                        }
                        X = G;
                      }
                  }
                }
                var Z = f.alternate;
                if (Z !== null) {
                  var ee = Z.child;
                  if (ee !== null) {
                    Z.child = null;
                    do {
                      var ze = ee.sibling;
                      (ee.sibling = null), (ee = ze);
                    } while (ee !== null);
                  }
                }
                X = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && y !== null)
              (y.return = f), (X = y);
            else
              e: for (; X !== null; ) {
                if (((f = X), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ms(9, f, f.return);
                  }
                var E = f.sibling;
                if (E !== null) {
                  (E.return = f.return), (X = E);
                  break e;
                }
                X = f.return;
              }
          }
          var N = e.current;
          for (X = N; X !== null; ) {
            y = X;
            var O = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && O !== null)
              (O.return = y), (X = O);
            else
              e: for (y = N; X !== null; ) {
                if (((b = X), (b.flags & 2048) !== 0))
                  try {
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ei(9, b);
                    }
                  } catch (te) {
                    Ue(b, b.return, te);
                  }
                if (b === y) {
                  X = null;
                  break e;
                }
                var H = b.sibling;
                if (H !== null) {
                  (H.return = b.return), (X = H);
                  break e;
                }
                X = b.return;
              }
          }
          if (
            ((we = c),
            dn(),
            $t && typeof $t.onPostCommitFiberRoot == "function")
          )
            try {
              $t.onPostCommitFiberRoot(zs, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (ke = s), (St.transition = t);
      }
    }
    return !1;
  }
  function Cd(e, t, s) {
    (t = dr(s, t)),
      (t = Wc(e, t, 1)),
      (e = hn(e, t, 1)),
      (t = ot()),
      e !== null && (Br(e, 1, t), dt(e, t));
  }
  function Ue(e, t, s) {
    if (e.tag === 3) Cd(e, e, s);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Cd(t, e, s);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (mn === null || !mn.has(l)))
          ) {
            (e = dr(s, e)),
              (e = Hc(t, e, 1)),
              (t = hn(t, e, 1)),
              (e = ot()),
              t !== null && (Br(t, 1, e), dt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function um(e, t, s) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (t = ot()),
      (e.pingedLanes |= e.suspendedLanes & s),
      Je === e &&
        (Ze & s) === s &&
        (He === 4 || (He === 3 && (Ze & 130023424) === Ze && 500 > Me() - Fa)
          ? $n(e, 0)
          : (Ua |= s)),
      dt(e, t);
  }
  function Nd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Vs), (Vs <<= 1), (Vs & 130023424) === 0 && (Vs = 4194304)));
    var s = ot();
    (e = qt(e, t)), e !== null && (Br(e, t, s), dt(e, s));
  }
  function cm(e) {
    var t = e.memoizedState,
      s = 0;
    t !== null && (s = t.retryLane), Nd(e, s);
  }
  function dm(e, t) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), Nd(e, s);
  }
  var Ed;
  Ed = function (e, t, s) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || at.current) ut = !0;
      else {
        if ((e.lanes & s) === 0 && (t.flags & 128) === 0)
          return (ut = !1), Xp(e, t, s);
        ut = (e.flags & 131072) !== 0;
      }
    else (ut = !1), Re && (t.flags & 1048576) !== 0 && ac(t, di, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        Ci(e, t), (e = t.pendingProps);
        var c = rr(t, tt.current);
        ur(t, s), (c = ga(null, t, l, e, c, s));
        var f = va();
        return (
          (t.flags |= 1),
          typeof c == "object" &&
          c !== null &&
          typeof c.render == "function" &&
          c.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              lt(l) ? ((f = !0), li(t)) : (f = !1),
              (t.memoizedState =
                c.state !== null && c.state !== void 0 ? c.state : null),
              ua(t),
              (c.updater = ki),
              (t.stateNode = c),
              (c._reactInternals = t),
              Sa(t, l, e, s),
              (t = Na(null, t, l, !0, f, s)))
            : ((t.tag = 0), Re && f && Zo(t), it(null, t, c, s), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (Ci(e, t),
            (e = t.pendingProps),
            (c = l._init),
            (l = c(l._payload)),
            (t.type = l),
            (c = t.tag = hm(l)),
            (e = Et(l, e)),
            c)
          ) {
            case 0:
              t = Ca(null, t, l, e, s);
              break e;
            case 1:
              t = ed(null, t, l, e, s);
              break e;
            case 11:
              t = Gc(null, t, l, e, s);
              break e;
            case 14:
              t = Qc(null, t, l, Et(l.type, e), s);
              break e;
          }
          throw Error(r(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (c = t.pendingProps),
          (c = t.elementType === l ? c : Et(l, c)),
          Ca(e, t, l, c, s)
        );
      case 1:
        return (
          (l = t.type),
          (c = t.pendingProps),
          (c = t.elementType === l ? c : Et(l, c)),
          ed(e, t, l, c, s)
        );
      case 3:
        e: {
          if ((td(t), e === null)) throw Error(r(387));
          (l = t.pendingProps),
            (f = t.memoizedState),
            (c = f.element),
            gc(e, t),
            vi(t, l, null, s);
          var y = t.memoizedState;
          if (((l = y.element), f.isDehydrated))
            if (
              ((f = {
                element: l,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              (c = dr(Error(r(423)), t)), (t = nd(e, t, l, s, c));
              break e;
            } else if (l !== c) {
              (c = dr(Error(r(424)), t)), (t = nd(e, t, l, s, c));
              break e;
            } else
              for (
                vt = ln(t.stateNode.containerInfo.firstChild),
                  gt = t,
                  Re = !0,
                  Nt = null,
                  s = pc(t, null, l, s),
                  t.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((or(), l === c)) {
              t = Gt(e, t, s);
              break e;
            }
            it(e, t, l, s);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          xc(t),
          e === null && na(t),
          (l = t.type),
          (c = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (y = c.children),
          qo(l, c) ? (y = null) : f !== null && qo(l, f) && (t.flags |= 32),
          Zc(e, t),
          it(e, t, y, s),
          t.child
        );
      case 6:
        return e === null && na(t), null;
      case 13:
        return rd(e, t, s);
      case 4:
        return (
          ca(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = ar(t, null, l, s)) : it(e, t, l, s),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (c = t.pendingProps),
          (c = t.elementType === l ? c : Et(l, c)),
          Gc(e, t, l, c, s)
        );
      case 7:
        return it(e, t, t.pendingProps, s), t.child;
      case 8:
        return it(e, t, t.pendingProps.children, s), t.child;
      case 12:
        return it(e, t, t.pendingProps.children, s), t.child;
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (c = t.pendingProps),
            (f = t.memoizedProps),
            (y = c.value),
            Ne(pi, l._currentValue),
            (l._currentValue = y),
            f !== null)
          )
            if (Ct(f.value, y)) {
              if (f.children === c.children && !at.current) {
                t = Gt(e, t, s);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var b = f.dependencies;
                if (b !== null) {
                  y = f.child;
                  for (var k = b.firstContext; k !== null; ) {
                    if (k.context === l) {
                      if (f.tag === 1) {
                        (k = Jt(-1, s & -s)), (k.tag = 2);
                        var T = f.updateQueue;
                        if (T !== null) {
                          T = T.shared;
                          var z = T.pending;
                          z === null
                            ? (k.next = k)
                            : ((k.next = z.next), (z.next = k)),
                            (T.pending = k);
                        }
                      }
                      (f.lanes |= s),
                        (k = f.alternate),
                        k !== null && (k.lanes |= s),
                        aa(f.return, s, t),
                        (b.lanes |= s);
                      break;
                    }
                    k = k.next;
                  }
                } else if (f.tag === 10) y = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((y = f.return), y === null)) throw Error(r(341));
                  (y.lanes |= s),
                    (b = y.alternate),
                    b !== null && (b.lanes |= s),
                    aa(y, s, t),
                    (y = f.sibling);
                } else y = f.child;
                if (y !== null) y.return = f;
                else
                  for (y = f; y !== null; ) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((f = y.sibling), f !== null)) {
                      (f.return = y.return), (y = f);
                      break;
                    }
                    y = y.return;
                  }
                f = y;
              }
          it(e, t, c.children, s), (t = t.child);
        }
        return t;
      case 9:
        return (
          (c = t.type),
          (l = t.pendingProps.children),
          ur(t, s),
          (c = bt(c)),
          (l = l(c)),
          (t.flags |= 1),
          it(e, t, l, s),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (c = Et(l, t.pendingProps)),
          (c = Et(l.type, c)),
          Qc(e, t, l, c, s)
        );
      case 15:
        return Yc(e, t, t.type, t.pendingProps, s);
      case 17:
        return (
          (l = t.type),
          (c = t.pendingProps),
          (c = t.elementType === l ? c : Et(l, c)),
          Ci(e, t),
          (t.tag = 1),
          lt(l) ? ((e = !0), li(t)) : (e = !1),
          ur(t, s),
          Bc(t, l, c),
          Sa(t, l, c, s),
          Na(null, t, l, !0, e, s)
        );
      case 19:
        return id(e, t, s);
      case 22:
        return Xc(e, t, s);
    }
    throw Error(r(156, t.tag));
  };
  function Pd(e, t) {
    return lu(e, t);
  }
  function fm(e, t, s, l) {
    (this.tag = e),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function kt(e, t, s, l) {
    return new fm(e, t, s, l);
  }
  function qa(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function hm(e) {
    if (typeof e == "function") return qa(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Pe)) return 11;
      if (e === ye) return 14;
    }
    return 2;
  }
  function xn(e, t) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = kt(e.tag, t, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = t),
          (s.type = e.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = e.flags & 14680064),
      (s.childLanes = e.childLanes),
      (s.lanes = e.lanes),
      (s.child = e.child),
      (s.memoizedProps = e.memoizedProps),
      (s.memoizedState = e.memoizedState),
      (s.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (s.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      s
    );
  }
  function Di(e, t, s, l, c, f) {
    var y = 2;
    if (((l = e), typeof e == "function")) qa(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else
      e: switch (e) {
        case M:
          return Un(s.children, c, f, t);
        case Y:
          (y = 8), (c |= 8);
          break;
        case pe:
          return (
            (e = kt(12, s, t, c | 2)), (e.elementType = pe), (e.lanes = f), e
          );
        case Ae:
          return (e = kt(13, s, t, c)), (e.elementType = Ae), (e.lanes = f), e;
        case ae:
          return (e = kt(19, s, t, c)), (e.elementType = ae), (e.lanes = f), e;
        case fe:
          return Ui(s, c, f, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case oe:
                y = 10;
                break e;
              case ge:
                y = 9;
                break e;
              case Pe:
                y = 11;
                break e;
              case ye:
                y = 14;
                break e;
              case Se:
                (y = 16), (l = null);
                break e;
            }
          throw Error(r(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = kt(y, s, t, c)), (t.elementType = e), (t.type = l), (t.lanes = f), t
    );
  }
  function Un(e, t, s, l) {
    return (e = kt(7, e, l, t)), (e.lanes = s), e;
  }
  function Ui(e, t, s, l) {
    return (
      (e = kt(22, e, l, t)),
      (e.elementType = fe),
      (e.lanes = s),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ja(e, t, s) {
    return (e = kt(6, e, null, t)), (e.lanes = s), e;
  }
  function Ga(e, t, s) {
    return (
      (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = s),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function pm(e, t, s, l, c) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = _o(0)),
      (this.expirationTimes = _o(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = _o(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Qa(e, t, s, l, c, f, y, b, k) {
    return (
      (e = new pm(e, t, s, b, k)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = kt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: l,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ua(f),
      e
    );
  }
  function mm(e, t, s) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: s,
    };
  }
  function Od(e) {
    if (!e) return cn;
    e = e._reactInternals;
    e: {
      if (Cn(e) !== e || e.tag !== 1) throw Error(r(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (lt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(r(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (lt(s)) return sc(e, s, t);
    }
    return t;
  }
  function Td(e, t, s, l, c, f, y, b, k) {
    return (
      (e = Qa(s, l, !0, e, c, f, y, b, k)),
      (e.context = Od(null)),
      (s = e.current),
      (l = ot()),
      (c = vn(s)),
      (f = Jt(l, c)),
      (f.callback = t ?? null),
      hn(s, f, c),
      (e.current.lanes = c),
      Br(e, c, l),
      dt(e, l),
      e
    );
  }
  function Fi(e, t, s, l) {
    var c = t.current,
      f = ot(),
      y = vn(c);
    return (
      (s = Od(s)),
      t.context === null ? (t.context = s) : (t.pendingContext = s),
      (t = Jt(f, y)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = hn(c, t, y)),
      e !== null && (Tt(e, c, y, f), gi(e, c, y)),
      y
    );
  }
  function Mi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ld(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < t ? s : t;
    }
  }
  function Ya(e, t) {
    Ld(e, t), (e = e.alternate) && Ld(e, t);
  }
  function gm() {
    return null;
  }
  var Rd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Xa(e) {
    this._internalRoot = e;
  }
  (zi.prototype.render = Xa.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      Fi(e, t, null, null);
    }),
    (zi.prototype.unmount = Xa.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          In(function () {
            Fi(null, e, null, null);
          }),
            (t[Vt] = null);
        }
      });
  function zi(e) {
    this._internalRoot = e;
  }
  zi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var s = 0; s < sn.length && t !== 0 && t < sn[s].priority; s++);
      sn.splice(s, 0, e), s === 0 && xu(e);
    }
  };
  function Za(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Bi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ad() {}
  function vm(e, t, s, l, c) {
    if (c) {
      if (typeof l == "function") {
        var f = l;
        l = function () {
          var T = Mi(y);
          f.call(T);
        };
      }
      var y = Td(t, l, e, 0, null, !1, !1, "", Ad);
      return (
        (e._reactRootContainer = y),
        (e[Vt] = y.current),
        ns(e.nodeType === 8 ? e.parentNode : e),
        In(),
        y
      );
    }
    for (; (c = e.lastChild); ) e.removeChild(c);
    if (typeof l == "function") {
      var b = l;
      l = function () {
        var T = Mi(k);
        b.call(T);
      };
    }
    var k = Qa(e, 0, !1, null, null, !1, !1, "", Ad);
    return (
      (e._reactRootContainer = k),
      (e[Vt] = k.current),
      ns(e.nodeType === 8 ? e.parentNode : e),
      In(function () {
        Fi(t, k, s, l);
      }),
      k
    );
  }
  function Vi(e, t, s, l, c) {
    var f = s._reactRootContainer;
    if (f) {
      var y = f;
      if (typeof c == "function") {
        var b = c;
        c = function () {
          var k = Mi(y);
          b.call(k);
        };
      }
      Fi(t, y, e, c);
    } else y = vm(s, t, e, c, l);
    return Mi(y);
  }
  (pu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var s = zr(t.pendingLanes);
          s !== 0 &&
            (So(t, s | 1),
            dt(t, Me()),
            (we & 6) === 0 && ((pr = Me() + 500), dn()));
        }
        break;
      case 13:
        In(function () {
          var l = qt(e, 1);
          if (l !== null) {
            var c = ot();
            Tt(l, e, 1, c);
          }
        }),
          Ya(e, 1);
    }
  }),
    (ko = function (e) {
      if (e.tag === 13) {
        var t = qt(e, 134217728);
        if (t !== null) {
          var s = ot();
          Tt(t, e, 134217728, s);
        }
        Ya(e, 134217728);
      }
    }),
    (mu = function (e) {
      if (e.tag === 13) {
        var t = vn(e),
          s = qt(e, t);
        if (s !== null) {
          var l = ot();
          Tt(s, e, t, l);
        }
        Ya(e, t);
      }
    }),
    (gu = function () {
      return ke;
    }),
    (vu = function (e, t) {
      var s = ke;
      try {
        return (ke = e), t();
      } finally {
        ke = s;
      }
    }),
    (go = function (e, t, s) {
      switch (t) {
        case "input":
          if ((Ar(e, s), (t = s.name), s.type === "radio" && t != null)) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < s.length;
              t++
            ) {
              var l = s[t];
              if (l !== e && l.form === e.form) {
                var c = oi(l);
                if (!c) throw Error(r(90));
                Fe(l), Ar(l, c);
              }
            }
          }
          break;
        case "textarea":
          Kl(e, s);
          break;
        case "select":
          (t = s.value), t != null && It(e, !!s.multiple, t, !1);
      }
    }),
    (tu = Wa),
    (nu = In);
  var ym = { usingClientEntryPoint: !1, Events: [is, tr, oi, Zl, eu, Wa] },
    xs = {
      findFiberByHostInstance: Nn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    xm = {
      bundleType: xs.bundleType,
      version: xs.version,
      rendererPackageName: xs.rendererPackageName,
      rendererConfig: xs.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: R.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ou(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: xs.findFiberByHostInstance || gm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wi.isDisabled && Wi.supportsFiber)
      try {
        (zs = Wi.inject(xm)), ($t = Wi);
      } catch {}
  }
  return (
    (ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ym),
    (ft.createPortal = function (e, t) {
      var s =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Za(t)) throw Error(r(200));
      return mm(e, t, null, s);
    }),
    (ft.createRoot = function (e, t) {
      if (!Za(e)) throw Error(r(299));
      var s = !1,
        l = "",
        c = Rd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (s = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = Qa(e, 1, !1, null, null, s, !1, l, c)),
        (e[Vt] = t.current),
        ns(e.nodeType === 8 ? e.parentNode : e),
        new Xa(t)
      );
    }),
    (ft.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(r(188))
          : ((e = Object.keys(e).join(",")), Error(r(268, e)));
      return (e = ou(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (ft.flushSync = function (e) {
      return In(e);
    }),
    (ft.hydrate = function (e, t, s) {
      if (!Bi(t)) throw Error(r(200));
      return Vi(null, e, t, !0, s);
    }),
    (ft.hydrateRoot = function (e, t, s) {
      if (!Za(e)) throw Error(r(405));
      var l = (s != null && s.hydratedSources) || null,
        c = !1,
        f = "",
        y = Rd;
      if (
        (s != null &&
          (s.unstable_strictMode === !0 && (c = !0),
          s.identifierPrefix !== void 0 && (f = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (y = s.onRecoverableError)),
        (t = Td(t, null, e, 1, s ?? null, c, !1, f, y)),
        (e[Vt] = t.current),
        ns(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (s = l[e]),
            (c = s._getVersion),
            (c = c(s._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [s, c])
              : t.mutableSourceEagerHydrationData.push(s, c);
      return new zi(t);
    }),
    (ft.render = function (e, t, s) {
      if (!Bi(t)) throw Error(r(200));
      return Vi(null, e, t, !1, s);
    }),
    (ft.unmountComponentAtNode = function (e) {
      if (!Bi(e)) throw Error(r(40));
      return e._reactRootContainer
        ? (In(function () {
            Vi(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Vt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ft.unstable_batchedUpdates = Wa),
    (ft.unstable_renderSubtreeIntoContainer = function (e, t, s, l) {
      if (!Bi(s)) throw Error(r(200));
      if (e == null || e._reactInternals === void 0) throw Error(r(38));
      return Vi(e, t, s, !1, l);
    }),
    (ft.version = "18.3.1-next-f1338f8080-20240426"),
    ft
  );
}
var Bd;
function Em() {
  if (Bd) return nl.exports;
  Bd = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (n) {
        console.error(n);
      }
  }
  return o(), (nl.exports = Nm()), nl.exports;
}
var Vd;
function Pm() {
  if (Vd) return Hi;
  Vd = 1;
  var o = Em();
  return (Hi.createRoot = o.createRoot), (Hi.hydrateRoot = o.hydrateRoot), Hi;
}
var Om = Pm();
function Or(o) {
  "@babel/helpers - typeof";
  return (
    (Or =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    Or(o)
  );
}
function Tm(o, n) {
  if (Or(o) != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(o, n);
    if (Or(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(o);
}
function Jf(o) {
  var n = Tm(o, "string");
  return Or(n) == "symbol" ? n : n + "";
}
function Gf(o, n, r) {
  return (
    (n = Jf(n)) in o
      ? Object.defineProperty(o, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (o[n] = r),
    o
  );
}
function Lm() {
  if (console && console.warn) {
    for (var o, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    typeof r[0] == "string" && (r[0] = "react-i18next:: ".concat(r[0])),
      (o = console).warn.apply(o, r);
  }
}
var Wd = {};
function bl() {
  for (var o = arguments.length, n = new Array(o), r = 0; r < o; r++)
    n[r] = arguments[r];
  (typeof n[0] == "string" && Wd[n[0]]) ||
    (typeof n[0] == "string" && (Wd[n[0]] = new Date()), Lm.apply(void 0, n));
}
var Qf = function (n, r) {
  return function () {
    if (n.isInitialized) r();
    else {
      var i = function a() {
        setTimeout(function () {
          n.off("initialized", a);
        }, 0),
          r();
      };
      n.on("initialized", i);
    }
  };
};
function Hd(o, n, r) {
  o.loadNamespaces(n, Qf(o, r));
}
function Kd(o, n, r, i) {
  typeof r == "string" && (r = [r]),
    r.forEach(function (a) {
      o.options.ns.indexOf(a) < 0 && o.options.ns.push(a);
    }),
    o.loadLanguages(n, Qf(o, i));
}
function Rm(o, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    i = n.languages[0],
    a = n.options ? n.options.fallbackLng : !1,
    u = n.languages[n.languages.length - 1];
  if (i.toLowerCase() === "cimode") return !0;
  var d = function (m, g) {
    var v = n.services.backendConnector.state["".concat(m, "|").concat(g)];
    return v === -1 || v === 2;
  };
  return r.bindI18n &&
    r.bindI18n.indexOf("languageChanging") > -1 &&
    n.services.backendConnector.backend &&
    n.isLanguageChangingTo &&
    !d(n.isLanguageChangingTo, o)
    ? !1
    : !!(
        n.hasResourceBundle(i, o) ||
        !n.services.backendConnector.backend ||
        (n.options.resources && !n.options.partialBundledLanguages) ||
        (d(i, o) && (!a || d(u, o)))
      );
}
function Am(o, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!n.languages || !n.languages.length)
    return bl("i18n.languages were undefined or empty", n.languages), !0;
  var i = n.options.ignoreJSONStructure !== void 0;
  return i
    ? n.hasLoadedNamespace(o, {
        lng: r.lng,
        precheck: function (u, d) {
          if (
            r.bindI18n &&
            r.bindI18n.indexOf("languageChanging") > -1 &&
            u.services.backendConnector.backend &&
            u.isLanguageChangingTo &&
            !d(u.isLanguageChangingTo, o)
          )
            return !1;
        },
      })
    : Rm(o, n, r);
}
var Im =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  $m = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Dm = function (n) {
    return $m[n];
  },
  Um = function (n) {
    return n.replace(Im, Dm);
  };
function qd(o, n) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    n &&
      (i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(o, a).enumerable;
      })),
      r.push.apply(r, i);
  }
  return r;
}
function Jd(o) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? qd(Object(r), !0).forEach(function (i) {
          Gf(o, i, r[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
      : qd(Object(r)).forEach(function (i) {
          Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(r, i));
        });
  }
  return o;
}
var _l = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Um,
};
function Fm() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  _l = Jd(Jd({}, _l), o);
}
function Mm() {
  return _l;
}
var Yf;
function zm(o) {
  Yf = o;
}
function Bm() {
  return Yf;
}
function Vm(o, n) {
  if (!(o instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Wm(o, n) {
  for (var r = 0; r < n.length; r++) {
    var i = n[r];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(o, Jf(i.key), i);
  }
}
function Hm(o, n, r) {
  return (
    n && Wm(o.prototype, n),
    Object.defineProperty(o, "prototype", { writable: !1 }),
    o
  );
}
var Km = {
    type: "3rdParty",
    init: function (n) {
      Fm(n.options.react), zm(n);
    },
  },
  qm = K.createContext(),
  Jm = (function () {
    function o() {
      Vm(this, o), (this.usedNamespaces = {});
    }
    return (
      Hm(o, [
        {
          key: "addUsedNamespaces",
          value: function (r) {
            var i = this;
            r.forEach(function (a) {
              i.usedNamespaces[a] || (i.usedNamespaces[a] = !0);
            });
          },
        },
        {
          key: "getUsedNamespaces",
          value: function () {
            return Object.keys(this.usedNamespaces);
          },
        },
      ]),
      o
    );
  })();
function Gm(o) {
  if (Array.isArray(o)) return o;
}
function Qm(o, n) {
  var r =
    o == null
      ? null
      : (typeof Symbol < "u" && o[Symbol.iterator]) || o["@@iterator"];
  if (r != null) {
    var i,
      a,
      u,
      d,
      p = [],
      m = !0,
      g = !1;
    try {
      if (((u = (r = r.call(o)).next), n !== 0))
        for (
          ;
          !(m = (i = u.call(r)).done) && (p.push(i.value), p.length !== n);
          m = !0
        );
    } catch (v) {
      (g = !0), (a = v);
    } finally {
      try {
        if (!m && r.return != null && ((d = r.return()), Object(d) !== d))
          return;
      } finally {
        if (g) throw a;
      }
    }
    return p;
  }
}
function Gd(o, n) {
  (n == null || n > o.length) && (n = o.length);
  for (var r = 0, i = Array(n); r < n; r++) i[r] = o[r];
  return i;
}
function Ym(o, n) {
  if (o) {
    if (typeof o == "string") return Gd(o, n);
    var r = {}.toString.call(o).slice(8, -1);
    return (
      r === "Object" && o.constructor && (r = o.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(o)
        : r === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? Gd(o, n)
        : void 0
    );
  }
}
function Xm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zm(o, n) {
  return Gm(o) || Qm(o, n) || Ym(o, n) || Xm();
}
function Qd(o, n) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    n &&
      (i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(o, a).enumerable;
      })),
      r.push.apply(r, i);
  }
  return r;
}
function il(o) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? Qd(Object(r), !0).forEach(function (i) {
          Gf(o, i, r[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
      : Qd(Object(r)).forEach(function (i) {
          Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(r, i));
        });
  }
  return o;
}
var eg = function (n, r) {
  var i = K.useRef();
  return (
    K.useEffect(
      function () {
        i.current = n;
      },
      [n, r]
    ),
    i.current
  );
};
function pt(o) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.i18n,
    i = K.useContext(qm) || {},
    a = i.i18n,
    u = i.defaultNS,
    d = r || a || Bm();
  if ((d && !d.reportNamespaces && (d.reportNamespaces = new Jm()), !d)) {
    bl(
      "You will need to pass in an i18next instance by using initReactI18next"
    );
    var p = function (pe, oe) {
        return typeof oe == "string"
          ? oe
          : oe && Or(oe) === "object" && typeof oe.defaultValue == "string"
          ? oe.defaultValue
          : Array.isArray(pe)
          ? pe[pe.length - 1]
          : pe;
      },
      m = [p, {}, !1];
    return (m.t = p), (m.i18n = {}), (m.ready = !1), m;
  }
  d.options.react &&
    d.options.react.wait !== void 0 &&
    bl(
      "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
    );
  var g = il(il(il({}, Mm()), d.options.react), n),
    v = g.useSuspense,
    w = g.keyPrefix,
    x = u || (d.options && d.options.defaultNS);
  (x = typeof x == "string" ? [x] : x || ["translation"]),
    d.reportNamespaces.addUsedNamespaces &&
      d.reportNamespaces.addUsedNamespaces(x);
  var S =
    (d.isInitialized || d.initializedStoreOnce) &&
    x.every(function (Y) {
      return Am(Y, d, g);
    });
  function _() {
    return d.getFixedT(n.lng || null, g.nsMode === "fallback" ? x : x[0], w);
  }
  var L = K.useState(_),
    P = Zm(L, 2),
    q = P[0],
    W = P[1],
    A = x.join();
  n.lng && (A = "".concat(n.lng).concat(A));
  var R = eg(A),
    Q = K.useRef(!0);
  K.useEffect(
    function () {
      var Y = g.bindI18n,
        pe = g.bindI18nStore;
      (Q.current = !0),
        !S &&
          !v &&
          (n.lng
            ? Kd(d, n.lng, x, function () {
                Q.current && W(_);
              })
            : Hd(d, x, function () {
                Q.current && W(_);
              })),
        S && R && R !== A && Q.current && W(_);
      function oe() {
        Q.current && W(_);
      }
      return (
        Y && d && d.on(Y, oe),
        pe && d && d.store.on(pe, oe),
        function () {
          (Q.current = !1),
            Y &&
              d &&
              Y.split(" ").forEach(function (ge) {
                return d.off(ge, oe);
              }),
            pe &&
              d &&
              pe.split(" ").forEach(function (ge) {
                return d.store.off(ge, oe);
              });
        }
      );
    },
    [d, A]
  );
  var B = K.useRef(!0);
  K.useEffect(
    function () {
      Q.current && !B.current && W(_), (B.current = !1);
    },
    [d, w]
  );
  var M = [q, d, S];
  if (((M.t = q), (M.i18n = d), (M.ready = S), S || (!S && !v))) return M;
  throw new Promise(function (Y) {
    n.lng
      ? Kd(d, n.lng, x, function () {
          return Y();
        })
      : Hd(d, x, function () {
          return Y();
        });
  });
}
const tg = "modulepreload",
  ng = function (o, n) {
    return new URL(o, n).href;
  },
  Yd = {},
  As = function (n, r, i) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let d = function (v) {
        return Promise.all(
          v.map((w) =>
            Promise.resolve(w).then(
              (x) => ({ status: "fulfilled", value: x }),
              (x) => ({ status: "rejected", reason: x })
            )
          )
        );
      };
      const p = document.getElementsByTagName("link"),
        m = document.querySelector("meta[property=csp-nonce]"),
        g =
          (m == null ? void 0 : m.nonce) ||
          (m == null ? void 0 : m.getAttribute("nonce"));
      a = d(
        r.map((v) => {
          if (((v = ng(v, i)), v in Yd)) return;
          Yd[v] = !0;
          const w = v.endsWith(".css"),
            x = w ? '[rel="stylesheet"]' : "";
          if (!!i)
            for (let L = p.length - 1; L >= 0; L--) {
              const P = p[L];
              if (P.href === v && (!w || P.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${v}"]${x}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = w ? "stylesheet" : tg),
            w || (_.as = "script"),
            (_.crossOrigin = ""),
            (_.href = v),
            g && _.setAttribute("nonce", g),
            document.head.appendChild(_),
            w)
          )
            return new Promise((L, P) => {
              _.addEventListener("load", L),
                _.addEventListener("error", () =>
                  P(new Error(`Unable to preload CSS for ${v}`))
                );
            });
        })
      );
    }
    function u(d) {
      const p = new Event("vite:preloadError", { cancelable: !0 });
      if (((p.payload = d), window.dispatchEvent(p), !p.defaultPrevented))
        throw d;
    }
    return a.then((d) => {
      for (const p of d || []) p.status === "rejected" && u(p.reason);
      return n().catch(u);
    });
  },
  rg = (o) => {
    let n;
    return (
      o
        ? (n = o)
        : typeof fetch > "u"
        ? (n = (...r) =>
            As(
              async () => {
                const { default: i } = await Promise.resolve().then(() => Lr);
                return { default: i };
              },
              void 0,
              import.meta.url
            ).then(({ default: i }) => i(...r)))
        : (n = fetch),
      (...r) => n(...r)
    );
  };
class Ul extends Error {
  constructor(n, r = "FunctionsError", i) {
    super(n), (this.name = r), (this.context = i);
  }
}
class sg extends Ul {
  constructor(n) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      n
    );
  }
}
class Xd extends Ul {
  constructor(n) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", n);
  }
}
class Zd extends Ul {
  constructor(n) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      n
    );
  }
}
var Sl;
(function (o) {
  (o.Any = "any"),
    (o.ApNortheast1 = "ap-northeast-1"),
    (o.ApNortheast2 = "ap-northeast-2"),
    (o.ApSouth1 = "ap-south-1"),
    (o.ApSoutheast1 = "ap-southeast-1"),
    (o.ApSoutheast2 = "ap-southeast-2"),
    (o.CaCentral1 = "ca-central-1"),
    (o.EuCentral1 = "eu-central-1"),
    (o.EuWest1 = "eu-west-1"),
    (o.EuWest2 = "eu-west-2"),
    (o.EuWest3 = "eu-west-3"),
    (o.SaEast1 = "sa-east-1"),
    (o.UsEast1 = "us-east-1"),
    (o.UsWest1 = "us-west-1"),
    (o.UsWest2 = "us-west-2");
})(Sl || (Sl = {}));
var ig = function (o, n, r, i) {
  function a(u) {
    return u instanceof r
      ? u
      : new r(function (d) {
          d(u);
        });
  }
  return new (r || (r = Promise))(function (u, d) {
    function p(v) {
      try {
        g(i.next(v));
      } catch (w) {
        d(w);
      }
    }
    function m(v) {
      try {
        g(i.throw(v));
      } catch (w) {
        d(w);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(p, m);
    }
    g((i = i.apply(o, n || [])).next());
  });
};
class og {
  constructor(n, { headers: r = {}, customFetch: i, region: a = Sl.Any } = {}) {
    (this.url = n), (this.headers = r), (this.region = a), (this.fetch = rg(i));
  }
  setAuth(n) {
    this.headers.Authorization = `Bearer ${n}`;
  }
  invoke(n, r = {}) {
    var i;
    return ig(this, void 0, void 0, function* () {
      try {
        const { headers: a, method: u, body: d } = r;
        let p = {},
          { region: m } = r;
        m || (m = this.region);
        const g = new URL(`${this.url}/${n}`);
        m &&
          m !== "any" &&
          ((p["x-region"] = m), g.searchParams.set("forceFunctionRegion", m));
        let v;
        d &&
          ((a && !Object.prototype.hasOwnProperty.call(a, "Content-Type")) ||
            !a) &&
          ((typeof Blob < "u" && d instanceof Blob) || d instanceof ArrayBuffer
            ? ((p["Content-Type"] = "application/octet-stream"), (v = d))
            : typeof d == "string"
            ? ((p["Content-Type"] = "text/plain"), (v = d))
            : typeof FormData < "u" && d instanceof FormData
            ? (v = d)
            : ((p["Content-Type"] = "application/json"),
              (v = JSON.stringify(d))));
        const w = yield this.fetch(g.toString(), {
            method: u || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, p), this.headers),
              a
            ),
            body: v,
          }).catch((L) => {
            throw new sg(L);
          }),
          x = w.headers.get("x-relay-error");
        if (x && x === "true") throw new Xd(w);
        if (!w.ok) throw new Zd(w);
        let S = (
            (i = w.headers.get("Content-Type")) !== null && i !== void 0
              ? i
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          _;
        return (
          S === "application/json"
            ? (_ = yield w.json())
            : S === "application/octet-stream"
            ? (_ = yield w.blob())
            : S === "text/event-stream"
            ? (_ = w)
            : S === "multipart/form-data"
            ? (_ = yield w.formData())
            : (_ = yield w.text()),
          { data: _, error: null, response: w }
        );
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof Zd || a instanceof Xd ? a.context : void 0,
        };
      }
    });
  }
}
var Qe = {},
  gr = {},
  vr = {},
  yr = {},
  xr = {},
  wr = {},
  ag = function () {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  },
  Tr = ag();
const lg = Tr.fetch,
  Xf = Tr.fetch.bind(Tr),
  Zf = Tr.Headers,
  ug = Tr.Request,
  cg = Tr.Response,
  Lr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Headers: Zf,
        Request: ug,
        Response: cg,
        default: Xf,
        fetch: lg,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dg = bm(Lr);
var Ki = {},
  ef;
function eh() {
  if (ef) return Ki;
  (ef = 1), Object.defineProperty(Ki, "__esModule", { value: !0 });
  class o extends Error {
    constructor(r) {
      super(r.message),
        (this.name = "PostgrestError"),
        (this.details = r.details),
        (this.hint = r.hint),
        (this.code = r.code);
    }
  }
  return (Ki.default = o), Ki;
}
var tf;
function th() {
  if (tf) return wr;
  tf = 1;
  var o =
    (wr && wr.__importDefault) ||
    function (a) {
      return a && a.__esModule ? a : { default: a };
    };
  Object.defineProperty(wr, "__esModule", { value: !0 });
  const n = o(dg),
    r = o(eh());
  class i {
    constructor(u) {
      (this.shouldThrowOnError = !1),
        (this.method = u.method),
        (this.url = u.url),
        (this.headers = u.headers),
        (this.schema = u.schema),
        (this.body = u.body),
        (this.shouldThrowOnError = u.shouldThrowOnError),
        (this.signal = u.signal),
        (this.isMaybeSingle = u.isMaybeSingle),
        u.fetch
          ? (this.fetch = u.fetch)
          : typeof fetch > "u"
          ? (this.fetch = n.default)
          : (this.fetch = fetch);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(u, d) {
      return (
        (this.headers = Object.assign({}, this.headers)),
        (this.headers[u] = d),
        this
      );
    }
    then(u, d) {
      this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? (this.headers["Accept-Profile"] = this.schema)
          : (this.headers["Content-Profile"] = this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          (this.headers["Content-Type"] = "application/json");
      const p = this.fetch;
      let m = p(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (g) => {
        var v, w, x;
        let S = null,
          _ = null,
          L = null,
          P = g.status,
          q = g.statusText;
        if (g.ok) {
          if (this.method !== "HEAD") {
            const Q = await g.text();
            Q === "" ||
              (this.headers.Accept === "text/csv" ||
              (this.headers.Accept &&
                this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
                ? (_ = Q)
                : (_ = JSON.parse(Q)));
          }
          const A =
              (v = this.headers.Prefer) === null || v === void 0
                ? void 0
                : v.match(/count=(exact|planned|estimated)/),
            R =
              (w = g.headers.get("content-range")) === null || w === void 0
                ? void 0
                : w.split("/");
          A && R && R.length > 1 && (L = parseInt(R[1])),
            this.isMaybeSingle &&
              this.method === "GET" &&
              Array.isArray(_) &&
              (_.length > 1
                ? ((S = {
                    code: "PGRST116",
                    details: `Results contain ${_.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (_ = null),
                  (L = null),
                  (P = 406),
                  (q = "Not Acceptable"))
                : _.length === 1
                ? (_ = _[0])
                : (_ = null));
        } else {
          const A = await g.text();
          try {
            (S = JSON.parse(A)),
              Array.isArray(S) &&
                g.status === 404 &&
                ((_ = []), (S = null), (P = 200), (q = "OK"));
          } catch {
            g.status === 404 && A === ""
              ? ((P = 204), (q = "No Content"))
              : (S = { message: A });
          }
          if (
            (S &&
              this.isMaybeSingle &&
              !(
                (x = S == null ? void 0 : S.details) === null || x === void 0
              ) &&
              x.includes("0 rows") &&
              ((S = null), (P = 200), (q = "OK")),
            S && this.shouldThrowOnError)
          )
            throw new r.default(S);
        }
        return { error: S, data: _, count: L, status: P, statusText: q };
      });
      return (
        this.shouldThrowOnError ||
          (m = m.catch((g) => {
            var v, w, x;
            return {
              error: {
                message: `${
                  (v = g == null ? void 0 : g.name) !== null && v !== void 0
                    ? v
                    : "FetchError"
                }: ${g == null ? void 0 : g.message}`,
                details: `${
                  (w = g == null ? void 0 : g.stack) !== null && w !== void 0
                    ? w
                    : ""
                }`,
                hint: "",
                code: `${
                  (x = g == null ? void 0 : g.code) !== null && x !== void 0
                    ? x
                    : ""
                }`,
              },
              data: null,
              count: null,
              status: 0,
              statusText: "",
            };
          })),
        m.then(u, d)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  }
  return (wr.default = i), wr;
}
var nf;
function nh() {
  if (nf) return xr;
  nf = 1;
  var o =
    (xr && xr.__importDefault) ||
    function (i) {
      return i && i.__esModule ? i : { default: i };
    };
  Object.defineProperty(xr, "__esModule", { value: !0 });
  const n = o(th());
  class r extends n.default {
    select(a) {
      let u = !1;
      const d = (a ?? "*")
        .split("")
        .map((p) => (/\s/.test(p) && !u ? "" : (p === '"' && (u = !u), p)))
        .join("");
      return (
        this.url.searchParams.set("select", d),
        this.headers.Prefer && (this.headers.Prefer += ","),
        (this.headers.Prefer += "return=representation"),
        this
      );
    }
    order(
      a,
      {
        ascending: u = !0,
        nullsFirst: d,
        foreignTable: p,
        referencedTable: m = p,
      } = {}
    ) {
      const g = m ? `${m}.order` : "order",
        v = this.url.searchParams.get(g);
      return (
        this.url.searchParams.set(
          g,
          `${v ? `${v},` : ""}${a}.${u ? "asc" : "desc"}${
            d === void 0 ? "" : d ? ".nullsfirst" : ".nullslast"
          }`
        ),
        this
      );
    }
    limit(a, { foreignTable: u, referencedTable: d = u } = {}) {
      const p = typeof d > "u" ? "limit" : `${d}.limit`;
      return this.url.searchParams.set(p, `${a}`), this;
    }
    range(a, u, { foreignTable: d, referencedTable: p = d } = {}) {
      const m = typeof p > "u" ? "offset" : `${p}.offset`,
        g = typeof p > "u" ? "limit" : `${p}.limit`;
      return (
        this.url.searchParams.set(m, `${a}`),
        this.url.searchParams.set(g, `${u - a + 1}`),
        this
      );
    }
    abortSignal(a) {
      return (this.signal = a), this;
    }
    single() {
      return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? (this.headers.Accept = "application/json")
          : (this.headers.Accept = "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return (this.headers.Accept = "text/csv"), this;
    }
    geojson() {
      return (this.headers.Accept = "application/geo+json"), this;
    }
    explain({
      analyze: a = !1,
      verbose: u = !1,
      settings: d = !1,
      buffers: p = !1,
      wal: m = !1,
      format: g = "text",
    } = {}) {
      var v;
      const w = [
          a ? "analyze" : null,
          u ? "verbose" : null,
          d ? "settings" : null,
          p ? "buffers" : null,
          m ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        x =
          (v = this.headers.Accept) !== null && v !== void 0
            ? v
            : "application/json";
      return (
        (this.headers.Accept = `application/vnd.pgrst.plan+${g}; for="${x}"; options=${w};`),
        g === "json" ? this : this
      );
    }
    rollback() {
      var a;
      return (
        ((a = this.headers.Prefer) !== null && a !== void 0 ? a : "").trim()
          .length > 0
          ? (this.headers.Prefer += ",tx=rollback")
          : (this.headers.Prefer = "tx=rollback"),
        this
      );
    }
    returns() {
      return this;
    }
  }
  return (xr.default = r), xr;
}
var rf;
function Fl() {
  if (rf) return yr;
  rf = 1;
  var o =
    (yr && yr.__importDefault) ||
    function (i) {
      return i && i.__esModule ? i : { default: i };
    };
  Object.defineProperty(yr, "__esModule", { value: !0 });
  const n = o(nh());
  class r extends n.default {
    eq(a, u) {
      return this.url.searchParams.append(a, `eq.${u}`), this;
    }
    neq(a, u) {
      return this.url.searchParams.append(a, `neq.${u}`), this;
    }
    gt(a, u) {
      return this.url.searchParams.append(a, `gt.${u}`), this;
    }
    gte(a, u) {
      return this.url.searchParams.append(a, `gte.${u}`), this;
    }
    lt(a, u) {
      return this.url.searchParams.append(a, `lt.${u}`), this;
    }
    lte(a, u) {
      return this.url.searchParams.append(a, `lte.${u}`), this;
    }
    like(a, u) {
      return this.url.searchParams.append(a, `like.${u}`), this;
    }
    likeAllOf(a, u) {
      return (
        this.url.searchParams.append(a, `like(all).{${u.join(",")}}`), this
      );
    }
    likeAnyOf(a, u) {
      return (
        this.url.searchParams.append(a, `like(any).{${u.join(",")}}`), this
      );
    }
    ilike(a, u) {
      return this.url.searchParams.append(a, `ilike.${u}`), this;
    }
    ilikeAllOf(a, u) {
      return (
        this.url.searchParams.append(a, `ilike(all).{${u.join(",")}}`), this
      );
    }
    ilikeAnyOf(a, u) {
      return (
        this.url.searchParams.append(a, `ilike(any).{${u.join(",")}}`), this
      );
    }
    is(a, u) {
      return this.url.searchParams.append(a, `is.${u}`), this;
    }
    in(a, u) {
      const d = Array.from(new Set(u))
        .map((p) =>
          typeof p == "string" && new RegExp("[,()]").test(p)
            ? `"${p}"`
            : `${p}`
        )
        .join(",");
      return this.url.searchParams.append(a, `in.(${d})`), this;
    }
    contains(a, u) {
      return (
        typeof u == "string"
          ? this.url.searchParams.append(a, `cs.${u}`)
          : Array.isArray(u)
          ? this.url.searchParams.append(a, `cs.{${u.join(",")}}`)
          : this.url.searchParams.append(a, `cs.${JSON.stringify(u)}`),
        this
      );
    }
    containedBy(a, u) {
      return (
        typeof u == "string"
          ? this.url.searchParams.append(a, `cd.${u}`)
          : Array.isArray(u)
          ? this.url.searchParams.append(a, `cd.{${u.join(",")}}`)
          : this.url.searchParams.append(a, `cd.${JSON.stringify(u)}`),
        this
      );
    }
    rangeGt(a, u) {
      return this.url.searchParams.append(a, `sr.${u}`), this;
    }
    rangeGte(a, u) {
      return this.url.searchParams.append(a, `nxl.${u}`), this;
    }
    rangeLt(a, u) {
      return this.url.searchParams.append(a, `sl.${u}`), this;
    }
    rangeLte(a, u) {
      return this.url.searchParams.append(a, `nxr.${u}`), this;
    }
    rangeAdjacent(a, u) {
      return this.url.searchParams.append(a, `adj.${u}`), this;
    }
    overlaps(a, u) {
      return (
        typeof u == "string"
          ? this.url.searchParams.append(a, `ov.${u}`)
          : this.url.searchParams.append(a, `ov.{${u.join(",")}}`),
        this
      );
    }
    textSearch(a, u, { config: d, type: p } = {}) {
      let m = "";
      p === "plain"
        ? (m = "pl")
        : p === "phrase"
        ? (m = "ph")
        : p === "websearch" && (m = "w");
      const g = d === void 0 ? "" : `(${d})`;
      return this.url.searchParams.append(a, `${m}fts${g}.${u}`), this;
    }
    match(a) {
      return (
        Object.entries(a).forEach(([u, d]) => {
          this.url.searchParams.append(u, `eq.${d}`);
        }),
        this
      );
    }
    not(a, u, d) {
      return this.url.searchParams.append(a, `not.${u}.${d}`), this;
    }
    or(a, { foreignTable: u, referencedTable: d = u } = {}) {
      const p = d ? `${d}.or` : "or";
      return this.url.searchParams.append(p, `(${a})`), this;
    }
    filter(a, u, d) {
      return this.url.searchParams.append(a, `${u}.${d}`), this;
    }
  }
  return (yr.default = r), yr;
}
var sf;
function rh() {
  if (sf) return vr;
  sf = 1;
  var o =
    (vr && vr.__importDefault) ||
    function (i) {
      return i && i.__esModule ? i : { default: i };
    };
  Object.defineProperty(vr, "__esModule", { value: !0 });
  const n = o(Fl());
  class r {
    constructor(a, { headers: u = {}, schema: d, fetch: p }) {
      (this.url = a), (this.headers = u), (this.schema = d), (this.fetch = p);
    }
    select(a, { head: u = !1, count: d } = {}) {
      const p = u ? "HEAD" : "GET";
      let m = !1;
      const g = (a ?? "*")
        .split("")
        .map((v) => (/\s/.test(v) && !m ? "" : (v === '"' && (m = !m), v)))
        .join("");
      return (
        this.url.searchParams.set("select", g),
        d && (this.headers.Prefer = `count=${d}`),
        new n.default({
          method: p,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
    insert(a, { count: u, defaultToNull: d = !0 } = {}) {
      const p = "POST",
        m = [];
      if (
        (this.headers.Prefer && m.push(this.headers.Prefer),
        u && m.push(`count=${u}`),
        d || m.push("missing=default"),
        (this.headers.Prefer = m.join(",")),
        Array.isArray(a))
      ) {
        const g = a.reduce((v, w) => v.concat(Object.keys(w)), []);
        if (g.length > 0) {
          const v = [...new Set(g)].map((w) => `"${w}"`);
          this.url.searchParams.set("columns", v.join(","));
        }
      }
      return new n.default({
        method: p,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: a,
        fetch: this.fetch,
        allowEmpty: !1,
      });
    }
    upsert(
      a,
      {
        onConflict: u,
        ignoreDuplicates: d = !1,
        count: p,
        defaultToNull: m = !0,
      } = {}
    ) {
      const g = "POST",
        v = [`resolution=${d ? "ignore" : "merge"}-duplicates`];
      if (
        (u !== void 0 && this.url.searchParams.set("on_conflict", u),
        this.headers.Prefer && v.push(this.headers.Prefer),
        p && v.push(`count=${p}`),
        m || v.push("missing=default"),
        (this.headers.Prefer = v.join(",")),
        Array.isArray(a))
      ) {
        const w = a.reduce((x, S) => x.concat(Object.keys(S)), []);
        if (w.length > 0) {
          const x = [...new Set(w)].map((S) => `"${S}"`);
          this.url.searchParams.set("columns", x.join(","));
        }
      }
      return new n.default({
        method: g,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: a,
        fetch: this.fetch,
        allowEmpty: !1,
      });
    }
    update(a, { count: u } = {}) {
      const d = "PATCH",
        p = [];
      return (
        this.headers.Prefer && p.push(this.headers.Prefer),
        u && p.push(`count=${u}`),
        (this.headers.Prefer = p.join(",")),
        new n.default({
          method: d,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: a,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
    delete({ count: a } = {}) {
      const u = "DELETE",
        d = [];
      return (
        a && d.push(`count=${a}`),
        this.headers.Prefer && d.unshift(this.headers.Prefer),
        (this.headers.Prefer = d.join(",")),
        new n.default({
          method: u,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
  }
  return (vr.default = r), vr;
}
var bs = {},
  _s = {},
  of;
function fg() {
  return (
    of ||
      ((of = 1),
      Object.defineProperty(_s, "__esModule", { value: !0 }),
      (_s.version = void 0),
      (_s.version = "0.0.0-automated")),
    _s
  );
}
var af;
function hg() {
  if (af) return bs;
  (af = 1),
    Object.defineProperty(bs, "__esModule", { value: !0 }),
    (bs.DEFAULT_HEADERS = void 0);
  const o = fg();
  return (
    (bs.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${o.version}` }), bs
  );
}
var lf;
function pg() {
  if (lf) return gr;
  lf = 1;
  var o =
    (gr && gr.__importDefault) ||
    function (u) {
      return u && u.__esModule ? u : { default: u };
    };
  Object.defineProperty(gr, "__esModule", { value: !0 });
  const n = o(rh()),
    r = o(Fl()),
    i = hg();
  class a {
    constructor(d, { headers: p = {}, schema: m, fetch: g } = {}) {
      (this.url = d),
        (this.headers = Object.assign(Object.assign({}, i.DEFAULT_HEADERS), p)),
        (this.schemaName = m),
        (this.fetch = g);
    }
    from(d) {
      const p = new URL(`${this.url}/${d}`);
      return new n.default(p, {
        headers: Object.assign({}, this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
      });
    }
    schema(d) {
      return new a(this.url, {
        headers: this.headers,
        schema: d,
        fetch: this.fetch,
      });
    }
    rpc(d, p = {}, { head: m = !1, get: g = !1, count: v } = {}) {
      let w;
      const x = new URL(`${this.url}/rpc/${d}`);
      let S;
      m || g
        ? ((w = m ? "HEAD" : "GET"),
          Object.entries(p)
            .filter(([L, P]) => P !== void 0)
            .map(([L, P]) => [
              L,
              Array.isArray(P) ? `{${P.join(",")}}` : `${P}`,
            ])
            .forEach(([L, P]) => {
              x.searchParams.append(L, P);
            }))
        : ((w = "POST"), (S = p));
      const _ = Object.assign({}, this.headers);
      return (
        v && (_.Prefer = `count=${v}`),
        new r.default({
          method: w,
          url: x,
          headers: _,
          schema: this.schemaName,
          body: S,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
  }
  return (gr.default = a), gr;
}
var uf;
function mg() {
  if (uf) return Qe;
  uf = 1;
  var o =
    (Qe && Qe.__importDefault) ||
    function (p) {
      return p && p.__esModule ? p : { default: p };
    };
  Object.defineProperty(Qe, "__esModule", { value: !0 }),
    (Qe.PostgrestError =
      Qe.PostgrestBuilder =
      Qe.PostgrestTransformBuilder =
      Qe.PostgrestFilterBuilder =
      Qe.PostgrestQueryBuilder =
      Qe.PostgrestClient =
        void 0);
  const n = o(pg());
  Qe.PostgrestClient = n.default;
  const r = o(rh());
  Qe.PostgrestQueryBuilder = r.default;
  const i = o(Fl());
  Qe.PostgrestFilterBuilder = i.default;
  const a = o(nh());
  Qe.PostgrestTransformBuilder = a.default;
  const u = o(th());
  Qe.PostgrestBuilder = u.default;
  const d = o(eh());
  return (
    (Qe.PostgrestError = d.default),
    (Qe.default = {
      PostgrestClient: n.default,
      PostgrestQueryBuilder: r.default,
      PostgrestFilterBuilder: i.default,
      PostgrestTransformBuilder: a.default,
      PostgrestBuilder: u.default,
      PostgrestError: d.default,
    }),
    Qe
  );
}
var gg = mg();
const vg = $l(gg),
  {
    PostgrestClient: yg,
    PostgrestQueryBuilder: gy,
    PostgrestFilterBuilder: vy,
    PostgrestTransformBuilder: yy,
    PostgrestBuilder: xy,
    PostgrestError: wy,
  } = vg;
class xg {
  static detectEnvironment() {
    var n;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((n = navigator.userAgent) === null || n === void 0) &&
        n.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    if (typeof process < "u" && process.versions && process.versions.node) {
      const r = parseInt(process.versions.node.split(".")[0]);
      return r >= 22
        ? typeof globalThis.WebSocket < "u"
          ? { type: "native", constructor: globalThis.WebSocket }
          : {
              type: "unsupported",
              error: `Node.js ${r} detected but native WebSocket not found.`,
              workaround:
                "Provide a WebSocket implementation via the transport option.",
            }
        : {
            type: "unsupported",
            error: `Node.js ${r} detected without native WebSocket support.`,
            workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
          };
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const n = this.detectEnvironment();
    if (n.constructor) return n.constructor;
    let r = n.error || "WebSocket not supported in this environment.";
    throw (
      (n.workaround &&
        (r += `

Suggested solution: ${n.workaround}`),
      new Error(r))
    );
  }
  static createWebSocket(n, r) {
    const i = this.getWebSocketConstructor();
    return new i(n, r);
  }
  static isWebSocketSupported() {
    try {
      const n = this.detectEnvironment();
      return n.type === "native" || n.type === "ws";
    } catch {
      return !1;
    }
  }
}
const wg = "2.15.1",
  bg = `realtime-js/${wg}`,
  _g = "1.0.0",
  kl = 1e4,
  Sg = 1e3,
  kg = 100;
var Ns;
(function (o) {
  (o[(o.connecting = 0)] = "connecting"),
    (o[(o.open = 1)] = "open"),
    (o[(o.closing = 2)] = "closing"),
    (o[(o.closed = 3)] = "closed");
})(Ns || (Ns = {}));
var Ke;
(function (o) {
  (o.closed = "closed"),
    (o.errored = "errored"),
    (o.joined = "joined"),
    (o.joining = "joining"),
    (o.leaving = "leaving");
})(Ke || (Ke = {}));
var Rt;
(function (o) {
  (o.close = "phx_close"),
    (o.error = "phx_error"),
    (o.join = "phx_join"),
    (o.reply = "phx_reply"),
    (o.leave = "phx_leave"),
    (o.access_token = "access_token");
})(Rt || (Rt = {}));
var jl;
(function (o) {
  o.websocket = "websocket";
})(jl || (jl = {}));
var Bn;
(function (o) {
  (o.Connecting = "connecting"),
    (o.Open = "open"),
    (o.Closing = "closing"),
    (o.Closed = "closed");
})(Bn || (Bn = {}));
class jg {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(n, r) {
    return n.constructor === ArrayBuffer
      ? r(this._binaryDecode(n))
      : r(typeof n == "string" ? JSON.parse(n) : {});
  }
  _binaryDecode(n) {
    const r = new DataView(n),
      i = new TextDecoder();
    return this._decodeBroadcast(n, r, i);
  }
  _decodeBroadcast(n, r, i) {
    const a = r.getUint8(1),
      u = r.getUint8(2);
    let d = this.HEADER_LENGTH + 2;
    const p = i.decode(n.slice(d, d + a));
    d = d + a;
    const m = i.decode(n.slice(d, d + u));
    d = d + u;
    const g = JSON.parse(i.decode(n.slice(d, n.byteLength)));
    return { ref: null, topic: p, event: m, payload: g };
  }
}
class sh {
  constructor(n, r) {
    (this.callback = n),
      (this.timerCalc = r),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = n),
      (this.timerCalc = r);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer), (this.timer = void 0);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
var Ee;
(function (o) {
  (o.abstime = "abstime"),
    (o.bool = "bool"),
    (o.date = "date"),
    (o.daterange = "daterange"),
    (o.float4 = "float4"),
    (o.float8 = "float8"),
    (o.int2 = "int2"),
    (o.int4 = "int4"),
    (o.int4range = "int4range"),
    (o.int8 = "int8"),
    (o.int8range = "int8range"),
    (o.json = "json"),
    (o.jsonb = "jsonb"),
    (o.money = "money"),
    (o.numeric = "numeric"),
    (o.oid = "oid"),
    (o.reltime = "reltime"),
    (o.text = "text"),
    (o.time = "time"),
    (o.timestamp = "timestamp"),
    (o.timestamptz = "timestamptz"),
    (o.timetz = "timetz"),
    (o.tsrange = "tsrange"),
    (o.tstzrange = "tstzrange");
})(Ee || (Ee = {}));
const cf = (o, n, r = {}) => {
    var i;
    const a = (i = r.skipTypes) !== null && i !== void 0 ? i : [];
    return Object.keys(n).reduce((u, d) => ((u[d] = Cg(d, o, n, a)), u), {});
  },
  Cg = (o, n, r, i) => {
    const a = n.find((p) => p.name === o),
      u = a == null ? void 0 : a.type,
      d = r[o];
    return u && !i.includes(u) ? ih(u, d) : Cl(d);
  },
  ih = (o, n) => {
    if (o.charAt(0) === "_") {
      const r = o.slice(1, o.length);
      return Og(n, r);
    }
    switch (o) {
      case Ee.bool:
        return Ng(n);
      case Ee.float4:
      case Ee.float8:
      case Ee.int2:
      case Ee.int4:
      case Ee.int8:
      case Ee.numeric:
      case Ee.oid:
        return Eg(n);
      case Ee.json:
      case Ee.jsonb:
        return Pg(n);
      case Ee.timestamp:
        return Tg(n);
      case Ee.abstime:
      case Ee.date:
      case Ee.daterange:
      case Ee.int4range:
      case Ee.int8range:
      case Ee.money:
      case Ee.reltime:
      case Ee.text:
      case Ee.time:
      case Ee.timestamptz:
      case Ee.timetz:
      case Ee.tsrange:
      case Ee.tstzrange:
        return Cl(n);
      default:
        return Cl(n);
    }
  },
  Cl = (o) => o,
  Ng = (o) => {
    switch (o) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return o;
    }
  },
  Eg = (o) => {
    if (typeof o == "string") {
      const n = parseFloat(o);
      if (!Number.isNaN(n)) return n;
    }
    return o;
  },
  Pg = (o) => {
    if (typeof o == "string")
      try {
        return JSON.parse(o);
      } catch (n) {
        return console.log(`JSON parse error: ${n}`), o;
      }
    return o;
  },
  Og = (o, n) => {
    if (typeof o != "string") return o;
    const r = o.length - 1,
      i = o[r];
    if (o[0] === "{" && i === "}") {
      let u;
      const d = o.slice(1, r);
      try {
        u = JSON.parse("[" + d + "]");
      } catch {
        u = d ? d.split(",") : [];
      }
      return u.map((p) => ih(n, p));
    }
    return o;
  },
  Tg = (o) => (typeof o == "string" ? o.replace(" ", "T") : o),
  oh = (o) => {
    let n = o;
    return (
      (n = n.replace(/^ws/i, "http")),
      (n = n.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
      n.replace(/\/+$/, "") + "/api/broadcast"
    );
  };
class ol {
  constructor(n, r, i = {}, a = kl) {
    (this.channel = n),
      (this.event = r),
      (this.payload = i),
      (this.timeout = a),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(n) {
    (this.timeout = n),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(n) {
    this.payload = Object.assign(Object.assign({}, this.payload), n);
  }
  receive(n, r) {
    var i;
    return (
      this._hasReceived(n) &&
        r(
          (i = this.receivedResp) === null || i === void 0 ? void 0 : i.response
        ),
      this.recHooks.push({ status: n, callback: r }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const n = (r) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = r),
        this._matchReceive(r);
    };
    this.channel._on(this.refEvent, {}, n),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(n, r) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: n, response: r });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: n, response: r }) {
    this.recHooks.filter((i) => i.status === n).forEach((i) => i.callback(r));
  }
  _hasReceived(n) {
    return this.receivedResp && this.receivedResp.status === n;
  }
}
var df;
(function (o) {
  (o.SYNC = "sync"), (o.JOIN = "join"), (o.LEAVE = "leave");
})(df || (df = {}));
class Es {
  constructor(n, r) {
    (this.channel = n),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.enabled = !1),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const i = (r == null ? void 0 : r.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(i.state, {}, (a) => {
      const { onJoin: u, onLeave: d, onSync: p } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = Es.syncState(this.state, a, u, d)),
        this.pendingDiffs.forEach((m) => {
          this.state = Es.syncDiff(this.state, m, u, d);
        }),
        (this.pendingDiffs = []),
        p();
    }),
      this.channel._on(i.diff, {}, (a) => {
        const { onJoin: u, onLeave: d, onSync: p } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(a)
          : ((this.state = Es.syncDiff(this.state, a, u, d)), p());
      }),
      this.onJoin((a, u, d) => {
        this.channel._trigger("presence", {
          event: "join",
          key: a,
          currentPresences: u,
          newPresences: d,
        });
      }),
      this.onLeave((a, u, d) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: a,
          currentPresences: u,
          leftPresences: d,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(n, r, i, a) {
    const u = this.cloneDeep(n),
      d = this.transformState(r),
      p = {},
      m = {};
    return (
      this.map(u, (g, v) => {
        d[g] || (m[g] = v);
      }),
      this.map(d, (g, v) => {
        const w = u[g];
        if (w) {
          const x = v.map((P) => P.presence_ref),
            S = w.map((P) => P.presence_ref),
            _ = v.filter((P) => S.indexOf(P.presence_ref) < 0),
            L = w.filter((P) => x.indexOf(P.presence_ref) < 0);
          _.length > 0 && (p[g] = _), L.length > 0 && (m[g] = L);
        } else p[g] = v;
      }),
      this.syncDiff(u, { joins: p, leaves: m }, i, a)
    );
  }
  static syncDiff(n, r, i, a) {
    const { joins: u, leaves: d } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves),
    };
    return (
      i || (i = () => {}),
      a || (a = () => {}),
      this.map(u, (p, m) => {
        var g;
        const v = (g = n[p]) !== null && g !== void 0 ? g : [];
        if (((n[p] = this.cloneDeep(m)), v.length > 0)) {
          const w = n[p].map((S) => S.presence_ref),
            x = v.filter((S) => w.indexOf(S.presence_ref) < 0);
          n[p].unshift(...x);
        }
        i(p, v, m);
      }),
      this.map(d, (p, m) => {
        let g = n[p];
        if (!g) return;
        const v = m.map((w) => w.presence_ref);
        (g = g.filter((w) => v.indexOf(w.presence_ref) < 0)),
          (n[p] = g),
          a(p, g, m),
          g.length === 0 && delete n[p];
      }),
      n
    );
  }
  static map(n, r) {
    return Object.getOwnPropertyNames(n).map((i) => r(i, n[i]));
  }
  static transformState(n) {
    return (
      (n = this.cloneDeep(n)),
      Object.getOwnPropertyNames(n).reduce((r, i) => {
        const a = n[i];
        return (
          "metas" in a
            ? (r[i] = a.metas.map(
                (u) => (
                  (u.presence_ref = u.phx_ref),
                  delete u.phx_ref,
                  delete u.phx_ref_prev,
                  u
                )
              ))
            : (r[i] = a),
          r
        );
      }, {})
    );
  }
  static cloneDeep(n) {
    return JSON.parse(JSON.stringify(n));
  }
  onJoin(n) {
    this.caller.onJoin = n;
  }
  onLeave(n) {
    this.caller.onLeave = n;
  }
  onSync(n) {
    this.caller.onSync = n;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var ff;
(function (o) {
  (o.ALL = "*"),
    (o.INSERT = "INSERT"),
    (o.UPDATE = "UPDATE"),
    (o.DELETE = "DELETE");
})(ff || (ff = {}));
var Ps;
(function (o) {
  (o.BROADCAST = "broadcast"),
    (o.PRESENCE = "presence"),
    (o.POSTGRES_CHANGES = "postgres_changes"),
    (o.SYSTEM = "system");
})(Ps || (Ps = {}));
var Xt;
(function (o) {
  (o.SUBSCRIBED = "SUBSCRIBED"),
    (o.TIMED_OUT = "TIMED_OUT"),
    (o.CLOSED = "CLOSED"),
    (o.CHANNEL_ERROR = "CHANNEL_ERROR");
})(Xt || (Xt = {}));
class Ml {
  constructor(n, r = { config: {} }, i) {
    (this.topic = n),
      (this.params = r),
      (this.socket = i),
      (this.bindings = {}),
      (this.state = Ke.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = n.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        r.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new ol(this, Rt.join, this.params, this.timeout)),
      (this.rejoinTimer = new sh(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = Ke.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((a) => a.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = Ke.closed),
          this.socket._remove(this);
      }),
      this._onError((a) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, a),
          (this.state = Ke.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = Ke.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (a) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, a),
          (this.state = Ke.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(Rt.reply, {}, (a, u) => {
        this._trigger(this._replyEventName(u), a);
      }),
      (this.presence = new Es(this)),
      (this.broadcastEndpointURL = oh(this.socket.endPoint)),
      (this.private = this.params.config.private || !1);
  }
  subscribe(n, r = this.timeout) {
    var i, a;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == Ke.closed)
    ) {
      const {
          config: { broadcast: u, presence: d, private: p },
        } = this.params,
        m =
          (a =
            (i = this.bindings.postgres_changes) === null || i === void 0
              ? void 0
              : i.map((x) => x.filter)) !== null && a !== void 0
            ? a
            : [],
        g =
          !!this.bindings[Ps.PRESENCE] && this.bindings[Ps.PRESENCE].length > 0,
        v = {},
        w = {
          broadcast: u,
          presence: Object.assign(Object.assign({}, d), { enabled: g }),
          postgres_changes: m,
          private: p,
        };
      this.socket.accessTokenValue &&
        (v.access_token = this.socket.accessTokenValue),
        this._onError((x) => (n == null ? void 0 : n(Xt.CHANNEL_ERROR, x))),
        this._onClose(() => (n == null ? void 0 : n(Xt.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: w }, v)),
        (this.joinedOnce = !0),
        this._rejoin(r),
        this.joinPush
          .receive("ok", async ({ postgres_changes: x }) => {
            var S;
            if ((this.socket.setAuth(), x === void 0)) {
              n == null || n(Xt.SUBSCRIBED);
              return;
            } else {
              const _ = this.bindings.postgres_changes,
                L =
                  (S = _ == null ? void 0 : _.length) !== null && S !== void 0
                    ? S
                    : 0,
                P = [];
              for (let q = 0; q < L; q++) {
                const W = _[q],
                  {
                    filter: { event: A, schema: R, table: Q, filter: B },
                  } = W,
                  M = x && x[q];
                if (
                  M &&
                  M.event === A &&
                  M.schema === R &&
                  M.table === Q &&
                  M.filter === B
                )
                  P.push(Object.assign(Object.assign({}, W), { id: M.id }));
                else {
                  this.unsubscribe(),
                    (this.state = Ke.errored),
                    n == null ||
                      n(
                        Xt.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = P), n && n(Xt.SUBSCRIBED);
              return;
            }
          })
          .receive("error", (x) => {
            (this.state = Ke.errored),
              n == null ||
                n(
                  Xt.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(x).join(", ") || "error")
                  )
                );
          })
          .receive("timeout", () => {
            n == null || n(Xt.TIMED_OUT);
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(n, r = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: n },
      r.timeout || this.timeout
    );
  }
  async untrack(n = {}) {
    return await this.send({ type: "presence", event: "untrack" }, n);
  }
  on(n, r, i) {
    return (
      this.state === Ke.joined &&
        n === Ps.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`
        ),
        this.unsubscribe().then(() => this.subscribe())),
      this._on(n, r, i)
    );
  }
  async send(n, r = {}) {
    var i, a;
    if (!this._canPush() && n.type === "broadcast") {
      const { event: u, payload: d } = n,
        m = {
          method: "POST",
          headers: {
            Authorization: this.socket.accessTokenValue
              ? `Bearer ${this.socket.accessTokenValue}`
              : "",
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event: u,
                payload: d,
                private: this.private,
              },
            ],
          }),
        };
      try {
        const g = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          m,
          (i = r.timeout) !== null && i !== void 0 ? i : this.timeout
        );
        return (
          await ((a = g.body) === null || a === void 0 ? void 0 : a.cancel()),
          g.ok ? "ok" : "error"
        );
      } catch (g) {
        return g.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((u) => {
        var d, p, m;
        const g = this._push(n.type, n, r.timeout || this.timeout);
        n.type === "broadcast" &&
          !(
            !(
              (m =
                (p =
                  (d = this.params) === null || d === void 0
                    ? void 0
                    : d.config) === null || p === void 0
                  ? void 0
                  : p.broadcast) === null || m === void 0
            ) && m.ack
          ) &&
          u("ok"),
          g.receive("ok", () => u("ok")),
          g.receive("error", () => u("error")),
          g.receive("timeout", () => u("timed out"));
      });
  }
  updateJoinPayload(n) {
    this.joinPush.updatePayload(n);
  }
  unsubscribe(n = this.timeout) {
    this.state = Ke.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(Rt.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let i = null;
    return new Promise((a) => {
      (i = new ol(this, Rt.leave, {}, n)),
        i
          .receive("ok", () => {
            r(), a("ok");
          })
          .receive("timeout", () => {
            r(), a("timed out");
          })
          .receive("error", () => {
            a("error");
          }),
        i.send(),
        this._canPush() || i.trigger("ok", {});
    }).finally(() => {
      i == null || i.destroy();
    });
  }
  teardown() {
    this.pushBuffer.forEach((n) => n.destroy()),
      (this.pushBuffer = []),
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      (this.state = Ke.closed),
      (this.bindings = {});
  }
  async _fetchWithTimeout(n, r, i) {
    const a = new AbortController(),
      u = setTimeout(() => a.abort(), i),
      d = await this.socket.fetch(
        n,
        Object.assign(Object.assign({}, r), { signal: a.signal })
      );
    return clearTimeout(u), d;
  }
  _push(n, r, i = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${n}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let a = new ol(this, n, r, i);
    return this._canPush() ? a.send() : this._addToPushBuffer(a), a;
  }
  _addToPushBuffer(n) {
    if (
      (n.startTimeout(), this.pushBuffer.push(n), this.pushBuffer.length > kg)
    ) {
      const r = this.pushBuffer.shift();
      r &&
        (r.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${r.event}`,
          r.payload
        ));
    }
  }
  _onMessage(n, r, i) {
    return r;
  }
  _isMember(n) {
    return this.topic === n;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(n, r, i) {
    var a, u;
    const d = n.toLocaleLowerCase(),
      { close: p, error: m, leave: g, join: v } = Rt;
    if (i && [p, m, g, v].indexOf(d) >= 0 && i !== this._joinRef()) return;
    let x = this._onMessage(d, r, i);
    if (r && !x)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(d)
      ? (a = this.bindings.postgres_changes) === null ||
        a === void 0 ||
        a
          .filter((S) => {
            var _, L, P;
            return (
              ((_ = S.filter) === null || _ === void 0 ? void 0 : _.event) ===
                "*" ||
              ((P =
                (L = S.filter) === null || L === void 0 ? void 0 : L.event) ===
                null || P === void 0
                ? void 0
                : P.toLocaleLowerCase()) === d
            );
          })
          .map((S) => S.callback(x, i))
      : (u = this.bindings[d]) === null ||
        u === void 0 ||
        u
          .filter((S) => {
            var _, L, P, q, W, A;
            if (["broadcast", "presence", "postgres_changes"].includes(d))
              if ("id" in S) {
                const R = S.id,
                  Q =
                    (_ = S.filter) === null || _ === void 0 ? void 0 : _.event;
                return (
                  R &&
                  ((L = r.ids) === null || L === void 0
                    ? void 0
                    : L.includes(R)) &&
                  (Q === "*" ||
                    (Q == null ? void 0 : Q.toLocaleLowerCase()) ===
                      ((P = r.data) === null || P === void 0
                        ? void 0
                        : P.type.toLocaleLowerCase()))
                );
              } else {
                const R =
                  (W =
                    (q = S == null ? void 0 : S.filter) === null || q === void 0
                      ? void 0
                      : q.event) === null || W === void 0
                    ? void 0
                    : W.toLocaleLowerCase();
                return (
                  R === "*" ||
                  R ===
                    ((A = r == null ? void 0 : r.event) === null || A === void 0
                      ? void 0
                      : A.toLocaleLowerCase())
                );
              }
            else return S.type.toLocaleLowerCase() === d;
          })
          .map((S) => {
            if (typeof x == "object" && "ids" in x) {
              const _ = x.data,
                {
                  schema: L,
                  table: P,
                  commit_timestamp: q,
                  type: W,
                  errors: A,
                } = _;
              x = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: L,
                    table: P,
                    commit_timestamp: q,
                    eventType: W,
                    new: {},
                    old: {},
                    errors: A,
                  }
                ),
                this._getPayloadRecords(_)
              );
            }
            S.callback(x, i);
          });
  }
  _isClosed() {
    return this.state === Ke.closed;
  }
  _isJoined() {
    return this.state === Ke.joined;
  }
  _isJoining() {
    return this.state === Ke.joining;
  }
  _isLeaving() {
    return this.state === Ke.leaving;
  }
  _replyEventName(n) {
    return `chan_reply_${n}`;
  }
  _on(n, r, i) {
    const a = n.toLocaleLowerCase(),
      u = { type: a, filter: r, callback: i };
    return (
      this.bindings[a] ? this.bindings[a].push(u) : (this.bindings[a] = [u]),
      this
    );
  }
  _off(n, r) {
    const i = n.toLocaleLowerCase();
    return (
      this.bindings[i] &&
        (this.bindings[i] = this.bindings[i].filter((a) => {
          var u;
          return !(
            ((u = a.type) === null || u === void 0
              ? void 0
              : u.toLocaleLowerCase()) === i && Ml.isEqual(a.filter, r)
          );
        })),
      this
    );
  }
  static isEqual(n, r) {
    if (Object.keys(n).length !== Object.keys(r).length) return !1;
    for (const i in n) if (n[i] !== r[i]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(n) {
    this._on(Rt.close, {}, n);
  }
  _onError(n) {
    this._on(Rt.error, {}, (r) => n(r));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(n = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = Ke.joining),
      this.joinPush.resend(n));
  }
  _getPayloadRecords(n) {
    const r = { new: {}, old: {} };
    return (
      (n.type === "INSERT" || n.type === "UPDATE") &&
        (r.new = cf(n.columns, n.record)),
      (n.type === "UPDATE" || n.type === "DELETE") &&
        (r.old = cf(n.columns, n.old_record)),
      r
    );
  }
}
const hf = () => {},
  qi = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  Lg = [1e3, 2e3, 5e3, 1e4],
  Rg = 1e4,
  Ag = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Ig {
  constructor(n, r) {
    var i;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = kl),
      (this.transport = null),
      (this.heartbeatIntervalMs = qi.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = hf),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.logger = hf),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new jg()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._connectionState = "disconnected"),
      (this._wasManualDisconnect = !1),
      (this._authPromise = null),
      (this._resolveFetch = (a) => {
        let u;
        return (
          a
            ? (u = a)
            : typeof fetch > "u"
            ? (u = (...d) =>
                As(
                  async () => {
                    const { default: p } = await Promise.resolve().then(
                      () => Lr
                    );
                    return { default: p };
                  },
                  void 0,
                  import.meta.url
                )
                  .then(({ default: p }) => p(...d))
                  .catch((p) => {
                    throw new Error(
                      `Failed to load @supabase/node-fetch: ${p.message}. This is required for HTTP requests in Node.js environments without native fetch.`
                    );
                  }))
            : (u = fetch),
          (...d) => u(...d)
        );
      }),
      !(
        !((i = r == null ? void 0 : r.params) === null || i === void 0) &&
        i.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    (this.apiKey = r.params.apikey),
      (this.endPoint = `${n}/${jl.websocket}`),
      (this.httpEndpoint = oh(n)),
      this._initializeOptions(r),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch));
  }
  connect() {
    if (
      !(
        this.isConnecting() ||
        this.isDisconnecting() ||
        (this.conn !== null && this.isConnected())
      )
    ) {
      if (
        (this._setConnectionState("connecting"),
        this._setAuthSafely("connect"),
        this.transport)
      )
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = xg.createWebSocket(this.endpointURL());
        } catch (n) {
          this._setConnectionState("disconnected");
          const r = n.message;
          throw r.includes("Node.js")
            ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${r}`);
        }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: _g })
    );
  }
  disconnect(n, r) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const i = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        (this.conn.onclose = () => {
          clearTimeout(i), this._setConnectionState("disconnected");
        }),
          n ? this.conn.close(n, r ?? "") : this.conn.close(),
          this._teardownConnection();
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(n) {
    const r = await n.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), r;
  }
  async removeAllChannels() {
    const n = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return (this.channels = []), this.disconnect(), n;
  }
  log(n, r, i) {
    this.logger(n, r, i);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Ns.connecting:
        return Bn.Connecting;
      case Ns.open:
        return Bn.Open;
      case Ns.closing:
        return Bn.Closing;
      default:
        return Bn.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === Bn.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(n, r = { config: {} }) {
    const i = `realtime:${n}`,
      a = this.getChannels().find((u) => u.topic === i);
    if (a) return a;
    {
      const u = new Ml(`realtime:${n}`, r, this);
      return this.channels.push(u), u;
    }
  }
  push(n) {
    const { topic: r, event: i, payload: a, ref: u } = n,
      d = () => {
        this.encode(n, (p) => {
          var m;
          (m = this.conn) === null || m === void 0 || m.send(p);
        });
      };
    this.log("push", `${r} ${i} (${u})`, a),
      this.isConnected() ? d() : this.sendBuffer.push(d);
  }
  async setAuth(n = null) {
    this._authPromise = this._performAuth(n);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  async sendHeartbeat() {
    var n;
    if (!this.isConnected()) {
      this.heartbeatCallback("disconnected");
      return;
    }
    if (this.pendingHeartbeatRef) {
      (this.pendingHeartbeatRef = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection"
        ),
        this.heartbeatCallback("timeout"),
        (this._wasManualDisconnect = !1),
        (n = this.conn) === null ||
          n === void 0 ||
          n.close(Sg, "heartbeat timeout"),
        setTimeout(() => {
          var r;
          this.isConnected() ||
            (r = this.reconnectTimer) === null ||
            r === void 0 ||
            r.scheduleTimeout();
        }, qi.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      }),
      this.heartbeatCallback("sent"),
      this._setAuthSafely("heartbeat");
  }
  onHeartbeat(n) {
    this.heartbeatCallback = n;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((n) => n()), (this.sendBuffer = []));
  }
  _makeRef() {
    let n = this.ref + 1;
    return (
      n === this.ref ? (this.ref = 0) : (this.ref = n), this.ref.toString()
    );
  }
  _leaveOpenTopic(n) {
    let r = this.channels.find(
      (i) => i.topic === n && (i._isJoined() || i._isJoining())
    );
    r &&
      (this.log("transport", `leaving duplicate topic "${n}"`),
      r.unsubscribe());
  }
  _remove(n) {
    this.channels = this.channels.filter((r) => r.topic !== n.topic);
  }
  _onConnMessage(n) {
    this.decode(n.data, (r) => {
      r.topic === "phoenix" &&
        r.event === "phx_reply" &&
        this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error"),
        r.ref &&
          r.ref === this.pendingHeartbeatRef &&
          (this.pendingHeartbeatRef = null);
      const { topic: i, event: a, payload: u, ref: d } = r,
        p = d ? `(${d})` : "",
        m = u.status || "";
      this.log("receive", `${m} ${i} ${a} ${p}`.trim(), u),
        this.channels
          .filter((g) => g._isMember(i))
          .forEach((g) => g._trigger(a, u, d)),
        this._triggerStateCallbacks("message", r);
    });
  }
  _clearTimer(n) {
    var r;
    n === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : n === "reconnect" &&
        ((r = this.reconnectTimer) === null || r === void 0 || r.reset());
  }
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  _setupConnectionHandlers() {
    this.conn &&
      ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (n) => this._onConnError(n)),
      (this.conn.onmessage = (n) => this._onConnMessage(n)),
      (this.conn.onclose = (n) => this._onConnClose(n)));
  }
  _teardownConnection() {
    this.conn &&
      ((this.conn.onopen = null),
      (this.conn.onerror = null),
      (this.conn.onmessage = null),
      (this.conn.onclose = null),
      (this.conn = null)),
      this._clearAllTimers(),
      this.channels.forEach((n) => n.teardown());
  }
  _onConnOpen() {
    this._setConnectionState("connected"),
      this.log("transport", `connected to ${this.endpointURL()}`),
      this.flushSendBuffer(),
      this._clearTimer("reconnect"),
      this.worker
        ? this.workerRef || this._startWorkerHeartbeat()
        : this._startHeartbeat(),
      this._triggerStateCallbacks("open");
  }
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this.sendHeartbeat(),
        this.heartbeatIntervalMs
      ));
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const n = this._workerObjectUrl(this.workerUrl);
    (this.workerRef = new Worker(n)),
      (this.workerRef.onerror = (r) => {
        this.log("worker", "worker error", r.message),
          this.workerRef.terminate();
      }),
      (this.workerRef.onmessage = (r) => {
        r.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      });
  }
  _onConnClose(n) {
    var r;
    this._setConnectionState("disconnected"),
      this.log("transport", "close", n),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (r = this.reconnectTimer) === null ||
        r === void 0 ||
        r.scheduleTimeout(),
      this._triggerStateCallbacks("close", n);
  }
  _onConnError(n) {
    this._setConnectionState("disconnected"),
      this.log("transport", `${n}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", n);
  }
  _triggerChanError() {
    this.channels.forEach((n) => n._trigger(Rt.error));
  }
  _appendParams(n, r) {
    if (Object.keys(r).length === 0) return n;
    const i = n.match(/\?/) ? "&" : "?",
      a = new URLSearchParams(r);
    return `${n}${i}${a}`;
  }
  _workerObjectUrl(n) {
    let r;
    if (n) r = n;
    else {
      const i = new Blob([Ag], { type: "application/javascript" });
      r = URL.createObjectURL(i);
    }
    return r;
  }
  _setConnectionState(n, r = !1) {
    (this._connectionState = n),
      n === "connecting"
        ? (this._wasManualDisconnect = !1)
        : n === "disconnecting" && (this._wasManualDisconnect = r);
  }
  async _performAuth(n = null) {
    let r;
    n
      ? (r = n)
      : this.accessToken
      ? (r = await this.accessToken())
      : (r = this.accessTokenValue),
      this.accessTokenValue != r &&
        ((this.accessTokenValue = r),
        this.channels.forEach((i) => {
          const a = { access_token: r, version: bg };
          r && i.updateJoinPayload(a),
            i.joinedOnce &&
              i._isJoined() &&
              i._push(Rt.access_token, { access_token: r });
        }));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(n = "general") {
    this.setAuth().catch((r) => {
      this.log("error", `error setting auth in ${n}`, r);
    });
  }
  _triggerStateCallbacks(n, r) {
    try {
      this.stateChangeCallbacks[n].forEach((i) => {
        try {
          i(r);
        } catch (a) {
          this.log("error", `error in ${n} callback`, a);
        }
      });
    } catch (i) {
      this.log("error", `error triggering ${n} callbacks`, i);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new sh(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, qi.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(n) {
    var r, i, a, u, d, p, m, g;
    if (
      ((this.transport =
        (r = n == null ? void 0 : n.transport) !== null && r !== void 0
          ? r
          : null),
      (this.timeout =
        (i = n == null ? void 0 : n.timeout) !== null && i !== void 0 ? i : kl),
      (this.heartbeatIntervalMs =
        (a = n == null ? void 0 : n.heartbeatIntervalMs) !== null &&
        a !== void 0
          ? a
          : qi.HEARTBEAT_INTERVAL),
      (this.worker =
        (u = n == null ? void 0 : n.worker) !== null && u !== void 0 ? u : !1),
      (this.accessToken =
        (d = n == null ? void 0 : n.accessToken) !== null && d !== void 0
          ? d
          : null),
      n != null && n.params && (this.params = n.params),
      n != null && n.logger && (this.logger = n.logger),
      ((n != null && n.logLevel) || (n != null && n.log_level)) &&
        ((this.logLevel = n.logLevel || n.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (p = n == null ? void 0 : n.reconnectAfterMs) !== null && p !== void 0
          ? p
          : (v) => Lg[v - 1] || Rg),
      (this.encode =
        (m = n == null ? void 0 : n.encode) !== null && m !== void 0
          ? m
          : (v, w) => w(JSON.stringify(v))),
      (this.decode =
        (g = n == null ? void 0 : n.decode) !== null && g !== void 0
          ? g
          : this.serializer.decode.bind(this.serializer)),
      this.worker)
    ) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = n == null ? void 0 : n.workerUrl;
    }
  }
}
class zl extends Error {
  constructor(n) {
    super(n), (this.__isStorageError = !0), (this.name = "StorageError");
  }
}
function Ye(o) {
  return typeof o == "object" && o !== null && "__isStorageError" in o;
}
class $g extends zl {
  constructor(n, r, i) {
    super(n),
      (this.name = "StorageApiError"),
      (this.status = r),
      (this.statusCode = i);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
}
class Nl extends zl {
  constructor(n, r) {
    super(n), (this.name = "StorageUnknownError"), (this.originalError = r);
  }
}
var Dg = function (o, n, r, i) {
  function a(u) {
    return u instanceof r
      ? u
      : new r(function (d) {
          d(u);
        });
  }
  return new (r || (r = Promise))(function (u, d) {
    function p(v) {
      try {
        g(i.next(v));
      } catch (w) {
        d(w);
      }
    }
    function m(v) {
      try {
        g(i.throw(v));
      } catch (w) {
        d(w);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(p, m);
    }
    g((i = i.apply(o, n || [])).next());
  });
};
const ah = (o) => {
    let n;
    return (
      o
        ? (n = o)
        : typeof fetch > "u"
        ? (n = (...r) =>
            As(
              async () => {
                const { default: i } = await Promise.resolve().then(() => Lr);
                return { default: i };
              },
              void 0,
              import.meta.url
            ).then(({ default: i }) => i(...r)))
        : (n = fetch),
      (...r) => n(...r)
    );
  },
  Ug = () =>
    Dg(void 0, void 0, void 0, function* () {
      return typeof Response > "u"
        ? (yield As(
            () => Promise.resolve().then(() => Lr),
            void 0,
            import.meta.url
          )).Response
        : Response;
    }),
  El = (o) => {
    if (Array.isArray(o)) return o.map((r) => El(r));
    if (typeof o == "function" || o !== Object(o)) return o;
    const n = {};
    return (
      Object.entries(o).forEach(([r, i]) => {
        const a = r.replace(/([-_][a-z])/gi, (u) =>
          u.toUpperCase().replace(/[-_]/g, "")
        );
        n[a] = El(i);
      }),
      n
    );
  },
  Fg = (o) => {
    if (typeof o != "object" || o === null) return !1;
    const n = Object.getPrototypeOf(o);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(Symbol.toStringTag in o) &&
      !(Symbol.iterator in o)
    );
  };
var Vn = function (o, n, r, i) {
  function a(u) {
    return u instanceof r
      ? u
      : new r(function (d) {
          d(u);
        });
  }
  return new (r || (r = Promise))(function (u, d) {
    function p(v) {
      try {
        g(i.next(v));
      } catch (w) {
        d(w);
      }
    }
    function m(v) {
      try {
        g(i.throw(v));
      } catch (w) {
        d(w);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(p, m);
    }
    g((i = i.apply(o, n || [])).next());
  });
};
const al = (o) =>
    o.msg || o.message || o.error_description || o.error || JSON.stringify(o),
  Mg = (o, n, r) =>
    Vn(void 0, void 0, void 0, function* () {
      const i = yield Ug();
      o instanceof i && !(r != null && r.noResolveJson)
        ? o
            .json()
            .then((a) => {
              const u = o.status || 500,
                d = (a == null ? void 0 : a.statusCode) || u + "";
              n(new $g(al(a), u, d));
            })
            .catch((a) => {
              n(new Nl(al(a), a));
            })
        : n(new Nl(al(o), o));
    }),
  zg = (o, n, r, i) => {
    const a = { method: o, headers: (n == null ? void 0 : n.headers) || {} };
    return o === "GET" || !i
      ? a
      : (Fg(i)
          ? ((a.headers = Object.assign(
              { "Content-Type": "application/json" },
              n == null ? void 0 : n.headers
            )),
            (a.body = JSON.stringify(i)))
          : (a.body = i),
        n != null && n.duplex && (a.duplex = n.duplex),
        Object.assign(Object.assign({}, a), r));
  };
function Is(o, n, r, i, a, u) {
  return Vn(this, void 0, void 0, function* () {
    return new Promise((d, p) => {
      o(r, zg(n, i, a, u))
        .then((m) => {
          if (!m.ok) throw m;
          return i != null && i.noResolveJson ? m : m.json();
        })
        .then((m) => d(m))
        .catch((m) => Mg(m, p, i));
    });
  });
}
function eo(o, n, r, i) {
  return Vn(this, void 0, void 0, function* () {
    return Is(o, "GET", n, r, i);
  });
}
function Zt(o, n, r, i, a) {
  return Vn(this, void 0, void 0, function* () {
    return Is(o, "POST", n, i, a, r);
  });
}
function Pl(o, n, r, i, a) {
  return Vn(this, void 0, void 0, function* () {
    return Is(o, "PUT", n, i, a, r);
  });
}
function Bg(o, n, r, i) {
  return Vn(this, void 0, void 0, function* () {
    return Is(
      o,
      "HEAD",
      n,
      Object.assign(Object.assign({}, r), { noResolveJson: !0 }),
      i
    );
  });
}
function lh(o, n, r, i, a) {
  return Vn(this, void 0, void 0, function* () {
    return Is(o, "DELETE", n, i, a, r);
  });
}
var ht = function (o, n, r, i) {
  function a(u) {
    return u instanceof r
      ? u
      : new r(function (d) {
          d(u);
        });
  }
  return new (r || (r = Promise))(function (u, d) {
    function p(v) {
      try {
        g(i.next(v));
      } catch (w) {
        d(w);
      }
    }
    function m(v) {
      try {
        g(i.throw(v));
      } catch (w) {
        d(w);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(p, m);
    }
    g((i = i.apply(o, n || [])).next());
  });
};
const Vg = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  pf = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class Wg {
  constructor(n, r = {}, i, a) {
    (this.url = n),
      (this.headers = r),
      (this.bucketId = i),
      (this.fetch = ah(a));
  }
  uploadOrUpdate(n, r, i, a) {
    return ht(this, void 0, void 0, function* () {
      try {
        let u;
        const d = Object.assign(Object.assign({}, pf), a);
        let p = Object.assign(
          Object.assign({}, this.headers),
          n === "POST" && { "x-upsert": String(d.upsert) }
        );
        const m = d.metadata;
        typeof Blob < "u" && i instanceof Blob
          ? ((u = new FormData()),
            u.append("cacheControl", d.cacheControl),
            m && u.append("metadata", this.encodeMetadata(m)),
            u.append("", i))
          : typeof FormData < "u" && i instanceof FormData
          ? ((u = i),
            u.append("cacheControl", d.cacheControl),
            m && u.append("metadata", this.encodeMetadata(m)))
          : ((u = i),
            (p["cache-control"] = `max-age=${d.cacheControl}`),
            (p["content-type"] = d.contentType),
            m && (p["x-metadata"] = this.toBase64(this.encodeMetadata(m)))),
          a != null &&
            a.headers &&
            (p = Object.assign(Object.assign({}, p), a.headers));
        const g = this._removeEmptyFolders(r),
          v = this._getFinalPath(g),
          w = yield (n == "PUT" ? Pl : Zt)(
            this.fetch,
            `${this.url}/object/${v}`,
            u,
            Object.assign(
              { headers: p },
              d != null && d.duplex ? { duplex: d.duplex } : {}
            )
          );
        return { data: { path: g, id: w.Id, fullPath: w.Key }, error: null };
      } catch (u) {
        if (Ye(u)) return { data: null, error: u };
        throw u;
      }
    });
  }
  upload(n, r, i) {
    return ht(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", n, r, i);
    });
  }
  uploadToSignedUrl(n, r, i, a) {
    return ht(this, void 0, void 0, function* () {
      const u = this._removeEmptyFolders(n),
        d = this._getFinalPath(u),
        p = new URL(this.url + `/object/upload/sign/${d}`);
      p.searchParams.set("token", r);
      try {
        let m;
        const g = Object.assign({ upsert: pf.upsert }, a),
          v = Object.assign(Object.assign({}, this.headers), {
            "x-upsert": String(g.upsert),
          });
        typeof Blob < "u" && i instanceof Blob
          ? ((m = new FormData()),
            m.append("cacheControl", g.cacheControl),
            m.append("", i))
          : typeof FormData < "u" && i instanceof FormData
          ? ((m = i), m.append("cacheControl", g.cacheControl))
          : ((m = i),
            (v["cache-control"] = `max-age=${g.cacheControl}`),
            (v["content-type"] = g.contentType));
        const w = yield Pl(this.fetch, p.toString(), m, { headers: v });
        return { data: { path: u, fullPath: w.Key }, error: null };
      } catch (m) {
        if (Ye(m)) return { data: null, error: m };
        throw m;
      }
    });
  }
  createSignedUploadUrl(n, r) {
    return ht(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(n);
        const a = Object.assign({}, this.headers);
        r != null && r.upsert && (a["x-upsert"] = "true");
        const u = yield Zt(
            this.fetch,
            `${this.url}/object/upload/sign/${i}`,
            {},
            { headers: a }
          ),
          d = new URL(this.url + u.url),
          p = d.searchParams.get("token");
        if (!p) throw new zl("No token returned by API");
        return {
          data: { signedUrl: d.toString(), path: n, token: p },
          error: null,
        };
      } catch (i) {
        if (Ye(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  update(n, r, i) {
    return ht(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", n, r, i);
    });
  }
  move(n, r, i) {
    return ht(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Zt(
            this.fetch,
            `${this.url}/object/move`,
            {
              bucketId: this.bucketId,
              sourceKey: n,
              destinationKey: r,
              destinationBucket: i == null ? void 0 : i.destinationBucket,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (a) {
        if (Ye(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  copy(n, r, i) {
    return ht(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield Zt(
              this.fetch,
              `${this.url}/object/copy`,
              {
                bucketId: this.bucketId,
                sourceKey: n,
                destinationKey: r,
                destinationBucket: i == null ? void 0 : i.destinationBucket,
              },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (a) {
        if (Ye(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  createSignedUrl(n, r, i) {
    return ht(this, void 0, void 0, function* () {
      try {
        let a = this._getFinalPath(n),
          u = yield Zt(
            this.fetch,
            `${this.url}/object/sign/${a}`,
            Object.assign(
              { expiresIn: r },
              i != null && i.transform ? { transform: i.transform } : {}
            ),
            { headers: this.headers }
          );
        const d =
          i != null && i.download
            ? `&download=${i.download === !0 ? "" : i.download}`
            : "";
        return (
          (u = { signedUrl: encodeURI(`${this.url}${u.signedURL}${d}`) }),
          { data: u, error: null }
        );
      } catch (a) {
        if (Ye(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  createSignedUrls(n, r, i) {
    return ht(this, void 0, void 0, function* () {
      try {
        const a = yield Zt(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: r, paths: n },
            { headers: this.headers }
          ),
          u =
            i != null && i.download
              ? `&download=${i.download === !0 ? "" : i.download}`
              : "";
        return {
          data: a.map((d) =>
            Object.assign(Object.assign({}, d), {
              signedUrl: d.signedURL
                ? encodeURI(`${this.url}${d.signedURL}${u}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (a) {
        if (Ye(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  download(n, r) {
    return ht(this, void 0, void 0, function* () {
      const a =
          typeof (r == null ? void 0 : r.transform) < "u"
            ? "render/image/authenticated"
            : "object",
        u = this.transformOptsToQueryString(
          (r == null ? void 0 : r.transform) || {}
        ),
        d = u ? `?${u}` : "";
      try {
        const p = this._getFinalPath(n);
        return {
          data: yield (yield eo(this.fetch, `${this.url}/${a}/${p}${d}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (p) {
        if (Ye(p)) return { data: null, error: p };
        throw p;
      }
    });
  }
  info(n) {
    return ht(this, void 0, void 0, function* () {
      const r = this._getFinalPath(n);
      try {
        const i = yield eo(this.fetch, `${this.url}/object/info/${r}`, {
          headers: this.headers,
        });
        return { data: El(i), error: null };
      } catch (i) {
        if (Ye(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  exists(n) {
    return ht(this, void 0, void 0, function* () {
      const r = this._getFinalPath(n);
      try {
        return (
          yield Bg(this.fetch, `${this.url}/object/${r}`, {
            headers: this.headers,
          }),
          { data: !0, error: null }
        );
      } catch (i) {
        if (Ye(i) && i instanceof Nl) {
          const a = i.originalError;
          if ([400, 404].includes(a == null ? void 0 : a.status))
            return { data: !1, error: i };
        }
        throw i;
      }
    });
  }
  getPublicUrl(n, r) {
    const i = this._getFinalPath(n),
      a = [],
      u =
        r != null && r.download
          ? `download=${r.download === !0 ? "" : r.download}`
          : "";
    u !== "" && a.push(u);
    const p =
        typeof (r == null ? void 0 : r.transform) < "u"
          ? "render/image"
          : "object",
      m = this.transformOptsToQueryString(
        (r == null ? void 0 : r.transform) || {}
      );
    m !== "" && a.push(m);
    let g = a.join("&");
    return (
      g !== "" && (g = `?${g}`),
      { data: { publicUrl: encodeURI(`${this.url}/${p}/public/${i}${g}`) } }
    );
  }
  remove(n) {
    return ht(this, void 0, void 0, function* () {
      try {
        return {
          data: yield lh(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: n },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (Ye(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  list(n, r, i) {
    return ht(this, void 0, void 0, function* () {
      try {
        const a = Object.assign(Object.assign(Object.assign({}, Vg), r), {
          prefix: n || "",
        });
        return {
          data: yield Zt(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            a,
            { headers: this.headers },
            i
          ),
          error: null,
        };
      } catch (a) {
        if (Ye(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  encodeMetadata(n) {
    return JSON.stringify(n);
  }
  toBase64(n) {
    return typeof Buffer < "u" ? Buffer.from(n).toString("base64") : btoa(n);
  }
  _getFinalPath(n) {
    return `${this.bucketId}/${n.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(n) {
    return n.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(n) {
    const r = [];
    return (
      n.width && r.push(`width=${n.width}`),
      n.height && r.push(`height=${n.height}`),
      n.resize && r.push(`resize=${n.resize}`),
      n.format && r.push(`format=${n.format}`),
      n.quality && r.push(`quality=${n.quality}`),
      r.join("&")
    );
  }
}
const Hg = "2.10.5",
  Kg = { "X-Client-Info": `storage-js/${Hg}` };
var br = function (o, n, r, i) {
  function a(u) {
    return u instanceof r
      ? u
      : new r(function (d) {
          d(u);
        });
  }
  return new (r || (r = Promise))(function (u, d) {
    function p(v) {
      try {
        g(i.next(v));
      } catch (w) {
        d(w);
      }
    }
    function m(v) {
      try {
        g(i.throw(v));
      } catch (w) {
        d(w);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(p, m);
    }
    g((i = i.apply(o, n || [])).next());
  });
};
class qg {
  constructor(n, r = {}, i, a) {
    const u = new URL(n);
    a != null &&
      a.useNewHostname &&
      /supabase\.(co|in|red)$/.test(u.hostname) &&
      !u.hostname.includes("storage.supabase.") &&
      (u.hostname = u.hostname.replace("supabase.", "storage.supabase.")),
      (this.url = u.href),
      (this.headers = Object.assign(Object.assign({}, Kg), r)),
      (this.fetch = ah(i));
  }
  listBuckets() {
    return br(this, void 0, void 0, function* () {
      try {
        return {
          data: yield eo(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (n) {
        if (Ye(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  getBucket(n) {
    return br(this, void 0, void 0, function* () {
      try {
        return {
          data: yield eo(this.fetch, `${this.url}/bucket/${n}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (Ye(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  createBucket(n, r = { public: !1 }) {
    return br(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Zt(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: n,
              name: n,
              type: r.type,
              public: r.public,
              file_size_limit: r.fileSizeLimit,
              allowed_mime_types: r.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (i) {
        if (Ye(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  updateBucket(n, r) {
    return br(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Pl(
            this.fetch,
            `${this.url}/bucket/${n}`,
            {
              id: n,
              name: n,
              public: r.public,
              file_size_limit: r.fileSizeLimit,
              allowed_mime_types: r.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (i) {
        if (Ye(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  emptyBucket(n) {
    return br(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Zt(
            this.fetch,
            `${this.url}/bucket/${n}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (Ye(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  deleteBucket(n) {
    return br(this, void 0, void 0, function* () {
      try {
        return {
          data: yield lh(
            this.fetch,
            `${this.url}/bucket/${n}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (Ye(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
}
class Jg extends qg {
  constructor(n, r = {}, i, a) {
    super(n, r, i, a);
  }
  from(n) {
    return new Wg(this.url, this.headers, n, this.fetch);
  }
}
const Gg = "2.55.0";
let Cs = "";
typeof Deno < "u"
  ? (Cs = "deno")
  : typeof document < "u"
  ? (Cs = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (Cs = "react-native")
  : (Cs = "node");
const Qg = { "X-Client-Info": `supabase-js-${Cs}/${Gg}` },
  Yg = { headers: Qg },
  Xg = { schema: "public" },
  Zg = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  e0 = {};
var t0 = function (o, n, r, i) {
  function a(u) {
    return u instanceof r
      ? u
      : new r(function (d) {
          d(u);
        });
  }
  return new (r || (r = Promise))(function (u, d) {
    function p(v) {
      try {
        g(i.next(v));
      } catch (w) {
        d(w);
      }
    }
    function m(v) {
      try {
        g(i.throw(v));
      } catch (w) {
        d(w);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(p, m);
    }
    g((i = i.apply(o, n || [])).next());
  });
};
const n0 = (o) => {
    let n;
    return (
      o ? (n = o) : typeof fetch > "u" ? (n = Xf) : (n = fetch),
      (...r) => n(...r)
    );
  },
  r0 = () => (typeof Headers > "u" ? Zf : Headers),
  s0 = (o, n, r) => {
    const i = n0(r),
      a = r0();
    return (u, d) =>
      t0(void 0, void 0, void 0, function* () {
        var p;
        const m = (p = yield n()) !== null && p !== void 0 ? p : o;
        let g = new a(d == null ? void 0 : d.headers);
        return (
          g.has("apikey") || g.set("apikey", o),
          g.has("Authorization") || g.set("Authorization", `Bearer ${m}`),
          i(u, Object.assign(Object.assign({}, d), { headers: g }))
        );
      });
  };
var i0 = function (o, n, r, i) {
  function a(u) {
    return u instanceof r
      ? u
      : new r(function (d) {
          d(u);
        });
  }
  return new (r || (r = Promise))(function (u, d) {
    function p(v) {
      try {
        g(i.next(v));
      } catch (w) {
        d(w);
      }
    }
    function m(v) {
      try {
        g(i.throw(v));
      } catch (w) {
        d(w);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(p, m);
    }
    g((i = i.apply(o, n || [])).next());
  });
};
function o0(o) {
  return o.endsWith("/") ? o : o + "/";
}
function a0(o, n) {
  var r, i;
  const { db: a, auth: u, realtime: d, global: p } = o,
    { db: m, auth: g, realtime: v, global: w } = n,
    x = {
      db: Object.assign(Object.assign({}, m), a),
      auth: Object.assign(Object.assign({}, g), u),
      realtime: Object.assign(Object.assign({}, v), d),
      storage: {},
      global: Object.assign(Object.assign(Object.assign({}, w), p), {
        headers: Object.assign(
          Object.assign(
            {},
            (r = w == null ? void 0 : w.headers) !== null && r !== void 0
              ? r
              : {}
          ),
          (i = p == null ? void 0 : p.headers) !== null && i !== void 0 ? i : {}
        ),
      }),
      accessToken: () =>
        i0(this, void 0, void 0, function* () {
          return "";
        }),
    };
  return (
    o.accessToken ? (x.accessToken = o.accessToken) : delete x.accessToken, x
  );
}
const uh = "2.71.1",
  Er = 30 * 1e3,
  Ol = 3,
  ll = Ol * Er,
  l0 = "http://localhost:9999",
  u0 = "supabase.auth.token",
  c0 = { "X-Client-Info": `gotrue-js/${uh}` },
  Tl = "X-Supabase-Api-Version",
  ch = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  d0 = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  f0 = 600 * 1e3;
class Bl extends Error {
  constructor(n, r, i) {
    super(n),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = r),
      (this.code = i);
  }
}
function he(o) {
  return typeof o == "object" && o !== null && "__isAuthError" in o;
}
class h0 extends Bl {
  constructor(n, r, i) {
    super(n, r, i),
      (this.name = "AuthApiError"),
      (this.status = r),
      (this.code = i);
  }
}
function p0(o) {
  return he(o) && o.name === "AuthApiError";
}
class dh extends Bl {
  constructor(n, r) {
    super(n), (this.name = "AuthUnknownError"), (this.originalError = r);
  }
}
class kn extends Bl {
  constructor(n, r, i, a) {
    super(n, i, a), (this.name = r), (this.status = i);
  }
}
class _n extends kn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function m0(o) {
  return he(o) && o.name === "AuthSessionMissingError";
}
class Ji extends kn {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class Gi extends kn {
  constructor(n) {
    super(n, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Qi extends kn {
  constructor(n, r = null) {
    super(n, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function g0(o) {
  return he(o) && o.name === "AuthImplicitGrantRedirectError";
}
class mf extends kn {
  constructor(n, r = null) {
    super(n, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class Ll extends kn {
  constructor(n, r) {
    super(n, "AuthRetryableFetchError", r, void 0);
  }
}
function ul(o) {
  return he(o) && o.name === "AuthRetryableFetchError";
}
class gf extends kn {
  constructor(n, r, i) {
    super(n, "AuthWeakPasswordError", r, "weak_password"), (this.reasons = i);
  }
}
class Rl extends kn {
  constructor(n) {
    super(n, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const to =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      ""
    ),
  vf = ` 	
\r=`.split(""),
  v0 = (() => {
    const o = new Array(128);
    for (let n = 0; n < o.length; n += 1) o[n] = -1;
    for (let n = 0; n < vf.length; n += 1) o[vf[n].charCodeAt(0)] = -2;
    for (let n = 0; n < to.length; n += 1) o[to[n].charCodeAt(0)] = n;
    return o;
  })();
function yf(o, n, r) {
  if (o !== null)
    for (n.queue = (n.queue << 8) | o, n.queuedBits += 8; n.queuedBits >= 6; ) {
      const i = (n.queue >> (n.queuedBits - 6)) & 63;
      r(to[i]), (n.queuedBits -= 6);
    }
  else if (n.queuedBits > 0)
    for (
      n.queue = n.queue << (6 - n.queuedBits), n.queuedBits = 6;
      n.queuedBits >= 6;

    ) {
      const i = (n.queue >> (n.queuedBits - 6)) & 63;
      r(to[i]), (n.queuedBits -= 6);
    }
}
function fh(o, n, r) {
  const i = v0[o];
  if (i > -1)
    for (n.queue = (n.queue << 6) | i, n.queuedBits += 6; n.queuedBits >= 8; )
      r((n.queue >> (n.queuedBits - 8)) & 255), (n.queuedBits -= 8);
  else {
    if (i === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(o)}"`);
  }
}
function xf(o) {
  const n = [],
    r = (d) => {
      n.push(String.fromCodePoint(d));
    },
    i = { utf8seq: 0, codepoint: 0 },
    a = { queue: 0, queuedBits: 0 },
    u = (d) => {
      w0(d, i, r);
    };
  for (let d = 0; d < o.length; d += 1) fh(o.charCodeAt(d), a, u);
  return n.join("");
}
function y0(o, n) {
  if (o <= 127) {
    n(o);
    return;
  } else if (o <= 2047) {
    n(192 | (o >> 6)), n(128 | (o & 63));
    return;
  } else if (o <= 65535) {
    n(224 | (o >> 12)), n(128 | ((o >> 6) & 63)), n(128 | (o & 63));
    return;
  } else if (o <= 1114111) {
    n(240 | (o >> 18)),
      n(128 | ((o >> 12) & 63)),
      n(128 | ((o >> 6) & 63)),
      n(128 | (o & 63));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${o.toString(16)}`);
}
function x0(o, n) {
  for (let r = 0; r < o.length; r += 1) {
    let i = o.charCodeAt(r);
    if (i > 55295 && i <= 56319) {
      const a = ((i - 55296) * 1024) & 65535;
      (i = (((o.charCodeAt(r + 1) - 56320) & 65535) | a) + 65536), (r += 1);
    }
    y0(i, n);
  }
}
function w0(o, n, r) {
  if (n.utf8seq === 0) {
    if (o <= 127) {
      r(o);
      return;
    }
    for (let i = 1; i < 6; i += 1)
      if (((o >> (7 - i)) & 1) === 0) {
        n.utf8seq = i;
        break;
      }
    if (n.utf8seq === 2) n.codepoint = o & 31;
    else if (n.utf8seq === 3) n.codepoint = o & 15;
    else if (n.utf8seq === 4) n.codepoint = o & 7;
    else throw new Error("Invalid UTF-8 sequence");
    n.utf8seq -= 1;
  } else if (n.utf8seq > 0) {
    if (o <= 127) throw new Error("Invalid UTF-8 sequence");
    (n.codepoint = (n.codepoint << 6) | (o & 63)),
      (n.utf8seq -= 1),
      n.utf8seq === 0 && r(n.codepoint);
  }
}
function b0(o) {
  const n = [],
    r = { queue: 0, queuedBits: 0 },
    i = (a) => {
      n.push(a);
    };
  for (let a = 0; a < o.length; a += 1) fh(o.charCodeAt(a), r, i);
  return new Uint8Array(n);
}
function _0(o) {
  const n = [];
  return x0(o, (r) => n.push(r)), new Uint8Array(n);
}
function S0(o) {
  const n = [],
    r = { queue: 0, queuedBits: 0 },
    i = (a) => {
      n.push(a);
    };
  return o.forEach((a) => yf(a, r, i)), yf(null, r, i), n.join("");
}
function k0(o) {
  return Math.round(Date.now() / 1e3) + o;
}
function j0() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (o) {
    const n = (Math.random() * 16) | 0;
    return (o == "x" ? n : (n & 3) | 8).toString(16);
  });
}
const Lt = () => typeof window < "u" && typeof document < "u",
  Fn = { tested: !1, writable: !1 },
  hh = () => {
    if (!Lt()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (Fn.tested) return Fn.writable;
    const o = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(o, o),
        globalThis.localStorage.removeItem(o),
        (Fn.tested = !0),
        (Fn.writable = !0);
    } catch {
      (Fn.tested = !0), (Fn.writable = !1);
    }
    return Fn.writable;
  };
function C0(o) {
  const n = {},
    r = new URL(o);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((a, u) => {
        n[u] = a;
      });
    } catch {}
  return (
    r.searchParams.forEach((i, a) => {
      n[a] = i;
    }),
    n
  );
}
const ph = (o) => {
    let n;
    return (
      o
        ? (n = o)
        : typeof fetch > "u"
        ? (n = (...r) =>
            As(
              async () => {
                const { default: i } = await Promise.resolve().then(() => Lr);
                return { default: i };
              },
              void 0,
              import.meta.url
            ).then(({ default: i }) => i(...r)))
        : (n = fetch),
      (...r) => n(...r)
    );
  },
  N0 = (o) =>
    typeof o == "object" &&
    o !== null &&
    "status" in o &&
    "ok" in o &&
    "json" in o &&
    typeof o.json == "function",
  Pr = async (o, n, r) => {
    await o.setItem(n, JSON.stringify(r));
  },
  Mn = async (o, n) => {
    const r = await o.getItem(n);
    if (!r) return null;
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  },
  bn = async (o, n) => {
    await o.removeItem(n);
  };
class oo {
  constructor() {
    this.promise = new oo.promiseConstructor((n, r) => {
      (this.resolve = n), (this.reject = r);
    });
  }
}
oo.promiseConstructor = Promise;
function cl(o) {
  const n = o.split(".");
  if (n.length !== 3) throw new Rl("Invalid JWT structure");
  for (let i = 0; i < n.length; i++)
    if (!d0.test(n[i])) throw new Rl("JWT not in base64url format");
  return {
    header: JSON.parse(xf(n[0])),
    payload: JSON.parse(xf(n[1])),
    signature: b0(n[2]),
    raw: { header: n[0], payload: n[1] },
  };
}
async function E0(o) {
  return await new Promise((n) => {
    setTimeout(() => n(null), o);
  });
}
function P0(o, n) {
  return new Promise((i, a) => {
    (async () => {
      for (let u = 0; u < 1 / 0; u++)
        try {
          const d = await o(u);
          if (!n(u, null, d)) {
            i(d);
            return;
          }
        } catch (d) {
          if (!n(u, d)) {
            a(d);
            return;
          }
        }
    })();
  });
}
function O0(o) {
  return ("0" + o.toString(16)).substr(-2);
}
function T0() {
  const n = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      i = r.length;
    let a = "";
    for (let u = 0; u < 56; u++) a += r.charAt(Math.floor(Math.random() * i));
    return a;
  }
  return crypto.getRandomValues(n), Array.from(n, O0).join("");
}
async function L0(o) {
  const r = new TextEncoder().encode(o),
    i = await crypto.subtle.digest("SHA-256", r),
    a = new Uint8Array(i);
  return Array.from(a)
    .map((u) => String.fromCharCode(u))
    .join("");
}
async function R0(o) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      o
    );
  const r = await L0(o);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function _r(o, n, r = !1) {
  const i = T0();
  let a = i;
  r && (a += "/PASSWORD_RECOVERY"), await Pr(o, `${n}-code-verifier`, a);
  const u = await R0(i);
  return [u, i === u ? "plain" : "s256"];
}
const A0 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function I0(o) {
  const n = o.headers.get(Tl);
  if (!n || !n.match(A0)) return null;
  try {
    return new Date(`${n}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function $0(o) {
  if (!o) throw new Error("Missing exp claim");
  const n = Math.floor(Date.now() / 1e3);
  if (o <= n) throw new Error("JWT has expired");
}
function D0(o) {
  switch (o) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const U0 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Sr(o) {
  if (!U0.test(o))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not"
    );
}
function dl() {
  const o = {};
  return new Proxy(o, {
    get: (n, r) => {
      if (r === "__isUserNotAvailableProxy") return !0;
      if (typeof r == "symbol") {
        const i = r.toString();
        if (
          i === "Symbol(Symbol.toPrimitive)" ||
          i === "Symbol(Symbol.toStringTag)" ||
          i === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`
      );
    },
    set: (n, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
    deleteProperty: (n, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
  });
}
function wf(o) {
  return JSON.parse(JSON.stringify(o));
}
var F0 = function (o, n) {
  var r = {};
  for (var i in o)
    Object.prototype.hasOwnProperty.call(o, i) &&
      n.indexOf(i) < 0 &&
      (r[i] = o[i]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, i = Object.getOwnPropertySymbols(o); a < i.length; a++)
      n.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(o, i[a]) &&
        (r[i[a]] = o[i[a]]);
  return r;
};
const zn = (o) =>
    o.msg || o.message || o.error_description || o.error || JSON.stringify(o),
  M0 = [502, 503, 504];
async function bf(o) {
  var n;
  if (!N0(o)) throw new Ll(zn(o), 0);
  if (M0.includes(o.status)) throw new Ll(zn(o), o.status);
  let r;
  try {
    r = await o.json();
  } catch (u) {
    throw new dh(zn(u), u);
  }
  let i;
  const a = I0(o);
  if (
    (a &&
    a.getTime() >= ch["2024-01-01"].timestamp &&
    typeof r == "object" &&
    r &&
    typeof r.code == "string"
      ? (i = r.code)
      : typeof r == "object" &&
        r &&
        typeof r.error_code == "string" &&
        (i = r.error_code),
    i)
  ) {
    if (i === "weak_password")
      throw new gf(
        zn(r),
        o.status,
        ((n = r.weak_password) === null || n === void 0 ? void 0 : n.reasons) ||
          []
      );
    if (i === "session_not_found") throw new _n();
  } else if (
    typeof r == "object" &&
    r &&
    typeof r.weak_password == "object" &&
    r.weak_password &&
    Array.isArray(r.weak_password.reasons) &&
    r.weak_password.reasons.length &&
    r.weak_password.reasons.reduce((u, d) => u && typeof d == "string", !0)
  )
    throw new gf(zn(r), o.status, r.weak_password.reasons);
  throw new h0(zn(r), o.status || 500, i);
}
const z0 = (o, n, r, i) => {
  const a = { method: o, headers: (n == null ? void 0 : n.headers) || {} };
  return o === "GET"
    ? a
    : ((a.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        n == null ? void 0 : n.headers
      )),
      (a.body = JSON.stringify(i)),
      Object.assign(Object.assign({}, a), r));
};
async function xe(o, n, r, i) {
  var a;
  const u = Object.assign({}, i == null ? void 0 : i.headers);
  u[Tl] || (u[Tl] = ch["2024-01-01"].name),
    i != null && i.jwt && (u.Authorization = `Bearer ${i.jwt}`);
  const d =
    (a = i == null ? void 0 : i.query) !== null && a !== void 0 ? a : {};
  i != null && i.redirectTo && (d.redirect_to = i.redirectTo);
  const p = Object.keys(d).length
      ? "?" + new URLSearchParams(d).toString()
      : "",
    m = await B0(
      o,
      n,
      r + p,
      { headers: u, noResolveJson: i == null ? void 0 : i.noResolveJson },
      {},
      i == null ? void 0 : i.body
    );
  return i != null && i.xform
    ? i == null
      ? void 0
      : i.xform(m)
    : { data: Object.assign({}, m), error: null };
}
async function B0(o, n, r, i, a, u) {
  const d = z0(n, i, a, u);
  let p;
  try {
    p = await o(r, Object.assign({}, d));
  } catch (m) {
    throw (console.error(m), new Ll(zn(m), 0));
  }
  if ((p.ok || (await bf(p)), i != null && i.noResolveJson)) return p;
  try {
    return await p.json();
  } catch (m) {
    await bf(m);
  }
}
function Yt(o) {
  var n;
  let r = null;
  K0(o) &&
    ((r = Object.assign({}, o)),
    o.expires_at || (r.expires_at = k0(o.expires_in)));
  const i = (n = o.user) !== null && n !== void 0 ? n : o;
  return { data: { session: r, user: i }, error: null };
}
function _f(o) {
  const n = Yt(o);
  return (
    !n.error &&
      o.weak_password &&
      typeof o.weak_password == "object" &&
      Array.isArray(o.weak_password.reasons) &&
      o.weak_password.reasons.length &&
      o.weak_password.message &&
      typeof o.weak_password.message == "string" &&
      o.weak_password.reasons.reduce((r, i) => r && typeof i == "string", !0) &&
      (n.data.weak_password = o.weak_password),
    n
  );
}
function Sn(o) {
  var n;
  return {
    data: { user: (n = o.user) !== null && n !== void 0 ? n : o },
    error: null,
  };
}
function V0(o) {
  return { data: o, error: null };
}
function W0(o) {
  const {
      action_link: n,
      email_otp: r,
      hashed_token: i,
      redirect_to: a,
      verification_type: u,
    } = o,
    d = F0(o, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    p = {
      action_link: n,
      email_otp: r,
      hashed_token: i,
      redirect_to: a,
      verification_type: u,
    },
    m = Object.assign({}, d);
  return { data: { properties: p, user: m }, error: null };
}
function H0(o) {
  return o;
}
function K0(o) {
  return o.access_token && o.refresh_token && o.expires_in;
}
const fl = ["global", "local", "others"];
var q0 = function (o, n) {
  var r = {};
  for (var i in o)
    Object.prototype.hasOwnProperty.call(o, i) &&
      n.indexOf(i) < 0 &&
      (r[i] = o[i]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, i = Object.getOwnPropertySymbols(o); a < i.length; a++)
      n.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(o, i[a]) &&
        (r[i[a]] = o[i[a]]);
  return r;
};
class J0 {
  constructor({ url: n = "", headers: r = {}, fetch: i }) {
    (this.url = n),
      (this.headers = r),
      (this.fetch = ph(i)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  async signOut(n, r = fl[0]) {
    if (fl.indexOf(r) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${fl.join(", ")}`
      );
    try {
      return (
        await xe(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
          headers: this.headers,
          jwt: n,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (i) {
      if (he(i)) return { data: null, error: i };
      throw i;
    }
  }
  async inviteUserByEmail(n, r = {}) {
    try {
      return await xe(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: n, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Sn,
      });
    } catch (i) {
      if (he(i)) return { data: { user: null }, error: i };
      throw i;
    }
  }
  async generateLink(n) {
    try {
      const { options: r } = n,
        i = q0(n, ["options"]),
        a = Object.assign(Object.assign({}, i), r);
      return (
        "newEmail" in i &&
          ((a.new_email = i == null ? void 0 : i.newEmail), delete a.newEmail),
        await xe(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: a,
          headers: this.headers,
          xform: W0,
          redirectTo: r == null ? void 0 : r.redirectTo,
        })
      );
    } catch (r) {
      if (he(r)) return { data: { properties: null, user: null }, error: r };
      throw r;
    }
  }
  async createUser(n) {
    try {
      return await xe(this.fetch, "POST", `${this.url}/admin/users`, {
        body: n,
        headers: this.headers,
        xform: Sn,
      });
    } catch (r) {
      if (he(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async listUsers(n) {
    var r, i, a, u, d, p, m;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 },
        v = await xe(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (i =
                (r = n == null ? void 0 : n.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && i !== void 0
                ? i
                : "",
            per_page:
              (u =
                (a = n == null ? void 0 : n.perPage) === null || a === void 0
                  ? void 0
                  : a.toString()) !== null && u !== void 0
                ? u
                : "",
          },
          xform: H0,
        });
      if (v.error) throw v.error;
      const w = await v.json(),
        x =
          (d = v.headers.get("x-total-count")) !== null && d !== void 0 ? d : 0,
        S =
          (m =
            (p = v.headers.get("link")) === null || p === void 0
              ? void 0
              : p.split(",")) !== null && m !== void 0
            ? m
            : [];
      return (
        S.length > 0 &&
          (S.forEach((_) => {
            const L = parseInt(_.split(";")[0].split("=")[1].substring(0, 1)),
              P = JSON.parse(_.split(";")[1].split("=")[1]);
            g[`${P}Page`] = L;
          }),
          (g.total = parseInt(x))),
        { data: Object.assign(Object.assign({}, w), g), error: null }
      );
    } catch (g) {
      if (he(g)) return { data: { users: [] }, error: g };
      throw g;
    }
  }
  async getUserById(n) {
    Sr(n);
    try {
      return await xe(this.fetch, "GET", `${this.url}/admin/users/${n}`, {
        headers: this.headers,
        xform: Sn,
      });
    } catch (r) {
      if (he(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async updateUserById(n, r) {
    Sr(n);
    try {
      return await xe(this.fetch, "PUT", `${this.url}/admin/users/${n}`, {
        body: r,
        headers: this.headers,
        xform: Sn,
      });
    } catch (i) {
      if (he(i)) return { data: { user: null }, error: i };
      throw i;
    }
  }
  async deleteUser(n, r = !1) {
    Sr(n);
    try {
      return await xe(this.fetch, "DELETE", `${this.url}/admin/users/${n}`, {
        headers: this.headers,
        body: { should_soft_delete: r },
        xform: Sn,
      });
    } catch (i) {
      if (he(i)) return { data: { user: null }, error: i };
      throw i;
    }
  }
  async _listFactors(n) {
    Sr(n.userId);
    try {
      const { data: r, error: i } = await xe(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${n.userId}/factors`,
        {
          headers: this.headers,
          xform: (a) => ({ data: { factors: a }, error: null }),
        }
      );
      return { data: r, error: i };
    } catch (r) {
      if (he(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(n) {
    Sr(n.userId), Sr(n.id);
    try {
      return {
        data: await xe(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${n.userId}/factors/${n.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (r) {
      if (he(r)) return { data: null, error: r };
      throw r;
    }
  }
}
function Sf(o = {}) {
  return {
    getItem: (n) => o[n] || null,
    setItem: (n, r) => {
      o[n] = r;
    },
    removeItem: (n) => {
      delete o[n];
    },
  };
}
function G0() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const kr = {
  debug: !!(
    globalThis &&
    hh() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class mh extends Error {
  constructor(n) {
    super(n), (this.isAcquireTimeout = !0);
  }
}
class Q0 extends mh {}
async function Y0(o, n, r) {
  kr.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", o, n);
  const i = new globalThis.AbortController();
  return (
    n > 0 &&
      setTimeout(() => {
        i.abort(),
          kr.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              o
            );
      }, n),
    await Promise.resolve().then(() =>
      globalThis.navigator.locks.request(
        o,
        n === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: i.signal },
        async (a) => {
          if (a) {
            kr.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                o,
                a.name
              );
            try {
              return await r();
            } finally {
              kr.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  o,
                  a.name
                );
            }
          } else {
            if (n === 0)
              throw (
                (kr.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    o
                  ),
                new Q0(
                  `Acquiring an exclusive Navigator LockManager lock "${o}" immediately failed`
                ))
              );
            if (kr.debug)
              try {
                const u = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(u, null, "  ")
                );
              } catch (u) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  u
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
              ),
              await r()
            );
          }
        }
      )
    )
  );
}
G0();
const X0 = {
  url: l0,
  storageKey: u0,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: c0,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
};
async function kf(o, n, r) {
  return await r();
}
const jr = {};
class Ts {
  constructor(n) {
    var r, i;
    (this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log),
      (this.instanceID = Ts.nextInstanceID),
      (Ts.nextInstanceID += 1),
      this.instanceID > 0 &&
        Lt() &&
        console.warn(
          "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
        );
    const a = Object.assign(Object.assign({}, X0), n);
    if (
      ((this.logDebugMessages = !!a.debug),
      typeof a.debug == "function" && (this.logger = a.debug),
      (this.persistSession = a.persistSession),
      (this.storageKey = a.storageKey),
      (this.autoRefreshToken = a.autoRefreshToken),
      (this.admin = new J0({ url: a.url, headers: a.headers, fetch: a.fetch })),
      (this.url = a.url),
      (this.headers = a.headers),
      (this.fetch = ph(a.fetch)),
      (this.lock = a.lock || kf),
      (this.detectSessionInUrl = a.detectSessionInUrl),
      (this.flowType = a.flowType),
      (this.hasCustomAuthorizationHeader = a.hasCustomAuthorizationHeader),
      a.lock
        ? (this.lock = a.lock)
        : Lt() &&
          !(
            (r = globalThis == null ? void 0 : globalThis.navigator) === null ||
            r === void 0
          ) &&
          r.locks
        ? (this.lock = Y0)
        : (this.lock = kf),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession
        ? (a.storage
            ? (this.storage = a.storage)
            : hh()
            ? (this.storage = globalThis.localStorage)
            : ((this.memoryStorage = {}),
              (this.storage = Sf(this.memoryStorage))),
          a.userStorage && (this.userStorage = a.userStorage))
        : ((this.memoryStorage = {}), (this.storage = Sf(this.memoryStorage))),
      Lt() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (u) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          u
        );
      }
      (i = this.broadcastChannel) === null ||
        i === void 0 ||
        i.addEventListener("message", async (u) => {
          this._debug(
            "received broadcast notification from other tab or client",
            u
          ),
            await this._notifyAllSubscribers(u.data.event, u.data.session, !1);
        });
    }
    this.initialize();
  }
  get jwks() {
    var n, r;
    return (r =
      (n = jr[this.storageKey]) === null || n === void 0 ? void 0 : n.jwks) !==
      null && r !== void 0
      ? r
      : { keys: [] };
  }
  set jwks(n) {
    jr[this.storageKey] = Object.assign(
      Object.assign({}, jr[this.storageKey]),
      { jwks: n }
    );
  }
  get jwks_cached_at() {
    var n, r;
    return (r =
      (n = jr[this.storageKey]) === null || n === void 0
        ? void 0
        : n.cachedAt) !== null && r !== void 0
      ? r
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(n) {
    jr[this.storageKey] = Object.assign(
      Object.assign({}, jr[this.storageKey]),
      { cachedAt: n }
    );
  }
  _debug(...n) {
    return (
      this.logDebugMessages &&
        this.logger(
          `GoTrueClient@${this.instanceID} (${uh}) ${new Date().toISOString()}`,
          ...n
        ),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(-1, async () => await this._initialize()))()),
        await this.initializePromise);
  }
  async _initialize() {
    var n;
    try {
      const r = C0(window.location.href);
      let i = "none";
      if (
        (this._isImplicitGrantCallback(r)
          ? (i = "implicit")
          : (await this._isPKCECallback(r)) && (i = "pkce"),
        Lt() && this.detectSessionInUrl && i !== "none")
      ) {
        const { data: a, error: u } = await this._getSessionFromURL(r, i);
        if (u) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              u
            ),
            g0(u))
          ) {
            const m =
              (n = u.details) === null || n === void 0 ? void 0 : n.code;
            if (
              m === "identity_already_exists" ||
              m === "identity_not_found" ||
              m === "single_identity_not_deletable"
            )
              return { error: u };
          }
          return await this._removeSession(), { error: u };
        }
        const { session: d, redirectType: p } = a;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            d,
            "redirect type",
            p
          ),
          await this._saveSession(d),
          setTimeout(async () => {
            p === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", d)
              : await this._notifyAllSubscribers("SIGNED_IN", d);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return he(r)
        ? { error: r }
        : { error: new dh("Unexpected error during initialization", r) };
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(n) {
    var r, i, a;
    try {
      const u = await xe(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (i =
                (r = n == null ? void 0 : n.options) === null || r === void 0
                  ? void 0
                  : r.data) !== null && i !== void 0
                ? i
                : {},
            gotrue_meta_security: {
              captcha_token:
                (a = n == null ? void 0 : n.options) === null || a === void 0
                  ? void 0
                  : a.captchaToken,
            },
          },
          xform: Yt,
        }),
        { data: d, error: p } = u;
      if (p || !d) return { data: { user: null, session: null }, error: p };
      const m = d.session,
        g = d.user;
      return (
        d.session &&
          (await this._saveSession(d.session),
          await this._notifyAllSubscribers("SIGNED_IN", m)),
        { data: { user: g, session: m }, error: null }
      );
    } catch (u) {
      if (he(u)) return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  async signUp(n) {
    var r, i, a;
    try {
      let u;
      if ("email" in n) {
        const { email: v, password: w, options: x } = n;
        let S = null,
          _ = null;
        this.flowType === "pkce" &&
          ([S, _] = await _r(this.storage, this.storageKey)),
          (u = await xe(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: x == null ? void 0 : x.emailRedirectTo,
            body: {
              email: v,
              password: w,
              data:
                (r = x == null ? void 0 : x.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token: x == null ? void 0 : x.captchaToken,
              },
              code_challenge: S,
              code_challenge_method: _,
            },
            xform: Yt,
          }));
      } else if ("phone" in n) {
        const { phone: v, password: w, options: x } = n;
        u = await xe(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: v,
            password: w,
            data:
              (i = x == null ? void 0 : x.data) !== null && i !== void 0
                ? i
                : {},
            channel:
              (a = x == null ? void 0 : x.channel) !== null && a !== void 0
                ? a
                : "sms",
            gotrue_meta_security: {
              captcha_token: x == null ? void 0 : x.captchaToken,
            },
          },
          xform: Yt,
        });
      } else
        throw new Gi(
          "You must provide either an email or phone number and a password"
        );
      const { data: d, error: p } = u;
      if (p || !d) return { data: { user: null, session: null }, error: p };
      const m = d.session,
        g = d.user;
      return (
        d.session &&
          (await this._saveSession(d.session),
          await this._notifyAllSubscribers("SIGNED_IN", m)),
        { data: { user: g, session: m }, error: null }
      );
    } catch (u) {
      if (he(u)) return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  async signInWithPassword(n) {
    try {
      let r;
      if ("email" in n) {
        const { email: u, password: d, options: p } = n;
        r = await xe(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: u,
              password: d,
              gotrue_meta_security: {
                captcha_token: p == null ? void 0 : p.captchaToken,
              },
            },
            xform: _f,
          }
        );
      } else if ("phone" in n) {
        const { phone: u, password: d, options: p } = n;
        r = await xe(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: u,
              password: d,
              gotrue_meta_security: {
                captcha_token: p == null ? void 0 : p.captchaToken,
              },
            },
            xform: _f,
          }
        );
      } else
        throw new Gi(
          "You must provide either an email or phone number and a password"
        );
      const { data: i, error: a } = r;
      return a
        ? { data: { user: null, session: null }, error: a }
        : !i || !i.session || !i.user
        ? { data: { user: null, session: null }, error: new Ji() }
        : (i.session &&
            (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", i.session)),
          {
            data: Object.assign(
              { user: i.user, session: i.session },
              i.weak_password ? { weakPassword: i.weak_password } : null
            ),
            error: a,
          });
    } catch (r) {
      if (he(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async signInWithOAuth(n) {
    var r, i, a, u;
    return await this._handleProviderSignIn(n.provider, {
      redirectTo:
        (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (i = n.options) === null || i === void 0 ? void 0 : i.scopes,
      queryParams:
        (a = n.options) === null || a === void 0 ? void 0 : a.queryParams,
      skipBrowserRedirect:
        (u = n.options) === null || u === void 0
          ? void 0
          : u.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(n) {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._exchangeCodeForSession(n))
    );
  }
  async signInWithWeb3(n) {
    const { chain: r } = n;
    if (r === "solana") return await this.signInWithSolana(n);
    throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
  }
  async signInWithSolana(n) {
    var r, i, a, u, d, p, m, g, v, w, x, S;
    let _, L;
    if ("message" in n) (_ = n.message), (L = n.signature);
    else {
      const { chain: P, wallet: q, statement: W, options: A } = n;
      let R;
      if (Lt())
        if (typeof q == "object") R = q;
        else {
          const B = window;
          if (
            "solana" in B &&
            typeof B.solana == "object" &&
            (("signIn" in B.solana && typeof B.solana.signIn == "function") ||
              ("signMessage" in B.solana &&
                typeof B.solana.signMessage == "function"))
          )
            R = B.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof q != "object" || !(A != null && A.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        R = q;
      }
      const Q = new URL(
        (r = A == null ? void 0 : A.url) !== null && r !== void 0
          ? r
          : window.location.href
      );
      if ("signIn" in R && R.signIn) {
        const B = await R.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                A == null ? void 0 : A.signInWithSolana
              ),
              { version: "1", domain: Q.host, uri: Q.href }
            ),
            W ? { statement: W } : null
          )
        );
        let M;
        if (Array.isArray(B) && B[0] && typeof B[0] == "object") M = B[0];
        else if (
          B &&
          typeof B == "object" &&
          "signedMessage" in B &&
          "signature" in B
        )
          M = B;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value"
          );
        if (
          "signedMessage" in M &&
          "signature" in M &&
          (typeof M.signedMessage == "string" ||
            M.signedMessage instanceof Uint8Array) &&
          M.signature instanceof Uint8Array
        )
          (_ =
            typeof M.signedMessage == "string"
              ? M.signedMessage
              : new TextDecoder().decode(M.signedMessage)),
            (L = M.signature);
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields"
          );
      } else {
        if (
          !("signMessage" in R) ||
          typeof R.signMessage != "function" ||
          !("publicKey" in R) ||
          typeof R != "object" ||
          !R.publicKey ||
          !("toBase58" in R.publicKey) ||
          typeof R.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API"
          );
        _ = [
          `${Q.host} wants you to sign in with your Solana account:`,
          R.publicKey.toBase58(),
          ...(W ? ["", W, ""] : [""]),
          "Version: 1",
          `URI: ${Q.href}`,
          `Issued At: ${
            (a =
              (i = A == null ? void 0 : A.signInWithSolana) === null ||
              i === void 0
                ? void 0
                : i.issuedAt) !== null && a !== void 0
              ? a
              : new Date().toISOString()
          }`,
          ...(!(
            (u = A == null ? void 0 : A.signInWithSolana) === null ||
            u === void 0
          ) && u.notBefore
            ? [`Not Before: ${A.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (d = A == null ? void 0 : A.signInWithSolana) === null ||
            d === void 0
          ) && d.expirationTime
            ? [`Expiration Time: ${A.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (p = A == null ? void 0 : A.signInWithSolana) === null ||
            p === void 0
          ) && p.chainId
            ? [`Chain ID: ${A.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (m = A == null ? void 0 : A.signInWithSolana) === null ||
            m === void 0
          ) && m.nonce
            ? [`Nonce: ${A.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (g = A == null ? void 0 : A.signInWithSolana) === null ||
            g === void 0
          ) && g.requestId
            ? [`Request ID: ${A.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (w =
              (v = A == null ? void 0 : A.signInWithSolana) === null ||
              v === void 0
                ? void 0
                : v.resources) === null || w === void 0
          ) && w.length
            ? [
                "Resources",
                ...A.signInWithSolana.resources.map((M) => `- ${M}`),
              ]
            : []),
        ].join(`
`);
        const B = await R.signMessage(new TextEncoder().encode(_), "utf8");
        if (!B || !(B instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value"
          );
        L = B;
      }
    }
    try {
      const { data: P, error: q } = await xe(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: _, signature: S0(L) },
            !((x = n.options) === null || x === void 0) && x.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (S = n.options) === null || S === void 0
                        ? void 0
                        : S.captchaToken,
                  },
                }
              : null
          ),
          xform: Yt,
        }
      );
      if (q) throw q;
      return !P || !P.session || !P.user
        ? { data: { user: null, session: null }, error: new Ji() }
        : (P.session &&
            (await this._saveSession(P.session),
            await this._notifyAllSubscribers("SIGNED_IN", P.session)),
          { data: Object.assign({}, P), error: q });
    } catch (P) {
      if (he(P)) return { data: { user: null, session: null }, error: P };
      throw P;
    }
  }
  async _exchangeCodeForSession(n) {
    const r = await Mn(this.storage, `${this.storageKey}-code-verifier`),
      [i, a] = (r ?? "").split("/");
    try {
      const { data: u, error: d } = await xe(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: n, code_verifier: i },
          xform: Yt,
        }
      );
      if ((await bn(this.storage, `${this.storageKey}-code-verifier`), d))
        throw d;
      return !u || !u.session || !u.user
        ? {
            data: { user: null, session: null, redirectType: null },
            error: new Ji(),
          }
        : (u.session &&
            (await this._saveSession(u.session),
            await this._notifyAllSubscribers("SIGNED_IN", u.session)),
          {
            data: Object.assign(Object.assign({}, u), {
              redirectType: a ?? null,
            }),
            error: d,
          });
    } catch (u) {
      if (he(u))
        return {
          data: { user: null, session: null, redirectType: null },
          error: u,
        };
      throw u;
    }
  }
  async signInWithIdToken(n) {
    try {
      const {
          options: r,
          provider: i,
          token: a,
          access_token: u,
          nonce: d,
        } = n,
        p = await xe(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: i,
              id_token: a,
              access_token: u,
              nonce: d,
              gotrue_meta_security: {
                captcha_token: r == null ? void 0 : r.captchaToken,
              },
            },
            xform: Yt,
          }
        ),
        { data: m, error: g } = p;
      return g
        ? { data: { user: null, session: null }, error: g }
        : !m || !m.session || !m.user
        ? { data: { user: null, session: null }, error: new Ji() }
        : (m.session &&
            (await this._saveSession(m.session),
            await this._notifyAllSubscribers("SIGNED_IN", m.session)),
          { data: m, error: g });
    } catch (r) {
      if (he(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async signInWithOtp(n) {
    var r, i, a, u, d;
    try {
      if ("email" in n) {
        const { email: p, options: m } = n;
        let g = null,
          v = null;
        this.flowType === "pkce" &&
          ([g, v] = await _r(this.storage, this.storageKey));
        const { error: w } = await xe(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: p,
            data:
              (r = m == null ? void 0 : m.data) !== null && r !== void 0
                ? r
                : {},
            create_user:
              (i = m == null ? void 0 : m.shouldCreateUser) !== null &&
              i !== void 0
                ? i
                : !0,
            gotrue_meta_security: {
              captcha_token: m == null ? void 0 : m.captchaToken,
            },
            code_challenge: g,
            code_challenge_method: v,
          },
          redirectTo: m == null ? void 0 : m.emailRedirectTo,
        });
        return { data: { user: null, session: null }, error: w };
      }
      if ("phone" in n) {
        const { phone: p, options: m } = n,
          { data: g, error: v } = await xe(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: p,
                data:
                  (a = m == null ? void 0 : m.data) !== null && a !== void 0
                    ? a
                    : {},
                create_user:
                  (u = m == null ? void 0 : m.shouldCreateUser) !== null &&
                  u !== void 0
                    ? u
                    : !0,
                gotrue_meta_security: {
                  captcha_token: m == null ? void 0 : m.captchaToken,
                },
                channel:
                  (d = m == null ? void 0 : m.channel) !== null && d !== void 0
                    ? d
                    : "sms",
              },
            }
          );
        return {
          data: {
            user: null,
            session: null,
            messageId: g == null ? void 0 : g.message_id,
          },
          error: v,
        };
      }
      throw new Gi("You must provide either an email or phone number.");
    } catch (p) {
      if (he(p)) return { data: { user: null, session: null }, error: p };
      throw p;
    }
  }
  async verifyOtp(n) {
    var r, i;
    try {
      let a, u;
      "options" in n &&
        ((a = (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo),
        (u =
          (i = n.options) === null || i === void 0 ? void 0 : i.captchaToken));
      const { data: d, error: p } = await xe(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, n), {
            gotrue_meta_security: { captcha_token: u },
          }),
          redirectTo: a,
          xform: Yt,
        }
      );
      if (p) throw p;
      if (!d) throw new Error("An error occurred on token verification.");
      const m = d.session,
        g = d.user;
      return (
        m != null &&
          m.access_token &&
          (await this._saveSession(m),
          await this._notifyAllSubscribers(
            n.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            m
          )),
        { data: { user: g, session: m }, error: null }
      );
    } catch (a) {
      if (he(a)) return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  async signInWithSSO(n) {
    var r, i, a;
    try {
      let u = null,
        d = null;
      return (
        this.flowType === "pkce" &&
          ([u, d] = await _r(this.storage, this.storageKey)),
        await xe(this.fetch, "POST", `${this.url}/sso`, {
          body: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    "providerId" in n ? { provider_id: n.providerId } : null
                  ),
                  "domain" in n ? { domain: n.domain } : null
                ),
                {
                  redirect_to:
                    (i =
                      (r = n.options) === null || r === void 0
                        ? void 0
                        : r.redirectTo) !== null && i !== void 0
                      ? i
                      : void 0,
                }
              ),
              !(
                (a = n == null ? void 0 : n.options) === null || a === void 0
              ) && a.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: n.options.captchaToken,
                    },
                  }
                : null
            ),
            {
              skip_http_redirect: !0,
              code_challenge: u,
              code_challenge_method: d,
            }
          ),
          headers: this.headers,
          xform: V0,
        })
      );
    } catch (u) {
      if (he(u)) return { data: null, error: u };
      throw u;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._reauthenticate())
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: i,
        } = n;
        if (i) throw i;
        if (!r) throw new _n();
        const { error: a } = await xe(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: r.access_token }
        );
        return { data: { user: null, session: null }, error: a };
      });
    } catch (n) {
      if (he(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async resend(n) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in n) {
        const { email: i, type: a, options: u } = n,
          { error: d } = await xe(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              email: i,
              type: a,
              gotrue_meta_security: {
                captcha_token: u == null ? void 0 : u.captchaToken,
              },
            },
            redirectTo: u == null ? void 0 : u.emailRedirectTo,
          });
        return { data: { user: null, session: null }, error: d };
      } else if ("phone" in n) {
        const { phone: i, type: a, options: u } = n,
          { data: d, error: p } = await xe(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              phone: i,
              type: a,
              gotrue_meta_security: {
                captcha_token: u == null ? void 0 : u.captchaToken,
              },
            },
          });
        return {
          data: {
            user: null,
            session: null,
            messageId: d == null ? void 0 : d.message_id,
          },
          error: p,
        };
      }
      throw new Gi(
        "You must provide either an email or phone number and a type"
      );
    } catch (r) {
      if (he(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => this._useSession(async (r) => r))
    );
  }
  async _acquireLock(n, r) {
    this._debug("#_acquireLock", "begin", n);
    try {
      if (this.lockAcquired) {
        const i = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          a = (async () => (await i, await r()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await a;
              } catch {}
            })()
          ),
          a
        );
      }
      return await this.lock(`lock:${this.storageKey}`, n, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const i = r();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await i;
                } catch {}
              })()
            ),
              await i;
            this.pendingInLock.length;

          ) {
            const a = [...this.pendingInLock];
            await Promise.all(a), this.pendingInLock.splice(0, a.length);
          }
          return await i;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(n) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await n(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let n = null;
      const r = await Mn(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", r),
        r !== null &&
          (this._isValidSession(r)
            ? (n = r)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !n)
      )
        return { data: { session: null }, error: null };
      const i = n.expires_at ? n.expires_at * 1e3 - Date.now() < ll : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${i ? "" : " not"} expired`,
          "expires_at",
          n.expires_at
        ),
        !i)
      ) {
        if (this.userStorage) {
          const d = await Mn(this.userStorage, this.storageKey + "-user");
          d != null && d.user ? (n.user = d.user) : (n.user = dl());
        }
        if (this.storage.isServer && n.user) {
          let d = this.suppressGetSessionWarning;
          n = new Proxy(n, {
            get: (m, g, v) => (
              !d &&
                g === "user" &&
                (console.warn(
                  "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                ),
                (d = !0),
                (this.suppressGetSessionWarning = !0)),
              Reflect.get(m, g, v)
            ),
          });
        }
        return { data: { session: n }, error: null };
      }
      const { session: a, error: u } = await this._callRefreshToken(
        n.refresh_token
      );
      return u
        ? { data: { session: null }, error: u }
        : { data: { session: a }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(n) {
    return n
      ? await this._getUser(n)
      : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(n) {
    try {
      return n
        ? await xe(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: n,
            xform: Sn,
          })
        : await this._useSession(async (r) => {
            var i, a, u;
            const { data: d, error: p } = r;
            if (p) throw p;
            return !(
              !((i = d.session) === null || i === void 0) && i.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new _n() }
              : await xe(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (u =
                      (a = d.session) === null || a === void 0
                        ? void 0
                        : a.access_token) !== null && u !== void 0
                      ? u
                      : void 0,
                  xform: Sn,
                });
          });
    } catch (r) {
      if (he(r))
        return (
          m0(r) &&
            (await this._removeSession(),
            await bn(this.storage, `${this.storageKey}-code-verifier`)),
          { data: { user: null }, error: r }
        );
      throw r;
    }
  }
  async updateUser(n, r = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._updateUser(n, r))
    );
  }
  async _updateUser(n, r = {}) {
    try {
      return await this._useSession(async (i) => {
        const { data: a, error: u } = i;
        if (u) throw u;
        if (!a.session) throw new _n();
        const d = a.session;
        let p = null,
          m = null;
        this.flowType === "pkce" &&
          n.email != null &&
          ([p, m] = await _r(this.storage, this.storageKey));
        const { data: g, error: v } = await xe(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: r == null ? void 0 : r.emailRedirectTo,
            body: Object.assign(Object.assign({}, n), {
              code_challenge: p,
              code_challenge_method: m,
            }),
            jwt: d.access_token,
            xform: Sn,
          }
        );
        if (v) throw v;
        return (
          (d.user = g.user),
          await this._saveSession(d),
          await this._notifyAllSubscribers("USER_UPDATED", d),
          { data: { user: d.user }, error: null }
        );
      });
    } catch (i) {
      if (he(i)) return { data: { user: null }, error: i };
      throw i;
    }
  }
  async setSession(n) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._setSession(n))
    );
  }
  async _setSession(n) {
    try {
      if (!n.access_token || !n.refresh_token) throw new _n();
      const r = Date.now() / 1e3;
      let i = r,
        a = !0,
        u = null;
      const { payload: d } = cl(n.access_token);
      if ((d.exp && ((i = d.exp), (a = i <= r)), a)) {
        const { session: p, error: m } = await this._callRefreshToken(
          n.refresh_token
        );
        if (m) return { data: { user: null, session: null }, error: m };
        if (!p) return { data: { user: null, session: null }, error: null };
        u = p;
      } else {
        const { data: p, error: m } = await this._getUser(n.access_token);
        if (m) throw m;
        (u = {
          access_token: n.access_token,
          refresh_token: n.refresh_token,
          user: p.user,
          token_type: "bearer",
          expires_in: i - r,
          expires_at: i,
        }),
          await this._saveSession(u),
          await this._notifyAllSubscribers("SIGNED_IN", u);
      }
      return { data: { user: u.user, session: u }, error: null };
    } catch (r) {
      if (he(r)) return { data: { session: null, user: null }, error: r };
      throw r;
    }
  }
  async refreshSession(n) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._refreshSession(n))
    );
  }
  async _refreshSession(n) {
    try {
      return await this._useSession(async (r) => {
        var i;
        if (!n) {
          const { data: d, error: p } = r;
          if (p) throw p;
          n = (i = d.session) !== null && i !== void 0 ? i : void 0;
        }
        if (!(n != null && n.refresh_token)) throw new _n();
        const { session: a, error: u } = await this._callRefreshToken(
          n.refresh_token
        );
        return u
          ? { data: { user: null, session: null }, error: u }
          : a
          ? { data: { user: a.user, session: a }, error: null }
          : { data: { user: null, session: null }, error: null };
      });
    } catch (r) {
      if (he(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async _getSessionFromURL(n, r) {
    try {
      if (!Lt()) throw new Qi("No browser detected.");
      if (n.error || n.error_description || n.error_code)
        throw new Qi(
          n.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: n.error || "unspecified_error",
            code: n.error_code || "unspecified_code",
          }
        );
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new mf("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Qi("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !n.code)
        )
          throw new mf("No code detected.");
        const { data: W, error: A } = await this._exchangeCodeForSession(
          n.code
        );
        if (A) throw A;
        const R = new URL(window.location.href);
        return (
          R.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", R.toString()),
          { data: { session: W.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: i,
        provider_refresh_token: a,
        access_token: u,
        refresh_token: d,
        expires_in: p,
        expires_at: m,
        token_type: g,
      } = n;
      if (!u || !p || !d || !g) throw new Qi("No session defined in URL");
      const v = Math.round(Date.now() / 1e3),
        w = parseInt(p);
      let x = v + w;
      m && (x = parseInt(m));
      const S = x - v;
      S * 1e3 <= Er &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${w}s`
        );
      const _ = x - w;
      v - _ >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            _,
            x,
            v
          )
        : v - _ < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            _,
            x,
            v
          );
      const { data: L, error: P } = await this._getUser(u);
      if (P) throw P;
      const q = {
        provider_token: i,
        provider_refresh_token: a,
        access_token: u,
        expires_in: w,
        expires_at: x,
        refresh_token: d,
        token_type: g,
        user: L.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        { data: { session: q, redirectType: n.type }, error: null }
      );
    } catch (i) {
      if (he(i))
        return { data: { session: null, redirectType: null }, error: i };
      throw i;
    }
  }
  _isImplicitGrantCallback(n) {
    return !!(n.access_token || n.error_description);
  }
  async _isPKCECallback(n) {
    const r = await Mn(this.storage, `${this.storageKey}-code-verifier`);
    return !!(n.code && r);
  }
  async signOut(n = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._signOut(n))
    );
  }
  async _signOut({ scope: n } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var i;
      const { data: a, error: u } = r;
      if (u) return { error: u };
      const d =
        (i = a.session) === null || i === void 0 ? void 0 : i.access_token;
      if (d) {
        const { error: p } = await this.admin.signOut(d, n);
        if (
          p &&
          !(p0(p) && (p.status === 404 || p.status === 401 || p.status === 403))
        )
          return { error: p };
      }
      return (
        n !== "others" &&
          (await this._removeSession(),
          await bn(this.storage, `${this.storageKey}-code-verifier`)),
        { error: null }
      );
    });
  }
  onAuthStateChange(n) {
    const r = j0(),
      i = {
        id: r,
        callback: n,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            r
          ),
            this.stateChangeEmitters.delete(r);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", r),
      this.stateChangeEmitters.set(r, i),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(r);
        })
      ))(),
      { data: { subscription: i } }
    );
  }
  async _emitInitialSession(n) {
    return await this._useSession(async (r) => {
      var i, a;
      try {
        const {
          data: { session: u },
          error: d,
        } = r;
        if (d) throw d;
        await ((i = this.stateChangeEmitters.get(n)) === null || i === void 0
          ? void 0
          : i.callback("INITIAL_SESSION", u)),
          this._debug("INITIAL_SESSION", "callback id", n, "session", u);
      } catch (u) {
        await ((a = this.stateChangeEmitters.get(n)) === null || a === void 0
          ? void 0
          : a.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", n, "error", u),
          console.error(u);
      }
    });
  }
  async resetPasswordForEmail(n, r = {}) {
    let i = null,
      a = null;
    this.flowType === "pkce" &&
      ([i, a] = await _r(this.storage, this.storageKey, !0));
    try {
      return await xe(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: n,
          code_challenge: i,
          code_challenge_method: a,
          gotrue_meta_security: { captcha_token: r.captchaToken },
        },
        headers: this.headers,
        redirectTo: r.redirectTo,
      });
    } catch (u) {
      if (he(u)) return { data: null, error: u };
      throw u;
    }
  }
  async getUserIdentities() {
    var n;
    try {
      const { data: r, error: i } = await this.getUser();
      if (i) throw i;
      return {
        data: {
          identities: (n = r.user.identities) !== null && n !== void 0 ? n : [],
        },
        error: null,
      };
    } catch (r) {
      if (he(r)) return { data: null, error: r };
      throw r;
    }
  }
  async linkIdentity(n) {
    var r;
    try {
      const { data: i, error: a } = await this._useSession(async (u) => {
        var d, p, m, g, v;
        const { data: w, error: x } = u;
        if (x) throw x;
        const S = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          n.provider,
          {
            redirectTo:
              (d = n.options) === null || d === void 0 ? void 0 : d.redirectTo,
            scopes:
              (p = n.options) === null || p === void 0 ? void 0 : p.scopes,
            queryParams:
              (m = n.options) === null || m === void 0 ? void 0 : m.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await xe(this.fetch, "GET", S, {
          headers: this.headers,
          jwt:
            (v =
              (g = w.session) === null || g === void 0
                ? void 0
                : g.access_token) !== null && v !== void 0
              ? v
              : void 0,
        });
      });
      if (a) throw a;
      return (
        Lt() &&
          !(
            !((r = n.options) === null || r === void 0) && r.skipBrowserRedirect
          ) &&
          window.location.assign(i == null ? void 0 : i.url),
        {
          data: { provider: n.provider, url: i == null ? void 0 : i.url },
          error: null,
        }
      );
    } catch (i) {
      if (he(i)) return { data: { provider: n.provider, url: null }, error: i };
      throw i;
    }
  }
  async unlinkIdentity(n) {
    try {
      return await this._useSession(async (r) => {
        var i, a;
        const { data: u, error: d } = r;
        if (d) throw d;
        return await xe(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${n.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (a =
                (i = u.session) === null || i === void 0
                  ? void 0
                  : i.access_token) !== null && a !== void 0
                ? a
                : void 0,
          }
        );
      });
    } catch (r) {
      if (he(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _refreshAccessToken(n) {
    const r = `#_refreshAccessToken(${n.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const i = Date.now();
      return await P0(
        async (a) => (
          a > 0 && (await E0(200 * Math.pow(2, a - 1))),
          this._debug(r, "refreshing attempt", a),
          await xe(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: n }, headers: this.headers, xform: Yt }
          )
        ),
        (a, u) => {
          const d = 200 * Math.pow(2, a);
          return u && ul(u) && Date.now() + d - i < Er;
        }
      );
    } catch (i) {
      if ((this._debug(r, "error", i), he(i)))
        return { data: { session: null, user: null }, error: i };
      throw i;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      "access_token" in n &&
      "refresh_token" in n &&
      "expires_at" in n
    );
  }
  async _handleProviderSignIn(n, r) {
    const i = await this._getUrlForProvider(`${this.url}/authorize`, n, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        n,
        "options",
        r,
        "url",
        i
      ),
      Lt() && !r.skipBrowserRedirect && window.location.assign(i),
      { data: { provider: n, url: i }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var n, r;
    const i = "#_recoverAndRefresh()";
    this._debug(i, "begin");
    try {
      const a = await Mn(this.storage, this.storageKey);
      if (a && this.userStorage) {
        let d = await Mn(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !d &&
          ((d = { user: a.user }),
          await Pr(this.userStorage, this.storageKey + "-user", d)),
          (a.user =
            (n = d == null ? void 0 : d.user) !== null && n !== void 0
              ? n
              : dl());
      } else if (a && !a.user && !a.user) {
        const d = await Mn(this.storage, this.storageKey + "-user");
        d && d != null && d.user
          ? ((a.user = d.user),
            await bn(this.storage, this.storageKey + "-user"),
            await Pr(this.storage, this.storageKey, a))
          : (a.user = dl());
      }
      if (
        (this._debug(i, "session from storage", a), !this._isValidSession(a))
      ) {
        this._debug(i, "session is not valid"),
          a !== null && (await this._removeSession());
        return;
      }
      const u =
        ((r = a.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 -
          Date.now() <
        ll;
      if (
        (this._debug(
          i,
          `session has${u ? "" : " not"} expired with margin of ${ll}s`
        ),
        u)
      ) {
        if (this.autoRefreshToken && a.refresh_token) {
          const { error: d } = await this._callRefreshToken(a.refresh_token);
          d &&
            (console.error(d),
            ul(d) ||
              (this._debug(
                i,
                "refresh failed with a non-retryable error, removing the session",
                d
              ),
              await this._removeSession()));
        }
      } else if (a.user && a.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: d, error: p } = await this._getUser(a.access_token);
          !p && d != null && d.user
            ? ((a.user = d.user),
              await this._saveSession(a),
              await this._notifyAllSubscribers("SIGNED_IN", a))
            : this._debug(
                i,
                "could not get user data, skipping SIGNED_IN notification"
              );
        } catch (d) {
          console.error("Error getting user data:", d),
            this._debug(
              i,
              "error getting user data, skipping SIGNED_IN notification",
              d
            );
        }
      else await this._notifyAllSubscribers("SIGNED_IN", a);
    } catch (a) {
      this._debug(i, "error", a), console.error(a);
      return;
    } finally {
      this._debug(i, "end");
    }
  }
  async _callRefreshToken(n) {
    var r, i;
    if (!n) throw new _n();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const a = `#_callRefreshToken(${n.substring(0, 5)}...)`;
    this._debug(a, "begin");
    try {
      this.refreshingDeferred = new oo();
      const { data: u, error: d } = await this._refreshAccessToken(n);
      if (d) throw d;
      if (!u.session) throw new _n();
      await this._saveSession(u.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", u.session);
      const p = { session: u.session, error: null };
      return this.refreshingDeferred.resolve(p), p;
    } catch (u) {
      if ((this._debug(a, "error", u), he(u))) {
        const d = { session: null, error: u };
        return (
          ul(u) || (await this._removeSession()),
          (r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.resolve(d),
          d
        );
      }
      throw (
        ((i = this.refreshingDeferred) === null || i === void 0 || i.reject(u),
        u)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(a, "end");
    }
  }
  async _notifyAllSubscribers(n, r, i = !0) {
    const a = `#_notifyAllSubscribers(${n})`;
    this._debug(a, "begin", r, `broadcast = ${i}`);
    try {
      this.broadcastChannel &&
        i &&
        this.broadcastChannel.postMessage({ event: n, session: r });
      const u = [],
        d = Array.from(this.stateChangeEmitters.values()).map(async (p) => {
          try {
            await p.callback(n, r);
          } catch (m) {
            u.push(m);
          }
        });
      if ((await Promise.all(d), u.length > 0)) {
        for (let p = 0; p < u.length; p += 1) console.error(u[p]);
        throw u[0];
      }
    } finally {
      this._debug(a, "end");
    }
  }
  async _saveSession(n) {
    this._debug("#_saveSession()", n), (this.suppressGetSessionWarning = !0);
    const r = Object.assign({}, n),
      i = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !i &&
        r.user &&
        (await Pr(this.userStorage, this.storageKey + "-user", {
          user: r.user,
        }));
      const a = Object.assign({}, r);
      delete a.user;
      const u = wf(a);
      await Pr(this.storage, this.storageKey, u);
    } else {
      const a = wf(r);
      await Pr(this.storage, this.storageKey, a);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"),
      await bn(this.storage, this.storageKey),
      await bn(this.storage, this.storageKey + "-code-verifier"),
      await bn(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await bn(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const n = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      n &&
        Lt() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", n);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const n = setInterval(() => this._autoRefreshTokenTick(), Er);
    (this.autoRefreshTicker = n),
      n && typeof n == "object" && typeof n.unref == "function"
        ? n.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(n),
      setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const n = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), n && clearInterval(n);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const n = Date.now();
          try {
            return await this._useSession(async (r) => {
              const {
                data: { session: i },
              } = r;
              if (!i || !i.refresh_token || !i.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const a = Math.floor((i.expires_at * 1e3 - n) / Er);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${a} ticks, a tick lasts ${Er}ms, refresh threshold is ${Ol} ticks`
              ),
                a <= Ol && (await this._callRefreshToken(i.refresh_token));
            });
          } catch (r) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              r
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (n) {
      if (n.isAcquireTimeout || n instanceof mh)
        this._debug("auto refresh token tick lock not available");
      else throw n;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !Lt() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (n) {
      console.error("_handleVisibilityChange", n);
    }
  }
  async _onVisibilityChanged(n) {
    const r = `#_onVisibilityChanged(${n})`;
    this._debug(r, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          n ||
            (await this.initializePromise,
            await this._acquireLock(-1, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  r,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(n, r, i) {
    const a = [`provider=${encodeURIComponent(r)}`];
    if (
      (i != null &&
        i.redirectTo &&
        a.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),
      i != null && i.scopes && a.push(`scopes=${encodeURIComponent(i.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [u, d] = await _r(this.storage, this.storageKey),
        p = new URLSearchParams({
          code_challenge: `${encodeURIComponent(u)}`,
          code_challenge_method: `${encodeURIComponent(d)}`,
        });
      a.push(p.toString());
    }
    if (i != null && i.queryParams) {
      const u = new URLSearchParams(i.queryParams);
      a.push(u.toString());
    }
    return (
      i != null &&
        i.skipBrowserRedirect &&
        a.push(`skip_http_redirect=${i.skipBrowserRedirect}`),
      `${n}?${a.join("&")}`
    );
  }
  async _unenroll(n) {
    try {
      return await this._useSession(async (r) => {
        var i;
        const { data: a, error: u } = r;
        return u
          ? { data: null, error: u }
          : await xe(
              this.fetch,
              "DELETE",
              `${this.url}/factors/${n.factorId}`,
              {
                headers: this.headers,
                jwt:
                  (i = a == null ? void 0 : a.session) === null || i === void 0
                    ? void 0
                    : i.access_token,
              }
            );
      });
    } catch (r) {
      if (he(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _enroll(n) {
    try {
      return await this._useSession(async (r) => {
        var i, a;
        const { data: u, error: d } = r;
        if (d) return { data: null, error: d };
        const p = Object.assign(
            { friendly_name: n.friendlyName, factor_type: n.factorType },
            n.factorType === "phone" ? { phone: n.phone } : { issuer: n.issuer }
          ),
          { data: m, error: g } = await xe(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: p,
              headers: this.headers,
              jwt:
                (i = u == null ? void 0 : u.session) === null || i === void 0
                  ? void 0
                  : i.access_token,
            }
          );
        return g
          ? { data: null, error: g }
          : (n.factorType === "totp" &&
              !((a = m == null ? void 0 : m.totp) === null || a === void 0) &&
              a.qr_code &&
              (m.totp.qr_code = `data:image/svg+xml;utf-8,${m.totp.qr_code}`),
            { data: m, error: null });
      });
    } catch (r) {
      if (he(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _verify(n) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (r) => {
          var i;
          const { data: a, error: u } = r;
          if (u) return { data: null, error: u };
          const { data: d, error: p } = await xe(
            this.fetch,
            "POST",
            `${this.url}/factors/${n.factorId}/verify`,
            {
              body: { code: n.code, challenge_id: n.challengeId },
              headers: this.headers,
              jwt:
                (i = a == null ? void 0 : a.session) === null || i === void 0
                  ? void 0
                  : i.access_token,
            }
          );
          return p
            ? { data: null, error: p }
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + d.expires_in },
                  d
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", d),
              { data: d, error: p });
        });
      } catch (r) {
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  async _challenge(n) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (r) => {
          var i;
          const { data: a, error: u } = r;
          return u
            ? { data: null, error: u }
            : await xe(
                this.fetch,
                "POST",
                `${this.url}/factors/${n.factorId}/challenge`,
                {
                  body: { channel: n.channel },
                  headers: this.headers,
                  jwt:
                    (i = a == null ? void 0 : a.session) === null ||
                    i === void 0
                      ? void 0
                      : i.access_token,
                }
              );
        });
      } catch (r) {
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  async _challengeAndVerify(n) {
    const { data: r, error: i } = await this._challenge({
      factorId: n.factorId,
    });
    return i
      ? { data: null, error: i }
      : await this._verify({
          factorId: n.factorId,
          challengeId: r.id,
          code: n.code,
        });
  }
  async _listFactors() {
    const {
      data: { user: n },
      error: r,
    } = await this.getUser();
    if (r) return { data: null, error: r };
    const i = (n == null ? void 0 : n.factors) || [],
      a = i.filter((d) => d.factor_type === "totp" && d.status === "verified"),
      u = i.filter((d) => d.factor_type === "phone" && d.status === "verified");
    return { data: { all: i, totp: a, phone: u }, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(
      -1,
      async () =>
        await this._useSession(async (n) => {
          var r, i;
          const {
            data: { session: a },
            error: u,
          } = n;
          if (u) return { data: null, error: u };
          if (!a)
            return {
              data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: [],
              },
              error: null,
            };
          const { payload: d } = cl(a.access_token);
          let p = null;
          d.aal && (p = d.aal);
          let m = p;
          ((i =
            (r = a.user.factors) === null || r === void 0
              ? void 0
              : r.filter((w) => w.status === "verified")) !== null &&
          i !== void 0
            ? i
            : []
          ).length > 0 && (m = "aal2");
          const v = d.amr || [];
          return {
            data: {
              currentLevel: p,
              nextLevel: m,
              currentAuthenticationMethods: v,
            },
            error: null,
          };
        })
    );
  }
  async fetchJwk(n, r = { keys: [] }) {
    let i = r.keys.find((p) => p.kid === n);
    if (i) return i;
    const a = Date.now();
    if (
      ((i = this.jwks.keys.find((p) => p.kid === n)),
      i && this.jwks_cached_at + f0 > a)
    )
      return i;
    const { data: u, error: d } = await xe(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers }
    );
    if (d) throw d;
    return !u.keys ||
      u.keys.length === 0 ||
      ((this.jwks = u),
      (this.jwks_cached_at = a),
      (i = u.keys.find((p) => p.kid === n)),
      !i)
      ? null
      : i;
  }
  async getClaims(n, r = {}) {
    try {
      let i = n;
      if (!i) {
        const { data: S, error: _ } = await this.getSession();
        if (_ || !S.session) return { data: null, error: _ };
        i = S.session.access_token;
      }
      const {
        header: a,
        payload: u,
        signature: d,
        raw: { header: p, payload: m },
      } = cl(i);
      (r != null && r.allowExpired) || $0(u.exp);
      const g =
        !a.alg ||
        a.alg.startsWith("HS") ||
        !a.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              a.kid,
              r != null && r.keys
                ? { keys: r.keys }
                : r == null
                ? void 0
                : r.jwks
            );
      if (!g) {
        const { error: S } = await this.getUser(i);
        if (S) throw S;
        return { data: { claims: u, header: a, signature: d }, error: null };
      }
      const v = D0(a.alg),
        w = await crypto.subtle.importKey("jwk", g, v, !0, ["verify"]);
      if (!(await crypto.subtle.verify(v, w, d, _0(`${p}.${m}`))))
        throw new Rl("Invalid JWT signature");
      return { data: { claims: u, header: a, signature: d }, error: null };
    } catch (i) {
      if (he(i)) return { data: null, error: i };
      throw i;
    }
  }
}
Ts.nextInstanceID = 0;
const Z0 = Ts;
class ev extends Z0 {
  constructor(n) {
    super(n);
  }
}
var tv = function (o, n, r, i) {
  function a(u) {
    return u instanceof r
      ? u
      : new r(function (d) {
          d(u);
        });
  }
  return new (r || (r = Promise))(function (u, d) {
    function p(v) {
      try {
        g(i.next(v));
      } catch (w) {
        d(w);
      }
    }
    function m(v) {
      try {
        g(i.throw(v));
      } catch (w) {
        d(w);
      }
    }
    function g(v) {
      v.done ? u(v.value) : a(v.value).then(p, m);
    }
    g((i = i.apply(o, n || [])).next());
  });
};
class nv {
  constructor(n, r, i) {
    var a, u, d;
    if (((this.supabaseUrl = n), (this.supabaseKey = r), !n))
      throw new Error("supabaseUrl is required.");
    if (!r) throw new Error("supabaseKey is required.");
    const p = o0(n),
      m = new URL(p);
    (this.realtimeUrl = new URL("realtime/v1", m)),
      (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
        "http",
        "ws"
      )),
      (this.authUrl = new URL("auth/v1", m)),
      (this.storageUrl = new URL("storage/v1", m)),
      (this.functionsUrl = new URL("functions/v1", m));
    const g = `sb-${m.hostname.split(".")[0]}-auth-token`,
      v = {
        db: Xg,
        realtime: e0,
        auth: Object.assign(Object.assign({}, Zg), { storageKey: g }),
        global: Yg,
      },
      w = a0(i ?? {}, v);
    (this.storageKey =
      (a = w.auth.storageKey) !== null && a !== void 0 ? a : ""),
      (this.headers = (u = w.global.headers) !== null && u !== void 0 ? u : {}),
      w.accessToken
        ? ((this.accessToken = w.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (x, S) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                    S
                  )} is not possible`
                );
              },
            }
          )))
        : (this.auth = this._initSupabaseAuthClient(
            (d = w.auth) !== null && d !== void 0 ? d : {},
            this.headers,
            w.global.fetch
          )),
      (this.fetch = s0(r, this._getAccessToken.bind(this), w.global.fetch)),
      (this.realtime = this._initRealtimeClient(
        Object.assign(
          {
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this),
          },
          w.realtime
        )
      )),
      (this.rest = new yg(new URL("rest/v1", m).href, {
        headers: this.headers,
        schema: w.db.schema,
        fetch: this.fetch,
      })),
      (this.storage = new Jg(
        this.storageUrl.href,
        this.headers,
        this.fetch,
        i == null ? void 0 : i.storage
      )),
      w.accessToken || this._listenForAuthEvents();
  }
  get functions() {
    return new og(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  from(n) {
    return this.rest.from(n);
  }
  schema(n) {
    return this.rest.schema(n);
  }
  rpc(n, r = {}, i = {}) {
    return this.rest.rpc(n, r, i);
  }
  channel(n, r = { config: {} }) {
    return this.realtime.channel(n, r);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(n) {
    return this.realtime.removeChannel(n);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var n, r;
    return tv(this, void 0, void 0, function* () {
      if (this.accessToken) return yield this.accessToken();
      const { data: i } = yield this.auth.getSession();
      return (r =
        (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !==
        null && r !== void 0
        ? r
        : this.supabaseKey;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: n,
      persistSession: r,
      detectSessionInUrl: i,
      storage: a,
      storageKey: u,
      flowType: d,
      lock: p,
      debug: m,
    },
    g,
    v
  ) {
    const w = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new ev({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, w), g),
      storageKey: u,
      autoRefreshToken: n,
      persistSession: r,
      detectSessionInUrl: i,
      storage: a,
      flowType: d,
      lock: p,
      debug: m,
      fetch: v,
      hasCustomAuthorizationHeader: "Authorization" in this.headers,
    });
  }
  _initRealtimeClient(n) {
    return new Ig(
      this.realtimeUrl.href,
      Object.assign(Object.assign({}, n), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          n == null ? void 0 : n.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((r, i) => {
      this._handleTokenChanged(
        r,
        "CLIENT",
        i == null ? void 0 : i.access_token
      );
    });
  }
  _handleTokenChanged(n, r, i) {
    (n === "TOKEN_REFRESHED" || n === "SIGNED_IN") &&
    this.changedAccessToken !== i
      ? (this.changedAccessToken = i)
      : n === "SIGNED_OUT" &&
        (this.realtime.setAuth(),
        r == "STORAGE" && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const rv = (o, n, r) => new nv(o, n, r);
function sv() {
  if (typeof window < "u" || typeof process > "u") return !1;
  const o = process.version;
  if (o == null) return !1;
  const n = o.match(/^v(\d+)\./);
  return n ? parseInt(n[1], 10) <= 18 : !1;
}
sv() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217"
  );
const iv = "https://vzudkwjhxncnrczzulmj.supabase.co",
  ov =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6dWRrd2poeG5jbnJjenp1bG1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNTQxNTMsImV4cCI6MjA2ODczMDE1M30.qcDdzACA-uhN1Xe7Qest2dLghtjbZ-6DNgkvQ93HTtU";
let je = null;
je = rv(iv, ov);
function zt() {
  return je;
}
async function jf(o) {
  if (!je)
    throw new Error("Supabase not configured. Please check your .env file.");
  try {
    const { data: n, error: r } = await je
      .from("profiles")
      .select("*")
      .eq("id", o)
      .maybeSingle();
    return r
      ? (console.warn("Profile fetch error:", r),
        { id: o, email: "", role: "user", display_name: "" })
      : n || { id: o, email: "", role: "user", display_name: "" };
  } catch (n) {
    return (
      console.error("Failed to fetch user profile:", n),
      { id: o, email: "", role: "user", display_name: "" }
    );
  }
}
function Ss(o) {
  const n = {
    user: o.user,
    lastActivity: o.lastActivity,
    timestamp: Date.now(),
    permissionsRefreshedAt: Date.now(),
  };
  try {
    localStorage.setItem("ecm_session", JSON.stringify(n));
  } catch (r) {
    console.error("Failed to save session data:", r);
  }
}
function hl() {
  try {
    const o = localStorage.getItem("ecm_session");
    if (!o) return null;
    const n = JSON.parse(o);
    return {
      user: n.user,
      lastActivity: n.lastActivity || n.timestamp,
      timestamp: n.timestamp,
      permissionsRefreshedAt: n.permissionsRefreshedAt,
    };
  } catch (o) {
    return (
      console.error("Failed to get session data:", o),
      localStorage.removeItem("ecm_session"),
      null
    );
  }
}
function Cf(o, n) {
  const r = { email: o, password: n, timestamp: Date.now() };
  localStorage.setItem("ecm_credentials", JSON.stringify(r));
}
function av() {
  try {
    const o = localStorage.getItem("ecm_credentials");
    if (!o) return null;
    const n = JSON.parse(o),
      i = Date.now() - n.timestamp,
      a = 720 * 60 * 60 * 1e3;
    return i > a
      ? (localStorage.removeItem("ecm_credentials"), null)
      : { email: n.email, password: n.password };
  } catch {
    return localStorage.removeItem("ecm_credentials"), null;
  }
}
function ks() {
  try {
    [
      "ecm_session",
      "ecm_credentials",
      "ecm_user_profile",
      "ecm_cabinets_cache",
    ].forEach((n) => {
      localStorage.removeItem(n);
    });
  } catch (o) {
    console.warn("Error clearing session data:", o);
  }
}
async function lv(o) {
  if (!je) return console.warn("Supabase not configured"), [];
  if (!o) return [];
  try {
    const { data: n, error: r } = await je
      .from("user_cabinets")
      .select("cabinet_id")
      .eq("user_id", o);
    if (r) throw (console.error("Error fetching assigned cabinets:", r), r);
    if (!n || n.length === 0) return [];
    const i = n.map((d) => d.cabinet_id),
      { data: a, error: u } = await je
        .from("cabinets")
        .select("*, current_status(*)")
        .in("id", i);
    if (u) throw (console.error("Error fetching cabinet details:", u), u);
    return a || [];
  } catch (n) {
    throw (console.error("Failed to fetch assigned cabinets:", n), n);
  }
}
async function gh() {
  var o;
  if (!je) return console.warn("Supabase not configured"), [];
  try {
    const { data: n, error: r } = await je
      .from("cabinets")
      .select("*, current_status(*)");
    if (r) {
      if (
        (console.error("Error fetching all cabinets for viewing:", r),
        r.code === "42P17" ||
          ((o = r.message) != null && o.includes("infinite recursion")))
      )
        try {
          const { data: i, error: a } = await je.from("cabinets").select("*");
          return a
            ? (console.error("Simple query also failed:", a), [])
            : (i || []).map((u) => ({
                ...u,
                current_status: {
                  status: "OFF",
                  last_on_at: null,
                  last_off_at: null,
                },
              }));
        } catch (i) {
          return console.error("Fallback query failed:", i), [];
        }
      return [];
    }
    return n || [];
  } catch (n) {
    return console.error("Failed to fetch all cabinets for viewing:", n), [];
  }
}
async function Vl() {
  var o;
  if (!je) return console.warn("Supabase not configured"), [];
  try {
    const { data: n, error: r } = await je
      .from("cabinets")
      .select("*, current_status(*)");
    if (r) {
      if (
        (console.error("Admin query error:", r),
        r.code === "42P17" ||
          ((o = r.message) != null && o.includes("infinite recursion")))
      ) {
        const { data: i, error: a } = await je.from("cabinets").select("*");
        if (a) throw a;
        return (i || []).map((u) => ({
          ...u,
          current_status: {
            status: "OFF",
            last_on_at: null,
            last_off_at: null,
          },
        }));
      }
      throw r;
    }
    return n;
  } catch (n) {
    throw (console.error("Failed to fetch all cabinets (admin):", n), n);
  }
}
async function vh(o, n, r) {
  if (!je)
    return (
      console.warn("Supabase not configured"),
      { data: !1, error: "Supabase not configured" }
    );
  try {
    const { error: i } = await je
      .from("status_logs")
      .insert({ cabinet_id: o, status: n, user_id: r });
    if (i) throw i;
    const a = { status: n };
    n === "ON"
      ? (a.last_on_at = new Date().toISOString())
      : (a.last_off_at = new Date().toISOString());
    const { error: u } = await je
      .from("current_status")
      .upsert({ cabinet_id: o, ...a });
    if (u) throw u;
    return { data: !0 };
  } catch (i) {
    return (
      console.error("Failed to toggle cabinet:", i), { data: !1, error: i }
    );
  }
}
async function uv(o) {
  if (!je)
    throw (
      (console.warn("Supabase not configured"),
      new Error("Supabase not configured"))
    );
  try {
    const { data: n, error: r } = await je
      .from("cabinets")
      .insert([o])
      .select()
      .single();
    if (r) throw r;
    const { error: i } = await je
      .from("current_status")
      .insert([
        {
          cabinet_id: o.id,
          status: "OFF",
          last_off_at: new Date().toISOString(),
        },
      ]);
    if (i) throw i;
    return {
      ...n,
      current_status: { status: "OFF", last_off_at: new Date().toISOString() },
    };
  } catch (n) {
    throw (console.error("Failed to create cabinet:", n), n);
  }
}
async function Nf(o) {
  if (!je)
    throw (
      (console.warn("Supabase not configured"),
      new Error("Supabase not configured"))
    );
  try {
    const { data: n, error: r } = await je
      .from("cabinets")
      .update({
        name: o.name,
        location: o.location,
        capacity: o.capacity,
        svg_x: Math.round(o.svg_x),
        svg_y: Math.round(o.svg_y),
        floor: o.floor,
      })
      .eq("id", o.id)
      .select(
        `
        *,
        current_status (status, last_on_at, last_off_at)
      `
      )
      .single();
    if (r)
      throw (
        (console.error("Supabase update error:", r),
        console.error("Error code:", r.code),
        console.error("Error message:", r.message),
        console.error("Error details:", r.details),
        r)
      );
    return n;
  } catch (n) {
    throw (console.error("Failed to update cabinet in database:", n), n);
  }
}
async function yh(o) {
  if (!je)
    throw (
      (console.warn("Supabase not configured"),
      new Error("Supabase not configured"))
    );
  try {
    await je.from("current_status").delete().eq("cabinet_id", o),
      await je.from("status_logs").delete().eq("cabinet_id", o),
      await je.from("user_cabinets").delete().eq("cabinet_id", o);
    const { error: n } = await je.from("cabinets").delete().eq("id", o);
    if (n) throw n;
    return !0;
  } catch (n) {
    throw (console.error("Failed to delete cabinet:", n), n);
  }
}
async function cv(o, n, r) {
  if (!je) throw new Error("Supabase not configured");
  try {
    const i = "https://vzudkwjhxncnrczzulmj.supabase.co";
    let {
      data: { session: a },
      error: u,
    } = await je.auth.getSession();
    if (!a || u) {
      const { data: g, error: v } = await je.auth.refreshSession();
      if (v || !g.session)
        throw new Error("Authentication required. Please log in again.");
      a = g.session;
    }
    const d =
      "https://vzudkwjhxncnrczzulmj.supabase.co/functions/v1/admin-reset-password";
    try {
      const g = await fetch(d, {
        method: "OPTIONS",
        headers: {
          Origin: window.location.origin,
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": "authorization, content-type",
        },
      });
    } catch (g) {
      if (
        (console.warn(
          "OPTIONS request failed, Edge Function might not be deployed:",
          g
        ),
        window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1")
      )
        return (
          await new Promise((v) => setTimeout(v, 1e3)),
          console.log(`MOCK: Password reset for ${n} to "${r}" by admin ${o}`),
          { success: !0, message: "Mock password reset successful", mock: !0 }
        );
      throw new Error("Edge Function not available - please check deployment");
    }
    const p = await fetch(d, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${a.access_token}`,
        Origin: window.location.origin,
      },
      body: JSON.stringify({ adminEmail: o, targetEmail: n, newPassword: r }),
    });
    if (!p.ok) {
      const g = await p.text();
      throw (
        (console.error("Edge function response error:", p.status, g),
        p.status === 404
          ? new Error("Edge Function not found - please check deployment")
          : p.status === 403
          ? new Error("Access denied - admin privileges required")
          : p.status === 429
          ? new Error("Too many requests - please wait before trying again")
          : new Error(`Edge Function error (${p.status}): ${g}`))
      );
    }
    return await p.json();
  } catch (i) {
    throw (console.error("Password reset failed:", i), i);
  }
}
function dv({ onAuthSuccess: o }) {
  const [n, r] = K.useState(!0),
    [i, a] = K.useState(""),
    [u, d] = K.useState(""),
    [p, m] = K.useState(""),
    [g, v] = K.useState(!1),
    [w, x] = K.useState(""),
    { t: S } = pt(),
    _ = zt();
  K.useEffect(() => {
    const P = av();
    P && (a(P.email), d(P.password));
  }, []);
  const L = async (P) => {
    var q, W;
    if ((P.preventDefault(), !i.trim())) {
      x("Vui lòng nhập địa chỉ email");
      return;
    }
    if (!i.includes("@") || !i.includes(".")) {
      x("Vui lòng nhập địa chỉ email hợp lệ");
      return;
    }
    if (!u.trim()) {
      x("Vui lòng nhập mật khẩu");
      return;
    }
    if (u.length < 6) {
      x("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (!n && !p.trim()) {
      x("Vui lòng nhập tên hiển thị");
      return;
    }
    if (!_) {
      x("Supabase not configured. Using mock mode.");
      const A = {
        id: i.includes("admin") ? "u1" : "u2",
        email: i,
        role: i.includes("admin") ? "admin" : "user",
        display_name: p || i.split("@")[0],
      };
      o(A);
      return;
    }
    v(!0), x("");
    try {
      if (n) {
        const { data: A, error: R } = await _.auth.signInWithPassword({
          email: i.trim(),
          password: u.trim(),
        });
        if (R) throw (console.error("Login error:", R), R);
        Cf(i, u),
          o({
            id: A.user.id,
            email: A.user.email,
            role: "user",
            display_name:
              p || ((q = A.user.email) == null ? void 0 : q.split("@")[0]),
          });
      } else {
        const { data: A, error: R } = await _.auth.signUp({
          email: i.trim(),
          password: u.trim(),
          options: {
            data: { display_name: p.trim() || i.split("@")[0] },
            emailRedirectTo: void 0,
          },
        });
        if (R) throw (console.error("Signup error:", R), R);
        if ((Cf(i, u), A.user)) {
          if (
            !A.user.email_confirmed_at &&
            ((W = A.user.identities) == null ? void 0 : W.length) === 0
          ) {
            x(
              "Tài khoản đã được tạo. Vui lòng kiểm tra email để xác nhận tài khoản."
            );
            return;
          }
          const { error: Q } = await _.from("profiles").insert({
            id: A.user.id,
            email: i.trim(),
            role: "user",
            display_name: p.trim() || i.split("@")[0],
            preferred_lang: "en",
          });
          Q && console.warn("Profile creation failed:", Q),
            o({
              id: A.user.id,
              email: i.trim(),
              role: "user",
              display_name: p.trim() || i.split("@")[0],
            });
        } else x("Tài khoản đã được tạo. Vui lòng kiểm tra email để xác nhận.");
      }
    } catch (A) {
      console.error("Authentication error:", A);
      let R = "Authentication failed";
      A.message &&
        (A.message.includes("Invalid login credentials")
          ? (R = "Email hoặc mật khẩu không đúng")
          : A.message.includes("Email not confirmed")
          ? (R =
              "Tài khoản chưa được xác nhận. Vui lòng kiểm tra email và click vào link xác nhận.")
          : A.message.includes("Password should be at least 6 characters")
          ? (R = "Mật khẩu phải có ít nhất 6 ký tự")
          : A.message.includes("Unable to validate email address")
          ? (R = "Vui lòng nhập địa chỉ email hợp lệ")
          : A.message.includes("User already registered")
          ? (R =
              "Email này đã được đăng ký. Vui lòng đăng nhập hoặc sử dụng email khác.")
          : A.message.includes("Signup is disabled")
          ? (R = "Đăng ký tài khoản đã bị tắt")
          : (R = A.message)),
        x(R);
    } finally {
      v(!1);
    }
  };
  return h.jsx("div", {
    className:
      "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",
    children: h.jsxs("div", {
      className: "bg-white rounded-lg shadow-xl p-8 w-full max-w-md",
      children: [
        h.jsxs("div", {
          className: "text-center mb-6",
          children: [
            h.jsx("h1", {
              className: "text-2xl font-bold text-gray-900 mb-2",
              children: S("appTitle"),
            }),
            h.jsx("p", {
              className: "text-gray-600",
              children: S(n ? "signIn" : "signUp"),
            }),
          ],
        }),
        h.jsxs("form", {
          onSubmit: L,
          className: "space-y-4",
          children: [
            h.jsxs("div", {
              children: [
                h.jsxs("label", {
                  className: "block text-sm font-medium text-gray-700 mb-1",
                  children: [
                    "Email ",
                    h.jsx("span", { className: "text-red-500", children: "*" }),
                  ],
                }),
                h.jsx("input", {
                  type: "email",
                  value: i,
                  onChange: (P) => a(P.target.value),
                  placeholder: "Nhập địa chỉ email",
                  className:
                    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                  required: !0,
                }),
              ],
            }),
            !n &&
              h.jsxs("div", {
                children: [
                  h.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: [
                      S("displayName"),
                      " ",
                      h.jsx("span", {
                        className: "text-red-500",
                        children: "*",
                      }),
                    ],
                  }),
                  h.jsx("input", {
                    type: "text",
                    value: p,
                    onChange: (P) => m(P.target.value),
                    placeholder: "Nhập tên hiển thị",
                    className:
                      "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                    required: !0,
                  }),
                ],
              }),
            h.jsxs("div", {
              children: [
                h.jsxs("label", {
                  className: "block text-sm font-medium text-gray-700 mb-1",
                  children: [
                    S("password"),
                    " ",
                    h.jsx("span", { className: "text-red-500", children: "*" }),
                  ],
                }),
                h.jsx("input", {
                  type: "password",
                  value: u,
                  onChange: (P) => d(P.target.value),
                  placeholder: "Nhập mật khẩu (tối thiểu 6 ký tự)",
                  className:
                    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                  required: !0,
                  minLength: 6,
                }),
              ],
            }),
            w &&
              h.jsx("div", {
                className: "text-red-600 text-sm bg-red-50 p-3 rounded-md",
                children: w,
              }),
            h.jsx("button", {
              type: "submit",
              disabled: g,
              className:
                "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50",
              children: g ? "..." : S(n ? "signIn" : "signUp"),
            }),
          ],
        }),
        h.jsx("div", {
          className: "mt-4 text-center",
          children: h.jsx("button", {
            onClick: () => r(!n),
            className: "text-blue-600 hover:text-blue-800 text-sm",
            children: S(n ? "needAccount" : "haveAccount"),
          }),
        }),
      ],
    }),
  });
}
const fv = {},
  Ef = (o) => {
    let n;
    const r = new Set(),
      i = (v, w) => {
        const x = typeof v == "function" ? v(n) : v;
        if (!Object.is(x, n)) {
          const S = n;
          (n =
            w ?? (typeof x != "object" || x === null)
              ? x
              : Object.assign({}, n, x)),
            r.forEach((_) => _(n, S));
        }
      },
      a = () => n,
      m = {
        setState: i,
        getState: a,
        getInitialState: () => g,
        subscribe: (v) => (r.add(v), () => r.delete(v)),
        destroy: () => {
          (fv ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            r.clear();
        },
      },
      g = (n = o(i, a, m));
    return m;
  },
  hv = (o) => (o ? Ef(o) : Ef);
var pl = { exports: {} },
  ml = {},
  gl = { exports: {} },
  vl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pf;
function pv() {
  if (Pf) return vl;
  Pf = 1;
  var o = Rs();
  function n(w, x) {
    return (w === x && (w !== 0 || 1 / w === 1 / x)) || (w !== w && x !== x);
  }
  var r = typeof Object.is == "function" ? Object.is : n,
    i = o.useState,
    a = o.useEffect,
    u = o.useLayoutEffect,
    d = o.useDebugValue;
  function p(w, x) {
    var S = x(),
      _ = i({ inst: { value: S, getSnapshot: x } }),
      L = _[0].inst,
      P = _[1];
    return (
      u(
        function () {
          (L.value = S), (L.getSnapshot = x), m(L) && P({ inst: L });
        },
        [w, S, x]
      ),
      a(
        function () {
          return (
            m(L) && P({ inst: L }),
            w(function () {
              m(L) && P({ inst: L });
            })
          );
        },
        [w]
      ),
      d(S),
      S
    );
  }
  function m(w) {
    var x = w.getSnapshot;
    w = w.value;
    try {
      var S = x();
      return !r(w, S);
    } catch {
      return !0;
    }
  }
  function g(w, x) {
    return x();
  }
  var v =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? g
      : p;
  return (
    (vl.useSyncExternalStore =
      o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : v),
    vl
  );
}
var Of;
function mv() {
  return Of || ((Of = 1), (gl.exports = pv())), gl.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tf;
function gv() {
  if (Tf) return ml;
  Tf = 1;
  var o = Rs(),
    n = mv();
  function r(g, v) {
    return (g === v && (g !== 0 || 1 / g === 1 / v)) || (g !== g && v !== v);
  }
  var i = typeof Object.is == "function" ? Object.is : r,
    a = n.useSyncExternalStore,
    u = o.useRef,
    d = o.useEffect,
    p = o.useMemo,
    m = o.useDebugValue;
  return (
    (ml.useSyncExternalStoreWithSelector = function (g, v, w, x, S) {
      var _ = u(null);
      if (_.current === null) {
        var L = { hasValue: !1, value: null };
        _.current = L;
      } else L = _.current;
      _ = p(
        function () {
          function q(B) {
            if (!W) {
              if (((W = !0), (A = B), (B = x(B)), S !== void 0 && L.hasValue)) {
                var M = L.value;
                if (S(M, B)) return (R = M);
              }
              return (R = B);
            }
            if (((M = R), i(A, B))) return M;
            var Y = x(B);
            return S !== void 0 && S(M, Y) ? ((A = B), M) : ((A = B), (R = Y));
          }
          var W = !1,
            A,
            R,
            Q = w === void 0 ? null : w;
          return [
            function () {
              return q(v());
            },
            Q === null
              ? void 0
              : function () {
                  return q(Q());
                },
          ];
        },
        [v, w, x, S]
      );
      var P = a(g, _[0], _[1]);
      return (
        d(
          function () {
            (L.hasValue = !0), (L.value = P);
          },
          [P]
        ),
        m(P),
        P
      );
    }),
    ml
  );
}
var Lf;
function vv() {
  return Lf || ((Lf = 1), (pl.exports = gv())), pl.exports;
}
var yv = vv();
const xv = $l(yv),
  xh = {},
  { useDebugValue: wv } = Dl,
  { useSyncExternalStoreWithSelector: bv } = xv;
let Rf = !1;
const _v = (o) => o;
function Sv(o, n = _v, r) {
  (xh ? "production" : void 0) !== "production" &&
    r &&
    !Rf &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (Rf = !0));
  const i = bv(
    o.subscribe,
    o.getState,
    o.getServerState || o.getInitialState,
    n,
    r
  );
  return wv(i), i;
}
const Af = (o) => {
    (xh ? "production" : void 0) !== "production" &&
      typeof o != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const n = typeof o == "function" ? hv(o) : o,
      r = (i, a) => Sv(n, i, a);
    return Object.assign(r, n), r;
  },
  kv = (o) => (o ? Af(o) : Af),
  Rr = kv((o) => ({
    user: { id: null },
    setUser: (n) => o({ user: n }),
    clearUser: () => o({ user: { id: null } }),
  })),
  wh = () =>
    typeof window < "u" &&
    (window.navigator.userAgent.includes("Electron") ||
      window.electronAPI !== void 0),
  At = (o) => {
    const n = o.startsWith("/") ? o.slice(1) : o;
    return wh(), n.startsWith("./") ? n : "./" + n;
  },
  en = (o = 1) => At(`src/assets/${o === 2 ? "layout2.svg" : "layout.svg"}`),
  Ve = (o) => At(o),
  Yi = [
    { code: "en", name: "English", flag: Ve("us.svg"), alt: "US Flag" },
    { code: "vi", name: "Tiếng Việt", flag: Ve("vi.svg"), alt: "Vietnam Flag" },
    { code: "ko", name: "한국어", flag: Ve("ko.svg"), alt: "Korea Flag" },
  ];
function jv({
  currentRoute: o = "layout",
  onRouteChange: n,
  onLogout: r,
  user: i,
  isAuthenticated: isAuth = false,
  onShowLogin: onLogin
}) {
  var P, q;
  const { t: a, i18n: u } = pt(),
    d = Rr((W) => W.user),
    [p, m] = K.useState(!1),
    [g, v] = K.useState(!1),
    w = K.useRef(null),
    x = i || d;
  K.useEffect(() => {
    function W(A) {
      w.current && !w.current.contains(A.target) && m(!1);
    }
    return (
      document.addEventListener("mousedown", W),
      () => document.removeEventListener("mousedown", W)
    );
  }, []),
    K.useEffect(() => {
      v(!1);
    }, [o]);
  const S = (W) => {
      u.changeLanguage(W), localStorage.setItem("preferred-language", W), m(!1);
    },
    _ = async () => {
      r && r();
    },
    L = Yi.find((W) => W.code === u.language) || Yi[0];
  return h.jsxs(h.Fragment, {
    children: [
      h.jsxs("header", {
        className:
          "bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg relative z-40",
        children: [
          h.jsx("div", { className: "h-4 md:h-0" }),
          h.jsx("div", {
            className: "container mx-auto px-4 py-3",
            children: h.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                h.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    h.jsx("div", {
                      className:
                        "w-18 h-8 rounded-lg flex items-center justify-center",
                      children: h.jsx("img", {
                        src: Ve("logo.svg"),
                        alt: "Electrical Cabinet Monitor Logo",
                        className: "w-18 h-8",
                      }),
                    }),
                    h.jsxs("div", {
                      className: "hidden sm:block",
                      children: [
                        h.jsx("h1", {
                          className: "text-base md:text-xl font-bold",
                          children: a("appTitle"),
                        }),
                        h.jsxs("div", {
                          className:
                            "flex items-center space-x-2 text-sm text-slate-300",
                          children: [
                            h.jsxs("span", {
                              children: [
                                isAuth ? (x == null ? void 0 : x.role) === "admin"
                                  ? "Administrator"
                                  : "User" : "Guest",
                                " Panel",
                              ],
                            }),
                            h.jsx("span", { children: "•" }),
                            h.jsxs("span", {
                              className: "flex items-center space-x-1",
                              children: [
                                h.jsx("div", {
                                  className:
                                    "w-2 h-2 rounded-full bg-green-400",
                                }),
                                h.jsx("span", { children: "Online" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsx("div", {
                      className: "block sm:hidden",
                      children: h.jsx("h1", {
                        className: "text-sm md:text-lg font-bold",
                        children: a("appTitle"),
                      }),
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "flex items-center space-x-4",
                  children: [
                    h.jsxs("nav", {
                      className: "hidden lg:flex space-x-1",
                      children: [
                        h.jsx("button", {
                          onClick: () => (n == null ? void 0 : n("layout")),
                          className: `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            o === "layout"
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:text-white hover:bg-slate-700"
                          }`,
                          children: a("svgView"),
                        }),
                        h.jsx("button", {
                          onClick: () => (n == null ? void 0 : n("stats")),
                          className: `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            o === "stats"
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:text-white hover:bg-slate-700"
                          }`,
                          children: a("stats"),
                        }),
                        isAuth && h.jsx("button", {
                          onClick: () => (n == null ? void 0 : n("control")),
                          className: `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            o === "control"
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:text-white hover:bg-slate-700"
                          }`,
                          children: a("control"),
                        }),
                        isAuth && (x == null ? void 0 : x.role) === "admin" &&
                          h.jsx("button", {
                            onClick: () => (n == null ? void 0 : n("admin")),
                            className: `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                              o === "admin"
                                ? "bg-amber-600 text-white"
                                : "text-slate-300 hover:text-white hover:bg-slate-700"
                            }`,
                            children: a("admin"),
                          }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "hidden md:block relative",
                      ref: w,
                      children: [
                        h.jsxs("button", {
                          onClick: () => m(!p),
                          className:
                            "flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-md text-sm border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                          "aria-label": "Language selector",
                          children: [
                            h.jsx("img", {
                              src: L.flag,
                              alt: L.alt,
                              className: "w-5 h-3 object-cover rounded-sm",
                            }),
                            h.jsx("span", { children: L.code.toUpperCase() }),
                            h.jsx("svg", {
                              className: `w-4 h-4 transition-transform duration-200 ${
                                p ? "rotate-180" : ""
                              }`,
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: h.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                        p &&
                          h.jsx("div", {
                            className:
                              "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-[160px] z-50",
                            children: Yi.map((W) =>
                              h.jsxs(
                                "button",
                                {
                                  onClick: () => S(W.code),
                                  className: `w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 text-gray-800 transition-colors first:rounded-t-md last:rounded-b-md ${
                                    W.code === u.language
                                      ? "bg-blue-50 text-blue-700"
                                      : ""
                                  }`,
                                  children: [
                                    h.jsx("img", {
                                      src: W.flag,
                                      alt: W.alt,
                                      className:
                                        "w-6 h-4 object-cover rounded-sm border",
                                    }),
                                    h.jsx("span", {
                                      className: "font-medium",
                                      children: W.name,
                                    }),
                                  ],
                                },
                                W.code
                              )
                            ),
                          }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "hidden md:flex items-center space-x-2",
                      children: [
                        h.jsxs("div", {
                          className: "text-right",
                          children: [
                            isAuth ? h.jsx("div", {
                              className: "text-sm font-medium",
                              children:
                                (x == null ? void 0 : x.display_name) ||
                                (x == null ? void 0 : x.email),
                            }) : h.jsx("div", {
                              className: "text-sm font-medium",
                              children: "Guest User",
                            }),
                            isAuth && h.jsx("div", {
                              className: "text-xs text-slate-300",
                              children: h.jsx("span", {
                                children: x == null ? void 0 : x.email,
                              }),
                            }),
                          ],
                        }),
                        isAuth ? h.jsx("button", {
                          onClick: _,
                          className:
                            "bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500",
                          children: a("signOut"),
                        }) : h.jsx("button", {
                          onClick: onLogin,
                          className:
                            "bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          children: a("signIn"),
                        }),
                      ],
                    }),
                    h.jsx("button", {
                      onClick: () => v(!g),
                      className:
                        "lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
                      "aria-label": "Toggle menu",
                      children: h.jsx("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: h.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 6h16M4 12h16M4 18h16",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      g &&
        h.jsxs("div", {
          className: "lg:hidden fixed inset-0 z-50",
          children: [
            h.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-50",
              onClick: () => v(!1),
            }),
            h.jsx("div", {
              className:
                "fixed top-0 right-0 w-80 max-w-[90vw] h-full bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out",
              children: h.jsxs("div", {
                className: "flex flex-col h-full",
                children: [
                  h.jsxs("div", {
                    className:
                      "flex items-center justify-between p-4 border-b border-slate-700",
                    children: [
                      h.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "Menu",
                      }),
                      h.jsx("button", {
                        onClick: () => v(!1),
                        className:
                          "p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700",
                        title: "Close menu",
                        children: h.jsx("svg", {
                          className: "w-5 h-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: h.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    className: "p-4 border-b border-slate-700",
                    children: h.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center",
                          children: h.jsx("span", {
                            className: "text-white font-medium",
                            children: isAuth ? 
                              ((P = x == null ? void 0 : x.display_name) == null
                                ? void 0
                                : P.charAt(0)) ||
                              ((q = x == null ? void 0 : x.email) == null
                                ? void 0
                                : q.charAt(0)) ||
                              "U" : "G",
                          }),
                        }),
                        h.jsxs("div", {
                          children: [
                            h.jsx("div", {
                              className: "text-white font-medium",
                              children: isAuth ?
                                (x == null ? void 0 : x.display_name) ||
                                (x == null ? void 0 : x.email) : "Guest User",
                            }),
                            h.jsx("div", {
                              className: "text-slate-300 text-sm",
                              children: isAuth ?
                                (x == null ? void 0 : x.role) === "admin"
                                  ? "Administrator"
                                  : "User" : "Guest",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  h.jsx("nav", {
                    className: "flex-1 p-4",
                    children: h.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        h.jsxs("button", {
                          onClick: () => (n == null ? void 0 : n("layout")),
                          className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                            o === "layout"
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:text-white hover:bg-slate-700"
                          }`,
                          children: [
                            h.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: h.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                              }),
                            }),
                            h.jsx("span", { children: a("svgView") }),
                          ],
                        }),
                        h.jsxs("button", {
                          onClick: () => (n == null ? void 0 : n("stats")),
                          className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                            o === "stats"
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:text-white hover:bg-slate-700"
                          }`,
                          children: [
                            h.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: h.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                              }),
                            }),
                            h.jsx("span", { children: a("stats") }),
                          ],
                        }),
                        isAuth && h.jsxs("button", {
                          onClick: () => (n == null ? void 0 : n("control")),
                          className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                            o === "control"
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:text-white hover:bg-slate-700"
                          }`,
                          children: [
                            h.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: h.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4",
                              }),
                            }),
                            h.jsx("span", { children: a("control") }),
                          ],
                        }),
                        isAuth && (x == null ? void 0 : x.role) === "admin" &&
                          h.jsxs("button", {
                            onClick: () => (n == null ? void 0 : n("admin")),
                            className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                              o === "admin"
                                ? "bg-amber-600 text-white"
                                : "text-slate-300 hover:text-white hover:bg-slate-700"
                            }`,
                            children: [
                              h.jsxs("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: [
                                  h.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                                  }),
                                  h.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                  }),
                                ],
                              }),
                              h.jsx("span", { children: a("admin") }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  h.jsx("div", {
                    className: "p-4 border-t border-slate-700",
                    children: h.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        h.jsx("div", {
                          className: "text-slate-300 text-sm font-medium mb-3",
                          children: "Language / Ngôn ngữ",
                        }),
                        Yi.map((W) =>
                          h.jsxs(
                            "button",
                            {
                              onClick: () => S(W.code),
                              className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left hover:bg-slate-700 transition-colors ${
                                W.code === u.language
                                  ? "bg-blue-600 text-white"
                                  : "text-slate-300"
                              }`,
                              children: [
                                h.jsx("img", {
                                  src: W.flag,
                                  alt: W.alt,
                                  className:
                                    "w-6 h-4 object-cover rounded-sm border",
                                }),
                                h.jsx("span", {
                                  className: "font-medium",
                                  children: W.name,
                                }),
                              ],
                            },
                            W.code
                          )
                        ),
                      ],
                    }),
                  }),
                  h.jsx("div", {
                    className: "p-4 border-t border-slate-700",
                    children: isAuth ? h.jsxs("button", {
                      onClick: _,
                      className:
                        "w-full flex items-center space-x-3 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors",
                      children: [
                        h.jsx("svg", {
                          className: "w-5 h-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: h.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                          }),
                        }),
                        h.jsx("span", { children: a("signOut") }),
                      ],
                    }) : h.jsxs("button", {
                      onClick: onLogin,
                      className:
                        "w-full flex items-center space-x-3 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
                      children: [
                        h.jsx("svg", {
                          className: "w-5 h-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: h.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1",
                          }),
                        }),
                        h.jsx("span", { children: a("signIn") }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
function Cv({ show: o, onExtend: n, onLogout: r }) {
  const { t: i } = pt(),
    [a, u] = K.useState(120);
  if (
    (K.useEffect(() => {
      if (!o) {
        u(120);
        return;
      }
      const m = setInterval(() => {
        u((g) => (g <= 1 ? (r(), 0) : g - 1));
      }, 1e3);
      return () => clearInterval(m);
    }, [o, r]),
    !o)
  )
    return null;
  const d = Math.floor(a / 60),
    p = a % 60;
  return h.jsx("div", {
    className:
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
    children: h.jsx("div", {
      className: "bg-white rounded-xl p-6 max-w-md mx-4 shadow-2xl",
      children: h.jsxs("div", {
        className: "text-center",
        children: [
          h.jsx("div", {
            className:
              "w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center",
            children: h.jsx("svg", {
              className: "w-8 h-8 text-amber-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: h.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
              }),
            }),
          }),
          h.jsx("h3", {
            className: "text-lg font-semibold text-slate-800 mb-2",
            children: i("sessionWarning.title"),
          }),
          h.jsx("p", {
            className: "text-slate-600 mb-4",
            children: i("sessionWarning.message"),
          }),
          h.jsxs("div", {
            className: "text-2xl font-bold text-amber-600 mb-6",
            children: [
              String(d).padStart(2, "0"),
              ":",
              String(p).padStart(2, "0"),
            ],
          }),
          h.jsxs("div", {
            className: "flex gap-3",
            children: [
              h.jsx("button", {
                onClick: r,
                className:
                  "flex-1 px-4 py-2 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",
                children: i("sessionWarning.logout"),
              }),
              h.jsx("button", {
                onClick: n,
                className:
                  "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",
                children: i("sessionWarning.extend"),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Nv({
  status: o,
  x: n,
  y: r,
  cabinetId: i,
  name: a,
  capacity: u = 100,
  location: d,
  onClick: p,
  onContextMenu: m,
  onMouseDown: g,
  isSelected: v = !1,
  isDragging: w = !1,
  baseSize: x = 25,
}) {
  const S = o === "ON";
  let _;
  u <= 50 ? (_ = 15) : u >= 500 ? (_ = 50) : (_ = 15 + ((u - 50) / 450) * 35);
  const { t: L } = pt(),
    P = [
      d && `${L("cabinet.location")}: ${d}`,
      a && `${L("cabinet.name")}: ${a}`,
      `${L("cabinet.capacity")}: ${u}A`,
      L(o === "ON" ? "cabinet.status.on" : "cabinet.status.off"),
    ].filter(Boolean).join(`
`);
  return h.jsxs("g", {
    transform: `translate(${n}, ${r})`,
    className: `transition-opacity ${
      w ? "cursor-grabbing" : "cursor-grab hover:cursor-grab"
    } ${v ? "opacity-90" : "hover:opacity-80"}`,
    onClick: (q) => {
      q.stopPropagation(), w || p == null || p();
    },
    onContextMenu: (q) => {
      q.preventDefault(), q.stopPropagation(), m == null || m(q);
    },
    onMouseDown: (q) => {
      q.preventDefault(), q.stopPropagation(), g == null || g(q);
    },
    children: [
      h.jsx("title", { children: P }),
      v &&
        h.jsx("circle", {
          r: _ + 50,
          fill: "none",
          stroke: "#3b82f6",
          strokeWidth: "2",
          strokeDasharray: "4,4",
          className: "animate-pulse",
        }),
      h.jsx("image", {
        x: -_ * 1.2,
        y: -_,
        width: _ * 2.4,
        height: _ * 2,
        href: At(S ? "src/assets/on.svg" : "src/assets/off.svg"),
        className: "drop-shadow-lg",
        transform: "rotate(270)",
        "aria-label": `Cabinet ${i || a} - ${S ? "ON" : "OFF"}`,
        style: {
          filter: S
            ? "brightness(1.2) contrast(1) saturate(1) drop-shadow(0 0 4px #eb2c2cff)"
            : "brightness(0.6) contrast(1.2) saturate(1.3) drop-shadow(0 0 2px #ff0000)",
        },
      }),
    ],
  });
}
function Ev({
  x: o,
  y: n,
  isVisible: r,
  onClose: i,
  onToggleOn: a,
  onToggleOff: u,
  onDelete: d,
  onEdit: p,
  cabinetStatus: m = "OFF",
  isAdmin: g = !1,
  isAuthenticated: isAuth = false,
}) {
  const { t: v } = pt();
  return r
    ? h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", { className: "fixed inset-0 z-40", onClick: i }),
          h.jsxs("div", {
            className:
              "fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[150px]",
            style: {
              left: Math.min(o, window.innerWidth - 200),
              top: Math.min(n, window.innerHeight - 300),
            },
            children: [
              !isAuth &&
                h.jsxs("div", {
                  className: "px-4 py-3 text-center text-gray-600 border-b",
                  children: [
                    h.jsx("p", {
                      className: "text-sm font-medium",
                      children: v("loginRequired"),
                    }),
                    h.jsx("p", {
                      className: "text-xs text-gray-500 mt-1",
                      children: v("loginToControl"),
                    }),
                  ],
                }),
              isAuth && m === "OFF" &&
                h.jsxs("button", {
                  onClick: () => {
                    a == null || a(), i();
                  },
                  className:
                    "w-full px-4 py-2 text-left hover:bg-green-50 text-green-700 flex items-center space-x-2",
                  children: [
                    h.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M13 10V3L4 14h7v7l9-11h-7z",
                      }),
                    }),
                    h.jsx("span", { children: v("turnOn") }),
                  ],
                }),
              isAuth && m === "ON" &&
                h.jsxs("button", {
                  onClick: () => {
                    u == null || u(), i();
                  },
                  className:
                    "w-full px-4 py-2 text-left hover:bg-red-50 text-red-700 flex items-center space-x-2",
                  children: [
                    h.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728",
                      }),
                    }),
                    h.jsx("span", { children: v("turnOff") }),
                  ],
                }),
              isAuth && h.jsx("hr", { className: "my-1" }),
              g &&
                h.jsxs("button", {
                  onClick: () => {
                    p == null || p();
                  },
                  className:
                    "w-full px-4 py-2 text-left hover:bg-blue-50 text-blue-700 flex items-center space-x-2",
                  children: [
                    h.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                      }),
                    }),
                    h.jsx("span", { children: v("editCabinet") }),
                  ],
                }),
              g &&
                h.jsxs("button", {
                  onClick: () => {
                    d == null || d(), i();
                  },
                  className:
                    "w-full px-4 py-2 text-left hover:bg-red-50 text-red-700 flex items-center space-x-2",
                  children: [
                    h.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                      }),
                    }),
                    h.jsx("span", { children: v("deleteCabinet") }),
                  ],
                }),
            ],
          }),
        ],
      })
    : null;
}
function Pv({
  isVisible: o,
  onClose: n,
  onSave: r,
  editingCabinet: i,
  initialPosition: a,
  currentFloor: u = 1,
}) {
  const { t: d } = pt(),
    [p, m] = K.useState({
      id: "",
      name: "",
      location: "",
      capacity: 100,
      svg_x: 0,
      svg_y: 0,
      floor: 1,
    }),
    [g, v] = K.useState({});
  K.useEffect(() => {
    m(
      i ||
        (a
          ? {
              id: `C${Date.now()}`,
              name: "",
              location: "",
              capacity: 100,
              svg_x: Math.round(a.x),
              svg_y: Math.round(a.y),
              floor: u,
            }
          : {
              id: `C${Date.now()}`,
              name: "",
              location: "",
              capacity: 100,
              svg_x: 1653,
              svg_y: 1169,
              floor: u,
            })
    ),
      v({});
  }, [i, a, o]);
  const w = () => {
      const _ = {};
      return (
        p.id.trim() || (_.id = "Cabinet ID is required"),
        p.name.trim() || (_.name = "Cabinet name is required"),
        p.location.trim() || (_.location = "Location is required"),
        p.capacity <= 0 && (_.capacity = "Capacity must be greater than 0"),
        v(_),
        Object.keys(_).length === 0
      );
    },
    x = (_) => {
      _.preventDefault(), w() && (r(p), n());
    },
    S = (_, L) => {
      m((P) => ({ ...P, [_]: L })), g[_] && v((P) => ({ ...P, [_]: "" }));
    };
  return o
    ? h.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-2 sm:p-4 md:p-6",
        children: h.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-4",
          children: [
            h.jsx("div", {
              className:
                "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-t-lg",
              children: h.jsx("h3", {
                className: "text-sm sm:text-base md:text-lg font-semibold",
                children: d(i ? "editCabinet" : "svgControls.addCabinet"),
              }),
            }),
            h.jsxs("form", {
              onSubmit: x,
              className: "p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4",
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsxs("label", {
                      className: "block text-xs sm:text-sm font-medium text-gray-700 mb-1",
                      children: [d("cabinet.id"), " *"],
                    }),
                    h.jsx("input", {
                      type: "text",
                      value: p.id,
                      onChange: (_) => S("id", _.target.value),
                      className: `w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        g.id ? "border-red-500" : "border-gray-300"
                      }`,
                      placeholder: "e.g., C001",
                    }),
                    g.id &&
                      h.jsx("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: g.id,
                      }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsxs("label", {
                      className: "block text-xs sm:text-sm font-medium text-gray-700 mb-1",
                      children: [d("cabinet.name"), " *"],
                    }),
                    h.jsx("input", {
                      type: "text",
                      value: p.name,
                      onChange: (_) => S("name", _.target.value),
                      className: `w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        g.name ? "border-red-500" : "border-gray-300"
                      }`,
                      placeholder: d("cabinet.name"),
                    }),
                    g.name &&
                      h.jsx("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: g.name,
                      }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsxs("label", {
                      className: "block text-xs sm:text-sm font-medium text-gray-700 mb-1",
                      children: [d("cabinet.location"), " *"],
                    }),
                    h.jsx("input", {
                      type: "text",
                      value: p.location,
                      onChange: (_) => S("location", _.target.value),
                      className: `w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        g.location ? "border-red-500" : "border-gray-300"
                      }`,
                      placeholder: d("cabinet.location"),
                    }),
                    g.location &&
                      h.jsx("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: g.location,
                      }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsxs("label", {
                      className: "block text-xs sm:text-sm font-medium text-gray-700 mb-1",
                      children: [d("cabinet.capacity"), " (A) *"],
                    }),
                    h.jsx("input", {
                      type: "number",
                      value: p.capacity,
                      onChange: (_) =>
                        S("capacity", parseInt(_.target.value) || 0),
                      className: `w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        g.capacity ? "border-red-500" : "border-gray-300"
                      }`,
                      min: "1",
                      placeholder: "100",
                      inputMode: "numeric",
                    }),
                    g.capacity &&
                      h.jsx("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: g.capacity,
                      }),
                  ],
                }),
                h.jsxs("div", {
                  className: "grid grid-cols-2 gap-2 sm:gap-3",
                  children: [
                    h.jsxs("div", {
                      children: [
                        h.jsx("label", {
                          className:
                            "block text-xs sm:text-sm font-medium text-gray-700 mb-1",
                          children: "X",
                        }),
                        h.jsx("input", {
                          type: "number",
                          value: p.svg_x,
                          onChange: (_) =>
                            S("svg_x", parseInt(_.target.value) || 0),
                          className:
                            "w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                          inputMode: "none",
                          placeholder: "0",
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx("label", {
                          className:
                            "block text-xs sm:text-sm font-medium text-gray-700 mb-1",
                          children: "Y",
                        }),
                        h.jsx("input", {
                          type: "number",
                          value: p.svg_y,
                          onChange: (_) =>
                            S("svg_y", parseInt(_.target.value) || 0),
                          className:
                            "w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                          inputMode: "none",
                          placeholder: "0",
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-3 sm:pt-4",
                  children: [
                    h.jsx("button", {
                      type: "button",
                      onClick: n,
                      className:
                        "flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium",
                      children: d("common.cancel"),
                    }),
                    h.jsxs("button", {
                      type: "submit",
                      className:
                        "flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium",
                      children: [
                        d(i ? "common.refresh" : "svgControls.add"),
                        " ",
                        d("cabinet.name"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
function If({ isAuthenticated = false }) {
  var ue, me, de, be;
  const [o, n] = K.useState([]),
    [r, i] = K.useState(null),
    [a, u] = K.useState({ visible: !1, x: 0, y: 0 }),
    [d, p] = K.useState({ visible: !1 }),
    [m, g] = K.useState(!1),
    [v, w] = K.useState(!1),
    [x, S] = K.useState(!1),
    [_, L] = K.useState(1),
    [P, q] = K.useState(!1),
    [layoutLoading, setLayoutLoading] = K.useState(!0),
    [svgCache, setSvgCache] = K.useState(null),
    [W, A] = K.useState({ floor1Image: null, floor2Image: null }),
    [R, Q] = K.useState({
      isDragging: !1,
      cabinetId: null,
      startPos: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
    }),
    B = Rr(($) => $.user),
    { t: M } = pt(),
    Y = K.useRef(null),
    pe = B.role === "admin";
  K.useEffect(() => {
    oe();
  }, [B]),
    K.useEffect(() => {
      (async () => {
        try {
          setLayoutLoading(!0);
          // Check if SVG is cached in localStorage
          const cachedData = localStorage.getItem('layout_svg_cache');
          if (cachedData) {
            const cache = JSON.parse(cachedData);
            const cacheAge = Date.now() - cache.timestamp;
            // Use cache if less than 1 hour old
            if (cacheAge < 3600000 * 1) {
              setSvgCache(cache.data);
              A(cache.data);
              setLayoutLoading(!1);
              return;
            }
          }
          
          const J = new Image(),
            ne = new Image(),
            Ce = [
              new Promise((Fe, Le) => {
                (J.onload = () => Fe()),
                  (J.onerror = () =>
                    Le(new Error("Failed to load floor 1 image"))),
                  (J.src = en(1));
              }),
              new Promise((Fe, Le) => {
                (ne.onload = () => Fe()),
                  (ne.onerror = () =>
                    Le(new Error("Failed to load floor 2 image"))),
                  (ne.src = en(2));
              }),
            ];
          await Promise.all(Ce);
          
          const imageData = { floor1Image: J, floor2Image: ne };
          A(imageData);
          setSvgCache(imageData);
          
          // Cache the SVG data
          try {
            localStorage.setItem('layout_svg_cache', JSON.stringify({
              data: imageData,
              timestamp: Date.now()
            }));
          } catch (error) {
            console.warn('Could not cache SVG data:', error);
          }
          
          q(!0);
        } catch {
          q(!0);
        } finally {
          setLayoutLoading(!1);
        }
      })();
    }, []),
    K.useEffect(() => {
      oe();
    }, [B]),
    // Auto-refresh data every 5 minutes
    K.useEffect(() => {
      const refreshInterval = setInterval(() => {
        oe();
      }, 5 * 60 * 1000); // 5 minutes
      
      return () => clearInterval(refreshInterval);
    }, []),
    // Wake lock to prevent screen sleep
    K.useEffect(() => {
      let wakeLock = null;
      
      const requestWakeLock = async () => {
        try {
          if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
          }
        } catch (err) {
          // Fallback: use a heartbeat to keep page active
          const heartbeat = setInterval(() => {
            // Small activity to prevent sleep
            document.title = document.title;
          }, 30000);
          
          return () => clearInterval(heartbeat);
        }
      };
      
      requestWakeLock();
      
      // Re-request wake lock if it's released (e.g., tab becomes hidden)
      const handleVisibilityChange = () => {
        if (!document.hidden && !wakeLock) {
          requestWakeLock();
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      return () => {
        if (wakeLock) {
          wakeLock.release();
        }
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);
  const oe = async () => {
      try {
        w(!0);
        let $;
        pe ? ($ = await Vl()) : ($ = await gh()), n($ || []);
      } catch ($) {
        console.error("Failed to load cabinets:", $);
      } finally {
        w(!1);
      }
    },
    [ge, Pe] = K.useState(null);
  K.useEffect(() => {
    const $ = () => {
      Y.current && Pe(Y.current.getBoundingClientRect());
    };
    return (
      $(),
      window.addEventListener("resize", $),
      () => window.removeEventListener("resize", $)
    );
  }, []);
  const Ae = K.useCallback(
      ($) => {
        if (!Y.current || !ge) {
          if (!Y.current) return { x: 0, y: 0 };
          const Le = Y.current.getBoundingClientRect(),
            De = Y.current.viewBox.baseVal,
            Wn = De.width / Le.width,
            Hn = De.height / Le.height;
          return {
            x: ($.clientX - Le.left) * Wn + De.x,
            y: ($.clientY - Le.top) * Hn + De.y,
          };
        }
        const ne = Y.current.viewBox.baseVal,
          Ce = ne.width / ge.width,
          Fe = ne.height / ge.height;
        return {
          x: ($.clientX - ge.left) * Ce + ne.x,
          y: ($.clientY - ge.top) * Fe + ne.y,
        };
      },
      [ge]
    ),
    ae = () => {
      document.fullscreenElement
        ? (document.exitFullscreen(), S(!1))
        : (document.documentElement.requestFullscreen(), S(!0));
    };
  K.useEffect(() => {
    const $ = (ne) => {
        if (R.isDragging && R.cabinetId && Y.current) {
          const Ce = Y.current,
            Fe = ge || Ce.getBoundingClientRect(),
            Le = Ce.viewBox.baseVal,
            De = Le.width / Fe.width,
            Wn = Le.height / Fe.height,
            Hn = (ne.clientX - Fe.left) * De + Le.x,
            Ar = (ne.clientY - Fe.top) * Wn + Le.y,
            $s = Hn - R.offset.x,
            Ir = Ar - R.offset.y;
          n((jn) =>
            jn.map((It) =>
              It.id === R.cabinetId ? { ...It, svg_x: $s, svg_y: Ir } : It
            )
          );
        }
      },
      J = async () => {
        if (R.isDragging && R.cabinetId) {
          const ne = o.find((Ce) => Ce.id === R.cabinetId);
          if (ne)
            try {
              await Nf({
                id: ne.id,
                name: ne.name,
                location: ne.location,
                capacity: ne.capacity,
                svg_x: Math.round(ne.svg_x),
                svg_y: Math.round(ne.svg_y),
                floor: ne.floor || _,
              });
            } catch (Ce) {
              console.error("Failed to update cabinet position:", Ce), oe();
            }
          Q({
            isDragging: !1,
            cabinetId: null,
            startPos: { x: 0, y: 0 },
            offset: { x: 0, y: 0 },
          });
        }
      };
    return (
      R.isDragging &&
        (document.addEventListener("mousemove", $),
        document.addEventListener("mouseup", J),
        (document.body.style.cursor = "grabbing"),
        (document.body.style.userSelect = "none")),
      () => {
        document.removeEventListener("mousemove", $),
          document.removeEventListener("mouseup", J),
          (document.body.style.cursor = ""),
          (document.body.style.userSelect = "");
      }
    );
  }, [R.isDragging, R.cabinetId, R.offset, o, _, ge]),
    K.useEffect(() => {
      const $ = () => {
        S(!!document.fullscreenElement),
          Y.current &&
            setTimeout(() => {
              Pe(Y.current.getBoundingClientRect());
            }, 100);
      };
      return (
        document.addEventListener("fullscreenchange", $),
        () => document.removeEventListener("fullscreenchange", $)
      );
    }, []);
  const ye = ($) => {
      if (pe && !R.isDragging && !a.visible && window.innerWidth >= 768) {
        const J = Ae($);
        p({ visible: !0, position: J });
      }
      re();
    },
    Se = ($) => {
      $.preventDefault(), pe && u({ visible: !0, x: $.clientX, y: $.clientY });
    },
    fe = ($, J) => {
      if (!pe || window.innerWidth < 768 || $.button !== 0) return;
      $.preventDefault(), $.stopPropagation();
      const ne = Ae($);
      Q({
        isDragging: !0,
        cabinetId: J.id,
        startPos: ne,
        offset: { x: ne.x - J.svg_x, y: ne.y - J.svg_y },
      }),
        re();
    },
    j = () => {},
    U = ($) => {
      R.isDragging || i($);
    },
    D = async ($, J) => {
      g(!0);
      try {
        await vh($, J, B.id || void 0),
          n((ne) =>
            ne.map((Ce) => {
              var Fe, Le;
              return Ce.id === $
                ? {
                    ...Ce,
                    current_status: {
                      ...Ce.current_status,
                      status: J,
                      last_on_at:
                        J === "ON"
                          ? new Date().toISOString()
                          : (Fe = Ce.current_status) == null
                          ? void 0
                          : Fe.last_on_at,
                      last_off_at:
                        J === "OFF"
                          ? new Date().toISOString()
                          : (Le = Ce.current_status) == null
                          ? void 0
                          : Le.last_off_at,
                    },
                  }
                : Ce;
            })
          );
      } catch (ne) {
        console.error("Failed to toggle cabinet:", ne);
      } finally {
        g(!1);
      }
    },
    C = async ($) => {
      try {
        if (d.editing) {
          const J = await Nf({
            id: $.id,
            name: $.name,
            location: $.location,
            capacity: $.capacity,
            svg_x: $.svg_x,
            svg_y: $.svg_y,
            floor: $.floor,
          });
          n((ne) => ne.map((Ce) => (Ce.id === $.id ? J : Ce)));
        } else {
          const J = await uv({
            id: $.id,
            name: $.name,
            location: $.location,
            capacity: $.capacity,
            svg_x: $.svg_x,
            svg_y: $.svg_y,
            floor: $.floor || _,
          });
          n((ne) => [...ne, J]);
        }
        p({ visible: !1 });
      } catch (J) {
        console.error("Failed to save cabinet:", J),
          alert("Failed to save cabinet. Please try again.");
      }
    },
    I = async ($) => {
      if (confirm("Are you sure you want to delete this cabinet?"))
        try {
          await yh($), n((J) => J.filter((ne) => ne.id !== $));
        } catch (J) {
          console.error("Failed to delete cabinet:", J),
            alert("Failed to delete cabinet. Please try again.");
        }
    },
    re = () => {
      u({ visible: !1, x: 0, y: 0 }), p({ visible: !1 }), i(null);
    };
  return h.jsxs("div", {
    className: "flex-1 bg-gray-50 relative",
    children: [
      h.jsxs("div", {
        className: "fixed top-28 md:top-20 right-4 z-30 flex flex-col gap-2",
        children: [
          h.jsxs("div", {
            className:
              "flex bg-white/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden md:bg-white/70 md:backdrop-blur-md",
            children: [
              h.jsx("button", {
                onClick: () => L(1),
                className: `px-2 py-1.5 text-xs font-medium transition-colors md:px-2.5 md:py-1.5 md:text-xs ${
                  _ === 1
                    ? "bg-blue-600/90 text-white"
                    : "bg-white/50 text-gray-700 hover:bg-gray-50/70 md:bg-white/60 md:hover:bg-gray-50"
                }`,
                children: M("floor1"),
              }),
              h.jsx("button", {
                onClick: () => L(2),
                className: `px-2 py-1.5 text-xs font-medium transition-colors md:px-2.5 md:py-1.5 md:text-xs ${
                  _ === 2
                    ? "bg-blue-600/90 text-white"
                    : "bg-white/50 text-gray-700 hover:bg-gray-50/70 md:bg-white/60 md:hover:bg-gray-50"
                }`,
                children: M("floor2"),
              }),
            ],
          }),
          h.jsx("button", {
            onClick: ae,
            className:
              "p-2 bg-blue-600/60 hover:bg-blue-700/80 text-white rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm md:p-2.5 md:bg-blue-600/70",
            title: x ? "Exit Fullscreen" : "Enter Fullscreen",
            children: x
              ? h.jsx("svg", {
                  className: "w-4 h-4 md:w-4 md:h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: h.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12",
                  }),
                })
              : h.jsx("svg", {
                  className: "w-4 h-4 md:w-4 md:h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: h.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
                  }),
                }),
          }),
        ],
      }),
      h.jsx("div", {
        className: "container mx-auto px-4 py-6",
        children: h.jsxs("div", {
          className: "bg-white rounded-lg shadow-lg overflow-hidden",
          children: [
            h.jsx("div", {
              className: "p-4",
              children: h.jsxs("div", {
                className:
                  "border-2 border-gray-200 rounded-lg overflow-hidden bg-white relative",
                children: [
                  h.jsx("div", {
                    className: `${x ? "h-screen" : "h-[80vh]"} overflow-hidden`,
                    children: layoutLoading 
                      ? h.jsx("div", {
                          className: "flex items-center justify-center h-full bg-gray-50",
                          children: h.jsxs("div", {
                            className: "text-center",
                            children: [
                              h.jsx("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4",
                              }),
                              h.jsx("p", {
                                className: "text-gray-600 text-sm",
                                children: "Loading layout..."
                              })
                            ]
                          })
                        })
                      : h.jsxs("svg", {
                      ref: Y,
                      width: "100%",
                      height: "100%",
                      viewBox: "0 0 3307 2338",
                      preserveAspectRatio: "xMidYMid meet",
                      className: `bg-gray-50 ${
                        R.isDragging
                          ? "cursor-grabbing"
                          : pe
                          ? "cursor-crosshair"
                          : "cursor-default"
                      } select-none`,
                      onContextMenu: Se,
                      onClick: ye,
                      onMouseUp: j,
                      onMouseLeave: () => {},
                      children: [
                        h.jsx("image", {
                          href: en(_),
                          width: "100%",
                          height: "100%",
                          preserveAspectRatio: "xMidYMid meet",
                          opacity: "0.4",
                        }),
                        o
                          .filter(($) => $.floor === _)
                          .map(($) => {
                            var J;
                            return h.jsx(
                              Nv,
                              {
                                status:
                                  ((J = $.current_status) == null
                                    ? void 0
                                    : J.status) || "OFF",
                                x: $.svg_x,
                                y: $.svg_y,
                                baseSize: 40,
                                cabinetId: $.id,
                                name: $.name,
                                capacity: $.capacity,
                                location: $.location,
                                onClick: () => U($),
                                onMouseDown: (ne) => fe(ne, $),
                                isDragging:
                                  R.isDragging && R.cabinetId === $.id,
                                onContextMenu: (ne) => {
                                  ne.stopPropagation(),
                                    u({
                                      visible: !0,
                                      x: ne.clientX,
                                      y: ne.clientY,
                                      cabinet: $,
                                    });
                                },
                              },
                              $.id
                            );
                          }),
                      ],
                    }),
                  }),
                  m &&
                    h.jsx("div", {
                      className:
                        "absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center",
                      children: h.jsxs("div", {
                        className:
                          "bg-white rounded-lg p-4 flex items-center space-x-3",
                        children: [
                          h.jsx("div", {
                            className:
                              "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                          }),
                          h.jsx("span", { children: "Processing..." }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
            !x &&
              h.jsx("div", {
                className: "px-3 md:px-6 py-3 md:py-5 pb-4 md:pb-7 bg-gray-50 border-t",
                children: h.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0",
                  children: [
                    h.jsxs("div", {
                      className:
                        "flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm",
                      children: [
                        h.jsxs("div", {
                          className: "flex items-center space-x-1 md:space-x-2",
                          children: [
                            h.jsx("div", {
                              className:
                                "w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-sm",
                            }),
                            h.jsx("span", { children: "ON Status" }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "flex items-center space-x-1 md:space-x-2",
                          children: [
                            h.jsx("div", {
                              className:
                                "w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-sm",
                            }),
                            h.jsx("span", { children: "OFF Status" }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className:
                        "flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm",
                      children: [
                        h.jsxs("div", {
                          className: "text-gray-600 font-bold",
                          children: ["Total: ", o.length],
                        }),
                        h.jsxs("div", {
                          className: "text-green-600 font-bold",
                          children: [
                            "ON: ",
                            o.filter(($) => {
                              var J;
                              return (
                                ((J = $.current_status) == null
                                  ? void 0
                                  : J.status) === "ON"
                              );
                            }).length,
                          ],
                        }),
                        h.jsxs("div", {
                          className: "text-red-600 font-bold",
                          children: [
                            "OFF: ",
                            o.filter(($) => {
                              var J;
                              return (
                                ((J = $.current_status) == null
                                  ? void 0
                                  : J.status) === "OFF"
                              );
                            }).length,
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("button", {
                      onClick: oe,
                      disabled: v,
                      className:
                        "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors duration-200 flex items-center space-x-1 md:space-x-2",
                      title: M("common.refresh"),
                      children: [
                        v
                          ? h.jsx("div", {
                              className:
                                "w-3 h-3 md:w-4 md:h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                            })
                          : h.jsx("svg", {
                              className: "w-3 h-3 md:w-4 md:h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: h.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                              }),
                            }),
                        h.jsx("span", {
                          className: "hidden md:inline",
                          children: v ? "Refreshing..." : M("common.refresh"),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
      }),
      pe &&
        !x &&
        h.jsx("div", {
          className: "fixed bottom-6 right-6 z-40 hidden md:block",
          children: h.jsx("button", {
            onClick: () => p({ visible: !0, position: { x: 1e3, y: 1e3 } }),
            className:
              "bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110",
            title: "Add New Cabinet",
            children: h.jsx("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: h.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M12 4v16m8-8H4",
              }),
            }),
          }),
        }),
      h.jsx(Ev, {
        isVisible: a.visible,
        x: a.x,
        y: a.y,
        cabinetStatus:
          ((me = (ue = a.cabinet) == null ? void 0 : ue.current_status) == null
            ? void 0
            : me.status) || "OFF",
        isAdmin: pe,
        isAuthenticated: isAuthenticated,
        onClose: re,
        onToggleOn: () => a.cabinet && D(a.cabinet.id, "ON"),
        onToggleOff: () => a.cabinet && D(a.cabinet.id, "OFF"),
        onEdit: () => {
          a.cabinet &&
            (p({ visible: !0, editing: a.cabinet }),
            u({ visible: !1, x: 0, y: 0 }));
        },
        onDelete: () => a.cabinet && I(a.cabinet.id),
      }),
      h.jsx(Pv, {
        isVisible: d.visible,
        editingCabinet: d.editing || null,
        initialPosition: d.position,
        currentFloor: _,
        onClose: () => p({ visible: !1 }),
        onSave: C,
      }),
      r &&
        !a.visible &&
        h.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6",
          children: h.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl w-95vw md:w-[400px] max-w-xs sm:max-w-[90vw] md:max-w-md max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-4",
            children: [
              h.jsx("div", {
                className:
                  "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-t-lg",
                children: h.jsx("h3", {
                  className: "text-sm sm:text-base md:text-lg font-semibold",
                  children: "Cabinet Details",
                }),
              }),
              h.jsx("div", {
                className: "p-3 sm:p-4 md:p-6",
                children: h.jsxs("div", {
                  className: "space-y-2 sm:space-y-3",
                  children: [
                    h.jsxs("div", {
                      className: "flex justify-between items-start sm:items-center",
                      children: [
                        h.jsx("span", {
                          className: "font-medium text-xs sm:text-sm md:text-base flex-shrink-0",
                          children: "ID:",
                        }),
                        h.jsx("span", {
                          className: "text-xs sm:text-sm md:text-base text-right break-all",
                          children: r.id,
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex justify-between items-start sm:items-center",
                      children: [
                        h.jsx("span", {
                          className: "font-medium text-xs sm:text-sm md:text-base flex-shrink-0",
                          children: "Name:",
                        }),
                        h.jsx("span", {
                          className: "text-xs sm:text-sm md:text-base text-right break-words",
                          children: r.name,
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex justify-between items-start sm:items-center",
                      children: [
                        h.jsx("span", {
                          className: "font-medium text-xs sm:text-sm md:text-base flex-shrink-0",
                          children: [M("cabinet.location"), ":"],
                        }),
                        h.jsx("span", {
                          className: "text-xs sm:text-sm md:text-base text-right break-words",
                          children: r.location,
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex justify-between items-start sm:items-center",
                      children: [
                        h.jsxs("span", {
                          className: "font-medium text-xs sm:text-sm md:text-base flex-shrink-0",
                          children: [M("cabinet.capacity"), ":"],
                        }),
                        h.jsxs("span", {
                          className: "text-xs sm:text-sm md:text-base text-right",
                          children: [r.capacity, " Amps"],
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex justify-between items-start sm:items-center",
                      children: [
                        h.jsxs("span", {
                          className: "font-medium text-xs sm:text-sm md:text-base flex-shrink-0",
                          children: [M("cabinet.status"), ":"],
                        }),
                        h.jsx("span", {
                          className: `px-2 py-1 rounded text-xs sm:text-sm font-medium ${
                            ((de = r.current_status) == null
                              ? void 0
                              : de.status) === "ON"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`,
                          children:
                            ((be = r.current_status) == null
                              ? void 0
                              : be.status) || "OFF",
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex justify-between items-start sm:items-center",
                      children: [
                        h.jsx("span", {
                          className: "font-medium text-xs sm:text-sm md:text-base flex-shrink-0",
                          children: "Position:",
                        }),
                        h.jsxs("span", {
                          className: "text-xs sm:text-sm md:text-base text-right",
                          children: ["(", r.svg_x, ", ", r.svg_y, ")"],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              h.jsx("div", {
                className: "px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-gray-50 rounded-b-lg",
                children: h.jsx("button", {
                  onClick: re,
                  className:
                    "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm md:text-base font-medium",
                  children: "Close",
                }),
              }),
            ],
          }),
        }),
    ],
  });
}
function Ov() {
  const [o, n] = K.useState([]),
    [r, i] = K.useState(""),
    [a, u] = K.useState("ALL"),
    [sortBy, setSortBy] = K.useState("name"), // "name", "id", "location", "capacity", "status"
    [sortOrder, setSortOrder] = K.useState("asc"), // "asc", "desc"
    d = Rr((g) => g.user),
    { t: p } = pt();
  K.useEffect(() => {
    async function g() {
      if (d.role === "admin") {
        const v = await Vl();
        n(v || []);
      } else {
        const v = await gh();
        n(v || []);
      }
    }
    g();
  }, [d]);
  
  // Natural sort function for alphanumeric strings (A1-9 before A1-10)
  const naturalSort = (a, b) => {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  };
  
  // Auto-refresh statistics data every 5 minutes
  K.useEffect(() => {
    const statsInterval = setInterval(async () => {
      if (d.role === "admin") {
        const v = await Vl();
        n(v || []);
      } else {
        const v = await gh();
        n(v || []);
      }
    }, 5 * 60 * 1000); // 5 minutes
    
    return () => clearInterval(statsInterval);
  }, [d.role]);
  const m = o.filter((g) => {
    var v;
    return (
      (a === "ALL" ||
        ((v = g.current_status) == null ? void 0 : v.status) === a) &&
      (g.id.toLowerCase().includes(r.toLowerCase()) ||
        g.name.toLowerCase().includes(r.toLowerCase()) ||
        g.location.toLowerCase().includes(r.toLowerCase()))
    );
  }).sort((g1, g2) => {
    let value1, value2;
    
    switch (sortBy) {
      case "name":
        value1 = g1.name;
        value2 = g2.name;
        return sortOrder === "asc" ? naturalSort(value1, value2) : naturalSort(value2, value1);
      case "id":
        value1 = g1.id;
        value2 = g2.id;
        return sortOrder === "asc" ? naturalSort(value1, value2) : naturalSort(value2, value1);
      case "location":
        value1 = g1.location;
        value2 = g2.location;
        return sortOrder === "asc" ? naturalSort(value1, value2) : naturalSort(value2, value1);
      case "capacity":
        value1 = g1.capacity;
        value2 = g2.capacity;
        return sortOrder === "asc" ? value1 - value2 : value2 - value1;
      case "status":
        value1 = g1.current_status?.status || "OFF";
        value2 = g2.current_status?.status || "OFF";
        return sortOrder === "asc" ? naturalSort(value1, value2) : naturalSort(value2, value1);
      default:
        value1 = g1.name;
        value2 = g2.name;
        return sortOrder === "asc" ? naturalSort(value1, value2) : naturalSort(value2, value1);
    }
  });
  return h.jsx("div", {
    className: "flex-1 bg-slate-50",
    children: h.jsx("div", {
      className: "max-w-full w-full px-1 py-2 mx-auto",
      children: h.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden",
        children: [
          h.jsx("div", {
            className:
              "px-2 py-2 border-b bg-gradient-to-r from-red-50 via-green-50 to-blue-100",
            children: h.jsxs("div", {
              className:
                "flex flex-col lg:flex-row gap-2 items-center justify-center text-center",
              children: [
                // Search input
                h.jsx("input", {
                  value: r,
                  onChange: (g) => i(g.target.value),
                  placeholder: p("statsPage.searchPlaceholder"),
                  className:
                    "px-3 py-2 text-sm md:text-base border-1 border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white transition w-full lg:flex-1 text-center",
                }),
                // Status filter
                h.jsxs("select", {
                  value: a,
                  onChange: (g) => u(g.target.value),
                  className:
                    "px-3 py-2 text-sm md:text-base border-1 border-amber-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition w-full lg:flex-1 text-center",
                  title: p("statsPage.filterByStatus"),
                  children: [
                    h.jsx("option", {
                      value: "ALL",
                      children: p("common.all"),
                    }),
                    h.jsx("option", { value: "ON", children: p("common.on") }),
                    h.jsx("option", {
                      value: "OFF",
                      children: p("common.off"),
                    }),
                  ],
                }),
                // Sort select
                h.jsxs("select", {
                  value: sortBy,
                  onChange: (g) => setSortBy(g.target.value),
                  className: "px-2 py-1 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full lg:flex-1",
                  children: [
                    h.jsx("option", { value: "name", children: p("statsPage.sortByName") }),
                    h.jsx("option", { value: "id", children: p("statsPage.sortById") }),
                    h.jsx("option", { value: "location", children: p("statsPage.sortByLocation") }),
                    h.jsx("option", { value: "capacity", children: p("statsPage.sortByCapacity") }),
                    h.jsx("option", { value: "status", children: p("statsPage.sortByStatus") })
                  ]
                }),
                // Sort order button
                h.jsx("button", {
                  onClick: () => setSortOrder(sortOrder === "asc" ? "desc" : "asc"),
                  className: `px-3 py-1 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-1 w-full lg:flex-1 justify-center ${sortOrder === "desc" ? "text-blue-600" : "text-gray-600"}`,
                  children: [
                    h.jsx("span", { 
                      className: "hidden lg:inline",
                      children: sortOrder === "asc" ? p("statsPage.ascending") : p("statsPage.descending") 
                    }),
                    h.jsx("svg", {
                      className: `w-4 h-4 transition-transform ${sortOrder === "desc" ? "rotate-180" : ""}`,
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M7 11l5-5m0 0l5 5m-5-5v12"
                      })
                    })
                  ]
                })
              ],
            }),
          }),
          h.jsx("div", {
            className: "px-2 py-2 border-b bg-white",
            children: h.jsxs("div", {
              className: "flex flex-row gap-1 md:gap-2 w-full",
              children: [
                h.jsxs("div", {
                  className:
                    "flex-1 bg-blue-50 border border-blue-200 p-1 md:p-2 rounded flex flex-col items-center min-w-0",
                  children: [
                    h.jsx("div", {
                      className: "text-sm md:text-lg font-bold text-blue-600",
                      children: m.length,
                    }),
                    h.jsx("div", {
                      className:
                        "text-[10px] md:text-xs text-blue-600 text-center truncate",
                      children: p("statsPage.totalCabinets"),
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className:
                    "flex-1 bg-green-50 border border-green-200 p-1 md:p-2 rounded flex flex-col items-center min-w-0",
                  children: [
                    h.jsx("div", {
                      className: "text-sm md:text-lg font-bold text-green-600",
                      children: m.filter((g) => {
                        var v;
                        return (
                          ((v = g.current_status) == null
                            ? void 0
                            : v.status) === "ON"
                        );
                      }).length,
                    }),
                    h.jsx("div", {
                      className:
                        "text-[10px] md:text-xs text-green-600 text-center truncate",
                      children: p("common.online"),
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className:
                    "flex-1 bg-slate-50 border border-slate-200 p-1 md:p-2 rounded flex flex-col items-center min-w-0",
                  children: [
                    h.jsx("div", {
                      className: "text-sm md:text-lg font-bold text-slate-600",
                      children: m.filter((g) => {
                        var v;
                        return (
                          ((v = g.current_status) == null
                            ? void 0
                            : v.status) === "OFF"
                        );
                      }).length,
                    }),
                    h.jsx("div", {
                      className:
                        "text-[10px] md:text-xs text-slate-600 text-center truncate",
                      children: p("common.offline"),
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className:
                    "flex-1 bg-amber-50 border border-amber-200 p-1 md:p-2 rounded flex flex-col items-center min-w-0",
                  children: [
                    h.jsxs("div", {
                      className: "text-sm md:text-lg font-bold text-amber-600",
                      children: [
                        m.length > 0
                          ? Math.round(
                              (m.filter((g) => {
                                var v;
                                return (
                                  ((v = g.current_status) == null
                                    ? void 0
                                    : v.status) === "ON"
                                );
                              }).length /
                                m.length) *
                                100
                            )
                          : 0,
                        "%",
                      ],
                    }),
                    h.jsx("div", {
                      className:
                        "text-[10px] md:text-xs text-amber-600 text-center truncate",
                      children: p("statsPage.uptime"),
                    }),
                  ],
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: "overflow-x-auto",
            style: { maxHeight: 500, minHeight: 180, overflowY: "auto" },
            children: h.jsxs("table", {
              className: "w-[95%] md:w-full mx-auto text-xs md:text-sm",
              children: [
                h.jsx("thead", {
                  className: "bg-blue-500 sticky top-0 z-10",
                  children: h.jsxs("tr", {
                    children: [
                      h.jsx("th", {
                        className:
                          "px-2 py-2 text-left font-semibold text-white whitespace-nowrap",
                        children: p("statsPage.cabinetInfo"),
                      }),
                      h.jsx("th", {
                        className:
                          "px-2 py-2 text-left font-semibold text-white whitespace-nowrap",
                        children: p("statsPage.capacity"),
                      }),
                      h.jsx("th", {
                        className:
                          "px-2 py-2 text-left font-semibold text-white whitespace-nowrap",
                        children: p("common.status"),
                      }),
                      h.jsx("th", {
                        className:
                          "px-2 py-2 text-left font-semibold text-white whitespace-nowrap",
                        children: p("statsPage.lastActivity"),
                      }),
                    ],
                  }),
                }),
                h.jsx("tbody", {
                  className: "bg-white divide-y divide-slate-200",
                  children: m.map((g, v) => {
                    var w, x, S, _, L, P;
                    return h.jsxs(
                      "tr",
                      {
                        className: v % 2 === 0 ? "bg-white" : "bg-slate-50/50",
                        children: [
                          h.jsx("td", {
                            className: "px-2 py-2 align-top",
                            children: h.jsxs("div", {
                              children: [
                                h.jsx("div", {
                                  className:
                                    "font-semibold text-slate-900 truncate max-w-[120px] md:max-w-[200px]",
                                  children: g.name,
                                }),
                                h.jsxs("div", {
                                  className:
                                    "text-xs text-slate-600 whitespace-pre-line flex items-center gap-1 break-words max-w-[120px] md:max-w-[200px]",
                                  children: [
                                    h.jsxs("svg", {
                                      className: "w-3 h-3",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      children: [
                                        h.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                                        }),
                                        h.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                                        }),
                                      ],
                                    }),
                                    g.location,
                                  ],
                                }),
                              ],
                            }),
                          }),
                          h.jsxs("td", {
                            className: "px-2 py-2 align-top",
                            children: [
                              h.jsxs("div", {
                                className: "font-bold text-blue-600",
                                children: [g.capacity, "A"],
                              }),
                              h.jsx("div", {
                                className: "text-xs text-slate-500",
                                children: p("statsPage.ratedCapacity"),
                              }),
                            ],
                          }),
                          h.jsx("td", {
                            className: "px-2 py-2 align-top",
                            children: h.jsxs("div", {
                              className: "flex items-center gap-1",
                              children: [
                                h.jsx("div", {
                                  className: `w-2 h-2 rounded-full ${
                                    ((w = g.current_status) == null
                                      ? void 0
                                      : w.status) === "ON"
                                      ? "bg-green-500 animate-pulse"
                                      : "bg-slate-400"
                                  }`,
                                }),
                                h.jsx("span", {
                                  className: `font-medium ${
                                    ((x = g.current_status) == null
                                      ? void 0
                                      : x.status) === "ON"
                                      ? "text-green-700"
                                      : "text-slate-700"
                                  }`,
                                  children:
                                    ((S = g.current_status) == null
                                      ? void 0
                                      : S.status) === "ON"
                                      ? p("common.on")
                                      : p("common.off"),
                                }),
                              ],
                            }),
                          }),
                          h.jsx("td", {
                            className: "px-2 py-2 align-top",
                            children: h.jsx("div", {
                              className: "text-[0.6rem]",
                              children:
                                ((_ = g.current_status) == null
                                  ? void 0
                                  : _.status) === "ON" &&
                                (L = g.current_status) != null &&
                                L.last_on_at
                                  ? h.jsxs("div", {
                                      children: [
                                        h.jsx("div", {
                                          className:
                                            "text-[0.7rem] text-green-600 font-medium",
                                          children: p("statsPage.turnedOnAt"),
                                        }),
                                        h.jsx("div", {
                                          className: "text-slate-600",
                                          children: new Date(
                                            g.current_status.last_on_at
                                          ).toLocaleString(),
                                        }),
                                      ],
                                    })
                                  : (P = g.current_status) != null &&
                                    P.last_off_at
                                  ? h.jsxs("div", {
                                      children: [
                                        h.jsx("div", {
                                          className:
                                            "text-[0.7rem] text-slate-600 font-medium",
                                          children: p("statsPage.turnedOffAt"),
                                        }),
                                        h.jsx("div", {
                                          className: "text-slate-600",
                                          children: new Date(
                                            g.current_status.last_off_at
                                          ).toLocaleString(),
                                        }),
                                      ],
                                    })
                                  : h.jsx("div", {
                                      className: "text-slate-400",
                                      children: p("statsPage.noActivity"),
                                    }),
                            }),
                          }),
                        ],
                      },
                      g.id
                    );
                  }),
                }),
              ],
            }),
          }),
          m.length === 0 &&
            h.jsxs("div", {
              className: "py-8 text-center",
              children: [
                h.jsx("div", {
                  className: "text-slate-500 text-base font-medium",
                  children: p("statsPage.noCabinetsFound"),
                }),
                h.jsx("div", {
                  className: "text-slate-400 text-xs mt-1",
                  children: p("statsPage.adjustSearch"),
                }),
              ],
            }),
        ],
      }),
    }),
  });
}
function Tv() {
  var q, W, A, R, Q, B, M, Y, pe, oe, ge, Pe, Ae;
  const o = Rr((ae) => ae.user),
    [n, r] = K.useState([]),
    [i, a] = K.useState(null),
    [u, d] = K.useState(!1),
    [p, m] = K.useState(null),
    [g, v] = K.useState(""),
    { t: w, i18n: x } = pt(),
    S = o.role === "admin";
  K.useEffect(() => {
    async function ae() {
      let ye;
      S ? (ye = await Vl()) : (ye = await lv(o.id)),
        r(ye || []),
        ye && ye.length && a(ye[0].id);
    }
    ae();
  }, [o.id, S]);
  const _ = n.find((ae) => ae.id === i),
    L = async (ae) => {
      if (_) {
        d(!0), v("");
        try {
          await vh(_.id, ae, o.id || void 0);
          const ye = n.map((Se) => {
            var fe, j;
            return Se.id === _.id
              ? {
                  ...Se,
                  current_status: {
                    ...Se.current_status,
                    status: ae,
                    last_on_at:
                      ae === "ON"
                        ? new Date().toISOString()
                        : (fe = Se.current_status) == null
                        ? void 0
                        : fe.last_on_at,
                    last_off_at:
                      ae === "OFF"
                        ? new Date().toISOString()
                        : (j = Se.current_status) == null
                        ? void 0
                        : j.last_off_at,
                  },
                }
              : Se;
          });
          r(ye),
            v(w("cabinetToggleSuccess", { id: _.id, status: ae })),
            setTimeout(() => v(""), 3e3);
        } catch (ye) {
          v(w("cabinetToggleError")),
            console.error(ye),
            setTimeout(() => v(""), 3e3);
        } finally {
          d(!1);
        }
      }
    },
    P = async (ae) => {
      const ye = n.find((fe) => fe.id === ae);
      if (
        !(
          !ye ||
          !S ||
          !window.confirm(w("confirmDeleteCabinet", { name: ye.name || ye.id }))
        )
      ) {
        m(ae);
        try {
          if (
            (await yh(ae), r((fe) => fe.filter((j) => j.id !== ae)), i === ae)
          ) {
            const fe = n.filter((j) => j.id !== ae);
            a(fe.length > 0 ? fe[0].id : null);
          }
          v(w("cabinetDeleteSuccess", { name: ye.name || ye.id })),
            setTimeout(() => v(""), 3e3);
        } catch (fe) {
          v(w("cabinetDeleteError")),
            console.error(fe),
            setTimeout(() => v(""), 3e3);
        } finally {
          m(null);
        }
      }
    };
  return h.jsx("div", {
    className: "flex-1 bg-gray-50",
    children: h.jsxs("div", {
      className: "container mx-auto px-2 md:px-4 py-3 md:py-6",
      children: [
        h.jsx("div", {
          className: "bg-white rounded-lg shadow-sm p-3 md:p-4 mb-4 md:mb-6",
          children: h.jsx("div", {
            className: "flex justify-between items-center",
            children: h.jsx("h2", {
              className: "text-lg md:text-2xl font-bold text-gray-800",
              children: w("cabinetControl.title"),
            }),
          }),
        }),
        h.jsx("div", {
          className: "bg-white rounded-lg shadow-lg overflow-hidden",
          children:
            n.length === 0
              ? h.jsxs("div", {
                  className: "p-4 md:p-8 text-center",
                  children: [
                    h.jsx("div", {
                      className: "text-gray-500 text-base md:text-lg",
                      children: w("cabinetControl.noCabinetsAssigned"),
                    }),
                    h.jsx("div", {
                      className: "text-gray-400 text-xs md:text-sm mt-2",
                      children: w("cabinetControl.contactAdminForCabinets"),
                    }),
                  ],
                })
              : h.jsxs("div", {
                  className: "p-3 md:p-6",
                  children: [
                    h.jsxs("div", {
                      className: "mb-4 md:mb-6",
                      children: [
                        h.jsx("label", {
                          className:
                            "block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2",
                          children: w("cabinetControl.selectCabinet"),
                        }),
                        h.jsxs("select", {
                          className:
                            "w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm md:text-lg",
                          value: i || "",
                          onChange: (ae) => a(ae.target.value),
                          "aria-label": "Cabinet selection",
                          children: [
                            h.jsx("option", {
                              value: "",
                              children: w("cabinetControl.chooseCabinet"),
                            }),
                            n.map((ae) =>
                              h.jsxs(
                                "option",
                                {
                                  value: ae.id,
                                  children: [
                                    h.jsx("span", {
                                      className: "font-medium text-gray-800",
                                      children: ae.name || ae.id,
                                    }),
                                    " - ",
                                    ae.location,
                                    " (",
                                    ae.capacity,
                                    "A)",
                                  ],
                                },
                                ae.id
                              )
                            ),
                          ],
                        }),
                      ],
                    }),
                    g &&
                      h.jsx("div", {
                        className: `mb-3 md:mb-4 p-3 md:p-4 rounded-lg text-sm md:text-base ${
                          g.includes("successfully")
                            ? "bg-green-50 border border-green-200 text-green-700"
                            : "bg-red-50 border border-red-200 text-red-700"
                        }`,
                        children: g,
                      }),
                    _
                      ? h.jsxs("div", {
                          className: "space-y-4 md:space-y-6",
                          children: [
                            h.jsx("div", {
                              className:
                                "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 md:p-4 border border-blue-200",
                              children: h.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      h.jsx("h3", {
                                        className:
                                          "text-base md:text-xl font-bold text-gray-800 mb-2",
                                        children: _.name || _.id,
                                      }),
                                      h.jsxs("div", {
                                        className:
                                          "grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-xs md:text-sm",
                                        children: [
                                          h.jsxs("div", {
                                            children: [
                                              h.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-600",
                                                children: [
                                                  w("cabinetControl.location"),
                                                  ":",
                                                ],
                                              }),
                                              h.jsx("div", {
                                                className: "text-gray-900",
                                                children: _.location,
                                              }),
                                            ],
                                          }),
                                          h.jsxs("div", {
                                            children: [
                                              h.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-600",
                                                children: [
                                                  w("cabinetControl.capacity"),
                                                  ":",
                                                ],
                                              }),
                                              h.jsxs("div", {
                                                className: "text-gray-900",
                                                children: [_.capacity, "A"],
                                              }),
                                            ],
                                          }),
                                          h.jsxs("div", {
                                            children: [
                                              h.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-600",
                                                children: [
                                                  w("cabinetControl.status"),
                                                  ":",
                                                ],
                                              }),
                                              h.jsx("div", {
                                                className: `font-medium ${
                                                  ((q = _.current_status) ==
                                                  null
                                                    ? void 0
                                                    : q.status) === "ON"
                                                    ? "text-green-600"
                                                    : "text-gray-600"
                                                }`,
                                                children:
                                                  ((W = _.current_status) ==
                                                  null
                                                    ? void 0
                                                    : W.status) || "OFF",
                                              }),
                                            ],
                                          }),
                                          h.jsxs("div", {
                                            children: [
                                              h.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-600",
                                                children: [
                                                  w(
                                                    "cabinetControl.lastUpdate"
                                                  ),
                                                  ":",
                                                ],
                                              }),
                                              h.jsx("div", {
                                                className:
                                                  "text-gray-900 text-xs",
                                                children:
                                                  ((A = _.current_status) ==
                                                  null
                                                    ? void 0
                                                    : A.status) === "ON" &&
                                                  (R = _.current_status) !=
                                                    null &&
                                                  R.last_on_at
                                                    ? new Date(
                                                        _.current_status.last_on_at
                                                      ).toLocaleString()
                                                    : (Q = _.current_status) !=
                                                        null && Q.last_off_at
                                                    ? new Date(
                                                        _.current_status.last_off_at
                                                      ).toLocaleString()
                                                    : w("cabinetControl.never"),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  h.jsxs("div", {
                                    className:
                                      "ml-2 md:ml-4 flex flex-col items-center",
                                    children: [
                                      h.jsx("div", {
                                        className: `w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center ${
                                          ((B = _.current_status) == null
                                            ? void 0
                                            : B.status) === "ON"
                                            ? "bg-green-500 animate-pulse"
                                            : "bg-gray-400"
                                        }`,
                                        children: h.jsx("img", {
                                          src: Ve(
                                            ((M = _.current_status) == null
                                              ? void 0
                                              : M.status) === "ON"
                                              ? "on_status.svg"
                                              : "off_status.svg"
                                          ),
                                          alt: `Cabinet ${
                                            ((Y = _.current_status) == null
                                              ? void 0
                                              : Y.status) === "ON"
                                              ? "ON"
                                              : "OFF"
                                          } status`,
                                          className: "w-6 h-6 md:w-8 md:h-8",
                                        }),
                                      }),
                                      h.jsx("span", {
                                        className:
                                          "text-xs font-medium mt-1 text-gray-600",
                                        children:
                                          ((pe = _.current_status) == null
                                            ? void 0
                                            : pe.status) === "ON"
                                            ? w("cabinetControl.online")
                                            : w("cabinetControl.offline"),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            h.jsxs("div", {
                              className: "grid md:grid-cols-3 gap-3 md:gap-4",
                              children: [
                                h.jsxs("button", {
                                  onClick: () => L("ON"),
                                  disabled:
                                    u ||
                                    ((oe = _.current_status) == null
                                      ? void 0
                                      : oe.status) === "ON",
                                  className:
                                    "bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-medium text-sm md:text-lg transition-colors duration-200 flex items-center justify-center space-x-1 md:space-x-2",
                                  children: [
                                    h.jsx("img", {
                                      src: Ve("on_status.svg"),
                                      alt: "Turn ON",
                                      className: "w-4 h-4 md:w-6 md:h-6",
                                    }),
                                    h.jsx("span", {
                                      children: w(
                                        u
                                          ? "cabinetControl.processing"
                                          : "cabinetControl.turnOn"
                                      ),
                                    }),
                                  ],
                                }),
                                h.jsxs("button", {
                                  onClick: () => L("OFF"),
                                  disabled:
                                    u ||
                                    ((ge = _.current_status) == null
                                      ? void 0
                                      : ge.status) === "OFF",
                                  className:
                                    "bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-medium text-sm md:text-lg transition-colors duration-200 flex items-center justify-center space-x-1 md:space-x-2",
                                  children: [
                                    h.jsx("img", {
                                      src: Ve("off_status.svg"),
                                      alt: "Turn OFF",
                                      className: "w-4 h-4 md:w-6 md:h-6",
                                    }),
                                    h.jsx("span", {
                                      children: w(
                                        u
                                          ? "cabinetControl.processing"
                                          : "cabinetControl.turnOff"
                                      ),
                                    }),
                                  ],
                                }),
                                S &&
                                  h.jsxs("button", {
                                    onClick: () => P(_.id),
                                    disabled: p === _.id,
                                    className:
                                      "bg-red-800 hover:bg-red-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-medium text-sm md:text-lg transition-colors duration-200 flex items-center justify-center space-x-1 md:space-x-2",
                                    children: [
                                      h.jsx("svg", {
                                        className: "w-4 h-4 md:w-6 md:h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: h.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                        }),
                                      }),
                                      h.jsx("span", {
                                        children:
                                          p === _.id
                                            ? w("cabinetControl.deleting")
                                            : w("cabinetControl.delete"),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            h.jsx("div", {
                              className: "text-center",
                              children: h.jsx("div", {
                                className: `inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                                  ((Pe = _.current_status) == null
                                    ? void 0
                                    : Pe.status) === "ON"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                                }`,
                                children:
                                  ((Ae = _.current_status) == null
                                    ? void 0
                                    : Ae.status) === "ON"
                                    ? w(
                                        "cabinetControl.cabinetOnlineOperational"
                                      )
                                    : w("cabinetControl.cabinetOffline"),
                              }),
                            }),
                          ],
                        })
                      : h.jsx("div", {
                          className: "text-center py-8",
                          children: h.jsx("div", {
                            className: "text-gray-500",
                            children: w("cabinetControl.pleaseSelectCabinet"),
                          }),
                        }),
                  ],
                }),
        }),
      ],
    }),
  });
}
function ao() {
  const [o, n] = K.useState(() => {
    const u = window.innerWidth,
      d = window.innerHeight,
      p = u <= 768,
      m = u > 768 && u <= 1024,
      g = u > 1024;
    return {
      isMobile: p,
      isTablet: m,
      isDesktop: g,
      orientation: u > d ? "landscape" : "portrait",
      screenWidth: u,
      screenHeight: d,
      canRotate: "screen" in window && "orientation" in window.screen,
    };
  });
  return (
    K.useEffect(() => {
      var m;
      const u = () => {
          const g = window.innerWidth,
            v = window.innerHeight,
            w = g <= 768,
            x = g > 768 && g <= 1024,
            S = g > 1024;
          n({
            isMobile: w,
            isTablet: x,
            isDesktop: S,
            orientation: g > v ? "landscape" : "portrait",
            screenWidth: g,
            screenHeight: v,
            canRotate: "screen" in window && "orientation" in window.screen,
          });
        },
        d = () => {
          setTimeout(u, 100);
        },
        p = () => {
          u();
        };
      return (
        window.addEventListener("orientationchange", d),
        window.addEventListener("resize", p),
        "screen" in window &&
          "orientation" in window.screen &&
          ((m = window.screen.orientation) == null ||
            m.addEventListener("change", d)),
        () => {
          var g;
          window.removeEventListener("orientationchange", d),
            window.removeEventListener("resize", p),
            "screen" in window &&
              "orientation" in window.screen &&
              ((g = window.screen.orientation) == null ||
                g.removeEventListener("change", d));
        }
      );
    }, []),
    {
      ...o,
      requestLandscape: async () => {
        var u;
        try {
          const d = (u = window.screen) == null ? void 0 : u.orientation;
          d && typeof d.lock == "function" && (await d.lock("landscape"));
        } catch (d) {
          if (
            (console.warn("Could not lock orientation to landscape:", d),
            document.documentElement.requestFullscreen && o.isMobile)
          )
            try {
              await document.documentElement.requestFullscreen();
            } catch (p) {
              console.warn("Could not enter fullscreen:", p);
            }
        }
      },
      requestPortrait: async () => {
        var u;
        try {
          const d = (u = window.screen) == null ? void 0 : u.orientation;
          d && typeof d.lock == "function" && (await d.lock("portrait"));
        } catch (d) {
          console.warn("Could not lock orientation to portrait:", d);
        }
      },
      exitFullscreen: async () => {
        try {
          document.fullscreenElement &&
            document.exitFullscreen &&
            (await document.exitFullscreen());
        } catch (u) {
          console.warn("Could not exit fullscreen:", u);
        }
      },
    }
  );
}
function Lv({ className: o = "", showAlways: n = !1 }) {
  const { t: r } = pt(),
    {
      isMobile: i,
      isTablet: a,
      orientation: u,
      canRotate: d,
      requestLandscape: p,
      requestPortrait: m,
      exitFullscreen: g,
    } = ao(),
    [v, w] = K.useState(!1);
  if (!n && !i && !a) return null;
  const x = async () => {
      w(!0);
      try {
        await p();
      } finally {
        setTimeout(() => w(!1), 1e3);
      }
    },
    S = async () => {
      w(!0);
      try {
        await m();
      } finally {
        setTimeout(() => w(!1), 1e3);
      }
    },
    _ = async () => {
      await g();
    };
  return h.jsxs("div", {
    className: `flex items-center gap-2 ${o}`,
    children: [
      h.jsxs("div", {
        className: "flex items-center gap-1 text-xs text-slate-500",
        children: [
          h.jsx("div", {
            className: `w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center ${
              u === "landscape" ? "bg-green-100" : ""
            }`,
            children: h.jsx("div", {
              className: `w-2 h-1 bg-slate-400 rounded-xs ${
                u === "portrait" ? "rotate-90" : ""
              }`,
            }),
          }),
          h.jsx("span", { children: r(`orientation.${u}`) }),
        ],
      }),
      d &&
        h.jsxs(h.Fragment, {
          children: [
            h.jsx("button", {
              onClick: S,
              disabled: v || u === "portrait",
              className: `p-1 rounded text-xs font-medium transition-all ${
                u === "portrait"
                  ? "bg-green-100 text-green-700 cursor-not-allowed"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              } ${v ? "opacity-50" : ""}`,
              title: r("orientation.lockPortrait"),
              children: h.jsx("svg", {
                className: "w-4 h-4",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: h.jsx("path", {
                  d: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z",
                }),
              }),
            }),
            h.jsx("button", {
              onClick: x,
              disabled: v || u === "landscape",
              className: `p-1 rounded text-xs font-medium transition-all ${
                u === "landscape"
                  ? "bg-green-100 text-green-700 cursor-not-allowed"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              } ${v ? "opacity-50" : ""}`,
              title: r("orientation.lockLandscape"),
              children: h.jsx("svg", {
                className: "w-4 h-4",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: h.jsx("path", {
                  d: "M1 7h18c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H1c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2zm0 8h18V9H1v6z",
                }),
              }),
            }),
          ],
        }),
      document.fullscreenElement &&
        h.jsx("button", {
          onClick: _,
          className:
            "p-1 rounded text-xs font-medium bg-orange-100 text-orange-700 hover:bg-orange-200",
          title: r("orientation.exitFullscreen"),
          children: h.jsx("svg", {
            className: "w-4 h-4",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: h.jsx("path", {
              d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",
            }),
          }),
        }),
      v &&
        h.jsxs("div", {
          className: "flex items-center gap-1 text-xs text-blue-600",
          children: [
            h.jsx("svg", {
              className: "w-3 h-3 animate-spin",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              children: h.jsx("path", {
                d: "M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z",
              }),
            }),
            h.jsx("span", { children: r("orientation.rotating") }),
          ],
        }),
    ],
  });
}
function Rv({
  suggestedOrientation: o = "landscape",
  showFor: n = "mobile",
  className: r = "",
}) {
  const { t: i } = pt(),
    {
      isMobile: a,
      isTablet: u,
      orientation: d,
      requestLandscape: p,
      requestPortrait: m,
    } = ao(),
    [g, v] = K.useState(!1),
    [w, x] = K.useState(!1),
    S = () =>
      g || w
        ? !1
        : (n === "all" ||
            (n === "mobile" && a) ||
            (n === "tablet" && u) ||
            (n === "mobile" && (a || u))) &&
          d !== o;
  K.useEffect(() => {
    if (S() && !w) {
      const P = setTimeout(() => {
        x(!0);
      }, 2e3);
      return () => clearTimeout(P);
    }
  }, [d, a, u]);
  const _ = async () => {
      try {
        o === "landscape" ? await p() : await m(), v(!0);
      } catch (P) {
        console.warn("Failed to rotate:", P);
      }
    },
    L = () => {
      v(!0);
    };
  return !S() || !w
    ? null
    : h.jsx("div", {
        className: `fixed top-16 left-2 right-2 z-40 ${r}`,
        children: h.jsxs("div", {
          className:
            "bg-amber-50 border border-amber-200 rounded-lg p-3 shadow-lg flex items-center justify-between",
          children: [
            h.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.jsx("div", {
                  className: "flex-shrink-0",
                  children: h.jsxs("svg", {
                    className: "w-5 h-5 text-amber-600",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: [
                      h.jsx("path", {
                        d: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z",
                      }),
                      o === "landscape" &&
                        h.jsx("path", { d: "M9 7l3 3-3 3v-6z" }),
                    ],
                  }),
                }),
                h.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    h.jsx("p", {
                      className: "text-sm font-medium text-amber-800",
                      children: i("orientation.rotateForBetter"),
                    }),
                    h.jsx("p", {
                      className: "text-xs text-amber-600",
                      children: i(
                        o === "landscape"
                          ? "orientation.recommendLandscape"
                          : "orientation.recommendPortrait"
                      ),
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                h.jsx("button", {
                  onClick: _,
                  className:
                    "px-3 py-1.5 bg-amber-600 text-white text-xs font-medium rounded hover:bg-amber-700 transition-colors",
                  children: i(
                    `orientation.lock${o.charAt(0).toUpperCase() + o.slice(1)}`
                  ),
                }),
                h.jsx("button", {
                  onClick: L,
                  className:
                    "p-1 text-amber-600 hover:text-amber-700 transition-colors",
                  title: "Dismiss notification",
                  "aria-label": "Dismiss orientation notification",
                  children: h.jsx("svg", {
                    className: "w-4 h-4",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: h.jsx("path", {
                      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
}
const bh = "electrical_cabinet_layout_preferences",
  Av = () => {
    try {
      const o = localStorage.getItem(bh);
      if (o) return { ...Al(), ...JSON.parse(o) };
    } catch (o) {
      console.warn("Failed to load layout preferences:", o);
    }
    return Al();
  },
  Al = () => ({
    compactMode: !1,
    fontSize: "medium",
    theme: "light",
    gridDensity: "comfortable",
    showOrientation: !0,
  }),
  $f = (o) => {
    try {
      localStorage.setItem(bh, JSON.stringify(o));
    } catch (n) {
      console.warn("Failed to save layout preferences:", n);
    }
  };
function Iv({ isOpen: o, onClose: n }) {
  const { t: r } = pt(),
    { isMobile: i, isTablet: a, orientation: u } = ao(),
    [d, p] = K.useState(Av),
    m = (w, x) => {
      const S = { ...d, [w]: x };
      p(S), $f(S), g(S);
    },
    g = (w) => {
      const x = document.documentElement;
      switch (
        (x.classList.remove("text-sm", "text-base", "text-lg"), w.fontSize)
      ) {
        case "small":
          x.classList.add("text-sm");
          break;
        case "large":
          x.classList.add("text-lg");
          break;
        default:
          x.classList.add("text-base");
      }
      x.classList.remove("theme-light", "theme-dark"),
        w.theme !== "auto" && x.classList.add(`theme-${w.theme}`),
        w.compactMode
          ? x.classList.add("layout-compact")
          : x.classList.remove("layout-compact"),
        x.classList.remove("grid-comfortable", "grid-compact", "grid-spacious"),
        x.classList.add(`grid-${w.gridDensity}`);
    },
    v = () => {
      const w = Al();
      p(w), $f(w), g(w);
    };
  return (
    Dl.useEffect(() => {
      g(d);
    }, []),
    o
      ? h.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6",
          children: h.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-4",
            children: [
              h.jsxs("div", {
                className:
                  "sticky top-0 bg-white border-b px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between",
                children: [
                  h.jsx("h2", {
                    className: "text-base sm:text-lg font-semibold text-slate-800",
                    children: r("layout.settings"),
                  }),
                  h.jsx("button", {
                    onClick: n,
                    className:
                      "p-1 text-slate-500 hover:text-slate-700 rounded",
                    "aria-label": "Close settings",
                    children: h.jsx("svg", {
                      className: "w-5 h-5",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      children: h.jsx("path", {
                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                      }),
                    }),
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "p-4 space-y-6",
                children: [
                  h.jsxs("div", {
                    className: "bg-slate-50 rounded-lg p-3",
                    children: [
                      h.jsx("h3", {
                        className: "text-sm font-medium text-slate-700 mb-2",
                        children: r("layout.deviceInfo"),
                      }),
                      h.jsxs("div", {
                        className: "text-xs text-slate-600 space-y-1",
                        children: [
                          h.jsxs("div", {
                            children: [
                              "Device: ",
                              i ? "Mobile" : a ? "Tablet" : "Desktop",
                            ],
                          }),
                          h.jsxs("div", { children: ["Orientation: ", u] }),
                          h.jsxs("div", {
                            children: [
                              "Screen: ",
                              window.innerWidth,
                              "x",
                              window.innerHeight,
                              "px",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    children: h.jsxs("label", {
                      className: "flex items-center justify-between",
                      children: [
                        h.jsxs("div", {
                          children: [
                            h.jsx("div", {
                              className: "font-medium text-slate-800",
                              children: r("layout.compactMode"),
                            }),
                            h.jsx("div", {
                              className: "text-sm text-slate-600",
                              children: r("layout.compactModeDesc"),
                            }),
                          ],
                        }),
                        h.jsx("input", {
                          type: "checkbox",
                          checked: d.compactMode,
                          onChange: (w) => m("compactMode", w.target.checked),
                          className:
                            "ml-3 rounded border-slate-300 text-blue-600 focus:ring-blue-500",
                        }),
                      ],
                    }),
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("label", {
                        className: "block font-medium text-slate-800 mb-2",
                        children: r("layout.fontSize"),
                      }),
                      h.jsxs("select", {
                        value: d.fontSize,
                        onChange: (w) => m("fontSize", w.target.value),
                        className:
                          "w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500",
                        title: r("layout.fontSize"),
                        "aria-label": r("layout.fontSize"),
                        children: [
                          h.jsx("option", {
                            value: "small",
                            children: r("layout.fontSmall"),
                          }),
                          h.jsx("option", {
                            value: "medium",
                            children: r("layout.fontMedium"),
                          }),
                          h.jsx("option", {
                            value: "large",
                            children: r("layout.fontLarge"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("label", {
                        className: "block font-medium text-slate-800 mb-2",
                        children: r("layout.gridDensity"),
                      }),
                      h.jsx("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: ["compact", "comfortable", "spacious"].map(
                          (w) =>
                            h.jsx(
                              "button",
                              {
                                onClick: () => m("gridDensity", w),
                                className: `px-3 py-2 text-xs rounded-md border transition-colors ${
                                  d.gridDensity === w
                                    ? "bg-blue-100 border-blue-300 text-blue-700"
                                    : "bg-white border-slate-300 text-slate-600 hover:border-slate-400"
                                }`,
                                children: r(`layout.${w}`),
                              },
                              w
                            )
                        ),
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("label", {
                        className: "block font-medium text-slate-800 mb-2",
                        children: r("layout.theme"),
                      }),
                      h.jsxs("select", {
                        value: d.theme,
                        onChange: (w) => m("theme", w.target.value),
                        className:
                          "w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500",
                        title: r("layout.theme"),
                        "aria-label": r("layout.theme"),
                        children: [
                          h.jsx("option", {
                            value: "light",
                            children: r("layout.lightTheme"),
                          }),
                          h.jsx("option", {
                            value: "dark",
                            children: r("layout.darkTheme"),
                          }),
                          h.jsx("option", {
                            value: "auto",
                            children: r("layout.autoTheme"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    children: h.jsxs("label", {
                      className: "flex items-center justify-between",
                      children: [
                        h.jsxs("div", {
                          children: [
                            h.jsx("div", {
                              className: "font-medium text-slate-800",
                              children: r("layout.showOrientation"),
                            }),
                            h.jsx("div", {
                              className: "text-sm text-slate-600",
                              children: r("layout.showOrientationDesc"),
                            }),
                          ],
                        }),
                        h.jsx("input", {
                          type: "checkbox",
                          checked: d.showOrientation,
                          onChange: (w) =>
                            m("showOrientation", w.target.checked),
                          className:
                            "ml-3 rounded border-slate-300 text-blue-600 focus:ring-blue-500",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "sticky bottom-0 bg-slate-50 px-4 py-3 flex gap-2",
                children: [
                  h.jsx("button", {
                    onClick: v,
                    className:
                      "flex-1 px-4 py-2 text-sm text-slate-600 border border-slate-300 rounded-md hover:bg-slate-100",
                    children: r("layout.resetDefaults"),
                  }),
                  h.jsx("button", {
                    onClick: n,
                    className:
                      "flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700",
                    children: r("layout.done"),
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  );
}
function $v() {
  var fe;
  const { t: o } = pt(),
    { user: n } = Rr(),
    { isMobile: r, isTablet: i, orientation: a, screenWidth: u } = ao(),
    [d, p] = K.useState([]),
    [m, g] = K.useState([]),
    [v, w] = K.useState([]),
    [x, S] = K.useState(!0),
    [_, L] = K.useState(""),
    [P, q] = K.useState(""),
    [W, A] = K.useState(""),
    [R, Q] = K.useState(!1),
    [B, M] = K.useState(""),
    [Y, pe] = K.useState(!1),
    oe = async () => {
      const j = zt();
      if (j)
        try {
          const {
              data: { user: U },
              error: D,
            } = await j.auth.getUser(),
            { data: C, error: I } = await j
              .from("profiles")
              .select("id, email")
              .limit(5),
            { data: re, error: ue } = await j
              .from("profiles")
              .select("*")
              .limit(5);
          if (U) {
            const { data: me, error: de } = await j
              .from("profiles")
              .select("*")
              .eq("id", U.id)
              .maybeSingle();
          }
        } catch (U) {
          console.error("Test profiles access failed:", U);
        }
    },
    ge = async () => {
      var j;
      try {
        S(!0);
        const U = zt();
        if (!U) return;
        const { data: D, error: C } = await U.from("profiles")
          .select("*")
          .order("created_at", { ascending: !1 });
        if (C) {
          if ((console.error("Error loading users:", C), C.code === "42P17")) {
            const {
              data: { user: de },
            } = await U.auth.getUser();
            de &&
              p([
                {
                  id: de.id,
                  email: de.email || "",
                  role: "admin",
                  display_name:
                    ((j = de.user_metadata) == null
                      ? void 0
                      : j.display_name) || null,
                  created_at: new Date().toISOString(),
                },
              ]);
          }
        } else p(D || []);
        const { data: I, error: re } = await U.from("cabinets")
          .select("*")
          .order("name");
        re || g(I || []);
        const { data: ue, error: me } = await U.from("user_cabinets").select(`
          user_id,
          cabinet_id,
          cabinets!inner(id, name, location, capacity),
          profiles!inner(id, email, display_name, role)
        `);
        me || w(ue || []);
      } catch (U) {
        console.error("Error loading admin data:", U);
      } finally {
        S(!1);
      }
    };
  K.useEffect(() => {
    (n == null ? void 0 : n.role) === "admin" && ge();
  }, [n]);
  const Pe = async () => {
      if (!(!_ || !P))
        try {
          const j = zt();
          if (!j) return;
          const { error: U } = await j
            .from("user_cabinets")
            .insert({ user_id: _, cabinet_id: P });
          if (U) throw U;
          await ge(), L(""), q("");
        } catch (j) {
          console.error("Error assigning cabinet:", j);
        }
    },
    Ae = async (j, U) => {
      try {
        const D = zt();
        if (!D) return;
        const { error: C } = await D.from("user_cabinets")
          .delete()
          .eq("user_id", j)
          .eq("cabinet_id", U);
        if (C) throw C;
        w((I) => I.filter((re) => !(re.user_id === j && re.cabinet_id === U)));
      } catch (D) {
        console.error("Error removing cabinet assignment:", D);
      }
    },
    ae = async (j, U) => {
      try {
        const D = zt();
        if (!D) return;
        const { error: C } = await D.from("profiles")
          .update({ role: U })
          .eq("id", j);
        if (C) throw C;
        p((I) => I.map((re) => (re.id === j ? { ...re, role: U } : re)));
      } catch (D) {
        console.error("Error updating user role:", D);
      }
    },
    ye = async (j) => {
      if (confirm(o("adminPanel.confirmDeleteUser")))
        try {
          const U = zt();
          if (!U) return;
          await U.from("user_cabinets").delete().eq("user_id", j);
          const { error: D } = await U.from("profiles").delete().eq("id", j);
          if (D) throw D;
          p((C) => C.filter((I) => I.id !== j)),
            w((C) => C.filter((I) => I.user_id !== j));
        } catch (U) {
          console.error("Error deleting user:", U);
        }
    },
    Se = async () => {
      var I, re, ue, me, de, be, $;
      if (!W || W.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự");
        return;
      }
      if (!B) return;
      const j = `last_password_reset_${B}`,
        U = localStorage.getItem(j),
        D = Date.now(),
        C = 6e4;
      if (U && D - parseInt(U) < C) {
        const J = Math.ceil((C - (D - parseInt(U))) / 1e3);
        alert(`Vui lòng đợi ${J} giây trước khi thử lại`);
        return;
      }
      try {
        const J = zt();
        if (!J) {
          alert("Supabase không được cấu hình");
          return;
        }
        const {
          data: { session: ne },
          error: Ce,
        } = await J.auth.getSession();
        if (Ce) {
          console.error("Session error:", Ce),
            alert("Lỗi session. Vui lòng đăng nhập lại.");
          return;
        }
        const Fe = d.find((De) => De.id === B);
        if (!Fe || !Fe.email) {
          console.error("User email not found"),
            alert("Không tìm thấy thông tin người dùng");
          return;
        }
        const Le =
          (n == null ? void 0 : n.email) ||
          ((I = ne == null ? void 0 : ne.user) == null ? void 0 : I.email);
        if (!Le) {
          alert("Không thể xác định thông tin admin");
          return;
        }
        localStorage.setItem(j, D.toString());
        try {
          await cv(Le, Fe.email, W),
            alert(`🎉 Mật khẩu đã được đổi thành công cho ${Fe.email}`),
            Q(!1),
            A(""),
            M("");
          return;
        } catch (De) {
          throw (
            (console.error("Edge Function failed:", De),
            ((re = De.message) != null && re.includes("not available")) ||
            ((ue = De.message) != null && ue.includes("not found")) ||
            ((me = De.message) != null && me.includes("CORS")) ||
            ((de = De.message) != null && de.includes("Failed to fetch"))
              ? alert(
                  "❌ Edge Function chưa được deploy hoặc có lỗi CORS. Không thể đổi mật khẩu."
                )
              : (be = De.message) != null && be.includes("Too many requests")
              ? alert(
                  "🚫 Quá nhiều yêu cầu. Vui lòng đợi vài phút rồi thử lại."
                )
              : ($ = De.message) != null && $.includes("Access denied")
              ? alert(
                  "� Không có quyền truy cập. Chỉ admin mới có thể đổi mật khẩu."
                )
              : alert(`❌ Không thể đổi mật khẩu: ${De.message}`),
            De)
          );
        }
      } catch (J) {
        console.error("Error resetting password:", J),
          alert(`❌ Lỗi khi đặt lại mật khẩu: ${J.message || J}`);
      }
    };
  return (n == null ? void 0 : n.role) !== "admin"
    ? h.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-slate-50",
        children: h.jsxs("div", {
          className: "text-center",
          children: [
            h.jsx("h2", {
              className: "text-2xl font-bold text-slate-800 mb-4",
              children: o("adminPanel.accessDenied"),
            }),
            h.jsx("p", {
              className: "text-slate-600",
              children: o("adminPanel.adminOnly"),
            }),
          ],
        }),
      })
    : x
    ? h.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-slate-50",
        children: h.jsx("div", {
          className:
            "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600",
        }),
      })
    : h.jsxs(h.Fragment, {
        children: [
          h.jsx(Rv, { suggestedOrientation: "landscape", showFor: "mobile" }),
          h.jsx("div", {
            className: "min-h-screen bg-slate-50 p-2 sm:p-4",
            children: h.jsxs("div", {
              className: "max-w-6xl mx-auto space-y-4",
              children: [
                h.jsx("div", {
                  className: "bg-white rounded-lg border p-3 sm:p-4",
                  children: h.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3",
                    children: [
                      h.jsxs("div", {
                        children: [
                          h.jsx("h1", {
                            className:
                              "text-lg sm:text-xl font-semibold text-slate-800",
                            children: o("adminPanel.panel"),
                          }),
                          h.jsxs("p", {
                            className: "text-xs sm:text-sm text-slate-500",
                            children: [
                              d.length,
                              " ",
                              o("adminPanel.users"),
                              " • ",
                              m.length,
                              " ",
                              o("adminPanel.cabinets"),
                              r && ` • ${u}px`,
                            ],
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                          (r || i) && h.jsx(Lv, { className: "mr-2" }),
                          r &&
                            a === "portrait" &&
                            h.jsx("div", {
                              className:
                                "text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded mr-2",
                              children: o("orientation.recommendLandscape"),
                            }),
                          h.jsx("button", {
                            onClick: () => pe(!0),
                            className:
                              "p-1.5 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors",
                            title: o("layout.settings"),
                            children: h.jsx("svg", {
                              className: "w-4 h-4",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              children: h.jsx("path", {
                                d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
                              }),
                            }),
                          }),
                          h.jsx("button", {
                            onClick: oe,
                            className:
                              "px-2 sm:px-3 py-1.5 bg-amber-500 text-white rounded text-xs font-medium hover:bg-amber-600",
                            children: "Debug",
                          }),
                          h.jsx("button", {
                            onClick: ge,
                            className:
                              "px-3 py-1.5 bg-blue-500 text-white rounded text-xs font-medium hover:bg-blue-600",
                            children: "Reload",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                h.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    h.jsxs("div", {
                      className: "bg-white rounded-lg border p-3 sm:p-4",
                      children: [
                        h.jsx("h2", {
                          className:
                            "text-base sm:text-lg font-medium text-slate-800 mb-3 sm:mb-4",
                          children: o("adminPanel.assignCabinet"),
                        }),
                        h.jsxs("div", {
                          className: `grid gap-3 sm:gap-4 ${
                            r && a === "portrait"
                              ? "grid-cols-1"
                              : r && a === "landscape"
                              ? "grid-cols-2 lg:grid-cols-4"
                              : "grid-cols-1 lg:grid-cols-4"
                          }`,
                          children: [
                            h.jsxs("div", {
                              className: "lg:col-span-1",
                              children: [
                                h.jsx("label", {
                                  className:
                                    "block text-xs sm:text-sm font-medium text-slate-700 mb-2",
                                  children: o("adminPanel.selectUser"),
                                }),
                                h.jsxs("select", {
                                  value: _,
                                  onChange: (j) => L(j.target.value),
                                  className:
                                    "w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:ring-2 focus:ring-blue-500",
                                  title: o("adminPanel.selectUser"),
                                  children: [
                                    h.jsx("option", {
                                      value: "",
                                      children: o("adminPanel.selectUser"),
                                    }),
                                    d
                                      .filter((j) => j.role === "user")
                                      .map((j) =>
                                        h.jsx(
                                          "option",
                                          {
                                            value: j.id,
                                            children: j.display_name
                                              ? `${j.display_name}`
                                              : j.email.split("@")[0],
                                          },
                                          j.id
                                        )
                                      ),
                                  ],
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "lg:col-span-1",
                              children: [
                                h.jsx("label", {
                                  className:
                                    "block text-xs sm:text-sm font-medium text-slate-700 mb-2",
                                  children: o("adminPanel.selectCabinet"),
                                }),
                                h.jsxs("select", {
                                  value: P,
                                  onChange: (j) => q(j.target.value),
                                  className:
                                    "w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md focus:ring-2 focus:ring-blue-500",
                                  title: o("adminPanel.selectCabinet"),
                                  children: [
                                    h.jsx("option", {
                                      value: "",
                                      children: o("adminPanel.selectCabinet"),
                                    }),
                                    m.map((j) =>
                                      h.jsx(
                                        "option",
                                        {
                                          value: j.id,
                                          children: r
                                            ? `${j.name} (${j.capacity}A)`
                                            : `${j.name} - ${j.location} (${j.capacity}A)`,
                                        },
                                        j.id
                                      )
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "lg:col-span-1",
                              children: [
                                h.jsx("label", {
                                  className:
                                    "block text-xs sm:text-sm font-medium text-slate-700 mb-2",
                                  children: o("adminPanel.selectedUser"),
                                }),
                                h.jsx("div", {
                                  className:
                                    "px-2 sm:px-3 py-2 text-xs sm:text-sm border rounded-md bg-slate-50 min-h-[36px] sm:min-h-[38px] flex items-center",
                                  children: _
                                    ? (() => {
                                        const j = d.find((D) => D.id === _),
                                          U = v.filter((D) => D.user_id === _);
                                        return j
                                          ? h.jsxs("div", {
                                              className:
                                                "flex items-center gap-1 sm:gap-2",
                                              children: [
                                                h.jsx("div", {
                                                  className:
                                                    "w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center",
                                                  children: h.jsx("span", {
                                                    className:
                                                      "text-blue-600 font-medium text-xs",
                                                    children: (
                                                      j.display_name || j.email
                                                    )
                                                      .charAt(0)
                                                      .toUpperCase(),
                                                  }),
                                                }),
                                                h.jsxs("div", {
                                                  children: [
                                                    h.jsx("div", {
                                                      className:
                                                        "font-medium text-slate-800 text-xs sm:text-sm",
                                                      children: r
                                                        ? (
                                                            j.display_name ||
                                                            j.email.split(
                                                              "@"
                                                            )[0]
                                                          ).slice(0, 15) + "..."
                                                        : j.display_name ||
                                                          j.email.split("@")[0],
                                                    }),
                                                    h.jsxs("div", {
                                                      className:
                                                        "text-xs text-slate-500",
                                                      children: [
                                                        U.length,
                                                        " ",
                                                        o(
                                                          "adminPanel.assignedCabinets"
                                                        ),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            })
                                          : o("adminPanel.userNotFound");
                                      })()
                                    : h.jsx("span", {
                                        className: "text-slate-500",
                                        children: o(
                                          "adminPanel.noUserSelected"
                                        ),
                                      }),
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "lg:col-span-1",
                              children: [
                                h.jsx("label", {
                                  className:
                                    "block text-xs sm:text-sm font-medium text-slate-700 mb-2",
                                  children: " ",
                                }),
                                h.jsx("button", {
                                  onClick: Pe,
                                  disabled: !_ || !P,
                                  className:
                                    "w-full px-3 sm:px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
                                  children: o("adminPanel.assign"),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: `grid gap-4 ${
                        r && a === "portrait"
                          ? "grid-cols-1"
                          : "grid-cols-1 lg:grid-cols-2"
                      }`,
                      children: [
                        h.jsxs("div", {
                          className: "bg-white rounded-lg border p-3 sm:p-4",
                          children: [
                            h.jsxs("h2", {
                              className:
                                "text-base sm:text-lg font-medium text-slate-800 mb-3",
                              children: [
                                o("adminPanel.users"),
                                " (",
                                d.filter((j) => j.role === "user").length,
                                ")",
                              ],
                            }),
                            d.filter((j) => j.role === "user").length === 0
                              ? h.jsx("div", {
                                  className:
                                    "text-center py-4 text-slate-500 text-xs sm:text-sm",
                                  children: o("adminPanel.noUsers"),
                                })
                              : h.jsx("div", {
                                  className: `space-y-2 ${
                                    r ? "max-h-48" : "max-h-64"
                                  } overflow-y-auto`,
                                  children: d
                                    .filter((j) => j.role === "user")
                                    .map((j) => {
                                      const U = v.filter(
                                          (C) => C.user_id === j.id
                                        ),
                                        D = _ === j.id;
                                      return h.jsxs(
                                        "div",
                                        {
                                          className: `flex items-center justify-between p-2 rounded-md border cursor-pointer transition-all ${
                                            D
                                              ? "border-blue-400 bg-blue-50"
                                              : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                          }`,
                                          onClick: () => L(j.id),
                                          children: [
                                            h.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 flex-1 min-w-0",
                                              children: [
                                                h.jsx("div", {
                                                  className: `w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                                    D
                                                      ? "bg-blue-100 text-blue-700"
                                                      : "bg-slate-100 text-slate-600"
                                                  }`,
                                                  children: (
                                                    j.display_name || j.email
                                                  )
                                                    .charAt(0)
                                                    .toUpperCase(),
                                                }),
                                                h.jsxs("div", {
                                                  className: "flex-1 min-w-0",
                                                  children: [
                                                    h.jsx("div", {
                                                      className:
                                                        "font-medium text-slate-800 text-xs sm:text-sm truncate",
                                                      children: r
                                                        ? (
                                                            j.display_name ||
                                                            o(
                                                              "adminPanel.noName"
                                                            )
                                                          ).slice(0, 12) + "..."
                                                        : j.display_name ||
                                                          o(
                                                            "adminPanel.noName"
                                                          ),
                                                    }),
                                                    h.jsx("div", {
                                                      className:
                                                        "text-xs text-slate-500 truncate",
                                                      children: r
                                                        ? j.email.split(
                                                            "@"
                                                          )[0] + "..."
                                                        : j.email,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            h.jsxs("div", {
                                              className:
                                                "flex items-center gap-1 sm:gap-2 text-xs text-slate-500",
                                              children: [
                                                h.jsxs("span", {
                                                  className: `px-1 sm:px-2 py-0.5 rounded-full text-xs ${
                                                    U.length > 0
                                                      ? "bg-green-100 text-green-700"
                                                      : "bg-slate-100 text-slate-600"
                                                  }`,
                                                  children: [
                                                    U.length,
                                                    " ",
                                                    r
                                                      ? "tủ"
                                                      : o(
                                                          "adminPanel.cabinets"
                                                        ),
                                                  ],
                                                }),
                                                D &&
                                                  h.jsx("div", {
                                                    className:
                                                      "w-2 h-2 bg-blue-500 rounded-full",
                                                  }),
                                              ],
                                            }),
                                          ],
                                        },
                                        j.id
                                      );
                                    }),
                                }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "bg-white rounded-lg border p-4",
                          children: [
                            h.jsx("h2", {
                              className:
                                "text-lg font-medium text-slate-800 mb-3",
                              children: o("adminPanel.accountManagement"),
                            }),
                            h.jsx("div", {
                              className: "space-y-2 max-h-48 overflow-y-auto",
                              children: d.map((j) =>
                                h.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center justify-between p-2 border rounded text-sm",
                                    children: [
                                      h.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          h.jsx("div", {
                                            className:
                                              "font-medium text-slate-800 truncate",
                                            children:
                                              j.display_name ||
                                              j.email.split("@")[0],
                                          }),
                                          h.jsx("div", {
                                            className:
                                              "text-xs text-slate-500 truncate",
                                            children: j.email,
                                          }),
                                        ],
                                      }),
                                      h.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 ml-2",
                                        children: [
                                          h.jsxs("select", {
                                            value: j.role,
                                            onChange: (U) =>
                                              ae(j.id, U.target.value),
                                            className:
                                              "text-xs border rounded px-1 py-0.5",
                                            title: o("adminPanel.changeRole"),
                                            children: [
                                              h.jsx("option", {
                                                value: "user",
                                                children: o("adminPanel.user"),
                                              }),
                                              h.jsx("option", {
                                                value: "admin",
                                                children: o("adminPanel.admin"),
                                              }),
                                            ],
                                          }),
                                          h.jsx("button", {
                                            onClick: () => {
                                              M(j.id), Q(!0);
                                            },
                                            className:
                                              "text-blue-600 hover:text-blue-800 text-xs font-medium px-1",
                                            title: o(
                                              "adminPanel.changePassword"
                                            ),
                                            children: "PW",
                                          }),
                                          h.jsx("button", {
                                            onClick: () => ye(j.id),
                                            className:
                                              "text-red-600 hover:text-red-800 text-xs font-medium px-1",
                                            title: o("adminPanel.delete"),
                                            children: "×",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  j.id
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "bg-white rounded-lg border p-4",
                  children: [
                    h.jsx("h2", {
                      className: "text-lg font-medium text-slate-800 mb-3",
                      children: o("adminPanel.cabinetAssignments"),
                    }),
                    h.jsx("div", {
                      className: "space-y-3 max-h-64 overflow-y-auto",
                      children: d
                        .filter((j) => j.role === "user")
                        .map((j) => {
                          const U = v.filter((D) => D.user_id === j.id);
                          return h.jsxs(
                            "div",
                            {
                              className: "border rounded-lg p-3",
                              children: [
                                h.jsxs("div", {
                                  className: "flex items-center gap-2 mb-2",
                                  children: [
                                    h.jsx("div", {
                                      className:
                                        "w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-medium text-slate-600",
                                      children: (j.display_name || j.email)
                                        .charAt(0)
                                        .toUpperCase(),
                                    }),
                                    h.jsx("div", {
                                      className:
                                        "font-medium text-sm text-slate-800",
                                      children:
                                        j.display_name || j.email.split("@")[0],
                                    }),
                                  ],
                                }),
                                h.jsx("div", {
                                  className: "flex flex-wrap gap-1",
                                  children:
                                    U.length === 0
                                      ? h.jsx("span", {
                                          className: "text-xs text-slate-500",
                                          children: o(
                                            "adminPanel.noAssignments"
                                          ),
                                        })
                                      : U.map(({ cabinets: D }) =>
                                          h.jsxs(
                                            "div",
                                            {
                                              className:
                                                "bg-slate-50 border rounded px-2 py-1 text-xs flex items-center gap-1",
                                              children: [
                                                h.jsx("span", {
                                                  className: "font-medium",
                                                  children: D.name,
                                                }),
                                                h.jsx("button", {
                                                  onClick: () => Ae(j.id, D.id),
                                                  className:
                                                    "text-red-500 hover:text-red-700 font-bold",
                                                  children: "✕",
                                                }),
                                              ],
                                            },
                                            D.id
                                          )
                                        ),
                                }),
                              ],
                            },
                            j.id
                          );
                        }),
                    }),
                  ],
                }),
                R &&
                  h.jsx("div", {
                    className:
                      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6",
                    children: h.jsxs("div", {
                      className: "bg-white rounded-lg p-3 sm:p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-2 sm:mx-4",
                      children: [
                        h.jsx("h3", {
                          className: "text-sm sm:text-base md:text-lg font-medium text-slate-800 mb-3 sm:mb-4",
                          children: "Đặt lại mật khẩu người dùng",
                        }),
                        h.jsxs("div", {
                          className: "mb-4",
                          children: [
                            h.jsx("label", {
                              className:
                                "block text-sm font-medium text-slate-700 mb-2",
                              children: "Người dùng:",
                            }),
                            h.jsx("p", {
                              className:
                                "text-sm text-slate-600 bg-slate-50 p-2 rounded border",
                              children:
                                ((fe = d.find((j) => j.id === B)) == null
                                  ? void 0
                                  : fe.email) || "Unknown User",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-4",
                          children: [
                            h.jsxs("label", {
                              className:
                                "block text-sm font-medium text-slate-700 mb-2",
                              children: [
                                "Mật khẩu mới: ",
                                h.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            h.jsx("input", {
                              type: "password",
                              value: W,
                              onChange: (j) => A(j.target.value),
                              placeholder:
                                "Nhập mật khẩu mới (tối thiểu 6 ký tự)",
                              className:
                                "w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                              minLength: 6,
                            }),
                            h.jsx("p", {
                              className: "text-xs text-slate-500 mt-1",
                              children: "Mật khẩu phải có ít nhất 6 ký tự",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className:
                            "bg-blue-50 border border-blue-200 rounded p-3 mb-4",
                          children: [
                            h.jsxs("p", {
                              className: "text-xs text-blue-800",
                              children: [
                                h.jsx("strong", { children: "Lưu ý:" }),
                                " Chức năng này yêu cầu Edge Function được deploy.",
                                h.jsx("br", {}),
                                "Admin có thể đặt mật khẩu trực tiếp mà không cần gửi email.",
                                h.jsx("br", {}),
                                h.jsx("strong", { children: "Bảo mật:" }),
                                " Có giới hạn 1 lần reset mỗi phút để tránh lạm dụng.",
                              ],
                            }),
                            h.jsx("button", {
                              onClick: async () => {
                                const j = zt();
                                if (j) {
                                  const {
                                    data: { session: U },
                                  } = await j.auth.getSession();
                                  alert(`Session: ${
                                    U
                                      ? `✅ Active - ${U.user.email}`
                                      : "❌ No session"
                                  }
Edge Function URL: https://vzudkwjhxncnrczzulmj.supabase.co/functions/v1/admin-reset-password`);
                                }
                              },
                              className:
                                "mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200",
                              children: "🔍 Kiểm tra trạng thái",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            h.jsx("button", {
                              onClick: () => {
                                Q(!1), A(""), M("");
                              },
                              className:
                                "flex-1 px-4 py-2 text-slate-600 border rounded-md hover:bg-slate-50 text-sm",
                              children: "Hủy bỏ",
                            }),
                            h.jsx("button", {
                              onClick: Se,
                              disabled: !W || W.length < 6,
                              className:
                                "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium",
                              children: "🔐 Đặt mật khẩu ngay",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                h.jsx(Iv, { isOpen: Y, onClose: () => pe(!1) }),
              ],
            }),
          }),
        ],
      });
}
const Dv = () => {
    console.log("=== ASSET PATH TESTING ==="),
      console.log("Environment:", {
        isElectron: wh(),
        isDev: !1,
        userAgent: navigator.userAgent,
      }),
      console.log(`
--- Layout Paths ---`),
      console.log("Floor 1:", en(1)),
      console.log("Floor 2:", en(2)),
      console.log(`
--- Icon Paths ---`),
      console.log("Logo:", Ve("logo.svg")),
      console.log("US Flag:", Ve("us.svg")),
      console.log("VI Flag:", Ve("vi.svg")),
      console.log("KO Flag:", Ve("ko.svg")),
      console.log("On Status:", Ve("on_status.svg")),
      console.log("Off Status:", Ve("off_status.svg")),
      console.log(`
--- Cabinet Icons ---`),
      console.log("On Icon:", At("src/assets/on.svg")),
      console.log("Off Icon:", At("src/assets/off.svg")),
      console.log(`
--- Direct Asset Tests ---`),
      console.log("Direct path test:", At("/src/assets/layout.svg")),
      console.log("Relative path test:", At("src/assets/layout.svg"));
  },
  Uv = async () => {
    const o = [
        { name: "Layout Floor 1", path: en(1) },
        { name: "Layout Floor 2", path: en(2) },
        { name: "Logo", path: Ve("logo.svg") },
        { name: "US Flag", path: Ve("us.svg") },
        { name: "Vietnam Flag", path: Ve("vi.svg") },
        { name: "Korea Flag", path: Ve("ko.svg") },
        { name: "On Status Icon", path: Ve("on_status.svg") },
        { name: "Off Status Icon", path: Ve("off_status.svg") },
        { name: "Cabinet On Icon", path: At("src/assets/on.svg") },
        { name: "Cabinet Off Icon", path: At("src/assets/off.svg") },
      ],
      n = { success: [], failed: [] };
    for (const r of o)
      try {
        const i = await fetch(r.path);
        i.ok
          ? n.success.push(`✅ ${r.name}: ${r.path}`)
          : n.failed.push(`❌ ${r.name}: ${r.path} (${i.status})`);
      } catch (i) {
        n.failed.push(`❌ ${r.name}: ${r.path} (${i})`);
      }
    return n;
  },
  Fv = () =>
    new Promise((o) => {
      const n = [
        en(1),
        en(2),
        Ve("logo.svg"),
        At("src/assets/on.svg"),
        At("src/assets/off.svg"),
      ];
      let r = 0,
        i = 0;
      n.forEach((a) => {
        const u = new Image();
        (u.onload = () => {
          r++, console.log(`✅ Loaded: ${a}`), r + i === n.length && o();
        }),
          (u.onerror = () => {
            i++,
              console.log(`❌ Failed to load: ${a}`),
              r + i === n.length && o();
          }),
          (u.src = a);
      });
    });
typeof window < "u" &&
  ((window.testAssetPaths = Dv),
  (window.verifyAssetPaths = Uv),
  (window.testImageLoading = Fv));
const yl = 7200 * 1e3,
  Mv = 120 * 1e3,
  zv = 300 * 1e3,
  Wl = "electrical_cabinet_current_route",
  Bv = (o) => {
    try {
      localStorage.setItem(Wl, o);
    } catch (n) {
      console.warn("Failed to save current route:", n);
    }
  },
  Xi = (o) => {
    try {
      const n = localStorage.getItem(Wl);
      if (n && ["layout", "stats", "control", "admin"].includes(n)) {
        const r = n;
        return r === "admin" && o !== "admin" ? "layout" : r;
      }
    } catch (n) {
      console.warn("Failed to get saved route:", n);
    }
    return "layout";
  };
function Vv() {
  const [o, n] = K.useState("layout"),
    [r, i] = K.useState(!1),
    [a, u] = K.useState(!0),
    [d, p] = K.useState(!1),
    [showLoginForm, setShowLoginForm] = K.useState(!1),
    { user: m, setUser: g, clearUser: v } = Rr(),
    { t: w } = pt(),
    x = K.useRef(Date.now()),
    S = K.useRef(),
    _ = zt(),
    L = K.useCallback(() => {
      (x.current = Date.now()), p(!1);
    }, []),
    P = K.useCallback(() => {
      const M = Date.now() - x.current;
      M > yl ? (p(!1), W()) : M > yl - Mv && (d || p(!0));
    }, [d]);
  K.useEffect(() => {
    const B = [
        "mousedown",
        "mousemove",
        "keypress",
        "scroll",
        "touchstart",
        "click",
      ],
      M = () => {
        L();
      };
    return (
      B.forEach((Y) => {
        document.addEventListener(Y, M, !0);
      }),
      (S.current = setInterval(P, zv)),
      () => {
        B.forEach((Y) => {
          document.removeEventListener(Y, M, !0);
        }),
          S.current && clearInterval(S.current);
      }
    );
  }, [L, P]),
    K.useEffect(() => {
      (async () => {
        try {
          u(!0);
          const M = hl();
          if (M && M.user && M.user.id) {
            const Y = Date.now();
            if (Y - M.lastActivity < yl)
              if (_)
                try {
                  const oe = await jf(M.user.id),
                    ge = {
                      id: M.user.id,
                      email: oe.email,
                      role: oe.role,
                      display_name: oe.display_name,
                    };
                  Ss({ user: ge, lastActivity: Y }),
                    g(ge),
                    i(!0),
                    (x.current = Y);
                  const Pe = Xi(ge.role);
                  n(Pe);
                  return;
                } catch {
                  ks();
                }
              else {
                g(M.user), i(!0), (x.current = Y);
                const oe = Xi(M.user.role);
                n(oe);
                return;
              }
            else ks();
          }
        } catch (M) {
          console.error("Error initializing session:", M), ks();
        } finally {
          u(!1);
        }
      })();
    }, []);
  const q = async (B) => {
      var M;
      try {
        u(!0), ks(), v();
        let Y;
        if (_) {
          const {
              data: { session: oe },
              error: ge,
            } = await _.auth.getSession(),
            Pe = await jf(B.id);
          (Y = {
            id: B.id,
            email: Pe.email,
            role: Pe.role,
            display_name: Pe.display_name,
          }),
            (M = oe == null ? void 0 : oe.user) != null &&
              M.email &&
              oe.user.email !== Y.email &&
              console.warn("Session email mismatch:", {
                sessionEmail: oe.user.email,
                profileEmail: Y.email,
              });
        } else Y = B;
        Ss({ user: Y, lastActivity: Date.now() }), g(Y), i(!0), L();
        const pe = Xi(Y.role);
        n(pe);
        setShowLoginForm(!1);
      } catch (Y) {
        console.error("Error getting user profile:", Y);
        const pe = B;
        Ss({ user: pe, lastActivity: Date.now() }), g(pe), i(!0), L();
        const oe = Xi(pe.role);
        n(oe);
        setShowLoginForm(!1);
      } finally {
        u(!1);
      }
    },
    W = async () => {
      try {
        _ && (await _.auth.signOut()), ks(), n("layout");
        try {
          localStorage.removeItem(Wl);
        } catch (B) {
          console.warn("Failed to clear saved route:", B);
        }
        try {
          localStorage.removeItem("ecm_credentials"),
            localStorage.removeItem("ecm_session"),
            localStorage.removeItem("electrical_cabinet_language");
        } catch (B) {
          console.warn("Error clearing localStorage:", B);
        }
        S.current && clearInterval(S.current),
          v(),
          i(!1),
          p(!1),
          n("layout"),
          u(!1),
          setShowLoginForm(!1);
      } catch (B) {
        console.error("Logout error:", B), v(), i(!1), p(!1), n("layout"), setShowLoginForm(!1);
      }
    },
    A = K.useCallback(() => {
      L(), p(!1);
      const B = hl();
      B && Ss({ ...B, lastActivity: Date.now() });
    }, [L]),
    R = (B) => {
      n(B), Bv(B), L();
      const M = hl();
      M && Ss({ ...M, lastActivity: Date.now() });
    };
  if (a)
    return h.jsx("div", {
      className: "min-h-screen bg-gray-100 flex items-center justify-center",
      children: h.jsxs("div", {
        className: "text-center",
        children: [
          h.jsx("div", {
            className:
              "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4",
          }),
          h.jsx("p", { className: "text-gray-600", children: w("loading") }),
        ],
      }),
    });
  
  if (showLoginForm)
    return h.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",
      children: h.jsx(dv, { onAuthSuccess: q }),
    });
  
  const Q = () => {
    switch (o) {
      case "layout":
        return h.jsx(If, { isAuthenticated: r });
      case "stats":
        return h.jsx(Ov, {});
      case "control":
        return r ? h.jsx(Tv, {}) : h.jsx(If, { isAuthenticated: r });
      case "admin":
        return r ? h.jsx($v, {}) : h.jsx(If, { isAuthenticated: r });
      default:
        return h.jsx(If, { isAuthenticated: r });
    }
  };
  return h.jsxs("div", {
    className: "min-h-screen bg-gray-100 flex flex-col",
    children: [
      h.jsx(jv, { 
        currentRoute: o, 
        onRouteChange: R, 
        onLogout: W, 
        user: m,
        isAuthenticated: r,
        onShowLogin: () => setShowLoginForm(!0)
      }),
      h.jsx("main", { className: "flex-1", children: Q() }),
      h.jsx(Cv, { show: d, onExtend: A, onLogout: W }),
      !1,
    ],
  });
}
const ce = (o) => typeof o == "string",
  js = () => {
    let o, n;
    const r = new Promise((i, a) => {
      (o = i), (n = a);
    });
    return (r.resolve = o), (r.reject = n), r;
  },
  Df = (o) => (o == null ? "" : "" + o),
  Wv = (o, n, r) => {
    o.forEach((i) => {
      n[i] && (r[i] = n[i]);
    });
  },
  Hv = /###/g,
  Uf = (o) => (o && o.indexOf("###") > -1 ? o.replace(Hv, ".") : o),
  Ff = (o) => !o || ce(o),
  Os = (o, n, r) => {
    const i = ce(n) ? n.split(".") : n;
    let a = 0;
    for (; a < i.length - 1; ) {
      if (Ff(o)) return {};
      const u = Uf(i[a]);
      !o[u] && r && (o[u] = new r()),
        Object.prototype.hasOwnProperty.call(o, u) ? (o = o[u]) : (o = {}),
        ++a;
    }
    return Ff(o) ? {} : { obj: o, k: Uf(i[a]) };
  },
  Mf = (o, n, r) => {
    const { obj: i, k: a } = Os(o, n, Object);
    if (i !== void 0 || n.length === 1) {
      i[a] = r;
      return;
    }
    let u = n[n.length - 1],
      d = n.slice(0, n.length - 1),
      p = Os(o, d, Object);
    for (; p.obj === void 0 && d.length; )
      (u = `${d[d.length - 1]}.${u}`),
        (d = d.slice(0, d.length - 1)),
        (p = Os(o, d, Object)),
        p && p.obj && typeof p.obj[`${p.k}.${u}`] < "u" && (p.obj = void 0);
    p.obj[`${p.k}.${u}`] = r;
  },
  Kv = (o, n, r, i) => {
    const { obj: a, k: u } = Os(o, n, Object);
    (a[u] = a[u] || []), a[u].push(r);
  },
  no = (o, n) => {
    const { obj: r, k: i } = Os(o, n);
    if (r) return r[i];
  },
  qv = (o, n, r) => {
    const i = no(o, r);
    return i !== void 0 ? i : no(n, r);
  },
  _h = (o, n, r) => {
    for (const i in n)
      i !== "__proto__" &&
        i !== "constructor" &&
        (i in o
          ? ce(o[i]) ||
            o[i] instanceof String ||
            ce(n[i]) ||
            n[i] instanceof String
            ? r && (o[i] = n[i])
            : _h(o[i], n[i], r)
          : (o[i] = n[i]));
    return o;
  },
  Cr = (o) => o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Jv = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const Gv = (o) => (ce(o) ? o.replace(/[&<>"'\/]/g, (n) => Jv[n]) : o);
class Qv {
  constructor(n) {
    (this.capacity = n), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(n) {
    const r = this.regExpMap.get(n);
    if (r !== void 0) return r;
    const i = new RegExp(n);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(n, i),
      this.regExpQueue.push(n),
      i
    );
  }
}
const Yv = [" ", ",", "?", "!", ";"],
  Xv = new Qv(20),
  Zv = (o, n, r) => {
    (n = n || ""), (r = r || "");
    const i = Yv.filter((d) => n.indexOf(d) < 0 && r.indexOf(d) < 0);
    if (i.length === 0) return !0;
    const a = Xv.getRegExp(
      `(${i.map((d) => (d === "?" ? "\\?" : d)).join("|")})`
    );
    let u = !a.test(o);
    if (!u) {
      const d = o.indexOf(r);
      d > 0 && !a.test(o.substring(0, d)) && (u = !0);
    }
    return u;
  },
  Il = function (o, n) {
    let r =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!o) return;
    if (o[n]) return o[n];
    const i = n.split(r);
    let a = o;
    for (let u = 0; u < i.length; ) {
      if (!a || typeof a != "object") return;
      let d,
        p = "";
      for (let m = u; m < i.length; ++m)
        if ((m !== u && (p += r), (p += i[m]), (d = a[p]), d !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof d) > -1 &&
            m < i.length - 1
          )
            continue;
          u += m - u + 1;
          break;
        }
      a = d;
    }
    return a;
  },
  ro = (o) => o && o.replace("_", "-"),
  ey = {
    type: "logger",
    log(o) {
      this.output("log", o);
    },
    warn(o) {
      this.output("warn", o);
    },
    error(o) {
      this.output("error", o);
    },
    output(o, n) {
      console && console[o] && console[o].apply(console, n);
    },
  };
class so {
  constructor(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(n, r);
  }
  init(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = r.prefix || "i18next:"),
      (this.logger = n || ey),
      (this.options = r),
      (this.debug = r.debug);
  }
  log() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return this.forward(r, "log", "", !0);
  }
  warn() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return this.forward(r, "warn", "", !0);
  }
  error() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return this.forward(r, "error", "");
  }
  deprecate() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(n, r, i, a) {
    return a && !this.debug
      ? null
      : (ce(n[0]) && (n[0] = `${i}${this.prefix} ${n[0]}`), this.logger[r](n));
  }
  create(n) {
    return new so(this.logger, {
      prefix: `${this.prefix}:${n}:`,
      ...this.options,
    });
  }
  clone(n) {
    return (
      (n = n || this.options),
      (n.prefix = n.prefix || this.prefix),
      new so(this.logger, n)
    );
  }
}
var Bt = new so();
class lo {
  constructor() {
    this.observers = {};
  }
  on(n, r) {
    return (
      n.split(" ").forEach((i) => {
        this.observers[i] || (this.observers[i] = new Map());
        const a = this.observers[i].get(r) || 0;
        this.observers[i].set(r, a + 1);
      }),
      this
    );
  }
  off(n, r) {
    if (this.observers[n]) {
      if (!r) {
        delete this.observers[n];
        return;
      }
      this.observers[n].delete(r);
    }
  }
  emit(n) {
    for (
      var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1;
      a < r;
      a++
    )
      i[a - 1] = arguments[a];
    this.observers[n] &&
      Array.from(this.observers[n].entries()).forEach((d) => {
        let [p, m] = d;
        for (let g = 0; g < m; g++) p(...i);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((d) => {
          let [p, m] = d;
          for (let g = 0; g < m; g++) p.apply(p, [n, ...i]);
        });
  }
}
class zf extends lo {
  constructor(n) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = n || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(n) {
    this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
  }
  removeNamespaces(n) {
    const r = this.options.ns.indexOf(n);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(n, r, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const u =
        a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      d =
        a.ignoreJSONStructure !== void 0
          ? a.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let p;
    n.indexOf(".") > -1
      ? (p = n.split("."))
      : ((p = [n, r]),
        i &&
          (Array.isArray(i)
            ? p.push(...i)
            : ce(i) && u
            ? p.push(...i.split(u))
            : p.push(i)));
    const m = no(this.data, p);
    return (
      !m &&
        !r &&
        !i &&
        n.indexOf(".") > -1 &&
        ((n = p[0]), (r = p[1]), (i = p.slice(2).join("."))),
      m || !d || !ce(i)
        ? m
        : Il(this.data && this.data[n] && this.data[n][r], i, u)
    );
  }
  addResource(n, r, i, a) {
    let u =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const d =
      u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
    let p = [n, r];
    i && (p = p.concat(d ? i.split(d) : i)),
      n.indexOf(".") > -1 && ((p = n.split(".")), (a = r), (r = p[1])),
      this.addNamespaces(r),
      Mf(this.data, p, a),
      u.silent || this.emit("added", n, r, i, a);
  }
  addResources(n, r, i) {
    let a =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const u in i)
      (ce(i[u]) || Array.isArray(i[u])) &&
        this.addResource(n, r, u, i[u], { silent: !0 });
    a.silent || this.emit("added", n, r, i);
  }
  addResourceBundle(n, r, i, a, u) {
    let d =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      p = [n, r];
    n.indexOf(".") > -1 && ((p = n.split(".")), (a = i), (i = r), (r = p[1])),
      this.addNamespaces(r);
    let m = no(this.data, p) || {};
    d.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      a ? _h(m, i, u) : (m = { ...m, ...i }),
      Mf(this.data, p, m),
      d.silent || this.emit("added", n, r, i);
  }
  removeResourceBundle(n, r) {
    this.hasResourceBundle(n, r) && delete this.data[n][r],
      this.removeNamespaces(r),
      this.emit("removed", n, r);
  }
  hasResourceBundle(n, r) {
    return this.getResource(n, r) !== void 0;
  }
  getResourceBundle(n, r) {
    return (
      r || (r = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(n, r) }
        : this.getResource(n, r)
    );
  }
  getDataByLanguage(n) {
    return this.data[n];
  }
  hasLanguageSomeTranslations(n) {
    const r = this.getDataByLanguage(n);
    return !!((r && Object.keys(r)) || []).find(
      (a) => r[a] && Object.keys(r[a]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var Sh = {
  processors: {},
  addPostProcessor(o) {
    this.processors[o.name] = o;
  },
  handle(o, n, r, i, a) {
    return (
      o.forEach((u) => {
        this.processors[u] && (n = this.processors[u].process(n, r, i, a));
      }),
      n
    );
  },
};
const Bf = {};
class io extends lo {
  constructor(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      Wv(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        n,
        this
      ),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = Bt.create("translator"));
  }
  changeLanguage(n) {
    n && (this.language = n);
  }
  exists(n) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (n == null) return !1;
    const i = this.resolve(n, r);
    return i && i.res !== void 0;
  }
  extractFromKey(n, r) {
    let i = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const a =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let u = r.ns || this.options.defaultNS || [];
    const d = i && n.indexOf(i) > -1,
      p =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !Zv(n, i, a);
    if (d && !p) {
      const m = n.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) return { key: n, namespaces: ce(u) ? [u] : u };
      const g = n.split(i);
      (i !== a || (i === a && this.options.ns.indexOf(g[0]) > -1)) &&
        (u = g.shift()),
        (n = g.join(a));
    }
    return { key: n, namespaces: ce(u) ? [u] : u };
  }
  translate(n, r, i) {
    if (
      (typeof r != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (r = this.options.overloadTranslationOptionHandler(arguments)),
      typeof r == "object" && (r = { ...r }),
      r || (r = {}),
      n == null)
    )
      return "";
    Array.isArray(n) || (n = [String(n)]);
    const a =
        r.returnDetails !== void 0
          ? r.returnDetails
          : this.options.returnDetails,
      u =
        r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
      { key: d, namespaces: p } = this.extractFromKey(n[n.length - 1], r),
      m = p[p.length - 1],
      g = r.lng || this.language,
      v = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (g && g.toLowerCase() === "cimode") {
      if (v) {
        const R = r.nsSeparator || this.options.nsSeparator;
        return a
          ? {
              res: `${m}${R}${d}`,
              usedKey: d,
              exactUsedKey: d,
              usedLng: g,
              usedNS: m,
              usedParams: this.getUsedParamsDetails(r),
            }
          : `${m}${R}${d}`;
      }
      return a
        ? {
            res: d,
            usedKey: d,
            exactUsedKey: d,
            usedLng: g,
            usedNS: m,
            usedParams: this.getUsedParamsDetails(r),
          }
        : d;
    }
    const w = this.resolve(n, r);
    let x = w && w.res;
    const S = (w && w.usedKey) || d,
      _ = (w && w.exactUsedKey) || d,
      L = Object.prototype.toString.apply(x),
      P = ["[object Number]", "[object Function]", "[object RegExp]"],
      q = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
      W = !this.i18nFormat || this.i18nFormat.handleAsObject,
      A = !ce(x) && typeof x != "boolean" && typeof x != "number";
    if (W && x && A && P.indexOf(L) < 0 && !(ce(q) && Array.isArray(x))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const R = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(S, x, { ...r, ns: p })
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return a
          ? ((w.res = R), (w.usedParams = this.getUsedParamsDetails(r)), w)
          : R;
      }
      if (u) {
        const R = Array.isArray(x),
          Q = R ? [] : {},
          B = R ? _ : S;
        for (const M in x)
          if (Object.prototype.hasOwnProperty.call(x, M)) {
            const Y = `${B}${u}${M}`;
            (Q[M] = this.translate(Y, { ...r, joinArrays: !1, ns: p })),
              Q[M] === Y && (Q[M] = x[M]);
          }
        x = Q;
      }
    } else if (W && ce(q) && Array.isArray(x))
      (x = x.join(q)), x && (x = this.extendTranslation(x, n, r, i));
    else {
      let R = !1,
        Q = !1;
      const B = r.count !== void 0 && !ce(r.count),
        M = io.hasDefaultValue(r),
        Y = B ? this.pluralResolver.getSuffix(g, r.count, r) : "",
        pe =
          r.ordinal && B
            ? this.pluralResolver.getSuffix(g, r.count, { ordinal: !1 })
            : "",
        oe =
          B &&
          !r.ordinal &&
          r.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        ge =
          (oe && r[`defaultValue${this.options.pluralSeparator}zero`]) ||
          r[`defaultValue${Y}`] ||
          r[`defaultValue${pe}`] ||
          r.defaultValue;
      !this.isValidLookup(x) && M && ((R = !0), (x = ge)),
        this.isValidLookup(x) || ((Q = !0), (x = d));
      const Ae =
          (r.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          Q
            ? void 0
            : x,
        ae = M && ge !== x && this.options.updateMissing;
      if (Q || R || ae) {
        if (
          (this.logger.log(
            ae ? "updateKey" : "missingKey",
            g,
            m,
            d,
            ae ? ge : x
          ),
          u)
        ) {
          const j = this.resolve(d, { ...r, keySeparator: !1 });
          j &&
            j.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let ye = [];
        const Se = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          r.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && Se && Se[0])
          for (let j = 0; j < Se.length; j++) ye.push(Se[j]);
        else
          this.options.saveMissingTo === "all"
            ? (ye = this.languageUtils.toResolveHierarchy(
                r.lng || this.language
              ))
            : ye.push(r.lng || this.language);
        const fe = (j, U, D) => {
          const C = M && D !== x ? D : Ae;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(j, m, U, C, ae, r)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(j, m, U, C, ae, r),
            this.emit("missingKey", j, m, U, x);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && B
            ? ye.forEach((j) => {
                const U = this.pluralResolver.getSuffixes(j, r);
                oe &&
                  r[`defaultValue${this.options.pluralSeparator}zero`] &&
                  U.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  U.push(`${this.options.pluralSeparator}zero`),
                  U.forEach((D) => {
                    fe([j], d + D, r[`defaultValue${D}`] || ge);
                  });
              })
            : fe(ye, d, ge));
      }
      (x = this.extendTranslation(x, n, r, w, i)),
        Q &&
          x === d &&
          this.options.appendNamespaceToMissingKey &&
          (x = `${m}:${d}`),
        (Q || R) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (x = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${m}:${d}` : d,
                R ? x : void 0
              ))
            : (x = this.options.parseMissingKeyHandler(x)));
    }
    return a
      ? ((w.res = x), (w.usedParams = this.getUsedParamsDetails(r)), w)
      : x;
  }
  extendTranslation(n, r, i, a, u) {
    var d = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      n = this.i18nFormat.parse(
        n,
        { ...this.options.interpolation.defaultVariables, ...i },
        i.lng || this.language || a.usedLng,
        a.usedNS,
        a.usedKey,
        { resolved: a }
      );
    else if (!i.skipInterpolation) {
      i.interpolation &&
        this.interpolator.init({
          ...i,
          interpolation: { ...this.options.interpolation, ...i.interpolation },
        });
      const g =
        ce(n) &&
        (i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let v;
      if (g) {
        const x = n.match(this.interpolator.nestingRegexp);
        v = x && x.length;
      }
      let w = i.replace && !ce(i.replace) ? i.replace : i;
      if (
        (this.options.interpolation.defaultVariables &&
          (w = { ...this.options.interpolation.defaultVariables, ...w }),
        (n = this.interpolator.interpolate(
          n,
          w,
          i.lng || this.language || a.usedLng,
          i
        )),
        g)
      ) {
        const x = n.match(this.interpolator.nestingRegexp),
          S = x && x.length;
        v < S && (i.nest = !1);
      }
      !i.lng &&
        this.options.compatibilityAPI !== "v1" &&
        a &&
        a.res &&
        (i.lng = this.language || a.usedLng),
        i.nest !== !1 &&
          (n = this.interpolator.nest(
            n,
            function () {
              for (
                var x = arguments.length, S = new Array(x), _ = 0;
                _ < x;
                _++
              )
                S[_] = arguments[_];
              return u && u[0] === S[0] && !i.context
                ? (d.logger.warn(
                    `It seems you are nesting recursively key: ${S[0]} in key: ${r[0]}`
                  ),
                  null)
                : d.translate(...S, r);
            },
            i
          )),
        i.interpolation && this.interpolator.reset();
    }
    const p = i.postProcess || this.options.postProcess,
      m = ce(p) ? [p] : p;
    return (
      n != null &&
        m &&
        m.length &&
        i.applyPostProcessor !== !1 &&
        (n = Sh.handle(
          m,
          n,
          r,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...a,
                  usedParams: this.getUsedParamsDetails(i),
                },
                ...i,
              }
            : i,
          this
        )),
      n
    );
  }
  resolve(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i,
      a,
      u,
      d,
      p;
    return (
      ce(n) && (n = [n]),
      n.forEach((m) => {
        if (this.isValidLookup(i)) return;
        const g = this.extractFromKey(m, r),
          v = g.key;
        a = v;
        let w = g.namespaces;
        this.options.fallbackNS && (w = w.concat(this.options.fallbackNS));
        const x = r.count !== void 0 && !ce(r.count),
          S =
            x &&
            !r.ordinal &&
            r.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          _ =
            r.context !== void 0 &&
            (ce(r.context) || typeof r.context == "number") &&
            r.context !== "",
          L = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(
                r.lng || this.language,
                r.fallbackLng
              );
        w.forEach((P) => {
          this.isValidLookup(i) ||
            ((p = P),
            !Bf[`${L[0]}-${P}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(p) &&
              ((Bf[`${L[0]}-${P}`] = !0),
              this.logger.warn(
                `key "${a}" for languages "${L.join(
                  ", "
                )}" won't get resolved as namespace "${p}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            L.forEach((q) => {
              if (this.isValidLookup(i)) return;
              d = q;
              const W = [v];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(W, v, q, P, r);
              else {
                let R;
                x && (R = this.pluralResolver.getSuffix(q, r.count, r));
                const Q = `${this.options.pluralSeparator}zero`,
                  B = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (x &&
                    (W.push(v + R),
                    r.ordinal &&
                      R.indexOf(B) === 0 &&
                      W.push(v + R.replace(B, this.options.pluralSeparator)),
                    S && W.push(v + Q)),
                  _)
                ) {
                  const M = `${v}${this.options.contextSeparator}${r.context}`;
                  W.push(M),
                    x &&
                      (W.push(M + R),
                      r.ordinal &&
                        R.indexOf(B) === 0 &&
                        W.push(M + R.replace(B, this.options.pluralSeparator)),
                      S && W.push(M + Q));
                }
              }
              let A;
              for (; (A = W.pop()); )
                this.isValidLookup(i) ||
                  ((u = A), (i = this.getResource(q, P, A, r)));
            }));
        });
      }),
      { res: i, usedKey: a, exactUsedKey: u, usedLng: d, usedNS: p }
    );
  }
  isValidLookup(n) {
    return (
      n !== void 0 &&
      !(!this.options.returnNull && n === null) &&
      !(!this.options.returnEmptyString && n === "")
    );
  }
  getResource(n, r, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(n, r, i, a)
      : this.resourceStore.getResource(n, r, i, a);
  }
  getUsedParamsDetails() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const r = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      i = n.replace && !ce(n.replace);
    let a = i ? n.replace : n;
    if (
      (i && typeof n.count < "u" && (a.count = n.count),
      this.options.interpolation.defaultVariables &&
        (a = { ...this.options.interpolation.defaultVariables, ...a }),
      !i)
    ) {
      a = { ...a };
      for (const u of r) delete a[u];
    }
    return a;
  }
  static hasDefaultValue(n) {
    const r = "defaultValue";
    for (const i in n)
      if (
        Object.prototype.hasOwnProperty.call(n, i) &&
        r === i.substring(0, r.length) &&
        n[i] !== void 0
      )
        return !0;
    return !1;
  }
}
const xl = (o) => o.charAt(0).toUpperCase() + o.slice(1);
class Vf {
  constructor(n) {
    (this.options = n),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Bt.create("languageUtils"));
  }
  getScriptPartFromCode(n) {
    if (((n = ro(n)), !n || n.indexOf("-") < 0)) return null;
    const r = n.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(n) {
    if (((n = ro(n)), !n || n.indexOf("-") < 0)) return n;
    const r = n.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(n) {
    if (ce(n) && n.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let a = Intl.getCanonicalLocales(n)[0];
          if ((a && this.options.lowerCaseLng && (a = a.toLowerCase()), a))
            return a;
        } catch {}
      const r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let i = n.split("-");
      return (
        this.options.lowerCaseLng
          ? (i = i.map((a) => a.toLowerCase()))
          : i.length === 2
          ? ((i[0] = i[0].toLowerCase()),
            (i[1] = i[1].toUpperCase()),
            r.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = xl(i[1].toLowerCase())))
          : i.length === 3 &&
            ((i[0] = i[0].toLowerCase()),
            i[1].length === 2 && (i[1] = i[1].toUpperCase()),
            i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()),
            r.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = xl(i[1].toLowerCase())),
            r.indexOf(i[2].toLowerCase()) > -1 &&
              (i[2] = xl(i[2].toLowerCase()))),
        i.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? n.toLowerCase()
      : n;
  }
  isSupportedCode(n) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (n = this.getLanguagePartFromCode(n)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(n) > -1
    );
  }
  getBestMatchFromCodes(n) {
    if (!n) return null;
    let r;
    return (
      n.forEach((i) => {
        if (r) return;
        const a = this.formatLanguageCode(i);
        (!this.options.supportedLngs || this.isSupportedCode(a)) && (r = a);
      }),
      !r &&
        this.options.supportedLngs &&
        n.forEach((i) => {
          if (r) return;
          const a = this.getLanguagePartFromCode(i);
          if (this.isSupportedCode(a)) return (r = a);
          r = this.options.supportedLngs.find((u) => {
            if (u === a) return u;
            if (
              !(u.indexOf("-") < 0 && a.indexOf("-") < 0) &&
              ((u.indexOf("-") > 0 &&
                a.indexOf("-") < 0 &&
                u.substring(0, u.indexOf("-")) === a) ||
                (u.indexOf(a) === 0 && a.length > 1))
            )
              return u;
          });
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    );
  }
  getFallbackCodes(n, r) {
    if (!n) return [];
    if (
      (typeof n == "function" && (n = n(r)),
      ce(n) && (n = [n]),
      Array.isArray(n))
    )
      return n;
    if (!r) return n.default || [];
    let i = n[r];
    return (
      i || (i = n[this.getScriptPartFromCode(r)]),
      i || (i = n[this.formatLanguageCode(r)]),
      i || (i = n[this.getLanguagePartFromCode(r)]),
      i || (i = n.default),
      i || []
    );
  }
  toResolveHierarchy(n, r) {
    const i = this.getFallbackCodes(r || this.options.fallbackLng || [], n),
      a = [],
      u = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? a.push(d)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${d}`
              ));
      };
    return (
      ce(n) && (n.indexOf("-") > -1 || n.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            u(this.formatLanguageCode(n)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            u(this.getScriptPartFromCode(n)),
          this.options.load !== "currentOnly" &&
            u(this.getLanguagePartFromCode(n)))
        : ce(n) && u(this.formatLanguageCode(n)),
      i.forEach((d) => {
        a.indexOf(d) < 0 && u(this.formatLanguageCode(d));
      }),
      a
    );
  }
}
let ty = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  ny = {
    1: (o) => +(o > 1),
    2: (o) => +(o != 1),
    3: (o) => 0,
    4: (o) =>
      o % 10 == 1 && o % 100 != 11
        ? 0
        : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20)
        ? 1
        : 2,
    5: (o) =>
      o == 0
        ? 0
        : o == 1
        ? 1
        : o == 2
        ? 2
        : o % 100 >= 3 && o % 100 <= 10
        ? 3
        : o % 100 >= 11
        ? 4
        : 5,
    6: (o) => (o == 1 ? 0 : o >= 2 && o <= 4 ? 1 : 2),
    7: (o) =>
      o == 1
        ? 0
        : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20)
        ? 1
        : 2,
    8: (o) => (o == 1 ? 0 : o == 2 ? 1 : o != 8 && o != 11 ? 2 : 3),
    9: (o) => +(o >= 2),
    10: (o) => (o == 1 ? 0 : o == 2 ? 1 : o < 7 ? 2 : o < 11 ? 3 : 4),
    11: (o) =>
      o == 1 || o == 11 ? 0 : o == 2 || o == 12 ? 1 : o > 2 && o < 20 ? 2 : 3,
    12: (o) => +(o % 10 != 1 || o % 100 == 11),
    13: (o) => +(o !== 0),
    14: (o) => (o == 1 ? 0 : o == 2 ? 1 : o == 3 ? 2 : 3),
    15: (o) =>
      o % 10 == 1 && o % 100 != 11
        ? 0
        : o % 10 >= 2 && (o % 100 < 10 || o % 100 >= 20)
        ? 1
        : 2,
    16: (o) => (o % 10 == 1 && o % 100 != 11 ? 0 : o !== 0 ? 1 : 2),
    17: (o) => (o == 1 || (o % 10 == 1 && o % 100 != 11) ? 0 : 1),
    18: (o) => (o == 0 ? 0 : o == 1 ? 1 : 2),
    19: (o) =>
      o == 1
        ? 0
        : o == 0 || (o % 100 > 1 && o % 100 < 11)
        ? 1
        : o % 100 > 10 && o % 100 < 20
        ? 2
        : 3,
    20: (o) => (o == 1 ? 0 : o == 0 || (o % 100 > 0 && o % 100 < 20) ? 1 : 2),
    21: (o) =>
      o % 100 == 1
        ? 1
        : o % 100 == 2
        ? 2
        : o % 100 == 3 || o % 100 == 4
        ? 3
        : 0,
    22: (o) =>
      o == 1 ? 0 : o == 2 ? 1 : (o < 0 || o > 10) && o % 10 == 0 ? 2 : 3,
  };
const ry = ["v1", "v2", "v3"],
  sy = ["v4"],
  Wf = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  iy = () => {
    const o = {};
    return (
      ty.forEach((n) => {
        n.lngs.forEach((r) => {
          o[r] = { numbers: n.nr, plurals: ny[n.fc] };
        });
      }),
      o
    );
  };
class oy {
  constructor(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = n),
      (this.options = r),
      (this.logger = Bt.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        sy.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = iy()),
      (this.pluralRulesCache = {});
  }
  addRule(n, r) {
    this.rules[n] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const i = ro(n === "dev" ? "en" : n),
        a = r.ordinal ? "ordinal" : "cardinal",
        u = JSON.stringify({ cleanedCode: i, type: a });
      if (u in this.pluralRulesCache) return this.pluralRulesCache[u];
      let d;
      try {
        d = new Intl.PluralRules(i, { type: a });
      } catch {
        if (!n.match(/-|_/)) return;
        const m = this.languageUtils.getLanguagePartFromCode(n);
        d = this.getRule(m, r);
      }
      return (this.pluralRulesCache[u] = d), d;
    }
    return (
      this.rules[n] || this.rules[this.languageUtils.getLanguagePartFromCode(n)]
    );
  }
  needsPlural(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = this.getRule(n, r);
    return this.shouldUseIntlApi()
      ? i && i.resolvedOptions().pluralCategories.length > 1
      : i && i.numbers.length > 1;
  }
  getPluralFormsOfKey(n, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(n, i).map((a) => `${r}${a}`);
  }
  getSuffixes(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = this.getRule(n, r);
    return i
      ? this.shouldUseIntlApi()
        ? i
            .resolvedOptions()
            .pluralCategories.sort((a, u) => Wf[a] - Wf[u])
            .map(
              (a) =>
                `${this.options.prepend}${
                  r.ordinal ? `ordinal${this.options.prepend}` : ""
                }${a}`
            )
        : i.numbers.map((a) => this.getSuffix(n, a, r))
      : [];
  }
  getSuffix(n, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(n, i);
    return a
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            i.ordinal ? `ordinal${this.options.prepend}` : ""
          }${a.select(r)}`
        : this.getSuffixRetroCompatible(a, r)
      : (this.logger.warn(`no plural rule found for: ${n}`), "");
  }
  getSuffixRetroCompatible(n, r) {
    const i = n.noAbs ? n.plurals(r) : n.plurals(Math.abs(r));
    let a = n.numbers[i];
    this.options.simplifyPluralSuffix &&
      n.numbers.length === 2 &&
      n.numbers[0] === 1 &&
      (a === 2 ? (a = "plural") : a === 1 && (a = ""));
    const u = () =>
      this.options.prepend && a.toString()
        ? this.options.prepend + a.toString()
        : a.toString();
    return this.options.compatibilityJSON === "v1"
      ? a === 1
        ? ""
        : typeof a == "number"
        ? `_plural_${a.toString()}`
        : u()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          n.numbers.length === 2 &&
          n.numbers[0] === 1)
      ? u()
      : this.options.prepend && i.toString()
      ? this.options.prepend + i.toString()
      : i.toString();
  }
  shouldUseIntlApi() {
    return !ry.includes(this.options.compatibilityJSON);
  }
}
const Hf = function (o, n, r) {
    let i =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      u = qv(o, n, r);
    return (
      !u &&
        a &&
        ce(r) &&
        ((u = Il(o, r, i)), u === void 0 && (u = Il(n, r, i))),
      u
    );
  },
  wl = (o) => o.replace(/\$/g, "$$$$");
class ay {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Bt.create("interpolator")),
      (this.options = n),
      (this.format = (n.interpolation && n.interpolation.format) || ((r) => r)),
      this.init(n);
  }
  init() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    n.interpolation || (n.interpolation = { escapeValue: !0 });
    const {
      escape: r,
      escapeValue: i,
      useRawValueToEscape: a,
      prefix: u,
      prefixEscaped: d,
      suffix: p,
      suffixEscaped: m,
      formatSeparator: g,
      unescapeSuffix: v,
      unescapePrefix: w,
      nestingPrefix: x,
      nestingPrefixEscaped: S,
      nestingSuffix: _,
      nestingSuffixEscaped: L,
      nestingOptionsSeparator: P,
      maxReplaces: q,
      alwaysFormat: W,
    } = n.interpolation;
    (this.escape = r !== void 0 ? r : Gv),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = a !== void 0 ? a : !1),
      (this.prefix = u ? Cr(u) : d || "{{"),
      (this.suffix = p ? Cr(p) : m || "}}"),
      (this.formatSeparator = g || ","),
      (this.unescapePrefix = v ? "" : w || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : v || ""),
      (this.nestingPrefix = x ? Cr(x) : S || Cr("$t(")),
      (this.nestingSuffix = _ ? Cr(_) : L || Cr(")")),
      (this.nestingOptionsSeparator = P || ","),
      (this.maxReplaces = q || 1e3),
      (this.alwaysFormat = W !== void 0 ? W : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const n = (r, i) =>
      r && r.source === i ? ((r.lastIndex = 0), r) : new RegExp(i, "g");
    (this.regexp = n(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = n(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = n(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(n, r, i, a) {
    let u, d, p;
    const m =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      g = (S) => {
        if (S.indexOf(this.formatSeparator) < 0) {
          const q = Hf(
            r,
            m,
            S,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(q, void 0, i, { ...a, ...r, interpolationkey: S })
            : q;
        }
        const _ = S.split(this.formatSeparator),
          L = _.shift().trim(),
          P = _.join(this.formatSeparator).trim();
        return this.format(
          Hf(
            r,
            m,
            L,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          P,
          i,
          { ...a, ...r, interpolationkey: L }
        );
      };
    this.resetRegExp();
    const v =
        (a && a.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      w =
        a && a.interpolation && a.interpolation.skipOnVariables !== void 0
          ? a.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (S) => wl(S) },
        {
          regex: this.regexp,
          safeValue: (S) => (this.escapeValue ? wl(this.escape(S)) : wl(S)),
        },
      ].forEach((S) => {
        for (p = 0; (u = S.regex.exec(n)); ) {
          const _ = u[1].trim();
          if (((d = g(_)), d === void 0))
            if (typeof v == "function") {
              const P = v(n, u, a);
              d = ce(P) ? P : "";
            } else if (a && Object.prototype.hasOwnProperty.call(a, _)) d = "";
            else if (w) {
              d = u[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${_} for interpolating ${n}`
              ),
                (d = "");
          else !ce(d) && !this.useRawValueToEscape && (d = Df(d));
          const L = S.safeValue(d);
          if (
            ((n = n.replace(u[0], L)),
            w
              ? ((S.regex.lastIndex += d.length),
                (S.regex.lastIndex -= u[0].length))
              : (S.regex.lastIndex = 0),
            p++,
            p >= this.maxReplaces)
          )
            break;
        }
      }),
      n
    );
  }
  nest(n, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a,
      u,
      d;
    const p = (m, g) => {
      const v = this.nestingOptionsSeparator;
      if (m.indexOf(v) < 0) return m;
      const w = m.split(new RegExp(`${v}[ ]*{`));
      let x = `{${w[1]}`;
      (m = w[0]), (x = this.interpolate(x, d));
      const S = x.match(/'/g),
        _ = x.match(/"/g);
      ((S && S.length % 2 === 0 && !_) || _.length % 2 !== 0) &&
        (x = x.replace(/'/g, '"'));
      try {
        (d = JSON.parse(x)), g && (d = { ...g, ...d });
      } catch (L) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${m}`,
            L
          ),
          `${m}${v}${x}`
        );
      }
      return (
        d.defaultValue &&
          d.defaultValue.indexOf(this.prefix) > -1 &&
          delete d.defaultValue,
        m
      );
    };
    for (; (a = this.nestingRegexp.exec(n)); ) {
      let m = [];
      (d = { ...i }),
        (d = d.replace && !ce(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      let g = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const v = a[1].split(this.formatSeparator).map((w) => w.trim());
        (a[1] = v.shift()), (m = v), (g = !0);
      }
      if (((u = r(p.call(this, a[1].trim(), d), d)), u && a[0] === n && !ce(u)))
        return u;
      ce(u) || (u = Df(u)),
        u ||
          (this.logger.warn(`missed to resolve ${a[1]} for nesting ${n}`),
          (u = "")),
        g &&
          (u = m.reduce(
            (v, w) =>
              this.format(v, w, i.lng, { ...i, interpolationkey: a[1].trim() }),
            u.trim()
          )),
        (n = n.replace(a[0], u)),
        (this.regexp.lastIndex = 0);
    }
    return n;
  }
}
const ly = (o) => {
    let n = o.toLowerCase().trim();
    const r = {};
    if (o.indexOf("(") > -1) {
      const i = o.split("(");
      n = i[0].toLowerCase().trim();
      const a = i[1].substring(0, i[1].length - 1);
      n === "currency" && a.indexOf(":") < 0
        ? r.currency || (r.currency = a.trim())
        : n === "relativetime" && a.indexOf(":") < 0
        ? r.range || (r.range = a.trim())
        : a.split(";").forEach((d) => {
            if (d) {
              const [p, ...m] = d.split(":"),
                g = m
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                v = p.trim();
              r[v] || (r[v] = g),
                g === "false" && (r[v] = !1),
                g === "true" && (r[v] = !0),
                isNaN(g) || (r[v] = parseInt(g, 10));
            }
          });
    }
    return { formatName: n, formatOptions: r };
  },
  Nr = (o) => {
    const n = {};
    return (r, i, a) => {
      let u = a;
      a &&
        a.interpolationkey &&
        a.formatParams &&
        a.formatParams[a.interpolationkey] &&
        a[a.interpolationkey] &&
        (u = { ...u, [a.interpolationkey]: void 0 });
      const d = i + JSON.stringify(u);
      let p = n[d];
      return p || ((p = o(ro(i), a)), (n[d] = p)), p(r);
    };
  };
class uy {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Bt.create("formatter")),
      (this.options = n),
      (this.formats = {
        number: Nr((r, i) => {
          const a = new Intl.NumberFormat(r, { ...i });
          return (u) => a.format(u);
        }),
        currency: Nr((r, i) => {
          const a = new Intl.NumberFormat(r, { ...i, style: "currency" });
          return (u) => a.format(u);
        }),
        datetime: Nr((r, i) => {
          const a = new Intl.DateTimeFormat(r, { ...i });
          return (u) => a.format(u);
        }),
        relativetime: Nr((r, i) => {
          const a = new Intl.RelativeTimeFormat(r, { ...i });
          return (u) => a.format(u, i.range || "day");
        }),
        list: Nr((r, i) => {
          const a = new Intl.ListFormat(r, { ...i });
          return (u) => a.format(u);
        }),
      }),
      this.init(n);
  }
  init(n) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = r.interpolation.formatSeparator || ",";
  }
  add(n, r) {
    this.formats[n.toLowerCase().trim()] = r;
  }
  addCached(n, r) {
    this.formats[n.toLowerCase().trim()] = Nr(r);
  }
  format(n, r, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const u = r.split(this.formatSeparator);
    if (
      u.length > 1 &&
      u[0].indexOf("(") > 1 &&
      u[0].indexOf(")") < 0 &&
      u.find((p) => p.indexOf(")") > -1)
    ) {
      const p = u.findIndex((m) => m.indexOf(")") > -1);
      u[0] = [u[0], ...u.splice(1, p)].join(this.formatSeparator);
    }
    return u.reduce((p, m) => {
      const { formatName: g, formatOptions: v } = ly(m);
      if (this.formats[g]) {
        let w = p;
        try {
          const x =
              (a && a.formatParams && a.formatParams[a.interpolationkey]) || {},
            S = x.locale || x.lng || a.locale || a.lng || i;
          w = this.formats[g](p, S, { ...v, ...a, ...x });
        } catch (x) {
          this.logger.warn(x);
        }
        return w;
      } else this.logger.warn(`there was no format function for ${g}`);
      return p;
    }, n);
  }
}
const cy = (o, n) => {
  o.pending[n] !== void 0 && (delete o.pending[n], o.pendingCount--);
};
class dy extends lo {
  constructor(n, r, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = n),
      (this.store = r),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = a),
      (this.logger = Bt.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = a.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
      (this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(i, a.backend, a);
  }
  queueLoad(n, r, i, a) {
    const u = {},
      d = {},
      p = {},
      m = {};
    return (
      n.forEach((g) => {
        let v = !0;
        r.forEach((w) => {
          const x = `${g}|${w}`;
          !i.reload && this.store.hasResourceBundle(g, w)
            ? (this.state[x] = 2)
            : this.state[x] < 0 ||
              (this.state[x] === 1
                ? d[x] === void 0 && (d[x] = !0)
                : ((this.state[x] = 1),
                  (v = !1),
                  d[x] === void 0 && (d[x] = !0),
                  u[x] === void 0 && (u[x] = !0),
                  m[w] === void 0 && (m[w] = !0)));
        }),
          v || (p[g] = !0);
      }),
      (Object.keys(u).length || Object.keys(d).length) &&
        this.queue.push({
          pending: d,
          pendingCount: Object.keys(d).length,
          loaded: {},
          errors: [],
          callback: a,
        }),
      {
        toLoad: Object.keys(u),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(p),
        toLoadNamespaces: Object.keys(m),
      }
    );
  }
  loaded(n, r, i) {
    const a = n.split("|"),
      u = a[0],
      d = a[1];
    r && this.emit("failedLoading", u, d, r),
      !r &&
        i &&
        this.store.addResourceBundle(u, d, i, void 0, void 0, { skipCopy: !0 }),
      (this.state[n] = r ? -1 : 2),
      r && i && (this.state[n] = 0);
    const p = {};
    this.queue.forEach((m) => {
      Kv(m.loaded, [u], d),
        cy(m, n),
        r && m.errors.push(r),
        m.pendingCount === 0 &&
          !m.done &&
          (Object.keys(m.loaded).forEach((g) => {
            p[g] || (p[g] = {});
            const v = m.loaded[g];
            v.length &&
              v.forEach((w) => {
                p[g][w] === void 0 && (p[g][w] = !0);
              });
          }),
          (m.done = !0),
          m.errors.length ? m.callback(m.errors) : m.callback());
    }),
      this.emit("loaded", p),
      (this.queue = this.queue.filter((m) => !m.done));
  }
  read(n, r, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      u =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      d = arguments.length > 5 ? arguments[5] : void 0;
    if (!n.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: n,
        ns: r,
        fcName: i,
        tried: a,
        wait: u,
        callback: d,
      });
      return;
    }
    this.readingCalls++;
    const p = (g, v) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const w = this.waitingReads.shift();
          this.read(w.lng, w.ns, w.fcName, w.tried, w.wait, w.callback);
        }
        if (g && v && a < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, n, r, i, a + 1, u * 2, d);
          }, u);
          return;
        }
        d(g, v);
      },
      m = this.backend[i].bind(this.backend);
    if (m.length === 2) {
      try {
        const g = m(n, r);
        g && typeof g.then == "function"
          ? g.then((v) => p(null, v)).catch(p)
          : p(null, g);
      } catch (g) {
        p(g);
      }
      return;
    }
    return m(n, r, p);
  }
  prepareLoading(n, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        a && a()
      );
    ce(n) && (n = this.languageUtils.toResolveHierarchy(n)), ce(r) && (r = [r]);
    const u = this.queueLoad(n, r, i, a);
    if (!u.toLoad.length) return u.pending.length || a(), null;
    u.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(n, r, i) {
    this.prepareLoading(n, r, {}, i);
  }
  reload(n, r, i) {
    this.prepareLoading(n, r, { reload: !0 }, i);
  }
  loadOne(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const i = n.split("|"),
      a = i[0],
      u = i[1];
    this.read(a, u, "read", void 0, void 0, (d, p) => {
      d &&
        this.logger.warn(
          `${r}loading namespace ${u} for language ${a} failed`,
          d
        ),
        !d &&
          p &&
          this.logger.log(`${r}loaded namespace ${u} for language ${a}`, p),
        this.loaded(n, d, p);
    });
  }
  saveMissing(n, r, i, a, u) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      p =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(r)
    ) {
      this.logger.warn(
        `did not save key "${i}" as the namespace "${r}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(i == null || i === "")) {
      if (this.backend && this.backend.create) {
        const m = { ...d, isUpdate: u },
          g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let v;
            g.length === 5 ? (v = g(n, r, i, a, m)) : (v = g(n, r, i, a)),
              v && typeof v.then == "function"
                ? v.then((w) => p(null, w)).catch(p)
                : p(null, v);
          } catch (v) {
            p(v);
          }
        else g(n, r, i, a, p, m);
      }
      !n || !n[0] || this.store.addResource(n[0], r, i, a);
    }
  }
}
const Kf = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (o) => {
      let n = {};
      if (
        (typeof o[1] == "object" && (n = o[1]),
        ce(o[1]) && (n.defaultValue = o[1]),
        ce(o[2]) && (n.tDescription = o[2]),
        typeof o[2] == "object" || typeof o[3] == "object")
      ) {
        const r = o[3] || o[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (o) => o,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  qf = (o) => (
    ce(o.ns) && (o.ns = [o.ns]),
    ce(o.fallbackLng) && (o.fallbackLng = [o.fallbackLng]),
    ce(o.fallbackNS) && (o.fallbackNS = [o.fallbackNS]),
    o.supportedLngs &&
      o.supportedLngs.indexOf("cimode") < 0 &&
      (o.supportedLngs = o.supportedLngs.concat(["cimode"])),
    o
  ),
  Zi = () => {},
  fy = (o) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((r) => {
      typeof o[r] == "function" && (o[r] = o[r].bind(o));
    });
  };
class Ls extends lo {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = qf(n)),
      (this.services = {}),
      (this.logger = Bt),
      (this.modules = { external: [] }),
      fy(this),
      r && !this.isInitialized && !n.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(n, r), this;
      setTimeout(() => {
        this.init(n, r);
      }, 0);
    }
  }
  init() {
    var n = this;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      i = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof r == "function" && ((i = r), (r = {})),
      !r.defaultNS &&
        r.defaultNS !== !1 &&
        r.ns &&
        (ce(r.ns)
          ? (r.defaultNS = r.ns)
          : r.ns.indexOf("translation") < 0 && (r.defaultNS = r.ns[0]));
    const a = Kf();
    (this.options = { ...a, ...this.options, ...qf(r) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...a.interpolation,
          ...this.options.interpolation,
        }),
      r.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = r.keySeparator),
      r.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = r.nsSeparator);
    const u = (v) => (v ? (typeof v == "function" ? new v() : v) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Bt.init(u(this.modules.logger), this.options)
        : Bt.init(null, this.options);
      let v;
      this.modules.formatter
        ? (v = this.modules.formatter)
        : typeof Intl < "u" && (v = uy);
      const w = new Vf(this.options);
      this.store = new zf(this.options.resources, this.options);
      const x = this.services;
      (x.logger = Bt),
        (x.resourceStore = this.store),
        (x.languageUtils = w),
        (x.pluralResolver = new oy(w, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        v &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === a.interpolation.format) &&
          ((x.formatter = u(v)),
          x.formatter.init(x, this.options),
          (this.options.interpolation.format = x.formatter.format.bind(
            x.formatter
          ))),
        (x.interpolator = new ay(this.options)),
        (x.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (x.backendConnector = new dy(
          u(this.modules.backend),
          x.resourceStore,
          x,
          this.options
        )),
        x.backendConnector.on("*", function (S) {
          for (
            var _ = arguments.length, L = new Array(_ > 1 ? _ - 1 : 0), P = 1;
            P < _;
            P++
          )
            L[P - 1] = arguments[P];
          n.emit(S, ...L);
        }),
        this.modules.languageDetector &&
          ((x.languageDetector = u(this.modules.languageDetector)),
          x.languageDetector.init &&
            x.languageDetector.init(x, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((x.i18nFormat = u(this.modules.i18nFormat)),
          x.i18nFormat.init && x.i18nFormat.init(this)),
        (this.translator = new io(this.services, this.options)),
        this.translator.on("*", function (S) {
          for (
            var _ = arguments.length, L = new Array(_ > 1 ? _ - 1 : 0), P = 1;
            P < _;
            P++
          )
            L[P - 1] = arguments[P];
          n.emit(S, ...L);
        }),
        this.modules.external.forEach((S) => {
          S.init && S.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = Zi),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const v = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      v.length > 0 && v[0] !== "dev" && (this.options.lng = v[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((v) => {
        this[v] = function () {
          return n.store[v](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((v) => {
        this[v] = function () {
          return n.store[v](...arguments), n;
        };
      });
    const m = js(),
      g = () => {
        const v = (w, x) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            m.resolve(x),
            i(w, x);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return v(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, v);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? g()
        : setTimeout(g, 0),
      m
    );
  }
  loadResources(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zi;
    const a = ce(n) ? n : this.language;
    if (
      (typeof n == "function" && (i = n),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        a &&
        a.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return i();
      const u = [],
        d = (p) => {
          if (!p || p === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(p).forEach((g) => {
            g !== "cimode" && u.indexOf(g) < 0 && u.push(g);
          });
        };
      a
        ? d(a)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((m) => d(m)),
        this.options.preload && this.options.preload.forEach((p) => d(p)),
        this.services.backendConnector.load(u, this.options.ns, (p) => {
          !p &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            i(p);
        });
    } else i(null);
  }
  reloadResources(n, r, i) {
    const a = js();
    return (
      typeof n == "function" && ((i = n), (n = void 0)),
      typeof r == "function" && ((i = r), (r = void 0)),
      n || (n = this.languages),
      r || (r = this.options.ns),
      i || (i = Zi),
      this.services.backendConnector.reload(n, r, (u) => {
        a.resolve(), i(u);
      }),
      a
    );
  }
  use(n) {
    if (!n)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!n.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      n.type === "backend" && (this.modules.backend = n),
      (n.type === "logger" || (n.log && n.warn && n.error)) &&
        (this.modules.logger = n),
      n.type === "languageDetector" && (this.modules.languageDetector = n),
      n.type === "i18nFormat" && (this.modules.i18nFormat = n),
      n.type === "postProcessor" && Sh.addPostProcessor(n),
      n.type === "formatter" && (this.modules.formatter = n),
      n.type === "3rdParty" && this.modules.external.push(n),
      this
    );
  }
  setResolvedLanguage(n) {
    if (!(!n || !this.languages) && !(["cimode", "dev"].indexOf(n) > -1))
      for (let r = 0; r < this.languages.length; r++) {
        const i = this.languages[r];
        if (
          !(["cimode", "dev"].indexOf(i) > -1) &&
          this.store.hasLanguageSomeTranslations(i)
        ) {
          this.resolvedLanguage = i;
          break;
        }
      }
  }
  changeLanguage(n, r) {
    var i = this;
    this.isLanguageChangingTo = n;
    const a = js();
    this.emit("languageChanging", n);
    const u = (m) => {
        (this.language = m),
          (this.languages = this.services.languageUtils.toResolveHierarchy(m)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(m);
      },
      d = (m, g) => {
        g
          ? (u(g),
            this.translator.changeLanguage(g),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", g),
            this.logger.log("languageChanged", g))
          : (this.isLanguageChangingTo = void 0),
          a.resolve(function () {
            return i.t(...arguments);
          }),
          r &&
            r(m, function () {
              return i.t(...arguments);
            });
      },
      p = (m) => {
        !n && !m && this.services.languageDetector && (m = []);
        const g = ce(m)
          ? m
          : this.services.languageUtils.getBestMatchFromCodes(m);
        g &&
          (this.language || u(g),
          this.translator.language || this.translator.changeLanguage(g),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(g)),
          this.loadResources(g, (v) => {
            d(v, g);
          });
      };
    return (
      !n &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? p(this.services.languageDetector.detect())
        : !n &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(p)
          : this.services.languageDetector.detect(p)
        : p(n),
      a
    );
  }
  getFixedT(n, r, i) {
    var a = this;
    const u = function (d, p) {
      let m;
      if (typeof p != "object") {
        for (
          var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), w = 2;
          w < g;
          w++
        )
          v[w - 2] = arguments[w];
        m = a.options.overloadTranslationOptionHandler([d, p].concat(v));
      } else m = { ...p };
      (m.lng = m.lng || u.lng),
        (m.lngs = m.lngs || u.lngs),
        (m.ns = m.ns || u.ns),
        m.keyPrefix !== "" && (m.keyPrefix = m.keyPrefix || i || u.keyPrefix);
      const x = a.options.keySeparator || ".";
      let S;
      return (
        m.keyPrefix && Array.isArray(d)
          ? (S = d.map((_) => `${m.keyPrefix}${x}${_}`))
          : (S = m.keyPrefix ? `${m.keyPrefix}${x}${d}` : d),
        a.t(S, m)
      );
    };
    return ce(n) ? (u.lng = n) : (u.lngs = n), (u.ns = r), (u.keyPrefix = i), u;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(n) {
    this.options.defaultNS = n;
  }
  hasLoadedNamespace(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const i = r.lng || this.resolvedLanguage || this.languages[0],
      a = this.options ? this.options.fallbackLng : !1,
      u = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode") return !0;
    const d = (p, m) => {
      const g = this.services.backendConnector.state[`${p}|${m}`];
      return g === -1 || g === 0 || g === 2;
    };
    if (r.precheck) {
      const p = r.precheck(this, d);
      if (p !== void 0) return p;
    }
    return !!(
      this.hasResourceBundle(i, n) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(i, n) && (!a || d(u, n)))
    );
  }
  loadNamespaces(n, r) {
    const i = js();
    return this.options.ns
      ? (ce(n) && (n = [n]),
        n.forEach((a) => {
          this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
        }),
        this.loadResources((a) => {
          i.resolve(), r && r(a);
        }),
        i)
      : (r && r(), Promise.resolve());
  }
  loadLanguages(n, r) {
    const i = js();
    ce(n) && (n = [n]);
    const a = this.options.preload || [],
      u = n.filter(
        (d) =>
          a.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d)
      );
    return u.length
      ? ((this.options.preload = a.concat(u)),
        this.loadResources((d) => {
          i.resolve(), r && r(d);
        }),
        i)
      : (r && r(), Promise.resolve());
  }
  dir(n) {
    if (
      (n ||
        (n =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !n)
    )
      return "rtl";
    const r = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      i = (this.services && this.services.languageUtils) || new Vf(Kf());
    return r.indexOf(i.getLanguagePartFromCode(n)) > -1 ||
      n.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    return new Ls(n, r);
  }
  cloneInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zi;
    const i = n.forkResourceStore;
    i && delete n.forkResourceStore;
    const a = { ...this.options, ...n, isClone: !0 },
      u = new Ls(a);
    return (
      (n.debug !== void 0 || n.prefix !== void 0) &&
        (u.logger = u.logger.clone(n)),
      ["store", "services", "language"].forEach((p) => {
        u[p] = this[p];
      }),
      (u.services = { ...this.services }),
      (u.services.utils = { hasLoadedNamespace: u.hasLoadedNamespace.bind(u) }),
      i &&
        ((u.store = new zf(this.store.data, a)),
        (u.services.resourceStore = u.store)),
      (u.translator = new io(u.services, a)),
      u.translator.on("*", function (p) {
        for (
          var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), v = 1;
          v < m;
          v++
        )
          g[v - 1] = arguments[v];
        u.emit(p, ...g);
      }),
      u.init(a, r),
      (u.translator.options = a),
      (u.translator.backendConnector.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u),
      }),
      u
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const et = Ls.createInstance();
et.createInstance = Ls.createInstance;
et.createInstance;
et.dir;
et.init;
et.loadResources;
et.reloadResources;
et.use;
et.changeLanguage;
et.getFixedT;
et.t;
et.exists;
et.setDefaultNamespace;
et.hasLoadedNamespace;
et.loadNamespaces;
et.loadLanguages;
const kh = "electrical_cabinet_language",
  hy = () => {
    try {
      return localStorage.getItem(kh) || "en";
    } catch {
      return "en";
    }
  },
  py = (o) => {
    try {
      localStorage.setItem(kh, o);
    } catch {}
  },
  my = {
    en: {
      translation: {
        appTitle: "Electrical Cabinet Monitor",
        "cabinetControl.noCabinetsAssigned":
          "No cabinets assigned to this user.",
        cabinetToggleSuccess: "Cabinet toggled successfully.",
        cabinetToggleError: "Failed to toggle cabinet.",
        svgView: "Layout",
        "cabinet.id": "Cabinet ID",
        "cabinet.name": "Name",
        "cabinet.capacity": "Capacity",
        "cabinet.location": "Descriptions",
        "cabinet.status": "Status",
        "cabinet.status.on": "Status: ON",
        "cabinet.status.off": "Status: OFF",
        "common.refresh": "Refresh",
        turnOn: "Turn On",
        turnOff: "Turn Off",
        loginRequired: "Login Required",
        loginToControl: "Please login to control cabinets",
        editCabinet: "Edit Cabinet",
        deleteCabinet: "Delete Cabinet",
        floor1: "Floor 1",
        floor2: "Floor 2",
        floor3: "Floor 3",
        stats: "Statistics",
        control: "Control",
        admin: "Admin",
        signIn: "Sign In",
        signOut: "Sign Out",
        signUp: "Sign Up",
        displayName: "Display Name",
        password: "Password",
        needAccount: "Need an account? Sign up",
        haveAccount: "Have an account? Sign in",
        dashboard: "Dashboard",
        welcome: "Welcome",
        common: {
          email: "Email",
          name: "Name",
          search: "Search",
          filter: "Filter",
          all: "All",
          on: "ON",
          off: "OFF",
          online: "Online",
          offline: "Offline",
          status: "Status",
          cancel: "Cancel",
          refresh: "Refresh",
        },
        sessionWarning: {
          title: "Session Expiring Soon",
          message:
            "Your session will expire due to inactivity. Would you like to extend it?",
          logout: "Logout Now",
          extend: "Extend Session",
        },
        statsPage: {
          title: "Cabinet Statistics",
          subtitle: "Real-time monitoring and analytics",
          searchPlaceholder: "Search by name or location...",
          filterByStatus: "Filter by status",
          sortBy: "Sort by:",
          sortByName: "Name (ABC)",
          sortById: "ID (123)",
          sortByLocation: "Location",
          sortByCapacity: "Capacity",
          sortByStatus: "Status",
          ascending: "↑ Ascending",
          descending: "↓ Descending",
          totalCabinets: "Total Cabinets",
          uptime: "Uptime Rate",
          cabinetInfo: "Cabinet Information",
          capacity: "Power Capacity",
          ratedCapacity: "Rated capacity",
          lastActivity: "Last Activity",
          turnedOnAt: "Turned ON at",
          turnedOffAt: "Turned OFF at",
          noActivity: "No recent activity",
          noCabinetsFound: "No cabinets found",
          adjustSearch: "Try adjusting your search criteria",
        },
        adminPanel: {
          panel: "Administration Panel",
          manageUsers: "Manage users and cabinet assignments",
          assignCabinet: "Assign Cabinet to User",
          selectUser: "Select User",
          selectCabinet: "Select Cabinet",
          assign: "Assign",
          usersManagement: "User Management",
          role: "Role",
          actions: "Actions",
          changeRole: "Change user role",
          userRole: "User",
          adminRole: "Administrator",
          resetPassword: "Reset Password",
          delete: "Delete",
          cabinetAssignments: "Cabinet Assignments",
          noCabinetsAssigned: "No cabinets assigned",
          accessDenied: "Access Denied",
          adminOnly: "Administrator access required",
          confirmDeleteUser: "Are you sure you want to delete this user?",
          confirmDeleteCabinet:
            "Are you sure you want to delete cabinet {{name}}?",
          dropToDelete: "Drop to Delete",
          passwordUpdated: "Password updated successfully",
          newPassword: "New Password",
          update: "Update",
          users: "Users",
          noUsers: "No users yet",
          noName: "No name",
          cabinets: "cabinets",
          accountManagement: "Account Management",
          user: "User",
          admin: "Admin",
          changePassword: "Change Password",
          selectedUser: "Selected User",
          assignedCabinets: "assigned cabinets",
          userNotFound: "User not found",
          noUserSelected: "No user selected",
          noAssignments: "No assignments",
        },
        cabinetControl: {
          title: "Cabinet Control",
          language: "Language",
          selectCabinet: "Select Cabinet",
          chooseCabinet: "-- Choose a cabinet --",
          contactAdminForCabinets:
            "Contact your administrator to assign cabinets",
          location: "Descriptions",
          capacity: "Capacity",
          status: "Status",
          lastUpdate: "Last Update",
          never: "Never",
          online: "Online",
          offline: "Offline",
          turnOn: "Turn ON",
          turnOff: "Turn OFF",
          processing: "Processing...",
          deleting: "Deleting...",
          delete: "Delete Cabinet",
          cabinetOnlineOperational:
            "Cabinet is currently online and operational",
          cabinetOffline: "Cabinet is currently offline",
          pleaseSelectCabinet: "Please select a cabinet to control",
          cabinetToggleSuccess: "Cabinet {{id}} turned {{status}} successfully",
          cabinetToggleError: "Failed to toggle cabinet status",
          cabinetDeleteSuccess: "Cabinet {{name}} deleted successfully",
          cabinetDeleteError: "Failed to delete cabinet",
        },
        orientation: {
          portrait: "Portrait",
          landscape: "Landscape",
          lockPortrait: "Lock Portrait",
          lockLandscape: "Lock Landscape",
          rotating: "Rotating...",
          exitFullscreen: "Exit Fullscreen",
          rotateForBetter: "Rotate device for better experience",
          recommendLandscape: "Landscape mode recommended for this view",
          recommendPortrait: "Portrait mode recommended for this view",
        },
        layout: {
          settings: "Layout Settings",
          deviceInfo: "Device Information",
          compactMode: "Compact Mode",
          compactModeDesc:
            "Reduce spacing and size for better mobile experience",
          fontSize: "Font Size",
          fontSmall: "Small",
          fontMedium: "Medium",
          fontLarge: "Large",
          gridDensity: "Grid Density",
          compact: "Compact",
          comfortable: "Comfortable",
          spacious: "Spacious",
          theme: "Theme",
          lightTheme: "Light",
          darkTheme: "Dark",
          autoTheme: "Auto",
          showOrientation: "Show Orientation Controls",
          showOrientationDesc: "Display rotation controls on mobile devices",
          resetDefaults: "Reset to Defaults",
          done: "Done",
          collapse: "Collapse",
          expand: "Expand",
        },
        svgControls: {
          zoom: "Zoom",
          zoomIn: "Zoom In",
          zoomOut: "Zoom Out",
          fitScreen: "Fit to Screen",
          center: "Center View",
          reset: "Reset View",
          addCabinet: "Add Cabinet",
          fit: "Fit",
          add: "Add",
        },
      },
    },
    vi: {
      translation: {
        appTitle: "Giám sát Tủ Điện",
        "cabinetControl.noCabinetsAssigned":
          "Không có tủ điện được gán cho người dùng này.",
        cabinetToggleSuccess: "Đã chuyển đổi trạng thái tủ điện thành công.",
        cabinetToggleError: "Không thể chuyển đổi trạng thái tủ điện.",
        svgView: "Sơ đồ",
        "cabinet.id": "Mã tủ",
        "cabinet.name": "Tên tủ",
        "cabinet.capacity": "Công suất",
        "cabinet.location": "Mô tả",
        "cabinet.status": "Trạng thái",
        "cabinet.status.on": "Trạng thái: Mở",
        "cabinet.status.off": "Trạng thái: Tắt",
        "common.refresh": "Làm mới",
        floor1: "Tầng 1",
        floor2: "Tầng 2",
        floor3: "Tầng 3",
        turnOn: "Bật",
        turnOff: "Tắt",
        loginRequired: "Cần đăng nhập",
        loginToControl: "Vui lòng đăng nhập để điều khiển tủ điện",
        editCabinet: "Chỉnh sửa tủ điện",
        deleteCabinet: "Xóa tủ điện",
        stats: "Thống kê",
        control: "Điều khiển",
        admin: "Quản trị",
        signIn: "Đăng nhập",
        signOut: "Đăng xuất",
        signUp: "Đăng ký",
        displayName: "Tên hiển thị",
        password: "Mật khẩu",
        needAccount: "Cần tài khoản? Đăng ký",
        haveAccount: "Có tài khoản? Đăng nhập",
        dashboard: "Bảng điều khiển",
        welcome: "Chào mừng",
        common: {
          email: "Email",
          name: "Tên",
          search: "Tìm kiếm",
          filter: "Lọc",
          all: "Tất cả",
          on: "BẬT",
          off: "TẮT",
          online: "Đang Bật",
          offline: "Đang Tắt",
          status: "Trạng thái",
          cancel: "Hủy",
          refresh: "Làm mới",
        },
        sessionWarning: {
          title: "Phiên đăng nhập sắp hết hạn",
          message:
            "Phiên đăng nhập sẽ hết hạn do không hoạt động. Bạn có muốn gia hạn?",
          logout: "Đăng xuất ngay",
          extend: "Gia hạn phiên",
        },
        statsPage: {
          title: "Thống Kê Tủ Điện",
          subtitle: "Giám sát và phân tích thời gian thực",
          searchPlaceholder: "Tìm theo tên hoặc vị trí...",
          filterByStatus: "Lọc theo trạng thái",
          sortBy: "Sắp xếp theo:",
          sortByName: "Tên (ABC)",
          sortById: "ID (123)",
          sortByLocation: "Vị trí",
          sortByCapacity: "Công suất",
          sortByStatus: "Trạng thái",
          ascending: "↑ Tăng dần",
          descending: "↓ Giảm dần",
          totalCabinets: "Tổng số tủ",
          uptime: "Tỷ lệ hoạt động",
          cabinetInfo: "Thông tin tủ điện",
          capacity: "Công suất",
          ratedCapacity: "Công suất định mức",
          lastActivity: "Hoạt động cuối",
          turnedOnAt: "Đã bật lúc",
          turnedOffAt: "Đã tắt lúc",
          noActivity: "Không có hoạt động gần đây",
          noCabinetsFound: "Không tìm thấy tủ điện",
          adjustSearch: "Thử điều chỉnh tiêu chí tìm kiếm",
        },
        adminPanel: {
          panel: "Bảng Điều Khiển Quản Trị",
          manageUsers: "Quản lý người dùng và phân quyền tủ điện",
          assignCabinet: "Phân Công Tủ Điện",
          selectUser: "Chọn người dùng",
          selectCabinet: "Chọn tủ điện",
          assign: "Phân công",
          usersManagement: "Quản Lý Người Dùng",
          role: "Vai trò",
          actions: "Thao tác",
          changeRole: "Thay đổi vai trò",
          userRole: "Người dùng",
          adminRole: "Quản trị viên",
          resetPassword: "Đặt lại mật khẩu",
          delete: "Xóa",
          cabinetAssignments: "Phân Công Tủ Điện",
          noCabinetsAssigned: "Chưa được phân công tủ điện nào",
          accessDenied: "Truy cập bị từ chối",
          adminOnly: "Chỉ dành cho quản trị viên",
          confirmDeleteUser: "Bạn có chắc chắn muốn xóa người dùng này?",
          confirmDeleteCabinet: "Bạn có chắc chắn muốn xóa tủ điện {{name}}?",
          dropToDelete: "Thả để Xóa",
          passwordUpdated: "Mật khẩu đã được cập nhật thành công",
          newPassword: "Mật khẩu mới",
          update: "Cập nhật",
          users: "Người dùng",
          noUsers: "Chưa có người dùng nào",
          noName: "Chưa có tên",
          cabinets: "tủ điện",
          accountManagement: "Quản lý tài khoản",
          user: "Người dùng",
          admin: "Quản trị",
          changePassword: "Đổi mật khẩu",
          selectedUser: "Người dùng được chọn",
          assignedCabinets: "tủ điện được phân công",
          userNotFound: "Không tìm thấy người dùng",
          noUserSelected: "Chưa chọn người dùng",
          noAssignments: "Chưa có phân công",
        },
        cabinetControl: {
          title: "Điều Khiển Tủ Điện",
          language: "Ngôn ngữ",
          selectCabinet: "Chọn Tủ Điện",
          chooseCabinet: "-- Chọn một tủ điện --",
          contactAdminForCabinets:
            "Liên hệ quản trị viên để được phân công tủ điện",
          location: "Mô tả",
          capacity: "Công suất",
          status: "Trạng thái",
          lastUpdate: "Cập nhật cuối",
          never: "Chưa từng",
          online: "Đang Bật",
          offline: "Đang Tắt",
          turnOn: "Bật",
          turnOff: "Tắt",
          processing: "Đang xử lý...",
          deleting: "Đang xóa...",
          delete: "Xóa Tủ Điện",
          cabinetOnlineOperational: "Tủ điện hiện đang hoạt động bình thường",
          cabinetOffline: "Tủ điện hiện đang tắt",
          pleaseSelectCabinet: "Vui lòng chọn một tủ điện để điều khiển",
          cabinetToggleSuccess: "Tủ điện {{id}} đã {{status}} thành công",
          cabinetToggleError: "Không thể thay đổi trạng thái tủ điện",
          cabinetDeleteSuccess: "Tủ điện {{name}} đã được xóa thành công",
          cabinetDeleteError: "Không thể xóa tủ điện",
        },
        orientation: {
          portrait: "Dọc",
          landscape: "Ngang",
          lockPortrait: "Khóa dọc",
          lockLandscape: "Khóa ngang",
          rotating: "Đang xoay...",
          exitFullscreen: "Thoát toàn màn hình",
          rotateForBetter: "Xoay thiết bị để có trải nghiệm tốt hơn",
          recommendLandscape: "Nên sử dụng chế độ ngang cho khung nhìn này",
          recommendPortrait: "Nên sử dụng chế độ dọc cho khung nhìn này",
        },
        layout: {
          settings: "Cài Đặt Giao Diện",
          deviceInfo: "Thông Tin Thiết Bị",
          compactMode: "Chế Độ Gọn",
          compactModeDesc:
            "Giảm khoảng cách và kích thước để tối ưu cho mobile",
          fontSize: "Cỡ Chữ",
          fontSmall: "Nhỏ",
          fontMedium: "Vừa",
          fontLarge: "Lớn",
          gridDensity: "Độ Dày Lưới",
          compact: "Gọn",
          comfortable: "Thoải mái",
          spacious: "Rộng rãi",
          theme: "Giao Diện",
          lightTheme: "Sáng",
          darkTheme: "Tối",
          autoTheme: "Tự động",
          showOrientation: "Hiển thị Điều khiển Xoay",
          showOrientationDesc:
            "Hiển thị nút xoay màn hình trên thiết bị di động",
          resetDefaults: "Đặt lại mặc định",
          done: "Hoàn thành",
          collapse: "Thu gọn",
          expand: "Mở rộng",
        },
        svgControls: {
          zoom: "Phóng to",
          zoomIn: "Phóng to",
          zoomOut: "Thu nhỏ",
          fitScreen: "Vừa màn hình",
          center: "Căn giữa",
          reset: "Đặt lại",
          addCabinet: "Thêm tủ điện",
          fit: "Vừa",
          add: "Thêm",
        },
      },
    },
    ko: {
      translation: {
        appTitle: "전기 캐비닛 모니터",
        "cabinetControl.noCabinetsAssigned":
          "이 사용자에게 할당된 캐비닛이 없습니다.",
        "cabinetControl.cabinetToggleSuccess":
          "캐비닛 상태가 성공적으로 전환되었습니다.",
        cabinetToggleError: "캐비닛 상태를 전환할 수 없습니다.",
        svgView: "레이아웃",
        "cabinet.id": "캐비닛 ID",
        "cabinet.name": "캐비닛 이름",
        "cabinet.capacity": "캐비닛 용량",
        "cabinet.location": "캐비닛 설명",
        "cabinet.status": "캐비닛 상태",
        "cabinet.status.on": "캐비닛 상태: 켜짐",
        "cabinet.status.off": "캐비닛 상태: 꺼짐",
        "common.refresh": "새로 고침",
        floor1: "1층",
        floor2: "2층",
        floor3: "3층",
        turnOn: "켜기",
        turnOff: "끄기",
        loginRequired: "로그인 필요",
        loginToControl: "캐비닛을 제어하려면 로그인하세요",
        editCabinet: "캐비닛 편집",
        deleteCabinet: "캐비닛 삭제",
        stats: "통계",
        control: "제어",
        admin: "관리자",
        signIn: "로그인",
        signOut: "로그아웃",
        signUp: "회원가입",
        displayName: "표시 이름",
        password: "비밀번호",
        needAccount: "계정이 필요하십니까? 가입하기",
        haveAccount: "계정이 있습니까? 로그인",
        dashboard: "대시보드",
        welcome: "환영합니다",
        common: {
          email: "이메일",
          name: "이름",
          search: "검색",
          filter: "필터",
          all: "전체",
          on: "켜짐",
          off: "꺼짐",
          online: "활동적이다",
          offline: "중단 시간",
          status: "상태",
          cancel: "취소",
          refresh: "새로 고침",
        },
        sessionWarning: {
          title: "세션 곧 만료",
          message: "비활성으로 인해 세션이 만료됩니다. 연장하시겠습니까?",
          logout: "지금 로그아웃",
          extend: "세션 연장",
        },
        statsPage: {
          title: "캐비닛 통계",
          subtitle: "실시간 모니터링 및 분석",
          searchPlaceholder: "이름 또는 위치로 검색...",
          filterByStatus: "상태별 필터",
          sortBy: "정렬 기준:",
          sortByName: "이름 (ABC)",
          sortById: "ID (123)",
          sortByLocation: "위치",
          sortByCapacity: "용량",
          sortByStatus: "상태",
          ascending: "↑ 오름차순",
          descending: "↓ 내림차순",
          totalCabinets: "총 캐비닛",
          uptime: "가동률",
          cabinetInfo: "캐비닛 정보",
          capacity: "전력 용량",
          ratedCapacity: "정격 용량",
          lastActivity: "최근 활동",
          turnedOnAt: "켜진 시간",
          turnedOffAt: "꺼진 시간",
          noActivity: "최근 활동 없음",
          noCabinetsFound: "캐비닛을 찾을 수 없습니다",
          adjustSearch: "검색 조건을 조정해 보세요",
        },
        adminPanel: {
          panel: "관리자 패널",
          manageUsers: "사용자 및 캐비닛 할당 관리",
          assignCabinet: "사용자에게 캐비닛 할당",
          selectUser: "사용자 선택",
          selectCabinet: "캐비닛 선택",
          assign: "할당",
          usersManagement: "사용자 관리",
          role: "역할",
          actions: "작업",
          changeRole: "역할 변경",
          userRole: "사용자",
          adminRole: "관리자",
          resetPassword: "비밀번호 재설정",
          delete: "삭제",
          cabinetAssignments: "캐비닛 할당",
          noCabinetsAssigned: "할당된 캐비닛 없음",
          accessDenied: "접근 거부",
          adminOnly: "관리자 권한이 필요합니다",
          confirmDeleteUser: "이 사용자를 삭제하시겠습니까?",
          confirmDeleteCabinet: "캐비닛 {{name}}을(를) 삭제하시겠습니까?",
          dropToDelete: "삭제하려면 드롭",
          passwordUpdated: "비밀번호가 성공적으로 업데이트되었습니다",
          newPassword: "새 비밀번호",
          update: "업데이트",
          users: "사용자",
          noUsers: "사용자가 없습니다",
          noName: "이름 없음",
          cabinets: "캐비닛",
          accountManagement: "계정 관리",
          user: "사용자",
          admin: "관리자",
          changePassword: "비밀번호 변경",
          selectedUser: "선택된 사용자",
          assignedCabinets: "할당된 캐비닛",
          userNotFound: "사용자를 찾을 수 없습니다",
          noUserSelected: "선택된 사용자가 없습니다",
          noAssignments: "할당 없음",
        },
        cabinetControl: {
          title: "캐비닛 제어",
          language: "언어",
          selectCabinet: "캐비닛 선택",
          chooseCabinet: "-- 캐비닛을 선택하세요 --",
          contactAdminForCabinets: "캐비닛 할당을 위해 관리자에게 문의하세요",
          location: "설명",
          capacity: "용량",
          status: "상태",
          lastUpdate: "마지막 업데이트",
          never: "없음",
          online: "온라인",
          offline: "오프라인",
          turnOn: "켜기",
          turnOff: "끄기",
          processing: "처리 중...",
          deleting: "삭제 중...",
          delete: "캐비닛 삭제",
          cabinetOnlineOperational: "캐비닛이 현재 온라인 상태로 작동 중입니다",
          cabinetOffline: "캐비닛이 현재 오프라인 상태입니다",
          pleaseSelectCabinet: "제어할 캐비닛을 선택해 주세요",
          cabinetToggleSuccess: "캐비닛 {{id}}이(가) {{status}} 되었습니다",
          cabinetToggleError: "캐비닛 상태 변경에 실패했습니다",
          cabinetDeleteSuccess:
            "캐비닛 {{name}}이(가) 성공적으로 삭제되었습니다",
          cabinetDeleteError: "캐비닛 삭제에 실패했습니다",
        },
        orientation: {
          portrait: "세로",
          landscape: "가로",
          lockPortrait: "세로 고정",
          lockLandscape: "가로 고정",
          rotating: "회전 중...",
          exitFullscreen: "전체 화면 나가기",
          rotateForBetter: "더 나은 경험을 위해 기기를 회전하세요",
          recommendLandscape: "이 보기에서는 가로 모드를 권장합니다",
          recommendPortrait: "이 보기에서는 세로 모드를 권장합니다",
        },
        layout: {
          settings: "레이아웃 설정",
          deviceInfo: "기기 정보",
          compactMode: "컴팩트 모드",
          compactModeDesc: "모바일 환경에 최적화된 간격과 크기 적용",
          fontSize: "글자 크기",
          fontSmall: "작게",
          fontMedium: "보통",
          fontLarge: "크게",
          gridDensity: "격자 밀도",
          compact: "컴팩트",
          comfortable: "편안한",
          spacious: "여유로운",
          theme: "테마",
          lightTheme: "밝은",
          darkTheme: "어두운",
          autoTheme: "자동",
          showOrientation: "회전 컨트롤 표시",
          showOrientationDesc: "모바일 기기에서 화면 회전 버튼 표시",
          resetDefaults: "기본값으로 재설정",
          done: "완료",
          collapse: "접기",
          expand: "펼치기",
        },
        svgControls: {
          zoom: "확대/축소",
          zoomIn: "확대",
          zoomOut: "축소",
          fitScreen: "화면에 맞추기",
          center: "중앙 정렬",
          reset: "재설정",
          addCabinet: "캐비닛 추가",
          fit: "맞춤",
          add: "추가",
        },
      },
    },
  };
et.use(Km).init({
  resources: my,
  lng: hy(),
  fallbackLng: "en",
  interpolation: { escapeValue: !1 },
});
et.on("languageChanged", (o) => {
  py(o);
});
Om.createRoot(document.getElementById("root")).render(
  h.jsx(Dl.StrictMode, { children: h.jsx(Vv, {}) })
);

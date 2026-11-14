import ee, { useState as re, useEffect as te } from "react";
var A = { exports: {} }, R = {};
var $;
function ne() {
  if ($) return R;
  $ = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(l, o, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      u = {};
      for (var m in o)
        m !== "key" && (u[m] = o[m]);
    } else u = o;
    return o = u.ref, {
      $$typeof: s,
      type: l,
      key: f,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return R.Fragment = E, R.jsx = i, R.jsxs = i, R;
}
var T = {};
var F;
function ae() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case U:
          return "Profiler";
        case D:
          return "StrictMode";
        case z:
          return "Suspense";
        case G:
          return "SuspenseList";
        case H:
          return "Activity";
        case B:
          return "ViewTransition";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case S:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function E(e) {
      return "" + e;
    }
    function i(e) {
      try {
        E(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), E(e);
      }
    }
    function l(e) {
      if (e === P) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === S)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function b() {
      var e = s(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function p(e, r, t, n, d, c) {
      var a = t.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: d
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: c
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, t, n, d, c) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              k(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(a);
      if (j.call(r, "key")) {
        a = s(e);
        var v = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          v,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (i(t), a = "" + t), f(r) && (i(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var x in r)
          x !== "key" && (t[x] = r[x]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), p(
        e,
        a,
        t,
        o(),
        d,
        c
      );
    }
    function k(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === S && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var O = ee, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), D = /* @__PURE__ */ Symbol.for("react.strict_mode"), U = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), J = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), Z = /* @__PURE__ */ Symbol.for("react.client.reference"), h = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Q = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    O = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, L = O.react_stack_bottom_frame.bind(
      O,
      u
    )(), Y = g(l(u)), I = {};
    T.Fragment = P, T.jsx = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      if (n) {
        var d = Error.stackTraceLimit;
        Error.stackTraceLimit = 10;
        var c = Error("react-stack-top-frame");
        Error.stackTraceLimit = d;
      } else c = L;
      return _(
        e,
        r,
        t,
        !1,
        c,
        n ? g(l(e)) : Y
      );
    }, T.jsxs = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      if (n) {
        var d = Error.stackTraceLimit;
        Error.stackTraceLimit = 10;
        var c = Error("react-stack-top-frame");
        Error.stackTraceLimit = d;
      } else c = L;
      return _(
        e,
        r,
        t,
        !0,
        c,
        n ? g(l(e)) : Y
      );
    };
  })()), T;
}
var M;
function oe() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? A.exports = ne() : A.exports = ae()), A.exports;
}
var se = oe();
function ce({
  directions: s,
  size: E = 120
}) {
  const [i, l] = re(4);
  if (te(() => {
    if (!s) return;
    const f = (b) => {
      const p = b.clientX / window.innerWidth, _ = b.clientY / window.innerHeight, k = p < 0.33 ? 0 : p > 0.67 ? 2 : 1, w = _ < 0.33 ? 0 : _ > 0.67 ? 2 : 1;
      l(w * 3 + k);
    }, m = () => {
      l(4);
    };
    return window.addEventListener("mousemove", f), document.addEventListener("mouseleave", m), () => {
      window.removeEventListener("mousemove", f), document.removeEventListener("mouseleave", m);
    };
  }, [s]), !s) return null;
  const o = Math.floor(i / 3), u = i % 3;
  return /* @__PURE__ */ se.jsx(
    "div",
    {
      className: "pixora-mascot",
      style: {
        width: E,
        height: E,
        backgroundImage: `url("${s}")`,
        backgroundSize: "300% 300%",
        backgroundPosition: `${u * 50}% ${o * 50}%`,
        backgroundRepeat: "no-repeat",
        transition: "none"
      },
      "aria-label": "Interactive Pixora mascot",
      role: "img"
    }
  );
}
export {
  ce as Mascot,
  ce as default
};

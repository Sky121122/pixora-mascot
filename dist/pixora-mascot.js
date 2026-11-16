import ee, { useState as re } from "react";
var g = { exports: {} }, k = {};
var L;
function te() {
  if (L) return k;
  L = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(u, o, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      s = {};
      for (var E in o)
        E !== "key" && (s[E] = o[E]);
    } else s = o;
    return o = s.ref, {
      $$typeof: c,
      type: u,
      key: d,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return k.Fragment = m, k.jsx = l, k.jsxs = l, k;
}
var P = {};
var F;
function ne() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case z:
          return "Suspense";
        case G:
          return "SuspenseList";
        case B:
          return "Activity";
        case H:
          return "ViewTransition";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case D:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case w:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function l(e) {
      try {
        m(e);
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
        ), m(e);
      }
    }
    function u(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === w)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
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
    function _() {
      var e = c(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function v(e, r, t, n, f, i) {
      var a = t.ref;
      return e = {
        $$typeof: x,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: _
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
        value: f
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: i
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, r, t, n, f, i) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              p(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(a);
      if (j.call(r, "key")) {
        a = c(e);
        var T = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + n] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          T,
          a
        ), $[a + n] = !0);
      }
      if (a = null, t !== void 0 && (l(t), a = "" + t), d(r) && (l(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else t = r;
      return a && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), v(
        e,
        a,
        t,
        o(),
        f,
        i
      );
    }
    function p(e) {
      O(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === w && (e._payload.status === "fulfilled" ? O(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function O(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    var R = ee, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), W = /* @__PURE__ */ Symbol.for("react.strict_mode"), U = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), J = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.view_transition"), Z = /* @__PURE__ */ Symbol.for("react.client.reference"), A = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Q = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, Y = R.react_stack_bottom_frame.bind(
      R,
      s
    )(), I = S(u(s)), $ = {};
    P.Fragment = h, P.jsx = function(e, r, t) {
      var n = 1e4 > A.recentlyCreatedOwnerStacks++;
      if (n) {
        var f = Error.stackTraceLimit;
        Error.stackTraceLimit = 10;
        var i = Error("react-stack-top-frame");
        Error.stackTraceLimit = f;
      } else i = Y;
      return b(
        e,
        r,
        t,
        !1,
        i,
        n ? S(u(e)) : I
      );
    }, P.jsxs = function(e, r, t) {
      var n = 1e4 > A.recentlyCreatedOwnerStacks++;
      if (n) {
        var f = Error.stackTraceLimit;
        Error.stackTraceLimit = 10;
        var i = Error("react-stack-top-frame");
        Error.stackTraceLimit = f;
      } else i = Y;
      return b(
        e,
        r,
        t,
        !0,
        i,
        n ? S(u(e)) : I
      );
    };
  })()), P;
}
var M;
function ae() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? g.exports = te() : g.exports = ne()), g.exports;
}
var oe = ae();
function ce({ directions: c, size: m = 120 }) {
  const [l, u] = re(4), o = (_) => {
    if (_.pointerType === "touch") return;
    const v = _.currentTarget.getBoundingClientRect(), b = (_.clientX - v.left) / v.width, p = (_.clientY - v.top) / v.height, O = b < 0.33 ? 0 : b > 0.67 ? 2 : 1, R = p < 0.33 ? 0 : p > 0.67 ? 2 : 1;
    u(R * 3 + O);
  }, s = () => {
    u(4);
  };
  if (!c) return null;
  const d = Math.floor(l / 3), E = l % 3;
  return /* @__PURE__ */ oe.jsx(
    "div",
    {
      className: "pixora-mascot",
      style: {
        width: m,
        height: m,
        backgroundImage: `url("${c}")`,
        backgroundSize: "300% 300%",
        backgroundPosition: `${E * 50}% ${d * 50}%`,
        backgroundRepeat: "no-repeat",
        transition: "none"
      },
      onPointerMove: o,
      onPointerLeave: s,
      "aria-label": "Interactive Pixora mascot",
      role: "img"
    }
  );
}
export {
  ce as Mascot,
  ce as default
};

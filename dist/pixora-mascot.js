import re, { useState as D, useRef as te, useEffect as ne } from "react";
var S = { exports: {} }, h = {};
var G;
function oe() {
  if (G) return h;
  G = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function f(E, a, c) {
    var _ = null;
    if (c !== void 0 && (_ = "" + c), a.key !== void 0 && (_ = "" + a.key), "key" in a) {
      c = {};
      for (var u in a)
        u !== "key" && (c[u] = a[u]);
    } else c = a;
    return a = c.ref, {
      $$typeof: l,
      type: E,
      key: _,
      ref: a !== void 0 ? a : null,
      props: c
    };
  }
  return h.Fragment = i, h.jsx = f, h.jsxs = f, h;
}
var P = {};
var X;
function ae() {
  return X || (X = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case C:
          return "Profiler";
        case N:
          return "StrictMode";
        case A:
          return "Suspense";
        case I:
          return "SuspenseList";
        case H:
          return "Activity";
        case Z:
          return "ViewTransition";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case O:
            return "Portal";
          case T:
            return e.displayName || "Context";
          case s:
            return (e._context.displayName || "Context") + ".Consumer";
          case y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Y:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case $:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function f(e) {
      try {
        i(e);
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
        ), i(e);
      }
    }
    function E(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function u(e, r) {
      function t() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function x() {
      var e = l(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, r, t, n, R, d) {
      var o = t.ref;
      return e = {
        $$typeof: k,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
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
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: d
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, t, n, R, d) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (K(o)) {
            for (n = 0; n < o.length; n++)
              m(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(o);
      if (W.call(r, "key")) {
        o = l(e);
        var p = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", z[o + n] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          p,
          o
        ), z[o + n] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), _(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var M in r)
          M !== "key" && (t[M] = r[M]);
      } else t = r;
      return o && u(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        o,
        t,
        a(),
        R,
        d
      );
    }
    function m(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === $ && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    var v = re, k = /* @__PURE__ */ Symbol.for("react.transitional.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), N = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.view_transition"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), L = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, K = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var U, q = {}, J = v.react_stack_bottom_frame.bind(
      v,
      c
    )(), V = F(E(c)), z = {};
    P.Fragment = b, P.jsx = function(e, r, t) {
      var n = 1e4 > L.recentlyCreatedOwnerStacks++;
      if (n) {
        var R = Error.stackTraceLimit;
        Error.stackTraceLimit = 10;
        var d = Error("react-stack-top-frame");
        Error.stackTraceLimit = R;
      } else d = J;
      return g(
        e,
        r,
        t,
        !1,
        d,
        n ? F(E(e)) : V
      );
    }, P.jsxs = function(e, r, t) {
      var n = 1e4 > L.recentlyCreatedOwnerStacks++;
      if (n) {
        var R = Error.stackTraceLimit;
        Error.stackTraceLimit = 10;
        var d = Error("react-stack-top-frame");
        Error.stackTraceLimit = R;
      } else d = J;
      return g(
        e,
        r,
        t,
        !0,
        d,
        n ? F(E(e)) : V
      );
    };
  })()), P;
}
var B;
function ce() {
  return B || (B = 1, process.env.NODE_ENV === "production" ? S.exports = oe() : S.exports = ae()), S.exports;
}
var se = ce();
function ue({
  directions: l,
  expressions: i,
  expressionFrames: f = [0, 1, 2, 3, 4, 5, 6, 7, 8],
  size: E = 120,
  expressionDuration: a = 1200
}) {
  const [c, _] = D(4), [u, x] = D(null), [j, g] = D(0), m = te(null);
  ne(() => () => {
    m.current && clearTimeout(m.current);
  }, []);
  const w = (s) => {
    if (!l || u !== null) return;
    const T = s.currentTarget.getBoundingClientRect(), y = (s.clientX - T.left) / T.width, A = (s.clientY - T.top) / T.height, I = y < 0.33 ? 0 : y > 0.67 ? 2 : 1, Y = A < 0.33 ? 0 : A > 0.67 ? 2 : 1;
    _(Y * 3 + I);
  }, v = () => {
    _(4);
  }, k = () => {
    if (!i || f.length === 0) return;
    m.current && clearTimeout(m.current);
    const s = j % f.length;
    x(f[s]), g((T) => T + 1), m.current = setTimeout(() => {
      x(null), m.current = null;
    }, a);
  }, O = u !== null ? u : c, b = u !== null && i ? i : l || i;
  if (!b) return null;
  const N = Math.floor(O / 3), C = O % 3;
  return /* @__PURE__ */ se.jsx(
    "div",
    {
      className: "pixora-mascot",
      style: {
        width: E,
        height: E,
        backgroundImage: `url("${b}")`,
        backgroundSize: "300% 300%",
        backgroundPosition: `${C * 50}% ${N * 50}%`,
        backgroundRepeat: "no-repeat",
        transition: "none"
      },
      onPointerMove: w,
      onPointerLeave: v,
      onClick: k,
      role: "button",
      tabIndex: 0,
      onKeyDown: (s) => {
        (s.key === "Enter" || s.key === " ") && (s.preventDefault(), k());
      },
      "aria-label": "Interactive Pixora mascot"
    }
  );
}
export {
  ue as Mascot,
  ue as default
};

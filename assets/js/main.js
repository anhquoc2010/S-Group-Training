!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (w, e) {
  "use strict";
  var t = [],
    C = w.document,
    a = Object.getPrototypeOf,
    s = t.slice,
    f = t.concat,
    l = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    h = n.hasOwnProperty,
    r = h.toString,
    c = r.call(Object),
    g = {};
  function v(e, t) {
    var n = (t = t || C).createElement("script");
    (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
  }
  var d = "3.1.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    },
    u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    m = /-([a-z])/g,
    y = function (e, t) {
      return t.toUpperCase();
    };
  function b(e) {
    var t = !!e && "length" in e && e.length,
      n = S.type(e);
    return (
      "function" !== n &&
      !S.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: d,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: l,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          a,
          i,
          o,
          r = arguments[0] || {},
          s = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof r && ((c = r), (r = arguments[s] || {}), s++),
            "object" == typeof r || S.isFunction(r) || (r = {}),
            s === l && ((r = this), s--);
          s < l;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = r[t]),
                r !== (a = e[t]) &&
                  (c && a && (S.isPlainObject(a) || (i = S.isArray(a)))
                    ? ((o = i
                        ? ((i = !1), n && S.isArray(n) ? n : [])
                        : n && S.isPlainObject(n)
                        ? n
                        : {}),
                      (r[t] = S.extend(c, o, a)))
                    : void 0 !== a && (r[t] = a));
        return r;
      }),
    S.extend({
      expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === S.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== o.call(e) ||
          ((t = a(e)) &&
            ("function" !=
              typeof (n = h.call(t, "constructor") && t.constructor) ||
              r.call(n) !== c))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? n[o.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        v(e);
      },
      camelCase: function (e) {
        return e.replace(p, "ms-").replace(m, y);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          a = 0;
        if (b(e))
          for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++);
        else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(u, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (b(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : l.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, a = 0, i = e.length; a < n; a++) e[i++] = t[a];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var a = [], i = 0, o = e.length, r = !n; i < o; i++)
          !t(e[i], i) !== r && a.push(e[i]);
        return a;
      },
      map: function (e, t, n) {
        var a,
          i,
          o = 0,
          r = [];
        if (b(e))
          for (a = e.length; o < a; o++)
            null != (i = t(e[o], o, n)) && r.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && r.push(i);
        return f.apply([], r);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, a, i;
        if (
          ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          S.isFunction(e))
        )
          return (
            (a = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, a.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || S.guid++),
            i
          );
      },
      now: Date.now,
      support: g,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var _ = (function (n) {
    var e,
      m,
      _,
      o,
      i,
      h,
      u,
      f,
      $,
      l,
      c,
      k,
      w,
      r,
      C,
      g,
      s,
      d,
      v,
      S = "sizzle" + 1 * new Date(),
      y = n.document,
      x = 0,
      a = 0,
      p = re(),
      b = re(),
      T = re(),
      E = function (e, t) {
        return e === t && (c = !0), 0;
      },
      A = {}.hasOwnProperty,
      t = [],
      I = t.pop,
      O = t.push,
      P = t.push,
      N = t.slice,
      F = function (e, t) {
        for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
        return -1;
      },
      L =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      D = "[\\x20\\t\\r\\n\\f]",
      H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      j =
        "\\[" +
        D +
        "*(" +
        H +
        ")(?:" +
        D +
        "*([*^$|!~]?=)" +
        D +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        H +
        "))|)" +
        D +
        "*\\]",
      M =
        ":(" +
        H +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        j +
        ")*)|.*)\\)|)",
      R = new RegExp(D + "+", "g"),
      W = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"),
      q = new RegExp("^" + D + "*," + D + "*"),
      U = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"),
      z = new RegExp("=" + D + "*([^\\]'\"]*?)" + D + "*\\]", "g"),
      Y = new RegExp(M),
      B = new RegExp("^" + H + "$"),
      X = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + j),
        PSEUDO: new RegExp("^" + M),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            D +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            D +
            "*(?:([+-]|)" +
            D +
            "*(\\d+)|))" +
            D +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + L + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            D +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            D +
            "*((?:-\\d)?\\d*)" +
            D +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      V = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Q = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + D + "?|(" + D + ")|.)", "ig"),
      ee = function (e, t, n) {
        var a = "0x" + t - 65536;
        return a != a || n
          ? t
          : a < 0
          ? String.fromCharCode(a + 65536)
          : String.fromCharCode((a >> 10) | 55296, (1023 & a) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      ae = function () {
        k();
      },
      ie = ye(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      P.apply((t = N.call(y.childNodes)), y.childNodes),
        t[y.childNodes.length].nodeType;
    } catch (e) {
      P = {
        apply: t.length
          ? function (e, t) {
              O.apply(e, N.call(t));
            }
          : function (e, t) {
              for (var n = e.length, a = 0; (e[n++] = t[a++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, n, a) {
      var i,
        o,
        r,
        s,
        l,
        c,
        d,
        u = t && t.ownerDocument,
        p = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !a &&
        ((t ? t.ownerDocument || t : y) !== w && k(t), (t = t || w), C)
      ) {
        if (11 !== p && (l = K.exec(e)))
          if ((i = l[1])) {
            if (9 === p) {
              if (!(r = t.getElementById(i))) return n;
              if (r.id === i) return n.push(r), n;
            } else if (u && (r = u.getElementById(i)) && v(t, r) && r.id === i)
              return n.push(r), n;
          } else {
            if (l[2]) return P.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = l[3]) &&
              m.getElementsByClassName &&
              t.getElementsByClassName
            )
              return P.apply(n, t.getElementsByClassName(i)), n;
          }
        if (m.qsa && !T[e + " "] && (!g || !g.test(e))) {
          if (1 !== p) (u = t), (d = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(te, ne))
                : t.setAttribute("id", (s = S)),
                o = (c = h(e)).length;
              o--;

            )
              c[o] = "#" + s + " " + ve(c[o]);
            (d = c.join(",")), (u = (Q.test(e) && fe(t.parentNode)) || t);
          }
          if (d)
            try {
              return P.apply(n, u.querySelectorAll(d)), n;
            } catch (e) {
            } finally {
              s === S && t.removeAttribute("id");
            }
        }
      }
      return f(e.replace(W, "$1"), t, n, a);
    }
    function re() {
      var a = [];
      return function e(t, n) {
        return (
          a.push(t + " ") > _.cacheLength && delete e[a.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function se(e) {
      return (e[S] = !0), e;
    }
    function le(e) {
      var t = w.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ce(e, t) {
      for (var n = e.split("|"), a = n.length; a--; ) _.attrHandle[n[a]] = t;
    }
    function de(e, t) {
      var n = t && e,
        a =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (a) return a;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function ue(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function pe(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function me(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ie(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function he(r) {
      return se(function (o) {
        return (
          (o = +o),
          se(function (e, t) {
            for (var n, a = r([], e.length, o), i = a.length; i--; )
              e[(n = a[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function fe(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((m = oe.support = {}),
    (i = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (k = oe.setDocument =
      function (e) {
        var t,
          n,
          a = e ? e.ownerDocument || e : y;
        return (
          a !== w &&
            9 === a.nodeType &&
            a.documentElement &&
            ((r = (w = a).documentElement),
            (C = !i(w)),
            y !== w &&
              (n = w.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", ae, !1)
                : n.attachEvent && n.attachEvent("onunload", ae)),
            (m.attributes = le(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (m.getElementsByTagName = le(function (e) {
              return (
                e.appendChild(w.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (m.getElementsByClassName = J.test(w.getElementsByClassName)),
            (m.getById = le(function (e) {
              return (
                (r.appendChild(e).id = S),
                !w.getElementsByName || !w.getElementsByName(S).length
              );
            })),
            m.getById
              ? ((_.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (_.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((_.filter.ID = function (e) {
                  var n = e.replace(Z, ee);
                  return function (e) {
                    var t =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (_.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && C) {
                    var n,
                      a,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), a = 0; (o = i[a++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (_.find.TAG = m.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : m.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    a = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" !== e) return o;
                  for (; (n = o[i++]); ) 1 === n.nodeType && a.push(n);
                  return a;
                }),
            (_.find.CLASS =
              m.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && C)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (g = []),
            (m.qsa = J.test(w.querySelectorAll)) &&
              (le(function (e) {
                (r.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + D + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    g.push("\\[" + D + "*(?:value|" + L + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    g.push(".#.+[+~]");
              }),
              le(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = w.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    g.push("name" + D + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (r.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (m.matchesSelector = J.test(
              (d =
                r.matches ||
                r.webkitMatchesSelector ||
                r.mozMatchesSelector ||
                r.oMatchesSelector ||
                r.msMatchesSelector)
            )) &&
              le(function (e) {
                (m.disconnectedMatch = d.call(e, "*")),
                  d.call(e, "[s!='']:x"),
                  s.push("!=", M);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = J.test(r.compareDocumentPosition)),
            (v =
              t || J.test(r.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      a = t && t.parentNode;
                    return (
                      e === a ||
                      !(
                        !a ||
                        1 !== a.nodeType ||
                        !(n.contains
                          ? n.contains(a)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(a))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (E = t
              ? function (e, t) {
                  if (e === t) return (c = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!m.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === w || (e.ownerDocument === y && v(y, e))
                        ? -1
                        : t === w || (t.ownerDocument === y && v(y, t))
                        ? 1
                        : l
                        ? F(l, e) - F(l, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (c = !0), 0;
                  var n,
                    a = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    r = [e],
                    s = [t];
                  if (!i || !o)
                    return e === w
                      ? -1
                      : t === w
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : l
                      ? F(l, e) - F(l, t)
                      : 0;
                  if (i === o) return de(e, t);
                  for (n = e; (n = n.parentNode); ) r.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; r[a] === s[a]; ) a++;
                  return a
                    ? de(r[a], s[a])
                    : r[a] === y
                    ? -1
                    : s[a] === y
                    ? 1
                    : 0;
                })),
          w
        );
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== w && k(e),
        (t = t.replace(z, "='$1']")),
        m.matchesSelector &&
          C &&
          !T[t + " "] &&
          (!s || !s.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var n = d.call(e, t);
          if (
            n ||
            m.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < oe(t, w, null, [e]).length;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== w && k(e), v(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== w && k(e);
      var n = _.attrHandle[t.toLowerCase()],
        a = n && A.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== a
        ? a
        : m.attributes || !C
        ? e.getAttribute(t)
        : (a = e.getAttributeNode(t)) && a.specified
        ? a.value
        : null;
    }),
    (oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }),
    (oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        n = [],
        a = 0,
        i = 0;
      if (
        ((c = !m.detectDuplicates),
        (l = !m.sortStable && e.slice(0)),
        e.sort(E),
        c)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (a = n.push(i));
        for (; a--; ) e.splice(n[a], 1);
      }
      return (l = null), e;
    }),
    (o = oe.getText =
      function (e) {
        var t,
          n = "",
          a = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[a++]); ) n += o(t);
        return n;
      }),
    ((_ = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: se,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return X.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    Y.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, a, i) {
            return function (e) {
              var t = oe.attr(e, n);
              return null == t
                ? "!=" === a
                : !a ||
                    ((t += ""),
                    "=" === a
                      ? t === i
                      : "!=" === a
                      ? t !== i
                      : "^=" === a
                      ? i && 0 === t.indexOf(i)
                      : "*=" === a
                      ? i && -1 < t.indexOf(i)
                      : "$=" === a
                      ? i && t.slice(-i.length) === i
                      : "~=" === a
                      ? -1 < (" " + t.replace(R, " ") + " ").indexOf(i)
                      : "|=" === a &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, f, g) {
            var v = "nth" !== h.slice(0, 3),
              y = "last" !== h.slice(-4),
              b = "of-type" === e;
            return 1 === f && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var a,
                    i,
                    o,
                    r,
                    s,
                    l,
                    c = v !== y ? "nextSibling" : "previousSibling",
                    d = e.parentNode,
                    u = b && e.nodeName.toLowerCase(),
                    p = !n && !b,
                    m = !1;
                  if (d) {
                    if (v) {
                      for (; c; ) {
                        for (r = e; (r = r[c]); )
                          if (
                            b
                              ? r.nodeName.toLowerCase() === u
                              : 1 === r.nodeType
                          )
                            return !1;
                        l = c = "only" === h && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [y ? d.firstChild : d.lastChild]), y && p)) {
                      for (
                        m =
                          (s =
                            (a =
                              (i =
                                (o = (r = d)[S] || (r[S] = {}))[r.uniqueID] ||
                                (o[r.uniqueID] = {}))[h] || [])[0] === x &&
                            a[1]) && a[2],
                          r = s && d.childNodes[s];
                        (r = (++s && r && r[c]) || (m = s = 0) || l.pop());

                      )
                        if (1 === r.nodeType && ++m && r === e) {
                          i[h] = [x, s, m];
                          break;
                        }
                    } else if (
                      (p &&
                        (m = s =
                          (a =
                            (i =
                              (o = (r = e)[S] || (r[S] = {}))[r.uniqueID] ||
                              (o[r.uniqueID] = {}))[h] || [])[0] === x && a[1]),
                      !1 === m)
                    )
                      for (
                        ;
                        (r = (++s && r && r[c]) || (m = s = 0) || l.pop()) &&
                        ((b
                          ? r.nodeName.toLowerCase() !== u
                          : 1 !== r.nodeType) ||
                          !++m ||
                          (p &&
                            ((i =
                              (o = r[S] || (r[S] = {}))[r.uniqueID] ||
                              (o[r.uniqueID] = {}))[h] = [x, m]),
                          r !== e));

                      );
                    return (m -= g) === f || (m % f == 0 && 0 <= m / f);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              r =
                _.pseudos[e] ||
                _.setFilters[e.toLowerCase()] ||
                oe.error("unsupported pseudo: " + e);
            return r[S]
              ? r(o)
              : 1 < r.length
              ? ((t = [e, e, "", o]),
                _.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function (e, t) {
                      for (var n, a = r(e, o), i = a.length; i--; )
                        e[(n = F(e, a[i]))] = !(t[n] = a[i]);
                    })
                  : function (e) {
                      return r(e, 0, t);
                    })
              : r;
          },
        },
        pseudos: {
          not: se(function (e) {
            var a = [],
              i = [],
              s = u(e.replace(W, "$1"));
            return s[S]
              ? se(function (e, t, n, a) {
                  for (var i, o = s(e, null, a, []), r = e.length; r--; )
                    (i = o[r]) && (e[r] = !(t[r] = i));
                })
              : function (e, t, n) {
                  return (a[0] = e), s(a, null, n, i), (a[0] = null), !i.pop();
                };
          }),
          has: se(function (t) {
            return function (e) {
              return 0 < oe(t, e).length;
            };
          }),
          contains: se(function (t) {
            return (
              (t = t.replace(Z, ee)),
              function (e) {
                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
              }
            );
          }),
          lang: se(function (n) {
            return (
              B.test(n || "") || oe.error("unsupported lang: " + n),
              (n = n.replace(Z, ee).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e === w.activeElement &&
              (!w.hasFocus || w.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !_.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return V.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var a = n < 0 ? n + t : n; 0 <= --a; ) e.push(a);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var a = n < 0 ? n + t : n; ++a < t; ) e.push(a);
            return e;
          }),
        },
      }).pseudos.nth = _.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      _.pseudos[e] = ue(e);
    for (e in { submit: !0, reset: !0 }) _.pseudos[e] = pe(e);
    function ge() {}
    function ve(e) {
      for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
      return a;
    }
    function ye(s, e, t) {
      var l = e.dir,
        c = e.next,
        d = c || l,
        u = t && "parentNode" === d,
        p = a++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[l]); ) if (1 === e.nodeType || u) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var a,
              i,
              o,
              r = [x, p];
            if (n) {
              for (; (e = e[l]); )
                if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
            } else
              for (; (e = e[l]); )
                if (1 === e.nodeType || u)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    c && c === e.nodeName.toLowerCase())
                  )
                    e = e[l] || e;
                  else {
                    if ((a = i[d]) && a[0] === x && a[1] === p)
                      return (r[2] = a[2]);
                    if (((i[d] = r)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function be(i) {
      return 1 < i.length
        ? function (e, t, n) {
            for (var a = i.length; a--; ) if (!i[a](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function _e(e, t, n, a, i) {
      for (var o, r = [], s = 0, l = e.length, c = null != t; s < l; s++)
        (o = e[s]) && ((n && !n(o, a, i)) || (r.push(o), c && t.push(s)));
      return r;
    }
    function $e(m, h, f, g, v, e) {
      return (
        g && !g[S] && (g = $e(g)),
        v && !v[S] && (v = $e(v, e)),
        se(function (e, t, n, a) {
          var i,
            o,
            r,
            s = [],
            l = [],
            c = t.length,
            d =
              e ||
              (function (e, t, n) {
                for (var a = 0, i = t.length; a < i; a++) oe(e, t[a], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            u = !m || (!e && h) ? d : _e(d, s, m, n, a),
            p = f ? (v || (e ? m : c || g) ? [] : t) : u;
          if ((f && f(u, p, n, a), g))
            for (i = _e(p, l), g(i, [], n, a), o = i.length; o--; )
              (r = i[o]) && (p[l[o]] = !(u[l[o]] = r));
          if (e) {
            if (v || m) {
              if (v) {
                for (i = [], o = p.length; o--; )
                  (r = p[o]) && i.push((u[o] = r));
                v(null, (p = []), i, a);
              }
              for (o = p.length; o--; )
                (r = p[o]) &&
                  -1 < (i = v ? F(e, r) : s[o]) &&
                  (e[i] = !(t[i] = r));
            }
          } else (p = _e(p === t ? p.splice(c, p.length) : p)), v ? v(null, t, p, a) : P.apply(t, p);
        })
      );
    }
    function ke(e) {
      for (
        var i,
          t,
          n,
          a = e.length,
          o = _.relative[e[0].type],
          r = o || _.relative[" "],
          s = o ? 1 : 0,
          l = ye(
            function (e) {
              return e === i;
            },
            r,
            !0
          ),
          c = ye(
            function (e) {
              return -1 < F(i, e);
            },
            r,
            !0
          ),
          d = [
            function (e, t, n) {
              var a =
                (!o && (n || t !== $)) ||
                ((i = t).nodeType ? l(e, t, n) : c(e, t, n));
              return (i = null), a;
            },
          ];
        s < a;
        s++
      )
        if ((t = _.relative[e[s].type])) d = [ye(be(d), t)];
        else {
          if ((t = _.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < a && !_.relative[e[n].type]; n++);
            return $e(
              1 < s && be(d),
              1 < s &&
                ve(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(W, "$1"),
              t,
              s < n && ke(e.slice(s, n)),
              n < a && ke((e = e.slice(n))),
              n < a && ve(e)
            );
          }
          d.push(t);
        }
      return be(d);
    }
    return (
      (ge.prototype = _.filters = _.pseudos),
      (_.setFilters = new ge()),
      (h = oe.tokenize =
        function (e, t) {
          var n,
            a,
            i,
            o,
            r,
            s,
            l,
            c = b[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (r = e, s = [], l = _.preFilter; r; ) {
            for (o in ((n && !(a = q.exec(r))) ||
              (a && (r = r.slice(a[0].length) || r), s.push((i = []))),
            (n = !1),
            (a = U.exec(r)) &&
              ((n = a.shift()),
              i.push({ value: n, type: a[0].replace(W, " ") }),
              (r = r.slice(n.length))),
            _.filter))
              !(a = X[o].exec(r)) ||
                (l[o] && !(a = l[o](a))) ||
                ((n = a.shift()),
                i.push({ value: n, type: o, matches: a }),
                (r = r.slice(n.length)));
            if (!n) break;
          }
          return t ? r.length : r ? oe.error(e) : b(e, s).slice(0);
        }),
      (u = oe.compile =
        function (e, t) {
          var n,
            g,
            v,
            y,
            b,
            a,
            i = [],
            o = [],
            r = T[e + " "];
          if (!r) {
            for (t || (t = h(e)), n = t.length; n--; )
              (r = ke(t[n]))[S] ? i.push(r) : o.push(r);
            (r = T(
              e,
              ((g = o),
              (y = 0 < (v = i).length),
              (b = 0 < g.length),
              (a = function (e, t, n, a, i) {
                var o,
                  r,
                  s,
                  l = 0,
                  c = "0",
                  d = e && [],
                  u = [],
                  p = $,
                  m = e || (b && _.find.TAG("*", i)),
                  h = (x += null == p ? 1 : Math.random() || 0.1),
                  f = m.length;
                for (
                  i && ($ = t === w || t || i);
                  c !== f && null != (o = m[c]);
                  c++
                ) {
                  if (b && o) {
                    for (
                      r = 0, t || o.ownerDocument === w || (k(o), (n = !C));
                      (s = g[r++]);

                    )
                      if (s(o, t || w, n)) {
                        a.push(o);
                        break;
                      }
                    i && (x = h);
                  }
                  y && ((o = !s && o) && l--, e && d.push(o));
                }
                if (((l += c), y && c !== l)) {
                  for (r = 0; (s = v[r++]); ) s(d, u, t, n);
                  if (e) {
                    if (0 < l) for (; c--; ) d[c] || u[c] || (u[c] = I.call(a));
                    u = _e(u);
                  }
                  P.apply(a, u),
                    i &&
                      !e &&
                      0 < u.length &&
                      1 < l + v.length &&
                      oe.uniqueSort(a);
                }
                return i && ((x = h), ($ = p)), d;
              }),
              y ? se(a) : a)
            )).selector = e;
          }
          return r;
        }),
      (f = oe.select =
        function (e, t, n, a) {
          var i,
            o,
            r,
            s,
            l,
            c = "function" == typeof e && e,
            d = !a && h((e = c.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              2 < (o = d[0] = d[0].slice(0)).length &&
              "ID" === (r = o[0]).type &&
              9 === t.nodeType &&
              C &&
              _.relative[o[1].type]
            ) {
              if (!(t = (_.find.ID(r.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = X.needsContext.test(e) ? 0 : o.length;
              i-- && ((r = o[i]), !_.relative[(s = r.type)]);

            )
              if (
                (l = _.find[s]) &&
                (a = l(
                  r.matches[0].replace(Z, ee),
                  (Q.test(o[0].type) && fe(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = a.length && ve(o))))
                  return P.apply(n, a), n;
                break;
              }
          }
          return (
            (c || u(e, d))(
              a,
              t,
              !C,
              n,
              !t || (Q.test(e) && fe(t.parentNode)) || t
            ),
            n
          );
        }),
      (m.sortStable = S.split("").sort(E).join("") === S),
      (m.detectDuplicates = !!c),
      k(),
      (m.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(w.createElement("fieldset"));
      })),
      le(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ce("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (m.attributes &&
        le(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ce("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      le(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ce(L, function (e, t, n) {
          var a;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (a = e.getAttributeNode(t)) && a.specified
              ? a.value
              : null;
        }),
      oe
    );
  })(w);
  (S.find = _),
    (S.expr = _.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = _.uniqueSort),
    (S.text = _.getText),
    (S.isXMLDoc = _.isXML),
    (S.contains = _.contains),
    (S.escapeSelector = _.escape);
  var $ = function (e, t, n) {
      for (var a = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          a.push(e);
        }
      return a;
    },
    k = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    x = S.expr.match.needsContext,
    T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    E = /^.[^:#\[\.,]*$/;
  function A(e, n, a) {
    return S.isFunction(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== a;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== a;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== a;
        })
      : E.test(n)
      ? S.filter(n, e, a)
      : ((n = S.filter(n, e)),
        S.grep(e, function (e) {
          return -1 < i.call(n, e) !== a && 1 === e.nodeType;
        }));
  }
  (S.filter = function (e, t, n) {
    var a = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === a.nodeType
        ? S.find.matchesSelector(a, e)
          ? [a]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          a = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < a; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < a; t++) S.find(e, i[t], n);
        return 1 < a ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(A(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(A(this, e || [], !0));
      },
      is: function (e) {
        return !!A(this, "string" == typeof e && x.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var I,
    O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var a, i;
    if (!e) return this;
    if (((n = n || I), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : S.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(S)
        : S.makeArray(e, this);
    if (
      !(a =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : O.exec(e)) ||
      (!a[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (a[1]) {
      if (
        ((t = t instanceof S ? t[0] : t),
        S.merge(
          this,
          S.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
        ),
        T.test(a[1]) && S.isPlainObject(t))
      )
        for (a in t) S.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
      return this;
    }
    return (
      (i = C.getElementById(a[2])) && ((this[0] = i), (this.length = 1)), this
    );
  }).prototype = S.fn),
    (I = S(C));
  var P = /^(?:parents|prev(?:Until|All))/,
    N = { children: !0, contents: !0, next: !0, prev: !0 };
  function F(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        a = 0,
        i = this.length,
        o = [],
        r = "string" != typeof e && S(e);
      if (!x.test(e))
        for (; a < i; a++)
          for (n = this[a]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (r
                ? -1 < r.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return $(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return $(e, "parentNode", n);
        },
        next: function (e) {
          return F(e, "nextSibling");
        },
        prev: function (e) {
          return F(e, "previousSibling");
        },
        nextAll: function (e) {
          return $(e, "nextSibling");
        },
        prevAll: function (e) {
          return $(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return $(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return $(e, "previousSibling", n);
        },
        siblings: function (e) {
          return k((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return k(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || S.merge([], e.childNodes);
        },
      },
      function (a, i) {
        S.fn[a] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== a.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (N[a] || S.uniqueSort(n), P.test(a) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var L = /[^\x20\t\r\n\f]+/g;
  function D(e) {
    return e;
  }
  function H(e) {
    throw e;
  }
  function j(e, t, n) {
    var a;
    try {
      e && S.isFunction((a = e.promise))
        ? a.call(e).done(t).fail(n)
        : e && S.isFunction((a = e.then))
        ? a.call(e, t, n)
        : t.call(void 0, e);
    } catch (e) {
      n.call(void 0, e);
    }
  }
  (S.Callbacks = function (a) {
    var e, n;
    a =
      "string" == typeof a
        ? ((e = a),
          (n = {}),
          S.each(e.match(L) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, a);
    var i,
      t,
      o,
      r,
      s = [],
      l = [],
      c = -1,
      d = function () {
        for (r = a.once, o = i = !0; l.length; c = -1)
          for (t = l.shift(); ++c < s.length; )
            !1 === s[c].apply(t[0], t[1]) &&
              a.stopOnFalse &&
              ((c = s.length), (t = !1));
        a.memory || (t = !1), (i = !1), r && (s = t ? [] : "");
      },
      u = {
        add: function () {
          return (
            s &&
              (t && !i && ((c = s.length - 1), l.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  S.isFunction(t)
                    ? (a.unique && u.has(t)) || s.push(t)
                    : t && t.length && "string" !== S.type(t) && n(t);
                });
              })(arguments),
              t && !i && d()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              for (var n; -1 < (n = S.inArray(t, s, n)); )
                s.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (r = l = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (r = l = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, t) {
          return (
            r ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              i || d()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return u;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (a) {
                S.each(o, function (e, t) {
                  var n = S.isFunction(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && S.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(a.notify)
                          .done(a.resolve)
                          .fail(a.reject)
                      : a[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, a) {
              var l = 0;
              function c(i, o, r, s) {
                return function () {
                  var n = this,
                    a = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < l)) {
                        if ((e = r.apply(n, a)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          S.isFunction(t)
                            ? s
                              ? t.call(e, c(l, o, D, s), c(l, o, H, s))
                              : (l++,
                                t.call(
                                  e,
                                  c(l, o, D, s),
                                  c(l, o, H, s),
                                  c(l, o, D, o.notifyWith)
                                ))
                            : (r !== D && ((n = void 0), (a = [e])),
                              (s || o.resolveWith)(n, a));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              l <= i + 1 &&
                                (r !== H && ((n = void 0), (a = [e])),
                                o.rejectWith(n, a));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      w.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(c(0, e, S.isFunction(a) ? a : D, e.notifyWith)),
                  o[1][3].add(c(0, e, S.isFunction(t) ? t : D)),
                  o[2][3].add(c(0, e, S.isFunction(n) ? n : H));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, r) : r;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              a = t[5];
            (r[t[1]] = n.add),
              a &&
                n.add(
                  function () {
                    i = a;
                  },
                  o[3 - e][2].disable,
                  o[0][2].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          r.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          a = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          r = function (t) {
            return function (e) {
              (a[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(a, i);
            };
          };
        if (
          n <= 1 &&
          (j(e, o.done(r(t)).resolve, o.reject),
          "pending" === o.state() || S.isFunction(i[t] && i[t].then))
        )
          return o.then();
        for (; t--; ) j(i[t], r(t), o.reject);
        return o.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    w.console &&
      w.console.warn &&
      e &&
      M.test(e.name) &&
      w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      w.setTimeout(function () {
        throw e;
      });
    });
  var R = S.Deferred();
  function W() {
    C.removeEventListener("DOMContentLoaded", W),
      w.removeEventListener("load", W),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      R.then(e).catch(function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? S.readyWait++ : S.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          R.resolveWith(C, [S]);
      },
    }),
    (S.ready.then = R.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? w.setTimeout(S.ready)
      : (C.addEventListener("DOMContentLoaded", W),
        w.addEventListener("load", W));
  var q = function (e, t, n, a, i, o, r) {
      var s = 0,
        l = e.length,
        c = null == n;
      if ("object" === S.type(n))
        for (s in ((i = !0), n)) q(e, t, s, n[s], !0, o, r);
      else if (
        void 0 !== a &&
        ((i = !0),
        S.isFunction(a) || (r = !0),
        c &&
          (t = r
            ? (t.call(e, a), null)
            : ((c = t),
              function (e, t, n) {
                return c.call(S(e), n);
              })),
        t)
      )
        for (; s < l; s++) t(e[s], n, r ? a : a.call(e[s], s, t(e[s], n)));
      return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
    },
    U = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  function z() {
    this.expando = S.expando + z.uid++;
  }
  (z.uid = 1),
    (z.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            U(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var a,
          i = this.cache(e);
        if ("string" == typeof t) i[S.camelCase(t)] = n;
        else for (a in t) i[S.camelCase(a)] = t[a];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][S.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          a = e[this.expando];
        if (void 0 !== a) {
          if (void 0 !== t) {
            n = (t = S.isArray(t)
              ? t.map(S.camelCase)
              : (t = S.camelCase(t)) in a
              ? [t]
              : t.match(L) || []).length;
            for (; n--; ) delete a[t[n]];
          }
          (void 0 === t || S.isEmptyObject(a)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new z(),
    B = new z(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    V = /[A-Z]/g;
  function G(e, t, n) {
    var a, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((a = "data-" + t.replace(V, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(a)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : X.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        B.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return B.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return B.access(e, t, n);
    },
    removeData: function (e, t) {
      B.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          a,
          i,
          o = this[0],
          r = o && o.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                B.set(this, n);
              })
            : q(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e) {
                    if (void 0 !== (t = B.get(o, n))) return t;
                    if (void 0 !== (t = G(o, n))) return t;
                  } else
                    this.each(function () {
                      B.set(this, n, e);
                    });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = B.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
        ) {
          for (t = r.length; t--; )
            r[t] &&
              0 === (a = r[t].name).indexOf("data-") &&
              ((a = S.camelCase(a.slice(5))), G(o, a, i[a]));
          Y.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          B.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var a;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (a = Y.get(e, t)),
            n &&
              (!a || S.isArray(n)
                ? (a = Y.access(e, t, S.makeArray(n)))
                : a.push(n)),
            a || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          a = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), a--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !a && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          a = 1,
          i = S.Deferred(),
          o = this,
          r = this.length,
          s = function () {
            --a || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          r--;

        )
          (n = Y.get(o[r], e + "queueHooks")) &&
            n.empty &&
            (a++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    K = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    Z = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          S.contains(e.ownerDocument, e) &&
          "none" === S.css(e, "display"))
      );
    },
    ee = function (e, t, n, a) {
      var i,
        o,
        r = {};
      for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, a || [])), t)) e.style[o] = r[o];
      return i;
    };
  function te(e, t, n, a) {
    var i,
      o = 1,
      r = 20,
      s = a
        ? function () {
            return a.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      l = s(),
      c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      d = (S.cssNumber[t] || ("px" !== c && +l)) && K.exec(S.css(e, t));
    if (d && d[3] !== c)
      for (
        c = c || d[3], n = n || [], d = +l || 1;
        (d /= o = o || ".5"),
          S.style(e, t, d + c),
          o !== (o = s() / l) && 1 !== o && --r;

      );
    return (
      n &&
        ((d = +d || +l || 0),
        (i = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
        a && ((a.unit = c), (a.start = d), (a.end = i))),
      i
    );
  }
  var ne = {};
  function ae(e, t) {
    for (var n, a, i = [], o = 0, r = e.length; o < r; o++)
      (a = e[o]).style &&
        ((n = a.style.display),
        t
          ? ("none" === n &&
              ((i[o] = Y.get(a, "display") || null),
              i[o] || (a.style.display = "")),
            "" === a.style.display &&
              Z(a) &&
              (i[o] =
                ((u = c = l = void 0),
                (c = (s = a).ownerDocument),
                (d = s.nodeName),
                (u = ne[d]) ||
                  ((l = c.body.appendChild(c.createElement(d))),
                  (u = S.css(l, "display")),
                  l.parentNode.removeChild(l),
                  "none" === u && (u = "block"),
                  (ne[d] = u)))))
          : "none" !== n && ((i[o] = "none"), Y.set(a, "display", n)));
    var s, l, c, d, u;
    for (o = 0; o < r; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return ae(this, !0);
    },
    hide: function () {
      return ae(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Z(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ie = /^(?:checkbox|radio)$/i,
    oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    re = /^$|\/(?:java|ecma)script/i,
    se = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function le(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && S.nodeName(e, t)) ? S.merge([e], n) : n
    );
  }
  function ce(e, t) {
    for (var n = 0, a = e.length; n < a; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (se.optgroup = se.option),
    (se.tbody = se.tfoot = se.colgroup = se.caption = se.thead),
    (se.th = se.td);
  var de,
    ue,
    pe = /<|&#?\w+;/;
  function me(e, t, n, a, i) {
    for (
      var o,
        r,
        s,
        l,
        c,
        d,
        u = t.createDocumentFragment(),
        p = [],
        m = 0,
        h = e.length;
      m < h;
      m++
    )
      if ((o = e[m]) || 0 === o)
        if ("object" === S.type(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (pe.test(o)) {
          for (
            r = r || u.appendChild(t.createElement("div")),
              s = (oe.exec(o) || ["", ""])[1].toLowerCase(),
              l = se[s] || se._default,
              r.innerHTML = l[1] + S.htmlPrefilter(o) + l[2],
              d = l[0];
            d--;

          )
            r = r.lastChild;
          S.merge(p, r.childNodes), ((r = u.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (u.textContent = "", m = 0; (o = p[m++]); )
      if (a && -1 < S.inArray(o, a)) i && i.push(o);
      else if (
        ((c = S.contains(o.ownerDocument, o)),
        (r = le(u.appendChild(o), "script")),
        c && ce(r),
        n)
      )
        for (d = 0; (o = r[d++]); ) re.test(o.type || "") && n.push(o);
    return u;
  }
  (de = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (ue = C.createElement("input")).setAttribute("type", "radio"),
    ue.setAttribute("checked", "checked"),
    ue.setAttribute("name", "t"),
    de.appendChild(ue),
    (g.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (de.innerHTML = "<textarea>x</textarea>"),
    (g.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue);
  var he = C.documentElement,
    fe = /^key/,
    ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ve = /^([^.]*)(?:\.(.+)|)/;
  function ye() {
    return !0;
  }
  function be() {
    return !1;
  }
  function _e() {
    try {
      return C.activeElement;
    } catch (e) {}
  }
  function $e(e, t, n, a, i, o) {
    var r, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((a = a || n), (n = void 0)), t))
        $e(e, s, n, a, t[s], o);
      return e;
    }
    if (
      (null == a && null == i
        ? ((i = n), (a = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = a), (a = void 0))
            : ((i = a), (a = n), (n = void 0))),
      !1 === i)
    )
      i = be;
    else if (!i) return e;
    return (
      1 === o &&
        ((r = i),
        ((i = function (e) {
          return S().off(e), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, a, n);
      })
    );
  }
  (S.event = {
    global: {},
    add: function (t, e, n, a, i) {
      var o,
        r,
        s,
        l,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        g = Y.get(t);
      if (g)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && S.find.matchesSelector(he, i),
            n.guid || (n.guid = S.guid++),
            (l = g.events) || (l = g.events = {}),
            (r = g.handle) ||
              (r = g.handle =
                function (e) {
                  return void 0 !== S && S.event.triggered !== e.type
                    ? S.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            c = (e = (e || "").match(L) || [""]).length;
          c--;

        )
          (m = f = (s = ve.exec(e[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            m &&
              ((u = S.event.special[m] || {}),
              (m = (i ? u.delegateType : u.bindType) || m),
              (u = S.event.special[m] || {}),
              (d = S.extend(
                {
                  type: m,
                  origType: f,
                  data: a,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = l[m]) ||
                (((p = l[m] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, a, h, r)) ||
                  (t.addEventListener && t.addEventListener(m, r))),
              u.add &&
                (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (S.event.global[m] = !0));
    },
    remove: function (e, t, n, a, i) {
      var o,
        r,
        s,
        l,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        g = Y.hasData(e) && Y.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(L) || [""]).length; c--; )
          if (
            ((m = f = (s = ve.exec(t[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            m)
          ) {
            for (
              u = S.event.special[m] || {},
                p = l[(m = (a ? u.delegateType : u.bindType) || m)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = o = p.length;
              o--;

            )
              (d = p[o]),
                (!i && f !== d.origType) ||
                  (n && n.guid !== d.guid) ||
                  (s && !s.test(d.namespace)) ||
                  (a && a !== d.selector && ("**" !== a || !d.selector)) ||
                  (p.splice(o, 1),
                  d.selector && p.delegateCount--,
                  u.remove && u.remove.call(e, d));
            r &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                S.removeEvent(e, m, g.handle),
              delete l[m]);
          } else for (m in l) S.event.remove(e, m + t[c], n, a, !0);
        S.isEmptyObject(l) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        a,
        i,
        o,
        r,
        s = S.event.fix(e),
        l = new Array(arguments.length),
        c = (Y.get(this, "events") || {})[s.type] || [],
        d = S.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, s))
      ) {
        for (
          r = S.event.handlers.call(this, s, c), t = 0;
          (i = r[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (a = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, l)) &&
                !1 === (s.result = a) &&
                (s.preventDefault(), s.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        a,
        i,
        o,
        r,
        s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], r = {}, n = 0; n < l; n++)
              void 0 === r[(i = (a = t[n]).selector + " ")] &&
                (r[i] = a.needsContext
                  ? -1 < S(i, this).index(c)
                  : S.find(i, this, null, [c]).length),
                r[i] && o.push(a);
            o.length && s.push({ elem: c, handlers: o });
          }
      return (
        (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: S.isFunction(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== _e() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === _e() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            S.nodeName(this, "input")
          )
            return this.click(), !1;
        },
        _default: function (e) {
          return S.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      return this instanceof S.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? ye
                  : be),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && S.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || S.now()),
          void (this[S.expando] = !0))
        : new S.Event(e, t);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: be,
      isPropagationStopped: be,
      isImmediatePropagationStopped: be,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ye),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ye),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ye),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && fe.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && ge.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              a = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = a.origType),
                (t = a.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, a) {
        return $e(this, e, t, n, a);
      },
      one: function (e, t, n, a) {
        return $e(this, e, t, n, a, 1);
      },
      off: function (e, t, n) {
        var a, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (a = e.handleObj),
            S(e.delegateTarget).off(
              a.namespace ? a.origType + "." + a.namespace : a.origType,
              a.selector,
              a.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = be),
            this.each(function () {
              S.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    });
  var ke =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    we = /<script|<style|<link/i,
    Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^true\/(.*)/,
    xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Te(e, t) {
    return (
      (S.nodeName(e, "table") &&
        S.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        e.getElementsByTagName("tbody")[0]) ||
      e
    );
  }
  function Ee(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Ae(e) {
    var t = Se.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function Ie(e, t) {
    var n, a, i, o, r, s, l, c;
    if (1 === t.nodeType) {
      if (
        Y.hasData(e) &&
        ((o = Y.access(e)), (r = Y.set(t, o)), (c = o.events))
      )
        for (i in (delete r.handle, (r.events = {}), c))
          for (n = 0, a = c[i].length; n < a; n++) S.event.add(t, i, c[i][n]);
      B.hasData(e) && ((s = B.access(e)), (l = S.extend({}, s)), B.set(t, l));
    }
  }
  function Oe(n, a, i, o) {
    a = f.apply([], a);
    var e,
      t,
      r,
      s,
      l,
      c,
      d = 0,
      u = n.length,
      p = u - 1,
      m = a[0],
      h = S.isFunction(m);
    if (h || (1 < u && "string" == typeof m && !g.checkClone && Ce.test(m)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (a[0] = m.call(this, e, t.html())), Oe(t, a, i, o);
      });
    if (
      u &&
      ((t = (e = me(a, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (r = S.map(le(e, "script"), Ee)).length; d < u; d++)
        (l = e),
          d !== p &&
            ((l = S.clone(l, !0, !0)), s && S.merge(r, le(l, "script"))),
          i.call(n[d], l, d);
      if (s)
        for (c = r[r.length - 1].ownerDocument, S.map(r, Ae), d = 0; d < s; d++)
          (l = r[d]),
            re.test(l.type || "") &&
              !Y.access(l, "globalEval") &&
              S.contains(c, l) &&
              (l.src
                ? S._evalUrl && S._evalUrl(l.src)
                : v(l.textContent.replace(xe, ""), c));
    }
    return n;
  }
  function Pe(e, t, n) {
    for (var a, i = t ? S.filter(t, e) : e, o = 0; null != (a = i[o]); o++)
      n || 1 !== a.nodeType || S.cleanData(le(a)),
        a.parentNode &&
          (n && S.contains(a.ownerDocument, a) && ce(le(a, "script")),
          a.parentNode.removeChild(a));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e.replace(ke, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var a,
        i,
        o,
        r,
        s,
        l,
        c,
        d = e.cloneNode(!0),
        u = S.contains(e.ownerDocument, e);
      if (
        !(
          g.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (r = le(d), a = 0, i = (o = le(e)).length; a < i; a++)
          (s = o[a]),
            (l = r[a]),
            void 0,
            "input" === (c = l.nodeName.toLowerCase()) && ie.test(s.type)
              ? (l.checked = s.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || le(e), r = r || le(d), a = 0, i = o.length; a < i; a++)
            Ie(o[a], r[a]);
        else Ie(e, d);
      return (
        0 < (r = le(d, "script")).length && ce(r, !u && le(e, "script")), d
      );
    },
    cleanData: function (e) {
      for (var t, n, a, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (U(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (a in t.events)
                i[a] ? S.event.remove(n, a) : S.removeEvent(n, a, t.handle);
            n[Y.expando] = void 0;
          }
          n[B.expando] && (n[B.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return q(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Oe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Te(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Oe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Te(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(le(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return q(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              a = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !we.test(e) &&
              !se[(oe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < a; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(le(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Oe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(le(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, r) {
        S.fn[e] = function (e) {
          for (var t, n = [], a = S(e), i = a.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(a[o])[r](t),
              l.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Ne = /^margin/,
    Fe = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
    Le = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = w), t.getComputedStyle(e);
    };
  function De(e, t, n) {
    var a,
      i,
      o,
      r,
      s = e.style;
    return (
      (n = n || Le(e)) &&
        ("" !== (r = n.getPropertyValue(t) || n[t]) ||
          S.contains(e.ownerDocument, e) ||
          (r = S.style(e, t)),
        !g.pixelMarginRight() &&
          Fe.test(r) &&
          Ne.test(t) &&
          ((a = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = r),
          (r = n.width),
          (s.width = a),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== r ? r + "" : r
    );
  }
  function He(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  !(function () {
    function e() {
      if (r) {
        (r.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (r.innerHTML = ""),
          he.appendChild(o);
        var e = w.getComputedStyle(r);
        (t = "1%" !== e.top),
          (i = "2px" === e.marginLeft),
          (n = "4px" === e.width),
          (r.style.marginRight = "50%"),
          (a = "4px" === e.marginRight),
          he.removeChild(o),
          (r = null);
      }
    }
    var t,
      n,
      a,
      i,
      o = C.createElement("div"),
      r = C.createElement("div");
    r.style &&
      ((r.style.backgroundClip = "content-box"),
      (r.cloneNode(!0).style.backgroundClip = ""),
      (g.clearCloneStyle = "content-box" === r.style.backgroundClip),
      (o.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      o.appendChild(r),
      S.extend(g, {
        pixelPosition: function () {
          return e(), t;
        },
        boxSizingReliable: function () {
          return e(), n;
        },
        pixelMarginRight: function () {
          return e(), a;
        },
        reliableMarginLeft: function () {
          return e(), i;
        },
      }));
  })();
  var je = /^(none|table(?!-c[ea]).+)/,
    Me = { position: "absolute", visibility: "hidden", display: "block" },
    Re = { letterSpacing: "0", fontWeight: "400" },
    We = ["Webkit", "Moz", "ms"],
    qe = C.createElement("div").style;
  function Ue(e) {
    if (e in qe) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--; )
      if ((e = We[n] + t) in qe) return e;
  }
  function ze(e, t, n) {
    var a = K.exec(t);
    return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t;
  }
  function Ye(e, t, n, a, i) {
    var o,
      r = 0;
    for (
      o = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
      o < 4;
      o += 2
    )
      "margin" === n && (r += S.css(e, n + Q[o], !0, i)),
        a
          ? ("content" === n && (r -= S.css(e, "padding" + Q[o], !0, i)),
            "margin" !== n && (r -= S.css(e, "border" + Q[o] + "Width", !0, i)))
          : ((r += S.css(e, "padding" + Q[o], !0, i)),
            "padding" !== n &&
              (r += S.css(e, "border" + Q[o] + "Width", !0, i)));
    return r;
  }
  function Be(e, t, n) {
    var a,
      i = !0,
      o = Le(e),
      r = "border-box" === S.css(e, "boxSizing", !1, o);
    if (
      (e.getClientRects().length && (a = e.getBoundingClientRect()[t]),
      a <= 0 || null == a)
    ) {
      if (
        (((a = De(e, t, o)) < 0 || null == a) && (a = e.style[t]), Fe.test(a))
      )
        return a;
      (i = r && (g.boxSizingReliable() || a === e.style[t])),
        (a = parseFloat(a) || 0);
    }
    return a + Ye(e, t, n || (r ? "border" : "content"), i, o) + "px";
  }
  function Xe(e, t, n, a, i) {
    return new Xe.prototype.init(e, t, n, a, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = De(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, a) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          r,
          s = S.camelCase(t),
          l = e.style;
        return (
          (t = S.cssProps[s] || (S.cssProps[s] = Ue(s) || s)),
          (r = S.cssHooks[t] || S.cssHooks[s]),
          void 0 === n
            ? r && "get" in r && void 0 !== (i = r.get(e, !1, a))
              ? i
              : l[t]
            : ("string" === (o = typeof n) &&
                (i = K.exec(n)) &&
                i[1] &&
                ((n = te(e, t, i)), (o = "number")),
              void (
                null != n &&
                n == n &&
                ("number" === o &&
                  (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                g.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (r && "set" in r && void 0 === (n = r.set(e, n, a))) ||
                  (l[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, a) {
      var i,
        o,
        r,
        s = S.camelCase(t);
      return (
        (t = S.cssProps[s] || (S.cssProps[s] = Ue(s) || s)),
        (r = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in r &&
          (i = r.get(e, !0, n)),
        void 0 === i && (i = De(e, t, a)),
        "normal" === i && t in Re && (i = Re[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, r) {
      S.cssHooks[r] = {
        get: function (e, t, n) {
          if (t)
            return !je.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Be(e, r, n)
              : ee(e, Me, function () {
                  return Be(e, r, n);
                });
        },
        set: function (e, t, n) {
          var a,
            i = n && Le(e),
            o =
              n &&
              Ye(e, r, n, "border-box" === S.css(e, "boxSizing", !1, i), i);
          return (
            o &&
              (a = K.exec(t)) &&
              "px" !== (a[3] || "px") &&
              ((e.style[r] = t), (t = S.css(e, r))),
            ze(0, t, o)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = He(g.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(De(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ee(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, a = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = a[t] || a[t - 2] || a[0];
          return n;
        },
      }),
        Ne.test(i) || (S.cssHooks[i + o].set = ze);
    }),
    S.fn.extend({
      css: function (e, t) {
        return q(
          this,
          function (e, t, n) {
            var a,
              i,
              o = {},
              r = 0;
            if (S.isArray(t)) {
              for (a = Le(e), i = t.length; r < i; r++)
                o[t[r]] = S.css(e, t[r], !1, a);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Xe).prototype = {
      constructor: Xe,
      init: function (e, t, n, a, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = a),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Xe.propHooks[this.prop];
        return e && e.get ? e.get(this) : Xe.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Xe.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Xe.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Xe.prototype),
    ((Xe.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Xe.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Xe.prototype.init),
    (S.fx.step = {});
  var Ve,
    Ge,
    Je,
    Ke,
    Qe = /^(?:toggle|show|hide)$/,
    Ze = /queueHooks$/;
  function et() {
    Ge && (w.requestAnimationFrame(et), S.fx.tick());
  }
  function tt() {
    return (
      w.setTimeout(function () {
        Ve = void 0;
      }),
      (Ve = S.now())
    );
  }
  function nt(e, t) {
    var n,
      a = 0,
      i = { height: e };
    for (t = t ? 1 : 0; a < 4; a += 2 - t)
      i["margin" + (n = Q[a])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function at(e, t, n) {
    for (
      var a,
        i = (it.tweeners[t] || []).concat(it.tweeners["*"]),
        o = 0,
        r = i.length;
      o < r;
      o++
    )
      if ((a = i[o].call(n, t, e))) return a;
  }
  function it(o, e, t) {
    var n,
      r,
      a = 0,
      i = it.prefilters.length,
      s = S.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var e = Ve || tt(),
            t = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (t / c.duration || 0),
            a = 0,
            i = c.tweens.length;
          a < i;
          a++
        )
          c.tweens[a].run(n);
        return (
          s.notifyWith(o, [c, n, t]),
          n < 1 && i ? t : (s.resolveWith(o, [c]), !1)
        );
      },
      c = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ve || tt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            c.opts,
            e,
            t,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; t < n; t++) c.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c, e]))
              : s.rejectWith(o, [c, e]),
            this
          );
        },
      }),
      d = c.props;
    for (
      (function (e, t) {
        var n, a, i, o, r;
        for (n in e)
          if (
            ((i = t[(a = S.camelCase(n))]),
            (o = e[n]),
            S.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== a && ((e[a] = o), delete e[n]),
            (r = S.cssHooks[a]) && ("expand" in r))
          )
            for (n in ((o = r.expand(o)), delete e[a], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[a] = i;
      })(d, c.opts.specialEasing);
      a < i;
      a++
    )
      if ((n = it.prefilters[a].call(c, o, d, c.opts)))
        return (
          S.isFunction(n.stop) &&
            (S._queueHooks(c.elem, c.opts.queue).stop = S.proxy(n.stop, n)),
          n
        );
    return (
      S.map(d, at, c),
      S.isFunction(c.opts.start) && c.opts.start.call(o, c),
      S.fx.timer(S.extend(l, { elem: o, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  (S.Animation = S.extend(it, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, K.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n,
          a = 0,
          i = (e = S.isFunction(e) ? ((t = e), ["*"]) : e.match(L)).length;
        a < i;
        a++
      )
        (n = e[a]),
          (it.tweeners[n] = it.tweeners[n] || []),
          it.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var a,
          i,
          o,
          r,
          s,
          l,
          c,
          d,
          u = "width" in t || "height" in t,
          p = this,
          m = {},
          h = e.style,
          f = e.nodeType && Z(e),
          g = Y.get(e, "fxshow");
        for (a in (n.queue ||
          (null == (r = S._queueHooks(e, "fx")).unqueued &&
            ((r.unqueued = 0),
            (s = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || s();
            })),
          r.unqueued++,
          p.always(function () {
            p.always(function () {
              r.unqueued--, S.queue(e, "fx").length || r.empty.fire();
            });
          })),
        t))
          if (((i = t[a]), Qe.test(i))) {
            if (
              (delete t[a],
              (o = o || "toggle" === i),
              i === (f ? "hide" : "show"))
            ) {
              if ("show" !== i || !g || void 0 === g[a]) continue;
              f = !0;
            }
            m[a] = (g && g[a]) || S.style(e, a);
          }
        if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(m))
          for (a in (u &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (c = g && g.display) && (c = Y.get(e, "display")),
            "none" === (d = S.css(e, "display")) &&
              (c
                ? (d = c)
                : (ae([e], !0),
                  (c = e.style.display || c),
                  (d = S.css(e, "display")),
                  ae([e]))),
            ("inline" === d || ("inline-block" === d && null != c)) &&
              "none" === S.css(e, "float") &&
              (l ||
                (p.done(function () {
                  h.display = c;
                }),
                null == c && ((d = h.display), (c = "none" === d ? "" : d))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          m))
            l ||
              (g
                ? "hidden" in g && (f = g.hidden)
                : (g = Y.access(e, "fxshow", { display: c })),
              o && (g.hidden = !f),
              f && ae([e], !0),
              p.done(function () {
                for (a in (f || ae([e]), Y.remove(e, "fxshow"), m))
                  S.style(e, a, m[a]);
              })),
              (l = at(f ? g[a] : 0, a, p)),
              a in g ||
                ((g[a] = l.start), f && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? it.prefilters.unshift(e) : it.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var a =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (S.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !S.isFunction(t) && t),
            };
      return (
        S.fx.off || C.hidden
          ? (a.duration = 0)
          : "number" != typeof a.duration &&
            (a.duration in S.fx.speeds
              ? (a.duration = S.fx.speeds[a.duration])
              : (a.duration = S.fx.speeds._default)),
        (null != a.queue && !0 !== a.queue) || (a.queue = "fx"),
        (a.old = a.complete),
        (a.complete = function () {
          S.isFunction(a.old) && a.old.call(this),
            a.queue && S.dequeue(this, a.queue);
        }),
        a
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, a) {
        return this.filter(Z)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, a);
      },
      animate: function (t, e, n, a) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, a),
          r = function () {
            var e = it(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (r.finish = r),
          i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        );
      },
      stop: function (i, e, o) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              a = Y.get(this);
            if (t) a[t] && a[t].stop && r(a[t]);
            else for (t in a) a[t] && a[t].stop && Ze.test(t) && r(a[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (r) {
        return (
          !1 !== r && (r = r || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[r + "queue"],
              a = t[r + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, r, []),
                a && a.stop && a.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === r &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, a) {
      var i = S.fn[a];
      S.fn[a] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(nt(a, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: nt("show"),
        slideUp: nt("hide"),
        slideToggle: nt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, a) {
        S.fn[e] = function (e, t, n) {
          return this.animate(a, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ve = S.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ve = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), e() ? S.fx.start() : S.timers.pop();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      Ge ||
        (Ge = w.requestAnimationFrame
          ? w.requestAnimationFrame(et)
          : w.setInterval(S.fx.tick, S.fx.interval));
    }),
    (S.fx.stop = function () {
      w.cancelAnimationFrame ? w.cancelAnimationFrame(Ge) : w.clearInterval(Ge),
        (Ge = null);
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (a, e) {
      return (
        (a = (S.fx && S.fx.speeds[a]) || a),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = w.setTimeout(e, a);
          t.stop = function () {
            w.clearTimeout(n);
          };
        })
      );
    }),
    (Je = C.createElement("input")),
    (Ke = C.createElement("select").appendChild(C.createElement("option"))),
    (Je.type = "checkbox"),
    (g.checkOn = "" !== Je.value),
    (g.optSelected = Ke.selected),
    ((Je = C.createElement("input")).value = "t"),
    (Je.type = "radio"),
    (g.radioValue = "t" === Je.value);
  var ot,
    rt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return q(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var a,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ot : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (a = i.set(e, n, t))
                  ? a
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (a = i.get(e, t))
                ? a
                : null == (a = S.find.attr(e, t))
                ? void 0
                : a);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!g.radioValue && "radio" === t && S.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          a = 0,
          i = t && t.match(L);
        if (i && 1 === e.nodeType) for (; (n = i[a++]); ) e.removeAttribute(n);
      },
    }),
    (ot = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var r = rt[t] || S.find.attr;
      rt[t] = function (e, t, n) {
        var a,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = rt[o]),
            (rt[o] = a),
            (a = null != r(e, t, n) ? o : null),
            (rt[o] = i)),
          a
        );
      };
    });
  var st = /^(?:input|select|textarea|button)$/i,
    lt = /^(?:a|area)$/i;
  function ct(e) {
    return (e.match(L) || []).join(" ");
  }
  function dt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  S.fn.extend({
    prop: function (e, t) {
      return q(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var a,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (a = i.set(e, n, t))
                ? a
                : (e[t] = n)
              : i && "get" in i && null !== (a = i.get(e, t))
              ? a
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : st.test(e.nodeName) || (lt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    g.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          a,
          i,
          o,
          r,
          s,
          l = 0;
        if (S.isFunction(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, dt(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(L) || []; (n = this[l++]); )
            if (((i = dt(n)), (a = 1 === n.nodeType && " " + ct(i) + " "))) {
              for (r = 0; (o = e[r++]); )
                a.indexOf(" " + o + " ") < 0 && (a += o + " ");
              i !== (s = ct(a)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          a,
          i,
          o,
          r,
          s,
          l = 0;
        if (S.isFunction(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, dt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(L) || []; (n = this[l++]); )
            if (((i = dt(n)), (a = 1 === n.nodeType && " " + ct(i) + " "))) {
              for (r = 0; (o = e[r++]); )
                for (; -1 < a.indexOf(" " + o + " "); )
                  a = a.replace(" " + o + " ", " ");
              i !== (s = ct(a)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i;
        return "boolean" == typeof t && "string" === o
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : S.isFunction(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, dt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, a;
              if ("string" === o)
                for (t = 0, n = S(this), a = i.match(L) || []; (e = a[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== i && "boolean" !== o) ||
                  ((e = dt(this)) && Y.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === i ? "" : Y.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          a = 0;
        for (t = " " + e + " "; (n = this[a++]); )
          if (1 === n.nodeType && -1 < (" " + ct(dt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var ut = /\r/g;
  S.fn.extend({
    val: function (n) {
      var a,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = S.isFunction(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : S.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((a =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in a &&
                void 0 !== a.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (a = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in a &&
          void 0 !== (e = a.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(ut, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ct(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              a,
              i = e.options,
              o = e.selectedIndex,
              r = "select-one" === e.type,
              s = r ? null : [],
              l = r ? o + 1 : i.length;
            for (a = o < 0 ? l : r ? o : 0; a < l; a++)
              if (
                ((n = i[a]).selected || a === o) &&
                !n.disabled &&
                (!n.parentNode.disabled ||
                  !S.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), r)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, a, i = e.options, o = S.makeArray(t), r = i.length;
              r--;

            )
              ((a = i[r]).selected =
                -1 < S.inArray(S.valHooks.option.get(a), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (S.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        g.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var pt = /^(?:focusinfocus|focusoutblur)$/;
  S.extend(S.event, {
    trigger: function (e, t, n, a) {
      var i,
        o,
        r,
        s,
        l,
        c,
        d,
        u = [n || C],
        p = h.call(e, "type") ? e.type : e,
        m = h.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = r = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !pt.test(p + S.event.triggered) &&
          (-1 < p.indexOf(".") && ((p = (m = p.split(".")).shift()), m.sort()),
          (l = p.indexOf(":") < 0 && "on" + p),
          ((e = e[S.expando]
            ? e
            : new S.Event(p, "object" == typeof e && e)).isTrigger = a ? 2 : 3),
          (e.namespace = m.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (d = S.event.special[p] || {}),
          a || !d.trigger || !1 !== d.trigger.apply(n, t)))
      ) {
        if (!a && !d.noBubble && !S.isWindow(n)) {
          for (
            s = d.delegateType || p, pt.test(s + p) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            u.push(o), (r = o);
          r === (n.ownerDocument || C) &&
            u.push(r.defaultView || r.parentWindow || w);
        }
        for (i = 0; (o = u[i++]) && !e.isPropagationStopped(); )
          (e.type = 1 < i ? s : d.bindType || p),
            (c = (Y.get(o, "events") || {})[e.type] && Y.get(o, "handle")) &&
              c.apply(o, t),
            (c = l && o[l]) &&
              c.apply &&
              U(o) &&
              ((e.result = c.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          a ||
            e.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(u.pop(), t)) ||
            !U(n) ||
            (l &&
              S.isFunction(n[p]) &&
              !S.isWindow(n) &&
              ((r = n[l]) && (n[l] = null),
              n[(S.event.triggered = p)](),
              (S.event.triggered = void 0),
              r && (n[l] = r))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var a = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(a, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    S.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (g.focusin = "onfocusin" in w),
    g.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, a) {
        var i = function (e) {
          S.event.simulate(a, e.target, S.event.fix(e));
        };
        S.event.special[a] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Y.access(e, a);
            t || e.addEventListener(n, i, !0), Y.access(e, a, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Y.access(e, a) - 1;
            t
              ? Y.access(e, a, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, a));
          },
        };
      });
  var mt = w.location,
    ht = S.now(),
    ft = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new w.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var gt = /\[\]$/,
    vt = /\r?\n/g,
    yt = /^(?:submit|button|image|reset|file)$/i,
    bt = /^(?:input|select|textarea|keygen)/i;
  function _t(n, e, a, i) {
    var t;
    if (S.isArray(e))
      S.each(e, function (e, t) {
        a || gt.test(n)
          ? i(n, t)
          : _t(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              a,
              i
            );
      });
    else if (a || "object" !== S.type(e)) i(n, e);
    else for (t in e) _t(n + "[" + t + "]", e[t], a, i);
  }
  (S.param = function (e, t) {
    var n,
      a = [],
      i = function (e, t) {
        var n = S.isFunction(t) ? t() : t;
        a[a.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (S.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) _t(n, e[n], t, i);
    return a.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              bt.test(this.nodeName) &&
              !yt.test(e) &&
              (this.checked || !ie.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : S.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(vt, "\r\n") };
                })
              : { name: t.name, value: n.replace(vt, "\r\n") };
          })
          .get();
      },
    });
  var $t = /%20/g,
    kt = /#.*$/,
    wt = /([?&])_=[^&]*/,
    Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    St = /^(?:GET|HEAD)$/,
    xt = /^\/\//,
    Tt = {},
    Et = {},
    At = "*/".concat("*"),
    It = C.createElement("a");
  function Ot(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        a = 0,
        i = e.toLowerCase().match(L) || [];
      if (S.isFunction(t))
        for (; (n = i[a++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Pt(t, i, o, r) {
    var s = {},
      l = t === Et;
    function c(e) {
      var a;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, r);
          return "string" != typeof n || l || s[n]
            ? l
              ? !(a = n)
              : void 0
            : (i.dataTypes.unshift(n), c(n), !1);
        }),
        a
      );
    }
    return c(i.dataTypes[0]) || (!s["*"] && c("*"));
  }
  function Nt(e, t) {
    var n,
      a,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : a || (a = {}))[n] = t[n]);
    return a && S.extend(!0, e, a), e;
  }
  (It.href = mt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: mt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            mt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": At,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Nt(Nt(e, S.ajaxSettings), t) : Nt(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ot(Tt),
      ajaxTransport: Ot(Et),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var d,
          u,
          p,
          n,
          m,
          a,
          h,
          f,
          i,
          o,
          g = S.ajaxSetup({}, t),
          v = g.context || g,
          y = g.context && (v.nodeType || v.jquery) ? S(v) : S.event,
          b = S.Deferred(),
          _ = S.Callbacks("once memory"),
          $ = g.statusCode || {},
          r = {},
          s = {},
          l = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = Ct.exec(p)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (r[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (g.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) k.always(e[k.status]);
                else for (t in e) $[t] = [$[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || l;
              return d && d.abort(t), c(0, t), this;
            },
          };
        if (
          (b.promise(k),
          (g.url = ((e || g.url || mt.href) + "").replace(
            xt,
            mt.protocol + "//"
          )),
          (g.type = t.method || t.type || g.method || g.type),
          (g.dataTypes = (g.dataType || "*").toLowerCase().match(L) || [""]),
          null == g.crossDomain)
        ) {
          a = C.createElement("a");
          try {
            (a.href = g.url),
              (a.href = a.href),
              (g.crossDomain =
                It.protocol + "//" + It.host != a.protocol + "//" + a.host);
          } catch (e) {
            g.crossDomain = !0;
          }
        }
        if (
          (g.data &&
            g.processData &&
            "string" != typeof g.data &&
            (g.data = S.param(g.data, g.traditional)),
          Pt(Tt, g, t, k),
          h)
        )
          return k;
        for (i in ((f = S.event && g.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (g.type = g.type.toUpperCase()),
        (g.hasContent = !St.test(g.type)),
        (u = g.url.replace(kt, "")),
        g.hasContent
          ? g.data &&
            g.processData &&
            0 ===
              (g.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (g.data = g.data.replace($t, "+"))
          : ((o = g.url.slice(u.length)),
            g.data && ((u += (ft.test(u) ? "&" : "?") + g.data), delete g.data),
            !1 === g.cache &&
              ((u = u.replace(wt, "$1")),
              (o = (ft.test(u) ? "&" : "?") + "_=" + ht++ + o)),
            (g.url = u + o)),
        g.ifModified &&
          (S.lastModified[u] &&
            k.setRequestHeader("If-Modified-Since", S.lastModified[u]),
          S.etag[u] && k.setRequestHeader("If-None-Match", S.etag[u])),
        ((g.data && g.hasContent && !1 !== g.contentType) || t.contentType) &&
          k.setRequestHeader("Content-Type", g.contentType),
        k.setRequestHeader(
          "Accept",
          g.dataTypes[0] && g.accepts[g.dataTypes[0]]
            ? g.accepts[g.dataTypes[0]] +
                ("*" !== g.dataTypes[0] ? ", " + At + "; q=0.01" : "")
            : g.accepts["*"]
        ),
        g.headers))
          k.setRequestHeader(i, g.headers[i]);
        if (g.beforeSend && (!1 === g.beforeSend.call(v, k, g) || h))
          return k.abort();
        if (
          ((l = "abort"),
          _.add(g.complete),
          k.done(g.success),
          k.fail(g.error),
          (d = Pt(Et, g, t, k)))
        ) {
          if (((k.readyState = 1), f && y.trigger("ajaxSend", [k, g]), h))
            return k;
          g.async &&
            0 < g.timeout &&
            (m = w.setTimeout(function () {
              k.abort("timeout");
            }, g.timeout));
          try {
            (h = !1), d.send(r, c);
          } catch (e) {
            if (h) throw e;
            c(-1, e);
          }
        } else c(-1, "No Transport");
        function c(e, t, n, a) {
          var i,
            o,
            r,
            s,
            l,
            c = t;
          h ||
            ((h = !0),
            m && w.clearTimeout(m),
            (d = void 0),
            (p = a || ""),
            (k.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                for (
                  var a, i, o, r, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === a &&
                      (a = e.mimeType || t.getResponseHeader("Content-Type"));
                if (a)
                  for (i in s)
                    if (s[i] && s[i].test(a)) {
                      l.unshift(i);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                      o = i;
                      break;
                    }
                    r || (r = i);
                  }
                  o = o || r;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(g, k, n)),
            (s = (function (e, t, n, a) {
              var i,
                o,
                r,
                s,
                l,
                c = {},
                d = e.dataTypes.slice();
              if (d[1])
                for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
              for (o = d.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = d.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(r = c[l + " " + o] || c["* " + o]))
                      for (i in c)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (r = c[l + " " + s[0]] || c["* " + s[0]])
                        ) {
                          !0 === r
                            ? (r = c[i])
                            : !0 !== c[i] && ((o = s[0]), d.unshift(s[1]));
                          break;
                        }
                    if (!0 !== r)
                      if (r && e.throws) t = r(t);
                      else
                        try {
                          t = r(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: r
                              ? e
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(g, s, k, i)),
            i
              ? (g.ifModified &&
                  ((l = k.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[u] = l),
                  (l = k.getResponseHeader("etag")) && (S.etag[u] = l)),
                204 === e || "HEAD" === g.type
                  ? (c = "nocontent")
                  : 304 === e
                  ? (c = "notmodified")
                  : ((c = s.state), (o = s.data), (i = !(r = s.error))))
              : ((r = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
            (k.status = e),
            (k.statusText = (t || c) + ""),
            i ? b.resolveWith(v, [o, c, k]) : b.rejectWith(v, [k, c, r]),
            k.statusCode($),
            ($ = void 0),
            f && y.trigger(i ? "ajaxSuccess" : "ajaxError", [k, g, i ? o : r]),
            _.fireWith(v, [k, c]),
            f &&
              (y.trigger("ajaxComplete", [k, g]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return k;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, a) {
        return (
          S.isFunction(t) && ((a = a || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: a, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (S._evalUrl = function (e) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (S.isFunction(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return S.isFunction(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = S.isFunction(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new w.XMLHttpRequest();
      } catch (e) {}
    });
  var Ft = { 0: 200, 1223: 204 },
    Lt = S.ajaxSettings.xhr();
  (g.cors = !!Lt && "withCredentials" in Lt),
    (g.ajax = Lt = !!Lt),
    S.ajaxTransport(function (i) {
      var o, r;
      if (g.cors || (Lt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              a = i.xhr();
            if (
              (a.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) a[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              a.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    r =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? t(0, "error")
                      : t(a.status, a.statusText)
                    : t(
                        Ft[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = o()),
              (r = a.onerror = o("error")),
              void 0 !== a.onabort
                ? (a.onabort = r)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      w.setTimeout(function () {
                        o && r();
                      });
                  }),
              (o = o("abort"));
            try {
              a.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var a, i;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (a = S("<script>")
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  a.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(a[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Dt,
    Ht = [],
    jt = /(=)\?(?=&|$)|\?\?/;
  function Mt(e) {
    return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Ht.pop() || S.expando + "_" + ht++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var a,
        i,
        o,
        r =
          !1 !== e.jsonp &&
          (jt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              jt.test(e.data) &&
              "data");
      if (r || "jsonp" === e.dataTypes[0])
        return (
          (a = e.jsonpCallback =
            S.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          r
            ? (e[r] = e[r].replace(jt, "$1" + a))
            : !1 !== e.jsonp &&
              (e.url += (ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + a),
          (e.converters["script json"] = function () {
            return o || S.error(a + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = w[a]),
          (w[a] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(w).removeProp(a) : (w[a] = i),
              e[a] && ((e.jsonpCallback = t.jsonpCallback), Ht.push(a)),
              o && S.isFunction(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (g.createHTMLDocument =
      (((Dt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Dt.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (g.createHTMLDocument
              ? (((a = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(a))
              : (t = C)),
          (o = !n && []),
          (i = T.exec(e))
            ? [t.createElement(i[1])]
            : ((i = me([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var a, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var a,
        i,
        o,
        r = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((a = ct(e.slice(s))), (e = e.slice(0, s))),
        S.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < r.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                r.html(a ? S("<div>").append(S.parseHTML(e)).find(a) : e);
            })
            .always(
              n &&
                function (e, t) {
                  r.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var a,
          i,
          o,
          r,
          s,
          l,
          c = S.css(e, "position"),
          d = S(e),
          u = {};
        "static" === c && (e.style.position = "relative"),
          (s = d.offset()),
          (o = S.css(e, "top")),
          (l = S.css(e, "left")),
          (i =
            ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto")
              ? ((r = (a = d.position()).top), a.left)
              : ((r = parseFloat(o) || 0), parseFloat(l) || 0)),
          S.isFunction(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (u.top = t.top - s.top + r),
          null != t.left && (u.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, u) : d.css(u);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          a,
          i,
          o = this[0];
        return o
          ? o.getClientRects().length
            ? (a = o.getBoundingClientRect()).width || a.height
              ? ((n = Mt((i = o.ownerDocument))),
                (e = i.documentElement),
                {
                  top: a.top + n.pageYOffset - e.clientTop,
                  left: a.left + n.pageXOffset - e.clientLeft,
                })
              : a
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            a = { top: 0, left: 0 };
          return (
            "fixed" === S.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                S.nodeName(e[0], "html") || (a = e.offset()),
                (a = {
                  top: a.top + S.css(e[0], "borderTopWidth", !0),
                  left: a.left + S.css(e[0], "borderLeftWidth", !0),
                })),
            {
              top: t.top - a.top - S.css(n, "marginTop", !0),
              left: t.left - a.left - S.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === S.css(e, "position");

          )
            e = e.offsetParent;
          return e || he;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return q(
            this,
            function (e, t, n) {
              var a = Mt(e);
              return void 0 === n
                ? a
                  ? a[i]
                  : e[t]
                : void (a
                    ? a.scrollTo(o ? a.pageXOffset : n, o ? n : a.pageYOffset)
                    : (e[t] = n));
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = He(g.pixelPosition, function (e, t) {
        if (t)
          return (t = De(e, n)), Fe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (r, s) {
      S.each(
        { padding: "inner" + r, content: s, "": "outer" + r },
        function (a, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (a || "boolean" != typeof e),
              i = a || (!0 === e || !0 === t ? "margin" : "border");
            return q(
              this,
              function (e, t, n) {
                var a;
                return S.isWindow(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + r]
                    : e.document.documentElement["client" + r]
                  : 9 === e.nodeType
                  ? ((a = e.documentElement),
                    Math.max(
                      e.body["scroll" + r],
                      a["scroll" + r],
                      e.body["offset" + r],
                      a["offset" + r],
                      a["client" + r]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, a) {
        return this.on(t, e, n, a);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (S.parseJSON = JSON.parse),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Rt = w.jQuery,
    Wt = w.$;
  return (
    (S.noConflict = function (e) {
      return w.$ === S && (w.$ = Wt), e && w.jQuery === S && (w.jQuery = Rt), S;
    }),
    e || (w.jQuery = w.$ = S),
    S
  );
}),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (u) {
    var t = Array.prototype.slice,
      a = Array.prototype.splice,
      s = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: "",
        widthFromWrapper: !0,
        responsiveWidth: !1,
        zIndex: "auto",
      },
      p = u(window),
      m = u(document),
      h = [],
      f = p.height(),
      e = function () {
        for (
          var e = p.scrollTop(),
            t = m.height(),
            n = t - f,
            a = n < e ? n - e : 0,
            i = 0,
            o = h.length;
          i < o;
          i++
        ) {
          var r = h[i],
            s = r.stickyWrapper.offset().top - r.topSpacing - a;
          if (
            (r.stickyWrapper.css("height", r.stickyElement.outerHeight()),
            e <= s)
          )
            null !== r.currentTop &&
              (r.stickyElement.css({
                width: "",
                position: "",
                top: "",
                "z-index": "",
              }),
              r.stickyElement.parent().removeClass(r.className),
              r.stickyElement.trigger("sticky-end", [r]),
              (r.currentTop = null));
          else {
            var l,
              c =
                t -
                r.stickyElement.outerHeight() -
                r.topSpacing -
                r.bottomSpacing -
                e -
                a;
            if (
              (c < 0 ? (c += r.topSpacing) : (c = r.topSpacing),
              r.currentTop !== c)
            )
              r.getWidthFrom
                ? (l = u(r.getWidthFrom).width() || null)
                : r.widthFromWrapper && (l = r.stickyWrapper.width()),
                null == l && (l = r.stickyElement.width()),
                r.stickyElement
                  .css("width", l)
                  .css("position", "fixed")
                  .css("top", c)
                  .css("z-index", r.zIndex),
                r.stickyElement.parent().addClass(r.className),
                null === r.currentTop
                  ? r.stickyElement.trigger("sticky-start", [r])
                  : r.stickyElement.trigger("sticky-update", [r]),
                (r.currentTop === r.topSpacing && r.currentTop > c) ||
                (null === r.currentTop && c < r.topSpacing)
                  ? r.stickyElement.trigger("sticky-bottom-reached", [r])
                  : null !== r.currentTop &&
                    c === r.topSpacing &&
                    r.currentTop < c &&
                    r.stickyElement.trigger("sticky-bottom-unreached", [r]),
                (r.currentTop = c);
            var d = r.stickyWrapper.parent();
            r.stickyElement.offset().top + r.stickyElement.outerHeight() >=
              d.offset().top + d.outerHeight() &&
            r.stickyElement.offset().top <= r.topSpacing
              ? r.stickyElement
                  .css("position", "absolute")
                  .css("top", "")
                  .css("bottom", 0)
                  .css("z-index", "")
              : r.stickyElement
                  .css("position", "fixed")
                  .css("top", c)
                  .css("bottom", "")
                  .css("z-index", r.zIndex);
          }
        }
      },
      n = function () {
        f = p.height();
        for (var e = 0, t = h.length; e < t; e++) {
          var n = h[e],
            a = null;
          n.getWidthFrom
            ? n.responsiveWidth && (a = u(n.getWidthFrom).width())
            : n.widthFromWrapper && (a = n.stickyWrapper.width()),
            null != a && n.stickyElement.css("width", a);
        }
      },
      l = {
        init: function (r) {
          return this.each(function () {
            var e = u.extend({}, s, r),
              t = u(this),
              n = t.attr("id"),
              a = n ? n + "-" + s.wrapperClassName : s.wrapperClassName,
              i = u("<div></div>").attr("id", a).addClass(e.wrapperClassName);
            t.wrapAll(function () {
              if (0 == u(this).parent("#" + a).length) return i;
            });
            var o = t.parent();
            e.center &&
              o.css({
                width: t.outerWidth(),
                marginLeft: "auto",
                marginRight: "auto",
              }),
              "right" === t.css("float") &&
                t.css({ float: "none" }).parent().css({ float: "right" }),
              (e.stickyElement = t),
              (e.stickyWrapper = o),
              (e.currentTop = null),
              h.push(e),
              l.setWrapperHeight(this),
              l.setupChangeListeners(this);
          });
        },
        setWrapperHeight: function (e) {
          var t = u(e),
            n = t.parent();
          n && n.css("height", t.outerHeight());
        },
        setupChangeListeners: function (t) {
          window.MutationObserver
            ? new window.MutationObserver(function (e) {
                (e[0].addedNodes.length || e[0].removedNodes.length) &&
                  l.setWrapperHeight(t);
              }).observe(t, { subtree: !0, childList: !0 })
            : window.addEventListener
            ? (t.addEventListener(
                "DOMNodeInserted",
                function () {
                  l.setWrapperHeight(t);
                },
                !1
              ),
              t.addEventListener(
                "DOMNodeRemoved",
                function () {
                  l.setWrapperHeight(t);
                },
                !1
              ))
            : window.attachEvent &&
              (t.attachEvent("onDOMNodeInserted", function () {
                l.setWrapperHeight(t);
              }),
              t.attachEvent("onDOMNodeRemoved", function () {
                l.setWrapperHeight(t);
              }));
        },
        update: e,
        unstick: function (e) {
          return this.each(function () {
            for (var e = u(this), t = -1, n = h.length; 0 < n--; )
              h[n].stickyElement.get(0) === this && (a.call(h, n, 1), (t = n));
            -1 !== t &&
              (e.unwrap(),
              e.css({
                width: "",
                position: "",
                top: "",
                float: "",
                "z-index": "",
              }));
          });
        },
      };
    window.addEventListener
      ? (window.addEventListener("scroll", e, !1),
        window.addEventListener("resize", n, !1))
      : window.attachEvent &&
        (window.attachEvent("onscroll", e), window.attachEvent("onresize", n)),
      (u.fn.sticky = function (e) {
        return l[e]
          ? l[e].apply(this, t.call(arguments, 1))
          : "object" != typeof e && e
          ? void u.error("Method " + e + " does not exist on jQuery.sticky")
          : l.init.apply(this, arguments);
      }),
      (u.fn.unstick = function (e) {
        return l[e]
          ? l[e].apply(this, t.call(arguments, 1))
          : "object" != typeof e && e
          ? void u.error("Method " + e + " does not exist on jQuery.sticky")
          : l.unstick.apply(this, arguments);
      }),
      u(function () {
        setTimeout(e, 0);
      });
  }),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (c) {
    "use strict";
    var i,
      r = window.Slick || {};
    (((i = 0),
    (r = function (e, t) {
      var n,
        a = this;
      (a.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: c(e),
        appendDots: c(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return c('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (a.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        c.extend(a, a.initials),
        (a.activeBreakpoint = null),
        (a.animType = null),
        (a.animProp = null),
        (a.breakpoints = []),
        (a.breakpointSettings = []),
        (a.cssTransitions = !1),
        (a.focussed = !1),
        (a.interrupted = !1),
        (a.hidden = "hidden"),
        (a.paused = !0),
        (a.positionProp = null),
        (a.respondTo = null),
        (a.rowCount = 1),
        (a.shouldClick = !0),
        (a.$slider = c(e)),
        (a.$slidesCache = null),
        (a.transformType = null),
        (a.transitionType = null),
        (a.visibilityChange = "visibilitychange"),
        (a.windowWidth = 0),
        (a.windowTimer = null),
        (n = c(e).data("slick") || {}),
        (a.options = c.extend({}, a.defaults, t, n)),
        (a.currentSlide = a.options.initialSlide),
        (a.originalSettings = a.options),
        void 0 !== document.mozHidden
          ? ((a.hidden = "mozHidden"),
            (a.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((a.hidden = "webkitHidden"),
            (a.visibilityChange = "webkitvisibilitychange")),
        (a.autoPlay = c.proxy(a.autoPlay, a)),
        (a.autoPlayClear = c.proxy(a.autoPlayClear, a)),
        (a.autoPlayIterator = c.proxy(a.autoPlayIterator, a)),
        (a.changeSlide = c.proxy(a.changeSlide, a)),
        (a.clickHandler = c.proxy(a.clickHandler, a)),
        (a.selectHandler = c.proxy(a.selectHandler, a)),
        (a.setPosition = c.proxy(a.setPosition, a)),
        (a.swipeHandler = c.proxy(a.swipeHandler, a)),
        (a.dragHandler = c.proxy(a.dragHandler, a)),
        (a.keyHandler = c.proxy(a.keyHandler, a)),
        (a.instanceUid = i++),
        (a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        a.registerBreakpoints(),
        a.init(!0);
    })).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (r.prototype.addSlide = r.prototype.slickAdd =
        function (e, t, n) {
          var a = this;
          if ("boolean" == typeof t) (n = t), (t = null);
          else if (t < 0 || t >= a.slideCount) return !1;
          a.unload(),
            "number" == typeof t
              ? 0 === t && 0 === a.$slides.length
                ? c(e).appendTo(a.$slideTrack)
                : n
                ? c(e).insertBefore(a.$slides.eq(t))
                : c(e).insertAfter(a.$slides.eq(t))
              : !0 === n
              ? c(e).prependTo(a.$slideTrack)
              : c(e).appendTo(a.$slideTrack),
            (a.$slides = a.$slideTrack.children(this.options.slide)),
            a.$slideTrack.children(this.options.slide).detach(),
            a.$slideTrack.append(a.$slides),
            a.$slides.each(function (e, t) {
              c(t).attr("data-slick-index", e);
            }),
            (a.$slidesCache = a.$slides),
            a.reinit();
        }),
      (r.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (r.prototype.animateSlide = function (e, t) {
        var n = {},
          a = this;
        a.animateHeight(),
          !0 === a.options.rtl && !1 === a.options.vertical && (e = -e),
          !1 === a.transformsEnabled
            ? !1 === a.options.vertical
              ? a.$slideTrack.animate(
                  { left: e },
                  a.options.speed,
                  a.options.easing,
                  t
                )
              : a.$slideTrack.animate(
                  { top: e },
                  a.options.speed,
                  a.options.easing,
                  t
                )
            : !1 === a.cssTransitions
            ? (!0 === a.options.rtl && (a.currentLeft = -a.currentLeft),
              c({ animStart: a.currentLeft }).animate(
                { animStart: e },
                {
                  duration: a.options.speed,
                  easing: a.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      !1 === a.options.vertical
                        ? (n[a.animType] = "translate(" + e + "px, 0px)")
                        : (n[a.animType] = "translate(0px," + e + "px)"),
                      a.$slideTrack.css(n);
                  },
                  complete: function () {
                    t && t.call();
                  },
                }
              ))
            : (a.applyTransition(),
              (e = Math.ceil(e)),
              !1 === a.options.vertical
                ? (n[a.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (n[a.animType] = "translate3d(0px," + e + "px, 0px)"),
              a.$slideTrack.css(n),
              t &&
                setTimeout(function () {
                  a.disableTransition(), t.call();
                }, a.options.speed));
      }),
      (r.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)), e;
      }),
      (r.prototype.asNavFor = function (t) {
        var e = this.getNavTarget();
        null !== e &&
          "object" == typeof e &&
          e.each(function () {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0);
          });
      }),
      (r.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (r.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (r.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (r.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (r.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (r.prototype.buildDots = function () {
        var e,
          t,
          n = this;
        if (!0 === n.options.dots) {
          for (
            n.$slider.addClass("slick-dotted"),
              t = c("<ul />").addClass(n.options.dotsClass),
              e = 0;
            e <= n.getDotCount();
            e += 1
          )
            t.append(
              c("<li />").append(n.options.customPaging.call(this, n, e))
            );
          (n.$dots = t.appendTo(n.options.appendDots)),
            n.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (r.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, t) {
            c(t)
              .attr("data-slick-index", e)
              .data("originalStyling", c(t).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? c('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
          c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (r.prototype.buildRows = function () {
        var e,
          t,
          n,
          a,
          i,
          o,
          r,
          s = this;
        if (
          ((a = document.createDocumentFragment()),
          (o = s.$slider.children()),
          1 < s.options.rows)
        ) {
          for (
            r = s.options.slidesPerRow * s.options.rows,
              i = Math.ceil(o.length / r),
              e = 0;
            e < i;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < s.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < s.options.slidesPerRow; n++) {
                var d = e * r + (t * s.options.slidesPerRow + n);
                o.get(d) && c.appendChild(o.get(d));
              }
              l.appendChild(c);
            }
            a.appendChild(l);
          }
          s.$slider.empty().append(a),
            s.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / s.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (r.prototype.checkResponsive = function (e, t) {
        var n,
          a,
          i,
          o = this,
          r = !1,
          s = o.$slider.width(),
          l = window.innerWidth || c(window).width();
        if (
          ("window" === o.respondTo
            ? (i = l)
            : "slider" === o.respondTo
            ? (i = s)
            : "min" === o.respondTo && (i = Math.min(l, s)),
          o.options.responsive &&
            o.options.responsive.length &&
            null !== o.options.responsive)
        ) {
          for (n in ((a = null), o.breakpoints))
            o.breakpoints.hasOwnProperty(n) &&
              (!1 === o.originalSettings.mobileFirst
                ? i < o.breakpoints[n] && (a = o.breakpoints[n])
                : i > o.breakpoints[n] && (a = o.breakpoints[n]));
          null !== a
            ? null !== o.activeBreakpoint
              ? (a !== o.activeBreakpoint || t) &&
                ((o.activeBreakpoint = a),
                "unslick" === o.breakpointSettings[a]
                  ? o.unslick(a)
                  : ((o.options = c.extend(
                      {},
                      o.originalSettings,
                      o.breakpointSettings[a]
                    )),
                    !0 === e && (o.currentSlide = o.options.initialSlide),
                    o.refresh(e)),
                (r = a))
              : ((o.activeBreakpoint = a),
                "unslick" === o.breakpointSettings[a]
                  ? o.unslick(a)
                  : ((o.options = c.extend(
                      {},
                      o.originalSettings,
                      o.breakpointSettings[a]
                    )),
                    !0 === e && (o.currentSlide = o.options.initialSlide),
                    o.refresh(e)),
                (r = a))
            : null !== o.activeBreakpoint &&
              ((o.activeBreakpoint = null),
              (o.options = o.originalSettings),
              !0 === e && (o.currentSlide = o.options.initialSlide),
              o.refresh(e),
              (r = a)),
            e || !1 === r || o.$slider.trigger("breakpoint", [o, r]);
        }
      }),
      (r.prototype.changeSlide = function (e, t) {
        var n,
          a,
          i = this,
          o = c(e.currentTarget);
        switch (
          (o.is("a") && e.preventDefault(),
          o.is("li") || (o = o.closest("li")),
          (n =
            i.slideCount % i.options.slidesToScroll != 0
              ? 0
              : (i.slideCount - i.currentSlide) % i.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (a =
              0 === n ? i.options.slidesToScroll : i.options.slidesToShow - n),
              i.slideCount > i.options.slidesToShow &&
                i.slideHandler(i.currentSlide - a, !1, t);
            break;
          case "next":
            (a = 0 === n ? i.options.slidesToScroll : n),
              i.slideCount > i.options.slidesToShow &&
                i.slideHandler(i.currentSlide + a, !1, t);
            break;
          case "index":
            var r =
              0 === e.data.index
                ? 0
                : e.data.index || o.index() * i.options.slidesToScroll;
            i.slideHandler(i.checkNavigable(r), !1, t),
              o.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (r.prototype.checkNavigable = function (e) {
        var t, n;
        if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var a in t) {
            if (e < t[a]) {
              e = n;
              break;
            }
            n = t[a];
          }
        return e;
      }),
      (r.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          (c("li", e.$dots)
            .off("click.slick", e.changeSlide)
            .off("mouseenter.slick", c.proxy(e.interrupt, e, !0))
            .off("mouseleave.slick", c.proxy(e.interrupt, e, !1)),
          !0 === e.options.accessibility &&
            e.$dots.off("keydown.slick", e.keyHandler)),
          e.$slider.off("focus.slick blur.slick"),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
              e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
          e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
          e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
          e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
          e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
          e.$list.off("click.slick", e.clickHandler),
          c(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility &&
            e.$list.off("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().off("click.slick", e.selectHandler),
          c(window).off(
            "orientationchange.slick.slick-" + e.instanceUid,
            e.orientationChange
          ),
          c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
          c("[draggable!=true]", e.$slideTrack).off(
            "dragstart",
            e.preventDefault
          ),
          c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }),
      (r.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
          e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1));
      }),
      (r.prototype.cleanUpRows = function () {
        var e;
        1 < this.options.rows &&
          ((e = this.$slides.children().children()).removeAttr("style"),
          this.$slider.empty().append(e));
      }),
      (r.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (r.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(),
          (t.touchObject = {}),
          t.cleanUpEvents(),
          c(".slick-cloned", t.$slider).detach(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.$prevArrow.length &&
            (t.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
          t.$nextArrow &&
            t.$nextArrow.length &&
            (t.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
          t.$slides &&
            (t.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                c(this).attr("style", c(this).data("originalStyling"));
              }),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slideTrack.detach(),
            t.$list.detach(),
            t.$slider.append(t.$slides)),
          t.cleanUpRows(),
          t.$slider.removeClass("slick-slider"),
          t.$slider.removeClass("slick-initialized"),
          t.$slider.removeClass("slick-dotted"),
          (t.unslicked = !0),
          e || t.$slider.trigger("destroy", [t]);
      }),
      (r.prototype.disableTransition = function (e) {
        var t = {};
        (t[this.transitionType] = ""),
          !1 === this.options.fade
            ? this.$slideTrack.css(t)
            : this.$slides.eq(e).css(t);
      }),
      (r.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (r.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (r.prototype.filterSlides = r.prototype.slickFilter =
        function (e) {
          var t = this;
          null !== e &&
            ((t.$slidesCache = t.$slides),
            t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.filter(e).appendTo(t.$slideTrack),
            t.reinit());
        }),
      (r.prototype.focusHandler = function () {
        var n = this;
        n.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function () {
              n.options.pauseOnFocus &&
                ((n.focussed = t.is(":focus")), n.autoPlay());
            }, 0);
          });
      }),
      (r.prototype.getCurrent = r.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (r.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          a = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++a;
          else
            for (; t < e.slideCount; )
              ++a,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) a = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++a,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          a =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return a - 1;
      }),
      (r.prototype.getLeft = function (e) {
        var t,
          n,
          a,
          i,
          o = this,
          r = 0;
        return (
          (o.slideOffset = 0),
          (n = o.$slides.first().outerHeight(!0)),
          !0 === o.options.infinite
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                (i = -1),
                !0 === o.options.vertical &&
                  !0 === o.options.centerMode &&
                  (2 === o.options.slidesToShow
                    ? (i = -1.5)
                    : 1 === o.options.slidesToShow && (i = -2)),
                (r = n * o.options.slidesToShow * i)),
              o.slideCount % o.options.slidesToScroll != 0 &&
                e + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (r =
                  e > o.slideCount
                    ? ((o.slideOffset =
                        (o.options.slidesToShow - (e - o.slideCount)) *
                        o.slideWidth *
                        -1),
                      (o.options.slidesToShow - (e - o.slideCount)) * n * -1)
                    : ((o.slideOffset =
                        (o.slideCount % o.options.slidesToScroll) *
                        o.slideWidth *
                        -1),
                      (o.slideCount % o.options.slidesToScroll) * n * -1)))
            : e + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset =
                (e + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (r = (e + o.options.slidesToShow - o.slideCount) * n)),
          o.slideCount <= o.options.slidesToShow && (r = o.slideOffset = 0),
          !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
            ? (o.slideOffset =
                (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 -
                (o.slideWidth * o.slideCount) / 2)
            : !0 === o.options.centerMode && !0 === o.options.infinite
            ? (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
                o.slideWidth)
            : !0 === o.options.centerMode &&
              ((o.slideOffset = 0),
              (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (t =
            !1 === o.options.vertical
              ? e * o.slideWidth * -1 + o.slideOffset
              : e * n * -1 + r),
          !0 === o.options.variableWidth &&
            ((a =
              o.slideCount <= o.options.slidesToShow ||
              !1 === o.options.infinite
                ? o.$slideTrack.children(".slick-slide").eq(e)
                : o.$slideTrack
                    .children(".slick-slide")
                    .eq(e + o.options.slidesToShow)),
            (t =
              !0 === o.options.rtl
                ? a[0]
                  ? -1 * (o.$slideTrack.width() - a[0].offsetLeft - a.width())
                  : 0
                : a[0]
                ? -1 * a[0].offsetLeft
                : 0),
            !0 === o.options.centerMode &&
              ((a =
                o.slideCount <= o.options.slidesToShow ||
                !1 === o.options.infinite
                  ? o.$slideTrack.children(".slick-slide").eq(e)
                  : o.$slideTrack
                      .children(".slick-slide")
                      .eq(e + o.options.slidesToShow + 1)),
              (t =
                !0 === o.options.rtl
                  ? a[0]
                    ? -1 * (o.$slideTrack.width() - a[0].offsetLeft - a.width())
                    : 0
                  : a[0]
                  ? -1 * a[0].offsetLeft
                  : 0),
              (t += (o.$list.width() - a.outerWidth()) / 2))),
          t
        );
      }),
      (r.prototype.getOption = r.prototype.slickGetOption =
        function (e) {
          return this.options[e];
        }),
      (r.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          a = 0,
          i = [];
        for (
          e =
            !1 === t.options.infinite
              ? t.slideCount
              : ((n = -1 * t.options.slidesToScroll),
                (a = -1 * t.options.slidesToScroll),
                2 * t.slideCount);
          n < e;

        )
          i.push(n),
            (n = a + t.options.slidesToScroll),
            (a +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return i;
      }),
      (r.prototype.getSlick = function () {
        return this;
      }),
      (r.prototype.getSlideCount = function () {
        var n,
          a,
          i = this;
        return (
          (a =
            !0 === i.options.centerMode
              ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
              : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find(".slick-slide").each(function (e, t) {
                if (t.offsetLeft - a + c(t).outerWidth() / 2 > -1 * i.swipeLeft)
                  return (n = t), !1;
              }),
              Math.abs(c(n).attr("data-slick-index") - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (r.prototype.goTo = r.prototype.slickGoTo =
        function (e, t) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(e) } },
            t
          );
        }),
      (r.prototype.init = function (e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") ||
          (c(t.$slider).addClass("slick-initialized"),
          t.buildRows(),
          t.buildOut(),
          t.setProps(),
          t.startLoad(),
          t.loadSlider(),
          t.initializeEvents(),
          t.updateArrows(),
          t.updateDots(),
          t.checkResponsive(!0),
          t.focusHandler()),
          e && t.$slider.trigger("init", [t]),
          !0 === t.options.accessibility && t.initADA(),
          t.options.autoplay && ((t.paused = !1), t.autoPlay());
      }),
      (r.prototype.initADA = function () {
        var n = this,
          a = Math.ceil(n.slideCount / n.options.slidesToShow),
          i = n.getNavigableIndexes().filter(function (e) {
            return 0 <= e && e < n.slideCount;
          });
        n.$slides
          .add(n.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== n.$dots &&
            (n.$slides
              .not(n.$slideTrack.find(".slick-cloned"))
              .each(function (e) {
                var t = i.indexOf(e);
                c(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + n.instanceUid + e,
                  tabindex: -1,
                }),
                  -1 !== t &&
                    c(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + n.instanceUid + t,
                    });
              }),
            n.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (e) {
                var t = i[e];
                c(this).attr({ role: "presentation" }),
                  c(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + n.instanceUid + e,
                      "aria-controls": "slick-slide" + n.instanceUid + t,
                      "aria-label": e + 1 + " of " + a,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(n.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++)
          n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA();
      }),
      (r.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (r.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots &&
          (c("li", e.$dots).on(
            "click.slick",
            { message: "index" },
            e.changeSlide
          ),
          !0 === e.options.accessibility &&
            e.$dots.on("keydown.slick", e.keyHandler)),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            c("li", e.$dots)
              .on("mouseenter.slick", c.proxy(e.interrupt, e, !0))
              .on("mouseleave.slick", c.proxy(e.interrupt, e, !1));
      }),
      (r.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover &&
          (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
          e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)));
      }),
      (r.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on("click.slick", e.clickHandler),
          c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
          !0 === e.options.accessibility &&
            e.$list.on("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().on("click.slick", e.selectHandler),
          c(window).on(
            "orientationchange.slick.slick-" + e.instanceUid,
            c.proxy(e.orientationChange, e)
          ),
          c(window).on(
            "resize.slick.slick-" + e.instanceUid,
            c.proxy(e.resize, e)
          ),
          c("[draggable!=true]", e.$slideTrack).on(
            "dragstart",
            e.preventDefault
          ),
          c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
          c(e.setPosition);
      }),
      (r.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (r.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? "next" : "previous" },
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? "previous" : "next" },
              }));
      }),
      (r.prototype.lazyLoad = function () {
        function e(e) {
          c("img[data-lazy]", e).each(function () {
            var e = c(this),
              t = c(this).attr("data-lazy"),
              n = c(this).attr("data-srcset"),
              a = c(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
              i = document.createElement("img");
            (i.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                n && (e.attr("srcset", n), a && e.attr("sizes", a)),
                  e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  o.$slider.trigger("lazyLoaded", [o, e, t]);
              });
            }),
              (i.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  o.$slider.trigger("lazyLoadError", [o, e, t]);
              }),
              (i.src = t);
          });
        }
        var t,
          n,
          a,
          o = this;
        if (
          (!0 === o.options.centerMode
            ? (a =
                !0 === o.options.infinite
                  ? (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
                    o.options.slidesToShow +
                    2
                  : ((n = Math.max(
                      0,
                      o.currentSlide - (o.options.slidesToShow / 2 + 1)
                    )),
                    o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
            : ((n = o.options.infinite
                ? o.options.slidesToShow + o.currentSlide
                : o.currentSlide),
              (a = Math.ceil(n + o.options.slidesToShow)),
              !0 === o.options.fade &&
                (0 < n && n--, a <= o.slideCount && a++)),
          (t = o.$slider.find(".slick-slide").slice(n, a)),
          "anticipated" === o.options.lazyLoad)
        )
          for (
            var i = n - 1, r = a, s = o.$slider.find(".slick-slide"), l = 0;
            l < o.options.slidesToScroll;
            l++
          )
            i < 0 && (i = o.slideCount - 1),
              (t = (t = t.add(s.eq(i))).add(s.eq(r))),
              i--,
              r++;
        e(t),
          o.slideCount <= o.options.slidesToShow
            ? e(o.$slider.find(".slick-slide"))
            : o.currentSlide >= o.slideCount - o.options.slidesToShow
            ? e(
                o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)
              )
            : 0 === o.currentSlide &&
              e(
                o.$slider
                  .find(".slick-cloned")
                  .slice(-1 * o.options.slidesToShow)
              );
      }),
      (r.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (r.prototype.next = r.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (r.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (r.prototype.pause = r.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (r.prototype.play = r.prototype.slickPlay =
        function () {
          var e = this;
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1);
        }),
      (r.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked ||
          (t.$slider.trigger("afterChange", [t, e]),
          (t.animating = !1),
          t.slideCount > t.options.slidesToShow && t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay && t.autoPlay(),
          !0 === t.options.accessibility &&
            (t.initADA(),
            t.options.focusOnChange &&
              c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (r.prototype.prev = r.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (r.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (r.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t,
          n,
          a,
          i,
          o,
          r = this,
          s = c("img[data-lazy]", r.$slider);
        s.length
          ? ((t = s.first()),
            (n = t.attr("data-lazy")),
            (a = t.attr("data-srcset")),
            (i = t.attr("data-sizes") || r.$slider.attr("data-sizes")),
            ((o = document.createElement("img")).onload = function () {
              a && (t.attr("srcset", a), i && t.attr("sizes", i)),
                t
                  .attr("src", n)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === r.options.adaptiveHeight && r.setPosition(),
                r.$slider.trigger("lazyLoaded", [r, t, n]),
                r.progressiveLazyLoad();
            }),
            (o.onerror = function () {
              e < 3
                ? setTimeout(function () {
                    r.progressiveLazyLoad(e + 1);
                  }, 500)
                : (t
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  r.$slider.trigger("lazyLoadError", [r, t, n]),
                  r.progressiveLazyLoad());
            }),
            (o.src = n))
          : r.$slider.trigger("allImagesLoaded", [r]);
      }),
      (r.prototype.refresh = function (e) {
        var t,
          n,
          a = this;
        (n = a.slideCount - a.options.slidesToShow),
          !a.options.infinite && a.currentSlide > n && (a.currentSlide = n),
          a.slideCount <= a.options.slidesToShow && (a.currentSlide = 0),
          (t = a.currentSlide),
          a.destroy(!0),
          c.extend(a, a.initials, { currentSlide: t }),
          a.init(),
          e || a.changeSlide({ data: { message: "index", index: t } }, !1);
      }),
      (r.prototype.registerBreakpoints = function () {
        var e,
          t,
          n,
          a = this,
          i = a.options.responsive || null;
        if ("array" === c.type(i) && i.length) {
          for (e in ((a.respondTo = a.options.respondTo || "window"), i))
            if (((n = a.breakpoints.length - 1), i.hasOwnProperty(e))) {
              for (t = i[e].breakpoint; 0 <= n; )
                a.breakpoints[n] &&
                  a.breakpoints[n] === t &&
                  a.breakpoints.splice(n, 1),
                  n--;
              a.breakpoints.push(t), (a.breakpointSettings[t] = i[e].settings);
            }
          a.breakpoints.sort(function (e, t) {
            return a.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (r.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (r.prototype.resize = function () {
        var e = this;
        c(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = c(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (r.prototype.removeSlide = r.prototype.slickRemove =
        function (e, t, n) {
          var a = this;
          if (
            ((e =
              "boolean" == typeof e
                ? !0 === (t = e)
                  ? 0
                  : a.slideCount - 1
                : !0 === t
                ? --e
                : e),
            a.slideCount < 1 || e < 0 || e > a.slideCount - 1)
          )
            return !1;
          a.unload(),
            !0 === n
              ? a.$slideTrack.children().remove()
              : a.$slideTrack.children(this.options.slide).eq(e).remove(),
            (a.$slides = a.$slideTrack.children(this.options.slide)),
            a.$slideTrack.children(this.options.slide).detach(),
            a.$slideTrack.append(a.$slides),
            (a.$slidesCache = a.$slides),
            a.reinit();
        }),
      (r.prototype.setCSS = function (e) {
        var t,
          n,
          a = this,
          i = {};
        !0 === a.options.rtl && (e = -e),
          (t = "left" == a.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == a.positionProp ? Math.ceil(e) + "px" : "0px"),
          (i[a.positionProp] = e),
          !1 === a.transformsEnabled ||
            (!(i = {}) === a.cssTransitions
              ? (i[a.animType] = "translate(" + t + ", " + n + ")")
              : (i[a.animType] = "translate3d(" + t + ", " + n + ", 0px)")),
          a.$slideTrack.css(i);
      }),
      (r.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (r.prototype.setFade = function () {
        var n,
          a = this;
        a.$slides.each(function (e, t) {
          (n = a.slideWidth * e * -1),
            !0 === a.options.rtl
              ? c(t).css({
                  position: "relative",
                  right: n,
                  top: 0,
                  zIndex: a.options.zIndex - 2,
                  opacity: 0,
                })
              : c(t).css({
                  position: "relative",
                  left: n,
                  top: 0,
                  zIndex: a.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          a.$slides
            .eq(a.currentSlide)
            .css({ zIndex: a.options.zIndex - 1, opacity: 1 });
      }),
      (r.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (r.prototype.setOption = r.prototype.slickSetOption =
        function () {
          var e,
            t,
            n,
            a,
            i,
            o = this,
            r = !1;
          if (
            ("object" === c.type(arguments[0])
              ? ((n = arguments[0]), (r = arguments[1]), (i = "multiple"))
              : "string" === c.type(arguments[0]) &&
                ((n = arguments[0]),
                (a = arguments[1]),
                (r = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === c.type(arguments[1])
                  ? (i = "responsive")
                  : void 0 !== arguments[1] && (i = "single")),
            "single" === i)
          )
            o.options[n] = a;
          else if ("multiple" === i)
            c.each(n, function (e, t) {
              o.options[e] = t;
            });
          else if ("responsive" === i)
            for (t in a)
              if ("array" !== c.type(o.options.responsive))
                o.options.responsive = [a[t]];
              else {
                for (e = o.options.responsive.length - 1; 0 <= e; )
                  o.options.responsive[e].breakpoint === a[t].breakpoint &&
                    o.options.responsive.splice(e, 1),
                    e--;
                o.options.responsive.push(a[t]);
              }
          r && (o.unload(), o.reinit());
        }),
      (r.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (r.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (r.prototype.setSlideClasses = function (e) {
        var t,
          n,
          a,
          i,
          o = this;
        if (
          ((n = o.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          o.$slides.eq(e).addClass("slick-current"),
          !0 === o.options.centerMode)
        ) {
          var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(o.options.slidesToShow / 2)),
            !0 === o.options.infinite &&
              (t <= e && e <= o.slideCount - 1 - t
                ? o.$slides
                    .slice(e - t + r, e + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((a = o.options.slidesToShow + e),
                  n
                    .slice(a - t + 1 + r, a + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e
                ? n
                    .eq(n.length - 1 - o.options.slidesToShow)
                    .addClass("slick-center")
                : e === o.slideCount - 1 &&
                  n.eq(o.options.slidesToShow).addClass("slick-center")),
            o.$slides.eq(e).addClass("slick-center");
        } else
          0 <= e && e <= o.slideCount - o.options.slidesToShow
            ? o.$slides
                .slice(e, e + o.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= o.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((i = o.slideCount % o.options.slidesToShow),
              (a = !0 === o.options.infinite ? o.options.slidesToShow + e : e),
              o.options.slidesToShow == o.options.slidesToScroll &&
              o.slideCount - e < o.options.slidesToShow
                ? n
                    .slice(a - (o.options.slidesToShow - i), a + i)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(a, a + o.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== o.options.lazyLoad &&
          "anticipated" !== o.options.lazyLoad) ||
          o.lazyLoad();
      }),
      (r.prototype.setupInfinite = function () {
        var e,
          t,
          n,
          a = this;
        if (
          (!0 === a.options.fade && (a.options.centerMode = !1),
          !0 === a.options.infinite &&
            !1 === a.options.fade &&
            ((t = null), a.slideCount > a.options.slidesToShow))
        ) {
          for (
            n =
              !0 === a.options.centerMode
                ? a.options.slidesToShow + 1
                : a.options.slidesToShow,
              e = a.slideCount;
            e > a.slideCount - n;
            e -= 1
          )
            (t = e - 1),
              c(a.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t - a.slideCount)
                .prependTo(a.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; e < n + a.slideCount; e += 1)
            (t = e),
              c(a.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t + a.slideCount)
                .appendTo(a.$slideTrack)
                .addClass("slick-cloned");
          a.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              c(this).attr("id", "");
            });
        }
      }),
      (r.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (r.prototype.selectHandler = function (e) {
        var t = c(e.target).is(".slick-slide")
            ? c(e.target)
            : c(e.target).parents(".slick-slide"),
          n = parseInt(t.attr("data-slick-index"));
        n || (n = 0),
          this.slideCount <= this.options.slidesToShow
            ? this.slideHandler(n, !1, !0)
            : this.slideHandler(n);
      }),
      (r.prototype.slideHandler = function (e, t, n) {
        var a,
          i,
          o,
          r,
          s,
          l = null,
          c = this;
        if (
          ((t = t || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === e)
          ))
        )
          if (
            (!1 === t && c.asNavFor(e),
            (a = e),
            (l = c.getLeft(a)),
            (r = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((a = c.currentSlide),
              !0 !== n
                ? c.animateSlide(r, function () {
                    c.postSlide(a);
                  })
                : c.postSlide(a));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((a = c.currentSlide),
              !0 !== n
                ? c.animateSlide(r, function () {
                    c.postSlide(a);
                  })
                : c.postSlide(a));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (i =
                a < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + a
                  : a >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : a - c.slideCount
                  : a),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, i]),
              (o = c.currentSlide),
              (c.currentSlide = i),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (s = (s = c.getNavTarget()).slick("getSlick")).slideCount <=
                  s.options.slidesToShow &&
                s.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(o),
                    c.fadeSlide(i, function () {
                      c.postSlide(i);
                    }))
                  : c.postSlide(i),
                void c.animateHeight()
              );
            !0 !== n
              ? c.animateSlide(l, function () {
                  c.postSlide(i);
                })
              : c.postSlide(i);
          }
      }),
      (r.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (r.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          a,
          i = this;
        return (
          (e = i.touchObject.startX - i.touchObject.curX),
          (t = i.touchObject.startY - i.touchObject.curY),
          (n = Math.atan2(t, e)),
          (a = Math.round((180 * n) / Math.PI)) < 0 && (a = 360 - Math.abs(a)),
          a <= 45 && 0 <= a
            ? !1 === i.options.rtl
              ? "left"
              : "right"
            : a <= 360 && 315 <= a
            ? !1 === i.options.rtl
              ? "left"
              : "right"
            : 135 <= a && a <= 225
            ? !1 === i.options.rtl
              ? "right"
              : "left"
            : !0 === i.options.verticalSwiping
            ? 35 <= a && a <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (r.prototype.swipeEnd = function (e) {
        var t,
          n,
          a = this;
        if (((a.dragging = !1), (a.swiping = !1), a.scrolling))
          return (a.scrolling = !1);
        if (
          ((a.interrupted = !1),
          (a.shouldClick = !(10 < a.touchObject.swipeLength)),
          void 0 === a.touchObject.curX)
        )
          return !1;
        if (
          (!0 === a.touchObject.edgeHit &&
            a.$slider.trigger("edge", [a, a.swipeDirection()]),
          a.touchObject.swipeLength >= a.touchObject.minSwipe)
        ) {
          switch ((n = a.swipeDirection())) {
            case "left":
            case "down":
              (t = a.options.swipeToSlide
                ? a.checkNavigable(a.currentSlide + a.getSlideCount())
                : a.currentSlide + a.getSlideCount()),
                (a.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = a.options.swipeToSlide
                ? a.checkNavigable(a.currentSlide - a.getSlideCount())
                : a.currentSlide - a.getSlideCount()),
                (a.currentDirection = 1);
          }
          "vertical" != n &&
            (a.slideHandler(t),
            (a.touchObject = {}),
            a.$slider.trigger("swipe", [a, n]));
        } else
          a.touchObject.startX !== a.touchObject.curX &&
            (a.slideHandler(a.currentSlide), (a.touchObject = {}));
      }),
      (r.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (r.prototype.swipeMove = function (e) {
        var t,
          n,
          a,
          i,
          o,
          r,
          s = this;
        return (
          (o = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!s.dragging || s.scrolling || (o && 1 !== o.length)) &&
            ((t = s.getLeft(s.currentSlide)),
            (s.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX),
            (s.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY),
            (s.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))
            )),
            !s.options.verticalSwiping && !s.swiping && 4 < r
              ? !(s.scrolling = !0)
              : (!0 === s.options.verticalSwiping &&
                  (s.touchObject.swipeLength = r),
                (n = s.swipeDirection()),
                void 0 !== e.originalEvent &&
                  4 < s.touchObject.swipeLength &&
                  ((s.swiping = !0), e.preventDefault()),
                (i =
                  (!1 === s.options.rtl ? 1 : -1) *
                  (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                !0 === s.options.verticalSwiping &&
                  (i = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                (a = s.touchObject.swipeLength),
                (s.touchObject.edgeHit = !1) === s.options.infinite &&
                  ((0 === s.currentSlide && "right" === n) ||
                    (s.currentSlide >= s.getDotCount() && "left" === n)) &&
                  ((a = s.touchObject.swipeLength * s.options.edgeFriction),
                  (s.touchObject.edgeHit = !0)),
                !1 === s.options.vertical
                  ? (s.swipeLeft = t + a * i)
                  : (s.swipeLeft =
                      t + a * (s.$list.height() / s.listWidth) * i),
                !0 === s.options.verticalSwiping && (s.swipeLeft = t + a * i),
                !0 !== s.options.fade &&
                  !1 !== s.options.touchMove &&
                  (!0 === s.animating
                    ? ((s.swipeLeft = null), !1)
                    : void s.setCSS(s.swipeLeft))))
        );
      }),
      (r.prototype.swipeStart = function (e) {
        var t,
          n = this;
        if (
          ((n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return !(n.touchObject = {});
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (r.prototype.unfilterSlides = r.prototype.slickUnfilter =
        function () {
          var e = this;
          null !== e.$slidesCache &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.appendTo(e.$slideTrack),
            e.reinit());
        }),
      (r.prototype.unload = function () {
        var e = this;
        c(".slick-cloned", e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
          e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
          e.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (r.prototype.unslick = function (e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy();
      }),
      (r.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode
              ? (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (r.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active").end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (r.prototype.visibility = function () {
        this.options.autoplay &&
          (document[this.hidden]
            ? (this.interrupted = !0)
            : (this.interrupted = !1));
      }),
      (c.fn.slick = function () {
        var e,
          t,
          n = this,
          a = arguments[0],
          i = Array.prototype.slice.call(arguments, 1),
          o = n.length;
        for (e = 0; e < o; e++)
          if (
            ("object" == typeof a || void 0 === a
              ? (n[e].slick = new r(n[e], a))
              : (t = n[e].slick[a].apply(n[e].slick, i)),
            void 0 !== t)
          )
            return t;
        return n;
      });
  }),
  (function (n, v) {
    v.fn.extend({
      scrollspy: function (h, e) {
        if (o(h)) {
          var t = e;
          (e = h), (h = t);
        }
        r((h = v.extend({}, a, h)), a, "container", i);
        var f = v(h.container);
        if (0 === f.length) return this;
        if ((r(h, a, "namespace", o), o(e) && "DESTROY" === e.toUpperCase()))
          return f.off("scroll." + h.namespace), this;
        r(h, a, "buffer", v.isNumeric),
          r(h, a, "max", v.isNumeric),
          r(h, a, "min", v.isNumeric),
          r(h, a, "onEnter", v.isFunction),
          r(h, a, "onLeave", v.isFunction),
          r(h, a, "onLeaveTop", v.isFunction),
          r(h, a, "onLeaveBottom", v.isFunction),
          r(h, a, "onTick", v.isFunction),
          v.isFunction(h.max) && (h.max = h.max()),
          v.isFunction(h.min) && (h.min = h.min());
        var g = "VERTICAL" === n.String(h.mode).toUpperCase();
        return this.each(function () {
          var c = this,
            d = v(c),
            u = 0,
            p = !1,
            m = 0;
          f.on("scroll." + h.namespace, function () {
            var e = v(this),
              t = { top: e.scrollTop(), left: e.scrollLeft() },
              n = f.height(),
              a = h.max,
              i = h.min,
              o = g ? t.top + h.buffer : t.left + h.buffer;
            if (
              (0 === a && (a = g ? n : f.outerWidth() + d.outerWidth()),
              i <= o && o <= a)
            )
              p ||
                ((p = !0),
                u++,
                d.trigger("scrollEnter", { position: t }),
                null !== h.onEnter && h.onEnter(c, t)),
                d.trigger("scrollTick", {
                  position: t,
                  inside: p,
                  enters: u,
                  leaves: m,
                }),
                null !== h.onTick && h.onTick(c, t, p, u, m);
            else if (p)
              (p = !1),
                m++,
                d.trigger("scrollLeave", { position: t, leaves: m }),
                null !== h.onLeave && h.onLeave(c, t),
                o <= i
                  ? (d.trigger("scrollLeaveTop", { position: t, leaves: m }),
                    null !== h.onLeaveTop && h.onLeaveTop(c, t))
                  : a <= o &&
                    (d.trigger("scrollLeaveBottom", { position: t, leaves: m }),
                    null !== h.onLeaveBottom && h.onLeaveBottom(c, t));
            else {
              var r = f.scrollTop(),
                s = d.height(),
                l = d.offset().top;
              l < n + r &&
                r - s < l &&
                (d.trigger("scrollView", { position: t }),
                null !== h.onView && h.onView(c, t));
            }
          });
        });
      },
    });
    var a = {
      buffer: 0,
      container: n,
      max: 0,
      min: 0,
      mode: "vertical",
      namespace: "scrollspy",
      onEnter: null,
      onLeave: null,
      onLeaveTop: null,
      onLeaveBottom: null,
      onTick: null,
      onView: null,
    };
    function i(e) {
      return "object" === v.type(e);
    }
    function o(e) {
      return "string" === v.type(e) && 0 < v.trim(e).length;
    }
    function r(e, t, n, a) {
      a(e[n]) || (e[n] = t[n]);
    }
  })(window, window.jQuery),
  (function o(r, s, l) {
    function c(n, e) {
      if (!s[n]) {
        if (!r[n]) {
          var t = "function" == typeof require && require;
          if (!e && t) return t(n, !0);
          if (d) return d(n, !0);
          var a = new Error("Cannot find module '" + n + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var i = (s[n] = { exports: {} });
        r[n][0].call(
          i.exports,
          function (e) {
            var t = r[n][1][e];
            return c(t || e);
          },
          i,
          i.exports,
          o,
          r,
          s,
          l
        );
      }
      return s[n].exports;
    }
    for (
      var d = "function" == typeof require && require, e = 0;
      e < l.length;
      e++
    )
      c(l[e]);
    return c;
  })(
    {
      1: [
        function (e, t, n) {
          "use strict";
          var i = e("../main"),
            o = e("../plugin/instances");
          function a(a) {
            a.fn.perfectScrollbar = function (n) {
              return this.each(function () {
                if ("object" == typeof n || void 0 === n) {
                  var e = n;
                  o.get(this) || i.initialize(this, e);
                } else {
                  var t = n;
                  "update" === t
                    ? i.update(this)
                    : "destroy" === t && i.destroy(this);
                }
                return a(this);
              });
            };
          }
          if ("function" == typeof define && define.amd) define(["jquery"], a);
          else {
            var r = window.jQuery ? window.jQuery : window.$;
            void 0 !== r && a(r);
          }
          t.exports = a;
        },
        { "../main": 7, "../plugin/instances": 18 },
      ],
      2: [
        function (e, t, n) {
          "use strict";
          (n.add = function (e, t) {
            var n, a, i;
            e.classList
              ? e.classList.add(t)
              : ((a = t),
                (i = (n = e).className.split(" ")).indexOf(a) < 0 && i.push(a),
                (n.className = i.join(" ")));
          }),
            (n.remove = function (e, t) {
              var n, a, i, o;
              e.classList
                ? e.classList.remove(t)
                : ((a = t),
                  (i = (n = e).className.split(" ")),
                  0 <= (o = i.indexOf(a)) && i.splice(o, 1),
                  (n.className = i.join(" ")));
            }),
            (n.list = function (e) {
              return e.classList
                ? Array.prototype.slice.apply(e.classList)
                : e.className.split(" ");
            });
        },
        {},
      ],
      3: [
        function (e, t, n) {
          "use strict";
          var a = {};
          (a.e = function (e, t) {
            var n = document.createElement(e);
            return (n.className = t), n;
          }),
            (a.appendTo = function (e, t) {
              return t.appendChild(e), e;
            }),
            (a.css = function (e, t, n) {
              return "object" == typeof t
                ? (function (e, t) {
                    for (var n in t) {
                      var a = t[n];
                      "number" == typeof a && (a = a.toString() + "px"),
                        (e.style[n] = a);
                    }
                    return e;
                  })(e, t)
                : void 0 === n
                ? ((r = e), (s = t), window.getComputedStyle(r)[s])
                : ((a = e),
                  (i = t),
                  "number" == typeof (o = n) && (o = o.toString() + "px"),
                  (a.style[i] = o),
                  a);
              var a, i, o, r, s;
            }),
            (a.matches = function (e, t) {
              return void 0 !== e.matches
                ? e.matches(t)
                : void 0 !== e.matchesSelector
                ? e.matchesSelector(t)
                : void 0 !== e.webkitMatchesSelector
                ? e.webkitMatchesSelector(t)
                : void 0 !== e.mozMatchesSelector
                ? e.mozMatchesSelector(t)
                : void 0 !== e.msMatchesSelector
                ? e.msMatchesSelector(t)
                : void 0;
            }),
            (a.remove = function (e) {
              void 0 !== e.remove
                ? e.remove()
                : e.parentNode && e.parentNode.removeChild(e);
            }),
            (a.queryChildren = function (e, t) {
              return Array.prototype.filter.call(e.childNodes, function (e) {
                return a.matches(e, t);
              });
            }),
            (t.exports = a);
        },
        {},
      ],
      4: [
        function (e, t, n) {
          "use strict";
          var a = function (e) {
            (this.element = e), (this.events = {});
          };
          (a.prototype.bind = function (e, t) {
            void 0 === this.events[e] && (this.events[e] = []),
              this.events[e].push(t),
              this.element.addEventListener(e, t, !1);
          }),
            (a.prototype.unbind = function (t, n) {
              var a = void 0 !== n;
              this.events[t] = this.events[t].filter(function (e) {
                return (
                  !(!a || e === n) ||
                  (this.element.removeEventListener(t, e, !1), !1)
                );
              }, this);
            }),
            (a.prototype.unbindAll = function () {
              for (var e in this.events) this.unbind(e);
            });
          var i = function () {
            this.eventElements = [];
          };
          (i.prototype.eventElement = function (t) {
            var e = this.eventElements.filter(function (e) {
              return e.element === t;
            })[0];
            return (
              void 0 === e && ((e = new a(t)), this.eventElements.push(e)), e
            );
          }),
            (i.prototype.bind = function (e, t, n) {
              this.eventElement(e).bind(t, n);
            }),
            (i.prototype.unbind = function (e, t, n) {
              this.eventElement(e).unbind(t, n);
            }),
            (i.prototype.unbindAll = function () {
              for (var e = 0; e < this.eventElements.length; e++)
                this.eventElements[e].unbindAll();
            }),
            (i.prototype.once = function (e, t, n) {
              var a = this.eventElement(e),
                i = function (e) {
                  a.unbind(t, i), n(e);
                };
              a.bind(t, i);
            }),
            (t.exports = i);
        },
        {},
      ],
      5: [
        function (e, t, n) {
          "use strict";
          t.exports = (function () {
            function e() {
              return Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1);
            }
            return function () {
              return (
                e() +
                e() +
                "-" +
                e() +
                "-" +
                e() +
                "-" +
                e() +
                "-" +
                e() +
                e() +
                e()
              );
            };
          })();
        },
        {},
      ],
      6: [
        function (e, t, n) {
          "use strict";
          var i = e("./class"),
            a = e("./dom");
          (n.toInt = function (e) {
            return parseInt(e, 10) || 0;
          }),
            (n.clone = function (e) {
              if (null === e) return null;
              if ("object" != typeof e) return e;
              var t = {};
              for (var n in e) t[n] = this.clone(e[n]);
              return t;
            }),
            (n.extend = function (e, t) {
              var n = this.clone(e);
              for (var a in t) n[a] = this.clone(t[a]);
              return n;
            }),
            (n.isEditable = function (e) {
              return (
                a.matches(e, "input,[contenteditable]") ||
                a.matches(e, "select,[contenteditable]") ||
                a.matches(e, "textarea,[contenteditable]") ||
                a.matches(e, "button,[contenteditable]")
              );
            }),
            (n.removePsClasses = function (e) {
              for (var t = i.list(e), n = 0; n < t.length; n++) {
                var a = t[n];
                0 === a.indexOf("ps-") && i.remove(e, a);
              }
            }),
            (n.outerWidth = function (e) {
              return (
                this.toInt(a.css(e, "width")) +
                this.toInt(a.css(e, "paddingLeft")) +
                this.toInt(a.css(e, "paddingRight")) +
                this.toInt(a.css(e, "borderLeftWidth")) +
                this.toInt(a.css(e, "borderRightWidth"))
              );
            }),
            (n.startScrolling = function (e, t) {
              i.add(e, "ps-in-scrolling"),
                void 0 !== t
                  ? i.add(e, "ps-" + t)
                  : (i.add(e, "ps-x"), i.add(e, "ps-y"));
            }),
            (n.stopScrolling = function (e, t) {
              i.remove(e, "ps-in-scrolling"),
                void 0 !== t
                  ? i.remove(e, "ps-" + t)
                  : (i.remove(e, "ps-x"), i.remove(e, "ps-y"));
            }),
            (n.env = {
              isWebKit: "WebkitAppearance" in document.documentElement.style,
              supportsTouch:
                "ontouchstart" in window ||
                (window.DocumentTouch &&
                  document instanceof window.DocumentTouch),
              supportsIePointer: null !== window.navigator.msMaxTouchPoints,
            });
        },
        { "./class": 2, "./dom": 3 },
      ],
      7: [
        function (e, t, n) {
          "use strict";
          var a = e("./plugin/destroy"),
            i = e("./plugin/initialize"),
            o = e("./plugin/update");
          t.exports = { initialize: i, update: o, destroy: a };
        },
        {
          "./plugin/destroy": 9,
          "./plugin/initialize": 17,
          "./plugin/update": 21,
        },
      ],
      8: [
        function (e, t, n) {
          "use strict";
          t.exports = {
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            useKeyboard: !0,
            useSelectionScroll: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default",
          };
        },
        {},
      ],
      9: [
        function (e, t, n) {
          "use strict";
          var a = e("../lib/dom"),
            i = e("../lib/helper"),
            o = e("./instances");
          t.exports = function (e) {
            var t = o.get(e);
            t &&
              (t.event.unbindAll(),
              a.remove(t.scrollbarX),
              a.remove(t.scrollbarY),
              a.remove(t.scrollbarXRail),
              a.remove(t.scrollbarYRail),
              i.removePsClasses(e),
              o.remove(e));
          };
        },
        { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 },
      ],
      10: [
        function (e, t, n) {
          "use strict";
          var r = e("../../lib/helper"),
            a = e("../instances"),
            s = e("../update-geometry"),
            l = e("../update-scroll");
          t.exports = function (e) {
            !(function (a, i) {
              function o(e) {
                return e.getBoundingClientRect();
              }
              var e = window.Event.prototype.stopPropagation.bind;
              i.settings.stopPropagationOnClick &&
                i.event.bind(i.scrollbarY, "click", e),
                i.event.bind(i.scrollbarYRail, "click", function (e) {
                  var t = r.toInt(i.scrollbarYHeight / 2),
                    n =
                      (i.railYRatio *
                        (e.pageY -
                          window.pageYOffset -
                          o(i.scrollbarYRail).top -
                          t)) /
                      (i.railYRatio * (i.railYHeight - i.scrollbarYHeight));
                  n < 0 ? (n = 0) : 1 < n && (n = 1),
                    l(a, "top", (i.contentHeight - i.containerHeight) * n),
                    s(a),
                    e.stopPropagation();
                }),
                i.settings.stopPropagationOnClick &&
                  i.event.bind(i.scrollbarX, "click", e),
                i.event.bind(i.scrollbarXRail, "click", function (e) {
                  var t = r.toInt(i.scrollbarXWidth / 2),
                    n =
                      (i.railXRatio *
                        (e.pageX -
                          window.pageXOffset -
                          o(i.scrollbarXRail).left -
                          t)) /
                      (i.railXRatio * (i.railXWidth - i.scrollbarXWidth));
                  n < 0 ? (n = 0) : 1 < n && (n = 1),
                    l(
                      a,
                      "left",
                      (i.contentWidth - i.containerWidth) * n -
                        i.negativeScrollAdjustment
                    ),
                    s(a),
                    e.stopPropagation();
                });
            })(e, a.get(e));
          };
        },
        {
          "../../lib/helper": 6,
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      11: [
        function (e, t, n) {
          "use strict";
          var s = e("../../lib/dom"),
            l = e("../../lib/helper"),
            a = e("../instances"),
            c = e("../update-geometry"),
            d = e("../update-scroll");
          function i(i, o) {
            var r = null,
              t = null;
            var n = function (e) {
                !(function (e) {
                  var t = r + e * o.railXRatio,
                    n =
                      Math.max(
                        0,
                        o.scrollbarXRail.getBoundingClientRect().left
                      ) +
                      o.railXRatio * (o.railXWidth - o.scrollbarXWidth);
                  o.scrollbarXLeft = t < 0 ? 0 : n < t ? n : t;
                  var a =
                    l.toInt(
                      (o.scrollbarXLeft * (o.contentWidth - o.containerWidth)) /
                        (o.containerWidth - o.railXRatio * o.scrollbarXWidth)
                    ) - o.negativeScrollAdjustment;
                  d(i, "left", a);
                })(e.pageX - t),
                  c(i),
                  e.stopPropagation(),
                  e.preventDefault();
              },
              a = function () {
                l.stopScrolling(i, "x"),
                  o.event.unbind(o.ownerDocument, "mousemove", n);
              };
            o.event.bind(o.scrollbarX, "mousedown", function (e) {
              (t = e.pageX),
                (r = l.toInt(s.css(o.scrollbarX, "left")) * o.railXRatio),
                l.startScrolling(i, "x"),
                o.event.bind(o.ownerDocument, "mousemove", n),
                o.event.once(o.ownerDocument, "mouseup", a),
                e.stopPropagation(),
                e.preventDefault();
            });
          }
          function o(i, o) {
            var r = null,
              t = null;
            var n = function (e) {
                !(function (e) {
                  var t = r + e * o.railYRatio,
                    n =
                      Math.max(
                        0,
                        o.scrollbarYRail.getBoundingClientRect().top
                      ) +
                      o.railYRatio * (o.railYHeight - o.scrollbarYHeight);
                  o.scrollbarYTop = t < 0 ? 0 : n < t ? n : t;
                  var a = l.toInt(
                    (o.scrollbarYTop * (o.contentHeight - o.containerHeight)) /
                      (o.containerHeight - o.railYRatio * o.scrollbarYHeight)
                  );
                  d(i, "top", a);
                })(e.pageY - t),
                  c(i),
                  e.stopPropagation(),
                  e.preventDefault();
              },
              a = function () {
                l.stopScrolling(i, "y"),
                  o.event.unbind(o.ownerDocument, "mousemove", n);
              };
            o.event.bind(o.scrollbarY, "mousedown", function (e) {
              (t = e.pageY),
                (r = l.toInt(s.css(o.scrollbarY, "top")) * o.railYRatio),
                l.startScrolling(i, "y"),
                o.event.bind(o.ownerDocument, "mousemove", n),
                o.event.once(o.ownerDocument, "mouseup", a),
                e.stopPropagation(),
                e.preventDefault();
            });
          }
          t.exports = function (e) {
            var t = a.get(e);
            i(e, t), o(e, t);
          };
        },
        {
          "../../lib/dom": 3,
          "../../lib/helper": 6,
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      12: [
        function (e, t, n) {
          "use strict";
          var l = e("../../lib/helper"),
            c = e("../../lib/dom"),
            a = e("../instances"),
            d = e("../update-geometry"),
            u = e("../update-scroll");
          function i(o, r) {
            var s = !1;
            r.event.bind(o, "mouseenter", function () {
              s = !0;
            }),
              r.event.bind(o, "mouseleave", function () {
                s = !1;
              });
            r.event.bind(r.ownerDocument, "keydown", function (e) {
              if (!e.isDefaultPrevented || !e.isDefaultPrevented()) {
                var t =
                  c.matches(r.scrollbarX, ":focus") ||
                  c.matches(r.scrollbarY, ":focus");
                if (s || t) {
                  var n = document.activeElement
                    ? document.activeElement
                    : r.ownerDocument.activeElement;
                  if (n) {
                    for (; n.shadowRoot; ) n = n.shadowRoot.activeElement;
                    if (l.isEditable(n)) return;
                  }
                  var a = 0,
                    i = 0;
                  switch (e.which) {
                    case 37:
                      a = -30;
                      break;
                    case 38:
                      i = 30;
                      break;
                    case 39:
                      a = 30;
                      break;
                    case 40:
                      i = -30;
                      break;
                    case 33:
                      i = 90;
                      break;
                    case 32:
                      i = e.shiftKey ? 90 : -90;
                      break;
                    case 34:
                      i = -90;
                      break;
                    case 35:
                      i = e.ctrlKey ? -r.contentHeight : -r.containerHeight;
                      break;
                    case 36:
                      i = e.ctrlKey ? o.scrollTop : r.containerHeight;
                      break;
                    default:
                      return;
                  }
                  u(o, "top", o.scrollTop - i),
                    u(o, "left", o.scrollLeft + a),
                    d(o),
                    (function (e, t) {
                      var n = o.scrollTop;
                      if (0 === e) {
                        if (!r.scrollbarYActive) return !1;
                        if (
                          (0 === n && 0 < t) ||
                          (n >= r.contentHeight - r.containerHeight && t < 0)
                        )
                          return !r.settings.wheelPropagation;
                      }
                      var a = o.scrollLeft;
                      if (0 === t) {
                        if (!r.scrollbarXActive) return !1;
                        if (
                          (0 === a && e < 0) ||
                          (a >= r.contentWidth - r.containerWidth && 0 < e)
                        )
                          return !r.settings.wheelPropagation;
                      }
                      return !0;
                    })(a, i) && e.preventDefault();
                }
              }
            });
          }
          t.exports = function (e) {
            i(e, a.get(e));
          };
        },
        {
          "../../lib/dom": 3,
          "../../lib/helper": 6,
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      13: [
        function (e, t, n) {
          "use strict";
          var a = e("../instances"),
            d = e("../update-geometry"),
            u = e("../update-scroll");
          function i(s, l) {
            var c = !1;
            function e(e) {
              var t,
                n,
                a,
                i =
                  ((n = (t = e).deltaX),
                  (a = -1 * t.deltaY),
                  (void 0 !== n && void 0 !== a) ||
                    ((n = (-1 * t.wheelDeltaX) / 6), (a = t.wheelDeltaY / 6)),
                  t.deltaMode && 1 === t.deltaMode && ((n *= 10), (a *= 10)),
                  n != n && a != a && ((n = 0), (a = t.wheelDelta)),
                  [n, a]),
                o = i[0],
                r = i[1];
              (function (e, t) {
                var n = s.querySelector("textarea:hover");
                if (n) {
                  var a = n.scrollHeight - n.clientHeight;
                  if (
                    0 < a &&
                    !(
                      (0 === n.scrollTop && 0 < t) ||
                      (n.scrollTop === a && t < 0)
                    )
                  )
                    return !0;
                  var i = n.scrollLeft - n.clientWidth;
                  if (
                    0 < i &&
                    !(
                      (0 === n.scrollLeft && e < 0) ||
                      (n.scrollLeft === i && 0 < e)
                    )
                  )
                    return !0;
                }
                return !1;
              })(o, r) ||
                ((c = !1),
                l.settings.useBothWheelAxes
                  ? l.scrollbarYActive && !l.scrollbarXActive
                    ? (u(
                        s,
                        "top",
                        r
                          ? s.scrollTop - r * l.settings.wheelSpeed
                          : s.scrollTop + o * l.settings.wheelSpeed
                      ),
                      (c = !0))
                    : l.scrollbarXActive &&
                      !l.scrollbarYActive &&
                      (u(
                        s,
                        "left",
                        o
                          ? s.scrollLeft + o * l.settings.wheelSpeed
                          : s.scrollLeft - r * l.settings.wheelSpeed
                      ),
                      (c = !0))
                  : (u(s, "top", s.scrollTop - r * l.settings.wheelSpeed),
                    u(s, "left", s.scrollLeft + o * l.settings.wheelSpeed)),
                d(s),
                (c =
                  c ||
                  (function (e, t) {
                    var n = s.scrollTop;
                    if (0 === e) {
                      if (!l.scrollbarYActive) return !1;
                      if (
                        (0 === n && 0 < t) ||
                        (n >= l.contentHeight - l.containerHeight && t < 0)
                      )
                        return !l.settings.wheelPropagation;
                    }
                    var a = s.scrollLeft;
                    if (0 === t) {
                      if (!l.scrollbarXActive) return !1;
                      if (
                        (0 === a && e < 0) ||
                        (a >= l.contentWidth - l.containerWidth && 0 < e)
                      )
                        return !l.settings.wheelPropagation;
                    }
                    return !0;
                  })(o, r)) && (e.stopPropagation(), e.preventDefault()));
            }
            void 0 !== window.onwheel
              ? l.event.bind(s, "wheel", e)
              : void 0 !== window.onmousewheel &&
                l.event.bind(s, "mousewheel", e);
          }
          t.exports = function (e) {
            i(e, a.get(e));
          };
        },
        {
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      14: [
        function (e, t, n) {
          "use strict";
          var a = e("../instances"),
            i = e("../update-geometry");
          t.exports = function (e) {
            var t,
              n = a.get(e);
            (t = e),
              n.event.bind(t, "scroll", function () {
                i(t);
              });
          };
        },
        { "../instances": 18, "../update-geometry": 19 },
      ],
      15: [
        function (e, t, n) {
          "use strict";
          var p = e("../../lib/helper"),
            m = e("../instances"),
            h = e("../update-geometry"),
            f = e("../update-scroll");
          function a(s, e) {
            var l = null,
              c = { top: 0, left: 0 };
            function d() {
              l && (clearInterval(l), (l = null)), p.stopScrolling(s);
            }
            var u = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function () {
              var e;
              s.contains(
                0 ===
                  (e = window.getSelection
                    ? window.getSelection()
                    : document.getSelection
                    ? document.getSelection()
                    : "").toString().length
                  ? null
                  : e.getRangeAt(0).commonAncestorContainer
              )
                ? (u = !0)
                : ((u = !1), d());
            }),
              e.event.bind(window, "mouseup", function () {
                u && ((u = !1), d());
              }),
              e.event.bind(window, "mousemove", function (e) {
                if (u) {
                  var t = e.pageX,
                    n = e.pageY,
                    a = s.offsetLeft,
                    i = s.offsetLeft + s.offsetWidth,
                    o = s.offsetTop,
                    r = s.offsetTop + s.offsetHeight;
                  t < a + 3
                    ? ((c.left = -5), p.startScrolling(s, "x"))
                    : i - 3 < t
                    ? ((c.left = 5), p.startScrolling(s, "x"))
                    : (c.left = 0),
                    n < o + 3
                      ? ((c.top = o + 3 - n < 5 ? -5 : -20),
                        p.startScrolling(s, "y"))
                      : r - 3 < n
                      ? ((c.top = n - r + 3 < 5 ? 5 : 20),
                        p.startScrolling(s, "y"))
                      : (c.top = 0),
                    0 === c.top && 0 === c.left
                      ? d()
                      : l ||
                        (l = setInterval(function () {
                          m.get(s)
                            ? (f(s, "top", s.scrollTop + c.top),
                              f(s, "left", s.scrollLeft + c.left),
                              h(s))
                            : clearInterval(l);
                        }, 50));
                }
              });
          }
          t.exports = function (e) {
            a(e, m.get(e));
          };
        },
        {
          "../../lib/helper": 6,
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      16: [
        function (e, t, n) {
          "use strict";
          var y = e("../instances"),
            b = e("../update-geometry"),
            _ = e("../update-scroll");
          function a(s, l, e, t) {
            function c(e, t) {
              _(s, "top", s.scrollTop - t),
                _(s, "left", s.scrollLeft - e),
                b(s);
            }
            var d = {},
              u = 0,
              p = {},
              n = null,
              m = !1,
              h = !1;
            function a() {
              m = !0;
            }
            function i() {
              m = !1;
            }
            function f(e) {
              return e.targetTouches ? e.targetTouches[0] : e;
            }
            function g(e) {
              return (
                !(!e.targetTouches || 1 !== e.targetTouches.length) ||
                !(
                  !e.pointerType ||
                  "mouse" === e.pointerType ||
                  e.pointerType === e.MSPOINTER_TYPE_MOUSE
                )
              );
            }
            function o(e) {
              if (g(e)) {
                h = !0;
                var t = f(e);
                (d.pageX = t.pageX),
                  (d.pageY = t.pageY),
                  (u = new Date().getTime()),
                  null !== n && clearInterval(n),
                  e.stopPropagation();
              }
            }
            function r(e) {
              if (!m && h && g(e)) {
                var t = f(e),
                  n = { pageX: t.pageX, pageY: t.pageY },
                  a = n.pageX - d.pageX,
                  i = n.pageY - d.pageY;
                c(a, i), (d = n);
                var o = new Date().getTime(),
                  r = o - u;
                0 < r && ((p.x = a / r), (p.y = i / r), (u = o)),
                  (function (e, t) {
                    var n = s.scrollTop,
                      a = s.scrollLeft,
                      i = Math.abs(e),
                      o = Math.abs(t);
                    if (i < o) {
                      if (
                        (t < 0 && n === l.contentHeight - l.containerHeight) ||
                        (0 < t && 0 === n)
                      )
                        return !l.settings.swipePropagation;
                    } else if (
                      o < i &&
                      ((e < 0 && a === l.contentWidth - l.containerWidth) ||
                        (0 < e && 0 === a))
                    )
                      return !l.settings.swipePropagation;
                    return !0;
                  })(a, i) && (e.stopPropagation(), e.preventDefault());
              }
            }
            function v() {
              !m &&
                h &&
                ((h = !1),
                clearInterval(n),
                (n = setInterval(function () {
                  y.get(s)
                    ? Math.abs(p.x) < 0.01 && Math.abs(p.y) < 0.01
                      ? clearInterval(n)
                      : (c(30 * p.x, 30 * p.y), (p.x *= 0.8), (p.y *= 0.8))
                    : clearInterval(n);
                }, 10)));
            }
            e &&
              (l.event.bind(window, "touchstart", a),
              l.event.bind(window, "touchend", i),
              l.event.bind(s, "touchstart", o),
              l.event.bind(s, "touchmove", r),
              l.event.bind(s, "touchend", v)),
              t &&
                (window.PointerEvent
                  ? (l.event.bind(window, "pointerdown", a),
                    l.event.bind(window, "pointerup", i),
                    l.event.bind(s, "pointerdown", o),
                    l.event.bind(s, "pointermove", r),
                    l.event.bind(s, "pointerup", v))
                  : window.MSPointerEvent &&
                    (l.event.bind(window, "MSPointerDown", a),
                    l.event.bind(window, "MSPointerUp", i),
                    l.event.bind(s, "MSPointerDown", o),
                    l.event.bind(s, "MSPointerMove", r),
                    l.event.bind(s, "MSPointerUp", v)));
          }
          t.exports = function (e, t, n) {
            a(e, y.get(e), t, n);
          };
        },
        {
          "../instances": 18,
          "../update-geometry": 19,
          "../update-scroll": 20,
        },
      ],
      17: [
        function (e, t, n) {
          "use strict";
          var a = e("../lib/class"),
            i = e("../lib/helper"),
            o = e("./instances"),
            r = e("./update-geometry"),
            s = e("./handler/click-rail"),
            l = e("./handler/drag-scrollbar"),
            c = e("./handler/keyboard"),
            d = e("./handler/mouse-wheel"),
            u = e("./handler/native-scroll"),
            p = e("./handler/selection"),
            m = e("./handler/touch");
          t.exports = function (e, t) {
            (t = "object" == typeof t ? t : {}), a.add(e, "ps-container");
            var n = o.add(e);
            (n.settings = i.extend(n.settings, t)),
              a.add(e, "ps-theme-" + n.settings.theme),
              s(e),
              l(e),
              d(e),
              u(e),
              n.settings.useSelectionScroll && p(e),
              (i.env.supportsTouch || i.env.supportsIePointer) &&
                m(e, i.env.supportsTouch, i.env.supportsIePointer),
              n.settings.useKeyboard && c(e),
              r(e);
          };
        },
        {
          "../lib/class": 2,
          "../lib/helper": 6,
          "./handler/click-rail": 10,
          "./handler/drag-scrollbar": 11,
          "./handler/keyboard": 12,
          "./handler/mouse-wheel": 13,
          "./handler/native-scroll": 14,
          "./handler/selection": 15,
          "./handler/touch": 16,
          "./instances": 18,
          "./update-geometry": 19,
        },
      ],
      18: [
        function (e, t, n) {
          "use strict";
          var r = e("../lib/class"),
            s = e("../lib/dom"),
            l = e("./default-setting"),
            c = e("../lib/event-manager"),
            i = e("../lib/guid"),
            d = e("../lib/helper"),
            o = {};
          function u(e) {
            var t,
              n,
              a = this;
            function i() {
              r.add(e, "ps-focus");
            }
            function o() {
              r.remove(e, "ps-focus");
            }
            (a.settings = d.clone(l)),
              (a.containerWidth = null),
              (a.containerHeight = null),
              (a.contentWidth = null),
              (a.contentHeight = null),
              (a.isRtl = "rtl" === s.css(e, "direction")),
              (a.isNegativeScroll =
                ((n = e.scrollLeft),
                (e.scrollLeft = -1),
                (t = e.scrollLeft < 0),
                (e.scrollLeft = n),
                t)),
              (a.negativeScrollAdjustment = a.isNegativeScroll
                ? e.scrollWidth - e.clientWidth
                : 0),
              (a.event = new c()),
              (a.ownerDocument = e.ownerDocument || document),
              (a.scrollbarXRail = s.appendTo(
                s.e("div", "ps-scrollbar-x-rail"),
                e
              )),
              (a.scrollbarX = s.appendTo(
                s.e("div", "ps-scrollbar-x"),
                a.scrollbarXRail
              )),
              a.scrollbarX.setAttribute("tabindex", 0),
              a.event.bind(a.scrollbarX, "focus", i),
              a.event.bind(a.scrollbarX, "blur", o),
              (a.scrollbarXActive = null),
              (a.scrollbarXWidth = null),
              (a.scrollbarXLeft = null),
              (a.scrollbarXBottom = d.toInt(s.css(a.scrollbarXRail, "bottom"))),
              (a.isScrollbarXUsingBottom =
                a.scrollbarXBottom == a.scrollbarXBottom),
              (a.scrollbarXTop = a.isScrollbarXUsingBottom
                ? null
                : d.toInt(s.css(a.scrollbarXRail, "top"))),
              (a.railBorderXWidth =
                d.toInt(s.css(a.scrollbarXRail, "borderLeftWidth")) +
                d.toInt(s.css(a.scrollbarXRail, "borderRightWidth"))),
              s.css(a.scrollbarXRail, "display", "block"),
              (a.railXMarginWidth =
                d.toInt(s.css(a.scrollbarXRail, "marginLeft")) +
                d.toInt(s.css(a.scrollbarXRail, "marginRight"))),
              s.css(a.scrollbarXRail, "display", ""),
              (a.railXWidth = null),
              (a.railXRatio = null),
              (a.scrollbarYRail = s.appendTo(
                s.e("div", "ps-scrollbar-y-rail"),
                e
              )),
              (a.scrollbarY = s.appendTo(
                s.e("div", "ps-scrollbar-y"),
                a.scrollbarYRail
              )),
              a.scrollbarY.setAttribute("tabindex", 0),
              a.event.bind(a.scrollbarY, "focus", i),
              a.event.bind(a.scrollbarY, "blur", o),
              (a.scrollbarYActive = null),
              (a.scrollbarYHeight = null),
              (a.scrollbarYTop = null),
              (a.scrollbarYRight = d.toInt(s.css(a.scrollbarYRail, "right"))),
              (a.isScrollbarYUsingRight =
                a.scrollbarYRight == a.scrollbarYRight),
              (a.scrollbarYLeft = a.isScrollbarYUsingRight
                ? null
                : d.toInt(s.css(a.scrollbarYRail, "left"))),
              (a.scrollbarYOuterWidth = a.isRtl
                ? d.outerWidth(a.scrollbarY)
                : null),
              (a.railBorderYWidth =
                d.toInt(s.css(a.scrollbarYRail, "borderTopWidth")) +
                d.toInt(s.css(a.scrollbarYRail, "borderBottomWidth"))),
              s.css(a.scrollbarYRail, "display", "block"),
              (a.railYMarginHeight =
                d.toInt(s.css(a.scrollbarYRail, "marginTop")) +
                d.toInt(s.css(a.scrollbarYRail, "marginBottom"))),
              s.css(a.scrollbarYRail, "display", ""),
              (a.railYHeight = null),
              (a.railYRatio = null);
          }
          function a(e) {
            return void 0 === e.dataset
              ? e.getAttribute("data-ps-id")
              : e.dataset.psId;
          }
          (n.add = function (e) {
            var t,
              n,
              a = i();
            return (
              (n = a),
              void 0 === (t = e).dataset
                ? t.setAttribute("data-ps-id", n)
                : (t.dataset.psId = n),
              (o[a] = new u(e)),
              o[a]
            );
          }),
            (n.remove = function (e) {
              var t;
              delete o[a(e)],
                void 0 === (t = e).dataset
                  ? t.removeAttribute("data-ps-id")
                  : delete t.dataset.psId;
            }),
            (n.get = function (e) {
              return o[a(e)];
            });
        },
        {
          "../lib/class": 2,
          "../lib/dom": 3,
          "../lib/event-manager": 4,
          "../lib/guid": 5,
          "../lib/helper": 6,
          "./default-setting": 8,
        },
      ],
      19: [
        function (e, t, n) {
          "use strict";
          var a = e("../lib/class"),
            i = e("../lib/dom"),
            o = e("../lib/helper"),
            r = e("./instances"),
            s = e("./update-scroll");
          function l(e, t) {
            return (
              e.settings.minScrollbarLength &&
                (t = Math.max(t, e.settings.minScrollbarLength)),
              e.settings.maxScrollbarLength &&
                (t = Math.min(t, e.settings.maxScrollbarLength)),
              t
            );
          }
          t.exports = function (e) {
            var t,
              n = r.get(e);
            (n.containerWidth = e.clientWidth),
              (n.containerHeight = e.clientHeight),
              (n.contentWidth = e.scrollWidth),
              (n.contentHeight = e.scrollHeight),
              e.contains(n.scrollbarXRail) ||
                (0 < (t = i.queryChildren(e, ".ps-scrollbar-x-rail")).length &&
                  t.forEach(function (e) {
                    i.remove(e);
                  }),
                i.appendTo(n.scrollbarXRail, e)),
              e.contains(n.scrollbarYRail) ||
                (0 < (t = i.queryChildren(e, ".ps-scrollbar-y-rail")).length &&
                  t.forEach(function (e) {
                    i.remove(e);
                  }),
                i.appendTo(n.scrollbarYRail, e)),
              !n.settings.suppressScrollX &&
              n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth
                ? ((n.scrollbarXActive = !0),
                  (n.railXWidth = n.containerWidth - n.railXMarginWidth),
                  (n.railXRatio = n.containerWidth / n.railXWidth),
                  (n.scrollbarXWidth = l(
                    n,
                    o.toInt((n.railXWidth * n.containerWidth) / n.contentWidth)
                  )),
                  (n.scrollbarXLeft = o.toInt(
                    ((n.negativeScrollAdjustment + e.scrollLeft) *
                      (n.railXWidth - n.scrollbarXWidth)) /
                      (n.contentWidth - n.containerWidth)
                  )))
                : (n.scrollbarXActive = !1),
              !n.settings.suppressScrollY &&
              n.containerHeight + n.settings.scrollYMarginOffset <
                n.contentHeight
                ? ((n.scrollbarYActive = !0),
                  (n.railYHeight = n.containerHeight - n.railYMarginHeight),
                  (n.railYRatio = n.containerHeight / n.railYHeight),
                  (n.scrollbarYHeight = l(
                    n,
                    o.toInt(
                      (n.railYHeight * n.containerHeight) / n.contentHeight
                    )
                  )),
                  (n.scrollbarYTop = o.toInt(
                    (e.scrollTop * (n.railYHeight - n.scrollbarYHeight)) /
                      (n.contentHeight - n.containerHeight)
                  )))
                : (n.scrollbarYActive = !1),
              n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth &&
                (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth),
              n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight &&
                (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight),
              (function (e, t) {
                var n = { width: t.railXWidth };
                t.isRtl
                  ? (n.left =
                      t.negativeScrollAdjustment +
                      e.scrollLeft +
                      t.containerWidth -
                      t.contentWidth)
                  : (n.left = e.scrollLeft),
                  t.isScrollbarXUsingBottom
                    ? (n.bottom = t.scrollbarXBottom - e.scrollTop)
                    : (n.top = t.scrollbarXTop + e.scrollTop),
                  i.css(t.scrollbarXRail, n);
                var a = { top: e.scrollTop, height: t.railYHeight };
                t.isScrollbarYUsingRight
                  ? t.isRtl
                    ? (a.right =
                        t.contentWidth -
                        (t.negativeScrollAdjustment + e.scrollLeft) -
                        t.scrollbarYRight -
                        t.scrollbarYOuterWidth)
                    : (a.right = t.scrollbarYRight - e.scrollLeft)
                  : t.isRtl
                  ? (a.left =
                      t.negativeScrollAdjustment +
                      e.scrollLeft +
                      2 * t.containerWidth -
                      t.contentWidth -
                      t.scrollbarYLeft -
                      t.scrollbarYOuterWidth)
                  : (a.left = t.scrollbarYLeft + e.scrollLeft),
                  i.css(t.scrollbarYRail, a),
                  i.css(t.scrollbarX, {
                    left: t.scrollbarXLeft,
                    width: t.scrollbarXWidth - t.railBorderXWidth,
                  }),
                  i.css(t.scrollbarY, {
                    top: t.scrollbarYTop,
                    height: t.scrollbarYHeight - t.railBorderYWidth,
                  });
              })(e, n),
              n.scrollbarXActive
                ? a.add(e, "ps-active-x")
                : (a.remove(e, "ps-active-x"),
                  (n.scrollbarXWidth = 0),
                  (n.scrollbarXLeft = 0),
                  s(e, "left", 0)),
              n.scrollbarYActive
                ? a.add(e, "ps-active-y")
                : (a.remove(e, "ps-active-y"),
                  (n.scrollbarYHeight = 0),
                  (n.scrollbarYTop = 0),
                  s(e, "top", 0));
          };
        },
        {
          "../lib/class": 2,
          "../lib/dom": 3,
          "../lib/helper": 6,
          "./instances": 18,
          "./update-scroll": 20,
        },
      ],
      20: [
        function (e, t, n) {
          "use strict";
          var i,
            o,
            r = e("./instances"),
            s = document.createEvent("Event"),
            l = document.createEvent("Event"),
            c = document.createEvent("Event"),
            d = document.createEvent("Event"),
            u = document.createEvent("Event"),
            p = document.createEvent("Event"),
            m = document.createEvent("Event"),
            h = document.createEvent("Event"),
            f = document.createEvent("Event"),
            g = document.createEvent("Event");
          s.initEvent("ps-scroll-up", !0, !0),
            l.initEvent("ps-scroll-down", !0, !0),
            c.initEvent("ps-scroll-left", !0, !0),
            d.initEvent("ps-scroll-right", !0, !0),
            u.initEvent("ps-scroll-y", !0, !0),
            p.initEvent("ps-scroll-x", !0, !0),
            m.initEvent("ps-x-reach-start", !0, !0),
            h.initEvent("ps-x-reach-end", !0, !0),
            f.initEvent("ps-y-reach-start", !0, !0),
            g.initEvent("ps-y-reach-end", !0, !0),
            (t.exports = function (e, t, n) {
              if (void 0 === e)
                throw "You must provide an element to the update-scroll function";
              if (void 0 === t)
                throw "You must provide an axis to the update-scroll function";
              if (void 0 === n)
                throw "You must provide a value to the update-scroll function";
              "top" === t &&
                n <= 0 &&
                ((e.scrollTop = n = 0), e.dispatchEvent(f)),
                "left" === t &&
                  n <= 0 &&
                  ((e.scrollLeft = n = 0), e.dispatchEvent(m));
              var a = r.get(e);
              "top" === t &&
                n >= a.contentHeight - a.containerHeight &&
                ((e.scrollTop = n = a.contentHeight - a.containerHeight),
                e.dispatchEvent(g)),
                "left" === t &&
                  n >= a.contentWidth - a.containerWidth &&
                  ((e.scrollLeft = n = a.contentWidth - a.containerWidth),
                  e.dispatchEvent(h)),
                i || (i = e.scrollTop),
                o || (o = e.scrollLeft),
                "top" === t && n < i && e.dispatchEvent(s),
                "top" === t && i < n && e.dispatchEvent(l),
                "left" === t && n < o && e.dispatchEvent(c),
                "left" === t && o < n && e.dispatchEvent(d),
                "top" === t && ((e.scrollTop = i = n), e.dispatchEvent(u)),
                "left" === t && ((e.scrollLeft = o = n), e.dispatchEvent(p));
            });
        },
        { "./instances": 18 },
      ],
      21: [
        function (e, t, n) {
          "use strict";
          var a = e("../lib/dom"),
            i = e("../lib/helper"),
            o = e("./instances"),
            r = e("./update-geometry"),
            s = e("./update-scroll");
          t.exports = function (e) {
            var t = o.get(e);
            t &&
              ((t.negativeScrollAdjustment = t.isNegativeScroll
                ? e.scrollWidth - e.clientWidth
                : 0),
              a.css(t.scrollbarXRail, "display", "block"),
              a.css(t.scrollbarYRail, "display", "block"),
              (t.railXMarginWidth =
                i.toInt(a.css(t.scrollbarXRail, "marginLeft")) +
                i.toInt(a.css(t.scrollbarXRail, "marginRight"))),
              (t.railYMarginHeight =
                i.toInt(a.css(t.scrollbarYRail, "marginTop")) +
                i.toInt(a.css(t.scrollbarYRail, "marginBottom"))),
              a.css(t.scrollbarXRail, "display", "none"),
              a.css(t.scrollbarYRail, "display", "none"),
              r(e),
              s(e, "top", e.scrollTop),
              s(e, "left", e.scrollLeft),
              a.css(t.scrollbarXRail, "display", ""),
              a.css(t.scrollbarYRail, "display", ""));
          };
        },
        {
          "../lib/dom": 3,
          "../lib/helper": 6,
          "./instances": 18,
          "./update-geometry": 19,
          "./update-scroll": 20,
        },
      ],
    },
    {},
    [1]
  ),
  (function (r, d) {
    var u = {
      catchMethods: { methodreturn: [], count: 0 },
      init: function (e) {
        var t, n, a;
        e.originalEvent.origin.match(/vimeo/g) &&
          "data" in e.originalEvent &&
          (a =
            "string" === r.type(e.originalEvent.data)
              ? r.parseJSON(e.originalEvent.data)
              : e.originalEvent.data) &&
          (t = this.setPlayerID(a)).length &&
          ((n = this.setVimeoAPIurl(t)),
          a.hasOwnProperty("event") && this.handleEvent(a, t, n),
          a.hasOwnProperty("method") && this.handleMethod(a, t, n));
      },
      setPlayerID: function (e) {
        return r("iframe[src*=" + e.player_id + "]");
      },
      setVimeoAPIurl: function (e) {
        return "http" !== e.attr("src").substr(0, 4)
          ? "https:" + e.attr("src").split("?")[0]
          : e.attr("src").split("?")[0];
      },
      handleMethod: function (e, t, n) {
        this.catchMethods.methodreturn.push(e.value);
      },
      handleEvent: function (e, t, n) {
        switch (e.event.toLowerCase()) {
          case "ready":
            for (var a in r._data(t[0], "events"))
              a.match(
                /loadProgress|playProgress|play|pause|finish|seek|cuechange/
              ) &&
                t[0].contentWindow.postMessage(
                  JSON.stringify({ method: "addEventListener", value: a }),
                  n
                );
            if (t.data("vimeoAPICall")) {
              for (var i = t.data("vimeoAPICall"), o = 0; o < i.length; o++)
                t[0].contentWindow.postMessage(
                  JSON.stringify(i[o].message),
                  i[o].api
                );
              t.removeData("vimeoAPICall");
            }
            t.data("vimeoReady", !0), t.triggerHandler("ready");
            break;
          case "seek":
            t.triggerHandler("seek", [e.data]);
            break;
          case "loadprogress":
            t.triggerHandler("loadProgress", [e.data]);
            break;
          case "playprogress":
            t.triggerHandler("playProgress", [e.data]);
            break;
          case "pause":
            t.triggerHandler("pause");
            break;
          case "finish":
            t.triggerHandler("finish");
            break;
          case "play":
            t.triggerHandler("play");
            break;
          case "cuechange":
            t.triggerHandler("cuechange");
        }
      },
    };
    jQuery(document).ready(function () {
      r("iframe[src*='vimeo.com']").each(function (e) {
        var t = r(this).attr("src");
        if (null === t.match(/player_id/g)) {
          var n = -1 === t.indexOf("?") ? "?" : "&",
            a = r.param({ api: 1, player_id: "vvvvimeoVideo-" + e });
          r(this).attr("src", t + n + a);
        }
      });
    }),
      r(d).on("message", function (e) {
        u.init(e);
      }),
      (r.vimeo = function (e, t, n) {
        var a,
          i,
          o,
          r,
          s = {},
          l = u.catchMethods.methodreturn.length;
        if (
          ("string" == typeof t && (s.method = t),
          void 0 !== typeof n && "function" != typeof n && (s.value = n),
          "iframe" === e.prop("tagName").toLowerCase() &&
            s.hasOwnProperty("method"))
        )
          if (e.data("vimeoReady"))
            e[0].contentWindow.postMessage(
              JSON.stringify(s),
              u.setVimeoAPIurl(e)
            );
          else {
            var c = e.data("vimeoAPICall") ? e.data("vimeoAPICall") : [];
            c.push({ message: s, api: u.setVimeoAPIurl(e) }),
              e.data("vimeoAPICall", c);
          }
        return (
          ("get" !== t.toString().substr(0, 3) && "paused" !== t.toString()) ||
            "function" != typeof n ||
            ((a = l),
            (i = n),
            (o = u.catchMethods.count),
            (r = d.setInterval(function () {
              u.catchMethods.methodreturn.length != a &&
                (d.clearInterval(r), i(u.catchMethods.methodreturn[o]));
            }, 10)),
            u.catchMethods.count++),
          e
        );
      }),
      (r.fn.vimeo = function (e, t) {
        return r.vimeo(this, e, t);
      });
  })(jQuery, window);
var planType = null,
  source = "LandingEmailSubmission",
  stored_promo = null,
  translations = null,
  form_label = null,
  country_code = "",
  country_name = "",
  country_currency = {},
  currency_rate = 0,
  language = "en",
  COUNTRY_CODES = [
    "AT",
    "BE",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE",
    "GB",
    "UK",
  ],
  HOST = window.location.host,
  IS_PROD = !("clickup.com" !== HOST && "www.clickup.com" !== HOST),
  API_HOST = IS_PROD
    ? "https://api.clickup.com/v1"
    : "https://dev-api.clickup.com/v1";
function shuffleArray(e) {
  for (var t = e.length - 2; 0 < t; t--) {
    var n = Math.floor(Math.random() * (t + 1)),
      a = e[t];
    (e[t] = e[n]), (e[n] = a);
  }
}
$.ajax({
  url: "../static/" + language + "-translations.json",
  dataType: "json",
  async: !1,
  success: function (e) {
    translations = e;
  },
});
var targettedInputValue,
  targettedValue,
  arrayOfOptions = [
    { id: "facebook instagram", label: "Facebook / Instagram" },
    { id: "tv", label: "TV / Streaming (Hulu, NBC, etc.)" },
    { id: "audio podcasts", label: "Podcast / Radio" },
    { id: "search engine", label: "Search Engine (Google, Bing etc.)" },
    { id: "youtube ads", label: "YouTube" },
    { id: "billboard", label: "Billboard" },
    { id: "friend wom", label: "Friend / Colleague" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "tiktok", label: "TikTok" },
    { id: "other", label: "Other" },
  ];
$(window).on("load", function () {
  shuffleArray(arrayOfOptions),
    arrayOfOptions.forEach(function (e) {
      var t = document.createElement("button");
      (t.innerText = e.label),
        (t.className = "inner_option_container"),
        (t.id = e.id),
        $("#feedback_options").append(t);
    }),
    $("#feedback_options").on("click", ".inner_option_container", function (e) {
      $("#submit_form").attr("disabled", !1);
      targettedValue = e.target.id;
      $("#feedback_options > button:not(optionId)").css({
        "box-shadow": "",
        border: "",
        color: "",
      }),
        $(this).css({
          "box-shadow": "0px 10px 25px rgba(123, 104, 238, 0.1)",
          border: "1px solid #7b68ee",
          color: "#7b68ee",
        }),
        "other" == targettedValue
          ? $(".input_field_contianer").removeClass("hide_form_elements")
          : $(".input_field_contianer").addClass("hide_form_elements");
    }),
    $("#submit_form").on("click", function () {
      targettedInputValue = $("#input_field").val();
    }),
    $("#other").on("click", function () {
      $("#submit_form").attr("disabled", !1),
        $(".input_field_contianer").removeClass("hide_form_elements"),
        document.getElementById("input_field").focus();
    }),
    $("#submit_form").on("click", function () {
      $(".feedback_form_wrapper").addClass("hide_form_elements"),
        $("#thankyou_submit_feedback").removeClass("hide_form_elements"),
        segmentEventTrack(getTrackingData("HDYHAU"), {
          "how did you hear about us":
            "other" == targettedValue
              ? "other " +
                ("" != targettedInputValue ? targettedInputValue : "undefined")
              : targettedValue,
        }),
        setTimeout(function () {
          $("#form_container").removeClass("feedback_card_container"),
            $("#thankyou_submit_feedback").addClass("hide_form_elements"),
            $("#thankyou-video").removeClass("hide_form_elements");
        }, 3e3);
    });
}),
  $(window).on("load", function (e) {
    var t = document.querySelector("#template1_description"),
      n = document.querySelector("#template2_description"),
      a = document.querySelector("#template3_description"),
      i = document.querySelector("#template4_description"),
      o = document.querySelector("#template5_description");
    removeHashtags(t),
      removeHashtags(n),
      removeHashtags(a),
      removeHashtags(i),
      removeHashtags(o),
      openEnterpriseSalesForm();
  });
var FUNC_ERROR_TEXT = "Expected a function",
  NAN = NaN,
  symbolTag = "[object Symbol]",
  reTrim = /^\s+|\s+$/g,
  reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
  reIsBinary = /^0b[01]+$/i,
  reIsOctal = /^0o[0-7]+$/i,
  freeParseInt = parseInt,
  freeGlobal =
    "object" == typeof global && global && global.Object === Object && global,
  freeSelf = "object" == typeof self && self && self.Object === Object && self,
  root = freeGlobal || freeSelf || Function("return this")(),
  objectProto = Object.prototype,
  objectToString = objectProto.toString,
  nativeMax = Math.max,
  nativeMin = Math.min,
  now = function () {
    return root.Date.now();
  };
function lodashDebounce(a, i, e) {
  var o,
    r,
    s,
    l,
    c,
    d,
    u = 0,
    p = !1,
    m = !1,
    t = !0;
  if ("function" != typeof a) throw new TypeError(FUNC_ERROR_TEXT);
  function h(e) {
    var t = o,
      n = r;
    return (o = r = void 0), (u = e), (l = a.apply(n, t));
  }
  function f(e) {
    var t = e - d;
    return void 0 === d || i <= t || t < 0 || (m && s <= e - u);
  }
  function g() {
    var e,
      t,
      n = now();
    if (f(n)) return v(n);
    c = setTimeout(
      g,
      ((t = i - ((e = n) - d)), m ? nativeMin(t, s - (e - u)) : t)
    );
  }
  function v(e) {
    return (c = void 0), t && o ? h(e) : ((o = r = void 0), l);
  }
  function n() {
    var e,
      t = now(),
      n = f(t);
    if (((o = arguments), (r = this), (d = t), n)) {
      if (void 0 === c)
        return (u = e = d), (c = setTimeout(g, i)), p ? h(e) : l;
      if (m) return (c = setTimeout(g, i)), h(d);
    }
    return void 0 === c && (c = setTimeout(g, i)), l;
  }
  return (
    (i = toNumber(i) || 0),
    isObject(e) &&
      ((p = !!e.leading),
      (s = (m = "maxWait" in e) ? nativeMax(toNumber(e.maxWait) || 0, i) : s),
      (t = "trailing" in e ? !!e.trailing : t)),
    (n.cancel = function () {
      void 0 !== c && clearTimeout(c), (o = d = r = c = void (u = 0));
    }),
    (n.flush = function () {
      return void 0 === c ? l : v(now());
    }),
    n
  );
}
function isObject(e) {
  var t = typeof e;
  return !!e && ("object" == t || "function" == t);
}
function isObjectLike(e) {
  return !!e && "object" == typeof e;
}
function isSymbol(e) {
  return (
    "symbol" == typeof e ||
    (isObjectLike(e) && objectToString.call(e) == symbolTag)
  );
}
function toNumber(e) {
  if ("number" == typeof e) return e;
  if (isSymbol(e)) return NAN;
  if (isObject(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = isObject(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(reTrim, "");
  var n = reIsBinary.test(e);
  return n || reIsOctal.test(e)
    ? freeParseInt(e.slice(2), n ? 2 : 8)
    : reIsBadHex.test(e)
    ? NAN
    : +e;
}
function removeHashtags(e) {
  if (e) {
    var t = e.innerHTML.replace(/(^|\W)(#.*?(?= #|$))/gi, "");
    e.innerHTML = t;
  }
}
function openEnterpriseSalesForm() {
  (elfTest = /#elf$/),
    elfTest.test(window.location.href) &&
      ($("body").removeClass("is-canvas"),
      $("[data-modal-intent]").addClass("dnone"),
      $("[data-modal-intent-overlay]").addClass("modal-closed"),
      $(".is-canvas__before").css("display", "none"),
      $("#intercom-container").css("display", "block"),
      $("[data-modal-enterprise-overlay]").removeClass("modal-closed"),
      $("[data-modal-enterprise]").removeClass("modal-closed"),
      $("[data-modal-enterprise] input.modal__input_focus").focus(),
      window.mutiny &&
        window.mutiny.client.trackConversion({ name: "elf-load-open-modal" }));
}
function removeEnterpriseSalesFormAnchor() {
  var e = /#elf$/;
  if (e.test(window.location.href)) {
    var t = window.location.href.replace(e, "");
    window.history.replaceState(null, null, t);
  }
}
function getUTMData() {
  var e = getCookie("utmCookie");
  if (!e || !e.includes("utm_")) return [];
  var n = [];
  return (
    e
      .split("https://")
      .slice(1)
      .forEach(function (e) {
        if (e && e.split("?")[1]) {
          var t = e.split("?")[1].split("#")[0].split("&"),
            a = {};
          (t = t.filter(function (e) {
            return (
              e.includes("utm_") ||
              e.includes("gclid") ||
              e.includes("fbaid") ||
              e.includes("targetid")
            );
          })).forEach(function (e) {
            var t = e.split("=")[0].trim().toLowerCase(),
              n = e.split("=")[1].trim().toLowerCase();
            500 < n.length &&
              (t.startsWith("utm_")
                ? ("source" === (t = t.substring(4)) &&
                    45 < n.length &&
                    (n = n.slice(0, 45)),
                  (("medium" === t && 73 < n.length) ||
                    ("term" === t && 73 < n.length)) &&
                    (n = n.slice(0, 73)))
                : t.startsWith("gclid") && 100 < n.length
                ? (n = n.slice(0, 100))
                : n.slice(0, 500)),
              (a[t] = n);
          }),
            n.push(a);
        }
      }),
    setClickUpCookie("utmCookie", e, 0),
    n
  );
}
function getTrackingData(e) {
  var t = {
    HDYHAU: "submit how did you hear about us",
    "mail-catcher-step1": "workspace sign up left overlay",
    "mail-catcher-step2": "workspace sign up left overlay",
    "landing-page": "workspace sign up homepage featured cta",
    enterprise: "contact sales website modal",
    "enterprise-email": "contact sales pricing modal",
    "intent-input": "workspace sign up modal",
    "made-a-deal-form": "let's make a deal",
    nprofdiscount: "non-profit modal",
    jiraoffer: "WEB FORM - JIRA OFFER",
    cta: "workspace sign up footer",
    cta_v3: "workspace sign up footer",
    "jakub-download": "jakub-download",
    "hypervsn-download": "hypervsn-download",
    "hypervsn-download_v2": "hypervsn-download_v2",
    casestudy: "casestudy",
    gartner: "gartner",
    productmanagementguide: "productmanagementguide",
    vidahealthcasestudy: "vidahealthcasestudy",
    padrescasestudy: "padrescasestudy",
    wakeforestcasestudy: "wakeforestcasestudy",
    vidahealthcasestudy: "vidahealthcasestudy",
    lulucasestudy: "lulucasestudy",
    General: "General",
    "General Billing": "General Billing",
    "General Marketing": "General Marketing",
    "help-form": "help-form",
  };
  return Object.keys(t).includes(e) ? t[e] : "untracked form";
}
function segmentIdentifyAndTrack(n, a) {
  if (a.form) {
    var i = { email: a.email };
    void 0 !== a.firstName && (i.firstName = a.firstName),
      void 0 !== a.lastName && (i.lastName = a.lastName),
      void 0 !== a.fullName && (i.fullName = a.fullName),
      void 0 !== a.phone && (i.phone = a.phone);
    var e = new Promise(function (e) {
        gtag("get", "G-CMNNJGSJVV", "session_id", e);
      }),
      t = new Promise(function (e) {
        gtag("get", "G-CMNNJGSJVV", "session_number", e);
      }),
      o = new Promise(function (e) {
        gtag("get", "G-CMNNJGSJVV", "client_id", e);
      });
    Promise.all([e, t, o, i, a, n]).then(function (e) {
      var t = {
        sessionId: e[0] || "",
        sessionNum: e[1] || "",
        clientId: e[2] || "",
      };
      (i = e[3]),
        (a = e[4]),
        (n = e[5]),
        (i.sessionId = void 0 !== t.sessionId ? t.sessionId : ""),
        (i.sessionNum = void 0 !== t.sessionNum ? t.sessionNum : ""),
        (i.clientId = void 0 !== t.clientId ? t.clientId : ""),
        (a.sessionId = i.sessionId),
        (a.sessionNum = i.sessionNum),
        (a.clientId = i.clientId),
        analytics.identify(n, i),
        analytics.track("submit form", a);
    });
  }
}
function segmentIdentify(n, a) {
  var e = new Promise(function (e) {
      gtag("get", "G-CMNNJGSJVV", "session_id", e);
    }),
    t = new Promise(function (e) {
      gtag("get", "G-CMNNJGSJVV", "session_number", e);
    }),
    i = new Promise(function (e) {
      gtag("get", "G-CMNNJGSJVV", "client_id", e);
    });
  Promise.all([e, t, i, a, n]).then(function (e) {
    var t = {
      sessionId: e[0] || "",
      sessionNum: e[1] || "",
      clientId: e[2] || "",
    };
    (a = e[3]),
      (n = e[4]),
      (a.sessionId = void 0 !== t.sessionId ? t.sessionId : ""),
      (a.sessionNum = void 0 !== t.sessionNum ? t.sessionNum : ""),
      (a.clientId = void 0 !== t.clientId ? t.clientId : ""),
      analytics.identify(n, a);
  });
}
function segmentEventTrack(n, a) {
  var e = new Promise(function (e) {
      gtag("get", "G-CMNNJGSJVV", "session_id", e);
    }),
    t = new Promise(function (e) {
      gtag("get", "G-CMNNJGSJVV", "session_number", e);
    }),
    i = new Promise(function (e) {
      gtag("get", "G-CMNNJGSJVV", "client_id", e);
    });
  Promise.all([e, t, i, a]).then(function (e) {
    var t = {
      sessionId: e[0] || "",
      sessionNum: e[1] || "",
      clientId: e[2] || "",
    };
    ((a = e[3]).sessionId = void 0 !== t.sessionId ? t.sessionId : ""),
      (a.sessionNum = void 0 !== t.sessionNum ? t.sessionNum : ""),
      (a.clientId = void 0 !== t.clientId ? t.clientId : ""),
      analytics.track(n, a);
  });
}
function isLocalStorageAvailable() {
  var e = "test";
  try {
    return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
  } catch (e) {
    return !1;
  }
}
function getCachedUserId() {
  if (window.dataLayer && window.dataLayer.length) {
    var e = window.dataLayer.filter(function (e) {
      return (
        "object" == typeof e &&
        !Array.isArray(e) &&
        e.hasOwnProperty("userId") &&
        "" !== e.userId
      );
    });
    if (Boolean(e.length)) return parseInt(e[0].userId);
  }
  if (!isLocalStorageAvailable()) return !1;
  var t = localStorage.getItem("ajs_user_id");
  if (t && null !== (n = JSON.parse(t))) return n;
  var n,
    a = localStorage.getItem("cuUserId");
  return !!a && (n = JSON.parse(a)).userId;
}
var cachedUserId = getCachedUserId() || !1;
function doesPricingCarouselNeedSlick() {
  $(".pricing__body").each(function () {
    var e = $(this);
    1e3 < $(window).width()
      ? e.hasClass("slick-initialized") && e.slick("unslick")
      : e.hasClass("slick-initialized") ||
        e.slick({
          slidesToScroll: 1,
          slide: ".pricing-plan",
          responsive: [
            { breakpoint: 5e3, settings: "unslick" },
            {
              breakpoint: 1e3,
              settings: {
                slidesToShow: 3,
                arrows: !0,
                dots: !0,
                swipe: !0,
                focusOnSelect: !0,
                infinite: !1,
                centerMode: !0,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: !0,
                dots: !0,
                swipe: !0,
                focusOnSelect: !0,
                infinite: !1,
                centerMode: !0,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: !0,
                dots: !0,
                swipe: !0,
                focusOnSelect: !0,
                infinite: !1,
                centerMode: !0,
              },
            },
          ],
        });
  });
}
function trackDepartment() {
  var e = [
    ["/teams/design", "Creative & Design"],
    ["/teams/customer-service", "Support"],
    ["/teams/agile", "Engineering & Product"],
    ["/teams/product", "Engineering & Product"],
    ["/teams/website-management", "Engineering & Product"],
    ["/teams/startup", "Engineering & Product"],
    ["/teams/accounting", "Finance & Accounting"],
    ["/teams/finance", "Finance & Accounting"],
    ["/teams/human-resources", "HR & Recruiting"],
    ["/teams/remote-work", "t-102451744"],
    ["/teams/marketing", "Marketing"],
    ["/teams/media", "Marketing"],
    ["/teams/real-estate", "Operations"],
    ["/teams/business-management", "Operations"],
    ["/teams/resource-management", "Operations"],
    ["/teams/construction", "Operations"],
    ["/teams/project-management", "PMO - Project Management"],
    ["/teams/sales", "Sales & CRM"],
    ["/teams/crm", "Sales & CRM"],
    ["/teams/getting-started", "Personal Use"],
    ["/teams/personal", "Personal Use"],
    ["/teams/education", "Other"],
    ["/teams/events", "Other"],
    ["/teams/health", "Other"],
    ["/teams/law", "Other"],
    ["/teams/non-profit", "Other"],
    ["/teams/student", "Other"],
  ].find(function (e) {
    return window.location.href.includes(e[0]);
  });
  if (isLocalStorageAvailable() && e) {
    var t = { department: e[1] };
    localStorage.setItem("department", JSON.stringify(t));
  }
  isLocalStorageAvailable() &&
    localStorage.getItem("department") &&
    !e &&
    localStorage.removeItem("department");
}
function redirect(e, t) {
  var n = "";
  t = t || stored_promo;
  var a = localStorage.getItem("department");
  if (a) {
    var i = JSON.parse(a),
      o = encodeURIComponent(i.department);
    n = ("t-102451744" === o ? "?template=" : "?department=") + o;
  }
  "/deals/martech.html" === window.location.pathname ||
  "/deals/martech" === window.location.pathname
    ? (n = "?promo=martech")
    : t && (n = "?promo=" + t),
    ("/deals/promo-15.html" !== window.location.pathname &&
      "/deals/promo-15" !== window.location.pathname) ||
      (n = "?promo=15OFF"),
    ("/deals/promo-15-limited.html" !== window.location.pathname &&
      "/deals/promo-15-limited" !== window.location.pathname) ||
      (n = "?promo=15OFF"),
    ("/deals/promo-15-limited-1.html" !== window.location.pathname &&
      "/deals/promo-15-limited-1" !== window.location.pathname) ||
      (n = "?promo=15OFF"),
    ("/deals/promo-15-limited-2.html" !== window.location.pathname &&
      "/deals/promo-15-limited-2" !== window.location.pathname) ||
      (n = "?promo=15OFF"),
    ("/deals/promo-15-limited-fb.html" !== window.location.pathname &&
      "/deals/promo-15-limited-fb" !== window.location.pathname) ||
      (n = "?promo=15OFF"),
    ("/deals/valentine-unlimited-fb.html" !== window.location.pathname &&
      "/deals/valentine-unlimited-fb" !== window.location.pathname) ||
      (n = "?promo=LOVE15"),
    ("/deals/valentine-unlimited-yt.html" !== window.location.pathname &&
      "/deals/valentine-unlimited-yt" !== window.location.pathname) ||
      (n = "?promo=LOVE15"),
    ("/deals/valentine-unlimited-gd.html" !== window.location.pathname &&
      "/deals/valentine-unlimited-gd" !== window.location.pathname) ||
      (n = "?promo=LOVE15"),
    ("/deals/promo-15-business.html" !== window.location.pathname &&
      "/deals/promo-15-business" !== window.location.pathname) ||
      (n = "?promo=BUSINESSPLAN15OFF"),
    ("/deals/promo-20-limited.html" !== window.location.pathname &&
      "/deals/promo-20-limited" !== window.location.pathname) ||
      (n = "?promo=20OFF"),
    ("/deals/promo-25-limited.html" !== window.location.pathname &&
      "/deals/promo-25-limited" !== window.location.pathname) ||
      (n = "?promo=25OFF"),
    ("/deals/xf4MUSNgAn.html" !== window.location.pathname &&
      "/deals/xf4MUSNgAn" !== window.location.pathname) ||
      (n = "?promo=15OFF"),
    ("/deals/xf4MUSNgAn.html" !== window.location.pathname &&
      "/deals/xf4MUSNgAn" !== window.location.pathname) ||
      (n = "?promo=SPRING30"),
    ("/lp/project-management-remote20.html" !== window.location.pathname &&
      "/lp/project-management-remote20" !== window.location.pathname) ||
      (n =
        "?promo=REMOTE20&utm_source=remoteworksummit&utm_medium=website&utm_campaign=eventsponsor"),
    ("/lp/project-management-remote30.html" !== window.location.pathname &&
      "/lp/project-management-remote30" !== window.location.pathname) ||
      (n =
        "?promo=REMOTE30&utm_source=remoteworksummit&utm_medium=website&utm_campaign=eventsponsor"),
    ("/lp/project-management-special30.html" !== window.location.pathname &&
      "/lp/project-management-special30" !== window.location.pathname) ||
      (n =
        "?promo=SPECIAL30&utm_source=referral&utm_medium=email&utm_campaign=ox-backlink"),
    ("/lp/project-management-special20.html" !== window.location.pathname &&
      "/lp/project-management-special20" !== window.location.pathname) ||
      (n =
        "?promo=SPECIAL20&utm_source=referral&utm_medium=email&utm_campaign=ox-backlink"),
    ("/sed.html" !== window.location.pathname &&
      "/sed" !== window.location.pathname) ||
      (n = "?promo=SED"),
    ("/g2.html" !== window.location.pathname &&
      "/g2" !== window.location.pathname) ||
      (n = "?promo=g2"),
    ("/morningbrew.html" !== window.location.pathname &&
      "/morningbrew" !== window.location.pathname) ||
      (n = "?promo=brew"),
    ("/morningbrew.html" !== window.location.pathname &&
      "/morningbrew" !== window.location.pathname) ||
      (n = "?promo=brew"),
    e &&
      (setClickUpCookie("clickup-email", e, 1),
      (n += planType ? (n ? "&" : "?") + "plan=" + planType : "")),
    ("/customers/stx-next-jakub.html" !== window.location.pathname &&
      "/customers/stx-next-jakub" !== window.location.pathname) ||
      (window.location.href =
        "https://app.clickup.com/template/category/t-42518885/d59008d20a3f904"),
    ("/customers/hypervsn.html" !== window.location.pathname &&
      "/customers/hypervsn" !== window.location.pathname) ||
      (window.location.href =
        "https://app.clickup.com/?utm_campaign=hypervsn_customer_story&utm_medium=button&utm_source=website&utm_content=goals_cta&utm_term=");
}
function setClickUpCookie(e, t, n) {
  try {
    var a = new Date();
    a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
    var i = "expires=" + a.toUTCString();
    if (!window.location.host.includes("clickup.com"))
      return void (document.cookie = e + "=" + t + ";" + i + ";path=/");
    document.cookie = e + "=" + t + ";domain=.clickup.com;" + i + ";path=/";
  } catch (e) {
    console.error("setCookie error:", e);
  }
}
function isEmailValid(e) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    e
  );
}
function isPhoneValid(e) {
  return /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/.test(
    e
  );
}
function isNameValid(e) {
  return /^[a-zA-Z\u00C0-\u00FF\s]+$/.test(e);
}
function isNumberValid(e) {
  return /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(e);
}
function localizePrices() {
  0 !== currency_rate &&
    ($("[data-modal-input-makeadeal-pay]").val(
      parseFloat(
        $("[data-modal-input-makeadeal-pay]").attr("value") * currency_rate
      )
        .toFixed(2)
        .replace(/[0]+$/, "")
        .replace(/[.]+$/, "")
    ),
    $("[data-modal-icon-makeadeal-pay]").text(country_currency.symbol)),
    $.each($(".pricing-plan_best [data-tab-pricing-nav]"), function () {
      if ($(this).hasClass("active")) var n = $(this).attr("data-price-plan");
      else
        n = $(this).siblings("[data-tab-pricing-nav]").attr("data-price-plan");
      $.each($(".pricing-plan_best [data-price]"), function () {
        var t;
        0 === currency_rate
          ? ((t = $(this).attr("data-price-" + n) / 100),
            $(this).html("<sup>$</sup>" + t))
          : ($(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + n) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            ),
            $(this).on("mouseenter", function () {
              (t = $(this).attr("data-price-" + n) / 100), console.log(t);
              var e = $("<sup>USD $" + t + "</sup>").text();
              $(this).attr("data-tooltip", e),
                "USD" === country_currency.code &&
                  $(this).removeAttr("data-tooltip");
            }),
            $(this).on("mouseleave", function () {
              $(this).removeAttr("data-tooltip"),
                $(this).html(
                  "<sup>" +
                    country_currency.symbol +
                    "</sup>" +
                    parseFloat(
                      ($(this).attr("data-price-" + n) * currency_rate) / 100
                    )
                      .toFixed(2)
                      .replace(/[0]+$/, "")
                      .replace(/[.]+$/, "")
                );
            })),
          $(this).css("visibility", "visible");
      });
    }),
    $.each($(".pricing-plan_business [data-tab-pricing-nav]"), function () {
      if ($(this).hasClass("active")) var n = $(this).attr("data-price-plan");
      else
        n = $(this).siblings("[data-tab-pricing-nav]").attr("data-price-plan");
      $.each($(".pricing-plan_business [data-price]"), function () {
        var t;
        0 === currency_rate
          ? ((t = $(this).attr("data-price-" + n) / 100),
            $(this).html("<sup>$</sup>" + t))
          : ($(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + n) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            ),
            $(this).on("mouseenter", function () {
              (t = $(this).attr("data-price-" + n) / 100), console.log(t);
              var e = $("<sup>USD $" + t + "</sup>").text();
              $(this).attr("data-tooltip", e),
                "USD" === country_currency.code &&
                  $(this).removeAttr("data-tooltip");
            }),
            $(this).on("mouseleave", function () {
              $(this).removeAttr("data-tooltip"),
                $(this).html(
                  "<sup>" +
                    country_currency.symbol +
                    "</sup>" +
                    parseFloat(
                      ($(this).attr("data-price-" + n) * currency_rate) / 100
                    )
                      .toFixed(2)
                      .replace(/[0]+$/, "")
                      .replace(/[.]+$/, "")
                );
            })),
          $(this).css("visibility", "visible");
      });
    }),
    $.each(
      $(".pricing-plan_business-plus [data-tab-pricing-nav]"),
      function () {
        if ($(this).hasClass("active")) var n = $(this).attr("data-price-plan");
        else
          n = $(this)
            .siblings("[data-tab-pricing-nav]")
            .attr("data-price-plan");
        $.each($(".pricing-plan_business-plus [data-price]"), function () {
          var t;
          0 === currency_rate
            ? ((t = $(this).attr("data-price-" + n) / 100),
              $(this).html("<sup>$</sup>" + t))
            : ($(this).html(
                "<sup>" +
                  country_currency.symbol +
                  "</sup>" +
                  parseFloat(
                    ($(this).attr("data-price-" + n) * currency_rate) / 100
                  )
                    .toFixed(2)
                    .replace(/[0]+$/, "")
                    .replace(/[.]+$/, "")
              ),
              $(this).on("mouseenter", function () {
                (t = $(this).attr("data-price-" + n) / 100), console.log(t);
                var e = $("<sup>USD $" + t + "</sup>").text();
                $(this).attr("data-tooltip", e),
                  "USD" === country_currency.code &&
                    $(this).removeAttr("data-tooltip");
              }),
              $(this).on("mouseleave", function () {
                $(this).removeAttr("data-tooltip"),
                  $(this).html(
                    "<sup>" +
                      country_currency.symbol +
                      "</sup>" +
                      parseFloat(
                        ($(this).attr("data-price-" + n) * currency_rate) / 100
                      )
                        .toFixed(2)
                        .replace(/[0]+$/, "")
                        .replace(/[.]+$/, "")
                  );
              })),
            $(this).css("visibility", "visible");
        });
      }
    ),
    $.each($(".pricing-plan_enterprise [data-tab-pricing-nav]"), function () {
      if ($(this).hasClass("active")) var n = $(this).attr("data-price-plan");
      else
        n = $(this).siblings("[data-tab-pricing-nav]").attr("data-price-plan");
      $.each($(".pricing-plan_enterprise [data-price]"), function () {
        var t;
        0 === currency_rate
          ? ((t = $(this).attr("data-price-" + n) / 100),
            $(this).html("<sup>$</sup>" + t))
          : ($(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + n) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            ),
            $(this).on("mouseenter", function () {
              (t = $(this).attr("data-price-" + n) / 100), console.log(t);
              var e = $("<sup>USD $" + t + "</sup>").text();
              $(this).attr("data-tooltip", e),
                "USD" === country_currency.code &&
                  $(this).removeAttr("data-tooltip");
            }),
            $(this).on("mouseleave", function () {
              $(this).removeAttr("data-tooltip"),
                $(this).html(
                  "<sup>" +
                    country_currency.symbol +
                    "</sup>" +
                    parseFloat(
                      ($(this).attr("data-price-" + n) * currency_rate) / 100
                    )
                      .toFixed(2)
                      .replace(/[0]+$/, "")
                      .replace(/[.]+$/, "")
                );
            })),
          $(this).css("visibility", "visible");
      });
    });
}
$(function () {
  function n() {
    country_currency.code &&
      $.ajax({
        url: "https://api.exchangeratesapi.io/latest?base=USD",
        success: function (e) {
          e.rates &&
            e.rates.hasOwnProperty(country_currency.code) &&
            (currency_rate = e.rates[country_currency.code]),
            localizePrices();
        },
        error: function (e) {
          localizePrices();
        },
      });
  }
  setTimeout(localizePrices, 2e3);
  var e,
    t,
    a = localStorage.getItem("cuUserLocation");
  if (
    ((!a ||
      ((e = a),
      (t = JSON.parse(e).expiry),
      new Date().getTime() > t &&
        (console.log("expired"),
        localStorage.removeItem("cuUserLocation"),
        1))) &&
      $.ajax({
        url: API_HOST + "/ip",
        headers: { "Access-Control-Allow-Origin": "*" },
        success: function (e) {
          var t = { value: (a = e), expiry: new Date().getTime() + 864e5 };
          localStorage.setItem("cuUserLocation", JSON.stringify(t)),
            dataLayer.push({
              cuUserLocation: {
                country_code: e.country_code,
                country_name: e.country_name,
              },
            }),
            (country_name = e.country_name),
            (country_code = e.country_code),
            (country_currency = e.currency),
            (region_code = e.region_code),
            (city = e.city),
            n(),
            "US" === country_code &&
              "CA" === region_code &&
              "San Jose" === city &&
              (addCookieTopBanner(), checkForUtmMediumUrl()),
            -1 !== COUNTRY_CODES.indexOf(country_code) && addCookieBanner(),
            localizePrices();
        },
        error: function (e) {
          console.log("Error fetching users current location.", e);
        },
      }),
    a)
  ) {
    var i = JSON.parse(a).value;
    (country_name = i.country_name),
      (country_code = i.country_code),
      (country_currency = i.currency),
      (region_code = i.region_code),
      dataLayer.push({
        cuUserLocation: {
          country_code: country_code,
          country_name: country_name,
        },
      }),
      (city = i.city),
      n(),
      "US" === country_code &&
        "CA" === region_code &&
        "San Jose" === city &&
        (addCookieTopBanner(), checkForUtmMediumUrl()),
      -1 !== COUNTRY_CODES.indexOf(country_code) && addCookieBanner(),
      localizePrices();
  }
  cachedUserId &&
    window.mutiny &&
    window.mutiny.client &&
    window.mutiny.client.identify(parseInt(cachedUserId), {}),
    $(".accordion").on("click", function (e) {
      e.preventDefault(), $(this).toggleClass("active");
    }),
    $(".side-nav__link").on("click", function (e) {
      e.preventDefault(), $(this).toggleClass("active");
    }),
    $(".side-nav__link_child").on("click", function (e) {
      e.stopPropagation();
    });
  var o = window.location.href;
  ~o.indexOf("#refferal")
    ? ($(window).scrollTop(0),
      $(".tabs_partners .tabs__item").removeClass("tabs__item_active"),
      $(".tabs_partners .tabs__item:first-child").addClass("tabs__item_active"),
      $(".tabs_partners .tabs__content .tabs__panel").removeClass(
        "tabs__panel_active"
      ),
      $(".tabs_partners .tabs__content .tabs__panel:first-child").addClass(
        "tabs__panel_active"
      ))
    : ~o.indexOf("#affiliate") &&
      ($(window).scrollTop(0),
      $(".tabs_partners .tabs__item").removeClass("tabs__item_active"),
      $(".tabs_partners .tabs__item:nth-child(2)").addClass(
        "tabs__item_active"
      ),
      $(".tabs_partners .tabs__content .tabs__panel").removeClass(
        "tabs__panel_active"
      ),
      $(".tabs_partners .tabs__content .tabs__panel:nth-child(2)").addClass(
        "tabs__panel_active"
      ));
  var r = (o = window.location.pathname)
      .substring(o.lastIndexOf("/") + 1)
      .split(".html")[0],
    l = o.split(".html")[0];
  "on-demand-demo" == r
    ? $(".dropdown-menu__link_demo").addClass("dropdown-menu__link_active")
    : "help" == r &&
      $(".dropdown-menu__link_help").addClass("dropdown-menu__link_active"),
    "soundstripe" == r
      ? $(".dropdown-menu__link_case").addClass("dropdown-menu__link_active")
      : "productivity" == r &&
        $(".dropdown-menu__link_productivity").addClass(
          "dropdown-menu__link_active"
        ),
    "clickup-meetings" == r
      ? $(".dropdown-menu__link_meetings").addClass(
          "dropdown-menu__link_active"
        )
      : "/teams/marketing" == l &&
        $(".dropdown-menu__link_marketing").addClass(
          "dropdown-menu__link_active"
        ),
    "onboarding" == r
      ? $(".dropdown-menu__link_onboarding").addClass(
          "dropdown-menu__link_active"
        )
      : "/teams/agile" == l &&
        $(".dropdown-menu__link_agile").addClass("dropdown-menu__link_active"),
    "/teams/education" == l
      ? $(".dropdown-menu__link_education").addClass(
          "dropdown-menu__link_active"
        )
      : "/teams/non-profit" == l &&
        $(".dropdown-menu__link_non-profit").addClass(
          "dropdown-menu__link_active"
        ),
    "/teams/personal" == l
      ? $(".dropdown-menu__link_personal").addClass(
          "dropdown-menu__link_active"
        )
      : "hierarchy-guide" == r &&
        $(".dropdown-menu__link_hierarchy").addClass(
          "dropdown-menu__link_active"
        ),
    $("#header .nav__item").on("mouseover", function (e) {
      var t = $(this).parent();
      $(".dropdown").not(t).find(".dropdown-menu").removeClass("open"),
        $(this).find(".dropdown-menu").toggleClass("open"),
        $($(e.target).find(".down-caret").toggleClass("open-caret")),
        e.preventDefault(),
        e.stopPropagation(),
        $(this).addClass("active").siblings().removeClass("active"),
        $(this)
          .find($(".dropdown-menu__link"))
          .hasClass("dropdown-menu__link_active") ||
          $(".dropdown-menu__link").css("opacity", "1");
    }),
    $(document).on("click", function (e) {
      !1 ===
        $(e.target).is(
          ".dropdown-menu , div.nav__item , .dropdown , .dropdown .drop"
        ) &&
        ($(".dropdown-menu").removeClass("open"),
        $(".down-caret").removeClass("open-caret"),
        $("#header .nav__item").removeClass("active"));
    }),
    $(".dropdown-menu").on("click", function (e) {
      e.stopPropagation();
    }),
    $("#header .dropdown .down-caret").on("mouseover", function (e) {
      $(this).closest(".dropdown-menu").addClass("open"),
        $(this).addClass("open-caret"),
        e.preventDefault(),
        e.stopPropagation();
    }),
    $("#header .dropdown-menu").on("mouseleave", function (e) {
      $(this).removeClass("open"),
        $(".down-caret").removeClass("open-caret"),
        e.stopPropagation(),
        $("#header .nav__item").removeClass("active");
    }),
    $("#header .dropdown")
      .parent(".nav")
      .on("mouseleave", function (e) {
        $("#header .dropdown-menu").removeClass("open"),
          $(".down-caret").removeClass("open-caret"),
          e.stopPropagation(),
          $("#header .nav__item").removeClass("active");
      }),
    $("#header .nav").on("mouseleave", function (e) {
      $("#header .dropdown-menu").removeClass("open"),
        $(".down-caret").removeClass("open-caret"),
        e.stopPropagation(),
        $("#header .nav__item").removeClass("active");
    }),
    $(".nav-canvas .dropdown .drop").on("click", function (e) {
      $("#off-canvas").toggleClass("active");
      var t = $(this).parent();
      $(".dropdown").not(t).find(".dropdown-menu").removeClass("open"),
        $(".dropdown")
          .not(t)
          .find(".drop .dropdown-icon.open")
          .removeClass("open"),
        $(this).parent(".dropdown").find(".dropdown-menu").toggleClass("open"),
        $($(e.target).find(".down-caret").toggleClass("open-caret")),
        $($(e.target).find(".dropdown-icon").toggleClass("open")),
        e.preventDefault(),
        e.stopPropagation(),
        $(document).on("click", function () {
          $(".dropdown-menu").removeClass("open"),
            $(".down-caret").removeClass("open-caret"),
            $(".dropdown-icon").removeClass("open"),
            $("#header .nav__item").removeClass("active");
        });
    }),
    $(".nav-canvas__item_trial").on("click", function (e) {
      $("body").removeClass("is-canvas"),
        $(".is-canvas__before").css("display", "none"),
        $("#intercom-container").css("display", "block");
    }),
    $(".comparison__dropdown").perfectScrollbar(),
    $("[data-dropdown-menu-more]").on("click", function (e) {
      e.preventDefault(),
        $(this).parent().hide(),
        $(this)
          .parents(".dropdown-menu")
          .find("[data-dropdown-menu-panel]")
          .show();
    }),
    $(".toc-btn").on("click", function (e) {
      $("#toc-nav").hasClass("closed")
        ? ($("#toc-nav .toc-menu").removeClass("fade-out"),
          $("#toc-nav").removeClass("closed"),
          $("#toc-nav").addClass("not-closed"),
          $("body").addClass("no-scroll"),
          $(document).on("click", function (e) {
            var t = $("#toc-nav");
            t === e.target ||
              t.has(e.target).length ||
              ($("#toc-nav").hasClass("closed") ||
                $(".toc-close-btn").trigger("click"),
              e.preventDefault());
          }))
        : 600 < $(window).width()
        ? ($("#toc-nav .toc-menu").addClass("fade-out"),
          setTimeout(function () {
            $("#toc-nav").removeClass("not-closed"),
              $("#toc-nav").addClass("closed");
          }, 100))
        : ($("body").removeClass("no-scroll"),
          $("#toc-nav").removeClass("not-closed"),
          $("#toc-nav").addClass("closed")),
        e.preventDefault();
    }),
    $(".toc-close-btn").on("click", function (e) {
      $("#toc-nav").hasClass("closed")
        ? ($("#toc-nav .toc-menu").removeClass("fade-out"),
          $("#toc-nav").removeClass("closed"),
          $("#toc-nav").addClass("not-closed"))
        : ($("#toc-nav .toc-menu").addClass("fade-out"),
          setTimeout(function () {
            $("#toc-nav").removeClass("not-closed"),
              $("#toc-nav").addClass("closed");
          }, 100)),
        $(document).unbind("click"),
        e.preventDefault();
    }),
    (s = $(".security-page__content")),
    (b = $(".block-privacy")),
    0 < s.length || 0 < b.length
      ? ($("body").addClass("has-toc"), $("#toc-nav").show())
      : $("#toc-nav").addClass("force-hide"),
    $("#header").sticky({ topSpacing: 0, zIndex: 9e3 }),
    $(window).on("resize orientationchange", function () {
      $(".cards").each(function () {
        var e = $(this);
        600 < $(window).width()
          ? e.hasClass("slick-initialized") && e.slick("unslick")
          : e.hasClass("slick-initialized") ||
            e.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: !0,
              infinite: !0,
              dots: !1,
              adaptiveHeight: !0,
            });
      }),
        $(".section_help-contacts_v2 .demo-list__body").each(function () {
          var e = $(this);
          600 < $(window).width()
            ? e.hasClass("slick-initialized") && e.slick("unslick")
            : e.hasClass("slick-initialized") ||
              e.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                arrows: !1,
                dots: !0,
              });
        });
    }),
    $(".cards").each(function () {
      var e = $(this);
      600 < $(window).width()
        ? e.hasClass("slick-initialized") && e.slick("unslick")
        : e.hasClass("slick-initialized") ||
          e.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            infinite: !0,
            dots: !1,
            adaptiveHeight: !0,
          });
    }),
    $(".section_help-contacts_v2 .demo-list__body").each(function () {
      var e = $(this);
      600 < $(window).width()
        ? e.hasClass("slick-initialized") && e.slick("unslick")
        : e.hasClass("slick-initialized") ||
          e.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            arrows: !1,
            dots: !0,
          });
    }),
    $(".tabs_task-view .tabs__content").slick({
      infinite: !0,
      arrows: !0,
      dots: !0,
      centerMode: !0,
      fade: !0,
      centerPadding: "0",
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: !0,
      adaptiveHeight: !0,
    }),
    $(".tabs_page-view .tabs__content").slick({
      infinite: !0,
      arrows: !0,
      dots: !0,
      centerMode: !0,
      fade: !0,
      centerPadding: "0",
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: !0,
      adaptiveHeight: !0,
    }),
    $(window).on("resize orientationchange", function () {
      $(".tabs_task-view .tabs__content").slick({
        infinite: !0,
        arrows: !0,
        dots: !0,
        centerMode: !0,
        fade: !0,
        centerPadding: "0",
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: !0,
        adaptiveHeight: !0,
      }),
        $(".tabs_page-view .tabs__content").slick({
          infinite: !0,
          arrows: !0,
          dots: !0,
          centerMode: !0,
          fade: !0,
          centerPadding: "0",
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: !0,
          adaptiveHeight: !0,
        });
    });
  var c = $(".tabs_task-view .tabs__nav .tabs__item"),
    d = $(".tabs_task-view .tabs__content");
  c.click(function () {
    var e = $(this).data("slide");
    d.slick("slickGoTo", e - 1);
  }),
    d.on("afterChange", function (e, t, n) {
      c.removeClass("tabs__item_active"), c.eq(n).addClass("tabs__item_active");
    });
  var u = $(".tabs_page-view .tabs__nav .tabs__item"),
    p = $(".tabs_page-view .tabs__content");
  u.click(function () {
    var e = $(this).data("slide");
    p.slick("slickGoTo", e - 1);
  }),
    p.on("afterChange", function (e, t, n) {
      u.removeClass("tabs__item_active"), u.eq(n).addClass("tabs__item_active");
    }),
    $(".tabs_all-in-one-place_docs .tabs__content").slick({
      infinite: !0,
      arrows: !0,
      dots: !0,
      centerMode: !0,
      fade: !0,
      centerPadding: "0",
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: !0,
      responsive: [{ breakpoint: 600, settings: { adaptiveHeight: !0 } }],
    }),
    $(".tabs_all-in-one-place_home .tabs__content").slick({
      infinite: !0,
      arrows: !0,
      dots: !0,
      centerMode: !0,
      fade: !0,
      centerPadding: "0",
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: !0,
      prevArrow: $(".tabs__nav_slider-btn .prev-slide"),
      nextArrow: $(".tabs__nav_slider-btn .next-slide"),
      responsive: [{ breakpoint: 600, settings: { adaptiveHeight: !0 } }],
    }),
    $(".tabs_views_v2 .tabs__content").slick({
      infinite: !0,
      arrows: !0,
      dots: !0,
      centerMode: !0,
      fade: !0,
      centerPadding: "0",
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: !0,
      responsive: [{ breakpoint: 600, settings: { adaptiveHeight: !0 } }],
    }),
    $(".tabs_customize .tabs__content_customize").slick({
      infinite: !0,
      arrows: !0,
      dots: !1,
      centerMode: !0,
      fade: !0,
      centerPadding: "0",
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: !0,
      responsive: [{ breakpoint: 1e3, settings: { adaptiveHeight: !0 } }],
    }),
    $(window).on("resize orientationchange", function () {
      $(".tabs_all-in-one-place_docs .tabs__content").slick({
        infinite: !0,
        arrows: !0,
        dots: !0,
        centerMode: !0,
        fade: !0,
        centerPadding: "0",
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: !0,
        responsive: [{ breakpoint: 600, settings: { adaptiveHeight: !0 } }],
      }),
        $(".tabs_all-in-one-place_home .tabs__content").slick({
          infinite: !0,
          arrows: !0,
          dots: !0,
          centerMode: !0,
          fade: !0,
          centerPadding: "0",
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: !0,
          prevArrow: $(".tabs__nav_slider-btn .prev-slide"),
          nextArrow: $(".tabs__nav_slider-btn .next-slide"),
          responsive: [{ breakpoint: 600, settings: { adaptiveHeight: !0 } }],
        }),
        $(".tabs_views_v2 .tabs__content").slick({
          infinite: !0,
          arrows: !0,
          dots: !0,
          centerMode: !0,
          fade: !0,
          centerPadding: "0",
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: !0,
          responsive: [{ breakpoint: 600, settings: { adaptiveHeight: !0 } }],
        }),
        $(".tabs_customize .tabs__content_customize").slick({
          infinite: !0,
          arrows: !0,
          dots: !1,
          centerMode: !0,
          fade: !0,
          centerPadding: "0",
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: !0,
          responsive: [{ breakpoint: 1e3, settings: { adaptiveHeight: !0 } }],
        });
    });
  var m = $(".tabs_all-in-one-place .tabs__nav .tabs__item"),
    h = $(".tabs_all-in-one-place .tabs__content");
  m.click(function () {
    var e = $(this).data("slide");
    h.slick("slickGoTo", e - 1);
  }),
    h.on("afterChange", function (e, t, n) {
      m.removeClass("tabs__item_active"), m.eq(n).addClass("tabs__item_active");
    });
  var f = $(".tabs_views_v2 .tabs__nav .tabs__item"),
    g = $(".tabs_views_v2 .tabs__content");
  f.click(function () {
    var e = $(this).data("slide");
    g.slick("slickGoTo", e - 1);
  }),
    g.on("afterChange", function (e, t, n) {
      f.removeClass("tabs__item_active"), f.eq(n).addClass("tabs__item_active");
    });
  var v = $(".tabs_customize .tabs__nav_customize .tabs__item-customize"),
    y = $(".tabs_customize .tabs__content_customize");
  v.click(function () {
    var e = $(this).data("slide");
    y.slick("slickGoTo", e - 1);
  }),
    y.on("beforeChange", function (e, t, n, a) {
      $(".section_customize")
        .removeClass("purple pink blue green")
        .addClass(v.eq(a).data("color"));
    }),
    y.on("afterChange", function (e, t, n) {
      v.removeClass("tabs__item_active"), v.eq(n).addClass("tabs__item_active");
    }),
    $(".pm-problems__carousel").slick({
      arrows: !0,
      dots: !1,
      slidesToShow: 3,
      variableWidth: !0,
      centerPadding: "0",
      focusOnSelect: !0,
      centerMode: !0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            variableWidth: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: !0,
          },
        },
      ],
    }),
    $(window).on("resize orientationchange", function () {
      $(".pm-problems__carousel").slick({
        arrows: !0,
        dots: !1,
        slidesToShow: 3,
        variableWidth: !0,
        centerPadding: "0",
        focusOnSelect: !0,
        centerMode: !0,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              variableWidth: !1,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: !0,
            },
          },
        ],
      });
    }),
    $("#over-x-integrations-1 .over-x-integrations__logo-grid").slick({
      arrows: !0,
      dots: !1,
      slidesToScroll: 1,
      slidesToShow: 6,
      centerPadding: "15px",
      speed: 3e3,
      infinite: !0,
      autoplaySpeed: 0,
      cssEase: "linear",
      draggable: !1,
      pauseOnFocus: !0,
      pauseOnHover: !0,
      swipeToSlide: !0,
      responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4 } }],
    }),
    $("#over-x-integrations-3 .over-x-integrations__logo-grid").slick({
      arrows: !0,
      dots: !1,
      slidesToScroll: 1,
      slidesToShow: 6,
      centerPadding: "15px",
      speed: 3e3,
      infinite: !0,
      autoplaySpeed: 0,
      cssEase: "linear",
      draggable: !1,
      pauseOnFocus: !0,
      pauseOnHover: !0,
      swipeToSlide: !0,
      responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4 } }],
    }),
    $("#over-x-integrations-5 .over-x-integrations__logo-grid").slick({
      arrows: !0,
      dots: !1,
      slidesToScroll: 1,
      slidesToShow: 6,
      centerPadding: "15px",
      speed: 3e3,
      infinite: !0,
      autoplaySpeed: 0,
      cssEase: "linear",
      draggable: !1,
      pauseOnFocus: !0,
      pauseOnHover: !0,
      swipeToSlide: !0,
      responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4 } }],
    }),
    $(window).on("resize orientationchange", function () {
      $("#over-x-integrations-1 .over-x-integrations__logo-grid").slick({
        arrows: !0,
        dots: !1,
        slidesToScroll: 1,
        slidesToShow: 6,
        centerPadding: "15px",
        speed: 3e3,
        infinite: !0,
        autoplaySpeed: 0,
        cssEase: "linear",
        draggable: !1,
        pauseOnFocus: !0,
        pauseOnHover: !0,
        swipeToSlide: !0,
        responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4 } }],
      }),
        $("#over-x-integrations-3 .over-x-integrations__logo-grid").slick({
          arrows: !0,
          dots: !1,
          slidesToScroll: 1,
          slidesToShow: 6,
          centerPadding: "15px",
          speed: 3e3,
          infinite: !0,
          autoplaySpeed: 0,
          cssEase: "linear",
          draggable: !1,
          pauseOnFocus: !0,
          pauseOnHover: !0,
          swipeToSlide: !0,
          responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4 } }],
        }),
        $("#over-x-integrations-5 .over-x-integrations__logo-grid").slick({
          arrows: !0,
          dots: !1,
          slidesToScroll: 1,
          slidesToShow: 6,
          centerPadding: "15px",
          speed: 3e3,
          infinite: !0,
          autoplaySpeed: 0,
          cssEase: "linear",
          draggable: !1,
          pauseOnFocus: !0,
          pauseOnHover: !0,
          swipeToSlide: !0,
          responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4 } }],
        });
    }),
    $("#over-x-integrations-1 .over-x-integrations__logo-grid").slick(
      "slickSetOption",
      { autoplay: !0 },
      !0
    ),
    $(
      ".over-x-integrations_v2 .tabs_over-x-integrations .tabs__nav .tabs__item_1"
    ).on("click", function () {
      $("#over-x-integrations-1 .over-x-integrations__logo-grid").slick(
        "slickPlay"
      ),
        $("#over-x-integrations-3 .over-x-integrations__logo-grid").slick(
          "slickPause"
        ),
        $("#over-x-integrations-5 .over-x-integrations__logo-grid").slick(
          "slickPause"
        );
    }),
    $(
      ".over-x-integrations_v2 .tabs_over-x-integrations .tabs__nav .tabs__item_3"
    ).on("click", function () {
      $("#over-x-integrations-3 .over-x-integrations__logo-grid").slick(
        "slickPlay"
      ),
        $("#over-x-integrations-1 .over-x-integrations__logo-grid").slick(
          "slickPause"
        ),
        $("#over-x-integrations-5 .over-x-integrations__logo-grid").slick(
          "slickPause"
        );
    }),
    $(
      ".over-x-integrations_v2 .tabs_over-x-integrations .tabs__nav .tabs__item_5"
    ).on("click", function () {
      $("#over-x-integrations-5 .over-x-integrations__logo-grid").slick(
        "slickPlay"
      ),
        $("#over-x-integrations-1 .over-x-integrations__logo-grid").slick(
          "slickPause"
        ),
        $("#over-x-integrations-3 .over-x-integrations__logo-grid").slick(
          "slickPause"
        );
    }),
    $(
      ".over-x-integrations_v2 .tabs_over-x-integrations .tabs__nav .tabs__item_2 , .over-x-integrations_v2 .tabs_over-x-integrations .tabs__nav .tabs__item_4"
    ).on("click", function () {
      $("#over-x-integrations-1 .over-x-integrations__logo-grid").slick(
        "slickPause"
      ),
        $("#over-x-integrations-3 .over-x-integrations__logo-grid").slick(
          "slickPause"
        ),
        $("#over-x-integrations-5 .over-x-integrations__logo-grid").slick(
          "slickPause"
        );
    }),
    $("#over-x-integrations-1 .over-x-integrations__logo-grid .slick-prev").on(
      "click",
      function () {
        $("#over-x-integrations-1 .over-x-integrations__logo-grid")
          .slick("slickPause")
          .slick("slickPrev");
      }
    ),
    $("#over-x-integrations-1 .over-x-integrations__logo-grid .slick-next").on(
      "click",
      function () {
        $("#over-x-integrations-1 .over-x-integrations__logo-grid")
          .slick("slickPause")
          .slick("slidesToScroll", 1);
      }
    ),
    $("#over-x-integrations-3 .over-x-integrations__logo-grid .slick-prev").on(
      "click",
      function () {
        $("#over-x-integrations-3 .over-x-integrations__logo-grid")
          .slick("slickPause")
          .slick("slickPrev");
      }
    ),
    $("#over-x-integrations-3 .over-x-integrations__logo-grid .slick-next").on(
      "click",
      function () {
        $("#over-x-integrations-3 .over-x-integrations__logo-grid")
          .slick("slickPause")
          .slick("slidesToScroll", 1);
      }
    ),
    $("#over-x-integrations-5 .over-x-integrations__logo-grid .slick-prev").on(
      "click",
      function () {
        $("#over-x-integrations-5 .over-x-integrations__logo-grid")
          .slick("slickPause")
          .slick("slickPrev");
      }
    ),
    $("#over-x-integrations-5 .over-x-integrations__logo-grid .slick-next").on(
      "click",
      function () {
        $("#over-x-integrations-5 .over-x-integrations__logo-grid")
          .slick("slickPause")
          .slick("slidesToScroll", 1);
      }
    );
  var _,
    k = {
      arrows: !0,
      dots: !1,
      slidesToScroll: 2,
      slidesToShow: 2,
      infinite: !0,
      centerMode: !0,
      centerPadding: "20%",
      draggable: !1,
      pauseOnFocus: !0,
      pauseOnHover: !0,
      swipeToSlide: !0,
      variableWidth: !0,
    };
  function w(a, e, i, o) {
    var r = "";
    a && (r = "-" + a),
      "enterprise" === a || "jiraoffer" === a
        ? document.querySelector("[data-modal-input-enterprise-email]")
        : document.querySelector("[data-input" + r + "]");
    var s = $.trim($("[data-input" + r + "]").val()) || null;
    if ((!s && e && (s = e), !s || !isEmailValid(s)))
      return (
        $("[data-error" + r + "]").fadeIn(100),
        void $("[data-input" + r + "]").addClass("errored")
      );
    if ("mail-catcher-step2" == a)
      s = $.trim($("[data-input-mail-catcher-step2]").val());
    else {
      if (!s) return;
      if (!isEmailValid(s)) return void $("[data-error" + r + "]").fadeIn(100);
    }
    var l = "from-data-ga-tracking";
    if ("landing-page" == a) l = window.location.pathname.charAt(1);
    else if (
      "cta" == a ||
      "cta_v3" == a ||
      "jakub-download" == a ||
      "jakub-download_v2" == a ||
      "hypervsn-download" == a ||
      "hypervsn-download_v2" == a
    ) {
      var t = window.location.pathname.substr(1).split(".");
      l = t[0];
    }
    ("" !== l && l) || (l = "leadmain");
    var n = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        n = e.get("clientId");
      });
    var c = { email: s, source: source, tracking_id: n, name: "" };
    getCookie("utmCookie") && (c.utms = JSON.stringify(getUTMData())),
      -1 !== COUNTRY_CODES.indexOf(country_code) && (c.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: API_HOST + "/emailLead",
        data: c,
        beforeSend: function () {
          $("[data-error" + r + "]").hide(),
            $("[data-submit" + r + "]").addClass("btn-loading");
        },
        success: function (e) {
          if (
            ("mail-catcher-step1" !== a &&
              ("landing-page" === a ||
                "cta" === a ||
                "cta_v3" === a ||
                "jakub-download" === a ||
                "jakub-download_v2" === a ||
                "hypervsn-download" === a ||
                "hypervsn-download_v2" === a ||
                o ||
                ($("[data-success-email]").text(s),
                $("body").addClass("is-mail-catcher"),
                $(".mail-catcher").addClass("mail-catcher_success"),
                $("[data-input" + r + "]").val(""),
                $("[data-form] input").val(""),
                $("[data-submit" + r + "]").removeClass("btn-loading")),
              "jakub-download" == a
                ? ($("#jakub-download__message_v1").show(),
                  $(".jakub-download__form_green").hide())
                : "jakub-download_v2" == a &&
                  ($("#jakub-download__message_v2").show(),
                  $(".jakub-download__form_purple").hide()),
              "hypervsn-download" == a
                ? ($("#hypervsn-download__message_v1").show(),
                  $(".hypervsn-download__form_green").hide())
                : "hypervsn-download_v2" == a &&
                  ($("#hypervsn-download__message_v2").show(),
                  $(".hypervsn-download__form_purple").hide())),
            "enterprise" !== a)
          ) {
            var t = { form: getTrackingData(a), formLocation: a, email: s };
            switch (a) {
              case "made-a-deal-form":
                (t.fullName = document.querySelector(
                  "[data-modal-input-makeadeal-name]"
                ).value),
                  (t.phone = document.querySelector(
                    "[data-modal-input-makeadeal-phone]"
                  ).value);
            }
            segmentIdentifyAndTrack(e.userid, t),
              window.mutiny &&
                window.mutiny.client &&
                window.mutiny.client.identify(e.userid, {});
          }
          ("" !== form_label && form_label) ||
            (form_label = "landingpage " + l + " CTA");
          var n = !1;
          legacyAnalytics.identify(e.userid, { email: s }, {}, function () {
            legacyAnalytics.track(
              "Email Acquired",
              { category: "Email Acquired", label: form_label, value: "10" },
              {},
              function () {
                (n = !0),
                  i ||
                    setTimeout(function () {
                      redirect(s);
                    }, 1e3);
              }
            );
          }),
            setTimeout(function () {
              n || i || redirect(s);
            }, 1e3);
        },
        error: function () {
          i || redirect(s);
        },
      });
  }
  $(".tabs_over-x-integrations .tabs__nav .tabs__item").on(
    "click",
    function () {
      $(
        ".tabs_over-x-integrations .tabs__nav .over-x-integrations__logo-grid"
      ).slick("unslick"),
        $(
          ".tabs_over-x-integrations .tabs__nav .over-x-integrations__logo-grid"
        ).slick(k);
    }
  ),
    $(
      ".tabs_over-x-integrations .tabs__nav .over-x-integrations__logo-grid"
    ).slick(k),
    $(window).width() <= 1e3 &&
      $(".pm-problems__content_mobile").slick({
        infinite: !0,
        arrows: !0,
        dots: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        responsive: [
          { breakpoint: 1e4, settings: "unslick" },
          {
            breakpoint: 1e3,
            settings: {
              infinite: !0,
              arrows: !0,
              dots: !1,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: !0,
            },
          },
        ],
      }),
    $(window).on("resize orientationchange", function () {
      $(window).width() <= 1e3 &&
        $(".pm-problems__content_mobile").slick({
          infinite: !0,
          arrows: !0,
          dots: !1,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: !0,
          responsive: [
            { breakpoint: 1e4, settings: "unslick" },
            {
              breakpoint: 1e3,
              settings: {
                infinite: !0,
                arrows: !0,
                dots: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: !0,
              },
            },
          ],
        });
    }),
    $("[data-nav-toggle]").on("click", function () {
      return (
        $("body").toggleClass("is-canvas"),
        $("#intercom-container").css("display", "none"),
        $(".is-canvas__before").css("display", "block"),
        $(".is-canvas .is-canvas__before , .nav-canvas__modal").one(
          "click touchstart",
          function () {
            $("body").removeClass("is-canvas"),
              $(".is-canvas__before").css("display", "none"),
              $("#intercom-container").css("display", "block");
          }
        ),
        !1
      );
    }),
    $("[data-beta]").on("click", function () {
      $("body").addClass("is-mail-catcher"),
        $("#intercom-container").css("display", "none"),
        $("[data-input-mail-catcher-step1]").focus(),
        segmentEventTrack("trigger email capture overlay", {
          buttonClicked: "data-beta",
        });
    }),
    (_ = $("[data-faq]")).find("[data-link]").on("click", function () {
      $(this).closest("[data-item]").find("[data-text]").slideToggle(200);
    }),
    _.find("[data-toggle]").on("click", function () {
      var e = $(this),
        t = "hide" === e.attr("data-toggle"),
        n = _.find("[data-text]");
      (t && n.slideUp(200)) || n.slideDown(200),
        e
          .text(getText(t ? "show_all" : "hide_all"))
          .attr("data-toggle", t ? "show" : "hide");
    }),
    $("[data-submit-mail-catcher-step1]").on("click", function () {
      w("mail-catcher-step1");
    }),
    $("[data-input-mail-catcher-step1]").on("keyup", function (e) {
      switch (($("[data-error-mail-catcher-step1]").hide(), e.keyCode)) {
        case 13:
          w("mail-catcher-step1");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-submit-mail-catcher-step2]").on("click", function () {
      w("mail-catcher-step2");
    }),
    $("[data-input-name-mail-catcher-step2]").on("keyup", function (e) {
      switch (e.keyCode) {
        case 13:
          w("mail-catcher-step2");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-close]").on("click", function () {
      $(".mail-catcher").removeClass("mail-catcher_success"),
        $("body").removeClass("is-mail-catcher"),
        $("#intercom-container").css("display", "block"),
        $("[data-form] input").val(""),
        $(".mail-catcher-form-step1").css("display", "block"),
        $(".mail-catcher-form-step2").css("display", "none"),
        $("[data-submit]").removeClass("btn-loading");
    }),
    $("[data-wrong-email]").on("click", function () {
      $(".mail-catcher").removeClass("mail-catcher_success"),
        $("[data-success-email]").text(""),
        $("[data-form] input").val(""),
        $(".mail-catcher-form-step1").css("display", "block"),
        $(".mail-catcher-form-step2").css("display", "none");
    }),
    $("[data-submit-cta]").on("click", function () {
      w("cta");
    }),
    $("[data-input-cta]").on("keyup", function (e) {
      switch (($("[data-error-cta]").hide(), e.keyCode)) {
        case 13:
          w("cta");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-submit-cta_v3]").on("click", function () {
      w("cta_v3");
    }),
    $("[data-input-cta_v3]").on("keyup", function (e) {
      switch (($("[data-error-cta_v3]").hide(), e.keyCode)) {
        case 13:
          w("cta_v3");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-submit-jakub-download]").on("click", function () {
      w("jakub-download");
    }),
    $("[data-input-jakub-download]").on("keyup", function (e) {
      switch (($("[data-error-jakub-download]").hide(), e.keyCode)) {
        case 13:
          w("jakub-download");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-submit-jakub-download_v2]").on("click", function () {
      w("jakub-download_v2");
    }),
    $("[data-input-jakub-download_v2]").on("keyup", function (e) {
      switch (($("[data-error-jakub-download_v2]").hide(), e.keyCode)) {
        case 13:
          w("jakub-download_v2");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-submit-hypervsn-download]").on("click", function () {
      w("hypervsn-download");
    }),
    $("[data-input-hypervsn-download]").on("keyup", function (e) {
      switch (($("[data-error-hypervsn-download]").hide(), e.keyCode)) {
        case 13:
          w("hypervsn-download");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-submit-hypervsn-download_v2]").on("click", function () {
      w("hypervsn-download_v2");
    }),
    $("[data-input-hypervsn-download_v2]").on("keyup", function (e) {
      switch (($("[data-error-hypervsn-download_v2]").hide(), e.keyCode)) {
        case 13:
          w("hypervsn-download_v2");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-submit-landing-page]").on("click", function () {
      w("landing-page");
    }),
    $("[data-submit-landing-page]").on("click", function (e) {
      0 === $("[data-input-landing-page]").val().length &&
        (e.stopPropagation(),
        $("body").addClass("is-mail-catcher"),
        $("#intercom-container").css("display", "none"),
        $("[data-input-mail-catcher-step1]").focus(),
        $("[data-error-landing-page]").hide(),
        $("[data-input-landing-page]").removeClass("errored"),
        segmentEventTrack("trigger email capture overlay", {
          buttonClicked: "data-submit-landing-page",
        }));
    }),
    $("[data-input-landing-page]").on("keyup", function (e) {
      switch (
        ($(this).removeClass("errored"),
        $("[data-error-landing-page]").hide(),
        e.keyCode)
      ) {
        case 13:
          w("landing-page");
          break;
        case 27:
          $(this).val("");
      }
    }),
    $("[data-button-makeadeal]").on("click", function () {
      w(
        "made-a-deal-form",
        $.trim($("[data-modal-input-makeadeal-email]").val()) || null,
        !0,
        !0
      );
    }),
    $("[data-button-entoredu]").on("click", function () {
      w(
        "pricing-enterprise-form",
        $.trim($("[data-modal-input-entoredu-email]").val()) || null,
        !0,
        !0
      );
    }),
    $("[data-button-casestudy]").on("click", function () {
      w(
        "casestudy",
        $.trim($("[data-modal-input-casestudy-email]").val()) || null,
        !0,
        !0
      );
    }),
    $("[data-button-gartner]").on("click", function () {
      w(
        "gartner",
        $.trim($("[data-modal-input-gartner-email]").val()) || null,
        !0,
        !0
      );
    }),
    $("[data-button-stanley-security]").on("click", function () {
      w(
        "stanleysecurity",
        $.trim($("[data-modal-input-stanley-security-email]").val()) || null,
        !0,
        !0
      );
    }),
    $("[data-button-vida-health]").on("click", function () {
      w(
        "vidahealth",
        $.trim($("[data-modal-input-vida-health-email]").val()) || null,
        !0,
        !0
      );
    }),
    $("[data-help-submit]").on("click", function () {
      w(
        "help-form",
        $.trim($("[data-help-input-email]").val()) || null,
        !0,
        !0
      );
    });
  var C = $(".key-features-tabs__item__header__description--for-phone-tasks");
  C.html("");
  var S = $(".key-features-tabs__item_active")
    .find(".key-features-tabs__item__header__description")
    .html();
  C.html(S),
    $("[data-key-features-tab-nav]").on("click", function (e) {
      e.preventDefault();
      var t = $(this),
        n = t.attr("href");
      t
        .addClass("key-features-tabs__item_active")
        .siblings()
        .removeClass("key-features-tabs__item_active"),
        $(n)
          .addClass("key-features-tabs__panel_active")
          .siblings()
          .removeClass("key-features-tabs__panel_active");
      var a = $(
          ".key-features-tabs__item__header__description--for-phone-tasks"
        ),
        i = $(
          ".key-features-tabs__item__header__description--for-phone-projects"
        ),
        o = $(".key-features-tabs__item__header__description--for-phone-time");
      a.add(i).add(o).html("");
      var r = $(".key-features-tabs__item_active").find(
          ".key-features-tabs__item__header__description"
        ),
        s = r[0].innerHTML,
        l = r[1].innerHTML,
        c = r[2].innerHTML;
      return a.html(s), i.html(l), o.html(c), !1;
    }),
    $(".key-features__views, .key-features__views__switcher").click(
      function () {
        $(".key-features__tooltip-default").addClass("hidden");
      }
    ),
    $(".key-features__views__switcher__item--time").click(function () {
      $(
        ".key-features__views__switcher__item--list, .key-features__views__switcher__item--board, .key-features__views__switcher__item--box"
      ).removeClass("key-features__views__switcher__item__active"),
        $(this).addClass("key-features__views__switcher__item__active"),
        $(
          ".key-features__views__img--list, .key-features__views__img--board, .key-features__views__img--box"
        ).removeClass("key-features__views__img__active"),
        $(".key-features__views__img--time").addClass(
          "key-features__views__img__active"
        );
    }),
    $(".key-features__views__switcher__item--list").click(function () {
      $(
        ".key-features__views__switcher__item--time, .key-features__views__switcher__item--board, .key-features__views__switcher__item--box"
      ).removeClass("key-features__views__switcher__item__active"),
        $(this).addClass("key-features__views__switcher__item__active"),
        $(
          ".key-features__views__img--time, .key-features__views__img--board, .key-features__views__img--box"
        ).removeClass("key-features__views__img__active"),
        $(".key-features__views__img--list").addClass(
          "key-features__views__img__active"
        );
    }),
    $(".key-features__views__switcher__item--board").click(function () {
      $(
        ".key-features__views__switcher__item--list, .key-features__views__switcher__item--time, .key-features__views__switcher__item--box"
      ).removeClass("key-features__views__switcher__item__active"),
        $(this).addClass("key-features__views__switcher__item__active"),
        $(
          ".key-features__views__img--list, .key-features__views__img--time, .key-features__views__img--box"
        ).removeClass("key-features__views__img__active"),
        $(".key-features__views__img--board").addClass(
          "key-features__views__img__active"
        );
    }),
    $(".key-features__views__switcher__item--box").click(function () {
      $(
        ".key-features__views__switcher__item--list, .key-features__views__switcher__item--time,  .key-features__views__switcher__item--board"
      ).removeClass("key-features__views__switcher__item__active"),
        $(this).addClass("key-features__views__switcher__item__active"),
        $(
          ".key-features__views__img--list, .key-features__views__img--time, .key-features__views__img--board"
        ).removeClass("key-features__views__img__active"),
        $(".key-features__views__img--box").addClass(
          "key-features__views__img__active"
        );
    }),
    $(".features-list-v2__btn-show-more").click(function () {
      $(".features-list-v2__grid_hidden").addClass("visible"),
        $(this).css("display", "none"),
        $(".features-list-v2__btn__see__all").css("display", "flex"),
        $(".features-list-v2__shadow-effect").css("display", "none");
    }),
    $(".over-x-integrations__btn_see-all").click(function () {
      $(".tabs_over-x-integrations .tabs__nav .tabs__item").removeClass(
        "tabs__item_active"
      ),
        $(".over-x-integrations_v2 .tabs__panel").removeClass(
          "tabs__panel_active"
        ),
        $(
          ".tabs_over-x-integrations .tabs__nav .tabs__item:first-child"
        ).addClass("tabs__item_active"),
        $("#over-x-integrations-0").addClass("tabs__panel_active"),
        $(".over-x-integrations__logo-grid_hidden").addClass("visible"),
        $(this).css("display", "none");
    }),
    $(".pm-problems__tabs-link").on("click", function () {
      var e = $(this),
        t = $("#" + e.attr("data-tab"));
      return (
        e
          .addClass("pm-problems__tabs-link_current")
          .siblings()
          .removeClass("pm-problems__tabs-link_current"),
        t
          .addClass("pm-problems__tabs-link_current")
          .siblings()
          .removeClass("pm-problems__tabs-link_current")
          .removeClass("current"),
        !1
      );
    }),
    $(".reviews-feedback__btn-show-more").click(function () {
      $(".reviews-feedback__item.hidden")
        .addClass("visible")
        .removeClass("hidden"),
        $(this).css("display", "none");
    }),
    metaImagesSetup(r);
}),
  document.querySelector(".pricing__body") &&
    (doesPricingCarouselNeedSlick(),
    $(window).on("resize orientationchange", doesPricingCarouselNeedSlick)),
  trackDepartment(),
  $("[data-tab-nav]").on("click", function () {
    var e = $(this),
      t = e.attr("href");
    e.addClass("tabs__item_active").siblings().removeClass("tabs__item_active"),
      $(t)
        .addClass("tabs__panel_active")
        .siblings()
        .removeClass("tabs__panel_active");
    var n = $(this).attr("data-tab-demo");
    return (
      $("[data-panel='" + n + "']")
        .addClass("tabs__panel_active")
        .siblings()
        .removeClass("tabs__panel_active"),
      $("#views-tab-infographic").hasClass("tabs__panel_active")
        ? ($(
            ".tabs_infographic .tabs__nav_list-wrap .tabs__item:nth-child(1)"
          ).attr("href", "#views-tab-infographic-1"),
          $(
            ".tabs_infographic .tabs__nav_list-wrap .tabs__item:nth-child(2)"
          ).attr("href", "#views-tab-infographic-2"),
          $(
            ".tabs_infographic .tabs__nav_list-wrap .tabs__item:nth-child(3)"
          ).attr("href", "#views-tab-infographic-3"))
        : ($(
            ".tabs_infographic .tabs__nav_list-wrap .tabs__item:nth-child(1)"
          ).attr("href", "#features-tab-infographic-1"),
          $(
            ".tabs_infographic .tabs__nav_list-wrap .tabs__item:nth-child(2)"
          ).attr("href", "#features-tab-infographic-2"),
          $(
            ".tabs_infographic .tabs__nav_list-wrap .tabs__item:nth-child(3)"
          ).attr("href", "#features-tab-infographic-3")),
      !1
    );
  }),
  $(
    ".features-list-v2_ext .features-list-v2__item .features-list-v2__btn-read-more, .features-list-v2_ext .features-list-v2__item h4"
  ).on("click", function (e) {
    e.stopPropagation();
  }),
  $(".section_price-gradient [data-tab-pricing-nav]").on("click", function () {
    if ($(this).hasClass("active"))
      t = $(this).siblings("[data-tab-pricing-nav]").attr("data-price-plan");
    else var t = $(this).attr("data-price-plan");
    $("[data-price-plan=" + t + "]")
      .toggleClass("active")
      .siblings()
      .toggleClass("active"),
      $.each($(".pricing-plan_best [data-price]"), function () {
        var e;
        0 === currency_rate
          ? ((e = $(this).attr("data-price-" + t) / 100),
            $(this).html("<sup>$</sup>" + e))
          : $(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + t) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            );
      }),
      $.each($(".pricing-plan_best [data-price-description]"), function () {
        $(this).text($(this).attr("data-price-description-" + t));
      }),
      $.each($(".pricing-plan_business [data-price]"), function () {
        var e;
        0 === currency_rate
          ? ((e = $(this).attr("data-price-" + t) / 100),
            $(this).html("<sup>$</sup>" + e))
          : $(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + t) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            );
      }),
      $.each($(".pricing-plan_business [data-price-description]"), function () {
        $(this).text($(this).attr("data-price-description-" + t));
      }),
      $.each($(".pricing-plan_business-plus [data-price]"), function () {
        var e;
        0 === currency_rate
          ? ((e = $(this).attr("data-price-" + t) / 100),
            $(this).html("<sup>$</sup>" + e))
          : $(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + t) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            );
      }),
      $.each(
        $(".pricing-plan_business-plus [data-price-description]"),
        function () {
          $(this).text($(this).attr("data-price-description-" + t));
        }
      ),
      "yearly" == t
        ? ($(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "ga-event",
            "Free trial click"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "ga-category",
            "Free trial button"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "ga-label",
            "pricing business yearly"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "lp-source",
            "pricingBusinessTrial"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "mail-label",
            "pricing business yearly"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "lp-plan",
            "business"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "ga-event",
            "Free trial click"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "ga-category",
            "Free trial button"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "ga-label",
            "pricing business plus yearly"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "lp-source",
            "pricingBusinessPlusTrial"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "mail-label",
            "pricing business plus yearly"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "lp-plan",
            "business-plus"
          ),
          $(
            ".section.section_price-gradient .pricing-plan__annual-only"
          ).removeClass("active"))
        : "monthly" == t &&
          ($(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "ga-event",
            "Free trial click"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "ga-category",
            "Free trial button"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "ga-label",
            "pricing business monthly"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "lp-source",
            "pricingBusinessTrial"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "mail-label",
            "pricing business monthly"
          ),
          $(".pricing-plan_business [data-pricing-btn-ga]").attr(
            "lp-plan",
            "business"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "ga-event",
            "Free trial click"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "ga-category",
            "Free trial button"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "ga-label",
            "pricing business plus monthly"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "lp-source",
            "pricingBusinessPlusTrial"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "mail-label",
            "pricing business plus monthly"
          ),
          $(".pricing-plan_business-plus [data-pricing-btn-ga]").attr(
            "lp-plan",
            "business-plus"
          ),
          $(
            ".section.section_price-gradient .pricing-plan__annual-only"
          ).addClass("active"));
  }),
  $(".pricing-plan_best [data-tab-pricing-nav]").on("click", function () {
    if ($(this).hasClass("active"))
      n = $(this).siblings("[data-tab-pricing-nav]").attr("data-price-plan");
    else var n = $(this).attr("data-price-plan");
    return (
      $(".pricing-plan_best [data-price-plan=" + n + "]")
        .toggleClass("active")
        .siblings()
        .toggleClass("active"),
      $.each($(".pricing-plan_best [data-price]"), function () {
        var t;
        0 === currency_rate
          ? ((t = $(this).attr("data-price-" + n) / 100),
            $(this).html("<sup>$</sup>" + t))
          : ($(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + n) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            ),
            $(this).on("mouseenter", function () {
              (t = $(this).attr("data-price-" + n) / 100), console.log(t);
              var e = $("<sup>USD $" + t + "</sup>").text();
              $(this).attr("data-tooltip", e),
                "USD" === country_currency.code &&
                  $(this).removeAttr("data-tooltip");
            }),
            $(this).on("mouseleave", function () {
              $(this).removeAttr("data-tooltip"),
                $(this).html(
                  "<sup>" +
                    country_currency.symbol +
                    "</sup>" +
                    parseFloat(
                      ($(this).attr("data-price-" + n) * currency_rate) / 100
                    )
                      .toFixed(2)
                      .replace(/[0]+$/, "")
                      .replace(/[.]+$/, "")
                );
            }));
      }),
      $.each($(".pricing-plan_best [data-price-description]"), function () {
        $(this).text($(this).attr("data-price-description-" + n));
      }),
      "yearly" === n
        ? $("[data-pricing-plan-feature-yearly]").css("display", "block")
        : $("[data-pricing-plan-feature-yearly]").css("display", "none"),
      !1
    );
  }),
  $(".pricing-plan_business [data-tab-pricing-nav]").on("click", function () {
    if ($(this).hasClass("active"))
      n = $(this).siblings("[data-tab-pricing-nav]").attr("data-price-plan");
    else var n = $(this).attr("data-price-plan");
    return (
      $(".pricing-plan_business [data-price-plan=" + n + "]")
        .toggleClass("active")
        .siblings()
        .toggleClass("active"),
      $.each($(".pricing-plan_business [data-price]"), function () {
        var t;
        0 === currency_rate
          ? ((t = $(this).attr("data-price-" + n) / 100),
            $(this).html("<sup>$</sup>" + t))
          : ($(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + n) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            ),
            $(this).on("mouseenter", function () {
              (t = $(this).attr("data-price-" + n) / 100), console.log(t);
              var e = $("<sup>USD $" + t + "</sup>").text();
              $(this).attr("data-tooltip", e),
                "USD" === country_currency.code &&
                  $(this).removeAttr("data-tooltip");
            }),
            $(this).on("mouseleave", function () {
              $(this).removeAttr("data-tooltip"),
                $(this).html(
                  "<sup>" +
                    country_currency.symbol +
                    "</sup>" +
                    parseFloat(
                      ($(this).attr("data-price-" + n) * currency_rate) / 100
                    )
                      .toFixed(2)
                      .replace(/[0]+$/, "")
                      .replace(/[.]+$/, "")
                );
            }));
      }),
      $.each($(".pricing-plan_business [data-price-description]"), function () {
        $(this).text($(this).attr("data-price-description-" + n));
      }),
      "yearly" === n
        ? $("[data-pricing-plan-feature-yearly]").css("display", "block")
        : $("[data-pricing-plan-feature-yearly]").css("display", "none"),
      !1
    );
  }),
  $(".pricing-plan_business-plus [data-tab-pricing-nav]").on(
    "click",
    function () {
      if ($(this).hasClass("active"))
        n = $(this).siblings("[data-tab-pricing-nav]").attr("data-price-plan");
      else var n = $(this).attr("data-price-plan");
      return (
        $(".pricing-plan_business-plus [data-price-plan=" + n + "]")
          .toggleClass("active")
          .siblings()
          .toggleClass("active"),
        $.each($(".pricing-plan_business-plus [data-price]"), function () {
          var t;
          0 === currency_rate
            ? ((t = $(this).attr("data-price-" + n) / 100),
              $(this).html("<sup>$</sup>" + t))
            : ($(this).html(
                "<sup>" +
                  country_currency.symbol +
                  "</sup>" +
                  parseFloat(
                    ($(this).attr("data-price-" + n) * currency_rate) / 100
                  )
                    .toFixed(2)
                    .replace(/[0]+$/, "")
                    .replace(/[.]+$/, "")
              ),
              $(this).on("mouseenter", function () {
                (t = $(this).attr("data-price-" + n) / 100), console.log(t);
                var e = $("<sup>USD $" + t + "</sup>").text();
                $(this).attr("data-tooltip", e),
                  "USD" === country_currency.code &&
                    $(this).removeAttr("data-tooltip");
              }),
              $(this).on("mouseleave", function () {
                $(this).removeAttr("data-tooltip"),
                  $(this).html(
                    "<sup>" +
                      country_currency.symbol +
                      "</sup>" +
                      parseFloat(
                        ($(this).attr("data-price-" + n) * currency_rate) / 100
                      )
                        .toFixed(2)
                        .replace(/[0]+$/, "")
                        .replace(/[.]+$/, "")
                  );
              }));
        }),
        $.each(
          $(".pricing-plan_business-plus [data-price-description]"),
          function () {
            $(this).text($(this).attr("data-price-description-" + n));
          }
        ),
        "yearly" === n
          ? $("[data-pricing-plan-feature-yearly]").css("display", "block")
          : $("[data-pricing-plan-feature-yearly]").css("display", "none"),
        !1
      );
    }
  ),
  $(".pricing-plan_enterprise [data-tab-pricing-nav]").on("click", function () {
    if ($(this).hasClass("active"))
      n = $(this).siblings("[data-tab-pricing-nav]").attr("data-price-plan");
    else var n = $(this).attr("data-price-plan");
    return (
      $(".pricing-plan_enterprise [data-price-plan=" + n + "]")
        .toggleClass("active")
        .siblings()
        .toggleClass("active"),
      $.each($(".pricing-plan_enterprise [data-price]"), function () {
        var t;
        0 === currency_rate
          ? ((t = $(this).attr("data-price-" + n) / 100),
            $(this).html("<sup>$</sup>" + t))
          : ($(this).html(
              "<sup>" +
                country_currency.symbol +
                "</sup>" +
                parseFloat(
                  ($(this).attr("data-price-" + n) * currency_rate) / 100
                )
                  .toFixed(2)
                  .replace(/[0]+$/, "")
                  .replace(/[.]+$/, "")
            ),
            $(this).on("mouseenter", function () {
              (t = $(this).attr("data-price-" + n) / 100), console.log(t);
              var e = $("<sup>USD $" + t + "</sup>").text();
              $(this).attr("data-tooltip", e),
                "USD" === country_currency.code &&
                  $(this).removeAttr("data-tooltip");
            }),
            $(this).on("mouseleave", function () {
              $(this).removeAttr("data-tooltip"),
                $(this).html(
                  "<sup>" +
                    country_currency.symbol +
                    "</sup>" +
                    parseFloat(
                      ($(this).attr("data-price-" + n) * currency_rate) / 100
                    )
                      .toFixed(2)
                      .replace(/[0]+$/, "")
                      .replace(/[.]+$/, "")
                );
            }));
      }),
      $.each(
        $(".pricing-plan_enterprise [data-price-description]"),
        function () {
          $(this).text($(this).attr("data-price-description-" + n));
        }
      ),
      "yearly" === n
        ? $("[data-pricing-plan-feature-yearly]").css("display", "block")
        : $("[data-pricing-plan-feature-yearly]").css("display", "none"),
      !1
    );
  }),
  $("[data-price-show-more]").on("click", function () {
    $(this).hide(),
      $(".pricing-plan")
        .removeClass("pricing-plan_hidden")
        .css({ flex: "0 0 24%" });
  }),
  $(document).ready(function () {
    var t;
    $(".share__title").on("click", function () {
      $(".share__item").toggleClass("active");
    }),
      $(".resource-center__contact_v1 .resource-center__header-icon-close").on(
        "click",
        function () {
          $(
            ".resource-center__tools, .resource-center__header-icon-logo, .resource-center__help, .resource-center__tools-grid-item--help-chat, .resource-center__support-main, .resource-center__contact_v1"
          ).attr("hidden", "true"),
            $(
              ".resource-center__support, .resource-center__header-back , .resource-center__support-steps--assistance, .resource-center__header-support-step"
            ).removeAttr("hidden"),
            $(".resource-center__contact_v1").removeClass("active");
        }
      ),
      $(".resource-center__contact_v2 .resource-center__header-icon-close").on(
        "click",
        function () {
          $(
            ".resource-center__tools, .resource-center__header-icon-logo, .resource-center__help, .resource-center__contact_v2"
          ).attr("hidden", "true"),
            $(
              ".resource-center__support, .resource-center__header-back, .resource-center__support-main"
            ).removeAttr("hidden"),
            $(".resource-center__contact_v2").removeClass("active");
        }
      );
    var n = 0,
      a = $("#project-management__banner").outerHeight();
    $(window).scroll(function (e) {
      t = !0;
    }),
      setInterval(function () {
        t &&
          (!(function () {
            var e = $(this).scrollTop();
            if (Math.abs(n - e) <= 5) return;
            n < e && a < e
              ? $("#project-management__banner")
                  .addClass("hidden")
                  .removeClass("active")
              : e + $(window).height() < $(document).height() &&
                $("#project-management__banner")
                  .addClass("active")
                  .removeClass("hidden");
            n = e;
          })(),
          (t = !1));
      }, 250),
      $("video[autoplay]").each(function () {
        this.pause(), this.load(), this.play();
      }),
      $("[data-nav]").on("click", function () {
        $("body").removeClass("is-canvas"),
          $(".is-canvas__before").css("display", "none");
        var e = $(this),
          t = $(this).data("nav"),
          n = $(".is-sticky").length ? 70 : 130;
        e.addClass("-active").siblings().removeClass("-active"),
          $("html, body").animate(
            { scrollTop: $('[data-section="' + t + '"]').offset().top - n },
            1e3
          );
      }),
      (window.onload = function () {
        var e = window.location.hash,
          t = $(".is-sticky").length ? 70 : 130;
        "#pricing" === e || "#switching" === e
          ? $("html, body").animate(
              {
                scrollTop:
                  $('[data-section="section-' + e.substring(1) + '"]').offset()
                    .top - t,
              },
              1e3
            )
          : ("#ios" !== e &&
              "#overview" !== e &&
              "#web" !== e &&
              "#android" !== e &&
              "#chrome" !== e &&
              "#desktop" !== e &&
              "#voice" !== e) ||
            ($("html, body").animate(
              {
                scrollTop:
                  $(".apps__card-outer_" + e.substring(1)).offset().top - t,
              },
              1e3
            ),
            $(".apps__card-outer , .apps__tag-item").removeClass("active"),
            $(".apps__card-outer_" + e.substring(1)).addClass("active"),
            $(".apps__tag-item-" + e.substring(1)).addClass("active"));
      }),
      $("[data-input-create-team]").focus(),
      $(".loader").fadeOut("slow");
  }),
  $(".features-v2.features-v2_carousel").slick({
    dots: !0,
    infinite: !1,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: "ondemand",
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1e3, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      {
        breakpoint: 600,
        centerMode: !0,
        settings: { dots: !1, slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  }),
  $(".teams-review__carousel").slick({
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: !0,
    lazyLoad: "ondemand",
  }),
  $(".popular-tags_carousel").slick({
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: !0,
    lazyLoad: "ondemand",
  }),
  ($.fn.randomize = function (n) {
    return (
      (n ? $(this).find(n) : $(this).children()).parent().each(function () {
        $(this)
          .children(n)
          .sort(
            function (e, t) {
              if ($(t).index() !== $(this).children(n).length)
                return Math.round(Math.random()) - 0.5;
            }.bind(this)
          )
          .detach()
          .appendTo(this);
      }),
      this
    );
  }),
  $(".reviews-carousel")
    .randomize()
    .slick({
      dots: !1,
      infinite: !1,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: !0,
    }),
  $.ajax({
    url: "https://clickup.com/blog/get-last-posts-for-footer.php",
    cache: !1,
  }).done(function (e) {
    $("[data-last-posts-from-blog]").append(e);
  }),
  $(".features-v2_no-carousel [data-features-filter]").on("click", function () {
    var e = $(this).attr("data-features-filter");
    $("[data-features-filter]").removeClass("active"),
      $(this).addClass("active");
    var t = $(".features-v2__card-outer");
    return (
      $.each(t, function () {
        "all" == e
          ? $(this).addClass("active")
          : $(this).is("[data-features-card-" + e + "]")
          ? $(this).addClass("active")
          : $(this).removeClass("active");
      }),
      $.each(t.filter(":visible"), function (e, t) {
        $(t)
          .removeClass("odd even")
          .addClass(e % 2 ? "even" : "odd");
      }),
      !1
    );
  }),
  $(".features-v2_carousel [data-features-filter]").on("click", function () {
    var e = $(this).attr("data-features-filter");
    return (
      $("[data-features-filter]").removeClass("active"),
      $(this).addClass("active"),
      "all" == e
        ? $(".features-v2.features-v2_carousel").slick("slickUnfilter")
        : ($(".features-v2.features-v2_carousel").slick("slickUnfilter"),
          $(".features-v2.features-v2_carousel").slick(
            "slickFilter",
            "[data-features-card-" + e + "]"
          )),
      $(".features-v2.features-v2_carousel").slick("slickGoTo", 1, !1),
      $(".features-v2.features-v2_carousel").slick("refresh"),
      !1
    );
  });
var $sections = $(
    ".features-v2__card-outer , .features-new__row , .features-new__row-item"
  ),
  $noresults = $(".features-new .no-features");
$noresults.hide();
var timer = null;
$("[data-features-search]").keyup(function () {
  var e = $(this).val();
  if ((clearTimeout(timer), $(".features-search_close").show(), e)) {
    $sections.hide();
    var t = $(
      '.features-v2__card-outer .features-v2__header:contains("' +
        e +
        '") , .features-v2__card-outer .features-v2__text:contains("' +
        e +
        '")'
    )
      .closest(".features-v2__card-outer")
      .show()
      .closest(".features-new__row")
      .find(".features-new__row-item")
      .show()
      .closest(".features-new__row")
      .show();
    t.length
      ? ($noresults.hide(), t.show())
      : ($noresults.show(),
        (timer = setTimeout(function () {
          var e = $("[data-features-search]").val(),
            t = formatForSlack(e);
          if (isEmailValid(e))
            return (
              $("body").addClass("is-mail-catcher"),
              $("#intercom-container").css("display", "none"),
              $("[data-input-mail-catcher-step1]").focus().val(e),
              $(".features-search__input").val(""),
              void $(".features-search_close").hide()
            );
          $.ajax({
            url: "https://hooks.slack.com/services/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",
            type: "POST",
            processData: !0,
            data: t,
            success: function (e) {
              console.log(e);
            },
            error: function (e) {
              console.log(e);
            },
          });
        }, 3e3)));
  } else
    $(".features-search_close").hide(), $noresults.hide(), $sections.show();
  $(".see__all-f, .features-search_close").on("click", function () {
    $(".features-search__input").val(""),
      $noresults.hide(),
      $sections.show(),
      $(".features-search_close").hide();
  });
});
var $sections_integrations = $(
    ".integrations__card-outer , .integrations__row , .integrations__card-item"
  ),
  $nointegrations = $(".no-integrations");
$nointegrations.hide();
timer = null;
function trackSubmitSearch(e) {
  e.preventDefault();
  var t = document.querySelector("[name=" + e.srcElement.name + "]").value;
  0 < t.length &&
    segmentEventTrack("submit search", {
      form: "search",
      searchInput: t,
      formLocation:
        e.target.className || e.target.id || e.srcElement.name || "",
    });
}
$("[data-integrations-search]").keyup(function () {
  var e = $(this).val();
  if ((clearTimeout(timer), $(".integrations-search_close").show(), e)) {
    $sections_integrations.hide();
    var t = $(
      '.integrations__card-outer .integrations__header:contains("' +
        e +
        '") , .integrations__card-outer .integrations__text:contains("' +
        e +
        '")'
    )
      .closest(".integrations__card-outer")
      .show()
      .closest(".integrations__row")
      .find(".integrations__card-item")
      .show()
      .closest(".integrations__row")
      .show();
    t.length
      ? ($nointegrations.hide(), t.show())
      : ($nointegrations.show(),
        (timer = setTimeout(function () {
          var e = $("[data-integrations-search]").val(),
            t = formatForSlack(e);
          if (isEmailValid(e))
            return (
              $("body").addClass("is-mail-catcher"),
              $("#intercom-container").css("display", "none"),
              $("[data-input-mail-catcher-step1]").focus().val(e),
              $(".integrations-search__input").val(""),
              void $(".integrations-search_close").hide()
            );
          $.ajax({
            url: "https://hooks.slack.com/services/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",
            type: "POST",
            processData: !0,
            data: t,
            success: function (e) {
              console.log(e);
            },
            error: function (e) {
              console.log(e);
            },
          });
        }, 3e3)));
  } else
    $(".integrations-search_close").hide(),
      $nointegrations.hide(),
      $sections_integrations.show();
  $(".integrations-search_close").on("click", function () {
    $(".integrations-search__input").val(""),
      $nointegrations.hide(),
      $sections_integrations.show(),
      $(this).hide();
  });
});
var searchDebounceTime = 500,
  searchDebounceOptions = { leading: !1, maxWait: 5e3, trailing: !0 },
  segmentSearchArray = [
    "#integrations-search-form",
    "#webinars-on-demand-form",
    "#search-videos-form",
    "#live-webinars-form",
    "#search",
  ];
for (var index in segmentSearchArray) {
  var domElement = document.querySelector(segmentSearchArray[index]);
  domElement &&
    (domElement.addEventListener(
      "keyup",
      lodashDebounce(
        trackSubmitSearch,
        searchDebounceTime,
        searchDebounceOptions
      )
    ),
    domElement.addEventListener("submit", trackSubmitSearch));
}
var $sections_webinar = $(".webinar__row_prev .webinar__item"),
  $no_webinars = $(".no-webinars");
$no_webinars.hide();
timer = null;
$("[data-webinar-search]").keyup(function () {
  var e = $(this).val();
  if ((clearTimeout(timer), $(".webinar-search_close").show(), e)) {
    $sections_webinar.hide();
    var t = $(
      '.webinar__row_prev .webinar__item .webinar__item-title:contains("' +
        e +
        '")'
    )
      .closest(".webinar__row_prev .webinar__item")
      .show();
    t.length
      ? ($no_webinars.hide(), t.show())
      : ($no_webinars.show(),
        (timer = setTimeout(function () {
          var e = $("[data-webinar-search]").val();
          formatForSlack(e);
          if (isEmailValid(e))
            return (
              $("body").addClass("is-mail-catcher"),
              $("#intercom-container").css("display", "none"),
              $("[data-input-mail-catcher-step1]").focus().val(e),
              $(".webinar-search__input").val(""),
              void $(".webinar-search_close").hide()
            );
        }, 3e3)));
  } else
    $(".webinar-search_close").hide(),
      $no_webinars.hide(),
      $sections_webinar.show();
  $(".webinar-search_close").on("click", function () {
    $(".webinar-search__input").val(""),
      $no_webinars.hide(),
      $sections_webinar.show(),
      $(this).hide();
  });
});
var $sections_videos = $(".videos__list .videos__item"),
  $no_videos = $(".no-videos");
$no_videos.hide();
timer = null;
function makeTimer() {
  var e = new Date("10 December 2020 9:00:00 GMT-08:00");
  e = Date.parse(e) / 1e3;
  var t = new Date(),
    n = e - (t = Date.parse(t) / 1e3),
    a = Math.floor(n / 86400),
    i = Math.floor((n - 86400 * a) / 3600),
    o = Math.floor((n - 86400 * a - 3600 * i) / 60),
    r = Math.floor(n - 86400 * a - 3600 * i - 60 * o);
  i < "10" && (i = "0" + i),
    o < "10" && (o = "0" + o),
    r < "10" && (r = "0" + r),
    $("#levelup-countdown").html(a + " days");
}
function closeBanner(e, t, n, a) {
  e.preventDefault(),
    e.stopPropagation(),
    $(t).addClass("dnone", 300),
    setClickUpCookie(n, n, 365),
    a && $(".dropdown-menu").css("top", "100px");
}
function closeModal() {
  return (
    $(".modal").addClass("modal-closed"),
    $(".modal-overlay").addClass("modal-closed"),
    $(".modal textarea").val(""),
    $(".switching__error").css("display", "none"),
    $("[data-modal-span-switching-platform-name]").html(""),
    removeEnterpriseSalesFormAnchor(),
    !1
  );
}
function intentExit() {
  var n = $.trim($("[data-modal-intent-input]").val()) || null;
  if (!n) return !1;
  if (isEmailValid(n)) {
    var t = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        t = e.get("clientId");
      });
    var e = { email: n, source: source, tracking_id: t };
    getCookie("utmCookie") && (e.utms = JSON.stringify(getUTMData())),
      -1 !== COUNTRY_CODES.indexOf(country_code) && (e.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: API_HOST + "/emailLead",
        data: e,
        beforeSend: function () {
          $("[data-modal-intent-error]").hide(),
            $("[data-modal-intent-submit]").addClass("btn-loading");
        },
        success: function (e) {
          $("[data-modal-intent]").addClass("modal-closed"),
            $("[data-modal-intent-overlay]").addClass("modal-closed"),
            $("[data-modal-intent-submit]").removeClass("btn-loading"),
            setClickUpCookie("closed", "closed", 10);
          var t = !1;
          segmentIdentifyAndTrack(e.userid, {
            form: getTrackingData("intent-input"),
            formLocation: "intent-input",
            email: n,
          }),
            window.mutiny &&
              window.mutiny.client &&
              window.mutiny.client.identify(e.userid, {}),
            legacyAnalytics.identify(e.userid, { email: n }, {}, function () {
              legacyAnalytics.track(
                "Email Acquired",
                {
                  category: "Email Acquired",
                  label: "intent exit",
                  value: "10",
                },
                {},
                function () {
                  (t = !0),
                    setTimeout(function () {
                      redirect(n);
                    }, 1e3);
                }
              );
            }),
            setTimeout(function () {
              t || redirect(n);
            }, 1e3);
        },
        error: function () {
          redirect(n);
        },
      });
  } else $("[data-modal-intent-error]").fadeIn(100);
}
function switchingStep1() {
  var e = $("[data-modal-input-switching-platform-name]"),
    t = $("[data-modal-span-switching-platform-name]"),
    n = $.trim(e.val()) || null;
  return (
    n &&
      ($("[data-modal-switching]").addClass("modal-closed"),
      $("[data-modal-switching-step-2]").removeClass("modal-closed"),
      $("[data-modal-input-switching-email]").focus(),
      t.html(n),
      e.val("")),
    !1
  );
}
function switchingStep2() {
  var t = $.trim($("[data-modal-input-switching-email]").val()) || null,
    e = $.trim($("[data-modal-span-switching-platform-name]").html()) || null;
  if (!t) return !1;
  if (isEmailValid(t)) {
    var n = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        n = e.get("clientId");
      });
    var a = {
      email: t,
      subject: "Request for import",
      body: "Request for import from " + e + ". clientId: " + n,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (a.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/helpTicket",
        data: a,
        beforeSend: function () {
          $("[data-modal-error-input-switching-email]").hide();
        },
        success: function (e) {
          $("[data-modal-switching-step-2]").addClass("modal-closed"),
            $("[data-modal-switching-step-3]").removeClass("modal-closed"),
            $(".modal-overlay").one("click", function (e) {
              closeModal();
            }),
            legacyAnalytics.identify(e.userid, { email: t }, {}, function () {
              legacyAnalytics.track("Request for import", {
                category: "Request for import",
                label: "Request for import",
              });
            });
        },
        error: function () {},
      });
  } else $("[data-modal-error-input-switching-email]").fadeIn(100);
}
function requestFeature() {
  var t = $.trim($("[data-modal-input-request-feature-email]").val()) || null,
    e = $.trim($("[data-modal-textarea-request-feature]").val()) || null;
  if (!t) return !1;
  if (isEmailValid(t)) {
    if (!e) return !1;
    var n = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        n = e.get("clientId");
      });
    var a = {
      email: t,
      subject: "Request a feature",
      body: e + ". clientId: " + n,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (a.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/helpTicket",
        data: a,
        beforeSend: function () {
          $("[data-modal-error-input-request-feature-email]").hide();
        },
        success: function (e) {
          $("[data-modal-request-feature]").addClass("modal-closed"),
            $("[data-modal-request-feature-done]").removeClass("modal-closed"),
            $(".modal-overlay").one("click", function (e) {
              closeModal();
            }),
            legacyAnalytics.identify(e.userid, { email: t }, {}, function () {
              legacyAnalytics.track("Request a feature", {
                category: "Request a feature",
                label: "Request a feature",
              });
            });
        },
        error: function () {},
      });
  } else $("[data-modal-error-input-request-feature-email]").fadeIn(100);
}
function enterpriseOrEducation() {
  var e = !1,
    t = $.trim($("[data-modal-input-entoredu-name]").val()) || null,
    n = $.trim($("[data-modal-input-entoredu-email]").val()) || null,
    a = $.trim($("[data-modal-input-entoredu-phone]").val()) || null,
    i = $.trim($("[data-modal-input-entoredu-numberofusers]").val()) || null,
    o = "";
  switch (
    $.trim($(":radio[name=enterpriseoreducation]").filter(":checked").val()) ||
    null
  ) {
    case "Enterprise":
      o = "enterprise";
      break;
    case "Nonprofit":
      o = "nonprofit";
      break;
    case "Education":
      o = "education";
  }
  if (
    ((n && isEmailValid(n)) ||
      ($("[data-modal-error-input-entoredu-email]").fadeIn(100), (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-entoredu-name]").fadeIn(100), (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t,
      email: n,
      phone: a,
      source: o,
      numberofusers: i,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-entoredu]").attr("disabled", !0);
        },
        success: function (e) {
          legacyAnalytics.identify(e.userid, { email: n }, {}, function () {
            legacyAnalytics.track("Enterprise quote button", {
              category: "Enterprise quote click",
              label: "enterprise education nonprofit",
            });
          }),
            $("[data-modal-error-input-entoredu-name]").hide(),
            $("[data-modal-error-input-entoredu-email]").hide(),
            $("[data-modal-error-input-entoredu-phone]").hide(),
            $("[data-modal-entoredu]").addClass("modal-closed"),
            $("[data-modal-entoredu-done]").removeClass("modal-closed"),
            $(".modal-overlay").one("click", function (e) {
              closeModal();
            }),
            $("[data-button-entoredu]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
function educationFormSubmit() {
  var e = $.trim($("[data-modal-input-education2-users]").val()) || null,
    t = $.trim($("[data-modal-input-education2-name]").val()) || null,
    n = $.trim($("[data-modal-input-education2-email]").val()) || null,
    a = $.trim($("[data-modal-input-body-education2]").val()) || null;
  if (isEmailValid(n))
    if (isNameValid(t)) {
      var i = "unknown";
      "function" == typeof ga &&
        ga(function (e) {
          i = e.get("clientId");
        });
      var o = {
        name: t,
        email: n,
        phone: null,
        source: "https://clickup.com/teams/education",
        subject: "ClickUp Education Discount Ticket",
        users: e,
        msg: a,
        tracking_id: i,
        speakWithSupport: !0,
      };
      -1 !== COUNTRY_CODES.indexOf(country_code) && (o.eu_accepted = "false"),
        $.ajax({
          method: "POST",
          url: "https://api.clickup.com/v1/helpTicket",
          data: o,
          beforeSend: function () {
            $("[data-button-education2]").attr("disabled", !0);
          },
          success: function (e) {
            $("[data-modal-error-input-education2-email]").hide(),
              $("[data-modal-error-input-education2-name]").hide(),
              $("[data-modal-education2]").addClass("modal-closed"),
              $("[data-modal-education2-done]").removeClass("modal-closed"),
              $(".modal-overlay").one("click", function (e) {
                closeModal();
              }),
              $("[data-button-education2]").attr("disabled", !1),
              legacyAnalytics.identify(e.userid, { email: n }, {}, function () {
                legacyAnalytics.track("Education Discount", {
                  category: "Education Discount",
                  label: "Education Discount",
                });
              });
          },
          error: function () {},
        });
    } else $("[data-modal-error-input-education2-name]").fadeIn(100);
  else $("[data-modal-error-input-education2-email]").fadeIn(100);
}
function makeadeal() {
  var e = !1,
    t = $.trim($("[data-modal-input-makeadeal-pay]").val()) || null,
    n = $.trim($("[data-modal-input-makeadeal-users]").val()) || null,
    a = $.trim($("[data-modal-input-makeadeal-phone]").val()) || null,
    i = $.trim($("[data-modal-input-makeadeal-email]").val()) || null,
    o = $.trim($("[data-modal-input-makeadeal-name]").val()) || null;
  if (
    (0 !== currency_rate &&
      t &&
      (t = parseFloat(t / currency_rate)
        .toFixed(2)
        .replace(/[0]+$/, "")
        .replace(/[.]+$/, "")),
    (i && isEmailValid(i)) ||
      ($("[data-modal-error-input-makeadeal-email]").fadeIn(100), (e = !0)),
    (o && isNameValid(o)) ||
      ($("[data-modal-error-input-makeadeal-name]").fadeIn(100), (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: o,
      email: i,
      phone: a,
      source: "makeadeal",
      price: t,
      numberofusers: n,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-makeadeal]").attr("disabled", !0);
        },
        success: function (e) {
          $("[data-modal-error-input-makeadeal-email]").hide(),
            $("[data-modal-error-input-makeadeal-phone]").hide(),
            $("[data-modal-error-input-makeadeal-name]").hide(),
            $("[data-modal-makeadeal]").addClass("modal-closed"),
            $("[data-modal-makeadeal-done]").removeClass("modal-closed"),
            $(".modal-overlay").one("click", function (e) {
              closeModal();
            }),
            $("[data-button-makeadeal]").attr("disabled", !1),
            legacyAnalytics.identify(e.userid, { email: i }, {}, function () {
              legacyAnalytics.track("Make a Deal", {
                category: "Make a deal",
                label: "make a deal",
              });
            });
        },
        error: function () {},
      });
  }
}
function nprodisc() {
  var t = $.trim($("[data-modal-input-nprofdiscount-users]").val()) || null,
    n = $.trim($("[data-modal-input-nprofdiscount-name]").val()) || null,
    a = $.trim($("[data-modal-input-nprofdiscount-email]").val()) || null,
    i = $.trim($("[data-modal-input-body-nprofdiscount]").val()) || null;
  if (isEmailValid(a))
    if (isNameValid(n)) {
      var o = "unknown";
      "function" == typeof ga &&
        ga(function (e) {
          o = e.get("clientId");
        });
      var e = {
        email: a,
        source: "nonprofitpm",
        name: n,
        users: t,
        descr: i,
        tracking_id: o,
      };
      -1 !== COUNTRY_CODES.indexOf(country_code) && (e.eu_accepted = "false"),
        $.ajax({
          method: "POST",
          url: "https://api.clickup.com/v1/salesForm",
          data: e,
          beforeSend: function () {
            $("[data-button-nprofdiscount]").attr("disabled", !0);
          },
          success: function (e) {
            $("[data-modal-error-input-nprofdiscount-email]").hide(),
              $("[data-modal-error-input-nprofdiscount-name]").hide(),
              $("[data-modal-nprofdiscount]").addClass("modal-closed"),
              $("[data-modal-nprofdiscount-done]").removeClass("modal-closed"),
              $(".modal-overlay").one("click", function (e) {
                closeModal();
              }),
              $("[data-button-nprofdiscount]").attr("disabled", !1),
              segmentIdentifyAndTrack(e.userid, {
                form: getTrackingData("nprofdiscount"),
                formLocation: "nprofdiscount",
                email: a,
                fullName: n,
                howManyUsers: t,
                description: i,
              }),
              legacyAnalytics.identify(e.userid, { email: a }, {}, function () {
                legacyAnalytics.track("Non-Profit Discount", {
                  category: "Non-Profit Discount",
                  label: "Non-Profit Discount",
                });
              });
          },
          error: function () {},
        });
    } else $("[data-modal-error-input-nprofdiscount-name]").fadeIn(100);
  else $("[data-modal-error-input-nprofdiscount-email]").fadeIn(100);
}
function salesForm() {
  var e = !1,
    t = $.trim($("[data-modal-input-enterprise-name]").val()) || null,
    n = $.trim($("[data-modal-input-enterprise-surname]").val()) || null,
    a = $.trim($("[data-modal-input-enterprise-email]").val()) || null,
    i = $.trim($("[data-modal-input-enterprise-phone]").val()) || null,
    o = $.trim($("[data-modal-input-enterprise-numberofusers]").val()) || null,
    r = window.location.href,
    s = new URL(r),
    l = s.searchParams.get("utm_source"),
    c = s.searchParams.get("utm_campaign"),
    d = s.searchParams.get("utm_medium");
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-enterprise-email]").fadeIn(100), (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-enterprise-name]").fadeIn(100), (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-enterprise-surname]").fadeIn(100), (e = !0)),
    (o && "null" !== o) ||
      ($("[data-modal-error-input-enterprise-numberofusers]").fadeIn(100),
      (e = !0)),
    ("/3.html" !== window.location.pathname &&
      "/3" !== window.location.pathname) ||
      (i && isPhoneValid(i)) ||
      $("[data-modal-error-input-enterprise-phone]").fadeIn(100),
    !e)
  ) {
    var u = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        u = e.get("clientId");
      });
    var p = "";
    p =
      "/jira-switch.html" === window.location.pathname ||
      "/jira-switch" === window.location.pathname
        ? "jiraoffer"
        : "enterprise";
    var m = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: p,
      numberofusers: o,
      tracking_id: u,
      country_code: country_code,
      country_name: country_name,
      utm_source: l,
      utm_medium: d,
      utm_campaign: c,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (m.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: API_HOST + "/salesForm",
        data: m,
        beforeSend: function () {
          $("[data-button-enterprise]").attr("disabled", !0);
        },
        success: function () {
          fetch(API_HOST + "/emailLead", {
            method: "POST",
            body: JSON.stringify({
              name: t,
              email: a,
              source: p,
              tracking_id: u || "",
            }),
            headers: { "Content-Type": "application/json" },
          })
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              segmentIdentifyAndTrack(e.userid, {
                form: getTrackingData(p),
                formLocation: p,
                email: a,
                firstName: t,
                lastName: n,
                phone: i,
                howManyUsers: o,
              }),
                legacyAnalytics.identify(
                  e.userid,
                  { email: a },
                  {},
                  function () {
                    legacyAnalytics.track("Enterprise quote button", {
                      category: "Enterprise quote click",
                      label: "enterprise sales form",
                    });
                  }
                ),
                fbq("trackCustom", "ContactSales", { promotion: "saleslead" }),
                window.gtag &&
                  (window.gtag("event", "conversion", {
                    send_to: "AW-867030291/dLTrCLingI0CEJOqt50D",
                  }),
                  window.gtag("event", "conversion", {
                    send_to: "AW-617640813/zj2wCOnthI0CEO3mwaYC",
                  })),
                window.mutiny &&
                  window.mutiny.client.trackConversion({
                    name: "elf-ty-modal",
                  });
            })
            .then(function () {
              removeEnterpriseSalesFormAnchor(),
                $("[data-modal-error-input-enterprise-name]").hide(),
                $("[data-modal-error-input-enterprise-surname]").hide(),
                $("[data-modal-error-input-enterprise-numberofusers]").hide(),
                $("[data-modal-error-input-enterprise-email]").hide(),
                $("[data-modal-enterprise]").addClass("modal-closed"),
                $("[data-button-enterprise]").attr("disabled", !1),
                setTimeout(function () {
                  var e = window.location.pathname;
                  window.location = "/elf-thanks?elf-referrer=" + e;
                }, 1e3);
            });
        },
        error: function () {},
      });
  }
}
function CaseStudyForm() {
  var e = !1,
    t = $.trim($("[data-modal-input-casestudy-name]").val()) || null,
    n = $.trim($("[data-modal-input-casestudy-surname]").val()) || null,
    a = $.trim($("[data-modal-input-casestudy-email]").val()) || null,
    i = $.trim($("[data-modal-input-casestudy-phone]").val()) || null,
    o = $.trim($("[data-modal-input-casestudy-numberofusers]").val()) || null;
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-casestudy-email]").fadeIn(100), (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-casestudy-name]").fadeIn(100), (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-casestudy-surname]").fadeIn(100), (e = !0)),
    (o && "null" !== o) ||
      ($("[data-modal-error-input-casestudy-numberofusers]").fadeIn(100),
      (e = !0)),
    (i && isPhoneValid(i)) ||
      ($("[data-modal-error-input-casestudy-phone]").fadeIn(100), (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: "casestudy",
      numberofusers: o,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-casestudy]").attr("disabled", !0);
        },
        success: function (e) {
          segmentIdentifyAndTrack(e.userid, {
            form: getTrackingData(source),
            formLocation: source,
            email: a,
            name: t,
            phone: i,
            howManyUsers: o,
          }),
            legacyAnalytics.identify(e.userid, { email: a }, {}, function () {
              legacyAnalytics.track("Case Study quote button", {
                category: "Case Study quote click",
                label: "Case Study sales form",
              });
            }),
            setTimeout(function () {
              $("#thanks-message").fadeIn();
            }, 1e3),
            setTimeout(function () {
              $(
                ".section.section_webflow-with-form #thanks-message a"
              )[0].click();
            }, 4e3),
            $(".case-study-download__form").hide(),
            $(".section.section_webflow-with-form .wrapper__inner").css(
              "align-items",
              "center"
            ),
            $("[data-modal-error-input-casestudy-name]").hide(),
            $("[data-modal-error-input-casestudy-surname]").hide(),
            $("[data-modal-error-input-casestudy-numberofusers]").hide(),
            $("[data-modal-error-input-casestudy-email]").hide(),
            $("[data-modal-error-input-casestudy-phone]").hide(),
            $("[data-button-casestudy]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
function GartnerForm() {
  var e = !1,
    t = $.trim($("[data-modal-input-gartner-name]").val()) || null,
    n = $.trim($("[data-modal-input-gartner-surname]").val()) || null,
    a = $.trim($("[data-modal-input-gartner-email]").val()) || null,
    i = $.trim($("[data-modal-input-gartner-phone]").val()) || null,
    o = $.trim($("[data-modal-input-gartner-numberofusers]").val()) || null;
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-gartner-email]").fadeIn(100), (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-gartner-name]").fadeIn(100), (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-gartner-surname]").fadeIn(100), (e = !0)),
    (o && "null" !== o) ||
      ($("[data-modal-error-input-gartner-numberofusers]").fadeIn(100),
      (e = !0)),
    (i && isPhoneValid(i)) ||
      ($("[data-modal-error-input-gartner-phone]").fadeIn(100), (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: "gartnerguide",
      numberofusers: o,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-gartner]").attr("disabled", !0);
        },
        success: function (e) {
          segmentIdentifyAndTrack(e.userid, {
            form: getTrackingData(source),
            formLocation: source,
            email: a,
            name: t,
            phone: i,
            howManyUsers: o,
          }),
            legacyAnalytics.identify(e.userid, { email: a }, {}, function () {
              legacyAnalytics.track("Web Form - Gartner Research LP", {
                category: "Web Form - Gartner Research LP",
                label: "PDF Guide",
              });
            }),
            setTimeout(function () {
              $("#thanks-message").fadeIn();
            }, 1e3),
            setTimeout(function () {
              $(".section.section_gartner #thanks-message a")[0].click();
            }, 4e3),
            $(".gartner__form").hide(),
            $(
              ".section.section_gartner .main-section-header__wrapper-inner"
            ).css("align-items", "center"),
            $("[data-modal-error-input-gartner-name]").hide(),
            $("[data-modal-error-input-gartner-surname]").hide(),
            $("[data-modal-error-input-gartner-numberofusers]").hide(),
            $("[data-modal-error-input-gartner-email]").hide(),
            $("[data-modal-error-input-gartner-phone]").hide(),
            $("[data-button-gartner]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
function ProductManagementGuideForm() {
  var e = !1,
    t =
      $.trim($("[data-modal-input-product-management-guide-name]").val()) ||
      null,
    n =
      $.trim($("[data-modal-input-product-management-guide-surname]").val()) ||
      null,
    a =
      $.trim($("[data-modal-input-product-management-guide-email]").val()) ||
      null,
    i =
      $.trim($("[data-modal-input-product-management-guide-phone]").val()) ||
      null,
    o =
      $.trim(
        $("[data-modal-input-product-management-guide-numberofusers]").val()
      ) || null;
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-product-management-guide-email]").fadeIn(100),
      (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-product-management-guide-name]").fadeIn(100),
      (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-product-management-guide-surname]").fadeIn(
        100
      ),
      (e = !0)),
    (o && "null" !== o) ||
      ($(
        "[data-modal-error-input-product-management-guide-numberofusers]"
      ).fadeIn(100),
      (e = !0)),
    (i && isPhoneValid(i)) ||
      ($("[data-modal-error-input-product-management-guide-phone]").fadeIn(100),
      (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: "productmanagementguide",
      numberofusers: o,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-product-management-guide]").attr("disabled", !0);
        },
        success: function (e) {
          segmentIdentifyAndTrack(e.userid, {
            form: getTrackingData(source),
            formLocation: source,
            email: a,
            name: t,
            phone: i,
            howManyUsers: o,
          }),
            legacyAnalytics.identify(e.userid, { email: a }, {}, function () {
              legacyAnalytics.track("Web Form - Product Management Guide LP", {
                category: "Web Form - Product Management Guide LP",
                label: "PDF Guide",
              });
            }),
            setTimeout(function () {
              $("#thanks-message").fadeIn();
            }, 1e3),
            setTimeout(function () {
              $(
                ".section.section_product-management-guide #thanks-message a"
              )[0].click();
            }, 4e3),
            $(".product-management-guide__form").hide(),
            $(
              ".section.section_product-management-guide .main-section-header__wrapper-inner"
            ).css("align-items", "center"),
            $("[data-modal-error-input-product-management-guide-name]").hide(),
            $(
              "[data-modal-error-input-product-management-guide-surname]"
            ).hide(),
            $(
              "[data-modal-error-input-product-management-guide-numberofusers]"
            ).hide(),
            $("[data-modal-error-input-product-management-guide-email]").hide(),
            $("[data-modal-error-input-product-management-guide-phone]").hide(),
            $("[data-button-product-management-guide]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
function VidaHealthForm() {
  var e = !1,
    t = $.trim($("[data-modal-input-vida-health-name]").val()) || null,
    n = $.trim($("[data-modal-input-vida-health-surname]").val()) || null,
    a = $.trim($("[data-modal-input-vida-health-email]").val()) || null,
    i = $.trim($("[data-modal-input-vida-health-phone]").val()) || null,
    o = $.trim($("[data-modal-input-vida-health-numberofusers]").val()) || null;
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-vida-health-email]").fadeIn(100), (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-vida-health-name]").fadeIn(100), (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-vida-health-surname]").fadeIn(100), (e = !0)),
    (o && "null" !== o) ||
      ($("[data-modal-error-input-vida-health-numberofusers]").fadeIn(100),
      (e = !0)),
    (i && isPhoneValid(i)) ||
      ($("[data-modal-error-input-vida-health-phone]").fadeIn(100), (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: "vidahealthcasestudy",
      numberofusers: o,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-vida-health]").attr("disabled", !0);
        },
        success: function (e) {
          segmentIdentifyAndTrack(e.userid, {
            form: getTrackingData(source),
            formLocation: source,
            email: a,
            name: t,
            phone: i,
            howManyUsers: o,
          }),
            legacyAnalytics.identify(e.userid, { email: a }, {}, function () {
              legacyAnalytics.track("Web Form - Vida Health LP", {
                category: "Web Form - Vida Health LP",
                label: "PDF Guide",
              });
            }),
            setTimeout(function () {
              $("#thanks-message").fadeIn();
            }, 1e3),
            setTimeout(function () {
              $(".section.section_vida-health #thanks-message a")[0].click();
            }, 4e3),
            $(".vida-health__form").hide(),
            $(
              ".section.section_vida-health .main-section-header__wrapper-inner"
            ).css("align-items", "center"),
            $("[data-modal-error-input-vida-health-name]").hide(),
            $("[data-modal-error-input-vida-health-surname]").hide(),
            $("[data-modal-error-input-vida-health-numberofusers]").hide(),
            $("[data-modal-error-input-vida-health-email]").hide(),
            $("[data-modal-error-input-vida-health-phone]").hide(),
            $("[data-button-vida-health]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
function StanleySecurityForm() {
  var e = !1,
    t = $.trim($("[data-modal-input-stanley-security-name]").val()) || null,
    n = $.trim($("[data-modal-input-stanley-security-surname]").val()) || null,
    a = $.trim($("[data-modal-input-stanley-security-email]").val()) || null,
    i = $.trim($("[data-modal-input-stanley-security-phone]").val()) || null,
    o =
      $.trim($("[data-modal-input-stanley-security-numberofusers]").val()) ||
      null;
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-stanley-security-email]").fadeIn(100),
      (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-stanley-security-name]").fadeIn(100),
      (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-stanley-security-surname]").fadeIn(100),
      (e = !0)),
    (o && "null" !== o) ||
      ($("[data-modal-error-input-stanley-security-numberofusers]").fadeIn(100),
      (e = !0)),
    (i && isPhoneValid(i)) ||
      ($("[data-modal-error-input-stanley-security-phone]").fadeIn(100),
      (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: "stanleycasestudy",
      numberofusers: o,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-stanley-security]").attr("disabled", !0);
        },
        success: function (e) {
          segmentIdentifyAndTrack(e.userid, {
            form: getTrackingData(source),
            formLocation: source,
            email: a,
            name: t,
            phone: i,
            howManyUsers: o,
          }),
            legacyAnalytics.identify(e.userid, { email: a }, {}, function () {
              legacyAnalytics.track("Web Form - Stanley Security LP", {
                category: "Web Form - Stanley Security LP",
                label: "Case Study",
              });
            }),
            setTimeout(function () {
              $("#thanks-message").fadeIn();
            }, 1e3),
            setTimeout(function () {
              $(
                ".section.section_stanley-security #thanks-message a"
              )[0].click();
            }, 4e3),
            $(".stanley-security__form").hide(),
            $(
              ".section.section_stanley-security .main-section-header__wrapper-inner"
            ).css("align-items", "center"),
            $("[data-modal-error-input-stanley-security-name]").hide(),
            $("[data-modal-error-input-stanley-security-surname]").hide(),
            $("[data-modal-error-input-stanley-security-numberofusers]").hide(),
            $("[data-modal-error-input-stanley-security-email]").hide(),
            $("[data-modal-error-input-stanley-security-phone]").hide(),
            $("[data-button-stanley-security]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
function PadresForm() {
  var e = !1,
    t = $.trim($("[data-modal-input-padres-name]").val()) || null,
    n = $.trim($("[data-modal-input-padres-surname]").val()) || null,
    a = $.trim($("[data-modal-input-padres-email]").val()) || null,
    i = $.trim($("[data-modal-input-padres-phone]").val()) || null,
    o = $.trim($("[data-modal-input-padres-numberofusers]").val()) || null;
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-padres-email]").fadeIn(100), (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-padres-name]").fadeIn(100), (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-padres-surname]").fadeIn(100), (e = !0)),
    (o && "null" !== o) ||
      ($("[data-modal-error-input-padres-numberofusers]").fadeIn(100),
      (e = !0)),
    (i && isPhoneValid(i)) ||
      ($("[data-modal-error-input-padres-phone]").fadeIn(100), (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: "padrescasestudy",
      numberofusers: o,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-padres]").attr("disabled", !0);
        },
        success: function (e) {
          segmentIdentifyAndTrack(e.userid, {
            form: getTrackingData(source),
            formLocation: source,
            email: a,
            name: t,
            phone: i,
            howManyUsers: o,
          }),
            legacyAnalytics.identify(e.userid, { email: a }, {}, function () {
              legacyAnalytics.track("Web Form - Padres LP", {
                category: "Web Form - Padres LP",
                label: "Case Study",
              });
            }),
            setTimeout(function () {
              $("#thanks-message").fadeIn();
            }, 1e3),
            setTimeout(function () {
              $(".section.section_padres #thanks-message a")[0].click();
            }, 4e3),
            $(".padres__form").hide(),
            $(
              ".section.section_padres .main-section-header__wrapper-inner"
            ).css("align-items", "center"),
            $("[data-modal-error-input-padres-name]").hide(),
            $("[data-modal-error-input-padres-surname]").hide(),
            $("[data-modal-error-input-padres-numberofusers]").hide(),
            $("[data-modal-error-input-padres-email]").hide(),
            $("[data-modal-error-input-padres-phone]").hide(),
            $("[data-button-padres]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
function WakeForestForm() {
  var e = !1,
    t = $.trim($("[data-modal-input-wakeforest-name]").val()) || null,
    n = $.trim($("[data-modal-input-wakeforest-surname]").val()) || null,
    a = $.trim($("[data-modal-input-wakeforest-email]").val()) || null,
    i = $.trim($("[data-modal-input-wakeforest-phone]").val()) || null,
    o = $.trim($("[data-modal-input-wakeforest-numberofusers]").val()) || null;
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-wakeforest-email]").fadeIn(100), (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-wakeforest-name]").fadeIn(100), (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-wakeforest-surname]").fadeIn(100), (e = !0)),
    (o && "null" !== o) ||
      ($("[data-modal-error-input-wakeforest-numberofusers]").fadeIn(100),
      (e = !0)),
    (i && isPhoneValid(i)) ||
      ($("[data-modal-error-input-wakeforest-phone]").fadeIn(100), (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: "wakeforestcasestudy",
      numberofusers: o,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-wakeforest]").attr("disabled", !0);
        },
        success: function (e) {
          segmentIdentifyAndTrack(e.userid, {
            form: getTrackingData(source),
            formLocation: source,
            email: a,
            name: t,
            phone: i,
            howManyUsers: o,
          }),
            legacyAnalytics.identify(e.userid, { email: a }, {}, function () {
              legacyAnalytics.track("Web Form - Wake Forest LP", {
                category: "Web Form - Wake Forest LP",
                label: "Case Study",
              });
            }),
            setTimeout(function () {
              $("#thanks-message").fadeIn();
            }, 1e3),
            setTimeout(function () {
              $(".section.section_wakeforest #thanks-message a")[0].click();
            }, 4e3),
            $(".wakeforest__form").hide(),
            $(
              ".section.section_wakeforest .main-section-header__wrapper-inner"
            ).css("align-items", "center"),
            $("[data-modal-error-input-wakeforest-name]").hide(),
            $("[data-modal-error-input-wakeforest-surname]").hide(),
            $("[data-modal-error-input-wakeforest-numberofusers]").hide(),
            $("[data-modal-error-input-wakeforest-email]").hide(),
            $("[data-modal-error-input-wakeforest-phone]").hide(),
            $("[data-button-wakeforest]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
function LuluPressForm() {
  var e = !1,
    t = $.trim($("[data-modal-input-lulupress-name]").val()) || null,
    n = $.trim($("[data-modal-input-lulupress-surname]").val()) || null,
    a = $.trim($("[data-modal-input-lulupress-email]").val()) || null,
    i = $.trim($("[data-modal-input-lulupress-phone]").val()) || null,
    o = $.trim($("[data-modal-input-lulupress-numberofusers]").val()) || null;
  if (
    ((a && isEmailValid(a)) ||
      ($("[data-modal-error-input-lulupress-email]").fadeIn(100), (e = !0)),
    (t && isNameValid(t)) ||
      ($("[data-modal-error-input-lulupress-name]").fadeIn(100), (e = !0)),
    (n && isNameValid(n)) ||
      ($("[data-modal-error-input-lulupress-surname]").fadeIn(100), (e = !0)),
    (o && "null" !== o) ||
      ($("[data-modal-error-input-lulupress-numberofusers]").fadeIn(100),
      (e = !0)),
    (i && isPhoneValid(i)) ||
      ($("[data-modal-error-input-lulupress-phone]").fadeIn(100), (e = !0)),
    !e)
  ) {
    var r = "unknown";
    "function" == typeof ga &&
      ga(function (e) {
        r = e.get("clientId");
      });
    var s = {
      name: t + " " + n,
      email: a,
      phone: i,
      source: "lulucasestudy",
      numberofusers: o,
      tracking_id: r,
    };
    -1 !== COUNTRY_CODES.indexOf(country_code) && (s.eu_accepted = "false"),
      $.ajax({
        method: "POST",
        url: "https://api.clickup.com/v1/salesForm",
        data: s,
        beforeSend: function () {
          $("[data-button-lulupress]").attr("disabled", !0);
        },
        success: function (e) {
          segmentIdentifyAndTrack(e.userId, {
            form: getTrackingData(source),
            formLocation: source,
            email: a,
            name: t,
            phone: i,
            howManyUsers: o,
          }),
            legacyAnalytics.identify(e.userId, { email: a }, {}, function () {
              legacyAnalytics.track("Web Form - Lulu Press LP", {
                category: "Web Form - Lulu Press LP",
                label: "Case Study",
              });
            }),
            setTimeout(function () {
              $("#thanks-message").fadeIn();
            }, 1e3),
            setTimeout(function () {
              $(".section.section_lulupress #thanks-message a")[0].click();
            }, 4e3),
            $(".lulupress__form").hide(),
            $(
              ".section.section_lulupress .main-section-header__wrapper-inner"
            ).css("align-items", "center"),
            $("[data-modal-error-input-lulupress-name]").hide(),
            $("[data-modal-error-input-lulupress-surname]").hide(),
            $("[data-modal-error-input-lulupress-numberofusers]").hide(),
            $("[data-modal-error-input-lulupress-email]").hide(),
            $("[data-modal-error-input-lulupress-phone]").hide(),
            $("[data-button-lulupress]").attr("disabled", !1);
        },
        error: function () {},
      });
  }
}
$("[data-search-videos]").keyup(function () {
  var e = $(this).val();
  if ((clearTimeout(timer), e)) {
    $sections_videos.hide();
    var t = $(
      '.videos__list .videos__item .videos__title:contains("' +
        e +
        '"), .videos__list .videos__item .videos__description:contains("' +
        e +
        '")'
    )
      .closest(".videos__list .videos__item")
      .show();
    t.length
      ? ($no_videos.hide(), t.show())
      : ($no_videos.show(),
        (timer = setTimeout(function () {
          var e = $("[data-search-videos]").val();
          formatForSlack(e);
          if (isEmailValid(e))
            return (
              $("body").addClass("is-mail-catcher"),
              $("#intercom-container").css("display", "none"),
              $("[data-input-mail-catcher-step1]").focus().val(e),
              void $("[data-search-videos]").val("")
            );
        }, 3e3)));
  } else $no_videos.hide(), $sections_videos.show();
}),
  ($.expr[":"].contains = $.expr.createPseudo(function (t) {
    return function (e) {
      return 0 <= $(e).text().toUpperCase().indexOf(t.toUpperCase());
    };
  })),
  $("[data-statuses-filter]").on("click", function () {
    var e = $(this).attr("data-statuses-filter");
    $("[data-statuses-filter]").removeClass("active"),
      $(this).addClass("active");
    var t = $(".template-statuses__card-outer");
    return (
      $.each(t, function () {
        $(this).is(".template-statuses__card-outer_" + e)
          ? $(this).addClass("active")
          : $(this).removeClass("active");
      }),
      "content-project" == e
        ? ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-open,.template-statuses__tag-item-idea,.template-statuses__tag-item-creating,.template-statuses__tag-item-formatting,.template-statuses__tag-item-approval,.template-statuses__tag-item-publish,.template-statuses__tag-item-closed"
          ).addClass("active"))
        : "ad-project" == e &&
          ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-open,.template-statuses__tag-item-research,.template-statuses__tag-item-content-creation,.template-statuses__tag-item-running,.template-statuses__tag-item-analysis,.template-statuses__tag-item-done,.template-statuses__tag-item-closed"
          ).addClass("active")),
      "soc-project" == e
        ? ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-open,.template-statuses__tag-item-content-ideas,.template-statuses__tag-item-in-progress,.template-statuses__tag-item-update-requested,.template-statuses__tag-item-approved,.template-statuses__tag-item-revisit,.template-statuses__tag-item-closed"
          ).addClass("active"))
        : "marketing-project" == e &&
          ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-open,.template-statuses__tag-item-writing,.template-statuses__tag-item-approval,.template-statuses__tag-item-update-required,.template-statuses__tag-item-published,.template-statuses__tag-item-closed"
          ).addClass("active")),
      "web-dev-project" == e
        ? ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-visual-design,.template-statuses__tag-item-structure,.template-statuses__tag-item-development,.template-statuses__tag-item-test,.template-statuses__tag-item-launchuses__tag-item-launch"
          ).addClass("active"))
        : "admissions-project" == e &&
          ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-open,.template-statuses__tag-item-in-progress_blue,.template-statuses__tag-item-doing,.template-statuses__tag-item-closed"
          ).addClass("active")),
      "classes-project" == e
        ? ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-open,.template-statuses__tag-item-structure_purple,.template-statuses__tag-item-review,.template-statuses__tag-item-ready,.template-statuses__tag-item-in-use,.template-statuses__tag-item-closed"
          ).addClass("active"))
        : "fundraising-project" == e &&
          ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-prospect,.template-statuses__tag-item-qualified,.template-statuses__tag-item-negotation,.template-statuses__tag-item-contract,.template-statuses__tag-item-client"
          ).addClass("active")),
      "outreach-project" == e
        ? ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-research_v2,.template-statuses__tag-item-approved_v2,.template-statuses__tag-item-denied,.template-statuses__tag-item-final-checks,.template-statuses__tag-item-ready_v2"
          ).addClass("active"))
        : "social-project" == e &&
          ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-content-ideas_v2,.template-statuses__tag-item-in-progress_dark,.template-statuses__tag-item-update-requested_v2,.template-statuses__tag-item-approved,.template-statuses__tag-item-queued"
          ).addClass("active")),
      "vacation-project" == e
        ? ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-open,.template-statuses__tag-item-ideas,.template-statuses__tag-item-planning,.template-statuses__tag-item-booking,.template-statuses__tag-item-closed"
          ).addClass("active"))
        : "activities-project" == e &&
          ($(".template-statuses__tag-item").removeClass("active"),
          $(
            ".template-statuses__tag-item-open,.template-statuses__tag-item-idea_v2,.template-statuses__tag-item-needs-planning,.template-statuses__tag-item-scheduled,.template-statuses__tag-item-closed"
          ).addClass("active")),
      "exercise-project" == e &&
        ($(".template-statuses__tag-item").removeClass("active"),
        $(
          ".template-statuses__tag-item-open,.template-statuses__tag-item-session-1,.template-statuses__tag-item-session-2,.template-statuses__tag-item-session-3,.template-statuses__tag-item-closed"
        ).addClass("active")),
      $.each(t.filter(":visible"), function (e, t) {
        $(t)
          .removeClass("odd even")
          .addClass(e % 2 ? "even" : "odd");
      }),
      !1
    );
  }),
  $("[data-custom-statuses-filter]").on("click", function () {
    var e = $(this).attr("data-custom-statuses-filter");
    $(this).addClass("active").siblings().removeClass("active");
    var t = $(".custom-statuses__card-outer");
    $.each(t, function () {
      $(this).is(".custom-statuses__card-outer_" + e)
        ? $(this).addClass("active")
        : $(this).removeClass("active");
    });
    var n = $(".custom-statuses__header_item");
    return (
      $.each(n, function () {
        $(this).is(".custom-statuses__header_item-" + e)
          ? $(this).addClass("active")
          : $(this).removeClass("active");
      }),
      $.each(t.filter(":visible"), function (e, t) {
        $(t)
          .removeClass("odd even")
          .addClass(e % 2 ? "even" : "odd");
      }),
      !1
    );
  }),
  $(".tabs__statuses_on-body [data-tab-nav]").on(
    "click mouseenter",
    function () {
      $(
        ".custom-statuses__header_item  , .custom-statuses__card-outer , .custom-statuses__tag-item"
      ).removeClass("active"),
        $(
          ".custom-statuses__header_item:nth-child(1) , .custom-statuses__card-outer:nth-child(1) , .custom-statuses__tag-item:nth-child(1)"
        ).addClass("active");
    }
  ),
  $(".infographic__dropdown-link").on("click", function (e) {
    e.preventDefault(),
      $(this)
        .addClass("infographic__dropdown-link_active")
        .siblings()
        .removeClass("infographic__dropdown-link_active"),
      $(".infographic__column.active").removeClass("active"),
      $(this).hasClass("infographic__dropdown-link_monday") &&
        ($(".infographic__column_monday").addClass("active"),
        $("[data-infographic-text]").text("Monday")),
      $(this).hasClass("infographic__dropdown-link_asana") &&
        ($(".infographic__column_asana").addClass("active"),
        $("[data-infographic-text]").text("Asana")),
      $(this).hasClass("infographic__dropdown-link_jira") &&
        ($(".infographic__column_jira").addClass("active"),
        $("[data-infographic-text]").text("Jira")),
      $(this).hasClass("infographic__dropdown-link_smartsheet") &&
        ($(".infographic__column_smartsheet").addClass("active"),
        $("[data-infographic-text]").text("Smartsheet")),
      $(this).hasClass("infographic__dropdown-link_ms-project") &&
        ($(".infographic__column_ms-project").addClass("active"),
        $("[data-infographic-text]").text("MS Project"));
  }),
  $("[data-infographic-change]").on("click", function (e) {
    e.preventDefault();
    var t = $("[data-infographic-dropdown]");
    if (t.hasClass("visible")) t.removeClass("visible");
    else {
      t.addClass("visible");
      var n = !0;
      $(document).on("click", function (e) {
        n ||
          0 !== $(e.target).closest(".visible").length ||
          (t.removeClass("visible"), $(document).unbind("click")),
          (n = !1);
      });
    }
  }),
  $("[data-comparison-page-change]").on("click", function (e) {
    var t = $("[data-comparison-dropdown]");
    if (!t.hasClass("visible")) {
      t.addClass("visible");
      var n = !0;
      $(document).on("click", function (e) {
        n ||
          0 !== $(e.target).closest(".visible").length ||
          (t.removeClass("visible"), $(document).unbind("click")),
          (n = !1);
      });
    }
    e.preventDefault();
  }),
  $(".core-values-slider").each(function () {
    var e = $(this);
    1200 < $(window).width()
      ? e.hasClass("slick-initialized") && e.slick("unslick")
      : e.hasClass("slick-initialized") ||
        e.slick({
          infinite: !0,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: !0,
          centerMode: !0,
          arrows: !0,
          dots: !0,
        });
  }),
  $(window).on("resize orientationchange", function () {
    $(".core-values-slider").each(function () {
      var e = $(this);
      1200 < $(window).width()
        ? e.hasClass("slick-initialized") && e.slick("unslick")
        : e.hasClass("slick-initialized") ||
          e.slick({
            infinite: !0,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: !0,
            centerMode: !0,
            arrows: !0,
            dots: !0,
          });
    });
  }),
  $(".life-at-clickup__slider").slick({
    dots: !1,
    infinite: !0,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: !0,
    responsive: [
      { breakpoint: 1e4, settings: "unslick" },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: !0,
          autoplay: !0,
          autoplaySpeed: 4e3,
          arrows: !0,
          dots: !0,
          adaptiveHeight: !0,
        },
      },
    ],
  }),
  $(window).on("resize orientationchange", function () {
    $(".life-at-clickup__slider").slick({
      dots: !1,
      infinite: !0,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: !0,
      responsive: [
        { breakpoint: 1e4, settings: "unslick" },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            autoplay: !0,
            autoplaySpeed: 4e3,
            arrows: !0,
            dots: !0,
            adaptiveHeight: !0,
          },
        },
      ],
    });
  }),
  $(".milestones__slider, .clickup-process__slider").slick({
    dots: !1,
    infinite: !0,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: !0,
    responsive: [
      { breakpoint: 1e4, settings: "unslick" },
      {
        breakpoint: 1e3,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: !0,
          autoplay: !0,
          autoplaySpeed: 4e3,
          arrows: !1,
          dots: !0,
        },
      },
    ],
  }),
  setInterval(function () {
    makeTimer();
  }, 1e3),
  $(".tabs_checklist-full .tabs__content .tabs__panel").slick({
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: !1,
    centerMode: !0,
    variableWidth: !0,
    responsive: [
      { breakpoint: 1e4, settings: "unslick" },
      { breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }),
  $("[data-shine-circle]").on("click", function (e) {
    $("[data-shine-circle]")
      .next(".img-wrap__item-bubble")
      .removeClass("img-wrap__item-bubble_active"),
      $(this)
        .next(".img-wrap__item-bubble")
        .addClass("img-wrap__item-bubble_active");
  }),
  $("[data-shine-circle]").on(
    "hover",
    function () {
      $(this)
        .next(".img-wrap__item-bubble")
        .addClass("img-wrap__item-bubble_active");
    },
    function () {
      $(this)
        .next(".img-wrap__item-bubble")
        .removeClass("img-wrap__item-bubble_active");
    }
  ),
  "closed" == getCookie("closed") &&
    $("[data-modal-intent]").addClass("dnone", 300),
  "closed_hubspot" == getCookie("closed_hubspot") &&
    ($("#hubspot-banner").addClass("dnone", 300),
    $(".dropdown-menu").css("top", "100px")),
  "closed_funding" == getCookie("closed_funding") &&
    ($("#funding-banner").addClass("dnone", 300),
    $(".dropdown-menu").css("top", "100px")),
  "closed_university" == getCookie("closed_university") &&
    $("#university-banner").addClass("dnone", 300),
  "closed_superbowl" == getCookie("closed_superbowl") &&
    $("#superbowl-banner").addClass("dnone", 300),
  "closed_whiteboards-banner" == getCookie("closed_whiteboards-banner") &&
    $("#whiteboards-banner").addClass("dnone", 300),
  "closed_levelup" == getCookie("closed_levelup") &&
    ($("#levelup-banner").addClass("dnone", 300),
    $(".dropdown-menu").css("top", "100px")),
  !0 === getCookie("clickup-saastr") &&
    $("#saastr-banner").addClass("dnone", 300),
  $("[data-modal]").on("click", function (e) {
    var t = $(this).data("modal");
    if (
      ("makeadeal" == t &&
        (0 !== currency_rate
          ? ($("[data-modal-input-makeadeal-pay]").val(
              parseFloat(
                $("[data-modal-input-makeadeal-pay]").attr("value") *
                  currency_rate
              )
                .toFixed(2)
                .replace(/[0]+$/, "")
                .replace(/[.]+$/, "")
            ),
            $("[data-modal-icon-makeadeal-pay]").text(country_currency.symbol))
          : $("[data-modal-input-makeadeal-pay]").val(
              $("[data-modal-input-makeadeal-pay]").attr("value")
            ),
        $("[data-modal-input-makeadeal-users]").val(
          $("[data-modal-input-makeadeal-users]").attr("value")
        )),
      "nprofdiscount" == t &&
        $("[data-modal-input-nprofdiscount-users]").val(
          $("[data-modal-input-nprofdiscount-users]").attr("value")
        ),
      "key-features" == t &&
        ($("[data-modal-key-features] .modal__content")
          .addClass("features-new__row-item border-0")
          .css("width", "100%"),
        $(this).hasClass("key-features__tag-item_assign-comments")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/assign-comments.html"
            )
          : $(this).hasClass("key-features__tag-item_resolve-comments") &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/resolve-comments.html"
            ),
        $(this).hasClass("key-features__tag-item_recurring-tasks")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/recurring-tasks.html"
            )
          : $(this).hasClass(
              "key-features__tag-item_google-calendar-integration"
            ) &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/google-calendar-integration.html"
            ),
        $(this).hasClass("key-features__tag-item_checklists")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/checklists.html"
            )
          : $(this).hasClass("key-features__tag-item_filter-by-status") &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/filter-by-status.html"
            ),
        $(this).hasClass("key-features__tag-item_sorting")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/sorting.html"
            )
          : $(this).hasClass("key-features__tag-item_custom-assignees") &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/custom-assignees.html"
            ),
        $(this).hasClass("key-features__tag-item_collaboration-detection")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/collaboration-detection.html"
            )
          : $(this).hasClass(
              "key-features__tag-item_image-mockups-comments-tasks"
            ) &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/image-mockups-comments-tasks.html"
            ),
        $(this).hasClass("key-features__tag-item_multiple-assignees")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/multiple-assignees.html"
            )
          : $(this).hasClass(
              "key-features__tag-item_threaded-comments-replies"
            ) &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/threaded-comments-replies.html"
            ),
        $(this).hasClass("key-features__tag-item_multi-task-toolbar")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/multi-task-toolbar.html"
            )
          : $(this).hasClass("key-features__tag-item_rich-editor") &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/rich-editor.html"
            ),
        $(this).hasClass("key-features__tag-item_chrome-extension")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/chrome-extension.html"
            )
          : $(this).hasClass("key-features__tag-item_priority") &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/priority.html"
            ),
        $(this).hasClass("key-features__tag-item_agile-board-view")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/agile-board-view.html"
            )
          : $(this).hasClass("key-features__tag-item_box-view") &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/box-view.html"
            ),
        $(this).hasClass("key-features__tag-item_progress-percentage")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/progress-percentage-gantt.html"
            )
          : $(this).hasClass("key-features__tag-item_hierarchy") &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/hierarchy.html"
            ),
        $(this).hasClass("key-features__tag-item_custom-notifications")
          ? $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/custom-notifications.html"
            )
          : $(this).hasClass("key-features__tag-item_task-mentions") &&
            $("[data-modal-key-features] .modal__content").load(
              "../html/features-new/task-mentions.html"
            )),
      "main-video" == t && $("#video-modal").vimeo("play"),
      "main-feature" == t)
    ) {
      var n = $(this)
          .find(".features-list-v2__img-wrapper img")
          .attr("data-src"),
        a = $(this).find("h4").clone(),
        i = $(this).find("p").clone(),
        o = $(this).find(".features-list-v2__btn-read-more").clone();
      $("#modal-image").attr("src", n),
        $("#modal-title").html(a),
        $("#modal-text").html(i),
        $("#modal-link").html(o),
        "" === $(".features-list-v2__img-wrapper img").attr("data-src") &&
          ($(this).parent(".features-list-v2__item").unbind("click"),
          $(
            "[data-modal-main-feature-overlay] , [data-modal-main-feature]"
          ).addClass("modal-closed"));
    }
    if ("webinar" == t) {
      var r = $(this).attr("data-iframe-src");
      $("[data-modal-webinar] .modal__content [data-iframe-video]").attr(
        "src",
        r
      );
    }
    if ("wistia-video" == t) {
      var s = $(this).attr("data-iframe-src");
      $("[data-modal-wistia-video] .modal__content [data-iframe-video]").attr(
        "src",
        s + "?videoFoam=true&autoPlay=true"
      );
    }
    if ("onboarding-video" == t) {
      var l = $(this).attr("data-iframe-src");
      $(
        "[data-modal-onboarding-video] .modal__content [data-iframe-video]"
      ).attr("src", l + "?playerColor=7b68ee&amp;autoPlay=false");
    }
    return (
      "enterprise" == t &&
        ($("body").removeClass("is-canvas"),
        $("[data-modal-intent]").addClass("dnone"),
        $("[data-modal-intent-overlay]").addClass("modal-closed"),
        $(".is-canvas__before").css("display", "none"),
        $("#intercom-container").css("display", "block"),
        window.mutiny &&
          window.mutiny.client.trackConversion({
            name: "elf-click-open-modal",
          })),
      $("[data-modal-" + t + "-overlay]").removeClass("modal-closed"),
      $("[data-modal-" + t + "]").removeClass("modal-closed"),
      $("[data-modal-" + t + "] input.modal__input_focus").focus(),
      !1
    );
  }),
  $(
    "[data-modal-key-features-overlay] , [data-modal-main-video-overlay] , [data-modal-main-feature-overlay] , [data-modal-intent-overlay] , [data-modal-webinar-overlay], [data-modal-prev-webinar-overlay] ,[data-modal-entoredu-overlay], [data-modal-enterprise-overlay], [data-modal-onboarding-video-overlay], [data-modal-wistia-video-overlay]"
  ).click(function () {
    closeModal();
  }),
  $(
    "[data-modal-key-features] , [data-modal-main-video] , [data-modal-feature-video], [data-modal-wistia-video], [data-modal-onboarding-video]"
  ).on("click", function (e) {
    e.stopPropagation();
  }),
  $("[data-modal-main-video-overlay]").on("click", function () {
    $("#video-modal").vimeo("unload");
  }),
  $("[data-modal-wistia-video-overlay]").on("click", function () {
    $("[data-modal-wistia-video] .modal__content [data-iframe-video]").attr(
      "src",
      ""
    );
  }),
  $(
    "[data-modal-onboarding-video-overlay], [data-modal-onboarding-video] .modal__close"
  ).on("click", function () {
    $("[data-modal-onboarding-video] .modal__content [data-iframe-video]").attr(
      "src",
      ""
    );
  }),
  $(".modal__close").on("click", function () {
    closeModal();
  }),
  $("[data-modal-intent] .modal__close , .modal__close_link").on(
    "click",
    function () {
      closeModal(),
        $("[data-modal-intent]").addClass("dnone", 300),
        setClickUpCookie("closed", "closed", 10);
    }
  ),
  $("[data-modal-intent-input]").on("keyup", function (e) {
    switch (($("[data-modal-intent-error]").hide(), e.keyCode)) {
      case 13:
        intentExit();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-intent-submit]").on("click", intentExit),
  $("[data-modal-input-switching-platform-name]").on("keyup", function (e) {
    switch (e.keyCode) {
      case 13:
        switchingStep1();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-switching1]").on("click", switchingStep1),
  $("[data-modal-input-switching-email]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-switching-email]").hide(), e.keyCode)) {
      case 13:
        switchingStep2();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-switching2]").on("click", switchingStep2),
  $("[data-modal-input-request-feature-email]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-request-feature-email]").hide(), e.keyCode)
    ) {
      case 13:
        requestFeature();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-request-feature]").on("click", requestFeature),
  $("[data-modal-input-entoredu-email]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-entoredu-email]").hide(), e.keyCode)) {
      case 13:
        enterpriseOrEducation();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-entoredu-phone]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-entoredu-phone]").hide(), e.keyCode)) {
      case 13:
        enterpriseOrEducation();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-entoredu-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-entoredu-name]").hide(), e.keyCode)) {
      case 13:
        enterpriseOrEducation();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-entoredu]").on("click", enterpriseOrEducation),
  $("[data-modal-input-education2-email]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-education2-email]").hide(), e.keyCode)
    ) {
      case 13:
        educationFormSubmit();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-education2-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-education2-name]").hide(), e.keyCode)) {
      case 13:
        educationFormSubmit();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-education2-pay]").on("keyup", function (e) {
    switch (e.keyCode) {
      case 48:
        (0 !== $(this).val() && 0 !== $(this).val().charAt(0)) ||
          $(this).val("");
    }
  }),
  $("[data-button-education2]").on("click", educationFormSubmit),
  $("[data-modal-input-makeadeal-email]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-makeadeal-email]").hide(), e.keyCode)) {
      case 13:
        makeadeal();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-makeadeal-phone]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-makeadeal-phone]").hide(), e.keyCode)) {
      case 13:
        makeadeal();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-makeadeal-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-makeadeal-name]").hide(), e.keyCode)) {
      case 13:
        makeadeal();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-makeadeal-pay]").on("keyup", function (e) {
    switch (e.keyCode) {
      case 48:
        (0 !== $(this).val() && 0 !== $(this).val().charAt(0)) ||
          $(this).val("");
    }
  }),
  $("[data-button-makeadeal]").on("click", makeadeal),
  $("[data-modal-input-nprofdiscount-email]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-nprofdiscount-email]").hide(), e.keyCode)
    ) {
      case 13:
        nprodisc();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-nprofdiscount-name]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-nprofdiscount-name]").hide(), e.keyCode)
    ) {
      case 13:
        nprodisc();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-nprofdiscount-pay]").on("keyup", function (e) {
    switch (e.keyCode) {
      case 48:
        (0 !== $(this).val() && 0 !== $(this).val().charAt(0)) ||
          $(this).val("");
    }
  }),
  $("[data-button-nprofdiscount]").on("click", nprodisc),
  $("[data-modal-input-enterprise-email]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-enterprise-email]").hide(), e.keyCode)
    ) {
      case 13:
        salesForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-enterprise-phone]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-enterprise-phone]").hide(), e.keyCode)
    ) {
      case 13:
        salesForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-enterprise-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-enterprise-name]").hide(), e.keyCode)) {
      case 13:
        salesForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-enterprise-surname]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-enterprise-surname]").hide(), e.keyCode)
    ) {
      case 13:
        salesForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-enterprise-numberofusers]").change(function (e) {
    switch (
      ($("[data-modal-error-input-enterprise-numberofusers]").hide(),
      (numberofusers = e.target.value),
      (validSelect = !!numberofusers),
      e.keyCode)
    ) {
      case 13:
        salesForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-enterprise]").on("click", salesForm),
  $("[data-button-enterprise]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-modal-input-casestudy-email]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-casestudy-email]").hide(), e.keyCode)) {
      case 13:
        CaseStudyForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-casestudy-phone]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-casestudy-phone]").hide(), e.keyCode)) {
      case 13:
        CaseStudyForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-casestudy-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-casestudy-name]").hide(), e.keyCode)) {
      case 13:
        CaseStudyForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-casestudy-surname]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-casestudy-surname]").hide(), e.keyCode)
    ) {
      case 13:
        CaseStudyForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-casestudy-numberofusers]").change(function (e) {
    switch (
      ($("[data-modal-error-input-casestudy-numberofusers]").hide(),
      (numberofusers = e.target.value),
      (validSelect = !!numberofusers),
      e.keyCode)
    ) {
      case 13:
        CaseStudyForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-casestudy]").on("click", CaseStudyForm),
  $("[data-button-casestudy]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-modal-input-gartner-email]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-gartner-email]").hide(), e.keyCode)) {
      case 13:
        GartnerForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-gartner-phone]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-gartner-phone]").hide(), e.keyCode)) {
      case 13:
        GartnerForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-gartner-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-gartner-name]").hide(), e.keyCode)) {
      case 13:
        GartnerForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-gartner-surname]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-gartner-surname]").hide(), e.keyCode)) {
      case 13:
        GartnerForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-gartner-numberofusers]").change(function (e) {
    switch (
      ($("[data-modal-error-input-gartner-numberofusers]").hide(),
      (numberofusers = e.target.value),
      (validSelect = !!numberofusers),
      e.keyCode)
    ) {
      case 13:
        GartnerForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-gartner]").on("click", GartnerForm),
  $("[data-button-gartner]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-modal-input-product-management-guide-email]").on(
    "keyup",
    function (e) {
      switch (
        ($("[data-modal-error-input-product-management-guide-email]").hide(),
        e.keyCode)
      ) {
        case 13:
          ProductManagementGuideForm();
          break;
        case 27:
          $(this).val("");
      }
    }
  ),
  $("[data-modal-input-product-management-guide-phone]").on(
    "keyup",
    function (e) {
      switch (
        ($("[data-modal-error-input-product-management-guide-phone]").hide(),
        e.keyCode)
      ) {
        case 13:
          ProductManagementGuideForm();
          break;
        case 27:
          $(this).val("");
      }
    }
  ),
  $("[data-modal-input-product-management-guide-name]").on(
    "keyup",
    function (e) {
      switch (
        ($("[data-modal-error-input-product-management-guide-name]").hide(),
        e.keyCode)
      ) {
        case 13:
          ProductManagementGuideForm();
          break;
        case 27:
          $(this).val("");
      }
    }
  ),
  $("[data-modal-input-product-management-guide-surname]").on(
    "keyup",
    function (e) {
      switch (
        ($("[data-modal-error-input-product-management-guide-surname]").hide(),
        e.keyCode)
      ) {
        case 13:
          ProductManagementGuideForm();
          break;
        case 27:
          $(this).val("");
      }
    }
  ),
  $("[data-modal-input-product-management-guide-numberofusers]").change(
    function (e) {
      switch (
        ($(
          "[data-modal-error-input-product-management-guide-numberofusers]"
        ).hide(),
        (numberofusers = e.target.value),
        (validSelect = !!numberofusers),
        e.keyCode)
      ) {
        case 13:
          ProductManagementGuideForm();
          break;
        case 27:
          $(this).val("");
      }
    }
  ),
  $("[data-button-product-management-guide]").on(
    "click",
    ProductManagementGuideForm
  ),
  $("[data-button-product-management-guide]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-modal-input-vida-health-email]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-vida-health-email]").hide(), e.keyCode)
    ) {
      case 13:
        VidaHealthForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-vida-health-phone]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-vida-health-phone]").hide(), e.keyCode)
    ) {
      case 13:
        VidaHealthForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-vida-health-name]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-vida-health-name]").hide(), e.keyCode)
    ) {
      case 13:
        VidaHealthForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-vida-health-surname]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-vida-health-surname]").hide(), e.keyCode)
    ) {
      case 13:
        VidaHealthForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-vida-health-numberofusers]").change(function (e) {
    switch (
      ($("[data-modal-error-input-vida-health-numberofusers]").hide(),
      (numberofusers = e.target.value),
      (validSelect = !!numberofusers),
      e.keyCode)
    ) {
      case 13:
        VidaHealthForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-vida-health]").on("click", VidaHealthForm),
  $("[data-button-vida-health]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-modal-input-stanley-security-email]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-stanley-security-email]").hide(), e.keyCode)
    ) {
      case 13:
        StanleySecurityForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-stanley-security-phone]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-stanley-security-phone]").hide(), e.keyCode)
    ) {
      case 13:
        StanleySecurityForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-stanley-security-name]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-stanley-security-name]").hide(), e.keyCode)
    ) {
      case 13:
        StanleySecurityForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-stanley-security-surname]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-stanley-security-surname]").hide(), e.keyCode)
    ) {
      case 13:
        StanleySecurityForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-stanley-security-numberofusers]").change(function (e) {
    switch (
      ($("[data-modal-error-input-stanley-security-numberofusers]").hide(),
      (numberofusers = e.target.value),
      (validSelect = !!numberofusers),
      e.keyCode)
    ) {
      case 13:
        StanleySecurityForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-stanley-security]").on("click", StanleySecurityForm),
  $("[data-button-stanley-security]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-modal-input-padres-email]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-padres-email]").hide(), e.keyCode)) {
      case 13:
        PadresForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-padres-phone]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-padres-phone]").hide(), e.keyCode)) {
      case 13:
        PadresForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-padres-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-padres-name]").hide(), e.keyCode)) {
      case 13:
        PadresForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-padres-surname]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-padres-surname]").hide(), e.keyCode)) {
      case 13:
        PadresForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-padres-numberofusers]").change(function (e) {
    switch (
      ($("[data-modal-error-input-padres-numberofusers]").hide(),
      (numberofusers = e.target.value),
      (validSelect = !!numberofusers),
      e.keyCode)
    ) {
      case 13:
        PadresForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-padres]").on("click", PadresForm),
  $("[data-button-padres]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-modal-input-wakeforest-email]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-wakeforest-email]").hide(), e.keyCode)
    ) {
      case 13:
        WakeForestForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-wakeforest-phone]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-wakeforest-phone]").hide(), e.keyCode)
    ) {
      case 13:
        WakeForestForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-wakeforest-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-wakeforest-name]").hide(), e.keyCode)) {
      case 13:
        WakeForestForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-wakeforest-surname]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-wakeforest-surname]").hide(), e.keyCode)
    ) {
      case 13:
        WakeForestForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-wakeforest-numberofusers]").change(function (e) {
    switch (
      ($("[data-modal-error-input-wakeforest-numberofusers]").hide(),
      (numberofusers = e.target.value),
      (validSelect = !!numberofusers),
      e.keyCode)
    ) {
      case 13:
        WakeForestForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-wakeforest]").on("click", WakeForestForm),
  $("[data-button-wakeforest]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-modal-input-lulupress-email]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-lulupress-email]").hide(), e.keyCode)) {
      case 13:
        LuluPressForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-lulupress-phone]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-lulupress-phone]").hide(), e.keyCode)) {
      case 13:
        LuluPressForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-lulupress-name]").on("keyup", function (e) {
    switch (($("[data-modal-error-input-lulupress-name]").hide(), e.keyCode)) {
      case 13:
        LuluPressForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-lulupress-surname]").on("keyup", function (e) {
    switch (
      ($("[data-modal-error-input-lulupress-surname]").hide(), e.keyCode)
    ) {
      case 13:
        LuluPressForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-modal-input-lulupress-numberofusers]").change(function (e) {
    switch (
      ($("[data-modal-error-input-lulupress-numberofusers]").hide(),
      (numberofusers = e.target.value),
      (validSelect = !!numberofusers),
      e.keyCode)
    ) {
      case 13:
        LuluPressForm();
        break;
      case 27:
        $(this).val("");
    }
  }),
  $("[data-button-lulupress]").on("click", LuluPressForm),
  $("[data-button-lulupress]").bind("keydown", function (e) {
    13 == e.keyCode && e.preventDefault();
  }),
  $("[data-ga-click-tracking]").on("click", function () {
    var e = $(this).attr("ga-event"),
      t = $(this).attr("ga-category"),
      n = $(this).attr("ga-label"),
      a = $(this).attr("ga-value"),
      i = $(this).attr("lp-source"),
      o = $(this).attr("mail-label"),
      r = $(this).attr("append-promo"),
      s = $(this).attr("redirect-promo"),
      l = $(this).attr("lp-plan");
    i && (source = i),
      o && (form_label = o),
      r &&
        $(".mail-catcher-form").append(
          "<div class='mail-catcher-form__descr'>Already a ClickUp user? Log in to your account, click UPGRADE, and use promo code <strong>" +
            r +
            "</strong></div>"
        ),
      s && (stored_promo = s),
      l && (planType = l),
      console.log(
        "GA",
        { event: e, category: t, label: n, value: a },
        {
          lp_source: i,
          mail_label: o,
          append_promo: r,
          redirect_promo: s,
          lp_plan: l,
        }
      ),
      legacyAnalytics.track(e, { category: t, label: n, value: a });
  }),
  $("[data-notepad-install]").on("click", function () {
    var e = !1;
    legacyAnalytics.track(
      "Notepad install click",
      { category: "Notepad install click", label: "", value: "" },
      {},
      function () {
        (e = !0),
          (window.location.href =
            "https://chrome.google.com/webstore/detail/clickup-tasks-screenshots/pliibjocnfmkagafnbkfcimonlnlpghj");
      }
    ),
      setTimeout(function () {
        e ||
          (window.location.href =
            "https://chrome.google.com/webstore/detail/clickup-tasks-screenshots/pliibjocnfmkagafnbkfcimonlnlpghj");
      }, 1e3);
  });
var noop = function () {},
  legacyAnalytics = {
    track: function (e, t, n, a) {
      a = a || noop;
      try {
        if ("Email Acquired" === e) {
          var i =
            "https:" == document.location.protocol
              ? "https://ct.capterra.com"
              : "http://ct.capterra.com";
          !(function () {
            var e = document.createElement("script");
            (e.type = "text/javascript"),
              (e.async = !0),
              (e.src =
                i +
                "/capterra_tracker.js?vid=2111251&vkey=0c7a82619ea6705e858a8a5aeae2d2ce");
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
          })(),
            fbq("track", "Lead");
        }
        gtag("event", e, {
          event_category: t.category ? t.category : null,
          event_label: t.label ? t.label : null,
          value: t.value ? t.value : null,
          event_callback: a,
        });
      } catch (e) {
        a();
      }
    },
    identify: function (e, t, n, a) {
      try {
        gtag("config", "UA-87708648-1", { user_id: e });
      } catch (e) {}
      a();
    },
  };
$("[data-tab-pricing-nav]").on("click", function () {
  switch ($(this).attr("data-price-plan")) {
    case "yearly":
      legacyAnalytics.track("Yearly price unlimited clicked", {
        category: "Price navigation",
        label: "",
        value: "",
      }),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "ga-event",
          "Free trial click"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "ga-category",
          "Free trial button"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "ga-label",
          "pricing unlimited yearly"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "lp-source",
          "pricingProfessionalTrial"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "mail-label",
          "pricing unlimited yearly"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "lp-plan",
          "unlimited"
        );
      break;
    case "monthly":
      legacyAnalytics.track("Monthly price unlimited clicked", {
        category: "Price navigation",
        label: "",
        value: "",
      }),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "ga-event",
          "Free trial click"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "ga-category",
          "Free trial button"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "ga-label",
          "pricing unlimited monthly"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "lp-source",
          "pricingProfessionalTrial"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "mail-label",
          "pricing unlimited monthly"
        ),
        $(".pricing-plan_best [data-pricing-btn-ga]").attr(
          "lp-plan",
          "unlimited"
        );
      break;
    case "yearly-b":
      legacyAnalytics.track("Yearly price business clicked", {
        category: "Price navigation",
        label: "",
        value: "",
      }),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "ga-event",
          "Free trial click"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "ga-category",
          "Free trial button"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "ga-label",
          "pricing business yearly"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "lp-source",
          "pricingBusinessTrial"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "mail-label",
          "pricing business yearly"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "lp-plan",
          "business"
        );
      break;
    case "monthly-b":
      legacyAnalytics.track("Monthly price business clicked", {
        category: "Price navigation",
        label: "",
        value: "",
      }),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "ga-event",
          "Free trial click"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "ga-category",
          "Free trial button"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "ga-label",
          "pricing business monthly"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "lp-source",
          "pricingBusinessTrial"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "mail-label",
          "pricing business monthly"
        ),
        $(".pricing-plan_business [data-pricing-btn-ga]").attr(
          "lp-plan",
          "business"
        );
      break;
    case "yearly-e":
      legacyAnalytics.track("Yearly price enterprise clicked", {
        category: "Price navigation",
        label: "",
        value: "",
      }),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "ga-event",
          "Free trial click"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "ga-category",
          "Free trial button"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "ga-label",
          "pricing enterprise yearly"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "lp-source",
          "pricingEnterpriseTrial"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "mail-label",
          "pricing enterprise yearly"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "lp-plan",
          "enterprise"
        );
      break;
    case "monthly-e":
      legacyAnalytics.track("Monthly price enterprise clicked", {
        category: "Price navigation",
        label: "",
        value: "",
      }),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "ga-event",
          "Free trial click"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "ga-category",
          "Free trial button"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "ga-label",
          "pricing enterprise monthly"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "lp-source",
          "pricingEnterpriseTrial"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "mail-label",
          "pricing enterprise monthly"
        ),
        $(".pricing-plan_enterprise [data-pricing-btn-ga]").attr(
          "lp-plan",
          "enterprise"
        );
  }
}),
  $("[data-calendly]").on("click", function () {
    $(".nav-toggle").addClass("nav-toggle_hide"),
      $("#intercom-container").css("display", "none");
  }),
  $(document).on(
    "click",
    ".calendly-popup-close, .calendly-close-overlay",
    function () {
      $(".nav-toggle").removeClass("nav-toggle_hide"),
        $("#intercom-container").css("display", "block");
    }
  );
var timerIntercomLauncher = setInterval(function () {
  !0 !== document.getElementById("intercom-container") &&
    (clearInterval(timerIntercomLauncher),
    $(".intercom-launcher-frame")
      .contents()
      .find(".intercom-launcher")
      .on("click", function (e) {
        $(e.delegateTarget).is(".intercom-launcher-active") ||
          legacyAnalytics.track("Intercom conversion click", {
            category: "Intercom conversion start",
            label: "footer button",
            value: "",
          });
      }));
}, 100);
function checkForV2Url() {
  window.location.href.includes("v2=true") &&
    setClickUpCookie("landingPageV2", !0, 1);
}
function checkForUtmMediumUrl() {
  window.location.href.includes("utm_medium=cpc") &&
    setCookieTopBanner("clickup-saastr", !0, 10);
}
function checkForUtmClientUrl() {
  var a = window.location.href;
  if (a.includes("careers/change-your-life , utm_"));
  if (
    ($(".btn_open-client").on("click", function (e) {
      var t, n;
      e.preventDefault(),
        (t = a.split("?")[1]),
        (n = (n =
          "https://clickup.com/careers/customer-support-specialist?").concat(
          t
        )),
        window.open(n);
    }),
    a.includes("careers/customer-support-specialist , utm_"))
  );
  $(".btn_open-client-dev").on("click", function (e) {
    var t, n;
    e.preventDefault(),
      (t = a.split("?")[1]),
      (n = (n =
        "https://dev-forms.clickup.com/f/ad-4385/ZBUEKNZ8ELMRAY7OMH?").concat(
        t
      )),
      window.open(n);
  });
}
function checkForUtmUrl() {
  var e = window.location.href;
  e.includes("utm_") &&
    setClickUpCookie("utmCookie", e + ("&utm_date=" + new Date().getTime()), 1);
}
function checkProductHunt() {
  var e = window.location.href;
  if (e.includes("?ref=producthunt")) {
    e = e.split("?")[0];
    var t = getCookie("utmCookie");
    (e += "?utm_source=producthunt&utm_campaign=producthunt"),
      (e += "&utm_date=" + new Date().getTime()),
      setClickUpCookie("utmCookie", t ? e + t : e, 1);
  }
}
function setCookieBanner(e, t, n) {
  try {
    $("#cookies__banner").css("display", "none");
    var a = new Date();
    a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
    var i = "expires=" + a.toUTCString();
    document.cookie = e + "=" + t + ";" + i + ";path=/";
  } catch (e) {
    console.error("setCookieBanner error:", e);
  }
}
function setCookieTopBanner(e, t, n) {
  try {
    $("#saastr-banner").css("display", "none");
    var a = new Date();
    a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
    var i = "expires=" + a.toUTCString();
    document.cookie = e + "=" + t + ";" + i + ";path=/";
  } catch (e) {
    console.error("setCookieTopBanner error:", e);
  }
}
function getCookie(e) {
  try {
    for (
      var t = e + "=", n = document.cookie.split(";"), a = 0;
      a < n.length;
      a++
    ) {
      for (var i = n[a]; " " == i.charAt(0); ) i = i.substring(1);
      if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
    }
    return "";
  } catch (e) {
    console.error("getCookie error:", e);
  }
}
function addCookieBanner() {
  $("#cookies__banner").css("display", "flex"),
    $(".cookies__banner-button").on("click", function (e) {
      setCookieBanner("clickup-cookies", "true", 365);
    }),
    $(".cookies__close").on("click", function (e) {
      setCookieBanner("clickup-cookies", "true", 365);
    });
}
document.addEventListener("contextmenu", function (e) {
  if ("IMG" === e.target.nodeName)
    return e.stopPropagation(), e.preventDefault(), !1;
}),
  [].forEach.call(document.querySelectorAll("img"), function (e) {
    e.setAttribute("draggable", !1);
  }),
  (window.mobilecheck = function () {
    var e,
      t = !1;
    return (
      (e = navigator.userAgent || navigator.vendor || window.opera),
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        e
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          e.substr(0, 4)
        )) &&
        (t = !0),
      t
    );
  }),
  $(".modal-wish").each(function () {
    var n = jQuery(this),
      a = n.find('input[type="number"]'),
      e = n.find(".modal-updown_up"),
      t = n.find(".modal-updown_down"),
      i = a.attr("min"),
      o = a.attr("max");
    e.click(function () {
      var e,
        t = parseFloat(a.val());
      (e = o <= t ? t : t + 1),
        n
          .find("input")
          .val(e.toFixed(2).replace(/[0]+$/, "").replace(/[.]+$/, "")),
        n.find("input").trigger("change");
    }),
      t.click(function () {
        var e,
          t = parseFloat(a.val());
        (e = t <= i ? t : t - 1),
          n
            .find("input")
            .val(e.toFixed(2).replace(/[0]+$/, "").replace(/[.]+$/, "")),
          n.find("input").trigger("change");
      });
  }),
  checkForV2Url(),
  checkForUtmMediumUrl(),
  checkForUtmClientUrl(),
  checkForUtmUrl(),
  checkProductHunt();
var hasCookie = getCookie("clickup-cookies");
function addCookieTopBanner() {
  $("#saastr-banner").css("display", "flex"),
    $(".saastr-vip__close-btn").on("click", function (e) {
      e.stopPropagation(),
        $("#saastr-banner").addClass("dnone", 300),
        setCookieTopBanner("clickup-saastr", !0, 10);
    });
}
if (
  ("" === hasCookie &&
    -1 !== COUNTRY_CODES.indexOf(country_code) &&
    addCookieBanner(),
  (hasCookie = getCookie("clickup-saastr")),
  "RU" === country_code)
) {
  var helpForRussian = setInterval(function () {
    findAndRemoveBlockedUrls();
  }, 1e3);
  function stopHelpForRussian() {
    clearInterval(helpForRussian);
  }
  function findAndRemoveBlockedUrls() {
    for (
      var e = document.getElementsByTagName("script"), t = e.length, n = 0;
      n < t;
      n++
    )
      if (0 < e[n].src.search("linkedin.com")) {
        e[n].remove(), stopHelpForRussian();
        break;
      }
  }
}
function metaImagesSetup(e) {
  var t, n, a;
  e || (e = "home"),
    $('meta[property="og:image"]').length ||
      $('meta[name="twitter:image"]').length ||
      $('meta[itemprop="image"]').length ||
      ((t = null),
      (n = ""),
      (a = "https://clickup.com/landingassets/images/logo_on-purple_vert.png"),
      $.ajax({
        url: "../static/meta-images.json",
        dataType: "json",
        async: !1,
        success: function (e) {
          t = e;
        },
      }),
      (n =
        t && t.hasOwnProperty(e)
          ? "https://clickup.com/landingassets/images/" + t[e]
          : "https://clickup.com/landingassets/images/meta/" + e + ".png"),
      $("head").append('<meta itemprop="image" content="' + a + '" />'),
      $("head").append('<meta property="og:image" content="' + a + '" />'),
      $("head").append('<meta name="twitter:image" content="' + a + '" />'),
      $.ajax({
        url: n,
        async: !0,
        type: "HEAD",
        success: function () {
          $('meta[property="og:image"]').attr("content", n),
            $('meta[name="twitter:image"]').attr("content", n),
            $('meta[itemprop="image"]').attr("content", n);
        },
      }));
}
function formatForSlack(e) {
  var t = { text: e };
  return JSON.stringify(t);
}
function getText(e) {
  return (
    (translations && translations.hasOwnProperty(e) && translations[e]) || e
  );
}
function loadGifs(e) {
  var t = new IntersectionObserver(function (e, n) {
    e.forEach(function (e) {
      if (e.isIntersecting) {
        var t = e.target;
        (t.src = t.dataset.src), t.classList.add("loaded"), n.unobserve(t);
      }
    });
  });
  e.forEach(function (e) {
    t.observe(e);
  });
}
if (
  (COUNTRY_CODES.indexOf(country_code) && $(".show-for__eu").show(),
  $("[data-button-video-component]").on("click", function (e) {
    e.preventDefault(),
      $(this).addClass("video-component__poster_active"),
      $(
        ".checklists-video-section__image , .video-component__arrow , .video-component__text"
      ).css("display", "none");
    var t = $(this)
      .closest(".video-component")
      .find("[data-iframe-video-component]");
    t.attr("src", t.data("src")).vimeo("play");
  }),
  $("[data-button-video-component-youtube]").on("click", function (e) {
    e.preventDefault(), $(this).addClass("video-component__poster_active");
  }),
  document.querySelectorAll('img[data-src$=".gif"]'))
) {
  var lazyImages = document.querySelectorAll("img[data-src$='.gif']");
  loadGifs(lazyImages);
}
function loadVideos(e) {
  var t = new IntersectionObserver(function (e, a) {
    e.forEach(function (e) {
      if (e.isIntersecting) {
        for (var t in e.target.children) {
          var n = e.target.children[t];
          "string" == typeof n.tagName &&
            "SOURCE" === n.tagName &&
            (n.src = n.dataset.src);
        }
        e.target.load(),
          e.target.classList.add("loaded"),
          a.unobserve(e.target);
      }
    });
  });
  e.forEach(function (e) {
    t.observe(e);
  });
}
if (document.querySelectorAll("video.lazy, video.lazy-loading")) {
  var lazyVideos = document.querySelectorAll("video.lazy, video.lazy-loading");
  loadVideos(lazyVideos);
}
if (
  ((function () {
    if (window.location.href.split("?")[0].toString().includes("enterprise")) {
      var e = new Date();
      e.setTime(e.getTime() + 6048e5);
      var t = "expires=" + e.toUTCString();
      document.cookie = "visited_enterprise=true;" + t + ";path=/";
    }
  })(),
  document.getElementById("calculator"))
) {
  var AVERAGE_SALARY = 104561,
    WORK_HOURS_IN_YEAR = 1768,
    WORK_DAYS_IN_YEAR = WORK_HOURS_IN_YEAR / 8,
    WORK_WEEKS_IN_YEAR = WORK_DAYS_IN_YEAR / 5,
    EMAIL_HOURS_SAVED = 0.75,
    MEETING_HOURS_SAVED = 0.5,
    SEARCHING_HOURS_SAVED = 0.5,
    REPORTING_HOURS_SAVED = 0.2;
  function currentHoursAnnually() {
    var e = document.getElementById("email-hours"),
      t = document.getElementById("meeting-hours"),
      n = document.getElementById("searching-hours"),
      a = document.getElementById("reporting-hours"),
      i = document.getElementById("Number_of_Users__c");
    return (
      (currentTeamSize = i && i.value ? parseInt(i.value) : 1),
      (parseInt(e.value) +
        parseInt(t.value) +
        parseInt(n.value) +
        parseInt(a.value)) *
        currentTeamSize *
        WORK_WEEKS_IN_YEAR
    );
  }
  function hoursSavedWeekly() {
    var e = document.getElementById("email-hours"),
      t = document.getElementById("meeting-hours"),
      n = document.getElementById("searching-hours"),
      a = document.getElementById("reporting-hours"),
      i =
        parseInt(e.value) +
        parseInt(t.value) +
        parseInt(n.value) +
        parseInt(a.value),
      o =
        parseInt(e.value) * EMAIL_HOURS_SAVED +
        parseInt(t.value) * MEETING_HOURS_SAVED +
        parseInt(n.value) * SEARCHING_HOURS_SAVED +
        parseInt(a.value) * REPORTING_HOURS_SAVED,
      r = Math.round(10 * (i - o)) / 10;
    return (document.querySelector("#saved-hours").innerText = r + "h"), r;
  }
  function hoursWithClickUpAnnually() {
    var e = document.getElementById("email-hours"),
      t = document.getElementById("meeting-hours"),
      n = document.getElementById("searching-hours"),
      a = document.getElementById("reporting-hours"),
      i = document.getElementById("Number_of_Users__c"),
      o = i && i.value ? parseInt(i.value) : 1,
      r = parseInt(e.value),
      s = parseInt(t.value),
      l = parseInt(n.value),
      c = parseInt(a.value);
    return (
      WORK_WEEKS_IN_YEAR *
      o *
      (r * EMAIL_HOURS_SAVED +
        s * MEETING_HOURS_SAVED +
        l * SEARCHING_HOURS_SAVED +
        c * REPORTING_HOURS_SAVED)
    );
  }
  function calculateHoursSaved() {
    var e = document.getElementById("hours-saved"),
      t = Math.round(currentHoursAnnually() - hoursWithClickUpAnnually()),
      n = abbreviateNumbers(t);
    return (e.innerText = n + "h"), t;
  }
  function calculateCostSavings() {
    var e = document.getElementById("dollars-saved"),
      t = AVERAGE_SALARY / WORK_HOURS_IN_YEAR,
      n = calculateHoursSaved(),
      a = Math.round(t * n),
      i = abbreviateNumbers(a);
    return (e.innerText = "$" + i), a;
  }
  function abbreviateNumbers(e) {
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(e);
  }
  function buildWeeklyTimeChart() {
    var e = document.getElementById("email-hours"),
      t = document.getElementById("meeting-hours"),
      n = document.getElementById("searching-hours"),
      a = document.getElementById("reporting-hours");
    null != window.charBefore && window.charBefore.destroy();
    var i = {
      type: "bar",
      data: {
        labels: [
          ["Hour spent", "in email"],
          ["Hour spent", "in meetings"],
          ["Hour spent", "gathering info"],
          ["Hour spent", "creating reports"],
        ],
        datasets: [
          {
            label: "Without ClickUp",
            backgroundColor: "#E5E5E5",
            borderColor: "#E5E5E5",
            borderRadius: 5,
            data: [
              parseInt(e.value),
              parseInt(t.value),
              parseInt(n.value),
              parseInt(a.value),
            ],
          },
          {
            label: "With ClickUp",
            backgroundColor: "#7B68EE",
            borderColor: "#7B68EE",
            borderRadius: 5,
            data: [
              Math.round(parseInt(e.value) * EMAIL_HOURS_SAVED * 10) / 10,
              Math.round(parseInt(t.value) * MEETING_HOURS_SAVED * 10) / 10,
              Math.round(parseInt(n.value) * SEARCHING_HOURS_SAVED * 10) / 10,
              Math.round(parseInt(a.value) * REPORTING_HOURS_SAVED * 10) / 10,
            ],
          },
        ],
      },
      options: {
        aspectRatio: 1,
        responsive: !0,
        maintainAspectRatio: !1,
        scales: {
          y: {
            beginAtZero: !0,
            ticks: { display: !1, stepSize: 1 },
            grid: {
              borderColor: "rgba(0,0,0,0)",
              color: "#E2E7E7",
              borderDash: [6, 6],
              drawTicks: !1,
              display: !0,
              drawOnChartArea: !0,
            },
          },
          x: {
            beginAtZero: !0,
            ticks: {
              display: !0,
              maxRotation: 0,
              minRotation: 0,
              fontSize: 11,
              fontColor: "rgb(41, 45, 52, 0.4)",
              fontFamily: "Axiforma",
              padding: 17,
            },
            grid: {
              borderColor: "#E2E7E7",
              drawTicks: !1,
              drawOnChartArea: !1,
            },
          },
        },
        animation: !1,
        categoryPercentage: 0.5,
        barPercentage: 0.5,
        plugins: {
          legend: { display: !1 },
          title: { display: !1 },
          tooltip: {
            xAlign: "center",
            yAlign: "bottom",
            callbacks: {
              title: function () {
                return null;
              },
              label: function (e) {
                return e.dataset.label + ": " + e.formattedValue + "h";
              },
            },
          },
        },
      },
    };
    window.charBefore = new Chart(
      document.getElementById("myChartTimeSpentOnActivities"),
      i
    );
  }
  function buildTotalSavingsChart() {
    var e = document.getElementById("Number_of_Users__c");
    null != window.totalSavingsChart && window.totalSavingsChart.destroy();
    var t = {
      type: "bar",
      data: {
        labels: [["% of Hours and", "Budget Saved"]],
        datasets: [
          {
            backgroundColor: "#00B884",
            borderColor: "#00B884",
            borderRadius: 11,
            data: [
              calculateHoursSaved() /
                (WORK_HOURS_IN_YEAR * (e && e.value ? parseInt(e.value) : 1)),
            ],
          },
        ],
      },
      options: {
        aspectRatio: 0.25,
        responsive: !0,
        maintainAspectRatio: !1,
        scales: {
          y: {
            beginAtZero: !0,
            ticks: { display: !1, stepSize: 0.1 },
            grid: {
              borderColor: "rgba(0,0,0,0)",
              color: "#E2E7E7",
              borderDash: [6, 6],
              drawTicks: !1,
              display: !0,
              drawOnChartArea: !0,
            },
          },
          x: {
            beginAtZero: !0,
            ticks: {
              display: !0,
              maxRotation: 0,
              minRotation: 0,
              fontSize: 11,
              fontColor: "rgb(41, 45, 52, 0.4)",
              fontFamily: "Axiforma",
              padding: 17,
            },
            grid: {
              borderColor: "#E2E7E7",
              drawTicks: !1,
              drawOnChartArea: !1,
              tickWidth: 10,
            },
          },
        },
        animation: !1,
        tooltips: { display: !1, titleFontSize: 0, bodyFontSize: 0 },
        categoryPercentage: 0.35,
        barPercentage: 1,
        plugins: {
          legend: { display: !1 },
          tooltip: {
            xAlign: "center",
            yAlign: "bottom",
            displayColors: !1,
            callbacks: {
              title: function () {
                return null;
              },
              label: function (e) {
                return abbreviateNumbers(100 * e.raw) + "%";
              },
            },
          },
          title: { display: !1 },
        },
      },
    };
    window.totalSavingsChart = new Chart(
      document.getElementById("myChartTotalSavings"),
      t
    );
  }
  function submitCalculatorFormInfo() {
    document.querySelector("#mktoForm_1089 .mktoButton").click();
  }
  window.addEventListener("DOMContentLoaded", currentHoursAnnually),
    window.addEventListener("change", currentHoursAnnually),
    window.addEventListener("DOMContentLoaded", hoursSavedWeekly),
    window.addEventListener("change", hoursSavedWeekly),
    window.addEventListener("DOMContentLoaded", hoursWithClickUpAnnually),
    window.addEventListener("change", hoursWithClickUpAnnually),
    window.addEventListener("DOMContentLoaded", calculateHoursSaved),
    window.addEventListener("change", calculateHoursSaved),
    window.addEventListener("DOMContentLoaded", calculateCostSavings),
    window.addEventListener("change", calculateCostSavings),
    window.addEventListener("DOMContentLoaded", buildWeeklyTimeChart),
    window.addEventListener("change", buildWeeklyTimeChart),
    window.addEventListener("DOMContentLoaded", buildTotalSavingsChart),
    window.addEventListener("change", buildTotalSavingsChart);
  var calculateSavingsBtn = document.querySelector("#calculateSavingsBtn");
  function callAllChangeEvents() {
    currentHoursAnnually(),
      hoursWithClickUpAnnually(),
      calculateCostSavings(),
      buildWeeklyTimeChart(),
      buildTotalSavingsChart(),
      hoursSavedWeekly(),
      addMarketingNotes();
  }
  calculateSavingsBtn.addEventListener("click", submitCalculatorFormInfo);
  var numInputs = document.querySelectorAll("input[type=number]");
  function inc(e, t) {
    var n = document.getElementById(e);
    (n.value = parseInt(n.value) + t), callAllChangeEvents();
  }
  function dec(e, t) {
    var n = document.getElementById(e);
    0 < parseInt(n.value) && (n.value = parseInt(n.value) - t),
      callAllChangeEvents();
  }
  function validate(e) {
    var t = e || window.event,
      n = t.keyCode || t.which;
    n = String.fromCharCode(n);
    /[0-9]/.test(n) ||
      ((t.returnValue = !1), t.preventDefault && t.preventDefault());
  }
  function addMarketingNotes() {
    document.querySelector('#calculator-form [name="Marketing_Notes__c"]') &&
      (document.querySelector(
        '#calculator-form [name="Marketing_Notes__c"]'
      ).value =
        "STEP 1 - FORM INPUTS | Checking Email: " +
        document.querySelector("#email-hours").value +
        ", In Meetings: " +
        document.querySelector("#meeting-hours").value +
        ", Gathering Info: " +
        document.querySelector("#searching-hours").value +
        ", Creating Reports: " +
        document.querySelector("#reporting-hours").value);
  }
  numInputs.forEach(function (e) {
    e.addEventListener("change", function (e) {
      "" === e.target.value && (e.target.value = 1);
    });
  });
}
function closeNavExpanded() {
  var e = document.querySelector(".navigation__link[aria-expanded='true']");
  e &&
    (document.querySelector(".header").classList.remove("is-expanded"),
    document
      .querySelector(".navigation__list")
      .style.setProperty("--nav-background-height", 0),
    e.setAttribute("aria-expanded", "false"),
    e.parentElement
      .querySelectorAll(".navigation__dropdown-link")
      .forEach(function (e) {
        e.setAttribute("tabindex", -1);
      }),
    document.removeEventListener("click", handleClickCloseNavExpanded),
    document.removeEventListener("keyup", handleKeyCloseNavExpanded));
}
function openNavExpanded(e) {
  e &&
    (document.querySelector(".header").classList.add("is-expanded"),
    document
      .querySelector(".navigation__list")
      .style.setProperty(
        "--nav-background-height",
        Math.floor(e.nextElementSibling.getBoundingClientRect().height + 100)
      ),
    e.setAttribute("aria-expanded", "true"),
    e.parentElement
      .querySelectorAll(".navigation__dropdown-link")
      .forEach(function (e) {
        e.setAttribute("tabindex", 0);
      }),
    document.addEventListener("click", handleClickCloseNavExpanded),
    document.addEventListener("keyup", handleKeyCloseNavExpanded));
}
function setNavExpanded(e) {
  var t =
      document.querySelector(".navigation__link[aria-expanded='true']") || !1,
    n = e.getAttribute("aria-expanded") || !1;
  if ((t && closeNavExpanded(), n && "false" === n)) return openNavExpanded(e);
}
function handleMainNavDropdown(e) {
  var t = e.target.closest(".navigation__link"),
    n = t.getAttribute("aria-expanded") || !1,
    a = t.getBoundingClientRect(),
    i = document.querySelector(".navigation__list");
  i.style.setProperty("--indicator-scale", Math.ceil(a.width + 20)),
    i.style.setProperty(
      "--indicator-position",
      Math.ceil(a.x - i.getBoundingClientRect().x - 10)
    ),
    "false" === t.getAttribute("aria-expanded") && setNavExpanded(t),
    (!n || ("click" === e.type && "true" === n)) && closeNavExpanded();
}
function handleKeyCloseNavExpanded(e) {
  if ("Escape" === e.code) {
    var t =
      document.querySelector(".navigation__link[aria-expanded='true']") || !1;
    t && t.focus(), closeNavExpanded();
  }
}
function handleClickCloseNavExpanded(e) {
  e.target.closest(".navigation__list") || closeNavExpanded();
}
function initV4Nav() {
  if (
    document.querySelector(".header-v2022") &&
    document.querySelector(".navigation__link[aria-haspopup]")
  ) {
    for (
      var e = document.querySelectorAll(
          ".navigation__list-item .navigation__link"
        ),
        t = 0;
      t < e.length;
      t++
    )
      e[t].addEventListener("mouseenter", handleMainNavDropdown),
        e[t].addEventListener("click", handleMainNavDropdown);
    var n = document.querySelectorAll(".navigation__dropdown-link");
    for (t = 0; t < n.length; t++) n[t].setAttribute("tabindex", -1);
    document
      .querySelector(".navigation__list")
      .addEventListener("mouseleave", function () {
        document.activeElement.blur(), closeNavExpanded();
      });
  }
}
function isLocalStorageNameSupported() {
  var e = window.localStorage;
  try {
    return e.setItem("test", "1"), e.removeItem("test"), !0;
  } catch (e) {
    return !1;
  }
}
function isOlderThan24Hours(e) {
  return 864e5 < new Date() - new Date(e);
}
function renderBlogPosts(a) {
  document.querySelector(a.area) &&
    document.querySelector(a.template) &&
    document.querySelector(a.child) &&
    (document
      .querySelector(a.area)
      .querySelectorAll(a.child)
      .forEach(function (e, t) {
        (a.skipChild && t <= a.skipChild - 1) || (e.style.display = "none");
      }),
    a.posts.forEach(function (e, t) {
      var n = document.querySelector(a.template).content.cloneNode(!0);
      a.isMobile && 0 === t && n.querySelector("li").classList.add("no-border"),
        (n.querySelector("a").href = e.url),
        (n.querySelector("img").src = e.img),
        (n.querySelector("img").alt = e.title),
        (n.querySelector("img").nextElementSibling.innerHTML = e.title),
        document.querySelector(a.area).appendChild(n);
    }));
}
function updateLatestBlogPosts() {
  if (document.querySelector(".header-v2022") && isLocalStorageNameSupported) {
    var e = JSON.parse(window.localStorage.getItem("cuLatestPosts"));
    if (e && e.posts && 3 === e.posts.length && !isOlderThan24Hours(e.updated))
      return (
        console.log("Render from cache", e),
        renderBlogPosts({
          posts: e.posts,
          template: "#latest-from-blog-list-item",
          area: "#latest-from-blog-list",
          child: ".navigation__dropdown-item",
          skipChild: !1,
          isMobile: !1,
        }),
        void renderBlogPosts({
          posts: e.posts,
          template: "#mobile-nav-blog-post-template",
          area: "#mobile-nav-blog-posts",
          child: ".mobile-nav-blog-post",
          skipChild: !1,
          isMobile: !0,
        })
      );
    try {
      var t =
        "clickup.com" === window.location.host
          ? "/blog/wp-content/uploads/recent-posts.json"
          : "";
      if (!t) return;
      fetch(t)
        .then(function (e) {
          if (e.ok) return e.json();
        })
        .then(function (e) {
          e &&
            e.posts &&
            (window.localStorage.setItem(
              "cuLatestPosts",
              JSON.stringify({ updated: new Date(), posts: e.posts })
            ),
            renderBlogPosts({
              posts: e.posts,
              template: "#latest-from-blog-list-item",
              area: "#latest-from-blog-list",
              child: ".navigation__dropdown-item",
              skipChild: !1,
              isMobile: !1,
            }),
            renderBlogPosts({
              posts: e.posts,
              template: "#mobile-nav-blog-post-template",
              area: "#mobile-nav-blog-posts",
              child: ".mobile-nav-blog-post",
              skipChild: !1,
              isMobile: !0,
            }));
        });
    } catch (e) {
      return void console.error(e);
    }
  }
}
initV4Nav(),
  updateLatestBlogPosts(),
  $(document).ready(function () {
    MktoForms2.whenReady(function (e) {
      var t = e.getId();
      function n() {
        var e = $("#Lblmarketable", "#mktoForm_" + t);
        e &&
          e.closest(".mktoFieldWrap").addClass("mktoFieldWrap--has-checkbox");
      }
      $("label.mktoLabel", "#mktoForm_" + t).each(function () {
        0 <
        $(this)
          .parent(".mktoFieldWrap")
          .find("input[type=email], input[type=text], input[type=date]").length
          ? $(this).addClass("textbox")
          : 0 < $(this).parent(".mktoFieldWrap").find("select").length
          ? $(this).addClass("dropdown")
          : 0 <
            $(this).parent(".mktoFieldWrap").find("input[type=radio]").length
          ? $(this).addClass("radiobutton")
          : 0 <
            $(this).parent(".mktoFieldWrap").find("input[type=checkbox]").length
          ? $(this).addClass("checkbox")
          : 0 < $(this).parent(".mktoFieldWrap").find("textarea").length
          ? ($(this).addClass("textarea"),
            $(this).parent(".mktoFieldWrap").addClass("textareaFieldWrap"))
          : 0 <
              $(this).parent(".mktoFieldWrap").find("input[type=range]")
                .length && $(this).addClass("rangefield");
      }),
        $("div.mktoHtmlText", "#mktoForm_" + t).each(function () {
          $(this).parent(".mktoFieldWrap").addClass("privacytext");
        }),
        $('input[type="hidden"]', "#mktoForm_" + t).each(function () {
          $(this).parent(".mktoFormRow").addClass("hidden_input");
        }),
        $(".mktoPlaceholder", "#mktoForm_" + t).each(function () {
          $(this).parent(".mktoFormRow").addClass("hidden_input");
        }),
        n();
      var a = $("div.mktoHtmlText", "#mktoForm_" + t).last(),
        i = $("button.mktoButton", "#mktoForm_" + t);
      if (a && i) {
        var o = i.parent().parent();
        a.closest(".mktoFormRow").remove(),
          o.addClass("mktoButtonRow--w-disclaimer"),
          o.append(a);
      }
      var r = $(
        'select option[value="United States"]',
        "#mktoForm_" + t
      ).parent();
      r &&
        r.on("change", function () {
          n();
        });
    });
  }),
  $('[data-modal="enterprise"]').on("click", function () {
    segmentEventTrack("click contact sales", { button: "contact sales" });
  });

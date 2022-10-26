(function () {
  /*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
  var aa = '"Helvetica Neue Light", HelveticaNeue-Light, "Helvetica Neue", Helvetica, Arial, sans-serif',
    ba = "#content",
    ca = "#gadget-dock",
    da = "#overview",
    fa = "#sidebar",
    ha = "#sidebar .items",
    ia = "' of type ",
    ja = ".filtered",
    ka = ".gadget-content",
    la = ".gadget-resize-detector",
    g = ".item",
    ma = ".item.filtered",
    na = ".item.open",
    oa = '.item[data-id="',
    pa = ".items",
    qa = ".items .item",
    ra = ".lightbox-content",
    sa = ".lightbox-panel",
    ua = ".overview-content",
    va = ".singleton-element, #injected-iframe",
    wa = ".toggle-container",
    xa = ".toggle-switch",
    ya = ".viewitem-panel",
    za = "/feeds/posts/default",
    Aa = "/search/label/",
    Ba = "<a name='more'></a>",
    Ca = "Attribution",
    Da = "BlogArchive",
    Ea = "Cannot perform instanceof checks for MutableMessage",
    p = "Date",
    Fa = "Failed to parse post content",
    Ga = "Item",
    Ha = "Missing or invalid tag",
    Ia = "Overview",
    Ja = "SCRIPT",
    Ka = "Symbol.iterator",
    La = "ViewItem",
    Ma = "__filtered",
    Na = "__nested:",
    Oa = "_relative",
    Pa = "about:invalid#zClosurez",
    Qa = "action",
    Ra = "active",
    Sa = "adsense_client_id",
    Ta = "allowtransparency",
    Ua = "animating",
    Va = "archive_blogspot",
    Wa = "blitzBaseUrl",
    Xa = "blog_url",
    Ya = "blogarchive-expanded",
    Za = "blogarchive-loading",
    $a = "body",
    ab = "broken defineProperties implementation",
    q = "class",
    cb = "clearselection",
    db = "click",
    eb = "closing",
    fb = "collapse-breaks",
    gb = "comments_enabled",
    hb = "current",
    ib = "data-id",
    jb = "data-item-type",
    kb = "data-src",
    lb = "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    mb = "defer",
    nb = "defineProperties did not work: was it monkey-patched?",
    ob = "div",
    pb = "dynamicviews",
    qb = "embed",
    rb = "enableGadgets",
    sb = "false",
    tb = "fetchend",
    ub = "fetchstart",
    vb = "filter_permalink",
    r = "filtered",
    t = "function",
    wb = "gadget-dock-overflow-bottom",
    xb = "gadget-dock-overflow-client-area",
    yb = "gadget-dock-overflow-normal",
    zb = "gadget-opening",
    Ab = "gadget-selected",
    v = "head",
    Bb = "headless",
    Cb = "height",
    Db = "https",
    Eb = "https://lh3.googleusercontent.com",
    Fb = "id",
    Gb = "iframe",
    Hb = "instant",
    Ib = "item_blogspot",
    Jb = "lightbox",
    Kb = "loadcomplete",
    Lb = "margin-top",
    Mb = "nonce",
    Nb = "none",
    Ob = "number",
    w = "object",
    Pb = "opacity",
    Qb = "opacity 1s linear",
    Rb = "open",
    Sb = "opt_onFulfilled should be a function.",
    Tb = "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?",
    Ub = "permalinked",
    Vb = "photo",
    Wb = "published",
    Xb = "px",
    Yb = "resize",
    Zb = "responseType",
    $b = "rewriteforssl",
    bc = "right",
    cc = "scroll",
    dc = "searching",
    ec = "select",
    fc = "selected",
    gc = "singleton-element",
    hc = "size:thumbnail",
    ic = "smooth",
    x = "src",
    jc = "start",
    kc = "state is only maintained on arrays.",
    lc = "static_page",
    A = "string",
    mc = "style",
    nc = "text/javascript",
    oc = "toggle-active",
    pc = "transition",
    sc = "transparent",
    tc = "true",
    uc = "unhandledrejection",
    vc = "unknown",
    wc = "unknown type name",
    xc = "updated",
    yc = "video",
    zc = "view",
    Ac = "viewitem",
    Bc = "viewitem-show",
    Cc = "webkit",
    Dc = "widgetId",
    Ec = "zClosurez",
    B;

  function Fc(a) {
    var b = 0;
    return function () {
      return b < a.length ? {
        done: !1,
        value: a[b++]
      } : {
        done: !0
      }
    }
  }
  var Gc = typeof Object.defineProperties == t ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype)
      return a;
    a[b] = c.value;
    return a
  };

  function Hc(a) {
    a = [w == typeof globalThis && globalThis, a, w == typeof window && window, w == typeof self && self, w == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math)
        return c
    }
    throw Error("Cannot find global object");
  }
  var Ic = Hc(this);

  function C(a, b) {
    if (b)
      a: {
        var c = Ic;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c))
            break a;
          c = c[e]
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && Gc(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        })
      }
  }
  C("Symbol", function (a) {
    function b(f) {
      if (this instanceof b)
        throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f)
    }

    function c(f, h) {
      this.vj = f;
      Gc(this, "description", {
        configurable: !0,
        writable: !0,
        value: h
      })
    }
    if (a)
      return a;
    c.prototype.toString = function () {
      return this.vj
    };
    var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
      e = 0;
    return b
  });
  C(Ka, function (a) {
    if (a)
      return a;
    a = Symbol(Ka);
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
      var d = Ic[b[c]];
      typeof d === t && typeof d.prototype[a] != t && Gc(d.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return Jc(Fc(this))
        }
      })
    }
    return a
  });

  function Jc(a) {
    a = {
      next: a
    };
    a[Symbol.iterator] = function () {
      return this
    };
    return a
  }

  function Kc(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
      next: Fc(a)
    }
  }

  function Lc(a) {
    if (a instanceof Array)
      return a;
    a = Kc(a);
    for (var b, c = []; !(b = a.next()).done;)
      c.push(b.value);
    return c
  }

  function Mc(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }
  var Nc = typeof Object.assign == t ? Object.assign : function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (d)
        for (var e in d)
          Mc(d, e) && (a[e] = d[e])
    }
    return a
  };
  C("Object.assign", function (a) {
    return a || Nc
  });
  var Oc = typeof Object.create == t ? Object.create : function (a) {
      function b() {}
      b.prototype = a;
      return new b
    },
    Pc;
  if (typeof Object.setPrototypeOf == t)
    Pc = Object.setPrototypeOf;
  else {
    var Qc;
    a: {
      var Rc = {
          a: !0
        },
        Sc = {};
      try {
        Sc.__proto__ = Rc;
        Qc = Sc.a;
        break a
      } catch (a) {}
      Qc = !1
    }
    Pc = Qc ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b)
          throw new TypeError(a + " is not extensible");
        return a
      } :
      null
  }
  var Tc = Pc;

  function D(a, b) {
    a.prototype = Oc(b.prototype);
    a.prototype.constructor = a;
    if (Tc)
      Tc(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
          } else
            a[c] = b[c];
    a.P = b.prototype
  }
  C("Promise", function (a) {
    function b(h) {
      this.xb = 0;
      this.ac = void 0;
      this.Ub = [];
      this.yi = !1;
      var k = this.Qe();
      try {
        h(k.resolve, k.reject)
      } catch (l) {
        k.reject(l)
      }
    }

    function c() {
      this.Pa = null
    }

    function d(h) {
      return h instanceof b ? h : new b(function (k) {
        k(h)
      })
    }
    if (a)
      return a;
    c.prototype.hg = function (h) {
      if (null == this.Pa) {
        this.Pa = [];
        var k = this;
        this.ig(function () {
          k.Dk()
        })
      }
      this.Pa.push(h)
    };
    var e = Ic.setTimeout;
    c.prototype.ig = function (h) {
      e(h, 0)
    };
    c.prototype.Dk = function () {
      for (; this.Pa && this.Pa.length;) {
        var h = this.Pa;
        this.Pa = [];
        for (var k = 0; k < h.length; ++k) {
          var l = h[k];
          h[k] = null;
          try {
            l()
          } catch (m) {
            this.pk(m)
          }
        }
      }
      this.Pa = null
    };
    c.prototype.pk = function (h) {
      this.ig(function () {
        throw h;
      })
    };
    b.prototype.Qe = function () {
      function h(m) {
        return function (n) {
          l || (l = !0,
            m.call(k, n))
        }
      }
      var k = this,
        l = !1;
      return {
        resolve: h(this.Xl),
        reject: h(this.uf)
      }
    };
    b.prototype.Xl = function (h) {
      if (h === this)
        this.uf(new TypeError("A Promise cannot resolve to itself"));
      else if (h instanceof b)
        this.hm(h);
      else {
        a: switch (typeof h) {
          case w:
            var k = null != h;
            break a;
          case t:
            k = !0;
            break a;
          default:
            k = !1
        }
        k ? this.Wl(h) : this.Hg(h)
      }
    };
    b.prototype.Wl = function (h) {
      var k = void 0;
      try {
        k = h.then
      } catch (l) {
        this.uf(l);
        return
      }
      typeof k == t ? this.im(k, h) : this.Hg(h)
    };
    b.prototype.uf = function (h) {
      this.dj(2, h)
    };
    b.prototype.Hg = function (h) {
      this.dj(1, h)
    };
    b.prototype.dj = function (h, k) {
      if (0 != this.xb)
        throw Error("Cannot settle(" + h + ", " + k + "): Promise already settled in state" + this.xb);
      this.xb = h;
      this.ac = k;
      2 === this.xb && this.Zl();
      this.Fk()
    };
    b.prototype.Zl = function () {
      var h = this;
      e(function () {
        if (h.jl()) {
          var k = Ic.console;
          "undefined" !== typeof k && k.error(h.ac)
        }
      }, 1)
    };
    b.prototype.jl = function () {
      if (this.yi)
        return !1;
      var h = Ic.CustomEvent,
        k = Ic.Event,
        l = Ic.dispatchEvent;
      if ("undefined" === typeof l)
        return !0;
      typeof h === t ? h = new h(uc, {
        cancelable: !0
      }) : typeof k === t ? h = new k(uc, {
        cancelable: !0
      }) : (h = Ic.document.createEvent("CustomEvent"),
        h.initCustomEvent(uc, !1, !0, h));
      h.promise = this;
      h.reason = this.ac;
      return l(h)
    };
    b.prototype.Fk = function () {
      if (null != this.Ub) {
        for (var h = 0; h < this.Ub.length; ++h)
          f.hg(this.Ub[h]);
        this.Ub = null
      }
    };
    var f = new c;
    b.prototype.hm = function (h) {
      var k = this.Qe();
      h.jd(k.resolve, k.reject)
    };
    b.prototype.im = function (h, k) {
      var l = this.Qe();
      try {
        h.call(k, l.resolve, l.reject)
      } catch (m) {
        l.reject(m)
      }
    };
    b.prototype.then = function (h, k) {
      function l(y, z) {
        return typeof y == t ? function (P) {
            try {
              m(y(P))
            } catch (K) {
              n(K)
            }
          } :
          z
      }
      var m, n, u = new b(function (y, z) {
        m = y;
        n = z
      });
      this.jd(l(h, m), l(k, n));
      return u
    };
    b.prototype.catch = function (h) {
      return this.then(void 0, h)
    };
    b.prototype.jd = function (h, k) {
      function l() {
        switch (m.xb) {
          case 1:
            h(m.ac);
            break;
          case 2:
            k(m.ac);
            break;
          default:
            throw Error("Unexpected state: " + m.xb);
        }
      }
      var m = this;
      null == this.Ub ? f.hg(l) : this.Ub.push(l);
      this.yi = !0
    };
    b.resolve = d;
    b.reject = function (h) {
      return new b(function (k, l) {
        l(h)
      })
    };
    b.race = function (h) {
      return new b(function (k, l) {
        for (var m = Kc(h), n = m.next(); !n.done; n = m.next())
          d(n.value).jd(k, l)
      })
    };
    b.all = function (h) {
      var k = Kc(h),
        l = k.next();
      return l.done ? d([]) : new b(function (m, n) {
        function u(P) {
          return function (K) {
            y[P] = K;
            z--;
            0 == z && m(y)
          }
        }
        var y = [],
          z = 0;
        do
          y.push(void 0),
          z++,
          d(l.value).jd(u(y.length - 1), n),
          l = k.next();
        while (!l.done)
      })
    };
    return b
  });
  C("String.prototype.replaceAll", function (a) {
    return a ? a : function (b, c) {
      if (b instanceof RegExp && !b.global)
        throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
      return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
    }
  });
  C("Array.from", function (a) {
    return a ? a : function (b, c, d) {
      c = null != c ? c : function (k) {
        return k
      };
      var e = [],
        f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
      if (typeof f == t) {
        b = f.call(b);
        for (var h = 0; !(f = b.next()).done;)
          e.push(c.call(d, f.value, h++))
      } else
        for (f = b.length,
          h = 0; h < f; h++)
          e.push(c.call(d, b[h], h));
      return e
    }
  });
  C("Object.entries", function (a) {
    return a ? a : function (b) {
      var c = [],
        d;
      for (d in b)
        Mc(b, d) && c.push([d, b[d]]);
      return c
    }
  });
  C("Object.is", function (a) {
    return a ? a : function (b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
  });
  C("Array.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      var d = this;
      d instanceof String && (d = String(d));
      var e = d.length;
      c = c || 0;
      for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
        var f = d[c];
        if (f === b || Object.is(f, b))
          return !0
      }
      return !1
    }
  });

  function Uc(a, b, c) {
    if (null == a)
      throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp)
      throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
  }
  C("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      return -1 !== Uc(this, b, "includes").indexOf(b, c || 0)
    }
  });
  C("Array.prototype.find", function (a) {
    return a ? a : function (b, c) {
      a: {
        var d = this;
        d instanceof String && (d = String(d));
        for (var e = d.length, f = 0; f < e; f++) {
          var h = d[f];
          if (b.call(c, h, f, d)) {
            b = h;
            break a
          }
        }
        b = void 0
      }
      return b
    }
  });
  C("WeakMap", function (a) {
    function b(l) {
      this.ec = (k += Math.random() + 1).toString();
      if (l) {
        l = Kc(l);
        for (var m; !(m = l.next()).done;)
          m = m.value,
          this.set(m[0], m[1])
      }
    }

    function c() {}

    function d(l) {
      var m = typeof l;
      return m === w && null !== l || m === t
    }

    function e(l) {
      if (!Mc(l, h)) {
        var m = new c;
        Gc(l, h, {
          value: m
        })
      }
    }

    function f(l) {
      var m = Object[l];
      m && (Object[l] = function (n) {
        if (n instanceof c)
          return n;
        Object.isExtensible(n) && e(n);
        return m(n)
      })
    }
    if (function () {
        if (!a || !Object.seal)
          return !1;
        try {
          var l = Object.seal({}),
            m = Object.seal({}),
            n = new a([
              [l, 2],
              [m, 3]
            ]);
          if (2 != n.get(l) || 3 != n.get(m))
            return !1;
          n.delete(l);
          n.set(m, 4);
          return !n.has(l) && 4 == n.get(m)
        } catch (u) {
          return !1
        }
      }())
      return a;
    var h = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var k = 0;
    b.prototype.set = function (l, m) {
      if (!d(l))
        throw Error("Invalid WeakMap key");
      e(l);
      if (!Mc(l, h))
        throw Error("WeakMap key fail: " + l);
      l[h][this.ec] = m;
      return this
    };
    b.prototype.get = function (l) {
      return d(l) && Mc(l, h) ? l[h][this.ec] : void 0
    };
    b.prototype.has = function (l) {
      return d(l) && Mc(l, h) && Mc(l[h], this.ec)
    };
    b.prototype.delete = function (l) {
      return d(l) && Mc(l, h) && Mc(l[h], this.ec) ? delete l[h][this.ec] : !1
    };
    return b
  });
  C("Map", function (a) {
    function b() {
      var k = {};
      return k.previous = k.next = k.head = k
    }

    function c(k, l) {
      var m = k.Fa;
      return Jc(function () {
        if (m) {
          for (; m.head != k.Fa;)
            m = m.previous;
          for (; m.next != m.head;)
            return m = m.next, {
              done: !1,
              value: l(m)
            };
          m = null
        }
        return {
          done: !0,
          value: void 0
        }
      })
    }

    function d(k, l) {
      var m = l && typeof l;
      m == w || m == t ? f.has(l) ? m = f.get(l) : (m = "" + ++h,
        f.set(l, m)) : m = "p_" + l;
      var n = k.B[m];
      if (n && Mc(k.B, m))
        for (k = 0; k < n.length; k++) {
          var u = n[k];
          if (l !== l && u.key !== u.key || l === u.key)
            return {
              id: m,
              list: n,
              index: k,
              entry: u
            }
        }
      return {
        id: m,
        list: n,
        index: -1,
        entry: void 0
      }
    }

    function e(k) {
      this.B = {};
      this.Fa = b();
      this.size = 0;
      if (k) {
        k = Kc(k);
        for (var l; !(l = k.next()).done;)
          l = l.value,
          this.set(l[0], l[1])
      }
    }
    if (function () {
        if (!a || typeof a != t || !a.prototype.entries || typeof Object.seal != t)
          return !1;
        try {
          var k = Object.seal({
              x: 4
            }),
            l = new a(Kc([
              [k, "s"]
            ]));
          if ("s" != l.get(k) || 1 != l.size || l.get({
              x: 4
            }) || l.set({
              x: 4
            }, "t") != l || 2 != l.size)
            return !1;
          var m = l.entries(),
            n = m.next();
          if (n.done || n.value[0] != k || "s" != n.value[1])
            return !1;
          n = m.next();
          return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
        } catch (u) {
          return !1
        }
      }())
      return a;
    var f = new WeakMap;
    e.prototype.set = function (k, l) {
      k = 0 === k ? 0 : k;
      var m = d(this, k);
      m.list || (m.list = this.B[m.id] = []);
      m.entry ? m.entry.value = l : (m.entry = {
          next: this.Fa,
          previous: this.Fa.previous,
          head: this.Fa,
          key: k,
          value: l
        },
        m.list.push(m.entry),
        this.Fa.previous.next = m.entry,
        this.Fa.previous = m.entry,
        this.size++);
      return this
    };
    e.prototype.delete = function (k) {
      k = d(this, k);
      return k.entry && k.list ? (k.list.splice(k.index, 1),
        k.list.length || delete this.B[k.id],
        k.entry.previous.next = k.entry.next,
        k.entry.next.previous = k.entry.previous,
        k.entry.head = null,
        this.size--,
        !0) : !1
    };
    e.prototype.clear = function () {
      this.B = {};
      this.Fa = this.Fa.previous = b();
      this.size = 0
    };
    e.prototype.has = function (k) {
      return !!d(this, k).entry
    };
    e.prototype.get = function (k) {
      return (k = d(this, k).entry) && k.value
    };
    e.prototype.entries = function () {
      return c(this, function (k) {
        return [k.key, k.value]
      })
    };
    e.prototype.keys = function () {
      return c(this, function (k) {
        return k.key
      })
    };
    e.prototype.values = function () {
      return c(this, function (k) {
        return k.value
      })
    };
    e.prototype.forEach = function (k, l) {
      for (var m = this.entries(), n; !(n = m.next()).done;)
        n = n.value,
        k.call(l, n[1], n[0], this)
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var h = 0;
    return e
  });

  function Vc(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return {
              value: b(f, a[f]),
              done: !1
            }
          }
          d = !0;
          return {
            done: !0,
            value: void 0
          }
        }
      };
    e[Symbol.iterator] = function () {
      return e
    };
    return e
  }
  C("Array.prototype.entries", function (a) {
    return a ? a : function () {
      return Vc(this, function (b, c) {
        return [b, c]
      })
    }
  });
  C("Number.isNaN", function (a) {
    return a ? a : function (b) {
      return typeof b === Ob && isNaN(b)
    }
  });
  C("Array.prototype.keys", function (a) {
    return a ? a : function () {
      return Vc(this, function (b) {
        return b
      })
    }
  });
  C("String.prototype.startsWith", function (a) {
    return a ? a : function (b, c) {
      var d = Uc(this, b, "startsWith");
      b += "";
      var e = d.length,
        f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var h = 0; h < f && c < e;)
        if (d[c++] != b[h++])
          return !1;
      return h >= f
    }
  });
  C("Array.prototype.values", function (a) {
    return a ? a : function () {
      return Vc(this, function (b, c) {
        return c
      })
    }
  });
  C("Object.values", function (a) {
    return a ? a : function (b) {
      var c = [],
        d;
      for (d in b)
        Mc(b, d) && c.push(b[d]);
      return c
    }
  });
  var E = this || self;

  function Wc(a, b) {
    a = a.split(".");
    var c = E;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());)
      a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
  }

  function Xc(a) {
    var b = typeof a;
    return b != w ? b : a ? Array.isArray(a) ? "array" : b : "null"
  }

  function Yc(a) {
    var b = Xc(a);
    return "array" == b || b == w && typeof a.length == Ob
  }

  function Zc(a) {
    var b = typeof a;
    return b == w && null != a || b == t
  }

  function $c(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }

  function ad(a, b, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  }

  function F(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? F = $c : F = ad;
    return F.apply(null, arguments)
  }

  function bd(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.P = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Bm = function (d, e, f) {
      for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
        h[k - 2] = arguments[k];
      return b.prototype[e].apply(d, h)
    }
  }

  function cd(a) {
    return a
  };

  function dd() {
    this.reset()
  }
  var ed;
  B = dd.prototype;
  B.reset = function () {
    this.yb = Object.assign({}, fd)
  };
  B.ready = function () {
    return !!this.yb.ready
  };
  B.get = function (a) {
    return this.yb[a]
  };
  B.set = function (a, b) {
    this.yb[a] = b
  };
  B.getAnalyticsId = function () {
    var a = this.get("analytics_id");
    if (a)
      return a
  };
  B.headless = function () {
    return !!this.get(Bb)
  };

  function gd() {
    ed || (ed = new dd);
    return ed
  }
  var fd = {
    showWelcome: !0,
    enableGadgets: !0
  };

  function hd(a, b, c) {
    this.name = a;
    this.profileUrl = b;
    this.avatarUrl = c
  };

  function id(a) {
    this.query = a ? a.query : void 0;
    this.Md = a && a.Md || "recent"
  };

  function jd(a, b) {
    this.url = a;
    this.filter = b;
    this.id = void 0;
    this.baseUrl = this.url
  }
  jd.prototype.data = function () {
    var a = {};
    a.Title = this.title;
    a.Subtitle = a.Description = this.subtitle;
    a.BlogID = this.id;
    gd().get("pages") && (a.Pages = gd().get("pages").map(function (c) {
      return {
        ID: c.page_id,
        URL: c.url,
        Label: c.title
      }
    }));
    var b = this.baseUrl || this.url || "";
    a.RSS = [b, "/" == b[b.length - 1] ? "" : "/", "feeds/posts/default"].join("");
    return a
  };
  var kd = {},
    ld;

  function G() {
    kd.Bc || (kd.Bc = ld());
    return kd.Bc
  };

  function md(a, b) {
    b = b || {};
    this.type = a;
    this.url = b.url;
    this.thumbnail = b.thumbnail;
    this.title = b.title;
    this.content = b.content;
    this.width = b.width;
    this.height = b.height
  };

  function nd(a, b, c) {
    this.name = a;
    this.latitude = b;
    this.longitude = c
  };

  function od(a) {
    var b = [];
    (a = Array.isArray(a) ? a : a.split(",")) && (b = a.map(function (c) {
      return (c ? c.toLowerCase().trim() : "").replace(/[^\w\s]|_/g, "").replace(/\s+/g, "_")
    }));
    return b.sort().join(" ")
  };

  function pd(a, b) {
    b && a.appendChild(document.createRange().createContextualFragment(b))
  }

  function qd(a) {
    a = a.replaceAll(/(<iframe[^>]*blogger.com\/video.g\?token=[^>]*) \/>/g, "$1></iframe>");
    return document.createRange().createContextualFragment(a).firstElementChild
  }

  function rd(a) {
    a = document.createRange().createContextualFragment(a);
    a = Array.from(a.childNodes).filter(function (b) {
      return !(b instanceof Text)
    });
    return [].concat(Lc(a))
  }

  function sd(a, b) {
    a.setAttribute(x, b)
  };
  var H = {
    gg: /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
    jk: /^(?:(([^:\/?#]+):){1}(\/\/)?)|(\/\/)/,
    td: function () {
      return document.URL
    },
    isCrossDomain: function (a) {
      var b = H.decode();
      a = a instanceof td ? a : new td(a);
      return b.authority != a.authority
    },
    isSamePage: function (a, b) {
      var c = H.decode();
      a = a instanceof td ? a : new td(a);
      return (!!b || c.authority == a.authority) && c.path == a.path
    },
    decode: function (a) {
      return new td(a || H.td())
    },
    authority: function (a, b) {
      var c = a || H.td();
      a = (a = c.match(/^(https?:\/\/)/)) ? a[0] : "http://";
      c = c.replace(a, "");
      if (c = /([^\/]+)\/?(.*)/.exec(c))
        return a + (0 > c[1].indexOf(".") && b ? c[1] + "." + b : c[1]).toLowerCase()
    },
    rewritePath: function (a) {
      a = a instanceof td ? a : new td(a);
      if (window.history.pushState)
        try {
          return H.td() != a.encode() && window.history.pushState(null, "", a.encode()),
            !0
        } catch (b) {}
      a = "#!" + (H.isCrossDomain(a) ? a.encode(!1, !1) : a.path);
      return window.location.hash != a ? (window.location.hash = a,
        !0) : !1
    },
    decodePath: function (a) {
      a = H.decode(a);
      if (a.fragment && "!" == a.fragment[0]) {
        var b = new td(a.fragment.substr(1));
        b.authority || (b.scheme = a.scheme,
          b.authority = a.authority);
        a = b
      }
      return new td(a.encode(!1, !1))
    },
    cl: function (a) {
      return (new URL(a, H.td())).href
    }
  };

  function td(a) {
    this.url = null !== a ? a instanceof td ? a.encode() : a : void 0;
    this.params = {};
    this.url && ud(this.url, this)
  }

  function ud(a, b) {
    b = b || new td;
    if ((a = H.jk.exec(a) ? H.gg.exec(a) : H.gg.exec("//" + a)) && a.length && (b.scheme = a[2],
        b.authority = a[4] && a[4].toLowerCase(),
        b.path = a[5],
        b.query = a[7],
        b.params = {},
        b.fragment = a[9],
        b.query)) {
      a = b.query.replace(/&amp;/g, "&").split("&");
      for (var c = a.length, d = 0; d < c; d++)
        if (a[d]) {
          var e = a[d].split("=");
          b.params[e[0]] = e[1] || ""
        }
    }
    return b
  }
  B = td.prototype;
  B.encode = function (a, b, c) {
    a = void 0 !== a ? a : !0;
    b = void 0 !== b ? b : !0;
    c = vd(this, c);
    return [this.scheme ? this.scheme + ":" : "", this.authority ? "//" + this.authority : "", this.path, a && c ? "?" + c : "", b && this.fragment ? "#" + this.fragment : ""].join("")
  };
  B.root = function () {
    return [this.scheme ? this.scheme + ":" : "", this.authority ? "//" + this.authority : ""].join("")
  };

  function vd(a, b) {
    if (b)
      return Object.entries(a.params).map(function (d) {
        return d.map(encodeURIComponent).join("=")
      }).join("&");
    b = [];
    for (var c in a.params)
      void 0 !== a.params[c] ? b.push(c + "=" + a.params[c]) : b.push(c);
    return b.join("&")
  }
  B.param = function (a, b) {
    return void 0 !== b ? (this.params[a] = b,
      this) : this.params[a]
  };
  B.Ck = function (a) {
    a = a instanceof td ? a : new td(a);
    return this.encode(!1, !1) == a.encode(!1, !1)
  };
  B.normalize = function () {
    this.scheme = this.scheme || H.decode().scheme;
    this.path = this.path || "/";
    return this
  };

  function wd() {
    this.attributes = {}
  }

  function xd(a, b) {
    var c = [],
      d = Object.assign({}, yd, b);
    if (!a)
      return void 0 !== d.replace ? "" : c;
    d.tag = d.tag.toLowerCase();
    b = d.tag ? zd(d.tag) : Ad.global ? new RegExp(Ad) : Ad;
    a = a.replace(b, function (e) {
      var f = Bd(e),
        h = !0;
      if (f.value && d.Jm) {
        var k = xd(f.value, d);
        d.replace ? f.value = k : k && k.length && c.push.apply(c, Lc(k))
      }
      if (h = (h = h && (!d.tag || d.tag == f.name)) && (!d.attr || Cd(f.attributes, d.attr, d.Am)))
        if (c.push(f),
          void 0 !== d.replace)
          return typeof d.replace === t ? d.replace(f) : d.replace;
      return e
    });
    return void 0 !== d.replace ? a : c
  }
  wd.prototype.encode = function () {
    var a = [];
    a.push("<" + this.name);
    for (var b in this.attributes) {
      var c = this.attributes[b];
      a.push(" ");
      a.push(b);
      null !== c && (a.push('="'),
        a.push(void 0 !== c ? ("" + c).replace(/"/g, "&#034;") : ""),
        a.push('"'))
    }!this.value && this.Ra.match(/\/>$/) ? a.push(this.Ra.match(/\s?\/>$/)) : (b = this.name) && Dd.includes(b.toLowerCase()) && this.Ra.match(/\/?>/) ? a.push(this.Ra.match(/\s?\/?>$/)) : (a.push(">"),
      a.push(this.value),
      a.push("</" + this.name + ">"));
    return a.join("")
  };
  wd.prototype.attr = function (a, b) {
    return void 0 !== b ? (this.attributes[a] = b,
      this) : this.attributes[a]
  };

  function Cd(a, b, c) {
    b = (b || "").toLowerCase();
    for (var d in a)
      if (d.toLowerCase() == b) {
        if (void 0 === c)
          return !0;
        if (typeof c === A)
          return a[d] == c;
        if (c instanceof RegExp)
          return c.test(a[d]);
        if (typeof c === t)
          return c(a[d])
      }
    return !1
  }

  function Bd(a) {
    var b = new wd;
    b.Ra = a;
    var c = zd(/<(\w+)/.exec(a)[1]).exec(a);
    c && c.length && (b.Ra = a,
      b.name = c[1].toLowerCase(),
      b.value = c[2],
      b.attributes = {},
      (a = /<\w+([^>]*)?/.exec(a)) && (a[1] || "").replace(Ed.global ? new RegExp(Ed) : Ed, function (d, e, f, h, k) {
        b.attributes[e] = f || h || k || ""
      }));
    return b
  }

  function zd(a) {
    return new RegExp(a && Dd.includes(a.toLowerCase()) ? Fd.source.replace("<(\\w+)", "<(" + a + ")") : Ad.source.replace("<(\\w+)", "<(" + a + ")"), "ig")
  }
  var yd = {
      tag: "",
      attr: "",
      attrTest: void 0,
      replace: void 0,
      recurse: !0
    },
    Ad = /<(\w+)[^>]*?(?:(?:>((?:.|\n|\r)*?)<\/\1>)|(?:\/>))/ig,
    Fd = /<(\w+)[^>]*?(?:.*?)\/?>/ig,
    Ed = /([\w-_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
    Dd = ["area", "base", qb, "br", "col", "hr", "img", "input", "link", "meta", "param", "command", "keygen", "source"];
  var Gd = {},
    Hd;

  function I() {
    Gd.Bc || (Gd.Bc = Hd());
    return Gd.Bc
  };
  var Id = "ontouchstart" in document.documentElement;

  function Jd() {
    for (var a = I(), b = a.oa, c = {}, d = G().resources().slice().reverse(), e, f = 0; e = d[f]; f++)
      typeof e.data === t && Object.assign(c, e.data());
    c.Posts = G().items();
    a = b.call(a, c);
    return Kd(a)
  }

  function Ld(a) {
    return Kd(I().oa(a))
  }
  var Md = null;

  function Kd(a) {
    var b = Md;
    if (!b) {
      b = {};
      var c = gd(),
        d = G().getSettings();
      b.Locale = c.get("blog_locale");
      b.BloggerBase = d.blogger_base;
      b.PlusBase = d.plus_base;
      if (blogger && blogger.l10n)
        for (var e in blogger.l10n)
          b["lang:" + e] = blogger.l10n[e];
      (d = c.getAnalyticsId()) && !c.headless() && (b.AnalyticsID = d);
      c.get(Sa) && !c.headless() && (b.Adsense = !!c.get("adsense_has_ads"),
        b.AdsenseClient = c.get(Sa),
        b.AdsenseHost = c.get("adsense_host_id"));
      d = !!c.get(gb);
      b.Comments = d;
      b.Notes = d;
      b.Gadgets = !!c.get(rb);
      var f = "";
      d = (c.get("views") || []).map(function (m) {
        var n = m.name || "",
          u = n.charAt(0).toUpperCase() + n.slice(1);
        f = m.selected ? u : f || u;
        var y = blogger.l10n && blogger.l10n[u] ? blogger.l10n[u] : u,
          z = m.url;
        z && 0 < z.indexOf("?") && (z = z.slice(z.indexOf("?")));
        return {
          Name: n,
          URL: z,
          Label: u,
          LocalizedLabel: y,
          Current: m.selected
        }
      });
      d.sort(function (m, n) {
        return m.Label < n.Label ? -1 : m.Label == n.Label ? 0 : 1
      });
      b.Views = d;
      b.CurrentView = f;
      d = Nd();
      b["browser:" + d.type] = !0;
      b["browser:" + d.type + d.versionX] = !0;
      b.Mobile = c.get("is_mobile") || Id;
      b.Tablet = c.get("is_tablet");
      Object.assign(b, Od());
      d = 0;
      e = !1;
      for (var h, k = 0; h = G().resources()[k]; k++)
        h.total && (d += h.total),
        e = e || h.filter;
      b.PostCount = d;
      e && (b.SearchQuery = e.query,
        b.SearchPage = !0,
        b.SearchResultCount = d,
        b.NoSearchResults = 0 == d);
      d = H.decode(h && h.url).authority || "";
      b.CustomDomain = -1 == d.indexOf(".blogspot.");
      b.BlogURL = c.get(Xa) || "/";
      b.CanonicalUrl = c.get("canonical_url");
      b.BoqCommentIframeForm = c.get("boq_comment_iframe_form");
      b.LoginRedirectParam = c.get("login_redirect_param");
      Md = b
    }
    for (var l in b)
      a.scope(l, b[l]);
    return a
  }

  function Od() {
    var a = gd(),
      b = Object.assign({}, {
        "font:Text": aa,
        "color:Text": "#333",
        "image:Background": void 0,
        "color:Background": "#eee",
        "color:Header Background": "#f3f3f3",
        "image:Header": void 0,
        "color:Primary": "#333",
        "color:Menu Text": "white",
        "font:Menu": aa,
        "font:Link": aa,
        "color:Link": "#009eb8",
        "color:Link Visited": "#009eb8",
        "color:Link Hover": "#009eb8",
        "font:Blog Title": aa,
        "color:Blog Title": "#555",
        "font:Blog Description": aa,
        "color:Blog Description": "#555",
        "font:Post Title": aa,
        "color:Post Title": "#333",
        "color:Ribbon": "#666",
        "color:Ribbon Hover": "#ad3a2b",
        "color:Bubble": "#666"
      }, a.get("template_styles"));
    (a = a.get("additional_css")) && (b["text:Custom CSS"] = a);
    a = /^(bold|normal|italic|\d+%|\d+px|\s)+/i;
    for (var c in b)
      if (0 == c.indexOf("font:"))
        b[c] = b[c].replace(a, "");
      else if ("image:Background" == c) {
      var d = /.*url\((.*?)\).*/.exec(b[c]);
      d && (b["image:Header"] = b[c] = d[1],
        b["text:BodyBackgroundCSS"] = b["text:HeaderBackgroundCSS"] = d[0])
    }
    return b
  }

  function Pd(a) {
    var b = {},
      c = G().items(),
      d = (c || []).indexOf(a);
    if (0 <= d) {
      var e = 0 < d ? c[d - 1] : null;
      c = d < c.length - 1 ? c[d + 1] : null;
      b.PreviousPost = e ? e.url : !1;
      b.NextPost = c ? c.url : G().hasNext()
    }
    b.SameDayDate = e && e.published && e.published.getDate() == a.published.getDate() && e.published.getMonth() == a.published.getMonth() && e.published.getFullYear() == a.published.getFullYear() ? !0 : !1;
    b.NewDayDate = !b.SameDayDate; -
    1 != d && (a = d + 1,
      b.Odd = 1 == a % 2,
      b.Even = 0 == a % 2,
      b.Number = a,
      b["Post" + a] = !0);
    return b
  }

  function Nd() {
    var a = navigator.userAgent.toLowerCase(),
      b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
      c = /(msie) ([\w.]+)/,
      d = /(mozilla)(?:.*? rv:([\w.]+))?/;
    b = /(webkit)[ \/]([\w.]+)/.exec(a) || b.exec(a) || c.exec(a) || 0 > a.indexOf("compatible") && d.exec(a) || [];
    a = {};
    a[b[1] || ""] = !0;
    a.version = b[2] || "0";
    var e;
    for (e in a)
      if ("version" == e)
        var f = a[e];
      else if (e == Cc || "chrome" == e || "safari" == e) {
      b = navigator.userAgent;
      var h = (f = /chrome\/([\d\.]+)/i.exec(b)) && "chrome" || (f = /version\/([\d\.]+) safari/i.exec(b)) && "safari" || (f = [null, a.version],
        Cc);
      f = f && f[1]
    } else
      h = e;
    a.type = h || vc;
    a.versionX = f ? parseInt(f, 10) : vc;
    return a
  };
  var Qd = RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,z]|-testonly)?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(dp[3-6]\\.googleusercontent\\.cn)|(lh[3-6]\\.(googleadsserving\\.cn|xn--9kr7l\\.com))|(photos\\-image\\-(dev|qa)(-auth)?\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?))\\/", "i"),
    Rd = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i,
    Sd = /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i,
    Td = /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;

  function Ud(a) {
    return Qd.test(a) || Rd.test(a) || Sd.test(a) || Td.test(a)
  };
  var Vd = {};

  function Wd(a) {
    if (a !== Vd)
      throw Error("requires a valid immutable API token");
  };

  function Xd(a, b) {
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, Xd);
    else {
      var c = Error().stack;
      c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
  }
  bd(Xd, Error);
  Xd.prototype.name = "CustomError";

  function Yd(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    Xd.call(this, c + a[d])
  }
  bd(Yd, Xd);
  Yd.prototype.name = "AssertionError";

  function Zd(a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
      e += ": " + c;
      var f = d
    } else
      a && (e += ": " + a,
        f = b);
    throw new Yd("" + e, f || []);
  }

  function J(a, b, c) {
    a || Zd("", null, b, Array.prototype.slice.call(arguments, 2));
    return a
  }

  function $d(a, b, c) {
    null == a && Zd("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
    return a
  }

  function ae(a, b) {
    throw new Yd("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }

  function be(a, b, c) {
    typeof a !== Ob && Zd("Expected number but got %s: %s.", [Xc(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
  }

  function ce(a, b, c) {
    typeof a !== t && Zd("Expected function but got %s: %s.", [Xc(a), a], b, Array.prototype.slice.call(arguments, 2))
  }

  function de(a, b, c) {
    Zc(a) || Zd("Expected object but got %s: %s.", [Xc(a), a], b, Array.prototype.slice.call(arguments, 2))
  }

  function ee(a, b, c) {
    Array.isArray(a) || Zd("Expected array but got %s: %s.", [Xc(a), a], b, Array.prototype.slice.call(arguments, 2))
  }

  function fe(a, b, c, d) {
    a instanceof b || Zd("Expected instanceof %s but got %s.", [ge(b), ge(a)], c, Array.prototype.slice.call(arguments, 3));
    return a
  }

  function ge(a) {
    return a instanceof Function ? a.displayName || a.name || wc : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
  };
  var he = String.prototype.trim ? function (a) {
      return a.trim()
    } :
    function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

  function ie(a) {
    if (!je.test(a))
      return a; -
    1 != a.indexOf("&") && (a = a.replace(ke, "&amp;")); -
    1 != a.indexOf("<") && (a = a.replace(le, "&lt;")); -
    1 != a.indexOf(">") && (a = a.replace(me, "&gt;")); -
    1 != a.indexOf('"') && (a = a.replace(ne, "&quot;")); -
    1 != a.indexOf("'") && (a = a.replace(oe, "&#39;")); -
    1 != a.indexOf("\x00") && (a = a.replace(pe, "&#0;"));
    return a
  }
  var ke = /&/g,
    le = /</g,
    me = />/g,
    ne = /"/g,
    oe = /'/g,
    pe = /\x00/g,
    je = /[\x00&<>"']/;

  function qe(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  };

  function re() {
    var a = E.navigator;
    return a && (a = a.userAgent) ? a : ""
  }

  function se(a) {
    return -1 != re().indexOf(a)
  };
  var te = Array.prototype.indexOf ? function (a, b) {
      J(null != a.length);
      return Array.prototype.indexOf.call(a, b, void 0)
    } :
    function (a, b) {
      if (typeof a === A)
        return typeof b !== A || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b)
          return c;
      return -1
    },
    ue = Array.prototype.forEach ? function (a, b) {
      J(null != a.length);
      Array.prototype.forEach.call(a, b, void 0)
    } :
    function (a, b) {
      for (var c = a.length, d = typeof a === A ? a.split("") : a, e = 0; e < c; e++)
        e in d && b.call(void 0, d[e], e, a)
    },
    ve = Array.prototype.some ? function (a, b) {
      J(null != a.length);
      return Array.prototype.some.call(a, b, void 0)
    } :
    function (a, b) {
      for (var c = a.length, d = typeof a === A ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a))
          return !0;
      return !1
    };

  function we(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
      return c
    }
    return []
  };

  function xe(a) {
    xe[" "](a);
    return a
  }
  xe[" "] = function () {};

  function ye(a) {
    var b = ze;
    return Object.prototype.hasOwnProperty.call(b, "10.0") ? b["10.0"] : b["10.0"] = a("10.0")
  };
  var Ae = se("Opera"),
    Be = se("Trident") || se("MSIE"),
    Ce = se("Edge"),
    De = se("Gecko") && !(-1 != re().toLowerCase().indexOf(Cc) && !se("Edge")) && !(se("Trident") || se("MSIE")) && !se("Edge"),
    Ee = -1 != re().toLowerCase().indexOf(Cc) && !se("Edge"),
    Fe;
  a: {
    var Ge = "",
      He = function () {
        var a = re();
        if (De)
          return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ce)
          return /Edge\/([\d\.]+)/.exec(a);
        if (Be)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ee)
          return /WebKit\/(\S+)/.exec(a);
        if (Ae)
          return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();
    He && (Ge = He ? He[1] : "");
    if (Be) {
      var Ie, Je = E.document;
      Ie = Je ? Je.documentMode : void 0;
      if (null != Ie && Ie > parseFloat(Ge)) {
        Fe = String(Ie);
        break a
      }
    }
    Fe = Ge
  }
  var Ke = Fe,
    ze = {};

  function Le() {
    return ye(function () {
      for (var a = 0, b = he(String(Ke)).split("."), c = he("10.0").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
        var f = b[e] || "",
          h = c[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == f[0].length && 0 == h[0].length)
            break;
          a = qe(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || qe(0 == f[2].length, 0 == h[2].length) || qe(f[2], h[2]);
          f = f[3];
          h = h[3]
        } while (0 == a)
      }
      return 0 <= a
    })
  };
  var Me = {},
    Ne = null;

  function Oe(a) {
    var b;
    J(Yc(a), "encodeByteArray takes an array as a parameter");
    void 0 === b && (b = 0);
    if (!Ne) {
      Ne = {};
      for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
        var f = c.concat(d[e].split(""));
        Me[e] = f;
        for (var h = 0; h < f.length; h++) {
          var k = f[h],
            l = Ne[k];
          void 0 === l ? Ne[k] = h : J(l === h)
        }
      }
    }
    b = Me[b];
    c = Array(Math.floor(a.length / 3));
    d = b[64] || "";
    for (e = f = 0; f < a.length - 2; f += 3) {
      l = a[f];
      var m = a[f + 1];
      k = a[f + 2];
      h = b[l >> 2];
      l = b[(l & 3) << 4 | m >> 4];
      m = b[(m & 15) << 2 | k >> 6];
      k = b[k & 63];
      c[e++] = "" + h + l + m + k
    }
    h = 0;
    k = d;
    switch (a.length - f) {
      case 2:
        h = a[f + 1],
          k = b[(h & 15) << 2] || d;
      case 1:
        a = a[f],
          c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | h >> 4] + k + d
    }
    return c.join("")
  };
  var Pe = "undefined" !== typeof Uint8Array,
    Qe = {};
  var Re;

  function Se(a) {
    if (Qe !== Qe)
      throw Error("illegal external caller");
    this.fa = a;
    if (null != a && 0 === a.length)
      throw Error("ByteString should be constructed with non-empty values");
  }
  Se.prototype.Dc = function () {
    return null == this.fa
  };
  var Te = typeof Symbol === t && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;

  function Ue(a, b) {
    Object.isFrozen(a) || (Te ? a[Te] |= b : void 0 !== a.nb ? a.nb |= b : Object.defineProperties(a, {
      nb: {
        value: b,
        configurable: !0,
        writable: !0,
        enumerable: !1
      }
    }))
  }
  var Ve = Object.getOwnPropertyDescriptor(Array.prototype, "Tk");
  Object.defineProperties(Array.prototype, {
    Tk: {
      get: function () {
        var a = We(this),
          b = [];
        1 & a && b.push("IS_REPEATED_FIELD");
        2 & a && b.push("IS_IMMUTABLE_ARRAY");
        4 & a && b.push("IS_API_FORMATTED");
        8 & a && b.push("ONLY_MUTABLE_VALUES");
        a = b.join(",");
        return Ve ? Ve.get.call(this) + "|" + a : a
      },
      configurable: !0,
      enumerable: !1
    }
  });

  function We(a) {
    ee(a, kc);
    var b;
    Te ? b = a[Te] : b = a.nb;
    return null == b ? 0 : b
  }

  function Xe(a) {
    ee(a, kc);
    Ue(a, 1);
    return a
  }

  function L(a) {
    return Array.isArray(a) ? !!(We(a) & 2) : !1
  }

  function Ye(a) {
    if (!Array.isArray(a))
      throw Error("cannot mark non-array as immutable");
    Ue(a, 2)
  }

  function Ze(a, b) {
    if (!Array.isArray(a))
      throw Error("cannot mark non-array as mutable");
    b ? Ue(a, 8) : Object.isFrozen(a) || (Te ? a[Te] &= -9 : void 0 !== a.nb && (a.nb &= -9))
  };

  function $e(a) {
    return null !== a && typeof a === w && !Array.isArray(a) && a.constructor === Object
  }
  var af = Symbol("exempted jspb subclass"),
    bf = Symbol("generated by jspb"),
    cf = Object.freeze(Xe([]));

  function df(a) {
    if (L(a.F))
      throw Error("Cannot mutate an immutable Message");
  }
  var ef = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

  function ff(a) {
    return {
      value: a,
      configurable: !1,
      writable: !1,
      enumerable: !1
    }
  };

  function gf(a) {
    return a.displayName || a.name || wc
  }

  function hf(a, b) {
    if (!(a instanceof b))
      throw Error("Expected instanceof " + gf(b) + " but got " + (a && gf(a.constructor)));
    return a
  }

  function jf(a, b) {
    var c = void 0 === c ? !1 : c;
    if (Array.isArray(a))
      return new b(a);
    if (c)
      return new b
  };

  function kf(a, b, c) {
    b = void 0 === b ? lf : b;
    c = void 0 === c ? mf : c;
    this.ga = [];
    this.Xd = (this.tb = a) && b === lf ? nf : b;
    this.rm = c;
    this.map = {};
    this.dd = !1;
    for (a = this.size = 0; a < this.ga.length; a++) {
      b = this.ga[a];
      c = b[0].toString();
      var d = this.map[c];
      this.map[c] = b;
      void 0 === d && this.size++
    }
  }

  function of (a) {
    if (L(a.ga))
      throw Error("Cannot mutate an immutable Map");
  }

  function pf(a, b) {
    var c = new kf(a.tb, a.Xd, a.rm);
    for (var d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = J(a.map[d]),
          f = qf(a, e);
        a.tb && !f.Rk() && (f = b(f));
        c.set(J(e)[0], f)
      }
    return c
  }
  B = kf.prototype;
  B.clear = function () {
    of (this);
    this.map = {};
    this.size = this.ga.length = 0;
    this.dd = !0
  };
  B.entries = function () {
    var a = [],
      b = rf(this);
    b.sort();
    for (var c = 0; c < b.length; c++) {
      var d = J(this.map[b[c]]);
      a.push([J(d)[0], qf(this, d)])
    }
    return new sf(a)
  };
  B.keys = function () {
    var a = [],
      b = rf(this);
    b.sort();
    for (var c = 0; c < b.length; c++)
      a.push(this.map[b[c]][0]);
    return new sf(a)
  };
  B.values = function () {
    var a = [],
      b = rf(this);
    b.sort();
    for (var c = 0; c < b.length; c++) {
      var d = J(this.map[b[c]]);
      a.push(qf(this, d))
    }
    return new sf(a)
  };
  B.forEach = function (a, b) {
    var c = rf(this);
    c.sort();
    for (var d = 0; d < c.length; d++) {
      var e = J(this.map[c[d]]);
      a.call(b, qf(this, e), e[0], this)
    }
  };
  B.set = function (a, b) {
    of (this);
    var c = a.toString();
    this.tb && hf(b, this.tb);
    var d = this.map[c];
    d ? (c = this.Xd(b, this.tb, L(this.ga), this.og),
      d[1] = c) : (d = [a, this.Xd(b, this.tb, L(this.ga), this.og)],
      this.map[c] = d,
      this.ga.push(d),
      this.dd = !1,
      this.size++);
    return this
  };

  function qf(a, b) {
    var c = L(a.ga);
    a = a.Xd(b[1], a.tb, c, a.og);
    a !== b[1] && (b[1] = a);
    return a
  }
  B.get = function (a) {
    return (a = this.map[a.toString()]) ? qf(this, a) : void 0
  };
  B.has = function (a) {
    return a.toString() in this.map
  };

  function rf(a) {
    a = a.map;
    var b = [],
      c;
    for (c in a)
      Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
    return b
  }
  kf.prototype[Symbol.iterator] = function () {
    return this.entries()
  };

  function tf() {
    throw Error("please construct maps as mutable then call toImmutable");
  }

  function sf(a) {
    this.ti = 0;
    this.Df = a
  }
  sf.prototype.next = function () {
    return this.ti < this.Df.length ? {
      done: !1,
      value: this.Df[this.ti++]
    } : {
      done: !0,
      value: void 0
    }
  };
  sf.prototype[Symbol.iterator] = function () {
    return this
  };
  if (ef) {
    var uf = function () {
        throw Error("Cannot perform instanceof checks on ImmutableMap");
      },
      vf = {};
    Object.defineProperties(tf, (vf[Symbol.hasInstance] = ff(uf),
      vf));
    J(tf[Symbol.hasInstance] === uf, nb)
  }

  function nf(a, b, c, d) {
    var e = !1;
    var f = null != a && typeof a === w && !(e = Array.isArray(a)) && Array.isArray(a.F) && a.constructor !== Object ? a : e ? new b(a) : new b;
    c ? Ye(f.F) : d && (f = f.Yd(Vd));
    return f
  }

  function lf(a) {
    return a
  }

  function mf(a) {
    return a
  };

  function wf(a) {
    switch (typeof a) {
      case Ob:
        return isFinite(a) ? a : String(a);
      case w:
        if (a && !Array.isArray(a)) {
          if (Pe && null != a && a instanceof Uint8Array)
            return Oe(a);
          if (a instanceof Se) {
            var b = a.fa;
            null != b && typeof b !== A && (Pe && b instanceof Uint8Array ? b = Oe(b) : (ae("Cannot coerce to b64 string: " + Xc(b)),
              b = null));
            return null == b ? "" : a.fa = b
          }
          if (a instanceof kf) {
            if (!a.dd) {
              b = rf(a);
              b.sort();
              for (var c = 0; c < b.length; c++)
                a.ga[c] = a.map[b[c]];
              b.length < a.ga.length && (a.ga.length = b.length);
              a.dd = !0;
              a.size = a.ga.length
            }
            return a.ga
          }
        }
    }
    return a
  };

  function xf(a, b) {
    b = void 0 === b ? yf : b;
    ee(a);
    return zf(a, b)
  }

  function Af(a, b) {
    if (null != a) {
      if (Array.isArray(a))
        return zf(a, b);
      if ($e(a)) {
        var c = {},
          d;
        for (d in a)
          c[d] = Af(a[d], b);
        return c
      }
      return b(a)
    }
  }

  function zf(a, b) {
    ee(a);
    for (var c = a.slice(), d = 0; d < c.length; d++)
      c[d] = Af(c[d], b);
    Array.isArray(a) && We(a) & 1 && Xe(c);
    return c
  }

  function Bf(a) {
    if (a && typeof a == w && a.toJSON)
      return a.toJSON();
    a = wf(a);
    return Array.isArray(a) ? xf(a, Bf) : a
  }

  function Cf(a) {
    return a.clone()
  }

  function yf(a) {
    return Pe && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a instanceof kf ? pf(a, Cf) : a
  };

  function Df(a) {
    return a.Va || (a.Va = a.F[a.Yb + a.jb] = {})
  }

  function M(a, b, c) {
    return -1 === b ? null : b >= a.Yb ? a.Va ? a.Va[b] : void 0 : (void 0 === c ? 0 : c) && a.Va && (c = a.Va[b],
      null != c) ? c : a.F[b + a.jb]
  }

  function N(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    df(a);
    b < a.Yb && !d ? a.F[b + a.jb] = c : Df(a)[b] = c
  }

  function Ef(a, b, c, d) {
    c = void 0 === c ? !0 : c;
    var e = M(a, b, d);
    Array.isArray(e) || (e = cf);
    if (L(a.F))
      c && (Ye(e),
        Object.freeze(e));
    else if (e === cf || L(e))
      e = Xe(e.slice()),
      N(a, b, e, d);
    return e
  }

  function Ff(a, b) {
    a = M(a, b);
    return null == a ? a : +a
  }

  function O(a, b) {
    a = M(a, b);
    return null == a ? a : !!a
  }

  function Gf(a, b) {
    a = O(a, b);
    return null == a ? !1 : a
  };

  function Hf(a, b, c) {
    fe(this, Hf, "The message constructor should only be used by subclasses");
    J(this.constructor !== Hf, "Message is an abstract class and cannot be directly constructed");
    if (!0 !== this[af]) {
      J(!0 === this[bf], "Message can only be subclassed by proto gencode.");
      var d = Object.getPrototypeOf(J(Object.getPrototypeOf(this)));
      J(d.hasOwnProperty(bf), "Generated jspb classes should not be extended")
    }
    a || (a = If);
    If = null;
    d = this.constructor.Im;
    a || (a = d ? [d] : []);
    this.jb = (d ? 0 : -1) - (this.constructor.Gm || 0);
    this.J = void 0;
    this.F = a;
    a: {
      d = this.F.length;
      a = d - 1;
      if (d && (d = this.F[a],
          $e(d))) {
        this.Yb = a - this.jb;
        this.Va = d;
        break a
      }
      void 0 !== b && -1 < b ? (this.Yb = Math.max(b, a + 1 - this.jb),
        this.Va = void 0) : this.Yb = Number.MAX_VALUE
    }
    if (c)
      for (b = 0; b < c.length; b++)
        if (a = c[b],
          a < this.Yb)
          a += this.jb,
          (d = this.F[a]) ? Array.isArray(d) && Xe(d) : this.F[a] = cf;
        else {
          d = Df(this);
          var e = d[a];
          e ? Array.isArray(e) && Xe(e) : d[a] = cf
        }
  }
  Hf.prototype.toJSON = function () {
    var a = this.F;
    return xf(a, Bf)
  };
  Hf.prototype.clone = function () {
    var a = fe(this, Hf),
      b = xf(a.F);
    fe(a, Hf);
    ee(b);
    If = b;
    b = new a.constructor(b);
    fe(b, Hf);
    If = null;
    Jf(b, a);
    return b
  };
  Hf.prototype.Rk = function () {
    Wd(Vd);
    return L(this.F)
  };
  Hf.prototype.toString = function () {
    return this.F.toString()
  };

  function Jf(a, b) {
    J(a, "expected `to` to be non-null");
    J(b, "expected `from` to be non-null");
    b.Cc && (a.Cc = b.Cc.slice());
    var c = b.J;
    if (c) {
      b = b.Va;
      for (var d in c) {
        var e = c[d];
        if (e) {
          var f = !(!b || !b[d]),
            h = +d;
          if (Array.isArray(e)) {
            if (e.length) {
              var k = a;
              var l = e[0].constructor;
              f = void 0 === f ? !1 : f;
              var m = L(k.F);
              var n = k;
              var u = l,
                y = f,
                z = m;
              z = void 0 === z ? !0 : z;
              n.J || (n.J = {});
              var P = L(n.F);
              l = n.J[h];
              y = Ef(n, h, !0, y);
              var K = P || L(y);
              if (!l) {
                l = [];
                P = P || K;
                for (var ac = 0; ac < y.length; ac++) {
                  var ta = y[ac];
                  P = P || L(ta);
                  ta = jf(ta, u);
                  void 0 !== ta && (l.push(ta),
                    K && Ye(ta.F))
                }
                n.J[h] = l;
                Ze(y, !P)
              }
              u = K || z;
              z = L(l);
              u && !z && (Object.isFrozen(l) && (n.J[h] = l = l.slice()),
                Ye(l),
                Object.freeze(l));
              !u && z && (n.J[h] = l = l.slice());
              n = l;
              h = Ef(k, h, f);
              if (!(k = m) && (k = h)) {
                if (!Array.isArray(h))
                  throw Error("cannot check mutability state of non-array");
                k = !!(We(h) & 8);
                k = !k
              }
              if (k) {
                for (k = 0; k < n.length; k++)
                  (f = n[k]) && L(f.F) && !m && (n[k] = n[k].Yd(Vd),
                    h[k] = n[k].F);
                Ze(h, !0)
              }
              h = n;
              for (m = 0; m < Math.min(h.length, e.length); m++)
                Jf(h[m], fe(e[m], Hf))
            }
          } else
            fe(e, Hf),
            m = a,
            k = f,
            k = void 0 === k ? !1 : k,
            f = m,
            l = e.constructor,
            u = k,
            -1 === h ? f = null : (f.J || (f.J = {}),
              (n = f.J[h]) ? f = n : (l = jf(M(f, h, u), l),
                void 0 == l ? f = n : (f.J[h] = l,
                  L(f.F) && Ye(l.F),
                  f = l))),
            null != f && L(f.F) && !L(m.F) && (f = f.Yd(Vd),
              N(m, h, f.F, k),
              m.J[h] = f),
            h = f,
            h && Jf(h, e)
        }
      }
    }
  }
  var If;

  function Kf() {
    Hf.call(this, void 0);
    throw Error("ImmutableMessage is not instantiable");
  }
  D(Kf, Hf);
  Kf.prototype.clone = function () {
    return Hf.prototype.clone.call(this)
  };
  if (ef) {
    var Lf = function () {
        throw Error(Ea);
      },
      Mf = {};
    Object.defineProperties(Kf, (Mf[Symbol.hasInstance] = ff(Lf),
      Mf));
    J(Kf[Symbol.hasInstance] === Lf, ab)
  };
  J(!0);

  function Nf() {
    Hf.apply(this, arguments)
  }
  D(Nf, Hf);
  Nf.prototype.Yd = function () {
    return this
  };
  if (ef) {
    var Of = function () {
        throw Error(Ea);
      },
      Pf = {};
    Object.defineProperties(Nf, (Pf[Symbol.hasInstance] = ff(Of),
      Pf));
    J(Nf[Symbol.hasInstance] === Of, nb)
  };

  function Qf(a) {
    return a
  }

  function Rf(a, b, c, d, e, f) {
    if (a = a.J && a.J[c])
      if (Array.isArray(a)) {
        e = f.Ne ? Xe(a.slice()) : a;
        f = 0 < e.length ? e[0].constructor : void 0;
        df(b);
        if (null != e) {
          ee(e);
          d = Xe([]);
          a = !1;
          for (var h = 0; h < e.length; h++)
            d[h] = hf(e[h], $d(f)).F,
            a = a || L(d[h]);
          b.J || (b.J = {});
          b.J[c] = e;
          Ze(d, !a)
        } else
          b.J && (b.J[c] = void 0),
          d = cf;
        N(b, c, d)
      } else
        e = a.constructor,
        f = fe(a, Hf),
        df(b),
        b.J || (b.J = {}),
        e = null != f ? hf(f, $d(e)).F : f,
        b.J[c] = f,
        N(b, c, e);
    else
      Pe && d instanceof Uint8Array ? (e = d,
        fe(e, Uint8Array),
        e = e.length ? new Se(new Uint8Array(e)) : Re || (Re = new Se(null))) : d instanceof kf ? e = pf(d, Qf) : (Array.isArray(d) && (e ? Ye(d) : Array.isArray(d) && We(d) & 1 && f.Ne && (d = d.slice())),
        e = d),
      N(b, c, e)
  };

  function Sf() {
    Nf.apply(this, arguments)
  }
  D(Sf, Nf);
  Sf.prototype.Yd = function (a) {
    Wd(a);
    if (L(this.F)) {
      fe(this, Hf);
      a = {
        Ne: !0
      };
      var b = L(this.F);
      if (b && !a.Ne)
        throw Error("copyRepeatedFields must be true for frozen messages");
      var c = new this.constructor;
      this.Cc && (c.Cc = this.Cc.slice());
      for (var d = this.F, e = 0; e < d.length; e++) {
        var f = d[e];
        if (e === d.length - 1 && $e(f))
          for (var h in f) {
            var k = +h;
            Number.isNaN(k) ? Df(c)[h] = f[h] : Rf(this, c, k, f[h], b, a)
          }
        else
          Rf(this, c, e - this.jb, f, b, a)
      }
      return c
    }
    return this
  };
  Sf.prototype[bf] = !0;
  if (ef) {
    var Tf = {};
    Object.defineProperties(Sf, (Tf[Symbol.hasInstance] = ff(Object[Symbol.hasInstance]),
      Tf));
    J(Sf[Symbol.hasInstance] === Object[Symbol.hasInstance], ab)
  };

  function Uf(a) {
    Sf.call(this, a)
  }
  D(Uf, Sf);
  B = Uf.prototype;
  B.Gb = function () {
    return M(this, 1)
  };
  B.wc = function () {
    return M(this, 12)
  };
  B.vc = function () {
    return M(this, 13)
  };
  B.Uh = function () {
    return O(this, 33)
  };
  B.xd = function () {
    return Gf(this, 2)
  };
  B.wd = function () {
    return O(this, 51)
  };
  B.yd = function () {
    return O(this, 32)
  };
  B.Bd = function () {
    return Gf(this, 19)
  };
  B.Cd = function () {
    return Gf(this, 52)
  };
  B.Dd = function () {
    return Gf(this, 67)
  };
  B.Rg = function () {
    return O(this, 80)
  };
  B.vd = function () {
    return Gf(this, 20)
  };
  B.Ad = function () {
    return O(this, 60)
  };
  B.Sg = function () {
    return Gf(this, 3)
  };
  B.hh = function () {
    return Gf(this, 4)
  };
  B.zh = function () {
    return M(this, 7)
  };
  B.nh = function () {
    return O(this, 65)
  };
  B.Wg = function () {
    return M(this, 94)
  };
  B.eh = function () {
    return M(this, 29)
  };
  B.bi = function () {
    return M(this, 9)
  };
  B.di = function () {
    return M(this, 10)
  };
  B.ei = function () {
    return M(this, 11)
  };
  B.Zh = function () {
    return Gf(this, 14)
  };
  B.ah = function () {
    return Gf(this, 34)
  };
  B.ai = function () {
    return Gf(this, 72)
  };
  B.Vg = function () {
    return M(this, 15)
  };
  B.kh = function () {
    return M(this, 16)
  };
  B.mh = function () {
    return O(this, 17)
  };
  B.gi = function () {
    return O(this, 18)
  };
  B.hi = function () {
    return O(this, 45)
  };
  B.Ik = function () {
    return O(this, 22)
  };
  B.lh = function () {
    return O(this, 54)
  };
  B.Wh = function () {
    return O(this, 82)
  };
  B.Eh = function () {
    return O(this, 83)
  };
  B.Xh = function () {
    return O(this, 93)
  };
  B.Vh = function () {
    return O(this, 95)
  };
  B.Ug = function () {
    return O(this, 21)
  };
  B.Og = function () {
    return Gf(this, 23)
  };
  B.fi = function () {
    return M(this, 24)
  };
  B.ii = function () {
    return M(this, 36)
  };
  B.Th = function () {
    return Gf(this, 6)
  };
  B.Rh = function () {
    return M(this, 26)
  };
  B.gh = function () {
    return O(this, 30)
  };
  B.ji = function () {
    return O(this, 31)
  };
  B.Ah = function () {
    return O(this, 27)
  };
  B.Hh = function () {
    return M(this, 28)
  };
  B.Lh = function () {
    return O(this, 57)
  };
  B.Mh = function () {
    return O(this, 58)
  };
  B.Jh = function () {
    return O(this, 59)
  };
  B.Oh = function () {
    return Gf(this, 35)
  };
  B.Ph = function () {
    return Gf(this, 41)
  };
  B.Ih = function () {
    return Gf(this, 64)
  };
  B.yh = function () {
    return Gf(this, 48)
  };
  B.Kh = function () {
    return Gf(this, 49)
  };
  B.oh = function () {
    return O(this, 97)
  };
  B.vh = function () {
    return Gf(this, 37)
  };
  B.Ng = function () {
    return M(this, 38)
  };
  B.Mg = function () {
    return M(this, 86)
  };
  B.Lg = function () {
    return M(this, 39)
  };
  B.Jg = function () {
    return M(this, 87)
  };
  B.Bh = function () {
    return M(this, 88)
  };
  B.Yh = function () {
    return M(this, 89)
  };
  B.wh = function () {
    return O(this, 40)
  };
  B.Yg = function () {
    return M(this, 42)
  };
  B.Xg = function () {
    return M(this, 43)
  };
  B.Gh = function () {
    return M(this, 44)
  };
  B.Fh = function () {
    return M(this, 62)
  };
  B.xh = function () {
    return O(this, 46)
  };
  B.Dh = function () {
    return O(this, 61)
  };
  B.bh = function () {
    return O(this, 50)
  };
  B.uh = function () {
    return O(this, 53)
  };
  B.th = function () {
    return O(this, 55)
  };
  B.Sh = function () {
    return M(this, 56)
  };
  B.li = function () {
    return M(this, 63)
  };
  B.ri = function () {
    return M(this, 81)
  };
  B.oi = function () {
    return O(this, 98)
  };
  B.Tg = function () {
    return O(this, 90)
  };
  B.ki = function () {
    return M(this, 68)
  };
  B.ni = function () {
    return M(this, 69)
  };
  B.ph = function () {
    return O(this, 66)
  };
  B.jh = function () {
    return O(this, 70)
  };
  B.Jk = function () {
    return M(this, 71)
  };
  B.qh = function () {
    return O(this, 73)
  };
  B.Zg = function () {
    return O(this, 84)
  };
  B.sh = function () {
    return O(this, 91)
  };
  B.ih = function () {
    return O(this, 96)
  };
  B.Ig = function () {
    return O(this, 74)
  };
  B.dg = function () {
    return M(this, 75)
  };
  B.Ch = function () {
    return Ff(this, 76)
  };
  B.si = function () {
    return Ff(this, 77)
  };
  B.Qh = function () {
    return Ff(this, 78)
  };
  B.dh = function () {
    return Ff(this, 79)
  };
  B.Kg = function () {
    return M(this, 85)
  };
  B.Pg = function () {
    return M(this, 92)
  };
  B.Qg = function () {
    return M(this, 99)
  };
  B.Nh = function () {
    return O(this, 100)
  };
  B.mi = function () {
    return M(this, 102)
  };
  var Vf = Object.freeze || function (a) {
    return a
  };

  function Wf(a, b) {
    this.name = a;
    this.value = b
  }
  Wf.prototype.toString = function () {
    return this.name
  };
  var Xf = new Wf("OFF", Infinity),
    Yf = new Wf("SEVERE", 1E3),
    Zf = new Wf("CONFIG", 700);

  function $f() {
    this.clear()
  }
  var ag;
  $f.prototype.clear = function () {};

  function bg(a, b, c) {
    this.zg = void 0;
    this.reset(a || Xf, b, c, void 0, void 0)
  }
  bg.prototype.reset = function () {
    this.zg = void 0
  };

  function cg(a, b) {
    this.fe = null;
    this.Lk = [];
    this.parent = (void 0 === b ? null : b) || null;
    this.children = [];
    this.Gi = {
      ee: function () {
        return a
      }
    }
  }

  function dg(a) {
    if (a.fe)
      return a.fe;
    if (a.parent)
      return dg(a.parent);
    ae("Root logger has no level set.");
    return Xf
  }

  function eg(a, b) {
    for (; a;)
      a.Lk.forEach(function (c) {
        c(b)
      }),
      a = a.parent
  }

  function fg() {
    this.entries = {};
    var a = new cg("");
    a.fe = Zf;
    this.entries[""] = a
  }
  var gg;

  function hg(a, b) {
    var c = a.entries[b];
    if (c)
      return c;
    c = hg(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new cg(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d
  }

  function ig() {
    gg || (gg = new fg);
    return gg
  }

  function jg(a, b) {
    if (a) {
      var c = Yf,
        d;
      if (d = a)
        if (a && c) {
          d = c.value;
          if (a) {
            var e = hg(ig(), a.ee());
            e = dg(e)
          } else
            e = Xf;
          d = d >= e.value
        } else
          d = !1;
      d && (c = c || Xf,
        d = hg(ig(), a.ee()),
        typeof b === t && (b = b()),
        ag || (ag = new $f),
        a = new bg(c, b, a.ee()),
        a.zg = void 0,
        eg(d, a))
    }
  };

  function kg(a) {
    if (Zc(a))
      try {
        return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
      } catch (b) {
        return "<object could not be stringified>"
      }
    else
      return void 0 === a ? "undefined" : null === a ? "null" : typeof a
  }

  function lg(a) {
    try {
      var b = a && a.ownerDocument,
        c = b && (b.defaultView || b.parentWindow);
      c = c || E;
      if (c.Element && c.Location)
        return c
    } catch (d) {}
    return null
  };

  function mg() {}

  function ng(a) {
    var b = !1,
      c;
    return function () {
      b || (c = a(),
        b = !0);
      return c
    }
  };

  function og(a, b) {
    for (var c in a)
      b.call(void 0, a[c], c, a)
  }
  var pg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function qg(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (var f = 0; f < pg.length; f++)
        c = pg[f],
        Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }

  function rg(a) {
    var b = arguments.length;
    if (1 == b && Array.isArray(arguments[0]))
      return rg.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
      c[arguments[d]] = !0;
    return c
  };
  var sg = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
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
    wbr: !0
  };
  var tg;

  function ug() {
    if (void 0 === tg) {
      var a = null,
        b = E.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: cd,
            createScript: cd,
            createScriptURL: cd
          })
        } catch (c) {
          E.console && E.console.error(c.message)
        }
        tg = a
      } else
        tg = a
    }
    return tg
  };

  function vg(a, b) {
    this.Af = a === wg && b || "";
    this.kk = xg
  }
  vg.prototype.Ja = !0;
  vg.prototype.wa = function () {
    return this.Af
  };
  vg.prototype.toString = function () {
    return "Const{" + this.Af + "}"
  };

  function yg(a) {
    if (a instanceof vg && a.constructor === vg && a.kk === xg)
      return a.Af;
    ae("expected object of type Const, got '" + a + "'");
    return "type_error:Const"
  }
  var xg = {},
    wg = {};

  function zg(a, b) {
    this.nf = b === Ag ? a : ""
  }
  zg.prototype.toString = function () {
    return this.nf + ""
  };
  zg.prototype.Ja = !0;
  zg.prototype.wa = function () {
    return this.nf.toString()
  };

  function Bg(a) {
    if (a instanceof zg && a.constructor === zg)
      return a.nf;
    ae("expected object of type TrustedResourceUrl, got '" + a + ia + Xc(a));
    return "type_error:TrustedResourceUrl"
  }
  var Ag = {};

  function Cg(a) {
    var b = ug();
    a = b ? b.createScriptURL(a) : a;
    return new zg(a, Ag)
  };

  function Dg(a, b) {
    this.mf = b === Eg ? a : ""
  }
  Dg.prototype.toString = function () {
    return this.mf.toString()
  };
  Dg.prototype.Ja = !0;
  Dg.prototype.wa = function () {
    return this.mf.toString()
  };

  function Fg(a) {
    if (a instanceof Dg && a.constructor === Dg)
      return a.mf;
    ae("expected object of type SafeUrl, got '" + a + ia + Xc(a));
    return "type_error:SafeUrl"
  }
  var Gg = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Hg = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function Ig(a) {
    if (a instanceof Dg)
      return a;
    a = typeof a == w && a.Ja ? a.wa() : String(a);
    Hg.test(a) ? a = new Dg(a, Eg) : (a = String(a).replace(/(%0A|%0D)/g, ""),
      a = a.match(Gg) ? new Dg(a, Eg) : null);
    return a
  }
  var Eg = {},
    Jg = new Dg(Pa, Eg);
  var Kg = {};

  function Lg(a, b) {
    this.kf = b === Kg ? a : "";
    this.Ja = !0
  }
  Lg.prototype.wa = function () {
    return this.kf
  };
  Lg.prototype.toString = function () {
    return this.kf.toString()
  };
  var Mg = new Lg("", Kg);

  function Ng(a) {
    if (a instanceof Dg)
      return 'url("' + Fg(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    a = a instanceof vg ? yg(a) : Og(String(a));
    if (/[{;}]/.test(a))
      throw new Yd("Value does not allow [{;}], got: %s.", [a]);
    return a
  }

  function Og(a) {
    var b = a.replace(Pg, "$1").replace(Pg, "$1").replace(Qg, "url");
    if (Rg.test(b)) {
      if (Sg.test(a))
        return ae("String value disallows comments, got: " + a),
          Ec;
      for (var c = b = !0, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
      }
      if (!b || !c)
        return ae("String value requires balanced quotes, got: " + a),
          Ec;
      if (!Tg(a))
        return ae("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a),
          Ec
    } else
      return ae("String value allows only [-,.\"'%_!#/ a-zA-Z0-9\\[\\]] and simple functions, got: " + a),
        Ec;
    return Ug(a)
  }

  function Tg(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if ("]" == e) {
        if (b)
          return !1;
        b = !0
      } else if ("[" == e) {
        if (!b)
          return !1;
        b = !1
      } else if (!b && !c.test(e))
        return !1
    }
    return b
  }
  var Rg = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    Qg = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    Pg = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
    Sg = /\/\*/;

  function Ug(a) {
    return a.replace(Qg, function (b, c, d, e) {
      var f = "";
      d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
        f = k;
        return l
      });
      b = (Ig(d) || Jg).wa();
      return c + f + b + f + e
    })
  };
  var Vg = {};

  function Wg(a, b) {
    this.jf = b === Vg ? a : "";
    this.Ja = !0
  }
  Wg.prototype.wa = function () {
    return this.jf.toString()
  };
  Wg.prototype.toString = function () {
    return this.jf.toString()
  };

  function Xg(a) {
    if (a instanceof Wg && a.constructor === Wg)
      return a.jf;
    ae("expected object of type SafeHtml, got '" + a + ia + Xc(a));
    return "type_error:SafeHtml"
  }

  function Yg(a) {
    return a instanceof Wg ? a : Zg(ie(typeof a == w && a.Ja ? a.wa() : String(a)))
  }

  function $g(a) {
    function b(e) {
      Array.isArray(e) ? e.forEach(b) : (e = Yg(e),
        d.push(Xg(e).toString()))
    }
    var c = Yg(ah),
      d = [];
    a.forEach(b);
    return Zg(d.join(Xg(c).toString()))
  }

  function bh(a) {
    return $g(Array.prototype.slice.call(arguments))
  }

  function Zg(a) {
    var b = ug();
    a = b ? b.createHTML(a) : a;
    return new Wg(a, Vg)
  }
  var ch = /^[a-zA-Z0-9-]+$/,
    dh = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0
    },
    eh = rg("APPLET", "BASE", "EMBED", "IFRAME", "LINK", "MATH", "META", "OBJECT", Ja, "STYLE", "SVG", "TEMPLATE"),
    ah = new Wg(E.trustedTypes && E.trustedTypes.emptyHTML || "", Vg);
  var fh = {
      MATH: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0
    },
    gh = ng(function () {
      if ("undefined" === typeof document)
        return !1;
      var a = document.createElement(ob),
        b = document.createElement(ob);
      b.appendChild(document.createElement(ob));
      a.appendChild(b);
      if (!a.firstChild)
        return !1;
      b = a.firstChild.firstChild;
      a.innerHTML = Xg(ah);
      return !b.parentElement
    });

  function hh(a, b) {
    var c = lg(a);
    c && "undefined" != typeof c.HTMLScriptElement && (a && (a instanceof c.HTMLScriptElement || !(a instanceof c.Location || a instanceof c.Element)) || ae("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLScriptElement", kg(a)));
    a: {
      c = (a.ownerDocument && a.ownerDocument.defaultView || E).document;
      if (c.querySelector && (c = c.querySelector("script[nonce]")) && (c = c.nonce || c.getAttribute(Mb)) && ih.test(c))
        break a;
      c = ""
    }
    c && a.setAttribute(Mb, c);
    a.src = Bg(b)
  }

  function jh(a, b) {
    var c = lg(a);
    c && (!a || !(a instanceof c.Location) && a instanceof c.Element) && ae("Argument is not a Location (or a non-Element mock); got: %s", kg(a));
    b instanceof Dg || b instanceof Dg || (b = typeof b == w && b.Ja ? b.wa() : String(b),
      J(Hg.test(b), "%s does not match the safe URL pattern", b) || (b = Pa),
      b = new Dg(b, Eg));
    a.href = Fg(b)
  }
  var ih = /^[\w+/_-]+[=]{0,2}$/;
  var kh = String.prototype.repeat ? function (a, b) {
      return a.repeat(b)
    } :
    function (a, b) {
      return Array(b + 1).join(a)
    };

  function lh(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase()
    })
  }

  function mh(a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase()
    })
  };

  function nh(a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d)
      throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, h, k, l, m, n, u) {
      if ("%" == m)
        return "%";
      var y = c.shift();
      if ("undefined" == typeof y)
        throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = y;
      return oh[m].apply(null, arguments)
    })
  }
  var oh = {
    s: function (a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + kh(" ", Number(c) - a.length) : kh(" ", Number(c) - a.length) + a
    },
    f: function (a, b, c, d, e) {
      d = a.toString();
      isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
      var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
      0 <= Number(a) && (d = f + d);
      if (isNaN(c) || d.length >= Number(c))
        return d;
      d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
      a = Number(c) - d.length - f.length;
      return d = 0 <= b.indexOf("-", 0) ? f + d + kh(" ", a) : f + kh(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
    },
    d: function (a, b, c, d, e, f, h, k) {
      return oh.f(parseInt(a, 10), b, c, d, 0, f, h, k)
    }
  };
  oh.i = oh.d;
  oh.u = oh.d;

  function ph(a) {
    if (a.Ua && typeof a.Ua == t)
      return a.Ua();
    if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
      return Array.from(a.values());
    if (typeof a === A)
      return a.split("");
    if (Yc(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
      return b
    }
    b = [];
    c = 0;
    for (d in a)
      b[c++] = a[d];
    return b
  }

  function qh(a) {
    if (a.zd && typeof a.zd == t)
      return a.zd();
    if (!a.Ua || typeof a.Ua != t) {
      if ("undefined" !== typeof Map && a instanceof Map)
        return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (Yc(a) || typeof a === A) {
          var b = [];
          a = a.length;
          for (var c = 0; c < a; c++)
            b.push(c);
          return b
        }
        b = [];
        c = 0;
        for (var d in a)
          b[c++] = d;
        return b
      }
    }
  };

  function rh(a) {
    this.fa = void 0;
    this.R = {};
    if (a) {
      var b = qh(a);
      a = ph(a);
      for (var c = 0; c < b.length; c++)
        this.set(b[c], a[c])
    }
  }
  B = rh.prototype;
  B.set = function (a, b) {
    sh(this, a, b, !1)
  };
  B.add = function (a, b) {
    sh(this, a, b, !0)
  };

  function sh(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      a.R[f] || (a.R[f] = new rh);
      a = a.R[f]
    }
    if (d && void 0 !== a.fa)
      throw Error('The collection already contains the key "' + b + '"');
    a.fa = c
  }

  function th(a, b) {
    for (var c = 0; c < b.length; c++)
      if (a = a.R[b.charAt(c)],
        !a)
        return;
    return a
  }
  B.get = function (a) {
    return (a = th(this, a)) ? a.fa : void 0
  };
  B.Ua = function () {
    var a = [];
    uh(this, a);
    return a
  };

  function uh(a, b) {
    void 0 !== a.fa && b.push(a.fa);
    for (var c in a.R)
      uh(a.R[c], b)
  }
  B.zd = function (a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!c.R[e])
          return [];
        c = c.R[e]
      }
      vh(c, a, b)
    } else
      vh(this, "", b);
    return b
  };

  function vh(a, b, c) {
    void 0 !== a.fa && c.push(b);
    for (var d in a.R)
      vh(a.R[d], b + d, c)
  }
  B.clear = function () {
    this.R = {};
    this.fa = void 0
  };
  B.remove = function (a) {
    for (var b = this, c = [], d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if (!b.R[e])
        throw Error('The collection does not have the key "' + a + '"');
      c.push([b, e]);
      b = b.R[e]
    }
    a = b.fa;
    for (delete b.fa; 0 < c.length;)
      if (e = c.pop(),
        b = e[0],
        e = e[1],
        b.R[e].Dc())
        delete b.R[e];
      else
        break;
    return a
  };
  B.clone = function () {
    return new rh(this)
  };
  B.Dc = function () {
    var a;
    if (a = void 0 === this.fa)
      a: {
        for (var b in this.R) {
          a = !1;
          break a
        }
        a = !0
      }
    return a
  };

  function wh() {
    if (!xh) {
      var a = xh = new rh,
        b;
      for (b in yh)
        a.add(b, yh[b])
    }
  }
  var xh;
  wh.prototype.Ga = hg(ig(), "apps.photos.imageurl.ImageUrlOptionsParser").Gi;

  function Q(a, b) {
    this.types = a;
    this.gm = b
  }
  var yh = {
    a: new Q([3, 0], [function (a, b) {
      N(a, 21, b)
    }, function (a, b) {
      N(a, 56, b)
    }]),
    al: new Q([3], [function (a, b) {
      N(a, 74, b)
    }]),
    b: new Q([3, 0], [function (a, b) {
      N(a, 23, b)
    }, function (a, b) {
      N(a, 38, b)
    }]),
    ba: new Q([0], [function (a, b) {
      N(a, 85, b)
    }]),
    bc: new Q([0], [function (a, b) {
      N(a, 87, b)
    }]),
    br: new Q([0], [function (a, b) {
      N(a, 86, b)
    }]),
    c: new Q([3, 0], [function (a, b) {
      N(a, 2, b)
    }, function (a, b) {
      N(a, 39, b)
    }]),
    cc: new Q([3], [function (a, b) {
      N(a, 51, b)
    }]),
    ci: new Q([3], [function (a, b) {
      N(a, 32, b)
    }]),
    cp: new Q([0], [function (a, b) {
      N(a, 92, b)
    }]),
    cv: new Q([0], [function (a, b) {
      N(a, 94, b)
    }]),
    d: new Q([3], [function (a, b) {
      N(a, 3, b)
    }]),
    dc: new Q([5], [function (a, b) {
      N(a, 99, b)
    }]),
    df: new Q([3], [function (a, b) {
      N(a, 80, b)
    }]),
    dv: new Q([3], [function (a, b) {
      N(a, 90, b)
    }]),
    e: new Q([0], [function (a, b) {
      N(a, 15, b)
    }]),
    f: new Q([4], [function (a, b) {
      N(a, 16, b)
    }]),
    fg: new Q([3], [function (a, b) {
      N(a, 34, b)
    }]),
    fh: new Q([3], [function (a, b) {
      N(a, 30, b)
    }]),
    fm: new Q([3], [function (a, b) {
      N(a, 84, b)
    }]),
    fo: new Q([2], [function (a, b) {
      N(a, 79, b)
    }]),
    ft: new Q([3], [function (a, b) {
      N(a, 50, b)
    }]),
    fv: new Q([3], [function (a, b) {
      N(a, 31, b)
    }]),
    g: new Q([3], [function (a, b) {
      N(a, 14, b)
    }]),
    gd: new Q([3], [function (a, b) {
      N(a, 83, b)
    }]),
    h: new Q([3, 0], [function (a, b) {
      N(a, 4, b)
    }, function (a, b) {
      N(a, 13, b)
    }]),
    i: new Q([3], [function (a, b) {
      N(a, 22, b)
    }]),
    ic: new Q([0], [function (a, b) {
      N(a, 71, b)
    }]),
    id: new Q([3], [function (a, b) {
      N(a, 70, b)
    }]),
    il: new Q([3], [function (a, b) {
      N(a, 96, b)
    }]),
    ip: new Q([3], [function (a, b) {
      N(a, 54, b)
    }]),
    iv: new Q([0], [function (a, b) {
      N(a, 75, b)
    }]),
    j: new Q([1], [function (a, b) {
      N(a, 29, b)
    }]),
    k: new Q([3, 0], [function (a, b) {
      N(a, 17, b)
    }, function (a, b) {
      N(a, 42, b)
    }]),
    l: new Q([0], [function (a, b) {
      N(a, 44, b)
    }]),
    lf: new Q([3], [function (a, b) {
      N(a, 65, b)
    }]),
    lo: new Q([3], [function (a, b) {
      N(a, 97, b)
    }]),
    m: new Q([0], [function (a, b) {
      N(a, 63, b)
    }]),
    md: new Q([3], [function (a, b) {
      N(a, 91, b)
    }]),
    mm: new Q([4], [function (a, b) {
      N(a, 81, b)
    }]),
    mo: new Q([3], [function (a, b) {
      N(a, 73, b)
    }]),
    mv: new Q([3], [function (a, b) {
      N(a, 66, b)
    }]),
    n: new Q([3], [function (a, b) {
      N(a, 20, b)
    }]),
    nc: new Q([3], [function (a, b) {
      N(a, 55, b)
    }]),
    nd: new Q([3], [function (a, b) {
      N(a, 53, b)
    }]),
    ng: new Q([3], [function (a, b) {
      N(a, 95, b)
    }]),
    no: new Q([3], [function (a, b) {
      N(a, 37, b)
    }]),
    ns: new Q([3], [function (a, b) {
      N(a, 40, b)
    }]),
    nt0: new Q([4], [function (a, b) {
      N(a, 36, b)
    }]),
    nu: new Q([3], [function (a, b) {
      N(a, 46, b)
    }]),
    nw: new Q([3], [function (a, b) {
      N(a, 48, b)
    }]),
    o: new Q([1, 3], [function (a, b) {
      N(a, 7, b)
    }, function (a, b) {
      N(a, 27, b)
    }]),
    p: new Q([3, 0], [function (a, b) {
      N(a, 19, b)
    }, function (a, b) {
      N(a, 43, b)
    }]),
    pa: new Q([3], [function (a, b) {
      N(a, 61, b)
    }]),
    pc: new Q([0], [function (a, b) {
      N(a, 88, b)
    }]),
    pd: new Q([3], [function (a, b) {
      N(a, 60, b)
    }]),
    pf: new Q([3], [function (a, b) {
      N(a, 67, b)
    }]),
    pg: new Q([3], [function (a, b) {
      N(a, 72, b)
    }]),
    pi: new Q([2], [function (a, b) {
      N(a, 76, b)
    }]),
    pp: new Q([3], [function (a, b) {
      N(a, 52, b)
    }]),
    q: new Q([4], [function (a, b) {
      N(a, 28, b)
    }]),
    r: new Q([3, 0], [function (a, b) {
      N(a, 6, b)
    }, function (a, b) {
      N(a, 26, b)
    }]),
    rf: new Q([3], [function (a, b) {
      N(a, 100, b)
    }]),
    rg: new Q([3], [function (a, b) {
      N(a, 59, b)
    }]),
    rh: new Q([3], [function (a, b) {
      N(a, 49, b)
    }]),
    rj: new Q([3], [function (a, b) {
      N(a, 57, b)
    }]),
    ro: new Q([2], [function (a, b) {
      N(a, 78, b)
    }]),
    rp: new Q([3], [function (a, b) {
      N(a, 58, b)
    }]),
    rw: new Q([3], [function (a, b) {
      N(a, 35, b)
    }]),
    rwa: new Q([3], [function (a, b) {
      N(a, 64, b)
    }]),
    rwu: new Q([3], [function (a, b) {
      N(a, 41, b)
    }]),
    s: new Q([3, 0], [function (a, b) {
      N(a, 33, b)
    }, function (a, b) {
      N(a, 1, b)
    }]),
    sc: new Q([0], [function (a, b) {
      N(a, 89, b)
    }]),
    sg: new Q([3], [function (a, b) {
      N(a, 82, b)
    }]),
    sm: new Q([3], [function (a, b) {
      N(a, 93, b)
    }]),
    t: new Q([4], [function (a, b) {
      N(a, 24, b)
    }]),
    u: new Q([3], [function (a, b) {
      N(a, 18, b)
    }]),
    ut: new Q([3], [function (a, b) {
      N(a, 45, b)
    }]),
    v: new Q([0], [function (a, b) {
      N(a, 62, b)
    }]),
    vb: new Q([0], [function (a, b) {
      N(a, 68, b)
    }]),
    vf: new Q([4], [function (a, b) {
      N(a, 102, b)
    }]),
    vl: new Q([0], [function (a, b) {
      N(a, 69, b)
    }]),
    vm: new Q([3], [function (a, b) {
      N(a, 98, b)
    }]),
    w: new Q([0], [function (a, b) {
      N(a, 12, b)
    }]),
    x: new Q([0], [function (a, b) {
      N(a, 9, b)
    }]),
    y: new Q([0], [function (a, b) {
      N(a, 10, b)
    }]),
    ya: new Q([2], [function (a, b) {
      N(a, 77, b)
    }]),
    z: new Q([0], [function (a, b) {
      N(a, 11, b)
    }])
  };

  function zh(a, b) {
    return nh("For token '%s': %s", a, b)
  }
  B = wh.prototype;
  B.parse = function (a) {
    var b = new Uf,
      c = new Uf;
    if ("" == a)
      var d = !0;
    else {
      d = a.split("-");
      for (var e = !0, f = 0; f < d.length; f++) {
        var h = d[f];
        if (0 == h.length)
          jg(this.Ga, "Empty tokens not allowed."),
          e = !1;
        else {
          var k = h,
            l = !1;
          var m = k;
          var n = k.substring(0, 1);
          n != n.toLowerCase() && (l = !0,
            m = k.substring(0, 1).toLowerCase() + k.substring(1));
          var u = xh;
          for (n = 1; n <= m.length; ++n) {
            var y = u;
            var z = m.substring(0, n);
            y = 0 == z.length ? !y.Dc() : !!th(y, z);
            if (!y)
              break
          }
          m = 1 == n ? null : (m = u.get(m.substring(0, n - 1))) ? {
            Dl: k.substring(0, n - 1),
            value: k.substring(n - 1),
            nm: l,
            attributes: m
          } : null;
          if (m) {
            k = [];
            l = [];
            n = !1;
            for (u = 0; u < m.attributes.types.length; u++) {
              y = m.attributes.types[u];
              var P = m.value;
              z = f;
              if (m.nm && 1 == y)
                for (var K = P.length; 12 > K && z < d.length - 1;)
                  P += "-" + d[z + 1],
                  K = P.length,
                  ++z;
              else if (2 == y)
                for (; z < d.length - 1 && d[z + 1].match(/^[\d\.]/);)
                  P += "-" + d[z + 1],
                  ++z;
              K = m.attributes.gm[u];
              P = Ah(this, y)(m.Dl, P, b, c, K);
              if (null === P) {
                n = !0;
                f = z;
                break
              } else
                k.push(y),
                l.push(P)
            }
            if (!n)
              for (m = 0; m < l.length; m++)
                u = k[m],
                P = l[m],
                Bh(this, u)(h, P);
            e = e && n
          } else
            jg(this.Ga, "Unrecognized ImageUrlOptionsParser token: " + h),
            e = !1
        }
      }
      d = e
    }
    d || jg(this.Ga, "Options failed to parse: " + a);
    return new Ch(b, c)
  };

  function Dh(a, b, c, d, e) {
    e(c, b);
    a = a.substring(0, 1);
    e(d, a == a.toUpperCase())
  }
  B.Hl = function (a, b, c, d, e) {
    if ("" == b)
      return 0;
    isFinite(b) && (b = String(b));
    b = typeof b === A ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN;
    if (isNaN(b))
      return 1;
    Dh(a, b, c, d, e);
    return null
  };
  B.Zk = function (a, b) {
    switch (b) {
      case 1:
        jg(this.Ga, zh(a, "Option value could not be interpreted as an integer."));
        break;
      case 0:
        jg(this.Ga, zh(a, "Missing value for integer option."))
    }
  };
  B.Gl = function (a, b, c, d, e) {
    if ("" == b)
      return 0;
    var f = Number(b);
    b = 0 == f && /^[\s\xa0]*$/.test(b) ? NaN : f;
    if (isNaN(b))
      return 1;
    Dh(a, b, c, d, e);
    return null
  };
  B.Yk = function (a, b) {
    switch (b) {
      case 1:
        jg(this.Ga, zh(a, "Option value could not be interpreted as a float."));
        break;
      case 0:
        jg(this.Ga, zh(a, "Missing value for float option."))
    }
  };
  B.Fl = function (a, b, c, d, e) {
    if ("" != b)
      return 2;
    Dh(a, !0, c, d, e);
    return null
  };
  B.Xk = function (a, b) {
    switch (b) {
      case 2:
        jg(this.Ga, zh(a, "Unexpected value specified for boolean option."))
    }
  };
  B.Il = function (a, b, c, d, e) {
    if ("" == b)
      return 0;
    Dh(a, b, c, d, e);
    return null
  };
  B.bl = function (a, b) {
    switch (b) {
      case 0:
        jg(this.Ga, zh(a, "Missing value for string option."))
    }
  };

  function Ah(a, b) {
    switch (b) {
      case 0:
        return F(a.Hl, a);
      case 2:
        return F(a.Gl, a);
      case 3:
        return F(a.Fl, a);
      case 4:
      case 1:
        return F(a.Il, a);
      default:
        return function () {}
    }
  }

  function Bh(a, b) {
    switch (b) {
      case 0:
        return F(a.Zk, a);
      case 2:
        return F(a.Yk, a);
      case 3:
        return F(a.Xk, a);
      case 4:
      case 1:
        return F(a.bl, a);
      default:
        return function () {}
    }
  }

  function Ch(a, b) {
    this.ea = a;
    this.ra = b
  };

  function Eh(a, b) {
    null != a && this.append.apply(this, arguments)
  }
  B = Eh.prototype;
  B.cb = "";
  B.set = function (a) {
    this.cb = "" + a
  };
  B.append = function (a, b, c) {
    this.cb += String(a);
    if (null != b)
      for (var d = 1; d < arguments.length; d++)
        this.cb += arguments[d];
    return this
  };
  B.clear = function () {
    this.cb = ""
  };
  B.toString = function () {
    return this.cb
  };

  function Fh(a) {
    this.ff = null;
    this.ge = [];
    this.U = null;
    this.Ef = Gh;
    this.U = a ? typeof a === A ? Hh(this).parse(a) : a : Hh(this).parse("")
  }
  var Gh = hg(ig(), "apps.photos.imagurl.ImageUrlOptionsBuilderBase").Gi;

  function Hh(a) {
    null == a.ff && (a.ff = new wh);
    return a.ff
  }

  function Ih(a, b, c, d) {
    if (b == c)
      return !1;
    void 0 != c && d && jg(a.Ef, "Changing an option included in the url signature! The signature will now probably be invalid.");
    return !0
  }
  B = Fh.prototype;
  B.je = function (a) {
    a = a || void 0;
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.xd(), b.ra.xd()) && N(c, 2, a);
    return this
  };
  B.ie = function (a) {
    a = a || void 0;
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.wd(), b.ra.wd()) && N(c, 51, a);
    return this
  };
  B.ke = function (a) {
    a = a || void 0;
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.yd(), b.ra.yd()) && N(c, 32, a);
    return this
  };
  B.Oc = function (a) {
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.vc(), b.ra.vc()) && N(c, 13, a);
    return this
  };
  B.he = function (a) {
    a = a || void 0;
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.vd(), b.ra.vd()) && N(c, 20, a);
    return this
  };
  B.fc = function (a) {
    a = a || void 0;
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.Bd(), b.ra.Bd()) && N(c, 19, a);
    return this
  };
  B.le = function (a) {
    a = a || void 0;
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.Ad(), b.ra.Ad()) && N(c, 60, a);
    return this
  };
  B.ne = function (a) {
    a = a || void 0;
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.Dd(), b.ra.Dd()) && N(c, 67, a);
    return this
  };
  B.me = function (a) {
    a = a || void 0;
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.Cd(), b.ra.Cd()) && N(c, 52, a);
    return this
  };
  B.Oa = function (a) {
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.Gb(), b.ra.Gb()) && N(c, 1, a);
    return this
  };
  B.Pc = function (a) {
    var b = this.U,
      c = b.ea;
    Ih(this, a, c.wc(), b.ra.wc()) && N(c, 12, a);
    return this
  };
  B.zb = function () {
    this.ge.length = 0;
    var a = this.U,
      b = a.ea;
    a = a.ra;
    R(this, "s", b.Gb(), a.Gb());
    R(this, "w", b.wc(), a.wc());
    S(this, "c", b.xd(), a.xd());
    S(this, "d", b.Sg(), a.Sg());
    R(this, "h", b.vc(), a.vc());
    S(this, "s", b.Uh(), a.Uh());
    S(this, "h", b.hh(), a.hh());
    S(this, "p", b.Bd(), a.Bd());
    S(this, "pp", b.Cd(), a.Cd());
    S(this, "pf", b.Dd(), a.Dd());
    S(this, "n", b.vd(), a.vd());
    R(this, "r", b.Rh(), a.Rh());
    S(this, "r", b.Th(), a.Th());
    S(this, "o", b.Ah(), a.Ah());
    Jh(this, "o", b.zh(), a.zh());
    Jh(this, "j", b.eh(), a.eh());
    R(this, "x", b.bi(), a.bi());
    R(this, "y", b.di(), a.di());
    R(this, "z", b.ei(), a.ei());
    S(this, "g", b.Zh(), a.Zh());
    R(this, "e", b.Vg(), a.Vg());
    Jh(this, "f", b.kh(), a.kh());
    S(this, "k", b.mh(), a.mh());
    S(this, "u", b.gi(), !0);
    S(this, "ut", b.hi(), !0);
    S(this, "i", b.Ik(), !0);
    S(this, "a", b.Ug(), a.Ug());
    S(this, "b", b.Og(), a.Og());
    R(this, "b", b.Ng(), a.Ng());
    R(this, "c", b.Lg(), a.Lg(), 16, 8);
    Jh(this, "q", b.Hh(), a.Hh());
    S(this, "fh", b.gh(), a.gh());
    S(this, "fv", b.ji(), a.ji());
    S(this, "fg", b.ah(), a.ah());
    S(this, "ci", b.yd(), a.yd());
    Jh(this, "t", b.fi(), a.fi());
    Jh(this, "nt0", b.ii(), a.ii());
    S(this, "rw", b.Oh(), a.Oh());
    S(this, "rwu", b.Ph(), a.Ph());
    S(this, "rwa", b.Ih(), a.Ih());
    S(this, "nw", b.yh(), a.yh());
    S(this, "rh", b.Kh(), a.Kh());
    S(this, "no", b.vh(), a.vh());
    S(this, "ns", b.wh(), a.wh());
    R(this, "k", b.Yg(), a.Yg());
    R(this, "p", b.Xg(), a.Xg());
    R(this, "l", b.Gh(), a.Gh());
    R(this, "v", b.Fh(), a.Fh());
    S(this, "nu", b.xh(), a.xh());
    S(this, "ft", b.bh(), a.bh());
    S(this, "cc", b.wd(), a.wd());
    S(this, "nd", b.uh(), a.uh());
    S(this, "ip", b.lh(), a.lh());
    S(this, "nc", b.th(), a.th());
    R(this, "a", b.Sh(), a.Sh());
    S(this, "rj", b.Lh(), a.Lh());
    S(this, "rp", b.Mh(), a.Mh());
    S(this, "rg", b.Jh(), a.Jh());
    S(this, "pd", b.Ad(), a.Ad());
    S(this, "pa", b.Dh(), a.Dh());
    R(this, "m", b.li(), a.li());
    R(this, "vb", b.ki(), a.ki());
    R(this, "vl", b.ni(), a.ni());
    S(this, "lf", b.nh(), a.nh());
    S(this, "mv", b.ph(), a.ph());
    S(this, Fb, b.jh(), a.jh());
    R(this, "ic", b.Jk(), !0);
    S(this, "pg", b.ai(), a.ai());
    S(this, "mo", b.qh(), a.qh());
    S(this, "al", b.Ig(), a.Ig());
    R(this, "iv", b.dg(), a.dg());
    R(this, "pi", b.Ch(), a.Ch());
    R(this, "ya", b.si(), a.si());
    R(this, "ro", b.Qh(), a.Qh());
    R(this, "fo", b.dh(), a.dh());
    S(this, "df", b.Rg(), a.Rg());
    Jh(this, "mm", b.ri(), a.ri());
    S(this, "sg", b.Wh(), a.Wh());
    S(this, "gd", b.Eh(), a.Eh());
    S(this, "fm", b.Zg(), a.Zg());
    R(this, "ba", b.Kg(), a.Kg());
    R(this, "br", b.Mg(), a.Mg());
    R(this, "bc", b.Jg(), a.Jg(), 16, 8);
    R(this, "pc", b.Bh(), a.Bh(), 16, 8);
    R(this, "sc", b.Yh(), a.Yh(), 16, 8);
    S(this, "dv", b.Tg(), a.Tg());
    S(this, "md", b.sh(), a.sh());
    R(this, "cp", b.Pg(), a.Pg());
    S(this, "sm", b.Xh(), a.Xh());
    R(this, "cv", b.Wg(), a.Wg());
    S(this, "ng", b.Vh(), a.Vh());
    S(this, "il", b.ih(), a.ih());
    S(this, "lo", b.oh(), a.oh());
    S(this, "vm", b.oi(), a.oi());
    Jh(this, "dc", b.Qg(), a.Qg());
    S(this, "rf", b.Nh(), a.Nh());
    Jh(this, "vf", b.mi(), a.mi());
    return this.ge.join("-")
  };

  function R(a, b, c, d, e, f) {
    if (null != c) {
      if (void 0 == e)
        var h = 10;
      else
        10 != e && 16 != e ? (jg(a.Ef, "Unsupported radix (" + e + ")"),
          h = 10) : h = e;
      c = c.toString(h);
      e = new Eh;
      e.append(16 == h ? "0x" : "");
      h = e.append;
      void 0 == f ? f = "" : (f -= c.length,
        f = 0 >= f ? "" : kh("0", f));
      h.call(e, f);
      e.append(c);
      Kh(a, b, e.toString(), !!d)
    }
  }

  function S(a, b, c, d) {
    c && Kh(a, b, "", !!d)
  }

  function Jh(a, b, c, d) {
    c && Kh(a, b, c, !!d)
  }

  function Kh(a, b, c, d) {
    d && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
    a.ge.push(b + c)
  };

  function Lh(a, b) {
    this.width = a;
    this.height = b
  }
  B = Lh.prototype;
  B.clone = function () {
    return new Lh(this.width, this.height)
  };
  B.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
  };
  B.aspectRatio = function () {
    return this.width / this.height
  };
  B.Dc = function () {
    return !(this.width * this.height)
  };
  B.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  B.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  B.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };

  function Mh(a) {
    Fh.call(this, a);
    this.om = !1
  }
  bd(Mh, Fh);
  B = Mh.prototype;
  B.je = function (a) {
    a && Nh(this);
    return Mh.P.je.call(this, a)
  };
  B.Oc = function (a) {
    a = null == a || 0 > a ? void 0 : a;
    null != a && this.Oa();
    return Mh.P.Oc.call(this, a)
  };
  B.ke = function (a) {
    a && Nh(this);
    return Mh.P.ke.call(this, a)
  };
  B.ie = function (a) {
    a && Nh(this);
    return Mh.P.ie.call(this, a)
  };
  B.Oa = function (a) {
    Zc(a) ? a = Math.max(a.width, a.height) : J(null !== a, "Passing null to setSize is an error.", a);
    a = null == a || 0 > a ? void 0 : a;
    null != a && (J(isFinite(a) && 0 == a % 1, "The size %s is invalid because it is not an integer", a),
      this.Pc(),
      this.Oc());
    return Mh.P.Oa.call(this, a)
  };
  B.fc = function (a) {
    a && Nh(this);
    return Mh.P.fc.call(this, a)
  };
  B.me = function (a) {
    a && Nh(this);
    return Mh.P.me.call(this, a)
  };
  B.ne = function (a) {
    a && Nh(this);
    return Mh.P.ne.call(this, a)
  };
  B.he = function (a) {
    a && Nh(this);
    return Mh.P.he.call(this, a)
  };
  B.le = function (a) {
    a && Nh(this);
    return Mh.P.le.call(this, a)
  };
  B.Pc = function (a) {
    a = null == a || 0 > a ? void 0 : a;
    null != a && this.Oa();
    return Mh.P.Pc.call(this, a)
  };

  function Nh(a) {
    a.he();
    a.ie();
    a.je();
    a.ke();
    a.le();
    a.fc();
    a.me();
    a.ne()
  }
  B.zb = function () {
    var a = this.U.ea;
    a.gi() || a.hi() ? a.Gb() || this.Oa(0) : (a = this.U.ea,
      a.Gb() || a.wc() || a.vc() || (this.Oa(),
        this.Oc(),
        this.Pc(),
        Nh(this)));
    return Mh.P.zb.call(this)
  };
  var Oh = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

  function Ph(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1)
        } else
          f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
      }
    }
  };

  function Qh(a, b) {
    this.Ea = this.sb = this.ab = "";
    this.pb = null;
    this.kb = this.za = "";
    this.eb = !1;
    var c;
    if (a instanceof Qh)
      this.eb = void 0 !== b ? b : a.eb,
      Rh(this, a.ab),
      this.sb = a.sb,
      this.Ea = a.Ea,
      Sh(this, a.pb),
      this.za = a.za,
      Th(this, a.Za.clone()),
      this.kb = a.kb;
    else {
      var d;
      if (d = a)
        d = c = String(a).match(Oh);
      d ? (this.eb = !!b,
        Rh(this, c[1] || "", !0),
        this.sb = Uh(c[2] || ""),
        this.Ea = Uh(c[3] || "", !0),
        Sh(this, c[4]),
        this.za = Uh(c[5] || "", !0),
        Th(this, c[6] || "", !0),
        this.kb = Uh(c[7] || "")) : (this.eb = !!b,
        this.Za = new Vh(null, this.eb))
    }
  }
  Qh.prototype.toString = function () {
    var a = [],
      b = this.ab;
    b && a.push(Wh(b, Xh, !0), ":");
    var c = this.Ea;
    if (c || "file" == b)
      a.push("//"),
      (b = this.sb) && a.push(Wh(b, Xh, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      c = this.pb,
      null != c && a.push(":", String(c));
    if (c = this.za)
      this.Ea && "/" != c.charAt(0) && a.push("/"),
      a.push(Wh(c, "/" == c.charAt(0) ? Yh : Zh, !0));
    (c = this.Za.toString()) && a.push("?", c);
    (c = this.kb) && a.push("#", Wh(c, $h));
    return a.join("")
  };
  Qh.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.ab;
    c ? Rh(b, a.ab) : c = !!a.sb;
    c ? b.sb = a.sb : c = !!a.Ea;
    c ? b.Ea = a.Ea : c = null != a.pb;
    var d = a.za;
    if (c)
      Sh(b, a.pb);
    else if (c = !!a.za) {
      if ("/" != d.charAt(0))
        if (this.Ea && !this.za)
          d = "/" + d;
        else {
          var e = b.za.lastIndexOf("/"); -
          1 != e && (d = b.za.slice(0, e + 1) + d)
        }
      if (".." == d || "." == d)
        d = "";
      else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
        e = 0 == d.lastIndexOf("/", 0);
        d = d.split("/");
        for (var f = [], h = 0; h < d.length;) {
          var k = d[h++];
          "." == k ? e && h == d.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
            e && h == d.length && f.push("")) : (f.push(k),
            e = !0)
        }
        d = f.join("/")
      }
    }
    c ? b.za = d : c = "" !== a.Za.toString();
    c ? Th(b, a.Za.clone()) : c = !!a.kb;
    c && (b.kb = a.kb);
    return b
  };
  Qh.prototype.clone = function () {
    return new Qh(this)
  };

  function Rh(a, b, c) {
    a.ab = c ? Uh(b, !0) : b;
    a.ab && (a.ab = a.ab.replace(/:$/, ""))
  }

  function Sh(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
      a.pb = b
    } else
      a.pb = null
  }

  function Th(a, b, c) {
    b instanceof Vh ? (a.Za = b,
      ai(a.Za, a.eb)) : (c || (b = Wh(b, bi)),
      a.Za = new Vh(b, a.eb))
  }

  function ci(a, b) {
    return a instanceof Qh ? a.clone() : new Qh(a, b)
  }

  function Uh(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
  }

  function Wh(a, b, c) {
    return typeof a === A ? (a = encodeURI(a).replace(b, di),
      c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      a) : null
  }

  function di(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
  }
  var Xh = /[#\/\?@]/g,
    Zh = /[#\?:]/g,
    Yh = /[#\?]/g,
    bi = /[#\?@]/g,
    $h = /#/g;

  function Vh(a, b) {
    this.W = this.I = null;
    this.ka = a || null;
    this.oe = !!b
  }

  function ei(a) {
    a.I || (a.I = new Map,
      a.W = 0,
      a.ka && Ph(a.ka, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
      }))
  }
  B = Vh.prototype;
  B.add = function (a, b) {
    ei(this);
    this.ka = null;
    a = fi(this, a);
    var c = this.I.get(a);
    c || this.I.set(a, c = []);
    c.push(b);
    this.W = be(this.W) + 1;
    return this
  };
  B.remove = function (a) {
    ei(this);
    a = fi(this, a);
    return this.I.has(a) ? (this.ka = null,
      this.W = be(this.W) - this.I.get(a).length,
      this.I.delete(a)) : !1
  };
  B.clear = function () {
    this.I = this.ka = null;
    this.W = 0
  };
  B.Dc = function () {
    ei(this);
    return 0 == this.W
  };

  function gi(a, b) {
    ei(a);
    b = fi(a, b);
    return a.I.has(b)
  }
  B.forEach = function (a, b) {
    ei(this);
    this.I.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  };
  B.zd = function () {
    ei(this);
    for (var a = Array.from(this.I.values()), b = Array.from(this.I.keys()), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]);
    return c
  };
  B.Ua = function (a) {
    ei(this);
    var b = [];
    if (typeof a === A)
      gi(this, a) && (b = b.concat(this.I.get(fi(this, a))));
    else {
      a = Array.from(this.I.values());
      for (var c = 0; c < a.length; c++)
        b = b.concat(a[c])
    }
    return b
  };
  B.set = function (a, b) {
    ei(this);
    this.ka = null;
    a = fi(this, a);
    gi(this, a) && (this.W = be(this.W) - this.I.get(a).length);
    this.I.set(a, [b]);
    this.W = be(this.W) + 1;
    return this
  };
  B.get = function (a, b) {
    if (!a)
      return b;
    a = this.Ua(a);
    return 0 < a.length ? String(a[0]) : b
  };
  B.toString = function () {
    if (this.ka)
      return this.ka;
    if (!this.I)
      return "";
    for (var a = [], b = Array.from(this.I.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.Ua(d);
      for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h)
      }
    }
    return this.ka = a.join("&")
  };
  B.clone = function () {
    var a = new Vh;
    a.ka = this.ka;
    this.I && (a.I = new Map(this.I),
      a.W = this.W);
    return a
  };

  function fi(a, b) {
    b = String(b);
    a.oe && (b = b.toLowerCase());
    return b
  }

  function ai(a, b) {
    b && !a.oe && (ei(a),
      a.ka = null,
      a.I.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (this.remove(d),
          this.remove(e),
          0 < c.length && (this.ka = null,
            this.I.set(fi(this, e), we(c)),
            this.W = be(this.W) + c.length))
      }, a));
    a.oe = b
  };
  var hi = /^[^\/]*\/\//;

  function ii(a, b) {
    b = void 0 === b ? !1 : b;
    this.Fc = a;
    this.Nd = "";
    (a = this.Fc.match(hi)) && a[0] ? (this.Nd = a[0],
      a = this.Nd.match(/\w+/) ? this.Fc : "http://" + this.Fc.substring(this.Nd.length)) : a = "http://" + this.Fc;
    this.ce = ci(a, !0);
    this.xi = b;
    this.Qc = !0;
    this.Ki = !1
  }

  function ji(a, b) {
    a.Xb = a.Xb ? a.Xb + ("/" + b) : b
  }

  function ki(a) {
    if (void 0 == a.H) {
      var b = a.ce.za.substring(1);
      a.Xb = null;
      if (a.xi) {
        a.H = [];
        if (1 < (b.match(/=/g) || []).length)
          return a.Qc = !1,
            a.H;
        var c = b.indexOf("="); -
        1 != c ? (a.H.push(b.substr(0, c)),
          a.H.push(b.substr(c + 1))) : a.H.push(b);
        return a.H
      }
      a.H = b.split("/");
      b = a.H.length;
      2 < b && "u" == a.H[0] && (ji(a, a.H[0] + "/" + a.H[1]),
        a.H.shift(),
        a.H.shift(),
        b -= 2);
      if (0 == b || 4 == b || 7 < b)
        return a.Qc = !1,
          a.H;
      if (2 == b)
        ji(a, a.H[0]);
      else if ("image" == a.H[0])
        ji(a, a.H[0]);
      else if (7 == b || 3 == b)
        return a.Qc = !1,
          a.H;
      if (3 >= b) {
        a.Ki = !0;
        3 == b && (ji(a, a.H[1]),
          a.H.shift(),
          --b);
        --b;
        c = a.H[b];
        var d = c.indexOf("="); -
        1 != d && (a.H[b] = c.substr(0, d),
          a.H.push(c.substr(d + 1)))
      }
    }
    return a.H
  }

  function li(a) {
    ki(a);
    return a.Ki
  }

  function mi(a) {
    ki(a);
    return a.xi
  }

  function ni(a) {
    ki(a);
    void 0 == a.Xb && (a.Xb = null);
    return a.Xb
  }

  function oi(a) {
    switch (ki(a).length) {
      case 7:
        return !0;
      case 6:
        return null == ni(a);
      case 5:
        return !1;
      case 3:
        return !0;
      case 2:
        return null == ni(a);
      case 1:
        return !1;
      default:
        return !1
    }
  }

  function pi(a, b) {
    if (mi(a)) {
      a: {
        switch (b) {
          case 7:
            b = 0;
            break;
          case 4:
            if (!oi(a)) {
              a = null;
              break a
            }
            b = 1;
            break;
          default:
            a = null;
            break a
        }
        a = ki(a)[b]
      }
      return a
    }
    if (li(a)) {
      a: {
        var c = null != ni(a) ? 1 : 0;
        switch (b) {
          case 6:
            b = 0 + c;
            break;
          case 4:
            if (!oi(a)) {
              a = null;
              break a
            }
            b = 1 + c;
            break;
          default:
            a = null;
            break a
        }
        a = ki(a)[b]
      }
      return a
    }
    a: {
      c = null != ni(a) ? 1 : 0;
      switch (b) {
        case 0:
          b = 0 + c;
          break;
        case 1:
          b = 1 + c;
          break;
        case 2:
          b = 2 + c;
          break;
        case 3:
          b = 3 + c;
          break;
        case 4:
          if (!oi(a)) {
            a = null;
            break a
          }
          b = 4 + c;
          break;
        case 5:
          b = oi(a) ? 1 : 0;
          b = 4 + c + b;
          break;
        default:
          a = null;
          break a
      }
      a = ki(a)[b]
    }
    return a
  };

  function qi() {}
  qi.prototype.parse = function (a, b) {
    return new ri(a, void 0 === b ? !1 : b)
  };

  function ri(a, b) {
    ii.call(this, a, void 0 === b ? !1 : b)
  }
  D(ri, ii);

  function si(a, b) {
    b = void 0 === b ? !1 : b;
    this.K = null;
    a instanceof ri ? this.K = a : (void 0 == ti && (ti = new qi),
      this.K = ti.parse(a.toString(), b));
    a = this.K;
    if (void 0 == a.Ff) {
      void 0 == a.Si && (a.Si = pi(a, 4));
      (b = a.Si) || (b = "");
      var c = new wh;
      a.Ff = c.parse(b)
    }
    Mh.call(this, a.Ff);
    this.Pl = this.K.Nd;
    a = this.K;
    b = a.ce.pb;
    this.wj = a.ce.Ea + (b ? ":" + b : "");
    this.Gf = this.K.ce.Za.toString()
  }
  var ti;
  bd(si, Mh);
  si.prototype.zb = function () {
    var a = this.K;
    ki(a);
    if (!a.Qc)
      return this.K.Fc;
    var b = si.P.zb.call(this);
    a = [];
    null != ni(this.K) && a.push(ni(this.K));
    var c = mi(this.K);
    if (li(this.K)) {
      var d = this.K;
      void 0 == d.Ii && (d.Ii = pi(d, 6));
      a.push(d.Ii + (b ? "=" + b : ""))
    } else if (c) {
      d = a.push;
      var e = this.K;
      void 0 === e.Fg && (e.Fg = pi(e, 7));
      d.call(a, e.Fg);
      b && a.push(b)
    } else
      d = a.push,
      e = this.K,
      void 0 == e.Ji && (e.Ji = pi(e, 0)),
      d.call(a, e.Ji),
      d = a.push,
      e = this.K,
      void 0 == e.Vi && (e.Vi = pi(e, 1)),
      d.call(a, e.Vi),
      d = a.push,
      e = this.K,
      void 0 == e.vi && (e.vi = pi(e, 2)),
      d.call(a, e.vi),
      d = a.push,
      e = this.K,
      void 0 == e.gj && (e.gj = pi(e, 3)),
      d.call(a, e.gj),
      b && a.push(b),
      b = a.push,
      d = this.K,
      void 0 == d.Dg && (d.Dg = pi(d, 5)),
      b.call(a, d.Dg);
    a = ci(this.Pl + this.wj + "/" + (c ? a.join("=") : a.join("/")) + (this.Gf ? "?" + this.Gf : "")).toString();
    a.startsWith("%3a//") && (a = a.replace("%3a//", "://"));
    return a
  };

  function ui(a) {
    a = new si(a, !1);
    a.om = !1;
    return a
  };
  var vi = RegExp("^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(a))/([^/=?]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/]*)?$"),
    wi = RegExp("^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(proxy))/([^/=?]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/]*)?$"),
    xi = RegExp("^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com)))/img/(b)/[^/?]*/([^/=?]+)/(?:([-a-zA-Z0-9_=]+)?/(?:[^/?]*)?)?(?:\\?[^/]*)?$"),
    yi = {
      um: 1,
      proxy: 1,
      wm: 1
    };

  function zi(a, b) {
    if (Ud(a))
      return b(a);
    if (vi.test(a)) {
      var c;
      var d = null != (c = vi.exec(a)[yi.um]) ? c : ""
    } else if (wi.test(a)) {
      var e;
      d = null != (e = wi.exec(a)[yi.proxy]) ? e : ""
    } else if (xi.test(a)) {
      var f;
      d = null != (f = xi.exec(a)[yi.wm]) ? f : ""
    } else
      throw Error("Not a blogger image url: " + a);
    a = a.replace(d, Eb);
    return b(a).replace(Eb, d)
  };

  function Ai(a, b) {
    if (a) {
      b = Object.assign({}, Bi, b);
      b.N = b.N || Math.min(b.width, b.height);
      for (var c = a, d, e = 0; d = Ci[e]; e++)
        if (d.match(a)) {
          b.Ve && d.Ca ? c = d.Ca(a) : d.qa && (c = d.qa(a, b),
            d.Ha || d.Ca && d.Ca(a));
          break
        }
      return c
    }
  }
  var Bi = {
      Fm: 100,
      Em: 100,
      N: null,
      Ve: !1,
      sd: !1
    },
    Ci = [{
      Ha: !0,
      match: function (a) {
        return vi.test(a) || wi.test(a) || xi.test(a)
      },
      qa: function (a, b) {
        return zi(a, function (c) {
          c = ui(c);
          b.N && (c = c.Oa(b.N));
          b.sd && (c = c.fc(!0));
          return c.zb()
        })
      },
      Ca: function (a) {
        return this.qa(a, {
          N: 1600
        })
      }
    }, {
      Ha: !0,
      match: function (a) {
        return Ud(a)
      },
      qa: function (a, b) {
        a = ui(a);
        b.N && (a = a.Oa(b.N));
        b.sd && (a = a.fc(!0));
        return a.zb()
      },
      Ca: function (a) {
        return this.qa(a, {
          N: 1600
        })
      }
    }, {
      Ha: !0,
      match: function (a) {
        return /farm[0-9]+\.static(?:\.)?flickr\.com\/[^\/]+\/[^_]+_[^_\.]+(_[mstzb])?\.jpg/.test(a)
      },
      qa: function (a, b) {
        for (var c = [{
            Da: "_b",
            size: 1024
          }, {
            Da: "_z",
            size: 640
          }, {
            Da: "",
            size: 500
          }, {
            Da: "_m",
            size: 240
          }, {
            Da: "_t",
            size: 100
          }, {
            Da: "_s",
            size: 75
          }], d = c[0].Da, e, f = 0; e = c[f]; f++)
          e.size >= b.N && (d = e.Da);
        return a.replace(/(\/[^\/]+\/[^_]+_[^_\.]+)(_[mstzb])?\.jpg/, "$1") + d + ".jpg"
      },
      Ca: function (a) {
        return a.replace(/_[mstzb]\.jpg$/, "_b.jpg")
      }
    }, {
      Ha: !0,
      match: function (a) {
        return a.match(/maps\.googleapis\./i)
      },
      qa: function (a, b) {
        a = H.decode(a);
        b.N = Math.min(640, b.N);
        var c = (a.params.size || "").split("x"),
          d = parseInt(a.params.zoom, 10) || 1,
          e = parseInt(c[0], 10) || 512;
        c = parseInt(c[1], 10) || 512;
        var f = 180 < e;
        b.sd ? c = e = b.N : (b = b.N / Math.max(e, c),
          e = Math.floor(e * b),
          c = Math.floor(c * b));
        128 > e && f && (b = 128 / e,
          e = Math.floor(e * b),
          c = Math.floor(c * b),
          d--);
        a.size = e + "x" + c;
        a.zoom = d;
        return a.encode()
      },
      Ca: function (a) {
        return this.qa(a, {
          N: 640
        })
      }
    }, {
      Ha: !1,
      match: function (a) {
        return a.match(/i[0-9]+\.photobucket.com\/albums\/.*\.jpg$/)
      },
      qa: function (a) {
        return a.replace(/\/([^\/]+)$/, "/th_$1")
      },
      Ca: function (a) {
        return a.replace(/\/th_([^\/]+)$/, "$1")
      }
    }, {
      Ha: !1,
      match: function (a) {
        return a.match(/i[0-9]+\.tinypic.com\/[^\.]+.jpg$/)
      },
      qa: function (a) {
        return a.replace(/\/([^.]+).jpg$/, "/$1_th.jpg")
      },
      Ca: function (a) {
        return a.replace(/_th\.jpg$/, ".jpg")
      }
    }, {
      Ha: !1,
      match: function (a) {
        return a.match(/imbx.us\/[^\.]+.(jpg|png)$/)
      },
      qa: function (a) {
        return a
      },
      Ca: function (a) {
        return a
      }
    }, {
      Ha: !1,
      match: function (a) {
        return a.match(/\.ak\.fbcdn\.net\/.*photos.+_[abnqst]\.jpg$/)
      },
      qa: function (a, b) {
        for (var c = [{
            Da: "a",
            size: 180
          }, {
            Da: "s",
            size: 130
          }, {
            Da: "t",
            size: 75
          }], d = /_[abnqst]\.jpg$/, e = 0; e < c.length; e++)
          if (e == c.length - 1 || b.N >= c[e].size)
            return a.replace(d, "_" + c[e].Da + ".jpg")
      },
      Ca: function (a) {
        return a.replace(/_[abnqst]\.jpg$/, "_n.jpg")
      }
    }];

  function Di(a, b, c, d) {
    this.url = a;
    this.id = c;
    this.filter = b;
    this.baseUrl = d || this.url;
    this.allowComments = !0
  }
  B = Di.prototype;
  B.content = function () {
    !this.od && this.body && (this.od = xd(this.body, {
        tag: Gb,
        attr: x,
        attrTest: /\/www.youtube.com\//,
        replace: Ei
      }),
      this.od = xd(this.od, {
        tag: qb,
        replace: Ei
      }));
    return this.od
  };

  function Ei(a) {
    if (a.name == qb)
      return a.attr("wmode", "opaque").encode();
    if (a.name == Gb) {
      var b = ud(a.attr(x));
      return "www.youtube.com" == b.authority ? a.attr(x, b.param("wmode", "opaque").encode()).encode() : a.Ra
    }
    return a.Ra
  }
  B.text = function () {
    this.kj || (this.kj = Fi(this.body, "table"));
    return this.kj
  };
  B.summary = function (a) {
    a = a || 300;
    var b = (this.body || "").indexOf(Ba);
    if (0 <= b)
      return Fi(this.body.substr(0, b));
    a = this.text().substring(0, a).trim();
    return (b = a.match(/(?:.|\n|\r)*(\.(?=\s|\n|\r)|\.$)/)) ? b[0] : a
  };
  B.attachments = function (a) {
    this.Hb || (this.Hb = Gi(this) || []);
    return (void 0 === a ? this.Hb : this.Hb.filter(function (b) {
      return b.type == a
    })) || []
  };
  B.attach = function (a, b) {
    this.Hb || (this.Hb = []);
    a = a instanceof md ? a : new md(a, b);
    this.Hb.push(a);
    return a
  };

  function Gi(a) {
    var b = [],
      c = /(youtube\.com)|(youtu\.be)\//im,
      d = /(maps\.google\.)/im,
      e = a.title;
    b.push.apply(b, Lc(Hi(a.body).map(function (f) {
      return new md(Vb, {
        url: f,
        title: e
      })
    })));
    b.push.apply(b, Lc(xd(a.body, {
      attr: x,
      attrTest: c
    }).map(function (f) {
      f = Ii(f.attr(x));
      return new md(yc, {
        url: f.url,
        content: f.wg,
        thumbnail: f.thumbnail,
        title: e
      })
    })));
    b.push.apply(b, Lc(xd(a.body, {
      tag: Gb,
      attr: x,
      attrTest: function (f) {
        return !c.test(f)
      }
    }).map(function (f) {
      var h = new md("other", {
        url: f.attr(x),
        content: f.encode()
      });
      if (d.test(f.attr(x))) {
        var k = H.decode(f.attr(x));
        if (k) {
          var l = H.decode("//maps.googleapis.com/maps/api/staticmap"),
            m = Math.min(640, parseInt(f.attr("width"), 10) || 512);
          f = Math.min(640, parseInt(f.attr(Cb), 10) || 512);
          l.params.center = k.params.ll;
          l.params.zoom = k.params.z;
          l.params.maptype = k.params.u && "satellite" || k.params.w && "hybrid" || k.params.f && "terrain" || k.params.t && "roadmap" || "roadmap";
          l.params.sensor = !1;
          l.params.size = m + "x" + f;
          return [new md(Vb, {
            url: l.encode(),
            title: e
          }), h]
        }
      }
      return h
    })));
    b.push.apply(b, Lc(xd(a.body, {
      tag: qb,
      attr: x,
      attrTest: function (f) {
        return !c.test(f)
      }
    }).map(function (f) {
      return new md("other", {
        url: f.src,
        content: f.encode()
      })
    })));
    return b
  }

  function Ji(a) {
    var b = {};
    b.ID = a.id;
    b.Permalink = a.url;
    b.HttpPermalink = a.Mk;
    b.Date = a.published;
    b.Body = a.content();
    b.SourceTitle = a.sourceTitle;
    b.Text = !0;
    var c = a.attachments(Vb).length;
    a = a.attachments(yc).length;
    b.Photo = 1 == c;
    b.Photoset = 1 < c;
    b.Video = 0 < a;
    if (gd().get(Bb)) {
      var d = function (e) {
        var f = H.decode(e.attr(x));
        f.authority = "blitz.nocrawl." + f.authority;
        return e.attr(x, f.encode()).encode()
      };
      b.Body = xd(b.Body, {
        tag: yc,
        attr: x,
        replace: d
      });
      b.Body = xd(b.Body, {
        tag: Gb,
        attr: x,
        replace: d
      });
      b.Body = xd(b.Body, {
        tag: qb,
        attr: x,
        replace: d
      });
      b.Body = xd(b.Body, {
        tag: "script",
        replace: function (e) {
          return e.attr(x) ? d(e) : ""
        }
      })
    }
    return b
  }

  function Ki(a) {
    var b = {};
    b.Photos = a.attachments(Vb).map(function (c) {
      var d = Ai(c.url, {
          Ve: !0
        }),
        e;
      a: {
        if (d)
          for (var f = 0; e = Ci[f]; f++)
            if (e.match(d) && e.Ha) {
              e = !0;
              break a
            }
        e = !1
      }
      return e ? {
        Caption: c.title || a.title,
        LinkURL: d,
        PhotoURL: c.url,
        "PhotoURL-HighRes": d,
        PhotoWidth: c.width,
        PhotoHeight: c.height
      } : null
    });
    b.Photos && b.Photos.length && Object.assign(b, b.Photos[0]);
    b.Videos = a.attachments(yc).map(function (c) {
      var d = Ii(c.url);
      return {
        Caption: c.title,
        Video: d.wg,
        VideoURL: d.url,
        PhotoURL: d.thumbnail
      }
    });
    b.Videos && b.Videos.length && (b.Video = b.Videos[0].Video,
      b.VideoURL = b.Videos[0].VideoURL,
      b.PhotoURL = b.PhotoURL || b.Videos[0].PhotoURL);
    b.Attachments = a.attachments().map(function (c) {
      var d = {
        Caption: c.title,
        URL: c.url,
        Content: c.content
      };
      c.type == Vb ? (d.Photo = !0,
        d.PhotoURL = c.url,
        d["PhotoURL-HighRes"] = Ai(c.url, {
          Ve: !0
        }),
        d.PhotoWidth = c.width,
        d.PhotoHeight = c.height) : c.type == yc ? (c = Ii(c.url),
        d.Video = c.wg,
        d.PhotoURL = c.thumbnail) : "article" == c.type && (d.Article = !0);
      return d
    });
    return b
  }
  B.data = function () {
    var a = Ji(this),
      b = Ki(this),
      c = {};
    a = Kc([a, b]);
    for (b = a.next(); !b.done; b = a.next()) {
      b = Kc(Object.entries(b.value));
      for (var d = b.next(); !d.done; d = b.next()) {
        var e = Kc(d.value);
        d = e.next().value;
        e = e.next().value;
        void 0 !== e && (c[d] = e)
      }
    }
    c.Title = this.title;
    c.PlaintextBody = this.text();
    this.body && 0 <= this.body.indexOf(Ba) && (c.Summary = this.summary());
    this.author && (c.PostAuthorName = this.author.name,
      c.PostAuthorURL = this.author.profileUrl,
      c.PostAuthorPortraitURL = this.author.image);
    this.geoLocation && (c.GeoLocationName = this.geoLocation.name,
      c.GeoLocationLatitude = this.geoLocation.latitude,
      c.GeoLocationLongitude = this.geoLocation.longitude);
    this.tags && (c.Tags = this.tags.map(function (f) {
        return {
          Tag: f
        }
      }),
      c.TagsAsClasses = od(this.tags));
    this.relatedUrl && (c.RelatedURL = this.relatedUrl);
    Object.assign(c, Pd(this));
    return c
  };
  B.compareTo = function (a) {
    return a && this.id && this.id == a.id ? 0 : a && this.published && a.published ? this.published.getTime() - a.published.getTime() : -1
  };

  function Ii(a) {
    var b = /(?:(?:vi?)|(?:\.be)|(?:embed))[=\/]([^\?&]+)/i;
    if (b.test(a)) {
      var c = b.exec(a);
      var d = ['<iframe width="500" height="281" src="//www.youtube.com/embed/', c[1], '?wmode=opaque" frameborder="0" allowfullscreen></iframe>'].join("");
      a = "//www.youtube.com/v/" + c[1];
      c = ["//img.youtube.com/vi/", c[1], "/0.jpg"].join("")
    } else
      /vimeo/.test(a) && (d = ['<iframe width="500" height="281" src="', a, '" frameborder="0" allowfullscreen></iframe>'].join(""));
    return {
      embed: d,
      url: a,
      thumbnail: c
    }
  }

  function Hi(a) {
    a = a || "";
    for (var b = [], c; c = Li.exec(a);) {
      c = c[1];
      for (var d, e = void 0, f = !0; d = Mi.exec(c);)
        if ("" !== d[1] && "" !== d[2]) {
          var h = d[1].toLowerCase();
          d = d[2].replace(/^('|")(.*)(\1)$/, "$2");
          h == x ? e = d : ("width" == h || h == Cb) && 1 >= parseInt(d, 10) && (f = !1)
        }
      e && f && b.push(e)
    }
    return b
  }

  function Fi(a, b) {
    a = a || "";
    for (var c, d = 0; c = Ni[d]; d++)
      a = a.replace(c, "");
    c = document.createElement(ob);
    pd(c, a.replace(/\n/g, " "));
    c.querySelectorAll("div,h1,h2,h3,h4,h5,h6,p").forEach(function (e) {
      e.append("\n\n")
    });
    c.querySelectorAll("br").forEach(function (e) {
      e.replaceWith(document.createTextNode("\n\n"))
    });
    void 0 !== b && Array.from(c.querySelectorAll(b)).forEach(function (e) {
      e.remove()
    });
    a = c.textContent.replace(/(\n|\r){2}(\s|\n|\r)+/g, "\n\n");
    a = a.replace(/[ \t]+/g, " ");
    return a.replace(/ \n/g, "\n").trim()
  }
  var Li = /<img\b([^>]*(?:.*?))\/?>/ig,
    Mi = /([^\s=]+)\s*=\s*((?:')[^<']*(?:')|(?:")[^<"]*(?:"))/g,
    Ni = [/<head[^>]*?>(?:.|\n|\r)*?<\/head>/ig, /<style[^>]*?>(?:.|\n|\r)*?<\/style>/ig, /<script[^>]*?>(?:.|\n|\r)*?<\/script>/ig, /<object[^>]*?>(?:.|\n|\r)*?<\/object>/ig, /<embed[^>]*?>(?:.|\n|\r)*?<\/embed>/ig, /<applet[^>]*?>(?:.|\n|\r)*?<\/applet>/ig, /<noframes[^>]*?>(?:.|\n|\r)*?<\/noframes>/ig, /<noscript[^>]*?>(?:.|\n|\r)*?<\/noscript>/ig, /<noembed[^>]*?>(?:.|\n|\r)*?<\/noembed>/ig, /<img[^>]*?.*?\/?>/ig];

  function Oi(a) {
    return a && a.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/'/g, "&#39;").replace(/`/g, "&#96;").replace(/"/g, "&quot;") || ""
  };

  function Pi(a, b, c, d) {
    Di.call(this, a, b, c, d)
  }
  D(Pi, Di);
  Pi.prototype.data = function () {
    var a = Di.prototype.data.call(this);
    a.Blogger = !0;
    a.PostID = this.id;
    a.BlogID = this.blogId;
    a.Comments = a.Notes = !!gd().get(gb) && !!this.allowComments;
    a.Comments && (a.CommentCount = a.NoteCount = this.commentCount || 0,
      a.CommentCountWithLabel = a.CommentCount + " comment" + (1 != a.CommentCount ? "s" : ""),
      a.NoteCountWithLabel = a.CommentCountWithLabel,
      a.CommentModerationMode = this.Dm);
    if (this.tags) {
      for (var b, c, d = 0; c = G().resources()[d]; d++)
        c instanceof jd && c.id == this.blogId && (b = c.baseUrl);
      var e = b || "";
      e += "/" == e[e.length - 1] ? "" : "/";
      e += "search/label/";
      a.Tags = this.tags.map(function (f) {
        return {
          Tag: Oi(f),
          URLSafeTag: encodeURIComponent(f),
          TagURL: e + encodeURIComponent(f)
        }
      })
    }
    return a
  };

  function Qi(a) {
    if (void 0 !== a) {
      var b = new Date,
        c = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{2,3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(a);
      if (!c)
        return Date.parse && b.setTime(Date.parse(a)),
          isNaN(b.getTime()) ? void 0 : b;
      a = [];
      a[1] = parseInt(c[1], 10) || 0;
      a[4] = parseInt(c[4], 10) || 0;
      a[5] = parseInt(c[5], 10) || 0;
      a[6] = parseInt(c[6], 10) || 0;
      a[7] = parseInt(c[7], 10) || 0;
      a[10] = parseInt(c[10], 10) || 0;
      a[11] = parseInt(c[11], 10) || 0;
      a[2] = (parseInt(c[2], 10) || 1) - 1;
      a[3] = parseInt(c[3], 10) || 1;
      var d = 0;
      "Z" !== c[8] && c[9] && (d = 60 * a[10] + a[11],
        "+" == c[9] && (d = 0 - d));
      b.setTime(Date.UTC(a[1], a[2], a[3], a[4], a[5] + d, a[6], a[7]));
      return b
    }
  }

  function Ri(a) {
    function b(c) {
      return 10 > c ? "0" + c : c
    }
    return [a.getUTCFullYear(), "-", b(a.getUTCMonth() + 1), "-", b(a.getUTCDate()), "T", b(a.getUTCHours()), ":", b(a.getUTCMinutes()), ":", b(a.getUTCSeconds()), "Z"].join("")
  };

  function Si(a) {
    this.source = a || window._WidgetManager && window._WidgetManager._GetAllData && window._WidgetManager._GetAllData();
    this.oj = gd()
  }
  Si.prototype.get = function () {
    if (!this.source || 0 == Object.keys(this.source).length)
      return {
        ready: !1
      };
    var a = {
      ready: !0
    };
    if (this.source.blog) {
      var b = this.source.blog,
        c = this.source && this.source.skin && this.source.skin.vars || void 0,
        d = this.source.view,
        e = this.source.widgets;
      if (b) {
        a.blog_locale = b.locale;
        a.blog_title = b.title;
        a.blog_id = b.blogId;
        a.comments_enabled = !0;
        a.comments_mtd = 2;
        a.feeds_api = 2;
        a.analytics_id = b.analyticsAccountNumber;
        a.adsense_client_id = b.adsenseClientId;
        a.adsense_host_id = "pub-1556223355139109";
        a.adsense_has_ads = b.adsenseHasAds;
        a.blog_url = b.homepageUrl ? H.decode(b.homepageUrl).encode(!1, !1) : "/";
        if (b.bloggerUrl) {
          var f = H.decode(b.bloggerUrl);
          f.scheme = Db;
          a.blogger_base = f.encode()
        }
        a.canonical_url = b.canonicalUrl;
        a["private"] = !!b.isPrivateBlog;
        a.hasCustomDomain = !!b.hasCustomDomain;
        a.is_mobile = !!b.isMobileRequest;
        a.is_tablet = (!!b.isMobileRequest || Id) && 768 <= window.screen.width && 1600 >= window.screen.width;
        f = this.oj.Cf;
        a.filter_permalink = Id && "classic" == f;
        a.pageType = b.pageType;
        a.postId = b.postId;
        a.pageId = b.pageId;
        a.boq_comment_iframe_form = !!b.boqCommentIframeForm;
        a.login_redirect_param = b.loginRedirectParam
      }
      c && (a.template_styles = {
          "font:Text": c.page_text_font,
          "color:Text": c.page_text_color,
          "image:Background": c.body_background,
          "color:Background": c.body_background_color,
          "color:Header Background": c.header_background_color,
          "color:Primary": c.primary_color,
          "color:Menu Text": c.menu_text_color,
          "font:Menu": c.menu_font,
          "font:Link": c.link_font,
          "color:Link": c.link_color,
          "color:Link Visited": c.link_visited_color,
          "color:Link Hover": c.link_hover_color,
          "font:Blog Title": c.blog_title_font,
          "color:Blog Title": c.blog_title_color,
          "font:Blog Description": c.blog_description_font,
          "color:Blog Description": c.blog_description_color,
          "font:Post Title": c.post_title_font,
          "color:Post Title": c.post_title_color,
          "color:Ribbon": c.ribbon_color,
          "color:Ribbon Hover": c.ribbon_hover_color
        },
        a.additional_css = this.source && this.source.skin && this.source.skin.override || void 0);
      if (d) {
        var h = this.oj.Cf;
        a.views = [];
        Object.values(d).forEach(function (k) {
          k.name && k.url && a.views.push({
            name: k.name,
            url: k.url,
            selected: k.name == h
          })
        })
      }
      e && (a.widget_settings = {},
        Object.entries(e).forEach(function (k) {
          k = Kc(k);
          var l = k.next().value;
          k = k.next().value;
          a.widget_ids || (a.widget_ids = []);
          a.widget_settings[l] = k.settings;
          a.widget_ids.push(l);
          if (/^PageList\d+$/.test(l))
            k = k.links.map(function (u) {
              return {
                title: u.title,
                url: u.href,
                page_id: u.id
              }
            }),
            a.pages || (a.pages = []),
            a.pages = a.pages.concat(k);
          else if (/^Blog\d+$/.test(l)) {
            if (l = k.previewPost) {
              var m = new Pi;
              m.id = l.id;
              m.url = l.url;
              m.title = l.title;
              m.body = l.body;
              var n = l.timestampISO8601;
              m.published = Qi(n);
              m.updated = Qi(n);
              m.commentCount = l.numComments;
              m.allowComments = l.allowComments;
              m.author = new hd(l.author, l.authorUrl, l.authorPhoto && l.authorPhoto.url || void 0);
              m.tags = (l.labels || []).map(function (u) {
                return u.name
              });
              a.preview = m
            }
            (k = k.navMessage) && b && "error_page" == b.pageType && (a.error = k)
          }
        }))
    } else
      Object.assign(a, this.source),
      a.views = blogger.views;
    a.blog_url = a.blog_url || H.decode().root();
    a.canonical_url = a.canonical_url || H.decode().encode(!1, !1);
    c = H.decode(a.canonical_url);
    c.scheme = "http";
    a.http_canonical_url = c.encode();
    c = H.decode();
    if (void 0 !== c.param("z") || "z" == c.fragment)
      a.headless = !0;
    return a
  };

  function Ti() {
    this.Ab = {}
  }
  Ti.prototype.addListener = function (a, b) {
    this.Ab[a] || (this.Ab[a] = []);
    this.Ab[a].push(b)
  };
  Ti.prototype.removeListener = function (a, b) {
    var c = this.Ab[a];
    c && (this.Ab[a] = c.filter(function (d) {
      return d !== b
    }))
  };
  Ti.prototype.notify = function (a, b) {
    var c = Array.from(arguments),
      d = c.shift(),
      e = this.Ab[d];
    if (e)
      for (var f = {
          Zb: 0
        }; f.Zb < e.length; f = {
          Zb: f.Zb
        },
        ++f.Zb)
        setTimeout(function (h) {
          return function () {
            var k = new CustomEvent(d);
            e[h.Zb].apply(e, [k].concat(Lc(c)))
          }
        }(f), 0)
  };

  function Ui(a) {
    return typeof a.className == A ? a.className : a.getAttribute && a.getAttribute(q) || ""
  }

  function Vi(a) {
    return a.classList ? a.classList : Ui(a).match(/\S+/g) || []
  }

  function Wi(a, b) {
    typeof a.className == A ? a.className = b : a.setAttribute && a.setAttribute(q, b)
  }

  function Xi(a, b) {
    a.classList ? b = a.classList.contains(b) : (a = Vi(a),
      b = 0 <= te(a, b));
    return b
  }

  function T(a, b) {
    if (a.classList)
      a.classList.add(b);
    else if (!Xi(a, b)) {
      var c = Ui(a);
      Wi(a, c + (0 < c.length ? " " + b : b))
    }
  }

  function Yi(a) {
    var b = [mb, "delay"];
    if (a.classList)
      Array.prototype.forEach.call(b, function (e) {
        T(a, e)
      });
    else {
      var c = {};
      Array.prototype.forEach.call(Vi(a), function (e) {
        c[e] = !0
      });
      Array.prototype.forEach.call(b, function (e) {
        c[e] = !0
      });
      b = "";
      for (var d in c)
        b += 0 < b.length ? " " + d : d;
      Wi(a, b)
    }
  }

  function U(a, b) {
    a.classList ? a.classList.remove(b) : Xi(a, b) && Wi(a, Array.prototype.filter.call(Vi(a), function (c) {
      return c != b
    }).join(" "))
  }

  function V(a, b, c) {
    c ? T(a, b) : U(a, b)
  };

  function W() {
    this.Xi = !1;
    this.settings = {}
  }
  B = W.prototype;
  B.start = function (a, b) {
    this.ui = a;
    this.data = b;
    this.settings = Object.assign({}, {
      name: zc,
      scrollBuffer: 400,
      pageSize: 25,
      autoselect: !0
    }, this.Ta());
    this.ua(this.Ml)
  };
  B.Ta = function () {
    return {}
  };
  B.Ai = function () {
    return !0
  };
  B.yj = function () {
    return this.settings.name
  };
  B.ua = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if (typeof d === t) {
      var e = this;
      setTimeout(function () {
        d.apply(e, c)
      }, 0)
    }
  };
  B.template = function (a, b) {
    if (a = I().template(a)) {
      var c = a.apply;
      b = void 0 !== b ? Ld(b) : Jd();
      this.scope(b);
      return (c.call(a, b) || "").trim()
    }
    return ""
  };
  B.scope = function () {};
  B.ef = function (a) {
    var b = a.target.closest(g);
    if (b) {
      var c = b.dataset.id;
      if (c && !a.metaKey) {
        if (a.target.matches("a")) {
          var d = a.target.getAttribute("href");
          if (H.decode(d).authority && H.isCrossDomain(d) && a.target.closest(".title"))
            return
        }
        a.stopPropagation();
        a.preventDefault();
        this.ui.select(c, b);
        return !1
      }
    }
  };
  B.Ba = function (a) {
    void 0 !== a && (this.Xi = !!a);
    return this.Xi
  };
  B.Ka = function (a) {
    this.Ba() || this.ui.headless() || (a || this.Jd()) && this.ua(this.Wi)
  };
  B.Jd = function () {
    if (!this.data.hasNext())
      return !1;
    var a = this.settings.scrollBuffer >= document.body.clientHeight - window.innerHeight - window.pageYOffset;
    if (!a) {
      var b = this.ui.current();
      b && this.data.items().indexOf(b) == this.data.items().length - 1 && (a = !0)
    }
    return a
  };
  B.Ml = function () {
    this.Ai() && this.ui.Ak();
    this.ui.configure().view(this);
    this.Ec();
    this.ua(this.zj);
    for (var a = 0; a < Zi.length; a++) {
      var b = Zi[a];
      this.ui.shortcut(b.chord, b.action)
    }
  };
  B.zj = function () {
    var a = this,
      b = document.querySelector($a);
    T(b, this.settings.name);
    T(b, Id ? "touch" : "notouch");
    window.addEventListener(cc, this.Cj.bind(this));
    window.addEventListener(Yb, this.Bj.bind(this));
    this.settings.autoselect && document.body.addEventListener(db, this.ef.bind(this));
    this.data.addListener(Kb, function (c, d) {
      U(document.querySelector($a), "loading");
      a.ua(a.Nl, d)
    });
    this.ui.addListener(ec, this.Dj.bind(this));
    this.ui.addListener(cb, this.Le.bind(this));
    this.ui.addListener("filter", this.xj.bind(this));
    this.ui.addListener("clearfilter", this.tk.bind(this));
    this.ua(this.Nk)
  };
  B.Nk = function () {
    this.Xa();
    this.ua(this.Wi)
  };
  B.Wi = function () {
    !this.data.waiting() && this.data.hasNext() && this.ua(this.Aj)
  };
  B.Aj = function () {
    T(document.querySelector($a), "loading");
    this.data.next(parseInt(this.settings.pageSize, 10) || 1)
  };
  B.Nl = function (a) {
    this.ui.headless() && /\.*(?:(\/\d{4}\/\d{2}\/[^\/]+)|\/p(\/[^\/]+\.html))$/.test(H.decode().path) || (!1 !== this.Oi(a) ? this.ua(this.Rl, a) : (this.ua(this.Hf, a),
      this.ui.updated()))
  };
  B.Rl = function (a) {
    this.Ya(a);
    this.ua(this.Hf)
  };
  B.Hf = function () {
    this.ui.updated();
    this.Sc();
    this.ua(this.Ka)
  };
  B.Bj = function () {
    this.Ld();
    this.Ka()
  };
  B.Cj = function () {
    this.Qi();
    this.Ka()
  };
  B.Dj = function (a, b) {
    this.ui.headless() || this.Tb(b)
  };
  B.Le = function () {
    this.Mi()
  };
  B.xj = function (a, b, c) {
    this.Wa(b, c)
  };
  B.tk = function () {
    this.La()
  };

  function $i(a) {
    var b = document.querySelectorAll("head style");
    b && Array.from(b).forEach(function (c) {
      c.matches(".singleton-element") || c.remove()
    });
    aj(a);
    b = document.querySelector($a);
    Array.from(b.children).forEach(function (c) {
      c.matches(va) || c.remove()
    });
    pd(document.body, a.template("Main"));
    V(b, Hb, a.ui.headless());
    a.ui.notify(xc)
  }

  function aj(a) {
    var b = document.querySelector(v),
      c = b.querySelector("css");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "css");
    c.append(a.template("CSS"));
    b.append(c)
  }
  B.log = function (a) {
    var b = window.console;
    b && b.log && b.log(a)
  };
  B.Ec = function () {};
  B.Xa = function () {};
  B.Oi = function () {};
  B.Ya = function () {};
  B.Sc = function () {};
  B.Ld = function () {};
  B.Qi = function () {};
  B.Tb = function () {};
  B.Mi = function () {};
  B.Wa = function () {};
  B.La = function () {};
  W.prototype.needMore = W.prototype.Jd;
  W.prototype.maybeMore = W.prototype.Ka;
  W.prototype.preventMore = W.prototype.Ba;
  W.prototype.scope = W.prototype.scope;
  W.prototype.template = W.prototype.template;
  var Zi = [{
    chord: "j",
    action: "next"
  }, {
    chord: "k",
    action: "previous"
  }, {
    chord: ":t",
    action: "templates"
  }, {
    chord: [37],
    action: "previous"
  }, {
    chord: [39],
    action: "next"
  }, {
    chord: [27],
    action: "clearSelection"
  }];

  function bj() {
    this.yc = "";
    this.Di = new Date;
    this.Ge = {}
  }
  bj.prototype.init = function (a) {
    this.A = a;
    document.addEventListener("keypress", this.sl.bind(this));
    document.addEventListener("keydown", this.rl.bind(this))
  };

  function cj(a) {
    return a.map(function (b) {
      return String.fromCharCode(b).toLowerCase()
    }).join("")
  }
  bj.prototype.shortcut = function (a, b) {
    a = Array.isArray(a) ? cj(a) : a;
    null === b ? delete this.Ge[a] : this.Ge[a] = b
  };
  bj.prototype.sl = function (a) {
    return dj(this, a)
  };
  bj.prototype.rl = function (a) {
    if (-1 !== [27, 37, 38, 39, 40].indexOf(a.which || a.keyCode || 0))
      return dj(this, a)
  };

  function dj(a, b) {
    if (/input|textarea|select|option|button/i.test(b.target.tagName))
      return !0;
    var c = a.Ge || {},
      d = String.fromCharCode(b.which || b.keyCode || 0).toLowerCase(),
      e = new Date;
    a.yc = 1E3 > e - a.Di ? a.yc + d : d;
    a.Di = e;
    d = a.yc.length;
    for (e = 0; e < d; e++) {
      var f = a.yc.substr(e);
      if (c[f]) {
        a.yc = "";
        if (typeof c[f] === t)
          c[f]();
        else if (a.A[c[f]])
          a.A[c[f]]();
        else
          a.A.notify(c[f]);
        b.preventDefault();
        return !1
      }
      for (var h in c)
        if (0 == h.indexOf(f))
          return
    }
  };

  function ej(a, b, c) {
    this.name = a;
    this.module = b;
    this.Bk = c
  }

  function fj() {
    this.hc = {}
  }
  var gj;

  function hj(a) {
    return Object.values(a.hc).filter(function (b) {
      return b.Bk
    }).map(function (b) {
      return b.name
    })
  }

  function ij(a, b, c) {
    jj.hc[a] = new ej(a, b, void 0 === c ? !0 : c)
  }
  fj.prototype.reset = function () {
    this.hc = {}
  };

  function kj() {
    gj || (gj = new fj);
    return gj
  };

  function lj() {}
  B = lj.prototype;
  B.init = function (a, b) {
    this.value = a;
    this.start = b;
    return this
  };
  B.invalid = function (a) {
    a && (this.If = a);
    return this.If || !1
  };
  B.apply = function () {};
  B.extractAttributes = function (a, b) {
    b = this.Xe(!1 === b ? mj : nj);
    for (var c, d = -1; c = b.exec(a);)
      if (d++,
        d += c[0].length,
        "" !== c[1] && "" !== c[2]) {
        var e = c[2].replace(/^('|")(.*)(\1)$/, "$2");
        this.attr(c[1], e)
      } else
        this.invalid("Invalid attribute");
    d != a.length && this.invalid("Invalid attribute string")
  };
  B.attr = function (a, b) {
    void 0 !== b && (this.attributes = this.attributes || {},
      this.attributes[a] = typeof b === A ? b : "" + b);
    if (this.attributes)
      return this.attributes[a]
  };
  B.Xe = function (a) {
    if (a.global)
      return new RegExp(a);
    a = a.source;
    a = a.replace(/^\^/, "").replace(/\$$/, "");
    return new RegExp(a, "g")
  };
  var mj = /([^\s=]+)\s*=\s*('[^<']*'|"[^"]*"|[\S]*)/g,
    nj = /([^\s=]+)\s*=\s*('[^']*'|"[^"]*")/g;

  function oj() {}
  D(oj, lj);
  oj.prototype.init = function (a, b) {
    lj.prototype.init.call(this, a, b);
    (this.variable = this.tag = (a = pj.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2]): this.invalid(Ha);
    if (this.tag)
      for (b = 0; a = qj[b]; b++)
        if (0 === this.tag.indexOf(a.prefix)) {
          this.transform = a.prefix;
          this.variable = this.tag.substr(a.prefix.length);
          break
        }
    this.name = this.variable;
    return this
  };
  oj.prototype.apply = function (a) {
    if (this.variable) {
      var b = I(),
        c = b.template(this.tag);
      if (c && !a.scope(Na + this.tag)) {
        var d = b.oa(a.context, a);
        d.scope(Na + this.tag, !0);
        for (var e in this.attributes)
          d.scope(e, b.resolveAttr(this, e, a));
        return c.apply(d)
      }
      c = (b = b.generator(this.variable)) ? b.apply(this, [a]) : a.data(this.variable);
      b || void 0 !== c || "Value" != this.variable || (c = a.context);
      a: if (a = c,
        this.transform && a)
        for (c = 0; b = qj[c]; c++)
          if (b.prefix === this.transform) {
            a = b.transform(a);
            break a
          }
      return a
    }
  };

  function rj(a) {
    var b = document.createElement(ob);
    pd(b, a);
    return b.textContent
  }
  var pj = /^{([^\s:}]+)(?:\s(.+))?}$/,
    qj = [{
      prefix: "JSPlaintext",
      transform: function (a) {
        a = rj(a);
        return ["'", a ? a.replace(/'/g, "&#039;") : "", "'"].join("")
      }
    }, {
      prefix: "Plaintext",
      transform: function (a) {
        return rj(a)
      }
    }, {
      prefix: "URLEncoded",
      transform: function (a) {
        return encodeURIComponent(a)
      }
    }, {
      prefix: "JS",
      transform: function (a) {
        return ["'", a ? a.replace(/'/g, "&#039;") : "", "'"].join("")
      }
    }, {
      prefix: "HTMLEscaped",
      transform: function (a) {
        return (a || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
    }];
  var sj = /^\/(\d{4})_(\d{2})_(\d{2})_archive\.html$/,
    tj = /^\/(\d{4})(\/\d{2})?\/?$/,
    uj = /^([^\/?#]+)\.blogspot\.[^\/?#]+$/i;

  function vj() {
    var a = gd(),
      b = H.decode(void 0),
      c = a.get("pageType"),
      d = new id;
    if (b.path && 0 <= b.path.indexOf(Aa))
      return d.tags = [decodeURIComponent(b.path.substr(b.path.indexOf(Aa) + 14))],
        d;
    if (sj.test(b.path))
      return b = sj.exec(b.path),
        a = parseInt(b[1], 10),
        b = parseInt(b[2], 10) - 1,
        d.Lb = new Date(a, b, 1),
        d.Kb = new Date(a, b + 1, 0),
        d;
    if (tj.test(b.path))
      return b = tj.exec(b.path),
        a = parseInt(b[1], 10),
        b[2] ? (b = parseInt(b[2].substr(1), 10) - 1,
          d.Lb = new Date(a, b, 1),
          d.Kb = new Date(a, b + 1, 0)) : (d.Lb = new Date(a, 0, 1),
          d.Kb = new Date(a, 12, 0)),
        d;
    if (a.get(vb) && "item" == c)
      return d.Kl = b.path,
        d;
    if (a.get(vb) && c == lc)
      return d.El = b.path,
        d;
    if (b.path && 0 == b.path.indexOf("/search"))
      return d.Lb = b.params["updated-min"] ? Qi(decodeURIComponent(b.params["updated-min"])) : void 0,
        d.Kb = b.params["updated-max"] ? Qi(decodeURIComponent(b.params["updated-max"])) : void 0,
        b.params.q && (d.query = decodeURIComponent(b.params.q).replace(/(\+)+/g, " ")),
        d.Lb || d.Kb || d.query ? d : void 0
  }

  function wj(a) {
    a = typeof a === A ? H.decode(a) : a;
    if (a.authority)
      if (H.isCrossDomain(a.encode())) {
        a = uj.exec(a.authority);
        var b = uj.exec(H.decode().authority);
        if (b && a && b[1] == a[1])
          return !0
      } else
        return !0;
    else
      return !0;
    return !1
  }

  function xj(a) {
    var b = H.decode(gd().get(Xa));
    b.path = "/search";
    b.params.q = a.trim().replace(/(\s)+/g, "+");
    jh(window.location, b.encode())
  };

  function yj() {
    this.tf = {}
  }
  var zj;
  yj.prototype.create = function (a) {
    var b = a.match(/([^\d]*)(\d*)$/);
    a = b[1];
    b = "" !== b[2] ? b[2] : void 0;
    return this.tf[a] && new this.tf[a](b)
  };

  function Aj(a, b, c) {
    b && c && (a.tf[b] = c)
  }

  function Bj() {
    zj || (zj = new yj);
    return zj
  };

  function Cj() {
    this.bb = {}
  }
  var Dj;

  function Ej() {
    Dj || (Dj = new Cj);
    return Dj
  };

  function Fj() {
    this.B = G();
    this.sa = gd();
    this.qe = [];
    this.lb = [];
    this.jc = {};
    this.ej = new bj;
    this.ej.init(this);
    this.Tc = new Ti;
    this.tj = !1;
    this.configure(void 0)
  }
  var Gj;

  function Hj() {
    Gj || (Gj = new Fj);
    return Gj
  }
  B = Fj.prototype;
  B.Ak = function () {
    this.tj = !0
  };
  B.getSetting = function (a) {
    return this.sa.get(a)
  };
  B.getAnalyticsId = function () {
    return this.sa.getAnalyticsId()
  };
  B.headless = function () {
    return this.sa.headless()
  };

  function Ij(a, b) {
    a.Ic ? a.Ic.push(b) : (a.Ic = [b],
      a.Jf = setInterval(a.sk.bind(a), 100))
  }
  B.sk = function () {
    (new Si(this.Re)).get().ready && (clearInterval(this.Jf),
      this.Ic && this.Ic.forEach(function (a) {
        a()
      }),
      delete this.Ic,
      delete this.Jf)
  };
  B.configure = function (a) {
    a && (this.Re = a);
    var b = (new Si(this.Re)).get();
    b.ready || this.Re || Ij(this, this.configure.bind(this, a));
    a = this.sa;
    a.yb = Object.assign({}, fd, a.yb, b);
    this.B && this.B.configure(this.sa.yb);
    return this
  };
  B.cache = function (a, b) {
    void 0 !== b && (this.jc = this.jc || {},
      this.jc[a] = b);
    if (this.jc)
      return this.jc[a]
  };
  B.shortcut = function (a, b) {
    this.ej.shortcut(a, b)
  };
  B.addModule = function (a) {
    var b = kj();
    if (a = b.hc[a] && new b.hc[a].module) {
      for (var c = 0; b = this.qe[c]; c++)
        if (a.constructor === b.constructor)
          return;
      this.qe.push(a);
      a.init && a.init(this, this.B, this.Uc)
    }
  };

  function Jj(a, b) {
    a.lb = [];
    var c = a.getSetting("widget_ids") || [];
    c = c.concat(b || []);
    b = c.length;
    for (var d = 0; d < b; d++) {
      var e = Bj().create(c[d]);
      if (e) {
        var f = a;
        f.getSetting(rb) && (f.lb.push(e),
          e.init && e.init(f, f.B))
      }
    }
  }
  B.selectView = function (a) {
    this.sa.Cf = a
  };
  B.localize = function (a, b) {
    if (a = blogger.l10n && blogger.l10n[a] || a) {
      var c = I(),
        d = c.zi(b) ? b : c.oa(b || "");
      a = a.replace(/{\w+}/g, function (e) {
        return (new oj).init(e).apply(d)
      })
    }
    return a
  };
  B.view = function (a) {
    var b = this;
    if (!this.sa.ready() && !(new Si).get().ready)
      return Ij(this, this.view.bind(this, a)),
        this;
    if (a instanceof W)
      this.Uc = a,
      this.qe.length || (a = kj(),
        hj(a).forEach(function (c) {
          b.addModule(c)
        }),
        this.tj && this.addModule(La));
    else {
      a = a || this.getSetting(Xa) || H.decode().root();
      a = H.cl(a);
      if (!Kj(this))
        return this;
      this.B.open(a, vj());
      this.B.next(function () {
        b.B.reset();
        var c = Ej();
        var d = b.sa.Cf;
        c = d ? (c = c.bb[d]) ? new c : void 0 : void 0;
        b.Uc = c;
        b.Uc.start(b, b.B)
      })
    }
    this.getSetting(rb) && Jj(this, 0 == this.lb.length ? ["Subscribe"] : []);
    Md = null;
    this.Aa = -1;
    delete this.pe;
    return this
  };

  function Lj() {
    Array.from(document.body.children).forEach(function (a) {
      a.matches(va) || a.remove()
    })
  }

  function Kj(a) {
    if (a.getSetting("error")) {
      var b = I().template("ErrorMessage");
      b && (Lj(),
        pd(document.body, b.apply(Ld(a.getSetting("error")))));
      return !1
    }
    if (document.querySelector("#injected-iframe"))
      return a.headless();
    a.getSetting("showWelcome") && (a = I().template("Welcome")) && (Lj(),
      pd(document.body, a.apply(Jd())));
    return !0
  }
  B.current = function () {
    if (0 <= this.Aa && this.Aa < this.B.items().length)
      return this.B.items()[this.Aa];
    if (this.pe)
      return this.pe
  };
  B.hasPrevious = function () {
    return 0 < this.B.items().length && 0 < this.Aa
  };
  B.hasNext = function () {
    var a = this.B.items().length;
    return 0 < a && (this.Aa < a.length - 1 || this.B.hasNext())
  };
  B.next = function () {
    var a = this.cf();
    if (-1 != a)
      return a < this.B.items().length ? this.select(this.B.items()[this.Aa = a]) : this.B.hasNext() && !this.B.waiting() && this.Uc.Ka(!0),
        this
  };
  B.cf = function () {
    var a = this.cache(Ma);
    if (a) {
      var b = (a || []).indexOf(this.current());
      a = a[Math.min(a.length - 1, b + 1)];
      return this.B.items().indexOf(a)
    }
    return this.Aa + 1
  };
  B.previous = function () {
    var a = this.hf();
    0 <= a && a < this.B.items().length && this.select(this.B.items()[this.Aa = a]);
    return this
  };
  B.hf = function () {
    var a = this.cache(Ma);
    if (a) {
      var b = a.indexOf(this.current());
      a = a[Math.max(0, b - 1)];
      return this.B.items().indexOf(a)
    }
    return Math.max(0, this.Aa - 1)
  };
  B.select = function (a, b) {
    var c = this,
      d = this.getSetting("pageType");
    if (void 0 === a)
      if (this.getSetting("preview"))
        a = this.getSetting("preview");
      else if (d == lc || "item" == d)
      this.sa.set(Ub, !0),
      this.getSetting("pageId") ? a = this.getSetting("pageId") : this.getSetting("postId") && (a = this.getSetting("postId"));
    if (void 0 === a) {
      var e = this.B.resources().length && this.B.resources()[0].url;
      e && !H.isSamePage(e) && (e = H.decode(),
        "/" != e.path && (a = e.encode(!1, !1),
          this.sa.set(Ub, !0)))
    }
    var f;
    typeof a == Ob || typeof a == A ? f = this.find(a) : a && (f = a);
    f ? Mj(this, f, b) : a && !1 !== b && (b && b.getAttribute(jb) && (d = "page" == b.getAttribute(jb) ? lc : "item"),
      b = function (h) {
        h && Mj(c, c.find(h.id) || h)
      },
      d == lc ? this.B.page(a, b) : this.B.post(a, b))
  };

  function Mj(a, b, c) {
    var d = a.B.items().indexOf(b);
    a.Aa = 0 <= d ? d : a.Aa;
    a.pe = 0 <= d ? void 0 : b;
    !1 !== c && a.notify(ec, b, c)
  }
  B.clearSelection = function () {
    this.sa.set(Ub, !1);
    this.notify(cb)
  };
  B.find = function (a) {
    return this.B.find(a)
  };
  B.filter = function (a, b) {
    a && (this.cache(Ma, a),
      this.notify("filter", a, b))
  };
  B.clearFilter = function () {
    this.cache(Ma, null);
    this.notify("clearfilter", this.B.items())
  };
  B.updated = function () {
    this.notify(xc, this.B.items())
  };
  B.viewItem = function (a, b) {
    this.notify(Ac, a, b)
  };
  B.notify = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    this.Tc.notify.apply(this.Tc, [d].concat(Lc(c)))
  };
  B.addListener = function (a, b) {
    this.Tc.addListener(a, b)
  };
  B.removeListener = function (a, b) {
    this.Tc.removeListener(a, b)
  };

  function Nj() {}
  D(Nj, lj);
  Nj.prototype.init = function (a, b) {
    lj.prototype.init.call(this, a, b);
    this.scope = (a = Oj.exec(this.value)) && a[1];
    this.term = a && a[2];
    this.scope ? this.term ? (a = this.term.search(nj),
      0 < a && (this.extractAttributes(this.term.substr(a), !0),
        this.term = this.term.substring(0, a).replace(/\s+$/, ""))) : this.invalid("No term specified") : this.invalid("No scope specified");
    this.name = this.scope + ":" + this.term;
    return this
  };
  Nj.prototype.apply = function (a) {
    if (!this.invalid()) {
      var b = I(),
        c = this.scope + ":" + this.term,
        d = b.template(c);
      if (d && !a.scope(Na + c)) {
        var e = b.oa(a.context, a);
        e.scope(Na + c, !0);
        for (var f in this.attributes)
          e.scope(f, b.resolveAttr(this, f, a));
        return d.apply(e)
      }
      return (b = b.generator(c)) ? b.call(this, a) : a.data(c)
    }
  };
  var Oj = /^{(\w+):(.*)}$/;

  function Pj() {
    this.re = []
  }
  D(Pj, lj);
  Pj.prototype.init = function (a, b) {
    lj.prototype.init.call(this, a, b);
    (this.tag = (a = /^{block:([^\s}]+)(?:\s(.+))?}$/.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2]): this.invalid(Ha);
    return this
  };
  Pj.prototype.children = function () {
    return this.re
  };
  Pj.prototype.add = function (a) {
    this.re.push(a)
  };
  Pj.prototype.apply = function (a) {
    var b = Qj(this, a),
      c = [];
    if (b)
      if (Array.isArray(b))
        for (var d = 0, e = b.length; d < e; d++) {
          var f = b[d];
          f = I().oa(f, a);
          var h = e,
            k = d + 1;
          f.scope("Odd", 1 == k % 2);
          f.scope("Even", 0 == k % 2);
          f.scope("Number", k);
          f.scope("First", 1 == k);
          f.scope("Last", k == h);
          h = (h = this.tag.match(/^(\w+)s$/)) && h[1] || this.tag;
          f.scope(h + k, !0);
          f.scope(h, f.context);
          Rj(this, f);
          c = c.concat(Sj(this, f))
        }
    else
      b = a,
      this.attributes && (b = I().oa(a.context, a),
        Rj(this, b)),
      c = c.concat(Sj(this, b));
    return c.join("")
  };

  function Rj(a, b) {
    var c = I();
    if (a.attributes)
      for (var d in a.attributes)
        b.scope(d, c.resolveAttr(a, d, b))
  }

  function Qj(a, b) {
    var c = /^(?:Has|If(?!Not))(.+)$/,
      d = /^(?:IfNot)(.+)$/;
    a = a.tag;
    var e = b.data(a);
    return void 0 !== e ? e : d.test(a) ? (c = d.exec(a)[1],
      e = b.data(c),
      void 0 === e || 0 == e) : c.test(a) ? (c = c.exec(a)[1],
      e = b.data(c),
      void 0 === e ? !1 : 0 != e) : b.data(a)
  }

  function Sj(a, b) {
    for (var c = [], d = 0, e; e = a.re[d]; d++)
      c.push(e.apply(b));
    return c
  };

  function Tj() {}
  D(Tj, lj);
  Tj.prototype.init = function (a, b) {
    lj.prototype.init.call(this, a, b);
    (this.tag = (a = /^{\/(?:block|template):([^\s}]+)}$/.exec(this.value)) && a[1]) || this.invalid(Ha);
    return this
  };

  function Uj(a) {
    this.If = a
  }
  D(Uj, lj);

  function Vj() {}
  D(Vj, lj);
  Vj.prototype.apply = function () {
    return this.value
  };

  function Wj(a) {
    this.name = a;
    this.se = []
  }
  D(Wj, lj);
  B = Wj.prototype;
  B.init = function (a, b) {
    lj.prototype.init.call(this, a, b);
    (this.name = this.tag = (a = /^{template:([^\s}]+)(?:\s(.+))?}$/.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2]): this.invalid("Missing or invalid name");
    return this
  };
  B.children = function () {
    return this.se
  };
  B.add = function (a) {
    this.se.push(a)
  };
  B.raw = function (a) {
    "undefined" !== typeof a && (this.Ql = a);
    return this.Ql
  };
  B.find = function (a, b, c) {
    function d(f) {
      if (f && f.children)
        for (var h, k = 0; h = f.children()[k]; k++)
          h.tag == a && (h instanceof Pj || b) && e.push({
            parent: f,
            child: h
          }),
          d(h)
    }
    var e = [];
    d(c || this);
    return e
  };
  B.apply = function (a) {
    a = I().zi(a) ? a : I().oa(a);
    for (var b = [], c, d = 0; c = this.se[d]; d++)
      b.push(c.apply(a));
    return Xj(this, b.join(""))
  };

  function Xj(a, b, c) {
    c = c || a.attr("whitespace");
    if ("preserve" === c)
      return b;
    if ("discard" === c)
      return b.replace(/\s/g, "");
    if ("trim" === c)
      return b.replace(/^\s+/, "").replace(/\s+$/, "");
    if ("collapse" === c || "preserve-breaks" === c || c === fb) {
      b = b.replace(/\n([\t ]+)/g, "\n");
      "collapse" == c && (b = b.replace(/\n/g, " "));
      b = b.replace(/\t/g, " ");
      b = b.replace(/ ( )+/g, " ");
      b = b.split("\n");
      for (var d = b.length, e = 0; e < d; e++)
        b[e] = b[e].replace(/^\s+/, "").replace(/\s+$/, "");
      b = b.join("\n");
      return c == fb ? Xj(a, b.replace(/\n[\s]+/g, "\n"), "trim") : b
    }
    return b
  };

  function Yj(a) {
    this.source = typeof a === A ? a : "";
    this.length = this.source.length;
    this.column = this.line = this.Ma = 0
  }
  B = Yj.prototype;
  B.hasNext = function () {
    return this.Ma < this.length
  };
  B.next = function () {
    if (this.hasNext()) {
      var a = this.source.charAt(this.Ma);
      this.Ma++;
      "\n" == a.charAt(0) ? (this.line++,
        this.column = 0) : this.column++;
      return a
    }
  };
  B.consume = function (a) {
    if (this.hasNext()) {
      for (var b = [], c = 0; c < a; c++)
        b.push(this.next());
      return b.join("")
    }
  };
  B.remainder = function () {
    if (this.hasNext()) {
      for (var a = []; this.hasNext();)
        a.push(this.next());
      return a.join("")
    }
  };
  B.peek = function (a) {
    a = a || this.Ma;
    if (a < this.length && 0 <= a)
      return this.source.charAt(a)
  };
  B.match = function (a, b) {
    b = this.source.substr(b || this.Ma);
    if (typeof a === A) {
      if (b.slice(0, a.length) === a)
        return a
    } else if (a instanceof RegExp && 0 === b.search(a))
      return b.match(a)[0]
  };
  B.search = function (a, b) {
    b = this.source.substr(b || this.Ma);
    if (typeof a === A)
      return b.indexOf(a);
    if (a instanceof RegExp)
      return b.search(a)
  };

  function Zj(a, b) {
    this.ancestor = b;
    this.wf = {};
    this.context = (b = I().converter(a)) ? b(a, this) : a
  }
  Zj.prototype.scope = function (a, b) {
    "undefined" !== typeof b && (this.wf[a] = b);
    return "undefined" !== typeof this.wf[a] ? this.wf[a] : this.ancestor && this.ancestor.scope(a)
  };
  Zj.prototype.value = function (a) {
    var b = this.context && this.context[a];
    "undefined" === typeof b && (b = this.scope(a));
    if ("undefined" === typeof b && 0 <= a.indexOf(".")) {
      a = a.split(".");
      for (var c = a.shift(), d = this.context[c] || this.scope(c);
        (c = a.shift()) && d;)
        if (d = d[c],
          0 == a.length)
          b = d;
        else if (!d)
        break
    }
    return b
  };
  Zj.prototype.data = function (a, b) {
    return ak.test(a) ? this.scope(a, b) : this.value(a)
  };
  var ak = /(\w+):([^}]+)/;

  function bk() {
    this.te = {};
    this.rd = [];
    this.We = []
  }
  B = bk.prototype;
  B.template = function (a, b) {
    "undefined" !== typeof b && (this.te[a] = this.compile(b));
    return this.te[a]
  };
  B.generator = function (a, b) {
    if (b && a)
      return a = {
          test: a,
          generator: b
        },
        this.We.push(a),
        this.We.sort(function (d, e) {
          return (typeof e.test === A ? e.test.length : 0) - (typeof d.test === A ? d.test.length : 0)
        }),
        a.generator;
    if (a && typeof a === A)
      for (var c = 0; b = this.We[c]; c++)
        if (typeof b.test === A && 0 === a.indexOf(b.test) || b.test instanceof RegExp && b.test.test(a))
          return b.generator
  };
  B.converter = function (a, b) {
    for (var c = -1, d, e = 0; d = this.rd[e]; e++)
      if (a instanceof d.type) {
        c = e;
        break
      }
    a && "undefined" !== typeof b && (0 <= c && this.rd.splice(c, 1),
      c = this.rd.push({
        type: a,
        converter: b
      }) - 1);
    return 0 <= c ? this.rd[c].converter : void 0
  };
  B.compile = function (a, b) {
    var c = new Yj(a);
    b = "undefined" !== typeof b ? b : !0;
    var d = new Wj;
    d.raw(a);
    a = d;
    for (var e = [d], f; f = ck(c);) {
      var h;
      "literal" == f.type ? h = Vj : 0 === f.value.indexOf("{block:") ? h = Pj : 0 === f.value.indexOf("{/block:") ? h = Tj : 0 === f.value.indexOf("{template:") ? h = Wj : 0 === f.value.indexOf("{/template:") ? h = Tj : 0 === f.value.search(dk) ? h = Nj : h = oj;
      f = (new h).init(f.value, f.start);
      if (f instanceof Pj || f instanceof Wj)
        a.tag == f.tag ? (b && ek(this, e.pop(), c),
          a = e[e.length - 1]) : (a.add(f),
          a = f,
          e.push(a));
      else if (f instanceof Tj)
        if (a.tag == f.tag)
          b && ek(this, e.pop(), c),
          a = e[e.length - 1];
        else {
          var k = new Uj("Unexpected close block");
          k.init(f.value, f.start);
          a.add(k)
        }
      else
        a.add(f)
    }
    return d
  };

  function ek(a, b, c) {
    b instanceof Wj && b.name && (b.raw(c.source.substring(b.start || 0, c.Ma)),
      a.te[b.name] = b)
  }

  function ck(a) {
    if (a && a.hasNext()) {
      var b = a.Ma,
        c = a.match(fk);
      if (c)
        return {
          type: "token",
          value: a.consume(c.length),
          start: b
        };
      for (c = []; a.hasNext();) {
        if ("{" === a.peek())
          if (a.match(fk))
            break;
          else if (a.match(fk, a.Ma + 1)) {
          a.next();
          c.push(a.consume(a.match(fk).length));
          continue
        }
        c.push(a.next())
      }
      return {
        type: "literal",
        value: c.join(""),
        start: b
      }
    }
  }
  B.oa = function (a, b) {
    return new Zj(a, b)
  };
  B.zi = function (a) {
    return a instanceof Zj
  };
  B.resolveAttr = function (a, b, c) {
    if (b = a.attr(b)) {
      if (pj.exec(b))
        return c ? gk((new oj).init(b).apply(c)) : void 0;
      if (Oj.exec(b))
        return c ? gk((new Nj).init(b).apply(c)) : void 0;
      b = b.replace(a.Xe(pj), function (d) {
        d = c ? (new oj).init(d).apply(c) : void 0;
        return void 0 !== d ? d : ""
      });
      b = b.replace(a.Xe(Oj), function (d) {
        d = c ? (new Nj).init(d).apply(c) : void 0;
        return void 0 !== d ? d : ""
      })
    }
    return gk(b)
  };

  function gk(a) {
    return a === tc ? !0 : a === sb ? !1 : a
  }
  var fk = /^{\/?([\w-]+(:[\w\-]+)?(?:(?:[\w:\-'"= \.#]*[^\s])|(\s*([^\s=]+)\s*=\s*('[^']*'|"[^"]*"))*)?)}/,
    dk = /{(\w+:)/;
  Hd = function () {
    return new bk
  };
  Wc("blogger.data", G);
  Wc("blogger.ui", Hj);
  Wc("blogger.selectView", function (a) {
    Hj().selectView(a)
  });
  Wc("blogger.templates", I);
  Wc("blogger.compileTemplate", function (a, b) {
    var c = I();
    void 0 === b ? c.compile(a) : c.template(a, b)
  });
  Wc("blogger.tools.path", H);
  Wc("blogger.views", []);
  Wc("blogger.template.header", function () {
    function a() {
      U(d, "menu");
      T(d, "tabs");
      var f = 0;
      Array.from(d.parentElement.children).forEach(function (h) {
        f += h.offsetWidth
      });
      parseFloat(getComputedStyle(d.parentElement).width) < f + 50 ? (U(d, "tabs"),
        T(d, "menu")) : T(d, "tabs")
    }

    function b(f, h) {
      c.querySelectorAll(".menu-item").forEach(function (k) {
        var l = !1;
        if (h) {
          l = e.exec(k.getAttribute("href"));
          var m = e.exec(h.url);
          l = !(!l || !m || l[1] != m[1])
        }
        V(k, hb, l)
      })
    }
    var c = document.querySelector("#pages"),
      d = c ? c : document.querySelector("#views");
    if (d) {
      window.addEventListener(Yb, a);
      a();
      var e = RegExp("\\.*/p(/[^/]+\\.html$)");
      c && (Hj().addListener(ec, b),
        Hj().addListener(cb, b))
    }
  });

  function hk() {
    this.a = this.b = this.Sa = this.r = 0
  }

  function ik(a, b) {
    if (void 0 !== b && !1 !== b) {
      var c = jk.exec(b);
      return c ? kk(a, parseInt(1 == c[1].length ? c[1] + c[1] : c[1], 16), parseInt(1 == c[2].length ? c[2] + c[2] : c[2], 16), parseInt(1 == c[3].length ? c[3] + c[3] : c[3], 16)) : a
    }
    if (0 == a.a)
      return sc;
    c = ("0" + a.r.toString(16)).slice(-2);
    var d = ("0" + a.Sa.toString(16)).slice(-2);
    a = ("0" + a.b.toString(16)).slice(-2);
    if (!1 !== b)
      return "#" + c + d + a;
    b = new hk;
    b.r = c;
    b.Sa = d;
    b.b = a;
    return b
  }

  function lk(a, b, c, d, e) {
    if (void 0 !== b && !1 !== b) {
      if (typeof b === A && void 0 === c)
        if (e = mk.exec(b))
          b = e[1],
          c = e[2],
          d = e[3],
          e = e[4];
        else
          return a;
      b = (parseFloat(b, 10) % 360 + 360) % 360;
      b /= 360;
      c = nk(c, 1);
      d = nk(d, 1);
      e = nk(e, 1);
      var f = .5 >= d ? d * (c + 1) : d + c - d * c,
        h = 2 * d - f;
      d = function (y) {
        var z = 0 > y ? y + 1 : 1 < y ? y - 1 : y;
        return 1 > 6 * z ? h + (f - h) * z * 6 : 1 > 2 * z ? f : 2 > 3 * z ? h + (f - h) * (2 / 3 - y) * 6 : h
      };
      return ok(a, Math.round(255 * d(b + 1 / 3)), Math.round(255 * d(b)), Math.round(255 * d(b - 1 / 3)), e)
    }
    var k = a.r / 255,
      l = a.Sa / 255,
      m = a.b / 255;
    e = a.a;
    a = Math.max(k, l, m);
    c = Math.min(k, l, m);
    d = (a + c) / 2;
    if (a == c)
      var n = c = 0;
    else {
      var u = a - c;
      c = .5 < d ? u / (2 - a - c) : u / (a + c);
      a == k ? n = (l - m) / u + (l < m ? 6 : 0) : a == l ? n = 2 + (m - k) / u : a == m && (n = 4 + (k - l) / u);
      n /= 6
    }
    n = pk(360 * n, 360, 0);
    c = pk(c, 1, 5);
    d = pk(d, 1, 5);
    return !1 !== b ? ["hsla(", n, ", ", pk(c / 1 * 100, 100, 0) + "%", ", ", pk(d / 1 * 100, 100, 0) + "%", ", ", e, ")"].join("") : {
      h: n,
      s: c,
      l: d,
      a: e
    }
  }

  function kk(a, b, c, d) {
    if (void 0 !== b && !1 !== b) {
      if (typeof b === A && void 0 === c)
        if (d = qk.exec(b))
          b = d[1],
          c = d[2],
          d = d[3];
        else
          return a;
      ok(a, b, c, d, 1);
      return a
    }
    return ["rgb(", a.r, ", ", a.Sa, ", ", a.b, ")"].join("")
  }

  function ok(a, b, c, d, e) {
    if (void 0 !== b && !1 !== b) {
      if (typeof b === A && void 0 === c)
        if (e = rk.exec(b))
          b = e[1],
          c = e[2],
          d = e[3],
          e = e[4];
        else
          return a;
      a.r = nk(b, 255, 0);
      a.Sa = nk(c, 255, 0);
      a.b = nk(d, 255, 0);
      a.a = nk(e, 1, 5);
      return a
    }
    return ["rgba(", a.r, ", ", a.Sa, ", ", a.b, ", ", a.a, ")"].join("")
  }
  B = hk.prototype;
  B.name = function (a) {
    if (void 0 !== a)
      return a.toLowerCase() == sc ? ok(this, 0, 0, 0, 0) : ik(this, sk[a.toLowerCase()]);
    if (!(this.r || this.Sa || this.b || this.a))
      return sc;
    a = ik(this);
    for (var b in sk)
      if (sk[b] == a)
        return b
  };
  B.saturation = function (a) {
    if (void 0 !== a) {
      var b = lk(this, !1);
      return lk(this, b.Ze, a, b.Uk, b.a)
    }
    return lk(this, !1).Yl
  };
  B.alpha = function (a) {
    return void 0 !== a ? (this.a = nk(a, 1),
      this) : this.a
  };
  B.shift = function (a) {
    var b = lk(this, !1),
      c = (a = tk.exec(a)) ? parseFloat(a[1]) : 0;
    a && a[2] && (c = c / 100 * 360);
    b.Ze += c;
    return lk(this, b.Ze, b.Yl, b.Uk, b.a)
  };
  B.clone = function () {
    var a = new hk;
    ok(a, this.r, this.Sa, this.b, this.a);
    return a
  };

  function nk(a, b, c) {
    var d = tk.exec(a);
    a = d ? parseFloat(d[1], 10) : 0;
    d && d[2] && (a = a / 100 * (b || 1));
    return pk(a, b, c)
  }

  function pk(a, b, c) {
    a = Math.min(b, Math.max(0, a));
    return void 0 !== c && parseInt(a, 10) != a ? (c = Math.pow(10, c),
      Math.round(a * c) / c) : a
  }
  var sk = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    },
    tk = /(-?[\d\.]+)(%)?/i,
    jk = /#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})/i,
    qk = /rgb\(\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*\)/i,
    rk = /rgba\(\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*,\s*([\d\.]+)\s*\)/i,
    uk = /hsl\(\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*\)/i,
    mk = /hsla\(\s*(-?\d{1,3})\s*,\s*(-?\d{1,3}%)\s*,\s*(-?\d{1,3}%)\s*,\s*([\d\.]+)\s*\)/i;
  var vk = "Allerta;Allerta Stencil;Arimo;Arvo;Bentham;Calibri;Calligraffitti;Cambria;Cantarell;Cardo;Cherry Cream Soda;Chewy;Coming Soon;Consolas;Copse;Corsiva;Cousine;Covered By Your Grace;Crafty Girls;Crimson Text;Crushed;Cuprum;Droid Sans;Droid Sans Mono;Droid Serif;Ek Mukta;Fontdiner Swanky;GFS Didot;GFS Neohellenic;Geo;Gruppo;Hanuman;Homemade Apple;IM Fell DW Pica;IM Fell DW Pica SC;IM Fell Double Pica;IM Fell Double Pica SC;IM Fell English;IM Fell English SC;IM Fell French Canon;IM Fell French Canon SC;IM Fell Great Primer;IM Fell Great Primer SC;Inconsolata;Irish Growler;Josefin Sans;Josefin Slab;Just Another Hand;Kenia;Kranky;Lobster;Luckiest Guy;Merriweather;Molengo;Mountains of Christmas;Neucha;Neuton;Nobile;OFL Sorts Mill Goudy TT;Old Standard TT;Open Sans;PT Sans;PT Sans Caption;PT Sans Narrow;Permanent Marker;Philosopher;Puritan;Reenie Beanie;Roboto;Rock Salt;Schoolbell;Slackey;Sunshiney;Syncopate;Tinos;UnifrakturMaguntia;Unkempt;Vollkorn;Walter Turncoat;Yanone Kaffeesatz".split(";"),
    wk = {},
    xk = [];

  function yk(a, b, c) {
    return I().resolveAttr(a, b, c)
  }

  function zk(a) {
    a = Ak(a);
    xk.push.apply(xk, Lc(a.filter(function (b) {
      return !wk[b] && 0 <= vk.indexOf(b)
    })));
    setTimeout(Bk, 0)
  }

  function Ak(a) {
    return a.replace(/'|"/g, ",").split(",").filter(function (b) {
      return b
    })
  }

  function Bk() {
    var a = [];
    xk.forEach(function (d) {
      wk[d] || (a.push(d.replace(/\s/g, "+")),
        wk[d] = !0)
    });
    var b = a.join("|");
    if (b) {
      var c = document.querySelector(v);
      c && pd(c, ['<link href="https://fonts.googleapis.com/css?family=', b, '" rel="stylesheet" type="text/css">'].join(""))
    }
    xk = []
  }
  var Ck = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    Dk = "January February March April May June July August September October November December".split(" ");

  function Ek(a) {
    var b = "th",
      c = a % 10;
    1 != Math.floor(a / 10) % 10 && (1 == c ? b = "st" : 2 == c ? b = "nd" : 3 == c && (b = "rd"));
    return b
  }
  var Fk = [{
      test: /^DayOfMonth$/,
      generator: function (a) {
        if (a = a.data(p))
          return a.getDate()
      }
    }, {
      test: /^DayOfMonthWithZero$/,
      generator: function (a) {
        if (a = a.data(p))
          return 10 > a.getDate() ? "0" + a.getDate() : a.getDate()
      }
    }, {
      test: /^DayOfWeek$/,
      generator: function (a) {
        if (a = a.data(p))
          return Ck[a.getDay()]
      }
    }, {
      test: /^ShortDayOfWeek$/,
      generator: function (a) {
        if (a = a.data(p))
          return Ck[a.getDay()].substr(0, 3)
      }
    }, {
      test: /^DayOfWeekNumber$/,
      generator: function (a) {
        if (a = a.data(p))
          return a.getDay() || 7
      }
    }, {
      test: /^DayOfMonthSuffix$/,
      generator: function (a) {
        if (a = a.data(p))
          return Ek(a.getDate())
      }
    }, {
      test: /^DayOfYear$/,
      generator: function (a) {
        if (a = a.data(p))
          return Math.ceil((a - new Date(a.getFullYear(), 0, 1) + 1) / 864E5)
      }
    }, {
      test: /^WeekOfYear$/,
      generator: function (a) {
        if (a = a.data(p))
          return Math.ceil(Math.ceil((a - new Date(a.getFullYear(), 0, 1) + 1) / 864E5) / 7)
      }
    }, {
      test: /^Month$/,
      generator: function (a) {
        if (a = a.data(p))
          return Dk[a.getMonth()]
      }
    }, {
      test: /^ShortMonth$/,
      generator: function (a) {
        if (a = a.data(p))
          return Dk[a.getMonth()].substr(0, 3)
      }
    }, {
      test: /^MonthNumber$/,
      generator: function (a) {
        if (a = a.data(p))
          return a.getMonth() + 1
      }
    }, {
      test: /^MonthNumberWithZero$/,
      generator: function (a) {
        if (a = a.data(p))
          return 9 > a.getMonth() ? "0" + (a.getMonth() + 1) : a.getMonth() + 1
      }
    }, {
      test: /^Year$/,
      generator: function (a) {
        if (a = a.data(p))
          return a.getFullYear()
      }
    }, {
      test: /^ShortYear$/,
      generator: function (a) {
        if (a = a.data(p))
          return a.getFullYear().toString().substr(2)
      }
    }, {
      test: /^AmPm$/,
      generator: function (a) {
        if (a = a.data(p))
          return 12 > a.getHours() ? "am" : "pm"
      }
    }, {
      test: /^CapitalAmPm$/,
      generator: function (a) {
        if (a = a.data(p))
          return 12 > a.getHours() ? "AM" : "PM"
      }
    }, {
      test: /^12Hour$/,
      generator: function (a) {
        if (a = a.data(p))
          return 12 < a.getHours() ? a.getHours() - 12 : a.getHours() || "12"
      }
    }, {
      test: /^24Hour$/,
      generator: function (a) {
        if (a = a.data(p))
          return a.getHours()
      }
    }, {
      test: /^12HourWithZero$/,
      generator: function (a) {
        if (a = a.data(p))
          return a = 12 < a.getHours() ? a.getHours() - 12 : a.getHours() || "12",
            10 > a ? "0" + a : a
      }
    }, {
      test: /^Minutes$/,
      generator: function (a) {
        if (a = a.data(p))
          return a = a.getMinutes(),
            10 > a ? "0" + a : a
      }
    }, {
      test: /^Seconds$/,
      generator: function (a) {
        if (a = a.data(p))
          return a = a.getSeconds(),
            10 > a ? "0" + a : a
      }
    }, {
      test: /^Beats$/,
      generator: function (a) {
        if (a = a.data(p))
          return a = a.getMilliseconds(),
            10 > a ? "00" + a : 100 > a ? "0" + a : a
      }
    }, {
      test: /^Timestamp$/,
      generator: function (a) {
        if (a = a.data(p))
          return Math.ceil(a.getTime() / 1E3)
      }
    }, {
      test: /^FormattedTime$/,
      generator: function (a) {
        if (a = a.data(p))
          return a.toLocaleTimeString()
      }
    }, {
      test: /^TimeAgo$/,
      generator: function (a) {
        var b = a.data(p);
        if (b) {
          a = [b.getDate(), Ek(b.getDate()), " ", Dk[b.getMonth()]].join("");
          b.getFullYear() < (new Date).getFullYear() && (a += " " + b.getFullYear());
          b = ((new Date).getTime() - b.getTime()) / 1E3;
          var c = Math.floor(b / 86400);
          return isNaN(c) || 0 > c || 31 <= c ? a : 0 == c && (60 > b && "just now" || 120 > b && "1 minute ago" || 3600 > b && Math.floor(b / 60) + " minutes ago" || 7200 > b && "1 hour ago" || 86400 > b && Math.floor(b / 3600) + " hours ago") || 1 == c && "Yesterday" || 7 > c && c + " days ago" || 14 > c && "1 week ago" || 31 > c && Math.ceil(c / 7) + " weeks ago"
        }
      }
    }, {
      test: /^ISO8601$/,
      generator: function (a) {
        if (a = a.data(p))
          return Ri(a)
      }
    }],
    Gk = /^((?:Photo|Portrait)URL)(?:-(\d+)(sq)?)?$/,
    Hk = /^(Video)(?:-(\d+))?$/,
    Ik = [{
      test: "color:",
      generator: function (a) {
        var b = a.data(this.name) || this.term;
        if (b) {
          var c = new hk;
          if (jk.test(b))
            ik(c, b);
          else if (qk.test(b))
            kk(c, b);
          else if (rk.test(b))
            ok(c, b);
          else if (uk.test(b))
            a: {
              var d;
              if (void 0 !== b && !1 !== b) {
                if (typeof b === A && void 0 === e)
                  if (d = uk.exec(b)) {
                    b = d[1];
                    var e = d[2];
                    d = d[3]
                  } else
                    break a;
                lk(c, b, e, d, 1)
              } else
                lk(c, !1)
            }
          else
            mk.test(b) ? lk(c, b) : c.name(b);
          for (var f in this.attributes)
            if (f in c && typeof c[f] === t)
              c[f](yk(this, f, a));
          return 0 == c.a ? sc : ok(c)
        }
        return sc
      }
    }, {
      test: "font:",
      generator: function (a) {
        a = a.data(this.name) || this.term;
        a = void 0 !== a ? a : "sans-serif";
        zk(a);
        return a
      }
    }, {
      test: "image:",
      generator: function (a) {
        a = a.data(this.name);
        return void 0 !== a ? a : lb
      }
    }],
    Jk = {
      "lang:By PostAuthorName": "By {PostAuthorName}",
      "lang:By PostAuthorName 2": 'Posted by <a class="url fn" href="{PostAuthorURL}" rel="author" itemprop="author">{PostAuthorName}</a>',
      "lang:Location GeoLocationName": 'Location: <a class="url fn" href="{GeoLocationURL}" itemprop="contentLocation">{GeoLocationName}</a>',
      "lang:No results for SearchQuery": "No results for: {HTMLEscapedSearchQuery}",
      "lang:No results for SearchQuery2": 'No results for <span class="search_query">{HTMLEscapedSearchQuery}</span>',
      "lang:Show all SearchResultCount": "Show all {SearchResultCount} results",
      "lang:Posted TimeAgo": "Posted {TimeAgo}",
      "lang:Posted TimeAgo by PostAuthorName": 'Posted <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{TimeAgo}</abbr> by {PostAuthorName}',
      "lang:Posted TimeAgo by PostAuthorName 2": 'Posted <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{TimeAgo}</abbr> by <a class="url fn" href="{PostAuthorURL}" rel="author" itemprop="author">{PostAuthorName}</a>',
      "lang:Posted at FormattedTime": 'Posted at <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{12Hour}:{Minutes} {AmPm}</abbr>'
    },
    Kk = 0,
    Lk = void 0;
  for (; Lk = Fk[Kk]; Kk++)
    I().generator(Lk.test, Lk.generator);
  I().generator(Gk, function (a) {
    var b = Gk.exec(this.name),
      c = a.data(b[1]);
    if (c) {
      var d = b[2] || yk(this, "size", a);
      a = "sq" == b[3] || !!yk(this, "square", a);
      if (d && !isNaN(parseInt(d, 10)))
        return Ai(c, {
          N: parseInt(d, 10),
          sd: void 0 !== a ? a : !0
        }).replace("'", "%27")
    }
    return c ? c : lb
  });
  I().generator(Hk, function (a) {
    var b = Hk.exec(this.name),
      c = a.data(b[1]);
    if (c && (a = b[2] || yk(this, "size", a)) && !isNaN(parseInt(a, 10))) {
      var d = parseInt(a, 10),
        e = Math.ceil(d / 16 * 9);
      c = xd(c, {
        tag: Gb,
        replace: function (f) {
          return f.attr("width", d).attr(Cb, e).encode()
        }
      })
    }
    return c
  });
  I().generator(/^Summary$/, function (a) {
    var b = yk(this, "text", a);
    if (!b) {
      if (a.data("Summary"))
        return a.data("Summary");
      b = a.data("PlaintextBody")
    }
    a = yk(this, "length", a) || 300;
    return b && b.substring ? (b = b.substring(0, a).trim(),
      a = b.match(/(?:.|\n|\r)*(\.(?=\s|\n|\r)|\.$)/),
      (a ? Oi(a[0]) : Oi(b)).replace(/\n/g, "<br/>")) : b
  });
  I().generator(/^Snippet$/, function (a) {
    var b = yk(this, "text", a);
    if (!b) {
      if (a.data("Snippet"))
        return Oi(a.data("Snippet"));
      b = a.data("PlaintextBody")
    }
    b = Oi(b);
    var c = yk(this, "before", a) || 50,
      d = yk(this, "after", a) || 300,
      e = yk(this, "length", a) || 300,
      f = yk(this, "term", a) || "",
      h = yk(this, q, a) || "term";
    if (b) {
      if (f && (a = b.toLowerCase().indexOf(f.toLowerCase()),
          0 <= a)) {
        var k = b.substr(0, a);
        var l = b.substr(a, f.length),
          m = b.substr(a + f.length, d);
        k.length > c && (a = k.indexOf(" ", k.length - c),
          k = "..." + (0 <= a ? k.substr(a + 1) : k.substr(k.length - c)));
        m.length && (a = m.lastIndexOf(" "),
          m = (0 <= a ? m.substr(0, a) : m.substr(0, d)) + "...");
        k = k + l + m;
        h && (k = k.replace(new RegExp(f, "gim"), function (n) {
          return '<span class="' + h + '">' + n + "</span>"
        }))
      }
      k || (k = b.substring(0, e).trim());
      return k
    }
    return b
  });
  I().generator("lang:", function (a) {
    var b = a.data(this.name);
    return (b = b || Jk[this.name]) ? b.replace(/{\w+}/g, function (c) {
      return (new oj).init(c).apply(a)
    }) : this.term
  });
  for (var Mk = 0, Nk = void 0; Nk = Ik[Mk]; Mk++)
    I().generator(Nk.test, Nk.generator);

  function Ok(a) {
    this.Fj = a;
    this.Ej = []
  }
  Ok.prototype.items = function () {
    return this.Ej
  };
  Ok.prototype.resource = function () {
    return this.Fj
  };

  function Pk(a, b) {
    this.S = a;
    this.ue = -1;
    this.la = b || 25;
    this.kc = [];
    this.lc = [];
    this.xc = this.sf = !1;
    this.kd = !0;
    this.pm = this.Ij.bind(this);
    this.Gj = this.Hj.bind(this);
    this.Bi = Qk(this.Sk.bind(this))
  }
  B = Pk.prototype;
  B.items = function () {
    return this.S.items()
  };
  B.resources = function () {
    return [this.S.resource()]
  };
  B.waiting = function () {
    return this.xc
  };
  B.hasNext = function (a) {
    void 0 !== a && (this.kd = a);
    return 0 != this.kd || -1 == this.ue
  };
  B.reset = function () {
    this.ue = -1
  };
  B.next = function (a) {
    var b = ++this.ue;
    b < this.kc.length ? a && a(this.kc[b]) : this.kd ? (this.lc.push({
        Qa: a,
        index: b
      }),
      this.xc || this.sf || this.Bi()) : a && a(null)
  };
  B.Sk = function () {
    var a = this.Pe();
    a && (this.Sd = [(new Date).getTime().toString(36), (65536 * (1 + Math.random()) | 0).toString(36)].join("-"),
      G().notify(ub, this.Sd),
      fetch(location.protocol == 'http:' ? a : a.replace('http://', 'https://')).then(function (b) {
        return b.text()
      }).then(function (b) {
        return JSON.parse(b)
      }).then(this.pm).catch(this.Gj),
      this.xc = !0)
  };
  B.Ij = function (a) {
    G().notify(tb, this.Sd);
    if (a = this.qf(a)) {
      this.kc.push(a);
      var b;
      (b = this.items()).push.apply(b, Lc(a))
    }
    this.xc = !1;
    Rk(this)
  };
  B.Hj = function () {
    G().notify(tb, this.Sd);
    this.xc = !1;
    Rk(this)
  };

  function Rk(a) {
    a.sf = !0;
    var b = a.lc;
    a.lc = [];
    for (var c, d = 0; c = b[d]; d++)
      c.index < a.kc.length ? c.Qa && c.Qa(a.kc[c.index]) : a.kd ? a.lc.push(c) : c.Qa && c.Qa(null);
    0 < a.lc.length && a.Bi();
    a.sf = !1;
    delete a.Sd
  }
  B.Pe = function () {
    return null
  };
  B.qf = function () {
    return null
  };

  function Qk(a) {
    function b() {
      var k = f >= h ? f : f + 1;
      f = new Date - d > 50 * (Math.pow(2, k + 1) - 1) ? Math.max(0, f - 1) : k;
      e = 50 * (Math.pow(2, f) - 1);
      d = new Date
    }
    var c = null,
      d = new Date,
      e = 0,
      f = 0,
      h = Math.floor(Math.log(600) / Math.LN2);
    return function () {
      var k = this,
        l = new Date - d;
      clearTimeout(c);
      if (l >= e)
        b(),
        a.apply(this, arguments);
      else {
        var m = arguments;
        c = setTimeout(function () {
          b();
          a.apply(k, m)
        }, e - l + 1)
      }
    }
  };

  function Sk() {};

  function Tk() {}

  function Uk() {}

  function Vk() {};

  function Wk(a, b, c, d) {
    Di.call(this, a, b, c, d)
  }
  D(Wk, Pi);
  Wk.prototype.data = function () {
    var a = Pi.prototype.data.call(this);
    a.PostID = null;
    a.PageID = this.id;
    return a
  };

  function Xk(a) {
    if (a && a.feed) {
      var b = new Uk,
        c = a.feed,
        d = new Tk;
      d.title = X(c.title);
      d.subtitle = X(c.subtitle);
      d.updated = Qi(X(c.updated));
      var e = /blog-(\d+)/.exec(X(c.id));
      d.id = e && e[1] || c.id;
      c.author && (d.authors = Yk(c));
      b.ed = d;
      b.fb = Zk(a.feed);
      b.items = [];
      if (a.feed.entry)
        for (c = 0; d = a.feed.entry[c]; c++)
          (d = $k(d)) && d.published && !d.wi && (d.sourceTitle = b.ed ? b.ed.title : void 0,
            b.items.push(d));
      b.items[0] && (b.ed.published = b.items[0].published);
      return b
    }
  }

  function $k(a) {
    if (a) {
      var b = a.tag || X(a.id),
        c = a && /post-/i.test(b) && new Pi || a && /page-/i.test(b) && new Wk || new Di;
      (b = /blog-(\d+)\.\w{4}-(\d+)/.exec(X(a.id))) ? (c.blogId = b[1],
        c.id = b[2]) : c.id = a.id;
      c.title = X(a.title);
      c.body = a.content ? X(a.content) : X(a.summary) + "...";
      c.updated = Qi(X(a.updated));
      c.published = Qi(X(a.published));
      c.wi = !1;
      a.app$control && a.app$control.app$draft && (c.wi = "yes" == a.app$control.app$draft.$t);
      if (a.replies || a.thr$total)
        c.commentCount = parseInt(X(a.replies || a.thr$total), 10);
      c.allowComments = void 0 !== a.thr$total;
      b = Yk(a);
      b.length && (c.author = b[0]);
      a.link && (Array.isArray(a.link) ? a.link.filter(function (d) {
          "alternate" == d.rel ? c.url = d.href : "related" == d.rel && (c.relatedUrl = d.href)
        }) : c.url = a.link,
        c.url && (b = H.decode(c.url),
          b.scheme = H.decode().scheme,
          c.url = b.encode(),
          b.scheme = "http",
          c.Mk = b.encode(),
          b = c.url.split("/"),
          2 <= b.length && (c.baseUrl = b[0] + "//" + b[2])));
      a.enclosure && a.enclosure.filter(function (d) {
        "related" == d.type && (c.relatedUrl = d.url)
      });
      a.rk ? c.tags = a.rk.slice(0) : a.category && (c.tags = a.category.map(function (d) {
        return d.term
      }));
      c.geoLocation = al(a);
      return c
    }
  }

  function Zk(a) {
    return {
      total: parseInt(X(a.totalResults || a.openSearch$totalResults), 10),
      startIndex: parseInt(X(a.startIndex || a.openSearch$startIndex), 10),
      la: void 0 === a.openSearch$itemsPerPage ? void 0 : parseInt(X(a.openSearch$itemsPerPage), 10)
    }
  }

  function Yk(a) {
    var b = [];
    a.author && (Array.isArray(a.author) ? b = a.author.map(function (c) {
      return new hd(X(c.name), X(c.uri), c.gd$image ? c.gd$image.src : void 0)
    }) : b.push(new hd(X(a.author.name), X(a.author.uri))));
    return b
  }

  function al(a) {
    if (a.georss$featurename && a.georss$point) {
      var b = X(a.georss$point).split(" ");
      if (2 == b.length)
        return new nd(X(a.georss$featurename), parseFloat(b[0], 10), parseFloat(b[1], 10))
    }
  }

  function bl(a) {
    var b = {};
    a = a.gd$extendedProperty || [];
    Array.isArray(a) && a.map(function (c) {
      b[c.name] = c.value
    });
    return b
  }

  function X(a) {
    return a && void 0 !== a.$t ? a.$t : a
  };

  function cl(a) {
    this.sj = a;
    this.mc = []
  }

  function dl(a, b, c, d, e) {
    var f = 0 < a.mc.filter(function (h) {
      return h.identifier == b
    }).length;
    a.mc.push({
      Qa: e,
      identifier: b
    });
    if (f)
      return !0;
    G().notify(ub, b);
    fetch(d).then(function (h) {
      return h.text()
    }).then(function (h) {
      return JSON.parse(h)
    }).then(function (h) {
      G().notify(tb, b);
      c == lc ? h && h.entry ? h = $k(h.entry) : (h && h.feed && (h = Xk(h),
          a.Ti = h && h.items),
        h = el(a, b)) : h = h && h.entry ? $k(h.entry) : h && h.feed && 1 == h.feed.entry.length ? Xk(h).items[0] : void 0;
      if (h) {
        var k = a.mc;
        a.mc = [];
        for (var l, m = 0; l = k[m]; m++)
          l.identifier == b ? l.Qa(h) : a.mc.push(l)
      }
    }).catch(function () {
      G().notify(tb, b)
    });
    return !0
  }

  function el(a, b) {
    if (a.Ti)
      return a.Ti.find(function (c) {
        if (/^\d+$/.test(b))
          return c.id == b;
        var d = fl(b);
        c = c.url && fl(c.url);
        return d == c
      })
  }

  function fl(a) {
    var b = G().getSettings().blog_url;
    if (0 == a.indexOf(b))
      return a = a.replace(b, ""),
        "/" == b[b.length - 1] && (a = "/" + a),
        a;
    b = H.decode(a).root();
    return a.replace(b, "")
  };

  function gl(a, b) {
    Pk.call(this, a, b || 25);
    this.ve = (b = hl(this)) && b.Kb ? b.Kb.getTime() : void 0;
    this.yf = 1;
    this.xg = (b = hl(this)) && b.Lb ? b.Lb.getTime() : void 0;
    this.we = a.resource().filter && (a.resource().filter.query || "").trim();
    this.gf = a.resource().filter && (a.resource().filter.Kl || "").trim();
    this.Od = a.resource().filter && (a.resource().filter.El || "").trim()
  }
  D(gl, Pk);
  gl.prototype.Pe = function () {
    var a = G().getSettings(),
      b = !!this.Od;
    var c = (c = hl(this)) && c.tags ? c.tags : [];
    c = c.length ? "/-/" + encodeURIComponent(c[0]).replace(/'/g, "%27") : "";
    c = new URL(["/feeds", b ? "/pages/default" : "/posts/default", c].join(""), this.S.resource().url || "");
    c.searchParams.set("alt", "json");
    c.searchParams.set("v", "2");
    c.searchParams.set(pb, "1");
    b || (c.searchParams.set("orderby", Wb),
      c.searchParams.set("max-results", "" + this.la));
    3 == a.feeds_api && c.searchParams.set("proxy_feed", tc);
    this.ve && c.searchParams.set("published-max", Ri(new Date(this.ve)));
    this.xg && c.searchParams.set("published-min", Ri(new Date(this.xg)));
    this.we && (c.searchParams.set("q", this.we.replace(/(\s)+/g, "+")),
      "best" == this.S.resource().filter.Md && c.searchParams.set("orderby", "relevance"),
      c.searchParams.set("start-index", "" + this.yf));
    this.gf && c.searchParams.set("path", this.gf);
    H.decode().scheme == Db && c.searchParams.set($b, tc);
    return c.href
  };

  function hl(a) {
    if (a.S || a.S.resource())
      return a.S.resource().filter
  }
  gl.prototype.qf = function (a) {
    a = Xk(a);
    var b = !!this.Od;
    a && a.items && a.items.length && (b && (a.items = [il(this, a)]),
      "best" != (this.S.resource().filter && this.S.resource().filter.Md || "recent") && a.items.sort(function (c, d) {
        return d.published.getTime() - c.published.getTime()
      }),
      this.we ? this.yf += a.fb.la : this.ve = a.items[a.items.length - 1].published.getTime() - 1);
    Object.assign(this.S.resource(), a.ed);
    a.fb && a.fb.total ? this.S.resource().total = a.fb.total : this.S.resource().total = a && a.items && a.items.length || 0;
    (!a.items || !a.items.length || a.fb.startIndex + a.fb.la > a.fb.total || this.gf || this.Od) && this.hasNext(!1);
    return a && a.items
  };

  function il(a, b) {
    b = b.items;
    for (var c = b.length, d = 0; d < c; d++)
      if ((new td(b[d].url)).path == a.Od)
        return b[d];
    return null
  };

  function jl() {
    I().converter(Pi, this.ug);
    I().converter(Wk, this.ug)
  }
  jl.prototype.owns = function (a) {
    a = new td(a);
    return a.scheme && "http" != a.scheme && a.scheme != Db ? !1 : !0
  };
  jl.prototype.iterator = function (a, b, c) {
    return new gl(new Ok(new jd(a, b)), c)
  };
  jl.prototype.ug = function (a, b) {
    a.Ke || (a.Ke = a.data());
    b.scope(a instanceof Wk ? "Page" : "Post", a.Ke);
    return a.Ke
  };

  function kl(a, b) {
    this.ta = a;
    this.Me = !1;
    this.gb = 0;
    this.Wb = this.la(b) || 1
  }
  B = kl.prototype;
  B.la = function (a) {
    void 0 !== a && (this.Wb = parseInt(a, 10),
      this.Wb = 0 < this.Wb ? this.Wb : 1);
    return this.Wb
  };
  B.items = function () {
    return this.ta.items().slice(0, this.gb)
  };
  B.resources = function () {
    return this.ta.resources()
  };
  B.waiting = function () {
    return this.ta.waiting() || !!this.Bb
  };
  B.hasNext = function () {
    return this.ta.items().length >= this.gb + 1 || this.ta.hasNext()
  };
  B.reset = function () {
    this.ta.reset();
    this.gb = 0;
    this.Me = !1
  };
  B.next = function (a) {
    this.Bb = a || this.Bb;
    clearTimeout(this.hl);
    this.hl = setTimeout(this.Ol.bind(this), 0)
  };
  B.Ol = function () {
    if (this.ta.items().length >= this.gb + 1) {
      var a = Math.min(this.gb + this.Wb, this.ta.items().length),
        b = this.ta.items().slice(this.gb, a);
      this.gb = a;
      a = this.Bb;
      this.Bb = null;
      a && a(b)
    } else
      this.ta.waiting() || (this.Me ? (b = this.Bb,
        this.Bb = null,
        b && b(null)) : this.ta.next(this.gl.bind(this)))
  };
  B.gl = function (a) {
    null == a && (this.Me = !0);
    this.next(null)
  };

  function ll() {
    this.settings = {};
    this.configure();
    this.Lf = [];
    this.Vc = new Ti;
    ml || (ml = new jl)
  }
  var ml;
  B = ll.prototype;
  B.notify = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    this.Vc.notify.apply(this.Vc, [d].concat(Lc(c)));
    return this
  };
  B.addListener = function (a, b) {
    this.Vc.addListener(a, b)
  };
  B.removeListener = function (a, b) {
    this.Vc.removeListener(a, b)
  };
  B.configure = function (a) {
    this.settings = Object.assign({}, nl, this.settings, a);
    return this
  };
  B.open = function (a, b) {
    b = this.iterator(a, b);
    this.V = new kl(b, this.He());
    this.fd = new cl(a);
    return this.V
  };
  B.items = function () {
    return this.V ? this.V.items() : []
  };
  B.resources = function () {
    return this.V ? this.V.resources() : []
  };
  B.waiting = function () {
    return this.V ? this.V.waiting() : !1
  };
  B.hasNext = function () {
    return this.V ? this.V.hasNext() : !1
  };
  B.next = function (a, b) {
    if (this.V) {
      var c, d = 0;
      a && (typeof a === t ? c = a : d = parseInt(a, 10));
      b && (typeof b === t ? c = b : d = parseInt(b, 10));
      !isNaN(d) && 0 < d && this.V instanceof kl && this.V.la(d);
      this.xe = c;
      this.V.next(this.Jj.bind(this))
    }
  };
  B.reset = function () {
    this.V && this.V.reset()
  };
  B.Jj = function (a) {
    this.notify(Kb, a);
    this.xe && (this.xe(a),
      delete this.xe)
  };
  B.find = function (a) {
    if (a) {
      var b = /\./.test(a);
      b && (a = H.decode(a).encode(!1, !1));
      var c = function (d) {
        return a == (b ? d.url : d.id)
      };
      if ((c = this.items().filter(c).concat(this.Lf.filter(c))) && 0 < c.length)
        return c[0]
    }
  };
  B.iterator = function (a, b, c) {
    if (ml && ml.owns(a))
      return ml.iterator(a, b, c || this.He())
  };
  B.post = function (a, b) {
    var c;
    if (c = this.fd) {
      c = this.fd;
      b = this.Bg.bind(this, b);
      var d = za,
        e;
      if (/^\d+$/.test(a))
        d += "/" + a;
      else {
        var f = fl(a);
        "/" != f && (e = f)
      }
      d = new URL(d, c.sj);
      d.searchParams.set("alt", "json");
      d.searchParams.set("v", "2");
      d.searchParams.set(pb, "1");
      e && d.searchParams.set("path", e);
      H.decode().scheme == Db && d.searchParams.set($b, tc);
      c = dl(c, a, "item", d.href, b)
    }
    return !!c
  };
  B.page = function (a, b) {
    var c;
    if (c = this.fd) {
      c = this.fd;
      b = this.Bg.bind(this, b);
      var d = el(c, a);
      d ? (b && b(d),
        c = !1) : (d = "/feeds/pages/default",
        /^\d+$/.test(a) && (d += "/" + a),
        d = new URL(d, c.sj),
        d.searchParams.set("alt", "json"),
        d.searchParams.set("v", "2"),
        d.searchParams.set(pb, "1"),
        H.decode().scheme == Db && d.searchParams.set($b, tc),
        c = dl(c, a, lc, d.href, b))
    }
    return !!c
  };
  B.Bg = function (a, b) {
    b && this.Lf.push(b);
    a(b)
  };
  B.He = function () {
    return this.settings.batchSize
  };
  B.getSettings = function () {
    return this.settings
  };
  var nl = {
    blogger_base: "https://www.blogger.com",
    batchSize: 25
  };
  ld = function () {
    return new ll
  };

  function ol(a, b) {
    Pk.call(this, a, b || 50)
  }
  D(ol, Pk);
  ol.prototype.Pe = function () {
    var a = G().getSettings(),
      b = new URL(["/feeds/", this.S.resource().id, "/comments/default"].join(""), a.blog_url);
    b.searchParams.set("alt", "json");
    b.searchParams.set("v", "2");
    b.searchParams.set(pb, "1");
    b.searchParams.set("orderby", Wb);
    b.searchParams.set("reverse", sb);
    b.searchParams.set("max-results", "" + this.la);
    3 == a.feeds_api && b.searchParams.set("proxy_feed", tc);
    this.Mf && b.searchParams.set("published-min", Ri(new Date(this.Mf)));
    H.decode().scheme == Db && b.searchParams.set($b, tc);
    return b.href
  };
  ol.prototype.qf = function (a) {
    if (a && a.feed) {
      var b = new Vk;
      b.Kf = Zk(a.feed);
      b.comments = [];
      if (a.feed.entry)
        for (var c, d = 0; c = a.feed.entry[d]; d++) {
          var e = b.comments,
            f = e.push,
            h = c;
          c = new Sk;
          var k = /blog-(\d+).post-(\d+)/.exec(X(h.id));
          k && (c.id = k[2]);
          c.extensions = bl(h);
          c.body = X(h.content || h.summary);
          c.timestamp = Qi(X(h.published)).getTime() + "";
          c.displayTime = c.extensions["blogger.displayTime"];
          c.extensions["blogger.contentRemoved"] == tc && (c.body = '<span class="deleted-comment">' + c.body + "</span>");
          if (k = Yk(h))
            c.author = k[0];
          h.link && (h.link[2] && h.link[2].href && (k = H.decode(h.link[2].href),
              k.scheme = H.decode().scheme,
              c.url = c.link = c.permalink = k.encode()),
            h.link[3] && (h = /.*comments\/default\/(\d+)\?.*/.exec(h.link[3].href))) && (c.parentId = h[1]);
          f.call(e, c)
        }
      a = b
    } else
      a = void 0;
    if (b = a && a.comments && a.comments.length)
      this.Mf = parseInt(a.comments[a.comments.length - 1].timestamp, 10) + 1;
    d = this.S.resource() || 0;
    (!b || a.Kf.startIndex + a.Kf.la > d) && this.hasNext(!1);
    return a && a.comments
  };

  function pl(a, b, c) {
    var d = window.jstiming;
    if (d && d.getLabels && d.getTick) {
      var e = {};
      for (a = a ? a.slice(0) : []; 0 < a.length;)
        for (var f = a.shift(), h = d.getLabels(f) || [], k = 0; k < h.length; ++k)
          if ("_" !== h[k][0] && h[k] !== jc) {
            var l = d.getTick(f, h[k]);
            e[f.name] ? e[f.name].push({
              label: h[k],
              tick: l
            }) : e[f.name] = [{
              label: h[k],
              tick: l
            }]
          }
      for (var m in e) {
        d = [];
        for (a = 0; a < e[m].length; ++a)
          d.push(e[m][a].label + "." + e[m][a].tick);
        a = Object.assign({}, c);
        b && (a.e = b);
        f = [];
        for (var n in a)
          f.push(n + "=" + a[n]);
        d = ["//csi.gstatic.com/csi?v=3&s=blogger", "&action=" + m, "&it=" + d.join(","), f ? "&" + f.join("&") : ""].join("");
        (new Image).src = d
      }
    }
  };
  /*

  SPDX-License-Identifier: Apache-2.0
  */
  function ql(a) {
    var b;
    var c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
    b = d ? d.nonce || d.getAttribute(Mb) || "" : "";
    b && a.setAttribute(Mb, b)
  };

  function rl(a, b) {
    og(b, function (c, d) {
      c && typeof c == w && c.Ja && (c = c.wa());
      d == mc ? a.style.cssText = c : d == q ? a.className = c : "for" == d ? a.htmlFor = c : sl.hasOwnProperty(d) ? a.setAttribute(sl[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
    })
  }
  var sl = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: Cb,
    maxlength: "maxLength",
    nonce: Mb,
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };

  function tl(a, b, c) {
    var d = arguments,
      e = document,
      f = d[1],
      h = ul(e, String(d[0]));
    f && (typeof f === A ? h.className = f : Array.isArray(f) ? h.className = f.join(" ") : rl(h, f));
    2 < d.length && vl(e, h, d, 2);
    return h
  }

  function vl(a, b, c, d) {
    function e(k) {
      k && b.appendChild(typeof k === A ? a.createTextNode(k) : k)
    }
    for (; d < c.length; d++) {
      var f = c[d];
      if (!Yc(f) || Zc(f) && 0 < f.nodeType)
        e(f);
      else {
        a: {
          if (f && typeof f.length == Ob) {
            if (Zc(f)) {
              var h = typeof f.item == t || typeof f.item == A;
              break a
            }
            if (typeof f === t) {
              h = typeof f.item == t;
              break a
            }
          }
          h = !1
        }
        ue(h ? we(f) : f, e)
      }
    }
  }

  function ul(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b)
  }

  function wl(a) {
    J(a, "Node cannot be null or undefined.");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }

  function xl(a) {
    this.yk = a || E.document || document
  }
  xl.prototype.append = function (a, b) {
    vl(wl(a), a, arguments, 1)
  };
  xl.prototype.contains = function (a, b) {
    if (!a || !b)
      return !1;
    if (a.contains && 1 == b.nodeType)
      return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
      b = b.parentNode;
    return b == a
  };

  function Y(a, b, c) {
    if (typeof b === A)
      (b = yl(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = yl(c, d);
        f && (c.style[f] = e)
      }
  }
  var zl = {};

  function yl(a, b) {
    var c = zl[b];
    if (!c) {
      var d = lh(b);
      c = d;
      void 0 === a.style[d] && (d = (Ee ? "Webkit" : De ? "Moz" : Be ? "ms" : null) + mh(d),
        void 0 !== a.style[d] && (c = d));
      zl[b] = c
    }
    return c
  }

  function Al(a, b) {
    var c = wl(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
  }

  function Bl(a, b, c) {
    a.style.left = Cl(b, !1);
    a.style.top = Cl(c, !1)
  }

  function Dl(a, b, c) {
    if (b instanceof Lh)
      c = b.height,
      b = b.width;
    else if (void 0 == c)
      throw Error("missing height argument");
    a.style.width = Cl(b, !0);
    a.style.height = Cl(c, !0)
  }

  function Cl(a, b) {
    typeof a == Ob && (a = (b ? Math.round(a) : a) + Xb);
    return a
  }

  function El(a) {
    var b = Fl;
    if ((Al(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display) != Nb)
      return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
  }

  function Fl(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = Ee && !b && !c;
    if ((void 0 === b || d) && a.getBoundingClientRect) {
      try {
        var e = a.getBoundingClientRect()
      } catch (f) {
        e = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }
      return new Lh(e.right - e.left, e.bottom - e.top)
    }
    return new Lh(b, c)
  }

  function Gl(a, b) {
    a.style.display = b ? "" : Nb
  };

  function Hl() {
    this.Qd = [];
    this.Cg = !1;
    this.Gg = 1;
    this.cj = {}
  }
  Hl.prototype.init = function (a) {
    var b = this;
    this.A = a;
    if (this.A.headless())
      return this;
    this.A.addListener(xc, function () {
      Il(b, {
        beforeRender: b.dm.bind(b)
      })
    });
    return this
  };
  Hl.prototype.dm = function (a) {
    var b = this.A && this.A.getAnalyticsId();
    b && (a.analytics_id = b)
  };

  function Il(a, b) {
    var c = document.querySelectorAll(".adsense");
    c && (Jl(a) ? Kl(a, c, b) : a.Qd.push(function () {
      Kl(a, c, b)
    }))
  }

  function Kl(a, b, c) {
    window.google_persistent_state_async = {};
    window.google_unique_id = null;
    b.forEach(function (d) {
      var e = {},
        f;
      for (f in Ll) {
        var h = d.dataset[f];
        h && (e[f] = h)
      }
      e = Object.assign({}, Ll, e, c);
      Ml(a, d, e)
    })
  }

  function Jl(a) {
    var b = window.adsbygoogle;
    if (b && b.push)
      return !0;
    if (!a.Cg) {
      a.Cg = !0;
      b = tl(Ja, {
        type: nc
      });
      var c = Cg(yg(new vg(wg, "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")));
      b.src = Bg(c);
      ql(b);
      b.onload = a.uk.bind(a);
      (a = document.querySelector(v)) && a.append(b)
    }
    return !1
  }
  Hl.prototype.uk = function () {
    for (var a = 0; a < this.Qd.length; ++a)
      this.Qd[a]();
    this.Qd = []
  };

  function Ml(a, b, c) {
    var d = {},
      e = b.dataset.vk;
    e && (d = a.cj[e] || {});
    var f = Nl(c);
    c && typeof c.beforeRender === t && c.beforeRender(f);
    c = !1;
    if (d.Qk)
      for (var h in f) {
        if (f[h] !== d[h]) {
          c = !0;
          break
        }
      }
    else
      c = !0;
    if (c && f.format && f.client) {
      for (; b.firstChild;)
        b.removeChild(b.firstChild);
      var k = document.createElement("ins");
      T(k, "adsbygoogle");
      f.client && k.setAttribute("data-ad-client", f.client);
      f.host && k.setAttribute("data-ad-host", f.host);
      f.slot && k.setAttribute("data-ad-slot", f.slot);
      f.type && k.setAttribute("data-ad-type", f.type);
      d = Ol[f.format];
      Y(k, "display", "block");
      d.Td ? k.setAttribute("data-ad-format", d.format) : Dl(k, d.width, d.height);
      f.analytics_id && k.setAttribute("data-analytics-uacct", f.analytics_id);
      b.append(k);
      f.Qk = !0;
      e || (e = "" + a.Gg,
        a.Gg++);
      b.dataset.vk = e;
      a.cj[e] = f;
      setTimeout(function () {
        try {
          window.adsbygoogle.push({
            element: k
          })
        } catch (l) {}
      }, 0)
    }
  }

  function Nl(a) {
    var b = {};
    Pl.forEach(function (d) {
      b[d] = a[d]
    });
    b.format && (b.format = b.format.toLowerCase().replace(/\s|_/g, ""));
    b.type && (b.type = b.type.toLowerCase().split(/\s|_|,|\//).filter(function (d) {
      return "text" == d || "image" == d
    }).sort().join(","));
    var c = Ol[a.format] ? a.format : "auto";
    b.format = c;
    return b
  }
  var Ll = {
      analytics_id: void 0,
      format: void 0,
      type: void 0,
      slot: void 0,
      host: void 0,
      client: void 0,
      beforeRender: void 0
    },
    Pl = "analytics_id client format host slot type".split(" "),
    Ol = {
      auto: {
        format: "auto",
        Td: !0
      },
      horizontal: {
        format: "horizontal",
        Td: !0
      },
      vertical: {
        format: "vertical",
        Td: !0
      },
      rectangle: {
        format: "rectangle",
        Td: !0
      },
      banner: {
        format: "BANNER",
        width: 468,
        height: 60
      },
      button: {
        format: "BUTTON",
        width: 125,
        height: 125
      },
      halfbanner: {
        format: "HALF_BANNER",
        width: 234,
        height: 60
      },
      largerectangle: {
        format: "LARGE_RECTANGLE",
        width: 336,
        height: 280
      },
      leaderboard: {
        format: "LEADERBOARD",
        width: 728,
        height: 90
      },
      largeleaderboard: {
        format: "LARGE_LEADERBOARD",
        width: 970,
        height: 90
      },
      billboard: {
        format: "BILLBOARD",
        width: 970,
        height: 250
      },
      mediumrectangle: {
        format: "MEDIUM_RECTANGLE",
        width: 300,
        height: 250
      },
      skyscraper: {
        format: "SKYSCRAPER",
        width: 120,
        height: 600
      },
      smallsquare: {
        format: "SMALL_SQUARE",
        width: 200,
        height: 200
      },
      smallrectangle: {
        format: "SMALL_RECTANGLE",
        width: 180,
        height: 150
      },
      square: {
        format: "SQUARE",
        width: 250,
        height: 250
      },
      verticalbanner: {
        format: "VERTICAL_BANNER",
        width: 120,
        height: 240
      },
      wideskyscraper: {
        format: "WIDE_SKYSCRAPER",
        width: 160,
        height: 600
      },
      largeskyscraper: {
        format: "LARGE_SKYSCRAPER",
        width: 300,
        height: 600
      },
      portrait: {
        format: "PORTRAIT",
        width: 300,
        height: 1050
      }
    };

  function Ql() {};

  function Rl(a, b) {
    this.type = a;
    this.oc = this.target = b;
    this.defaultPrevented = this.Hc = !1
  }
  Rl.prototype.stopPropagation = function () {
    this.Hc = !0
  };
  Rl.prototype.preventDefault = function () {
    this.defaultPrevented = !0
  };
  var Sl = function () {
    if (!E.addEventListener || !Object.defineProperty)
      return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0
        }
      });
    try {
      E.addEventListener("test", function () {}, b),
        E.removeEventListener("test", function () {}, b)
    } catch (c) {}
    return a
  }();

  function Tl(a, b) {
    Rl.call(this, a ? a.type : "");
    this.relatedTarget = this.oc = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.zc = null;
    a && this.init(a, b)
  }
  bd(Tl, Rl);
  var Ul = Vf({
    2: "touch",
    3: "pen",
    4: "mouse"
  });
  Tl.prototype.init = function (a, b) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.oc = b;
    if (b = a.relatedTarget) {
      if (De) {
        a: {
          try {
            xe(b.nodeName);
            var e = !0;
            break a
          } catch (f) {}
          e = !1
        }
        e || (b = null)
      }
    } else
      "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
      this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
      this.screenX = d.screenX || 0,
      this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
      this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
      this.screenX = a.screenX || 0,
      this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    c = typeof a.pointerType === A ? a.pointerType : Ul[a.pointerType] || "";
    this.pointerType = c;
    this.state = a.state;
    this.zc = a;
    a.defaultPrevented && Tl.P.preventDefault.call(this)
  };
  Tl.prototype.stopPropagation = function () {
    Tl.P.stopPropagation.call(this);
    this.zc.stopPropagation ? this.zc.stopPropagation() : this.zc.cancelBubble = !0
  };
  Tl.prototype.preventDefault = function () {
    Tl.P.preventDefault.call(this);
    var a = this.zc;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
  };
  var Vl = "closure_listenable_" + (1E6 * Math.random() | 0);
  var Wl = 0;

  function Xl(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Fd = e;
    this.key = ++Wl;
    this.Lc = this.hd = !1
  }

  function Yl(a) {
    a.Lc = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Fd = null
  };

  function Zl(a) {
    this.src = a;
    this.xa = {};
    this.ae = 0
  }
  Zl.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.xa[f];
    a || (a = this.xa[f] = [],
      this.ae++);
    var h = $l(a, b, d, e); -
    1 < h ? (b = a[h],
      c || (b.hd = !1)) : (b = new Xl(b, this.src, f, !!d, e),
      b.hd = c,
      a.push(b));
    return b
  };
  Zl.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.xa))
      return !1;
    var e = this.xa[a];
    b = $l(e, b, c, d);
    return -1 < b ? (Yl(e[b]),
      J(null != e.length),
      Array.prototype.splice.call(e, b, 1),
      0 == e.length && (delete this.xa[a],
        this.ae--),
      !0) : !1
  };

  function am(a, b) {
    var c = b.type;
    if (c in a.xa) {
      var d = a.xa[c],
        e = te(d, b),
        f;
      if (f = 0 <= e)
        J(null != d.length),
        Array.prototype.splice.call(d, e, 1);
      f && (Yl(b),
        0 == a.xa[c].length && (delete a.xa[c],
          a.ae--))
    }
  }

  function $l(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Lc && f.listener == b && f.capture == !!c && f.Fd == d)
        return e
    }
    return -1
  };
  var bm = "closure_lm_" + (1E6 * Math.random() | 0),
    cm = {},
    dm = 0;

  function em(a, b, c, d, e) {
    if (d && d.once)
      fm(a, b, c, d, e);
    else if (Array.isArray(b))
      for (var f = 0; f < b.length; f++)
        em(a, b[f], c, d, e);
    else
      c = gm(c),
      a && a[Vl] ? a.Kj(b, c, Zc(d) ? !!d.capture : !!d, e) : hm(a, b, c, !1, d, e)
  }

  function hm(a, b, c, d, e, f) {
    if (!b)
      throw Error("Invalid event type");
    var h = Zc(e) ? !!e.capture : !!e,
      k = im(a);
    k || (a[bm] = k = new Zl(a));
    c = k.add(b, c, d, h, f);
    if (!c.proxy) {
      d = jm();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        Sl || (e = h),
        void 0 === e && (e = !1),
        a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent)
        a.attachEvent(km(b.toString()), d);
      else if (a.addListener && a.removeListener)
        J("change" === b, "MediaQueryList only has a change event"),
        a.addListener(d);
      else
        throw Error("addEventListener and attachEvent are unavailable.");
      dm++
    }
  }

  function jm() {
    function a(c) {
      return b.call(a.src, a.listener, c)
    }
    var b = lm;
    return a
  }

  function fm(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++)
        fm(a, b[f], c, d, e);
    else
      c = gm(c),
      a && a[Vl] ? a.Vk(b, c, Zc(d) ? !!d.capture : !!d, e) : hm(a, b, c, !0, d, e)
  }

  function mm(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++)
        mm(a, b[f], c, d, e);
    else
      (d = Zc(d) ? !!d.capture : !!d,
        c = gm(c),
        a && a[Vl]) ? a.Lj(b, c, d, e) : a && (a = im(a)) && (b = a.xa[b.toString()],
        a = -1,
        b && (a = $l(b, c, d, e)),
        (c = -1 < a ? b[a] : null) && nm(c))
  }

  function nm(a) {
    if (typeof a !== Ob && a && !a.Lc) {
      var b = a.src;
      if (b && b[Vl])
        b.pj(a);
      else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(km(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        dm--;
        (c = im(b)) ? (am(c, a),
          0 == c.ae && (c.src = null,
            b[bm] = null)) : Yl(a)
      }
    }
  }

  function km(a) {
    return a in cm ? cm[a] : cm[a] = "on" + a
  }

  function lm(a, b) {
    if (a.Lc)
      a = !0;
    else {
      b = new Tl(b, this);
      var c = a.listener,
        d = a.Fd || a.src;
      a.hd && nm(a);
      a = c.call(d, b)
    }
    return a
  }

  function im(a) {
    a = a[bm];
    return a instanceof Zl ? a : null
  }
  var om = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

  function gm(a) {
    J(a, "Listener can not be null.");
    if (typeof a === t)
      return a;
    J(a.handleEvent, "An object listener must have handleEvent method.");
    a[om] || (a[om] = function (b) {
      return a.handleEvent(b)
    });
    return a[om]
  };

  function pm() {
    this.Mb = new Zl(this);
    this.mk = this;
    this.Ui = null
  }
  bd(pm, Ql);
  pm.prototype[Vl] = !0;
  B = pm.prototype;
  B.addEventListener = function (a, b, c, d) {
    em(this, a, b, c, d)
  };
  B.removeEventListener = function (a, b, c, d) {
    mm(this, a, b, c, d)
  };
  B.qc = function (a) {
    qm(this);
    var b = this.Ui;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.Ui)
        c.push(b),
        J(1E3 > ++d, "infinite loop")
    }
    b = this.mk;
    d = a.type || a;
    if (typeof a === A)
      a = new Rl(a, b);
    else if (a instanceof Rl)
      a.target = a.target || b;
    else {
      var e = a;
      a = new Rl(d, b);
      qg(a, e)
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.Hc && 0 <= f; f--) {
        var h = a.oc = c[f];
        e = h.ud(d, !0, a) && e
      }
    a.Hc || (h = a.oc = b,
      e = h.ud(d, !0, a) && e,
      a.Hc || (e = h.ud(d, !1, a) && e));
    if (c)
      for (f = 0; !a.Hc && f < c.length; f++)
        h = a.oc = c[f],
        e = h.ud(d, !1, a) && e
  };
  B.Kj = function (a, b, c, d) {
    qm(this);
    this.Mb.add(String(a), b, !1, c, d)
  };
  B.Vk = function (a, b, c, d) {
    this.Mb.add(String(a), b, !0, c, d)
  };
  B.Lj = function (a, b, c, d) {
    this.Mb.remove(String(a), b, c, d)
  };
  B.pj = function (a) {
    am(this.Mb, a)
  };
  B.ud = function (a, b, c) {
    a = this.Mb.xa[String(a)];
    if (!a)
      return !0;
    a = a.concat();
    for (var d = !0, e = 0; e < a.length; ++e) {
      var f = a[e];
      if (f && !f.Lc && f.capture == b) {
        var h = f.listener,
          k = f.Fd || f.src;
        f.hd && this.pj(f);
        d = !1 !== h.call(k, c) && d
      }
    }
    return d && !c.defaultPrevented
  };

  function qm(a) {
    J(a.Mb, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
  };

  function rm() {
    pm.call(this);
    this.ye = 0;
    this.endTime = this.startTime = null
  }
  bd(rm, pm);

  function sm(a, b) {
    Array.isArray(b) || (b = [b]);
    J(0 < b.length, "At least one Css3Property should be specified.");
    b = b.map(function (c) {
      if (typeof c === A)
        return c;
      de(c, "Expected css3 property to be an object.");
      var d = c.Pd + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
      J(c.Pd && typeof c.duration === Ob && c.timing && typeof c.delay === Ob, "Unexpected css3 property value: %s", d);
      return d
    });
    Y(a, pc, b.join(","))
  }
  var tm = ng(function () {
    if (Be)
      return Le();
    var a = ul(document, "DIV"),
      b = Ee ? "-webkit" : De ? "-moz" : Be ? "-ms" : null,
      c = {
        transition: Qb
      };
    b && (c[b + "-transition"] = Qb);
    c = {
      style: c
    };
    if (!ch.test(ob))
      throw Error("Invalid tag name <div>.");
    if ("DIV" in eh)
      throw Error("Tag name <div> is not allowed for SafeHtml.");
    b = void 0;
    var d = "";
    if (c)
      for (m in c)
        if (Object.prototype.hasOwnProperty.call(c, m)) {
          if (!ch.test(m))
            throw Error('Invalid attribute name "' + m + '".');
          var e = c[m];
          if (null != e) {
            var f = void 0;
            var h = m;
            if (e instanceof vg)
              e = yg(e);
            else if (h.toLowerCase() == mc) {
              if (!Zc(e))
                throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof e + " given: " + e);
              if (!(e instanceof Lg)) {
                var k = "";
                for (f in e)
                  if (Object.prototype.hasOwnProperty.call(e, f)) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(f))
                      throw Error("Name allows only [-_a-zA-Z0-9], got: " + f);
                    var l = e[f];
                    null != l && (l = Array.isArray(l) ? l.map(Ng).join(" ") : Ng(l),
                      k += f + ":" + l + ";")
                  }
                e = k ? new Lg(k, Kg) : Mg
              }
              e instanceof Lg && e.constructor === Lg ? e = e.kf : (ae("expected object of type SafeStyle, got '" + e + ia + Xc(e)),
                e = "type_error:SafeStyle")
            } else {
              if (/^on/i.test(h))
                throw Error('Attribute "' + h + '" requires goog.string.Const value, "' + e + '" given.');
              if (h.toLowerCase() in dh)
                if (e instanceof zg)
                  e = Bg(e).toString();
                else if (e instanceof Dg)
                e = Fg(e);
              else if (typeof e === A)
                e = (Ig(e) || Jg).wa();
              else
                throw Error('Attribute "' + h + '" on tag "div" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + e + '" given.');
            }
            e.Ja && (e = e.wa());
            J(typeof e === A || typeof e === Ob, "String or number value expected, got " + typeof e + " with value: " + e);
            f = h + '="' + ie(String(e)) + '"';
            d += " " + f
          }
        }
    var m = "<div" + d;
    null == b ? b = [] : Array.isArray(b) || (b = [b]);
    !0 === sg.div ? (J(!b.length, "Void tag <div> does not allow content."),
      m += ">") : (b = bh(b),
      m += ">" + Xg(b).toString() + "</div>");
    m = Zg(m);
    if (a.tagName && fh[a.tagName.toUpperCase()])
      throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
    if (gh())
      for (; a.lastChild;)
        a.removeChild(a.lastChild);
    a.innerHTML = Xg(m);
    a = a.firstChild;
    J(a.nodeType == Node.ELEMENT_NODE);
    m = a.style[lh(pc)];
    a = "undefined" !== typeof m ? m : a.style[yl(a, pc)] || "";
    return "" != a
  });

  function um(a, b) {
    this.xk = a;
    this.Ul = b;
    this.Kd = 0;
    this.Wc = null
  }
  um.prototype.get = function () {
    if (0 < this.Kd) {
      this.Kd--;
      var a = this.Wc;
      this.Wc = a.next;
      a.next = null
    } else
      a = this.xk();
    return a
  };

  function vm(a, b) {
    a.Ul(b);
    100 > a.Kd && (a.Kd++,
      b.next = a.Wc,
      a.Wc = b)
  };
  var wm;

  function xm() {
    var a = E.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !se("Presto") && (a = function () {
      var e = ul(document, "IFRAME");
      e.style.display = Nb;
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.close();
      var h = "callImmediate" + Math.random(),
        k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
      e = F(function (l) {
        if (("*" == k || l.origin == k) && l.data == h)
          this.port1.onmessage()
      }, this);
      f.addEventListener("message", e, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function () {
          f.postMessage(h, k)
        }
      }
    });
    if ("undefined" !== typeof a && !se("Trident") && !se("MSIE")) {
      var b = new a,
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.qg;
          c.qg = null;
          e()
        }
      };
      return function (e) {
        d.next = {
          qg: e
        };
        d = d.next;
        b.port2.postMessage(0)
      }
    }
    return function (e) {
      E.setTimeout(e, 0)
    }
  };

  function ym(a) {
    E.setTimeout(function () {
      throw a;
    }, 0)
  };

  function zm() {
    this.de = this.wb = null
  }
  zm.prototype.add = function (a, b) {
    var c = Am.get();
    c.set(a, b);
    this.de ? this.de.next = c : (J(!this.wb),
      this.wb = c);
    this.de = c
  };
  zm.prototype.remove = function () {
    var a = null;
    this.wb && (a = this.wb,
      this.wb = this.wb.next,
      this.wb || (this.de = null),
      a.next = null);
    return a
  };
  var Am = new um(function () {
    return new Bm
  }, function (a) {
    return a.reset()
  });

  function Bm() {
    this.next = this.scope = this.Ue = null
  }
  Bm.prototype.set = function (a, b) {
    this.Ue = a;
    this.scope = b;
    this.next = null
  };
  Bm.prototype.reset = function () {
    this.next = this.scope = this.Ue = null
  };
  var Cm, Dm = !1,
    Em = new zm;

  function Fm(a, b) {
    Cm || Gm();
    Dm || (Cm(),
      Dm = !0);
    Em.add(a, b)
  }

  function Gm() {
    if (E.Promise && E.Promise.resolve) {
      var a = E.Promise.resolve(void 0);
      Cm = function () {
        a.then(Hm)
      }
    } else
      Cm = function () {
        var b = Hm;
        typeof E.setImmediate !== t || E.Window && E.Window.prototype && !se("Edge") && E.Window.prototype.setImmediate == E.setImmediate ? (wm || (wm = xm()),
          wm(b)) : E.setImmediate(b)
      }
  }

  function Hm() {
    for (var a; a = Em.remove();) {
      try {
        a.Ue.call(a.scope)
      } catch (b) {
        ym(b)
      }
      vm(Am, a)
    }
    Dm = !1
  };

  function Im(a) {
    if (!a)
      return !1;
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  };

  function Jm(a) {
    this.ia = 0;
    this.Nf = void 0;
    this.Ib = this.Ia = this.hb = null;
    this.Ed = this.Te = !1;
    if (a != mg)
      try {
        var b = this;
        a.call(void 0, function (c) {
          Km(b, 2, c)
        }, function (c) {
          if (!(c instanceof Lm))
            try {
              if (c instanceof Error)
                throw c;
              throw Error("Promise rejected.");
            } catch (d) {}
          Km(b, 3, c)
        })
      } catch (c) {
        Km(this, 3, c)
      }
  }

  function Mm() {
    this.next = this.context = this.Sb = this.ob = this.child = null;
    this.cd = !1
  }
  Mm.prototype.reset = function () {
    this.context = this.Sb = this.ob = this.child = null;
    this.cd = !1
  };
  var Nm = new um(function () {
    return new Mm
  }, function (a) {
    a.reset()
  });

  function Om(a, b, c) {
    var d = Nm.get();
    d.ob = a;
    d.Sb = b;
    d.context = c;
    return d
  }
  Jm.prototype.then = function (a, b, c) {
    null != a && ce(a, Sb);
    null != b && ce(b, Tb);
    return Pm(this, typeof a === t ? a : null, typeof b === t ? b : null, c)
  };
  Jm.prototype.$goog_Thenable = !0;
  Jm.prototype.cancel = function (a) {
    if (0 == this.ia) {
      var b = new Lm(a);
      Fm(function () {
        Qm(this, b)
      }, this)
    }
  };

  function Qm(a, b) {
    if (0 == a.ia)
      if (a.hb) {
        var c = a.hb;
        if (c.Ia) {
          for (var d = 0, e = null, f = null, h = c.Ia; h && (h.cd || (d++,
              h.child == a && (e = h),
              !(e && 1 < d))); h = h.next)
            e || (f = h);
          e && (0 == c.ia && 1 == d ? Qm(c, b) : (f ? (d = f,
              J(c.Ia),
              J(null != d),
              d.next == c.Ib && (c.Ib = d),
              d.next = d.next.next) : Rm(c),
            Sm(c, e, 3, b)))
        }
        a.hb = null
      } else
        Km(a, 3, b)
  }

  function Tm(a, b) {
    a.Ia || 2 != a.ia && 3 != a.ia || Um(a);
    J(null != b.ob);
    a.Ib ? a.Ib.next = b : a.Ia = b;
    a.Ib = b
  }

  function Pm(a, b, c, d) {
    var e = Om(null, null, null);
    e.child = new Jm(function (f, h) {
      e.ob = b ? function (k) {
          try {
            var l = b.call(d, k);
            f(l)
          } catch (m) {
            h(m)
          }
        } :
        f;
      e.Sb = c ? function (k) {
          try {
            var l = c.call(d, k);
            void 0 === l && k instanceof Lm ? h(k) : f(l)
          } catch (m) {
            h(m)
          }
        } :
        h
    });
    e.child.hb = a;
    Tm(a, e);
    return e.child
  }
  Jm.prototype.xm = function (a) {
    J(1 == this.ia);
    this.ia = 0;
    Km(this, 2, a)
  };
  Jm.prototype.ym = function (a) {
    J(1 == this.ia);
    this.ia = 0;
    Km(this, 3, a)
  };

  function Km(a, b, c) {
    if (0 == a.ia) {
      a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself"));
      a.ia = 1;
      a: {
        var d = c,
          e = a.xm,
          f = a.ym;
        if (d instanceof Jm) {
          null != e && ce(e, Sb);
          null != f && ce(f, Tb);
          Tm(d, Om(e || mg, f || null, a));
          var h = !0
        } else if (Im(d))
          d.then(e, f, a),
        h = !0;
        else {
          if (Zc(d))
            try {
              var k = d.then;
              if (typeof k === t) {
                Vm(d, k, e, f, a);
                h = !0;
                break a
              }
            } catch (l) {
              f.call(a, l);
              h = !0;
              break a
            }
          h = !1
        }
      }
      h || (a.Nf = c,
        a.ia = b,
        a.hb = null,
        Um(a),
        3 != b || c instanceof Lm || Wm(a, c))
    }
  }

  function Vm(a, b, c, d, e) {
    function f(l) {
      k || (k = !0,
        d.call(e, l))
    }

    function h(l) {
      k || (k = !0,
        c.call(e, l))
    }
    var k = !1;
    try {
      b.call(a, h, f)
    } catch (l) {
      f(l)
    }
  }

  function Um(a) {
    a.Te || (a.Te = !0,
      Fm(a.Ek, a))
  }

  function Rm(a) {
    var b = null;
    a.Ia && (b = a.Ia,
      a.Ia = b.next,
      b.next = null);
    a.Ia || (a.Ib = null);
    null != b && J(null != b.ob);
    return b
  }
  Jm.prototype.Ek = function () {
    for (var a; a = Rm(this);)
      Sm(this, a, this.ia, this.Nf);
    this.Te = !1
  };

  function Sm(a, b, c, d) {
    if (3 == c && b.Sb && !b.cd)
      for (; a && a.Ed; a = a.hb)
        a.Ed = !1;
    if (b.child)
      b.child.hb = null,
      Xm(b, c, d);
    else
      try {
        b.cd ? b.ob.call(b.context) : Xm(b, c, d)
      } catch (e) {
        Ym.call(null, e)
      }
    vm(Nm, b)
  }

  function Xm(a, b, c) {
    2 == b ? a.ob.call(a.context, c) : a.Sb && a.Sb.call(a.context, c)
  }

  function Wm(a, b) {
    a.Ed = !0;
    Fm(function () {
      a.Ed && Ym.call(null, b)
    })
  }
  var Ym = ym;

  function Lm(a) {
    Xd.call(this, a)
  }
  bd(Lm, Xd);
  Lm.prototype.name = "cancel";

  function Zm(a, b, c) {
    if (typeof a === t)
      c && (a = F(a, c));
    else if (a && typeof a.handleEvent == t)
      a = F(a.handleEvent, a);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : E.setTimeout(a, b || 0)
  };

  function $m(a, b, c, d, e) {
    rm.call(this);
    this.Cb = a;
    this.zk = b;
    this.Ok = c;
    this.Eg = d;
    this.tm = Array.isArray(e) ? e : [e]
  }
  bd($m, rm);
  $m.prototype.rc = function () {
    1 != this.ye && (this.qc("begin"),
      this.qc("play"),
      this.startTime = Date.now(),
      this.ye = 1,
      tm() ? (Y(this.Cb, this.Ok),
        this.Of = Zm(this.Ll, void 0, this)) : this.Pf(!1))
  };
  $m.prototype.Ll = function () {
    El(this.Cb);
    sm(this.Cb, this.tm);
    Y(this.Cb, this.Eg);
    this.Of = Zm(F(this.Pf, this, !1), 1E3 * this.zk)
  };
  $m.prototype.Pf = function (a) {
    Y(this.Cb, pc, "");
    E.clearTimeout(this.Of);
    Y(this.Cb, this.Eg);
    this.endTime = Date.now();
    this.ye = 0;
    a ? this.qc("stop") : this.qc("finish");
    this.qc("end")
  };
  $m.prototype.pause = function () {
    J(!1, "Css3 transitions does not support pause action.")
  };

  function an(a, b, c, d) {
    this.Y = b;
    this.aa = c;
    this.A = a;
    this.Yi = void 0;
    this.settings = Object.assign({}, {
      bloggerBase: "//www.blogger.com",
      pageSize: 50,
      loadAfter: 2E3,
      maxDepth: 1,
      messages: {}
    }, d);
    this.Y.comments = null;
    this.Ud = !1;
    this.ib = new ol(new Ok(this.Y), this.settings.pageSize || blogger.data().He());
    this.init()
  }
  B = an.prototype;
  B.init = function () {
    var a = this,
      b = this.Y.comments ? 0 : this.settings.loadAfter || 0,
      c = !!this.aa.querySelector(xa),
      d = this.aa.getAttribute("data-defer"),
      e = d == tc || d == zc,
      f = H.decode(bn);
    f.path == H.decode(this.Y.url).path && f.fragment && (cn.test(f.fragment) || dn.test(f.fragment)) && (e = !1,
      this.Ud = !0);
    this.A.headless() && (e = !1);
    if (c)
      if ((c = this.aa.querySelector(xa)) && c.addEventListener(db, this.Zd.bind(this)),
        (c = this.aa.querySelector(wa)) && Gl(c, !1),
        !e)
        this.Qb = setTimeout(this.Zd.bind(this), b);
      else {
        if (d == zc) {
          var h = function (k, l) {
            l.id == a.Y.id && /\.*(\/\d{4}\/\d{2}\/[^\/]+)$/.test(H.decode().path) && (a.bf || a.Zd(),
              a.A.removeListener(h))
          };
          this.A.addListener(Ac, h)
        }
      }
    else
      this.Qb = setTimeout(this.load.bind(this), b);
    return this
  };
  B.Zd = function () {
    if (this.bf) {
      var a = this.aa.querySelector(wa);
      if (a)
        if (Xi(a, oc)) {
          U(a, oc);
          var b = parseFloat(Al(a, Cb));
          b = en(a, b, 0);
          em(b, "end", function () {
            Gl(a, !1)
          });
          b.rc()
        } else
          T(a, oc),
          Gl(a, !0),
          Y(a, Cb, "auto"),
          en(a, 0, a.offsetHeight).rc()
    } else
      this.jm = !0,
      this.load()
  };

  function en(a, b, c) {
    return new $m(a, .4, {
      height: b + Xb
    }, {
      height: c + Xb
    }, [{
      Pd: "all",
      duration: .4,
      timing: "linear",
      delay: 0
    }])
  }
  B.items = function () {
    return this.ib.items()
  };
  B.load = function (a) {
    this.bf || (this.Y.comments ? this.Ei(this.Y.comments) : this.ib.waiting() && !1 !== a || !this.ib.hasNext() || (fn(this, !0),
      this.ib.next(this.Ei.bind(this))))
  };
  B.Ei = function (a) {
    var b = this;
    fn(this, !1);
    this.bf = !0;
    this.Y.comments = a || [];
    this.render(a);
    this.jm && this.Zd();
    this.Ud && !this.aa.closest(".no-autoscroll") && setTimeout(function () {
      var c = b.Ud ? b.aa.querySelector(".comments-replybox, .comment-replybox-thread") : b.aa;
      c && c.scrollIntoView && c.scrollIntoView(!0)
    }, this.Ud ? 250 : 0);
    this.Y.commentCount <= this.settings.la && (a = this.aa.querySelector(".loadmore")) && Gl(a, !1)
  };

  function fn(a, b) {
    void 0 !== b && V(a.aa, "loading", b);
    Xi(a.aa, ".loading")
  }
  B.render = function (a) {
    var b = this;
    if (a) {
      gn(this);
      var c = this.Y.commentCount - this.settings.la,
        d = (window.location.hash || "#").substring(1),
        e, f;
      cn.test(d) ? e = d.substring(14) : dn.test(d) && (f = d.substring(1));
      var h = {
          id: this.Y.id,
          data: a,
          loadNext: function (l) {
            b.ib.hasNext() ? b.ib.next(function (m) {
              fn(b, !1);
              m ? (b.Y.comments.push.apply(b.Y.comments, Lc(m)),
                l(m)) : l(null);
              b.settings.la >= c ? (m = b.aa.querySelector(".loadmore")) && Gl(m, !1) : c -= b.settings.la
            }) : l(null)
          },
          hasMore: function () {
            return b.ib.hasNext()
          },
          getMeta: this.Kk.bind(this),
          onReply: this.xl.bind(this),
          initComment: f,
          initReplyThread: e,
          config: {
            maxDepth: this.settings.maxDepth
          },
          messages: this.settings.messages
        },
        k = this.aa.querySelector(".comments-content");
      window.goog && window.goog.comments && window.goog.comments.render ? window.goog.comments.render(k, h) : (window.goog = window.goog || {},
        window.goog.comments = window.goog.comments || {},
        window.goog.comments.Fi = window.goog.comments.Fi || [],
        window.goog.comments.Fi.push(function () {
          window.goog.comments.render(k, h)
        }))
    }
  };

  function gn(a) {
    if (!a.Rd) {
      var b = a.aa.querySelector(".comments-replybox"),
        c = b.getAttribute(kb);
      b && !b.getAttribute(x) && c && (a.Rd = b,
        a.Pk = c,
        sd(b, c))
    }
  }
  B.xl = function (a, b) {
    this.Rd && a !== this.Yi && (document.getElementById(b).insertBefore(this.Rd, null),
      this.Rd.src = this.Pk + (a ? "&parentID=" + a : ""),
      this.Yi = a)
  };
  B.Kk = function (a, b) {
    return "iswriter" === a ? (a = this.Y,
      b = b && b.author ? b.author.profileUrl : null,
      b == (a && a.author ? a.author.profileUrl : null) && null != b ? tc : sb) : "deletelink" === a ? this.settings.bloggerBase + "/delete-comment.g?blogID=" + this.Y.blogId + "&postID=" + b.id : "deleteclass" === a ? "item-control blog-admin " + (b.extensions["blogger.itemClass"] || "") : null
  };
  var bn = document.URL,
    cn = /^comment-form_/,
    dn = /^c\d+$/;

  function hn() {
    this.uj = {}
  }
  hn.prototype.init = function (a, b) {
    var c = this;
    this.A = a;
    this.B = b;
    if (this.A.headless())
      return this;
    var d = {
        loadMore: a.localize("Load more"),
        loading: a.localize("Loading"),
        loaded: a.localize("No more comments"),
        addComment: a.localize("Add comment"),
        reply: a.localize("Reply"),
        replies: a.localize("Replies"),
        "delete": a.localize("Delete")
      },
      e = {
        bloggerBase: this.B.getSettings().blogger_base,
        maxDepth: this.A.getSetting("comments_mtd"),
        messages: d
      };
    this.A.addListener(xc, function () {
      document.querySelectorAll(".blogger-comments").forEach(function (f) {
        var h = f.getAttribute("data-itemid");
        if (!c.uj[h]) {
          var k = b.find(h);
          f = f.closest(".comments");
          k && f && (k = new an(a, k, f, e),
            c.uj[h] = k)
        }
      })
    });
    return this
  };

  function jn() {
    this.Qf = !1;
    this.Ci = 0
  }
  jn.prototype.init = function (a, b) {
    this.A = a;
    this.B = b;
    this.A.addListener(xc, this.Hi.bind(this));
    kn(this);
    return this
  };

  function kn(a) {
    if (!a.Qf) {
      var b = document.querySelector("input#search");
      b && (b.addEventListener("keyup", a.Hi.bind(a)),
        a.Qf = !0)
    }
  }

  function ln() {
    var a = document.querySelector("#search");
    if (a)
      return a.value
  }
  jn.prototype.Hi = function (a) {
    a.type == xc ? (kn(this),
      ln() && this.B.items().length != this.Ci && this.Rf()) : (clearTimeout(this.Hk),
      this.Hk = setTimeout(this.Rf.bind(this), 300))
  };
  jn.prototype.Rf = function () {
    var a = ln();
    if (a && 0 !== a.length) {
      var b = new RegExp(a, "im"),
        c = this.B.items().filter(function (d) {
          return b.test(d.title) || d.tags && 0 < d.tags.filter(function (e) {
            return b.test(e)
          }).length ? !0 : b.test(d.text())
        });
      this.Ci = this.B.items().length;
      this.A.filter(c, a)
    } else
      this.A.clearFilter()
  };

  function mn(a) {
    a.addEventListener("keydown", nn.bind(a));
    a.addEventListener("wheel", nn.bind(a))
  }

  function nn(a) {
    for (var b = !1, c = a.target; c; c = c.parentElement)
      if (c === this) {
        b = !0;
        break
      }
    if (b) {
      b = 0 == this.scrollTop;
      c = this.scrollHeight - this.scrollTop == this.clientHeight;
      var d = 0 < a.deltaY || 32 == a.which || 40 == a.which;
      ((0 > a.deltaY || 38 == a.which) && b || d && c) && a.preventDefault()
    }
  };

  function on() {
    this.Id = this.Sf = this.Tf = !1;
    this.qb = null
  }
  B = on.prototype;
  B.init = function (a, b) {
    this.A = a;
    !this.A.getSetting(rb) || this.A.getSetting("is_mobile") || this.A.headless() || (this.A.addListener(xc, this.Nj.bind(this)),
      b.addListener(Kb, this.tl.bind(this)));
    return this
  };

  function pn() {
    Array.from(document.querySelectorAll(la)).forEach(function (a) {
      a.remove()
    })
  }
  B.Nj = function () {
    this.Tf = !0;
    qn(this)
  };
  B.tl = function () {
    this.Sf = !0;
    qn(this)
  };

  function qn(a) {
    !a.Id && a.Tf && a.Sf && (rn(a),
      document.querySelector("html").addEventListener(db, a.Mj.bind(a)),
      window.addEventListener(Yb, a.Uf.bind(a)),
      setTimeout(function () {
        U(document.querySelector(ca), "gadget-notifying")
      }, 5E3),
      a.Id = !0)
  }
  B.Mj = function (a) {
    var b = a.target;
    if (b.closest(".gadget-selected .gadget-container"))
      a.stopPropagation();
    else {
      var c = this.qb;
      if (null != this.qb) {
        var d = sn(this.qb);
        d && (U(d, Ab),
          U(document.querySelector(ca), zb),
          pn());
        this.qb = null
      }
      if (b = b.closest(".gadget-item")) {
        a.stopPropagation();
        a = b.getAttribute("data-gadget-id");
        if ((!a || a == c) && (c = this.A.lb[a]) && !c.Mc)
          return;
        if ((c = this.A.lb[a]) && c.enabled) {
          if (c.Mc)
            c && (c = this.A.lb[a]) && (b = document.createElement(ob),
              c.render(b),
              this.A.notify(Jb, c.M(), b, sn(a)));
          else {
            c = sn(a);
            T(c, Ab);
            T(document.querySelector(ca), zb);
            tn(a);
            if (b = c.querySelector(ka))
              d = (d = I().template("GadgetDockResizeDetector")) ? (d.apply() || "").trim() : "",
              pd(b, d),
              document.querySelector(la).contentWindow.addEventListener(Yb, this.Uf.bind(this));
            c.dataset.am || ((b = c.querySelector(".gadget-container .gadget")) && mn(b),
              c.dataset.am = !0)
          }
          this.qb = a
        }
      }
    }
  };
  B.Uf = function () {
    this.qb && tn(this.qb)
  };

  function tn(a) {
    if (a = sn(a)) {
      var b = a.querySelector(".gadget-title"),
        c = a.querySelector(ka);
      if (b && c) {
        var d = yb,
          e = window.innerHeight;
        b = El(b).height;
        c = b + El(c).height;
        b = a.getBoundingClientRect().top + (El(a).height - b) / 2;
        c + 27 > e ? d = xb : b + c + 27 > e && (d = wb);
        V(a, yb, d == yb);
        V(a, wb, d == wb);
        V(a, xb, d == xb)
      }
    }
  }

  function sn(a) {
    return document.querySelector('[data-gadget-id="' + a + '"]')
  }

  function un(a, b) {
    if (a = sn(a)) {
      var c = I();
      var d = c.template("GadgetDockItemContents");
      if (d) {
        var e = blogger.l10n && blogger.l10n[b.M()] ? blogger.l10n[b.M()] : b.M();
        c = d.apply(c.oa({
          title: e,
          icon: b.da(),
          "icon-selected": b.ca()
        })).trim()
      } else
        c = "";
      pd(a, c);
      b.render(a.querySelector(ka))
    } else
      b.render(null)
  }
  B.pl = function (a, b) {
    b.enabled ? un(a, b) : sn(a).remove()
  };

  function rn(a) {
    for (var b = document.querySelector(ca); b.firstChild;)
      b.removeChild(b.firstChild);
    b = 0;
    for (var c; c = a.A.lb[b]; b++) {
      var d = a,
        e = b;
      if (c && c.enabled) {
        if (c.fj) {
          var f = document.querySelector(ca);
          if (f) {
            var h = e;
            var k = I(),
              l = k.template("GadgetDockItem");
            h = l ? (l.apply(k.oa({
              id: h
            })) || "").trim() : "";
            pd(f, h)
          }
        }
        c.Pb ? un(e, c) : c.em(d.pl.bind(d, e, c))
      }
    }
  };

  function vn() {
    this.mb = null;
    this.eg = /^([^\/?#]+)\.blogspot\.[^\/?#]+$/i
  }
  B = vn.prototype;
  B.init = function (a, b) {
    this.A = a;
    this.B = b;
    this.A.addListener(ec, this.Pj.bind(this));
    this.A.addListener(cb, this.Oj.bind(this));
    a = this.wl.bind(this);
    window.addEventListener("popstate", a);
    window.addEventListener("hashchange", a);
    return this
  };
  B.Pj = function (a, b) {
    if (b && b.url && (this.mb && (clearTimeout(this.mb),
          this.mb = null),
        this.mb = setTimeout(this.qj.bind(this, b.url), 1E3),
        b.title)) {
      a = b.title;
      b = H.authority(b.url);
      for (var c, d = 0; c = this.B.resources()[d]; d++)
        if (b == H.authority(c.url)) {
          a += c.title ? " | " + c.title : "";
          break
        }
      document.title = a
    }
  };
  B.Oj = function () {
    this.qj();
    this.B.resources().length && this.B.resources()[0].title && (document.title = this.B.resources()[0].title)
  };

  function wn(a) {
    return a.B.resources().length && a.B.resources()[0].url ? a.B.resources()[0].url : (a = H.decode()) ? (a.path = "",
      a.encode(!1, !1)) : document.URL
  }
  B.qj = function (a) {
    var b = H.decode().authority;
    a = H.decode(a || wn(this));
    a.path = a.path || "/";
    a.scheme = a.scheme || H.decode().scheme;
    a.authority = a.authority || b;
    a.params = Object.assign({}, H.decode().params, a.params);
    var c = this.eg.exec(b),
      d = this.eg.exec(a.authority);
    c && d && c[1] == d[1] && (a.authority = b);
    this.Gd = !0;
    this.Gd = H.rewritePath(a);
    window.location.hash || (this.Gd = !1)
  };
  B.wl = function () {
    this.mb && (clearTimeout(this.mb),
      this.mb = null);
    if (this.Gd)
      this.Gd = !1;
    else {
      var a = H.decodePath(),
        b = H.decode(wn(this));
      a.path = a.path || "/";
      b.path = b.path || "/";
      a.scheme = a.scheme || H.decode().scheme;
      b.scheme = b.scheme || a.scheme;
      a.Ck(b) ? this.A.clearSelection() : this.A.select(a.encode(!1, !1))
    }
  };

  function xn() {
    this.Xc = !1
  }
  B = xn.prototype;
  B.init = function (a, b) {
    this.A = a;
    this.B = b;
    this.A.addListener(Jb, this.yl.bind(this));
    this.A.addListener(ec, this.ld.bind(this));
    this.A.addListener(cb, this.ld.bind(this));
    window.addEventListener(db, this.Qj.bind(this));
    return this
  };
  B.Rj = function (a) {
    (a = a.target.closest(sa)) && V(a, jc, 0 === a.querySelector(ra).scrollTop)
  };
  B.Qj = function (a) {
    this.Xc && (a.target.closest(".item, .lightbox-panel") || this.ld())
  };
  B.yl = function (a, b, c, d) {
    if (a = document.querySelector("#lightbox"))
      this.Xc = !1,
      clearTimeout(this.Kc),
      a.remove();
    b = qd((I().template("Lightbox").apply(Ld({
      title: b
    })) || "").trim());
    document.body.prepend(b);
    var e = b.querySelector(sa);
    e.querySelector(".lightbox-contentwrap").append(c);
    if (d) {
      c = getComputedStyle(e);
      var f = c.top,
        h = c.right,
        k = c.bottom,
        l = c.left,
        m = d.getBoundingClientRect();
      c = m.top;
      a = window.innerWidth - m.left - d.offsetWidth;
      d = window.innerHeight - m.top - d.offsetHeight;
      m = m.left;
      T(e, Hb);
      Bl(e, m, c);
      Y(e, bc, a);
      Y(e, "bottom", d);
      setTimeout(function () {
        U(e, Hb);
        Bl(e, l, f);
        Y(e, bc, h);
        Y(e, "bottom", k)
      }, 0)
    }
    this.Xc = !0;
    T(b, Rb);
    T(e, hb);
    T(e, jc);
    d = e.querySelector(ra);
    d.focus();
    d.addEventListener(cc, this.Rj.bind(this));
    e.querySelector(".close").addEventListener(db, yn(this.ld));
    mn(d);
    T(document.body, "lightbox-open");
    this.A.updated()
  };

  function yn(a) {
    return function (b) {
      b.stopPropagation();
      b.preventDefault();
      a()
    }
  }
  B.ld = function () {
    var a = document.querySelector("#lightbox");
    a && T(a, eb);
    U(document.body, "lightbox-open");
    clearTimeout(this.Kc);
    this.Xc = !1;
    this.Kc = setTimeout(function () {
      a && a.remove()
    }, 1E3)
  };

  function zn() {
    this.Vf = !1
  }
  zn.prototype.init = function (a) {
    this.A = a;
    a.addListener(xc, this.Sj.bind(this));
    return this
  };
  zn.prototype.Sj = function () {
    if (!this.Vf) {
      var a = document.head,
        b = document.createComment(" Yo Dawg... "),
        c = document.createElement("meta");
      c.setAttribute("name", "meta");
      c.setAttribute("content", "meta");
      a.append(b);
      a.append(c);
      this.A.headless() && T(document.body, Bb);
      this.Vf = !0
    }
  };

  function An() {
    this.yg = {};
    var a = window.performance && window.performance.timing;
    a && a.responseStart && a.navigationStart && (this.zf = a.responseStart);
    this.zf = this.zf || Bn || (new Date).getTime()
  }
  An.prototype.tick = function (a, b) {
    this.yg[a] = (new Date).getTime() - (b && this.yg[b] || 0) - this.zf
  };
  var Bn = (new Date).getTime();

  function Cn() {
    this.lj = {};
    this.nj = {};
    this.Nc = [];
    this.Yc = [];
    this.bd = /\.*(?:(\/\d{4}\/\d{2}\/[^\/]+)|\/p(\/[^\/]+\.html))$/;
    this.Ni = this.Uj.bind(this)
  }
  B = Cn.prototype;
  B.init = function (a, b, c) {
    this.A = a;
    this.B = b;
    this.Tj = c;
    if (this.A.headless())
      return this;
    a = this.Tj.yj();
    this.Gk = ["blitz", a ? "blitz_" + a.replace(/\s+/g, "_") : ""].join();
    a = this.A.getAnalyticsId();
    window._gaq && a && window._gaq.push(["_setAccount", a]);
    this.A.addListener(Ac, this.Bl.bind(this));
    this.A.addListener(ec, this.Vj.bind(this));
    this.A.addListener(cb, this.Ni);
    this.B.addListener(ub, this.nl.bind(this));
    this.B.addListener(tb, this.ml.bind(this));
    a = this.Tl.bind(this);
    window.addEventListener("beforeunload", a);
    setInterval(a, 15E3);
    return this
  };
  B.nl = function (a, b) {
    a = Dn(this);
    if (b != (a && a.url)) {
      a = this.bd.test(b) ? Ib : Va;
      if (a == Va) {
        if (this.Jl)
          return;
        this.Jl = b
      }
      En(this, b, a, Oa)
    }
  };
  B.ml = function (a, b) {
    a = Dn(this);
    b != (a && a.url) && ((a = En(this, b)) && a.tick("st"),
      this.bd.test(b) && a && a.tick(Oa))
  };

  function Dn(a) {
    for (var b, c = 0; b = a.B.resources()[c]; c++)
      if (b instanceof jd)
        return b
  }
  B.Uj = function () {
    var a = Dn(this),
      b = a && a.url;
    b && !a.filter && Fn(this, b);
    this.A.removeListener(cb, this.Ni)
  };
  B.Vj = function (a, b) {
    a = Gn(this, b);
    En(this, a) || En(this, a, Ib, Oa)
  };
  B.Bl = function (a, b, c) {
    a = Gn(this, b);
    b && b.url && Fn(this, b.url);
    (b = En(this, a)) || (b = En(this, a, Ib, Oa));
    b && (b.tick("prt"),
      Hn(this, a, c || document.body))
  };

  function En(a, b, c, d) {
    var e = a.Nc.filter(function (f) {
      return f.identifier == b
    });
    if (e && e.length)
      return e[0] && e[0].timer;
    if (void 0 !== c) {
      if (a.bd.test(b)) {
        if (a.lj[b])
          return;
        a.lj[b] = !0
      }
      e = new(window.jstiming && window.jstiming.Timer || An);
      e.name = c;
      void 0 !== d && e.tick(d);
      a.Nc.push({
        identifier: b,
        timer: e
      });
      return e
    }
  }

  function In(a, b) {
    var c = a.Nc.filter(function (d) {
      return d.identifier === b
    });
    c.length && (a.Yc.push(c[0]),
      a.Nc = a.Nc.filter(function (d) {
        return d.identifier !== b
      }))
  }

  function Hn(a, b, c) {
    c && En(a, b) && Jn(c, function () {
      var d = En(a, b);
      d && (d.tick("pst", Oa),
        In(a, b))
    })
  }

  function Gn(a, b) {
    return (a = a.bd.exec(typeof b == A ? b : b && b.url)) ? a[1] || a[2] : b
  }
  B.Tl = function () {
    if (this.Yc.length) {
      var a = this.Yc.map(function (c) {
        return c.timer
      });
      this.Yc = [];
      var b = Dn(this);
      pl(a, this.Gk, {
        blogId: b ? b.id : ""
      })
    }
  };

  function Fn(a, b) {
    var c = H.decode(b).normalize().encode();
    !b || a.nj[c] || H.isCrossDomain(c) || (a.nj[c] = !0,
      H.decode(b).path != H.decode(Kn).path && (a = window.location.href.split("/")[0],
        "https:" != a || b.toLowerCase().startsWith(a) || (b = b.replace(b.split("/")[0], a)),
        setTimeout(function () {
          var d = H.decode(b).param(pb, 1).param("v", 0).encode();
          fetch(d)
        }, 1E3)),
      window._gaq && b && window._gaq.push(["_trackPageview", H.decode(b).path]))
  }
  var Kn = document.URL,
    Ln = /url\((['"]?)(.*?)\1\)/;

  function Jn(a, b) {
    var c = [];
    a.querySelectorAll("*").forEach(function (e) {
      e.matches("img") && !e.complete ? (e = e.getAttribute(x)) && -1 === e.indexOf("data:") && c.push(e) : (e = getComputedStyle(e).backgroundImage) && (e = Ln.exec(e)) && e[2] && -1 === e[2].indexOf("data:") && c.push(e[2])
    });
    if (c.length) {
      var d = [];
      c.forEach(function (e) {
        var f = new Promise(function (h) {
          var k = new Image;
          k.addEventListener("load", h);
          k.addEventListener("error", h);
          k.src = e
        });
        d.push(f)
      });
      Promise.all(d).then(b)
    } else
      b()
  };

  function Mn() {}
  B = Mn.prototype;
  B.init = function (a, b) {
    this.A = a;
    this.B = b;
    this.A.headless() && delete Mn.ze;
    this.A.addListener(ec, this.Yj.bind(this));
    this.A.addListener(cb, this.Wf.bind(this));
    this.A.addListener(Jb, this.Wf.bind(this));
    this.cf = this.A.next.bind(this.A);
    this.hf = this.A.previous.bind(this.A);
    this.Le = this.A.clearSelection.bind(this.A);
    window.addEventListener(db, this.Wj.bind(this));
    return this
  };
  B.Xj = function (a) {
    if (a = a.target.closest(".overview-panel"))
      a = a.querySelector(ua),
      V(a, jc, 0 === a.scrollTop)
  };
  B.Wj = function (a) {
    this.Zc && (a.target.closest(".item, .overview-panel") || this.A.clearSelection())
  };
  B.Yj = function (a, b, c) {
    a = document.querySelector(da);
    var d = 0 <= this.B.items().indexOf(b);
    d &= !this.A.headless();
    !a || !Xi(a, eb) && d || (delete this.Zc,
      clearTimeout(this.Kc),
      a.remove(),
      a = null);
    if (d) {
      var e = qd((I().template("OverviewItem").apply(Ld(b)) || "").trim());
      if (a) {
        c = b.compareTo ? b.compareTo(this.Zc) : -1;
        var f = document.querySelector("#overview .overview-panel.current");
        if (f) {
          if (0 == c)
            return;
          U(f, hb);
          T(f, 0 > c ? "left" : bc);
          T(e, 0 > c ? bc : "left");
          setTimeout(function () {
            f.remove()
          }, Mn.ze || 0)
        }
        a.append(e);
        setTimeout(function () {
          e && (U(e, bc),
            U(e, "left"))
        }, 0)
      } else {
        a = qd((I().template(Ia).apply(Ld(b)) || "").trim());
        document.body.prepend(a);
        try {
          a.append(e)
        } catch (l) {
          try {
            a.append(e)
          } catch (m) {
            window.console.log(Fa)
          }
        }
        if (c = c ? c : document.querySelector(oa + b.id + '"]')) {
          d = getComputedStyle(e);
          var h = {
            top: d.top,
            right: d.right,
            bottom: d.bottom,
            left: d.left
          };
          d = c.getBoundingClientRect();
          c = {
            top: d.top + Xb,
            right: window.innerWidth - d.left - c.offsetWidth + Xb,
            bottom: window.innerHeight - d.top - c.offsetHeight + Xb,
            left: d.left + Xb
          };
          T(e, Hb);
          Y(e, c);
          setTimeout(function () {
            U(e, Hb);
            Y(e, h)
          }, 0)
        }
      }
      this.Zc = b;
      T(a, Rb);
      T(e, hb);
      T(e, jc);
      if (a = e.querySelector(ua))
        a.focus(),
        a.addEventListener(cc, this.Xj.bind(this));
      (a = e.querySelector(".next")) && a.addEventListener(db, Nn(this.cf));
      (a = e.querySelector(".previous")) && a.addEventListener(db, Nn(this.hf));
      (a = e.querySelector(".close")) && a.addEventListener(db, Nn(this.Le));
      T(document.body, "overview-open");
      if ((a = H.decode().fragment) && H.isSamePage(b.url, !0)) {
        if (!/^[a-zA-Z][\w:.-]*$/.test(a))
          return;
        var k = e.querySelector('[id="' + a + '"],[name="' + a + '"]');
        k && setTimeout(function () {
          k.scrollIntoView()
        }, 1100)
      }
      this.A.viewItem(b, e);
      this.A.updated()
    }
  };

  function Nn(a) {
    return function (b) {
      b.stopPropagation();
      b.preventDefault();
      a()
    }
  }
  B.Wf = function () {
    var a = document.querySelector(da);
    a && T(a, eb);
    U(document.body, "overview-open");
    delete this.Zc;
    clearTimeout(this.Kc);
    this.Kc = setTimeout(function () {
      var b = document.querySelector(da);
      b && b.remove()
    }, Mn.ze || 0)
  };
  Mn.ze = 1E3;

  function On() {
    this.Ae = !1;
    this.tc = {};
    this.Vd = this.Yf.bind(this)
  }
  B = On.prototype;
  B.init = function (a, b) {
    this.A = a;
    this.B = b;
    this.A.addListener(xc, this.Xf.bind(this));
    this.Xf();
    return this
  };

  function Pn(a) {
    return a.ja ? a.ja.value : ""
  }
  B.Xf = function () {
    !this.Ae && (this.ja = document.querySelector("input#search")) && (this.ja.addEventListener("keyup", this.dl.bind(this)),
      this.ja.addEventListener("focus", this.ol.bind(this)),
      this.ja.addEventListener("blur", this.kl.bind(this)),
      this.Ae = !0);
    return this.Ae
  };
  B.dl = function (a) {
    if (13 == a.keyCode)
      Qn(this),
      a.preventDefault();
    else if (27 == a.keyCode)
      Rn(this),
      a.preventDefault();
    else if (38 == a.keyCode || 40 == a.keyCode) {
      if (this.ma) {
        var b = Array.from(this.ma.querySelectorAll("li")),
          c = b.indexOf(this.ma.querySelector("li.active"));
        c = 38 == a.keyCode ? 0 > c ? b.length - 1 : Math.max(0, c - 1) : 0 > c ? 0 : Math.min(b.length - 1, c + 1);
        for (var d = 0; d < b.length; ++d) {
          var e = b[d];
          U(e, Ra);
          c === d && T(e, Ra)
        }
      }
      a.preventDefault()
    } else
      (a = Pn(this)) && a != this.jj && Rn(this),
      clearTimeout(this.cm),
      this.cm = setTimeout(this.aj.bind(this), this.tc[a] ? 0 : 500)
  };
  B.ol = function (a) {
    this.aj(a)
  };
  B.kl = function () {
    var a = this;
    setTimeout(function () {
      Rn(a)
    }, 300)
  };

  function Qn(a) {
    var b = Pn(a);
    if (b) {
      if (a.ma) {
        var c = a.tc[b],
          d = a.ma.querySelector("li.active");
        if (d) {
          var e = d.dataset.identifier;
          if (e && (c = c.items().filter(function (f) {
              return f.id == e
            })[0])) {
            a.A.select(c);
            return
          }
        }
      }
      xj(b)
    }
  }
  B.aj = function () {
    var a = this,
      b = Pn(this);
    if (b) {
      var c = this.tc[b];
      c || (c = this.B.iterator(this.A.getSetting(Xa), new id({
          query: b,
          Md: "best"
        }), 7),
        this.tc[b] = c);
      c && (c.reset(),
        this.ja && T(this.ja, dc),
        c.next(function (d) {
          if (Pn(a) == b) {
            a.jj = b;
            var e = a.tc[b],
              f = blogger.templates().template("QuickSearch");
            if (f) {
              Rn(a);
              d = I().oa({
                Posts: d
              });
              d.scope("SearchQuery", b);
              var h = 0;
              e.S && (e = e.S.resource()) && (h = e.total);
              d.scope("SearchResultCount", h);
              f = qd(f.apply(d));
              a.ma = f;
              document.body.append(f);
              f.addEventListener(db, a.Zj.bind(a));
              window.addEventListener(cc, a.Vd);
              window.addEventListener(Yb, a.Vd);
              a.Yf()
            }
            a.ja && U(a.ja, dc)
          }
        }))
    } else
      Rn(this)
  };
  B.Yf = function () {
    if (this.ma) {
      for (var a = this.ja, b = 0, c = !1, d = a; d; d = d.parentElement)
        "fixed" === getComputedStyle(d).position && (d !== a && (b = parseInt(getComputedStyle(d).top, 10)),
          c = !0);
      d = c ? a.offsetTop : a.getBoundingClientRect().top + window.pageYOffset;
      c = this.ma.offsetWidth;
      b = d + a.offsetHeight + b;
      a = a.getBoundingClientRect().left + window.pageXOffset + a.offsetWidth - c;
      Bl(this.ma, a, b);
      Y(this.ma, "position", "fixed")
    }
  };

  function Rn(a) {
    a.ja && U(a.ja, dc);
    a.ma && (delete a.jj,
      a.ma.remove(),
      delete a.ma,
      window.removeEventListener(cc, a.Vd),
      window.removeEventListener(Yb, a.Vd))
  }
  B.Zj = function (a) {
    this.ma.querySelectorAll("li").forEach(function (b) {
      U(b, Ra)
    });
    (a = a.target.closest("li")) && T(a, Ra);
    Qn(this)
  };

  function Sn() {}
  Sn.prototype.init = function (a) {
    this.A = a;
    document.body.addEventListener(db, this.ak.bind(this));
    return this
  };
  Sn.prototype.ak = function (a) {
    var b = a.target.closest("a");
    if (!a.metaKey && b) {
      var c = H.decode(b.getAttribute("href"));
      if (c && wj(c) && "_blank" !== b.getAttribute("target") && !/^\/p\//.test(c.path)) {
        var d, e = b.closest("*[data-id]");
        e && (d = e.getAttribute(ib));
        e = !1;
        var f = b.closest(".article-content");
        f && (e = "articleBody" == f.getAttribute("itemprop"));
        if ((d || e) && !this.A.getSetting(vb) && !Xi(b, "label"))
          return this.A.select(e ? c.url : d, b),
            a.preventDefault(),
            a.stopPropagation(),
            !1;
        a = b.getAttribute("data-view-name");
        b = H.decode();
        a ? (b.param(zc, c.param(zc)),
          c = b) : (b.param(Wa) && 0 < b.param(Wa).length && c.param(Wa, b.param(Wa)),
          b.param(zc) && c.param(zc, b.param(zc)));
        (c = c.encode()) && window.location.href != c && jh(window.location, c);
        return !1
      }
    }
  };

  function Tn() {
    this.Qb = null;
    this.Db = []
  }
  Tn.prototype.init = function (a) {
    this.A = a;
    if (this.A.headless())
      return this;
    this.A.addListener(xc, this.ck.bind(this));
    window.addEventListener(cc, this.bk.bind(this));
    return this
  };
  Tn.prototype.ck = function () {
    var a = this;
    this.Db = [];
    document.querySelectorAll(".share-controls").forEach(function (b) {
      function c() {
        Un(b);
        a.Db.splice(a.Db.indexOf(b), 1);
        Vn();
        Wn(a)
      }
      b.dataset.defer ? (b.addEventListener("mouseover", c, {
          once: !0
        }),
        a.Db.push(b)) : b.dataset.delay && (Array.from(b.children).forEach(function (d) {
          Yi(d)
        }),
        Yi(b),
        setTimeout(c, b.dataset.delay || 0))
    });
    this.hj()
  };

  function Un(a) {
    a.querySelectorAll(".defer").forEach(function (b) {
      U(b, mb)
    });
    U(a, mb)
  }
  Tn.prototype.bk = function () {
    clearTimeout(this.Qb);
    this.Qb = setTimeout(this.hj.bind(this), 300)
  };
  Tn.prototype.hj = function () {
    Xn(this);
    Vn();
    Wn(this)
  };

  function Xn(a) {
    a.Db = a.Db.filter(function (b) {
      return Yn(b) ? (Un(b),
        !1) : !0
    })
  }

  function Yn(a) {
    var b = window.pageYOffset,
      c = window.pageXOffset + window.innerWidth,
      d = window.pageYOffset + window.innerHeight,
      e = window.pageXOffset,
      f = Zn(a);
    if (!(f.top <= d && f.right >= e && f.bottom >= b && f.left <= c))
      return !1;
    for (b = []; a; a = a.parentElement)
      b.push(a);
    return !b.filter(function (h) {
      return getComputedStyle(h).display == Nb || 0 == getComputedStyle(h).opacity
    }).length
  }

  function Zn(a) {
    var b = a.getBoundingClientRect();
    return {
      top: b.top + window.pageYOffset,
      right: b.left + window.pageXOffset + parseFloat(getComputedStyle(a).width),
      bottom: b.top + window.pageYOffset + parseFloat(getComputedStyle(a).height),
      left: b.left + window.pageXOffset
    }
  }

  function Vn() {
    Array.from(document.querySelectorAll(".share-twitter")).filter(function (a) {
      return !a.dataset.initialized && !Xi(a, mb)
    }).forEach(function (a) {
      a.dataset.initialized = !0;
      var b = ["//platform.twitter.com/widgets/tweet_button.html?url=", encodeURIComponent(a.dataset.url), "&count=", a.dataset.count || "horizontal", "&text=", encodeURIComponent(a.dataset.text), "&size=", a.dataset.size || "medium"].join(""),
        c = document.createElement(Gb);
      c.setAttribute(Ta, tc);
      c.setAttribute("frameborder", "0");
      c.setAttribute("scrolling", "no");
      sd(c, b);
      a.append(c)
    })
  }

  function Wn(a) {
    Array.from(document.querySelectorAll(".share-facebook")).filter(function (b) {
      return !b.dataset.initialized && !Xi(b, mb)
    }).forEach(function (b) {
      b.dataset.initialized = !0;
      var c = new URL("//www.facebook.com/plugins/like.php?", a.A.getSetting(Xa));
      c.searchParams.set("href", b.dataset.url);
      c.searchParams.set("send", sb);
      c.searchParams.set("layout", b.dataset.Hm || "button_count");
      c.searchParams.set(Qa, "like");
      c.searchParams.set("show_faces", sb);
      c.searchParams.set("colorscheme", "light");
      var d = document.createElement(Gb);
      d.setAttribute(Ta, tc);
      d.setAttribute("frameborder", "0");
      d.setAttribute("scrolling", "no");
      sd(d, c.href);
      b.append(d)
    })
  };

  function $n() {
    this.Ri = this.Cl.bind(this)
  }
  B = $n.prototype;
  B.init = function (a, b) {
    this.A = a;
    this.B = b;
    this.A.headless() && delete $n.ag;
    a = this.ek.bind(this);
    this.A.addListener(ec, a);
    this.A.addListener(Bc, a);
    this.A.addListener(cb, this.dk.bind(this));
    return this
  };
  B.ek = function (a, b) {
    var c = a.type === Bc;
    if (!b.compareTo || 0 != b.compareTo(this.Zf))
      if (a = !document.querySelector(ya),
        this.Be(),
        c || !(0 <= (this.B.items() || []).indexOf(b)) || this.A.headless()) {
        c = Ld(b);
        var d = qd((I().template(La).apply(c) || "").trim());
        mn(d.querySelector(".viewitem-inner"));
        (c = d.querySelector(".close")) && c.addEventListener(db, this.Be.bind(this));
        V(d, "new", a);
        T(document.body, "viewitem-open");
        try {
          document.body.prepend(d)
        } catch (f) {
          try {
            document.body.prepend(d)
          } catch (h) {
            window.console.log(Fa)
          }
        }
        a && setTimeout(function () {
          U(d, "new")
        }, 1);
        if ((c = H.decode().fragment) && H.isSamePage(b.url, !0)) {
          if (!/^[a-zA-Z][\w:.-]*$/.test(c))
            return;
          var e = d.querySelector('[id="' + c + '"],[name="' + c + '"]');
          e && setTimeout(function () {
            e.scrollIntoView()
          }, a ? 1E3 : 1)
        }
        this.A.viewItem(b, d);
        this.A.updated();
        this.Zf = b;
        window.addEventListener(db, this.Ri)
      }
  };
  B.Be = function () {
    U(document.body, "viewitem-open");
    delete this.Zf;
    document.querySelectorAll(ya).forEach(function (a) {
      Xi(a, eb) || (T(a, eb),
        setTimeout(function () {
          a.remove()
        }, $n.ag || 0))
    });
    window.removeEventListener(db, this.Ri)
  };
  B.Cl = function (a) {
    a.target.closest(ya) || this.A.clearSelection()
  };
  B.dk = function () {
    this.Be()
  };
  $n.ag = 1E3;
  var jj = kj();
  ij("Adsense", Hl);
  ij("Comments", hn);
  ij("Filter", jn);
  ij("GadgetDock", on);
  ij("ItemHistory", vn);
  ij("Lightbox", xn);
  ij("Meta", zn);
  ij("Metrics", Cn);
  ij("Search", On);
  ij("SelfSelect", Sn);
  ij("Sharing", Tn);
  ij(La, $n, !1);
  ij(Ia, Mn, !1);

  function Z(a) {
    this.enabled = !0;
    this.Pb = !1;
    this.O = a || "1";
    this.C = {};
    this.Mc = !1;
    this.fj = !0
  }
  B = Z.prototype;
  B.init = function (a) {
    this.ui = a;
    ao(this)
  };
  B.em = function (a) {
    this.Pi = a
  };

  function ao(a) {
    a.Pb = !0;
    a.Pi && a.Pi()
  }

  function bo(a) {
    return (a = a.match(/_WidgetManager\._HandleControllerResult\(.*?,.*?,\{(.*)\}\);/)) ? eval("(function(){ return{" + a[1] + "}; })()") : null
  }
  B.render = function (a) {
    this.Pb && this.enabled && (a && pd(a, this.T()),
      this.ui.updated && this.ui.updated(),
      this.Rc(a))
  };
  B.template = function (a, b) {
    var c = I();
    a = c.template(a);
    b = b && c.oa(b);
    return a ? (a.apply(b) || "").trim() : ""
  };
  B.M = function () {
    return ""
  };
  B.da = function () {
    return ""
  };
  B.ca = function () {
    return ""
  };
  B.T = function () {
    return ""
  };
  B.Rc = function () {};
  B.ha = function (a, b) {
    console.log(a.href, a)
    var c = a.getSettings().widget_settings[b];
    c ? this.Gc(c) : (a = a.resources()) && 0 < a.length && a[0] && a[0].baseUrl ? (a = new URL(a[0].baseUrl),
      a.searchParams.append("v", "0"),
      a.searchParams.append(Qa, "initial"),
      a.searchParams.append(Dc, b),
      a.searchParams.append(Zb, "js"),
      window.__wavt && a.searchParams.append("xssi_token", window.__wavt),
      fetch(a.href).then(function (d) {
        return d.text()
      }).then(this.zl.bind(this)).catch(this.Rb.bind(this))) : this.Rb()
  };
  B.zl = function (a) {
    (a = bo(a)) ? this.Gc(a): this.Rb()
  };
  B.Rb = function () {
    this.enabled = !1;
    ao(this)
  };
  B.Gc = function (a) {
    this.C = a;
    ao(this)
  };
  blogger.compileTemplate('{template:AttributionCSS}\n.attribution {\n  background-color: #f5f5f5;\n  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);\n  bottom: 0;\n  color: #444;\n  font-size: 11px;\n  padding: 5px;\n  position: fixed;\n  text-align: center;\n  width: 100%;\n  z-index: 998;\n}\n{/template:AttributionCSS}\n{template:Attribution}\n<div class="attribution">{attribution}</div>\n{/template:Attribution}\n');

  function co(a) {
    Z.call(this, a);
    this.fj = !1
  }
  D(co, Z);
  co.prototype.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#attributioncss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "attributioncss");
    c.setAttribute(q, gc);
    c.append(this.template("AttributionCSS"));
    a.append(c);
    this.ha(b, Ca + this.O)
  };
  co.prototype.render = function () {
    this.Pb && this.enabled && pd(document.querySelector("#attribution-container"), this.template(Ca, this.C))
  };
  blogger.compileTemplate('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:BlogArchiveCSS}\n.blogarchive-tree {\n  padding: 12px;\n  {css-transition value="width 0.15s, height 0.15s"}\n}\n\n.blogarchive-title {\n  padding: 8px;\n  vertical-align: middle;\n  line-height: 14px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.blogarchive-title:after {\n  content: "";\n  display: inline-block;\n  border-width: 5px;\n  border-color: transparent transparent transparent #666;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  position: relative;\n  left: 4px;\n  visibility: hidden;\n}\n\n.blogarchive-title:hover:after {\n  border-color: transparent transparent transparent #ccc;\n}\n\n.blogarchive-expanded > .blogarchive-title:after {\n  border-color: transparent transparent transparent #666;\n}\n\n.blogarchive-title:hover:after,\n.blogarchive-expanded > .blogarchive-title:after {\n  visibility: visible;\n}\n\n.blogarchive-expanded > .blogarchive-title a {\n  color: #666;\n  font-weight: bold;\n}\n\n.blogarchive-flat .blogarchive-title:after {\n  display: none;\n}\n\n.blogarchive-loading {\n  background-image: url(data:image/gif;base64,R0lGODlhGAAYAPQAAP///wAAAM7Ozvr6+uDg4LCwsOjo6I6OjsjIyJycnNjY2KioqMDAwPLy8nZ2doaGhri4uGhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAHAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQABwABACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAAHAAIALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQABwADACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkEAAcABAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAAHAAUALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAAHAAYALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkEAAcABwAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAAHAAgALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAAHAAkALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkEAAcACgAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAAHAAsALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==);\n  background-repeat: no-repeat;\n  background-position: left center;\n  height: 28px;\n}\n\n.blogarchive-loading:after {\n  content: "loading";\n  color: #666;\n  display: inline-block;\n  line-height: 28px;\n  margin-left: 28px;\n  min-width: 192px;\n}\n\n.blogarchive-dates {\n  min-width: 128px;\n}\n\n.blogarchive-tree > .blogarchive-dates {\n  position: relative;\n}\n\n.blogarchive-date > .blogarchive-dates {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 90%;\n  {css-transition value="left 0.15s ease-out"}\n}\n\n.blogarchive-date.blogarchive-expanded > .blogarchive-dates {\n  display: block;\n  left: 100%;\n}\n\n.blogarchive-expanded > .blogarchive-dates {\n  display: inline-block;\n}\n\n.blogarchive-post-count {\n  color: #666;\n  font-size: 12px;\n}\n.blogarchive-post-count:before {\n  content: " (";\n}\n.blogarchive-post-count:after {\n  content: ")";\n}\n.blogarchive-post {\n  padding: 8px 0 0 16px;\n  text-indent: -8px;\n  min-width: 200px;\n}\n\n@media only screen and (max-width : 546px) {\n  .blogarchive-tree {\n    height: auto !important;\n    width: auto !important;\n  }\n\n  .blogarchive-date > .blogarchive-dates {\n    position: static;\n    margin-left: 12px;\n  }\n\n  .blogarchive-post {\n    padding: 4px 0 4px 16px;\n  }\n}\n\n{/template:BlogArchiveCSS}\n{template:BlogArchiveGadgetDefaultTitle}\nArchive\n{/template:BlogArchiveGadgetDefaultTitle}\n\n\x3c!-- Attributes {dates, flat} --\x3e\n{template:BlogArchiveGadget}\n<div class="blogarchive-tree blogarchive-expanded{block:flat} blogarchive-flat{/block:flat}">\n  <ul class="blogarchive-dates">\n  {block:items}\n  {BlogArchiveGadgetYear}\n  {/block:items}\n  </ul>\n</div>\n{/template:BlogArchiveGadget}\n\n{template:BlogArchiveGadgetYear}\n<li class="blogarchive-date blogarchive-collapsed">\n  <div class="blogarchive-title">\n    <a href="{url}">{name}</a><span class="blogarchive-post-count">{post-count}</span>\n  </div>\n  <ul class="blogarchive-dates">\n  {block:items}\n    {BlogArchiveGadgetMonth}\n  {/block:items}\n  {BlogArchiveGadgetPosts}\n  </ul>\n</li>\n{/template:BlogArchiveGadgetYear}\n\n{template:BlogArchiveGadgetMonth}\n<li class="blogarchive-date blogarchive-collapsed">\n  <div class="blogarchive-title">\n    <a href="{url}">{name}</a><span class="blogarchive-post-count">{post-count}</span>\n  </div>\n  <ul class="blogarchive-dates">\n  {block:items}\n    {BlogArchiveGadgetDate}\n  {/block:items}\n  {BlogArchiveGadgetPosts}\n  </ul>\n</li>\n{/template:BlogArchiveGadgetMonth}\n\n{template:BlogArchiveGadgetDate}\n<li class="blogarchive-date blogarchive-collapsed">\n  <div class="blogarchive-title">\n    <a href="{url}">{name}</a><span class="blogarchive-post-count">{post-count}</span>\n  </div>\n  <ul>\n  {BlogArchiveGadgetPosts}\n  </ul>\n</li>\n{/template:BlogArchiveGadgetDate}\n\n{template:BlogArchiveGadgetPosts}\n{block:posts}\n  {BlogArchiveGadgetPost}\n{/block:posts}\n{/template:BlogArchiveGadgetPosts}\n\n{template:BlogArchiveGadgetPost}\n<li class="blogarchive-post">\n  <a href="{url}">{title}</a>\n</li>\n{/template:BlogArchiveGadgetPost}\n\n{template:BlogArchiveGadgetIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEX///8AAAD///9+749PAAAAAnRSTlMAAHaTzTgAAAAwSURBVHherYyxCQAwCAR/yhTZy8ZeC6c0BETU1msOjucBeyBF54s1FHEs5fZYWb12TL8307RAxVQAAAAASUVORK5CYII=\n{/template:BlogArchiveGadgetIconUrl}\n\n{template:BlogArchiveGadgetIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEX///8AAAAzMzMTx/ayAAAAAnRSTlMAAHaTzTgAAAAwSURBVHherYyxCQAwCAR/yhTZy8ZeC6c0BFS09pqD43nAHijR+WINZZxLuTN2Vq8dTL8301DjA9oAAAAASUVORK5CYII=\n{/template:BlogArchiveGadgetIconSelectedUrl}\n');

  function eo(a) {
    Z.call(this, a);
    this.af = !1;
    this.Bf = null
  }
  D(eo, Z);
  B = eo.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#blogarchivecss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "blogarchivecss");
    c.setAttribute(q, gc);
    c.append(this.template("BlogArchiveCSS"));
    a.append(c);
    this.ha(b, Da + this.O)
  };
  B.render = function (a) {
    var b = this;
    this.Pb && this.enabled && (pd(a, this.T()),
      this.af || a.querySelectorAll(".blogarchive-title").forEach(function (c) {
        c.addEventListener(db, b.Al.bind(b))
      }),
      this.Bf = a)
  };

  function fo(a) {
    if (a.data) {
      for (var b = a.data, c = b.length, d = 0; d < c; d++)
        fo(b[d]);
      a.items = a.data;
      delete a.data
    }
  }
  B.Gc = function (a) {
    fo(a);
    this.C = a;
    this.af = "FLAT" == a.style || "MENU" == a.style;
    ao(this)
  };
  B.Al = function (a) {
    if (!a.target.matches("a")) {
      var b = a.target.closest(".blogarchive-date");
      a = Xi(b, Ya);
      go(b, a);
      a = b.querySelectorAll(".blogarchive-dates", b);
      var c = 0;
      a.forEach(function (d) {
        c += d.children.length
      });
      0 === c && (b = (b = b.querySelector("a")) ? b.getAttribute("href") : void 0,
        ho(this, a[0], b));
      io(this)
    }
  };

  function go(a, b) {
    a.parentNode.querySelectorAll(".blogarchive-expanded").forEach(function (c) {
      jo(c, !0)
    });
    jo(a, b)
  }

  function jo(a, b) {
    V(a, Ya, !b);
    V(a, "blogarchive-collapsed", b)
  }

  function ko(a) {
    var b = 0,
      c = 0;
    a.Bf.querySelectorAll(".blogarchive-expanded > .blogarchive-dates").forEach(function (d) {
      d = getComputedStyle(d);
      b += parseFloat(d.width);
      c = Math.max(parseFloat(d.height), c)
    });
    return {
      width: b,
      height: c
    }
  }

  function io(a) {
    var b = a.Bf.querySelector(".blogarchive-tree");
    a = ko(a);
    Dl(b, a.width, a.height)
  }

  function ho(a, b, c) {
    if (b && c) {
      T(b, Za);
      var d = new URL(window.location.href);
      d.searchParams.set("v", "0");
      d.searchParams.set(Qa, "getTitles");
      d.searchParams.set(Dc, Da + a.O);
      d.searchParams.set("widgetType", Da);
      d.searchParams.set(Zb, "js");
      d.searchParams.set("path", c);
      fetch(d.href).then(function (e) {
        return e.text()
      }).then(function (e) {
        e = bo(e);
        fo(e);
        e && (U(b, Za),
          pd(b, a.template("BlogArchiveGadgetPosts", {
            posts: e.posts
          })),
          io(a))
      }).catch(function () {})
    }
  }
  B.M = function () {
    return this.C.title || this.template("BlogArchiveGadgetDefaultTitle")
  };
  B.da = function () {
    return this.template("BlogArchiveGadgetIconUrl")
  };
  B.ca = function () {
    return this.template("BlogArchiveGadgetIconSelectedUrl")
  };
  B.T = function () {
    return this.template("BlogArchiveGadget", {
      items: this.C.items || {},
      flat: this.af
    })
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetLogoCSS}\n\n.gadget-logo { padding: 6px; }\n\n.gadget-logo-item { line-height: 14px; }\n\n{/template:GadgetLogoCSS}\n{template:GadgetLogoDefaultTitle}\nLogo\n{/template:GadgetLogoDefaultTitle}\n\n\x3c!-- Attributes {links} --\x3e\n{template:GadgetLogo}\n  <ul class="gadget-logo">\n    <li class="gadget-logo-item">\n      <a href="//www.blogger.com"><img src="{fullButton}"/></a>\n    </li>\n  </ul>\n{/template:GadgetLogo}\n\n\x3c!-- Base 64 code for image /bloggerbutton/resources/icon.png --\x3e\n{template:GadgetLogoIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWBAMAAAAoU0G7AAAAKlBMVEUAAAD///////////////////////////////////////////////////+Gu8ovAAAADXRSTlMAAFCfr0DvzyAQj3C/rdBwigAAAHZJREFUeF6dz70JhGAQhOHxJ7ULMd4GDO7AXDsQe7ABc0Hs6Dq447I7phf3W3ZBMPPNHiYaADW1DkAGFLTE0NL6JeT0ekUZEEUVGBUrOQM7+U6LYSH/myF6nfG5iwla45CE4rKUjPiwC94AtIGv3fZEgZrWE9kBCpSeoeUfB5QAAAAASUVORK5CYII=\n{/template:GadgetLogoIconUrl}\n\n\x3c!-- Base 64 code for image /bloggerbutton/resources/icon-selected.png --\x3e\n{template:GadgetLogoIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWBAMAAAAoU0G7AAAAKlBMVEUAAAD///83Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzchX4A7AAAADXRSTlMAAFCfr0DvzyAQj3C/rdBwigAAAHZJREFUeF6dz70JhGAQhOHxJ7ULMd4GDO7AXDsQe7ABc0Hs6Dq447I7phf3W3ZBMPPNHiYaADW1DkAGFLTE0NL6JeT0ekUZEEUVGBUrOQM7+U6LYSH/myF6nfG5iwla45CE4rKUjPiwC94AtIGv3fZEgZrWE9kBCpSeoeUfB5QAAAAASUVORK5CYII=\n{/template:GadgetLogoIconSelectedUrl}\n');

  function lo(a) {
    Z.call(this, a)
  }
  D(lo, Z);
  B = lo.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#logocss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "logocss");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetLogoCSS"));
    a.append(c);
    this.ha(b, "BloggerButton" + this.O)
  };
  B.M = function () {
    return this.C.title || this.template("GadgetLogoDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetLogoIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetLogoIconSelectedUrl")
  };
  B.T = function () {
    return this.template("GadgetLogo", this.C)
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetBlogListCSS}\n.gadget-bloglist {\n  padding: 12px;\n  min-width: 240px;\n}\n\n.gadget-bloglist-item {\n  line-height: 14px;\n  padding: 8px;\n}\n\n.gadget-bloglist-title {\n  font-weight: bold;\n  height: 16px;\n  line-height: 16px;\n  margin: 0 0 2px 0;\n}\n\n.gadget-bloglist-title img, .gadget-bloglist-title a {\n  vertical-align: middle;\n}\n\n.gadget-bloglist-recent {\n  font-size: 11px;\n}\n\n.gadget-bloglist-recent-title {\n  display: none;\n}\n.gadget-bloglist-show-recent-title .gadget-bloglist-recent-title {\n  display: block;\n}\n\n.gadget-bloglist-recent-thumbnail {\n  display: none;\n  float: left;\n  margin: 4px 8px 0 0;\n}\n.gadget-bloglist-show-recent-thumbnail .gadget-bloglist-recent-thumbnail {\n  display: inline-block;\n}\n\n.gadget-bloglist-recent-snippet {\n  display: none;\n}\n.gadget-bloglist-show-recent-snippet .gadget-bloglist-recent-snippet {\n  display: inline;\n}\n\n.gadget-bloglist-recent-update {\n  display: none;\n}\n.gadget-bloglist-show-recent-update .gadget-bloglist-recent-update {\n  display: block;\n}\n\n{/template:GadgetBlogListCSS}\n{template:GadgetBlogListDefaultTitle}\nLink List\n{/template:GadgetBlogListDefaultTitle}\n\n\x3c!-- Attributes {items} --\x3e\n{template:GadgetBlogList}\n<ul class="gadget-bloglist\n    {block:IfshowItemTitle}gadget-bloglist-show-recent-title{/block:IfshowItemTitle}\n    {block:IfshowItemSnippet}gadget-bloglist-show-recent-snippet{/block:IfshowItemSnippet}\n    {block:IfshowItemThumbnail}gadget-bloglist-show-recent-thumbnail{/block:IfshowItemThumbnail}\n    {block:IfshowTimePeriodSinceLastUpdate}gadget-bloglist-show-recent-update{/block:IfshowTimePeriodSinceLastUpdate}">\n  {block:items}\n  {GadgetBlogListItem}\n  {/block:items}\n</ul>\n{/template:GadgetBlogList}\n\n\x3c!-- Attributes {blogTitle, blogUrl, blogIconUrl,\n    itemTitle, itemUrl, itemSnippet, itemThumbnail,\n    timePeriodSinceLastUpdate} --\x3e\n{template:GadgetBlogListItem}\n<li class="gadget-bloglist-item">\n  <div class="gadget-bloglist-title">\n    {block:IfblogIconUrl}\n    <img src="{blogIconUrl}" width="16" height="16" />\n    {/block:IfblogIconUrl}\n    <a href="{blogUrl}">\n      {blogTitle}\n    </a>\n  </div>\n  <div class="gadget-bloglist-recent">\n    <p>\n      {block:IfitemTitle}\n      <a href="{itemUrl}" class="gadget-bloglist-recent-title">{itemTitle}</a>\n      {/block:IfitemTitle}\n      {block:IfitemThumbnail}\n      {block:IfitemThumbnail.url}\n      <a href="{itemUrl}" class="gadget-bloglist-recent-thumbnail">\n        <img src="{itemThumbnail.url}"\n            width="{itemThumbnail.width}" height="{itemThumbnail.height}"/>\n      </a>\n      {/block:IfitemThumbnail.url}\n      {/block:IfitemThumbnail}\n      <span class="gadget-bloglist-recent-snippet">{itemSnippet}</span>\n    </p>\n    {block:IftimePeriodSinceLastUpdate}\n    <div class="gadget-bloglist-recent-update">{timePeriodSinceLastUpdate}</div>\n    {/block:IftimePeriodSinceLastUpdate}\n  </div>\n</li>\n{/template:GadgetBlogListItem}\n\n{template:GadgetBlogListIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAIUlEQVQoz2P4jwQYoOA/iYBh8BgyeMBowI4GLD0CFmQGAJeZHQCjUvPAAAAAAElFTkSuQmCC\n{/template:GadgetBlogListIconUrl}\n\n{template:GadgetBlogListIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAJ0lEQVQoz2MwNjb+D8MMUIAsRgxmGDyGDB4wGrCjAUuPgP3//z8DAG+r2iZzG/daAAAAAElFTkSuQmCC\n{/template:GadgetBlogListIconSelectedUrl}\n');

  function mo(a) {
    Z.call(this, a)
  }
  D(mo, Z);
  B = mo.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#bloglistcss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "bloglistcss");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetBlogListCSS"));
    a.append(c);
    this.ha(b, "BlogList" + this.O)
  };
  B.M = function () {
    return this.C.title || this.template("GadgetBlogListDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetBlogListIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetBlogListIconSelectedUrl")
  };
  B.T = function () {
    return this.template("GadgetBlogList", this.C)
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetImageCSS}\n\n.image-gadget-content {\n  padding: 0 12px;\n  text-align: center;\n}\n\n{/template:GadgetImageCSS}\n{template:GadgetImageDefaultTitle}\nPicture\n{/template:GadgetImageDefaultTitle}\n\n\x3c!-- Attributes {link, width, height, title, sourceUrl, caption} --\x3e\n{template:GadgetImage}\n  <div class="image-gadget-content">\n    <a href="{link}">\n      <img width="{width}" height="{height}" src="{sourceUrl}"\n           alt="{title}" style="visibility: visible;" />\n    </a>\n    <div class="caption">{caption}</div>\n  </div>\n{/template:GadgetImage}\n\n\x3c!-- Base 64 code for image/resources/icon.png --\x3e\n{template:GadgetImageIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAyUlEQVR42u2UMQoCMRBFR7Sw0ksseIDUNiIewNZmK2sLwXN4E8EDiFUSSO0BrMUrjH+qhFhkRzaI4INXpJi8yRZLzAyrQcSVSQPUp//ADwWstXN4ggtjDBXUB0IILCDwdM5New3g0i1HJLJHhFIzdAHZPkXOuHQEx/AK73CmC8Ttl/yOBDbwkJwvnwbOHMkjj+xVK1UAA40MFonB4L0faAJHViDLILDuFMDlExnQgsANDrsEdhzRRtpiIN9e+6m+8C+qTP1A5Qi9ANfX3A/iP+/QAAAAAElFTkSuQmCC\n{/template:GadgetImageIconUrl}\n\n\x3c!-- Base 64 code for image/resources/icon-selected.png --\x3e\n{template:GadgetImageIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAMAAADto6y6AAAAb1BMVEX///83Nzc2NjY4ODjPz881NTVOTk739/dJSUl2dnZFRUXz8/Ovr6+kpKRaWlrLy8v5+floaGjg4ODKysq4uLiioqJpaWlzc3NcXFxGRkbIyMjj4+NfX1+NjY2+vr709PRAQEBWVlanp6ezs7NSUlISFTdWAAAAAXRSTlMAQObYZgAAAIJJREFUeF610TcSAzAIRFEWkJxzzvH+ZzQjeWwxpvUved1CCh/XlBBDMlD6SQtQEPM/QHuTEDpd6Q8iGIrIKIKxQabpLM89LMTCcgWsPWwMgO0OwL6Fg+DTsYUTms5fuFwb4JvBe8S73/1RgA2e7s6ZKBlw9I8ClnuelSr4Uo00vusL6wAErFKALucAAAAASUVORK5CYII=\n\n{/template:GadgetImageIconSelectedUrl}\n');

  function no(a) {
    Z.call(this, a)
  }
  D(no, Z);
  B = no.prototype;
  B.init = function (a, b) {
    this.ui = a;
    this.Mc = !0;
    a = document.querySelector(v);
    var c = a.querySelector("#Imagecss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "Imagecss");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetImageCSS"));
    a.append(c);
    this.ha(b, "Image" + this.O)
  };
  B.M = function () {
    return this.C.title || this.template("GadgetImageDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetImageIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetImageIconSelectedUrl")
  };
  B.T = function () {
    this.Mc = !this.C.shrinkToFit;
    return this.template("GadgetImage", this.C || [])
  };
  B.Rc = function (a) {
    a && !this.Mc && (a = a.closest(".gadget-title, .gadget")) && T(a, "image-gadget-content")
  };
  blogger.compileTemplate('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:GadgetLabelCSS}\n.gadget-label {\n  padding: 12px;\n  min-width: 320px;\n}\n\n.gadget-label-item {\n  line-height: 14px;\n  padding: 8px;\n}\n\n.gadget-label-cloud .gadget-label-item {\n  display: inline-block;\n}\n\n.gadget-label-cloud .gadget-label-size-1 {\n  font-size: 80%;\n}\n.gadget-label-cloud .gadget-label-size-2 {\n  font-size: 90%;\n}\n.gadget-label-cloud .gadget-label-size-3 {\n  font-size: 100%;\n}\n.gadget-label-cloud .gadget-label-size-4 {\n  font-size: 120%;\n}\n.gadget-label-cloud .gadget-label-size-5 {\n  font-size: 160%;\n}\n\n.gadget-label-count {\n  display: none;\n  color: #666;\n  font-size: 12px;\n}\n.gadget-label-show-freq-numbers .gadget-label-count {\n  display: inline;\n}\n.gadget-label-count:before {\n  content: " (";\n}\n.gadget-label-count:after {\n  content: ")";\n}\n\n{/template:GadgetLabelCSS}\n{template:GadgetLabelDefaultTitle}\nLabel\n{/template:GadgetLabelDefaultTitle}\n\n\x3c!-- Attributes {labels, display, showFreqNumbers} --\x3e\n{template:GadgetLabel}\n<ul class="gadget-label gadget-label-{display}{block:IfshowFreqNumbers} gadget-label-show-freq-numbers{/block:IfshowFreqNumbers}">\n  {block:labels}\n  {GadgetLabelItem}\n  {/block:labels}\n</ul>\n{/template:GadgetLabel}\n\n\x3c!-- Attributes {name, count, cssSize, url} --\x3e\n{template:GadgetLabelItem}\n<li class="gadget-label-item gadget-label-size-{cssSize}">\n  <a href="{url}">{name}</a><span class="gadget-label-count">{count}</span>\n</li>\n{/template:GadgetLabelItem}\n\n{template:GadgetLabelIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAgUlEQVQ4y6XTwQ3AIAgFUEZyhI7gCIzuCGzwe9HWKhgo/2SUvBBFgi8XGQFAtBQ3AxEAxYPUvlkj0Iy05cDdUbQTFYrciQlpSCQCoGSRt6O+SEHUW8pAMm44A/H83n8gBrBNXwTi54mVMfZA/Bk241OdIF5qyYwBsVJHx0yQaMBAblcXSj0+j7awAAAAAElFTkSuQmCC\n{/template:GadgetLabelIconUrl}\n\n{template:GadgetLabelIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAgklEQVQ4jaXSAQrAIAgAQJ8U9IE9YU/w6T2hH7gVWxPR0BlIUXJYBrVWcsQBxiAiAJHcDKTfUTzIOTbHHIE40vhBpKJoJSoUeRMT0pBITCiLfBU9ixQ0kJKE+tvSDIT8b/yBcD6s+GQRCFeL5XBC6woq4oCQ55rIBkKZt0UE1DXgRS6+HFtDSeJYlgAAAABJRU5ErkJggg==\n{/template:GadgetLabelIconSelectedUrl}\n');

  function oo(a) {
    Z.call(this, a)
  }
  D(oo, Z);
  B = oo.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#labelcss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "labelcss");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetLabelCSS"));
    a.append(c);
    this.ha(b, "Label" + this.O)
  };
  B.M = function () {
    return this.C.title || this.template("GadgetLabelDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetLabelIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetLabelIconSelectedUrl")
  };
  B.T = function () {
    return this.template("GadgetLabel", {
      labels: this.C.labels || [],
      display: this.C.display,
      showFreqNumbers: this.C.showFreqNumbers
    })
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetLinkListCSS}\n.gadget-linklist {\n  padding: 12px;\n  min-width: 120px;\n  max-width: 320px;\n}\n\n.gadget-linklist-item {\n  line-height: 14px;\n  padding: 8px;\n}\n\n{/template:GadgetLinkListCSS}\n{template:GadgetLinkListDefaultTitle}\nLink List\n{/template:GadgetLinkListDefaultTitle}\n\n\x3c!-- Attributes {links} --\x3e\n{template:GadgetLinkList}\n<ul class="gadget-linklist">\n  {block:links}\n  {GadgetLinkListItem}\n  {/block:links}\n</ul>\n{/template:GadgetLinkList}\n\n\x3c!-- Attributes {target, name} --\x3e\n{template:GadgetLinkListItem}\n<li class="gadget-linklist-item">\n  <a href="{target}">{name}</a>\n</li>\n{/template:GadgetLinkListItem}\n\n{template:GadgetLinkListIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAIUlEQVQoz2P4jwQYoOA/iYBh8BgyeMBowI4GLD0CFmQGAJeZHQCjUvPAAAAAAElFTkSuQmCC\n{/template:GadgetLinkListIconUrl}\n\n{template:GadgetLinkListIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAJ0lEQVQoz2MwNjb+D8MMUIAsRgxmGDyGDB4wGrCjAUuPgP3//z8DAG+r2iZzG/daAAAAAElFTkSuQmCC\n{/template:GadgetLinkListIconSelectedUrl}\n');

  function po(a) {
    Z.call(this, a)
  }
  D(po, Z);
  B = po.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#linklistcss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "linklistcss");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetLinkListCSS"));
    a.append(c);
    this.ha(b, "LinkList" + this.O)
  };
  B.M = function () {
    return this.C.title || this.template("GadgetLinkListDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetLinkListIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetLinkListIconSelectedUrl")
  };
  B.T = function () {
    return this.template("GadgetLinkList", {
      links: this.C.links || []
    })
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetPopularPostsCSS}\n\n.PopularPosts {\n  max-width: 350px;\n  min-width: 250px;\n  padding: 0 12px;\n}\n\n.PopularPosts-content { padding: 8px; line-height: 14px; }\n\n.PopularPosts ul { padding: 0.7em 0; }\n\n.PopularPosts .PopularPosts-title { padding-bottom: 0.2em; }\n\n.hide-snippet .PopularPosts-snippet,\n.hide-thumbnail .PopularPosts-thumbnail {\n  display: none;\n}\n\n.PopularPosts .PopularPosts-thumbnail { float: left; margin: 0 5px 5px 0; }\n\n{/template:GadgetPopularPostsCSS}\n{template:GadgetPopularPostsDefaultTitle}\nPopular Posts\n{/template:GadgetPopularPostsDefaultTitle}\n\n\x3c!-- Popular Posts gadget main template --\x3e\n{template:GadgetPopularPosts}\n  <div class="PopularPosts {block:IfNotshowBoth} {block:IfNotshowSnippets} hide-snippet {/block:IfNotshowSnippets} {block:IfNotshowThumbnails} hide-thumbnail {/block:IfNotshowThumbnails} {/block:IfNotshowBoth} ">\n    <ul>\n      {block:posts}\n        {GadgetPopularPostsContent}\n      {/block:posts}\n    </ul>\n  </div>\n{/template:GadgetPopularPosts}\n\n\x3c!-- Attributes {href, title, snippet} --\x3e\n{template:GadgetPopularPostsContent}\n <li>\n    <div class="PopularPosts-content">\n    {block:Ifthumbnail}\n      <div class="PopularPosts-thumbnail">\n        <a href="{href}" target="_blank">\n          <img alt="{title}" border="0" height="72" src="{thumbnail}" width="72" />\n        </a>\n      </div>\n    {/block:Ifthumbnail}\n      <div class="PopularPosts-title">\n        <a href="{href}">{title}</a>\n      </div>\n      <div class="PopularPosts-snippet">\n        {snippet}\n      </div>\n    </div>\n    <div style="clear:both;"></div>\n  </li>\n{/template:GadgetPopularPostsContent}\n\n\x3c!-- Base 64 code for image /popularposts/resources/icon.png --\x3e\n{template:GadgetPopularPostsIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAOVBMVEUAAAD///////////////////////////////////////+0tLRdXV03NzdQUFDz8/OCgoLm5uba2tpH+D6LAAAACnRSTlMAYJ8w799AzyCvT73IhwAAAHZJREFUeF6NzNsOwyAMBNE1kLQdkt7+/2MrEauAlUrdx2NrJOEjaRy7b3ToPDj7wO6R3Z3hmyJG/mZv/I7cuZ7xE5sinqmks8ibS+BKX/JI6z7w2RTZXg2XHNpb4+ztMDu4r8ICt8bh0yial4tJWss6s+XjatIHHJAOzO96uu0AAAAASUVORK5CYII=\n{/template:GadgetPopularPostsIconUrl}\n\n\x3c!-- Base 64 code for image /popularposts/resources/icon-selected.png --\x3e\n{template:GadgetPopularPostsIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAOVBMVEUAAAA3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzeCgoLa2tr////m5uZERES0tLRQUFBdXV0qcSKbAAAACnRSTlMAYJ8w799AzyCvT73IhwAAAHZJREFUeF6NzNsOwyAMBNE1kLQdkt7+/2MrEauAlUrdx2NrJOEjaRy7b3ToPDj7wO6R3Z3hmyJG/mZv/I7cuZ7xE5sinqmks8ibS+BKX/JI6z7w2RTZXg2XHNpb4+ztMDu4r8ICt8bh0yial4tJWss6s+XjatIHHJAOzO96uu0AAAAASUVORK5CYII=\n{/template:GadgetPopularPostsIconSelectedUrl}\n');

  function qo(a) {
    Z.call(this, a)
  }
  D(qo, Z);
  B = qo.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#PopularPostsCSS");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "PopularPostsCSS");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetPopularPostsCSS"));
    a.append(c);
    this.ha(b, "PopularPosts" + this.O)
  };
  B.M = function () {
    return this.C.title || this.template("GadgetPopularPostsDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetPopularPostsIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetPopularPostsIconSelectedUrl")
  };
  B.T = function () {
    for (var a = this.C && this.C.posts && this.C.posts.length, b = 0; b < a; b++) {
      var c = this.C.posts[b].title;
      this.C.posts[b].title = 50 < c.length ? c.substring(0, 50) + "..." : c
    }
    return this.template("GadgetPopularPosts", {
      posts: this.C.posts,
      showBoth: this.C.km && this.C.lm,
      showSnippets: this.C.km,
      showThumbnails: this.C.lm,
      thumbnailSize: this.C.Km || "",
      title: this.C.title || ""
    })
  };
  blogger.compileTemplate('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:ProfileCSS}\n\n.profile {\n  color: #666;\n  min-width: 280px;\n  padding: 8px 16px 16px 16px;\n}\n\n.profile-data {\n  margin: 0;\n}\n\n.profile-name {\n  display: inline-block;\n}\n\n.profile-name-link {\n  background: no-repeat left center;\n  display: inline-block;\n  min-height: 20px;\n  padding-left: 20px;\n}\n\n.profile-photo {\n  display: inline-block;\n  float: left;\n  margin: 0 12px 10px 0;\n}\n\n.profile-name, .profile-location, .profile-occupation {\n  font-size: 16px;\n  margin-bottom: 6px;\n}\n\n.profile-photo img {\n  vertical-align: middle;\n}\n.profile-aboutme {\n  clear: both;\n  line-height: 1.2em;\n  margin: 0;\n}\n\n.profile-link {\n  clear: both;\n  display: block;\n  margin-top: 4px;\n  text-align: right;\n}\n\n{/template:ProfileCSS}\n{template:ProfileGadget}\n<div class="profile">\n  {block:IfisDisplayable}\n    {block:Ifteam}\n      {ProfileGadgetTeam}\n    {/block:Ifteam}\n    {block:IfNotteam}\n      {ProfileGadgetPersonal}\n    {/block:IfNotteam}\n  {/block:IfisDisplayable}\n</div>\n{/template:ProfileGadget}\n\n{template:ProfileGadgetPersonal}\n<dl class="profile-data">\n  {block:displayname}\n  <dt class="profile-name">\n  <a href="{userUrl}" class="profile-name-link g-profile"\n      rel="author"\n      style="background-image: url(\'{profileLogo}\');">{displayname}</a>\n  </dt>\n  {/block:displayname}\n  {block:Ifphoto}\n    {block:Ifphoto.url}\n    <dd class="profile-photo">\n      <a href="{userUrl}">\n        <img src="{photo.url}"\n            {block:photo.width} width="{photo.width}" {/block:photo.width}\n            {block:photo.height} height="{photo.height}" {/block:photo.height}\n            {block:photo.alt} alt="{photo.alt}" {/block:photo.alt} />\n      </a>\n    </dd>\n    {/block:Ifphoto.url}\n  {/block:Ifphoto}\n  {block:showlocation}\n  <dd class="profile-location">\n    {location}\n  </dd>\n  {/block:showlocation}\n  {block:showoccupation}\n  <dd class="profile-occupation">\n    {occupation}\n  </dd>\n  {/block:showoccupation}\n  {block:showaboutme}\n  <dd class="profile-aboutme">{aboutme}</dd>\n  {/block:showaboutme}\n</dl>\n{/template:ProfileGadgetPersonal}\n\n{template:ProfileGadgetTeam}\n<ul class="profile-data-list">\n  {block:authors}\n  <li><a href="{userUrl}" class="profile-name-link g-profile"\n      style="background-image: url(\'{profileLogo}\');">{display-name}</a></li>\n  {/block:authors}\n</ul>\n{/template:ProfileGadgetTeam}\n\n{template:ProfileGadgetDefaultIcon}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB40lEQVRIx7XWwWoTURQG4Lst0jTiolRa2qW4sAWhbrsTBJ8h2bpKNkUUBKGL2idQfIgGuhNsLW7UTaiPYTFpN92Y1s/NmTSEzGSmpj8MAzPnP//cc/97zqRUACyggX30cIlB3C/j2X7E1HJyJBSKtNGPZJ/wAg8xh3lsYhtHEdNDq7QQVnGCP3iJO2kKsIId/AruaqEQ1mMVh7iXKgJL6OIM6xOFYiV9fMTddENgEQchtjpJqIvDNAPEPn6PnNdCIxv/oIBcx7FrHKNeEL+B32hhaOE+3kz5ylGRodgUzl64sZbQxMU0d8lHfYobL9BI6OBribpXFgreZ3RSuONVCaHKpQvea/QT/uJJCUIlM4zwnuIqE6pVsG69jMDYubrKaj+fbglYzoQusVkQuIa30cPGcRLv1gr4zzOhHrZzgpo4Nx3naObk2M3MsI+jipYubXV8y+zdiM6wMgOhrQlGGKCZUIvy7dyC0Ic4pwvZgxZOsTQWuFXxqo9wH8fwbI+PiZNo64szsPT92Jtu0eA7wNx/inzJ9r1olJ/hJzZuIPIoWlP+KB9bWTeG1t4kN+a0mffhsO4op8zvVivceIEfeIdnkXQ5TvxujOxBHNp25f+6CKrFOetEza/Grn68aw4tnCP0D7HegqWQsg0fAAAAAElFTkSuQmCC\n{/template:ProfileGadgetDefaultIcon}\n\n{template:ProfileGadgetDefaultIconSelected}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB8klEQVRIx7XWT0uUURTH8buVcJxoIYaiy2iRwgds6y4Ieg3OttW4kSgIAhfmKyh6ETPgLkiTNtVmsJeR5OjGTWpPm/MM0zjz/DE9cHng3nPO93nu/d1znpQKDDNYRwfHuMB5PC9irhM+jXE5sixLWZYVQjbQj2Qf8RwPMYVprGIT++FzjHZlEBZxiN94gTupxLCALfyM2MVCEJbjK/ZwL9U0zKGHEyzH3L+g+JI+PuBuuqZhFrsBWxwH6mEv3YDFOX6LnAlXDv5BQXATB8hiHKBZ4L+CX2hjIOE+Xpe85TBkACuJ2Qk1NhJaOCtT1xhIPpolajzDekIXXyrse21QxH1CN4U6XlYA1d66iHuFfsIfPK4QUEsMQ3FPcJmDGjWk26wCGLlXl/neT6dbMsznoAusFjgu4U3UsNEzOoy1pYL4ZznoGJsTnFo4LVBcPk7RmpBjOxdDB/s1JV1Z6viay3s9KsPCDYDWxgjhHK2ERmzf1i2A3sc9nckn2jjC3IjjWs3RHIoVzXNjUL1j4TDK+uwNSPp+nE2vqPHtYuo/IZ/zc78CGmrlJ/iBlWtAHkVpGrTysp+TXjStnXFqnFBm3oXCesMxVX632qHGM3zHWzyNpPNx47ejZZ/Hpd0YzVMKClgj7lk39vxyZPRjrTWQ8ATQX2/rqVTnkWAqAAAAAElFTkSuQmCC\n{/template:ProfileGadgetDefaultIconSelected}\n');

  function ro(a) {
    Z.call(this, a)
  }
  D(ro, Z);
  B = ro.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#profilecss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "profilecss");
    c.setAttribute(q, gc);
    c.append(this.template("ProfileCSS"));
    a.append(c);
    this.ha(b, "Profile" + this.O)
  };
  B.M = function () {
    return this.C.title || "Profile"
  };
  B.da = function () {
    return this.C.photo && this.C.photo.url || this.template("ProfileGadgetDefaultIcon")
  };
  B.ca = function () {
    return this.C.photo && this.C.photo.url || this.template("ProfileGadgetDefaultIconSelected")
  };
  B.T = function () {
    return this.template("ProfileGadget", this.C)
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetStatsCSS}\n\n.gadget-stats { margin: 5px }\n\n.gadget-stats .blind-plate {\n  border-bottom: 1px solid #fff;\n  border-top: 1px solid #000;\n  filter: alpha(opacity=65);\n  height: 0;\n  left: 0;\n  opacity: .65;\n  position: absolute;\n  top: 13px;\n  width: 22px;\n}\n\n.gadget-stats .counter-wrapper {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: bold;\n  height: 30px;\n  line-height: 30px;\n  vertical-align: top;\n}\n\n.gadget-stats .counter-wrapper {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: bold;\n  height: 30px;\n  line-height: 30px;\n  vertical-align: top;\n}\n\n.gadget-stats .digit {\n  background: url("https://resources.blogblog.com/img/widgets/stats-flipper.png") no-repeat left !important;\n  border: 1px solid #fff;\n  display: inline-block;\n  height: 28px;\n  line-height: 28px;\n  margin-left: -8px;\n  position: relative;\n  text-align: center;\n  width: 22px;\n}\n\n.gadget-stats .graph-counter-wrapper {\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.gadget-stats .stage-0 { background-position: 0 0 !important; }\n\n.gadget-stats .chart {\n  display:inline-block;\n  height:30px;\n  width:75px;\n}\n\n.gadget-stats .chart.white {\n  background-color: grey;\n}\n\n{/template:GadgetStatsCSS}\n{template:GadgetStatsDefaultTitle}\nBlogs Stats\n{/template:GadgetStatsDefaultTitle}\n\n\x3c!-- Attributes {sparklineUrl} --\x3e\n{template:GadgetStats}\n<div class="gadget-stats">\n  \x3c!-- Content is going to be visible when data will be fetched from server. --\x3e\n  <div style="text-align: center">\n    {block:IfshowSparkline}\n      {block:IfNotsparklineData}\n        <img src="{sparklineUrl}" width="75" height="30" alt="sparkline" {block:Ifbackgroundwhite}style="background-color: grey;"{/block:Ifbackgroundwhite}/>\n      {/block:IfNotsparklineData}\n      {block:IfsparklineData}\n        <span class="chart"/>\n      {/block:IfsparklineData}\n    {/block:IfshowSparkline}\n    {block:IfshowGraphicalCounter}\n      <span class="counter-wrapper graph-counter-wrapper"\n            style="padding:5px;">\n        {block:splitValues}\n          {IndividualCounter}\n        {/block:splitValues}\n      </span>\n    {/block:IfshowGraphicalCounter}\n    {block:IfNotshowGraphicalCounter}\n      <span class="counter-wrapper">{total}</span>\n    {/block:IfNotshowGraphicalCounter}\n  </div>\n</div>\n{/template:GadgetStats}\n\n\x3c!-- Attributes {individualCounter} --\x3e\n{template:IndividualCounter}\n  <span class="digit stage-0">\n    <strong>{individualCounter}</strong>\n    <span class="blind-plate"></span>\n  </span>\n{/template:IndividualCounter}\n\n\x3c!-- Base 64 code for image /stats/resources/icon.png --\x3e\n{template:GadgetStatsIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAALVBMVEX///////9dXV03Nzf////z8/Obm5va2tqCgoJERES0tLSPj4/Nzc12dnZQUFANaTq2AAAAAnRSTlPvMImsErcAAACDSURBVHheldAxCgJBDAXQETyAZ9iQwsYi04ggWPxvYxey2NjpTTyEB/AKHsGDOQtBx3J/E14Tkl9W+GZRlj8cCrrMB28dfN/h/kgwcKrvhCueu1xAsUt9TRgBN1lv0cAhKOpVJ7ThFtxEA2UwUeCMBrdRLPKcq8IViWOAMfOfvpC/qj5eR0uIUNLLMAAAAABJRU5ErkJggg==\n{/template:GadgetStatsIconUrl}\n\n\x3c!-- Base 64 code for image /stats/resources/icon-selected.png --\x3e\n{template:GadgetStatsIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAALVBMVEU3Nzc3Nzfa2tr///83NzdERESbm5tdXV20tLTz8/OCgoKoqKhpaWnBwcHm5uZSesK3AAAAAnRSTlPvMImsErcAAACDSURBVHheldAxCgJBDAXQETyAZ9iQwsYi04ggWPxvYxey2NjpTTyEB/AKHsGDOQtBx3J/E14Tkl9W+GZRlj8cCrrMB28dfN/h/kgwcKrvhCueu1xAsUt9TRgBN1lv0cAhKOpVJ7ThFtxEA2UwUeCMBrdRLPKcq8IViWOAMfOfvpC/qj5eR0uIUNLLMAAAAABJRU5ErkJggg==\n{/template:GadgetStatsIconSelectedUrl}\n');

  function so() {};
  /*

  Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: MIT
  */
  function to(a, b) {
    this.Wd = [];
    this.Li = a;
    this.vg = b || null;
    this.Ac = this.Nb = !1;
    this.Fb = void 0;
    this.xf = this.lg = this.Ie = !1;
    this.be = 0;
    this.Eb = null;
    this.Je = 0
  }
  bd(to, so);
  B = to.prototype;
  B.cancel = function (a) {
    if (this.Nb)
      this.Fb instanceof to && this.Fb.cancel();
    else {
      if (this.Eb) {
        var b = this.Eb;
        delete this.Eb;
        a ? b.cancel(a) : (b.Je--,
          0 >= b.Je && b.cancel())
      }
      this.Li ? this.Li.call(this.vg, this) : this.xf = !0;
      this.Nb || this.Se(new uo(this))
    }
  };
  B.tg = function (a, b) {
    this.Ie = !1;
    vo(this, a, b)
  };

  function vo(a, b, c) {
    a.Nb = !0;
    a.Fb = c;
    a.Ac = !b;
    wo(a)
  }

  function xo(a) {
    if (a.Nb) {
      if (!a.xf)
        throw new yo(a);
      a.xf = !1
    }
  }
  B.Qa = function (a) {
    xo(this);
    zo(a);
    vo(this, !0, a)
  };
  B.Se = function (a) {
    xo(this);
    zo(a);
    vo(this, !1, a)
  };

  function zo(a) {
    J(!(a instanceof to), "An execution sequence may not be initiated with a blocking Deferred.")
  }

  function Ao(a, b, c, d) {
    J(!a.lg, "Blocking Deferreds can not be re-used");
    a.Wd.push([b, c, d]);
    a.Nb && wo(a)
  }
  B.then = function (a, b, c) {
    var d, e, f = new Jm(function (h, k) {
      e = h;
      d = k
    });
    Ao(this, e, function (h) {
      h instanceof uo ? f.cancel() : d(h);
      return Bo
    }, this);
    return f.then(a, b, c)
  };
  to.prototype.$goog_Thenable = !0;

  function Co(a) {
    return ve(a.Wd, function (b) {
      return typeof b[1] === t
    })
  }
  var Bo = {};

  function wo(a) {
    if (a.be && a.Nb && Co(a)) {
      var b = a.be,
        c = Do[b];
      c && (E.clearTimeout(c.uc),
        delete Do[b]);
      a.be = 0
    }
    a.Eb && (a.Eb.Je--,
      delete a.Eb);
    b = a.Fb;
    for (var d = c = !1; a.Wd.length && !a.Ie;) {
      var e = a.Wd.shift(),
        f = e[0],
        h = e[1];
      e = e[2];
      if (f = a.Ac ? h : f)
        try {
          var k = f.call(e || a.vg, b);
          k === Bo && (k = void 0);
          void 0 !== k && (a.Ac = a.Ac && (k == b || k instanceof Error),
            a.Fb = b = k);
          if (Im(b) || typeof E.Promise === t && b instanceof E.Promise)
            d = !0,
            a.Ie = !0
        } catch (l) {
          b = l,
            a.Ac = !0,
            Co(a) || (c = !0)
        }
    }
    a.Fb = b;
    d && (k = F(a.tg, a, !0),
      d = F(a.tg, a, !1),
      b instanceof to ? (Ao(b, k, d),
        b.lg = !0) : b.then(k, d));
    c && (b = new Eo(b),
      Do[b.uc] = b,
      a.be = b.uc)
  }

  function yo() {
    Xd.call(this)
  }
  bd(yo, Xd);
  yo.prototype.message = "Deferred has already fired";
  yo.prototype.name = "AlreadyCalledError";

  function uo() {
    Xd.call(this)
  }
  bd(uo, Xd);
  uo.prototype.message = "Deferred was canceled";
  uo.prototype.name = "CanceledError";

  function Eo(a) {
    this.uc = E.setTimeout(F(this.qm, this), 0);
    this.fk = a
  }
  Eo.prototype.qm = function () {
    J(Do[this.uc], "Cannot throw an error that is not scheduled.");
    delete Do[this.uc];
    throw this.fk;
  };
  var Do = {};

  function Fo() {
    var a = Cg(yg(new vg(wg, "https://www.gstatic.com/charts/loader.js"))),
      b = {},
      c = b.document || document,
      d = Bg(a).toString(),
      e = ul((new xl(c)).yk, Ja),
      f = {
        Zi: e,
        mj: void 0
      },
      h = new to(Go, f),
      k = null,
      l = null != b.timeout ? b.timeout : 5E3;
    0 < l && (k = window.setTimeout(function () {
        Ho(e, !0);
        h.Se(new Io(1, "Timeout reached for loading script " + d))
      }, l),
      f.mj = k);
    e.onload = e.onreadystatechange = function () {
      e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Ho(e, b.Cm || !1, k),
        h.Qa(null))
    };
    e.onerror = function () {
      Ho(e, !0, k);
      h.Se(new Io(0, "Error while loading script " + d))
    };
    f = b.attributes || {};
    qg(f, {
      type: nc,
      charset: "UTF-8"
    });
    rl(e, f);
    hh(e, a);
    Jo(c).appendChild(e);
    return h
  }

  function Jo(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 !== b.length ? b[0] : a.documentElement
  }

  function Go() {
    if (this && this.Zi) {
      var a = this.Zi;
      a && a.tagName == Ja && Ho(a, !0, this.mj)
    }
  }

  function Ho(a, b, c) {
    null != c && E.clearTimeout(c);
    a.onload = function () {};
    a.onerror = function () {};
    a.onreadystatechange = function () {};
    b && window.setTimeout(function () {
      a && a.parentNode && a.parentNode.removeChild(a)
    }, 0)
  }

  function Io(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    Xd.call(this, c);
    this.code = a
  }
  bd(Io, Xd);

  function Ko(a) {
    Z.call(this, a);
    this.ij = {}
  }
  D(Ko, Z);
  B = Ko.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#statscss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "statscss");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetStatsCSS"));
    a.append(c);
    this.ha(b, "Stats" + this.O)
  };
  B.Gc = function (a) {
    var b = this;
    this.C = a;
    a = new URL(a.statsUrl, window.location.href);
    a.searchParams.set("v", "0");
    a.searchParams.set(Qa, "initial");
    a.searchParams.set(Dc, "Stats" + this.O);
    a.searchParams.set(Zb, "js");
    console.log(a.href, a)
    fetch(a.href).then(function (c) {
      return c.text()
    }).then(function (c) {
      b.ij = c;
      ao(b)
    }).catch(this.Rb.bind(this))
  };
  B.M = function () {
    return this.C.title || this.template("GadgetStatsDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetStatsIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetStatsIconSelectedUrl")
  };
  B.T = function () {
    this.na = eval("(" + this.ij + ")");
    if (!this.na)
      return "";
    for (var a = this.na.total && this.na.total.toString().length, b = [], c = 0; c < a; c++) {
      var d = {};
      d.individualCounter = this.na.total.toString().charAt(c);
      b.push(d)
    }
    this.na.splitValues = b;
    this.na.lenViews = a;
    for (var e in this.C)
      this.na[e.toString()] = this.C[e];
    this.na.showSparkline && (a = H.decode(this.C.statsUrl),
      this.na.backgroundwhite = a.params.style && a.params.style.match(/WHITE/));
    return this.template("GadgetStats", this.na)
  };
  B.Rc = function (a) {
    var b = this;
    if (a) {
      var c = a.querySelector(".chart");
      c && (this.na.backgroundwhite && (c.className += " white"),
        Fo().then(function () {
          google.charts.load(hb, {
            packages: ["corechart"]
          });
          google.charts.setOnLoadCallback(function () {
            (new google.visualization.AreaChart(c)).draw(google.visualization.arrayToDataTable(b.na.sparklineData, !0), Object.assign({
              enableInteractivity: !1,
              chartArea: {
                top: 0,
                left: 0,
                width: 75,
                height: 30
              },
              hAxis: {
                textPosition: Nb,
                gridlines: {
                  color: sc
                }
              },
              vAxis: {
                textPosition: Nb,
                gridlines: {
                  color: sc
                }
              },
              legend: {
                position: Nb
              }
            }, b.na.sparklineOptions))
          })
        }))
    }
  };
  blogger.compileTemplate('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:SubscribeCSS}\n\n#subscribe {\n  text-align: left;\n  margin: 10px;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\n.subscribe-by-email,\n.subscribe-rss-feed {\n  min-width: 250px;\n  padding: 4px 16px 16px 16px;\n}\n\n.subscribe-by-email {\n  border-bottom: 1px solid #ddd;\n}\n\n.subscribe-by-email-title,\n.subscribe-rss-feed-title {\n  font-size: 16px;\n  margin: 8px 0;\n}\n\n.subscribe-by-email-address {\n  border: 1px solid #ddd;\n  {css-box-shadow value="inset 0 0 1px rgba(0, 0, 0, 0.3)"};\n  font-size: 12px;\n  height: 27px;\n  line-height: 27px;\n  min-width: 192px;\n  padding: 0 0 0 6px;\n}\n\n.subscribe-by-email-submit {\n  display: inline-block;\n  min-width: 54px;\n  border: 1px solid #dcdcdc;\n  text-align: center;\n  color: #444;\n  font-size: 11px;\n  font-weight: bold;\n  height: 27px;\n  padding: 0 8px;\n  line-height: 27px;\n  {css-border-radius value="2px"}\n  {css-transition value="right 0.218s"};\n  background-color: #f5f5f5;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#f5f5f5\',EndColorStr=\'#f1f1f1\');\n  {css-box-sizing value="content-box"};\n}\n.subscribe-by-email-submit:hover {\n  border: 1px solid #c6c6c6;\n  color: #222;\n  -webkit-transition: all 0.0s;\n  -moz-transition: all 0.0s;\n  -o-transition: all 0.0s;\n  transition: all 0.0s;\n  background-color: #f8f8f8;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: linear-gradient(top,#f8f8f8,#f1f1f1);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#f8f8f8\',EndColorStr=\'#f1f1f1\');\n  {css-box-shadow value="0px 1px 1px rgba(0,0,0,0.1)"};\n}\n.subscribe-by-email-submit:active {\n  background-color: #f6f6f6;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: linear-gradient(top,#f6f6f6,#f1f1f1);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#f6f6f6\',EndColorStr=\'#f1f1f1\');\n  {css-box-shadow value="inset 0px 1px 2px rgba(0,0,0,0.1)"};\n}\n.subscribe-by-email-submit:visited {\n  color: #666;\n}\n\n.subscribe-rss-feed-view-rss {\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding-left: 28px;\n}\n\n.subscribe-rss-feed-add-to {\n  /* http://www.google.com/images/icons/product/reader-16.png */\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfElEQVQ4T22TXUhTYRjH/0dn6pZNkkZa2rKrRMgshO4q6KbooqCbbrwqQhMsEPqAvsuK6KYuoroRQigogkxErMhMIqxZGNTWtjbSmcO5zfOx856vznlOmx3Zc3He8/7f5/k9H7wvh2XG3+gwLIml0tCEHJ3K8wvgY3MFz4aHj+FuauYsgT55ywcL3lp4MokCxAKwVBZsMQeFFyGlJbTFZ4sDKk7ehKowYrKJUagvn0CMW7AlgCIxtIamiwNcXVcoWNNUaLoKXeAhPLgLefw9VSAm01BlDb43g/BvauUcLaRudRu5PYcKLa30b4RugVQV2etXwY+8hpU9JyioHx82k+j2DMqvKTS4vOnZP47RtrgT6D9YAv54B5RIDKqqLwHKezUDhl402JBFGIwHFBmt610Y8A0hfOkO+RYqsLILPTKiKRVvf+noHdUQn5fJ6X+Atf99rgrRtt10VvduCKqmgbMAme5Fx+DufdRwZlCyIf8qsP5jZz1Ith+BFIw6AcN7g/BVV6ChpsqevDm4L/FFHHikIZMVCu0F/M+hTwQgfpgkgCQzu4JU1wIFBqILaFxTiapKF03+WSCNY09lsxXBdPRgZLKLYDWXL2Dd1ibMzCZsQLIzSVmpzKTdTq23jNZ99zP4FM7AUCTM3t4CZvrV+nyQcyLCP7+Dc50IGq/aFXJurqukNZKUsKGmzKyCYeAbw9G+adKVvl0QxSzc7lW0D4WmwJV2fjbmzleTMDUjYfNaO/NYMI0djW66LPWnY6R9PbWaVsbshNu27+QIMNXjJYE3Xx9XWgJPxQqM/cigzV9OesvFCK1G/37HzbU0+0EcfuG4ieS9zIoFWy5/AXxpdXGYm4ahAAAAAElFTkSuQmCC);\n  background-repeat: no-repeat;\n  background-position: 4px center;\n  padding-left: 25px;\n}\n\na.feed-reader-link {\n  margin: .5em 0;\n}\n\n.subscribe-netvibes,\n.subscribe-myyahoo {\n  background-repeat: no-repeat;\n  height: 17px;\n  width: 91px;\n}\n\n.subscribe-netvibes {\n  /* http://img1.blogblog.com/img/widgets/subscribe-netvibes.png */\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAARCAMAAACFKyChAAAC7lBMVEX////////o8f9fti79/v/y9/+It/55rv5Fbrj8/f76+/33+v/z+P/q8//l7/+Cs/5rpv5dnf76/P9VmP74+vyUvv6Gtv56r/41oTVLcrqqqqr2+Pvv9f/h7f/e6//Y4fDL4P/R2+3F3P/C2v/N2OyqzP+2xuSix/5Ysy/5+//MzMxxqf5qpf6EntBno/5Zm/5fti9eti41ojQ1oTSSvf4+aLYsWa4iUqv5/P/4+fz0+f/29/v09vrx9Pro8v/r7/jm8P/g7P/j6fXa6f/e5fLU5f/T5P/a4vHV3u/J3//E2//L1uu+1/+51f+uzv+9y+atzv+6yeWoy/6myf+fxf6wweGcw/6awf6Nuv6gtNuJuP6EtP6CtP6As/6SqtV3rf51q/5tp/5mov5jof5env5bnP5ctS5ctC9btC9TsDBOrjFhg8NIqzI+pjM9pjM+pTM5pDRRdr1Mc7tIb7lBarcvkRg9Z7UrixgriRgqiRglghkxXbEifxkifRkgeRqQvP4ddhuuv+AyoDX+/v/2+f/2+Pzy9vvy9frt9P/w8/rs8//s7/fq7vfo7fbi7v/i7f/n7Pbg7f/k7Pnn6/bh7P/f7P/d6v/h6PTh5/Tf5vPY5//W5v/d5PLR5P/a4fHO4v/X4PDH3f/D2//C2v7C2f7M1+zM1+u/2P671/+61f+31P630/7Cz+ix0P+/zeawz/60xOOyw+KywuGawv6Zwv6rvd+YwP6XwP6Svv+httuLuf+Luf6Kuf6LuP6KuP6es9qbsdl+sv58r/6PptOFp9+JotKGoNCDndB9ms5enf50kspRlv5dtC5ctC5XszBYsi9TsTBTsC9oiMVPrjFPrjBjhcRJrDFJqzJFqjJFqTJCqTJDqDI/pzNApjNYfMA8pTQ7pDM5pDNWer84pDQ5ozQ5ozM4ozU3ozQ0ojU0oTRKcbpJcLpIcLkvkRcvjxgtjhgtjBg8ZbI6ZbQohhgohRk0YLIifxoifRooVq4aTKg1STZjAAAAAXRSTlMAQObYZgAAAmVJREFUeF611EOMbE0ch+H+tc2xbdu2bdv2XNu2bdu2bdv8uLsnmaRzchaTWUw/VUn9a/Puqmg2KkOj2UBFbHSINkYpDXr7I0NJC/3xVU6pbkhziB9A+11FZcW39vavVyuvvEc/TlgoR7oB9IstB9B+bmVl9R34QRwvQBIZpbsw0R+A7rYt3kBUx+lZM4OnM6fNFdP1WYAkRWAUCgIz3EgIQGi0KIhFbT+t7uruBjo7u24+Acnd3mdcj1pvGH9u+dQchkueP89wyiTWJ8uPpDlmABocjt3FQ0KI8m01i8NB1yzUVGygth/W/O67/VXzACQL3GvDdv4dotZqz+PbN6tN5R4fJ7YzRZKtng97OHCsPEZvaak52DnW2ChlbXJgebHXUNv36nr6bj1190Hi9yUZxu6zzTzOFxTY/78WLSOBTHWc2gq4EW3JPgApuQElB5LMzRVxYmlRhomA2r7z6J+hQ4AhQ/99fBsk41t3wMx9SqxHdnq6RXKgrzbRnmcbJxURbTcgLxOApSSoJDVm1cpoOs8gIbcsntq+0VjfOAwY1tBQXw2SGdy9PLMOw7Hcc8C6C/663Gw+mDmO+wF5VpbcS0NmIlgu2w6Nw3LQd09azfYZfZRNbV9787JpBOHt66brIHnl2Rsb+V/bZGPtNu1fZ/nMW54HgfWKCMBS4Ziw53I+p1SmLgA9T8pxUB+zWVZUaBdNbVd9cHUhlpaWi2sVSJYYrvBTW2bIx8TEXfMBBFqEAHIxDxAFz9ETGQgnmCxmArCOMNUHWAGhpnRQ23BmMJwYTs7EHtw3r9q/SlWINk1HZf4AwCDWutwHXcUAAAAASUVORK5CYII=);\n}\n\n.subscribe-myyahoo {\n  /* http://img1.blogblog.com/img/widgets/subscribe-yahoo.png */\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAARCAMAAACFKyChAAAAe1BMVEX////8GSH///9UVFT+xcj/8PH8KzL+jZH/5eb9SlH/Zmb+19j+sbP8dnv9bnOjz//8PEP+n6KZmZn09PT9f4P9WmDU1NRmZmYNJppeXl7f398pXOZ0dHR+fn7q6ur/9vbMzMwPQtuJiYm0tLQAAJmpqakYMqUAM8xKc+0wAtJHAAAAAXRSTlMAQObYZgAAAXdJREFUeF6108eu2zAYhFHPsDd1ubfbkrz/E4bShQ3aSRYBrE+ACGhx8IMiV91irVYdF6rbZPvnY58vtX/lDofD29z2xfY07jY3rf+yvfcpGcWHLorFF2WtJS0Qn23Whf0hjuRanNZi1/MqvkhZAU6x9aMbJUkb8mM0BjJIaUnlkNOKgC3seWrW+XWzv4T44FGc2Imu3x05FQBJpdGkNgQaIJESVA1yLedxrYaFK/bkkEXOlfauE9nuN+Jd7DnXAjbCUAEjmdAa4xyhSUa4iSYtDNKTXdes67qw34Xoss1rXvkdBwCSDFqnya5G3zgJyRya73FHSB0L++1ve7I+bfrJ5lH0vDXT1KOHooYlBxggStngEoFUaUQalnb5L+/2+crZPgne0yBVg0hU0ulByqGKtnKjc4EMlfeDZQv/h517sMlne9CAdu1glATSpTiJ5dFUVSDu9o9t2WyfJ5rrM8n9/mbI7/7r7nw+9NJ7uUyzvVTZXm0W6zcSt0JtZ/HJvQAAAABJRU5ErkJggg==);\n}\n\n{/template:SubscribeCSS}\n{template:SubscribeGadgetTitle}\nSubscribe\n{/template:SubscribeGadgetTitle}\n\n\x3c!-- Attributes {feedPath}, {feedUrl} --\x3e\n{template:SubscribeGadget}\n{SubscribeGadgetFollowByEmail feedPath="{feedPath}"}\n{SubscribeGadgetRssFeed feedUrl="{feedUrl}"}\n{/template:SubscribeGadget}\n\n{template:SubscribeGadgetFollowByEmail}\n{block:feedPath}\n<div class="subscribe-by-email">\n  <div class="subscribe-by-email-title">{lang:Subscribe via email}</div>\n  <form name="subscribe-by-email" method="post" target="popupwindow"\n      action="https://feedburner.google.com/fb/a/mailverify?uri={feedPath}"\n      onsubmit="window.open(\'https://feedburner.google.com/fb/a/mailverify?uri={feedPath}\', \'popupwindow\', \'scrollbars=yes,width=550,height=520\'); return true">\n    <input type="text" placeholder="{lang:Enter email address}" name="email" class="subscribe-by-email-address" />\n    <input type="submit" class="subscribe-by-email-submit" value="{lang:Submit}" />\n  </form>\n</div>\n{/block:feedPath}\n{/template:SubscribeGadgetFollowByEmail}\n\n{template:SubscribeGadgetRssFeed}\n{block:feedUrl}\n<div class="subscribe-rss-feed">\n<div class="subscribe-rss-feed-title">{lang:RSS Feed}</div>\n<div>\n  <a class="feed-reader-link subscribe-netvibes" href="https://www.netvibes.com/subscribe.php?url={feedUrl}" target="_blank">&nbsp;</a>\n  <a class="feed-reader-link subscribe-myyahoo" href="https://add.my.yahoo.com/content?url={feedUrl}" target="_blank">&nbsp;</a>\n  <a href="{feedUrl}" class="subscribe-rss-feed-add-to">{lang:View RSS Feed}</a>\n</div>\n</div>\n{/block:feedUrl}\n{/template:SubscribeGadgetRssFeed}\n\n{template:SubscribeGadgetIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAt0lEQVQ4y62UWw3FIBBEkVAJlVAJSLgSKqESkIAEpFQCEioBB6c/kGw22xZuO19kQ05mhocDAu8VHB9JgvbqLtb136DghIAJWHuhEpQAD8xOCfgBpRckddSIs3KYR0FYke9gVrTN2JyBScDKSNleAbPq7PH4FxUlXcTce8uWQOlsrrO1t+zSYMAi5lG4vY0WhO3DiGLN7LLVQ26uNiNeHAEFcYpNXu97iibnSd25cBXt9Tfyycd2AhigSpokj0DUAAAAAElFTkSuQmCC\n{/template:SubscribeGadgetIconUrl}\n\n{template:SubscribeGadgetIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAvUlEQVQ4y62UUQ3EIBBEkVAJSCB5BpBwEiqhEpCAhEqphEpAQh3QH5psNnttuYOEhEyWl5ndgAMSUP/cyQ2AVKBK0Nbc5Xb+GZScWMAEzG+hErQCEfBOLeADHG9BcpcW0SuHey+oWpHvYFa0xSjegUnADjqaHRVwVz17HH9QUdYvMbc3PSoKKJ35ps09zQ7tUhBaFm5voyVhuxhRLM1utnrIl6vFiJd7QElM8dKirnuKJnU5vVXXDf1GhnxsJxCDnsRGe0FLAAAAAElFTkSuQmCC\n{/template:SubscribeGadgetIconSelectedUrl}\n');

  function Lo(a) {
    Z.call(this, a);
    this.Ag = ""
  }
  D(Lo, Z);
  B = Lo.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#subscribecss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "subscribecss");
    c.setAttribute(q, gc);
    c.append(this.template("SubscribeCSS"));
    a.append(c);
    b = b.resources()[0].baseUrl;
    this.Ag = (b.match(/^https?:/) ? "" : "http:") + b + za;
    ao(this)
  };
  B.M = function () {
    return this.template("SubscribeGadgetTitle")
  };
  B.da = function () {
    return this.template("SubscribeGadgetIconUrl")
  };
  B.ca = function () {
    return this.template("SubscribeGadgetIconSelectedUrl")
  };
  B.T = function () {
    return this.template("SubscribeGadget", {
      feedPath: this.C.feedPath,
      feedUrl: this.Ag
    })
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetTextCSS}\n\n.text-widget-content {\n  background: #fff;\n  border: 0;\n  color: #000;\n  height: 100px;\n  max-height: 600px;\n  max-width: 400px;\n  overflow: auto;\n  padding: 10px 18px;\n  width: 200px;\n}\n\n{/template:GadgetTextCSS}\n{template:GadgetTextDefaultTitle}\nText\n{/template:GadgetTextDefaultTitle}\n\n\x3c!-- Attributes {content} --\x3e\n{template:GadgetText}\n<div class="text-widget-content"></div>\n<textarea id="text-widget-tpl" style="display:none">{content}</textarea>\n{/template:GadgetText}\n\n{template:GadgetTextIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWAQMAAADgs87LAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAADFJREFUeF6FyDEOACAMAkBWV3/lq5w7du7H+poqITqX5BIACYifkkU/m13aLx7jGjQvlkEeTw1lSDgAAAAASUVORK5CYII=\n{/template:GadgetTextIconUrl}\n\n{template:GadgetTextIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWAQMAAADgs87LAAAABlBMVEUAAAA3Nzes+U/hAAAAAXRSTlMAQObYZgAAADFJREFUeF6FyDEOACAMAkBWV3/lq5w7du7H+poqITqX5BIACYifkkU/m13aLx7jGjQvlkEeTw1lSDgAAAAASUVORK5CYII=\n{/template:GadgetTextIconSelectedUrl}\n');

  function Mo(a) {
    Z.call(this, a)
  }
  D(Mo, Z);
  B = Mo.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#Textcss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "Textcss");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetTextCSS"));
    a.append(c);
    this.ha(b, "Text" + this.O)
  };
  B.Rc = function (a) {
    if (a) {
      var b = a.querySelector(".text-widget-content");
      b ? (a = a.querySelector("#text-widget-tpl"),
        b.innerHTML = a.value.replace(/<\s*script([^>]*)>/g, "&lt;script$1&gt;").replace(/<\s*\/\s*script\s*>/g, "&lt;/script&gt;"),
        a.value = "") : this.Rb()
    }
  };
  B.M = function () {
    return this.C.title || this.template("GadgetTextDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetTextIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetTextIconSelectedUrl")
  };
  B.T = function () {
    return this.template("GadgetText", this.C)
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetTextListCSS}\n.gadget-textlist {\n  padding: 12px;\n  max-width: 320px;\n  min-width: 120px;\n}\n\n.gadget-textlist-item {\n  line-height: 14px;\n  padding: 8px;\n}\n\n{/template:GadgetTextListCSS}\n{template:GadgetTextListDefaultTitle}\nText List\n{/template:GadgetTextListDefaultTitle}\n\n\x3c!-- Attributes {links} --\x3e\n{template:GadgetTextList}\n<ul class="gadget-textlist">\n  {block:items}\n  {GadgetTextListItem}\n  {/block:items}\n</ul>\n{/template:GadgetTextList}\n\n{template:GadgetTextListItem}\n<li class="gadget-textlist-item">\n  {item}\n</li>\n{/template:GadgetTextListItem}\n\n{template:GadgetTextListIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAIUlEQVQoz2P4jwQYoOA/iYBh8BgyeMBowI4GLD0CFmQGAJeZHQCjUvPAAAAAAElFTkSuQmCC\n{/template:GadgetTextListIconUrl}\n\n{template:GadgetTextListIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAJ0lEQVQoz2MwNjb+D8MMUIAsRgxmGDyGDB4wGrCjAUuPgP3//z8DAG+r2iZzG/daAAAAAElFTkSuQmCC\n{/template:GadgetTextListIconSelectedUrl}\n');

  function No(a) {
    Z.call(this, a)
  }
  D(No, Z);
  B = No.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#textlistcss");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "textlistcss");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetTextListCSS"));
    a.append(c);
    this.ha(b, "TextList" + this.O)
  };
  B.Gc = function (a) {
    this.C = a;
    ao(this)
  };
  B.Rb = function () {
    this.enabled = !1;
    ao(this)
  };
  B.M = function () {
    return this.C.title || this.template("GadgetTextListDefaultTitle")
  };
  B.da = function () {
    return this.template("GadgetTextListIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetTextListIconSelectedUrl")
  };
  B.T = function () {
    return this.template("GadgetTextList", {
      items: this.C.items || []
    })
  };
  blogger.compileTemplate('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetTranslateCSS}\n.gadget-translate {\n  padding: 9px 13px;\n}\n{/template:GadgetTranslateCSS}\n{template:GadgetTranslateTitle}\nGoogle Translate\n{/template:GadgetTranslateTitle}\n\n\x3c!-- Attributes {suffix} --\x3e\n{template:GadgetTranslate}\n<div id="gadget-translate{suffix}" class="gadget-translate">\n</div>\n{/template:GadgetTranslate}\n\n{template:GadgetTranslateIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABvUlEQVRIx63WsWsUURDH8SRnJIQDLwTBNMZe8P6HFBamCWIrhHQ2MWihkEDKNGLl3yCxEMQqjZB/IJgihXbRNCIoAQPHyZmPzUQe6+7dvtsMDLtvZofv23n7fm8n0MV79NW3ftR0J+oa9rGF2Yya2ajZzwHBVEVuDo8xV5KbgixQct/BYuJLMZGlQrxTrM0F7dRco52moIX4OMr8LT7E/UIjUBK7gydoxfg6fuHhqNpcUAc/8DTGL3GC6UsFRXwDZ7iHHjbq1uaCruAoFv+o+DaX1bpreIEBTuO6HJt7kKEgg6jplu2jZ7E+3/Eo3mwVH41vB0XQbXzBJtolCjK2/SdBmMFqhVRV2efwoaB/oop2bEp4hckaoMPkmcNhoHGOidTWMR++XgkqtOdWkjut0bp+AJ6Hz1dNuBYIk/hTUv8GLXwNb0VsbNAM1nBeqL+LlWS8ErGRoKvYS2Hh3xJZurDjOPzauBHejtjxUFAy+73Cc70k/zpi25jGLt6F70ZseySoAtaL+DJ+RwsXcb+kSw8idz4SlIjqRUtuxnHeSzTsU0hV0X5GblALVPIjctZIgjJU/qCRqGaAuk2Oib+ZfjulBtlUHAAAAABJRU5ErkJggg==\n{/template:GadgetTranslateIconUrl}\n\n{template:GadgetTranslateIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABw0lEQVRIx62WvUoDQRSFY6IiIWAkCKZRe8Et8gYpLLQJYiuInU0ULRQUUqYRK59BYiGIVRohLxBMkcJ0URsRlICBJbJGz4UTGcbd7Ew2gY/duXfvnvnbM4nlcjkH3IEe+DGkxxonZvrDwzVwBpIWNUnW1GyEpIfxgNwc2JerTy4utVZCyn0aLCnk2ZG8Fk/rtbZCZcM1KkcVynJz+HED7nmfjSSkxFbBIUiwPQ8+wXZYra2QrNU7OGL7AryAqbEKMX4AumAduNI2rbUVmgRNLn5TH824pm4WnAMPdHjd4MftWTiIxxrH7zs65vq8gT2ObAc8WAjo1HWhFfAETkHKx0FG5p8F4X5GRhBgVUG0yFChP1OVUfCjlOQlmDAQaijPNIYJjXJMqBRBhhQDhbTpWVaSHYOp61HghGSCOmwkJFMIvn1ecC02BZ5JgrGRhWSD7IK+9oI1UFDaBcZChaZBVRUjr4otDXJtHn6ygRZIirH2UCGl91XtQVfJXzFWElsCFXBLKoyVQoUCxFzGxYa+OIVy0m76TNMWc/1QIcVUB1OyyOPcVTzskValC30w5xkJ+fwR6UayIAuXr0cyVQshJ8ox8Qty20EB8f+CcwAAAABJRU5ErkJggg==\n{/template:GadgetTranslateIconSelectedUrl}\n');

  function Oo(a) {
    Z.call(this, a)
  }
  D(Oo, Z);
  B = Oo.prototype;
  B.init = function (a, b) {
    this.ui = a;
    a = document.querySelector(v);
    var c = a.querySelector("#gadget-translate-css");
    c && c.remove();
    c = document.createElement(mc);
    c.setAttribute(Fb, "gadget-translate-css");
    c.setAttribute(q, gc);
    c.append(this.template("GadgetTranslateCSS"));
    a.append(c);
    this.ha(b, "Translate" + this.O)
  };
  B.ul = function () {
    var a = google.translate.TranslateElement;
    new a({
      pageLanguage: this.C.pageLanguage || "en",
      autoDisplay: tc,
      layout: this.C.layout && a.InlineLayout[this.C.layout]
    }, "gadget-translate" + this.O)
  };
  B.render = function (a) {
    if (this.Pb && this.enabled) {
      a && pd(a, this.T());
      window.googleTranslateElementInit = this.ul.bind(this);
      a = tl(Ja, {
        type: nc
      });
      var b = Cg(yg(new vg(wg, "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit")));
      a.src = Bg(b);
      ql(a);
      (b = document.querySelector(v)) && b.append(a)
    }
  };
  B.M = function () {
    return this.C.title || this.template("GadgetTranslateTitle")
  };
  B.da = function () {
    return this.template("GadgetTranslateIconUrl")
  };
  B.ca = function () {
    return this.template("GadgetTranslateIconSelectedUrl")
  };
  B.T = function () {
    return this.template("GadgetTranslate", {
      suffix: this.O
    })
  };
  Aj(Bj(), Ca, co);
  Aj(Bj(), "BloggerButton", lo);
  Aj(Bj(), Da, eo);
  Aj(Bj(), "BlogList", mo);
  Aj(Bj(), "Image", no);
  Aj(Bj(), "Label", oo);
  Aj(Bj(), "LinkList", po);
  Aj(Bj(), "PopularPosts", qo);
  Aj(Bj(), "Profile", ro);
  Aj(Bj(), "Stats", Ko);
  Aj(Bj(), "Subscribe", Lo);
  Aj(Bj(), "Text", Mo);
  Aj(Bj(), "TextList", No);
  Aj(Bj(), "Translate", Oo);

  function Po() {
    W.call(this);
    this.lk = this.bj.bind(this);
    this.mg = !1;
    this.Ce = [];
    this.zm = !blogger.ui().getSetting(vb)
  }
  D(Po, W);
  B = Po.prototype;
  B.Ta = function () {
    return {
      name: "classic",
      pageSize: 10,
      itemsPerAd: 3,
      animate: !0
    }
  };
  B.Ai = function () {
    return this.zm
  };
  B.Xa = function () {
    $i(this);
    blogger.ui().getSetting(vb) || this.ui.select()
  };
  B.Sc = function () {
    this.ui.current() || this.bj()
  };
  B.Ya = function (a) {
    var b = this;
    if (a) {
      var c = document.querySelector(pa),
        d = document.querySelectorAll(qa).length;
      a.forEach(function (e) {
        var f = b.template(Ga, e);
        f = qd(Qo(b, f));
        f.dataset.id = e.id;
        if (f) {
          b.settings.itemsPerAd && 0 == d++ % b.settings.itemsPerAd && (e = qd(b.template("Ad"))) && c.append(e);
          try {
            c.append(f)
          } catch (h) {}
        }
      });
      this.ui.headless() || Ro(this)
    }
  };

  function Ro(a) {
    var b = document.querySelector(pa);
    b && (a.mg || (window.addEventListener(cc, function () {
          clearTimeout(a.Qb);
          a.Qb = setTimeout(a.Wk.bind(a), 250)
        }),
        a.mg = !0),
      b.querySelectorAll("img").forEach(function (c) {
        var d = c.dataset.src;
        if (d || !c.complete)
          So(c) ? d && (delete c.dataset.src,
            sd(c, d)) : (d || (d = c.getAttribute(x),
              c.setAttribute(kb, d)),
            sd(c, lb),
            T(c, "deferred"),
            a.Ce.push(c))
      }))
  }
  B.Wk = function () {
    this.Ce = this.Ce.filter(function (a) {
      if (So(a)) {
        var b = document.createElement("img");
        b.onload = function () {
          sd(a, a.dataset.src);
          delete a.dataset.src;
          U(a, "deferred");
          (new $m(a, .6, {
            opacity: 0
          }, {
            opacity: 1
          }, [{
            Pd: Pb,
            duration: .6,
            timing: "ease-in-out",
            delay: 0
          }])).rc()
        };
        sd(b, a.dataset.src);
        return !1
      }
      return !0
    })
  };

  function So(a) {
    var b = To(),
      c = Uo(a);
    c.top -= 400;
    c.right += 400;
    c.bottom += 400;
    c.left -= 400;
    if (!(c.top <= b.bottom && c.right >= b.left && c.bottom >= b.top && c.left <= b.right))
      return !1;
    for (; a; a = a.parentElement)
      if (getComputedStyle(a).display == Nb || "0" == getComputedStyle(a).opacity)
        return !1;
    return !0
  }

  function Qo(a, b) {
    return a.ui.headless() ? b : xd(b, {
      tag: "img",
      attr: x,
      replace: function (c) {
        return "img" == c.name && c.attr(x) ? (c.attr(kb, c.attr(x)),
          delete c.attributes.src,
          c.encode()) : c.Ra
      }
    })
  }
  B.Wa = function (a) {
    this.Ba(!0);
    var b = a.map(function (d) {
      return d.id
    });
    a = document.querySelector(pa);
    T(a, r);
    Array.from(a.children).forEach(function (d) {
      V(d, r, b.includes(d.getAttribute(ib)))
    });
    if (this.settings.animate) {
      var c = Array.from(a.children);
      a = c.filter(function (d) {
        return !d.matches(ja)
      });
      c = c.filter(function (d) {
        return d.matches(ja)
      });
      a.forEach(function (d) {
        Vo(d)
      });
      c.forEach(function (d) {
        Wo(d)
      })
    }
    window.scroll({
      top: 0,
      behavior: ic
    })
  };

  function Xo(a, b, c) {
    var d = {
      height: "0px",
      "margin-top": "0px",
      "margin-bottom": "0px",
      "padding-top": "0px",
      "padding-bottom": "0px"
    };
    c = {
      height: c.height + Xb,
      "margin-top": c.marginTop + Xb,
      "margin-bottom": c.marginBottom + Xb,
      "padding-top": c.paddingTop + Xb,
      "padding-bottom": c.paddingBottom + Xb
    };
    return new $m(a, .2, b ? d : c, b ? c : d, [{
      Pd: "all",
      duration: .2,
      timing: "linear",
      delay: 0
    }])
  }

  function Yo(a) {
    return {
      height: parseFloat(Al(a, Cb)),
      marginTop: parseFloat(Al(a, Lb)),
      marginBottom: parseFloat(Al(a, "margin-height")),
      paddingTop: parseFloat(Al(a, "padding-top")),
      paddingBottom: parseFloat(Al(a, "padding-height"))
    }
  }

  function Vo(a) {
    if (a.style.display != Nb) {
      var b = Yo(a);
      0 === b.height || a.dataset.height || (a.dataset.height = b.height,
        a.dataset.marginTop = b.marginTop,
        a.dataset.marginBottom = b.marginBottom,
        a.dataset.paddingTop = b.paddingTop,
        a.dataset.paddingBottom = b.paddingBottom);
      b = Xo(a, !1, b);
      em(b, "end", function () {
        Gl(a, !1)
      });
      b.rc()
    }
  }

  function Wo(a) {
    var b = Yo(a);
    if (0 === b.height || b.height !== a.dataset.height)
      0 === b.height && (b.height = a.dataset.height,
        b.marginTop = a.dataset.marginTop,
        b.marginBottom = a.dataset.marginBottom,
        b.paddingTop = a.dataset.paddingTop,
        b.paddingBottom = a.dataset.paddingBottom),
      Gl(a, !0),
      a = Xo(a, !0, b),
      em(a, "end", function () {
        window.dispatchEvent(new CustomEvent(cc))
      }),
      a.rc()
  }
  B.La = function () {
    var a = document.querySelector(pa);
    U(a, r);
    this.settings.animate ? Array.from(a.children).forEach(function (b) {
      U(b, r);
      Wo(b)
    }) : Array.from(a.children).forEach(function (b) {
      U(b, r)
    });
    this.Ba(!1)
  };
  B.Tb = function (a) {
    if (a)
      if (this.ui.getSetting(Ub))
        this.ui.notify(Bc, a);
      else {
        var b = document.querySelector(oa + a.id + '"]');
        if (b) {
          if (!this.De) {
            var c = document.querySelector(".item[data-id]");
            this.De = c ? Uo(c) : {
              top: 0,
              left: 0
            }
          }
          c = Uo(b);
          window.scroll({
            top: c.top - this.De.top,
            left: c.left - this.De.left,
            behavior: ic
          });
          this.ui.viewItem(a, b)
        }
        this.Ka()
      }
  };
  B.bj = function () {
    var a = To();
    a = (a.top + a.bottom) / 2;
    for (var b = document.querySelectorAll(qa), c = 0, d; d = b[c]; c++)
      if (Uo(d).top < a)
        var e = d;
      else
        break;
    e && (a = this.ui.find(e.dataset.id)) && a != this.ui.current() && (this.ui.select(a, !1),
      this.ui.viewItem(a, e))
  };
  B.Qi = function () {
    clearTimeout(this.gk);
    this.gk = setTimeout(this.lk, 400)
  };
  B.ef = function () {};

  function To() {
    return {
      top: window.pageYOffset,
      right: window.pageXOffset + window.innerWidth,
      bottom: window.pageYOffset + window.innerHeight,
      left: window.pageXOffset
    }
  }

  function Uo(a) {
    var b = a.getBoundingClientRect();
    return {
      top: b.top + window.pageYOffset,
      right: b.left + window.pageXOffset + parseFloat(getComputedStyle(a, null).width),
      bottom: b.top + window.pageYOffset + parseFloat(getComputedStyle(a, null).height),
      left: b.left + window.pageXOffset
    }
  };

  function Zo(a, b) {
    var c = $o[b];
    if (!c)
      return null;
    a = ap(c, a, b);
    a.sort(function (d, e) {
      return d.rb || e.rb ? d.rb ? 1 : -1 : c.compare(d, e)
    });
    return a
  }

  function ap(a, b, c) {
    for (var d = [], e, f = 0; e = b[f]; f++)
      if ("tag" == c)
        for (var h = a.wk(e), k, l = 0; k = h[l]; l++) {
          for (var m = !0, n, u = 0; n = d[u]; u++)
            if (n.caption == k.caption) {
              m = !1;
              bp(n, f, e);
              break
            }
          m && (d.push(k),
            bp(k, f, e))
        }
    else {
      h = null;
      for (l = 0; k = d[l]; l++)
        if (a.Hd(k, e)) {
          h = k;
          break
        }
      h || (h = a.Oe(e),
        d.push(h));
      bp(h, f, e)
    }
    return d
  }
  var $o = {
    author: {
      Hd: function (a, b) {
        return b.author ? a.attr("value") == b.author.name : a.rb
      },
      Oe: function (a) {
        return a.author ? new cp(a.author.name, {
          type: "author",
          value: a.author.name
        }) : new cp(vc, void 0, !0)
      },
      compare: function (a, b) {
        return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
      }
    },
    tag: {
      Hd: function (a, b) {
        if (b.tags && 0 < b.tags.length) {
          for (var c = 0; c < b.tags.length; c++)
            if (a.attr("value") == b.tags[c])
              return !0;
          return !1
        }
        return a.rb
      },
      wk: function (a) {
        var b = [];
        a.tags && 0 < a.tags.length ? a.tags.forEach(function (c) {
          b.push(new cp(c, {
            type: "tag",
            value: c
          }))
        }) : b.push(new cp("No labels", void 0, !0));
        return b
      },
      compare: function (a, b) {
        return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
      }
    },
    published: {
      Hd: function (a, b) {
        return b.published ? a.attr("year") == b.published.getFullYear() && a.attr("month") == b.published.getMonth() : a.rb
      },
      Oe: function (a) {
        return a.published ? new cp("January February March April May June July August September October November December".split(" ")[a.published.getMonth()] + " " + a.published.getFullYear(), {
          type: Wb,
          year: a.published.getFullYear(),
          month: a.published.getMonth()
        }) : new cp(vc, void 0, !0)
      },
      compare: function (a, b) {
        return a.attr("year") == b.attr("year") ? a.attr("month") < b.attr("month") ? 1 : -1 : a.attr("year") < b.attr("year") ? 1 : -1
      }
    },
    service: {
      Hd: function (a, b) {
        return (b = b instanceof Pi && "Blogger") ? a.attr("value") == b : a.rb
      },
      Oe: function (a) {
        return (a = a instanceof Pi && "Blogger") ? new cp(a, {
          type: "service",
          value: a
        }) : new cp(vc, void 0, !0)
      },
      compare: function (a, b) {
        return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
      }
    }
  };

  function cp(a, b, c) {
    c = void 0 === c ? !1 : c;
    this.caption = a;
    this.hk = [];
    this.jg = Object.assign({}, b);
    this.rb = !!c
  }
  cp.prototype.attr = function (a, b) {
    null != b && (this.jg[a] = b);
    return this.jg[a]
  };

  function bp(a, b, c) {
    a.items().push({
      index: b,
      item: c
    })
  }
  cp.prototype.values = function () {
    return this.items().map(function (a) {
      return a.item
    })
  };
  cp.prototype.items = function () {
    return this.hk
  };
  cp.prototype.count = function () {
    return this.items().length
  };

  function dp() {
    W.call(this)
  }
  D(dp, W);
  B = dp.prototype;
  B.Ta = function () {
    return {
      name: "flipcard",
      size: 125,
      groupedSize: 50,
      spacing: 5,
      groupSpacing: 25,
      groupedSizeTablet: 125,
      groupSpacingTablet: 60,
      labelGroupSpacing: 0,
      labelGroupSpacingTablet: 30,
      offset: 0,
      pageSize: 25,
      randomizeFlip: !1,
      animateLoad: !0
    }
  };
  B.scope = function (a) {
    a.scope(hc, this.settings.size);
    this.settings.randomizeFlip && a.scope("setting:direction", ["flipLeft", "flipRight", "flipUp", "flipDown"][Math.floor(4 * Math.random())])
  };
  B.Ec = function () {
    this.ui.addModule(Ia)
  };
  B.Xa = function () {
    this.ui.headless() && (this.settings.animateLoad = !1);
    $i(this);
    ep(this);
    (this.qd = document.querySelector("#controls")) && this.qd.addEventListener(db, this.ql.bind(this));
    this.ui.select()
  };
  B.Ya = function (a) {
    var b = this;
    if (a) {
      var c = document.querySelector(pa),
        d = c.querySelectorAll(g).length,
        e = d,
        f = [];
      a.forEach(function (h, k) {
        var l = qd(b.template(Ga, h));
        l.dataset.id = h.id;
        h = fp(b, d++);
        var m = b.settings.size;
        Bl(l, h.left, h.top);
        Dl(l, m, m);
        b.settings.animateLoad && (h.left = h.left + window.innerWidth + m * k,
          Bl(l, h.left, h.top),
          T(l, "new"),
          f.push(l));
        c.append(l)
      });
      this.settings.animateLoad && setTimeout(function () {
        f.forEach(function (h, k) {
          U(h, "new");
          k = fp(b, e + k);
          Bl(h, k.left, k.top)
        })
      }, 0)
    }
  };
  B.Jd = function () {
    return this.settings.scrollBuffer >= fp(this, document.querySelectorAll(qa).length).top - window.innerHeight - window.pageYOffset
  };

  function ep(a) {
    a.settings.columnWidth = a.settings.size + a.settings.spacing;
    a.settings.rowHeight = a.settings.size + a.settings.spacing;
    a.settings.numColumns = Math.max(1, Math.floor(document.querySelector(pa).clientWidth / a.settings.columnWidth))
  }
  B.Ld = function () {
    ep(this);
    clearTimeout(this.Jc);
    this.Jc = setTimeout(this.ik.bind(this), 500)
  };
  B.ik = function () {
    this.Ob ? (Array.from(document.querySelectorAll(".cloned")).forEach(function (a) {
        a.remove()
      }),
      gp(this)) : hp(this)
  };

  function fp(a, b) {
    var c = a.settings.numColumns,
      d = b % c,
      e = d * a.settings.columnWidth;
    b = Math.floor(b / c) * a.settings.rowHeight;
    d % 2 && (b += a.settings.offset);
    return {
      left: e,
      top: b
    }
  }
  B.Wa = function (a) {
    this.Ee = !0;
    ip(this);
    var b = a.map(function (c) {
      return c.id
    });
    document.querySelectorAll(g).forEach(function (c) {
      V(c, r, !b.includes(c.getAttribute(ib)))
    });
    window.scroll({
      top: 0,
      behavior: ic
    });
    jp(this)
  };
  B.La = function () {
    document.querySelectorAll(g).forEach(function (a) {
      U(a, r)
    });
    this.Ee = !1;
    ip(this);
    jp(this)
  };
  B.ql = function (a) {
    var b = a.target.getAttribute("data-category");
    b && b != this.Ye && this.qd && (this.qd.querySelectorAll(".group").forEach(function (c) {
        U(c, fc)
      }),
      (a = a.target.closest(".group")) && T(a, fc),
      this.Ye = b,
      jp(this))
  };

  function jp(a) {
    document.querySelectorAll(".cloned").forEach(function (d) {
      Bl(d, 0, 0);
      Y(d, Pb, "0");
      d.addEventListener("transitionend", function () {
        d.remove()
      })
    });
    var b = Array.from(document.querySelectorAll(g)).filter(function (d) {
        return !d.matches(".ad")
      }),
      c = a.data.items().map(function (d, e) {
        if (!b[e].matches(ja))
          return d
      });
    a.Ob = Zo(c, a.Ye);
    ip(a);
    (c = document.querySelector("#main")) && V(c, "grouped", null != a.Ob);
    for (c = document.querySelector("#labels"); c.firstChild;)
      c.removeChild(c.firstChild);
    a.Ob ? gp(a) : hp(a)
  }

  function ip(a) {
    a.Ba(!(!a.Ob && !a.Ee))
  }

  function hp(a) {
    Array.from(document.querySelectorAll(g)).filter(function (b) {
      return !b.matches(ja)
    }).forEach(function (b, c) {
      c = fp(a, c);
      var d = a.settings.size;
      U(b, "grouped");
      Bl(b, c.left, c.top);
      Dl(b, d, d)
    })
  }

  function gp(a) {
    var b = a.data.getSettings().is_tablet,
      c = b ? a.settings.groupedSizeTablet : a.settings.groupedSize,
      d = b ? a.settings.groupSpacingTablet : a.settings.groupSpacing,
      e = b ? a.settings.labelGroupSpacingTablet : a.settings.labelGroupSpacing,
      f = c + a.settings.spacing,
      h = c + a.settings.spacing,
      k = Math.max(1, Math.floor(document.querySelector(pa).clientWidth / f)),
      l = 0,
      m = 0;
    if (!b) {
      for (var n = 0; m = a.Ob[n]; n++)
        l = Math.max(l, m.count());
      m = Math.max(1, Math.ceil(l / k))
    }
    l = Array.from(document.querySelectorAll(g)).filter(function (bb) {
      return !bb.matches(ja)
    });
    for (n = document.querySelector("#labels"); n.firstChild;)
      n.removeChild(n.firstChild);
    for (var u = 0, y = 0, z = {}, P = document.querySelector(ba), K, ac = 0; K = a.Ob[ac]; ac++) {
      for (var ta = void 0, ea = {}, qc = 0; ta = K.items()[qc]; ea = {
          Na: ea.Na,
          Z: ea.Z
        },
        qc++) {
        ea.Z = {
          left: (b ? qc % k : Math.floor(qc / m)) * f,
          top: (u + (b ? Math.floor(qc / k) : qc % m)) * h + y + e,
          width: c,
          height: c
        };
        var rc = l[ta.index];
        T(rc, "grouped");
        "tag" == a.Ye ? z[ta.index] ? (ea.Na = rc.cloneNode(!0),
          T(ea.Na, "cloned"),
          Y(ea.Na, Pb, "0"),
          P.append(ea.Na),
          setTimeout(function (bb) {
            return function () {
              Bl(bb.Na, bb.Z.left, bb.Z.top);
              Dl(bb.Na, bb.Z.width, bb.Z.height);
              Y(bb.Na, Pb, "1")
            }
          }(ea), 0)) : (z[ta.index] = !0,
          Bl(rc, ea.Z.left, ea.Z.top),
          Dl(rc, ea.Z.width, ea.Z.height)) : (Bl(rc, ea.Z.left, ea.Z.top),
          Dl(rc, ea.Z.width, ea.Z.height))
      }
      ta = b ? Math.ceil(K.count() / k) : Math.min(K.count(), m);
      K = qd(a.template("GroupLabel", {
        Tag: Oi(a.ui.localize(K.caption)),
        TagAsClass: od(K.caption),
        TagURL: K.url
      })) || null;
      Bl(K, 0, u * h + y);
      Y(K, "position", "absolute");
      Y(K, "max-height", "" + ta * h + Xb);
      K && n.append(K);
      u += ta;
      y += d
    }
  }
  B.Sc = function () {
    this.Ee && this.La();
    jp(this)
  };

  function kp() {
    W.call(this)
  }
  D(kp, W);
  B = kp.prototype;
  B.Ta = function () {
    return {
      name: "magazine",
      imgSize: 200,
      imgSizeLead: 500,
      pageSize: 10,
      numFeature: 4
    }
  };
  B.scope = function (a) {
    1 == a.data("Number") ? (a.scope("column:lead", !0),
      a.scope(hc, this.settings.imgSizeLead)) : (a.data("Number") <= this.settings.numFeature + 1 ? a.scope("column:feature", !0) : a.scope("column:fold", !0),
      a.scope(hc, this.settings.imgSize))
  };
  B.Ec = function () {
    this.ui.addModule(Ia)
  };
  B.Xa = function () {
    $i(this);
    this.ui.select()
  };
  B.Ya = function (a) {
    var b = this;
    if (a) {
      var c = document.querySelectorAll(g).length,
        d = document.querySelector("#lead"),
        e = document.querySelector("#feature"),
        f = document.querySelector("#fold");
      a.forEach(function (h, k) {
        var l = qd(b.template(Ga, h));
        l.dataset.id = h.id;
        l && (0 == c + k ? d.append(l) : c + k <= b.settings.numFeature ? e.append(l) : f.append(l))
      })
    }
  };
  B.Wa = function (a, b) {
    var c = a.map(function (d) {
      return d.id
    });
    document.querySelectorAll(g).forEach(function (d) {
      V(d, r, 0 <= c.indexOf(d.dataset.id))
    });
    if (this.bg != b) {
      if (a = document.querySelector(ma))
        a = a.getBoundingClientRect().top - document.querySelector(ba).getBoundingClientRect().top,
        window.scroll({
          top: a,
          behavior: ic
        });
      this.bg = b
    }
  };
  B.La = function () {
    document.querySelectorAll(g).forEach(function (a) {
      U(a, r)
    });
    delete this.bg
  };

  function lp(a, b) {
    this.va = a;
    this.blockSize = b;
    this.L = [];
    this.G = []
  }

  function mp(a, b, c) {
    a = a.L[b];
    if (void 0 === c) {
      for (c = 0; c < a.length; c++)
        if (null == a[c])
          return !1;
      return !0
    }
    return null != a[c]
  }

  function np(a, b) {
    if (b.height && !(0 >= b.height)) {
      for (; a.L.length < b.D + b.height;) {
        for (var c = a.L, d = c.push, e = a, f = [], h = 0; h < e.va; h++)
          f.push(null);
        d.call(c, f)
      }
      null == b.id && (b.id = a.G.length,
        a.G.push(b));
      for (c = 0; c < b.height; c++)
        for (d = a.L[b.D + c],
          e = 0; e < b.width; e++)
          d[b.column + e] = b.id
    }
  }
  lp.prototype.remove = function (a) {
    a = this.G[a];
    for (var b = 0; b < a.height; b++)
      for (var c = this.L[a.D + b], d = 0; d < a.width; d++)
        c[a.column + d] = null
  };

  function op(a) {
    for (var b = 0; b < a.L.length; b++)
      for (var c = 0; c < a.va; c++)
        a.L[b][c] = null;
    for (b = 0; b < a.G.length; b++)
      np(a, a.G[b])
  }

  function pp(a) {
    op(a);
    var b;
    do {
      for (b = !1; qp(a);)
        op(a),
        b = !0;
      for (; rp(a);)
        op(a),
        b = !0
    } while (b)
  }

  function qp(a) {
    for (var b = !1, c = a.L.length - 1; 0 <= c; c--) {
      for (var d = !0, e = 0; e < a.va; e++)
        if (mp(a, c, e)) {
          d = !1;
          break
        }
      if (d)
        for (d = 0; d < a.G.length; d++)
          e = a.G[d],
          e.D > c && (e.D--,
            b = !0)
    }
    return b
  }

  function rp(a) {
    for (var b = !1, c = 0; c < a.L.length; c++)
      for (var d = 0; d < a.va; d++) {
        a: {
          var e = a;
          for (var f = c, h = d, k = null, l = null != f ? f : 0; l < e.L.length; l++) {
            for (var m = k ? k.right + 1 : e.va, n = k ? k.left : 0; n < m; n++)
              if (!mp(e, l, n))
                if (k)
                  k.D == l && (k.width++,
                    k.right++);
                else {
                  if (!f || f != l || null != h && h != n)
                    k = {
                      D: l,
                      top: l,
                      bottom: l,
                      column: n,
                      left: n,
                      right: n,
                      width: 1,
                      height: 1
                    }
                }
            else if (k) {
              e = k;
              break a
            }
            k && k.D != l && (k.height++,
              k.bottom++)
          }
          e = k
        }
        if (e) {
          k = f = null;
          for (h = e.column; h < a.va; h++) {
            a: {
              k = e.D + e.height;
              if (null != k && null != h)
                for (; k < a.L.length; k++)
                  if (l = a.G[a.L[k][h]]) {
                    k = l;
                    break a
                  }
              k = void 0
            }
            if (k && (l = k.position(),
                l.left >= e.left && l.right <= e.right)) {
              f = k;
              break
            }
          }
          f && (f = !1,
            k && 0 < k.id && (f = a.G[k.id - 1].position(),
              f = f.top == e.top ? e.right < f.left : f.top > e.top),
            f || (a.remove(k.id),
              k.D = e.D,
              np(a, k),
              b = !0))
        }
      }
    return b
  }

  function sp(a, b, c) {
    b = a.G[b];
    if (b.height != c || b.width != a.va) {
      b.Vb || (b.Vb = {
        width: b.width,
        height: b.height,
        D: b.D,
        column: b.column
      });
      for (var d = a.va, e = -1, f = 0; f < b.id; f++)
        e = Math.max(a.G[f].position().bottom + 1, e);
      e < b.D && (e = b.D);
      f = c - b.height;
      for (var h = b.position(), k = h.top; k <= h.bottom; k++)
        for (var l = 0; l < a.va; l++) {
          var m = a.G[a.L[k][l]];
          m && m.id > b.id && (f = Math.max(f, c - (m.D - b.D)))
        }
      f += e - b.D;
      b.D = e;
      b.width = d;
      b.height = c;
      b.column = 0;
      for (c = b.id + 1; c < a.G.length; c++)
        a.G[c].D += f;
      pp(a)
    }
  }

  function tp(a, b, c, d) {
    this.width = a;
    this.height = b;
    this.D = c;
    this.column = d
  }
  tp.prototype.position = function () {
    return {
      top: this.D,
      right: this.column + this.width - 1,
      bottom: this.D + this.height - 1,
      left: this.column
    }
  };

  function up() {
    W.call(this);
    this.ad = !1
  }
  D(up, W);
  B = up.prototype;
  B.Ta = function () {
    return {
      name: "mosaic",
      size: 160,
      imgSize: 320,
      minColumns: 2,
      maxColumns: 20,
      maxWidth: 2,
      maxHeight: 2,
      margin: 0,
      spacing: 5,
      animateTimer: 700,
      measureInterval: 1E3,
      autoCollapse: !0,
      pageSize: 10
    }
  };
  B.scope = function (a) {
    a.scope(hc, this.settings.size * Math.max(this.settings.maxWidth, this.settings.maxHeight))
  };
  B.Xa = function () {
    this.ui.headless() && (this.settings.animateTimer = 0);
    $i(this);
    document.querySelector(ba).focus();
    vp(this);
    this.ui.select()
  };
  B.Ld = function () {
    clearTimeout(this.Jc);
    Xi(document.querySelector($a), Ua) || (this.Jc = setTimeout(this.Vl.bind(this), 500))
  };
  B.Ya = function (a) {
    var b = this;
    if (a) {
      var c = [],
        d = 0,
        e = this.settings.spacing;
      a.forEach(function (h) {
        var k = wp(b),
          l = qd(b.template(Ga, h)),
          m = xp(b, k);
        l.dataset.id = h.id;
        l.dataset.qk = k.id;
        Dl(l, m.width, m.height);
        Bl(l, m.left, m.top);
        d = Math.max(d, m.top + m.height + 2 * e);
        h && c.push(l)
      });
      a = this.X.Jb;
      a = (a + 1) * e + a * this.X.size;
      if (0 < c.length) {
        var f = document.querySelector(pa);
        f.append.apply(f, Lc(c));
        Dl(f, a, d)
      }
    }
  };

  function yp(a, b) {
    a = qd(a.template("Post", b));
    a.dataset.id = b.id;
    return a
  }
  B.Vl = function () {
    var a = document.querySelector(na);
    zp(this);
    Ap(this);
    a && (a = this.ui.find(a.dataset.id),
      this.Tb(a));
    this.Ka()
  };

  function Ap(a) {
    var b = Bp(a),
      c = !a.X || a.X.Jb != b.Jb;
    a.X = b;
    c && vp(a);
    Cp(a)
  }

  function Cp(a) {
    for (var b = Array.from(document.querySelectorAll(g)).filter(function (k) {
        return !k.matches(ja)
      }), c = a.settings.spacing, d = 0, e, f = 0; e = a.ub.G[f]; f++) {
      var h = b[f];
      e = xp(a, e);
      Dl(h, e.width, e.height);
      Bl(h, e.left, e.top);
      d = Math.max(d, e.top + e.height + 2 * c)
    }
    b = a.X.Jb;
    Dl(document.querySelector(pa), (b + 1) * c + b * a.X.size, d)
  }

  function Dp(a, b) {
    if (!b)
      return null;
    if (a.ad)
      if (b) {
        a = 0;
        for (b = b.previousSibling; b; b = b.previousSibling)
          b.matches(ja) || a++;
        b = a
      } else
        b = 0;
    else
      b = b.dataset.qk;
    return b
  }
  B.el = function () {
    if (!Xi(document.querySelector($a), Ua)) {
      var a = document.querySelector(na);
      if (a) {
        var b = Dp(this, a);
        if (null != b) {
          var c = -15;
          Array.from(a.children).forEach(function (d) {
            c += d.offsetHeight
          });
          a = Math.ceil(c / (this.settings.spacing + this.X.size));
          this.ub.G[b].height != a && (sp(this.ub, b, a),
            Ep(this),
            Cp(this))
        }
      }
    }
  };

  function zp(a) {
    clearInterval(a.fl);
    document.querySelectorAll(na).forEach(function (b) {
      var c = Dp(a, b);
      U(b, Rb);
      (b = b.querySelector(".article")) && b.remove();
      b = a.ub;
      var d = b.G[c];
      d.column = d.Vb.column;
      c = d.Vb.width;
      var e = d.Vb.height;
      d = b.G[d.id];
      if (d.height != e || d.width != b.width) {
        d.Vb || (d.Vb = {
          width: d.width,
          height: d.height,
          D: d.D,
          column: d.column
        });
        for (var f = -1, h = 0; h < d.id; h++)
          f = Math.max(b.G[h].position().bottom + 1, f);
        f < d.D && (f = d.D);
        h = e - d.height;
        for (var k = d.position(), l = k.top; l <= k.bottom; l++)
          for (var m = 0; m < b.va; m++) {
            var n = b.G[b.L[l][m]];
            n && n.id > d.id && (h = Math.max(h, e - (n.D - d.D)))
          }
        h += f - d.D;
        d.D = f;
        d.width = c;
        d.height = e;
        for (c = d.id + 1; c < b.G.length; c++)
          b.G[c].D += h;
        pp(b)
      }
    });
    Ep(a)
  }

  function Fp(a, b) {
    var c = Dp(a, b),
      d = a.ui.find(b.dataset.id);
    if (d) {
      var e = Gp(a, d) + 5;
      sp(a.ub, c, Math.ceil(e / (a.settings.spacing + a.X.size)));
      Ep(a);
      c = yp(a, d);
      T(b, Rb);
      b.querySelectorAll(".article").forEach(function (f) {
        for (; f.firstChild;)
          f.removeChild(f.firstChild)
      });
      try {
        b.append(c)
      } catch (f) {
        try {
          b.append(c)
        } catch (h) {
          a.log(Fa)
        }
      }
      a.fl = setInterval(a.el.bind(a), a.settings.measureInterval);
      a.ui.viewItem(d, c);
      a.ui.updated()
    }
  }

  function Ep(a) {
    T(document.querySelector($a), Ua);
    clearTimeout(a.nk);
    a.nk = setTimeout(function () {
      U(document.querySelector($a), Ua)
    }, a.settings.animateTimer)
  }
  B.Tb = function (a) {
    a = document.querySelector(oa + a.id + '"]');
    var b = !Xi(a, Rb);
    this.settings.autoCollapse && zp(this);
    b ? (Fp(this, a),
      Cp(this),
      Hp(this, a)) : this.ui.clearSelection()
  };
  B.Mi = function () {
    var a = document.querySelector(na);
    zp(this);
    Ap(this);
    Hp(this, a)
  };

  function Hp(a, b) {
    b = Dp(a, b);
    if (null != b) {
      b = xp(a, a.ub.G[b]);
      var c = document.querySelector("#main").getBoundingClientRect().top + window.pageYOffset;
      c -= document.querySelector("#header .header-bar").getBoundingClientRect().height;
      window.scroll({
        top: b.top - a.settings.spacing + c,
        behavior: a.ui.headless() ? "auto" : ic
      })
    }
  }

  function vp(a) {
    a.X || (a.X = Bp(a));
    a.ub = new lp(a.X.Jb, a.X.size);
    if (a.data.items() && a.data.items().length)
      for (var b = a.ad ? Array.from(document.querySelectorAll(g)).filter(function (d) {
          return !d.matches(ja)
        }).length : a.data.items().length, c = 0; c < b; c++)
        wp(a)
  }

  function wp(a) {
    var b = a.ub;
    var c = b.L.length;
    for (var d = c - 1; 0 <= d && !mp(b, d); d--)
      c = d;
    if (c == b.L.length)
      c = {
        D: c,
        column: 0,
        width: b.va
      };
    else {
      d = b.L[c];
      for (var e = -1, f = 0, h = 0; h < d.length; h++)
        if (!mp(b, c, h))
          0 > e && (e = h),
          f++;
        else if (0 <= e)
        break;
      c = 0 <= e ? {
        D: c,
        column: e,
        width: f
      } : void 0
    }
    a = new tp(Math.min(Math.floor(Math.random() * a.settings.maxWidth) + 1, c.width), Math.floor(Math.random() * a.settings.maxHeight) + 1, c.D, c.column);
    np(b, a);
    return a
  }

  function Bp(a) {
    var b = document.querySelector("#main").clientWidth - 2 * a.settings.margin,
      c = Math.floor(b / a.settings.size);
    b - (c + 1) * a.settings.spacing / c > a.settings.size && c++;
    c = Math.max(c, a.settings.minColumns);
    c = Math.min(c, a.settings.maxColumns);
    return {
      size: Math.floor((b - (c + 1) * a.settings.spacing) / c),
      Jb: c
    }
  }

  function Gp(a, b) {
    var c = document.querySelector("#virtualWall");
    c && c.remove();
    c = document.createElement(ob);
    c.setAttribute(Fb, "virtualWall");
    var d = document.createElement(ob);
    T(d, "virtualBrick");
    c.append(d);
    document.querySelector($a).append(c);
    var e = a.X.Jb;
    e = a.X.size * e + (e - 1) * a.settings.spacing;
    b = yp(a, b);
    d.style.width = Cl(e, !0);
    try {
      d.append(b)
    } catch (f) {
      try {
        d.append(b)
      } catch (h) {
        a.log(Fa)
      }
    }
    a = El(b).height - 20;
    c.remove();
    return a
  }

  function xp(a, b) {
    var c = a.X.size;
    a = a.settings.spacing;
    return {
      width: c * b.width + (b.width - 1) * a,
      height: c * b.height + (b.height - 1) * a,
      left: b.column * (c + a) + a,
      top: b.D * (c + a) + a
    }
  }
  B.Wa = function (a) {
    this.Ba(!0);
    zp(this);
    this.ad = !0;
    var b = a.map(function (c) {
      return c.id
    });
    document.querySelectorAll(g).forEach(function (c) {
      V(c, r, !b.includes(c.dataset.id))
    });
    Ap(this);
    window.scroll({
      top: 0,
      behavior: ic
    })
  };
  B.La = function () {
    zp(this);
    document.querySelectorAll(g).forEach(function (a) {
      U(a, r)
    });
    Ap(this);
    this.ad = !1;
    this.Ba(!1)
  };
  B.ef = function (a) {
    var b = a.target.closest(g);
    if (b) {
      var c = b.dataset.id;
      if ((!Xi(b, Rb) || a.target.matches(".item, .article")) && c && !a.metaKey)
        return a.stopPropagation(),
          a.preventDefault(),
          this.ui.select(c, b),
          !1
    }
  };

  function Ip() {
    W.call(this)
  }
  D(Ip, W);
  B = Ip.prototype;
  B.Ta = function () {
    return {
      name: "sidebar",
      imgSize: 30,
      tabsVisible: 5
    }
  };
  B.scope = function (a) {
    a.scope(hc, this.settings.imgSize)
  };
  B.Xa = function () {
    this.ui.headless() && (this.settings.scrollSpeed = 0);
    $i(this);
    var a = document.querySelector(fa);
    a && (a.addEventListener("wheel", this.bm.bind(this)),
      Y(a, "top", document.querySelector(ba).getBoundingClientRect().top + window.pageYOffset + Xb));
    Id && Y(a, "overflow-y", "auto");
    this.ui.select()
  };
  B.Oi = function (a) {
    var b = this;
    if (!document.querySelector(ba).children.length && a && a.length) {
      var c = a[0].id;
      setTimeout(function () {
        b.ui.select(c, !1);
        b.Tb(b.ui.current())
      }, 0)
    }
  };
  B.Ya = function (a) {
    var b = this;
    if (a) {
      var c = document.querySelector(ha);
      a.forEach(function (d) {
        var e = qd(b.template(Ga, d));
        e.dataset.id = d.id;
        c.append(e)
      })
    }
  };
  B.Sc = function () {
    Jp(this)
  };
  B.Tb = function (a) {
    -1 != this.data.items().indexOf(a) && (Kp(this, a),
      Jp(this),
      Lp(this),
      this.Ka())
  };

  function Kp(a, b) {
    var c = qd(a.template("Post", b));
    try {
      for (var d = document.querySelector(ba); d.firstChild;)
        d.removeChild(d.firstChild);
      d.append(c)
    } catch (f) {
      try {
        for (var e = document.querySelector(ba); e.firstChild;)
          e.removeChild(e.firstChild);
        e.append(c)
      } catch (h) {
        a.log(Fa)
      }
    }
    setTimeout(function () {
      window.scroll({
        top: 0,
        behavior: ic
      })
    }, 0);
    a.ui.viewItem(b, c);
    a.ui.updated()
  }

  function Jp(a) {
    document.querySelectorAll("#sidebar .item").forEach(function (b) {
      U(b, fc)
    });
    (a = a.ui.current() && a.ui.current().id) && (a = document.querySelector('#sidebar .item[data-id="' + a + '"]')) && T(a, fc)
  }
  B.bm = function (a) {
    a.preventDefault();
    var b = document.querySelector(ha);
    a = parseInt(getComputedStyle(b, null).marginTop, 10) + -1.25 * a.deltaY;
    var c = b.querySelectorAll(g);
    0 < c.length && (c = c[c.length - 1].offsetTop,
      0 < a ? a = 0 : a < -c && (a = -c));
    T(b, Hb);
    Y(b, Lb, a + Xb);
    setTimeout(function () {
      U(document.querySelector(ha), Hb)
    }, 500);
    this.Ka()
  };

  function Lp(a) {
    if (!Id) {
      var b = document.querySelector(fa),
        c = b.querySelector(".item.selected");
      if (c) {
        var d = Mp(c);
        a = d * a.settings.tabsVisible;
        var e = parseInt(getComputedStyle(b.querySelector(pa), null).marginTop, 10),
          f = Mp(b),
          h = c.offsetTop;
        if (Xi(b, r)) {
          h = 1;
          for (c = c.previousSibling; c; c = c.previousSibling)
            c.matches(".item:not(.filtered)") && h++;
          h *= d
        }
        c = 0;
        if (h + e < a)
          c = a - h;
        else if (f - a < h - e && (c = f - a - h - d,
            c > e))
          return;
        Y(b.querySelector(pa), Lb, Math.min(0, c))
      }
    }
  }
  B.Jd = function () {
    if (Id)
      return !0;
    var a = document.querySelector(fa),
      b = a.querySelector(pa);
    return this.settings.scrollBuffer >= Mp(b) - Mp(a) + parseInt(getComputedStyle(b, null).marginTop, 10)
  };
  B.Wa = function (a) {
    this.Ba(!0);
    var b = a.map(function (e) {
        return e.id
      }),
      c = document.querySelector(fa);
    T(c, r);
    c.querySelectorAll(g).forEach(function (e) {
      V(e, r, !(0 <= b.indexOf(e.dataset.id)))
    });
    var d = this.ui.current();
    if (d && (c = c.querySelector(oa + d.id + '"]')) && c.matches(ja) && a && a.length) {
      this.ui.select(a[0].id);
      return
    }
    Lp(this)
  };
  B.La = function () {
    var a = document.querySelector(fa);
    U(a, r);
    a.querySelectorAll(g).forEach(function (b) {
      U(b, r)
    });
    this.Ba(!1);
    Lp(this)
  };

  function Mp(a) {
    return a ? parseFloat(getComputedStyle(a, null).height) : 0
  };

  function Np() {
    W.call(this)
  }
  D(Np, W);
  B = Np.prototype;
  B.Ta = function () {
    return {
      name: "snapshot",
      spacing: 20,
      imgSize: 200,
      pageSize: 5,
      itemsPerAd: 10
    }
  };
  B.scope = function (a) {
    a.scope(hc, this.settings.imgSize);
    a.scope("setting:askew", !0)
  };
  B.Ec = function () {
    this.ui.addModule(Ia)
  };
  B.Xa = function () {
    $i(this);
    this.ui.select()
  };
  B.Ld = function () {
    Op(this);
    clearTimeout(this.Jc);
    this.Jc = setTimeout(this.Fe.bind(this), 500)
  };
  B.Fe = function () {
    var a = this;
    Array.from(document.querySelectorAll(g)).filter(function (b) {
      return !b.matches(ja)
    }).forEach(function (b, c) {
      c = Pp(a, c);
      Bl(b, c.left, c.top)
    })
  };
  B.Ya = function (a) {
    var b = this;
    if (a) {
      var c = [];
      a.forEach(function (e) {
        var f = rd(b.template(Ga, e));
        f.forEach(function (h) {
          h.dataset.id = e.id
        });
        c.push.apply(c, Lc(f))
      });
      a = document.querySelector(pa);
      if (0 < c.length) {
        var d = a.querySelectorAll(g).length;
        this.Id || (a.append.apply(a, Lc(c)),
          Op(this),
          this.Id = !0);
        c.forEach(function (e, f) {
          f = Pp(b, d + f);
          Bl(e, f.left, f.top)
        });
        a.append.apply(a, Lc(c))
      }
    }
  };

  function Op(a) {
    var b = document.querySelector(pa),
      c = b ? b.clientWidth : 0;
    b = b.querySelector(g);
    a.settings.itemWidth = b ? b.offsetWidth : a.settings.imgSize;
    a.settings.itemHeight = b ? b.offsetHeight : a.settings.imgSize;
    a.settings.columnWidth = a.settings.itemWidth + a.settings.spacing;
    a.settings.rowHeight = a.settings.itemHeight + a.settings.spacing;
    a.settings.numColumns = Math.max(1, Math.floor(c / a.settings.columnWidth))
  }

  function Pp(a, b) {
    return {
      left: b % a.settings.numColumns * a.settings.columnWidth,
      top: Math.floor(b / a.settings.numColumns) * a.settings.rowHeight
    }
  }
  B.Wa = function (a) {
    this.Ba(!0);
    var b = a.map(function (c) {
      return c.id
    });
    document.querySelectorAll(g).forEach(function (c) {
      var d = b.includes(c.dataset.id);
      V(c, r, !d)
    });
    this.Fe();
    window.scroll({
      top: 0,
      behavior: ic
    })
  };
  B.La = function () {
    document.querySelectorAll(g).forEach(function (a) {
      U(a, r)
    });
    this.Fe();
    this.Ba(!1)
  };

  function Qp() {
    W.call(this)
  }
  D(Qp, W);
  B = Qp.prototype;
  B.Ta = function () {
    return {
      name: "timeslide",
      imgSize: 300,
      pageSize: 10,
      columnOffset: 50
    }
  };
  B.scope = function (a) {
    a.scope(hc, this.settings.imgSize);
    var b = Rp(this);
    b && (b.matches(".large") ? a.scope("column:large", !0) : b.matches(".medium") ? a.scope("column:medium", !0) : b.matches(".small") && a.scope("column:small", !0))
  };
  B.Ec = function () {
    this.ui.addModule(Ia)
  };
  B.Xa = function () {
    $i(this);
    this.ui.select()
  };
  B.Ya = function (a) {
    var b = this;
    if (a) {
      var c = Sp(this);
      a.forEach(function (d) {
        var e = Rp(b, c);
        e.matches(".large") && e.children.length && (c = Sp(b, !0),
          e = Rp(b, c));
        var f = qd(b.template(Ga, d));
        f.dataset.id = d.id;
        e.append(f);
        T(f, "new")
      })
    }
  };

  function Sp(a, b) {
    var c = document.querySelectorAll(".slice");
    return !c.length || b ? (a = qd(a.template("Slice")),
      document.querySelector("#main").append(a),
      a) : c[c.length - 1]
  }

  function Rp(a, b) {
    if (b = b ? b : Array.from(document.querySelectorAll(".slice")).pop()) {
      var c = Array.from(b.querySelectorAll(".large .item")).pop(),
        d = Array.from(b.querySelectorAll(".medium .item")).pop(),
        e = Array.from(b.querySelectorAll(".small .item")).pop();
      c = c ? parseFloat(getComputedStyle(c, null).height) + c.offsetTop : 0;
      d = d ? parseFloat(getComputedStyle(d, null).height) + d.offsetTop : 0;
      e = e ? parseFloat(getComputedStyle(e, null).height) + e.offsetTop : 0;
      return !c || c <= d + a.settings.columnOffset && e + a.settings.columnOffset >= d ? b.querySelector(".large") : d + a.settings.columnOffset < c ? b.querySelector(".medium") : b.querySelector(".small")
    }
  }
  B.Wa = function (a, b) {
    var c = a.map(function (d) {
      return d.id
    });
    document.querySelectorAll(g).forEach(function (d) {
      V(d, r, 0 <= c.indexOf(d.getAttribute(ib)))
    });
    if (this.cg != b) {
      if (a = document.querySelector(ma))
        a = a.getBoundingClientRect().top - document.querySelector(".slice").getBoundingClientRect().top,
        window.scroll({
          top: a,
          behavior: ic
        });
      this.cg = b
    }
  };
  B.La = function () {
    document.querySelectorAll(g).forEach(function (a) {
      U(a, r)
    });
    delete this.cg
  };
  var Tp = Ej();
  Tp.bb.classic = Po;
  Tp.bb.flipcard = dp;
  Tp.bb.magazine = kp;
  Tp.bb.mosaic = up;
  Tp.bb.sidebar = Ip;
  Tp.bb.snapshot = Np;
  Tp.bb.timeslide = Qp;
  if (window.jstiming) {
    window.jstiming.kg = {};
    window.jstiming.Sl = 1;
    var Up = function (a, b, c) {
      var d = a.t[b],
        e = a.t.start;
      if (d && (e || c))
        return d = a.t[b][0],
          void 0 != c ? e = c : e = e[0],
          Math.round(d - e)
    };
    window.jstiming.getTick = Up;
    window.jstiming.getLabels = function (a) {
      var b = [],
        c;
      for (c in a.t)
        b.push(c);
      return b
    };
    var Vp = function (a, b, c) {
        var d = "";
        window.jstiming.srt && (d += "&srt=" + window.jstiming.srt,
          delete window.jstiming.srt);
        window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt,
          delete window.jstiming.pt);
        try {
          window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
        } catch (u) {}
        var e = window.chrome;
        if (e && (e = e.loadTimes)) {
          e().wasFetchedViaSpdy && (d += "&p=s");
          if (e().wasNpnNegotiated) {
            d += "&npn=1";
            var f = e().npnNegotiatedProtocol;
            f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
          }
          e().wasAlternateProtocolAvailable && (d += "&apa=1")
        }
        var h = a.t,
          k = h.start;
        e = [];
        f = [];
        for (var l in h)
          if (l != jc && 0 != l.indexOf("_")) {
            var m = h[l][1];
            m ? h[m] && f.push(l + "." + Up(a, l, h[m][0])) : k && e.push(l + "." + Up(a, l))
          }
        delete h.start;
        if (b)
          for (var n in b)
            d += "&" + n + "=" + b[n];
        (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [b, "?v=3", "&s=" + (window.jstiming.sn || "blogger") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
      },
      Wp = function (a, b, c) {
        a = Vp(a, b, c);
        if (!a)
          return "";
        b = new Image;
        var d = window.jstiming.Sl++;
        window.jstiming.kg[d] = b;
        b.onload = b.onerror = function () {
          window.jstiming && delete window.jstiming.kg[d]
        };
        b.src = a;
        b = null;
        return a
      };
    window.jstiming.report = function (a, b, c) {
      var d = document.visibilityState,
        e = "visibilitychange";
      d || (d = document.webkitVisibilityState,
        e = "webkitvisibilitychange");
      if ("prerender" == d) {
        var f = !1,
          h = function () {
            if (!f) {
              b ? b.prerender = "1" : b = {
                prerender: "1"
              };
              if ("prerender" == (document.visibilityState || document.webkitVisibilityState))
                var k = !1;
              else
                Wp(a, b, c),
                k = !0;
              k && (f = !0,
                document.removeEventListener(e, h, !1))
            }
          };
        document.addEventListener(e, h, !1);
        return ""
      }
      return Wp(a, b, c)
    }
  };
}).call(this);
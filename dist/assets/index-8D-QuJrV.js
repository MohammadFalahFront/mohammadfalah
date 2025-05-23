var wo = Object.defineProperty;
var Eo = (e, t, n) =>
  t in e
    ? wo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var vr = (e, t, n) => Eo(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && s(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Gs(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = {},
  Bt = [],
  nt = () => {},
  So = () => !1,
  Yn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  qs = (e) => e.startsWith("onUpdate:"),
  Pe = Object.assign,
  zs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ro = Object.prototype.hasOwnProperty,
  ee = (e, t) => Ro.call(e, t),
  z = Array.isArray,
  Gt = (e) => Jn(e) === "[object Map]",
  ji = (e) => Jn(e) === "[object Set]",
  K = (e) => typeof e == "function",
  _e = (e) => typeof e == "string",
  Ct = (e) => typeof e == "symbol",
  ae = (e) => e !== null && typeof e == "object",
  Vi = (e) => (ae(e) || K(e)) && K(e.then) && K(e.catch),
  Hi = Object.prototype.toString,
  Jn = (e) => Hi.call(e),
  Co = (e) => Jn(e).slice(8, -1),
  Wi = (e) => Jn(e) === "[object Object]",
  Ks = (e) =>
    _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  on = Gs(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Zn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  To = /-(\w)/g,
  Ge = Zn((e) => e.replace(To, (t, n) => (n ? n.toUpperCase() : ""))),
  Oo = /\B([A-Z])/g,
  Dt = Zn((e) => e.replace(Oo, "-$1").toLowerCase()),
  Xn = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  cs = Zn((e) => (e ? `on${Xn(e)}` : "")),
  St = (e, t) => !Object.is(e, t),
  us = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Ui = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  Po = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let xr;
const Qn = () =>
  xr ||
  (xr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Ys(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = _e(s) ? Lo(s) : Ys(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (_e(e) || ae(e)) return e;
}
const Ao = /;(?![^(]*\))/g,
  Mo = /:([^]+)/,
  Io = /\/\*[^]*?\*\//g;
function Lo(e) {
  const t = {};
  return (
    e
      .replace(Io, "")
      .split(Ao)
      .forEach((n) => {
        if (n) {
          const s = n.split(Mo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function gn(e) {
  let t = "";
  if (_e(e)) t = e;
  else if (z(e))
    for (let n = 0; n < e.length; n++) {
      const s = gn(e[n]);
      s && (t += s + " ");
    }
  else if (ae(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Fo =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ko = Gs(Fo);
function Bi(e) {
  return !!e || e === "";
}
const Gi = (e) => !!(e && e.__v_isRef === !0),
  oe = (e) =>
    _e(e)
      ? e
      : e == null
      ? ""
      : z(e) || (ae(e) && (e.toString === Hi || !K(e.toString)))
      ? Gi(e)
        ? oe(e.value)
        : JSON.stringify(e, qi, 2)
      : String(e),
  qi = (e, t) =>
    Gi(t)
      ? qi(e, t.value)
      : Gt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], i) => ((n[fs(s, i) + " =>"] = r), n),
            {}
          ),
        }
      : ji(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => fs(n)) }
      : Ct(t)
      ? fs(t)
      : ae(t) && !z(t) && !Wi(t)
      ? String(t)
      : t,
  fs = (e, t = "") => {
    var n;
    return Ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let je;
class zi {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = je),
      !t && je && (this.index = (je.scopes || (je.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = je;
      try {
        return (je = this), t();
      } finally {
        je = n;
      }
    }
  }
  on() {
    je = this;
  }
  off() {
    je = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function No(e) {
  return new zi(e);
}
function $o() {
  return je;
}
let re;
const ds = new WeakSet();
class Ki {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      je && je.active && je.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), ds.has(this) && (ds.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ji(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), yr(this), Zi(this);
    const t = re,
      n = Ke;
    (re = this), (Ke = !0);
    try {
      return this.fn();
    } finally {
      Xi(this), (re = t), (Ke = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Xs(t);
      (this.deps = this.depsTail = void 0),
        yr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? ds.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Ss(this) && this.run();
  }
  get dirty() {
    return Ss(this);
  }
}
let Yi = 0,
  an,
  cn;
function Ji(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = cn), (cn = e);
    return;
  }
  (e.next = an), (an = e);
}
function Js() {
  Yi++;
}
function Zs() {
  if (--Yi > 0) return;
  if (cn) {
    let t = cn;
    for (cn = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; an; ) {
    let t = an;
    for (an = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Zi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Xi(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Xs(s), Do(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function Ss(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Qi(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Qi(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === _n)
  )
    return;
  e.globalVersion = _n;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Ss(e))) {
    e.flags &= -3;
    return;
  }
  const n = re,
    s = Ke;
  (re = e), (Ke = !0);
  try {
    Zi(e);
    const r = e.fn(e._value);
    (t.version === 0 || St(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (re = n), (Ke = s), Xi(e), (e.flags &= -3);
  }
}
function Xs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Xs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Do(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Ke = !0;
const el = [];
function Tt() {
  el.push(Ke), (Ke = !1);
}
function Ot() {
  const e = el.pop();
  Ke = e === void 0 ? !0 : e;
}
function yr(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = re;
    re = void 0;
    try {
      t();
    } finally {
      re = n;
    }
  }
}
let _n = 0;
class jo {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Qs {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!re || !Ke || re === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      (n = this.activeLink = new jo(re, this)),
        re.deps
          ? ((n.prevDep = re.depsTail),
            (re.depsTail.nextDep = n),
            (re.depsTail = n))
          : (re.deps = re.depsTail = n),
        tl(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = re.depsTail),
        (n.nextDep = void 0),
        (re.depsTail.nextDep = n),
        (re.depsTail = n),
        re.deps === n && (re.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, _n++, this.notify(t);
  }
  notify(t) {
    Js();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zs();
    }
  }
}
function tl(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) tl(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Rs = new WeakMap(),
  Ft = Symbol(""),
  Cs = Symbol(""),
  bn = Symbol("");
function Ce(e, t, n) {
  if (Ke && re) {
    let s = Rs.get(e);
    s || Rs.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new Qs())), (r.map = s), (r.key = n)), r.track();
  }
}
function ct(e, t, n, s, r, i) {
  const l = Rs.get(e);
  if (!l) {
    _n++;
    return;
  }
  const o = (a) => {
    a && a.trigger();
  };
  if ((Js(), t === "clear")) l.forEach(o);
  else {
    const a = z(e),
      c = a && Ks(n);
    if (a && n === "length") {
      const u = Number(s);
      l.forEach((f, p) => {
        (p === "length" || p === bn || (!Ct(p) && p >= u)) && o(f);
      });
    } else
      switch (
        ((n !== void 0 || l.has(void 0)) && o(l.get(n)), c && o(l.get(bn)), t)
      ) {
        case "add":
          a ? c && o(l.get("length")) : (o(l.get(Ft)), Gt(e) && o(l.get(Cs)));
          break;
        case "delete":
          a || (o(l.get(Ft)), Gt(e) && o(l.get(Cs)));
          break;
        case "set":
          Gt(e) && o(l.get(Ft));
          break;
      }
  }
  Zs();
}
function Ht(e) {
  const t = Q(e);
  return t === e ? t : (Ce(t, "iterate", bn), Ye(e) ? t : t.map(Ie));
}
function er(e) {
  return Ce((e = Q(e)), "iterate", bn), e;
}
const Vo = {
  __proto__: null,
  [Symbol.iterator]() {
    return hs(this, Symbol.iterator, Ie);
  },
  concat(...e) {
    return Ht(this).concat(...e.map((t) => (z(t) ? Ht(t) : t)));
  },
  entries() {
    return hs(this, "entries", (e) => ((e[1] = Ie(e[1])), e));
  },
  every(e, t) {
    return lt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return lt(this, "filter", e, t, (n) => n.map(Ie), arguments);
  },
  find(e, t) {
    return lt(this, "find", e, t, Ie, arguments);
  },
  findIndex(e, t) {
    return lt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return lt(this, "findLast", e, t, Ie, arguments);
  },
  findLastIndex(e, t) {
    return lt(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return lt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ps(this, "includes", e);
  },
  indexOf(...e) {
    return ps(this, "indexOf", e);
  },
  join(e) {
    return Ht(this).join(e);
  },
  lastIndexOf(...e) {
    return ps(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return tn(this, "pop");
  },
  push(...e) {
    return tn(this, "push", e);
  },
  reduce(e, ...t) {
    return wr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return wr(this, "reduceRight", e, t);
  },
  shift() {
    return tn(this, "shift");
  },
  some(e, t) {
    return lt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return tn(this, "splice", e);
  },
  toReversed() {
    return Ht(this).toReversed();
  },
  toSorted(e) {
    return Ht(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ht(this).toSpliced(...e);
  },
  unshift(...e) {
    return tn(this, "unshift", e);
  },
  values() {
    return hs(this, "values", Ie);
  },
};
function hs(e, t, n) {
  const s = er(e),
    r = s[t]();
  return (
    s !== e &&
      !Ye(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    r
  );
}
const Ho = Array.prototype;
function lt(e, t, n, s, r, i) {
  const l = er(e),
    o = l !== e && !Ye(e),
    a = l[t];
  if (a !== Ho[t]) {
    const f = a.apply(e, i);
    return o ? Ie(f) : f;
  }
  let c = n;
  l !== e &&
    (o
      ? (c = function (f, p) {
          return n.call(this, Ie(f), p, e);
        })
      : n.length > 2 &&
        (c = function (f, p) {
          return n.call(this, f, p, e);
        }));
  const u = a.call(l, c, s);
  return o && r ? r(u) : u;
}
function wr(e, t, n, s) {
  const r = er(e);
  let i = n;
  return (
    r !== e &&
      (Ye(e)
        ? n.length > 3 &&
          (i = function (l, o, a) {
            return n.call(this, l, o, a, e);
          })
        : (i = function (l, o, a) {
            return n.call(this, l, Ie(o), a, e);
          })),
    r[t](i, ...s)
  );
}
function ps(e, t, n) {
  const s = Q(e);
  Ce(s, "iterate", bn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && sr(n[0])
    ? ((n[0] = Q(n[0])), s[t](...n))
    : r;
}
function tn(e, t, n = []) {
  Tt(), Js();
  const s = Q(e)[t].apply(e, n);
  return Zs(), Ot(), s;
}
const Wo = Gs("__proto__,__v_isRef,__isVue"),
  nl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ct)
  );
function Uo(e) {
  Ct(e) || (e = String(e));
  const t = Q(this);
  return Ce(t, "has", e), t.hasOwnProperty(e);
}
class sl {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (r ? (i ? Qo : ol) : i ? ll : il).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const l = z(t);
    if (!r) {
      let a;
      if (l && (a = Vo[n])) return a;
      if (n === "hasOwnProperty") return Uo;
    }
    const o = Reflect.get(t, n, be(t) ? t : s);
    return (Ct(n) ? nl.has(n) : Wo(n)) || (r || Ce(t, "get", n), i)
      ? o
      : be(o)
      ? l && Ks(n)
        ? o
        : o.value
      : ae(o)
      ? r
        ? cl(o)
        : es(o)
      : o;
  }
}
class rl extends sl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = kt(i);
      if (
        (!Ye(s) && !kt(s) && ((i = Q(i)), (s = Q(s))), !z(t) && be(i) && !be(s))
      )
        return a ? !1 : ((i.value = s), !0);
    }
    const l = z(t) && Ks(n) ? Number(n) < t.length : ee(t, n),
      o = Reflect.set(t, n, s, be(t) ? t : r);
    return (
      t === Q(r) && (l ? St(s, i) && ct(t, "set", n, s) : ct(t, "add", n, s)), o
    );
  }
  deleteProperty(t, n) {
    const s = ee(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && ct(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ct(n) || !nl.has(n)) && Ce(t, "has", n), s;
  }
  ownKeys(t) {
    return Ce(t, "iterate", z(t) ? "length" : Ft), Reflect.ownKeys(t);
  }
}
class Bo extends sl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Go = new rl(),
  qo = new Bo(),
  zo = new rl(!0);
const Ts = (e) => e,
  Mn = (e) => Reflect.getPrototypeOf(e);
function Ko(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = Q(r),
      l = Gt(i),
      o = e === "entries" || (e === Symbol.iterator && l),
      a = e === "keys" && l,
      c = r[e](...s),
      u = n ? Ts : t ? Os : Ie;
    return (
      !t && Ce(i, "iterate", a ? Cs : Ft),
      {
        next() {
          const { value: f, done: p } = c.next();
          return p
            ? { value: f, done: p }
            : { value: o ? [u(f[0]), u(f[1])] : u(f), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function In(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yo(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        l = Q(i),
        o = Q(r);
      e || (St(r, o) && Ce(l, "get", r), Ce(l, "get", o));
      const { has: a } = Mn(l),
        c = t ? Ts : e ? Os : Ie;
      if (a.call(l, r)) return c(i.get(r));
      if (a.call(l, o)) return c(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ce(Q(r), "iterate", Ft), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw,
        l = Q(i),
        o = Q(r);
      return (
        e || (St(r, o) && Ce(l, "has", r), Ce(l, "has", o)),
        r === o ? i.has(r) : i.has(r) || i.has(o)
      );
    },
    forEach(r, i) {
      const l = this,
        o = l.__v_raw,
        a = Q(o),
        c = t ? Ts : e ? Os : Ie;
      return (
        !e && Ce(a, "iterate", Ft),
        o.forEach((u, f) => r.call(i, c(u), c(f), l))
      );
    },
  };
  return (
    Pe(
      n,
      e
        ? {
            add: In("add"),
            set: In("set"),
            delete: In("delete"),
            clear: In("clear"),
          }
        : {
            add(r) {
              !t && !Ye(r) && !kt(r) && (r = Q(r));
              const i = Q(this);
              return (
                Mn(i).has.call(i, r) || (i.add(r), ct(i, "add", r, r)), this
              );
            },
            set(r, i) {
              !t && !Ye(i) && !kt(i) && (i = Q(i));
              const l = Q(this),
                { has: o, get: a } = Mn(l);
              let c = o.call(l, r);
              c || ((r = Q(r)), (c = o.call(l, r)));
              const u = a.call(l, r);
              return (
                l.set(r, i),
                c ? St(i, u) && ct(l, "set", r, i) : ct(l, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = Q(this),
                { has: l, get: o } = Mn(i);
              let a = l.call(i, r);
              a || ((r = Q(r)), (a = l.call(i, r))), o && o.call(i, r);
              const c = i.delete(r);
              return a && ct(i, "delete", r, void 0), c;
            },
            clear() {
              const r = Q(this),
                i = r.size !== 0,
                l = r.clear();
              return i && ct(r, "clear", void 0, void 0), l;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = Ko(r, e, t);
    }),
    n
  );
}
function tr(e, t) {
  const n = Yo(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(ee(n, r) && r in s ? n : s, r, i);
}
const Jo = { get: tr(!1, !1) },
  Zo = { get: tr(!1, !0) },
  Xo = { get: tr(!0, !1) };
const il = new WeakMap(),
  ll = new WeakMap(),
  ol = new WeakMap(),
  Qo = new WeakMap();
function ea(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ta(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ea(Co(e));
}
function es(e) {
  return kt(e) ? e : nr(e, !1, Go, Jo, il);
}
function al(e) {
  return nr(e, !1, zo, Zo, ll);
}
function cl(e) {
  return nr(e, !0, qo, Xo, ol);
}
function nr(e, t, n, s, r) {
  if (!ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const l = ta(e);
  if (l === 0) return e;
  const o = new Proxy(e, l === 2 ? s : n);
  return r.set(e, o), o;
}
function un(e) {
  return kt(e) ? un(e.__v_raw) : !!(e && e.__v_isReactive);
}
function kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ye(e) {
  return !!(e && e.__v_isShallow);
}
function sr(e) {
  return e ? !!e.__v_raw : !1;
}
function Q(e) {
  const t = e && e.__v_raw;
  return t ? Q(t) : e;
}
function na(e) {
  return (
    !ee(e, "__v_skip") && Object.isExtensible(e) && Ui(e, "__v_skip", !0), e
  );
}
const Ie = (e) => (ae(e) ? es(e) : e),
  Os = (e) => (ae(e) ? cl(e) : e);
function be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Be(e) {
  return fl(e, !1);
}
function ul(e) {
  return fl(e, !0);
}
function fl(e, t) {
  return be(e) ? e : new sa(e, t);
}
class sa {
  constructor(t, n) {
    (this.dep = new Qs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Q(t)),
      (this._value = n ? t : Ie(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ye(t) || kt(t);
    (t = s ? t : Q(t)),
      St(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Ie(t)),
        this.dep.trigger());
  }
}
function dt(e) {
  return be(e) ? e.value : e;
}
const ra = {
  get: (e, t, n) => (t === "__v_raw" ? e : dt(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return be(r) && !be(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function dl(e) {
  return un(e) ? e : new Proxy(e, ra);
}
class ia {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Qs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = _n - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && re !== this))
      return Ji(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Qi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function la(e, t, n = !1) {
  let s, r;
  return K(e) ? (s = e) : ((s = e.get), (r = e.set)), new ia(s, r, n);
}
const Ln = {},
  Vn = new WeakMap();
let Lt;
function oa(e, t = !1, n = Lt) {
  if (n) {
    let s = Vn.get(n);
    s || Vn.set(n, (s = [])), s.push(e);
  }
}
function aa(e, t, n = ie) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: l,
      augmentJob: o,
      call: a,
    } = n,
    c = (S) => (r ? S : Ye(S) || r === !1 || r === 0 ? Et(S, 1) : Et(S));
  let u,
    f,
    p,
    m,
    T = !1,
    R = !1;
  if (
    (be(e)
      ? ((f = () => e.value), (T = Ye(e)))
      : un(e)
      ? ((f = () => c(e)), (T = !0))
      : z(e)
      ? ((R = !0),
        (T = e.some((S) => un(S) || Ye(S))),
        (f = () =>
          e.map((S) => {
            if (be(S)) return S.value;
            if (un(S)) return c(S);
            if (K(S)) return a ? a(S, 2) : S();
          })))
      : K(e)
      ? t
        ? (f = a ? () => a(e, 2) : e)
        : (f = () => {
            if (p) {
              Tt();
              try {
                p();
              } finally {
                Ot();
              }
            }
            const S = Lt;
            Lt = u;
            try {
              return a ? a(e, 3, [m]) : e(m);
            } finally {
              Lt = S;
            }
          })
      : (f = nt),
    t && r)
  ) {
    const S = f,
      W = r === !0 ? 1 / 0 : r;
    f = () => Et(S(), W);
  }
  const j = $o(),
    O = () => {
      u.stop(), j && j.active && zs(j.effects, u);
    };
  if (i && t) {
    const S = t;
    t = (...W) => {
      S(...W), O();
    };
  }
  let P = R ? new Array(e.length).fill(Ln) : Ln;
  const F = (S) => {
    if (!(!(u.flags & 1) || (!u.dirty && !S)))
      if (t) {
        const W = u.run();
        if (r || T || (R ? W.some((q, $) => St(q, P[$])) : St(W, P))) {
          p && p();
          const q = Lt;
          Lt = u;
          try {
            const $ = [W, P === Ln ? void 0 : R && P[0] === Ln ? [] : P, m];
            a ? a(t, 3, $) : t(...$), (P = W);
          } finally {
            Lt = q;
          }
        }
      } else u.run();
  };
  return (
    o && o(F),
    (u = new Ki(f)),
    (u.scheduler = l ? () => l(F, !1) : F),
    (m = (S) => oa(S, !1, u)),
    (p = u.onStop =
      () => {
        const S = Vn.get(u);
        if (S) {
          if (a) a(S, 4);
          else for (const W of S) W();
          Vn.delete(u);
        }
      }),
    t ? (s ? F(!0) : (P = u.run())) : l ? l(F.bind(null, !0), !0) : u.run(),
    (O.pause = u.pause.bind(u)),
    (O.resume = u.resume.bind(u)),
    (O.stop = O),
    O
  );
}
function Et(e, t = 1 / 0, n) {
  if (t <= 0 || !ae(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, be(e))) Et(e.value, t, n);
  else if (z(e)) for (let s = 0; s < e.length; s++) Et(e[s], t, n);
  else if (ji(e) || Gt(e))
    e.forEach((s) => {
      Et(s, t, n);
    });
  else if (Wi(e)) {
    for (const s in e) Et(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Et(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Tn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    ts(r, t, n);
  }
}
function it(e, t, n, s) {
  if (K(e)) {
    const r = Tn(e, t, n, s);
    return (
      r &&
        Vi(r) &&
        r.catch((i) => {
          ts(i, t, n);
        }),
      r
    );
  }
  if (z(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(it(e[i], t, n, s));
    return r;
  }
}
function ts(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: l } =
      (t && t.appContext.config) || ie;
  if (t) {
    let o = t.parent;
    const a = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, a, c) === !1) return;
      }
      o = o.parent;
    }
    if (i) {
      Tt(), Tn(i, null, 10, [e, a, c]), Ot();
      return;
    }
  }
  ca(e, n, r, s, l);
}
function ca(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Le = [];
let Qe = -1;
const qt = [];
let xt = null,
  Wt = 0;
const hl = Promise.resolve();
let Hn = null;
function pl(e) {
  const t = Hn || hl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ua(e) {
  let t = Qe + 1,
    n = Le.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Le[s],
      i = vn(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function rr(e) {
  if (!(e.flags & 1)) {
    const t = vn(e),
      n = Le[Le.length - 1];
    !n || (!(e.flags & 2) && t >= vn(n)) ? Le.push(e) : Le.splice(ua(t), 0, e),
      (e.flags |= 1),
      ml();
  }
}
function ml() {
  Hn || (Hn = hl.then(_l));
}
function fa(e) {
  z(e)
    ? qt.push(...e)
    : xt && e.id === -1
    ? xt.splice(Wt + 1, 0, e)
    : e.flags & 1 || (qt.push(e), (e.flags |= 1)),
    ml();
}
function Er(e, t, n = Qe + 1) {
  for (; n < Le.length; n++) {
    const s = Le[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      Le.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function gl(e) {
  if (qt.length) {
    const t = [...new Set(qt)].sort((n, s) => vn(n) - vn(s));
    if (((qt.length = 0), xt)) {
      xt.push(...t);
      return;
    }
    for (xt = t, Wt = 0; Wt < xt.length; Wt++) {
      const n = xt[Wt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (xt = null), (Wt = 0);
  }
}
const vn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function _l(e) {
  try {
    for (Qe = 0; Qe < Le.length; Qe++) {
      const t = Le[Qe];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Tn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Qe < Le.length; Qe++) {
      const t = Le[Qe];
      t && (t.flags &= -2);
    }
    (Qe = -1),
      (Le.length = 0),
      gl(),
      (Hn = null),
      (Le.length || qt.length) && _l();
  }
}
let Ue = null,
  bl = null;
function Wn(e) {
  const t = Ue;
  return (Ue = e), (bl = (e && e.type.__scopeId) || null), t;
}
function da(e, t = Ue, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Lr(-1);
    const i = Wn(t);
    let l;
    try {
      l = e(...r);
    } finally {
      Wn(i), s._d && Lr(1);
    }
    return l;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Mt(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    i && (o.oldValue = i[l].value);
    let a = o.dir[s];
    a && (Tt(), it(a, n, 8, [e.el, o, e, t]), Ot());
  }
}
const ha = Symbol("_vte"),
  pa = (e) => e.__isTeleport;
function ir(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), ir(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function On(e, t) {
  return K(e) ? Pe({ name: e.name }, t, { setup: e }) : e;
}
function vl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Un(e, t, n, s, r = !1) {
  if (z(e)) {
    e.forEach((T, R) => Un(T, t && (z(t) ? t[R] : t), n, s, r));
    return;
  }
  if (fn(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Un(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? cr(s.component) : s.el,
    l = r ? null : i,
    { i: o, r: a } = e,
    c = t && t.r,
    u = o.refs === ie ? (o.refs = {}) : o.refs,
    f = o.setupState,
    p = Q(f),
    m = f === ie ? () => !1 : (T) => ee(p, T);
  if (
    (c != null &&
      c !== a &&
      (_e(c)
        ? ((u[c] = null), m(c) && (f[c] = null))
        : be(c) && (c.value = null)),
    K(a))
  )
    Tn(a, o, 12, [l, u]);
  else {
    const T = _e(a),
      R = be(a);
    if (T || R) {
      const j = () => {
        if (e.f) {
          const O = T ? (m(a) ? f[a] : u[a]) : a.value;
          r
            ? z(O) && zs(O, i)
            : z(O)
            ? O.includes(i) || O.push(i)
            : T
            ? ((u[a] = [i]), m(a) && (f[a] = u[a]))
            : ((a.value = [i]), e.k && (u[e.k] = a.value));
        } else
          T
            ? ((u[a] = l), m(a) && (f[a] = l))
            : R && ((a.value = l), e.k && (u[e.k] = l));
      };
      l ? ((j.id = -1), De(j, n)) : j();
    }
  }
}
Qn().requestIdleCallback;
Qn().cancelIdleCallback;
const fn = (e) => !!e.type.__asyncLoader,
  xl = (e) => e.type.__isKeepAlive;
function ma(e, t) {
  yl(e, "a", t);
}
function ga(e, t) {
  yl(e, "da", t);
}
function yl(e, t, n = ye) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((ns(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      xl(r.parent.vnode) && _a(s, t, n, r), (r = r.parent);
  }
}
function _a(e, t, n, s) {
  const r = ns(t, e, s, !0);
  ss(() => {
    zs(s[t], r);
  }, n);
}
function ns(e, t, n = ye, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...l) => {
          Tt();
          const o = An(n),
            a = it(t, n, e, l);
          return o(), Ot(), a;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const mt =
    (e) =>
    (t, n = ye) => {
      (!yn || e === "sp") && ns(e, (...s) => t(...s), n);
    },
  ba = mt("bm"),
  en = mt("m"),
  va = mt("bu"),
  xa = mt("u"),
  ya = mt("bum"),
  ss = mt("um"),
  wa = mt("sp"),
  Ea = mt("rtg"),
  Sa = mt("rtc");
function Ra(e, t = ye) {
  ns("ec", e, t);
}
const Ca = "components";
function Ta(e, t) {
  return Pa(Ca, e, !0, t) || e;
}
const Oa = Symbol.for("v-ndc");
function Pa(e, t, n = !0, s = !1) {
  const r = Ue || ye;
  if (r) {
    const i = r.type;
    {
      const o = gc(i, !1);
      if (o && (o === t || o === Ge(t) || o === Xn(Ge(t)))) return i;
    }
    const l = Sr(r[e] || i[e], t) || Sr(r.appContext[e], t);
    return !l && s ? i : l;
  }
}
function Sr(e, t) {
  return e && (e[t] || e[Ge(t)] || e[Xn(Ge(t))]);
}
const Ps = (e) => (e ? (Ul(e) ? cr(e) : Ps(e.parent)) : null),
  dn = Pe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ps(e.parent),
    $root: (e) => Ps(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => El(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        rr(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = pl.bind(e.proxy)),
    $watch: (e) => Ja.bind(e),
  }),
  ms = (e, t) => e !== ie && !e.__isScriptSetup && ee(e, t),
  Aa = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: l,
        type: o,
        appContext: a,
      } = e;
      let c;
      if (t[0] !== "$") {
        const m = l[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (ms(s, t)) return (l[t] = 1), s[t];
          if (r !== ie && ee(r, t)) return (l[t] = 2), r[t];
          if ((c = e.propsOptions[0]) && ee(c, t)) return (l[t] = 3), i[t];
          if (n !== ie && ee(n, t)) return (l[t] = 4), n[t];
          As && (l[t] = 0);
        }
      }
      const u = dn[t];
      let f, p;
      if (u) return t === "$attrs" && Ce(e.attrs, "get", ""), u(e);
      if ((f = o.__cssModules) && (f = f[t])) return f;
      if (n !== ie && ee(n, t)) return (l[t] = 4), n[t];
      if (((p = a.config.globalProperties), ee(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return ms(r, t)
        ? ((r[t] = n), !0)
        : s !== ie && ee(s, t)
        ? ((s[t] = n), !0)
        : ee(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      l
    ) {
      let o;
      return (
        !!n[l] ||
        (e !== ie && ee(e, l)) ||
        ms(t, l) ||
        ((o = i[0]) && ee(o, l)) ||
        ee(s, l) ||
        ee(dn, l) ||
        ee(r.config.globalProperties, l)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ee(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Rr(e) {
  return z(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let As = !0;
function Ma(e) {
  const t = El(e),
    n = e.proxy,
    s = e.ctx;
  (As = !1), t.beforeCreate && Cr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: l,
    watch: o,
    provide: a,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: m,
    updated: T,
    activated: R,
    deactivated: j,
    beforeDestroy: O,
    beforeUnmount: P,
    destroyed: F,
    unmounted: S,
    render: W,
    renderTracked: q,
    renderTriggered: $,
    errorCaptured: le,
    serverPrefetch: Fe,
    expose: we,
    inheritAttrs: Ee,
    components: pe,
    directives: Ae,
    filters: At,
  } = t;
  if ((c && Ia(c, s, null), l))
    for (const Z in l) {
      const J = l[Z];
      K(J) && (s[Z] = J.bind(n));
    }
  if (r) {
    const Z = r.call(n, n);
    ae(Z) && (e.data = es(Z));
  }
  if (((As = !0), i))
    for (const Z in i) {
      const J = i[Z],
        qe = K(J) ? J.bind(n, n) : K(J.get) ? J.get.bind(n, n) : nt,
        Se = !K(J) && K(J.set) ? J.set.bind(n) : nt,
        ke = xe({ get: qe, set: Se });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (Re) => (ke.value = Re),
      });
    }
  if (o) for (const Z in o) wl(o[Z], s, n, Z);
  if (a) {
    const Z = K(a) ? a.call(n) : a;
    Reflect.ownKeys(Z).forEach((J) => {
      kn(J, Z[J]);
    });
  }
  u && Cr(u, e, "c");
  function he(Z, J) {
    z(J) ? J.forEach((qe) => Z(qe.bind(n))) : J && Z(J.bind(n));
  }
  if (
    (he(ba, f),
    he(en, p),
    he(va, m),
    he(xa, T),
    he(ma, R),
    he(ga, j),
    he(Ra, le),
    he(Sa, q),
    he(Ea, $),
    he(ya, P),
    he(ss, S),
    he(wa, Fe),
    z(we))
  )
    if (we.length) {
      const Z = e.exposed || (e.exposed = {});
      we.forEach((J) => {
        Object.defineProperty(Z, J, {
          get: () => n[J],
          set: (qe) => (n[J] = qe),
        });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === nt && (e.render = W),
    Ee != null && (e.inheritAttrs = Ee),
    pe && (e.components = pe),
    Ae && (e.directives = Ae),
    Fe && vl(e);
}
function Ia(e, t, n = nt) {
  z(e) && (e = Ms(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ae(r)
      ? "default" in r
        ? (i = st(r.from || s, r.default, !0))
        : (i = st(r.from || s))
      : (i = st(r)),
      be(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[s] = i);
  }
}
function Cr(e, t, n) {
  it(z(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function wl(e, t, n, s) {
  let r = s.includes(".") ? $l(n, s) : () => n[s];
  if (_e(e)) {
    const i = t[e];
    K(i) && Kt(r, i);
  } else if (K(e)) Kt(r, e.bind(n));
  else if (ae(e))
    if (z(e)) e.forEach((i) => wl(i, t, n, s));
    else {
      const i = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(i) && Kt(r, i, e);
    }
}
function El(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    o = i.get(t);
  let a;
  return (
    o
      ? (a = o)
      : !r.length && !n && !s
      ? (a = t)
      : ((a = {}), r.length && r.forEach((c) => Bn(a, c, l, !0)), Bn(a, t, l)),
    ae(t) && i.set(t, a),
    a
  );
}
function Bn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Bn(e, i, n, !0), r && r.forEach((l) => Bn(e, l, n, !0));
  for (const l in t)
    if (!(s && l === "expose")) {
      const o = La[l] || (n && n[l]);
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const La = {
  data: Tr,
  props: Or,
  emits: Or,
  methods: ln,
  computed: ln,
  beforeCreate: Me,
  created: Me,
  beforeMount: Me,
  mounted: Me,
  beforeUpdate: Me,
  updated: Me,
  beforeDestroy: Me,
  beforeUnmount: Me,
  destroyed: Me,
  unmounted: Me,
  activated: Me,
  deactivated: Me,
  errorCaptured: Me,
  serverPrefetch: Me,
  components: ln,
  directives: ln,
  watch: ka,
  provide: Tr,
  inject: Fa,
};
function Tr(e, t) {
  return t
    ? e
      ? function () {
          return Pe(
            K(e) ? e.call(this, this) : e,
            K(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Fa(e, t) {
  return ln(Ms(e), Ms(t));
}
function Ms(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ln(e, t) {
  return e ? Pe(Object.create(null), e, t) : t;
}
function Or(e, t) {
  return e
    ? z(e) && z(t)
      ? [...new Set([...e, ...t])]
      : Pe(Object.create(null), Rr(e), Rr(t ?? {}))
    : t;
}
function ka(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(Object.create(null), e);
  for (const s in t) n[s] = Me(e[s], t[s]);
  return n;
}
function Sl() {
  return {
    app: null,
    config: {
      isNativeTag: So,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Na = 0;
function $a(e, t) {
  return function (s, r = null) {
    K(s) || (s = Pe({}, s)), r != null && !ae(r) && (r = null);
    const i = Sl(),
      l = new WeakSet(),
      o = [];
    let a = !1;
    const c = (i.app = {
      _uid: Na++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: bc,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          l.has(u) ||
            (u && K(u.install)
              ? (l.add(u), u.install(c, ...f))
              : K(u) && (l.add(u), u(c, ...f))),
          c
        );
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c;
      },
      component(u, f) {
        return f ? ((i.components[u] = f), c) : i.components[u];
      },
      directive(u, f) {
        return f ? ((i.directives[u] = f), c) : i.directives[u];
      },
      mount(u, f, p) {
        if (!a) {
          const m = c._ceVNode || de(s, r);
          return (
            (m.appContext = i),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            e(m, u, p),
            (a = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            cr(m.component)
          );
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        a &&
          (it(o, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__);
      },
      provide(u, f) {
        return (i.provides[u] = f), c;
      },
      runWithContext(u) {
        const f = zt;
        zt = c;
        try {
          return u();
        } finally {
          zt = f;
        }
      },
    });
    return c;
  };
}
let zt = null;
function kn(e, t) {
  if (ye) {
    let n = ye.provides;
    const s = ye.parent && ye.parent.provides;
    s === n && (n = ye.provides = Object.create(s)), (n[e] = t);
  }
}
function st(e, t, n = !1) {
  const s = ye || Ue;
  if (s || zt) {
    const r = zt
      ? zt._context.provides
      : s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && K(t) ? t.call(s && s.proxy) : t;
  }
}
const Rl = {},
  Cl = () => Object.create(Rl),
  Tl = (e) => Object.getPrototypeOf(e) === Rl;
function Da(e, t, n, s = !1) {
  const r = {},
    i = Cl();
  (e.propsDefaults = Object.create(null)), Ol(e, t, r, i);
  for (const l in e.propsOptions[0]) l in r || (r[l] = void 0);
  n ? (e.props = s ? r : al(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function ja(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: l },
    } = e,
    o = Q(r),
    [a] = e.propsOptions;
  let c = !1;
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (rs(e.emitsOptions, p)) continue;
        const m = t[p];
        if (a)
          if (ee(i, p)) m !== i[p] && ((i[p] = m), (c = !0));
          else {
            const T = Ge(p);
            r[T] = Is(a, o, T, m, e, !1);
          }
        else m !== i[p] && ((i[p] = m), (c = !0));
      }
    }
  } else {
    Ol(e, t, r, i) && (c = !0);
    let u;
    for (const f in o)
      (!t || (!ee(t, f) && ((u = Dt(f)) === f || !ee(t, u)))) &&
        (a
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (r[f] = Is(a, o, f, void 0, e, !0))
          : delete r[f]);
    if (i !== o)
      for (const f in i) (!t || !ee(t, f)) && (delete i[f], (c = !0));
  }
  c && ct(e.attrs, "set", "");
}
function Ol(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let l = !1,
    o;
  if (t)
    for (let a in t) {
      if (on(a)) continue;
      const c = t[a];
      let u;
      r && ee(r, (u = Ge(a)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((o || (o = {}))[u] = c)
        : rs(e.emitsOptions, a) ||
          ((!(a in s) || c !== s[a]) && ((s[a] = c), (l = !0)));
    }
  if (i) {
    const a = Q(n),
      c = o || ie;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = Is(r, a, f, c[f], e, !ee(c, f));
    }
  }
  return l;
}
function Is(e, t, n, s, r, i) {
  const l = e[n];
  if (l != null) {
    const o = ee(l, "default");
    if (o && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && K(a)) {
        const { propsDefaults: c } = r;
        if (n in c) s = c[n];
        else {
          const u = An(r);
          (s = c[n] = a.call(null, t)), u();
        }
      } else s = a;
      r.ce && r.ce._setProp(n, s);
    }
    l[0] &&
      (i && !o ? (s = !1) : l[1] && (s === "" || s === Dt(n)) && (s = !0));
  }
  return s;
}
const Va = new WeakMap();
function Pl(e, t, n = !1) {
  const s = n ? Va : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    l = {},
    o = [];
  let a = !1;
  if (!K(e)) {
    const u = (f) => {
      a = !0;
      const [p, m] = Pl(f, t, !0);
      Pe(l, p), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a) return ae(e) && s.set(e, Bt), Bt;
  if (z(i))
    for (let u = 0; u < i.length; u++) {
      const f = Ge(i[u]);
      Pr(f) && (l[f] = ie);
    }
  else if (i)
    for (const u in i) {
      const f = Ge(u);
      if (Pr(f)) {
        const p = i[u],
          m = (l[f] = z(p) || K(p) ? { type: p } : Pe({}, p)),
          T = m.type;
        let R = !1,
          j = !0;
        if (z(T))
          for (let O = 0; O < T.length; ++O) {
            const P = T[O],
              F = K(P) && P.name;
            if (F === "Boolean") {
              R = !0;
              break;
            } else F === "String" && (j = !1);
          }
        else R = K(T) && T.name === "Boolean";
        (m[0] = R), (m[1] = j), (R || ee(m, "default")) && o.push(f);
      }
    }
  const c = [l, o];
  return ae(e) && s.set(e, c), c;
}
function Pr(e) {
  return e[0] !== "$" && !on(e);
}
const Al = (e) => e[0] === "_" || e === "$stable",
  lr = (e) => (z(e) ? e.map(tt) : [tt(e)]),
  Ha = (e, t, n) => {
    if (t._n) return t;
    const s = da((...r) => lr(t(...r)), n);
    return (s._c = !1), s;
  },
  Ml = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Al(r)) continue;
      const i = e[r];
      if (K(i)) t[r] = Ha(r, i, s);
      else if (i != null) {
        const l = lr(i);
        t[r] = () => l;
      }
    }
  },
  Il = (e, t) => {
    const n = lr(t);
    e.slots.default = () => n;
  },
  Ll = (e, t, n) => {
    for (const s in t) (n || s !== "_") && (e[s] = t[s]);
  },
  Wa = (e, t, n) => {
    const s = (e.slots = Cl());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Ll(s, t, n), n && Ui(s, "_", r, !0)) : Ml(t, s);
    } else t && Il(e, t);
  },
  Ua = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      l = ie;
    if (s.shapeFlag & 32) {
      const o = t._;
      o
        ? n && o === 1
          ? (i = !1)
          : Ll(r, t, n)
        : ((i = !t.$stable), Ml(t, r)),
        (l = t);
    } else t && (Il(e, t), (l = { default: 1 }));
    if (i) for (const o in r) !Al(o) && l[o] == null && delete r[o];
  },
  De = sc;
function Ba(e) {
  return Ga(e);
}
function Ga(e, t) {
  const n = Qn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: l,
      createText: o,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: p,
      setScopeId: m = nt,
      insertStaticContent: T,
    } = e,
    R = (
      d,
      h,
      _,
      x = null,
      E = null,
      w = null,
      I = void 0,
      M = null,
      A = !!h.dynamicChildren
    ) => {
      if (d === h) return;
      d && !nn(d, h) && ((x = y(d)), Re(d, E, w, !0), (d = null)),
        h.patchFlag === -2 && ((A = !1), (h.dynamicChildren = null));
      const { type: C, ref: B, shapeFlag: k } = h;
      switch (C) {
        case Pn:
          j(d, h, _, x);
          break;
        case Nt:
          O(d, h, _, x);
          break;
        case Nn:
          d == null && P(h, _, x, I);
          break;
        case ze:
          pe(d, h, _, x, E, w, I, M, A);
          break;
        default:
          k & 1
            ? W(d, h, _, x, E, w, I, M, A)
            : k & 6
            ? Ae(d, h, _, x, E, w, I, M, A)
            : (k & 64 || k & 128) && C.process(d, h, _, x, E, w, I, M, A, V);
      }
      B != null && E && Un(B, d && d.ref, w, h || d, !h);
    },
    j = (d, h, _, x) => {
      if (d == null) s((h.el = o(h.children)), _, x);
      else {
        const E = (h.el = d.el);
        h.children !== d.children && c(E, h.children);
      }
    },
    O = (d, h, _, x) => {
      d == null ? s((h.el = a(h.children || "")), _, x) : (h.el = d.el);
    },
    P = (d, h, _, x) => {
      [d.el, d.anchor] = T(d.children, h, _, x, d.el, d.anchor);
    },
    F = ({ el: d, anchor: h }, _, x) => {
      let E;
      for (; d && d !== h; ) (E = p(d)), s(d, _, x), (d = E);
      s(h, _, x);
    },
    S = ({ el: d, anchor: h }) => {
      let _;
      for (; d && d !== h; ) (_ = p(d)), r(d), (d = _);
      r(h);
    },
    W = (d, h, _, x, E, w, I, M, A) => {
      h.type === "svg" ? (I = "svg") : h.type === "math" && (I = "mathml"),
        d == null ? q(h, _, x, E, w, I, M, A) : Fe(d, h, E, w, I, M, A);
    },
    q = (d, h, _, x, E, w, I, M) => {
      let A, C;
      const { props: B, shapeFlag: k, transition: N, dirs: b } = d;
      if (
        ((A = d.el = l(d.type, w, B && B.is, B)),
        k & 8
          ? u(A, d.children)
          : k & 16 && le(d.children, A, null, x, E, gs(d, w), I, M),
        b && Mt(d, null, x, "created"),
        $(A, d, d.scopeId, I, x),
        B)
      ) {
        for (const U in B) U !== "value" && !on(U) && i(A, U, null, B[U], w, x);
        "value" in B && i(A, "value", null, B.value, w),
          (C = B.onVnodeBeforeMount) && Xe(C, x, d);
      }
      b && Mt(d, null, x, "beforeMount");
      const v = qa(E, N);
      v && N.beforeEnter(A),
        s(A, h, _),
        ((C = B && B.onVnodeMounted) || v || b) &&
          De(() => {
            C && Xe(C, x, d), v && N.enter(A), b && Mt(d, null, x, "mounted");
          }, E);
    },
    $ = (d, h, _, x, E) => {
      if ((_ && m(d, _), x)) for (let w = 0; w < x.length; w++) m(d, x[w]);
      if (E) {
        let w = E.subTree;
        if (
          h === w ||
          (jl(w.type) && (w.ssContent === h || w.ssFallback === h))
        ) {
          const I = E.vnode;
          $(d, I, I.scopeId, I.slotScopeIds, E.parent);
        }
      }
    },
    le = (d, h, _, x, E, w, I, M, A = 0) => {
      for (let C = A; C < d.length; C++) {
        const B = (d[C] = M ? yt(d[C]) : tt(d[C]));
        R(null, B, h, _, x, E, w, I, M);
      }
    },
    Fe = (d, h, _, x, E, w, I) => {
      const M = (h.el = d.el);
      let { patchFlag: A, dynamicChildren: C, dirs: B } = h;
      A |= d.patchFlag & 16;
      const k = d.props || ie,
        N = h.props || ie;
      let b;
      if (
        (_ && It(_, !1),
        (b = N.onVnodeBeforeUpdate) && Xe(b, _, h, d),
        B && Mt(h, d, _, "beforeUpdate"),
        _ && It(_, !0),
        ((k.innerHTML && N.innerHTML == null) ||
          (k.textContent && N.textContent == null)) &&
          u(M, ""),
        C
          ? we(d.dynamicChildren, C, M, _, x, gs(h, E), w)
          : I || J(d, h, M, null, _, x, gs(h, E), w, !1),
        A > 0)
      ) {
        if (A & 16) Ee(M, k, N, _, E);
        else if (
          (A & 2 && k.class !== N.class && i(M, "class", null, N.class, E),
          A & 4 && i(M, "style", k.style, N.style, E),
          A & 8)
        ) {
          const v = h.dynamicProps;
          for (let U = 0; U < v.length; U++) {
            const G = v[U],
              fe = k[G],
              me = N[G];
            (me !== fe || G === "value") && i(M, G, fe, me, E, _);
          }
        }
        A & 1 && d.children !== h.children && u(M, h.children);
      } else !I && C == null && Ee(M, k, N, _, E);
      ((b = N.onVnodeUpdated) || B) &&
        De(() => {
          b && Xe(b, _, h, d), B && Mt(h, d, _, "updated");
        }, x);
    },
    we = (d, h, _, x, E, w, I) => {
      for (let M = 0; M < h.length; M++) {
        const A = d[M],
          C = h[M],
          B =
            A.el && (A.type === ze || !nn(A, C) || A.shapeFlag & 70)
              ? f(A.el)
              : _;
        R(A, C, B, null, x, E, w, I, !0);
      }
    },
    Ee = (d, h, _, x, E) => {
      if (h !== _) {
        if (h !== ie)
          for (const w in h) !on(w) && !(w in _) && i(d, w, h[w], null, E, x);
        for (const w in _) {
          if (on(w)) continue;
          const I = _[w],
            M = h[w];
          I !== M && w !== "value" && i(d, w, M, I, E, x);
        }
        "value" in _ && i(d, "value", h.value, _.value, E);
      }
    },
    pe = (d, h, _, x, E, w, I, M, A) => {
      const C = (h.el = d ? d.el : o("")),
        B = (h.anchor = d ? d.anchor : o(""));
      let { patchFlag: k, dynamicChildren: N, slotScopeIds: b } = h;
      b && (M = M ? M.concat(b) : b),
        d == null
          ? (s(C, _, x), s(B, _, x), le(h.children || [], _, B, E, w, I, M, A))
          : k > 0 && k & 64 && N && d.dynamicChildren
          ? (we(d.dynamicChildren, N, _, E, w, I, M),
            (h.key != null || (E && h === E.subTree)) && Fl(d, h, !0))
          : J(d, h, _, B, E, w, I, M, A);
    },
    Ae = (d, h, _, x, E, w, I, M, A) => {
      (h.slotScopeIds = M),
        d == null
          ? h.shapeFlag & 512
            ? E.ctx.activate(h, _, x, I, A)
            : At(h, _, x, E, w, I, A)
          : gt(d, h, A);
    },
    At = (d, h, _, x, E, w, I) => {
      const M = (d.component = fc(d, x, E));
      if ((xl(d) && (M.ctx.renderer = V), dc(M, !1, I), M.asyncDep)) {
        if ((E && E.registerDep(M, he, I), !d.el)) {
          const A = (M.subTree = de(Nt));
          O(null, A, h, _);
        }
      } else he(M, d, h, _, E, w, I);
    },
    gt = (d, h, _) => {
      const x = (h.component = d.component);
      if (tc(d, h, _))
        if (x.asyncDep && !x.asyncResolved) {
          Z(x, h, _);
          return;
        } else (x.next = h), x.update();
      else (h.el = d.el), (x.vnode = h);
    },
    he = (d, h, _, x, E, w, I) => {
      const M = () => {
        if (d.isMounted) {
          let { next: k, bu: N, u: b, parent: v, vnode: U } = d;
          {
            const He = kl(d);
            if (He) {
              k && ((k.el = U.el), Z(d, k, I)),
                He.asyncDep.then(() => {
                  d.isUnmounted || M();
                });
              return;
            }
          }
          let G = k,
            fe;
          It(d, !1),
            k ? ((k.el = U.el), Z(d, k, I)) : (k = U),
            N && us(N),
            (fe = k.props && k.props.onVnodeBeforeUpdate) && Xe(fe, v, k, U),
            It(d, !0);
          const me = Mr(d),
            ve = d.subTree;
          (d.subTree = me),
            R(ve, me, f(ve.el), y(ve), d, E, w),
            (k.el = me.el),
            G === null && nc(d, me.el),
            b && De(b, E),
            (fe = k.props && k.props.onVnodeUpdated) &&
              De(() => Xe(fe, v, k, U), E);
        } else {
          let k;
          const { el: N, props: b } = h,
            { bm: v, m: U, parent: G, root: fe, type: me } = d,
            ve = fn(h);
          It(d, !1),
            v && us(v),
            !ve && (k = b && b.onVnodeBeforeMount) && Xe(k, G, h),
            It(d, !0);
          {
            fe.ce && fe.ce._injectChildStyle(me);
            const He = (d.subTree = Mr(d));
            R(null, He, _, x, d, E, w), (h.el = He.el);
          }
          if ((U && De(U, E), !ve && (k = b && b.onVnodeMounted))) {
            const He = h;
            De(() => Xe(k, G, He), E);
          }
          (h.shapeFlag & 256 ||
            (G && fn(G.vnode) && G.vnode.shapeFlag & 256)) &&
            d.a &&
            De(d.a, E),
            (d.isMounted = !0),
            (h = _ = x = null);
        }
      };
      d.scope.on();
      const A = (d.effect = new Ki(M));
      d.scope.off();
      const C = (d.update = A.run.bind(A)),
        B = (d.job = A.runIfDirty.bind(A));
      (B.i = d), (B.id = d.uid), (A.scheduler = () => rr(B)), It(d, !0), C();
    },
    Z = (d, h, _) => {
      h.component = d;
      const x = d.vnode.props;
      (d.vnode = h),
        (d.next = null),
        ja(d, h.props, x, _),
        Ua(d, h.children, _),
        Tt(),
        Er(d),
        Ot();
    },
    J = (d, h, _, x, E, w, I, M, A = !1) => {
      const C = d && d.children,
        B = d ? d.shapeFlag : 0,
        k = h.children,
        { patchFlag: N, shapeFlag: b } = h;
      if (N > 0) {
        if (N & 128) {
          Se(C, k, _, x, E, w, I, M, A);
          return;
        } else if (N & 256) {
          qe(C, k, _, x, E, w, I, M, A);
          return;
        }
      }
      b & 8
        ? (B & 16 && Ne(C, E, w), k !== C && u(_, k))
        : B & 16
        ? b & 16
          ? Se(C, k, _, x, E, w, I, M, A)
          : Ne(C, E, w, !0)
        : (B & 8 && u(_, ""), b & 16 && le(k, _, x, E, w, I, M, A));
    },
    qe = (d, h, _, x, E, w, I, M, A) => {
      (d = d || Bt), (h = h || Bt);
      const C = d.length,
        B = h.length,
        k = Math.min(C, B);
      let N;
      for (N = 0; N < k; N++) {
        const b = (h[N] = A ? yt(h[N]) : tt(h[N]));
        R(d[N], b, _, null, E, w, I, M, A);
      }
      C > B ? Ne(d, E, w, !0, !1, k) : le(h, _, x, E, w, I, M, A, k);
    },
    Se = (d, h, _, x, E, w, I, M, A) => {
      let C = 0;
      const B = h.length;
      let k = d.length - 1,
        N = B - 1;
      for (; C <= k && C <= N; ) {
        const b = d[C],
          v = (h[C] = A ? yt(h[C]) : tt(h[C]));
        if (nn(b, v)) R(b, v, _, null, E, w, I, M, A);
        else break;
        C++;
      }
      for (; C <= k && C <= N; ) {
        const b = d[k],
          v = (h[N] = A ? yt(h[N]) : tt(h[N]));
        if (nn(b, v)) R(b, v, _, null, E, w, I, M, A);
        else break;
        k--, N--;
      }
      if (C > k) {
        if (C <= N) {
          const b = N + 1,
            v = b < B ? h[b].el : x;
          for (; C <= N; )
            R(null, (h[C] = A ? yt(h[C]) : tt(h[C])), _, v, E, w, I, M, A), C++;
        }
      } else if (C > N) for (; C <= k; ) Re(d[C], E, w, !0), C++;
      else {
        const b = C,
          v = C,
          U = new Map();
        for (C = v; C <= N; C++) {
          const $e = (h[C] = A ? yt(h[C]) : tt(h[C]));
          $e.key != null && U.set($e.key, C);
        }
        let G,
          fe = 0;
        const me = N - v + 1;
        let ve = !1,
          He = 0;
        const Vt = new Array(me);
        for (C = 0; C < me; C++) Vt[C] = 0;
        for (C = b; C <= k; C++) {
          const $e = d[C];
          if (fe >= me) {
            Re($e, E, w, !0);
            continue;
          }
          let Ze;
          if ($e.key != null) Ze = U.get($e.key);
          else
            for (G = v; G <= N; G++)
              if (Vt[G - v] === 0 && nn($e, h[G])) {
                Ze = G;
                break;
              }
          Ze === void 0
            ? Re($e, E, w, !0)
            : ((Vt[Ze - v] = C + 1),
              Ze >= He ? (He = Ze) : (ve = !0),
              R($e, h[Ze], _, null, E, w, I, M, A),
              fe++);
        }
        const _r = ve ? za(Vt) : Bt;
        for (G = _r.length - 1, C = me - 1; C >= 0; C--) {
          const $e = v + C,
            Ze = h[$e],
            br = $e + 1 < B ? h[$e + 1].el : x;
          Vt[C] === 0
            ? R(null, Ze, _, br, E, w, I, M, A)
            : ve && (G < 0 || C !== _r[G] ? ke(Ze, _, br, 2) : G--);
        }
      }
    },
    ke = (d, h, _, x, E = null) => {
      const { el: w, type: I, transition: M, children: A, shapeFlag: C } = d;
      if (C & 6) {
        ke(d.component.subTree, h, _, x);
        return;
      }
      if (C & 128) {
        d.suspense.move(h, _, x);
        return;
      }
      if (C & 64) {
        I.move(d, h, _, V);
        return;
      }
      if (I === ze) {
        s(w, h, _);
        for (let k = 0; k < A.length; k++) ke(A[k], h, _, x);
        s(d.anchor, h, _);
        return;
      }
      if (I === Nn) {
        F(d, h, _);
        return;
      }
      if (x !== 2 && C & 1 && M)
        if (x === 0) M.beforeEnter(w), s(w, h, _), De(() => M.enter(w), E);
        else {
          const { leave: k, delayLeave: N, afterLeave: b } = M,
            v = () => s(w, h, _),
            U = () => {
              k(w, () => {
                v(), b && b();
              });
            };
          N ? N(w, v, U) : U();
        }
      else s(w, h, _);
    },
    Re = (d, h, _, x = !1, E = !1) => {
      const {
        type: w,
        props: I,
        ref: M,
        children: A,
        dynamicChildren: C,
        shapeFlag: B,
        patchFlag: k,
        dirs: N,
        cacheIndex: b,
      } = d;
      if (
        (k === -2 && (E = !1),
        M != null && Un(M, null, _, d, !0),
        b != null && (h.renderCache[b] = void 0),
        B & 256)
      ) {
        h.ctx.deactivate(d);
        return;
      }
      const v = B & 1 && N,
        U = !fn(d);
      let G;
      if ((U && (G = I && I.onVnodeBeforeUnmount) && Xe(G, h, d), B & 6))
        jt(d.component, _, x);
      else {
        if (B & 128) {
          d.suspense.unmount(_, x);
          return;
        }
        v && Mt(d, null, h, "beforeUnmount"),
          B & 64
            ? d.type.remove(d, h, _, V, x)
            : C && !C.hasOnce && (w !== ze || (k > 0 && k & 64))
            ? Ne(C, h, _, !1, !0)
            : ((w === ze && k & 384) || (!E && B & 16)) && Ne(A, h, _),
          x && _t(d);
      }
      ((U && (G = I && I.onVnodeUnmounted)) || v) &&
        De(() => {
          G && Xe(G, h, d), v && Mt(d, null, h, "unmounted");
        }, _);
    },
    _t = (d) => {
      const { type: h, el: _, anchor: x, transition: E } = d;
      if (h === ze) {
        bt(_, x);
        return;
      }
      if (h === Nn) {
        S(d);
        return;
      }
      const w = () => {
        r(_), E && !E.persisted && E.afterLeave && E.afterLeave();
      };
      if (d.shapeFlag & 1 && E && !E.persisted) {
        const { leave: I, delayLeave: M } = E,
          A = () => I(_, w);
        M ? M(d.el, w, A) : A();
      } else w();
    },
    bt = (d, h) => {
      let _;
      for (; d !== h; ) (_ = p(d)), r(d), (d = _);
      r(h);
    },
    jt = (d, h, _) => {
      const { bum: x, scope: E, job: w, subTree: I, um: M, m: A, a: C } = d;
      Ar(A),
        Ar(C),
        x && us(x),
        E.stop(),
        w && ((w.flags |= 8), Re(I, d, h, _)),
        M && De(M, h),
        De(() => {
          d.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    Ne = (d, h, _, x = !1, E = !1, w = 0) => {
      for (let I = w; I < d.length; I++) Re(d[I], h, _, x, E);
    },
    y = (d) => {
      if (d.shapeFlag & 6) return y(d.component.subTree);
      if (d.shapeFlag & 128) return d.suspense.next();
      const h = p(d.anchor || d.el),
        _ = h && h[ha];
      return _ ? p(_) : h;
    };
  let D = !1;
  const L = (d, h, _) => {
      d == null
        ? h._vnode && Re(h._vnode, null, null, !0)
        : R(h._vnode || null, d, h, null, null, null, _),
        (h._vnode = d),
        D || ((D = !0), Er(), gl(), (D = !1));
    },
    V = {
      p: R,
      um: Re,
      m: ke,
      r: _t,
      mt: At,
      mc: le,
      pc: J,
      pbc: we,
      n: y,
      o: e,
    };
  return { render: L, hydrate: void 0, createApp: $a(L) };
}
function gs({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function It({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function qa(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Fl(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (z(s) && z(r))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let o = r[i];
      o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = r[i] = yt(r[i])), (o.el = l.el)),
        !n && o.patchFlag !== -2 && Fl(l, o)),
        o.type === Pn && (o.el = l.el);
    }
}
function za(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, l, o;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (((r = n[n.length - 1]), e[r] < c)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        (o = (i + l) >> 1), e[n[o]] < c ? (i = o + 1) : (l = o);
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; ) (n[i] = l), (l = t[l]);
  return n;
}
function kl(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : kl(t);
}
function Ar(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Ka = Symbol.for("v-scx"),
  Ya = () => st(Ka);
function Kt(e, t, n) {
  return Nl(e, t, n);
}
function Nl(e, t, n = ie) {
  const { immediate: s, deep: r, flush: i, once: l } = n,
    o = Pe({}, n),
    a = (t && s) || (!t && i !== "post");
  let c;
  if (yn) {
    if (i === "sync") {
      const m = Ya();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {};
      return (m.stop = nt), (m.resume = nt), (m.pause = nt), m;
    }
  }
  const u = ye;
  o.call = (m, T, R) => it(m, u, T, R);
  let f = !1;
  i === "post"
    ? (o.scheduler = (m) => {
        De(m, u && u.suspense);
      })
    : i !== "sync" &&
      ((f = !0),
      (o.scheduler = (m, T) => {
        T ? m() : rr(m);
      })),
    (o.augmentJob = (m) => {
      t && (m.flags |= 4),
        f && ((m.flags |= 2), u && ((m.id = u.uid), (m.i = u)));
    });
  const p = aa(e, t, o);
  return yn && (c ? c.push(p) : a && p()), p;
}
function Ja(e, t, n) {
  const s = this.proxy,
    r = _e(e) ? (e.includes(".") ? $l(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  K(t) ? (i = t) : ((i = t.handler), (n = t));
  const l = An(this),
    o = Nl(r, i.bind(s), n);
  return l(), o;
}
function $l(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const Za = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ge(t)}Modifiers`] || e[`${Dt(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ie;
  let r = n;
  const i = t.startsWith("update:"),
    l = i && Za(s, t.slice(7));
  l &&
    (l.trim && (r = n.map((u) => (_e(u) ? u.trim() : u))),
    l.number && (r = n.map(Po)));
  let o,
    a = s[(o = cs(t))] || s[(o = cs(Ge(t)))];
  !a && i && (a = s[(o = cs(Dt(t)))]), a && it(a, e, 6, r);
  const c = s[o + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[o]) return;
    (e.emitted[o] = !0), it(c, e, 6, r);
  }
}
function Dl(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let l = {},
    o = !1;
  if (!K(e)) {
    const a = (c) => {
      const u = Dl(c, t, !0);
      u && ((o = !0), Pe(l, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !i && !o
    ? (ae(e) && s.set(e, null), null)
    : (z(i) ? i.forEach((a) => (l[a] = null)) : Pe(l, i),
      ae(e) && s.set(e, l),
      l);
}
function rs(e, t) {
  return !e || !Yn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, Dt(t)) || ee(e, t));
}
function Mr(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: l,
      attrs: o,
      emit: a,
      render: c,
      renderCache: u,
      props: f,
      data: p,
      setupState: m,
      ctx: T,
      inheritAttrs: R,
    } = e,
    j = Wn(e);
  let O, P;
  try {
    if (n.shapeFlag & 4) {
      const S = r || s,
        W = S;
      (O = tt(c.call(W, S, u, f, m, p, T))), (P = o);
    } else {
      const S = t;
      (O = tt(
        S.length > 1 ? S(f, { attrs: o, slots: l, emit: a }) : S(f, null)
      )),
        (P = t.props ? o : Qa(o));
    }
  } catch (S) {
    (hn.length = 0), ts(S, e, 1), (O = de(Nt));
  }
  let F = O;
  if (P && R !== !1) {
    const S = Object.keys(P),
      { shapeFlag: W } = F;
    S.length &&
      W & 7 &&
      (i && S.some(qs) && (P = ec(P, i)), (F = Jt(F, P, !1, !0)));
  }
  return (
    n.dirs &&
      ((F = Jt(F, null, !1, !0)),
      (F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ir(F, n.transition),
    (O = F),
    Wn(j),
    O
  );
}
const Qa = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Yn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  ec = (e, t) => {
    const n = {};
    for (const s in e) (!qs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function tc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: l, children: o, patchFlag: a } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? Ir(s, l, c) : !!l;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (l[p] !== s[p] && !rs(c, p)) return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable)
      ? !0
      : s === l
      ? !1
      : s
      ? l
        ? Ir(s, l, c)
        : !0
      : !!l;
  return !1;
}
function Ir(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !rs(n, i)) return !0;
  }
  return !1;
}
function nc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const jl = (e) => e.__isSuspense;
function sc(e, t) {
  t && t.pendingBranch
    ? z(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : fa(e);
}
const ze = Symbol.for("v-fgt"),
  Pn = Symbol.for("v-txt"),
  Nt = Symbol.for("v-cmt"),
  Nn = Symbol.for("v-stc"),
  hn = [];
let Ve = null;
function rt(e = !1) {
  hn.push((Ve = e ? null : []));
}
function rc() {
  hn.pop(), (Ve = hn[hn.length - 1] || null);
}
let xn = 1;
function Lr(e, t = !1) {
  (xn += e), e < 0 && Ve && t && (Ve.hasOnce = !0);
}
function Vl(e) {
  return (
    (e.dynamicChildren = xn > 0 ? Ve || Bt : null),
    rc(),
    xn > 0 && Ve && Ve.push(e),
    e
  );
}
function ht(e, t, n, s, r, i) {
  return Vl(g(e, t, n, s, r, i, !0));
}
function ic(e, t, n, s, r) {
  return Vl(de(e, t, n, s, r, !0));
}
function Gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function nn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hl = ({ key: e }) => e ?? null,
  $n = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? _e(e) || be(e) || K(e)
        ? { i: Ue, r: e, k: t, f: !!n }
        : e
      : null
  );
function g(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === ze ? 0 : 1,
  l = !1,
  o = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hl(t),
    ref: t && $n(t),
    scopeId: bl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ue,
  };
  return (
    o
      ? (or(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= _e(n) ? 8 : 16),
    xn > 0 &&
      !l &&
      Ve &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      Ve.push(a),
    a
  );
}
const de = lc;
function lc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Oa) && (e = Nt), Gn(e))) {
    const o = Jt(e, t, !0);
    return (
      n && or(o, n),
      xn > 0 &&
        !i &&
        Ve &&
        (o.shapeFlag & 6 ? (Ve[Ve.indexOf(e)] = o) : Ve.push(o)),
      (o.patchFlag = -2),
      o
    );
  }
  if ((_c(e) && (e = e.__vccOpts), t)) {
    t = oc(t);
    let { class: o, style: a } = t;
    o && !_e(o) && (t.class = gn(o)),
      ae(a) && (sr(a) && !z(a) && (a = Pe({}, a)), (t.style = Ys(a)));
  }
  const l = _e(e) ? 1 : jl(e) ? 128 : pa(e) ? 64 : ae(e) ? 4 : K(e) ? 2 : 0;
  return g(e, t, n, s, r, l, i, !0);
}
function oc(e) {
  return e ? (sr(e) || Tl(e) ? Pe({}, e) : e) : null;
}
function Jt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: a } = e,
    c = t ? ac(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Hl(c),
      ref:
        t && t.ref
          ? n && i
            ? z(i)
              ? i.concat($n(t))
              : [i, $n(t)]
            : $n(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: o,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ze ? (l === -1 ? 16 : l | 16) : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Jt(e.ssContent),
      ssFallback: e.ssFallback && Jt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && s && ir(u, a.clone(u)), u;
}
function Wl(e = " ", t = 0) {
  return de(Pn, null, e, t);
}
function et(e, t) {
  const n = de(Nn, null, e);
  return (n.staticCount = t), n;
}
function Fr(e = "", t = !1) {
  return t ? (rt(), ic(Nt, null, e)) : de(Nt, null, e);
}
function tt(e) {
  return e == null || typeof e == "boolean"
    ? de(Nt)
    : z(e)
    ? de(ze, null, e.slice())
    : Gn(e)
    ? yt(e)
    : de(Pn, null, String(e));
}
function yt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Jt(e);
}
function or(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (z(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), or(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Tl(t)
        ? (t._ctx = Ue)
        : r === 3 &&
          Ue &&
          (Ue.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    K(t)
      ? ((t = { default: t, _ctx: Ue }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Wl(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ac(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = gn([t.class, s.class]));
      else if (r === "style") t.style = Ys([t.style, s.style]);
      else if (Yn(r)) {
        const i = t[r],
          l = s[r];
        l &&
          i !== l &&
          !(z(i) && i.includes(l)) &&
          (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Xe(e, t, n, s = null) {
  it(e, t, 7, [n, s]);
}
const cc = Sl();
let uc = 0;
function fc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || cc,
    i = {
      uid: uc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new zi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Pl(s, r),
      emitsOptions: Dl(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: s.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Xa.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let ye = null;
const ar = () => ye || Ue;
let qn, Ls;
{
  const e = Qn(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
        }
      );
    };
  (qn = t("__VUE_INSTANCE_SETTERS__", (n) => (ye = n))),
    (Ls = t("__VUE_SSR_SETTERS__", (n) => (yn = n)));
}
const An = (e) => {
    const t = ye;
    return (
      qn(e),
      e.scope.on(),
      () => {
        e.scope.off(), qn(t);
      }
    );
  },
  kr = () => {
    ye && ye.scope.off(), qn(null);
  };
function Ul(e) {
  return e.vnode.shapeFlag & 4;
}
let yn = !1;
function dc(e, t = !1, n = !1) {
  t && Ls(t);
  const { props: s, children: r } = e.vnode,
    i = Ul(e);
  Da(e, s, i, t), Wa(e, r, n);
  const l = i ? hc(e, t) : void 0;
  return t && Ls(!1), l;
}
function hc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Aa));
  const { setup: s } = n;
  if (s) {
    Tt();
    const r = (e.setupContext = s.length > 1 ? mc(e) : null),
      i = An(e),
      l = Tn(s, e, 0, [e.props, r]),
      o = Vi(l);
    if ((Ot(), i(), (o || e.sp) && !fn(e) && vl(e), o)) {
      if ((l.then(kr, kr), t))
        return l
          .then((a) => {
            Nr(e, a);
          })
          .catch((a) => {
            ts(a, e, 0);
          });
      e.asyncDep = l;
    } else Nr(e, l);
  } else Bl(e);
}
function Nr(e, t, n) {
  K(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ae(t) && (e.setupState = dl(t)),
    Bl(e);
}
function Bl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || nt);
  {
    const r = An(e);
    Tt();
    try {
      Ma(e);
    } finally {
      Ot(), r();
    }
  }
}
const pc = {
  get(e, t) {
    return Ce(e, "get", ""), e[t];
  },
};
function mc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, pc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function cr(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(dl(na(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in dn) return dn[n](e);
          },
          has(t, n) {
            return n in t || n in dn;
          },
        }))
    : e.proxy;
}
function gc(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function _c(e) {
  return K(e) && "__vccOpts" in e;
}
const xe = (e, t) => la(e, t, yn);
function is(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ae(t) && !z(t)
      ? Gn(t)
        ? de(e, null, [t])
        : de(e, t)
      : de(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Gn(n) && (n = [n]),
      de(e, t, n));
}
const bc = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Fs;
const $r = typeof window < "u" && window.trustedTypes;
if ($r)
  try {
    Fs = $r.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Gl = Fs ? (e) => Fs.createHTML(e) : (e) => e,
  vc = "http://www.w3.org/2000/svg",
  xc = "http://www.w3.org/1998/Math/MathML",
  at = typeof document < "u" ? document : null,
  Dr = at && at.createElement("template"),
  yc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? at.createElementNS(vc, e)
          : t === "mathml"
          ? at.createElementNS(xc, e)
          : n
          ? at.createElement(e, { is: n })
          : at.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => at.createTextNode(e),
    createComment: (e) => at.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => at.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const l = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Dr.innerHTML = Gl(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const o = Dr.content;
        if (s === "svg" || s === "mathml") {
          const a = o.firstChild;
          for (; a.firstChild; ) o.appendChild(a.firstChild);
          o.removeChild(a);
        }
        t.insertBefore(o, n);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  wc = Symbol("_vtc");
function Ec(e, t, n) {
  const s = e[wc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const jr = Symbol("_vod"),
  Sc = Symbol("_vsh"),
  Rc = Symbol(""),
  Cc = /(^|;)\s*display\s*:/;
function Tc(e, t, n) {
  const s = e.style,
    r = _e(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (_e(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && Dn(s, o, "");
        }
      else for (const l in t) n[l] == null && Dn(s, l, "");
    for (const l in n) l === "display" && (i = !0), Dn(s, l, n[l]);
  } else if (r) {
    if (t !== n) {
      const l = s[Rc];
      l && (n += ";" + l), (s.cssText = n), (i = Cc.test(n));
    }
  } else t && e.removeAttribute("style");
  jr in e && ((e[jr] = i ? s.display : ""), e[Sc] && (s.display = "none"));
}
const Vr = /\s*!important$/;
function Dn(e, t, n) {
  if (z(n)) n.forEach((s) => Dn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Oc(e, t);
    Vr.test(n)
      ? e.setProperty(Dt(s), n.replace(Vr, ""), "important")
      : (e[s] = n);
  }
}
const Hr = ["Webkit", "Moz", "ms"],
  _s = {};
function Oc(e, t) {
  const n = _s[t];
  if (n) return n;
  let s = Ge(t);
  if (s !== "filter" && s in e) return (_s[t] = s);
  s = Xn(s);
  for (let r = 0; r < Hr.length; r++) {
    const i = Hr[r] + s;
    if (i in e) return (_s[t] = i);
  }
  return t;
}
const Wr = "http://www.w3.org/1999/xlink";
function Ur(e, t, n, s, r, i = ko(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Wr, t.slice(6, t.length))
      : e.setAttributeNS(Wr, t, n)
    : n == null || (i && !Bi(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : Ct(n) ? String(n) : n);
}
function Br(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Gl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (o !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean"
      ? (n = Bi(n))
      : n == null && o === "string"
      ? ((n = ""), (l = !0))
      : o === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(r || t);
}
function Pc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ac(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Gr = Symbol("_vei");
function Mc(e, t, n, s, r = null) {
  const i = e[Gr] || (e[Gr] = {}),
    l = i[t];
  if (s && l) l.value = s;
  else {
    const [o, a] = Ic(t);
    if (s) {
      const c = (i[t] = kc(s, r));
      Pc(e, o, c, a);
    } else l && (Ac(e, o, l, a), (i[t] = void 0));
  }
}
const qr = /(?:Once|Passive|Capture)$/;
function Ic(e) {
  let t;
  if (qr.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(qr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Dt(e.slice(2)), t];
}
let bs = 0;
const Lc = Promise.resolve(),
  Fc = () => bs || (Lc.then(() => (bs = 0)), (bs = Date.now()));
function kc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    it(Nc(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Fc()), n;
}
function Nc(e, t) {
  if (z(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const zr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  $c = (e, t, n, s, r, i) => {
    const l = r === "svg";
    t === "class"
      ? Ec(e, s, l)
      : t === "style"
      ? Tc(e, n, s)
      : Yn(t)
      ? qs(t) || Mc(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Dc(e, t, s, l)
        )
      ? (Br(e, t, s),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Ur(e, t, s, l, i, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !_e(s))
      ? Br(e, Ge(t), s, i, t)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Ur(e, t, s, l));
  };
function Dc(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && zr(t) && K(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return zr(t) && _e(n) ? !1 : t in e;
}
const jc = Pe({ patchProp: $c }, yc);
let Kr;
function Vc() {
  return Kr || (Kr = Ba(jc));
}
const Hc = (...e) => {
  const t = Vc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Uc(s);
      if (!r) return;
      const i = t._component;
      !K(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
      const l = n(r, !1, Wc(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        l
      );
    }),
    t
  );
};
function Wc(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Uc(e) {
  return _e(e) ? document.querySelector(e) : e;
}
const ql = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  Bc = {},
  Gc = { class: "app" };
function qc(e, t) {
  const n = Ta("router-view");
  return (
    rt(), ht("div", Gc, [de(n), t[0] || (t[0] = g("h1", null, "ddd", -1))])
  );
}
const zc = ql(Bc, [["render", qc]]);
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Ut = typeof document < "u";
function zl(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Kc(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && zl(e.default))
  );
}
const X = Object.assign;
function vs(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Je(r) ? r.map(e) : e(r);
  }
  return n;
}
const pn = () => {},
  Je = Array.isArray,
  Kl = /#/g,
  Yc = /&/g,
  Jc = /\//g,
  Zc = /=/g,
  Xc = /\?/g,
  Yl = /\+/g,
  Qc = /%5B/g,
  eu = /%5D/g,
  Jl = /%5E/g,
  tu = /%60/g,
  Zl = /%7B/g,
  nu = /%7C/g,
  Xl = /%7D/g,
  su = /%20/g;
function ur(e) {
  return encodeURI("" + e)
    .replace(nu, "|")
    .replace(Qc, "[")
    .replace(eu, "]");
}
function ru(e) {
  return ur(e).replace(Zl, "{").replace(Xl, "}").replace(Jl, "^");
}
function ks(e) {
  return ur(e)
    .replace(Yl, "%2B")
    .replace(su, "+")
    .replace(Kl, "%23")
    .replace(Yc, "%26")
    .replace(tu, "`")
    .replace(Zl, "{")
    .replace(Xl, "}")
    .replace(Jl, "^");
}
function iu(e) {
  return ks(e).replace(Zc, "%3D");
}
function lu(e) {
  return ur(e).replace(Kl, "%23").replace(Xc, "%3F");
}
function ou(e) {
  return e == null ? "" : lu(e).replace(Jc, "%2F");
}
function wn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const au = /\/$/,
  cu = (e) => e.replace(au, "");
function xs(e, t, n = "/") {
  let s,
    r = {},
    i = "",
    l = "";
  const o = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    o < a && o >= 0 && (a = -1),
    a > -1 &&
      ((s = t.slice(0, a)),
      (i = t.slice(a + 1, o > -1 ? o : t.length)),
      (r = e(i))),
    o > -1 && ((s = s || t.slice(0, o)), (l = t.slice(o, t.length))),
    (s = hu(s ?? t, n)),
    { fullPath: s + (i && "?") + i + l, path: s, query: r, hash: wn(l) }
  );
}
function uu(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Yr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function fu(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    Zt(t.matched[s], n.matched[r]) &&
    Ql(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Zt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ql(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!du(e[n], t[n])) return !1;
  return !0;
}
function du(e, t) {
  return Je(e) ? Jr(e, t) : Je(t) ? Jr(t, e) : e === t;
}
function Jr(e, t) {
  return Je(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function hu(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let i = n.length - 1,
    l,
    o;
  for (l = 0; l < s.length; l++)
    if (((o = s[l]), o !== "."))
      if (o === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + s.slice(l).join("/");
}
const vt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var En;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(En || (En = {}));
var mn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(mn || (mn = {}));
function pu(e) {
  if (!e)
    if (Ut) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), cu(e);
}
const mu = /^[^#]+#/;
function gu(e, t) {
  return e.replace(mu, "#") + t;
}
function _u(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const ls = () => ({ left: window.scrollX, top: window.scrollY });
function bu(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = _u(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Zr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ns = new Map();
function vu(e, t) {
  Ns.set(e, t);
}
function xu(e) {
  const t = Ns.get(e);
  return Ns.delete(e), t;
}
let yu = () => location.protocol + "//" + location.host;
function eo(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let o = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = r.slice(o);
    return a[0] !== "/" && (a = "/" + a), Yr(a, "");
  }
  return Yr(n, e) + s + r;
}
function wu(e, t, n, s) {
  let r = [],
    i = [],
    l = null;
  const o = ({ state: p }) => {
    const m = eo(e, location),
      T = n.value,
      R = t.value;
    let j = 0;
    if (p) {
      if (((n.value = m), (t.value = p), l && l === T)) {
        l = null;
        return;
      }
      j = R ? p.position - R.position : 0;
    } else s(m);
    r.forEach((O) => {
      O(n.value, T, {
        delta: j,
        type: En.pop,
        direction: j ? (j > 0 ? mn.forward : mn.back) : mn.unknown,
      });
    });
  };
  function a() {
    l = n.value;
  }
  function c(p) {
    r.push(p);
    const m = () => {
      const T = r.indexOf(p);
      T > -1 && r.splice(T, 1);
    };
    return i.push(m), m;
  }
  function u() {
    const { history: p } = window;
    p.state && p.replaceState(X({}, p.state, { scroll: ls() }), "");
  }
  function f() {
    for (const p of i) p();
    (i = []),
      window.removeEventListener("popstate", o),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", o),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: a, listen: c, destroy: f }
  );
}
function Xr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? ls() : null,
  };
}
function Eu(e) {
  const { history: t, location: n } = window,
    s = { value: eo(e, n) },
    r = { value: t.state };
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(a, c, u) {
    const f = e.indexOf("#"),
      p =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a
          : yu() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", p), (r.value = c);
    } catch (m) {
      console.error(m), n[u ? "replace" : "assign"](p);
    }
  }
  function l(a, c) {
    const u = X({}, t.state, Xr(r.value.back, a, r.value.forward, !0), c, {
      position: r.value.position,
    });
    i(a, u, !0), (s.value = a);
  }
  function o(a, c) {
    const u = X({}, r.value, t.state, { forward: a, scroll: ls() });
    i(u.current, u, !0);
    const f = X({}, Xr(s.value, a, null), { position: u.position + 1 }, c);
    i(a, f, !1), (s.value = a);
  }
  return { location: s, state: r, push: o, replace: l };
}
function Su(e) {
  e = pu(e);
  const t = Eu(e),
    n = wu(e, t.state, t.location, t.replace);
  function s(i, l = !0) {
    l || n.pauseListeners(), history.go(i);
  }
  const r = X(
    { location: "", base: e, go: s, createHref: gu.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function Ru(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    Su(e)
  );
}
function Cu(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function to(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const no = Symbol("");
var Qr;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Qr || (Qr = {}));
function Xt(e, t) {
  return X(new Error(), { type: e, [no]: !0 }, t);
}
function ot(e, t) {
  return e instanceof Error && no in e && (t == null || !!(e.type & t));
}
const ei = "[^/]+?",
  Tu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ou = /[.+*?^${}()[\]/\\]/g;
function Pu(e, t) {
  const n = X({}, Tu, t),
    s = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (r += "/");
    for (let f = 0; f < c.length; f++) {
      const p = c[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        f || (r += "/"), (r += p.value.replace(Ou, "\\$&")), (m += 40);
      else if (p.type === 1) {
        const { value: T, repeatable: R, optional: j, regexp: O } = p;
        i.push({ name: T, repeatable: R, optional: j });
        const P = O || ei;
        if (P !== ei) {
          m += 10;
          try {
            new RegExp(`(${P})`);
          } catch (S) {
            throw new Error(
              `Invalid custom RegExp for param "${T}" (${P}): ` + S.message
            );
          }
        }
        let F = R ? `((?:${P})(?:/(?:${P}))*)` : `(${P})`;
        f || (F = j && c.length < 2 ? `(?:/${F})` : "/" + F),
          j && (F += "?"),
          (r += F),
          (m += 20),
          j && (m += -8),
          R && (m += -20),
          P === ".*" && (m += -50);
      }
      u.push(m);
    }
    s.push(u);
  }
  if (n.strict && n.end) {
    const c = s.length - 1;
    s[c][s[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"),
    n.end ? (r += "$") : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const l = new RegExp(r, n.sensitive ? "" : "i");
  function o(c) {
    const u = c.match(l),
      f = {};
    if (!u) return null;
    for (let p = 1; p < u.length; p++) {
      const m = u[p] || "",
        T = i[p - 1];
      f[T.name] = m && T.repeatable ? m.split("/") : m;
    }
    return f;
  }
  function a(c) {
    let u = "",
      f = !1;
    for (const p of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const m of p)
        if (m.type === 0) u += m.value;
        else if (m.type === 1) {
          const { value: T, repeatable: R, optional: j } = m,
            O = T in c ? c[T] : "";
          if (Je(O) && !R)
            throw new Error(
              `Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`
            );
          const P = Je(O) ? O.join("/") : O;
          if (!P)
            if (j)
              p.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${T}"`);
          u += P;
        }
    }
    return u || "/";
  }
  return { re: l, score: s, keys: i, parse: o, stringify: a };
}
function Au(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function so(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const i = Au(s[n], r[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (ti(s)) return 1;
    if (ti(r)) return -1;
  }
  return r.length - s.length;
}
function ti(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Mu = { type: 0, value: "" },
  Iu = /[a-zA-Z0-9_]/;
function Lu(e) {
  if (!e) return [[]];
  if (e === "/") return [[Mu]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let i;
  function l() {
    i && r.push(i), (i = []);
  }
  let o = 0,
    a,
    c = "",
    u = "";
  function f() {
    c &&
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (a === "*" || a === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function p() {
    c += a;
  }
  for (; o < e.length; ) {
    if (((a = e[o++]), a === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (c && f(), l()) : a === ":" ? (f(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = s);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : Iu.test(a)
          ? p()
          : (f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && o--);
        break;
      case 2:
        a === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + a)
            : (n = 3)
          : (u += a);
        break;
      case 3:
        f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && o--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), l(), r;
}
function Fu(e, t, n) {
  const s = Pu(Lu(e.path), n),
    r = X(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function ku(e, t) {
  const n = [],
    s = new Map();
  t = ii({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(f) {
    return s.get(f);
  }
  function i(f, p, m) {
    const T = !m,
      R = si(f);
    R.aliasOf = m && m.record;
    const j = ii(t, f),
      O = [R];
    if ("alias" in f) {
      const S = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const W of S)
        O.push(
          si(
            X({}, R, {
              components: m ? m.record.components : R.components,
              path: W,
              aliasOf: m ? m.record : R,
            })
          )
        );
    }
    let P, F;
    for (const S of O) {
      const { path: W } = S;
      if (p && W[0] !== "/") {
        const q = p.record.path,
          $ = q[q.length - 1] === "/" ? "" : "/";
        S.path = p.record.path + (W && $ + W);
      }
      if (
        ((P = Fu(S, p, j)),
        m
          ? m.alias.push(P)
          : ((F = F || P),
            F !== P && F.alias.push(P),
            T && f.name && !ri(P) && l(f.name)),
        ro(P) && a(P),
        R.children)
      ) {
        const q = R.children;
        for (let $ = 0; $ < q.length; $++) i(q[$], P, m && m.children[$]);
      }
      m = m || P;
    }
    return F
      ? () => {
          l(F);
        }
      : pn;
  }
  function l(f) {
    if (to(f)) {
      const p = s.get(f);
      p &&
        (s.delete(f),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(l),
        p.alias.forEach(l));
    } else {
      const p = n.indexOf(f);
      p > -1 &&
        (n.splice(p, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(l),
        f.alias.forEach(l));
    }
  }
  function o() {
    return n;
  }
  function a(f) {
    const p = Du(f, n);
    n.splice(p, 0, f), f.record.name && !ri(f) && s.set(f.record.name, f);
  }
  function c(f, p) {
    let m,
      T = {},
      R,
      j;
    if ("name" in f && f.name) {
      if (((m = s.get(f.name)), !m)) throw Xt(1, { location: f });
      (j = m.record.name),
        (T = X(
          ni(
            p.params,
            m.keys
              .filter((F) => !F.optional)
              .concat(m.parent ? m.parent.keys.filter((F) => F.optional) : [])
              .map((F) => F.name)
          ),
          f.params &&
            ni(
              f.params,
              m.keys.map((F) => F.name)
            )
        )),
        (R = m.stringify(T));
    } else if (f.path != null)
      (R = f.path),
        (m = n.find((F) => F.re.test(R))),
        m && ((T = m.parse(R)), (j = m.record.name));
    else {
      if (((m = p.name ? s.get(p.name) : n.find((F) => F.re.test(p.path))), !m))
        throw Xt(1, { location: f, currentLocation: p });
      (j = m.record.name),
        (T = X({}, p.params, f.params)),
        (R = m.stringify(T));
    }
    const O = [];
    let P = m;
    for (; P; ) O.unshift(P.record), (P = P.parent);
    return { name: j, path: R, params: T, matched: O, meta: $u(O) };
  }
  e.forEach((f) => i(f));
  function u() {
    (n.length = 0), s.clear();
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: l,
    clearRoutes: u,
    getRoutes: o,
    getRecordMatcher: r,
  };
}
function ni(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function si(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Nu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Nu(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function ri(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function $u(e) {
  return e.reduce((t, n) => X(t, n.meta), {});
}
function ii(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function Du(e, t) {
  let n = 0,
    s = t.length;
  for (; n !== s; ) {
    const i = (n + s) >> 1;
    so(e, t[i]) < 0 ? (s = i) : (n = i + 1);
  }
  const r = ju(e);
  return r && (s = t.lastIndexOf(r, s - 1)), s;
}
function ju(e) {
  let t = e;
  for (; (t = t.parent); ) if (ro(t) && so(e, t) === 0) return t;
}
function ro({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function Vu(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(Yl, " "),
      l = i.indexOf("="),
      o = wn(l < 0 ? i : i.slice(0, l)),
      a = l < 0 ? null : wn(i.slice(l + 1));
    if (o in t) {
      let c = t[o];
      Je(c) || (c = t[o] = [c]), c.push(a);
    } else t[o] = a;
  }
  return t;
}
function li(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = iu(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Je(s) ? s.map((i) => i && ks(i)) : [s && ks(s)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function Hu(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = Je(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const Wu = Symbol(""),
  oi = Symbol(""),
  fr = Symbol(""),
  io = Symbol(""),
  $s = Symbol("");
function sn() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function wt(e, t, n, s, r, i = (l) => l()) {
  const l = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((o, a) => {
      const c = (p) => {
          p === !1
            ? a(Xt(4, { from: n, to: t }))
            : p instanceof Error
            ? a(p)
            : Cu(p)
            ? a(Xt(2, { from: t, to: p }))
            : (l &&
                s.enterCallbacks[r] === l &&
                typeof p == "function" &&
                l.push(p),
              o());
        },
        u = i(() => e.call(s && s.instances[r], t, n, c));
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(c)), f.catch((p) => a(p));
    });
}
function ys(e, t, n, s, r = (i) => i()) {
  const i = [];
  for (const l of e)
    for (const o in l.components) {
      let a = l.components[o];
      if (!(t !== "beforeRouteEnter" && !l.instances[o]))
        if (zl(a)) {
          const u = (a.__vccOpts || a)[t];
          u && i.push(wt(u, n, s, l, o, r));
        } else {
          let c = a();
          i.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${o}" at "${l.path}"`
                );
              const f = Kc(u) ? u.default : u;
              (l.mods[o] = u), (l.components[o] = f);
              const m = (f.__vccOpts || f)[t];
              return m && wt(m, n, s, l, o, r)();
            })
          );
        }
    }
  return i;
}
function ai(e) {
  const t = st(fr),
    n = st(io),
    s = xe(() => {
      const a = dt(e.to);
      return t.resolve(a);
    }),
    r = xe(() => {
      const { matched: a } = s.value,
        { length: c } = a,
        u = a[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const p = f.findIndex(Zt.bind(null, u));
      if (p > -1) return p;
      const m = ci(a[c - 2]);
      return c > 1 && ci(u) === m && f[f.length - 1].path !== m
        ? f.findIndex(Zt.bind(null, a[c - 2]))
        : p;
    }),
    i = xe(() => r.value > -1 && zu(n.params, s.value.params)),
    l = xe(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Ql(n.params, s.value.params)
    );
  function o(a = {}) {
    if (qu(a)) {
      const c = t[dt(e.replace) ? "replace" : "push"](dt(e.to)).catch(pn);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => c),
        c
      );
    }
    return Promise.resolve();
  }
  return {
    route: s,
    href: xe(() => s.value.href),
    isActive: i,
    isExactActive: l,
    navigate: o,
  };
}
function Uu(e) {
  return e.length === 1 ? e[0] : e;
}
const Bu = On({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ai,
    setup(e, { slots: t }) {
      const n = es(ai(e)),
        { options: s } = st(fr),
        r = xe(() => ({
          [ui(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ui(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && Uu(t.default(n));
        return e.custom
          ? i
          : is(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i
            );
      };
    },
  }),
  Gu = Bu;
function qu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function zu(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Je(r) || r.length !== s.length || s.some((i, l) => i !== r[l]))
      return !1;
  }
  return !0;
}
function ci(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const ui = (e, t, n) => e ?? t ?? n,
  Ku = On({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = st($s),
        r = xe(() => e.route || s.value),
        i = st(oi, 0),
        l = xe(() => {
          let c = dt(i);
          const { matched: u } = r.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        o = xe(() => r.value.matched[l.value]);
      kn(
        oi,
        xe(() => l.value + 1)
      ),
        kn(Wu, o),
        kn($s, r);
      const a = Be();
      return (
        Kt(
          () => [a.value, o.value, e.name],
          ([c, u, f], [p, m, T]) => {
            u &&
              ((u.instances[f] = c),
              m &&
                m !== u &&
                c &&
                c === p &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              c &&
                u &&
                (!m || !Zt(u, m) || !p) &&
                (u.enterCallbacks[f] || []).forEach((R) => R(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = r.value,
            u = e.name,
            f = o.value,
            p = f && f.components[u];
          if (!p) return fi(n.default, { Component: p, route: c });
          const m = f.props[u],
            T = m
              ? m === !0
                ? c.params
                : typeof m == "function"
                ? m(c)
                : m
              : null,
            j = is(
              p,
              X({}, T, t, {
                onVnodeUnmounted: (O) => {
                  O.component.isUnmounted && (f.instances[u] = null);
                },
                ref: a,
              })
            );
          return fi(n.default, { Component: j, route: c }) || j;
        }
      );
    },
  });
function fi(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Yu = Ku;
function Ju(e) {
  const t = ku(e.routes, e),
    n = e.parseQuery || Vu,
    s = e.stringifyQuery || li,
    r = e.history,
    i = sn(),
    l = sn(),
    o = sn(),
    a = ul(vt);
  let c = vt;
  Ut &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = vs.bind(null, (y) => "" + y),
    f = vs.bind(null, ou),
    p = vs.bind(null, wn);
  function m(y, D) {
    let L, V;
    return (
      to(y) ? ((L = t.getRecordMatcher(y)), (V = D)) : (V = y), t.addRoute(V, L)
    );
  }
  function T(y) {
    const D = t.getRecordMatcher(y);
    D && t.removeRoute(D);
  }
  function R() {
    return t.getRoutes().map((y) => y.record);
  }
  function j(y) {
    return !!t.getRecordMatcher(y);
  }
  function O(y, D) {
    if (((D = X({}, D || a.value)), typeof y == "string")) {
      const _ = xs(n, y, D.path),
        x = t.resolve({ path: _.path }, D),
        E = r.createHref(_.fullPath);
      return X(_, x, {
        params: p(x.params),
        hash: wn(_.hash),
        redirectedFrom: void 0,
        href: E,
      });
    }
    let L;
    if (y.path != null) L = X({}, y, { path: xs(n, y.path, D.path).path });
    else {
      const _ = X({}, y.params);
      for (const x in _) _[x] == null && delete _[x];
      (L = X({}, y, { params: f(_) })), (D.params = f(D.params));
    }
    const V = t.resolve(L, D),
      ne = y.hash || "";
    V.params = u(p(V.params));
    const d = uu(s, X({}, y, { hash: ru(ne), path: V.path })),
      h = r.createHref(d);
    return X(
      { fullPath: d, hash: ne, query: s === li ? Hu(y.query) : y.query || {} },
      V,
      { redirectedFrom: void 0, href: h }
    );
  }
  function P(y) {
    return typeof y == "string" ? xs(n, y, a.value.path) : X({}, y);
  }
  function F(y, D) {
    if (c !== y) return Xt(8, { from: D, to: y });
  }
  function S(y) {
    return $(y);
  }
  function W(y) {
    return S(X(P(y), { replace: !0 }));
  }
  function q(y) {
    const D = y.matched[y.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: L } = D;
      let V = typeof L == "function" ? L(y) : L;
      return (
        typeof V == "string" &&
          ((V = V.includes("?") || V.includes("#") ? (V = P(V)) : { path: V }),
          (V.params = {})),
        X(
          {
            query: y.query,
            hash: y.hash,
            params: V.path != null ? {} : y.params,
          },
          V
        )
      );
    }
  }
  function $(y, D) {
    const L = (c = O(y)),
      V = a.value,
      ne = y.state,
      d = y.force,
      h = y.replace === !0,
      _ = q(L);
    if (_)
      return $(
        X(P(_), {
          state: typeof _ == "object" ? X({}, ne, _.state) : ne,
          force: d,
          replace: h,
        }),
        D || L
      );
    const x = L;
    x.redirectedFrom = D;
    let E;
    return (
      !d && fu(s, V, L) && ((E = Xt(16, { to: x, from: V })), ke(V, V, !0, !1)),
      (E ? Promise.resolve(E) : we(x, V))
        .catch((w) => (ot(w) ? (ot(w, 2) ? w : Se(w)) : J(w, x, V)))
        .then((w) => {
          if (w) {
            if (ot(w, 2))
              return $(
                X({ replace: h }, P(w.to), {
                  state: typeof w.to == "object" ? X({}, ne, w.to.state) : ne,
                  force: d,
                }),
                D || x
              );
          } else w = pe(x, V, !0, h, ne);
          return Ee(x, V, w), w;
        })
    );
  }
  function le(y, D) {
    const L = F(y, D);
    return L ? Promise.reject(L) : Promise.resolve();
  }
  function Fe(y) {
    const D = bt.values().next().value;
    return D && typeof D.runWithContext == "function"
      ? D.runWithContext(y)
      : y();
  }
  function we(y, D) {
    let L;
    const [V, ne, d] = Zu(y, D);
    L = ys(V.reverse(), "beforeRouteLeave", y, D);
    for (const _ of V)
      _.leaveGuards.forEach((x) => {
        L.push(wt(x, y, D));
      });
    const h = le.bind(null, y, D);
    return (
      L.push(h),
      Ne(L)
        .then(() => {
          L = [];
          for (const _ of i.list()) L.push(wt(_, y, D));
          return L.push(h), Ne(L);
        })
        .then(() => {
          L = ys(ne, "beforeRouteUpdate", y, D);
          for (const _ of ne)
            _.updateGuards.forEach((x) => {
              L.push(wt(x, y, D));
            });
          return L.push(h), Ne(L);
        })
        .then(() => {
          L = [];
          for (const _ of d)
            if (_.beforeEnter)
              if (Je(_.beforeEnter))
                for (const x of _.beforeEnter) L.push(wt(x, y, D));
              else L.push(wt(_.beforeEnter, y, D));
          return L.push(h), Ne(L);
        })
        .then(
          () => (
            y.matched.forEach((_) => (_.enterCallbacks = {})),
            (L = ys(d, "beforeRouteEnter", y, D, Fe)),
            L.push(h),
            Ne(L)
          )
        )
        .then(() => {
          L = [];
          for (const _ of l.list()) L.push(wt(_, y, D));
          return L.push(h), Ne(L);
        })
        .catch((_) => (ot(_, 8) ? _ : Promise.reject(_)))
    );
  }
  function Ee(y, D, L) {
    o.list().forEach((V) => Fe(() => V(y, D, L)));
  }
  function pe(y, D, L, V, ne) {
    const d = F(y, D);
    if (d) return d;
    const h = D === vt,
      _ = Ut ? history.state : {};
    L &&
      (V || h
        ? r.replace(y.fullPath, X({ scroll: h && _ && _.scroll }, ne))
        : r.push(y.fullPath, ne)),
      (a.value = y),
      ke(y, D, L, h),
      Se();
  }
  let Ae;
  function At() {
    Ae ||
      (Ae = r.listen((y, D, L) => {
        if (!jt.listening) return;
        const V = O(y),
          ne = q(V);
        if (ne) {
          $(X(ne, { replace: !0, force: !0 }), V).catch(pn);
          return;
        }
        c = V;
        const d = a.value;
        Ut && vu(Zr(d.fullPath, L.delta), ls()),
          we(V, d)
            .catch((h) =>
              ot(h, 12)
                ? h
                : ot(h, 2)
                ? ($(X(P(h.to), { force: !0 }), V)
                    .then((_) => {
                      ot(_, 20) &&
                        !L.delta &&
                        L.type === En.pop &&
                        r.go(-1, !1);
                    })
                    .catch(pn),
                  Promise.reject())
                : (L.delta && r.go(-L.delta, !1), J(h, V, d))
            )
            .then((h) => {
              (h = h || pe(V, d, !1)),
                h &&
                  (L.delta && !ot(h, 8)
                    ? r.go(-L.delta, !1)
                    : L.type === En.pop && ot(h, 20) && r.go(-1, !1)),
                Ee(V, d, h);
            })
            .catch(pn);
      }));
  }
  let gt = sn(),
    he = sn(),
    Z;
  function J(y, D, L) {
    Se(y);
    const V = he.list();
    return (
      V.length ? V.forEach((ne) => ne(y, D, L)) : console.error(y),
      Promise.reject(y)
    );
  }
  function qe() {
    return Z && a.value !== vt
      ? Promise.resolve()
      : new Promise((y, D) => {
          gt.add([y, D]);
        });
  }
  function Se(y) {
    return (
      Z ||
        ((Z = !y),
        At(),
        gt.list().forEach(([D, L]) => (y ? L(y) : D())),
        gt.reset()),
      y
    );
  }
  function ke(y, D, L, V) {
    const { scrollBehavior: ne } = e;
    if (!Ut || !ne) return Promise.resolve();
    const d =
      (!L && xu(Zr(y.fullPath, 0))) ||
      ((V || !L) && history.state && history.state.scroll) ||
      null;
    return pl()
      .then(() => ne(y, D, d))
      .then((h) => h && bu(h))
      .catch((h) => J(h, y, D));
  }
  const Re = (y) => r.go(y);
  let _t;
  const bt = new Set(),
    jt = {
      currentRoute: a,
      listening: !0,
      addRoute: m,
      removeRoute: T,
      clearRoutes: t.clearRoutes,
      hasRoute: j,
      getRoutes: R,
      resolve: O,
      options: e,
      push: S,
      replace: W,
      go: Re,
      back: () => Re(-1),
      forward: () => Re(1),
      beforeEach: i.add,
      beforeResolve: l.add,
      afterEach: o.add,
      onError: he.add,
      isReady: qe,
      install(y) {
        const D = this;
        y.component("RouterLink", Gu),
          y.component("RouterView", Yu),
          (y.config.globalProperties.$router = D),
          Object.defineProperty(y.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => dt(a),
          }),
          Ut &&
            !_t &&
            a.value === vt &&
            ((_t = !0), S(r.location).catch((ne) => {}));
        const L = {};
        for (const ne in vt)
          Object.defineProperty(L, ne, {
            get: () => a.value[ne],
            enumerable: !0,
          });
        y.provide(fr, D), y.provide(io, al(L)), y.provide($s, a);
        const V = y.unmount;
        bt.add(y),
          (y.unmount = function () {
            bt.delete(y),
              bt.size < 1 &&
                ((c = vt),
                Ae && Ae(),
                (Ae = null),
                (a.value = vt),
                (_t = !1),
                (Z = !1)),
              V();
          });
      },
    };
  function Ne(y) {
    return y.reduce((D, L) => D.then(() => Fe(L)), Promise.resolve());
  }
  return jt;
}
function Zu(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let l = 0; l < i; l++) {
    const o = t.matched[l];
    o && (e.matched.find((c) => Zt(c, o)) ? s.push(o) : n.push(o));
    const a = e.matched[l];
    a && (t.matched.find((c) => Zt(c, a)) || r.push(a));
  }
  return [n, s, r];
}
const Xu = "/mohammadfalah/assets/logo-BbLrnmwE.png";
/*!
 * shared v12.0.0-alpha.2
 * (c) 2016-present kazuya kawaguchi and contributors
 * Released under the MIT License.
 */ const di = typeof window < "u",
  Pt = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Qu = (e, t, n) => ef({ l: e, k: t, s: n }),
  ef = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  Te = (e) => typeof e == "number" && isFinite(e),
  tf = (e) => dr(e) === "[object Date]",
  zn = (e) => dr(e) === "[object RegExp]",
  os = (e) => Y(e) && Object.keys(e).length === 0,
  Oe = Object.assign,
  nf = Object.create,
  se = (e = null) => nf(e);
let hi;
const Yt = () =>
  hi ||
  (hi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : se());
function pi(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const sf = Object.prototype.hasOwnProperty;
function $t(e, t) {
  return sf.call(e, t);
}
const ge = Array.isArray,
  ce = (e) => typeof e == "function",
  H = (e) => typeof e == "string",
  ue = (e) => typeof e == "boolean",
  te = (e) => e !== null && typeof e == "object",
  rf = (e) => te(e) && ce(e.then) && ce(e.catch),
  lo = Object.prototype.toString,
  dr = (e) => lo.call(e),
  Y = (e) => dr(e) === "[object Object]",
  lf = (e) =>
    e == null
      ? ""
      : ge(e) || (Y(e) && e.toString === lo)
      ? JSON.stringify(e, null, 2)
      : String(e);
function of(e, t = "") {
  return e.reduce((n, s, r) => (r === 0 ? n + s : n + t + s), "");
}
function af(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Fn = (e) => !te(e) || ge(e);
function jn(e, t) {
  if (Fn(e) || Fn(t)) throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: r } = n.pop();
    Object.keys(s).forEach((i) => {
      i !== "__proto__" &&
        (te(s[i]) && !te(r[i]) && (r[i] = Array.isArray(s[i]) ? [] : se()),
        Fn(r[i]) || Fn(s[i])
          ? (r[i] = s[i])
          : n.push({ src: s[i], des: r[i] }));
    });
  }
}
/*!
 * message-compiler v12.0.0-alpha.2
 * (c) 2016-present kazuya kawaguchi and contributors
 * Released under the MIT License.
 */ const cf = 17;
function oo(e, t, n = {}) {
  const { domain: s, messages: r, args: i } = n,
    l = e,
    o = new SyntaxError(String(l));
  return (o.code = e), (o.domain = s), o;
}
/*!
 * core-base v12.0.0-alpha.2
 * (c) 2016-present kazuya kawaguchi and contributors
 * Released under the MIT License.
 */ function uf() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
    (Yt().__INTLIFY_PROD_DEVTOOLS__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" &&
      (Yt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const ff = ["t", "type"];
function df(e) {
  return hf(e, ff);
}
function hf(e, t, n) {
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    if ($t(e, r) && e[r] != null) return e[r];
  }
  return n;
}
function Qt(e) {
  return te(e) && df(e) === 0 && ($t(e, "b") || $t(e, "body"));
}
let Sn = null;
function pf(e) {
  Sn = e;
}
function mf(e, t, n) {
  Sn &&
    Sn.emit("i18n:init", {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: n,
    });
}
const gf = _f("function:translate");
function _f(e) {
  return (t) => Sn && Sn.emit(e, t);
}
const ut = {
    INVALID_ARGUMENT: cf,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23,
  },
  bf = 24;
function ft(e) {
  return oo(e, null, void 0);
}
function hr(e, t) {
  return t.locale != null ? mi(t.locale) : mi(e.locale);
}
let ws;
function mi(e) {
  if (H(e)) return e;
  if (ce(e)) {
    if (e.resolvedOnce && ws != null) return ws;
    if (e.constructor.name === "Function") {
      const t = e();
      if (rf(t)) throw ft(ut.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (ws = t);
    } else throw ft(ut.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw ft(ut.NOT_SUPPORT_LOCALE_TYPE);
}
function vf(e, t, n) {
  return [
    ...new Set([n, ...(ge(t) ? t : te(t) ? Object.keys(t) : H(t) ? [t] : [n])]),
  ];
}
function xf(e, t, n) {
  const s = H(n) ? n : Kn,
    r = e;
  r.__localeChainCache || (r.__localeChainCache = new Map());
  let i = r.__localeChainCache.get(s);
  if (!i) {
    i = [];
    let l = [n];
    for (; ge(l); ) l = gi(i, l, t);
    const o = ge(t) || !Y(t) ? t : t.default ? t.default : null;
    (l = H(o) ? [o] : o), ge(l) && gi(i, l, !1), r.__localeChainCache.set(s, i);
  }
  return i;
}
function gi(e, t, n) {
  let s = !0;
  for (let r = 0; r < t.length && ue(s); r++) {
    const i = t[r];
    H(i) && (s = yf(e, t[r], n));
  }
  return s;
}
function yf(e, t, n) {
  let s;
  const r = t.split("-");
  do {
    const i = r.join("-");
    (s = wf(e, i, n)), r.splice(-1, 1);
  } while (r.length && s === !0);
  return s;
}
function wf(e, t, n) {
  let s = !1;
  if (!e.includes(t) && ((s = !0), t)) {
    s = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (ge(n) || Y(n)) && n[r] && (s = n[r]);
  }
  return s;
}
function Ef(e, t) {
  return te(e) ? e[t] : null;
}
const Sf = "12.0.0-alpha.2",
  as = -1,
  Kn = "en-US",
  _i = "",
  bi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Rf() {
  return {
    upper: (e, t) =>
      t === "text" && H(e)
        ? e.toUpperCase()
        : t === "vnode" && te(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && H(e)
        ? e.toLowerCase()
        : t === "vnode" && te(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && H(e)
        ? bi(e)
        : t === "vnode" && te(e) && "__v_isVNode" in e
        ? bi(e.children)
        : e,
  };
}
let Cf,
  ao = null;
const Tf = (e) => {
    ao = e;
  },
  Of = () => ao;
let co = null;
const vi = (e) => {
    co = e;
  },
  Pf = () => co;
let xi = 0;
function Af(e = {}) {
  const t = ce(e.onWarn) ? e.onWarn : af,
    n = H(e.version) ? e.version : Sf,
    s = H(e.locale) || ce(e.locale) ? e.locale : Kn,
    r = ce(s) ? Kn : s,
    i =
      ge(e.fallbackLocale) ||
      Y(e.fallbackLocale) ||
      H(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : r,
    l = Y(e.messages) ? e.messages : Es(r),
    o = Y(e.datetimeFormats) ? e.datetimeFormats : Es(r),
    a = Y(e.numberFormats) ? e.numberFormats : Es(r),
    c = Oe(se(), e.modifiers, Rf()),
    u = e.pluralRules || se(),
    f = ce(e.missing) ? e.missing : null,
    p = ue(e.missingWarn) || zn(e.missingWarn) ? e.missingWarn : !0,
    m = ue(e.fallbackWarn) || zn(e.fallbackWarn) ? e.fallbackWarn : !0,
    T = !!e.fallbackFormat,
    R = !!e.unresolving,
    j = ce(e.postTranslation) ? e.postTranslation : null,
    O = Y(e.processor) ? e.processor : null,
    P = ue(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    F = !!e.escapeParameter,
    S = ce(e.messageCompiler) ? e.messageCompiler : Cf,
    W = ce(e.messageResolver) ? e.messageResolver : Ef,
    q = ce(e.localeFallbacker) ? e.localeFallbacker : vf,
    $ = te(e.fallbackContext) ? e.fallbackContext : void 0,
    le = e,
    Fe = te(le.__datetimeFormatters) ? le.__datetimeFormatters : new Map(),
    we = te(le.__numberFormatters) ? le.__numberFormatters : new Map(),
    Ee = te(le.__meta) ? le.__meta : {};
  xi++;
  const pe = {
    version: n,
    cid: xi,
    locale: s,
    fallbackLocale: i,
    messages: l,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: p,
    fallbackWarn: m,
    fallbackFormat: T,
    unresolving: R,
    postTranslation: j,
    processor: O,
    warnHtmlMessage: P,
    escapeParameter: F,
    messageCompiler: S,
    messageResolver: W,
    localeFallbacker: q,
    fallbackContext: $,
    onWarn: t,
    __meta: Ee,
  };
  return (
    (pe.datetimeFormats = o),
    (pe.numberFormats = a),
    (pe.__datetimeFormatters = Fe),
    (pe.__numberFormatters = we),
    __INTLIFY_PROD_DEVTOOLS__ && mf(pe, n, Ee),
    pe
  );
}
const Es = (e) => ({ [e]: se() });
function pr(e, t, n, s, r) {
  const { missing: i, onWarn: l } = e;
  if (i !== null) {
    const o = i(e, n, t, r);
    return H(o) ? o : t;
  } else return t;
}
function rn(e, t, n) {
  const s = e;
  (s.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function Mf(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function If(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let s = n + 1; s < t.length; s++) if (Mf(e, t[s])) return !0;
  return !1;
}
function yi(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: s,
      fallbackLocale: r,
      onWarn: i,
      localeFallbacker: l,
    } = e,
    { __datetimeFormatters: o } = e,
    [a, c, u, f] = Ds(...t),
    p = ue(u.missingWarn) ? u.missingWarn : e.missingWarn;
  ue(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const m = !!u.part,
    T = hr(e, u),
    R = l(e, r, T);
  if (!H(a) || a === "") return new Intl.DateTimeFormat(T, f).format(c);
  let j = {},
    O,
    P = null;
  const F = "datetime format";
  for (
    let q = 0;
    q < R.length && ((O = R[q]), (j = n[O] || {}), (P = j[a]), !Y(P));
    q++
  )
    pr(e, a, O, p, F);
  if (!Y(P) || !H(O)) return s ? as : a;
  let S = `${O}__${a}`;
  os(f) || (S = `${S}__${JSON.stringify(f)}`);
  let W = o.get(S);
  return (
    W || ((W = new Intl.DateTimeFormat(O, Oe({}, P, f))), o.set(S, W)),
    m ? W.formatToParts(c) : W.format(c)
  );
}
const uo = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function Ds(...e) {
  const [t, n, s, r] = e,
    i = se();
  let l = se(),
    o;
  if (H(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a) throw ft(ut.INVALID_ISO_DATE_ARGUMENT);
    const c = a[3]
      ? a[3].trim().startsWith("T")
        ? `${a[1].trim()}${a[3].trim()}`
        : `${a[1].trim()}T${a[3].trim()}`
      : a[1].trim();
    o = new Date(c);
    try {
      o.toISOString();
    } catch {
      throw ft(ut.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (tf(t)) {
    if (isNaN(t.getTime())) throw ft(ut.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (Te(t)) o = t;
  else throw ft(ut.INVALID_ARGUMENT);
  return (
    H(n)
      ? (i.key = n)
      : Y(n) &&
        Object.keys(n).forEach((a) => {
          uo.includes(a) ? (l[a] = n[a]) : (i[a] = n[a]);
        }),
    H(s) ? (i.locale = s) : Y(s) && (l = s),
    Y(r) && (l = r),
    [i.key || "", o, i, l]
  );
}
function wi(e, t, n) {
  const s = e;
  for (const r in n) {
    const i = `${t}__${r}`;
    s.__datetimeFormatters.has(i) && s.__datetimeFormatters.delete(i);
  }
}
function Ei(e, ...t) {
  const {
      numberFormats: n,
      unresolving: s,
      fallbackLocale: r,
      onWarn: i,
      localeFallbacker: l,
    } = e,
    { __numberFormatters: o } = e,
    [a, c, u, f] = js(...t),
    p = ue(u.missingWarn) ? u.missingWarn : e.missingWarn;
  ue(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const m = !!u.part,
    T = hr(e, u),
    R = l(e, r, T);
  if (!H(a) || a === "") return new Intl.NumberFormat(T, f).format(c);
  let j = {},
    O,
    P = null;
  const F = "number format";
  for (
    let q = 0;
    q < R.length && ((O = R[q]), (j = n[O] || {}), (P = j[a]), !Y(P));
    q++
  )
    pr(e, a, O, p, F);
  if (!Y(P) || !H(O)) return s ? as : a;
  let S = `${O}__${a}`;
  os(f) || (S = `${S}__${JSON.stringify(f)}`);
  let W = o.get(S);
  return (
    W || ((W = new Intl.NumberFormat(O, Oe({}, P, f))), o.set(S, W)),
    m ? W.formatToParts(c) : W.format(c)
  );
}
const fo = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function js(...e) {
  const [t, n, s, r] = e,
    i = se();
  let l = se();
  if (!Te(t)) throw ft(ut.INVALID_ARGUMENT);
  const o = t;
  return (
    H(n)
      ? (i.key = n)
      : Y(n) &&
        Object.keys(n).forEach((a) => {
          fo.includes(a) ? (l[a] = n[a]) : (i[a] = n[a]);
        }),
    H(s) ? (i.locale = s) : Y(s) && (l = s),
    Y(r) && (l = r),
    [i.key || "", o, i, l]
  );
}
function Si(e, t, n) {
  const s = e;
  for (const r in n) {
    const i = `${t}__${r}`;
    s.__numberFormatters.has(i) && s.__numberFormatters.delete(i);
  }
}
const Lf = (e) => e,
  Ff = (e) => "",
  kf = "text",
  Nf = (e) => (e.length === 0 ? "" : of(e)),
  $f = lf;
function Ri(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function Df(e) {
  const t = Te(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Te(e.named.count) || Te(e.named.n))
    ? Te(e.named.count)
      ? e.named.count
      : Te(e.named.n)
      ? e.named.n
      : t
    : t;
}
function jf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Vf(e = {}) {
  const t = e.locale,
    n = Df(e),
    s =
      te(e.pluralRules) && H(t) && ce(e.pluralRules[t]) ? e.pluralRules[t] : Ri,
    r = te(e.pluralRules) && H(t) && ce(e.pluralRules[t]) ? Ri : void 0,
    i = (O) => O[s(n, O.length, r)],
    l = e.list || [],
    o = (O) => l[O],
    a = e.named || se();
  Te(e.pluralIndex) && jf(n, a);
  const c = (O) => a[O];
  function u(O, P) {
    const F = ce(e.messages)
      ? e.messages(O, !!P)
      : te(e.messages)
      ? e.messages[O]
      : !1;
    return F || (e.parent ? e.parent.message(O) : Ff);
  }
  const f = (O) => (e.modifiers ? e.modifiers[O] : Lf),
    p =
      Y(e.processor) && ce(e.processor.normalize) ? e.processor.normalize : Nf,
    m =
      Y(e.processor) && ce(e.processor.interpolate)
        ? e.processor.interpolate
        : $f,
    T = Y(e.processor) && H(e.processor.type) ? e.processor.type : kf,
    j = {
      list: o,
      named: c,
      plural: i,
      linked: (O, ...P) => {
        const [F, S] = P;
        let W = "text",
          q = "";
        P.length === 1
          ? te(F)
            ? ((q = F.modifier || q), (W = F.type || W))
            : H(F) && (q = F || q)
          : P.length === 2 && (H(F) && (q = F || q), H(S) && (W = S || W));
        const $ = u(O, !0)(j),
          le = W === "vnode" && ge($) && q ? $[0] : $;
        return q ? f(q)(le, W) : le;
      },
      message: u,
      type: T,
      interpolate: m,
      normalize: p,
      values: Oe(se(), l, a),
    };
  return j;
}
const Ci = () => "",
  We = (e) => ce(e);
function Ti(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: s,
      unresolving: r,
      messageCompiler: i,
      fallbackLocale: l,
      messages: o,
    } = e,
    [a, c] = Vs(...t),
    u = ue(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = ue(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    p = ue(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    m = !!c.resolvedMessage,
    T =
      H(c.default) || ue(c.default)
        ? ue(c.default)
          ? i
            ? a
            : () => a
          : c.default
        : n
        ? i
          ? a
          : () => a
        : null,
    R = n || (T != null && (H(T) || ce(T))),
    j = hr(e, c);
  p && Hf(c);
  let [O, P, F] = m ? [a, j, o[j] || se()] : ho(e, a, j, l, f, u),
    S = O,
    W = a;
  if (
    (!m && !(H(S) || Qt(S) || We(S)) && R && ((S = T), (W = S)),
    !m && (!(H(S) || Qt(S) || We(S)) || !H(P)))
  )
    return r ? as : a;
  let q = !1;
  const $ = () => {
      q = !0;
    },
    le = We(S) ? S : po(e, a, P, S, W, $);
  if (q) return S;
  const Fe = Bf(e, P, F, c),
    we = Vf(Fe),
    Ee = Wf(e, le, we),
    pe = s ? s(Ee, a) : Ee;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const Ae = {
      timestamp: Date.now(),
      key: H(a) ? a : We(S) ? S.key : "",
      locale: P || (We(S) ? S.locale : ""),
      format: H(S) ? S : We(S) ? S.source : "",
      message: pe,
    };
    (Ae.meta = Oe({}, e.__meta, Of() || {})), gf(Ae);
  }
  return pe;
}
function Hf(e) {
  ge(e.list)
    ? (e.list = e.list.map((t) => (H(t) ? pi(t) : t)))
    : te(e.named) &&
      Object.keys(e.named).forEach((t) => {
        H(e.named[t]) && (e.named[t] = pi(e.named[t]));
      });
}
function ho(e, t, n, s, r, i) {
  const { messages: l, onWarn: o, messageResolver: a, localeFallbacker: c } = e,
    u = c(e, s, n);
  let f = se(),
    p,
    m = null;
  const T = "translate";
  for (
    let R = 0;
    R < u.length &&
    ((p = u[R]),
    (f = l[p] || se()),
    (m = a(f, t)) === null && (m = f[t]),
    !(H(m) || Qt(m) || We(m)));
    R++
  )
    if (!If(p, u)) {
      const j = pr(e, t, p, i, T);
      j !== t && (m = j);
    }
  return [m, p, f];
}
function po(e, t, n, s, r, i) {
  const { messageCompiler: l, warnHtmlMessage: o } = e;
  if (We(s)) {
    const c = s;
    return (c.locale = c.locale || n), (c.key = c.key || t), c;
  }
  if (l == null) {
    const c = () => s;
    return (c.locale = n), (c.key = t), c;
  }
  const a = l(s, Uf(e, n, r, s, o, i));
  return (a.locale = n), (a.key = t), (a.source = s), a;
}
function Wf(e, t, n) {
  return t(n);
}
function Vs(...e) {
  const [t, n, s] = e,
    r = se();
  if (!H(t) && !Te(t) && !We(t) && !Qt(t)) throw ft(ut.INVALID_ARGUMENT);
  const i = Te(t) ? String(t) : (We(t), t);
  return (
    Te(n)
      ? (r.plural = n)
      : H(n)
      ? (r.default = n)
      : Y(n) && !os(n)
      ? (r.named = n)
      : ge(n) && (r.list = n),
    Te(s) ? (r.plural = s) : H(s) ? (r.default = s) : Y(s) && Oe(r, s),
    [i, r]
  );
}
function Uf(e, t, n, s, r, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (l) => {
      throw (i && i(l), l);
    },
    onCacheKey: (l) => Qu(t, n, l),
  };
}
function Bf(e, t, n, s) {
  const {
      modifiers: r,
      pluralRules: i,
      messageResolver: l,
      fallbackLocale: o,
      fallbackWarn: a,
      missingWarn: c,
      fallbackContext: u,
    } = e,
    p = {
      locale: t,
      modifiers: r,
      pluralRules: i,
      messages: (m, T) => {
        let R = l(n, m);
        if (R == null && (u || T)) {
          const [, , j] = ho(u || e, m, t, o, a, c);
          R = l(j, m);
        }
        if (H(R) || Qt(R)) {
          let j = !1;
          const P = po(e, m, t, R, m, () => {
            j = !0;
          });
          return j ? Ci : P;
        } else return We(R) ? R : Ci;
      },
    };
  return (
    e.processor && (p.processor = e.processor),
    s.list && (p.list = s.list),
    s.named && (p.named = s.named),
    Te(s.plural) && (p.pluralIndex = s.plural),
    p
  );
}
uf();
/*!
 * vue-i18n-core v12.0.0-alpha.2
 * (c) 2016-present kazuya kawaguchi and contributors
 * Released under the MIT License.
 */ const Gf = "12.0.0-alpha.2";
function qf() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" &&
    (Yt().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" &&
      (Yt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
      (Yt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const pt = {
  UNEXPECTED_RETURN_TYPE: bf,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32,
};
function Rt(e, ...t) {
  return oo(e, null, void 0);
}
const Hs = Pt("__translateVNode"),
  Ws = Pt("__datetimeParts"),
  Us = Pt("__numberParts"),
  zf = Pt("__setPluralRules"),
  Kf = Pt("__injectWithOption"),
  Bs = Pt("__dispose");
function Rn(e) {
  if (!te(e)) return e;
  for (const t in e)
    if ($t(e, t))
      if (!t.includes(".")) te(e[t]) && Rn(e[t]);
      else {
        const n = t.split("."),
          s = n.length - 1;
        let r = e,
          i = !1;
        for (let l = 0; l < s; l++) {
          if (n[l] === "__proto__") throw new Error(`unsafe key: ${n[l]}`);
          if ((n[l] in r || (r[n[l]] = se()), !te(r[n[l]]))) {
            i = !0;
            break;
          }
          r = r[n[l]];
        }
        i || ((r[n[s]] = e[t]), delete e[t]), te(r[n[s]]) && Rn(r[n[s]]);
      }
  return e;
}
function mo(e, t) {
  const { messages: n, __i18n: s, messageResolver: r, flatJson: i } = t,
    l = Y(n) ? n : ge(s) ? se() : { [e]: se() };
  if (
    (ge(s) &&
      s.forEach((o) => {
        if ("locale" in o && "resource" in o) {
          const { locale: a, resource: c } = o;
          a ? ((l[a] = l[a] || se()), jn(c, l[a])) : jn(c, l);
        } else H(o) && jn(JSON.parse(o), l);
      }),
    r == null && i)
  )
    for (const o in l) $t(l, o) && Rn(l[o]);
  return l;
}
function go(e) {
  return e.type;
}
function Yf(e, t, n) {
  let s = te(t.messages) ? t.messages : se();
  "__i18nGlobal" in n &&
    (s = mo(e.locale.value, { messages: s, __i18n: n.__i18nGlobal }));
  const r = Object.keys(s);
  r.length &&
    r.forEach((i) => {
      e.mergeLocaleMessage(i, s[i]);
    });
  {
    if (te(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length &&
        i.forEach((l) => {
          e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
        });
    }
    if (te(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length &&
        i.forEach((l) => {
          e.mergeNumberFormat(l, t.numberFormats[l]);
        });
    }
  }
}
function Oi(e) {
  return de(Pn, null, e, 0);
}
const Pi = "__INTLIFY_META__",
  Ai = () => [],
  Jf = () => !1;
let Mi = 0;
function Ii(e) {
  return (t, n, s, r) => e(n, s, ar() || void 0, r);
}
const Zf = () => {
  const e = ar();
  let t = null;
  return e && (t = go(e)[Pi]) ? { [Pi]: t } : null;
};
function _o(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    s = t === void 0,
    r = e.flatJson,
    i = di ? Be : ul;
  let l = ue(e.inheritLocale) ? e.inheritLocale : !0;
  const o = i(t && l ? t.locale.value : H(e.locale) ? e.locale : Kn),
    a = i(
      t && l
        ? t.fallbackLocale.value
        : H(e.fallbackLocale) ||
          ge(e.fallbackLocale) ||
          Y(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : o.value
    ),
    c = i(mo(o.value, e)),
    u = i(Y(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }),
    f = i(Y(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let p = t
      ? t.missingWarn
      : ue(e.missingWarn) || zn(e.missingWarn)
      ? e.missingWarn
      : !0,
    m = t
      ? t.fallbackWarn
      : ue(e.fallbackWarn) || zn(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    T = t ? t.fallbackRoot : ue(e.fallbackRoot) ? e.fallbackRoot : !0,
    R = !!e.fallbackFormat,
    j = ce(e.missing) ? e.missing : null,
    O = ce(e.missing) ? Ii(e.missing) : null,
    P = ce(e.postTranslation) ? e.postTranslation : null,
    F = t ? t.warnHtmlMessage : ue(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    S = !!e.escapeParameter;
  const W = t ? t.modifiers : Y(e.modifiers) ? e.modifiers : {};
  let q = e.pluralRules || (t && t.pluralRules),
    $;
  ($ = (() => {
    s && vi(null);
    const b = {
      version: Gf,
      locale: o.value,
      fallbackLocale: a.value,
      messages: c.value,
      modifiers: W,
      pluralRules: q,
      missing: O === null ? void 0 : O,
      missingWarn: p,
      fallbackWarn: m,
      fallbackFormat: R,
      unresolving: !0,
      postTranslation: P === null ? void 0 : P,
      warnHtmlMessage: F,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" },
    };
    (b.datetimeFormats = u.value),
      (b.numberFormats = f.value),
      (b.__datetimeFormatters = Y($) ? $.__datetimeFormatters : void 0),
      (b.__numberFormatters = Y($) ? $.__numberFormatters : void 0);
    const v = Af(b);
    return s && vi(v), v;
  })()),
    rn($, o.value, a.value);
  function Fe() {
    return [o.value, a.value, c.value, u.value, f.value];
  }
  const we = xe({
      get: () => o.value,
      set: (b) => {
        ($.locale = b), (o.value = b);
      },
    }),
    Ee = xe({
      get: () => a.value,
      set: (b) => {
        ($.fallbackLocale = b), (a.value = b), rn($, o.value, b);
      },
    }),
    pe = xe(() => c.value),
    Ae = xe(() => Object.keys(c.value).sort()),
    At = xe(() => u.value),
    gt = xe(() => f.value);
  function he() {
    return ce(P) ? P : null;
  }
  function Z(b) {
    (P = b), ($.postTranslation = b);
  }
  function J() {
    return j;
  }
  function qe(b) {
    b !== null && (O = Ii(b)), (j = b), ($.missing = O);
  }
  const Se = (b, v, U, G, fe, me) => {
    Fe();
    let ve;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
        s || ($.fallbackContext = t ? Pf() : void 0),
        (ve = b($));
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, s || ($.fallbackContext = void 0);
    }
    if (
      (U !== "translate exists" && Te(ve) && ve === as) ||
      (U === "translate exists" && !ve)
    ) {
      const [He, Vt] = v();
      return t && T ? G(t) : fe(He);
    } else {
      if (me(ve)) return ve;
      throw Rt(pt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ke(...b) {
    return Se(
      (v) => Reflect.apply(Ti, null, [v, ...b]),
      () => Vs(...b),
      "translate",
      (v) => Reflect.apply(v.t, v, [...b]),
      (v) => v,
      (v) => H(v)
    );
  }
  function Re(...b) {
    const [v, U, G] = b;
    if (G && !te(G)) throw Rt(pt.INVALID_ARGUMENT);
    return ke(v, U, Oe({ resolvedMessage: !0 }, G || {}));
  }
  function _t(...b) {
    return Se(
      (v) => Reflect.apply(yi, null, [v, ...b]),
      () => Ds(...b),
      "datetime format",
      (v) => Reflect.apply(v.d, v, [...b]),
      () => _i,
      (v) => H(v)
    );
  }
  function bt(...b) {
    return Se(
      (v) => Reflect.apply(Ei, null, [v, ...b]),
      () => js(...b),
      "number format",
      (v) => Reflect.apply(v.n, v, [...b]),
      () => _i,
      (v) => H(v)
    );
  }
  function jt(b) {
    return b.map((v) => (H(v) || Te(v) || ue(v) ? Oi(String(v)) : v));
  }
  const y = { normalize: jt, interpolate: (b) => b, type: "vnode" };
  function D(...b) {
    return Se(
      (v) => {
        let U;
        const G = v;
        try {
          (G.processor = y), (U = Reflect.apply(Ti, null, [G, ...b]));
        } finally {
          G.processor = null;
        }
        return U;
      },
      () => Vs(...b),
      "translate",
      (v) => v[Hs](...b),
      (v) => [Oi(v)],
      (v) => ge(v)
    );
  }
  function L(...b) {
    return Se(
      (v) => Reflect.apply(Ei, null, [v, ...b]),
      () => js(...b),
      "number format",
      (v) => v[Us](...b),
      Ai,
      (v) => H(v) || ge(v)
    );
  }
  function V(...b) {
    return Se(
      (v) => Reflect.apply(yi, null, [v, ...b]),
      () => Ds(...b),
      "datetime format",
      (v) => v[Ws](...b),
      Ai,
      (v) => H(v) || ge(v)
    );
  }
  function ne(b) {
    (q = b), ($.pluralRules = q);
  }
  function d(b, v) {
    return Se(
      () => {
        if (!b) return !1;
        const U = H(v) ? v : o.value,
          G = x(U),
          fe = $.messageResolver(G, b);
        return Qt(fe) || We(fe) || H(fe);
      },
      () => [b],
      "translate exists",
      (U) => Reflect.apply(U.te, U, [b, v]),
      Jf,
      (U) => ue(U)
    );
  }
  function h(b) {
    let v = null;
    const U = xf($, a.value, o.value);
    for (let G = 0; G < U.length; G++) {
      const fe = c.value[U[G]] || {},
        me = $.messageResolver(fe, b);
      if (me != null) {
        v = me;
        break;
      }
    }
    return v;
  }
  function _(b) {
    const v = h(b);
    return v ?? (t ? t.tm(b) || {} : {});
  }
  function x(b) {
    return c.value[b] || {};
  }
  function E(b, v) {
    if (r) {
      const U = { [b]: v };
      for (const G in U) $t(U, G) && Rn(U[G]);
      v = U[b];
    }
    (c.value[b] = v), ($.messages = c.value);
  }
  function w(b, v) {
    c.value[b] = c.value[b] || {};
    const U = { [b]: v };
    if (r) for (const G in U) $t(U, G) && Rn(U[G]);
    (v = U[b]), jn(v, c.value[b]), ($.messages = c.value);
  }
  function I(b) {
    return u.value[b] || {};
  }
  function M(b, v) {
    (u.value[b] = v), ($.datetimeFormats = u.value), wi($, b, v);
  }
  function A(b, v) {
    (u.value[b] = Oe(u.value[b] || {}, v)),
      ($.datetimeFormats = u.value),
      wi($, b, v);
  }
  function C(b) {
    return f.value[b] || {};
  }
  function B(b, v) {
    (f.value[b] = v), ($.numberFormats = f.value), Si($, b, v);
  }
  function k(b, v) {
    (f.value[b] = Oe(f.value[b] || {}, v)),
      ($.numberFormats = f.value),
      Si($, b, v);
  }
  Mi++,
    t &&
      di &&
      (Kt(t.locale, (b) => {
        l && ((o.value = b), ($.locale = b), rn($, o.value, a.value));
      }),
      Kt(t.fallbackLocale, (b) => {
        l && ((a.value = b), ($.fallbackLocale = b), rn($, o.value, a.value));
      }));
  const N = {
    id: Mi,
    locale: we,
    fallbackLocale: Ee,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(b) {
      (l = b),
        b &&
          t &&
          ((o.value = t.locale.value),
          (a.value = t.fallbackLocale.value),
          rn($, o.value, a.value));
    },
    availableLocales: Ae,
    messages: pe,
    get modifiers() {
      return W;
    },
    get pluralRules() {
      return q || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(b) {
      (p = b), ($.missingWarn = p);
    },
    get fallbackWarn() {
      return m;
    },
    set fallbackWarn(b) {
      (m = b), ($.fallbackWarn = m);
    },
    get fallbackRoot() {
      return T;
    },
    set fallbackRoot(b) {
      T = b;
    },
    get fallbackFormat() {
      return R;
    },
    set fallbackFormat(b) {
      (R = b), ($.fallbackFormat = R);
    },
    get warnHtmlMessage() {
      return F;
    },
    set warnHtmlMessage(b) {
      (F = b), ($.warnHtmlMessage = b);
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(b) {
      (S = b), ($.escapeParameter = b);
    },
    t: ke,
    getLocaleMessage: x,
    setLocaleMessage: E,
    mergeLocaleMessage: w,
    getPostTranslationHandler: he,
    setPostTranslationHandler: Z,
    getMissingHandler: J,
    setMissingHandler: qe,
    [zf]: ne,
  };
  return (
    (N.datetimeFormats = At),
    (N.numberFormats = gt),
    (N.rt = Re),
    (N.te = d),
    (N.tm = _),
    (N.d = _t),
    (N.n = bt),
    (N.getDateTimeFormat = I),
    (N.setDateTimeFormat = M),
    (N.mergeDateTimeFormat = A),
    (N.getNumberFormat = C),
    (N.setNumberFormat = B),
    (N.mergeNumberFormat = k),
    (N[Kf] = n),
    (N[Hs] = D),
    (N[Ws] = V),
    (N[Us] = L),
    N
  );
}
const mr = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: { type: Object },
};
function Xf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (s, r) => [...s, ...(r.type === ze ? r.children : [r])],
        []
      )
    : t.reduce((n, s) => {
        const r = e[s];
        return r && (n[s] = r()), n;
      }, se());
}
function bo() {
  return ze;
}
function Qf(e) {
  return ge(e) && !H(e[0]);
}
function vo(e, t, n, s) {
  const { slots: r, attrs: i } = t;
  return () => {
    const l = { part: !0 };
    let o = se();
    e.locale && (l.locale = e.locale),
      H(e.format)
        ? (l.key = e.format)
        : te(e.format) &&
          (H(e.format.key) && (l.key = e.format.key),
          (o = Object.keys(e.format).reduce(
            (p, m) => (n.includes(m) ? Oe(se(), p, { [m]: e.format[m] }) : p),
            se()
          )));
    const a = s(e.value, l, o);
    let c = [l.key];
    ge(a)
      ? (c = a.map((p, m) => {
          const T = r[p.type],
            R = T ? T({ [p.type]: p.value, index: m, parts: a }) : [p.value];
          return Qf(R) && (R[0].key = `${p.type}-${m}`), R;
        }))
      : H(a) && (c = [a]);
    const u = Oe(se(), i),
      f = H(e.tag) || te(e.tag) ? e.tag : bo();
    return is(f, u, c);
  };
}
const ed = On({
    name: "i18n-d",
    props: Oe(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      mr
    ),
    setup(e, t) {
      const n = e.i18n || Cn({ useScope: e.scope, __useComponent: !0 });
      return vo(e, t, uo, (...s) => n[Ws](...s));
    },
  }),
  Li = ed,
  td = On({
    name: "i18n-n",
    props: Oe(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      mr
    ),
    setup(e, t) {
      const n = e.i18n || Cn({ useScope: e.scope, __useComponent: !0 });
      return vo(e, t, fo, (...s) => n[Us](...s));
    },
  }),
  Fi = td,
  nd = On({
    name: "i18n-t",
    props: Oe(
      {},
      {
        keypath: { type: String, required: !0 },
        plural: {
          type: [Number, String],
          validator: (e) => Te(e) || !isNaN(e),
        },
      },
      mr
    ),
    setup(e, t) {
      const { slots: n, attrs: s } = t,
        r = e.i18n || Cn({ useScope: e.scope, __useComponent: !0 });
      return () => {
        const i = Object.keys(n).filter((f) => f !== "_"),
          l = se();
        e.locale && (l.locale = e.locale),
          e.plural !== void 0 &&
            (l.plural = H(e.plural) ? +e.plural : e.plural);
        const o = Xf(t, i),
          a = r[Hs](e.keypath, o, l),
          c = Oe(se(), s),
          u = H(e.tag) || te(e.tag) ? e.tag : bo();
        return is(u, c, a);
      };
    },
  }),
  ki = nd;
function sd(e, ...t) {
  const n = Y(t[0]) ? t[0] : {};
  (ue(n.globalInstall) ? n.globalInstall : !0) &&
    ([ki.name, "I18nT"].forEach((r) => e.component(r, ki)),
    [Fi.name, "I18nN"].forEach((r) => e.component(r, Fi)),
    [Li.name, "I18nD"].forEach((r) => e.component(r, Li)));
}
const rd = Pt("global-vue-i18n");
function id(e = {}) {
  const t = ue(e.globalInjection) ? e.globalInjection : !0,
    n = new Map(),
    [s, r] = ld(e),
    i = Pt("");
  function l(u) {
    return n.get(u) || null;
  }
  function o(u, f) {
    n.set(u, f);
  }
  function a(u) {
    n.delete(u);
  }
  const c = {
    async install(u, ...f) {
      if (
        ((u.__VUE_I18N_SYMBOL__ = i),
        u.provide(u.__VUE_I18N_SYMBOL__, c),
        Y(f[0]))
      ) {
        const T = f[0];
        c.__composerExtend = T.__composerExtend;
      }
      let p = null;
      t && (p = pd(u, c.global)), __VUE_I18N_FULL_INSTALL__ && sd(u, ...f);
      const m = u.unmount;
      u.unmount = () => {
        p && p(), c.dispose(), m();
      };
    },
    get global() {
      return r;
    },
    dispose() {
      s.stop();
    },
    __instances: n,
    __getInstance: l,
    __setInstance: o,
    __deleteInstance: a,
  };
  return c;
}
function Cn(e = {}) {
  const t = ar();
  if (t == null) throw Rt(pt.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Rt(pt.NOT_INSTALLED);
  const n = od(t),
    s = cd(n),
    r = go(t),
    i = ad(e, r);
  if (i === "global") return Yf(s, e, r), s;
  if (i === "parent") {
    let a = ud(n, t, e.__useComponent);
    return a == null && (a = s), a;
  }
  const l = n;
  let o = l.__getInstance(t);
  if (o == null) {
    const a = Oe({}, e);
    "__i18n" in r && (a.__i18n = r.__i18n),
      s && (a.__root = s),
      (o = _o(a)),
      l.__composerExtend && (o[Bs] = l.__composerExtend(o)),
      dd(l, t, o),
      l.__setInstance(t, o);
  }
  return o;
}
function ld(e) {
  const t = No(),
    n = t.run(() => _o(e));
  if (n == null) throw Rt(pt.UNEXPECTED_ERROR);
  return [t, n];
}
function od(e) {
  const t = st(e.isCE ? rd : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Rt(e.isCE ? pt.NOT_INSTALLED_WITH_PROVIDE : pt.UNEXPECTED_ERROR);
  return t;
}
function ad(e, t) {
  return os(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
    ? e.useScope
    : "local";
}
function cd(e) {
  return e.global;
}
function ud(e, t, n = !1) {
  let s = null;
  const r = t.root;
  let i = fd(t, n);
  for (; i != null && ((s = e.__getInstance(i)), !(s != null || r === i)); )
    i = i.parent;
  return s;
}
function fd(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function dd(e, t, n) {
  en(() => {}, t),
    ss(() => {
      const s = n;
      e.__deleteInstance(t);
      const r = s[Bs];
      r && (r(), delete s[Bs]);
    }, t);
}
const hd = ["locale", "fallbackLocale", "availableLocales"],
  Ni = ["t", "rt", "d", "n", "tm", "te"];
function pd(e, t) {
  const n = Object.create(null);
  return (
    hd.forEach((r) => {
      const i = Object.getOwnPropertyDescriptor(t, r);
      if (!i) throw Rt(pt.UNEXPECTED_ERROR);
      const l = be(i.value)
        ? {
            get() {
              return i.value.value;
            },
            set(o) {
              i.value.value = o;
            },
          }
        : {
            get() {
              return i.get && i.get();
            },
          };
      Object.defineProperty(n, r, l);
    }),
    (e.config.globalProperties.$i18n = n),
    Ni.forEach((r) => {
      const i = Object.getOwnPropertyDescriptor(t, r);
      if (!i || !i.value) throw Rt(pt.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${r}`, i);
    }),
    () => {
      delete e.config.globalProperties.$i18n,
        Ni.forEach((r) => {
          delete e.config.globalProperties[`$${r}`];
        });
    }
  );
}
qf();
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Yt();
  (e.__INTLIFY__ = !0), pf(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const md = {
    class:
      "flex justify-center w-full h-[50px] bg-transparent text-[var(--mainColor)] bgglass",
  },
  gd = { class: "flex justify-between items-center h-full w-[90%]" },
  _d = { href: "/" },
  bd = { href: "/skills" },
  vd = { href: "#projects" },
  xd = { href: "#about" },
  yd = { class: "w-[30%] media" },
  wd = { class: "flex justify-end gap-6 items-center" },
  xo = {
    __name: "nav",
    setup(e) {
      const { t } = Cn(),
        { locale: n } = Cn(),
        s = Be(n.value),
        r = Be(!1);
      let i = Be(!0);
      en(() => {
        (n.value = localStorage.getItem("lang")),
          document.documentElement.style.setProperty(
            "--mainColor",
            localStorage.getItem("color")
          ),
          (document.body.style.direction =
            localStorage.getItem("lang") == "ar" ? "rtl" : "ltr"),
          innerWidth < 420 ? (i.value = !1) : (i.value = !0);
      });
      const l = (a) => {
          document.documentElement.style.setProperty("--mainColor", a),
            localStorage.setItem("color", a),
            (r.value = !1);
        },
        o = () => {
          (s.value = s.value == "ar" ? "en" : "ar"),
            (n.value = s.value),
            localStorage.setItem("lang", n.value),
            (document.body.style.direction = s.value == "ar" ? "rtl" : "ltr");
        };
      return (a, c) => (
        rt(),
        ht("div", md, [
          g("nav", gd, [
            g(
              "div",
              {
                class:
                  "meniu flex-col h-full w-[30px] justify-center gap-2 hidden cursor-pointer",
                onClick:
                  c[0] ||
                  (c[0] = (u) => (be(i) ? (i.value = !dt(i)) : (i = !dt(i)))),
              },
              c[8] ||
                (c[8] = [
                  g(
                    "span",
                    { class: "w-[20px] bg-[var(--mainColor)] h-0.5 line" },
                    null,
                    -1
                  ),
                  g(
                    "span",
                    { class: "w-[15px] bg-[var(--mainColor)] h-0.5 line" },
                    null,
                    -1
                  ),
                  g(
                    "span",
                    { class: "w-[25px] bg-[var(--mainColor)] h-0.5 line" },
                    null,
                    -1
                  ),
                ])
            ),
            c[11] ||
              (c[11] = g(
                "div",
                {
                  class:
                    "font-bold text-xl logo w-[30%] flex justify-center items-center gap-1",
                },
                [
                  g("img", { src: Xu, width: "8%", alt: "my logo" }),
                  Wl("MOHAMMAD FALAH"),
                ],
                -1
              )),
            dt(i)
              ? (rt(),
                ht(
                  "ul",
                  {
                    key: 0,
                    class: gn([
                      "font-bold flex justify-evenly w-[40%] pages",
                      s.value == "ar" ? "ar" : "",
                    ]),
                  },
                  [
                    g("li", null, [g("a", _d, oe(a.$t("home")), 1)]),
                    g("li", null, [g("a", bd, oe(a.$t("skills")), 1)]),
                    g("li", null, [g("a", vd, oe(a.$t("projects")), 1)]),
                    g("li", null, [g("a", xd, oe(a.$t("about")), 1)]),
                  ],
                  2
                ))
              : Fr("", !0),
            g("div", yd, [
              g("ul", wd, [
                g(
                  "li",
                  {
                    id: "colors",
                    class:
                      "glowing-circle w-[35px] h-[35px] rounded-full flex justify-center items-center]",
                    onClick: c[1] || (c[1] = (u) => (r.value = !r.value)),
                  },
                  c[9] ||
                    (c[9] = [
                      et(
                        '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10.5 10.5c.002 2.762-2.237 5-5 5s-5.002-2.238-5-5c-.002-2.76 2.237-5 5-5s5.002 2.24 5 5z" color="#feecec" fill="#ff15a1" stroke="#ffffff" stroke-width=".49999682600000006"></path><path d="M8 1.401a4.998 4.998 0 0 0-2.488 9.334c-.004-.078-.012-.155-.012-.234a4.998 4.998 0 0 1 7.488-4.334A4.994 4.994 0 0 0 8 1.4z" fill="#1583ff"></path><path d="M10.5 5.5a4.998 4.998 0 0 0-5 5c0 .08.008.157.012.235A4.998 4.998 0 0 0 13 6.401c0-.079-.008-.156-.012-.234A4.975 4.975 0 0 0 10.5 5.5z" fill="#00cf2d"></path><path d="M12.988 6.167c.004.078.012.155.012.234a4.998 4.998 0 0 1-7.489 4.334 4.994 4.994 0 0 0 4.989 4.766 4.998 4.998 0 0 0 2.488-9.334z" fill="#f8ff15"></path><path d="M5.512 10.735a4.996 4.996 0 0 0 2.486 4.093 4.987 4.987 0 0 0 2.49-4.091A4.978 4.978 0 0 1 8 11.4a4.975 4.975 0 0 1-2.488-.666z" fill="#ef0000"></path><path d="M7.998 6.173A4.991 4.991 0 0 0 5.5 10.5c0 .079.008.156.012.234a4.978 4.978 0 0 0 4.977.002c.003-.079.011-.157.011-.236a4.99 4.99 0 0 0-2.502-4.328z" fill="#383027"></path><path d="M5.5 5.5c-.91 0-1.76.247-2.494.67a4.99 4.99 0 0 0 2.506 4.564c-.004-.077-.012-.154-.012-.233a4.991 4.991 0 0 1 2.498-4.328A4.975 4.975 0 0 0 5.5 5.5z" fill="#5100cc"></path><path d="M8 1.401a4.998 4.998 0 0 0-4.994 4.77 4.998 4.998 0 1 0 4.992 8.658 4.998 4.998 0 1 0 4.99-8.662A4.994 4.994 0 0 0 8 1.4z" fill="none" stroke="#ffffff" stroke-width=".9999936520000001"></path></g></svg>',
                        1
                      ),
                    ])
                ),
                r.value
                  ? (rt(),
                    ht(
                      "div",
                      {
                        key: 0,
                        class: gn([
                          s.value == "ar" ? "ar" : "",
                          "bg-[#000] animate-pulse absolute top-15 z-[2000] min-w-[100px] h-30px p-[10px] rounded-4xl flex items-center justify-center gap-2",
                        ]),
                      },
                      [
                        g("span", {
                          class:
                            "rounded-full w-[20px] h-[20px] bg-[#92dbff] cursor-pointer",
                          onClick: c[2] || (c[2] = (u) => l("#92dbff")),
                        }),
                        g("span", {
                          class:
                            "rounded-full w-[20px] h-[20px] bg-[#ff039a] cursor-pointer",
                          onClick: c[3] || (c[3] = (u) => l("#ff039a")),
                        }),
                        g("span", {
                          class:
                            "rounded-full w-[20px] h-[20px] bg-[#7d0505] cursor-pointer",
                          onClick: c[4] || (c[4] = (u) => l("#7d0505")),
                        }),
                        g("span", {
                          class:
                            "rounded-full w-[20px] h-[20px] bg-[#6d1d9f] cursor-pointer",
                          onClick: c[5] || (c[5] = (u) => l("#6d1d9f")),
                        }),
                        g("span", {
                          class:
                            "rounded-full w-[20px] h-[20px] bg-[#35c00e] cursor-pointer",
                          onClick: c[6] || (c[6] = (u) => l("#35c00e")),
                        }),
                        g("span", {
                          class:
                            "rounded-full w-[20px] h-[20px] bg-[#002f2f] cursor-pointer",
                          onClick: c[7] || (c[7] = (u) => l("#002f2f")),
                        }),
                      ],
                      2
                    ))
                  : Fr("", !0),
                g(
                  "li",
                  {
                    class:
                      "glowing-circle w-[35px] h-[35px] rounded-full flex justify-center items-center",
                    onClick: o,
                  },
                  c[10] ||
                    (c[10] = [
                      et(
                        '<svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.072"></g><g id="SVGRepo_iconCarrier"><path style="fill:#FFFFFF;" d="M185.802,105.689h277.06c21.364,0,38.688,17.32,38.688,38.689v318.482 c0.001,21.366-17.318,38.69-38.687,38.69H280.479L185.802,105.689z"></path><polygon style="fill:#0011ff;" points="361.15,406.306 280.479,501.545 248.789,406.306 "></polygon><path style="fill:#0011ff;" d="M361.15,406.306H49.137c-21.364,0-38.688-17.32-38.688-38.69V49.138 c0-21.365,17.32-38.689,38.688-38.689h182.387L361.15,406.306z"></path><path d="M462.863,95.24H270.286L241.455,7.197C240.049,2.904,236.042,0,231.524,0H49.137C22.043,0,0,22.043,0,49.138v318.478 c0,27.095,22.043,49.138,49.137,49.138h192.115l29.311,88.095c1.42,4.269,5.415,7.15,9.914,7.15h182.384 C489.957,512,512,489.957,512,462.862V144.38C512,117.285,489.957,95.24,462.863,95.24z M20.898,367.616V49.138 c0-15.571,12.668-28.24,28.239-28.24h174.814l122.783,374.96H49.137C33.566,395.857,20.898,383.188,20.898,367.616z M411.358,241.371c-5.469,11.908-15.308,30.468-31.079,51.099c-4.545-5.928-8.505-11.556-11.901-16.717 c-9.028-13.722-15.237-25.776-19.184-34.381L411.358,241.371L411.358,241.371z M326.41,241.371 c3.62,8.944,11.118,25.394,24.047,45.165c4.473,6.841,9.853,14.435,16.206,22.461c-5.947,6.704-12.52,13.493-19.759,20.226 l-28.768-87.852H326.41z M263.278,416.755h75.328l-54.084,63.85L263.278,416.755z M491.102,462.862 c0,15.571-12.668,28.24-28.239,28.24H303.018l65.929-77.834c1.657-1.849,2.673-4.284,2.673-6.961c0-1.378-0.266-2.695-0.751-3.9 l-16.85-51.458c9.785-8.559,18.525-17.252,26.302-25.839c17.544,19.367,40.485,39.927,69.799,57.876 c1.703,1.043,3.586,1.539,5.446,1.539c3.516,0,6.951-1.775,8.921-4.994c3.013-4.921,1.466-11.354-3.456-14.367 c-28.471-17.434-50.493-37.492-67.082-56.152c23.199-29.342,35.285-55.429,40.202-67.64h30.828c5.77,0,10.449-4.678,10.449-10.449 s-4.679-10.449-10.449-10.449h-74.907V202.71c0-5.771-4.679-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v17.763h-57.882 l-34.165-104.335h185.734c15.571,0,28.239,12.669,28.239,28.24v318.483H491.102z"></path><path d="M147.087,286.44c42.444,0,76.974-34.531,76.974-76.974c0-5.771-4.678-10.449-10.449-10.449h-59.202 c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h47.777c-4.91,25.944-27.75,45.628-55.1,45.628 c-30.921,0-56.077-25.156-56.077-56.077s25.156-56.077,56.077-56.077c13.315,0,26.223,4.747,36.343,13.368 c4.391,3.742,10.988,3.215,14.73-1.178c3.742-4.394,3.214-10.988-1.179-14.73c-13.897-11.839-31.617-18.358-49.894-18.358 c-42.444,0-76.974,34.531-76.974,76.974C70.113,251.909,104.642,286.44,147.087,286.44z"></path><path d="M201.622,351.434h-4.678c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h4.678 c5.77,0,10.449-4.678,10.449-10.449C212.071,356.112,207.392,351.434,201.622,351.434z"></path><path d="M163.141,351.434H61.649c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h101.492 c5.77,0,10.449-4.678,10.449-10.449C173.59,356.112,168.911,351.434,163.141,351.434z"></path></g></svg>',
                        1
                      ),
                    ])
                ),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  Ed = {},
  Sd = { class: "text-white lg:text-sm text-[.5rem]" };
function Rd(e, t) {
  return rt(), ht("footer", Sd, "© " + oe(e.$t("footer")), 1);
}
const yo = ql(Ed, [["render", Rd]]),
  Cd = {
    __name: "SpaceBackground",
    props: {
      starCount: { type: Number, default: 200 },
      shapeCount: { type: Number, default: 30 },
      speed: { type: Number, default: 1 },
      colors: {
        type: Object,
        default: () => ({
          star: "#ffffff",
          cube: ["#3a86ff", "#003049"],
          pyramid: "#ff006e",
          comet: "#ffbe0b",
          ripple: "#4cc9f0",
        }),
      },
    },
    setup(e) {
      const t = e,
        n = Be(null);
      let s;
      class r {
        constructor(l, o) {
          vr(this, "handleResize", () => {
            this.shapes.forEach((l) =>
              this.setShapeProperties(l, ["cube", "pyramid", "comet"])
            );
          });
          (this.container = l),
            (this.props = o),
            (this.shapes = []),
            this.init();
        }
        init() {
          this.createStars(),
            this.createShapes(),
            this.setupEventListeners(),
            this.animate();
        }
        createStars() {
          for (let l = 0; l < this.props.starCount; l++) {
            const o = document.createElement("div");
            Object.assign(o.style, {
              position: "absolute",
              borderRadius: "50%",
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: this.props.colors.star,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${
                this.props.colors.star
              }`,
              animation: `twinkle ${2 + Math.random() * 2}s infinite`,
              willChange: "transform, opacity",
            }),
              this.container.appendChild(o);
          }
        }
        createShapes() {
          const l = ["cube", "pyramid", "comet"];
          for (let o = 0; o < this.props.shapeCount; o++) {
            const a = document.createElement("div");
            this.setShapeProperties(a, l),
              this.shapes.push(a),
              this.container.appendChild(a);
          }
        }
        setShapeProperties(l, o) {
          const a = o[Math.floor(Math.random() * o.length)],
            c = Math.random() * Math.PI * 2,
            u = 0.5 + Math.random() * this.props.speed,
            f = 10 + Math.random() * 30;
          Object.assign(l.style, {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            transition: "transform 0.1s linear",
            transformOrigin: "center",
            willChange: "transform, opacity",
            opacity: 0.3 + Math.random() * 0.7,
          }),
            a === "cube"
              ? Object.assign(l.style, {
                  width: `${f}px`,
                  height: `${f}px`,
                  background: `linear-gradient(45deg, ${this.props.colors.cube[0]}, ${this.props.colors.cube[1]})`,
                  boxShadow: `0 0 30px ${this.props.colors.cube[0]}`,
                })
              : a === "pyramid"
              ? Object.assign(l.style, {
                  width: "0",
                  height: "0",
                  borderLeft: `${f / 2}px solid transparent`,
                  borderRight: `${f / 2}px solid transparent`,
                  borderBottom: `${f}px solid ${this.props.colors.pyramid}`,
                })
              : a === "comet" &&
                Object.assign(l.style, {
                  width: `${f}px`,
                  height: `${f}px`,
                  background: `radial-gradient(${this.props.colors.comet}, transparent)`,
                  borderRadius: "50%",
                }),
            (l._animation = {
              angle: c,
              speed: u,
              time: 0,
              maxTime: 5 + Math.random() * 10,
            });
        }
        animate() {
          (s = requestAnimationFrame(() => this.animate())),
            this.updateShapes();
        }
        updateShapes() {
          const l = window.innerWidth / 2,
            o = window.innerHeight / 2,
            a = Math.sqrt(l ** 2 + o ** 2);
          this.shapes.forEach((c) => {
            if (!c._animation) return;
            c._animation.time += 0.016;
            const u = c._animation.time / c._animation.maxTime;
            if (u > 1) {
              this.setShapeProperties(c, ["cube", "pyramid", "comet"]);
              return;
            }
            const f = u * a * 1.5,
              p = Math.cos(c._animation.angle) * f,
              m = Math.sin(c._animation.angle) * f,
              T = 0.5 + u * 0.5,
              R = 1 - u;
            Object.assign(c.style, {
              transform: `translate(${p}px, ${m}px) scale(${T}) rotate(${
                u * 360
              }deg)`,
              opacity: R.toString(),
            });
          });
        }
        setupEventListeners() {
          (this.clickHandler = (l) => this.createRipple(l)),
            this.container.addEventListener("click", this.clickHandler),
            window.addEventListener("resize", this.handleResize);
        }
        createRipple(l) {
          const o = document.createElement("div");
          Object.assign(o.style, {
            position: "absolute",
            border: `2px solid ${this.props.colors.ripple}`,
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            left: `${l.clientX}px`,
            top: `${l.clientY}px`,
            animation: "ripple 1s ease-out",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
          }),
            this.container.appendChild(o),
            setTimeout(() => o.remove(), 1e3);
        }
        destroy() {
          cancelAnimationFrame(s),
            this.container.removeEventListener("click", this.clickHandler),
            window.removeEventListener("resize", this.handleResize);
        }
      }
      return (
        en(() => {
          const i = new r(n.value, t);
          ss(() => i.destroy());
        }),
        (i, l) => (
          rt(),
          ht(
            "div",
            { class: "space-container", ref_key: "spaceContainer", ref: n },
            null,
            512
          )
        )
      );
    },
  },
  Td = { class: "h-[100vh] bbg relative z-[1]" },
  Od = { class: "relative z-10" },
  Pd = {
    class:
      "content flex flex-col lg:gap-0 gap-8 lg:flex-row lg:mt-60 lg:justify-between justify-start mt-30 items-center p-[0] lg:px-[10%] text-white",
  },
  Ad = {
    class: "scale-110 max-w-[50%] Maincontent flex items-center flex-col",
  },
  Md = {
    class:
      "lg:text-[clamp(1rem,2vw,2.8rem)] text-[clamp(1rem,2.8vw,2rem)] mb-[-10px] font-bold xl:text-start",
  },
  Id = {
    class:
      "lg:text-[clamp(2rem,4.5vw,4.5rem)] text-[clamp(2rem,4.5vw,4rem)] backgroundAni font-bold xl:text-start",
    id: "text",
  },
  Ld = { class: "text-[.7rem] text-center" },
  Fd = { class: "absolute bottom-4 left-[50%] translate-x-[-50%]" },
  $i = 150,
  kd = 50,
  Nd = 1e3,
  $d = {
    __name: "home",
    setup(e) {
      const t = [
          "Frontend Dev",
          "Web Designer",
          "Performance",
          "Interactivity",
          "Creativity",
        ],
        n = Be(0),
        s = Be(""),
        r = Be(!1);
      function i() {
        const l = t[n.value];
        if (r.value) {
          if (((s.value = s.value.slice(0, -1)), s.value === "")) {
            (r.value = !1),
              (n.value = (n.value + 1) % t.length),
              setTimeout(i, $i);
            return;
          }
        } else if (
          ((s.value = l.slice(0, s.value.length + 1)), s.value === l)
        ) {
          setTimeout(() => {
            (r.value = !0), i();
          }, Nd);
          return;
        }
        setTimeout(i, r.value ? kd : $i);
      }
      return (
        en(i),
        window.addEventListener("resize", () => location.reload()),
        (l, o) => (
          rt(),
          ht("main", Td, [
            g("header", Od, [de(xo)]),
            g("section", Pd, [
              o[0] ||
                (o[0] = g(
                  "div",
                  {
                    class:
                      "myphoto rounded-full relative xl:w-[400px] xl:h-[400px] mt-8 xl:mt-0",
                  },
                  null,
                  -1
                )),
              g("div", Ad, [
                g(
                  "h1",
                  Md,
                  oe(l.$t("homePage.MOHAMMAD_AWAD_FALAH_DEVELOPER")),
                  1
                ),
                g("h1", Id, oe(s.value), 1),
                g("p", Ld, oe(l.$t("homePage.aboutme")), 1),
              ]),
            ]),
            g("div", Fd, [de(yo)]),
            o[1] ||
              (o[1] = et(
                '<div class="media z-auto w-[100%] mt-8 absolute top-16"><ul class="flex justify-evenly gap-6 items-center lg:justify-center" style="z-index:2;"><li class="glowing-circle w-[55px] h-[55px] rounded-full flex justify-center items-center"><a href="https://web.facebook.com/mohamad.flah.988" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="9" viewBox="0 0 224 432"><path fill="#ffffff" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"></path></svg></a></li><li class="glowing-circle w-[55px] h-[55px] rounded-full flex justify-center items-center"><a href="https://www.instagram.com/sa.dp1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 7.9a4.1 4.1 0 1 0 4.1 4.1A4.09 4.09 0 0 0 12 7.9Zm0 6.77A2.67 2.67 0 1 1 14.67 12A2.67 2.67 0 0 1 12 14.67Zm5.23-6.94a1 1 0 1 1-1-1a1 1 0 0 1 1 1Zm2.71 1a4.71 4.71 0 0 0-1.29-3.35a4.71 4.71 0 0 0-3.35-1.32C14 4 10 4 8.7 4.06a4.73 4.73 0 0 0-3.35 1.29A4.71 4.71 0 0 0 4.06 8.7C4 10 4 14 4.06 15.3a4.71 4.71 0 0 0 1.29 3.35a4.73 4.73 0 0 0 3.35 1.29c1.32.08 5.28.08 6.6 0a4.71 4.71 0 0 0 3.35-1.29a4.71 4.71 0 0 0 1.29-3.35c.06-1.3.06-5.3 0-6.6Zm-1.7 8a2.7 2.7 0 0 1-1.52 1.52a18 18 0 0 1-4.72.32a17.91 17.91 0 0 1-4.71-.32a2.7 2.7 0 0 1-1.52-1.52c-.42-1.06-.33-3.56-.33-4.72s-.09-3.67.33-4.72a2.65 2.65 0 0 1 1.52-1.53A17.91 17.91 0 0 1 12 5.44a18 18 0 0 1 4.72.32a2.7 2.7 0 0 1 1.52 1.52c.42 1.06.32 3.56.32 4.72s.1 3.67-.32 4.72Z"></path></svg></a></li><li class="glowing-circle w-[55px] h-[55px] rounded-full flex justify-center items-center"><a href="https://github.com/MohammadFalahFront" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 432 416"><path fill="#ffffff" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"></path></svg></a></li><li class="glowing-circle w-[55px] h-[55px] rounded-full flex justify-center items-center"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 750 850"><path fill="#ffffff" d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58zM0 750h165V214H0v536zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13z"></path></svg></a></li></ul></div>',
                1
              )),
            de(Cd, {
              "star-count": 100,
              "shape-count": 100,
              colors: {
                star: "#f0f0f0",
                cube: ["var(--blue)", "var(--mainColor)"],
                pyramid: "var(--dark)",
                comet: "var(--red)",
                ripple: "var(--blue)",
              },
            }),
          ])
        )
      );
    },
  },
  Dd = "/mohammadfalah/assets/artboard2_2x_4x-B2gfgal9.png",
  jd = { class: "bbg relative min-h-screen" },
  Vd = { class: "my-5 px-12 py-4" },
  Hd = {
    class:
      "text-[clamp(1rem,3vw,3rem)] text-[var(--mainColor)] font-bold xl:text-start",
  },
  Wd = { class: "backgroundAni font-bold xl:text-start", id: "text" },
  Ud = { class: "flex justify-center items-center mx-auto" },
  Bd = {
    class: "grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-12 cards",
  },
  Gd = { class: "glass-card w-full flex flex-col p-6 text-white skill-card" },
  qd = { class: "flex justify-start items-center gap-6" },
  zd = {
    width: "40px",
    height: "40px",
    viewBox: "0 0 64 64",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "2",
    },
    fill: "#000000",
  },
  Kd = { class: "my-3" },
  Yd = { class: "text-xs h-[45%]" },
  Jd = { class: "mb-4 mt-6" },
  Zd = { class: "flex justify-between items-center" },
  Xd = { class: "text-white/80 block mb-1 text-xs" },
  Qd = { class: "glass-card w-full flex flex-col p-6 text-white skill-card" },
  eh = { class: "my-3" },
  th = { class: "text-xs h-[45%]" },
  nh = { class: "mb-4 mt-6" },
  sh = { class: "flex justify-between items-center" },
  rh = { class: "text-white/80 block mb-1 text-xs" },
  ih = { class: "glass-card w-full flex flex-col p-6 text-white skill-card" },
  lh = { class: "my-3" },
  oh = { class: "text-xs h-[45%]" },
  ah = { class: "mb-4 mt-6" },
  ch = { class: "flex justify-between items-center" },
  uh = { class: "text-white/80 block mb-1 text-xs" },
  fh = { class: "glass-card w-full flex flex-col p-6 text-white skill-card" },
  dh = { class: "my-3" },
  hh = { class: "text-xs h-[45%]" },
  ph = { class: "mb-4 mt-6" },
  mh = { class: "flex justify-between items-center" },
  gh = { class: "text-white/80 block mb-1 text-xs" },
  _h = { class: "glass-card w-full flex flex-col p-6 text-white skill-card" },
  bh = { class: "my-3" },
  vh = { class: "text-xs h-[45%]" },
  xh = { class: "mb-4 mt-6" },
  yh = { class: "flex justify-between items-center" },
  wh = { class: "text-white/80 block mb-1 text-xs" },
  Eh = { class: "glass-card w-full flex flex-col p-6 text-white skill-card" },
  Sh = { class: "my-3" },
  Rh = { class: "text-xs h-[45%]" },
  Ch = { class: "mb-4 mt-6" },
  Th = { class: "flex justify-between items-center" },
  Oh = { class: "text-white/80 block mb-1 text-xs" },
  Ph = { class: "absolute bottom-4 left-[50%] translate-x-[-50%]" },
  Di = 150,
  Ah = 50,
  Mh = 1e3,
  Ih = {
    __name: "skills",
    setup(e) {
      const t = [
          "Vue.js",
          "HTML & CSS",
          "JavaScript",
          "Tailwind CSS",
          "TypeScript",
          "PrimeVue",
        ],
        n = Be(0),
        s = Be("s"),
        r = Be(!1);
      function i() {
        const l = t[n.value];
        if (r.value) {
          if (((s.value = s.value.slice(0, -1)), s.value === "")) {
            (r.value = !1),
              (n.value = (n.value + 1) % t.length),
              setTimeout(i, Di);
            return;
          }
        } else if (
          ((s.value = l.slice(0, s.value.length + 1)), s.value === l)
        ) {
          setTimeout(() => {
            (r.value = !0), i();
          }, Mh);
          return;
        }
        setTimeout(i, r.value ? Ah : Di);
      }
      return (
        en(i),
        (l, o) => (
          rt(),
          ht("main", jd, [
            g("header", null, [de(xo)]),
            g("div", Vd, [
              g("h1", Hd, oe(l.$t("Askills")), 1),
              g("p", Wd, oe(s.value), 1),
            ]),
            g("div", Ud, [
              g("div", Bd, [
                g("div", Gd, [
                  g("div", qd, [
                    (rt(),
                    ht(
                      "svg",
                      zd,
                      o[0] ||
                        (o[0] = [
                          g(
                            "g",
                            { id: "SVGRepo_bgCarrier", "stroke-width": "0" },
                            null,
                            -1
                          ),
                          g(
                            "g",
                            {
                              id: "SVGRepo_tracerCarrier",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            },
                            null,
                            -1
                          ),
                          g(
                            "g",
                            { id: "SVGRepo_iconCarrier" },
                            [
                              g("rect", {
                                id: "Icons",
                                x: "-512",
                                y: "-128",
                                width: "1280",
                                height: "800",
                                style: { fill: "none" },
                              }),
                              g("g", { id: "Icons1", "serif:id": "Icons" }, [
                                g("g", { id: "Strike" }),
                                g("g", { id: "H1" }),
                                g("g", { id: "H2" }),
                                g("g", { id: "H3" }),
                                g("g", { id: "list-ul" }),
                                g("g", { id: "hamburger-1" }),
                                g("g", { id: "hamburger-2" }),
                                g("g", { id: "list-ol" }),
                                g("g", { id: "list-task" }),
                                g("g", { id: "trash" }),
                                g("g", { id: "vertical-menu" }),
                                g("g", { id: "horizontal-menu" }),
                                g("g", { id: "sidebar-2" }),
                                g("g", { id: "Pen" }),
                                g("g", { id: "Pen1", "serif:id": "Pen" }),
                                g("g", { id: "clock" }),
                                g("g", { id: "external-link" }),
                                g("g", { id: "hr" }),
                                g("g", { id: "info" }),
                                g("g", { id: "warning" }),
                                g("g", { id: "plus-circle" }),
                                g("g", { id: "minus-circle" }),
                                g("g", { id: "vue" }, [
                                  g("path", {
                                    d: "M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z",
                                    style: { fill: "#435466" },
                                  }),
                                  g("path", {
                                    d: "M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z",
                                    style: { fill: "#4dba87" },
                                  }),
                                ]),
                                g("g", { id: "cog" }),
                                g("g", { id: "logo" }),
                                g("g", { id: "radio-check" }),
                                g("g", { id: "eye-slash" }),
                                g("g", { id: "eye" }),
                                g("g", { id: "toggle-off" }),
                                g("g", { id: "shredder" }),
                                g("g", {
                                  id: "spinner--loading--dots-",
                                  "serif:id": "spinner [loading, dots]",
                                }),
                                g("g", { id: "react" }),
                                g("g", { id: "check-selected" }),
                                g("g", { id: "turn-off" }),
                                g("g", { id: "code-block" }),
                                g("g", { id: "user" }),
                                g("g", { id: "coffee-bean" }),
                                g("g", { id: "coffee-beans" }, [
                                  g("g", {
                                    id: "coffee-bean1",
                                    "serif:id": "coffee-bean",
                                  }),
                                ]),
                                g("g", { id: "coffee-bean-filled" }),
                                g("g", { id: "coffee-beans-filled" }, [
                                  g("g", {
                                    id: "coffee-bean2",
                                    "serif:id": "coffee-bean",
                                  }),
                                ]),
                                g("g", { id: "clipboard" }),
                                g("g", { id: "clipboard-paste" }),
                                g("g", { id: "clipboard-copy" }),
                                g("g", { id: "Layer1" }),
                              ]),
                            ],
                            -1
                          ),
                        ])
                    )),
                    o[1] ||
                      (o[1] = g("h1", { class: "font-bold" }, "Vue.js", -1)),
                  ]),
                  g("div", Kd, [
                    g("p", Yd, oe(l.$t("skillsPage.vue")) + "!", 1),
                    g("div", Jd, [
                      g("div", Zd, [
                        g("span", Xd, oe(l.$t("skillsPage.Mastery_level")), 1),
                        o[2] ||
                          (o[2] = g(
                            "span",
                            { class: "text-white/70 mt-1 block text-xs" },
                            "85%",
                            -1
                          )),
                      ]),
                      o[3] ||
                        (o[3] = g(
                          "div",
                          {
                            class:
                              "w-full h-2 bg-white/10 rounded-full overflow-hidden",
                          },
                          [g("div", { class: "level-bar w-[85%] h-full" })],
                          -1
                        )),
                    ]),
                  ]),
                  o[4] ||
                    (o[4] = et(
                      '<div><div class="flex gap-2 absolute bottom-4"><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Vue 3</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Composition API</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Pinia</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Vue Router</span></div></div>',
                      1
                    )),
                ]),
                g("div", Qd, [
                  o[7] ||
                    (o[7] = et(
                      '<div class="flex justify-start items-center gap-6"><svg width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path><path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path><path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path></g></svg><h1 class="font-bold">HTML &amp; CSS</h1></div>',
                      1
                    )),
                  g("div", eh, [
                    g("p", th, oe(l.$t("skillsPage.html-css")), 1),
                    g("div", nh, [
                      g("div", sh, [
                        g("span", rh, oe(l.$t("skillsPage.Mastery_level")), 1),
                        o[5] ||
                          (o[5] = g(
                            "span",
                            { class: "text-white/70 mt-1 block text-xs" },
                            "98%",
                            -1
                          )),
                      ]),
                      o[6] ||
                        (o[6] = g(
                          "div",
                          {
                            class:
                              "w-full h-2 bg-white/10 rounded-full overflow-hidden",
                          },
                          [g("div", { class: "level-bar w-[98%] h-full" })],
                          -1
                        )),
                    ]),
                  ]),
                  o[8] ||
                    (o[8] = et(
                      '<div><div class="flex gap-2 absolute bottom-4"><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">HTML5</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">CSS3</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Responsive</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Accessibility</span></div></div>',
                      1
                    )),
                ]),
                g("div", ih, [
                  o[11] ||
                    (o[11] = et(
                      '<div class="flex justify-start items-center gap-6"><svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_js</title><path d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z" style="fill:#f5de19;"></path></g></svg><h1 class="font-bold">JavaScript</h1></div>',
                      1
                    )),
                  g("div", lh, [
                    g("p", oh, oe(l.$t("skillsPage.javaScript")) + "!", 1),
                    g("div", ah, [
                      g("div", ch, [
                        g("span", uh, oe(l.$t("skillsPage.Mastery_level")), 1),
                        o[9] ||
                          (o[9] = g(
                            "span",
                            { class: "text-white/70 mt-1 block text-xs" },
                            "95%",
                            -1
                          )),
                      ]),
                      o[10] ||
                        (o[10] = g(
                          "div",
                          {
                            class:
                              "w-full h-2 bg-white/10 rounded-full overflow-hidden",
                          },
                          [g("div", { class: "level-bar w-[95%] h-full" })],
                          -1
                        )),
                    ]),
                  ]),
                  o[12] ||
                    (o[12] = et(
                      '<div><div class="flex gap-2 absolute bottom-4"><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">ES6+</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">APIs</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">OOP</span><span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Async/Await</span></div></div>',
                      1
                    )),
                ]),
                g("div", fh, [
                  o[15] ||
                    (o[15] = et(
                      '<div class="flex justify-start items-center gap-6"><svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style="fill:#44a8b3;"></path></g></svg><h1 class="font-bold">Tailwind CSS</h1></div>',
                      1
                    )),
                  g("div", dh, [
                    g("p", hh, oe(l.$t("skillsPage.tailwind")) + "!", 1),
                    g("div", ph, [
                      g("div", mh, [
                        g("span", gh, oe(l.$t("skillsPage.Mastery_level")), 1),
                        o[13] ||
                          (o[13] = g(
                            "span",
                            { class: "text-white/70 mt-1 block text-xs" },
                            "90%",
                            -1
                          )),
                      ]),
                      o[14] ||
                        (o[14] = g(
                          "div",
                          {
                            class:
                              "w-full h-2 bg-white/10 rounded-full overflow-hidden",
                          },
                          [g("div", { class: "level-bar w-[90%] h-full" })],
                          -1
                        )),
                    ]),
                  ]),
                  o[16] ||
                    (o[16] = g(
                      "div",
                      null,
                      [
                        g("div", { class: "flex gap-2 absolute bottom-4" }, [
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "Utility-first"
                          ),
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "Responsive"
                          ),
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "Customization"
                          ),
                        ]),
                      ],
                      -1
                    )),
                ]),
                g("div", _h, [
                  o[19] ||
                    (o[19] = et(
                      '<div class="flex justify-start items-center gap-6"><svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_typescript</title><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" style="fill:#007acc;"></path></g></svg><h1 class="font-bold">TypeScript</h1></div>',
                      1
                    )),
                  g("div", bh, [
                    g("p", vh, oe(l.$t("skillsPage.typeScript")) + "!", 1),
                    g("div", xh, [
                      g("div", yh, [
                        g("span", wh, oe(l.$t("skillsPage.Mastery_level")), 1),
                        o[17] ||
                          (o[17] = g(
                            "span",
                            { class: "text-white/70 mt-1 block text-xs" },
                            "19%",
                            -1
                          )),
                      ]),
                      o[18] ||
                        (o[18] = g(
                          "div",
                          {
                            class:
                              "w-full h-2 bg-white/10 rounded-full overflow-hidden",
                          },
                          [g("div", { class: "level-bar w-[19%] h-full" })],
                          -1
                        )),
                    ]),
                  ]),
                  o[20] ||
                    (o[20] = g(
                      "div",
                      null,
                      [
                        g("div", { class: "flex gap-2 absolute bottom-4" }, [
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "Typing"
                          ),
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "Interfaces"
                          ),
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "Vue Integration"
                          ),
                        ]),
                      ],
                      -1
                    )),
                ]),
                g("div", Eh, [
                  o[23] ||
                    (o[23] = g(
                      "div",
                      { class: "flex justify-start items-center gap-6" },
                      [
                        g("img", {
                          src: Dd,
                          height: "40px",
                          width: "40px",
                          alt: "",
                        }),
                        g("h1", { class: "font-bold" }, "PrimeVue"),
                      ],
                      -1
                    )),
                  g("div", Sh, [
                    g("p", Rh, oe(l.$t("skillsPage.primeVue")) + "!", 1),
                    g("div", Ch, [
                      g("div", Th, [
                        g("span", Oh, oe(l.$t("skillsPage.Mastery_level")), 1),
                        o[21] ||
                          (o[21] = g(
                            "span",
                            { class: "text-white/70 mt-1 block text-xs" },
                            "78%",
                            -1
                          )),
                      ]),
                      o[22] ||
                        (o[22] = g(
                          "div",
                          {
                            class:
                              "w-full h-2 bg-white/10 rounded-full overflow-hidden",
                          },
                          [g("div", { class: "level-bar w-[78%] h-full" })],
                          -1
                        )),
                    ]),
                  ]),
                  o[24] ||
                    (o[24] = g(
                      "div",
                      null,
                      [
                        g("div", { class: "flex gap-2 absolute bottom-4" }, [
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "UI Components"
                          ),
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "Themes"
                          ),
                          g(
                            "span",
                            {
                              class:
                                "px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white",
                            },
                            "Data Tables"
                          ),
                        ]),
                      ],
                      -1
                    )),
                ]),
              ]),
            ]),
            g("div", Ph, [de(yo)]),
          ])
        )
      );
    },
  },
  Lh = [
    { path: "/", name: "Home", component: $d },
    { path: "/skills", name: "Skills", component: Ih },
  ],
  Fh = Ju({ history: Ru(), routes: Lh }),
  kh = "Home",
  Nh = "About",
  $h = "Projects",
  Dh = "Skills",
  jh = "Technical Skills",
  Vh = "Mohammad Awad Falah. All rights reserved.",
  Hh = {
    MOHAMMAD_AWAD_FALAH_DEVELOPER: "MOHAMMAD AWAD FALAH DEVELOPER",
    aboutme:
      "I'm Mohammad Awad Falah, a passionate Frontend Developer who loves crafting creative and high-performance web experiences. I specialize in modern technologies like Vue.js and always aim to deliver clean, user-friendly designs.",
  },
  Wh = {
    Mastery_level: "Mastery level",
    vue: "A modern JavaScript framework. Experienced in developing complex apps with Vue 3 and the Composition API.",
    "html-css":
      "Fundamental web building languages. Experience with HTML5 and CSS3 with a focus on responsive design and accessibility.",
    javaScript:
      "Core web programming language. Experience with ES6+, Promise, Async/Await, and working with APIs.",
    tailwind:
      "A top-notch CSS framework. Experience using Tailwind to build fast, maintainable user interfaces.",
    typeScript:
      "JavaScript with data type syntax. Experience using TypeScript with Vue.js to build more robust and maintainable applications.",
    primeVue:
      "A rich UI library for Vue.js components. Experience using PrimeVue components to build professional user interfaces.",
  },
  Uh = {
    home: kh,
    about: Nh,
    projects: $h,
    skills: Dh,
    Askills: jh,
    footer: Vh,
    homePage: Hh,
    skillsPage: Wh,
  },
  Bh = "الصفحة الرئيسية",
  Gh = "من انا",
  qh = "اعمالي",
  zh = "مهاراتي",
  Kh = "مهاراتي التقنية",
  Yh = "محمد عوض فلاح. جميع الحقوق محفوظة.",
  Jh = {
    MOHAMMAD_AWAD_FALAH_DEVELOPER: "المطور محمد عوض فلاح",
    aboutme:
      "أنا محمد عوض فلاح، مطور واجهات أمامية شغوف، أعشق تصميم تجارب ويب إبداعية وعالية الأداء. أتخصص في التقنيات الحديثة مثل الفيو، وأسعى دائمًا لتقديم تصاميم أنيقة وسهلة الاستخدام.",
  },
  Zh = {
    Mastery_level: "مستوى الإتقان",
    vue: "إطار JavaScript متقدم لبناء واجهات المستخدم. لدي خبرة في تطوير تطبيقات معقدة باستخدام Vue 3 وComposition API.",
    "html-css":
      "لغات البناء الأساسية للويب. خبرة في HTML5 و CSS3 مع التركيز على التصميم سريع الاستجابة والوصولية.",
    javaScript:
      "لغة البرمجة الأساسية للويب. خبرة في ES6+، الوعد، Async/Await، والعمل مع APIs.",
    tailwind:
      "إطار عمل CSS من الدرجة الأولى. خبرة في استخدام Tailwind لبناء واجهات مستخدم سريعة وسهلة الصيانة.",
    typeScript:
      "JavaScript مع بناء جملة لأنواع البيانات. خبرة في استخدام TypeScript مع Vue.js لبناء تطبيقات أكثر قوة وسهولة في الصيانة.",
    primeVue:
      "مكتبة واجهة مستخدم غنية لمكونات Vue.js. خبرة في استخدام مكونات PrimeVue لبناء واجهات مستخدم احترافية",
  },
  Xh = {
    home: Bh,
    about: Gh,
    projects: qh,
    skills: zh,
    Askills: Kh,
    footer: Yh,
    homePage: Jh,
    skillsPage: Zh,
  },
  Qh = id({ messages: { en: Uh, ar: Xh } }),
  gr = Hc(zc);
gr.use(Fh);
gr.use(Qh);
gr.mount("#app");

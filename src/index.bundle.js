var te = Object.defineProperty;
var ne = (e, t)=>{
    for(var n in t)te(e, n, {
        get: t[n],
        enumerable: !0
    });
};
var N = {
};
ne(N, {
    Component: ()=>S1
    ,
    Fragment: ()=>P
    ,
    cloneElement: ()=>se
    ,
    createContext: ()=>ce
    ,
    createElement: ()=>V1
    ,
    createRef: ()=>re
    ,
    h: ()=>V1
    ,
    hydrate: ()=>ee
    ,
    isValidElement: ()=>F1
    ,
    options: ()=>d
    ,
    render: ()=>Z
    ,
    toChildArray: ()=>K
});
var d, F1, C1, H, R1, I1, U = {
}, L1 = [], _e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function b(e, t) {
    for(var n in t)e[n] = t[n];
    return e;
}
function O(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function V1(e, t, n) {
    var o, l, _, c = arguments, s = {
    };
    for(_ in t)_ == "key" ? o = t[_] : _ == "ref" ? l = t[_] : s[_] = t[_];
    if (arguments.length > 3) for(n = [
        n
    ], _ = 3; _ < arguments.length; _++)n.push(c[_]);
    if (n != null && (s.children = n), typeof e == "function" && e.defaultProps != null) for(_ in e.defaultProps)s[_] === void 0 && (s[_] = e.defaultProps[_]);
    return x1(e, s, o, l, null);
}
function x1(e, t, n, o, l) {
    var _ = {
        type: e,
        props: t,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: l ?? ++d.__v
    };
    return d.vnode != null && d.vnode(_), _;
}
function re() {
    return {
        current: null
    };
}
function P(e) {
    return e.children;
}
function S1(e, t) {
    this.props = e, this.context = t;
}
function E(e, t) {
    if (t == null) return e.__ ? E(e.__, e.__.__k.indexOf(e) + 1) : null;
    for(var n; t < e.__k.length; t++)if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? E(e) : null;
}
function $(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
        for(e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)if ((n = e.__k[t]) != null && n.__e != null) {
            e.__e = e.__c.base = n.__e;
            break;
        }
        return $(e);
    }
}
function M(e) {
    (!e.__d && (e.__d = !0) && C1.push(e) && !T1.__r++ || R1 !== d.debounceRendering) && ((R1 = d.debounceRendering) || H)(T1);
}
function T1() {
    for(var e; T1.__r = C1.length;)e = C1.sort(function(t, n) {
        return t.__v.__b - n.__v.__b;
    }), C1 = [], e.some(function(t) {
        var n, o, l, _, c, s;
        t.__d && (c = (_ = (n = t).__v).__e, (s = n.__P) && (o = [], (l = b({
        }, _)).__v = _.__v + 1, W(s, _, l, n.__n, s.ownerSVGElement !== void 0, _.__h != null ? [
            c
        ] : null, o, c ?? E(_), _.__h), B1(o, _), _.__e != c && $(_)));
    });
}
function J(e, t, n, o, l, _, c, s, p, u) {
    var r, v, f, i, y, a, h, m = o && o.__k || L1, g = m.length;
    for(n.__k = [], r = 0; r < t.length; r++)if ((i = n.__k[r] = (i = t[r]) == null || typeof i == "boolean" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? x1(null, i, null, null, i) : Array.isArray(i) ? x1(P, {
        children: i
    }, null, null, null) : i.__b > 0 ? x1(i.type, i.props, i.key, null, i.__v) : i) != null) {
        if (i.__ = n, i.__b = n.__b + 1, (f = m[r]) === null || f && i.key == f.key && i.type === f.type) m[r] = void 0;
        else for(v = 0; v < g; v++){
            if ((f = m[v]) && i.key == f.key && i.type === f.type) {
                m[v] = void 0;
                break;
            }
            f = null;
        }
        W(e, i, f = f || U, l, _, c, s, p, u), y = i.__e, (v = i.ref) && f.ref != v && (h || (h = []), f.ref && h.push(f.ref, null, i), h.push(v, i.__c || y, i)), y != null ? (a == null && (a = y), typeof i.type == "function" && i.__k != null && i.__k === f.__k ? i.__d = p = j(i, p, e) : p = z(e, i, f, m, y, p), u || n.type !== "option" ? typeof n.type == "function" && (n.__d = p) : e.value = "") : p && f.__e == p && p.parentNode != e && (p = E(f));
    }
    for(n.__e = a, r = g; r--;)m[r] != null && (typeof n.type == "function" && m[r].__e != null && m[r].__e == n.__d && (n.__d = E(o, r + 1)), q(m[r], m[r]));
    if (h) for(r = 0; r < h.length; r++)G(h[r], h[++r], h[++r]);
}
function j(e, t, n) {
    var o, l;
    for(o = 0; o < e.__k.length; o++)(l = e.__k[o]) && (l.__ = e, t = typeof l.type == "function" ? j(l, t, n) : z(n, l, l, e.__k, l.__e, t));
    return t;
}
function K(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
        K(n, t);
    }) : t.push(e)), t;
}
function z(e, t, n, o, l, _) {
    var c, s, p;
    if (t.__d !== void 0) c = t.__d, t.__d = void 0;
    else if (n == null || l != _ || l.parentNode == null) e: if (_ == null || _.parentNode !== e) e.appendChild(l), c = null;
    else {
        for(s = _, p = 0; (s = s.nextSibling) && p < o.length; p += 2)if (s == l) break e;
        e.insertBefore(l, _), c = _;
    }
    return c !== void 0 ? c : l.nextSibling;
}
function oe(e, t, n, o, l) {
    var _;
    for(_ in n)_ === "children" || _ === "key" || _ in t || D1(e, _, null, n[_], o);
    for(_ in t)l && typeof t[_] != "function" || _ === "children" || _ === "key" || _ === "value" || _ === "checked" || n[_] === t[_] || D1(e, _, t[_], n[_], o);
}
function Q(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || _e.test(t) ? n : n + "px";
}
function D1(e, t, n, o, l) {
    var _;
    e: if (t === "style") {
        if (typeof n == "string") e.style.cssText = n;
        else {
            if (typeof o == "string" && (e.style.cssText = o = ""), o) for(t in o)n && t in n || Q(e.style, t, "");
            if (n) for(t in n)o && n[t] === o[t] || Q(e.style, t, n[t]);
        }
    } else if (t[0] === "o" && t[1] === "n") _ = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {
    }), e.l[t + _] = n, n ? o || e.addEventListener(t, _ ? Y : X, _) : e.removeEventListener(t, _ ? Y : X, _);
    else if (t !== "dangerouslySetInnerHTML") {
        if (l) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
            e[t] = n ?? "";
            break e;
        } catch (c) {
        }
        typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function X(e) {
    this.l[e.type + !1](d.event ? d.event(e) : e);
}
function Y(e) {
    this.l[e.type + !0](d.event ? d.event(e) : e);
}
function W(e, t, n, o, l, _, c, s, p) {
    var u, r, v, f, i, y, a, h, m, g, w, k = t.type;
    if (t.constructor !== void 0) return null;
    n.__h != null && (p = n.__h, s = t.__e = n.__e, t.__h = null, _ = [
        s
    ]), (u = d.__b) && u(t);
    try {
        e: if (typeof k == "function") {
            if (h = t.props, m = (u = k.contextType) && o[u.__c], g = u ? m ? m.props.value : u.__ : o, n.__c ? a = (r = t.__c = n.__c).__ = r.__E : ("prototype" in k && k.prototype.render ? t.__c = r = new k(h, g) : (t.__c = r = new S1(h, g), r.constructor = k, r.render = ie), m && m.sub(r), r.props = h, r.state || (r.state = {
            }), r.context = g, r.__n = o, v = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), k.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = b({
            }, r.__s)), b(r.__s, k.getDerivedStateFromProps(h, r.__s))), f = r.props, i = r.state, v) k.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
            else {
                if (k.getDerivedStateFromProps == null && h !== f && r.componentWillReceiveProps != null && r.componentWillReceiveProps(h, g), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(h, r.__s, g) === !1 || t.__v === n.__v) {
                    r.props = h, r.state = r.__s, t.__v !== n.__v && (r.__d = !1), r.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(A) {
                        A && (A.__ = t);
                    }), r.__h.length && c.push(r);
                    break e;
                }
                r.componentWillUpdate != null && r.componentWillUpdate(h, r.__s, g), r.componentDidUpdate != null && r.__h.push(function() {
                    r.componentDidUpdate(f, i, y);
                });
            }
            r.context = g, r.props = h, r.state = r.__s, (u = d.__r) && u(t), r.__d = !1, r.__v = t, r.__P = e, u = r.render(r.props, r.state, r.context), r.state = r.__s, r.getChildContext != null && (o = b(b({
            }, o), r.getChildContext())), v || r.getSnapshotBeforeUpdate == null || (y = r.getSnapshotBeforeUpdate(f, i)), w = u != null && u.type === P && u.key == null ? u.props.children : u, J(e, Array.isArray(w) ? w : [
                w
            ], t, n, o, l, _, c, s, p), r.base = t.__e, t.__h = null, r.__h.length && c.push(r), a && (r.__E = r.__ = null), r.__e = !1;
        } else _ == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = le(n.__e, t, n, o, l, _, c, p);
        (u = d.diffed) && u(t);
    } catch (A) {
        t.__v = null, (p || _ != null) && (t.__e = s, t.__h = !!p, _[_.indexOf(s)] = null), d.__e(A, t, n);
    }
}
function B1(e, t) {
    d.__c && d.__c(t, e), e.some(function(n) {
        try {
            e = n.__h, n.__h = [], e.some(function(o) {
                o.call(n);
            });
        } catch (o) {
            d.__e(o, n.__v);
        }
    });
}
function le(e, t, n, o, l, _, c, s) {
    var p, u, r, v, f = n.props, i = t.props, y = t.type, a = 0;
    if (y === "svg" && (l = !0), _ != null) {
        for(; a < _.length; a++)if ((p = _[a]) && (p === e || (y ? p.localName == y : p.nodeType == 3))) {
            e = p, _[a] = null;
            break;
        }
    }
    if (e == null) {
        if (y === null) return document.createTextNode(i);
        e = l ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, i.is && i), _ = null, s = !1;
    }
    if (y === null) f === i || s && e.data === i || (e.data = i);
    else {
        if (_ = _ && L1.slice.call(e.childNodes), u = (f = n.props || U).dangerouslySetInnerHTML, r = i.dangerouslySetInnerHTML, !s) {
            if (_ != null) for(f = {
            }, v = 0; v < e.attributes.length; v++)f[e.attributes[v].name] = e.attributes[v].value;
            (r || u) && (r && (u && r.__html == u.__html || r.__html === e.innerHTML) || (e.innerHTML = r && r.__html || ""));
        }
        if (oe(e, i, f, l, s), r) t.__k = [];
        else if (a = t.props.children, J(e, Array.isArray(a) ? a : [
            a
        ], t, n, o, l && y !== "foreignObject", _, c, e.firstChild, s), _ != null) for(a = _.length; a--;)_[a] != null && O(_[a]);
        s || ("value" in i && (a = i.value) !== void 0 && (a !== e.value || y === "progress" && !a) && D1(e, "value", a, f.value, !1), "checked" in i && (a = i.checked) !== void 0 && a !== e.checked && D1(e, "checked", a, f.checked, !1));
    }
    return e;
}
function G(e, t, n) {
    try {
        typeof e == "function" ? e(t) : e.current = t;
    } catch (o) {
        d.__e(o, n);
    }
}
function q(e, t, n) {
    var o, l, _;
    if (d.unmount && d.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || G(o, null, t)), n || typeof e.type == "function" || (n = (l = e.__e) != null), e.__e = e.__d = void 0, (o = e.__c) != null) {
        if (o.componentWillUnmount) try {
            o.componentWillUnmount();
        } catch (c) {
            d.__e(c, t);
        }
        o.base = o.__P = null;
    }
    if (o = e.__k) for(_ = 0; _ < o.length; _++)o[_] && q(o[_], t, n);
    l != null && O(l);
}
function ie(e, t, n) {
    return this.constructor(e, n);
}
function Z(e, t, n) {
    var o, l, _;
    d.__ && d.__(e, t), l = (o = typeof n == "function") ? null : n && n.__k || t.__k, _ = [], W(t, e = (!o && n || t).__k = V1(P, null, [
        e
    ]), l || U, U, t.ownerSVGElement !== void 0, !o && n ? [
        n
    ] : l ? null : t.firstChild ? L1.slice.call(t.childNodes) : null, _, !o && n ? n : l ? l.__e : t.firstChild, o), B1(_, e);
}
function ee(e, t) {
    Z(e, t, ee);
}
function se(e, t, n) {
    var o, l, _, c = arguments, s = b({
    }, e.props);
    for(_ in t)_ == "key" ? o = t[_] : _ == "ref" ? l = t[_] : s[_] = t[_];
    if (arguments.length > 3) for(n = [
        n
    ], _ = 3; _ < arguments.length; _++)n.push(c[_]);
    return n != null && (s.children = n), x1(e.type, s, o || e.key, l || e.ref, null);
}
function ce(e, t) {
    var n = {
        __c: t = "__cC" + I1++,
        __: e,
        Consumer: function(o, l) {
            return o.children(l);
        },
        Provider: function(o) {
            var l, _;
            return this.getChildContext || (l = [], (_ = {
            })[t] = this, this.getChildContext = function() {
                return _;
            }, this.shouldComponentUpdate = function(c) {
                this.props.value !== c.value && l.some(M);
            }, this.sub = function(c) {
                l.push(c);
                var s = c.componentWillUnmount;
                c.componentWillUnmount = function() {
                    l.splice(l.indexOf(c), 1), s && s.call(c);
                };
            }), o.children;
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n;
}
d = {
    __e: function(e, t) {
        for(var n, o, l; t = t.__;)if ((n = t.__c) && !n.__) try {
            if ((o = n.constructor) && o.getDerivedStateFromError != null && (n.setState(o.getDerivedStateFromError(e)), l = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e), l = n.__d), l) return n.__E = n;
        } catch (_) {
            e = _;
        }
        throw e;
    },
    __v: 0
}, F1 = function(e) {
    return e != null && e.constructor === void 0;
}, S1.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({
    }, this.state), typeof e == "function" && (e = e(b({
    }, n), this.props)), e && b(n, e), e != null && this.__v && (t && this.__h.push(t), M(this));
}, S1.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), M(this));
}, S1.prototype.render = P, C1 = [], H = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, T1.__r = 0, I1 = 0;
var { Component: ae , hydrate: ue , createElement: de , createRef: he , isValidElement: ve , render: ye , createContext: me , toChildArray: ge , h: ke , cloneElement: be , options: Ce , Fragment: xe  } = N;
var q1 = Object.defineProperty;
var k = (_, e)=>{
    for(var n in e)q1(_, n, {
        get: e[n],
        enumerable: !0
    });
};
var h1 = {
};
k(h1, {
    useCallback: ()=>S2
    ,
    useContext: ()=>B2
    ,
    useDebugValue: ()=>I2
    ,
    useEffect: ()=>R2
    ,
    useErrorBoundary: ()=>L2
    ,
    useImperativeHandle: ()=>V2
    ,
    useLayoutEffect: ()=>D2
    ,
    useMemo: ()=>l
    ,
    useReducer: ()=>x2
    ,
    useRef: ()=>T2
    ,
    useState: ()=>C2
});
var c, r, H1, a = 0, m = [], d1 = Ce.__b, E1 = Ce.__r, y = Ce.diffed, b1 = Ce.__c, g = Ce.unmount;
function i(_, e) {
    Ce.__h && Ce.__h(r, _, a || e), a = 0;
    var n = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return _ >= n.__.length && n.__.push({
    }), n.__[_];
}
function C2(_) {
    return a = 1, x2(A, _);
}
function x2(_, e, n) {
    var t = i(c++, 2);
    return t.t = _, t.__c || (t.__ = [
        n ? n(e) : A(void 0, e),
        function(o) {
            var f = t.t(t.__[0], o);
            t.__[0] !== f && (t.__ = [
                f,
                t.__[1]
            ], t.__c.setState({
            }));
        }
    ], t.__c = r), t.__;
}
function R2(_, e) {
    var n = i(c++, 3);
    !Ce.__s && v(n.__H, e) && (n.__ = _, n.__H = e, r.__H.__h.push(n));
}
function D2(_, e) {
    var n = i(c++, 4);
    !Ce.__s && v(n.__H, e) && (n.__ = _, n.__H = e, r.__h.push(n));
}
function T2(_) {
    return a = 5, l(function() {
        return {
            current: _
        };
    }, []);
}
function V2(_, e, n) {
    a = 6, D2(function() {
        typeof _ == "function" ? _(e()) : _ && (_.current = e());
    }, n == null ? n : n.concat(_));
}
function l(_, e) {
    var n = i(c++, 7);
    return v(n.__H, e) && (n.__ = _(), n.__H = e, n.__h = _), n.__;
}
function S2(_, e) {
    return a = 8, l(function() {
        return _;
    }, e);
}
function B2(_) {
    var e = r.context[_.__c], n = i(c++, 9);
    return n.__c = _, e ? (n.__ == null && (n.__ = !0, e.sub(r)), e.props.value) : _.__;
}
function I2(_, e) {
    Ce.useDebugValue && Ce.useDebugValue(e ? e(_) : _);
}
function L2(_) {
    var e = i(c++, 10), n = C2();
    return e.__ = _, r.componentDidCatch || (r.componentDidCatch = function(t) {
        e.__ && e.__(t), n[1](t);
    }), [
        n[0],
        function() {
            n[1](void 0);
        }
    ];
}
function M1() {
    m.forEach(function(_) {
        if (_.__P) try {
            _.__H.__h.forEach(s), _.__H.__h.forEach(p), _.__H.__h = [];
        } catch (e) {
            _.__H.__h = [], Ce.__e(e, _.__v);
        }
    }), m = [];
}
Ce.__b = function(_) {
    r = null, d1 && d1(_);
}, Ce.__r = function(_) {
    E1 && E1(_), c = 0;
    var e = (r = _.__c).__H;
    e && (e.__h.forEach(s), e.__h.forEach(p), e.__h = []);
}, Ce.diffed = function(_) {
    y && y(_);
    var e = _.__c;
    e && e.__H && e.__H.__h.length && (m.push(e) !== 1 && H1 === Ce.requestAnimationFrame || ((H1 = Ce.requestAnimationFrame) || function(n) {
        var t, o = function() {
            clearTimeout(f), F2 && cancelAnimationFrame(t), setTimeout(n);
        }, f = setTimeout(o, 100);
        F2 && (t = requestAnimationFrame(o));
    })(M1)), r = void 0;
}, Ce.__c = function(_, e) {
    e.some(function(n) {
        try {
            n.__h.forEach(s), n.__h = n.__h.filter(function(t) {
                return !t.__ || p(t);
            });
        } catch (t) {
            e.some(function(o) {
                o.__h && (o.__h = []);
            }), e = [], Ce.__e(t, n.__v);
        }
    }), b1 && b1(_, e);
}, Ce.unmount = function(_) {
    g && g(_);
    var e = _.__c;
    if (e && e.__H) try {
        e.__H.__.forEach(s);
    } catch (n) {
        Ce.__e(n, e.__v);
    }
};
var F2 = typeof requestAnimationFrame == "function";
function s(_) {
    var e = r;
    typeof _.__c == "function" && _.__c(), r = e;
}
function p(_) {
    var e = r;
    _.__c = _.__(), r = e;
}
function v(_, e) {
    return !_ || _.length !== e.length || e.some(function(n, t) {
        return n !== _[t];
    });
}
function A(_, e) {
    return typeof e == "function" ? e(_) : e;
}
var { useEffect: z1 , useImperativeHandle: G1 , useErrorBoundary: J1 , useLayoutEffect: K1 , useCallback: N1 , useReducer: O1 , useState: Q1 , useRef: U1 , useMemo: W1 , useContext: X1 , useDebugValue: Y1  } = h1;
function useResolvedElement(subscriber, refOrElement) {
    let ref = null;
    const refElement = useRef(null);
    const callbackRefElement = useRef(null);
    const refCallback = N1((element)=>{
        callbackRefElement.current = element;
        callSubscriber();
    }, []);
    const lastReportedElementRef = useRef(null);
    const cleanupRef = useRef();
    const callSubscriber = ()=>{
        let element = null;
        if (callbackRefElement.current) {
            element = callbackRefElement.current;
        } else if (refElement.current) {
            element = refElement.current;
        } else if (refOrElement instanceof HTMLElement) {
            element = refOrElement;
        }
        if (lastReportedElementRef.current === element) {
            return;
        }
        if (cleanupRef.current) {
            cleanupRef.current();
            cleanupRef.current = null;
        }
        lastReportedElementRef.current = element;
        if (element) {
            cleanupRef.current = subscriber(element);
        }
    };
    if (refOrElement && !(refOrElement instanceof HTMLElement)) {
        ref = refOrElement;
    }
    z1(()=>{
        if (ref) {
            refElement.current = ref.current;
        }
        callSubscriber();
    }, [
        ref,
        ref?.current,
        refOrElement
    ]);
    return refCallback;
}
function useResizeObserver(opts = {
}) {
    const onResize = opts.onResize;
    const onResizeRef = useRef(undefined);
    onResizeRef.current = onResize;
    const resizeObserverRef = useRef();
    const [size, setSize] = Q1({
        width: undefined,
        height: undefined
    });
    const didUnmount = useRef(false);
    z1(()=>{
        return ()=>{
            didUnmount.current = true;
        };
    }, []);
    const previous = useRef({
        width: undefined,
        height: undefined
    });
    const refCallback = useResolvedElement((element)=>{
        if (!resizeObserverRef.current) {
            resizeObserverRef.current = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) {
                    return;
                }
                if (!entries.length) {
                    return;
                }
                const entry = entries[0];
                const newWidth = Math.round(entry.contentRect.width);
                const newHeight = Math.round(entry.contentRect.height);
                if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
                    const newSize = {
                        width: newWidth,
                        height: newHeight
                    };
                    if (onResizeRef.current) {
                        onResizeRef.current(newSize);
                    } else {
                        previous.current.width = newWidth;
                        previous.current.height = newHeight;
                        if (!didUnmount.current) {
                            setSize(newSize);
                        }
                    }
                }
            });
        }
        resizeObserverRef.current.observe(element);
        return ()=>{
            if (resizeObserverRef.current) {
                resizeObserverRef.current.unobserve(element);
            }
        };
    }, opts.ref);
    return W1(()=>({
            ref: refCallback,
            width: size.width,
            height: size.height
        })
    , [
        refCallback,
        size ? size.width : null,
        size ? size.height : null
    ]);
}
function useDocumentEventListener(type, listener, options) {
    z1(()=>{
        document.addEventListener(type, listener, options);
        return ()=>document.removeEventListener(type, listener, options)
        ;
    }, [
        listener,
        options,
        type
    ]);
}
function calcPopupMenuStyle(cursorPosition) {
    return {
        top: cursorPosition.styleTop
    };
}
function calcTriangleStyle(cursorPosition, isEmpty) {
    return {
        left: cursorPosition.styleLeft,
        ...isEmpty ? {
            borderTopColor: "#555"
        } : {
        }
    };
}
function calcButtonContainerStyle(editorWidth, buttonContainerWidth, cursorPosition, isEmpty) {
    const translateX = cursorPosition.styleLeft / editorWidth * 100;
    const minTranslateX = 20 / buttonContainerWidth * 100;
    const maxTranslateX = 100 - minTranslateX;
    return {
        left: cursorPosition.styleLeft,
        transform: `translateX(-${Math.max(minTranslateX, Math.min(translateX, maxTranslateX))}%)`,
        ...isEmpty ? {
            color: "#eee",
            fontSize: "11px",
            display: "inline-block",
            padding: "0 5px",
            cursor: "not-allowed",
            backgroundColor: "#555"
        } : {
        }
    };
}
function calcQueryInputStyle(editorWidth, cursorPosition) {
    const translateX = cursorPosition.styleLeft / editorWidth * 100;
    return {
        position: "absolute",
        top: cursorPosition.styleTop,
        left: cursorPosition.styleLeft,
        transform: `translateX(-${translateX}%)`
    };
}
function PopupMenuButton({ children , selected  }) {
    return h("div", {
        className: selected ? "button selected" : "button"
    }, children);
}
const editor = document.querySelector(".editor");
function PopupMenu({ open , emptyMessage , cursorPosition , items , onSelect , onSelectNonexistent , onClose  }) {
    const { ref , width: buttonContainerWidth = 0  } = useResizeObserver();
    const isEmpty = W1(()=>items.length === 0
    , [
        items.length
    ]);
    const [selectedIndex, setSelectedIndex] = Q1(null);
    const { width: editorWidth = 0  } = useResizeObserver({
        ref: editor
    });
    z1(()=>{
        setSelectedIndex(isEmpty ? null : 0);
    }, [
        isEmpty,
        items
    ]);
    const handleKeydown = N1((e)=>{
        if (!open) return;
        if (e.isComposing) return;
        const isTab = e.key === "Tab" && !e.ctrlKey && !e.shiftKey && !e.altKey;
        const isShiftTab = e.key === "Tab" && !e.ctrlKey && e.shiftKey && !e.altKey;
        const isEnter = e.key === "Enter" && !e.ctrlKey && !e.shiftKey && !e.altKey;
        const isEscape = e.key === "Escape" && !e.ctrlKey && !e.shiftKey && !e.altKey;
        if (isTab || isShiftTab || isEnter || isEscape) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (isEmpty || selectedIndex === null) {
            if (isEnter) onSelectNonexistent?.();
            if (isEscape) onClose?.();
        } else {
            if (isTab) setSelectedIndex((selectedIndex + 1) % items.length);
            if (isShiftTab) {
                setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
            }
            if (isEnter) onSelect?.(items[selectedIndex], selectedIndex);
            if (isEscape) onClose?.();
        }
    }, [
        isEmpty,
        items,
        onClose,
        onSelect,
        onSelectNonexistent,
        open,
        selectedIndex,
    ]);
    useDocumentEventListener("keydown", handleKeydown, {
        capture: true
    });
    const popupMenuStyle = calcPopupMenuStyle(cursorPosition);
    const triangleStyle = calcTriangleStyle(cursorPosition, isEmpty);
    const buttonContainerStyle = calcButtonContainerStyle(editorWidth, buttonContainerWidth, cursorPosition, isEmpty);
    const itemListElement = items.map((item, i1)=>h(PopupMenuButton, {
            key: i1,
            selected: selectedIndex === i1
        }, item)
    );
    return h(xe, null, open && h("div", {
        className: "popup-menu",
        style: popupMenuStyle,
        "data-testid": "popup-menu"
    }, h("div", {
        ref: ref,
        className: "button-container",
        style: buttonContainerStyle
    }, items.length === 0 ? emptyMessage ?? "アイテムは空です" : itemListElement), h("div", {
        className: "triangle",
        style: triangleStyle
    })));
}
const editor1 = document.querySelector(".editor");
const QueryInput = ({ defaultQuery , cursorPosition , onInput , onBlur  })=>{
    const ref = useRef();
    const { width: editorWidth = 0  } = useResizeObserver({
        ref: editor1
    });
    const queryInputStyle = calcQueryInputStyle(editorWidth, cursorPosition);
    z1(()=>{
        ref.current.focus();
    }, []);
    const handleInput = N1((e)=>{
        if (e.currentTarget) onInput?.(e.currentTarget.value);
    }, [
        onInput
    ]);
    return h("form", {
        className: "form-inline"
    }, h("input", {
        ref: ref,
        className: "form-control",
        style: queryInputStyle,
        value: defaultQuery,
        default: true,
        onInput: handleInput,
        onBlur: onBlur
    }));
};
function useMatchedItems(query, items) {
    const matchedItems = W1(()=>{
        return items.filter((item)=>{
            const target = item.searchableText.toLowerCase();
            return target.includes(query.toLowerCase());
        });
    }, [
        items,
        query
    ]);
    return matchedItems;
}
function SuggestionBox({ open , emptyMessage , items , cursorPosition , onSelect , onSelectNonexistent , onClose  }) {
    const [query, setQuery] = Q1("");
    const matchedItems = useMatchedItems(query, items);
    const matchedItemsForPopupMenu = W1(()=>matchedItems.map((item)=>item.element
        )
    , [
        matchedItems
    ]);
    z1(()=>{
        if (open === false) setQuery("");
    }, [
        open
    ]);
    const handleSelect = N1((_item, index)=>{
        onSelect(matchedItems[index], query);
    }, [
        matchedItems,
        onSelect,
        query
    ]);
    const handleSelectNonexistent = N1(()=>{
        onSelectNonexistent(query);
    }, [
        onSelectNonexistent,
        query
    ]);
    const handleClose = N1(()=>{
        onClose(query);
    }, [
        onClose,
        query
    ]);
    return h("div", null, h(PopupMenu, {
        open: open,
        emptyMessage: emptyMessage,
        items: matchedItemsForPopupMenu,
        cursorPosition: cursorPosition,
        onSelect: handleSelect,
        onSelectNonexistent: handleSelectNonexistent,
        onClose: handleClose
    }), open && h(QueryInput, {
        defaultQuery: query,
        cursorPosition: cursorPosition,
        onInput: setQuery,
        onBlur: handleClose
    }));
}
function uniqBy(arr, fn) {
    const result = [];
    const keys = new Set();
    for (const el of arr){
        const key = fn(el);
        if (!keys.has(key)) {
            keys.add(key);
            result.push(el);
        }
    }
    return result;
}
function pagePathToIcon(currentProjectName, pagePath) {
    const isRoot = pagePath.startsWith(`/`);
    const projectName = isRoot ? pagePath.slice(1, pagePath.indexOf("/", 1)) : currentProjectName;
    const pageName = isRoot ? pagePath.slice(1 + projectName.length + 1) : pagePath;
    const isCurrentProjectIcon = projectName === currentProjectName;
    const normalizedPagePath = isCurrentProjectIcon ? pageName : `/${projectName}/${pageName}`;
    return {
        pagePath: normalizedPagePath,
        imgAlt: pageName,
        imgTitle: pageName,
        imgSrc: `/api/pages/${projectName}/${encodeURIComponent(pageName)}/icon`,
        notation: `[${normalizedPagePath}.icon]`
    };
}
function iconLinkElementToIcon(currentProjectName, iconLinkElement) {
    const imgElement = iconLinkElement.querySelector("img.icon");
    const isCurrentProjectIcon = iconLinkElement.pathname.startsWith(`/${currentProjectName}/`);
    const projectName = isCurrentProjectIcon ? currentProjectName : iconLinkElement.pathname.slice(1, iconLinkElement.pathname.indexOf("/", 1));
    const pagePath = isCurrentProjectIcon ? imgElement.alt : `/${projectName}/${imgElement.alt}`;
    return {
        pagePath: pagePath,
        imgAlt: imgElement.alt,
        imgTitle: imgElement.alt,
        imgSrc: new URL(imgElement.src, location.origin).pathname,
        notation: `[${pagePath}.icon]`
    };
}
function scanIconsFromEditor(projectName, editor2) {
    const iconLinkElements = Array.from(editor2.querySelectorAll("a.link.icon"));
    return iconLinkElements.map((iconLinkElement)=>iconLinkElementToIcon(projectName, iconLinkElement)
    );
}
function calcCursorPosition(cursor) {
    const top = +cursor.style.top.slice(0, -2);
    const left = +cursor.style.left.slice(0, -2);
    return {
        styleTop: top,
        styleLeft: left
    };
}
function insertText(textInput, text) {
    textInput.focus();
    textInput.value = text;
    const uiEvent = document.createEvent("UIEvent");
    uiEvent.initEvent("input", true, false);
    textInput.dispatchEvent(uiEvent);
}
const cursor = document.querySelector(".cursor");
function generateItems(icons) {
    return uniqBy(icons, (icon)=>icon.pagePath
    ).map((icon)=>({
            element: h("span", null, h("img", {
                alt: icon.imgAlt,
                title: icon.imgTitle,
                style: "width: 1.3em; height: 1.3em; object-fit: contain;",
                src: icon.imgSrc
            }), " " + icon.pagePath),
            searchableText: icon.pagePath,
            value: icon
        })
    );
}
const App = ({ isSuggestionOpenKeyDown , presetIcons , editor: editor2 , textInput  })=>{
    const [open, setOpen] = Q1(false);
    const [cursorPosition, setCursorPosition] = Q1({
        styleTop: 0,
        styleLeft: 0
    });
    const [items, setItems] = Q1([]);
    const [presetAppended, setPresetAppended] = Q1(false);
    const handleSelect = N1((item)=>{
        setOpen(false);
        insertText(textInput, item.value.notation);
    }, [
        textInput
    ]);
    const handleSelectNonexistent = N1((query)=>{
        setOpen(false);
        insertText(textInput, `[${query}.icon]`);
    }, [
        textInput
    ]);
    const handleClose = N1(()=>{
        setOpen(false);
        textInput.focus();
    }, [
        textInput
    ]);
    const handleKeydown = N1((e)=>{
        if (!isSuggestionOpenKeyDown(e)) return;
        e.preventDefault();
        e.stopPropagation();
        const icons = scanIconsFromEditor(scrapbox.Project.name, editor2);
        if (open && !presetAppended) {
            setItems([
                ...items,
                ...generateItems(presetIcons)
            ]);
            setPresetAppended(true);
        } else {
            setCursorPosition(calcCursorPosition(cursor));
            textInput.blur();
            setItems(generateItems(icons));
            setOpen(true);
            setPresetAppended(false);
        }
    }, [
        editor2,
        isSuggestionOpenKeyDown,
        items,
        open,
        presetAppended,
        presetIcons,
        textInput,
    ]);
    useDocumentEventListener("keydown", handleKeydown, {
        capture: true
    });
    return h(SuggestionBox, {
        open: open,
        emptyMessage: "\u30ad\u30fc\u30ef\u30fc\u30c9\u306b\u30de\u30c3\u30c1\u3059\u308b\u30a2\u30a4\u30b3\u30f3\u304c\u3042\u308a\u307e\u305b\u3093",
        items: items,
        cursorPosition: cursorPosition,
        onSelect: handleSelect,
        onSelectNonexistent: handleSelectNonexistent,
        onClose: handleClose
    });
};
const DEFAULT_IS_SUGEGSTION_OPEN_KEY_DOWN = (e)=>{
    return e.key === "l" && e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey;
};
function registerIconSuggestion1(options) {
    const editor2 = document.querySelector(".editor");
    const textInput = document.querySelector("#text-input");
    if (!editor2) throw new Error(".editor が存在しません");
    if (!textInput) throw new Error("#text-input が存在しません");
    const container = document.createElement("div");
    editor2.appendChild(container);
    const presetIcons = (options?.presetIcons ?? []).map((pagePath)=>pagePathToIcon(scrapbox.Project.name, pagePath)
    );
    ye(h(App, {
        textInput: textInput,
        editor: editor2,
        isSuggestionOpenKeyDown: options?.isSuggestionOpenKeyDown ?? DEFAULT_IS_SUGEGSTION_OPEN_KEY_DOWN,
        presetIcons: presetIcons
    }), container);
}
export { registerIconSuggestion1 as registerIconSuggestion };

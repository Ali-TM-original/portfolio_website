(function (e) { var t = {}; function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports } r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function (e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" === typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) { return e[t] }.bind(null, o)); return n }, r.n = function (e) { var t = e && e.__esModule ? function () { return e["default"] } : function () { return e }; return r.d(t, "a", t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "https://static.arc.io/", r(r.s = "bd93") })({ 8011: function (e, t) { (function (e, t, r, n, o, i, a, c, s) { for (var d = !0, u = !1, l = 0; l < document.scripts.length; l++)if (document.scripts[l].src.indexOf(a) > -1) { d = !("no" === document.scripts[l].getAttribute("data-lazy")); break } var f = !1, p = [], m = function (e) { ("e" in e || "p" in e || e.f && e.f.indexOf("capture") > -1 || e.f && e.f.indexOf("showReportDialog") > -1) && d && h(p), m.data.push(e) }; function h(a) { if (!f) { f = !0; var d = t.getElementsByTagName(r)[0], u = t.createElement(r); u.src = c, u.setAttribute("crossorigin", "anonymous"), u.addEventListener("load", (function () { try { e[n] = g, e[o] = y; var t = e[i], r = t.init; t.init = function (e) { var t = s; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); r(t) }, b(a, t) } catch (c) { console.error(c) } })), d.parentNode.insertBefore(u, d) } } function b(t, r) { try { for (var i = m.data, a = 0; a < t.length; a++)"function" === typeof t[a] && t[a](); var c = !1, s = e["__SENTRY__"]; "undefined" !== typeof s && s.hub && s.hub.getClient() && (c = !0); var d = !1; for (a = 0; a < i.length; a++)if (i[a].f) { d = !0; var u = i[a]; !1 === c && "init" !== u.f && r.init(), c = !0, r[u.f].apply(r, u.a) } !1 === c && !1 === d && r.init(); var l = e[n], f = e[o]; for (a = 0; a < i.length; a++)"e" in i[a] && l ? l.apply(e, i[a].e) : "p" in i[a] && f && f.apply(e, [i[a].p]) } catch (p) { console.error(p) } } m.data = [], e[i] = e[i] || {}, e[i].onLoad = function (e) { p.push(e), d && !u || h(p) }, e[i].forceLoad = function () { u = !0, d && setTimeout((function () { h(p) })) }, ["init", "addBreadcrumb", "captureMessage", "captureException", "captureEvent", "configureScope", "withScope", "showReportDialog"].forEach((function (t) { e[i][t] = function () { m({ f: t, a: arguments }) } })); var g = e[n]; e[n] = function (t, r, n, o, i) { m({ e: [].slice.call(arguments) }), g && g.apply(e, arguments) }; var y = e[o]; e[o] = function (t) { m({ p: "reason" in t ? t.reason : "detail" in t && "reason" in t.detail ? t.detail.reason : t }), y && y.apply(e, arguments) }, d || setTimeout((function () { h(p) })) })(window, document, "script", "onerror", "onunhandledrejection", "Sentry", "7e5c2fad7a564ff8bffd4effc2abb26d", "https://browser.sentry-cdn.com/6.2.2/bundle.min.js", { dsn: "https://7e5c2fad7a564ff8bffd4effc2abb26d@sentry.arc.io/2" }) }, bd93: function (e, t, r) { "use strict"; r.r(t); r("8011"); const n = "arc:", o = ":start", i = ":end", a = (console.log, self.performance); class c { constructor(e = {}) { const { id: t = "", enabled: r = !0 } = e; this.prefix = n + t, this.prefix.endsWith(":") || (this.prefix += ":"), this.enabled = r, this.mark = this.mark.bind(this), this.markOnce = this.markOnce.bind(this), this.markStart = this.markStart.bind(this), this.toJSON = this.toJSON.bind(this), this.markEndAndMeasure = this.markEndAndMeasure.bind(this) } enable() { this.enabled = !0 } disable() { this.enabled = !1 } mark(e) { this.enabled && a.mark(this.prefix + e) } measure(e, t, r) { if (this.enabled) try { a.measure(this.prefix + e, t, r) } catch (n) { } } markOnce(e) { if (!this.enabled) return; const t = this.prefix + e, r = performance.getEntriesByName(t); 0 === r.length && performance.mark(t) } markStart(e) { if (!this.enabled) return () => { }; const t = this.prefix + e, r = Math.random().toString(36).substring(2, 5), n = `${t}:${r}`, c = n + o, s = n + i; return a.mark(c), () => this.markEndAndMeasure(t, c, s) } markEndAndMeasure(e, t, r) { if (this.enabled) { a.mark(r); try { a.measure(e, t, r) } catch (n) { } a.clearMarks(t), a.clearMarks(r) } } toJSON() { if (!this.enabled) return {}; const e = a.getEntries().filter(e => e.name.startsWith(this.prefix)).map(e => e.toJSON()); return { entries: e, timeOrigin: a.timeOrigin } } } var s = new c; const d = "arc:", u = { COMLINK_INIT: d + "comlink:init", NODE_ID: d + ":nodeId", CDN_CONFIG: d + "cdn:config", P2P_CLIENT_READY: d + "cdn:ready", STORED_FIDS: d + "cdn:storedFids", SW_HEALTH_CHECK: d + "cdn:healthCheck", WIDGET_CONFIG: d + "widget:config", WIDGET_INIT: d + "widget:init", WIDGET_UI_LOAD: d + "widget:load", BROKER_LOAD: d + "broker:load", RENDER_FILE: d + "inlay:renderFile", FILE_RENDERED: d + "inlay:fileRendered" }; console.log; function l() { const e = document.body; return e && "frameset" !== e.tagName.toLowerCase() ? e : document.documentElement } const f = "data-arc-widget"; function p(e, t, r) { const n = `${e}#${t.id}`; let o = document.head.querySelector(n); if (o) return o; o = document.createElement(e); for (const i in t) o[i] = t[i]; return o.setAttribute(f, ""), r && o.addEventListener("load", r, { once: !0 }), document.head.appendChild(o), o } function m() { const e = document.createElement("link"), { relList: t } = e; return !(!t || !t.supports) && t.supports("preload") } function h(e, t) { const r = document.createElement("iframe"); r.id = t, r.src = e, r.title = "Arc.io Broker Iframe", r.sandbox = "allow-scripts allow-same-origin allow-top-navigation-by-user-activation"; const n = { opacity: "0", width: "0px", height: "0px", border: "none", top: "-9999px", left: "-9999px", position: "fixed", visibility: "hidden", "user-select": "none" }; for (const [o, i] of Object.entries(n)) r.style.setProperty(o, i, "important"); return r.setAttribute("loading", "eager"), r.setAttribute(f, ""), r } function b(e) { const t = "arc-broker"; let r = document.querySelector("iframe#" + t); if (!r) { r = h(e, t); const n = () => { const e = l(); try { e.prepend(r) } catch (t) { e.appendChild(r) } o.disconnect() }, o = new MutationObserver(n); o.observe(document.documentElement, { childList: !0, subtree: !0 }), n() } return new Promise(e => { const t = e => { e.data.arcEvent === u.BROKER_LOAD && i() }; window.addEventListener("message", t), r.addEventListener("load", i); const n = 1e4, o = setTimeout(() => { console.warn("Arc broker timed out"), i() }, n); function i() { clearTimeout(o), window.removeEventListener("message", t), r.removeEventListener("load", i), e(r) } }) } function g(e) { if (!("serviceWorker" in navigator)) return; const { controller: t } = navigator.serviceWorker; t && t.postMessage(e) } function y() { if ("__arc__" in window) return; const e = window.__arc__ = {}; "arc" in window || (window.arc = e), s.measure("widget.js:load", "responseEnd"), g({ arcEvent: u.WIDGET_INIT }); const t = "6c0aadb", r = "https://static.arc.io", n = `${r}/widget/js/core.js?${t}`, o = `${r}/widget/js/core-legacy.js?${t}`, i = "https://core.arc.io/broker.html?" + t, a = (e, t) => ({ href: e, crossOrigin: "", rel: "preconnect", id: "arc-preconnect-" + t }), c = [a("https://gateway.arc.io", "gateway"), a("https://webseed.arc.io", "webseed")]; m() && c.push({ href: n, rel: "modulepreload", as: "script", id: "arc-preload-corejs" }), c.forEach(e => p("link", e)); let d = s.markStart("ws_tracker:connect"); const l = "wss://tracker.arc.io/announce", f = new WebSocket(l); f.addEventListener("open", d, { once: !0 }), e.trackerSocket = f, d = s.markStart("broker.html:load"); const h = b(i); h.then(d), e.brokerIframePromise = h, d = s.markStart("core.js:load"), p("script", { src: n, type: "module", async: !0, id: "arc-corejs" }, d), function () { var e = document, t = e.createElement("script"); if (!("noModule" in t) && "onbeforeload" in t) { var r = !1; e.addEventListener("beforeload", (function (e) { if (e.target === t) r = !0; else if (!e.target.hasAttribute("nomodule") || !r) return; e.preventDefault() }), !0), t.type = "module", t.src = ".", e.head.appendChild(t), t.remove() } }(), p("script", { src: o, noModule: !0, async: !0, id: "arc-corejs-legacy" }) } y() } });
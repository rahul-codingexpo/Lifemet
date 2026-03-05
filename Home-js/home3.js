(self.webpackChunk = self.webpackChunk || []).push([
  ["517"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new G.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            $.test(e) || !q.test(e)
              ? (i = parseInt(e, 10))
              : q.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          j.debug && window && window.console.warn(e);
        }
        var l,
          c,
          s,
          d = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(l, c) {
              function s() {
                var e = new d();
                return (a(e.init) && e.init.apply(e, arguments), e);
              }
              function d() {}
              (c === n && ((c = l), (l = Object)), (s.Bare = d));
              var u,
                f = (r[e] = l[e]),
                p = (d[e] = s[e] = new r());
              return (
                (p.constructor = s),
                (s.mixin = function (t) {
                  return ((d[e] = s[e] = o(s, t)[e]), s);
                }),
                (s.open = function (e) {
                  if (
                    ((u = {}),
                    a(e) ? (u = e.call(s, p, f, s, l)) : i(e) && (u = e),
                    i(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return (a(p.init) || (p.init = l), s);
                }),
                s.open(c)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                    ? t + n
                    : (e /= i / 2) < 1
                      ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                      : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          g = /[\-\.0-9]/g,
          y = /[A-Z]/,
          I = "number",
          T = /^(rgb|#)/,
          m = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          h = /(deg|rad|turn)$/,
          _ = "unitless",
          v = /(all|none) 0s ease 0s/,
          O = /^(width|height)$/,
          A = document.createElement("a"),
          R = ["Webkit", "Moz", "O", "ms"],
          S = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in A.style)
              return {
                dom: e,
                css: e,
              };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < R.length; t++)
              if ((n = R[t] + i) in A.style)
                return {
                  dom: n,
                  css: S[t] + e,
                };
          },
          w = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (w.transition) {
          var N = w.timing.dom;
          if (((A.style[N] = u["ease-in-back"][0]), !A.style[N]))
            for (var C in f) u[C][0] = f[C];
        }
        var P = (t.frame =
            (l =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && w.bind
              ? l.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          M = (t.now =
            (s =
              (c = p.performance) &&
              (c.now || c.webkitNow || c.msNow || c.mozNow)) && w.bind
              ? s.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          F = d(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = Q[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  l = this.props[i];
                return (
                  l || (l = this.props[i] = new r.Bare()),
                  l.init(this.$el, n, a, t),
                  l
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      l.call(this);
                      break;
                    case "redraw":
                      s.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  (u.call(
                    this,
                    e,
                    function (e, t) {
                      (e.span > f && (f = e.span), e.stop(), e.animate(t));
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    },
                  ),
                    d.call(this),
                    f > 0 &&
                      ((this.timer = new B({
                        duration: f,
                        context: this,
                      })),
                      (this.active = !0),
                      t && (this.timer.complete = a)));
                  var p = this,
                    E = !1,
                    g = {};
                  P(function () {
                    (u.call(p, e, function (e) {
                      e.active && ((E = !0), (g[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(g));
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function l(e) {
              var t;
              (this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                d.call(this));
            }
            function c() {
              (l.call(this), (this.el.style.display = "none"));
            }
            function s() {
              this.el.offsetHeight;
            }
            function d() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              ((n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[w.transition.dom] = n)));
            }
            function u(e, t, i) {
              var a,
                r,
                o,
                l,
                c = t !== f,
                s = {};
              for (a in e)
                ((o = e[a]),
                  a in H
                    ? (s.transform || (s.transform = {}), (s.transform[a] = o))
                    : (y.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in Q ? (s[a] = o) : (l || (l = {}), (l[a] = o))));
              for (a in s) {
                if (((o = s[a]), !(r = this.props[a]))) {
                  if (!c) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && l && i.call(this, l);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function g(e) {
              this.$el.css(e);
            }
            function I(e, n) {
              t[e] = function () {
                return this.children
                  ? T.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function T(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            ((t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                j.keepInherited && !j.fallback)
              ) {
                var n = z(this.el, "transition");
                n && !v.test(n) && (this.upstream = n);
              }
              w.backface &&
                j.hideBackface &&
                W(this.el, w.backface.css, "hidden");
            }),
              I("add", n),
              I("start", i),
              I("wait", function (e) {
                ((e = r(e, 0)),
                  this.active
                    ? this.queue.push({
                        options: e,
                      })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0)));
              }),
              I("then", function (e) {
                return this.active
                  ? (this.queue.push({
                      options: e,
                      args: arguments,
                    }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then().",
                    );
              }),
              I("next", a),
              I("stop", l),
              I("set", function (e) {
                (l.call(this, e), u.call(this, e, p, g));
              }),
              I("show", function (e) {
                ("string" != typeof e && (e = "block"),
                  (this.el.style.display = e));
              }),
              I("hide", c),
              I("redraw", s),
              I("destroy", function () {
                (l.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null));
              }));
          }),
          G = d(F, function (t) {
            function n(t, n) {
              var i = e.data(t, E) || e.data(t, E, new F.Bare());
              return (i.el || i.init(t), n ? i.start(n) : i);
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          k = d(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return (this.update(e), t);
            }
            ((e.init = function (e, t, n, i) {
              ((this.$el = e), (this.el = e[0]));
              var a,
                o,
                l,
                c = t[0];
              (n[2] && (c = n[2]),
                Y[c] && (c = Y[c]),
                (this.name = c),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((a = t[2]),
                  (o = this.ease),
                  (l = "ease"),
                  void 0 !== o && (l = o),
                  a in u ? a : l)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = O.test(this.name)),
                (this.unit = i.unit || this.unit || j.defaultUnit),
                (this.angle = i.angle || this.angle || j.defaultAngle),
                j.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : ""))));
            }),
              (e.set = function (e) {
                ((e = this.convert(e, this.type)),
                  this.update(e),
                  this.redraw());
              }),
              (e.transition = function (e) {
                ((this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e));
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                ((e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new V({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  })));
              }),
              (e.get = function () {
                return z(this.el, this.name);
              }),
              (e.update = function (e) {
                W(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  W(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r = "number" == typeof e,
                  l = "string" == typeof e;
                switch (t) {
                  case I:
                    if (r) return e;
                    if (l && "" === e.replace(g, "")) return +e;
                    a = "number(unitless)";
                    break;
                  case T:
                    if (l) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    a = "hex or rgb string";
                    break;
                  case m:
                    if (r) return e + this.unit;
                    if (l && t.test(e)) return e;
                    a = "number(px) or string(unit)";
                    break;
                  case b:
                    if (r) return e + this.unit;
                    if (l && t.test(e)) return e;
                    a = "number(px) or string(unit or %)";
                    break;
                  case h:
                    if (r) return e + this.angle;
                    if (l && t.test(e)) return e;
                    a = "number(deg) or string(angle)";
                    break;
                  case _:
                    if (r || (l && b.test(e))) return e;
                    a = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      a +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e,
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              }));
          }),
          x = d(k, function (e, t) {
            e.init = function () {
              (t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), T)));
            };
          }),
          U = d(k, function (e, t) {
            ((e.init = function () {
              (t.init.apply(this, arguments), (this.animate = this.fallback));
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              }));
          }),
          D = d(k, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                ((a = (r = H[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a));
            }
            ((e.init = function () {
              (t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  H.perspective &&
                    j.perspective &&
                    ((this.current.perspective = j.perspective),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw())));
            }),
              (e.set = function (e) {
                (n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw());
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                ((this.active = !0), (this.nextStyle = this.style(i)));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                W(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    ((i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a))));
                  }),
                  i
                );
              }));
          }),
          V = d(function (t) {
            function r() {
              var e,
                t,
                n,
                i = c.length;
              if (i)
                for (P(r), t = M(), e = i; e--; ) (n = c[e]) && n.render(t);
            }
            var l = {
              ease: u.ease[1],
              from: 0,
              to: 1,
            };
            ((t.init = function (e) {
              ((this.duration = e.duration || 0), (this.delay = e.delay || 0));
              var t = e.ease || l.ease;
              (u[t] && (t = u[t][1]),
                "function" != typeof t && (t = l.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name));
              var n = e.from,
                i = e.to;
              (void 0 === n && (n = l.from),
                void 0 === i && (i = l.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = M()),
                !1 !== e.autoplay && this.play());
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = M()),
                  (this.active = !0),
                  1 === c.push(this) && P(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, c)) >= 0 &&
                    ((t = c.slice(n + 1)),
                    (c.length = n),
                    t.length && (c = c.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2]),
                        ))
                      : Math.round((this.begin + o * this.change) * s) / s),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                ((t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy());
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(g, "");
                  (i !== e.replace(g, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i));
                }
                ((t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t));
              }),
              (t.destroy = function () {
                (this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a));
              }));
            var c = [],
              s = 1e3;
          }),
          B = d(V, function (e) {
            ((e.init = function (e) {
              ((this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play());
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              }));
          }),
          X = d(V, function (e, t) {
            ((e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                ((n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new V({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      }),
                    ));
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  ((this.tweens = null), (this.current = null));
                }
              }));
          }),
          j = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !w.transition,
            agentTests: [],
          });
        ((t.fallback = function (e) {
          if (!w.transition) return (j.fallback = !0);
          j.agentTests.push("(" + e + ")");
          var t = RegExp(j.agentTests.join("|"), "i");
          j.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new V(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({
              complete: t,
              duration: e,
              context: n,
            });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          }));
        var W = e.style,
          z = e.css,
          Y = {
            transform: w.transform && w.transform.css,
          },
          Q = {
            color: [x, T],
            background: [x, T, "background-color"],
            "outline-color": [x, T],
            "border-color": [x, T],
            "border-top-color": [x, T],
            "border-right-color": [x, T],
            "border-bottom-color": [x, T],
            "border-left-color": [x, T],
            "border-width": [k, m],
            "border-top-width": [k, m],
            "border-right-width": [k, m],
            "border-bottom-width": [k, m],
            "border-left-width": [k, m],
            "border-spacing": [k, m],
            "letter-spacing": [k, m],
            margin: [k, m],
            "margin-top": [k, m],
            "margin-right": [k, m],
            "margin-bottom": [k, m],
            "margin-left": [k, m],
            padding: [k, m],
            "padding-top": [k, m],
            "padding-right": [k, m],
            "padding-bottom": [k, m],
            "padding-left": [k, m],
            "outline-width": [k, m],
            opacity: [k, I],
            top: [k, b],
            right: [k, b],
            bottom: [k, b],
            left: [k, b],
            "font-size": [k, b],
            "text-indent": [k, b],
            "word-spacing": [k, b],
            width: [k, b],
            "min-width": [k, b],
            "max-width": [k, b],
            height: [k, b],
            "min-height": [k, b],
            "max-height": [k, b],
            "line-height": [k, _],
            "scroll-top": [U, I, "scrollTop"],
            "scroll-left": [U, I, "scrollLeft"],
          },
          H = {};
        (w.transform &&
          ((Q.transform = [D]),
          (H = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [h],
            rotateX: [h],
            rotateY: [h],
            scale: [I],
            scaleX: [I],
            scaleY: [I],
            skew: [h],
            skewX: [h],
            skewY: [h],
          })),
          w.transform &&
            w.backface &&
            ((H.z = [b, "translateZ"]),
            (H.rotateZ = [h]),
            (H.scaleZ = [I]),
            (H.perspective = [m])));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        l,
        c,
        s,
        d,
        u,
        f,
        p,
        E,
        g,
        y,
        I,
        T,
        m,
        b,
        h,
        _,
        v = window.$,
        O = n(5487) && v.tram;
      (((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (l = Function.prototype),
        r.push,
        (c = r.slice),
        r.concat,
        o.toString,
        (s = o.hasOwnProperty),
        (d = r.forEach),
        (u = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (E = r.indexOf),
        r.lastIndexOf,
        (g = Object.keys),
        l.bind,
        (y =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (d && e.forEach === d) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else
                for (var l = i.keys(e), r = 0, o = l.length; r < o; r++)
                  if (t.call(n, e[l[r]], l[r], e) === a) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : u && e.map === u
                ? e.map(t, n)
                : (y(e, function (e, a, r) {
                    i.push(t.call(n, e, a, r));
                  }),
                  i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              I(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return ((i = e), !0);
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
                ? e.filter(t, n)
                : (y(e, function (e, a, r) {
                    t.call(n, e, a, r) && i.push(e);
                  }),
                  i);
          }),
        (I =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                  ? e.some(t, n)
                  : (y(e, function (e, i, o) {
                      if (r || (r = t.call(n, e, i, o))) return a;
                    }),
                    !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : I(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(c.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              O.frame(function () {
                ((t = !1), e.apply(i, n));
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            l,
            c,
            s = function () {
              var d = i.now() - l;
              d < t
                ? (a = setTimeout(s, t - d))
                : ((a = null), n || ((c = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            ((o = this), (r = arguments), (l = i.now()));
            var d = n && !a;
            return (
              a || (a = setTimeout(s, t)),
              d && ((c = e.apply(o, r)), (o = r = null)),
              c
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (g) return g(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return s.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (T = /(.)^/),
        (m = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (h = function (e) {
          return "\\" + m[e];
        }),
        (_ = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || T)
                  .source,
                (t.interpolate || T).source,
                (t.evaluate || T).source,
              ].join("|") + "|$",
              "g",
            ),
            o = 0,
            l = "__p+='";
          (e.replace(r, function (t, n, i, a, r) {
            return (
              (l += e.slice(o, r).replace(b, h)),
              (o = r + t.length),
              n
                ? (l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                  ? (l += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : a && (l += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (l += "';\n"));
          var c = t.variable;
          if (c) {
            if (!_.test(c))
              throw Error("variable is not a bare identifier: " + c);
          } else ((l = "with(obj||{}){\n" + l + "}\n"), (c = "obj"));
          l =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            l +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", l);
          } catch (e) {
            throw ((e.source = l), e);
          }
          var s = function (e) {
            return a.call(this, e, i);
          };
          return ((s.source = "function(" + c + "){\n" + l + "}"), s);
        }),
        (e.exports = i));
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            a = document,
            r = e("html"),
            o = e("body"),
            l = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            s =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function d() {
            var n =
              a.fullScreen ||
              a.mozFullScreen ||
              a.webkitIsFullScreen ||
              a.msFullscreenElement ||
              !!a.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function u() {
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              a = i.env("editor");
            if (n) {
              a && e.remove();
              return;
            }
            (e.length && e.remove(), a || o.append(t));
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              (/\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0),
                f &&
                  !c &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs",
                    )),
                    (i = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg",
                      )
                      .attr("alt", "")
                      .css({
                        marginRight: "4px",
                        width: "26px",
                      })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg",
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(i, o),
                    n[0])),
                  u(),
                  setTimeout(u, 500),
                  e(a).off(s, d).on(s, d)));
            }),
            n
          );
        }),
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return {
              exit: 1,
            };
          var a,
            r = e(window),
            o = e(document.documentElement),
            l = document.location,
            c = "hashchange",
            s =
              n.load ||
              function () {
                var t, n, i;
                ((a = !0),
                  (window.WebflowEditor = !0),
                  r.off(c, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: {
                        siteId: o.attr("data-wf-site"),
                      },
                      xhrFields: {
                        withCredentials: !0,
                      },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, a, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data",
                            );
                          ((t.thirdPartyCookiesSupported = n),
                            (a =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: a,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f));
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    (E(n, i), t(!1));
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n));
              },
            d = !1;
          try {
            d =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !a && /\?edit/.test(l.hash) && s();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            (window.removeEventListener("message", t, !1), e.remove());
          }
          return (
            d
              ? s()
              : l.search
                ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) ||
                    /\?edit$/.test(l.href)) &&
                  s()
                : r.on(c, u).triggerHandler(c),
            {}
          );
        }),
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function l() {
                      t = !1;
                    }
                    function c() {
                      (document.addEventListener("mousemove", s),
                        document.addEventListener("mousedown", s),
                        document.addEventListener("mouseup", s),
                        document.addEventListener("pointermove", s),
                        document.addEventListener("pointerdown", s),
                        document.addEventListener("pointerup", s),
                        document.addEventListener("touchmove", s),
                        document.addEventListener("touchstart", s),
                        document.addEventListener("touchend", s));
                    }
                    function s(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", s),
                        document.removeEventListener("mousedown", s),
                        document.removeEventListener("mouseup", s),
                        document.removeEventListener("pointermove", s),
                        document.removeEventListener("pointerdown", s),
                        document.removeEventListener("pointerup", s),
                        document.removeEventListener("touchmove", s),
                        document.removeEventListener("touchstart", s),
                        document.removeEventListener("touchend", s));
                    }
                    (document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0,
                    ),
                      document.addEventListener("mousedown", l, !0),
                      document.addEventListener("pointerdown", l, !0),
                      document.addEventListener("touchstart", l, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), c());
                        },
                        !0,
                      ),
                      c(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, i, l;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (l = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === l && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0,
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            ((n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible",
                              ) && t.removeAttribute("data-wf-focus-visible"));
                          }
                        },
                        !0,
                      ));
                  })(document);
                }
            },
          };
        }),
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            ((a = (i = n.target).tagName),
              ((/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0)));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        }),
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      ((n.triggers = {}),
        (n.types = {
          INTRO: "w-ix-intro" + a,
          OUTRO: "w-ix-outro" + a,
        }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          ((i = []), t.extend(n.triggers, r));
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n));
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t) {
        var n = document.createEvent("CustomEvent");
        (n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n));
      }
      var r = window.jQuery,
        o = {},
        l = ".w-ix";
      ((o.triggers = {}),
        (o.types = {
          INTRO: "w-ix-intro" + l,
          OUTRO: "w-ix-outro" + l,
        }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            (i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE"));
          },
          outro: function (e, t) {
            (i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE"));
          },
        }),
        (e.exports = o));
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      (a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          }),
        ));
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        l = [],
        c = window.Webflow || [],
        s = window.jQuery,
        d = s(window),
        u = s(document),
        f = s.isFunction,
        p = (r._ = n(5756)),
        E = (r.tram = n(5487) && s.tram),
        g = !1,
        y = !1;
      function I(e) {
        (r.env() &&
          (f(e.design) && d.on("__wf_design", e.design),
          f(e.preview) && d.on("__wf_preview", e.preview)),
          f(e.destroy) && d.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (g) return e.ready();
              p.contains(l, e.ready) || l.push(e.ready);
            })(e));
      }
      function T(e) {
        var t;
        (f(e.design) && d.off("__wf_design", e.design),
          f(e.preview) && d.off("__wf_preview", e.preview),
          f(e.destroy) && d.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (l = p.filter(l, function (e) {
              return e !== t.ready;
            }))));
      }
      ((E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && T(o[e]);
          var i = (o[e] = t(s, p, n) || {});
          return (I(i), i);
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (g) {
            f(e) && e();
            return;
          }
          c.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
                ? n && !t
                : "slug" === e
                  ? n && window.__wf_slug
                  : "editor" === e
                    ? window.WebflowEditor
                    : "test" === e
                      ? window.__wf_test
                      : "frame" === e
                        ? window !== window.top
                        : void 0
            : n;
        }));
      var m = navigator.userAgent.toLowerCase(),
        b = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        h = (r.env.chrome =
          /chrome/.test(m) &&
          /Google/.test(navigator.vendor) &&
          parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
        _ = (r.env.ios = /(ipod|iphone|ipad)/.test(m));
      ((r.env.safari = /safari/.test(m) && !h && !_),
        b &&
          u.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = b
          ? function (e) {
              return e === i || s.contains(e, i);
            }
          : function () {
              return !0;
            }));
      var v = "resize.webflow orientationchange.webflow load.webflow",
        O = "scroll.webflow " + v;
      function A(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function R(e) {
        f(e) && e();
      }
      function S() {
        (a && (a.reject(), d.off("load", a.resolve)),
          (a = new s.Deferred()),
          d.on("load", a.resolve));
      }
      ((r.resize = A(d, v)),
        (r.scroll = A(d, O)),
        (r.redraw = A()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          ((g = !0),
            y ? ((y = !1), p.each(o, I)) : p.each(l, R),
            p.each(c, R),
            r.resize.up());
        }),
        (r.load = function (e) {
          a.then(e);
        }),
        (r.destroy = function (e) {
          ((e = e || {}),
            (y = !0),
            d.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(o, T),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (l = []),
            (c = []),
            "pending" === a.state() && S());
        }),
        s(r.ready),
        S(),
        (e.exports = window.Webflow = r));
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            l = e(window),
            c = i.env(),
            s = window.location,
            d = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = l.scrollTop(),
              n = l.height();
            t.each(a, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  a = t.sec,
                  r = a.offset().top,
                  o = a.outerHeight(),
                  l = 0.5 * n,
                  c = a.is(":visible") && r + o - l >= e && r + l <= e + n;
                t.active !== c && ((t.active = c), g(i, u, c));
              }
            });
          }
          function g(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  ((n = c && i.env("design")),
                    (r = i.env("slug") || s.pathname || ""),
                    i.scroll.off(E),
                    (a = []));
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((d.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            d.hash.length > 1 &&
                            d.host + d.pathname === s.host + s.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(d.hash)) return;
                            var l = e(d.hash);
                            l.length &&
                              a.push({
                                link: o,
                                sec: l,
                                active: !1,
                              });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            g(
                              o,
                              u,
                              (!c && d.href === s.href) ||
                                i === r ||
                                (f.test(i) && p.test(r)),
                            );
                        }
                      }
                    })(t[o]);
                  a.length && (i.scroll.on(E), E());
                }),
            o
          );
        }),
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            l = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            s = i.env("editor") ? ".w-editor-body" : "body",
            d =
              "header, " +
              s +
              " > .header, " +
              s +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
            ),
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let g =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function y(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function I(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var s =
                E.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== s) {
                var u,
                  f = e(s);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = s),
                  n.hash !== u &&
                    a &&
                    a.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (a.state && a.state.hash) !== u &&
                    a.pushState(
                      {
                        hash: u,
                      },
                      "",
                      u,
                    ),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = r.scrollTop(),
                        a = (function (t) {
                          var n = e(d),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - i,
                              l = t.outerHeight();
                            l < o && (a -= Math.round((o - l) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion",
                                ) ||
                              g.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              l.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time"),
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          s = Date.now(),
                          u = function () {
                            var e,
                              t,
                              r,
                              l,
                              d,
                              f = Date.now() - s;
                            (window.scroll(
                              0,
                              ((e = i),
                              (t = a),
                              (r = f) > (l = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((d = r / l) < 0.5
                                      ? 4 * d * d * d
                                      : (d - 1) * (2 * d - 2) * (2 * d - 2) +
                                        1)),
                            ),
                              f <= o ? c(u) : "function" == typeof n && n());
                          };
                        c(u);
                      }
                    })(f, function () {
                      (y(f, "add"),
                        f.get(0).focus({
                          preventScroll: !0,
                        }),
                        y(f, "remove"));
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              (o.on(n, f, I),
                o.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild));
            },
          };
        }),
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              l = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (a = i));
            }
            function s(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  (t.preventDefault(), t.stopPropagation());
                  return;
                }
                var i,
                  c,
                  s,
                  d,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - a;
                ((a = p),
                  Math.abs(E) > l &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (c = t),
                    (s = {
                      direction: E > 0 ? "right" : "left",
                    }),
                    (d = e.Event(i, {
                      originalEvent: c,
                    })),
                    e(c.target).trigger(d, s),
                    u()));
              }
            }
            function d(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                (e.preventDefault(), e.stopPropagation(), (o = !1));
                return;
              }
            }
            function u() {
              r = !1;
            }
            (t.addEventListener("touchstart", c, !1),
              t.addEventListener("touchmove", s, !1),
              t.addEventListener("touchend", d, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", c, !1),
              t.addEventListener("mousemove", s, !1),
              t.addEventListener("mouseup", d, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                (t.removeEventListener("touchstart", c, !1),
                  t.removeEventListener("touchmove", s, !1),
                  t.removeEventListener("touchend", d, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", c, !1),
                  t.removeEventListener("mousemove", s, !1),
                  t.removeEventListener("mouseup", d, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null));
              }));
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        }),
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, i, a, r, o, l, c, s, d, u, f) {
        return function (p) {
          e(p);
          var E = p.form,
            g = {
              name: E.attr("data-name") || E.attr("name") || "Untitled Form",
              pageId: E.attr("data-wf-page-id") || "",
              elementId: E.attr("data-wf-element-id") || "",
              domain: u("html").attr("data-wf-domain") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                E.html(),
              ),
              trackingCookies: i(),
            };
          let y = E.attr("data-wf-flow");
          y && (g.wfFlow = y);
          let I = E.attr("data-wf-locale-id");
          (I && (g.localeId = I), a(p));
          var T = r(E, g.fields);
          return T
            ? o(T)
            : ((g.fileUploads = l(E)), c(p), s)
              ? void u
                  .ajax({
                    url: f,
                    type: "POST",
                    data: g,
                    dataType: "json",
                    crossDomain: !0,
                  })
                  .done(function (e) {
                    (e && 200 === e.code && (p.success = !0), d(p));
                  })
                  .fail(function () {
                    d(p);
                  })
              : void d(p);
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var i = n(3949);
      let a = (e, t, n, i) => {
        let a = document.createElement("div");
        (t.appendChild(a),
          turnstile.render(a, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              i();
            },
          }));
      };
      i.define(
        "forms",
        (e.exports = function (e, t) {
          let r,
            o = "TURNSTILE_LOADED";
          var l,
            c,
            s,
            d,
            u,
            f = {},
            p = e(document),
            E = window.location,
            g = window.XDomainRequest && !window.atob,
            y = ".w-form",
            I = /e(-)?mail/i,
            T = /^\S+@\S+$/,
            m = window.alert,
            b = i.env();
          let h = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var _ = /list-manage[1-9]?.com/i,
            v = t.debounce(function () {
              console.warn(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.",
              );
            }, 100);
          function O(t, r) {
            var l = e(r),
              s = e.data(r, y);
            (s ||
              (s = e.data(r, y, {
                form: l,
              })),
              A(s));
            var f = l.closest("div.w-form");
            ((s.done = f.find("> .w-form-done")),
              (s.fail = f.find("> .w-form-fail")),
              (s.fileUploads = f.find(".w-file-upload")),
              s.fileUploads.each(function (t) {
                !(function (t, n) {
                  if (n.fileUploads && n.fileUploads[t]) {
                    var i,
                      a = e(n.fileUploads[t]),
                      r = a.find("> .w-file-upload-default"),
                      o = a.find("> .w-file-upload-uploading"),
                      l = a.find("> .w-file-upload-success"),
                      c = a.find("> .w-file-upload-error"),
                      s = r.find(".w-file-upload-input"),
                      d = r.find(".w-file-upload-label"),
                      f = d.children(),
                      p = c.find(".w-file-upload-error-msg"),
                      E = l.find(".w-file-upload-file"),
                      g = l.find(".w-file-remove-link"),
                      y = E.find(".w-file-upload-file-name"),
                      I = p.attr("data-w-size-error"),
                      T = p.attr("data-w-type-error"),
                      m = p.attr("data-w-generic-error");
                    if (
                      (b ||
                        d.on("click keydown", function (e) {
                          ("keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), s.click());
                        }),
                      d
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      g
                        .find(".w-icon-file-upload-remove")
                        .attr("aria-hidden", "true"),
                      b)
                    )
                      (s.on("click", function (e) {
                        e.preventDefault();
                      }),
                        d.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        }));
                    else {
                      (g.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        (s.removeAttr("data-value"),
                          s.val(""),
                          y.html(""),
                          r.toggle(!0),
                          l.toggle(!1),
                          d.focus());
                      }),
                        s.on("change", function (a) {
                          var l, s, d;
                          (i =
                            a.target && a.target.files && a.target.files[0]) &&
                            (r.toggle(!1),
                            c.toggle(!1),
                            o.toggle(!0),
                            o.focus(),
                            y.text(i.name),
                            S() || R(n),
                            (n.fileUploads[t].uploading = !0),
                            (l = i),
                            (s = v),
                            (d = new URLSearchParams({
                              name: l.name,
                              size: l.size,
                            })),
                            e
                              .ajax({
                                type: "GET",
                                url: `${u}?${d}`,
                                crossDomain: !0,
                              })
                              .done(function (e) {
                                s(null, e);
                              })
                              .fail(function (e) {
                                s(e);
                              }));
                        }));
                      var h = d.outerHeight();
                      (s.height(h), s.width(1));
                    }
                  }
                  function _(e) {
                    var i = e.responseJSON && e.responseJSON.msg,
                      a = m;
                    ("string" == typeof i &&
                    0 === i.indexOf("InvalidFileTypeError")
                      ? (a = T)
                      : "string" == typeof i &&
                        0 === i.indexOf("MaxFileSizeError") &&
                        (a = I),
                      p.text(a),
                      s.removeAttr("data-value"),
                      s.val(""),
                      o.toggle(!1),
                      r.toggle(!0),
                      c.toggle(!0),
                      c.focus(),
                      (n.fileUploads[t].uploading = !1),
                      S() || A(n));
                  }
                  function v(t, n) {
                    if (t) return _(t);
                    var a = n.fileName,
                      r = n.postData,
                      o = n.fileId,
                      l = n.s3Url;
                    (s.attr("data-value", o),
                      (function (t, n, i, a, r) {
                        var o = new FormData();
                        for (var l in n) o.append(l, n[l]);
                        (o.append("file", i, a),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: o,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              r(null);
                            })
                            .fail(function (e) {
                              r(e);
                            }));
                      })(l, r, i, a, O));
                  }
                  function O(e) {
                    if (e) return _(e);
                    (o.toggle(!1),
                      l.css("display", "inline-block"),
                      l.focus(),
                      (n.fileUploads[t].uploading = !1),
                      S() || A(n));
                  }
                  function S() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, s);
              }),
              h &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  (e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading"));
                })(s),
                S(l, !0),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : o,
                  function () {
                    a(
                      h,
                      r,
                      (e) => {
                        ((s.turnstileToken = e), A(s), S(l, !1));
                      },
                      () => {
                        (A(s), s.btn && s.btn.prop("disabled", !0), S(l, !1));
                      },
                    );
                  },
                )));
            var g =
              s.form.attr("aria-label") || s.form.attr("data-name") || "Form";
            (s.done.attr("aria-label") || s.form.attr("aria-label", g),
              s.done.attr("tabindex", "-1"),
              s.done.attr("role", "region"),
              s.done.attr("aria-label") ||
                s.done.attr("aria-label", g + " success"),
              s.fail.attr("tabindex", "-1"),
              s.fail.attr("role", "region"),
              s.fail.attr("aria-label") ||
                s.fail.attr("aria-label", g + " failure"));
            var I = (s.action = l.attr("action"));
            if (
              ((s.handler = null),
              (s.redirect = l.attr("data-redirect")),
              _.test(I))
            ) {
              s.handler = P;
              return;
            }
            if (!I) {
              if (c) {
                s.handler = (0, n(6524).default)(
                  A,
                  E,
                  i,
                  C,
                  F,
                  L,
                  m,
                  w,
                  R,
                  c,
                  M,
                  e,
                  d,
                );
                return;
              }
              v();
            }
          }
          function A(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            ((e.wait = e.btn.attr("data-wait") || null), (e.success = !1));
            let n = !!(h && !e.turnstileToken);
            (t.prop("disabled", n),
              t.removeClass("w-form-loading"),
              e.label && t.val(e.label));
          }
          function R(e) {
            var t = e.btn,
              n = e.wait;
            (t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n)));
          }
          function S(e, t) {
            let n = e.closest(".w-form");
            t ? n.addClass("w-form-loading") : n.removeClass("w-form-loading");
          }
          function L(t, n) {
            var i = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])',
                )
                .each(function (a, r) {
                  var o,
                    l,
                    c,
                    s,
                    d,
                    u = e(r),
                    f = u.attr("type"),
                    p =
                      u.attr("data-name") ||
                      u.attr("name") ||
                      "Field " + (a + 1);
                  p = encodeURIComponent(p);
                  var E = u.val();
                  if ("checkbox" === f) E = u.is(":checked");
                  else if ("radio" === f) {
                    if (null === n[p] || "string" == typeof n[p]) return;
                    E =
                      t
                        .find('input[name="' + u.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  ("string" == typeof E && (E = e.trim(E)),
                    (n[p] = E),
                    (i =
                      i ||
                      ((o = u),
                      (l = f),
                      (c = p),
                      (s = E),
                      (d = null),
                      "password" === l
                        ? (d = "Passwords cannot be submitted.")
                        : o.attr("required")
                          ? s
                            ? I.test(o.attr("type")) &&
                              !T.test(s) &&
                              (d =
                                "Please enter a valid email address for: " + c)
                            : (d = "Please fill out the required field: " + c)
                          : "g-recaptcha-response" !== c ||
                            s ||
                            (d = "Please confirm you're not a robot."),
                      d)));
                }),
              i
            );
          }
          function w(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, i) {
                var a = e(i),
                  r =
                    a.attr("data-name") || a.attr("name") || "File " + (t + 1),
                  o = a.attr("data-value");
                ("string" == typeof o && (o = e.trim(o)), (n[r] = o));
              }),
              n
            );
          }
          f.ready =
            f.design =
            f.preview =
              function () {
                (h &&
                  (((r = document.createElement("script")).src =
                    "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                  document.head.appendChild(r),
                  (r.onload = () => {
                    p.trigger(o);
                  })),
                  (d =
                    "https://webflow.com/api/v1/form/" +
                    (c = e("html").attr("data-wf-site"))),
                  g &&
                    d.indexOf("https://webflow.com") >= 0 &&
                    (d = d.replace(
                      "https://webflow.com",
                      "https://formdata.webflow.com",
                    )),
                  (u = `${d}/signFile`),
                  (l = e(y + " form")).length && l.each(O),
                  (!b || i.env("preview")) &&
                    !s &&
                    (function () {
                      ((s = !0),
                        p.on("submit", y + " form", function (t) {
                          var n = e.data(this, y);
                          n.handler && ((n.evt = t), n.handler(n));
                        }));
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        i = "w--redirected-checked",
                        a = "w--redirected-focus",
                        r = "w--redirected-focus-visible",
                        o = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      (p.on(
                        "change",
                        y + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(i);
                        },
                      ),
                        p.on("change", y + ' form input[type="radio"]', (a) => {
                          e(`input[name="${a.target.name}"]:not(${t})`).map(
                            (t, a) => e(a).siblings(n).removeClass(i),
                          );
                          let r = e(a.target);
                          r.hasClass("w-radio-input") ||
                            r.siblings(n).addClass(i);
                        }),
                        o.forEach(([t, n]) => {
                          (p.on(
                            "focus",
                            y + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              (e(t.target).siblings(n).addClass(a),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]",
                                  )
                                  .siblings(n)
                                  .addClass(r));
                            },
                          ),
                            p.on(
                              "blur",
                              y + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${a} ${r}`);
                              },
                            ));
                        }));
                    })());
              };
          let N = {
            _mkto_trk: "marketo",
          };
          function C() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                i = n[0];
              if (i in N) {
                let t = N[i],
                  a = n.slice(1).join("=");
                e[t] = a;
              }
              return e;
            }, {});
          }
          function P(n) {
            A(n);
            var i,
              a = n.form,
              r = {};
            if (/^https/.test(E.href) && !/^https/.test(n.action))
              return void a.attr("method", "post");
            F(n);
            var o = L(a, r);
            if (o) return m(o);
            (R(n),
              t.each(r, function (e, t) {
                (I.test(t) && (r.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (i = e),
                  /^(first[ _-]?name)$/i.test(t) && (r.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (r.LNAME = e));
              }),
              i &&
                !r.FNAME &&
                ((r.FNAME = (i = i.split(" "))[0]),
                (r.LNAME = r.LNAME || i[1])));
            var l = n.action.replace("/post?", "/post-json?") + "&c=?",
              c = l.indexOf("u=") + 2;
            c = l.substring(c, l.indexOf("&", c));
            var s = l.indexOf("id=") + 3;
            ((r["b_" + c + "_" + (s = l.substring(s, l.indexOf("&", s)))] = ""),
              e
                .ajax({
                  url: l,
                  data: r,
                  dataType: "jsonp",
                })
                .done(function (e) {
                  ((n.success =
                    "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    M(n));
                })
                .fail(function () {
                  M(n);
                }));
          }
          function M(e) {
            var t = e.form,
              n = e.redirect,
              a = e.success;
            if (a && n) return void i.location(n);
            (e.done.toggle(a),
              e.fail.toggle(!a),
              a ? e.done.focus() : e.fail.focus(),
              t.toggle(!a),
              A(e));
          }
          function F(e) {
            (e.evt && e.evt.preventDefault(), (e.evt = null));
          }
          return f;
        }),
      );
    },
    4345: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        o =
          'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      i.define(
        "slider",
        (e.exports = function (e, t) {
          var n,
            l,
            c,
            s = {},
            d = e.tram,
            u = e(document),
            f = i.env(),
            p = ".w-slider",
            E = "w-slider-force-show",
            g = a.triggers,
            y = !1;
          function I() {
            (n = u.find(p)).length &&
              (n.each(b), c || (T(), i.resize.on(m), i.redraw.on(s.redraw)));
          }
          function T() {
            (i.resize.off(m), i.redraw.off(s.redraw));
          }
          function m() {
            n.filter(":visible").each(P);
          }
          function b(t, n) {
            var i = e(n),
              a = e.data(n, p);
            (a ||
              (a = e.data(n, p, {
                index: 0,
                depth: 1,
                hasFocus: {
                  keyboard: !1,
                  mouse: !1,
                },
                el: i,
                config: {},
              })),
              (a.mask = i.children(".w-slider-mask")),
              (a.left = i.children(".w-slider-arrow-left")),
              (a.right = i.children(".w-slider-arrow-right")),
              (a.nav = i.children(".w-slider-nav")),
              (a.slides = a.mask.children(".w-slide")),
              a.slides.each(g.reset),
              y && (a.maskWidth = 0),
              void 0 === i.attr("role") && i.attr("role", "region"),
              void 0 === i.attr("aria-label") &&
                i.attr("aria-label", "carousel"));
            var r = a.mask.attr("id");
            if (
              (r || ((r = "w-slider-mask-" + t), a.mask.attr("id", r)),
              l ||
                a.ariaLiveLabel ||
                (a.ariaLiveLabel = e(
                  '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                ).appendTo(a.mask)),
              a.left.attr("role", "button"),
              a.left.attr("tabindex", "0"),
              a.left.attr("aria-controls", r),
              void 0 === a.left.attr("aria-label") &&
                a.left.attr("aria-label", "previous slide"),
              a.right.attr("role", "button"),
              a.right.attr("tabindex", "0"),
              a.right.attr("aria-controls", r),
              void 0 === a.right.attr("aria-label") &&
                a.right.attr("aria-label", "next slide"),
              !d.support.transform)
            ) {
              (a.left.hide(), a.right.hide(), a.nav.hide(), (c = !0));
              return;
            }
            (a.el.off(p),
              a.left.off(p),
              a.right.off(p),
              a.nav.off(p),
              h(a),
              l
                ? (a.el.on("setting" + p, w(a)), L(a), (a.hasTimer = !1))
                : (a.el.on("swipe" + p, w(a)),
                  a.left.on("click" + p, A(a)),
                  a.right.on("click" + p, R(a)),
                  a.left.on("keydown" + p, O(a, A)),
                  a.right.on("keydown" + p, O(a, R)),
                  a.nav.on("keydown" + p, "> div", w(a)),
                  a.config.autoplay &&
                    !a.hasTimer &&
                    ((a.hasTimer = !0), (a.timerCount = 1), S(a)),
                  a.el.on("mouseenter" + p, v(a, !0, "mouse")),
                  a.el.on("focusin" + p, v(a, !0, "keyboard")),
                  a.el.on("mouseleave" + p, v(a, !1, "mouse")),
                  a.el.on("focusout" + p, v(a, !1, "keyboard"))),
              a.nav.on("click" + p, "> div", w(a)),
              f ||
                a.mask
                  .contents()
                  .filter(function () {
                    return 3 === this.nodeType;
                  })
                  .remove());
            var o = i.filter(":hidden");
            o.addClass(E);
            var s = i.parents(":hidden");
            (s.addClass(E), y || P(t, n), o.removeClass(E), s.removeClass(E));
          }
          function h(e) {
            var t = {};
            ((t.crossOver = 0),
              (t.animation = e.el.attr("data-animation") || "slide"),
              "outin" === t.animation &&
                ((t.animation = "cross"), (t.crossOver = 0.5)),
              (t.easing = e.el.attr("data-easing") || "ease"));
            var n = e.el.attr("data-duration");
            if (
              ((t.duration = null != n ? parseInt(n, 10) : 500),
              _(e.el.attr("data-infinite")) && (t.infinite = !0),
              _(e.el.attr("data-disable-swipe")) && (t.disableSwipe = !0),
              _(e.el.attr("data-hide-arrows"))
                ? (t.hideArrows = !0)
                : e.config.hideArrows && (e.left.show(), e.right.show()),
              _(e.el.attr("data-autoplay")))
            ) {
              ((t.autoplay = !0),
                (t.delay = parseInt(e.el.attr("data-delay"), 10) || 2e3),
                (t.timerMax = parseInt(e.el.attr("data-autoplay-limit"), 10)));
              var i = "mousedown" + p + " touchstart" + p;
              l ||
                e.el.off(i).one(i, function () {
                  L(e);
                });
            }
            var a = e.right.width();
            ((t.edge = a ? a + 40 : 100), (e.config = t));
          }
          function _(e) {
            return "1" === e || "true" === e;
          }
          function v(t, n, i) {
            return function (a) {
              if (n) t.hasFocus[i] = n;
              else if (
                e.contains(t.el.get(0), a.relatedTarget) ||
                ((t.hasFocus[i] = n),
                (t.hasFocus.mouse && "keyboard" === i) ||
                  (t.hasFocus.keyboard && "mouse" === i))
              )
                return;
              n
                ? (t.ariaLiveLabel.attr("aria-live", "polite"),
                  t.hasTimer && L(t))
                : (t.ariaLiveLabel.attr("aria-live", "off"),
                  t.hasTimer && S(t));
            };
          }
          function O(e, t) {
            return function (n) {
              switch (n.keyCode) {
                case r.SPACE:
                case r.ENTER:
                  return (t(e)(), n.preventDefault(), n.stopPropagation());
              }
            };
          }
          function A(e) {
            return function () {
              C(e, {
                index: e.index - 1,
                vector: -1,
              });
            };
          }
          function R(e) {
            return function () {
              C(e, {
                index: e.index + 1,
                vector: 1,
              });
            };
          }
          function S(e) {
            L(e);
            var t = e.config,
              n = t.timerMax;
            (n && e.timerCount++ > n) ||
              (e.timerId = window.setTimeout(function () {
                null == e.timerId || l || (R(e)(), S(e));
              }, t.delay));
          }
          function L(e) {
            (window.clearTimeout(e.timerId), (e.timerId = null));
          }
          function w(n) {
            return function (a, o) {
              o = o || {};
              var c,
                s,
                d = n.config;
              if (l && "setting" === a.type) {
                if ("prev" === o.select) return A(n)();
                if ("next" === o.select) return R(n)();
                if ((h(n), M(n), null == o.select)) return;
                return (
                  (c = o.select),
                  (s = null),
                  c === n.slides.length && (I(), M(n)),
                  t.each(n.anchors, function (t, n) {
                    e(t.els).each(function (t, i) {
                      e(i).index() === c && (s = n);
                    });
                  }),
                  void (
                    null != s &&
                    C(n, {
                      index: s,
                      immediate: !0,
                    })
                  )
                );
              }
              if ("swipe" === a.type)
                return d.disableSwipe || i.env("editor")
                  ? void 0
                  : "left" === o.direction
                    ? R(n)()
                    : "right" === o.direction
                      ? A(n)()
                      : void 0;
              if (n.nav.has(a.target).length) {
                var u = e(a.target).index();
                if (
                  ("click" === a.type &&
                    C(n, {
                      index: u,
                    }),
                  "keydown" === a.type)
                )
                  switch (a.keyCode) {
                    case r.ENTER:
                    case r.SPACE:
                      (C(n, {
                        index: u,
                      }),
                        a.preventDefault());
                      break;
                    case r.ARROW_LEFT:
                    case r.ARROW_UP:
                      (N(n.nav, Math.max(u - 1, 0)), a.preventDefault());
                      break;
                    case r.ARROW_RIGHT:
                    case r.ARROW_DOWN:
                      (N(n.nav, Math.min(u + 1, n.pages)), a.preventDefault());
                      break;
                    case r.HOME:
                      (N(n.nav, 0), a.preventDefault());
                      break;
                    case r.END:
                      (N(n.nav, n.pages), a.preventDefault());
                      break;
                    default:
                      return;
                  }
              }
            };
          }
          function N(e, t) {
            var n = e.children().eq(t).focus();
            e.children().not(n);
          }
          function C(t, n) {
            n = n || {};
            var i = t.config,
              a = t.anchors;
            t.previous = t.index;
            var r = n.index,
              c = {};
            (r < 0
              ? ((r = a.length - 1),
                i.infinite &&
                  ((c.x = -t.endX), (c.from = 0), (c.to = a[0].width)))
              : r >= a.length &&
                ((r = 0),
                i.infinite &&
                  ((c.x = a[a.length - 1].width),
                  (c.from = -a[a.length - 1].x),
                  (c.to = c.from - c.x))),
              (t.index = r));
            var s = t.nav
              .children()
              .eq(r)
              .addClass("w-active")
              .attr("aria-pressed", "true")
              .attr("tabindex", "0");
            (t.nav
              .children()
              .not(s)
              .removeClass("w-active")
              .attr("aria-pressed", "false")
              .attr("tabindex", "-1"),
              i.hideArrows &&
                (t.index === a.length - 1 ? t.right.hide() : t.right.show(),
                0 === t.index ? t.left.hide() : t.left.show()));
            var u = t.offsetX || 0,
              f = (t.offsetX = -a[t.index].x),
              p = {
                x: f,
                opacity: 1,
                visibility: "",
              },
              E = e(a[t.index].els),
              I = e(a[t.previous] && a[t.previous].els),
              T = t.slides.not(E),
              m = i.animation,
              b = i.easing,
              h = Math.round(i.duration),
              _ = n.vector || (t.index > t.previous ? 1 : -1),
              v = "opacity " + h + "ms " + b,
              O = "transform " + h + "ms " + b;
            if (
              (E.find(o).removeAttr("tabindex"),
              E.removeAttr("aria-hidden"),
              E.find("*").removeAttr("aria-hidden"),
              T.find(o).attr("tabindex", "-1"),
              T.attr("aria-hidden", "true"),
              T.find("*").attr("aria-hidden", "true"),
              l || (E.each(g.intro), T.each(g.outro)),
              n.immediate && !y)
            ) {
              (d(E).set(p), S());
              return;
            }
            if (t.index !== t.previous) {
              if (
                (l || t.ariaLiveLabel.text(`Slide ${r + 1} of ${a.length}.`),
                "cross" === m)
              ) {
                var A = Math.round(h - h * i.crossOver),
                  R = Math.round(h - A);
                ((v = "opacity " + A + "ms " + b),
                  d(I)
                    .set({
                      visibility: "",
                    })
                    .add(v)
                    .start({
                      opacity: 0,
                    }),
                  d(E)
                    .set({
                      visibility: "",
                      x: f,
                      opacity: 0,
                      zIndex: t.depth++,
                    })
                    .add(v)
                    .wait(R)
                    .then({
                      opacity: 1,
                    })
                    .then(S));
                return;
              }
              if ("fade" === m) {
                (d(I)
                  .set({
                    visibility: "",
                  })
                  .stop(),
                  d(E)
                    .set({
                      visibility: "",
                      x: f,
                      opacity: 0,
                      zIndex: t.depth++,
                    })
                    .add(v)
                    .start({
                      opacity: 1,
                    })
                    .then(S));
                return;
              }
              if ("over" === m) {
                ((p = {
                  x: t.endX,
                }),
                  d(I)
                    .set({
                      visibility: "",
                    })
                    .stop(),
                  d(E)
                    .set({
                      visibility: "",
                      zIndex: t.depth++,
                      x: f + a[t.index].width * _,
                    })
                    .add(O)
                    .start({
                      x: f,
                    })
                    .then(S));
                return;
              }
              i.infinite && c.x
                ? (d(t.slides.not(I))
                    .set({
                      visibility: "",
                      x: c.x,
                    })
                    .add(O)
                    .start({
                      x: f,
                    }),
                  d(I)
                    .set({
                      visibility: "",
                      x: c.from,
                    })
                    .add(O)
                    .start({
                      x: c.to,
                    }),
                  (t.shifted = I))
                : (i.infinite &&
                    t.shifted &&
                    (d(t.shifted).set({
                      visibility: "",
                      x: u,
                    }),
                    (t.shifted = null)),
                  d(t.slides)
                    .set({
                      visibility: "",
                    })
                    .add(O)
                    .start({
                      x: f,
                    }));
            }
            function S() {
              ((E = e(a[t.index].els)),
                (T = t.slides.not(E)),
                "slide" !== m && (p.visibility = "hidden"),
                d(T).set(p));
            }
          }
          function P(t, n) {
            var i,
              a,
              r,
              o,
              c = e.data(n, p);
            if (c) {
              if (
                ((a = (i = c).mask.width()),
                i.maskWidth !== a && ((i.maskWidth = a), 1))
              )
                return M(c);
              l &&
                ((o = 0),
                (r = c).slides.each(function (t, n) {
                  o += e(n).outerWidth(!0);
                }),
                r.slidesWidth !== o && ((r.slidesWidth = o), 1)) &&
                M(c);
            }
          }
          function M(t) {
            var n = 1,
              i = 0,
              a = 0,
              r = 0,
              o = t.maskWidth,
              c = o - t.config.edge;
            (c < 0 && (c = 0),
              (t.anchors = [
                {
                  els: [],
                  x: 0,
                  width: 0,
                },
              ]),
              t.slides.each(function (l, s) {
                (a - i > c &&
                  (n++,
                  (i += o),
                  (t.anchors[n - 1] = {
                    els: [],
                    x: a,
                    width: 0,
                  })),
                  (r = e(s).outerWidth(!0)),
                  (a += r),
                  (t.anchors[n - 1].width += r),
                  t.anchors[n - 1].els.push(s));
                var d = l + 1 + " of " + t.slides.length;
                (e(s).attr("aria-label", d), e(s).attr("role", "group"));
              }),
              (t.endX = a),
              l && (t.pages = null),
              t.nav.length &&
                t.pages !== n &&
                ((t.pages = n),
                (function (t) {
                  var n,
                    i = [],
                    a = t.el.attr("data-nav-spacing");
                  a && (a = parseFloat(a) + "px");
                  for (var r = 0, o = t.pages; r < o; r++)
                    ((n = e('<div class="w-slider-dot" data-wf-ignore />'))
                      .attr("aria-label", "Show slide " + (r + 1) + " of " + o)
                      .attr("aria-pressed", "false")
                      .attr("role", "button")
                      .attr("tabindex", "-1"),
                      t.nav.hasClass("w-num") && n.text(r + 1),
                      null != a &&
                        n.css({
                          "margin-left": a,
                          "margin-right": a,
                        }),
                      i.push(n));
                  t.nav.empty().append(i);
                })(t)));
            var s = t.index;
            (s >= n && (s = n - 1),
              C(t, {
                immediate: !0,
                index: s,
              }));
          }
          return (
            (s.ready = function () {
              ((l = i.env("design")), I());
            }),
            (s.design = function () {
              ((l = !0), setTimeout(I, 1e3));
            }),
            (s.preview = function () {
              ((l = !1), I());
            }),
            (s.redraw = function () {
              ((y = !0), I(), (y = !1));
            }),
            (s.destroy = T),
            s
          );
        }),
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        actionListPlaybackChanged: function () {
          return z;
        },
        animationFrameChanged: function () {
          return D;
        },
        clearRequested: function () {
          return G;
        },
        elementStateChanged: function () {
          return W;
        },
        eventListenerAdded: function () {
          return k;
        },
        eventStateChanged: function () {
          return U;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return j;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return Q;
        },
        parameterChanged: function () {
          return V;
        },
        playbackRequested: function () {
          return M;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return L;
        },
        sessionInitialized: function () {
          return w;
        },
        sessionStarted: function () {
          return N;
        },
        sessionStopped: function () {
          return C;
        },
        stopRequested: function () {
          return F;
        },
        testFrameRendered: function () {
          return x;
        },
        viewportWidthChanged: function () {
          return Y;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: d,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: g,
          IX2_TEST_FRAME_RENDERED: y,
          IX2_EVENT_STATE_CHANGED: I,
          IX2_ANIMATION_FRAME_CHANGED: T,
          IX2_PARAMETER_CHANGED: m,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: h,
          IX2_INSTANCE_REMOVED: _,
          IX2_ELEMENT_STATE_CHANGED: v,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: O,
          IX2_VIEWPORT_WIDTH_CHANGED: A,
          IX2_MEDIA_QUERIES_DEFINED: R,
        } = r.IX2EngineActionTypes,
        { reifyState: S } = o.IX2VanillaUtils,
        L = (e) => ({
          type: l,
          payload: {
            ...S(e),
          },
        }),
        w = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: {
            hasBoundaryNodes: e,
            reducedMotion: t,
          },
        }),
        N = () => ({
          type: s,
        }),
        C = () => ({
          type: d,
        }),
        P = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: {
            defer: t,
            rawData: e,
          },
        }),
        M = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: l,
          verbose: c,
          rawData: s,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: l,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: c,
            rawData: s,
          },
        }),
        F = (e) => ({
          type: p,
          payload: {
            actionListId: e,
          },
        }),
        G = () => ({
          type: E,
        }),
        k = (e, t) => ({
          type: g,
          payload: {
            target: e,
            listenerParams: t,
          },
        }),
        x = (e = 1) => ({
          type: y,
          payload: {
            step: e,
          },
        }),
        U = (e, t) => ({
          type: I,
          payload: {
            stateKey: e,
            newState: t,
          },
        }),
        D = (e, t) => ({
          type: T,
          payload: {
            now: e,
            parameters: t,
          },
        }),
        V = (e, t) => ({
          type: m,
          payload: {
            key: e,
            value: t,
          },
        }),
        B = (e) => ({
          type: b,
          payload: {
            ...e,
          },
        }),
        X = (e, t) => ({
          type: h,
          payload: {
            instanceId: e,
            time: t,
          },
        }),
        j = (e) => ({
          type: _,
          payload: {
            instanceId: e,
          },
        }),
        W = (e, t, n, i) => ({
          type: v,
          payload: {
            elementId: e,
            actionTypeId: t,
            current: n,
            actionItem: i,
          },
        }),
        z = ({ actionListId: e, isPlaying: t }) => ({
          type: O,
          payload: {
            actionListId: e,
            isPlaying: t,
          },
        }),
        Y = ({ width: e, mediaQueries: t }) => ({
          type: A,
          payload: {
            width: e,
            mediaQueries: t,
          },
        }),
        Q = () => ({
          type: R,
        });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i,
        a = {
          actions: function () {
            return s;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, {
          enumerable: !0,
          get: a[r],
        });
      let o = n(9516),
        l =
          (i = n(7243)) && i.__esModule
            ? i
            : {
                default: i,
              },
        c = n(1970),
        s = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return {
              default: e,
            };
          var n = d(t);
          if (n && n.has(e)) return n.get(e);
          var i = {
              __proto__: null,
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(3946));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, o.createStore)(l.default);
      function f(e) {
        e() && (0, c.observeRequests)(u);
      }
      function p(e) {
        (E(),
          (0, c.startEngine)({
            store: u,
            rawData: e,
            allowEvents: !0,
          }));
      }
      function E() {
        (0, c.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        elementContains: function () {
          return m;
        },
        getChildElements: function () {
          return h;
        },
        getClosestElement: function () {
          return v;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return y;
        },
        getRefType: function () {
          return O;
        },
        getSiblingElements: function () {
          return _;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return I;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return g;
        },
        queryDocument: function () {
          return T;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: l } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: d,
          WF_PAGE: u,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function g(e) {
        return (t) => t[l](e);
      }
      function y({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let n = e.split(c),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function I(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function T(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e),
        );
      }
      function m(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function h(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function _(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            (-1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling));
        }
        return t;
      }
      let v = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[l] && n[l](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function O(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? s
            : d
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ei;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ea;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = T(n(9777)),
        o = T(n(4738)),
        l = T(n(4659)),
        c = T(n(3452)),
        s = T(n(6633)),
        d = T(n(3729)),
        u = T(n(2397)),
        f = T(n(5082)),
        p = n(7087),
        E = n(9468),
        g = n(3946),
        y = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return {
              default: e,
            };
          var n = m(t);
          if (n && n.has(e)) return n.get(e);
          var i = {
              __proto__: null,
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(5012)),
        I = T(n(8955));
      function T(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      function m(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (m = function (e) {
          return e ? n : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        h = (e) => b.includes(e),
        {
          COLON_DELIMITER: _,
          BOUNDARY_SELECTOR: v,
          HTML_ELEMENT: O,
          RENDER_GENERAL: A,
          W_MOD_IX: R,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: L,
          getDestinationValues: w,
          observeStore: N,
          getInstanceId: C,
          renderHTMLElement: P,
          clearAllStyles: M,
          getMaxDurationItemIndex: F,
          getComputedStyle: G,
          getInstanceOrigin: k,
          reduceListToGroup: x,
          shouldNamespaceEventParameter: U,
          getNamespacedParameterId: D,
          shouldAllowMediaQuery: V,
          cleanupHTMLElement: B,
          clearObjectCache: X,
          stringifyTarget: j,
          mediaQueriesEqual: W,
          shallowEqual: z,
        } = E.IX2VanillaUtils,
        {
          isPluginType: Y,
          createPluginInstance: Q,
          getPluginDuration: H,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        (N({
          store: e,
          select: ({ ixRequest: e }) => e.preview,
          onChange: Z,
        }),
          N({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          N({
            store: e,
            select: ({ ixRequest: e }) => e.stop,
            onChange: et,
          }),
          N({
            store: e,
            select: ({ ixRequest: e }) => e.clear,
            onChange: en,
          }));
      }
      function Z({ rawData: e, defer: t }, n) {
        let i = () => {
          (ei({
            store: n,
            rawData: e,
            allowEvents: !0,
          }),
            J());
        };
        t ? setTimeout(i, 0) : i();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: l,
            testManual: c,
            verbose: s = !0,
          } = e,
          { rawData: d } = e;
        if (i && a && d && l) {
          let e = d.actionLists[i];
          e &&
            (d = x({
              actionList: e,
              actionItemId: a,
              rawData: d,
            }));
        }
        if (
          (ei({
            store: t,
            rawData: d,
            allowEvents: o,
            testManual: c,
          }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || h(n))
        ) {
          (ep({
            store: t,
            actionListId: i,
          }),
            eu({
              store: t,
              actionListId: i,
              eventId: r,
            }));
          let e = eE({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: l,
            verbose: s,
          });
          s &&
            e &&
            t.dispatch(
              (0, g.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !l,
              }),
            );
        }
      }
      function et({ actionListId: e }, t) {
        (e
          ? ep({
              store: t,
              actionListId: e,
            })
          : ef({
              store: t,
            }),
          ea(t));
      }
      function en(e, t) {
        (ea(t),
          M({
            store: t,
            elementApi: y,
          }));
      }
      function ei({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: a } = e.getState();
        if ((t && e.dispatch((0, g.rawDataImported)(t)), !a.active)) {
          (e.dispatch(
            (0, g.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(v),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            }),
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              (el(e),
                (0, u.default)(n, (t, n) => {
                  let i = I.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`,
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: a, target: r } = e[i],
                          o = y.getQuerySelector(r);
                        t[o] ||
                          ((a === p.EventTypeConsts.MOUSE_CLICK ||
                            a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        ((e.textContent = n), document.body.appendChild(e));
                      }
                    })(n);
                    let { types: i, handler: a } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: s } = c,
                      d = ec(n, ed);
                    if (!(0, l.default)(d)) return;
                    (0, u.default)(d, (e, i) => {
                      let a = n[i],
                        {
                          action: l,
                          id: d,
                          mediaQueries: u = c.mediaQueryKeys,
                        } = a,
                        { actionListId: f } = l.config;
                      (W(u, c.mediaQueryKeys) ||
                        t.dispatch((0, g.mediaQueriesDefined)()),
                        l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(a.config)
                            ? a.config
                            : [a.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              a = (0, o.default)(
                                s,
                                `${f}.continuousParameterGroups`,
                                [],
                              ),
                              l = (0, r.default)(a, ({ id: e }) => e === i),
                              c = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            l &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: a,
                                  actionListId: r,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: s,
                                }) {
                                  let { ixData: d, ixSession: u } =
                                      e.getState(),
                                    { events: f } = d,
                                    E = f[i],
                                    { eventTypeId: g } = E,
                                    I = {},
                                    T = {},
                                    m = [],
                                    { continuousActionGroups: b } = l,
                                    { id: h } = l;
                                  U(g, a) && (h = D(t, h));
                                  let O =
                                    u.hasBoundaryNodes && n
                                      ? y.getClosestElement(n, v)
                                      : null;
                                  (b.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: a } = e.config;
                                      if (!a) return;
                                      let r = a.boundaryMode ? O : null,
                                        o = j(a) + _ + i;
                                      if (
                                        ((T[o] = (function (e = [], t, n) {
                                          let i,
                                            a = [...e];
                                          return (
                                            a.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0),
                                            ),
                                            null == i &&
                                              ((i = a.length),
                                              a.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            a[i].actionItems.push(n),
                                            a
                                          );
                                        })(T[o], t, e)),
                                        !I[o])
                                      ) {
                                        I[o] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: y,
                                        }).forEach((e) => {
                                          m.push({
                                            element: e,
                                            key: o,
                                          });
                                        });
                                      }
                                    });
                                  }),
                                    m.forEach(({ element: t, key: n }) => {
                                      let a = T[n],
                                        l = (0, o.default)(
                                          a,
                                          "[0].actionItems[0]",
                                          {},
                                        ),
                                        { actionTypeId: d } = l,
                                        u = (
                                          d === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                l.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : Y(d)
                                        )
                                          ? Q(d)?.(t, l)
                                          : null,
                                        f = w(
                                          {
                                            element: t,
                                            actionItem: l,
                                            elementApi: y,
                                          },
                                          u,
                                        );
                                      eg({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: r,
                                        actionItem: l,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: h,
                                        actionGroups: a,
                                        smoothing: c,
                                        restingValue: s,
                                        pluginInstance: u,
                                      });
                                    }));
                                })({
                                  store: t,
                                  eventStateKey: d + _ + i,
                                  eventTarget: e,
                                  eventId: d,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: u,
                                });
                              });
                          }),
                        (l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          h(l.actionTypeId)) &&
                          eu({
                            store: t,
                            actionListId: f,
                            eventId: d,
                          }));
                    });
                    let E = (e) => {
                        let { ixSession: i } = t.getState();
                        es(d, (r, o, l) => {
                          let s = n[o],
                            d = i.eventState[l],
                            { action: u, mediaQueries: f = c.mediaQueryKeys } =
                              s;
                          if (!V(f, i.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let i = a(
                              {
                                store: t,
                                element: r,
                                event: s,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: l,
                              },
                              d,
                            );
                            z(i, d) ||
                              t.dispatch((0, g.eventStateChanged)(l, i));
                          };
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(s.config)
                                ? s.config
                                : [s.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      I = (0, f.default)(E, 12),
                      T = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let a = i ? I : E;
                            (e.addEventListener(n, a),
                              t.dispatch((0, g.eventListenerAdded)(e, [n, a])));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(T)
                      : "string" == typeof i && T(e);
                  })({
                    logic: i,
                    store: e,
                    events: t,
                  });
                }));
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    el(e);
                  };
                  (eo.forEach((n) => {
                    (window.addEventListener(n, t),
                      e.dispatch((0, g.eventListenerAdded)(window, [n, t])));
                  }),
                    t());
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(R) && (e.className += ` ${R}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              N({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  (ea(e),
                    M({
                      store: e,
                      elementApi: y,
                    }),
                    ei({
                      store: e,
                      allowEvents: !0,
                    }),
                    J());
                },
              }));
          (e.dispatch((0, g.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                if (a.active)
                  if ((e.dispatch((0, g.animationFrameChanged)(i, r)), t)) {
                    let t = N({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        (n(e), t());
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i));
        }
      }
      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          (n.forEach(er), X(), e.dispatch((0, g.sessionStopped)()));
        }
      }
      function er({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function el(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, g.viewportWidthChanged)({
              width: i,
              mediaQueries: t,
            }),
          );
        }
      }
      let ec = (e, t) => (0, c.default)((0, d.default)(e, t), s.default),
        es = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + _ + i);
            });
          });
        },
        ed = (e) =>
          S({
            config: {
              target: e.target,
              targets: e.targets,
            },
            elementApi: y,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: a } = e.getState(),
          { actionLists: r, events: l } = i,
          c = l[n],
          s = r[t];
        if (s && s.useFirstGroupAsInitialState) {
          let r = (0, o.default)(s, "actionItemGroups[0].actionItems", []);
          if (
            !V(
              (0, o.default)(c, "mediaQueries", i.mediaQueryKeys),
              a.mediaQueryKey,
            )
          )
            return;
          r.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = S({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? {
                        target: c.target,
                        targets: c.targets,
                      }
                    : a,
                event: c,
                elementApi: y,
              }),
              l = Y(r);
            o.forEach((a) => {
              let o = l ? Q(r)?.(a, i) : null;
              eg({
                destination: w(
                  {
                    element: a,
                    actionItem: i,
                    elementApi: y,
                  },
                  o,
                ),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            (ey(t, e),
              i &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
      }) {
        let { ixInstances: r, ixSession: l } = e.getState(),
          c = l.hasBoundaryNodes && n ? y.getClosestElement(n, v) : null;
        (0, u.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            l = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && l) {
            if (c && r && !y.elementContains(c, n.element)) return;
            (ey(n, e),
              n.verbose &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: l,
        verbose: c,
      }) {
        let { ixData: s, ixSession: d } = e.getState(),
          { events: u } = s,
          f = u[t] || {},
          { mediaQueries: p = s.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: g } = (0,
          o.default)(s, `actionLists.${a}`, {});
        if (!E || !E.length) return !1;
        (r >= E.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && g && r++);
        let I =
            (0 === r || (1 === r && g)) && h(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          T = (0, o.default)(E, [r, "actionItems"], []);
        if (!T.length || !V(p, d.mediaQueryKey)) return !1;
        let m = d.hasBoundaryNodes && n ? y.getClosestElement(n, v) : null,
          b = F(T),
          _ = !1;
        return (
          T.forEach((o, s) => {
            let { config: d, actionTypeId: u } = o,
              p = Y(u),
              { target: E } = d;
            E &&
              S({
                config: d,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? m : null,
                elementApi: y,
              }).forEach((d, f) => {
                let E = p ? Q(u)?.(d, o) : null,
                  g = p ? H(u)(d, o) : null;
                _ = !0;
                let T = G({
                    element: d,
                    actionItem: o,
                  }),
                  m = w(
                    {
                      element: d,
                      actionItem: o,
                      elementApi: y,
                    },
                    E,
                  );
                eg({
                  store: e,
                  element: d,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: a,
                  groupIndex: r,
                  isCarrier: b === s && 0 === f,
                  computedStyle: T,
                  destination: m,
                  immediate: l,
                  verbose: c,
                  pluginInstance: E,
                  pluginDuration: g,
                  instanceDelay: I,
                });
              });
          }),
          _
        );
      }
      function eg(e) {
        let t,
          { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: l,
            pluginInstance: c,
            continuous: s,
            restingValue: d,
            eventId: u,
          } = a,
          f = C(),
          { ixElements: E, ixSession: I, ixData: T } = n.getState(),
          m = L(E, r),
          { refState: b } = E[m] || {},
          h = y.getRefType(r),
          _ = I.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (_ && s)
          switch (T.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = d;
              break;
            default:
              t = 0.5;
          }
        let v = k(r, b, i, o, y, c);
        if (
          (n.dispatch(
            (0, g.instanceAdded)({
              instanceId: f,
              elementId: m,
              origin: v,
              refType: h,
              skipMotion: _,
              skipToValue: t,
              ...a,
            }),
          ),
          eI(document.body, "ix2-animation-started", f),
          l)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            (e.dispatch((0, g.instanceStarted)(t, 0)),
              e.dispatch((0, g.animationFrameChanged)(performance.now(), n)));
            let { ixInstances: i } = e.getState();
            eT(i[t], e);
          })(n, f);
        (N({
          store: n,
          select: ({ ixInstances: e }) => e[f],
          onChange: eT,
        }),
          s || n.dispatch((0, g.instanceStarted)(f, I.tick)));
      }
      function ey(e, t) {
        eI(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        (o === O && B(r, i, y), t.dispatch((0, g.instanceRemoved)(e.id)));
      }
      function eI(e, t, n) {
        let i = document.createEvent("CustomEvent");
        (i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i));
      }
      function eT(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: l,
            renderType: c,
            current: s,
            groupIndex: d,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: I,
            styleProp: T,
            verbose: m,
            pluginInstance: b,
          } = e,
          { ixData: h, ixSession: _ } = t.getState(),
          { events: v } = h,
          { mediaQueries: R = h.mediaQueryKeys } = v && v[u] ? v[u] : {};
        if (V(R, _.mediaQueryKey) && (i || n || a)) {
          if (s || (c === A && a)) {
            t.dispatch((0, g.elementStateChanged)(r, l, s, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: a } = e[r] || {},
              d = a && a[l];
            (i === O || Y(l)) && P(n, a, d, u, o, T, y, c, b);
          }
          if (a) {
            if (I) {
              let e = eE({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: d + 1,
                verbose: m,
              });
              m &&
                !e &&
                t.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  }),
                );
            }
            ey(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        }));
      let a = u(n(5801)),
        r = u(n(4738)),
        o = u(n(3789)),
        l = n(7087),
        c = n(1970),
        s = n(3946),
        d = n(9468);
      function u(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: g,
          MOUSE_OVER: y,
          MOUSE_OUT: I,
          DROPDOWN_CLOSE: T,
          DROPDOWN_OPEN: m,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: h,
          TAB_ACTIVE: _,
          TAB_INACTIVE: v,
          NAVBAR_CLOSE: O,
          NAVBAR_OPEN: A,
          MOUSE_MOVE: R,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: L,
          SCROLL_OUT_OF_VIEW: w,
          PAGE_SCROLL_UP: N,
          SCROLLING_IN_VIEW: C,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: M,
          ECOMMERCE_CART_OPEN: F,
          PAGE_START: G,
          PAGE_SCROLL: k,
        } = l.EventTypeConsts,
        x = "COMPONENT_ACTIVE",
        U = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: D } = l.IX2EngineConstants,
        { getNamespacedParameterId: V } = d.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = B(({ element: e, nativeEvent: t }) => e === t.target),
        j = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, a.default)([X, j]),
        z = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !ee[a.eventTypeId]) return a;
          }
          return null;
        },
        Y = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!z(e, i);
        },
        Q = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: o, id: l } = t,
            { actionListId: s, autoStopEventId: d } = o.config,
            u = z(e, d);
          return (
            u &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: d,
                eventTarget: n,
                eventStateKey: d + D + i.split(D)[1],
                actionListId: (0, r.default)(u, "action.config.actionListId"),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: i,
              actionListId: s,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: i,
              actionListId: s,
            }),
            a
          );
        },
        H = (e, t) => (n, i) => (!0 === e(n, i) ? t(n, i) : i),
        $ = {
          handler: H(W, Q),
        },
        q = {
          ...$,
          types: [x, U].join(" "),
        },
        K = [
          {
            target: window,
            types: "resize orientationchange",
            throttle: !0,
          },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = {
          types: K,
        },
        ee = {
          PAGE_START: G,
          PAGE_FINISH: P,
        },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight,
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ei = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return "mouseout" === n && !!r && !!o;
        },
        ea = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = et(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: a - o,
          });
        },
        er = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [x, U].indexOf(i) ? i === x : n.isActive,
            r = {
              ...n,
              isActive: a,
            };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        eo = (e) => (t, n) => {
          let i = {
            elementHovered: ei(t),
          };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        el =
          (e) =>
          (t, n = {}) => {
            let i,
              a,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: l } = et(),
              {
                event: { config: c, eventTypeId: s },
              } = t,
              { scrollOffsetValue: d, scrollOffsetUnit: u } = c,
              f = o - l,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === u ? d : (l * (d || 0)) / 100) / f,
              g = 0;
            n &&
              ((i = p > n.percentTop),
              (g = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let y = s === S ? p >= g + E : p <= g - E,
              I = {
                ...n,
                percentTop: p,
                inBounds: y,
                anchorTop: g,
                scrollingDown: i,
              };
            return (n && y && (a || I.inBounds !== n.inBounds) && e(t, I)) || I;
          },
        ec = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (
            t,
            n = {
              clickCount: 0,
            },
          ) => {
            let i = {
              clickCount: (n.clickCount % 2) + 1,
            };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        ed = (e = !0) => ({
          ...q,
          handler: H(
            e ? W : X,
            er((e, t) => (t.isActive ? $.handler(e, t) : t)),
          ),
        }),
        eu = (e = !0) => ({
          ...q,
          handler: H(
            e ? W : X,
            er((e, t) => (t.isActive ? t : $.handler(e, t))),
          ),
        }),
        ef = {
          ...J,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === L) === n
                  ? (Q(e),
                    {
                      ...t,
                      triggered: !0,
                    })
                  : t;
            }),
            (e, t) => {
              let n = {
                ...t,
                elementVisible: ea(e),
              };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [b]: ed(),
          [h]: eu(),
          [m]: ed(),
          [T]: eu(),
          [A]: ed(!1),
          [O]: eu(!1),
          [_]: ed(),
          [v]: eu(),
          [F]: {
            types: "ecommerce-cart-open",
            handler: H(W, Q),
          },
          [M]: {
            types: "ecommerce-cart-close",
            handler: H(W, Q),
          },
          [f]: {
            types: "click",
            handler: H(
              W,
              es((e, { clickCount: t }) => {
                Y(e) ? 1 === t && Q(e) : Q(e);
              }),
            ),
          },
          [p]: {
            types: "click",
            handler: H(
              W,
              es((e, { clickCount: t }) => {
                2 === t && Q(e);
              }),
            ),
          },
          [E]: {
            ...$,
            types: "mousedown",
          },
          [g]: {
            ...$,
            types: "mouseup",
          },
          [y]: {
            types: Z,
            handler: H(
              W,
              eo((e, t) => {
                t.elementHovered && Q(e);
              }),
            ),
          },
          [I]: {
            types: Z,
            handler: H(
              W,
              eo((e, t) => {
                t.elementHovered || Q(e);
              }),
            ),
          },
          [R]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = {
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
              },
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: c,
                  continuousParameterGroupId: d,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: E = r.clientY,
                  pageX: g = r.pageX,
                  pageY: y = r.pageY,
                } = i,
                I = "X_AXIS" === c,
                T = "mouseout" === i.type,
                m = f / 100,
                b = d,
                h = !1;
              switch (o) {
                case l.EventBasedOn.VIEWPORT:
                  m = I
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = et();
                  m = I ? Math.min(e + g, n) / n : Math.min(t + y, i) / i;
                  break;
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  b = V(a, d);
                  let e = 0 === i.type.indexOf("mouse");
                  if (
                    e &&
                    !0 !==
                      W({
                        element: t,
                        nativeEvent: i,
                      })
                  )
                    break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: l, height: c } = n;
                  if (
                    !e &&
                    !ec(
                      {
                        left: p,
                        top: E,
                      },
                      n,
                    )
                  )
                    break;
                  ((h = !0), (m = I ? (p - r) / l : (E - o) / c));
                }
              }
              return (
                T && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (o !== l.EventBasedOn.ELEMENT || h || h !== r.elementHovered) &&
                  ((m = u ? 1 - m : m),
                  e.dispatch((0, s.parameterChanged)(b, m))),
                {
                  elementHovered: h,
                  clientX: p,
                  clientY: E,
                  pageX: g,
                  pageY: y,
                }
              );
            },
          },
          [k]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = et(),
                l = a / (r - o);
              ((l = i ? 1 - l : l), e.dispatch((0, s.parameterChanged)(n, l)));
            },
          },
          [C]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = {
                scrollPercent: 0,
              },
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: c,
                  scrollHeight: d,
                  clientHeight: u,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: g,
                  startsExiting: y,
                  addEndOffset: I,
                  addStartOffset: T,
                  addOffsetValue: m = 0,
                  endOffsetValue: b = 0,
                } = n;
              if (f === l.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / c : o / d;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(E, e)),
                  {
                    scrollPercent: e,
                  }
                );
              }
              {
                let n = V(i, E),
                  r = e.getBoundingClientRect(),
                  o = (T ? m : 0) / 100,
                  l = (I ? b : 0) / 100;
                ((o = g ? o : 1 - o), (l = y ? l : 1 - l));
                let c = r.top + Math.min(r.height * o, u),
                  f = Math.min(u + (r.top + r.height * l - c), d),
                  p = Math.min(Math.max(0, u - c), f) / f;
                return (
                  p !== a.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(n, p)),
                  {
                    scrollPercent: p,
                  }
                );
              }
            },
          },
          [L]: ef,
          [w]: ef,
          [S]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown && Q(e);
            }),
          },
          [N]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown || Q(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: H(X, (e, t) => {
              let n = {
                finished: "complete" === document.readyState,
              };
              return (n.finished && !(t && t.finshed) && Q(e), n);
            }),
          },
          [G]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: H(
              X,
              (e, t) => (
                t || Q(e),
                {
                  started: !0,
                }
              ),
            ),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return h;
          },
        }));
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: l,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: s,
          IX2_INSTANCE_REMOVED: d,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: g } = i.IX2EngineConstants,
        {
          getItemConfigByKey: y,
          getRenderType: I,
          getStyleProp: T,
        } = a.IX2VanillaUtils,
        m = (e, t) => {
          let n,
            i,
            a,
            o,
            {
              position: l,
              parameterId: c,
              actionGroups: s,
              destinationKeys: d,
              smoothing: u,
              restingValue: E,
              actionTypeId: g,
              customEasingFn: I,
              skipMotion: T,
              skipToValue: m,
            } = e,
            { parameters: b } = t.payload,
            h = Math.max(1 - u, 0.01),
            _ = b[c];
          null == _ && ((h = 1), (_ = E));
          let v = f((Math.max(_, 0) || 0) - l),
            O = T ? m : f(l + v * h),
            A = 100 * O;
          if (O === l && e.current) return e;
          for (let e = 0, { length: t } = s; e < t; e++) {
            let { keyframe: t, actionItems: r } = s[e];
            if ((0 === e && (n = r[0]), A >= t)) {
              n = r[0];
              let l = s[e + 1],
                c = l && A !== t;
              ((i = c ? l.actionItems[0] : null),
                c && ((a = t / 100), (o = (l.keyframe - t) / 100)));
            }
          }
          let R = {};
          if (n && !i)
            for (let e = 0, { length: t } = d; e < t; e++) {
              let t = d[e];
              R[t] = y(g, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (O - a) / o,
              t = p(n.config.easing, e, I);
            for (let e = 0, { length: a } = d; e < a; e++) {
              let a = d[e],
                r = y(g, a, n.config),
                o = (y(g, a, i.config) - r) * t + r;
              R[a] = o;
            }
          }
          return (0, r.merge)(e, {
            position: O,
            current: R,
          });
        },
        b = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: l,
              verbose: c,
              actionItem: s,
              destination: d,
              destinationKeys: u,
              pluginDuration: E,
              instanceDelay: y,
              customEasingFn: I,
              skipMotion: T,
            } = e,
            m = s.config.easing,
            { duration: b, delay: h } = s.config;
          (null != E && (b = E),
            (h = null != y ? y : h),
            l === g ? (b = 0) : (o || T) && (b = h = 0));
          let { now: _ } = t.payload;
          if (n && i) {
            let t = _ - (a + h);
            if (c) {
              let t = b + h,
                n = f(Math.min(Math.max(0, (_ - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / b), 1)),
              o = p(m, n, I),
              l = {},
              s = null;
            return (
              u.length &&
                (s = u.reduce((e, t) => {
                  let n = d[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return ((e[t] = r * o + a), e);
                }, {})),
              (l.current = s),
              (l.position = n),
              1 === n && ((l.active = !1), (l.complete = !0)),
              (0, r.merge)(e, l)
            );
          }
          return e;
        },
        h = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case l:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: l,
                  eventStateKey: c,
                  actionListId: s,
                  groupIndex: d,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: g,
                  verbose: y,
                  continuous: m,
                  parameterId: b,
                  actionGroups: h,
                  smoothing: _,
                  restingValue: v,
                  pluginInstance: O,
                  pluginDuration: A,
                  instanceDelay: R,
                  skipMotion: S,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: w } = a,
                N = I(w),
                C = T(N, w),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e],
                ),
                { easing: M } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: g,
                verbose: y,
                current: null,
                actionItem: a,
                actionTypeId: w,
                eventId: o,
                eventTarget: l,
                eventStateKey: c,
                actionListId: s,
                groupIndex: d,
                renderType: N,
                isCarrier: u,
                styleProp: C,
                continuous: m,
                parameterId: b,
                actionGroups: h,
                smoothing: _,
                restingValue: v,
                pluginInstance: O,
                pluginDuration: A,
                instanceDelay: R,
                skipMotion: S,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(M) && 4 === M.length ? E(M) : void 0,
              });
            }
            case s: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case d: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case u: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  l = e[a],
                  c = l.continuous ? m : b;
                n = (0, r.set)(n, a, c(l, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return ((e[n] = i), e);
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        l = n(9468),
        c = n(7718),
        s = n(1540),
        { ixElements: d } = l.IX2ElementsReducer,
        u = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: d,
          ixInstances: c.ixInstances,
          ixParameters: s.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: l,
          IX2_CLEAR_REQUESTED: c,
        } = i.IX2EngineActionTypes,
        s = {
          preview: {},
          playback: {},
          stop: {},
          clear: {},
        },
        d = Object.create(null, {
          [r]: {
            value: "preview",
          },
          [o]: {
            value: "playback",
          },
          [l]: {
            value: "stop",
          },
          [c]: {
            value: "clear",
          },
        }),
        u = (e = s, t) => {
          if (t.type in d) {
            let n = [d[t.type]];
            return (0, a.setIn)(e, [n], {
              ...t.payload,
            });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return y;
          },
        }));
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: l,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: s,
          IX2_EVENT_STATE_CHANGED: d,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = i.IX2EngineActionTypes,
        g = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        y = (e = g, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, {
                hasBoundaryNodes: n,
                reducedMotion: i,
              });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case l: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case c:
              return g;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case s: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case d: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, {
                viewportWidth: n,
                mediaQueryKey: o,
              });
            }
            case E:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = {
        clearPlugin: function () {
          return d;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return s;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, {
          enumerable: !0,
          get: n[i],
        });
      let a = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) =>
          e || {
            value: 0,
          },
        l = (e) => ({
          value: e.value,
        }),
        c = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return (n.stop(), n.setSubframe(!0), n);
        },
        s = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        d = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, {
          enumerable: !0,
          get: n[i],
        });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        s = () => null,
        d = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = l();
          if (!i) return;
          let o = i.getInstance(e),
            c = i.rive.StateMachineInputType,
            { name: s, inputs: d = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                (n(), e?.off("load", t));
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(s);
              if (null != n) {
                if ((e.isPlaying || e.play(s, !1), a in d || r in d)) {
                  let t = e.layout,
                    n = d[a] ?? t.fit,
                    i = d[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({
                      fit: n,
                      alignment: i,
                    }));
                }
                for (let e in d) {
                  if (e === a || e === r) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case c.Boolean:
                        null != d[e] && (i.value = !!d[e]);
                        break;
                      case c.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case c.Trigger:
                        d[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? u(o.rive) : i.setLoadHandler(e, u);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, {
          enumerable: !0,
          get: n[i],
        });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        l = (e, t) => e.value[t],
        c = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        d = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            l = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              (null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ));
            };
          a ? l(a.spline) : i.setLoadHandler(e, l);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = n(380),
        o = (e, t) => e.value[t],
        l = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? {
                size: parseInt(a, 10),
              }
            : "%" === n.unit || "-" === n.unit
              ? {
                  size: parseFloat(a),
                }
              : null != n.red && null != n.green && null != n.blue
                ? (0, r.normalizeColor)(a)
                : void 0;
        },
        s = (e) => e.value,
        d = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(u).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let i = n(7087),
        a = s(n(7377)),
        r = s(n(2866)),
        o = s(n(2570)),
        l = s(n(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return {
            default: e,
          };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var i = {
            __proto__: null,
          },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
      let d = new Map([
        [
          i.ActionTypeConsts.PLUGIN_LOTTIE,
          {
            ...a,
          },
        ],
        [
          i.ActionTypeConsts.PLUGIN_SPLINE,
          {
            ...r,
          },
        ],
        [
          i.ActionTypeConsts.PLUGIN_RIVE,
          {
            ...o,
          },
        ],
        [
          i.ActionTypeConsts.PLUGIN_VARIABLE,
          {
            ...l,
          },
        ],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return m;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return y;
        },
        IX2_INSTANCE_REMOVED: function () {
          return T;
        },
        IX2_INSTANCE_STARTED: function () {
          return I;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return _;
        },
        IX2_PARAMETER_CHANGED: function () {
          return g;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return l;
        },
        IX2_STOP_REQUESTED: function () {
          return d;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return v;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return h;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, {
          enumerable: !0,
          get: n[i],
        });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        l = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        s = "IX2_PLAYBACK_REQUESTED",
        d = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        g = "IX2_PARAMETER_CHANGED",
        y = "IX2_INSTANCE_ADDED",
        I = "IX2_INSTANCE_STARTED",
        T = "IX2_INSTANCE_REMOVED",
        m = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        h = "IX2_VIEWPORT_WIDTH_CHANGED",
        _ = "IX2_MEDIA_QUERIES_DEFINED",
        v = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return W;
        },
        BACKGROUND: function () {
          return U;
        },
        BACKGROUND_COLOR: function () {
          return x;
        },
        BAR_DELIMITER: function () {
          return Q;
        },
        BORDER_COLOR: function () {
          return D;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return H;
        },
        COLON_DELIMITER: function () {
          return Y;
        },
        COLOR: function () {
          return V;
        },
        COMMA_DELIMITER: function () {
          return z;
        },
        CONFIG_UNIT: function () {
          return y;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return d;
        },
        CONFIG_Z_UNIT: function () {
          return g;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return B;
        },
        FILTER: function () {
          return M;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return F;
        },
        HEIGHT: function () {
          return k;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ei;
        },
        RENDER_PLUGIN: function () {
          return er;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return R;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return L;
        },
        SCALE_3D: function () {
          return A;
        },
        SCALE_X: function () {
          return _;
        },
        SCALE_Y: function () {
          return v;
        },
        SCALE_Z: function () {
          return O;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return w;
        },
        SKEW_X: function () {
          return N;
        },
        SKEW_Y: function () {
          return C;
        },
        TRANSFORM: function () {
          return I;
        },
        TRANSLATE_3D: function () {
          return h;
        },
        TRANSLATE_X: function () {
          return T;
        },
        TRANSLATE_Y: function () {
          return m;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return G;
        },
        WILL_CHANGE: function () {
          return j;
        },
        W_MOD_IX: function () {
          return l;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, {
          enumerable: !0,
          get: n[i],
        });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        l = "w-mod-ix",
        c = ".w-dyn-item",
        s = "xValue",
        d = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        g = "zUnit",
        y = "unit",
        I = "transform",
        T = "translateX",
        m = "translateY",
        b = "translateZ",
        h = "translate3d",
        _ = "scaleX",
        v = "scaleY",
        O = "scaleZ",
        A = "scale3d",
        R = "rotateX",
        S = "rotateY",
        L = "rotateZ",
        w = "skew",
        N = "skewX",
        C = "skewY",
        P = "opacity",
        M = "filter",
        F = "font-variation-settings",
        G = "width",
        k = "height",
        x = "backgroundColor",
        U = "background",
        D = "borderColor",
        V = "color",
        B = "display",
        X = "flex",
        j = "willChange",
        W = "AUTO",
        z = ",",
        Y = ":",
        Q = "|",
        H = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ei = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        er = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, {
          enumerable: !0,
          get: n[i],
        });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return l;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = s(n(1833), t),
        o = s(n(262), t);
      (s(n(8704), t), s(n(3213), t));
      let l = u(n(8023)),
        c = u(n(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return {
            default: e,
          };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = {
            __proto__: null,
          },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
    },
    3213: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: l,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: s,
        } = n(262).ActionTypeConsts,
        d = {
          [i]: !0,
          [a]: !0,
          [r]: !0,
          [o]: !0,
          [l]: !0,
          [c]: !0,
          [s]: !0,
        };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return l;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return d;
        },
        QuickEffectIds: function () {
          return s;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, {
          enumerable: !0,
          get: n[i],
        });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE",
        },
        o = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT",
        },
        l = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS",
        },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        s = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        d = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          a,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          l = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (l.startsWith("#")) {
          let e = l.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (l.startsWith("rgba")) {
          let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3])));
        } else if (l.startsWith("rgb")) {
          let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)));
        } else if (l.startsWith("hsla")) {
          let e,
            n,
            o,
            c = l.match(/hsla\(([^)]+)\)/)[1].split(","),
            s = parseFloat(c[0]),
            d = parseFloat(c[1].replace("%", "")) / 100,
            u = parseFloat(c[2].replace("%", "")) / 100;
          r = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * u - 1)) * d,
            p = f * (1 - Math.abs(((s / 60) % 2) - 1)),
            E = u - f / 2;
          (s >= 0 && s < 60
            ? ((e = f), (n = p), (o = 0))
            : s >= 60 && s < 120
              ? ((e = p), (n = f), (o = 0))
              : s >= 120 && s < 180
                ? ((e = 0), (n = f), (o = p))
                : s >= 180 && s < 240
                  ? ((e = 0), (n = p), (o = f))
                  : s >= 240 && s < 300
                    ? ((e = p), (n = 0), (o = f))
                    : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + E) * 255)),
            (i = Math.round((n + E) * 255)),
            (a = Math.round((o + E) * 255)));
        } else if (l.startsWith("hsl")) {
          let e,
            n,
            r,
            o = l.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(o[0]),
            s = parseFloat(o[1].replace("%", "")) / 100,
            d = parseFloat(o[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * d - 1)) * s,
            f = u * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = d - u / 2;
          (c >= 0 && c < 60
            ? ((e = u), (n = f), (r = 0))
            : c >= 60 && c < 120
              ? ((e = f), (n = u), (r = 0))
              : c >= 120 && c < 180
                ? ((e = 0), (n = u), (r = f))
                : c >= 180 && c < 240
                  ? ((e = 0), (n = f), (r = u))
                  : c >= 240 && c < 300
                    ? ((e = f), (n = 0), (r = u))
                    : ((e = u), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255)));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`,
          );
        return {
          red: t,
          green: i,
          blue: a,
          alpha: r,
        };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return l;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return d;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = f(n(2662)),
        o = f(n(8686)),
        l = f(n(3767)),
        c = f(n(5861)),
        s = f(n(1799)),
        d = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return {
            default: e,
          };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var i = {
            __proto__: null,
          },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i,
        a = {
          ELEMENT_MATCHES: function () {
            return s;
          },
          FLEX_PREFIXED: function () {
            return d;
          },
          IS_BROWSER_ENV: function () {
            return l;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, {
          enumerable: !0,
          get: a[r],
        });
      let o =
          (i = n(9777)) && i.__esModule
            ? i
            : {
                default: i,
              },
        l = "undefined" != typeof window,
        c = (e, t) => (l ? e() : t),
        s = c(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype,
          ),
        ),
        d = c(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i,
        a = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return d;
          },
          optimizeFloat: function () {
            return s;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, {
          enumerable: !0,
          get: a[r],
        });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return {
              default: e,
            };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var i = {
              __proto__: null,
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(8686)),
        l =
          (i = n(1361)) && i.__esModule
            ? i
            : {
                default: i,
              };
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function d(e) {
        return (0, l.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
            ? 1
            : n
              ? s(t > 0 ? n(t) : t)
              : s(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i,
        a = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return j;
          },
          ease: function () {
            return l;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return d;
          },
          easeOut: function () {
            return s;
          },
          inBack: function () {
            return M;
          },
          inCirc: function () {
            return w;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return k;
          },
          inExpo: function () {
            return R;
          },
          inOutBack: function () {
            return G;
          },
          inOutCirc: function () {
            return C;
          },
          inOutCubic: function () {
            return y;
          },
          inOutElastic: function () {
            return U;
          },
          inOutExpo: function () {
            return L;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return m;
          },
          inOutQuint: function () {
            return _;
          },
          inOutSine: function () {
            return A;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return I;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return v;
          },
          outBack: function () {
            return F;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return N;
          },
          outCubic: function () {
            return g;
          },
          outElastic: function () {
            return x;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return T;
          },
          outQuint: function () {
            return h;
          },
          outSine: function () {
            return O;
          },
          swingFrom: function () {
            return V;
          },
          swingFromTo: function () {
            return D;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, {
          enumerable: !0,
          get: a[r],
        });
      let o =
          (i = n(1361)) && i.__esModule
            ? i
            : {
                default: i,
              },
        l = (0, o.default)(0.25, 0.1, 0.25, 1),
        c = (0, o.default)(0.42, 0, 1, 1),
        s = (0, o.default)(0, 0, 0.58, 1),
        d = (0, o.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function g(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function I(e) {
        return Math.pow(e, 4);
      }
      function T(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function h(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function _(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function v(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function O(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function A(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function R(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function L(e) {
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function w(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function N(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function C(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function M(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function F(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              -(
                i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
                i < 1
                  ? ((i = 1), (t = n / 4))
                  : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                e < 1)
              ? -0.5 *
                (i *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n))
              : i *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n) *
                  0.5 +
                1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function V(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
              ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
              : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return d;
        },
        isPluginType: function () {
          return l;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = n(2662),
        o = n(3690);
      function l(e) {
        return o.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        s = c("getPluginConfig"),
        d = c("getPluginOrigin"),
        u = c("getPluginDuration"),
        f = c("getPluginDestination"),
        p = c("createPluginInstance"),
        E = c("renderPlugin"),
        g = c("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        cleanupHTMLElement: function () {
          return ez;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eh;
        },
        getDestinationValues: function () {
          return ew;
        },
        getElementId: function () {
          return eg;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eA;
        },
        getItemConfigByKey: function () {
          return eL;
        },
        getMaxDurationItemIndex: function () {
          return eH;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eN;
        },
        getStyleProp: function () {
          return eC;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eT;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return ey;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return d.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = g(n(4075)),
        o = g(n(1455)),
        l = g(n(5720)),
        c = n(1185),
        s = n(7087),
        d = g(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function g(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      let {
          BACKGROUND: y,
          TRANSFORM: I,
          TRANSLATE_3D: T,
          SCALE_3D: m,
          ROTATE_X: b,
          ROTATE_Y: h,
          ROTATE_Z: _,
          SKEW: v,
          PRESERVE_3D: O,
          FLEX: A,
          OPACITY: R,
          FILTER: S,
          FONT_VARIATION_SETTINGS: L,
          WIDTH: w,
          HEIGHT: N,
          BACKGROUND_COLOR: C,
          BORDER_COLOR: P,
          COLOR: M,
          CHILDREN: F,
          IMMEDIATE_CHILDREN: G,
          SIBLINGS: k,
          PARENT: x,
          DISPLAY: U,
          WILL_CHANGE: D,
          AUTO: V,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: X,
          BAR_DELIMITER: j,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: z,
          RENDER_STYLE: Y,
          RENDER_PLUGIN: Q,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: H,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ei,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: er,
          OBJECT_VALUE: eo,
        } = s.ActionTypeConsts,
        el = (e) => e.trim(),
        ec = Object.freeze({
          [en]: C,
          [ei]: P,
          [ea]: M,
        }),
        es = Object.freeze({
          [E.TRANSFORM_PREFIXED]: I,
          [C]: y,
          [R]: R,
          [S]: S,
          [w]: w,
          [N]: N,
          [L]: L,
        }),
        ed = new Map();
      function eu() {
        ed.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eg(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eE++;
      }
      function ey({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return (e[n] || (e[n] = {}), (e[n][t.id] = t), e);
            },
            {},
          ),
          a = n && n.mediaQueries,
          r = [];
        return (
          a
            ? (r = a.map((e) => e.key))
            : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: a,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let eI = (e, t) => e === t;
      function eT({ store: e, select: t, onChange: n, comparator: i = eI }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) return void o();
            i(r, l) || n((l = r), e);
          }),
          l = t(a());
        return o;
      }
      function em(e) {
        let t = typeof e;
        if ("string" === t)
          return {
            id: e,
          };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, l;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, r) =>
              e.concat(
                eb({
                  config: {
                    target: r,
                  },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                }),
              ),
            [],
          );
        let {
            getValidDocument: d,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: g,
            matchSelector: y,
            elementContains: I,
            isSiblingNode: T,
          } = a,
          { target: m } = e;
        if (!m) return [];
        let {
          id: b,
          objectId: h,
          selector: _,
          selectorGuids: v,
          appliesTo: O,
          useEventTarget: A,
        } = em(m);
        if (h) return [ed.has(h) ? ed.get(h) : ed.set(h, {}).get(h)];
        if (O === s.EventAppliesTo.PAGE) {
          let e = d(b);
          return e ? [e] : [];
        }
        let R = (t?.action?.config?.affectedElements ?? {})[b || _] || {},
          S = !!(R.id || R.selector),
          L = t && u(em(t.target));
        if (
          (S
            ? ((r = R.limitAffectedElements), (o = L), (l = u(R)))
            : (o = l =
                u({
                  id: b,
                  selector: _,
                  selectorGuids: v,
                })),
          t && A)
        ) {
          let e = n && (l || !0 === A) ? [n] : f(L);
          if (l) {
            if (A === x) return f(l).filter((t) => e.some((e) => I(t, e)));
            if (A === F) return f(l).filter((t) => e.some((e) => I(e, t)));
            if (A === k) return f(l).filter((t) => e.some((e) => T(e, t)));
          }
          return e;
        }
        return null == o || null == l
          ? []
          : E.IS_BROWSER_ENV && i
            ? f(l).filter((e) => i.contains(e))
            : r === F
              ? f(o, l)
              : r === G
                ? p(f(o)).filter(y(l))
                : r === k
                  ? g(f(o)).filter(y(l))
                  : f(l);
      }
      function eh({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ei:
          case ea:
          case er:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let e_ = /px/,
        ev = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eF[t.type]), e),
            e || {},
          ),
        eO = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eG[t.type] || t.defaultValue || 0),
              e
            ),
            e || {},
          );
      function eA(e, t = {}, n = {}, i, a) {
        let { getStyle: o } = a,
          { actionTypeId: l } = i;
        if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], i);
        switch (i.actionTypeId) {
          case H:
          case $:
          case q:
          case K:
            return t[i.actionTypeId] || eM[i.actionTypeId];
          case J:
            return ev(t[i.actionTypeId], i.config.filters);
          case ee:
            return eO(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return {
              value: (0, r.default)(parseFloat(o(e, R)), 1),
            };
          case et: {
            let t,
              a = o(e, w),
              l = o(e, N);
            return {
              widthValue:
                i.config.widthUnit === V
                  ? e_.test(a)
                    ? parseFloat(a)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === V
                  ? e_.test(l)
                    ? parseFloat(l)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(l), parseFloat(n.height)),
            };
          }
          case en:
          case ei:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let a = ec[t],
                o = i(e, a),
                l = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eD, eU.test(o) ? o : n[a]).split(B);
              return {
                rValue: (0, r.default)(parseInt(l[0], 10), 255),
                gValue: (0, r.default)(parseInt(l[1], 10), 255),
                bValue: (0, r.default)(parseInt(l[2], 10), 255),
                aValue: (0, r.default)(parseFloat(l[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case er:
            return {
              value: (0, r.default)(o(e, U), n.display),
            };
          case eo:
            return (
              t[i.actionTypeId] || {
                value: 0,
              }
            );
          default:
            return;
        }
      }
      let eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, l.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, l.default)(
                n.fontVariations,
                ({ type: e }) => e === t,
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function ew({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case H:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return {
              xValue: e,
              yValue: n,
              zValue: i,
            };
          }
          case et: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: l } = t.config,
              { widthValue: c, heightValue: s } = t.config;
            if (!E.IS_BROWSER_ENV)
              return {
                widthValue: c,
                heightValue: s,
              };
            if (o === V) {
              let t = i(e, w);
              (a(e, w, ""), (c = r(e, "offsetWidth")), a(e, w, t));
            }
            if (l === V) {
              let t = i(e, N);
              (a(e, N, ""), (s = r(e, "offsetHeight")), a(e, N, t));
            }
            return {
              widthValue: c,
              heightValue: s,
            };
          }
          case en:
          case ei:
          case ea: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: l,
            } = t.config;
            if (l && l.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, l),
                a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
            };
          }
          case J:
            return t.config.filters.reduce(eR, {});
          case ee:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return {
              value: e,
            };
          }
        }
      }
      function eN(e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
            ? Y
            : /^GENERAL_/.test(e)
              ? z
              : /^PLUGIN_/.test(e)
                ? Q
                : void 0;
      }
      function eC(e, t) {
        return e === Y ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, i, a, r, l, c, s) {
        switch (c) {
          case W:
            var d = e,
              u = t,
              f = n,
              g = a,
              y = l;
            let I = ex
                .map((e) => {
                  let t = eM[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: a = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: l = "",
                    } = u[e] || {};
                  switch (e) {
                    case H:
                      return `${T}(${n}${r}, ${i}${o}, ${a}${l})`;
                    case $:
                      return `${m}(${n}${r}, ${i}${o}, ${a}${l})`;
                    case q:
                      return `${b}(${n}${r}) ${h}(${i}${o}) ${_}(${a}${l})`;
                    case K:
                      return `${v}(${n}${r}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: R } = y;
            (eV(d, E.TRANSFORM_PREFIXED, y),
              R(d, E.TRANSFORM_PREFIXED, I),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i },
              ) {
                return (
                  (e === H && void 0 !== i) ||
                  (e === $ && void 0 !== i) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(g, f) && R(d, E.TRANSFORM_STYLE_PREFIXED, O));
            return;
          case Y:
            return (function (e, t, n, i, a, r) {
              let { setStyle: l } = r;
              switch (i.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: o, heightValue: c } = n;
                  (void 0 !== o &&
                    (t === V && (t = "px"), eV(e, w, r), l(e, w, o + t)),
                    void 0 !== c &&
                      (a === V && (a = "px"), eV(e, N, r), l(e, N, c + a)));
                  break;
                }
                case J:
                  var c = i.config;
                  let s = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ek(n, c)})`,
                      "",
                    ),
                    { setStyle: d } = r;
                  (eV(e, S, r), d(e, S, s));
                  break;
                case ee:
                  i.config;
                  let u = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      [],
                    ).join(", "),
                    { setStyle: f } = r;
                  (eV(e, L, r), f(e, L, u));
                  break;
                case en:
                case ei:
                case ea: {
                  let t = ec[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    s = n.aValue;
                  (eV(e, t, r),
                    l(
                      e,
                      t,
                      s >= 1
                        ? `rgb(${a},${o},${c})`
                        : `rgba(${a},${o},${c},${s})`,
                    ));
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  (eV(e, a, r), l(e, a, n.value + t));
                }
              }
            })(e, 0, n, a, r, l);
          case z:
            var C = e,
              P = a,
              M = l;
            let { setStyle: F } = M;
            if (P.actionTypeId === er) {
              let { value: e } = P.config;
              F(C, U, e === A && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case Q: {
            let { actionTypeId: e } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(s, t, a);
          }
        }
      }
      let eM = {
          [H]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0,
          }),
          [$]: Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1,
          }),
          [q]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0,
          }),
          [K]: Object.freeze({
            xValue: 0,
            yValue: 0,
          }),
        },
        eF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eG = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0,
        }),
        ek = (e, t) => {
          let n = (0, l.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ex = Object.keys(eM),
        eU = /^rgb/,
        eD = RegExp("rgba?\\(([^)]+)\\)");
      function eV(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, D);
        if (!o) return void r(e, D, i);
        let l = o.split(B).map(el);
        -1 === l.indexOf(i) && r(e, D, l.concat(i).join(B));
      }
      function eB(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, D);
        o &&
          -1 !== o.indexOf(i) &&
          r(
            e,
            D,
            o
              .split(B)
              .map(el)
              .filter((e) => e !== i)
              .join(B),
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        (Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            l = a[o];
          l &&
            ej({
              actionList: l,
              event: n,
              elementApi: t,
            });
        }),
          Object.keys(a).forEach((e) => {
            ej({
              actionList: a[e],
              elementApi: t,
            });
          }));
      }
      function ej({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        (i &&
          i.forEach((e) => {
            eW({
              actionGroup: e,
              event: t,
              elementApi: n,
            });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                eW({
                  actionGroup: e,
                  event: t,
                  elementApi: n,
                });
              });
            }));
      }
      function eW({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: a, config: r } = e;
          ((i = (0, p.isPluginType)(a)
            ? (t) => (0, p.clearPlugin)(a)(t, e)
            : eY({
                effect: eQ,
                actionTypeId: a,
                elementApi: n,
              })),
            eb({
              config: r,
              event: t,
              elementApi: n,
            }).forEach(i));
        });
      }
      function ez(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === et) {
          let { config: n } = t;
          (n.widthUnit === V && i(e, w, ""), n.heightUnit === V && i(e, N, ""));
        }
        a(e, D) &&
          eY({
            effect: eB,
            actionTypeId: r,
            elementApi: n,
          })(e);
      }
      let eY =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case H:
            case $:
            case q:
            case K:
              e(i, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(i, S, n);
              break;
            case ee:
              e(i, L, n);
              break;
            case Z:
              e(i, R, n);
              break;
            case et:
              (e(i, w, n), e(i, N, n));
              break;
            case en:
            case ei:
            case ea:
              e(i, ec[t], n);
              break;
            case er:
              e(i, U, n);
          }
        };
      function eQ(e, t, n) {
        let { setStyle: i } = n;
        (eB(e, t, n),
          i(e, t, ""),
          t === E.TRANSFORM_PREFIXED && i(e, E.TRANSFORM_STYLE_PREFIXED, ""));
      }
      function eH(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          l = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              c = n[eH(n)],
              { config: s, actionTypeId: d } = c;
            a.id === c.id && (l = o + r);
            let u = eN(d) === z ? 0 : s.duration;
            o += s.delay + u;
          }),
          o > 0 ? (0, u.optimizeFloat)(l / o) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          o = (e) => (
            r.push(
              (0, c.mergeIn)(e, ["config"], {
                delay: 0,
                duration: 0,
              }),
            ),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, c.setIn)(n, ["actionLists"], {
            [e.id]: {
              id: e.id,
              actionItemGroups: [
                {
                  actionItems: r,
                },
              ],
            },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, d.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + j + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + j + n + j + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      (Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        createElementState: function () {
          return v;
        },
        ixElements: function () {
          return _;
        },
        mergeActionState: function () {
          return O;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, {
          enumerable: !0,
          get: i[a],
        });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: l,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: s,
          CONFIG_X_VALUE: d,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: g,
          CONFIG_Z_UNIT: y,
          CONFIG_UNIT: I,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: T,
          IX2_INSTANCE_ADDED: m,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = o.IX2EngineActionTypes,
        h = {},
        _ = (e = h, t = {}) => {
          switch (t.type) {
            case T:
              return h;
            case m: {
              let {
                  elementId: n,
                  element: i,
                  origin: a,
                  actionItem: o,
                  refType: l,
                } = t.payload,
                { actionTypeId: c } = o,
                s = e;
              return (
                (0, r.getIn)(s, [n, i]) !== i && (s = v(s, i, l, n, o)),
                O(s, n, c, a, o)
              );
            }
            case b: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return O(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function v(e, t, n, i, a) {
        let o =
          n === c ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], {
          id: i,
          ref: t,
          refId: o,
          refType: n,
        });
      }
      function O(e, t, n, i, a) {
        let o = (function (e) {
          let { config: t } = e;
          return A.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return (null != r && null != o && (e[a] = o), e);
          }, {});
        })(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o);
      }
      let A = [
        [d, E],
        [u, g],
        [f, y],
        [p, I],
      ];
    },
    5961: function () {
      Webflow.require("ix2").init({
        events: {
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "bdf6737d-4fac-3b26-c13c-504a8a02f81f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bdf6737d-4fac-3b26-c13c-504a8a02f81f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b2c44234,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-5",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "bdf6737d-4fac-3b26-c13c-504a8a02f81f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bdf6737d-4fac-3b26-c13c-504a8a02f81f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b2c44234,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bdf6737d-4fac-3b26-c13c-504a8a02f81f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bdf6737d-4fac-3b26-c13c-504a8a02f81f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b40a3a3a,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bdf6737d-4fac-3b26-c13c-504a8a02f81f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bdf6737d-4fac-3b26-c13c-504a8a02f81f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b40a3a3a,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".www-drop-item",
              originalId:
                "6688f740521439b62af9de46|ae3dcde4-9114-4648-72c0-dbb33cb58a31",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".www-drop-item",
                originalId:
                  "6688f740521439b62af9de46|ae3dcde4-9114-4648-72c0-dbb33cb58a31",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b4537437,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-15",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".www-drop-item",
              originalId:
                "6688f740521439b62af9de46|ae3dcde4-9114-4648-72c0-dbb33cb58a31",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".www-drop-item",
                originalId:
                  "6688f740521439b62af9de46|ae3dcde4-9114-4648-72c0-dbb33cb58a31",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b4537438,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-36",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".www_item",
              originalId:
                "6688f740521439b62af9de46|fb09440e-a0f1-7de8-8464-ae3bcc12c7f2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".www_item",
                originalId:
                  "6688f740521439b62af9de46|fb09440e-a0f1-7de8-8464-ae3bcc12c7f2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x190cb962497,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-74",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "669ddc90546c370f1ae9500b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "669ddc90546c370f1ae9500b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190d8a5983d,
          },
          "e-91": {
            id: "e-91",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-92",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "669ddc90546c370f1ae9500b|cd4253fc-a674-e1ff-c4ae-b838a106a6aa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "669ddc90546c370f1ae9500b|cd4253fc-a674-e1ff-c4ae-b838a106a6aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x190d8a5983d,
          },
          "e-95": {
            id: "e-95",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-96",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "669ddc90546c370f1ae9500b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "669ddc90546c370f1ae9500b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190d8a5983d,
          },
          "e-97": {
            id: "e-97",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-98",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "669ddc90546c370f1ae9500b|b1c58d94-775a-a25a-4771-a6a793b33cd7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "669ddc90546c370f1ae9500b|b1c58d94-775a-a25a-4771-a6a793b33cd7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x190d8d71d18,
          },
          "e-99": {
            id: "e-99",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-100",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "669ded4426c7afc7c054eed2",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "669ded4426c7afc7c054eed2",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190d8e6d654,
          },
          "e-105": {
            id: "e-105",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-106",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "669ded4426c7afc7c054eed2",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "669ded4426c7afc7c054eed2",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190d8e6d654,
          },
          "e-107": {
            id: "e-107",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-108",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "669f73e9fba66cd44f107324",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "669f73e9fba66cd44f107324",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190dedcce32,
          },
          "e-109": {
            id: "e-109",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-110",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "669f73e9fba66cd44f107324",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "669f73e9fba66cd44f107324",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190dedcce32,
          },
          "e-115": {
            id: "e-115",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-116",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".contact_trigger",
              originalId:
                "6688f740521439b62af9de46|d7ce0cb9-9f8a-2439-ca47-80f011b8e85e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".contact_trigger",
                originalId:
                  "6688f740521439b62af9de46|d7ce0cb9-9f8a-2439-ca47-80f011b8e85e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190e3d69cc0,
          },
          "e-117": {
            id: "e-117",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-118",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "79bbb949-c1b8-1ad1-1b70-d78c7c70cf31",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "79bbb949-c1b8-1ad1-1b70-d78c7c70cf31",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190e3da44a6,
          },
          "e-119": {
            id: "e-119",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-120",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".ser_drop-down",
              originalId:
                "669ddc90546c370f1ae9500b|76f435d1-77e6-8168-0f70-fb81f98930a5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ser_drop-down",
                originalId:
                  "669ddc90546c370f1ae9500b|76f435d1-77e6-8168-0f70-fb81f98930a5",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191005b0693,
          },
          "e-120": {
            id: "e-120",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-119",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".ser_drop-down",
              originalId:
                "669ddc90546c370f1ae9500b|76f435d1-77e6-8168-0f70-fb81f98930a5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ser_drop-down",
                originalId:
                  "669ddc90546c370f1ae9500b|76f435d1-77e6-8168-0f70-fb81f98930a5",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191005b0694,
          },
          "e-121": {
            id: "e-121",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-122",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "66a83c5f54af096728a1095a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-123": {
            id: "e-123",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-124",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|fb09440e-a0f1-7de8-8464-ae3bcc12c7f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|fb09440e-a0f1-7de8-8464-ae3bcc12c7f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-124": {
            id: "e-124",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-123",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|fb09440e-a0f1-7de8-8464-ae3bcc12c7f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|fb09440e-a0f1-7de8-8464-ae3bcc12c7f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-125": {
            id: "e-125",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-126",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|92d6b0fb-9032-fec9-7db1-190a398f9ac9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|92d6b0fb-9032-fec9-7db1-190a398f9ac9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-126": {
            id: "e-126",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-125",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|92d6b0fb-9032-fec9-7db1-190a398f9ac9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|92d6b0fb-9032-fec9-7db1-190a398f9ac9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-129": {
            id: "e-129",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-130",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|be7b93de-b990-22b8-5879-844ffd6b4188",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|be7b93de-b990-22b8-5879-844ffd6b4188",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-130": {
            id: "e-130",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-129",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|be7b93de-b990-22b8-5879-844ffd6b4188",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|be7b93de-b990-22b8-5879-844ffd6b4188",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-131": {
            id: "e-131",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-132",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|c9394561-d269-93f5-af64-f6fff6cfeb33",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|c9394561-d269-93f5-af64-f6fff6cfeb33",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-132": {
            id: "e-132",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-131",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|c9394561-d269-93f5-af64-f6fff6cfeb33",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|c9394561-d269-93f5-af64-f6fff6cfeb33",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-133": {
            id: "e-133",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-134",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|26df0c47-e151-ea91-c538-3e662db1c47d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|26df0c47-e151-ea91-c538-3e662db1c47d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-134": {
            id: "e-134",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-133",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|26df0c47-e151-ea91-c538-3e662db1c47d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|26df0c47-e151-ea91-c538-3e662db1c47d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-135": {
            id: "e-135",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-136",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|57067f0f-5393-d6d7-fee4-a7480b0cbd81",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|57067f0f-5393-d6d7-fee4-a7480b0cbd81",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-136": {
            id: "e-136",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-135",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|57067f0f-5393-d6d7-fee4-a7480b0cbd81",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|57067f0f-5393-d6d7-fee4-a7480b0cbd81",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-139": {
            id: "e-139",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-140",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|cd4253fc-a674-e1ff-c4ae-b838a106a6aa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|cd4253fc-a674-e1ff-c4ae-b838a106a6aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191012bd846,
          },
          "e-143": {
            id: "e-143",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-144",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "66a83c5f54af096728a1095a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191012bd846,
          },
          "e-145": {
            id: "e-145",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-146",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".tesw_item",
              originalId:
                "66a83c5f54af096728a1095a|7687a590-54eb-58f8-ebe3-10e293a71de7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".tesw_item",
                originalId:
                  "66a83c5f54af096728a1095a|7687a590-54eb-58f8-ebe3-10e293a71de7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19107eecc6f,
          },
          "e-147": {
            id: "e-147",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-148",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pph_item",
              originalId:
                "66a83c5f54af096728a1095a|4d10c4b2-b7d1-b17a-517c-ee24fe786e3c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pph_item",
                originalId:
                  "66a83c5f54af096728a1095a|4d10c4b2-b7d1-b17a-517c-ee24fe786e3c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1911c076f93,
          },
          "e-149": {
            id: "e-149",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-150",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1911c0901f2,
          },
          "e-151": {
            id: "e-151",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-152",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "66c43cec6f925dfaf35ddf77",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66c43cec6f925dfaf35ddf77",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1916e8dff0b,
          },
          "e-171": {
            id: "e-171",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-172",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "66c43cec6f925dfaf35ddf77",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66c43cec6f925dfaf35ddf77",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1916e8dff0b,
          },
          "e-173": {
            id: "e-173",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-174",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66c43cec6f925dfaf35ddf77",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66c43cec6f925dfaf35ddf77",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1916e8dff0b,
          },
          "e-175": {
            id: "e-175",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-176",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|046a5d9c-17b2-6db1-a7c7-90ef66ca774a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|046a5d9c-17b2-6db1-a7c7-90ef66ca774a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19175edf3c5,
          },
          "e-177": {
            id: "e-177",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-178",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66a83c5f54af096728a1095a|a3a1f354-6a5c-7446-aa3d-e1bf3baca6b2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66a83c5f54af096728a1095a|a3a1f354-6a5c-7446-aa3d-e1bf3baca6b2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19175ee5daa,
          },
          "e-179": {
            id: "e-179",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-180",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-181": {
            id: "e-181",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-182",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|fb09440e-a0f1-7de8-8464-ae3bcc12c7f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|fb09440e-a0f1-7de8-8464-ae3bcc12c7f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-182": {
            id: "e-182",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-181",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|fb09440e-a0f1-7de8-8464-ae3bcc12c7f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|fb09440e-a0f1-7de8-8464-ae3bcc12c7f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-183": {
            id: "e-183",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-184",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|92d6b0fb-9032-fec9-7db1-190a398f9ac9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|92d6b0fb-9032-fec9-7db1-190a398f9ac9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-184": {
            id: "e-184",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-183",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|92d6b0fb-9032-fec9-7db1-190a398f9ac9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|92d6b0fb-9032-fec9-7db1-190a398f9ac9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-185": {
            id: "e-185",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-186",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|f4500a5b-e9f6-af3b-3b42-c8ba26b37d7c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|f4500a5b-e9f6-af3b-3b42-c8ba26b37d7c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-186": {
            id: "e-186",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-185",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|f4500a5b-e9f6-af3b-3b42-c8ba26b37d7c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|f4500a5b-e9f6-af3b-3b42-c8ba26b37d7c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-187": {
            id: "e-187",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-188",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|be7b93de-b990-22b8-5879-844ffd6b4188",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|be7b93de-b990-22b8-5879-844ffd6b4188",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-188": {
            id: "e-188",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-187",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|be7b93de-b990-22b8-5879-844ffd6b4188",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|be7b93de-b990-22b8-5879-844ffd6b4188",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-189": {
            id: "e-189",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-190",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|c9394561-d269-93f5-af64-f6fff6cfeb33",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|c9394561-d269-93f5-af64-f6fff6cfeb33",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-190": {
            id: "e-190",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-189",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|c9394561-d269-93f5-af64-f6fff6cfeb33",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|c9394561-d269-93f5-af64-f6fff6cfeb33",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-191": {
            id: "e-191",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-192",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|26df0c47-e151-ea91-c538-3e662db1c47d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|26df0c47-e151-ea91-c538-3e662db1c47d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-192": {
            id: "e-192",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-191",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|26df0c47-e151-ea91-c538-3e662db1c47d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|26df0c47-e151-ea91-c538-3e662db1c47d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-193": {
            id: "e-193",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-194",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|57067f0f-5393-d6d7-fee4-a7480b0cbd81",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|57067f0f-5393-d6d7-fee4-a7480b0cbd81",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-194": {
            id: "e-194",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-193",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|57067f0f-5393-d6d7-fee4-a7480b0cbd81",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|57067f0f-5393-d6d7-fee4-a7480b0cbd81",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-195": {
            id: "e-195",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-196",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d28d0f05-ad55-ecd2-1200-098c972891bf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d28d0f05-ad55-ecd2-1200-098c972891bf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191a754c23a,
          },
          "e-197": {
            id: "e-197",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-198",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|cd4253fc-a674-e1ff-c4ae-b838a106a6aa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|cd4253fc-a674-e1ff-c4ae-b838a106a6aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191a754c23a,
          },
          "e-199": {
            id: "e-199",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-200",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5|e7ae0e9f-2a41-a8e9-977f-7895507c49eb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5|e7ae0e9f-2a41-a8e9-977f-7895507c49eb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191a754c23a,
          },
          "e-201": {
            id: "e-201",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-202",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "66d2c5d22c52082d37cbc9b5",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66d2c5d22c52082d37cbc9b5",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191a754c23a,
          },
          "e-203": {
            id: "e-203",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-204",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".abo_content",
              originalId:
                "669ded4426c7afc7c054eed2|50407287-5599-ef25-58ed-5c94a0a63856",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".abo_content",
                originalId:
                  "669ded4426c7afc7c054eed2|50407287-5599-ef25-58ed-5c94a0a63856",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191d886359d,
          },
          "e-205": {
            id: "e-205",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-206",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "66e38c312d0cdb17b885245e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66e38c312d0cdb17b885245e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191e8dba700,
          },
          "e-207": {
            id: "e-207",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-208",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "66e38c312d0cdb17b885245e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66e38c312d0cdb17b885245e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191e8dba700,
          },
          "e-209": {
            id: "e-209",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-210",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66e38c312d0cdb17b885245e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66e38c312d0cdb17b885245e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191e8dba700,
          },
          "e-211": {
            id: "e-211",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-212",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "67367ceaa0f81b1ff72533e9",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67367ceaa0f81b1ff72533e9",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1932cd7f460,
          },
          "e-213": {
            id: "e-213",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-214",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "67367ceaa0f81b1ff72533e9",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67367ceaa0f81b1ff72533e9",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1932cd7f460,
          },
          "e-215": {
            id: "e-215",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-216",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67367ceaa0f81b1ff72533e9",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67367ceaa0f81b1ff72533e9",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1932cd7f460,
          },
          "e-217": {
            id: "e-217",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-218",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "6746420a7b8d346ba45a61ee",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6746420a7b8d346ba45a61ee",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1936a71f8ff,
          },
          "e-219": {
            id: "e-219",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-220",
              },
            },
            mediaQueries: ["tiny"],
            target: {
              id: "6746420a7b8d346ba45a61ee",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6746420a7b8d346ba45a61ee",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1936a71f8ff,
          },
          "e-221": {
            id: "e-221",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-222",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6746420a7b8d346ba45a61ee",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6746420a7b8d346ba45a61ee",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1936a71f8ff,
          },
          "e-225": {
            id: "e-225",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-226",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6863833dedd6d75c158bdafc|6e7382cf-e82b-5a99-f6a7-e555d0b4dbb6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6863833dedd6d75c158bdafc|6e7382cf-e82b-5a99-f6a7-e555d0b4dbb6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ca222a9a,
          },
        },
        actionLists: {
          "a-4": {
            id: "a-4",
            title: "Menu Open - Mobile",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm_block.is_1",
                        selectorGuids: [
                          "4cd043ed-8fc7-f45f-fecd-e0c7c1457582",
                          "92722556-125b-632b-7622-f3942405fc4d",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-4-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_icon",
                        selectorGuids: ["30bff3b2-131c-29e0-1228-e81354929b5d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-4-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm",
                        selectorGuids: ["ec3d3283-9913-2f4a-6a14-3d97c1270ef5"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-4-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm_block.is_2",
                        selectorGuids: [
                          "4cd043ed-8fc7-f45f-fecd-e0c7c1457582",
                          "2b96a4a7-af9a-6553-764b-9288a0374490",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-4-n-9",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm",
                        selectorGuids: ["ec3d3283-9913-2f4a-6a14-3d97c1270ef5"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-4-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm",
                        selectorGuids: ["ec3d3283-9913-2f4a-6a14-3d97c1270ef5"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-4-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_icon",
                        selectorGuids: ["30bff3b2-131c-29e0-1228-e81354929b5d"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-4-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm_block.is_1",
                        selectorGuids: [
                          "4cd043ed-8fc7-f45f-fecd-e0c7c1457582",
                          "92722556-125b-632b-7622-f3942405fc4d",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-4-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm_block.is_2",
                        selectorGuids: [
                          "4cd043ed-8fc7-f45f-fecd-e0c7c1457582",
                          "2b96a4a7-af9a-6553-764b-9288a0374490",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190b2bdf121,
          },
          "a-5": {
            id: "a-5",
            title: "Menu Close - Mobile",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm_block.is_1",
                        selectorGuids: [
                          "4cd043ed-8fc7-f45f-fecd-e0c7c1457582",
                          "92722556-125b-632b-7622-f3942405fc4d",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm_block.is_2",
                        selectorGuids: [
                          "4cd043ed-8fc7-f45f-fecd-e0c7c1457582",
                          "2b96a4a7-af9a-6553-764b-9288a0374490",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_icon",
                        selectorGuids: ["30bff3b2-131c-29e0-1228-e81354929b5d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 200,
                      easing: "inOutQuint",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm",
                        selectorGuids: ["ec3d3283-9913-2f4a-6a14-3d97c1270ef5"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-mm",
                        selectorGuids: ["ec3d3283-9913-2f4a-6a14-3d97c1270ef5"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190b2bdf121,
          },
          "a-2": {
            id: "a-2",
            title: "Menu Desktop Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_1",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "5465d57b-e519-7efd-b007-8603018d7f6e",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-27",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_menu-wrap",
                        selectorGuids: ["cd6b18de-6311-9af7-0305-7e982716ae60"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-2-n-25",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_icon",
                        selectorGuids: ["30bff3b2-131c-29e0-1228-e81354929b5d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_2",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "7ed9ac8d-5ee2-3025-3dd6-1c3c2474d654",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_3",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "46d720db-8069-aaeb-1b6c-6bfff3103ce1",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_4",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "2d389b2c-cb80-79fa-94dc-d7e8340759bc",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_5",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "a6f7a2ba-0880-b626-48db-a41fb6dc6aaa",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_6",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "48af352d-81eb-4549-6190-40de2b73113c",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_1",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "5465d57b-e519-7efd-b007-8603018d7f6e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-24",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_5",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "a6f7a2ba-0880-b626-48db-a41fb6dc6aaa",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_6",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "48af352d-81eb-4549-6190-40de2b73113c",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-22",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_4",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "2d389b2c-cb80-79fa-94dc-d7e8340759bc",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_3",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "46d720db-8069-aaeb-1b6c-6bfff3103ce1",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_2",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "7ed9ac8d-5ee2-3025-3dd6-1c3c2474d654",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-28",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_menu-wrap",
                        selectorGuids: ["cd6b18de-6311-9af7-0305-7e982716ae60"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_1",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "5465d57b-e519-7efd-b007-8603018d7f6e",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_1",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "5465d57b-e519-7efd-b007-8603018d7f6e",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-26",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_icon",
                        selectorGuids: ["30bff3b2-131c-29e0-1228-e81354929b5d"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_2",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "7ed9ac8d-5ee2-3025-3dd6-1c3c2474d654",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_2",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "7ed9ac8d-5ee2-3025-3dd6-1c3c2474d654",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_3",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "46d720db-8069-aaeb-1b6c-6bfff3103ce1",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_3",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "46d720db-8069-aaeb-1b6c-6bfff3103ce1",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_4",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "2d389b2c-cb80-79fa-94dc-d7e8340759bc",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_4",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "2d389b2c-cb80-79fa-94dc-d7e8340759bc",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_5",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "a6f7a2ba-0880-b626-48db-a41fb6dc6aaa",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_5",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "a6f7a2ba-0880-b626-48db-a41fb6dc6aaa",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_6",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "48af352d-81eb-4549-6190-40de2b73113c",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_6",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "48af352d-81eb-4549-6190-40de2b73113c",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a8aee24a,
          },
          "a-3": {
            id: "a-3",
            title: "Menu Desktop - Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_2",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "7ed9ac8d-5ee2-3025-3dd6-1c3c2474d654",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-3-n-26",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 200,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_6",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "48af352d-81eb-4549-6190-40de2b73113c",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 200,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_1",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "5465d57b-e519-7efd-b007-8603018d7f6e",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_icon",
                        selectorGuids: ["30bff3b2-131c-29e0-1228-e81354929b5d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-3-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 200,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_2",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "7ed9ac8d-5ee2-3025-3dd6-1c3c2474d654",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 200,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_3",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "46d720db-8069-aaeb-1b6c-6bfff3103ce1",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 200,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_4",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "2d389b2c-cb80-79fa-94dc-d7e8340759bc",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 200,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_5",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "a6f7a2ba-0880-b626-48db-a41fb6dc6aaa",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "",
                      duration: 300,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_6",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "48af352d-81eb-4549-6190-40de2b73113c",
                        ],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-3-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_1",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "5465d57b-e519-7efd-b007-8603018d7f6e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-3-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_5",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "a6f7a2ba-0880-b626-48db-a41fb6dc6aaa",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-3-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_6",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "48af352d-81eb-4549-6190-40de2b73113c",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-3-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_4",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "2d389b2c-cb80-79fa-94dc-d7e8340759bc",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-3-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".nav_link.is_plus-menu.is_3",
                        selectorGuids: [
                          "ee1f87cd-2d31-03a4-869d-f54947b276e7",
                          "2aa36046-db4d-57d1-1e09-0e98886c08fd",
                          "46d720db-8069-aaeb-1b6c-6bfff3103ce1",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-27",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus_menu-wrap",
                        selectorGuids: ["cd6b18de-6311-9af7-0305-7e982716ae60"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190a8aee24a,
          },
          "a-8": {
            id: "a-8",
            title: "www Inner Dropdown - Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".www_drop-content.is_open",
                        selectorGuids: [
                          "e2369f9a-588f-33b7-afef-7818380a2afc",
                          "027ba65f-1514-1fd9-51f9-69e087d47ca8",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".www_drop-content.is_open",
                        selectorGuids: [
                          "e2369f9a-588f-33b7-afef-7818380a2afc",
                          "027ba65f-1514-1fd9-51f9-69e087d47ca8",
                        ],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190b449eabe,
          },
          "a-9": {
            id: "a-9",
            title: "www Inner Dropdown - Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".www_drop-content.is_open",
                        selectorGuids: [
                          "e2369f9a-588f-33b7-afef-7818380a2afc",
                          "027ba65f-1514-1fd9-51f9-69e087d47ca8",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190b449eabe,
          },
          a: {
            id: "a",
            title: "Logo Carousel",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nap_logos-carousel-item",
                        selectorGuids: ["6558332c-3b6a-314c-d91a-de2eb076ed5e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 6e4,
                      target: {
                        selector: ".nap_logos-carousel-item",
                        selectorGuids: ["6558332c-3b6a-314c-d91a-de2eb076ed5e"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nap_logos-carousel-item",
                        selectorGuids: ["6558332c-3b6a-314c-d91a-de2eb076ed5e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a60a067e,
          },
          "a-16": {
            id: "a-16",
            title: "Logo Carousel - Mobile",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nap_logos-carousel-item",
                        selectorGuids: ["6558332c-3b6a-314c-d91a-de2eb076ed5e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-16-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 52e3,
                      target: {
                        selector: ".nap_logos-carousel-item",
                        selectorGuids: ["6558332c-3b6a-314c-d91a-de2eb076ed5e"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-16-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nap_logos-carousel-item",
                        selectorGuids: ["6558332c-3b6a-314c-d91a-de2eb076ed5e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a60a067e,
          },
          "a-17": {
            id: "a-17",
            title: "Open Contact Form",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".form",
                        selectorGuids: ["c422a80f-0cec-9127-4823-e81fb3507512"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-17-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".form",
                        selectorGuids: ["c422a80f-0cec-9127-4823-e81fb3507512"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-17-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".form_card",
                        selectorGuids: ["b1d18a39-f1e6-645a-b400-c44dcd3ff91a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-17-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".form_card",
                        selectorGuids: ["b1d18a39-f1e6-645a-b400-c44dcd3ff91a"],
                      },
                      yValue: 4,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".form",
                        selectorGuids: ["c422a80f-0cec-9127-4823-e81fb3507512"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".form",
                        selectorGuids: ["c422a80f-0cec-9127-4823-e81fb3507512"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 350,
                      target: {
                        selector: ".form_card",
                        selectorGuids: ["b1d18a39-f1e6-645a-b400-c44dcd3ff91a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-17-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 350,
                      target: {
                        selector: ".form_card",
                        selectorGuids: ["b1d18a39-f1e6-645a-b400-c44dcd3ff91a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190e3d6aa5e,
          },
          "a-18": {
            id: "a-18",
            title: "Close Contact Form",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 370,
                      target: {
                        selector: ".form",
                        selectorGuids: ["c422a80f-0cec-9127-4823-e81fb3507512"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".form",
                        selectorGuids: ["c422a80f-0cec-9127-4823-e81fb3507512"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 350,
                      target: {
                        selector: ".form_card",
                        selectorGuids: ["b1d18a39-f1e6-645a-b400-c44dcd3ff91a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 350,
                      target: {
                        selector: ".form_card",
                        selectorGuids: ["b1d18a39-f1e6-645a-b400-c44dcd3ff91a"],
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190e3d6aa5e,
          },
          "a-19": {
            id: "a-19",
            title: "Services Dropdown",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ser_dd-answer",
                        selectorGuids: ["e7c69e2e-b849-692d-ed15-1a47117b6f45"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-19-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ser_plus",
                        selectorGuids: ["3603931c-00ed-6de6-da0d-25f11c7bf2d3"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ser_dd-answer",
                        selectorGuids: ["e7c69e2e-b849-692d-ed15-1a47117b6f45"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-19-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ser_plus",
                        selectorGuids: ["3603931c-00ed-6de6-da0d-25f11c7bf2d3"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x191005b537e,
          },
          "a-20": {
            id: "a-20",
            title: "Services Dropdown - Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ser_dd-answer",
                        selectorGuids: ["e7c69e2e-b849-692d-ed15-1a47117b6f45"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-20-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ser_plus",
                        selectorGuids: ["3603931c-00ed-6de6-da0d-25f11c7bf2d3"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191005b537e,
          },
          "a-6": {
            id: "a-6",
            title: "Ways we work - Dropdown Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".www_content",
                        selectorGuids: ["7da3b3eb-4528-501d-5a5f-72e983cbecea"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".www_button-icon",
                        selectorGuids: ["6440b043-ffa2-1ced-d854-024546dbc467"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".www_content",
                        selectorGuids: ["7da3b3eb-4528-501d-5a5f-72e983cbecea"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".www_button-icon",
                        selectorGuids: ["6440b043-ffa2-1ced-d854-024546dbc467"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190b4169229,
          },
          "a-10": {
            id: "a-10",
            title: "Ways we work - Dropdown Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".www_content",
                        selectorGuids: ["7da3b3eb-4528-501d-5a5f-72e983cbecea"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-10-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".www_button-icon",
                        selectorGuids: ["6440b043-ffa2-1ced-d854-024546dbc467"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190b4169229,
          },
          "a-11": {
            id: "a-11",
            title: "FAQ - Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq_answer",
                        selectorGuids: ["3371a862-575a-a4f8-bfdf-a79ee0c10ab5"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-11-n-6",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie_plus-sign",
                        selectorGuids: ["e4d3092e-6a5b-0c28-cf3d-cff4677909cd"],
                      },
                      value: 0,
                    },
                  },
                  {
                    id: "a-11-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie_plus-sign",
                        selectorGuids: ["e4d3092e-6a5b-0c28-cf3d-cff4677909cd"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq_answer",
                        selectorGuids: ["3371a862-575a-a4f8-bfdf-a79ee0c10ab5"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-11-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie_plus-sign",
                        selectorGuids: ["e4d3092e-6a5b-0c28-cf3d-cff4677909cd"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190b46f2307,
          },
          "a-12": {
            id: "a-12",
            title: "FAQ - Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq_answer",
                        selectorGuids: ["3371a862-575a-a4f8-bfdf-a79ee0c10ab5"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lottie_plus-sign",
                        selectorGuids: ["e4d3092e-6a5b-0c28-cf3d-cff4677909cd"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190b46f2307,
          },
          "a-21": {
            id: "a-21",
            title: "Product Carousel",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".pph_carousel-item",
                        selectorGuids: ["238fcb76-eb61-d46b-baa4-1b963bbf1103"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e4,
                      target: {
                        selector: ".pph_carousel-item",
                        selectorGuids: ["238fcb76-eb61-d46b-baa4-1b963bbf1103"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-21-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".pph_carousel-item",
                        selectorGuids: ["238fcb76-eb61-d46b-baa4-1b963bbf1103"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1911c091a97,
          },
          "a-24": {
            id: "a-24",
            title: "New Timed Animation",
            actionItemGroups: [],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x197ca2267fb,
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            {
              key: "main",
              min: 992,
              max: 1e4,
            },
            {
              key: "medium",
              min: 768,
              max: 991,
            },
            {
              key: "small",
              min: 480,
              max: 767,
            },
            {
              key: "tiny",
              min: 0,
              max: 479,
            },
          ],
        },
      });
    },
  },
]);

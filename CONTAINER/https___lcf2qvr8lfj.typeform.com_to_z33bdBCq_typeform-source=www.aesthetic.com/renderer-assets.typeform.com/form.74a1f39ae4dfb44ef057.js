(window.webpackJsonp_name_ = window.webpackJsonp_name_ || []).push([
  [0],
  {
    247: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return a;
        });
      var r = n(10),
        o = function () {
          return { type: r.s, payload: {} };
        },
        a = function () {
          return { type: r.E, payload: {} };
        };
    },
    248: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return a;
        });
      var r = n(10);
      function o(e) {
        return { type: r.z, payload: e };
      }
      function a(e) {
        return { type: r.y, payload: e };
      }
    },
    249: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return Ce;
      }),
        n.d(t, "a", function () {
          return Te;
        });
      var r = n(87),
        o = n.n(r),
        a = (n(169), n(134)),
        i = n.n(a),
        c = n(54),
        u = n(6),
        s = n(3),
        l = n(19),
        d = n(27),
        p = n(127),
        f = (n(25), n(51), n(21), n(66), n(31), n(76), n(502), n(110), n(11)),
        b = n.n(f),
        m = n(65),
        h = function (e) {
          return e.ref;
        },
        v = function (e) {
          return Object(m.a)(e.ref)
            ? Object(m.a)(e.value)
              ? e
              : e.value
            : e.ref;
        },
        g = function (e, t) {
          var n,
            r = v(t);
          switch (e.type) {
            case u.m:
            case u.s:
            case u.e:
            case u.u:
              var o = e.choices.find(function (e) {
                return e.ref === r;
              });
              n = o ? o.label : r;
              break;
            case u.q:
            case u.l:
              n = "";
              break;
            case u.d:
              n = (function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "-",
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "YYYYMMDD",
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  r = n.split("-"),
                  o = b()(r, 3),
                  a = o[0],
                  i = o[1],
                  c = o[2];
                switch (
                  ((a = a ? a.padStart(4, "0") : "\\_\\_\\_\\_"),
                  (i = i ? i.padStart(2, "0") : "\\_\\_"),
                  (c = c ? c.padStart(2, "0") : "\\_\\_"),
                  t)
                ) {
                  case "DDMMYYYY":
                    return c + e + i + e + a;
                  case "MMDDYYYY":
                    return i + e + c + e + a;
                  case "YYYYMMDD":
                    return a + e + i + e + c;
                }
              })(e.separator, e.structure, r);
              break;
            default:
              n =
                "string" == typeof r
                  ? r
                  : "number" == typeof r
                  ? r.toString()
                  : t.label;
          }
          return n || "";
        };
      function O(e, t) {
        var n = [].concat(Object(m.a)(t) ? [] : t).map(function (t) {
          return { value: v(t), humanReadableText: g(e, t) };
        });
        return { blockRef: h(e), value: n };
      }
      n(89);
      function y(e) {
        return (
          0 === e.value.length ||
          e.value.every(function (e) {
            return !e.value;
          })
        );
      }
      n(229), n(230), n(317), n(20);
      var j = n(657),
        w = n.n(j),
        k = n(650),
        x = n.n(k),
        C = n(159),
        E = n.n(C),
        S = n(772),
        I = n(2),
        P = n.n(I),
        T = n(235),
        _ = n(216),
        R = n.n(_),
        A = function (e) {
          var t = e.split("-"),
            n = b()(t, 3),
            r = n[0],
            o = n[1],
            a = n[2];
          if (!r || !o || !a) return !1;
          (r = r.padStart(4, "0")),
            (o = o.padStart(2, "0")),
            (a = a.padStart(2, "0"));
          var i = new Date("".concat(r, "-").concat(o, "-").concat(a));
          return (
            "Invalid Date" !== i &&
            !isNaN(i) &&
            i.getUTCFullYear() === parseInt(r, 10) &&
            i.getUTCMonth() === parseInt(o, 10) - 1 &&
            i.getUTCDate() === parseInt(a, 10)
          );
        };
      var D = n(477),
        B = n.n(D);
      function F(e) {
        return (
          /(^[a-z0-9_.+-`']+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$)/i.test(e) || B()(e)
        );
      }
      n(78);
      var N = n(128),
        L = (n(44), n(45), n(213)),
        M = n(498),
        V = n(73),
        H = function (e) {
          return new L.g(e, "label.paymentError.".concat(e, "Incomplete"));
        },
        z = function (e) {
          var t,
            n = [],
            r = e.cardCvc,
            o = e.cardExpiry,
            a = e.cardNumber,
            i = e.cardholdersName,
            c =
              ((t = {}),
              P()(t, V.a.CardCvc, r),
              P()(t, V.a.CardExpiry, o),
              P()(t, V.a.CardNumber, a),
              t),
            u = Object.keys(c);
          return !e ||
            (!i &&
              u.every(function (e) {
                return c[e].empty;
              }))
            ? []
            : (u.forEach(function (e) {
                c[e].error &&
                  n.push(
                    (function (e, t) {
                      return new L.g(e, M.a[t.code] || t.message, !0);
                    })(e, c[e].error)
                  );
              }),
              i || n.push(H(V.a.CardName)),
              u.forEach(function (e) {
                c[e].empty && n.push(H(e));
              }),
              n);
        };
      n(108);
      function K() {
        return (K = i()(
          o.a.mark(function e() {
            var t, r;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Promise.all([n.e(8), n.e(1)]).then(n.bind(null, 769))
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        (r = t.isValidNumber),
                        e.abrupt("return", function (e) {
                          return e.every(function (e) {
                            return (
                              e && (!e.number || r(e.number, e.countryCode))
                            );
                          });
                        })
                      );
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", function () {
                          return !0;
                        })
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]]
            );
          })
        )).apply(this, arguments);
      }
      n(312);
      var U = n(666),
        q = n.n(U),
        W = n(503),
        Y = n.n(W),
        G = n(548),
        Q = n.n(G),
        J = Q()(B.a, Y.a),
        Z = R()(J);
      var $ = Q()(B.a, Y.a),
        X = R()($);
      function ee(e) {
        return function (t) {
          return (
            !e ||
            !X(
              t.map(function (e) {
                return e && e.number;
              })
            )
          );
        };
      }
      n(114);
      var te = new RegExp(
          /^(https?|ftp):\/\/[-a-zA-Z0-9:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,18}\b/
        ),
        ne = new RegExp(/[\s]/),
        re = new RegExp(/^app:\/\/.+$/),
        oe = function (e) {
          return B()(e) || (te.test(e) && !ne.test(e)) || re.test(e);
        };
      n(107), n(311);
      var ae,
        ie = function (e) {
          return function (t) {
            var n = t.minValue,
              r = t.maxValue;
            return function (t) {
              return (
                !(function (e) {
                  var t = e.minValue,
                    n = e.maxValue,
                    r = e.values;
                  return !Object(m.a)(r) && (Object(N.b)(t) || Object(N.b)(n));
                })({ minValue: n, maxValue: r, values: t }) ||
                (t.every(N.b) && t.every(e({ minValue: n, maxValue: r })))
              );
            };
          };
        },
        ce = ie(function (e) {
          var t = e.minValue,
            n = e.maxValue;
          return function (e) {
            return e >= t && e <= n;
          };
        }),
        ue = ie(function (e) {
          var t = e.minValue;
          return function (e) {
            return e >= t;
          };
        }),
        se = ie(function (e) {
          var t = e.maxValue;
          return function (e) {
            return e <= t;
          };
        });
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(Object(n), !0).forEach(function (t) {
                P()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : le(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var pe =
        ((ae = {}),
        P()(ae, T.a.date, function () {
          return R()(A);
        }),
        P()(ae, T.a.emailAddress, function () {
          return R()(F);
        }),
        P()(ae, T.a.maxLength, function (e) {
          return R()(
            (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Number.POSITIVE_INFINITY;
              return function (t) {
                return t.length <= e;
              };
            })(e)
          );
        }),
        P()(ae, T.a.maxSelection, function () {
          return function () {
            return !0;
          };
        }),
        P()(ae, T.a.maxValue, se),
        P()(ae, T.a.minSelection, function (e) {
          return function (t) {
            return !e || !t.length || t.length >= e;
          };
        }),
        P()(ae, T.a.minValue, ue),
        P()(ae, T.a.mustAccept, function (e) {
          return R()(
            ((t = e),
            function (e) {
              return e === t;
            })
          );
          var t;
        }),
        P()(ae, T.a.number, N.a),
        P()(ae, T.a.payment, function () {
          return function (e) {
            return e.flatMap(z);
          };
        }),
        P()(ae, T.a.phoneNumber, function () {
          return K.apply(this, arguments);
        }),
        P()(ae, T.a.range, ce),
        P()(ae, T.a.required, function (e) {
          return function (t) {
            if (!e) return !0;
            var n = t.map(function (e) {
              return (function (e) {
                return q()(String, e);
              })(e)
                ? (function (e) {
                    return e.trim();
                  })(e)
                : e;
            });
            return !Z(n);
          };
        }),
        P()(ae, T.a.url, function () {
          return R()(oe);
        }),
        ae);
      var fe = (function () {
          var e = i()(
            o.a.mark(function e(t, n) {
              var r, a, i, c, u;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = Object.keys(n)), (a = {}), (i = 0), (c = r.length);
                    case 3:
                      if (!(i < c)) {
                        e.next = 11;
                        break;
                      }
                      return (u = r[i]), (e.next = 7), t[u](n[u]);
                    case 7:
                      a[u] = e.sent;
                    case 8:
                      i++, (e.next = 3);
                      break;
                    case 11:
                      return e.abrupt("return", a);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        be = x()(function (e) {
          return !0 !== e;
        });
      function me(e) {
        return (
          (t = (function (e) {
            switch (e.type) {
              case u.r:
                return de(de({}, pe), {}, P()({}, T.a.required, ee));
              default:
                return pe;
            }
          })(e)),
          i()(
            o.a.mark(function e() {
              var n,
                r,
                a = arguments;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n =
                          a.length > 0 && void 0 !== a[0]
                            ? a[0]
                            : { validations: {} }),
                        (e.next = 3),
                        fe(t, n.validations)
                      );
                    case 3:
                      return (
                        (r = e.sent),
                        e.abrupt("return", function (e) {
                          var t = Object(S.a)(n.definition, e),
                            o = w()(function (t) {
                              return t(e);
                            }, r),
                            a = be(t || o);
                          return Object.entries(a).flatMap(function (e) {
                            var t = b()(e, 2),
                              r = t[0],
                              o = t[1];
                            return !1 === o
                              ? [new L.a(E()(r), n.validations)]
                              : Array.isArray(o)
                              ? o
                              : [];
                          });
                        })
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        );
        var t;
      }
      var he = (function () {
        var e = i()(
          o.a.mark(function e(t, n) {
            var r, a, i;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = Object(s.i)(n)), (a = me(t)), (e.next = 4), a(t)
                    );
                  case 4:
                    return (i = e.sent), e.abrupt("return", i(r));
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })();
      function ve(e, t) {
        return ge.apply(this, arguments);
      }
      function ge() {
        return (ge = i()(
          o.a.mark(function e(t, n) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (n) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return e.abrupt("return", he(t, n));
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Oe(e, t) {
        return (
          e.length === t.length &&
          e.every(function (e, n) {
            return e === t[n];
          })
        );
      }
      var ye = n(177),
        je = n(10),
        we = n(223),
        ke = n(28),
        xe = n(240);
      function Ce(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a = r.isFromPrefilledAnswer,
          c = void 0 !== a && a,
          f = Object(ye.a)(n);
        return (function () {
          var n = i()(
            o.a.mark(function n(r, a) {
              var i, b, m, h, v, g, j, w, k, x, C;
              return o.a.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ((i = a()),
                        (b = Object(s.c)(i, e)),
                        (m = Object(s.p)(i, e)),
                        (h = Object(d.c)(i)),
                        m)
                      ) {
                        n.next = 6;
                        break;
                      }
                      return n.abrupt("return");
                    case 6:
                      if (!Object(s.m)(i)) {
                        n.next = 8;
                        break;
                      }
                      return n.abrupt("return");
                    case 8:
                      if (
                        ((v = O(m, t)),
                        (g = Object(s.i)(b)),
                        (j = Object(s.i)(v)),
                        !Oe(g, j))
                      ) {
                        n.next = 13;
                        break;
                      }
                      return n.abrupt("return");
                    case 13:
                      return (
                        (w = Object(d.m)(i)),
                        (k = function (e, t) {
                          var n = Object(l.i)(Object(d.d)(t), e.type);
                          return e.type !== u.q && !n;
                        }),
                        !w &&
                          k(m, i) &&
                          ((x = Object(p.a)(m)),
                          Object(we.h)(h, e, {
                            hash: x,
                            value: Array.isArray(t) ? t : [t],
                          })),
                        r({
                          type: je.G,
                          payload: {
                            answer: v,
                            navigationType: f,
                            isFromPrefilledAnswer: c,
                          },
                        }),
                        (n.next = 19),
                        r(Ee(m.ref))
                      );
                    case 19:
                      Object(d.b)(i) && r(Object(ke.g)(!1)),
                        y(v) && ((C = Object(s.l)(a())), r(Object(xe.b)(C)));
                    case 21:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })();
      }
      function Ee(e) {
        return (function () {
          var t = i()(
            o.a.mark(function t(n, r) {
              var a, i, u, l;
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((a = r()),
                        (i = Object(s.p)(a, e)) && Object(c.d)(i.type))
                      ) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return");
                    case 4:
                      return (
                        (u = Object(s.c)(a, e)),
                        (t.next = 7),
                        ve(i, { value: u.value })
                      );
                    case 7:
                      (l = t.sent),
                        n({
                          type: je.U,
                          payload: { blockRef: e, validationErrors: l },
                        });
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })();
      }
      function Se(e, t) {
        return { type: je.d, payload: { ref: e, source: t } };
      }
      function Ie(e) {
        return { type: je.f, payload: { ref: e } };
      }
      function Pe(e) {
        return { type: je.e, payload: { ref: e } };
      }
      function Te(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.source,
          a = n.isFromPrefilledAnswer,
          u = void 0 !== a && a,
          l = Object(ye.a)(t);
        return (function () {
          var t = i()(
            o.a.mark(function t(n, a) {
              var i, d, p, f;
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return n(Se(e, r)), (t.next = 3), n(Ee(e));
                    case 3:
                      if (
                        ((i = a()),
                        (d = Object(s.p)(i, e)),
                        (p = Object(c.d)(d.type)),
                        (f = Object(s.c)(i, e)),
                        !p || Object(s.f)(f))
                      ) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt("return", n(Pe(e)));
                    case 9:
                      n(Ie(e)),
                        n(Object(xe.b)(Object(s.l)(i))),
                        n(
                          Object(ke.k)(d ? Object(s.r)(d) : void 0, {
                            navigationType: l,
                            isFromPrefilledAnswer: u,
                          })
                        );
                    case 12:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })();
      }
    },
    333: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = n(10);
      function o(e, t) {
        return { type: r.v, payload: { blockRef: e, show: t } };
      }
    },
    334: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = n(10);
      function o(e) {
        return { type: r.w, payload: { isScrollNearTop: !e } };
      }
    },
    467: function (e, t, n) {
      "use strict";
      n.d(t, "i", function () {
        return i;
      }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "k", function () {
          return l;
        }),
        n.d(t, "j", function () {
          return d;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return b;
        }),
        n.d(t, "h", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return h;
        });
      n(25), n(139);
      var r = n(13),
        o = n(532),
        a = n(27),
        i = function (e) {
          return e.tracking;
        },
        c = function (e) {
          var t = i(e);
          return (null == t ? void 0 : t.planName) === o.a;
        },
        u = function (e) {
          return i(e).isFormCreator;
        },
        s = function (e) {
          return i(e).isFirstConversation;
        },
        l = Object(r.a)(i, function (e) {
          return e.visitCurrentCycle;
        }),
        d = function (e) {
          return i(e).segmentKey;
        },
        p = function (e) {
          return i(e).sessionId;
        },
        f = Object(r.a)(
          function (e) {
            return i(e).blockRefTracking;
          },
          function (e) {
            return function (t) {
              return (null == e ? void 0 : e[t]) || {};
            };
          }
        ),
        b = function (e) {
          var t = e.form,
            n = t.id,
            r = t.settings.language,
            o = i(e),
            c = o.legacyAccountId,
            s = o.planName,
            l = !Object(a.m)(e) && !u(e);
          return function (e, t) {
            var o = [
              "utm_campaign=".concat(n),
              "utm_source=typeform.com-".concat(c, "-").concat(s),
              "utm_medium=typeform",
              "utm_content=".concat(t),
              "utm_term=".concat(r && r.toUpperCase()),
            ];
            return l ? "".concat(e, "?").concat(o.join("&")) : "".concat(e);
          };
        },
        m = function (e) {
          var t = [];
          return (
            e.form.settings.googleAnalytics && t.push(o.c),
            e.form.settings.facebookPixel && t.push(o.b),
            e.form.settings.googleTagManager && t.push(o.d),
            t
          );
        },
        h = function (e) {
          return e.form.settings.facebookPixel;
        };
    },
    469: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "j", function () {
          return i;
        }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "f", function () {
          return d;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "h", function () {
          return f;
        }),
        n.d(t, "i", function () {
          return b;
        });
      n(26), n(21);
      var r = n(19),
        o = n(3),
        a = function (e) {
          return Object(o.S)(e).isComplete;
        },
        i = function (e) {
          return null !== u(e);
        },
        c = function (e) {
          return Object(o.S)(e).responseId;
        },
        u = function (e) {
          return Object(o.S)(e).landingId;
        },
        s = function (e) {
          return Object(o.S)(e).navigationType;
        },
        l = function (e) {
          return Object(o.S)(e).landingAt;
        },
        d = function (e) {
          return Object(o.S)(e).retry.count;
        },
        p = function (e) {
          return Object(o.S)(e).retry.timeout;
        },
        f = function (e) {
          return Object(o.S)(e).errorMessage;
        },
        b = function (e) {
          return {
            answers: Object(o.t)(e)
              .filter(function (t) {
                return (
                  Object(o.H)(t) ||
                  !Object(o.E)(t.type, Object(o.c)(e, Object(o.r)(t)))
                );
              })
              .filter(function (t) {
                return Object(r.f)(e, Object(o.r)(t));
              })
              .map(function (t) {
                var n = Object(o.c)(e, Object(o.r)(t));
                return { block: t, answer: n && Object(o.h)(t, n) };
              }),
            variables: Object(o.v)(e),
            hidden: Object(o.A)(e),
            logic: Object(o.J)(e),
          };
        };
    },
    493: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return y;
      }),
        n.d(t, "d", function () {
          return j;
        }),
        n.d(t, "b", function () {
          return w;
        }),
        n.d(t, "e", function () {
          return x;
        }),
        n.d(t, "a", function () {
          return C;
        });
      n(25), n(107), n(174), n(66), n(108), n(31), n(57), n(311);
      var r = n(87),
        o = n.n(r),
        a = (n(169), n(134)),
        i = n.n(a),
        c = n(38),
        u = n.n(c),
        s = n(75),
        l = n.n(s),
        d = n(237),
        p = n.n(d);
      function f(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return e;
        }
      }
      var b = n(539),
        m = "".concat(b.a.apiHost, "/").concat(b.a.endpoints.forms),
        h = {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Accept: "application/json",
        },
        v = {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        g = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : p.a;
            u()(this, e), (this.httpClient = t);
          }
          return (
            l()(e, [
              {
                key: "_post",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : h;
                  return new Promise(function (o, a) {
                    var i = { body: n, url: e, headers: r };
                    t.httpClient.post(i, function (e, t) {
                      var n = t.body,
                        r = t.statusCode;
                      if (((n = f(n)), e || r < 200 || r > 299))
                        return a(n || e);
                      o(n);
                    });
                  });
                },
              },
              {
                key: "_postJson",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  return this._post(e, JSON.stringify(t), v);
                },
              },
            ]),
            e
          );
        })(),
        O = function (e) {
          return {
            submissions: ""
              .concat(m)
              .concat(e, "/")
              .concat(b.a.endpoints.submissions),
            landings: ""
              .concat(m)
              .concat(e, "/")
              .concat(b.a.endpoints.landings),
          };
        },
        y = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new g(),
            n = O(e).landings;
          return t._post(n);
        },
        j = (function () {
          var e = i()(
            o.a.mark(function e(t) {
              var r,
                a,
                i,
                c,
                u,
                s,
                l,
                d,
                p,
                f,
                b,
                m = arguments;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.formId),
                        (a = t.landingId),
                        (i = t.landingAt),
                        (c = t.values),
                        (u = t.payment),
                        (s = t.outcome),
                        (l = t.formPublicKey),
                        (d = m.length > 1 && void 0 !== m[1] ? m[1] : new g()),
                        (p = O(r).submissions),
                        (e.next = 5),
                        Promise.all([n.e(7), n.e(0)]).then(n.bind(null, 803))
                      );
                    case 5:
                      return (
                        (f = e.sent.default),
                        (b = f({
                          formId: r,
                          landingAt: i,
                          landingId: a,
                          payment: u,
                          values: c,
                          outcome: s,
                          formPublicKey: l,
                        })),
                        e.abrupt("return", d._postJson(p, b))
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        w = function (e, t) {
          var n = (function (e, t) {
            return ""
              .concat(m)
              .concat(e, "/")
              .concat(b.a.endpoints.uploads)
              .concat(t, "/upload-credentials");
          })(e, t);
          return new Promise(function (e, t) {
            var r = { url: n };
            p.a.get(r, function (n, r) {
              var o = r.body,
                a = r.statusCode;
              if (n || a < 200 || a > 299) return t(Error("credentials-error"));
              e(f(o));
            });
          });
        },
        k = function (e) {
          return e.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>{}[\]\\/\s]/g, "_");
        },
        x = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : function () {},
            r = k(e.name),
            o = t.bucket,
            a = "https://".concat(o, ".s3.amazonaws.com");
          return new Promise(function (o, i) {
            var c = new XMLHttpRequest();
            c.open("POST", a, !0),
              c.setRequestHeader("Access-Control-Allow-Origin", "*"),
              (c.onload = function () {
                if (c.status < 200 || c.status >= 299)
                  return i(
                    new Error(
                      (c.response && c.response.code) || "s3-upload-error"
                    )
                  );
                var e = "".concat(t.token, "-").concat(r);
                o(e);
              }),
              (c.onerror = function () {
                return i(new Error("s3-connection-error"));
              });
            var u = new FormData();
            c.upload.addEventListener(
              "progress",
              function (e) {
                var t = e.loaded / e.total;
                n(t);
              },
              !1
            ),
              u.append("key", "".concat(t.folder).concat(t.token)),
              u.append("AWSAccessKeyId", t.key),
              u.append("acl", t.acl),
              u.append("policy", t.policy),
              u.append("signature", t.signature),
              u.append("file", e),
              u.append(
                "successActionRedirect",
                t.success_action_redirect || t.successActionRedirect
              ),
              c.send(u);
          });
        },
        C = function (e) {
          return new Promise(function (t, n) {
            var r = {
              url: e,
              headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            };
            p.a.get(r, function (e, r) {
              var o = r.body,
                a = r.statusCode;
              if (e || a < 200 || a > 299) return n(Error(e || a));
              var i = f(o) || { has_alpha: !1 };
              t(!i.has_alpha);
            });
          });
        };
    },
    497: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n(87),
        o = n.n(r),
        a = (n(169), n(463)),
        i = n(19),
        c = n(10),
        u = o.a.mark(s);
      function s(e) {
        var t, n, r;
        return o.a.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (o.next = 3), Object(a.k)([c.a, c.p, c.G, c.H]);
              case 3:
                if (((t = o.sent), (n = t.type), (r = t.payload), n !== c.a)) {
                  o.next = 12;
                  break;
                }
                return (o.next = 9), Object(a.i)(i.j, r.ref);
              case 9:
                if (!o.sent) {
                  o.next = 12;
                  break;
                }
                return o.abrupt("continue", 0);
              case 12:
                if ((n !== c.G && n !== c.a) || !r.isFromPrefilledAnswer) {
                  o.next = 14;
                  break;
                }
                return o.abrupt("continue", 0);
              case 14:
                return (o.next = 16), Object(a.b)(e, r);
              case 16:
                return o.abrupt("return");
              case 19:
              case "end":
                return o.stop();
            }
        }, u);
      }
    },
    498: function (e, t, n) {
      "use strict";
      t.a = {
        approve_with_id: "label.paymentError.unauthorized",
        not_permitted: "label.paymentError.unauthorized",
        card_declined: "label.paymentError.declinedCard",
        call_issuer: "label.paymentError.declinedCard",
        do_not_honor: "label.paymentError.declinedCard",
        do_not_try_again: "label.paymentError.declinedCard",
        generic_decline: "label.paymentError.declinedCard",
        lost_card: "label.paymentError.declinedCard",
        merchant_blacklist: "label.paymentError.declinedCard",
        no_action_taken: "label.paymentError.declinedCard",
        revocation_of_all_authorizations: "label.paymentError.declinedCard",
        revocation_of_authorization: "label.paymentError.declinedCard",
        security_violation: "label.paymentError.declinedCard",
        service_not_allowed: "label.paymentError.declinedCard",
        stolen_card: "label.paymentError.declinedCard",
        stop_payment_order: "label.paymentError.declinedCard",
        transaction_not_allowed: "label.paymentError.declinedCard",
        fraudulent: "label.paymentError.declinedCard",
        pickup_card: "label.paymentError.declinedCard",
        restricted_card: "label.paymentError.declinedCard",
        try_again_later: "label.paymentError.declinedCard",
        card_velocity_exceeded: "label.paymentError.exceededBalance",
        withdrawal_count_limit_exceeded: "label.paymentError.exceededBalance",
        currency_not_supported: "label.paymentError.unsupportedCurrency",
        duplicate_transaction: "label.paymentError.duplicateTransaction",
        expired_card: "label.paymentError.expiredCard",
        incorrect_number: "label.paymentError.invalidCardNumber",
        invalid_number: "label.paymentError.invalidCardNumber",
        incorrect_cvc: "label.paymentError.invalidCvc",
        invalid_cvc: "label.paymentError.invalidCvc",
        incorrect_zip: "label.paymentError.invalidZip",
        invalid_expiry_year: "label.paymentError.invalidExpiryYear",
        invalid_expiry_year_past: "label.paymentError.pastExpiryYear",
        invalid_expiry_month_past: "label.paymentError.pastExpiryMonth",
        insufficient_funds: "label.paymentError.insufficientFunds",
        invalid_account: "label.paymentError.invalidAccount",
        new_account_information_available: "label.paymentError.invalidAccount",
        issuer_not_available: "label.paymentError.unavailableIssuer",
        processing_error: "label.paymentError.cardProcessingError",
        reenter_transaction: "label.paymentError.issuerProcessingError",
        testmode_decline: "label.paymentError.declinedTestMode",
        card_not_supported: "label.paymentError.unsupportedCard",
        live_mode_test_card: "label.paymentError.stripeNotConnected",
        test_mode_live_card: "label.paymentError.stripeNotConnected",
        testmode_charges_only: "label.paymentError.stripeNotConnected",
        invalid_amount: "label.paymentError.invalidAmount",
        incomplete_number: "label.paymentError.cardNumberIncomplete",
        incomplete_cvc: "label.paymentError.cardCvcIncomplete",
        incomplete_expiry: "label.paymentError.cardExpiryIncomplete",
        api_connection_error: "stripe_connection_error",
        payment_method_unactivated: "label.paymentError.cardProcessingError",
        payment_method_unexpected_state:
          "label.paymentError.cardProcessingError",
        payment_intent_authentication_failure:
          "label.paymentError.authenticationFailure",
        payment_intent_incompatible_payment_method:
          "label.paymentError.cardProcessingError",
        payment_intent_invalid_parameter:
          "label.paymentError.cardProcessingError",
        payment_intent_payment_attempt_failed:
          "label.paymentError.cardProcessingError",
        payment_intent_unexpected_state:
          "label.paymentError.cardProcessingError",
      };
    },
    499: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var r = function (e, t) {
        return (function (e) {
          return e.featureFlags || {};
        })(e)[t];
      };
    },
    531: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = function (e) {
          return e.abTests || {};
        },
        o = function (e, t) {
          return r(e)[t];
        };
    },
    532: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return i;
        });
      var r = "googleAnalytics",
        o = "facebookPixel",
        a = "googleTagManager",
        i = "free";
    },
    533: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var r = "ab_test_renderer",
        o = "RESP-285-virality-ending-experiment";
    },
    534: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var r = "sticky_footer";
    },
    535: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      n(51);
      var r = n(3),
        o = function (e, t) {
          var n,
            o = (function (e) {
              return e.intents;
            })(e);
          if (null == o || !o.length) return null;
          var a = Object(r.p)(e, t);
          return a
            ? null ===
                (n = o.find(function (e) {
                  return e.id === a.id;
                })) || void 0 === n
              ? void 0
              : n.intent
            : null;
        };
    },
    536: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n(87),
        o = n.n(r),
        a = (n(169), n(463)),
        i = n(3),
        c = n(469),
        u = n(10),
        s = n(207),
        l = o.a.mark(m),
        d = o.a.mark(h),
        p = o.a.mark(v),
        f = o.a.mark(g),
        b = o.a.mark(O);
      function m() {
        return o.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(a.f)(h);
              case 2:
                return (e.next = 4), Object(a.f)(v);
              case 4:
                return (e.next = 6), Object(a.f)(O);
              case 6:
              case "end":
                return e.stop();
            }
        }, l);
      }
      function h() {
        return o.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(a.k)(u.p);
              case 2:
                s.g();
              case 3:
              case "end":
                return e.stop();
            }
        }, d);
      }
      function v() {
        var e;
        return o.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Object(a.k)(u.K);
              case 2:
                return (t.next = 4), Object(a.i)(c.e);
              case 4:
                (e = t.sent), s.e({ response_id: e, responseId: e });
              case 6:
              case "end":
                return t.stop();
            }
        }, p);
      }
      function g() {
        var e;
        return o.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Object(a.i)(i.x);
              case 2:
                (e = t.sent), s.d({ ref: e });
              case 4:
              case "end":
                return t.stop();
            }
        }, f);
      }
      function O() {
        return o.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(a.l)([u.a], g);
              case 2:
              case "end":
                return e.stop();
            }
        }, b);
      }
    },
    537: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var r = n(87),
        o = n.n(r),
        a = (n(169), n(463)),
        i = n(27),
        c = n(10),
        u = n(223),
        s = o.a.mark(d),
        l = o.a.mark(p);
      function d() {
        var e;
        return o.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Object(a.k)(c.K);
              case 2:
                return (t.next = 4), Object(a.i)(i.c);
              case 4:
                return (e = t.sent), (t.next = 7), Object(a.b)(u.g, e);
              case 7:
              case "end":
                return t.stop();
            }
        }, s);
      }
      function p() {
        return o.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(a.f)(d);
              case 2:
              case "end":
                return e.stop();
            }
        }, l);
      }
    },
    538: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return q;
      }),
        n.d(t, "c", function () {
          return W;
        }),
        n.d(t, "a", function () {
          return X;
        }),
        n.d(t, "d", function () {
          return ee;
        });
      n(36), n(67), n(107), n(215), n(311);
      var r = n(2),
        o = n.n(r),
        a = n(87),
        i = n.n(a),
        c = (n(169), n(463)),
        u = n(540),
        s = n(175),
        l = n(247),
        d = n(93),
        p = n(248),
        f = n(28),
        b = n(493),
        m = n(27),
        h = n(3),
        v = n(469),
        g = n(68),
        O = n(214),
        y = n(541),
        j = n(130),
        w = n(498),
        k = n(132),
        x = n(542),
        C = i.a.mark(W),
        E = i.a.mark(Y),
        S = i.a.mark(G),
        I = i.a.mark(Q),
        P = i.a.mark(J),
        T = i.a.mark(Z),
        _ = i.a.mark($),
        R = i.a.mark(X),
        A = i.a.mark(ee),
        D = i.a.mark(te),
        B = i.a.mark(ne),
        F = i.a.mark(re),
        N = [5, 10, 15, 30],
        L = function (e) {
          var t = N.length,
            n = e > t ? N[t - 1] : N[e - k.g];
          return e ? n : 1;
        },
        M = function (e) {
          var t = e.code,
            n = e.details;
          return (
            "VALIDATION_ERROR" === t &&
            n &&
            n.length &&
            "RULE_MATCHED" === n[0].code
          );
        },
        V = function (e) {
          return e.decline_code || e.code || e.type;
        },
        H = function (e) {
          var t = e && e.code;
          return (
            "PAYMENT_ERROR" === t &&
              e.details &&
              e.details.length &&
              (t = e.details[0].code),
            t
          );
        },
        z = function (e) {
          return e && e.description;
        },
        K = function (e) {
          return e && e.details;
        },
        U = function (e, t) {
          return (
            w.a[t] ||
            (function (e) {
              return M(e)
                ? "label.error.ruleMatched"
                : "FORM_CHANGED" === e.code
                ? "label.error.formChanged"
                : "label.error.generic";
            })(e)
          );
        },
        q = function (e, t) {
          return t.hasOwnProperty("token")
            ? t
            : {
                response_id: t.submission.response_id,
                token: t.signature,
                landed_at: t.submission.landed_at,
              };
        };
      function W() {
        var e, t, n, r, o, a;
        return i.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (t = 0), (i.next = 3), Object(c.i)(m.c);
                case 3:
                  n = i.sent;
                case 4:
                  if (e) {
                    i.next = 32;
                    break;
                  }
                  return (i.prev = 5), (i.next = 8), Object(c.b)(b.c, n);
                case 8:
                  return (
                    (e = i.sent),
                    (r = q(n, e)),
                    (i.next = 12),
                    Object(c.g)(
                      Object(s.c)(r.token, r.landed_at, r.response_id)
                    )
                  );
                case 12:
                  i.next = 30;
                  break;
                case 14:
                  if (((i.prev = 14), (i.t0 = i.catch(5)), !M(i.t0))) {
                    i.next = 25;
                    break;
                  }
                  return (i.next = 19), Object(c.i)(h.m);
                case 19:
                  return (
                    (o = i.sent),
                    (a = o ? l.b : l.a),
                    (i.next = 23),
                    Object(c.g)(a())
                  );
                case 23:
                  return (e = !0), i.abrupt("return");
                case 25:
                  return (i.next = 27), Object(c.g)(Object(s.b)(i.t0));
                case 27:
                  return (
                    (i.next = 29),
                    Object(c.d)(
                      ((u = t % 6), 1e3 * Math.floor(Math.pow(1.8, u)))
                    )
                  );
                case 29:
                  t++;
                case 30:
                  i.next = 4;
                  break;
                case 32:
                case "end":
                  return i.stop();
              }
            var u;
          },
          C,
          null,
          [[5, 14]]
        );
      }
      function Y() {
        return i.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(c.i)(v.g);
              case 2:
                if (!e.sent) {
                  e.next = 9;
                  break;
                }
                return (e.next = 5), Object(c.d)(1e3);
              case 5:
                return (e.next = 7), Object(c.g)(Object(s.a)());
              case 7:
                e.next = 0;
                break;
              case 9:
              case "end":
                return e.stop();
            }
        }, E);
      }
      function G(e, t) {
        return i.a.wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (n.next = 2), Object(c.d)(500);
              case 2:
                return (n.next = 4), Object(c.g)(Object(d.d)(e, t));
              case 4:
                return n.delegateYield(Y(), "t0", 5);
              case 5:
                return n.delegateYield(ee(), "t1", 6);
              case 6:
              case "end":
                return n.stop();
            }
        }, S);
      }
      function Q(e) {
        var t, n, r, o, a, u;
        return i.a.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (i.next = 2), Object(c.i)(v.i);
              case 2:
                return (t = i.sent), (i.next = 5), Object(c.i)(m.c);
              case 5:
                return (n = i.sent), (i.next = 8), Object(c.i)(v.c);
              case 8:
                return (r = i.sent), (i.next = 11), Object(c.i)(v.b);
              case 11:
                return (o = i.sent), (i.next = 14), Object(c.i)(h.L);
              case 14:
                return (a = i.sent), (i.next = 17), Object(c.i)(m.d);
              case 17:
                return (
                  (u = i.sent),
                  (i.next = 20),
                  Object(c.b)(b.d, {
                    formId: n,
                    landingId: r,
                    landingAt: o,
                    values: t,
                    payment: e,
                    outcome: a,
                    formPublicKey: u,
                  })
                );
              case 20:
                return i.abrupt("return", i.sent);
              case 21:
              case "end":
                return i.stop();
            }
        }, I);
      }
      function J() {
        return i.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(c.g)(Object(p.b)(null));
              case 2:
                return (e.next = 4), Object(c.g)(Object(p.a)(null));
              case 4:
              case "end":
                return e.stop();
            }
        }, P);
      }
      function Z(e, t) {
        var n, r, o, a;
        return i.a.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!(n = H(e))) {
                  i.next = 13;
                  break;
                }
                return (
                  (r = U(e, n)),
                  (o = z(e)),
                  (a = K(e)),
                  (i.next = 7),
                  Object(c.b)(J)
                );
              case 7:
                return (i.next = 9), Object(c.g)(Object(d.c)(r, n, o, a));
              case 9:
                if (!M(e)) {
                  i.next = 12;
                  break;
                }
                return (i.next = 12), Object(c.g)(Object(l.b)());
              case 12:
                return i.abrupt("return");
              case 13:
                return i.delegateYield(G(t, "connection_error"), "t0", 14);
              case 14:
                return i.abrupt("return", i.t0);
              case 15:
              case "end":
                return i.stop();
            }
        }, T);
      }
      function $(e) {
        var t;
        return i.a.wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (t = V(e)), (n.next = 3), Object(c.b)(J);
              case 3:
                return (
                  (n.next = 5),
                  Object(c.g)(Object(d.c)(w.a[t] || "label.error.generic", t))
                );
              case 5:
                return n.abrupt("return", n.sent);
              case 6:
              case "end":
                return n.stop();
            }
        }, _);
      }
      function X() {
        var e, t;
        return i.a.wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (n.next = 2), Object(c.i)(m.y);
              case 2:
                if (!(e = n.sent)) {
                  n.next = 9;
                  break;
                }
                return (n.next = 6), Object(c.d)(k.f);
              case 6:
                Object(u.a)(e), (n.next = 14);
                break;
              case 9:
                return (n.next = 11), Object(c.i)(g.c);
              case 11:
                return (
                  (t = n.sent), (n.next = 14), Object(c.g)(Object(f.p)(t.ref))
                );
              case 14:
              case "end":
                return n.stop();
            }
        }, R);
      }
      function ee() {
        var e, t, n;
        return i.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.next = 2), Object(c.i)(v.f);
                case 2:
                  return (
                    (e = r.sent), (t = L(e)), (r.next = 6), Object(c.i)(j.c)
                  );
                case 6:
                  if (!r.sent) {
                    r.next = 10;
                    break;
                  }
                  return (r.next = 9), Object(c.g)(Object(l.b)());
                case 9:
                  return r.abrupt("return", r.sent);
                case 10:
                  return (r.next = 12), Object(c.i)(v.j);
                case 12:
                  if (r.sent) {
                    r.next = 15;
                    break;
                  }
                  return r.delegateYield(G(t, "no_landing"), "t0", 14);
                case 14:
                  return r.abrupt("return", r.t0);
                case 15:
                  return (r.prev = 15), (r.next = 18), Object(c.i)(O.k);
                case 18:
                  if (!(n = r.sent)) {
                    r.next = 22;
                    break;
                  }
                  return r.delegateYield(te(n, t), "t1", 21);
                case 21:
                  return r.abrupt("return", r.t1);
                case 22:
                  return (r.next = 24), Object(c.b)(Q);
                case 24:
                  return (r.next = 26), Object(c.g)(Object(d.e)());
                case 26:
                  r.next = 33;
                  break;
                case 28:
                  return (
                    (r.prev = 28),
                    (r.t2 = r.catch(15)),
                    (r.next = 32),
                    Z(r.t2, t)
                  );
                case 32:
                  return r.abrupt("return", r.sent);
                case 33:
                  return (r.next = 35), Object(c.b)(X);
                case 35:
                case "end":
                  return r.stop();
              }
          },
          A,
          null,
          [[15, 28]]
        );
      }
      function te(e, t) {
        var n, r, o, a, u;
        return i.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (i.prev = 0), (i.next = 3), Object(c.i)(y.c);
                case 3:
                  if ((n = i.sent)) {
                    i.next = 6;
                    break;
                  }
                  throw new x.a(
                    "missing_stripe_account",
                    "label.error.generic"
                  );
                case 6:
                  return (i.next = 8), Object(c.i)(y.b);
                case 8:
                  return (r = i.sent), (i.next = 11), Object(c.i)(y.a);
                case 11:
                  if (((o = i.sent), !r || o)) {
                    i.next = 15;
                    break;
                  }
                  return i.delegateYield(ne(r, n, t), "t0", 14);
                case 14:
                  return i.abrupt("return", i.t0);
                case 15:
                  if (!o) {
                    i.next = 18;
                    break;
                  }
                  return i.delegateYield(re(o, r, n, t), "t1", 17);
                case 17:
                  return i.abrupt("return", i.t1);
                case 18:
                  return (i.next = 20), Object(c.i)(y.d);
                case 20:
                  return (
                    (a = i.sent),
                    (i.next = 23),
                    Object(c.b)(a.createPaymentMethod, e)
                  );
                case 23:
                  if (!(u = i.sent).error) {
                    i.next = 28;
                    break;
                  }
                  return (i.next = 27), Object(c.b)($, u.error);
                case 27:
                  return i.abrupt("return", i.sent);
                case 28:
                  return (
                    (r = u.paymentMethod && u.paymentMethod.id),
                    (i.next = 31),
                    Object(c.g)(Object(p.b)(r))
                  );
                case 31:
                  return i.delegateYield(ne(r, n, t), "t2", 32);
                case 32:
                  return i.abrupt("return", i.t2);
                case 35:
                  return (
                    (i.prev = 35),
                    (i.t3 = i.catch(0)),
                    (i.next = 39),
                    Z(i.t3, t)
                  );
                case 39:
                  return i.abrupt("return", i.sent);
                case 40:
                case "end":
                  return i.stop();
              }
          },
          D,
          null,
          [[0, 35]]
        );
      }
      function ne(e, t, n) {
        var r, a, u, s;
        return i.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (i.prev = 0),
                    (i.next = 3),
                    Object(c.b)(
                      Q,
                      o()({ provider: "stripe" }, "stripe", {
                        payment_method: e,
                        account_id: t,
                      })
                    )
                  );
                case 3:
                  if ("stripe" !== (r = i.sent).provider) {
                    i.next = 20;
                    break;
                  }
                  return (i.next = 7), Object(c.i)(y.d);
                case 7:
                  return (
                    (a = i.sent),
                    (i.next = 10),
                    Object(c.b)(a.handleCardAction, r.stripe.client_secret)
                  );
                case 10:
                  if (!(u = i.sent).error) {
                    i.next = 15;
                    break;
                  }
                  return (i.next = 14), Object(c.b)($, u.error);
                case 14:
                  return i.abrupt("return", i.sent);
                case 15:
                  return (
                    (s = u.paymentIntent.id),
                    (i.next = 18),
                    Object(c.g)(Object(p.a)(s))
                  );
                case 18:
                  return i.delegateYield(re(s, e, t, n), "t0", 19);
                case 19:
                  return i.abrupt("return", i.t0);
                case 20:
                  return (i.next = 22), Object(c.g)(Object(d.e)());
                case 22:
                  i.next = 29;
                  break;
                case 24:
                  return (
                    (i.prev = 24),
                    (i.t1 = i.catch(0)),
                    (i.next = 28),
                    Z(i.t1, n)
                  );
                case 28:
                  return i.abrupt("return", i.sent);
                case 29:
                  return (i.next = 31), Object(c.b)(X);
                case 31:
                case "end":
                  return i.stop();
              }
          },
          B,
          null,
          [[0, 24]]
        );
      }
      function re(e, t, n, r) {
        var a;
        return i.a.wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (i.prev = 0),
                    (i.next = 3),
                    Object(c.b)(
                      Q,
                      ((a = { provider: "stripe" }),
                      o()(a, "stripe", { payment_method: t, account_id: n }),
                      o()(a, "ref", e),
                      a)
                    )
                  );
                case 3:
                  return (i.next = 5), Object(c.g)(Object(d.e)());
                case 5:
                  i.next = 12;
                  break;
                case 7:
                  return (
                    (i.prev = 7), (i.t0 = i.catch(0)), (i.next = 11), Z(i.t0, r)
                  );
                case 11:
                  return i.abrupt("return", i.sent);
                case 12:
                  return (i.next = 14), Object(c.b)(X);
                case 14:
                case "end":
                  return i.stop();
              }
          },
          F,
          null,
          [[0, 7]]
        );
      }
    },
    539: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = n(227),
        o = {
          apiHost:
            Object(r.a)() && window.__apiEntrypoint__
              ? window.__apiEntrypoint__
              : "",
          endpoints: {
            forms: "forms/",
            submissions: "complete-submission",
            landings: "start-submission",
            uploads: "fields/",
            insights: "insights/events/",
          },
        };
    },
    540: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return s;
        });
      n(35), n(40);
      var r = n(326),
        o = n.n(r),
        a = n(207),
        i = n(241),
        c = { allowUnknownSchemes: !0 },
        u = function (e) {
          l(e, "AFTER_SUBMIT_REDIRECT");
        },
        s = function (e) {
          l(e, "THANK_YOU_SCREEN_REDIRECT");
        },
        l = function (e, t) {
          if (
            (function (e) {
              return o()(e, c);
            })(e)
          ) {
            if (Object(i.a)())
              switch (t) {
                case "THANK_YOU_SCREEN_REDIRECT":
                  a.f(e);
                  break;
                case "AFTER_SUBMIT_REDIRECT":
                  a.c(e);
              }
            try {
              var n = document.createElement("a");
              (n.href = e),
                (n.target = Object(i.a)() ? "_parent" : ""),
                document.body.appendChild(n),
                n.click(),
                document.body.removeChild(n);
              var r = window.location.origin + window.location.pathname;
              if (e.includes(r)) {
                var u = Object(i.a)() ? window.parent : window;
                setTimeout(function () {
                  return u.location.reload();
                }, 500);
              }
            } catch (e) {
              console.error(e);
            }
          }
        };
    },
    541: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return i;
        }),
        n.d(t, "d", function () {
          return c;
        });
      var r = function (e) {
          return e.paymentProviders.stripe;
        },
        o = function (e) {
          return r(e).accountId;
        },
        a = function (e) {
          return r(e).stripePaymentMethodId;
        },
        i = function (e) {
          return r(e).stripePaymentIntentId;
        },
        c = function (e) {
          return r(e).service;
        };
    },
    542: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      n(36), n(67), n(25);
      var r = n(38),
        o = n.n(r),
        a = n(41),
        i = n.n(a),
        c = n(88),
        u = n.n(c),
        s = n(58),
        l = n.n(s),
        d = n(638);
      function p(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = l()(e);
          if (t) {
            var o = l()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return u()(this, n);
        };
      }
      var f = (function (e) {
        i()(n, e);
        var t = p(n);
        function n(e, r, a) {
          var i;
          return (
            o()(this, n),
            ((i = t.call(this, "".concat(e, ": ").concat(r))).code = e),
            (i.description = r),
            (i.details = a),
            i
          );
        }
        return n;
      })(n.n(d)()(Error));
    },
    543: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      }),
        n.d(t, "b", function () {
          return g;
        });
      n(25), n(107), n(215), n(311);
      var r = n(87),
        o = n.n(r),
        a = (n(169), n(463)),
        i = n(7),
        c = n(467),
        u = n(27),
        s = n(111),
        l = n(10),
        d = n(497),
        p = o.a.mark(v),
        f = o.a.mark(g),
        b = o.a.mark(O),
        m = function () {
          if ("undefined" != typeof window && window.newrelic)
            return window.newrelic;
        },
        h = function (e, t) {
          var n = m();
          n && n.addPageAction(e, t);
        };
      function v(e, t) {
        var n,
          r,
          i,
          c = arguments;
        return o.a.wrap(function (u) {
          for (;;)
            switch ((u.prev = u.next)) {
              case 0:
                for (
                  n = c.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
                  i < n;
                  i++
                )
                  r[i - 2] = c[i];
                return (
                  (u.next = 3),
                  Object(a.f)(
                    o.a.mark(function n() {
                      var i;
                      return o.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), Object(a.k)(e);
                            case 2:
                              return (
                                (i = n.sent),
                                (n.next = 5),
                                a.b.apply(void 0, [t].concat(r, [i.payload]))
                              );
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )
                );
              case 3:
              case "end":
                return u.stop();
            }
        }, p);
      }
      function g() {
        var e;
        return o.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Object(a.i)(c.f);
              case 2:
                if (!t.sent) {
                  t.next = 5;
                  break;
                }
                return t.abrupt("return");
              case 5:
                if ((e = m())) {
                  t.next = 8;
                  break;
                }
                return t.abrupt("return");
              case 8:
                return (t.next = 10), Object(a.k)(l.M);
              case 10:
                return (t.next = 12), Object(a.b)(O, e);
              case 12:
                return (
                  (t.next = 14),
                  Object(a.b)(
                    d.a,
                    o.a.mark(function t() {
                      return o.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), Object(a.b)(y, e);
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )
                );
              case 14:
                return t.delegateYield(v(l.K, j, e), "t0", 15);
              case 15:
                return t.delegateYield(v(l.I, k, e), "t1", 16);
              case 16:
                return t.delegateYield(v(l.J, x, e), "t2", 17);
              case 17:
                return t.delegateYield(v(l.H, w, e), "t3", 18);
              case 18:
              case "end":
                return t.stop();
            }
        }, f);
      }
      function O(e) {
        var t, n, r, l;
        return o.a.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (o.next = 2), Object(a.i)(u.c);
              case 2:
                return (t = o.sent), (o.next = 5), Object(a.i)(c.g);
              case 5:
                return (n = o.sent), (o.next = 8), Object(a.i)(c.i);
              case 8:
                return (
                  (r = o.sent),
                  e.setCustomAttribute("isTouch", String(Object(i.n)())),
                  e.setCustomAttribute("formUid", t),
                  e.setCustomAttribute("sessionId", n),
                  e.setCustomAttribute(
                    "planName",
                    null == r ? void 0 : r.planName
                  ),
                  (o.next = 15),
                  Object(a.i)(s.d)
                );
              case 15:
                if (!o.sent) {
                  o.next = 21;
                  break;
                }
                return (o.next = 19), Object(a.i)(s.c);
              case 19:
                (l = o.sent), e.setCustomAttribute("embeddingMode", l);
              case 21:
              case "end":
                return o.stop();
            }
        }, b);
      }
      function y(e) {
        e.addPageAction("startConversation");
      }
      function j(e) {
        e.addPageAction("conversationSubmitted");
      }
      function w(e) {
        e.addPageAction("submitRequest");
      }
      function k(e, t) {
        var n = t.errorCode,
          r = t.errorDescription,
          o = t.errorDetails;
        e.addPageAction("submitFailed", {
          errorCode: n,
          errorDescription: r,
          errorDetails: JSON.stringify(o),
        });
      }
      function x(e, t) {
        var n = t.errorCode;
        e.addPageAction("submitRetry", { errorCode: n });
      }
    },
    557: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return i;
        });
      n(20), n(31), n(57);
      var r = {
          AD: "376",
          AE: "971",
          AF: "93",
          AG: "1",
          AI: "1",
          AL: "355",
          AM: "374",
          AO: "244",
          AR: "54",
          AT: "43",
          AU: "61",
          AW: "297",
          AX: "358",
          AZ: "994",
          BA: "387",
          BB: "1",
          BD: "880",
          BE: "32",
          BF: "226",
          BG: "359",
          BH: "973",
          BI: "257",
          BJ: "229",
          BM: "1",
          BN: "673",
          BO: "591",
          BR: "55",
          BS: "1",
          BT: "975",
          BW: "267",
          BY: "375",
          BZ: "501",
          CA: "1",
          CD: "243",
          CF: "236",
          CG: "242",
          CH: "41",
          CI: "225",
          CL: "56",
          CM: "237",
          CN: "86",
          CO: "57",
          CR: "506",
          CU: "53",
          CV: "238",
          CY: "357",
          CW: "599",
          CZ: "420",
          DE: "49",
          DJ: "253",
          DK: "45",
          DM: "1",
          DO: "1",
          DZ: "213",
          EC: "593",
          EE: "372",
          EG: "20",
          ER: "291",
          ES: "34",
          ET: "251",
          FI: "358",
          FJ: "679",
          FK: "500",
          FM: "691",
          FO: "298",
          FR: "33",
          GA: "241",
          GB: "44",
          GD: "1",
          GE: "995",
          GG: "44",
          GH: "233",
          GI: "350",
          GM: "220",
          GN: "224",
          GP: "590",
          GQ: "240",
          GR: "30",
          GT: "502",
          GW: "245",
          GY: "592",
          HK: "852",
          HN: "504",
          HR: "385",
          HT: "509",
          HU: "36",
          ID: "62",
          IE: "353",
          IL: "972",
          IM: "44",
          IN: "91",
          IQ: "964",
          IR: "98",
          IS: "354",
          IT: "39",
          JE: "44",
          JM: "1",
          JO: "962",
          JP: "81",
          KE: "254",
          KG: "996",
          KH: "855",
          KM: "269",
          KN: "1",
          KP: "850",
          KR: "82",
          KW: "965",
          KY: "1",
          KZ: "7",
          LA: "856",
          LB: "961",
          LC: "1",
          LI: "423",
          LK: "94",
          LR: "231",
          LS: "266",
          LT: "370",
          LU: "352",
          LV: "371",
          LY: "218",
          MA: "212",
          MC: "377",
          MD: "373",
          ME: "382",
          MG: "261",
          MK: "389",
          ML: "223",
          MM: "95",
          MN: "976",
          MO: "853",
          MQ: "596",
          MR: "222",
          MS: "1",
          MT: "356",
          MU: "230",
          MV: "960",
          MW: "265",
          MX: "52",
          MY: "60",
          MZ: "258",
          NA: "264",
          NE: "227",
          NG: "234",
          NI: "505",
          NL: "31",
          NO: "47",
          NP: "977",
          NZ: "64",
          OM: "968",
          PA: "507",
          PE: "51",
          PF: "689",
          PG: "675",
          PH: "63",
          PK: "92",
          PL: "48",
          PR: "1",
          PS: "970",
          PT: "351",
          PW: "680",
          PY: "595",
          QA: "974",
          RE: "262",
          RO: "40",
          RS: "381",
          RU: "7",
          RW: "250",
          SA: "966",
          SB: "677",
          SC: "248",
          SD: "249",
          SE: "46",
          SG: "65",
          SH: "290",
          SI: "386",
          SK: "421",
          SL: "232",
          SM: "378",
          SN: "221",
          SO: "252",
          SR: "597",
          ST: "239",
          SV: "503",
          SY: "963",
          SZ: "268",
          TC: "1",
          TD: "235",
          TG: "228",
          TH: "66",
          TJ: "992",
          TL: "670",
          TM: "993",
          TN: "216",
          TO: "676",
          TR: "90",
          TT: "1",
          TW: "886",
          TZ: "255",
          UA: "380",
          UG: "256",
          US: "1",
          UY: "598",
          UZ: "998",
          VC: "1",
          VE: "58",
          VG: "1",
          VN: "84",
          VU: "678",
          WS: "685",
          YE: "967",
          ZA: "27",
          ZM: "260",
          ZW: "263",
        },
        o = function (e) {
          return r[e] || "";
        },
        a = function (e, t) {
          return t.replace("+".concat(o(e)), "");
        },
        i = function () {
          return Object.keys(r);
        };
    },
    628: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return x;
      }),
        n.d(t, "a", function () {
          return I;
        });
      n(25), n(66), n(108);
      var r = n(2),
        o = n.n(r),
        a = n(87),
        i = n.n(a),
        c = (n(169), n(112)),
        u = n.n(c),
        s = n(463),
        l = n(493),
        d = n(93),
        p = n(10),
        f = n(27),
        b = n(3),
        m = n(469),
        h = n(538),
        v = n(536),
        g = n(537);
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var j = i.a.mark(I),
        w = i.a.mark(P),
        k = i.a.mark(_),
        x = function () {
          var e = window.localStorage.getItem("submissions") || "[]";
          return JSON.parse(e);
        },
        C = function (e) {
          window.localStorage.setItem("submissions", JSON.stringify(e));
        },
        E = function () {
          var e = x(),
            t = e.shift();
          return C(e), t;
        },
        S = function (e) {
          return C([e].concat(u()(x())));
        };
      function I() {
        var e,
          t = arguments;
        return i.a.wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  (e = t.length > 0 && void 0 !== t[0] ? t[0] : 1e3),
                  (n.next = 3),
                  Object(s.f)(v.a)
                );
              case 3:
                return (n.next = 5), Object(s.f)(g.a);
              case 5:
                return (n.next = 7), Object(s.f)(_, e);
              case 7:
                return (n.next = 9), Object(s.f)(P);
              case 9:
              case "end":
                return n.stop();
            }
        }, j);
      }
      function P() {
        var e, t, n;
        return i.a.wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (r.next = 3), Object(s.k)(p.H);
              case 3:
                return (r.next = 5), Object(s.i)(m.i);
              case 5:
                return (e = r.sent), (r.next = 8), Object(s.i)(f.c);
              case 8:
                return (t = r.sent), (r.next = 11), Object(s.i)(b.L);
              case 11:
                return (
                  (n = r.sent),
                  (o = {
                    formId: t,
                    landingId: null,
                    landingAt: null,
                    values: e,
                    outcome: n,
                  }),
                  C([].concat(u()(x()), [o])),
                  (r.next = 16),
                  Object(s.g)(Object(d.e)())
                );
              case 16:
                return (r.next = 18), Object(s.b)(h.a);
              case 18:
                r.next = 0;
                break;
              case 20:
              case "end":
                return r.stop();
            }
          var o;
        }, w);
      }
      var T = function (e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      };
      function _(e) {
        var t, n, r;
        return i.a.wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (!window.navigator.onLine) {
                    o.next = 17;
                    break;
                  }
                  if (!(t = E())) {
                    o.next = 17;
                    break;
                  }
                  return (o.prev = 4), (o.next = 7), Object(s.b)(l.c, t.formId);
                case 7:
                  return (
                    (n = o.sent),
                    (r = Object(h.b)(t.formId, n)),
                    (o.next = 11),
                    Object(s.b)(
                      l.d,
                      y(
                        y({}, t),
                        {},
                        { landingId: r.token, landingAt: r.landed_at }
                      )
                    )
                  );
                case 11:
                  return o.abrupt("continue", 0);
                case 14:
                  (o.prev = 14), (o.t0 = o.catch(4)), S(t);
                case 17:
                  return (o.next = 19), T(e);
                case 19:
                  o.next = 0;
                  break;
                case 21:
                case "end":
                  return o.stop();
              }
          },
          k,
          null,
          [[4, 14]]
        );
      }
    },
    729: function (e, t) {},
    786: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return b;
        });
      var r = n(11),
        o = n.n(r),
        a = n(0),
        i = n.n(a),
        c = n(4),
        u = n(7),
        s = n(472),
        l = n(435),
        d = n(437),
        p = n(628),
        f = c.d.div.withConfig({
          displayName: "offline-mode-badge__Root",
          componentId: "sc-1qefiu2-0",
        })(
          [
            "position:fixed;display:flex;align-items:center;justify-content:center;background:",
            ";color:",
            ";border-radius:3px;height:32px;width:32px;right:8px;top:8px;",
          ],
          function (e) {
            return e.backgroundColor;
          },
          function (e) {
            return e.contentColor;
          }
        );
      function b(e) {
        var t = e.theme,
          n = Object(a.useState)(window.navigator.onLine),
          r = o()(n, 2),
          c = r[0],
          b = r[1],
          m = Object(a.useState)(Object(p.b)().length),
          h = o()(m, 2),
          v = h[0],
          g = h[1];
        return (
          Object(a.useEffect)(function () {
            var e = function () {
              b(window.navigator.onLine);
            };
            return (
              window.addEventListener("online", e),
              window.addEventListener("offline", e),
              function () {
                window.removeEventListener("online", e),
                  window.removeEventListener("offline", e);
              }
            );
          }, []),
          Object(a.useEffect)(function () {
            var e = setInterval(function () {
              g(Object(p.b)().length);
            }, 1e3);
            return function () {
              clearInterval(e);
            };
          }, []),
          window.navigator.serviceWorker.controller
            ? 0 === v
              ? i.a.createElement(
                  f,
                  {
                    backgroundColor: t.colors.button,
                    contentColor: Object(u.g)(t.colors.button),
                  },
                  i.a.createElement(l.a, {
                    svg: s.a,
                    color: Object(u.g)(t.colors.button),
                  })
                )
              : c && v > 0
              ? i.a.createElement(
                  f,
                  {
                    backgroundColor: t.colors.button,
                    contentColor: Object(u.g)(t.colors.button),
                  },
                  i.a.createElement(d.a, {
                    color: Object(u.g)(t.colors.button),
                  })
                )
              : i.a.createElement(
                  f,
                  {
                    backgroundColor: t.colors.button,
                    contentColor: Object(u.g)(t.colors.button),
                  },
                  v
                )
            : null
        );
      }
    },
    796: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(52),
        o = n(7),
        a = n(11),
        i = n.n(a),
        c = n(0),
        u = n.n(c),
        s = n(4),
        l = n(1),
        d = n.n(l),
        p = n(455),
        f = n(28),
        b = n(93),
        m = (n(36), n(67), n(35), n(21), n(40), n(300)),
        h = n(302),
        v = n(165),
        g = n(8),
        O = n(56),
        y = n(244),
        j = n(2),
        w = n.n(j),
        k = n(217),
        x = n.n(k),
        C = n(220),
        E = (n(109), n(18)),
        S = n.n(E),
        I = n(6),
        P = n(224),
        T = n(171),
        _ = n(50),
        R = n(12),
        A = n.n(R),
        D = n(54),
        B = n(460),
        F = n(776),
        N = n(64),
        L = n(307),
        M = n(104),
        V = n(5),
        H = n(225),
        z = u.a.createContext(!1),
        K = z.Consumer,
        U = function (e) {
          return function (t) {
            return u.a.createElement(K, null, function (n) {
              return u.a.createElement(e, A()({}, t, { isBlockChanging: n }));
            });
          };
        },
        q = z,
        W = n(239);
      function Y(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.boundingClientRect,
          r = void 0 === n ? {} : n,
          o = t.onlyTop,
          a = void 0 !== o && o,
          i = t.offsetTop,
          c = void 0 === i ? 0 : i,
          u = t.offsetBottom,
          s = void 0 === u ? 0 : u;
        if (!e || "function" != typeof e.getBoundingClientRect) return !1;
        var l = e.getBoundingClientRect(),
          d = {
            height:
              r.height ||
              window.innerHeight ||
              document.documentElement.clientHeight,
            top: r.top || 0,
          },
          p = l.top >= d.top + c,
          f = l.bottom <= d.height - s;
        return a ? p : p && f;
      }
      var G = function () {
          return "MacIntel" === navigator.platform;
        },
        Q = n(53),
        J = n(132),
        Z = n(84),
        $ = function (e) {
          var t = e.color,
            n = e.warningText,
            r = e.actionText;
          return u.a.createElement(
            Z.b,
            { color: t, size: "sizeN1", useDefaultFont: !0, dimmed: !0 },
            n,
            " - ",
            u.a.createElement(
              "a",
              {
                href: "https://www.typeform.com/help/report-abuse",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              r
            )
          );
        },
        X = n(552),
        ee = [
          "label.retrySubmit.first",
          "label.retrySubmit.second",
          "label.retrySubmit.third",
          "label.retrySubmit.fourth",
        ],
        te = function (e) {
          var t = e.count,
            n = e.timeout,
            r = e.t;
          return 0 === n
            ? u.a.createElement("div", null, r("label.retryLink.retrying"))
            : u.a.createElement(
                c.Fragment,
                null,
                u.a.createElement(
                  "div",
                  { "data-qa": "retry-count", "aria-hidden": "true" },
                  r(
                    (function (e) {
                      var t = ee.length;
                      return e > t ? ee[t - 1] : ee[e - J.g];
                    })(t),
                    { timeout: n }
                  )
                ),
                3 === n
                  ? u.a.createElement(
                      X.b,
                      { "aria-live": "assertive" },
                      r("label.retryLink.counter", { timeout: n })
                    )
                  : null
              );
        };
      te.defaultProps = {
        t: function (e) {
          return e;
        },
      };
      var ne = Object(T.a)(te),
        re = function (e) {
          var t = e.centered,
            n = e.color,
            r = e.count,
            o = e.messageKey,
            a = e.t,
            i = e.timeout;
          return u.a.createElement(
            Z.b,
            {
              role: "timer",
              "aria-live": "assertive",
              size: "sizeN1",
              color: n,
              useDefaultFont: !0,
              align: t ? "center" : "left",
            },
            Object(Q.a)(a(o)),
            u.a.createElement(ne, { count: r, timeout: i })
          );
        };
      re.defaultProps = {
        messageKey: "label.warning.slowSubmission",
        t: function (e) {
          return e;
        },
      };
      var oe = Object(T.a)(re),
        ae = (n(25), n(246)),
        ie = n.n(ae),
        ce = n(472),
        ue = n(138),
        se = function (e) {
          var t = e.ariaDescribedBy,
            n = e.backgroundColor,
            r = e.buttonColor,
            o = e.buttonContentColor,
            a = e.centered,
            i = e.disabled,
            c = e.helperColor,
            s = e.helperText,
            l = e.hideIcon,
            d = e.label,
            p = e.onClick,
            f = e.isVisible,
            b = e.buttonRef,
            m = e.t,
            h = e.hideHelperText,
            v = Object(ue.useIsTouch)(),
            g = f ? "-visible" : "";
          return u.a.createElement(ie.a, {
            ariaDescribedBy: t,
            centered: a,
            color: r,
            contentColor: o,
            content: Object(Q.a)(m(d)),
            contextBackgroundColor: n,
            dataQa: "ok-button".concat(g, " deep-purple-ok-button").concat(g),
            disabled: i,
            helperColor: c,
            helperText: v ? null : Object(Q.a)(m(s)),
            iconSvg: l ? null : ce.a,
            onClick: p,
            size: "medium",
            tabIndex: f ? 0 : -1,
            buttonRef: b,
            hideHelperText: h,
          });
        };
      se.defaultProps = {
        backgroundColor: o.b,
        buttonColor: o.b,
        helperColor: o.b,
        helperText: "label.buttonHint.default",
        hideHelperText: !1,
        hideIcon: !1,
        isVisible: !1,
        label: "label.button.ok",
        t: function (e) {
          return e;
        },
      };
      var le = se,
        de = function (e) {
          var t = e.ariaDescribedBy,
            n = e.centered,
            r = e.disabled,
            a = e.fullWidth,
            i = e.helperText,
            c = e.isComplete,
            s = e.isLivePreview,
            l = e.isPaymentBlockAnswered,
            d = e.isSubmitting,
            p = e.isVisible,
            f = e.onClick,
            b = e.price,
            m = e.size,
            h = e.t,
            v = e.theme,
            g = e.buttonRef,
            O = e.hideHelperText,
            y = h("label.button.submit");
          l && (y = h("label.button.submitAndPay", { price: b }));
          var j = v.colors.button;
          return u.a.createElement(ie.a, {
            ariaDescribedBy: t,
            buttonRef: g,
            centered: n,
            color: j,
            contentColor: v.colors.buttonContent,
            content: y,
            contextBackgroundColor: v.colors.background,
            dataQa: "submit-button deep-purple-submit-button",
            disabled: r || (!s && (d || c)),
            fullWidth: a,
            helperColor: v.colors.primary,
            helperText: Object(o.n)() || n ? "" : Object(Q.a)(h(i)),
            isSpinning: !s && d,
            isTransparent: v.hasTransparentButton,
            onClick: f,
            size: m,
            tabIndex: p ? 0 : -1,
            hideHelperText: O,
          });
        };
      de.defaultProps = {
        centered: !1,
        helperText: "label.buttonHint.default",
        size: "large",
        theme: {
          colors: { backgroundColor: o.b, button: o.b, primary: o.b },
          hasTransparentButton: !1,
        },
        t: function (e) {
          return e;
        },
      };
      Object(T.a)(de);
      var pe = n(506),
        fe = n.n(pe),
        be = s.d.div.withConfig({
          displayName: "ErrorMessage__ErrorMessageWrapper",
          componentId: "sc-1wltuxw-0",
        })(
          ["position:absolute;width:100%;", ";", ""],
          function (e) {
            return e.centered && "text-align: center";
          },
          function (e) {
            return (
              e.isErrorIgnorable &&
              "\n    position: static;\n    margin-bottom: ".concat(
                2 * V.t,
                "px;\n  "
              )
            );
          }
        ),
        me = function (e) {
          var t = e.centered,
            n = e.errorMessageRef,
            r = e.id,
            o = e.message,
            a = e.visible,
            i = e.isErrorIgnorable;
          return a
            ? u.a.createElement(
                p.b,
                { isVisible: !0, type: "slideUp" },
                u.a.createElement(
                  be,
                  { centered: t, isErrorIgnorable: i },
                  u.a.createElement(fe.a, {
                    dataQa: "error-message-visible",
                    id: r,
                    message: o,
                    errorMessageRef: n,
                    role: "alert",
                    visible: !0,
                  })
                )
              )
            : null;
        };
      me.defaultProps = { visible: !1 };
      var he = me;
      function ve(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ve(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Oe = s.d.div.withConfig({
          displayName: "block-footer__Root",
          componentId: "gb8zj2-0",
        })(["position:relative;"]),
        ye = s.d.div.withConfig({
          displayName: "block-footer__SubmitButtonFooter",
          componentId: "gb8zj2-1",
        })(["width:100%;"]),
        je = G() ? "label.buttonHint.submit-mac" : "label.buttonHint.submit",
        we = function (e) {
          var t,
            n = e.answer,
            r = e.application,
            a = e.ariaDescribedBy,
            s = e.blockError,
            l = e.blockRef,
            d = e.buttonText,
            f = e.errorMessageId,
            b = e.errorMessageRef,
            m = e.hasFormFooter,
            h = e.hideHelperText,
            O = e.hideIcon,
            y = e.isActive,
            j = e.isAnimated,
            w = e.isButtonFullWidth,
            k = e.isButtonTypeSubmit,
            x = e.isButtonVisible,
            C = e.isErrorMessageVisible,
            E = e.isLivePreview,
            S = e.isPaymentBlockAnswered,
            I = e.isSubmitButtonVisibilityForced,
            P = e.layout,
            T = e.layoutItemsSize,
            _ = e.onClick,
            R = e.onFocusLost,
            A = e.onRequireStickyFooter,
            D = e.price,
            B = e.showPhishingMessage,
            F = e.submit,
            z = e.submitErrorMessageId,
            K = e.submitErrorMessageKey,
            U = e.submitForm,
            G = e.t,
            Z = e.theme,
            X = e.trackInlineSubmit,
            ee = e.isErrorIgnorable,
            te = F.isComplete,
            ne = F.isSubmitting,
            re = F.retry,
            ae = Object(c.useRef)(null),
            ie = Object(c.useContext)(q),
            ce = Object(W.b)(l),
            ue = Object(c.useState)(!1),
            se = i()(ue, 2),
            pe = se[0],
            fe = se[1],
            be = Object(v.c)(),
            me =
              Object(g.h)(
                null === (t = Z.fields) || void 0 === t ? void 0 : t.alignment,
                P.type
              ) === g.e.CENTER,
            ve = w || me,
            we = Object(c.useCallback)(
              function () {
                if (ae.current) {
                  var e = Y(
                      ae.current,
                      ge(
                        ge({}, T),
                        {},
                        { offsetBottom: m ? 0 : -ae.current.offsetHeight }
                      )
                    ),
                    t =
                      !ie &&
                      x &&
                      y &&
                      !e &&
                      (!r || ("sm" === be && r && !!n.length));
                  A(l, t);
                }
              },
              [n, r, be, ie, x, y, l, ae, T, A]
            );
          Object(c.useEffect)(
            function () {
              var e,
                t = function () {
                  e = setTimeout(we, 200);
                };
              return (
                window.addEventListener("resize", t),
                function () {
                  clearTimeout(e), window.removeEventListener("resize", t);
                }
              );
            },
            [we]
          ),
            Object(H.a)(
              function () {
                we();
              },
              [we, ce]
            ),
            Object(c.useEffect)(function () {
              var e = setTimeout(function () {
                return we();
              }, 1e3);
              return function () {
                return clearTimeout(e);
              };
            }, []),
            Object(c.useEffect)(
              function () {
                var e = null;
                return (
                  x
                    ? (e = setTimeout(function () {
                        fe(k);
                      }, 200))
                    : fe(!1),
                  function () {
                    return clearTimeout(e);
                  }
                );
              },
              [k, x]
            ),
            Object(c.useEffect)(
              function () {
                x && k && X(l);
              },
              [x, k]
            );
          var ke = x && k,
            xe = x && !k,
            Ce = Object(c.useRef)(),
            Ee = Object(c.useRef)();
          Object(c.useEffect)(
            function () {
              var e = null;
              return (
                I &&
                  Object(o.n)() &&
                  (e = setTimeout(function () {
                    return Ee.current.focus();
                  }, J.d + 100)),
                function () {
                  return clearTimeout(e);
                }
              );
            },
            [I]
          );
          var Se = Object(c.useRef)(ke),
            Ie = Object(c.useRef)(xe),
            Pe = Ee.current === document.activeElement,
            Te = Ce.current === document.activeElement,
            _e = Se.current && !ke && Pe,
            Re = Ie.current && !xe && Te;
          return (
            ie || (!_e && !Re) || R(),
            (Se.current = ke),
            (Ie.current = xe),
            u.a.createElement(
              Oe,
              null,
              u.a.createElement(
                L.a,
                { top: V.p.topBlockFooter },
                u.a.createElement(he, {
                  centered: me,
                  id: f,
                  errorMessageRef: b,
                  message: Object(Q.a)(
                    G(
                      null == s ? void 0 : s.label,
                      null == s ? void 0 : s.getPipingValues()
                    )
                  ),
                  visible: C,
                  isErrorIgnorable: ee,
                }),
                u.a.createElement(
                  "div",
                  { ref: ae, "data-qa-button-visible": !!x },
                  ke &&
                    u.a.createElement(
                      ye,
                      null,
                      u.a.createElement(
                        p.b,
                        {
                          type: "slideUp",
                          isVisible: !!ke,
                          delay: x && !pe ? J.d : 0,
                          duration: j ? J.d : 0,
                        },
                        u.a.createElement(
                          N.e,
                          { position: ve ? "center" : "left" },
                          u.a.createElement(de, {
                            ariaDescribedBy: a,
                            centered: ve,
                            fullWidth: w,
                            helperText: je,
                            isComplete: te,
                            disabled: !ke,
                            isLivePreview: E,
                            isPaymentBlockAnswered: S,
                            isSubmitting: ne,
                            isVisible: x,
                            onClick: U,
                            price: D,
                            size: "medium",
                            t: G,
                            theme: Z,
                            buttonRef: Ee,
                            hideHelperText: h,
                          })
                        ),
                        u.a.createElement(
                          M.a,
                          { top: 2 },
                          pe &&
                            B &&
                            !re.showMessage &&
                            !K &&
                            u.a.createElement(
                              N.e,
                              { position: ve ? "center" : "left" },
                              u.a.createElement($, {
                                color: Z.colors.primary,
                                warningText: G("label.warning.phishing"),
                                actionText: G("label.action.phishing"),
                              })
                            ),
                          re.showMessage &&
                            u.a.createElement(oe, {
                              centered: me,
                              color: Z.colors.primary,
                              count: re.count - 1,
                              timeout: re.timeout,
                            }),
                          !!K &&
                            u.a.createElement(he, {
                              centered: me,
                              id: z,
                              message: Object(Q.a)(G(K)),
                              errorMessageRef: b,
                              visible: !!K,
                            })
                        )
                      )
                    ),
                  xe &&
                    u.a.createElement(
                      p.b,
                      {
                        type: "slideUp",
                        isVisible: !!xe,
                        delay: x && pe ? J.d : 0,
                        duration: j ? J.d : 0,
                      },
                      u.a.createElement(le, {
                        ariaDescribedBy: a,
                        backgroundColor: Z.colors.background,
                        buttonColor: Z.colors.button,
                        buttonContentColor: Z.colors.buttonContent,
                        centered: me,
                        helperColor: Z.colors.primary,
                        helperText: "label.buttonHint.default",
                        hideIcon: O,
                        disabled: !xe,
                        isVisible: x,
                        label: d,
                        onClick: _,
                        t: G,
                        buttonRef: Ce,
                        hideHelperText: h,
                      })
                    )
                )
              )
            )
          );
        },
        ke = Object(T.a)(function (e) {
          return u.a.createElement(v.a, null, function (t) {
            var n = t.width < V.n.md && !e.isLivePreview;
            return u.a.createElement(we, A()({ isButtonFullWidth: n }, e));
          });
        });
      we.defaultProps = {
        hideHelperText: !1,
        isAnimated: !0,
        isErrorIgnorable: !1,
        showPhishingMessage: !0,
        submit: { retry: {}, isComplete: !1, isSubmitting: !1 },
        onRequireStickyFooter: _.a,
        submitForm: _.a,
        onFocusLost: _.a,
        trackInlineSubmit: _.a,
        theme: { colors: { primary: o.b, background: o.b } },
        t: function (e) {
          return e;
        },
      };
      var xe = n(333),
        Ce = n(175),
        Ee = n(3),
        Se = n(27),
        Ie = n(214),
        Pe = n(19),
        Te = n(469),
        _e = n(467),
        Re = n(60),
        Ae = { onRequireStickyFooter: xe.a, trackInlineSubmit: Ce.e },
        De = Object(r.b)(function (e, t) {
          var n = t.blockRef,
            r = t.errorMessageId,
            o = t.errorMessageRef,
            a = t.hideHelperText,
            i = t.validationError,
            c = t.hideButton,
            u = t.isErrorMessageVisible,
            s = t.isErrorIgnorable,
            l = Object(Ee.p)(e, n),
            d = Object(Pe.h)(e, n),
            p = Object(Se.g)(e),
            f = d || Object(Se.s)(e, n);
          return {
            errorMessageId: r,
            errorMessageRef: o,
            hideHelperText:
              a || !(Object(D.b)(l) || Object(D.f)(l) || !Object(D.d)(l.type)),
            isActive: Object(Ee.B)(e, n),
            isButtonTypeSubmit: Object(Se.h)(e, n),
            isErrorMessageVisible: u,
            isLivePreview: Object(Se.m)(e),
            isSubmitButtonVisibilityForced: Object(Se.b)(e),
            isPaymentBlockAnswered: Object(Ie.m)(e),
            isButtonVisible: (!u || s) && !c && !p && f,
            price: Object(Ee.N)(e),
            showPhishingMessage: Object(_e.d)(e),
            submit: Object(Ee.S)(e),
            submitErrorMessageId: "".concat(n, "-submission-error-message"),
            submitErrorMessageKey: Object(Te.h)(e),
            theme: Object(Re.h)(e),
            validationError: i,
          };
        }, Ae)(ke),
        Be = n(677),
        Fe = n(669),
        Ne = n(545),
        Le = n.n(Ne),
        Me = n(170),
        Ve = n.n(Me),
        He = n(500),
        ze = n(435);
      n(44), n(45);
      function Ke() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          t.forEach(function (t) {
            t && ("function" != typeof t ? (t.current = e) : t(e));
          });
        };
      }
      var Ue = function (e) {
        var t = e.children,
          n = e.htmlFor,
          r = e.id,
          o = e.htmlTag,
          a = e.required,
          i = e.t,
          c = ["div", "span", "legend"].includes(o),
          s = a && u.a.createElement(X.b, null, i("a11y.label.required"));
        return u.a.createElement(
          Ve.a,
          {
            "aria-hidden": "legend" === o ? "true" : null,
            type: V.i.blockTitle,
            htmlTag: "legend" === o ? "span" : o,
            htmlFor: "label" === o ? n : null,
            "data-qa": "block-title deep-purple-block-title",
            role: c ? "heading" : null,
            "aria-level": c ? 2 : null,
            id: r,
          },
          t,
          s
        );
      };
      Ue.defaultProps = { htmlTag: "span", required: !1 };
      var qe = Ue,
        We = (n(527), n(670)),
        Ye = n.n(We),
        Ge = n(178),
        Qe = n(117),
        Je = Qe.a ? 0 : 100,
        Ze = s.d.div.withConfig({
          displayName: "block-scroller__Root",
          componentId: "sc-23jz1-0",
        })([
          "width:100%;height:100%;overflow-x:hidden;overflow-y:auto;&:focus{outline:none;}",
        ]),
        $e = s.d.div.withConfig({
          displayName: "block-scroller__Positioner",
          componentId: "sc-23jz1-1",
        })(
          [
            "width:100%;min-height:100%;",
            " display:flex;flex-direction:column;justify-content:center;",
          ],
          Object(o.m)() && "height: 100%;"
        ),
        Xe = function (e) {
          return !!e && e.scrollTop + 30 >= e.scrollHeight - e.clientHeight;
        },
        et = function (e) {
          return !!e && e.scrollTop - 30 <= 0;
        },
        tt = function (e) {
          var t = e.blockRef,
            n = e.children,
            r = e.endAutoScroll,
            o = e.isActive,
            a = e.onChangeCanSwipe,
            s = e.onKeyDown,
            l = e.onRequireStickyHeader,
            d = e.onScroll,
            p = e.isScrollNearTop,
            f = e.scrolling,
            b = e.scrollerRef,
            m = Object(c.useRef)();
          b && (m = b);
          var h = Object(c.useRef)(),
            v = Object(c.useState)(null),
            g = i()(v, 2),
            O = g[0],
            y = g[1],
            j = Object(c.useContext)(q),
            w = Object(W.c)(t),
            k = Object(c.useCallback)(
              Object(Ge.debounce)(Je, function () {
                if (m.current) {
                  o &&
                    (a({ next: Xe(m.current), previous: et(m.current) }), d());
                  var e = m.current.scrollTop;
                  w(e), e > 88 && p ? l(!0) : e <= 88 && !p && l(!1);
                }
              }),
              [o, p, m.current, a, d]
            );
          return (
            Object(c.useEffect)(
              function () {
                o ||
                  j ||
                  (!et(m.current) && m.current && (m.current.scrollTop = 0));
              },
              [j, o]
            ),
            Object(c.useEffect)(
              function () {
                o && a({ next: Xe(m.current), previous: et(m.current) });
              },
              [o]
            ),
            Object(c.useEffect)(
              function () {
                if (
                  o &&
                  f &&
                  "recenter" === f.scrollType &&
                  "bottom" === f.anchor &&
                  m.current
                ) {
                  var e = Qe.a ? 0 : 200;
                  Ye()(
                    m.current,
                    "scrollTop",
                    m.current.scrollHeight - m.current.clientHeight,
                    e,
                    "easeOutCubic",
                    r
                  );
                }
              },
              [f]
            ),
            Object(c.useEffect)(function () {
              var e = m.current,
                t = h.current;
              if (e && t) {
                var n = t.clientHeight > e.clientHeight;
                0 !== O && n ? y(0) : null === O || n || y(null);
              }
            }),
            u.a.createElement(
              Ze,
              {
                "data-qa": "block-scroller",
                onScroll: k,
                onKeyDown: s,
                ref: m,
                tabIndex: O,
              },
              u.a.createElement($e, { ref: h }, n)
            )
          );
        };
      tt.defaultProps = {
        endAutoScroll: _.a,
        onKeyDown: _.a,
        onChangeCanSwipe: _.a,
        onScroll: _.a,
      };
      var nt = tt,
        rt =
          "\n  a[href]:not([tabindex='-1']),\n  area[href]:not([tabindex='-1']),\n  input:not([disabled]):not([tabindex='-1']),\n  select:not([disabled]):not([tabindex='-1']),\n  textarea:not([disabled]):not([tabindex='-1']),\n  button:not([disabled]):not([tabindex='-1']),\n  iframe:not([tabindex='-1']),\n  [tabindex]:not([disabled]):not([tabindex='-1']),\n  [contentEditable=true]:not([tabindex='-1'])\n  ";
      var ot = function (e, t) {
          var n = (function (e) {
              return (
                "undefined" != typeof window &&
                "undefined" != typeof document &&
                !(!e || "function" != typeof e.contains) &&
                (e === document.activeElement ||
                  e.contains(document.activeElement))
              );
            })(e),
            r = function () {
              if (e && !n && t)
                if (Object(o.n)()) document.activeElement.blur();
                else {
                  var r = (function (e) {
                    return e.matches(rt) ? e : e.querySelector(rt);
                  })(e);
                  r ? r.focus() : document.body.focus();
                }
            };
          Object(c.useEffect)(
            function () {
              var e = setTimeout(r, J.c);
              return function () {
                return clearTimeout(e);
              };
            },
            [e, t]
          );
        },
        at = u.a.forwardRef(function (e, t) {
          var n,
            r,
            a,
            s,
            l,
            d,
            p,
            f,
            b = e.application,
            m = e.attachment,
            h = e.isBlockListVisible,
            O = e.blockRef,
            y = e.childOfGroup,
            j = e.children,
            w = e.description,
            k = e.encryptable,
            x = e.endAutoScroll,
            C = e.hasBranding,
            E = e.hasNavigationArrows,
            S = e.hasProgress,
            I = e.isActive,
            P = e.isAnswered,
            T = e.isScrollNearTop,
            _ = e.isShaking,
            R = e.isFocused,
            A = e.layout,
            D = e.listIndexText,
            F = e.onChangeCanSwipe,
            L = e.onKeyDown,
            M = e.onRequireStickyHeader,
            H = e.onScroll,
            z = e.scrolling,
            K = e.t,
            U = e.theme,
            q = e.titleLabelId,
            W = e.titleFor,
            Y = e.titleTag,
            G = e.titleText,
            Q = e.titleCounterIcon,
            J = e.type,
            $ = e.uniqueId,
            X = e.validations,
            ee = e.isVideoPlaying,
            te = e.onVideoClick,
            ne = e.scrollerRef,
            re = Object(c.useRef)(null),
            oe = Object(c.useState)(0),
            ae = i()(oe, 2),
            ie = ae[0],
            ce = ae[1],
            ue = Object(v.c)(),
            se = "legend" === Y,
            le = A.type,
            de = A.placement;
          b && ((le = g.d.SPLIT), (de = g.c.RIGHT));
          var pe = le === g.d.STACK ? m : A.attachment,
            fe =
              null !==
                (n =
                  null == pe || null === (r = pe.properties) || void 0 === r
                    ? void 0
                    : r.focalPoint) && void 0 !== n
                ? n
                : g.a,
            be = Object(g.h)(
              null === (a = U.fields) || void 0 === a ? void 0 : a.alignment,
              le
            );
          Object(c.useEffect)(
            function () {
              if (!re.current) return null;
              ce(re.current.clientHeight);
              var e = function () {
                re.current && ce(re.current.clientHeight);
              };
              return (
                window.addEventListener("resize", e, !0),
                function () {
                  return window.removeEventListener("resize", e, !0);
                }
              );
            },
            [
              null === (s = re.current) || void 0 === s
                ? void 0
                : s.clientHeight,
            ]
          );
          var me = "header-counter-".concat(O);
          ot(re.current, R);
          var he = h && (I || !Object(o.n)()),
            ve = y && D ? "".concat(D, ".") : D;
          return u.a.createElement(
            Fe.a,
            {
              layoutType: le,
              breakpoint: ue,
              dataQa: "blocktype-"
                .concat(J, " deep-purple-blocktype-")
                .concat(J),
              id: O,
              isActive: I,
              isAnswered: P,
              isShaking: I && _,
              isVisible: he,
              ref: Ke(t, re),
              layoutPlacement: de,
            },
            u.a.createElement(
              nt,
              {
                blockRef: O,
                endAutoScroll: x,
                scrollerRef: ne,
                isActive: I,
                onChangeCanSwipe: F,
                onRequireStickyHeader: M,
                onScroll: H,
                onKeyDown: L,
                isScrollNearTop: T,
                scrolling: z,
              },
              u.a.createElement(
                Be.a,
                {
                  application: b,
                  attachmentFocalPoint: fe,
                  attachmentHref: null == pe ? void 0 : pe.href,
                  attachmentType: null == pe ? void 0 : pe.type,
                  attachmentScale: null == pe ? void 0 : pe.scale,
                  attachmentAlt:
                    null == pe || null === (l = pe.properties) || void 0 === l
                      ? void 0
                      : l.description,
                  breakpoint: ue,
                  description:
                    w &&
                    u.a.createElement(
                      Ve.a,
                      {
                        align: be,
                        "aria-hidden": se ? "true" : null,
                        type: V.i.blockDescription,
                        color:
                          null == U || null === (d = U.colors) || void 0 === d
                            ? void 0
                            : d.primary,
                        htmlTag: "p",
                        dataQa: "block-description",
                        id: Object(B.b)($),
                      },
                      w
                    ),
                  hasBranding: C,
                  hasNavigationArrows: E,
                  hasProgress: S,
                  isActive: I,
                  isFieldset: se,
                  layoutType: le,
                  pexelsApiKey:
                    "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                  outerHeight: ie,
                  required: null == X ? void 0 : X.required,
                  textAlign: be,
                  title: u.a.createElement(Le.a, {
                    title: u.a.createElement(
                      qe,
                      {
                        required: null == X ? void 0 : X.required,
                        blockRef: O,
                        t: e.t,
                        id: q,
                        htmlFor: W,
                        htmlTag: Y,
                      },
                      G
                    ),
                    color:
                      null == U || null === (p = U.colors) || void 0 === p
                        ? void 0
                        : p.primary,
                    required: null == X ? void 0 : X.required,
                    counterId: me,
                    counterIcon: y && D ? null : Q,
                    counterColor:
                      null == U || null === (f = U.colors) || void 0 === f
                        ? void 0
                        : f.secondary,
                    counterContent: ve,
                    textAlign: be,
                  }),
                  counterContent: ve,
                  titleText: G,
                  descriptionText: w,
                  isVideoPlaying: ee,
                  onVideoClick: te,
                },
                k &&
                  u.a.createElement(
                    N.e,
                    { align: "center", space: 1 },
                    u.a.createElement(ze.a, {
                      color: U.colors.secondary,
                      position: "left",
                      svg: He.a,
                    }),
                    u.a.createElement(
                      Z.b,
                      { color: U.colors.secondary },
                      K("block.content.encrypted")
                    )
                  ),
                j
              )
            )
          );
        });
      (at.displayName = "BlockWrapper"),
        (at.defaultProps = {
          theme: { colors: { primary: o.b, secondary: o.b } },
          titleCounterIcon: Ne.COUNTER_ICONS.ARROW,
          validations: {},
          description: d.a.oneOfType([d.a.string, d.a.array]),
          onScroll: _.a,
        });
      var it = at,
        ct = ["INPUT", "TEXTAREA", "LI", "SELECT", "BUTTON"],
        ut = ["radio"],
        st = u.a.createContext();
      st.displayName = "GlobalEventListenerContext";
      var lt = function (e) {
          var t = e.areGlobalListenersDisabled,
            n = e.children,
            r = e.commonHandleKeydown,
            o = Object(c.useRef)(null);
          return (
            Object(c.useEffect)(
              function () {
                if (t) return function () {};
                var e = function (e) {
                  var t,
                    n = e.target.nodeName,
                    a =
                      (null === (t = e.target.attributes) || void 0 === t
                        ? void 0
                        : t.getNamedItem("role")) &&
                      e.target.attributes.getNamedItem("role").value,
                    i = e.target.hasAttribute("aria-haspopup"),
                    c = ct.includes(n) || ut.includes(a) || i;
                  if (!c) {
                    var u,
                      s =
                        null === (u = o.current) || void 0 === u
                          ? void 0
                          : u.onGlobalKeyDown;
                    s && s(e);
                  }
                  r(e, c);
                };
                return (
                  window.addEventListener("keydown", e),
                  function () {
                    window.removeEventListener("keydown", e);
                  }
                );
              },
              [t, r]
            ),
            u.a.createElement(
              st.Provider,
              {
                value: function (e) {
                  t || (o.current = { onGlobalKeyDown: e });
                },
              },
              n
            )
          );
        },
        dt = function (e, t) {
          var n = Object(c.useContext)(st);
          Object(c.useEffect)(
            function () {
              e && n(t);
            },
            [e, t]
          );
        },
        pt = st.Consumer;
      pt.displayName = "GlobalEventListenerContextConsumer";
      var ft = function (e) {
        return function (t) {
          return t.isLivePreview
            ? u.a.createElement(e, t)
            : u.a.createElement(pt, null, function (n) {
                return u.a.createElement(
                  e,
                  A()({}, t, { updateGlobalEventListenerRef: n })
                );
              });
        };
      };
      function bt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? bt(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : bt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ht = function (e) {
        var t = e.application,
          n = e.hasBranding,
          r = e.hasNavigationArrows,
          o = e.hasProgress,
          a = e.value,
          i = e.blockIndex,
          s = e.field,
          l = e.iframeUrl,
          d = e.isCommitted,
          p = e.isValid,
          f = e.layout,
          b = e.layoutItemsSize,
          m = e.language,
          h = e.onCommitAnswer,
          v = e.onStageAnswer,
          g = e.submitForm,
          O = e.theme,
          y = e.title,
          j = e.uniqueId,
          w = e.validationError,
          k = e.isActive,
          x = e.hasDescription,
          C = e.applicationInfo;
        dt(k, Object(c.useCallback)(_.a, []));
        var E = Object(B.c)(j),
          S = d && !p,
          I = mt(mt({}, s.validations), {}, { required: Object(D.g)(s) }),
          P = Object(B.a)({
            uniqueId: j,
            isErrorMessageVisible: S,
            hasDescription: x,
          }),
          T = Object(B.e)(j),
          R = n || r || o;
        return u.a.createElement(
          it,
          A()({}, e, {
            validations: I,
            titleText: y,
            titleLabelId: T,
            titleTag: "label",
          }),
          u.a.createElement(F.a, {
            isActive: k,
            answer: a,
            ariaDescribedBy: P,
            ariaLabelledBy: T,
            blockIndex: i,
            field: s,
            iframeUrl: l,
            locale: m,
            onChange: function (e) {
              v(s.ref, e);
            },
            theme: O,
            applicationInfo: C,
          }),
          u.a.createElement(De, {
            answer: a,
            application: t,
            blockError: w,
            blockRef: s.ref,
            errorMessageId: E,
            hasFormFooter: R,
            hideHelperText: !0,
            isErrorMessageVisible: S,
            layout: f,
            layoutItemsSize: b,
            onClick: function (e) {
              h(s.ref, e);
            },
            submitForm: g,
          })
        );
      };
      ht.defaultProps = {
        submitForm: _.a,
        theme: { colors: { secondary: o.b } },
      };
      var vt = ht,
        gt = (n(140), n(31), n(110), n(688)),
        Ot = n.n(gt),
        yt = n(133),
        jt = n(213),
        wt = function (e, t, n) {
          return e !== I.n ||
            Object(yt.k)(n) ||
            Object(yt.i)(n) ||
            Object(yt.l)(n)
            ? (e === I.n &&
                t &&
                t <= n.target.value.length &&
                !Object(yt.i)(n)) ||
              (e === I.w &&
                t &&
                t <= n.target.value.length &&
                !Object(yt.i)(n)) ||
              (e === I.k && t && t <= n.target.value.length && !Object(yt.i)(n))
              ? (n.preventDefault(),
                { blocked: !0, error: new jt.a("maxLength") })
              : { blocked: !1 }
            : (n.preventDefault(), { blocked: !0, error: new jt.f() });
        },
        kt = function (e, t) {
          var n = t.nativeEvent || t,
            r = Object(yt.p)([yt.c, yt.a, yt.i], n, t.target);
          Object(yt.f)(n) && (r = !1),
            I.n === e && Object(yt.h)(t) && t.preventDefault(),
            r && t.stopPropagation();
        },
        xt = function (e, t) {
          var n,
            r =
              null === (n = t.clipboardData) || void 0 === n ? void 0 : n.types;
          if (r) {
            var o =
                (r instanceof DOMStringList && r.contains("text/html")) ||
                r.includes("text/html"),
              a =
                (r instanceof DOMStringList && r.contains("text/plain")) ||
                r.includes("text/plain");
            if (o || a) {
              var i = "";
              if (
                (t.clipboardData &&
                  (i =
                    t.clipboardData.getData("text/html") ||
                    t.clipboardData.getData("text/plain")),
                e && e < i.length)
              )
                return { blocked: !0, error: new jt.a("maxLength") };
            }
          }
          return {};
        },
        Ct = n(80),
        Et = function (e) {
          var t = Object(c.useState)(!1),
            n = i()(t, 2),
            r = n[0],
            o = n[1],
            a = Object(c.useRef)();
          function u() {
            clearTimeout(a.current);
          }
          return [
            r,
            function (t) {
              o(t),
                u(),
                t &&
                  (a.current = setTimeout(function () {
                    return o(!1);
                  }, e));
            },
            u,
          ];
        },
        St = function (e, t) {
          return (
            e.isActive ||
            t.isActive ||
            e.isCommitted !== t.isCommitted ||
            e.layoutItemsSize !== t.layoutItemsSize
          );
        },
        It = function (e, t) {
          return !St(e, t);
        },
        Pt = function (e) {
          var t = e.blockRef,
            n = e.validationError,
            r = e.isActive,
            a = e.isCommitted,
            s = e.isValid,
            l = e.layout,
            d = e.layoutItemsSize,
            p = e.onCommitAnswer,
            f = e.onInputBlur,
            b = e.onInputFocus,
            m = e.onRequireStickyFooter,
            h = e.onStageAnswer,
            v = e.placeholder,
            g = e.submitForm,
            O = e.t,
            y = e.theme,
            j = e.title,
            w = e.type,
            k = e.uniqueId,
            x = e.validations,
            C = e.hasDescription,
            E = Et(J.i),
            S = i()(E, 3),
            I = S[0],
            P = S[1],
            T = S[2],
            _ = Et(J.b),
            R = i()(_, 3),
            D = R[0],
            F = R[1],
            N = R[2],
            M = Object(c.useState)(""),
            H = i()(M, 2),
            z = H[0],
            K = H[1],
            U = Object(c.useRef)(),
            q = Object(c.useRef)(),
            W = U.current === document.activeElement,
            Y = (a && !s) || D,
            G = Object(B.a)({
              uniqueId: k,
              isErrorMessageVisible: Y,
              hasDescription: C,
              hasInputInstructions: !0,
            });
          Object(c.useEffect)(function () {
            return function () {
              T(), N();
            };
          }, []);
          var Z = Object(c.useCallback)(
            function (e) {
              kt(w, e),
                Object(o.n)() ||
                  !Object(yt.i)(e) ||
                  Object(yt.m)(e) ||
                  Object(yt.g)(e) ||
                  (e.preventDefault(), r && p(t, e));
            },
            [t, r, p, w]
          );
          dt(r, Z);
          var $ = e.value.length > 0 ? e.value[0] : "";
          return u.a.createElement(
            it,
            A()({}, e, {
              isShaking: I,
              titleFor: k,
              titleTag: "label",
              titleText: j,
              scrollerRef: q,
            }),
            u.a.createElement(Ot.a, {
              ariaDescribedBy: G,
              placeholder: O(v),
              maxLength: x.maxLength,
              onChange: function (e) {
                if (r) {
                  var n = e.target.value;
                  x.maxLength && (n = n.slice(0, x.maxLength)), h(t, n, e);
                }
              },
              onResize: function (e) {
                var t = e.target.value;
                t.split("\n").length -
                  t.substr(0, e.target.selectionStart).split("\n").length <=
                  3 &&
                  r &&
                  !Object(Ct.c)() &&
                  (q.current.scrollTop = q.current.scrollHeight);
              },
              onKeyDown: Z,
              onKeyPress: function (e) {
                var t = wt(w, x.maxLength, e),
                  n = t.blocked,
                  r = t.error;
                P(n), F(n), K(r);
              },
              onPaste: function (e) {
                var t = xt(x.maxLength, e),
                  n = t.blocked,
                  r = t.error;
                P(n), F(n), K(r);
              },
              onFocus: function () {
                Object(o.n)() &&
                  (b(),
                  Object(Ct.c)() ||
                    setTimeout(function () {
                      q.current.scrollTop = q.current.scrollHeight;
                    }, 700));
              },
              onBlur: f,
              innerRef: U,
              id: k,
              value: $,
              color: y.colors.secondary,
            }),
            !Object(o.n)() &&
              u.a.createElement(
                L.a,
                { top: V.p.topHint },
                u.a.createElement(
                  Ve.a,
                  {
                    color: y.colors.secondary,
                    fontWeight: "regular",
                    htmlTag: "p",
                    id: Object(B.d)(k),
                    type: V.i.answerHint,
                  },
                  Object(Q.a)(O("block.longText.hint"))
                )
              ),
            u.a.createElement(De, {
              buttonColor: y.colors.button,
              helperColor: y.colors.primary,
              backgroundColor: y.colors.background,
              errorMessageId: Object(B.c)(k),
              blockError: D ? z : n,
              isErrorMessageVisible: Y,
              onRequireStickyFooter: m,
              blockRef: t,
              onClick: function (e) {
                var n = W && Object(o.n)();
                U.current && n && U.current.blur(),
                  e.stopPropagation(),
                  e.persist(),
                  setTimeout(
                    function () {
                      r && p(t, e);
                    },
                    n ? 700 : 0
                  );
              },
              layout: l,
              layoutItemsSize: d,
              submitForm: g,
            })
          );
        };
      Pt.defaultProps = {
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        t: _.a,
        theme: {
          colors: {
            backgroundColor: o.b,
            button: o.b,
            primary: o.b,
            secondary: o.b,
          },
        },
        validations: { maxLength: null },
        value: [],
      };
      var Tt,
        _t,
        Rt,
        At,
        Dt,
        Bt = Object(c.memo)(Pt, It),
        Ft = (n(667), n(66), n(76), n(90), n(473)),
        Nt = n.n(Ft),
        Lt = n(243),
        Mt =
          (n(57),
          function (e) {
            e.preventDefault(), e.stopPropagation();
          }),
        Vt = function (e, t, n) {
          var r = t.nativeEvent;
          if (null != r && r.inputType) return !1;
          var o = new Date().getTime();
          if (
            e &&
            ((e.key && "Unidentified" !== e.key) || "paste" === e.type) &&
            o - e.timestamp < 500
          )
            return !1;
          var a = t.target.value || "";
          return !(
            "" === a ||
            a.length + 1 <= n.length ||
            a.replace(n, "").length < 2
          );
        },
        Ht = "year",
        zt = "month",
        Kt = "day",
        Ut =
          ((Tt = {}),
          w()(Tt, Ht, "bday-year"),
          w()(Tt, zt, "bday-month"),
          w()(Tt, Kt, "bday-day"),
          Tt),
        qt = s.d.div.withConfig({
          displayName: "date-input__Root",
          componentId: "sc-1e3716c-0",
        })(
          ["display:flex;align-items:baseline;width:fit-content;", ";"],
          function (e) {
            return e.textAlign === g.e.CENTER ? "margin:auto" : "";
          }
        ),
        Wt = Object(s.d)(Nt.a).withConfig({
          displayName: "date-input__DayInput",
          componentId: "sc-1e3716c-1",
        })([
          "width:calc(2ch * 1.1);@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){width:calc(2em);}",
        ]),
        Yt = Object(s.d)(Nt.a).withConfig({
          displayName: "date-input__YearInput",
          componentId: "sc-1e3716c-2",
        })([
          "width:calc(4ch * 1.1);@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){width:calc(4em);}",
        ]),
        Gt = Object(s.d)(Nt.a).withConfig({
          displayName: "date-input__MonthInput",
          componentId: "sc-1e3716c-3",
        })([
          "width:calc(2ch * 1.1);@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){width:calc(2em);}",
        ]),
        Qt = Object(s.d)(M.a).withConfig({
          displayName: "date-input__Separator",
          componentId: "sc-1e3716c-4",
        })(["align-self:flex-end;"]),
        Jt = function (e) {
          return Math.floor(Math.log10(e)) + 1;
        },
        Zt = ((_t = {}), w()(_t, Ht, Yt), w()(_t, zt, Gt), w()(_t, Kt, Wt), _t),
        $t =
          ((Rt = {}),
          w()(Rt, Ht, "block.date.label.year"),
          w()(Rt, zt, "block.date.label.month"),
          w()(Rt, Kt, "block.date.label.day"),
          Rt),
        Xt =
          ((At = {}), w()(At, Ht, 9999), w()(At, zt, 12), w()(At, Kt, 31), At),
        en = ((Dt = {}), w()(Dt, zt, "00"), w()(Dt, Kt, "00"), Dt),
        tn = function (e, t) {
          return Math.min(Xt[e], Math.max(0, t));
        },
        nn = function (e) {
          var t,
            n,
            r,
            o = e.autoComplete,
            a = e.ariaDescribedBy,
            i = e.color,
            s = e.dayValue,
            l = e.id,
            d = e.isActive,
            p = e.monthValue,
            f = e.onDayChange,
            b = e.onEnterKey,
            m = e.onInvalidInput,
            h = e.onMonthChange,
            v = e.onYearChange,
            g = e.order,
            O = e.readOnly,
            y = e.separator,
            j = e.textAlign,
            k = e.t,
            x = e.yearValue,
            C = Object(c.useRef)(),
            E = Object(c.useRef)(),
            S = Object(c.useRef)(),
            I = ((t = {}), w()(t, Ht, C), w()(t, zt, E), w()(t, Kt, S), t),
            P = ((n = {}), w()(n, Ht, x), w()(n, zt, p), w()(n, Kt, s), n),
            T = ((r = {}), w()(r, Ht, v), w()(r, zt, h), w()(r, Kt, f), r),
            _ = function (e) {
              return function (t) {
                var n = t.target.value,
                  r = parseInt(n, 10);
                (!isNaN(r) && n.match(/^[0-9]+$/)) || "" === n
                  ? "" === n ||
                    (function (e, t) {
                      var n = parseInt(t, 10),
                        r = Jt(Xt[e]);
                      return (
                        !((null == t ? void 0 : t.length) > r || t === en[e]) &&
                        n >= 0 &&
                        n <= Xt[e]
                      );
                    })(e, n)
                    ? T[e](n, t)
                    : m(new jt.e())
                  : m(new jt.f());
              };
            },
            R = function (e) {
              return function (t) {
                "0" === t.target.value && e !== Ht && m(new jt.e());
              };
            },
            A = Object(c.useCallback)(
              function (e) {
                return function (t) {
                  if (e) {
                    var n = parseInt(P[e] || 0, 10);
                    if (Object(yt.b)(t))
                      return Mt(t), void T[e](tn(e, n - 1).toString());
                    if (Object(yt.d)(t))
                      return Mt(t), void T[e](tn(e, n + 1).toString());
                  }
                  Object(yt.i)(t) &&
                    !Object(yt.g)(t) &&
                    (t.preventDefault(), b(t));
                };
              },
              [T, b]
            );
          return (
            dt(d, A(null)),
            u.a.createElement(
              qt,
              { textAlign: j },
              [g[0], "separator", g[1], "separator", g[2]].map(function (e, t) {
                if ("separator" === e)
                  return u.a.createElement(
                    Qt,
                    {
                      key: t,
                      bottom: 1,
                      left: "/" === y ? 2.5 : 1.5,
                      right: "/" === y ? 2 : 1.5,
                    },
                    u.a.createElement(
                      Ve.a,
                      { type: V.i.inputText, color: i },
                      y
                    )
                  );
                var n = Zt[e],
                  r = (function (e) {
                    return "bday" === o ? Ut[e] : null;
                  })(e);
                return u.a.createElement(
                  c.Fragment,
                  { key: t },
                  u.a.createElement(
                    N.e,
                    { vertical: !0 },
                    u.a.createElement(
                      M.a,
                      { bottom: 1 },
                      u.a.createElement(
                        Z.b,
                        {
                          color: i,
                          htmlFor: "".concat(l, "-").concat(e),
                          htmlTag: "label",
                          size: "sizeN1",
                        },
                        k($t[e])
                      )
                    ),
                    u.a.createElement(n, {
                      "aria-describedby": a,
                      autoComplete: r,
                      color: i,
                      dataQa: "date-input-".concat(e.toLowerCase()),
                      getRef: I[e],
                      inputId: "".concat(l, "-").concat(e),
                      inputType: "text",
                      isReadOnly: O,
                      maxDigits: Jt(Xt[e]),
                      name: r,
                      onChange: _(e),
                      onBlur: R(e),
                      onKeyDown: A(e),
                      tabIndex: O ? -1 : null,
                      value: P[e],
                    })
                  )
                );
              })
            )
          );
        };
      nn.defaultProps = {
        colors: o.b,
        onDayChange: _.a,
        onMonthChange: _.a,
        onYearChange: _.a,
        order: [Kt, zt, Ht],
        t: function (e) {
          return e;
        },
        dayValue: "",
        monthValue: "",
        yearValue: "",
      };
      var rn = Object(Lt.a)(nn),
        on = s.d.div.withConfig({
          displayName: "mobile-date-input__InputWrapper",
          componentId: "dshvny-0",
        })(["position:relative;"]),
        an = s.d.input.withConfig({
          displayName: "mobile-date-input__GhostInput",
          componentId: "dshvny-1",
        })([
          "position:absolute;width:100%;height:100%;top:0;left:0;opacity:0;min-width:100%;",
        ]),
        cn = function (e) {
          var t = e.ariaDescribedBy,
            n = e.color,
            r = e.dayValue,
            o = e.id,
            a = e.monthValue,
            i = e.onDateChange,
            c = e.order,
            s = e.separator,
            l = e.textAlign,
            d = e.yearValue;
          return u.a.createElement(
            on,
            null,
            u.a.createElement(
              "div",
              { "aria-hidden": !0 },
              u.a.createElement(rn, {
                color: n,
                dayValue: r,
                id: o,
                monthValue: a,
                order: c,
                readOnly: !0,
                separator: s,
                textAlign: l,
                yearValue: d,
              })
            ),
            u.a.createElement(an, {
              "aria-describedby": t,
              onChange: function (e) {
                var t = e.target.value;
                i(t, e);
              },
              type: "date",
            })
          );
        };
      cn.defaultProps = {
        onDateChange: _.a,
        onInputBlur: _.a,
        onInputFocus: _.a,
        t: _.a,
      };
      var un = cn,
        sn = {
          MMDDYYYY: [zt, Kt, Ht],
          DDMMYYYY: [Kt, zt, Ht],
          YYYYMMDD: [Ht, zt, Kt],
        },
        ln = function (e) {
          var t = e.autoComplete,
            n = e.blockRef,
            r = e.validationError,
            a = e.isCommitted,
            s = e.isValid,
            l = e.layout,
            d = e.layoutItemsSize,
            p = e.onCommitAnswer,
            f = e.onStageAnswer,
            b = e.separator,
            m = e.submitForm,
            h = e.structure,
            v = e.textAlign,
            g = e.theme,
            O = e.uniqueId,
            y = e.isActive,
            j = Et(J.i),
            w = i()(j, 3),
            k = w[0],
            x = w[1],
            C = w[2],
            E = Et(J.b),
            S = i()(E, 3),
            I = S[0],
            P = S[1],
            T = S[2],
            _ = Object(c.useState)(""),
            R = i()(_, 2),
            D = R[0],
            B = R[1],
            F = ((e.value && e.value[0]) || "").split("-"),
            N = i()(F, 3),
            L = N[0],
            M = void 0 === L ? "" : L,
            V = N[1],
            H = void 0 === V ? "" : V,
            z = N[2],
            K = void 0 === z ? "" : z,
            U = "".concat(O, "-error-message"),
            q = (a && !s) || I;
          Object(c.useEffect)(function () {
            return function () {
              C(), T();
            };
          }, []);
          var W = function (e, t, r, o) {
            var a = "".concat(e, "-").concat(t, "-").concat(r);
            "" === e && "" === t && "" === r && (a = null), f(n, a, o);
          };
          return u.a.createElement(
            it,
            A()({}, e, {
              titleTag: "legend",
              titleText: e.title,
              isShaking: k,
            }),
            Object(o.n)()
              ? u.a.createElement(un, {
                  ariaDescribedBy: q ? U : null,
                  id: O,
                  onDateChange: function (e, t) {
                    f(n, e, t);
                  },
                  order: sn[h],
                  dayValue: K,
                  monthValue: H,
                  yearValue: M,
                  separator: b,
                  textAlign: v,
                  color: g.colors.secondary,
                })
              : u.a.createElement(rn, {
                  autoComplete: t,
                  ariaDescribedBy: q ? U : null,
                  id: O,
                  onEnterKey: function (e) {
                    x(!1), P(!1), p(n, e);
                  },
                  order: sn[h],
                  dayValue: K,
                  monthValue: H,
                  yearValue: M,
                  separator: b,
                  textAlign: v,
                  onDayChange: function (e, t) {
                    W(M, H, e, t);
                  },
                  onMonthChange: function (e, t) {
                    W(M, e, K, t);
                  },
                  onYearChange: function (e, t) {
                    W(e, H, K, t);
                  },
                  color: g.colors.secondary,
                  onInvalidInput: function (e) {
                    B(e), x(!0), P(!0);
                  },
                  isActive: y,
                }),
            u.a.createElement(De, {
              blockRef: n,
              errorMessageId: U,
              blockError: I ? D : r,
              isErrorMessageVisible: q,
              layout: l,
              layoutItemsSize: d,
              onClick: function (e) {
                e.stopPropagation(), p(n, e);
              },
              submitForm: m,
            })
          );
        };
      ln.defaultProps = {
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        submitForm: _.a,
        t: _.a,
        theme: { colors: { secondary: o.b } },
        value: [],
      };
      var dn = ln,
        pn = (n(174), n(87)),
        fn = n.n(pn),
        bn = (n(169), n(134)),
        mn = n.n(bn),
        hn = n(474),
        vn = n(775),
        gn = n(493);
      n(59), n(108);
      function On(e) {
        return new Promise(function (t, n) {
          var r = new window.FileReader();
          (r.onload = function (e) {
            return t(e.target.result);
          }),
            (r.onerror = n),
            r.readAsDataURL(e);
        });
      }
      var yn = ["image/png", "image/gif", "image/jpeg", "image/svg+xml"],
        jn = function (e) {
          return yn.some(function (t) {
            return e === t;
          });
        },
        wn = function (e) {
          var t = e.validationError,
            n = e.isCommitted,
            r = e.isValid,
            o = e.title,
            a = e.theme,
            s = e.layout,
            l = e.layoutItemsSize,
            d = e.isActive,
            p = e.isLivePreview,
            f = e.onCommitAnswer,
            b = e.blockRef,
            m = e.onStageAnswer,
            h = e.uniqueId,
            v = e.value,
            g = e.hasDescription,
            O = e.submitForm,
            y = Object(c.useState)(),
            j = i()(y, 2),
            w = j[0],
            k = j[1],
            x = Object(c.useState)(!1),
            C = i()(x, 2),
            E = C[0],
            S = C[1],
            I = Object(c.useState)(0),
            P = i()(I, 2),
            T = P[0],
            _ = P[1],
            R = Object(c.useState)(!1),
            D = i()(R, 2),
            F = D[0],
            N = D[1],
            L = v && v.length > 0 ? v[0] : void 0,
            M = !!w || (n && !r),
            V = Object(B.a)({
              uniqueId: h,
              isErrorMessageVisible: M,
              hasDescription: g,
            }),
            H = E ? vn.a.UPLOADING : L ? vn.a.PREVIEW : vn.a.INPUT,
            z = Object(c.useRef)(null),
            K = function (e) {
              e.stopPropagation(), d && f(b, e);
            },
            U = Object(c.useCallback)(
              function (e) {
                F
                  ? Object(yt.i)(e) &&
                    !Object(yt.g)(e) &&
                    (e.stopPropagation(), K(e))
                  : e.stopPropagation();
              },
              [F, K]
            );
          dt(d, U);
          var q = function (e) {
              _(e);
            },
            W = function (e) {
              m(b, { value: e, label: e.name }),
                S(!1),
                z.current && z.current.focus();
            },
            Y = function (e) {
              S(!1);
              var t =
                "file-size-exceeded" === (e && e.message)
                  ? new jt.c()
                  : new jt.d();
              k(t);
            },
            G = (function () {
              var e = mn()(
                fn.a.mark(function e(t) {
                  return fn.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), Q(t);
                          case 3:
                            e.next = 8;
                            break;
                          case 5:
                            (e.prev = 5), (e.t0 = e.catch(0)), Y(e.t0);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Q = (function () {
              var t = mn()(
                fn.a.mark(function t(n) {
                  var r, o, a, i, c, u;
                  return fn.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            S(!0),
                            _(0),
                            k(null),
                            (r = e.formId),
                            (o = e.id),
                            (t.next = 6),
                            Object(gn.b)(r, o)
                          );
                        case 6:
                          if (
                            ((a = t.sent),
                            (i = a.max_size || a.maxSize),
                            !(n.size > i))
                          ) {
                            t.next = 10;
                            break;
                          }
                          throw new Error("file-size-exceeded");
                        case 10:
                          return (t.next = 12), Object(gn.e)(n, a, q);
                        case 12:
                          if (((c = t.sent), !jn(n.type))) {
                            t.next = 19;
                            break;
                          }
                          return (t.next = 16), On(n);
                        case 16:
                          (t.t0 = t.sent), (t.next = 20);
                          break;
                        case 19:
                          t.t0 = null;
                        case 20:
                          (u = t.t0),
                            W({
                              name: n.name,
                              type: n.type,
                              s3Filename: c,
                              blob: u,
                            });
                        case 22:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            J = (function () {
              var e = mn()(
                fn.a.mark(function e(t) {
                  var n;
                  return fn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((S(!0), _(0), k(null), !jn(t.type))) {
                            e.next = 9;
                            break;
                          }
                          return (e.next = 6), On(t);
                        case 6:
                          (e.t0 = e.sent), (e.next = 10);
                          break;
                        case 9:
                          e.t0 = null;
                        case 10:
                          (n = e.t0),
                            W({
                              name: t.name,
                              type: t.type,
                              s3Filename: "",
                              blob: n,
                            });
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return u.a.createElement(
            it,
            A()({}, e, {
              titleFor: h,
              titleTag: "label",
              titleText: o,
              onKeyDown: U,
            }),
            u.a.createElement(
              hn.a,
              {
                onEnter: function () {
                  return N(!0);
                },
                onLeave: function () {
                  return N(!1);
                },
              },
              u.a.createElement(
                "div",
                null,
                u.a.createElement(vn.b, {
                  ariaDescribedBy: V,
                  fileBlob: L && L.blob,
                  handleCancel: function () {
                    m(b, []),
                      z.current && ((z.current.value = []), z.current.focus());
                  },
                  handleChange: function (e) {
                    var t = e.target.files;
                    p ? J(t[0]) : t.length && G(t[0]);
                  },
                  handleDrop: function (e) {
                    var t = e.dataTransfer.files;
                    p ? J(t[0]) : G(t[0]);
                  },
                  handleKeyDown: function (e) {
                    Object(yt.i)(e) && !Object(yt.g)(e) && e.stopPropagation();
                  },
                  inputId: h,
                  isActive: d,
                  originalFileName: L && L.name,
                  phase: H,
                  uploadProgress: T,
                  value: L,
                  theme: a,
                  ref: z,
                  primaryColor: a.colors.primary,
                  secondaryColor: a.colors.secondary,
                }),
                u.a.createElement(De, {
                  blockRef: b,
                  blockError: w || t,
                  errorMessageId: Object(B.c)(h),
                  hideHelperText: !0,
                  isErrorMessageVisible: M,
                  isErrorIgnorable: !!w,
                  layout: s,
                  layoutItemsSize: l,
                  onClick: K,
                  submitForm: O,
                })
              )
            )
          );
        };
      wn.defaultProps = {
        file: {},
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        submitForm: _.a,
        theme: { colors: { primary: "#FF00FF", secondary: "#FF00FF" } },
      };
      var kn = wn,
        xn = (n(26), n(51), n(113), n(139), n(112)),
        Cn = n.n(xn),
        En = n(38),
        Sn = n.n(En),
        In = n(75),
        Pn = n.n(In),
        Tn = n(77),
        _n = n.n(Tn),
        Rn = n(41),
        An = n.n(Rn),
        Dn = n(88),
        Bn = n.n(Dn),
        Fn = n(58),
        Nn = n.n(Fn),
        Ln = n(685),
        Mn = n.n(Ln),
        Vn = n(684);
      function Hn(e) {
        return e >= "a" && e <= "z";
      }
      var zn = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        Kn = function (e) {
          var t = Math.floor(e % zn.length);
          return zn[t];
        };
      var Un = function e(t) {
          return t >= zn.length
            ? e(Math.floor(t / zn.length) - 1) + Kn(t)
            : Kn(t);
        },
        qn =
          (n(114),
          n(115),
          function () {
            var e, t;
            if (
              null === (e = window) ||
              void 0 === e ||
              null === (t = e.location) ||
              void 0 === t ||
              !t.search
            )
              return null;
            var n = window.location.search.match(/prefilled_answer=[0-9]+/);
            return n ? [parseInt(n[0].split("=")[1], 10)] : null;
          }),
        Wn = function (e) {
          var t, n;
          if (
            null === (t = window) ||
            void 0 === t ||
            null === (n = t.location) ||
            void 0 === n ||
            !n.hash
          )
            return null;
          var r = window.location.hash.match(
            new RegExp(
              "answers-".concat(
                e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
                "=([^&]+)"
              )
            )
          );
          return r
            ? r[1]
                .split(",")
                .map(decodeURIComponent)
                .map(function (e) {
                  return isNaN(e) ? e : parseInt(e, 10);
                })
            : null;
        },
        Yn = function (e) {
          return new Promise(function (t) {
            return setTimeout(t, e);
          });
        },
        Gn = function () {
          return Yn(J.a);
        },
        Qn = function () {
          return Yn(J.c);
        },
        Jn = n(480),
        Zn = s.d.div.withConfig({
          displayName: "dummy-list__Hidden",
          componentId: "sc-1bh6md0-0",
        })([
          "opacity:0;pointer-events:none;position:absolute;height:1px;overflow-y:scroll;",
        ]),
        $n = x()(JSON.stringify, function (e) {
          var t = e.choices,
            n = e.t;
          return t.map(function (e) {
            return { label: n(e.label), ref: e.ref };
          });
        }),
        Xn = function (e) {
          var t = e.choices,
            n = e.t,
            r = e.allowOtherChoice,
            o = e.otherValue,
            a = e.vertical,
            i = e.onLongestChoiceWidthChanged,
            s = e.theme,
            l = Object(c.useRef)(),
            d = Object(c.useRef)();
          return (
            Object(c.useEffect)(
              function () {
                if (l.current) {
                  var e = l.current.clientWidth;
                  d.current !== e && ((d.current = e), i(e));
                }
              },
              [t, n, s]
            ),
            u.a.createElement(
              Zn,
              { tabIndex: -1, ref: l },
              $n({ choices: t, t: n }).map(function (e) {
                return u.a.createElement(
                  Jn.a,
                  { tabIndex: -1, key: e.ref, keyHelperLetter: "MM" },
                  u.a.createElement(
                    Ve.a,
                    { type: V.i.multipleChoiceLabel },
                    e.label
                  )
                );
              }),
              r &&
                a &&
                u.a.createElement(Jn.a, {
                  tabIndex: -1,
                  title: o,
                  keyHelperLetter: "MM",
                })
            )
          );
        },
        er = Object(c.memo)(Xn),
        tr = n(556),
        nr = n(788),
        rr = n(627),
        or = n(488),
        ar = n(687),
        ir = function (e) {
          var t = e.ChoiceComponent,
            n = e.value,
            r = e.selected,
            o = e.t,
            a = e.keyHelperLetter,
            i = e.fontSizeType,
            s = e.theme,
            l = e.onInputBlur,
            d = e.onChange,
            p = e.onCommit,
            f = e.isEditing,
            b = e.setIsEditing,
            m = e.hovered,
            h = e.onShouldFocusOtherChoice,
            v = S()(e, [
              "ChoiceComponent",
              "value",
              "selected",
              "t",
              "keyHelperLetter",
              "fontSizeType",
              "theme",
              "onInputBlur",
              "onChange",
              "onCommit",
              "isEditing",
              "setIsEditing",
              "hovered",
              "onShouldFocusOtherChoice",
            ]),
            g = Object(c.useRef)(),
            O = Object(c.useRef)(),
            y = function () {
              O.current && O.current.focus();
            };
          Object(c.useEffect)(
            function () {
              f && y();
            },
            [f, y]
          ),
            Object(H.a)(
              function () {
                f || h();
              },
              [f]
            );
          var j = function (e) {
            e.stopPropagation(), p(e);
          };
          return f
            ? u.a.createElement(
                t,
                A()({}, v, {
                  tagName: "div",
                  role: void 0,
                  tabIndex: -1,
                  selectable: !1,
                  onBlur: function (e) {
                    var t, n;
                    (null !== (t = g.current) &&
                      void 0 !== t &&
                      t.contains(null == e ? void 0 : e.relatedTarget)) ||
                      (null !== (n = g.current) &&
                        void 0 !== n &&
                        n.contains(null == e ? void 0 : e.currentTarget)) ||
                      b(!1);
                  },
                  ref: g,
                  hovered: m,
                }),
                u.a.createElement(ar.a, {
                  value: n,
                  dataQa: "other-choice-editor",
                  dataQaInput: "other-choice-editor/input",
                  dataQaButton: "other-choice-editor/button",
                  ref: O,
                  color: s.colors.secondary,
                  onBlur: l,
                  onChange: function (e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      d(e.target.value, e);
                  },
                  onKeyDown: function (e) {
                    e.stopPropagation(),
                      Object(yt.i)(e) && j(e),
                      Object(yt.j)(e) && b(!1);
                  },
                  onEditConfirm: j,
                  fontSizeType: i,
                })
              )
            : u.a.createElement(
                t,
                A()({}, v, {
                  selected: r,
                  keyHelperHint: o("label.hint.key"),
                  keyHelperLetter: a,
                  onClick: function () {
                    b(!0);
                  },
                  ref: g,
                }),
                u.a.createElement(
                  Ve.a,
                  { type: i },
                  n || o("block.multipleChoice.other")
                )
              );
        },
        cr = function (e, t, n) {
          var r, o;
          return null !== (r = e.attachment) &&
            void 0 !== r &&
            null !== (o = r.properties) &&
            void 0 !== o &&
            o.description
            ? e.attachment.properties.description
            : n
            ? ""
            : t(e.label);
        },
        ur = s.d.div.withConfig({
          displayName: "radio-list__Wrapper",
          componentId: "sc-1yp902n-0",
        })(["height:100%;"]),
        sr = s.d.div.withConfig({
          displayName: "radio-list__Radio",
          componentId: "sc-1yp902n-1",
        })(["outline:none;", ""], or.b),
        lr = function (e) {
          var t = e.allowOtherChoice,
            n = e.answer,
            r = e.ariaDescribedBy,
            a = e.choiceProps,
            i = e.choices,
            s = e.choicesLength,
            l = e.createKeyShortcut,
            d = e.handleColumnsChanged,
            p = e.handleOtherChoiceChange,
            f = e.handleOtherChoiceCommit,
            b = e.handleSelect,
            m = e.isOtherChoiceEditing,
            h = e.longestChoiceWidth,
            v = e.onInputBlur,
            g = e.otherChoiceProps,
            O = e.otherChoiceRef,
            y = e.otherLabelAndInputFontSize,
            j = e.otherValue,
            w = e.setIsOtherChoiceEditing,
            k = e.shouldDisableChoices,
            x = e.showLabels,
            C = e.t,
            E = e.textAlign,
            S = e.theme,
            I = e.verticalAlignment,
            P = e.withImage,
            T = Object(c.useRef)(),
            _ = P ? rr.a : Jn.a,
            R = i.map(function (e) {
              return e.ref;
            });
          t && R.push(O);
          var D = n.length > 0 && n[0] && n[0] === j,
            B = k && !j,
            F = Object(o.n)();
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              nr.a,
              { items: R, onChange: b, selected: D ? O : n[0] },
              u.a.createElement(
                tr.a,
                {
                  onChangeColumns: d,
                  vertical: I,
                  longestChoiceWidth: h,
                  withImage: P,
                  textAlign: E,
                  tagName: "div",
                },
                i.map(function (e, t) {
                  var o = x && Object(Q.a)(C(e.label)),
                    i = l(t, e.label, e.keyboardShortcut),
                    c =
                      o || C("block.multipleChoice.label.keyhelper", { x: i }),
                    s = n.includes(e.ref),
                    d = k && !s;
                  return u.a.createElement(
                    nr.b,
                    { key: e.ref, value: e.ref },
                    function (n) {
                      var l,
                        p = n.focusedValue,
                        f = n.props;
                      return u.a.createElement(
                        sr,
                        A()({}, f, {
                          "aria-describedby": r,
                          "aria-label": c,
                          "aria-disabled": d,
                        }),
                        u.a.createElement(
                          ur,
                          { "aria-hidden": "true" },
                          u.a.createElement(
                            _,
                            A()({}, a, {
                              choiceRef: e.ref,
                              dataQa: "choice",
                              dataQaIndex: t,
                              disabled: d,
                              focused: p === e.ref,
                              imageAlt: cr(e, C, x),
                              imageHref:
                                null === (l = e.attachment) || void 0 === l
                                  ? void 0
                                  : l.href,
                              isCropped: e.isCropped,
                              keyHelperHint: C("label.hint.key"),
                              keyHelperLetter: i,
                              label: o,
                              selected: s,
                              withKeyHelperHint: !F,
                            })
                          )
                        )
                      );
                    }
                  );
                }),
                t &&
                  u.a.createElement(nr.b, { value: O }, function (e) {
                    var t = e.focusedValue,
                      n = e.props;
                    return u.a.createElement(
                      sr,
                      A()({}, n, {
                        "aria-describedby": r,
                        "aria-disabled": B,
                        ref: T,
                      }),
                      u.a.createElement(
                        ir,
                        A()({}, a, g, {
                          ChoiceComponent: _,
                          "aria-describedby": r,
                          disabled: B,
                          focused: t === O,
                          fontSizeType: y,
                          isEditing: m,
                          keyHelperLetter: l(s - 1, j),
                          onChange: p,
                          onCommit: f,
                          onInputBlur: v,
                          onShouldFocusOtherChoice: function () {
                            var e;
                            return null === (e = T.current) || void 0 === e
                              ? void 0
                              : e.focus();
                          },
                          selected: D,
                          setIsEditing: w,
                          t: C,
                          theme: S,
                          value: j,
                          withKeyHelperHint: !F,
                        })
                      )
                    );
                  })
              )
            )
          );
        },
        dr = s.d.div.withConfig({
          displayName: "checkbox-list__Wrapper",
          componentId: "sc-1vv5jbn-0",
        })(["height:100%;"]),
        pr = s.d.div.withConfig({
          displayName: "checkbox-list__Checkbox",
          componentId: "sc-1vv5jbn-1",
        })(["outline:none;", ""], or.b),
        fr = function (e) {
          var t = e.allowOtherChoice,
            n = e.choices,
            r = e.onInputBlur,
            a = e.showLabels,
            s = e.t,
            l = e.textAlign,
            d = e.theme,
            p = e.verticalAlignment,
            f = e.withImage,
            b = e.otherValue,
            m = e.longestChoiceWidth,
            h = e.answer,
            v = e.ariaDescribedBy,
            g = e.choiceProps,
            O = e.otherChoiceProps,
            y = e.shouldDisableChoices,
            j = e.choicesLength,
            w = e.otherLabelAndInputFontSize,
            k = e.isOtherChoiceEditing,
            x = e.handleSelect,
            C = e.handleColumnsChanged,
            E = e.createKeyShortcut,
            S = e.setIsOtherChoiceEditing,
            I = e.handleOtherChoiceChange,
            P = e.handleOtherChoiceCommit,
            T = e.otherChoiceRef,
            _ = Object(c.useState)(),
            R = i()(_, 2),
            D = R[0],
            B = R[1],
            F = Object(c.useRef)(),
            N = f ? rr.a : Jn.a,
            L = n.map(function (e) {
              return e.ref;
            });
          t && L.push(T);
          var M = h.length > 0 && h.includes(b),
            V = y && !b,
            H = function (e, t) {
              Object(yt.n)(t) && x(e, t);
            },
            z = Object(o.n)();
          return u.a.createElement(
            "div",
            { "data-qa": "checkboxlist" },
            u.a.createElement(
              tr.a,
              {
                onChangeColumns: C,
                vertical: p,
                longestChoiceWidth: m,
                withImage: f,
                textAlign: l,
                tagName: "div",
              },
              n.map(function (e, t) {
                var n,
                  r = a && Object(Q.a)(s(e.label)),
                  o = E(t, e.label, e.keyboardShortcut),
                  i = r || s("block.multipleChoice.label.keyhelper", { x: o }),
                  c = h.includes(e.ref),
                  l = y && !c;
                return u.a.createElement(
                  pr,
                  {
                    "aria-describedby": v,
                    "aria-label": i,
                    "aria-disabled": l,
                    key: e.ref,
                    "aria-checked": c,
                    onClick: function (t) {
                      return x(e.ref, t);
                    },
                    onKeyDown: function (t) {
                      return H(e.ref, t);
                    },
                    onFocus: function (t) {
                      return B(e.ref);
                    },
                    role: "checkbox",
                    tabIndex: 0,
                  },
                  u.a.createElement(
                    dr,
                    { "aria-hidden": "true" },
                    u.a.createElement(
                      N,
                      A()({}, g, {
                        focusable: !1,
                        dataQa: "choice",
                        dataQaIndex: t,
                        choiceRef: e.ref,
                        focused: D === e.ref,
                        selected: c,
                        disabled: l,
                        keyHelperHint: s("label.hint.key"),
                        keyHelperLetter: o,
                        isCropped: e.isCropped,
                        imageHref:
                          null === (n = e.attachment) || void 0 === n
                            ? void 0
                            : n.href,
                        imageAlt: cr(e, s, a),
                        label: r,
                        withKeyHelperHint: !z,
                      })
                    )
                  )
                );
              }),
              t &&
                u.a.createElement(
                  pr,
                  {
                    "aria-describedby": v,
                    "aria-checked": !!b,
                    "aria-disabled": V,
                    onClick: function (e) {
                      return x(T, e);
                    },
                    onKeyDown: function (e) {
                      return H(T, e);
                    },
                    onFocus: function (e) {
                      return B(T);
                    },
                    ref: F,
                    role: "checkbox",
                    tabIndex: 0,
                  },
                  u.a.createElement(
                    ir,
                    A()({}, g, O, {
                      ChoiceComponent: N,
                      keyHelperLetter: E(j - 1, b),
                      t: s,
                      theme: d,
                      focused: D === T,
                      fontSizeType: w,
                      isEditing: k,
                      setIsEditing: S,
                      disabled: V,
                      selected: M,
                      value: b,
                      onInputBlur: r,
                      onChange: I,
                      onCommit: P,
                      onShouldFocusOtherChoice: function () {
                        var e;
                        return null === (e = F.current) || void 0 === e
                          ? void 0
                          : e.focus();
                      },
                      withKeyHelperHint: !z,
                    })
                  )
                )
            )
          );
        };
      function br(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      var mr = (function (e) {
        An()(r, e);
        var t,
          n = br(r);
        function r(e) {
          var t;
          return (
            Sn()(this, r),
            (t = n.call(this, e)),
            w()(_n()(t), "errorMessageRef", u.a.createRef()),
            w()(_n()(t), "letterShortcutBuffer", u.a.createRef()),
            w()(_n()(t), "letterShortcutTimeout", u.a.createRef()),
            w()(_n()(t), "getBlockNode", function (e) {
              return (t.blockNode = e);
            }),
            w()(_n()(t), "setIsOtherChoiceEditing", function (e) {
              t.setState({ isOtherChoiceEditing: e });
            }),
            w()(_n()(t), "createKeyShortcut", function (e, n, r) {
              var o = t.props.keyboardShortcutType;
              if ("letter" === o) return Un(e);
              if ("firstCharacter" === o) {
                var a = n.charAt(0).toUpperCase();
                return t.firstCharacterShortcuts.push(a), a;
              }
              return "custom" === o ? t.props.t(r) : void 0;
            }),
            w()(_n()(t), "handleOtherChoiceChange", function (e, n) {
              if (e) {
                if (Object(o.n)() && !Object(Ct.c)())
                  (0, t.props.recenter)("bottom", "bottom");
                t.setState({ otherValue: e });
              } else t.unstageOtherChoice(n);
            }),
            w()(_n()(t), "handleContentEntersViewport", function () {
              t.setState({ contentInViewport: !0 });
            }),
            w()(_n()(t), "handleContentLeavesViewport", function () {
              t.setState({ contentInViewport: !1 });
            }),
            w()(_n()(t), "handleKeyDown", function (e) {
              var n = t.props.keyboardShortcutType;
              if (t.state.contentInViewport && !Object(yt.g)(e)) {
                if (
                  (Object(yt.n)(e) && e.stopPropagation(),
                  "letter" === n && Hn(null == e ? void 0 : e.key))
                )
                  return (
                    null === t.letterShortcutBuffer.current
                      ? ((t.letterShortcutBuffer.current = [e.key]),
                        e.persist && e.persist(),
                        (t.letterShortcutTimeout.current = setTimeout(
                          function () {
                            return t.handleLetterKeyboardShortcut(e);
                          },
                          J.e
                        )))
                      : (t.letterShortcutBuffer.current = [].concat(
                          Cn()(t.letterShortcutBuffer.current),
                          [e.key]
                        )),
                    e.preventDefault(),
                    void e.stopPropagation()
                  );
                if (
                  (null !== t.letterShortcutTimeout.current &&
                    (clearTimeout(t.letterShortcutTimeout.current),
                    (t.letterShortcutTimeout.current = null)),
                  "firstCharacter" === n && Hn(null == e ? void 0 : e.key))
                )
                  return (
                    t.handleFirstCharacterShortcut(e),
                    e.preventDefault(),
                    void e.stopPropagation()
                  );
                "custom" === n &&
                  Hn(null == e ? void 0 : e.key) &&
                  (t.handleCustomCharacterShortcut(e),
                  e.preventDefault(),
                  e.stopPropagation());
              }
            }),
            w()(_n()(t), "handleOtherChoiceCommit", function (e) {
              var n = t.state.otherValue,
                r = t.props,
                o = r.onStageAnswer,
                a = r.value,
                i = r.allowMultipleSelection,
                c = r.blockRef;
              t.setState({ isOtherChoiceEditing: !1 });
              var u = a || [],
                s = (
                  i ? [].concat(Cn()(t.removeStagedOtherChoice(u)), [n]) : [n]
                ).filter(Boolean);
              o(c, s, e),
                s.length &&
                  !i &&
                  (e.persist && e.persist(),
                  (t.commitAnswerTimeout = setTimeout(function () {
                    t.handleCommitAnswer(e);
                  }, J.c)));
            }),
            w()(_n()(t), "handleSelect", function (e, n) {
              var r = t.props,
                o = r.onStageAnswer,
                a = r.allowMultipleSelection,
                i = r.value || [];
              if (e !== t.getOtherChoiceRef()) {
                var c,
                  u = i.includes(e);
                if (u || t.canSelectMoreChoices())
                  (c = a
                    ? u
                      ? i.filter(function (t) {
                          return t !== e;
                        })
                      : [].concat(Cn()(i), [e])
                    : u
                    ? []
                    : [e]),
                    o(t.props.blockRef, c, n),
                    a ||
                      u ||
                      (n.persist && n.persist(),
                      setTimeout(function () {
                        t.handleCommitAnswer(n);
                      }, J.c));
              } else t.setIsOtherChoiceEditing(!0);
            }),
            w()(_n()(t), "handleLongestChoiceWidthChanged", function (e) {
              t.setState({ longestChoiceWidth: e });
            }),
            w()(_n()(t), "handleColumnsChanged", function (e) {
              t.renderedColumns = e;
            }),
            w()(_n()(t), "handleCommitAnswer", function (e) {
              t.props.onCommitAnswer(t.props.blockRef, e);
            }),
            (t.state = {
              isOtherChoiceEditing: !1,
              longestChoiceWidth: null,
              otherValue: t.getOtherValue(),
              contentInViewport: !1,
            }),
            (t.renderedColumns = 1),
            (t.firstCharacterShortcuts = []),
            (t.otherChoiceTimeout = null),
            (t.commitAnswerTimeout = null),
            t
          );
        }
        return (
          Pn()(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.isActive &&
                  this.props.updateGlobalEventListenerRef(this.handleKeyDown),
                  this.prefillAnswer(),
                  this.fillOtherValueWithPartial();
              },
            },
            {
              key: "UNSAFE_componentWillReceiveProps",
              value: function (e) {
                this.props.isActive && e.isActive;
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e, t) {
                var n = this;
                return (
                  Object(o.n)() &&
                    e.isCommitted &&
                    !this.props.isCommitted &&
                    !e.isValid &&
                    setTimeout(function () {
                      n.errorMessageRef.current.focus();
                    }, 100),
                  St(this.props, e) ||
                    this.state.longestChoiceWidth !== t.longestChoiceWidth ||
                    e.choices !== this.props.choices
                );
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                (this.props.isActive &&
                  !e.isActive &&
                  (this.props.updateGlobalEventListenerRef(this.handleKeyDown),
                  this.prefillAnswer()),
                this.props.isActive) &&
                  e.choices.length !== this.props.choices.length &&
                  this.props.recenter();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.otherChoiceTimeout),
                  clearTimeout(this.commitAnswerTimeout),
                  clearTimeout(this.letterShortcutTimeout);
              },
            },
            {
              key: "getChoicesLength",
              value: function () {
                var e = this.props,
                  t = e.choices;
                return e.allowOtherChoice ? t.length + 1 : t.length;
              },
            },
            {
              key: "getOtherValue",
              value: function () {
                var e = this.props,
                  t = e.choices,
                  n = e.value;
                return (
                  n &&
                  n.find(function (e) {
                    return !(function (e) {
                      return t
                        .map(function (e) {
                          return e.ref;
                        })
                        .includes(e);
                    })(e);
                  })
                );
              },
            },
            {
              key: "getOtherChoiceRef",
              value: function () {
                return "".concat(this.props.blockRef, "-other");
              },
            },
            {
              key: "getPositionRef",
              value: function (e) {
                var t;
                return this.props.allowOtherChoice &&
                  e === this.getChoicesLength() - 1
                  ? this.getOtherChoiceRef()
                  : null === (t = this.props.choices[e]) || void 0 === t
                  ? void 0
                  : t.ref;
              },
            },
            {
              key: "prefillAnswer",
              value:
                ((t = mn()(
                  fn.a.mark(function e() {
                    var t,
                      n,
                      r,
                      o,
                      a,
                      i,
                      c,
                      u,
                      s,
                      l,
                      d,
                      p,
                      f,
                      b,
                      m,
                      h,
                      v,
                      g,
                      O,
                      y,
                      j = this;
                    return fn.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.props),
                                (n = t.allowMultipleSelection),
                                (r = t.allowOtherChoice),
                                (o = t.blockRef),
                                (a = t.choices),
                                (i = t.hasBeenInteractedWith),
                                (c = t.isActive),
                                (u = t.onCommitAnswer),
                                (s = t.onStageAnswer),
                                (l = t.value),
                                (d = t.isFirstBlock),
                                (p = Wn(o)),
                                (f = l && l.some(Boolean)),
                                p)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return");
                            case 5:
                              if (
                                ((b = a.map(function (e) {
                                  return e.ref;
                                })),
                                r && b.push(this.getOtherChoiceRef()),
                                (m = p.map(function (e) {
                                  return ["yes", "no", "other"].includes(e)
                                    ? "".concat(o, "-").concat(e)
                                    : e;
                                })),
                                (h = m.filter(function (e) {
                                  return b.includes(e);
                                })),
                                (v = h.length > 0 ? h : null),
                                (g = h.includes(this.getOtherChoiceRef())),
                                !c || f || i || !v)
                              ) {
                                e.next = 23;
                                break;
                              }
                              return (e.next = 14), Gn();
                            case 14:
                              if (
                                ((O = v.filter(function (e) {
                                  return e !== j.getOtherChoiceRef();
                                })),
                                (y = O),
                                !n && O[0] && (y = [O[0]]),
                                s(o, y, null, { isFromPrefilledAnswer: !0 }),
                                !d || n || g)
                              ) {
                                e.next = 22;
                                break;
                              }
                              return (e.next = 21), Qn();
                            case 21:
                              u(o, null, { isFromPrefilledAnswer: !0 });
                            case 22:
                              g &&
                                (this.otherChoiceTimeout = setTimeout(
                                  function () {
                                    return j.setIsOtherChoiceEditing(!0);
                                  },
                                  J.a
                                ));
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "fillOtherValueWithPartial",
              value: function () {
                var e = this.props,
                  t = e.partialResponse,
                  n = e.choices,
                  r = e.allowOtherChoice;
                if (t) {
                  var o = n.map(function (e) {
                      return e.ref;
                    }),
                    a = t.find(function (e) {
                      return !o.includes(e);
                    });
                  if (a) {
                    var i = this.state.otherValue && this.state.otherValue[0];
                    r && a !== i && this.setState({ otherValue: a });
                  }
                }
              },
            },
            {
              key: "handleLetterKeyboardShortcut",
              value: function (e) {
                var t = this.letterShortcutBuffer.current.length,
                  n = this.letterShortcutBuffer.current.join("").toUpperCase(),
                  r = n.charCodeAt(t - 1) - 65;
                2 === t && (r += 26 * (n.charCodeAt(0) - 65 + 1));
                var o = this.getPositionRef(r);
                this.handleKeyboardSelect(o, e),
                  (this.letterShortcutBuffer.current = null);
              },
            },
            {
              key: "handleFirstCharacterShortcut",
              value: function (e) {
                var t = this.firstCharacterShortcuts.findIndex(function (t) {
                    return (
                      (null == e ? void 0 : e.key.toUpperCase()) ===
                      t.toUpperCase()
                    );
                  }),
                  n = this.getPositionRef(t);
                this.handleKeyboardSelect(n, e);
              },
            },
            {
              key: "handleCustomCharacterShortcut",
              value: function (e) {
                var t = this.props,
                  n = t.choices,
                  r = t.t,
                  o = n.find(function (t) {
                    var n = t.keyboardShortcut;
                    return r(n) === (null == e ? void 0 : e.key.toUpperCase());
                  });
                this.handleKeyboardSelect(null == o ? void 0 : o.ref, e);
              },
            },
            {
              key: "removeStagedOtherChoice",
              value: function (e) {
                var t = this;
                return e.filter(function (e) {
                  return e !== t.getOtherValue();
                });
              },
            },
            {
              key: "unstageOtherChoice",
              value: function (e) {
                var t = this.props,
                  n = t.onStageAnswer,
                  r = t.value,
                  o = t.allowMultipleSelection,
                  a = r || [];
                n(t.blockRef, o ? this.removeStagedOtherChoice(a) : [], e),
                  this.setState({ otherValue: "" });
              },
            },
            {
              key: "handleKeyboardSelect",
              value: function (e, t) {
                e
                  ? e !== this.getOtherChoiceRef()
                    ? this.handleSelect(e, t)
                    : this.setIsOtherChoiceEditing(!0)
                  : this.handleCommitAnswer();
              },
            },
            {
              key: "canSelectMoreChoices",
              value: function () {
                var e = this.props,
                  t = e.value,
                  n = e.validations.maxSelection;
                return !n || (t || []).length < n;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.allowMultipleSelection,
                  n = e.allowOtherChoice,
                  r = e.choices,
                  o = e.isActive,
                  a = e.isCommitted,
                  i = e.isValid,
                  c = e.layout,
                  s = e.onInputBlur,
                  l = e.showLabels,
                  d = e.submitForm,
                  p = e.supersized,
                  f = e.t,
                  b = e.textAlign,
                  m = e.theme,
                  h = e.title,
                  v = e.uniqueId,
                  g = e.validationError,
                  O = e.validations,
                  y = e.value,
                  j = e.verticalAlignment,
                  w = e.withImage,
                  k = this.state,
                  x = k.otherValue,
                  C = k.isOtherChoiceEditing,
                  E = O.minSelection,
                  S = O.maxSelection,
                  I = this.getChoicesLength(),
                  P = y || [],
                  T = !this.canSelectMoreChoices(),
                  _ = !j && !this.props.longestChoiceWidth,
                  R =
                    this.props.longestChoiceWidth ||
                    this.state.longestChoiceWidth,
                  D = a && !i && !C,
                  F = !!this.getOtherValue(),
                  N = Object(B.a)({
                    isErrorMessageVisible: D,
                    hasInputInstructions: Boolean(t && o),
                    uniqueId: v,
                  }),
                  M = {
                    superSizedImage: p,
                    choiceRef: this.getOtherChoiceRef(),
                    color: m.colors.secondary,
                    contextBackgroundColor: m.colors.background,
                  },
                  H = {
                    dataQa: "other-choice",
                    selected: F,
                    imageSvg: Vn.a,
                    choiceRef: this.getOtherChoiceRef(),
                  },
                  z = w
                    ? V.i.pictureChoiceAndRatingLabel
                    : V.i.multipleChoiceLabel,
                  K = {
                    allowOtherChoice: n,
                    answer: P,
                    ariaDescribedBy: N,
                    choiceProps: M,
                    choices: r,
                    choicesLength: I,
                    createKeyShortcut: this.createKeyShortcut,
                    handleColumnsChanged: this.handleColumnsChanged,
                    handleOtherChoiceChange: this.handleOtherChoiceChange,
                    handleOtherChoiceCommit: this.handleOtherChoiceCommit,
                    handleSelect: this.handleSelect,
                    isOtherChoiceEditing: C,
                    longestChoiceWidth: R,
                    onInputBlur: s,
                    otherChoiceProps: H,
                    otherChoiceRef: this.getOtherChoiceRef(),
                    otherLabelAndInputFontSize: z,
                    otherValue: x,
                    setIsOtherChoiceEditing: this.setIsOtherChoiceEditing,
                    shouldDisableChoices: T,
                    showLabels: l,
                    t: f,
                    textAlign: b,
                    theme: m,
                    verticalAlignment: j,
                    withImage: w,
                  };
                return u.a.createElement(
                  it,
                  A()({}, this.props, {
                    titleFor: v,
                    titleTag: "legend",
                    titleText: h,
                    onKeyDown: this.handleKeyDown,
                  }),
                  r &&
                    u.a.createElement(
                      hn.a,
                      {
                        onEnter: this.handleContentEntersViewport,
                        onLeave: this.handleContentLeavesViewport,
                      },
                      u.a.createElement(
                        L.a,
                        {
                          top: V.p.topMultipleChoiceBlockContent,
                          ref: this.getBlockNode,
                        },
                        t &&
                          o &&
                          u.a.createElement(
                            u.a.Fragment,
                            null,
                            u.a.createElement(Mn.a, {
                              color: m.colors.secondary,
                              id: Object(B.d)(v),
                              maxSelection: S,
                              minSelection: E,
                              selectionCount: P.length,
                            })
                          ),
                        _ &&
                          u.a.createElement(er, {
                            theme: m,
                            onLongestChoiceWidthChanged:
                              this.handleLongestChoiceWidthChanged,
                            choices: r,
                            t: f,
                            allowOtherChoice: n,
                            otherValue: x,
                            vertical: j,
                          }),
                        t ? u.a.createElement(fr, K) : u.a.createElement(lr, K),
                        u.a.createElement(De, {
                          blockError: g,
                          blockRef: this.props.blockRef,
                          errorMessageId: Object(B.c)(v),
                          errorMessageRef: this.errorMessageRef,
                          isErrorMessageVisible: D,
                          layout: c,
                          layoutItemsSize: this.props.layoutItemsSize,
                          onClick: this.handleCommitAnswer,
                          submitForm: d,
                        })
                      )
                    )
                );
              },
            },
          ]),
          r
        );
      })(c.Component);
      mr.defaultProps = {
        keyboardShortcutType: "letter",
        onCommitAnswer: _.a,
        onInputBlur: _.a,
        onStageAnswer: _.a,
        recenter: _.a,
        scrollToChoice: _.a,
        showLabels: !0,
        submitForm: _.a,
        t: function (e) {
          return e;
        },
        theme: { colors: { secondary: o.b, background: o.b } },
        updateGlobalEventListenerRef: _.a,
        validations: {},
        verticalAlignment: !0,
        withImage: !1,
      };
      var hr = ft(mr);
      n(107), n(20), n(311);
      function vr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      function gr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? gr(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var yr = { sm: 110, md: 140, lg: 150, xl: 150 },
        jr = x()(JSON.stringify, function (e) {
          var t = e.choices,
            n = e.croppedChoiceRefs;
          return t.map(function (e) {
            return Or(Or({}, e), {}, { isCropped: !!n[e.ref] });
          });
        }),
        wr = (function (e) {
          An()(r, e);
          var t,
            n = vr(r);
          function r(e) {
            var t;
            return (
              Sn()(this, r),
              ((t = n.call(this, e)).state = { croppedChoiceRefs: {} }),
              t
            );
          }
          return (
            Pn()(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.updateCroppedChoiceRefs(
                    this.props.supersized,
                    this.props.choices,
                    this.state.croppedChoiceRefs
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.updateCroppedChoiceRefs(
                    this.props.supersized,
                    this.props.choices,
                    this.state.croppedChoiceRefs
                  );
                },
              },
              {
                key: "updateCroppedChoiceRefs",
                value:
                  ((t = mn()(
                    fn.a.mark(function e(t, n, r) {
                      var o, a, i, c, u, s;
                      return fn.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (t) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                if (
                                  ((o = {}), !this.updatingCroopedChoicesRefs)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                (this.updatingCroopedChoicesRefs = !0),
                                  (e.t0 = fn.a.keys(n));
                              case 7:
                                if ((e.t1 = e.t0()).done) {
                                  e.next = 24;
                                  break;
                                }
                                if (
                                  ((a = e.t1.value),
                                  (i = n[a]),
                                  (c = i.attachment && i.attachment.resource),
                                  !(u = c && c.src) || null != r[i.ref])
                                ) {
                                  e.next = 22;
                                  break;
                                }
                                return (
                                  (e.prev = 13), (e.next = 16), Object(gn.a)(u)
                                );
                              case 16:
                                (s = e.sent), (o[i.ref] = s), (e.next = 22);
                                break;
                              case 20:
                                (e.prev = 20), (e.t2 = e.catch(13));
                              case 22:
                                e.next = 7;
                                break;
                              case 24:
                                Object.keys(o).length &&
                                  this.setState({
                                    croppedChoiceRefs: Or(Or({}, r), o),
                                  }),
                                  (this.updatingCroopedChoicesRefs = !1);
                              case 27:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[13, 20]]
                      );
                    })
                  )),
                  function (e, n, r) {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.breakpoint,
                    n = e.supersized,
                    r = e.choices,
                    o = yr[t] * (n ? 1.5 : 1),
                    a = n
                      ? jr({
                          choices: r,
                          croppedChoiceRefs: this.state.croppedChoiceRefs,
                        })
                      : r;
                  return u.a.createElement(
                    hr,
                    A()({}, this.props, {
                      choices: a,
                      verticalAlignment: !1,
                      longestChoiceWidth: Math.round(o),
                      withImage: !0,
                    })
                  );
                },
              },
            ]),
            r
          );
        })(c.Component);
      d.a.defaultProps = { choices: [] };
      var kr = Object(v.f)(wr),
        xr = n(630),
        Cr = n(479),
        Er = n(487),
        Sr = n(158);
      function Ir(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ir(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ir(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Tr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      var _r = s.d.div.withConfig({
          displayName: "MobileDropdown__ContentWrapper",
          componentId: "sc-1nkg1xj-0",
        })([
          "display:flex;flex:1;height:100%;width:100%;align-items:center;padding:8px 0 8px 8px;",
        ]),
        Rr = s.d.div.withConfig({
          displayName: "MobileDropdown__SelectWrapper",
          componentId: "sc-1nkg1xj-1",
        })(["position:relative;"]),
        Ar = Object(s.d)(ze.a)
          .attrs({ svg: Cr.a })
          .withConfig({
            displayName: "MobileDropdown__DropdownIcon",
            componentId: "sc-1nkg1xj-2",
          })(["position:absolute;right:5px;top:14px;user-select:none;"]),
        Dr = s.d.button.withConfig({
          displayName: "MobileDropdown__MobileTrigger",
          componentId: "sc-1nkg1xj-3",
        })(
          [
            "appearance:none;display:block;width:100%;font-family:inherit;padding-left:0px;padding-right:26px;padding-bottom:8px;border-radius:0;border:none;transition:0.2s;text-align:left;background-color:transparent;box-shadow:0 1px ",
            ";&:-moz-focusring{color:transparent;text-shadow:0 0 0 transparent;}outline:none;&:focus{outline:none;}",
          ],
          function (e) {
            return Object(o.A)(e.color);
          }
        ),
        Br = (function (e) {
          An()(n, e);
          var t = Tr(n);
          function n(e) {
            var r;
            return (
              Sn()(this, n),
              (r = t.call(this, e)),
              w()(_n()(r), "getFilteredOptions", function () {
                return r
                  .memoizedFilterOptions(r.props.choices, r.state.filter)
                  .map(function (e) {
                    return Pr(
                      Pr({}, e),
                      {},
                      {
                        label: Object(Er.b)(e.label, r.state.filter),
                        value: e.label,
                        key: e.key,
                      }
                    );
                  });
              }),
              w()(_n()(r), "toggleDropdown", function (e) {
                e !== r.state.showList && r.setState({ showList: e });
              }),
              w()(_n()(r), "handleCommit", function (e) {
                e.persist(), r.props.onCommitAnswer(r.props.blockRef, e);
              }),
              w()(_n()(r), "handleInputChange", function (e) {
                r.setState({ filter: e || "" });
              }),
              w()(_n()(r), "handleKeyDown", function (e) {
                e.stopPropagation();
              }),
              w()(_n()(r), "handleTriggerClick", function () {
                r.setState({ showList: !0 });
              }),
              w()(_n()(r), "handleSelectClose", function () {
                r.setState({ showList: !1 }),
                  r.dialogTriggerRef.current.focus();
              }),
              w()(_n()(r), "handleOptionSelected", function (e, t) {
                if (e && e.value) {
                  var n = r.props.choices.findIndex(function (t) {
                    return t.label === e.value;
                  });
                  if (r.state.forceSelectedIndex === n)
                    return (
                      r.setState({ forceSelectedIndex: -1 }),
                      void r.props.onStageAnswer(r.props.blockRef, [], t)
                    );
                  var o = e.value;
                  e.ref &&
                    (o = {
                      id: e.id,
                      label: e.value,
                      ref: e.ref,
                      value: e.value,
                    }),
                    r.setState({ forceSelectedIndex: n }),
                    r.props.onStageAnswer(r.props.blockRef, [o], t),
                    t.persist(),
                    setTimeout(function () {
                      r.setState({ showList: !1 }),
                        setTimeout(function () {
                          r.props.onCommitAnswer(r.props.blockRef, t),
                            r.setState({ filter: "" });
                        }, 400);
                    }, 800);
                }
              }),
              (r.state = { forceSelectedIndex: -1, showList: !1, filter: "" }),
              (r.memoizedFilterOptions = x()(
                function (e, t) {
                  return t;
                },
                function (e, t) {
                  return Object(Er.a)(
                    e.map(function (e) {
                      return Pr(Pr({}, e), {}, { key: e.ref || e.label });
                    }),
                    t
                  );
                }
              )),
              (r.dialogTriggerRef = u.a.createRef()),
              r
            );
          }
          return (
            Pn()(n, [
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t = e.isActive,
                    n = e.shouldClearInput;
                  !t && this.state.showList && this.toggleDropdown(!1),
                    n && this.setState({ filter: "" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.uniqueId,
                    n = e.blockRef,
                    r = e.validationError,
                    o = e.isCommitted,
                    a = e.isValid,
                    i = e.layout,
                    c = e.layoutItemsSize,
                    s = e.placeholder,
                    l = e.partialResponse,
                    d = e.submitForm,
                    p = e.theme,
                    f = e.t,
                    b = e.value,
                    m = "",
                    h = b;
                  if (
                    ((b && b.length) ||
                      !l ||
                      (h = l.map(function (e) {
                        return e.ref || e.value || e;
                      })),
                    h && h.length)
                  ) {
                    var v,
                      g = this.props.choices.find(function (e) {
                        return e.ref === h[0] || e.label === h[0];
                      });
                    m =
                      null !== (v = null == g ? void 0 : g.label) &&
                      void 0 !== v
                        ? v
                        : null;
                  }
                  var O = function (e) {
                      return e.value === m;
                    },
                    y = function (e, t) {
                      var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      return u.a.createElement(
                        M.a,
                        { bottom: 0.5, key: e.key, left: 1, right: 1 },
                        u.a.createElement(
                          Jn.a,
                          {
                            role: "option",
                            color: p.colors.secondary,
                            selected: n,
                          },
                          u.a.createElement(
                            _r,
                            null,
                            u.a.createElement(
                              Ve.a,
                              {
                                color: p.colors.secondary,
                                ellipsis: t,
                                inline: !0,
                                type: V.i.multipleChoiceLabel,
                              },
                              e.label
                            )
                          )
                        )
                      );
                    },
                    j = this.getFilteredOptions(),
                    w = !0 === this.state.showList,
                    k = o && !a && !w,
                    x = Object(B.a)({ uniqueId: t, isErrorMessageVisible: k });
                  return u.a.createElement(
                    it,
                    A()({}, this.props, {
                      titleFor: this.props.uniqueId,
                      titleLabelId: "".concat(this.props.uniqueId, "-label"),
                      titleText: this.props.title,
                      titleTag: "label",
                    }),
                    u.a.createElement(
                      Rr,
                      { onKeyDown: this.handleKeyDown },
                      u.a.createElement(
                        Dr,
                        {
                          "aria-controls": t,
                          "aria-expanded": w,
                          ref: this.dialogTriggerRef,
                          color: p.colors.secondary,
                          onClick: this.handleTriggerClick,
                        },
                        u.a.createElement(
                          Z.b,
                          { size: "size2", color: p.colors.secondary },
                          m || f("block.dropdown.placeholderTouch")
                        ),
                        u.a.createElement(Ar, {
                          "aria-hidden": !0,
                          color: p.colors.secondary,
                        })
                      ),
                      u.a.createElement(xr.a, {
                        ariaDescribedBy: x,
                        id: t,
                        backgroundColor: p.colors.background,
                        color: p.colors.secondary,
                        className: Object(Sr.a)(p.font),
                        filterTextPlaceholder: f(s),
                        filterText: this.state.filter,
                        noResultsMessage: f("block.dropdown.hint"),
                        onFilterChange: this.handleInputChange,
                        optionRender: function (e) {
                          var t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                          return y(e, t, O(e));
                        },
                        optionHeight: 52,
                        options: j,
                        isVisible: w,
                        keyProp: "key",
                        onClose: this.handleSelectClose,
                        onSelect: this.handleOptionSelected,
                        language: null,
                        dataQa: "options-fullscreen-select",
                        disableAnimations: Qe.a,
                      })
                    ),
                    u.a.createElement(De, {
                      blockRef: n,
                      blockError: r,
                      errorMessageId: Object(B.c)(t),
                      isErrorMessageVisible: k,
                      layout: i,
                      layoutItemsSize: c,
                      onClick: this.handleCommit,
                      submitForm: d,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(c.Component);
      Br.defaultProps = {
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        recenter: _.a,
        submitForm: _.a,
        t: function (e) {
          return e;
        },
        theme: { colors: { secondary: o.b, background: o.b } },
      };
      var Fr = Object(v.f)(Br),
        Nr = n(681),
        Lr = n.n(Nr),
        Mr = n(227);
      function Vr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      var Hr = Qe.a ? 0 : 400,
        zr = new jt.b(),
        Kr = (function (e) {
          An()(n, e);
          var t = Vr(n);
          function n(e) {
            var r;
            Sn()(this, n),
              (r = t.call(this, e)),
              w()(_n()(r), "blockWrapperRef", u.a.createRef()),
              w()(_n()(r), "getFilteredOptions", function () {
                return r.memoizedFilterOptions(r.props.choices, r.state.filter);
              }),
              w()(_n()(r), "getListHeight", function () {
                if (!Object(Mr.a)()) return 0;
                var e = r.props.layoutItemsSize.boundingClientRect;
                return (
                  ((void 0 === e ? {} : e).height || window.innerHeight) / 2 -
                  8 -
                  8
                );
              }),
              w()(_n()(r), "handleWaypointEnter", function () {
                r.setState({ isContentInViewport: !0 });
              }),
              w()(_n()(r), "handleWaypointLeave", function () {
                r.setState({ isContentInViewport: !1 });
              }),
              w()(_n()(r), "stage", function (e, t) {
                r.props.onStageAnswer(r.props.blockRef, [e], t);
              }),
              w()(_n()(r), "unstage", function () {
                r.setState({ forceSelectedIndex: -1 }),
                  r.props.onStageAnswer(r.props.blockRef, []);
              }),
              w()(_n()(r), "handleAnswer", function (e, t) {
                var n = r.props.choices[e] || {},
                  o = n.label || "";
                n.ref &&
                  (o = {
                    id: n.id,
                    label: n.label,
                    ref: n.ref,
                    value: n.label,
                  }),
                  r.setState({ forceSelectedIndex: e, forceHoverIndex: -1 }),
                  o &&
                    (setTimeout(function () {
                      r.toggleDropdown(!1),
                        r.stage(o, t),
                        r.setState({ filter: n.label || "" });
                    }, Hr),
                    t.persist(),
                    setTimeout(function () {
                      r.props.onCommitAnswer(r.props.blockRef, t);
                    }, J.c));
              }),
              w()(_n()(r), "handleCommit", function (e) {
                e.persist(), r.props.onCommitAnswer(r.props.blockRef, e);
              }),
              w()(_n()(r), "handleInputBlur", function (e) {
                var t;
                (null !== (t = r.blockWrapperRef.current) &&
                  void 0 !== t &&
                  t.contains(e.relatedTarget)) ||
                  r.toggleDropdown(!1);
              }),
              w()(_n()(r), "handleInputClick", function () {
                r.toggleDropdown(!0, 0);
              }),
              w()(_n()(r), "toggleDropdown", function (e) {
                e !== r.state.showList &&
                  (e &&
                    setTimeout(function () {
                      return r.props.recenter("bottom");
                    }, 200),
                  r.setState({ showList: e, forceHoverIndex: -1 }));
              }),
              w()(_n()(r), "handleIconClick", function () {
                r.toggleDropdown(!r.state.showList);
              }),
              w()(_n()(r), "handleKeyDown", function (e) {
                if (r.state.isContentInViewport) {
                  var t,
                    n,
                    o,
                    a = r.getFilteredOptions().length;
                  if (Object(yt.b)(e))
                    return (
                      a > 0 &&
                        (r.state.showList
                          ? r.setState({
                              forceHoverIndex: Math.min(
                                a - 1,
                                r.state.forceHoverIndex + 1
                              ),
                            })
                          : r.toggleDropdown(!0)),
                      Mt(e)
                    );
                  if (Object(yt.d)(e) && r.state.showList)
                    return (
                      r.setState({
                        forceHoverIndex: Math.max(
                          0,
                          r.state.forceHoverIndex - 1
                        ),
                      }),
                      Mt(e)
                    );
                  if (Object(yt.j)(e)) return r.toggleDropdown(!1), Mt(e);
                  if (Object(yt.i)(e) && !Object(yt.g)(e)) {
                    if (
                      r.state.showList &&
                      a > 0 &&
                      -1 !== r.state.forceHoverIndex
                    ) {
                      var i =
                        ((t = r.state.forceHoverIndex),
                        (n = r.memoizedFilterOptions(
                          r.props.choices,
                          r.state.filter
                        )),
                        (o = n.find(function (e, n) {
                          return n === t;
                        }))
                          ? o.index
                          : null);
                      r.handleAnswer(i, e);
                    } else r.props.onCommitAnswer(r.props.blockRef, e);
                    Mt(e);
                  }
                }
              }),
              w()(_n()(r), "handleInputChange", function (e) {
                r.unstage();
                var t = r.memoizedFilterOptions(r.props.choices, e || ""),
                  n = null != e && t.length > 0;
                r.toggleDropdown(n),
                  r.setState({ filter: e || "", forceHoverIndex: -1 });
              }),
              (r.memoizedFilterOptions = x()(function (e, t) {
                return t;
              }, Er.a));
            var o = r.props,
              a = o.choices,
              i = o.value,
              c = o.partialResponse,
              s = "",
              l = i;
            if (
              ((i && i.length) ||
                !c ||
                (l = c.map(function (e) {
                  return e.ref || e.value || e;
                })),
              l && l.length)
            ) {
              var d,
                p = a.find(function (e) {
                  return e.ref === l[0] || e.label === l[0];
                });
              s =
                null !== (d = null == p ? void 0 : p.label) && void 0 !== d
                  ? d
                  : null;
            }
            return (
              (r.state = {
                forceHoverIndex: -1,
                forceSelectedIndex: -1,
                isContentInViewport: !1,
                showList: !1,
                filter: s,
              }),
              r
            );
          }
          return (
            Pn()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isActive &&
                    this.props.updateGlobalEventListenerRef(this.handleKeyDown);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.isActive &&
                    !e.isActive &&
                    this.props.updateGlobalEventListenerRef(this.handleKeyDown);
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t = e.isActive,
                    n = e.shouldClearInput;
                  !t && this.state.showList && this.toggleDropdown(!1),
                    n && this.setState({ filter: "" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.blockRef,
                    n = e.choices,
                    r = e.validationError,
                    o = e.isCommitted,
                    a = e.isValid,
                    i = e.labelledBy,
                    c = e.layout,
                    s = e.layoutItemsSize,
                    l = e.placeholder,
                    d = e.theme,
                    p = e.t,
                    f = e.hasDescription,
                    b = e.uniqueId,
                    m = e.submitForm,
                    h = 0 === this.getFilteredOptions().length,
                    v = !0 === this.state.showList,
                    g = (h || (!!o && !a)) && !v,
                    O = h ? zr : r,
                    y = Object(B.a)({
                      uniqueId: b,
                      isErrorMessageVisible: g,
                      hasDescription: f,
                    });
                  return u.a.createElement(
                    it,
                    A()({}, this.props, {
                      titleFor: this.props.uniqueId,
                      titleLabelId: "".concat(this.props.uniqueId, "-label"),
                      titleText: this.props.title,
                      titleTag: "label",
                      onKeyDown: this.handleKeyDown,
                      ref: this.blockWrapperRef,
                    }),
                    u.a.createElement(
                      hn.a,
                      {
                        onEnter: this.handleWaypointEnter,
                        onLeave: this.handleWaypointLeave,
                      },
                      u.a.createElement(
                        "div",
                        null,
                        u.a.createElement(Lr.a, {
                          ariaDescribedBy: y,
                          id: b,
                          placeholder: p(l),
                          options: n,
                          color: d.colors.secondary,
                          contextBackgroundColor: d.colors.background,
                          filterValue: this.state.filter,
                          hoveredIndex: this.state.forceHoverIndex,
                          labelId: i,
                          selectedIndex: this.state.forceSelectedIndex,
                          onFilterChange: this.handleInputChange,
                          onInputClick: this.handleInputClick,
                          onArrowClick: this.handleIconClick,
                          onOptionClick: this.handleAnswer,
                          onInputBlur: this.handleInputBlur,
                          optionsMaxHeight: "".concat(
                            v ? this.getListHeight() : 0,
                            "px"
                          ),
                          optionsOpen: v,
                        })
                      )
                    ),
                    u.a.createElement(De, {
                      blockRef: t,
                      hideButton: v,
                      errorMessageId: Object(B.c)(b),
                      blockError: O,
                      isErrorMessageVisible: g,
                      layout: c,
                      layoutItemsSize: s,
                      onClick: this.handleCommit,
                      submitForm: m,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(c.Component);
      Kr.defaultProps = {
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        recenter: _.a,
        submitForm: _.a,
        t: function (e) {
          return e;
        },
        theme: { colors: { secondary: o.b, background: o.b } },
        updateGlobalEventListenerRef: _.a,
      };
      var Ur = ft(Object(v.f)(Kr));
      function qr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      var Wr = (function (e) {
        An()(n, e);
        var t = qr(n);
        function n() {
          return Sn()(this, n), t.apply(this, arguments);
        }
        return (
          Pn()(n, [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return St(this.props, e);
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.isTouch
                  ? u.a.createElement(Fr, this.props)
                  : u.a.createElement(Ur, this.props);
              },
            },
          ]),
          n
        );
      })(c.Component);
      Wr.defaultProps = {
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        recenter: _.a,
        t: function (e) {
          return e;
        },
        theme: { colors: { secondary: o.b, background: o.b } },
      };
      var Yr = Object(ue.withIsTouch)(Wr),
        Gr = s.d.div.withConfig({
          displayName: "Group__ButtonWrapper",
          componentId: "sc-14mp1zx-0",
        })(
          ["", ";width:100%;outline:none;&:focus{outline:none;}"],
          function (e) {
            return e.isActive ? "" : "pointer-events: none;";
          }
        );
      Gr.displayName = "ButtonWrapper";
      var Qr = function (e) {
          var t = e.blockRef,
            n = e.buttonText,
            r = e.children,
            o = e.description,
            a = e.isActive,
            s = e.layout,
            l = e.layoutItemsSize,
            d = e.submitForm,
            p = e.t,
            f =
              void 0 === p
                ? function (e) {
                    return e;
                  }
                : p,
            b = e.title,
            m = e.uniqueId,
            h = Object(c.useRef)(),
            v = Object(c.useState)(!1),
            g = i()(v, 2),
            O = g[0],
            y = g[1],
            j = Object(c.useCallback)(
              function (e) {
                O || e.stopPropagation();
              },
              [O]
            );
          dt(a, j);
          var w = "".concat(m, "-title"),
            k = "\n    ".concat(w, " ").concat(o ? Object(B.b)(m) : "", "\n  ");
          return u.a.createElement(
            it,
            A()({}, e, { titleLabelId: w, titleText: b, onKeyDown: j }),
            u.a.createElement(
              hn.a,
              {
                onEnter: function () {
                  return y(!0);
                },
                onLeave: function () {
                  return y(!1);
                },
              },
              r
            ),
            u.a.createElement(
              Gr,
              { ref: h, isActive: a },
              u.a.createElement(De, {
                ariaDescribedBy: k,
                blockRef: t,
                buttonText: f(n),
                layout: s,
                layoutItemsSize: l,
                onClick: function (n) {
                  a && e.onCommitAnswer(t, n);
                },
                isAnimated: !1,
                isVisible: a,
                hideIcon: !0,
                submitForm: d,
              })
            )
          );
        },
        Jr = Object(c.memo)(Qr, It),
        Zr = function (e) {
          return u.a.createElement(
            Jr,
            A()({}, e, { titleCounterIcon: e.hideMarks ? null : "quote" })
          );
        },
        $r = function (e) {
          var t = {
              true: "".concat(e.blockRef, "-yes"),
              false: "".concat(e.blockRef, "-no"),
            },
            n = [
              {
                ref: t[!0],
                value: !0,
                label: "label.yes.default",
                keyboardShortcut: "label.yes.shortcut",
              },
              {
                ref: t[!1],
                value: !1,
                label: "label.no.default",
                keyboardShortcut: "label.no.shortcut",
              },
            ],
            r = Array.isArray(e.value) ? e.value[0] : e.value;
          return u.a.createElement(
            hr,
            A()({ choices: n }, e, {
              value: [t[r]],
              onStageAnswer: function (t, r, o) {
                var a = i()(r, 1),
                  c = a[0],
                  u =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  s = u.isFromPrefilledAnswer,
                  l = void 0 !== s && s,
                  d = n.find(function (e) {
                    return e.ref === c;
                  }),
                  p = [{ value: d && d.value, label: d && e.t(d.label) }];
                e.onStageAnswer(e.blockRef, d ? p : [], o, {
                  isFromPrefilledAnswer: l,
                });
              },
              keyboardShortcutType: "custom",
              verticalAlignment: !0,
            })
          );
        };
      $r.defaultProps = {
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        t: function (e) {
          return e;
        },
        theme: { colors: { secondary: o.b, background: o.b } },
      };
      var Xr = $r,
        eo = function (e) {
          var t = {
              true: "".concat(e.blockRef, "-accept"),
              false: "".concat(e.blockRef, "-reject"),
            },
            n = [
              { ref: t[!0], value: !0, label: "block.legal.accept" },
              { ref: t[!1], value: !1, label: "block.legal.reject" },
            ],
            r = Array.isArray(e.value) ? e.value[0] : e.value;
          return u.a.createElement(
            hr,
            A()({ choices: n }, e, {
              value: [t[r]],
              onStageAnswer: function (t, r, o) {
                var a = i()(r, 1)[0],
                  c = n.find(function (e) {
                    return e.ref === a;
                  }),
                  u = [{ value: c && c.value, label: c && e.t(c.label) }];
                e.onStageAnswer(e.blockRef, c ? u : [], o);
              },
              keyboardShortcutType: "letter",
              verticalAlignment: !0,
            })
          );
        };
      eo.defaultProps = {
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        t: function (e) {
          return e;
        },
        theme: { colors: { secondary: "#FF00FF", background: "#FFFFFF" } },
      };
      var to = eo,
        no =
          (n(312),
          function (e) {
            var t = e.autoComplete,
              n = e.blockRef,
              r = e.hasDescription,
              a = e.inlineSubmit,
              s = e.inputType,
              l = e.isActive,
              d = e.isCommitted,
              p = e.isValid,
              f = e.layout,
              b = e.layoutItemsSize,
              m = e.maxLength,
              h = e.onCommitAnswer,
              v = e.onInputBlur,
              g = e.onInputFocus,
              O = e.onStageAnswer,
              y = e.placeholder,
              j = e.recenter,
              w = e.setBlockTrackingData,
              k = e.t,
              x = e.theme,
              C = e.title,
              E = e.type,
              S = e.uniqueId,
              I = e.validationError,
              T = e.submitForm,
              _ = Et(J.i),
              R = i()(_, 3),
              D = R[0],
              F = R[1],
              N = R[2],
              L = Et(J.b),
              M = i()(L, 3),
              V = M[0],
              H = M[1],
              z = M[2],
              K = Object(c.useState)(null),
              U = i()(K, 2),
              q = U[0],
              W = U[1],
              Y = Object(c.useRef)(null),
              G = Object(c.useRef)(null),
              Q = Y === document.activeElement;
            Object(c.useEffect)(function () {
              return function () {
                N(), z();
              };
            }, []);
            var Z = Object(c.useCallback)(
              function (e) {
                kt(E, e);
                var t = e.nativeEvent || e;
                Object(yt.i)(t) && !Object(yt.g)(t)
                  ? (Object(o.n)() && Y && Y.current && Y.current.blur(),
                    e.persist && e.persist(),
                    setTimeout(function () {
                      l && h(n, t);
                    }, (Object(o.n)(), 0)))
                  : (G.current = {
                      key: e.key,
                      keyCode: e.keyCode,
                      timestamp: new Date().getTime(),
                      type: e.type,
                    }),
                  Object(yt.f)(t) &&
                    (e.stopPropagation(), e.persist && e.persist(), a(n, t));
              },
              [n, l, a, h]
            );
            dt(l, Z);
            var $ = e.value.length > 0 ? e.value[0] : "",
              X = (d && !p) || V,
              ee = Object(B.a)({
                uniqueId: S,
                isErrorMessageVisible: X,
                hasDescription: r,
              });
            return u.a.createElement(
              it,
              A()({}, e, {
                isShaking: D,
                titleFor: S,
                titleTag: "label",
                titleText: C,
              }),
              u.a.createElement(Nt.a, {
                autoComplete: t,
                getRef: Y,
                placeholder: k(y),
                onKeyDown: Z,
                onKeyPress: function (e) {
                  var t = wt(E, m, e),
                    n = t.blocked,
                    r = t.error;
                  F(n), H(n), W(r);
                },
                onChange: function (t) {
                  if (l) {
                    var r = e.value[0] || "";
                    Vt(G.current, t, r) && w(n, P.a, P.b.BROWSER_AUTO_COMPLETE);
                    var o = t.target.value;
                    O(n, o.slice(0, m), t);
                  }
                },
                onPaste: function (e) {
                  G.current = { timestamp: new Date().getTime(), type: e.type };
                  var t = xt(m, e),
                    n = t.blocked,
                    r = t.error;
                  F(n), H(n), W(r);
                },
                onFocus: function () {
                  Object(o.n)() &&
                    (g(),
                    Object(Ct.c)() ||
                      setTimeout(function () {
                        j("bottom");
                      }, 0));
                },
                onBlur: v,
                maxLength: m,
                name: t,
                inputId: S,
                value: $,
                color: x.colors.secondary,
                type: s,
                "aria-describedby": ee,
              }),
              u.a.createElement(De, {
                blockRef: n,
                errorMessageId: Object(B.c)(S),
                blockError: V ? q : I,
                isErrorMessageVisible: X,
                layout: f,
                layoutItemsSize: b,
                onClick: function (e) {
                  var t = Q && Object(o.n)();
                  Y && Y.current && t && Y.current.blur(),
                    e.persist(),
                    e.stopPropagation(),
                    setTimeout(function () {
                      l && h(n, e);
                    }, 0);
                },
                onFocusLost: function () {
                  Y && Y.current && Y.current.focus();
                },
                submitForm: T,
              })
            );
          });
      no.defaultProps = {
        inlineSubmit: _.a,
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        setBlockTrackingData: _.a,
        submitForm: _.a,
        t: _.a,
        theme: { colors: { secondary: o.b } },
        value: [],
        autoComplete: void 0,
      };
      var ro = Object(c.memo)(no, It);
      ro.defaultProps = { onCommitAnswer: _.a, onStageAnswer: _.a };
      var oo = function (e) {
          return u.a.createElement(
            ro,
            A()({}, e, {
              autoComplete: "email",
              inputType: "email",
              maxLength: 256,
              onCommitAnswer: function (t, n) {
                e.value &&
                  Array.isArray(e.value) &&
                  e.value[0] &&
                  e.onStageAnswer(t, e.value[0].trim(), n),
                  e.onCommitAnswer(t, n);
              },
            })
          );
        },
        ao = /\D+/g,
        io = function (e) {
          return u.a.createElement(
            ro,
            A()({}, e, {
              autoComplete: "off",
              inputType: "tel",
              maxLength: 15,
              onStageAnswer: function (t, n, r) {
                (n = parseInt(String(n).replace(ao, ""), 10)),
                  e.onStageAnswer(e.blockRef, n, r);
              },
            })
          );
        },
        co = (n(136), n(695)),
        uo = n(235),
        so = n(290),
        lo = n.n(so),
        po = n(790),
        fo = n(791),
        bo = n(696),
        mo = n(481),
        ho = n(34),
        vo = Object(s.d)(ze.a).withConfig({
          displayName: "icon__StrokeIcon",
          componentId: "pde181-0",
        })(
          [
            "margin-right:8px;svg{transform:scale(1);box-shadow:0 0 0 1px ",
            ";border-radius:4px;box-sizing:content-box;background-color:#fff;}",
          ],
          function (e) {
            return Object(o.l)(e.color)
              ? Object(o.z)("#000")
              : Object(o.z)("#FFF");
          }
        );
      function go(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      function Oo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function yo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Oo(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oo(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var jo = s.d.div.withConfig({
          displayName: "select__MobileWrapper",
          componentId: "sc-1xepqbq-0",
        })(["position:absolute;z-index:", ";", ";"], V.u.level5, function (e) {
          return e.isVisible ? "" : "pointer-events: none";
        }),
        wo = s.d.div.withConfig({
          displayName: "select__DesktopWrapper",
          componentId: "sc-1xepqbq-1",
        })(
          [
            "position:absolute;top:-16px;width:450px;height:300px;overflow:hidden;z-index:",
            ";",
            ";",
          ],
          V.u.level5,
          function (e) {
            return e.isVisible ? "" : "pointer-events: none";
          }
        );
      wo.displayName = "DesktopWrapper";
      var ko = s.d.div.withConfig({
          displayName: "select__ContentWrapper",
          componentId: "sc-1xepqbq-2",
        })(
          [
            "width:100%;display:flex;height:100%;align-items:center;padding:",
            ";",
          ],
          function (e) {
            return e.hasVerticalPadding ? "8px" : "0 8px";
          }
        ),
        xo = s.d.div.withConfig({
          displayName: "select__ContentText",
          componentId: "sc-1xepqbq-3",
        })([
          "display:flex;height:100%;flex:1;justify-content:space-between;align-items:center;",
        ]),
        Co = Object(s.d)(p.b).withConfig({
          displayName: "select__StyledAnimate",
          componentId: "sc-1xepqbq-4",
        })(["position:relative;"]),
        Eo = x()(
          function (e) {
            return e;
          },
          function (e, t) {
            return Object(Er.a)(t, e, "name").map(function (t, n) {
              return yo(
                yo({}, t),
                {},
                {
                  index: n,
                  name: Object(Er.b)(t.name, e),
                  originalName: t.name,
                }
              );
            });
          }
        ),
        So = function (e) {
          var t = e.backgroundColor,
            n = e.blockRef,
            r = e.color,
            o = e.hoveredCode,
            a = e.id,
            i = e.hasVerticalPadding,
            c = e.selectedCode,
            s = e.sideMargin;
          return function (e) {
            var l = e.code,
              d = e.index,
              p = e.name,
              f = e.originalName,
              b = e.prefix,
              m = e.svg,
              h = l === c,
              v = l === o;
            return u.a.createElement(
              M.a,
              { bottom: 0.5, left: s, right: s },
              u.a.createElement(
                mo.a,
                {
                  color: r,
                  hovered: v,
                  id: "".concat(a, "-").concat(d),
                  role: "option",
                  selectable: !0,
                  selected: h,
                },
                u.a.createElement(
                  ko,
                  { hasVerticalPadding: i },
                  u.a.createElement(vo, {
                    "aria-hidden": !0,
                    color: t,
                    svg: u.a.createElement(po.a, { svgCode: m(n) }),
                  }),
                  u.a.createElement(
                    xo,
                    null,
                    u.a.createElement(
                      Ve.a,
                      {
                        "aria-hidden": !0,
                        color: r,
                        inline: !0,
                        type: V.i.multipleChoiceLabel,
                      },
                      p
                    ),
                    u.a.createElement(X.b, null, f),
                    u.a.createElement(
                      Ve.a,
                      { color: r, inline: !0, type: V.i.multipleChoiceLabel },
                      "+".concat(b)
                    )
                  )
                )
              )
            );
          };
        },
        Io = (function (e) {
          An()(n, e);
          var t = go(n);
          function n(e) {
            var r;
            return (
              Sn()(this, n),
              (r = t.call(this, e)),
              w()(_n()(r), "handleKeyDown", function (e) {
                var t = r.props,
                  n = t.data,
                  o = t.filterText,
                  a = r.state.hoveredIndex,
                  i = Eo(o, n),
                  c = i.length;
                switch (e.key) {
                  case ho.a.ARROW_DOWN:
                    e.preventDefault(),
                      e.stopPropagation(),
                      r.setState({ hoveredIndex: Math.min(c - 1, a + 1) });
                    break;
                  case ho.a.ARROW_UP:
                    e.preventDefault(),
                      e.stopPropagation(),
                      r.setState({ hoveredIndex: Math.max(0, a - 1) });
                    break;
                  case ho.a.TAB:
                  case ho.a.ESCAPE:
                    e.preventDefault(), e.stopPropagation(), r.props.onClose();
                    break;
                  case ho.a.ENTER:
                    e.preventDefault(),
                      e.stopPropagation(),
                      -1 === a
                        ? c > 0 && "" !== o
                          ? r.handleSelection(i[0], e)
                          : r.props.onClose()
                        : c > 0 && r.handleSelection(i[a], e);
                }
              }),
              w()(_n()(r), "handleFilterChange", function (e) {
                r.resetHoveredIndex(), r.props.onFilterChange(e);
              }),
              w()(_n()(r), "handleSelection", function (e, t) {
                r.props.onSelect(e, t),
                  (r.onCloseTimeout = setTimeout(function () {
                    r.props.onClose();
                  }, 1e3));
              }),
              (r.state = { hoveredIndex: -1 }),
              (r.onCloseTimeout = null),
              r
            );
          }
          return (
            Pn()(n, [
              {
                key: "componentDidUpdate",
                value: function (e) {
                  !e.isOpen && this.props.isOpen && this.resetHoveredIndex();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this.onCloseTimeout);
                },
              },
              {
                key: "resetHoveredIndex",
                value: function () {
                  this.setState({ hoveredIndex: -1 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.backgroundColor,
                    n = e.blockRef,
                    r = e.breakpoint,
                    o = e.color,
                    a = e.data,
                    i = e.filterText,
                    c = e.fontFamily,
                    s = e.id,
                    l = e.innerRef,
                    d = e.isOpen,
                    p = e.language,
                    f = e.onClose,
                    b = e.onFilterChange,
                    m = e.t,
                    h = e.value,
                    v = m("block.countryDropdown.searchCountries"),
                    g = m("block.countryDropdown.hint"),
                    O = Eo(i, a),
                    y = this.state.hoveredIndex,
                    j = O.length && O[y] ? O[y].code : "",
                    w = -1 !== y ? "".concat(s, "-").concat(y) : null;
                  return "sm" === r
                    ? u.a.createElement(
                        jo,
                        { "aria-hidden": !d, isVisible: d, ref: l },
                        u.a.createElement(xr.a, {
                          backgroundColor: t,
                          className: Object(Sr.a)(c),
                          dataQa: "country-fullscreen-select",
                          disableAnimations: Qe.a,
                          color: o,
                          filterTextPlaceholder: v,
                          filterText: i,
                          focusedOptionId: w,
                          id: s,
                          isVisible: d,
                          keyProp: "code",
                          language: p,
                          noResultsMessage: g,
                          onFilterChange: b,
                          optionRender: So({
                            backgroundColor: t,
                            blockRef: n,
                            color: o,
                            hasVerticalPadding: !0,
                            id: s,
                            selectedCode: h,
                            sideMargin: 1,
                          }),
                          optionHeight: 52,
                          options: O,
                          onClose: f,
                          onSelect: this.handleSelection,
                          parentRef: l,
                        })
                      )
                    : u.a.createElement(
                        Co,
                        { isVisible: d, type: "slideUp" },
                        u.a.createElement(
                          wo,
                          {
                            "aria-hidden": !d,
                            isVisible: d,
                            onKeyDown: this.handleKeyDown,
                            ref: l,
                          },
                          u.a.createElement(bo.a, {
                            backgroundColor: t,
                            color: o,
                            dataQa: "country-dropdown-select",
                            filterText: i,
                            filterTextPlaceholder: v,
                            focusedOptionId: w,
                            hoveredIndex: y,
                            id: s,
                            isVisible: d,
                            keyProp: "code",
                            language: p,
                            noResultsMessage: g,
                            onFilterChange: this.handleFilterChange,
                            optionRender: So({
                              backgroundColor: t,
                              blockRef: n,
                              color: o,
                              hoveredCode: j,
                              id: s,
                              hasVerticalPadding: !1,
                              selectedCode: h,
                              sideMargin: 2,
                            }),
                            optionHeight: 44,
                            options: O,
                            onClose: f,
                            onSelect: this.handleSelection,
                          })
                        )
                      );
                },
              },
            ]),
            n
          );
        })(c.PureComponent);
      Io.defaultProps = {
        backgroundColor: o.b,
        color: o.b,
        data: [],
        filterText: "",
        fontFamily: V.h,
        onClose: _.a,
        onFilterChange: _.a,
        onSelect: _.a,
        t: _.a,
      };
      var Po = Object(T.a)(Io),
        To = void 0;
      function _o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ro(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _o(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Ao = function (e, t, n) {
          return lo()(
            function (e, t) {
              return e.name.localeCompare(t.name);
            },
            e.map(function (e) {
              return Ro(Ro({}, e), {}, { name: n(e.code, t) });
            })
          );
        },
        Do = Object(T.a)(function (e) {
          var t = e.backgroundColor,
            r = e.blockRef,
            o = e.color,
            a = e.fontFamily,
            s = e.id,
            l = e.innerRef,
            d = e.isOpen,
            p = e.language,
            f = e.onChange,
            b = e.onClose,
            m = e.onOpen,
            h = e.onTriggerIconButtonBlur,
            g = e.onTriggerIconButtonFocus,
            O = e.t,
            y = e.value,
            j = Object(c.useState)(""),
            w = i()(j, 2),
            k = w[0],
            x = w[1],
            C = Object(c.useState)([]),
            E = i()(C, 2),
            S = E[0],
            I = E[1],
            P = Object(c.useState)(!1),
            T = i()(P, 2),
            _ = T[0],
            R = T[1],
            A = Object(c.useRef)(function (e) {
              return e;
            }),
            D = Object(c.useRef)(),
            F = Object(ue.useIsTouch)(),
            N = Object(v.c)(),
            L = "sm" === N,
            M = Object(c.useCallback)(
              function (e) {
                (function (e, t) {
                  var n = t;
                  do {
                    if (n === e) return !0;
                    n = n.parentElement;
                  } while (null !== n);
                  return !1;
                })(D.current, e.target) ||
                  (!F && _ && b({ enableNavigation: L }));
              },
              [b, _, L]
            );
          Object(c.useEffect)(function () {
            Promise.all([n.e(8), n.e(1)])
              .then(n.bind(null, 802))
              .then(function (e) {
                (A.current = e.countryNameTranslator),
                  I(Ao(e.countryData, p, A.current));
              })
              .catch(function (e) {
                To.props.onUnrecoverableError(e);
              });
          }, []),
            Object(c.useEffect)(
              function () {
                return (
                  window.addEventListener("click", M),
                  function () {
                    return window.removeEventListener("click", M);
                  }
                );
              },
              [M]
            ),
            Object(c.useEffect)(
              function () {
                if (d) {
                  var e = setTimeout(function () {
                    R(!0);
                  }, 200);
                  return function () {
                    return clearTimeout(e);
                  };
                }
                R(!1), x("");
              },
              [d]
            ),
            Object(c.useEffect)(
              function () {
                I(Ao(S, p, A.current));
              },
              [p]
            );
          var V = Object(B.a)({ uniqueId: s, hasInputInstructions: d }),
            H = S.find(function (e) {
              return e.code === y;
            });
          return H
            ? u.a.createElement(
                c.Fragment,
                null,
                u.a.createElement(Po, {
                  autoComplete: "tel-national",
                  backgroundColor: t,
                  blockRef: r,
                  breakpoint: N,
                  color: o,
                  data: S,
                  fontFamily: a,
                  filterText: k,
                  id: s,
                  innerRef: D,
                  isOpen: d,
                  language: p,
                  onClose: function () {
                    return b({ enableNavigation: L });
                  },
                  onFilterChange: function (e) {
                    x(e);
                  },
                  onSelect: function (e, t) {
                    return f(e.code, t);
                  },
                  value: H.code,
                }),
                u.a.createElement(fo.a, {
                  ariaLabel: ""
                    .concat(O("aria.phone-number.country-button-label"), ": ")
                    .concat(H.name),
                  ariaControls: s,
                  ariaDescribedBy: V,
                  backgroundColor: t,
                  color: o,
                  dataQa: "trigger-button",
                  iconSvg: u.a.createElement(po.a, {
                    svgCode: H.svg("".concat(r, "-selected")),
                  }),
                  isVisible: !d,
                  isExpanded: d,
                  onBlur: h,
                  onClick: function () {
                    return m({ disableNavigation: L });
                  },
                  onFocus: g,
                  onKeyDown: function (e) {
                    Object(yt.i)(e.nativeEvent) &&
                      !Object(yt.f)(e) &&
                      (e.stopPropagation(), m({ disableNavigation: L })),
                      Object(yt.o)(e) &&
                        !Object(yt.m)(e) &&
                        e.stopPropagation();
                  },
                  ref: l,
                })
              )
            : null;
        }),
        Bo = n(557);
      function Fo(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      var No = /^[A-Za-z]+$/,
        Lo = /[^0-9a-zA-Z]+/gi,
        Mo = s.d.div.withConfig({
          displayName: "PhoneNumber__Root",
          componentId: "ver6na-0",
        })(
          ["display:flex;align-items:flex-end;max-width:450px;", ";"],
          function (e) {
            return e.textAlign === g.e.CENTER ? "margin:auto" : "";
          }
        ),
        Vo = s.d.div.withConfig({
          displayName: "PhoneNumber__DropdownWrapper",
          componentId: "ver6na-1",
        })(["margin-right:16px;position:relative;z-index:", ";"], V.u.level1),
        Ho = (function (e) {
          An()(r, e);
          var t = Fo(r);
          function r(e) {
            var n;
            return (
              Sn()(this, r),
              (n = t.call(this, e)),
              w()(_n()(n), "getInputRef", function (e) {
                return (n.textInput = e);
              }),
              w()(_n()(n), "getButtonRef", function (e) {
                return (n.buttonRef = e);
              }),
              w()(_n()(n), "getValue", function (e) {
                return e.value && e.value.length > 0 ? e.value[0] : {};
              }),
              w()(_n()(n), "getNumber", function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : n.props;
                return n.getValue(e).number || "";
              }),
              w()(_n()(n), "getCountryCode", function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : n.props;
                return (
                  n.getValue(e).countryCode ||
                  e.defaultCountryCode.toUpperCase()
                );
              }),
              w()(_n()(n), "getPlaceholder", function (e) {
                if (!n.state.getExampleNumber) return "";
                var t = n.state.getExampleNumber(e, co);
                if ("AR" === e) {
                  var r = t.countryCallingCode;
                  return t
                    .formatInternational()
                    .replace("+".concat(r, " 9 "), "");
                }
                return t.formatNational();
              }),
              w()(_n()(n), "handleKeyPress", function (e) {
                if (Object(yt.i)(e.nativeEvent)) n.unblock();
                else {
                  if (e.key.match(No))
                    return e.preventDefault(), void n.block(new jt.f());
                  if (
                    Object(Bo.c)(n.getCountryCode(), e.target.value).replace(
                      Lo,
                      ""
                    ).length > 15
                  )
                    return (
                      e.preventDefault(),
                      void n.block(
                        new jt.a(uo.a.maxLength, n.props.validations)
                      )
                    );
                  n.unblock();
                }
              }),
              w()(_n()(n), "handlePaste", function (e) {
                n.lastInputEventRef.current = {
                  timestamp: new Date().getTime(),
                  type: e.type,
                };
              }),
              w()(_n()(n), "handleKeyDown", function (e) {
                n.setState({ inputEvent: e.nativeEvent || e }),
                  (n.lastInputEventRef.current = {
                    key: e.key,
                    keyCode: e.keyCode,
                    timestamp: new Date().getTime(),
                    type: e.type,
                  });
                var t = e.nativeEvent || e;
                Object(yt.i)(t) &&
                  !Object(yt.g)(t) &&
                  (Object(o.n)() && n.textInput && n.textInput.blur(),
                  e.stopPropagation(),
                  e.persist && e.persist(),
                  setTimeout(
                    function () {
                      n.props.isActive &&
                        n.props.onCommitAnswer(n.props.blockRef, e);
                    },
                    Object(o.n)() ? 700 : 0
                  ));
              }),
              w()(_n()(n), "setCaretPosition", function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  r = function (e, t, n) {
                    return e.substring(0, t) + n + e.substring(t, e.length);
                  },
                  o = n.textInput.selectionStart,
                  a =
                    r(e, o - 1, "@")
                      .replace(/[^0-9@]/g, "")
                      .indexOf("@") + 1;
                if (o === e.length + 1 || a >= t.replace(/[^0-9@]/g, "").length)
                  n.setState({ numericalCaretPosition: -1 });
                else {
                  var i = e.charAt(o - 1);
                  n.state.inputEvent &&
                    Object(yt.e)(n.state.inputEvent) &&
                    (isNaN(i) || " " === i) &&
                    a--,
                    n.setState({ numericalCaretPosition: a });
                }
              }),
              w()(_n()(n), "handleValueChange", function (e, t, r) {
                var o = e;
                try {
                  o = n.parsePhoneNumber(e, t).formatInternational();
                } catch (e) {}
                n.props.isActive &&
                  n.props.onStageAnswer(
                    n.props.blockRef,
                    { number: e, countryCode: t, label: o },
                    r
                  );
              }),
              w()(_n()(n), "handleNumberChange", function (e) {
                var t = n.props,
                  r = t.blockRef,
                  o = t.setBlockTrackingData,
                  a = n.lastInputEventRef.current,
                  i = n.getValue(n.props).number || "";
                Vt(a, e, i) && o(r, P.a, P.b.BROWSER_AUTO_COMPLETE);
                var c = e.target.value,
                  u = n.getNumber(),
                  s = n.getCountryCode(),
                  l = n.guessCountryBasedOnNumber(c) || s,
                  d = l !== s;
                n.AsYouType && d && n.createCountryFormatter(l),
                  n.parseDigits(c) !== n.parseDigits(u) &&
                    (c = n.formatPhoneNumber(c)),
                  n.setCaretPosition(u, c),
                  n.handleValueChange(c, l, e);
              }),
              w()(_n()(n), "handleCountryChange", function (e, t) {
                if (e !== n.getCountryCode()) {
                  n.AsYouType && n.createCountryFormatter(e);
                  var r = n.formatPhoneNumber(n.getNumber());
                  n.handleValueChange(r, e, t);
                }
              }),
              w()(_n()(n), "handleDropdownOpen", function (e) {
                var t = e.disableNavigation;
                n.props.recenter("bottom"),
                  n.setState({ isOpen: !0 }),
                  t && n.props.disableNavigation();
              }),
              w()(_n()(n), "handleDropdownClose", function (e) {
                var t = e.enableNavigation;
                n.setState({ isOpen: !1 }),
                  n.buttonRef && n.buttonRef.focus(),
                  t && n.props.enableNavigation();
              }),
              w()(_n()(n), "handleOnScroll", function () {
                clearTimeout(n.timeoutInputFocus),
                  (n.timeoutInputFocus = setTimeout(function () {
                    n.updateInputFocus(n.textInput, n.props.isActive, !0);
                  }, 200));
              }),
              w()(_n()(n), "handleTriggerIconButtonBlur", function () {
                n.setState({ isCountryDropdownBtnFocused: !1 });
              }),
              w()(_n()(n), "handleTriggerIconButtonFocus", function () {
                n.setState({ isCountryDropdownBtnFocused: !0 });
              }),
              w()(_n()(n), "handleCommit", function (e) {
                var t = n.isInputFocused() && Object(o.n)();
                n.textInput && t && n.textInput.blur(),
                  e.persist && e.persist(),
                  e.stopPropagation(),
                  setTimeout(
                    function () {
                      n.props.isActive &&
                        n.props.onCommitAnswer(n.props.blockRef, e);
                    },
                    t ? 700 : 0
                  );
              }),
              (n.lastInputEventRef = u.a.createRef()),
              (n.state = {
                isOpen: !1,
                isShaking: !1,
                isInputBlocked: !1,
                blockedError: null,
                getExampleNumber: null,
                isCountryDropdownBtnFocused: !1,
                numericalCaretPosition: -1,
                inputEvent: null,
              }),
              n
            );
          }
          return (
            Pn()(r, [
              {
                key: "setCursorPosition",
                value: function (e) {
                  (this.textInput.selectionStart = e),
                    (this.textInput.selectionEnd = e);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.isActive &&
                    this.props.updateGlobalEventListenerRef(this.handleKeyDown),
                    Promise.all([n.e(8), n.e(1)])
                      .then(n.bind(null, 769))
                      .then(function (t) {
                        var n = t.AsYouType,
                          r = t.parseDigits,
                          o = t.parsePhoneNumber,
                          a = t.getExampleNumber;
                        (e.AsYouType = n),
                          (e.formatter = new n(e.getCountryCode())),
                          (e.parseDigits = r),
                          (e.parsePhoneNumber = o),
                          e.setState({ getExampleNumber: a });
                      })
                      .catch(function (t) {
                        e.props.onUnrecoverableError(t);
                      });
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.isActive &&
                    !e.isActive &&
                    this.props.updateGlobalEventListenerRef(this.handleKeyDown);
                  var t = this.getCountryCode(e),
                    n = this.getCountryCode();
                  this.AsYouType && t !== n && this.createCountryFormatter(n);
                  var r = this.props,
                    o = r.isActive,
                    a = r.isBlockChanging;
                  o &&
                    !a &&
                    e.isBlockChanging &&
                    this.updateInputFocus(this.textInput, o, !1),
                    e.isActive && !o && this.textInput.blur();
                  var i = this.state.numericalCaretPosition;
                  if (i > 0) {
                    var c = this.getNumber(e) || "",
                      u = this.getNumber(this.props) || "";
                    if (c !== u) {
                      for (var s = 0, l = i + 1, d = 0; d < u.length; d++) {
                        var p = u[d];
                        !isNaN(p) && " " !== p && l > 0 && (l--, (s = d));
                      }
                      this.setCursorPosition(s);
                    }
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this.shakeStopTimeout),
                    clearTimeout(this.blockedErrorMessageStopTimeout),
                    clearTimeout(this.timeoutInputFocus);
                },
              },
              {
                key: "createCountryFormatter",
                value: function (e) {
                  this.formatter = new this.AsYouType(e);
                },
              },
              {
                key: "formatPhoneNumber",
                value: function (e) {
                  return (
                    this.parseDigits &&
                      ((e = this.formatter.input(e)), this.formatter.reset()),
                    e
                  );
                },
              },
              {
                key: "guessCountryBasedOnNumber",
                value: function (e) {
                  this.formatter.input(e);
                  var t =
                    this.formatter.country || this.formatter.metadata._country;
                  return this.formatter.reset(), t;
                },
              },
              {
                key: "unblock",
                value: function () {
                  this.setState({ isShaking: !1, isInputBlocked: !1 });
                },
              },
              {
                key: "block",
                value: function (e) {
                  var t = this;
                  this.setState({
                    isShaking: !0,
                    isInputBlocked: !0,
                    blockedError: e,
                  }),
                    clearTimeout(this.shakeStopTimeout),
                    clearTimeout(this.blockedErrorMessageStopTimeout),
                    (this.shakeStopTimeout = setTimeout(function () {
                      return t.setState({ isShaking: !1 });
                    }, J.i)),
                    (this.blockedErrorMessageStopTimeout = setTimeout(
                      function () {
                        return t.setState({ isInputBlocked: !1 });
                      },
                      J.b
                    ));
                },
              },
              {
                key: "updateInputFocus",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  this.props.isBlockListVisible &&
                    !this.state.isOpen &&
                    (!t ||
                      n ||
                      Object(o.n)() ||
                      this.state.isCountryDropdownBtnFocused ||
                      !Y(e, this.props.layoutItemsSize) ||
                      e.focus());
                },
              },
              {
                key: "isInputFocused",
                value: function () {
                  return (
                    !!document && document.activeElement === this.textInput
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.blockRef,
                    n = e.hasDescription,
                    r = e.isCommitted,
                    o = e.isValid,
                    a = e.language,
                    i = e.layout,
                    c = e.layoutItemsSize,
                    s = e.onRequireStickyFooter,
                    l = e.onUnrecoverableError,
                    d = e.submitForm,
                    p = e.t,
                    f = e.textAlign,
                    b = e.theme,
                    m = e.title,
                    h = e.uniqueId,
                    v = e.validationError,
                    g = this.state,
                    O = g.isOpen,
                    y = g.isInputBlocked,
                    j = g.blockedError,
                    w = "".concat(h, "-country-dropdown"),
                    k = this.getNumber(),
                    x = this.getCountryCode(),
                    C = (r && !o) || y,
                    E = Object(B.a)({
                      uniqueId: h,
                      isErrorMessageVisible: C,
                      hasDescription: n,
                    });
                  return u.a.createElement(
                    it,
                    A()({ isShaking: this.state.isShaking }, this.props, {
                      titleFor: h,
                      titleText: m,
                      titleTag: "legend",
                      onScroll: this.handleOnScroll,
                    }),
                    u.a.createElement(
                      Mo,
                      { textAlign: f },
                      u.a.createElement(
                        Vo,
                        null,
                        u.a.createElement(Do, {
                          backgroundColor: b.colors.background,
                          blockRef: t,
                          color: b.colors.secondary,
                          fontFamily: b.font,
                          id: w,
                          innerRef: this.getButtonRef,
                          isOpen: O,
                          language: a,
                          onChange: this.handleCountryChange,
                          onClose: this.handleDropdownClose,
                          onOpen: this.handleDropdownOpen,
                          onTriggerIconButtonBlur:
                            this.handleTriggerIconButtonBlur,
                          onTriggerIconButtonFocus:
                            this.handleTriggerIconButtonFocus,
                          onUnrecoverableError: l,
                          value: x,
                        })
                      ),
                      u.a.createElement(Nt.a, {
                        "aria-describedby": E,
                        "aria-label": p("aria.phone-number.input-label"),
                        autoComplete: "tel-national",
                        color: b.colors.secondary,
                        dataQa: "phone-number-input",
                        disabled: O,
                        getRef: this.getInputRef,
                        inputId: h,
                        name: "tel",
                        onBlur: this.props.onInputBlur,
                        onChange: this.handleNumberChange,
                        onFocus: this.props.onInputFocus,
                        onKeyDown: this.handleKeyDown,
                        onKeyPress: this.handleKeyPress,
                        onPaste: this.handlePaste,
                        placeholder: this.getPlaceholder(x),
                        showBorder: !0,
                        type: "tel",
                        value: k,
                      })
                    ),
                    u.a.createElement(De, {
                      backgroundColor: b.colors.background,
                      blockError: y ? j : v,
                      blockRef: t,
                      buttonColor: b.colors.button,
                      errorMessageId: Object(B.c)(h),
                      helperColor: b.colors.primary,
                      hideHelperText: this.state.isCountryDropdownBtnFocused,
                      isErrorMessageVisible: C,
                      layout: i,
                      layoutItemsSize: c,
                      onClick: this.handleCommit,
                      onRequireStickyFooter: s,
                      submitForm: d,
                    })
                  );
                },
              },
            ]),
            r
          );
        })(c.Component);
      Ho.defaultProps = {
        defaultCountryCode: "US",
        recenter: _.a,
        setBlockTrackingData: _.a,
        submitForm: _.a,
        theme: { colors: { secondary: o.b, background: o.b } },
        updateGlobalEventListenerRef: _.a,
      };
      var zo = ft(U(Object(T.a)(Ho))),
        Ko = function (e) {
          return u.a.createElement(
            ro,
            A()({}, e, { maxLength: e.validations.maxLength })
          );
        };
      Ko.defaultProps = { validations: { maxLength: null } };
      var Uo,
        qo = Ko,
        Wo = new RegExp(/(https?|ftp|app):\/\//),
        Yo = function (e) {
          var t = (function () {
              var t = mn()(
                fn.a.mark(function t(n) {
                  var r, o, a, i;
                  return fn.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((r = e.blockRef),
                            !(o = Array.isArray(e.value)
                              ? e.value[0]
                              : e.value))
                          ) {
                            t.next = 6;
                            break;
                          }
                          return (
                            (a = o.trim()),
                            (i = Wo.test(a)
                              ? a
                              : "".concat("https://").concat(a)),
                            t.abrupt("return", e.onStageAnswer(r, i, n))
                          );
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            n = (function () {
              var n = mn()(
                fn.a.mark(function n(r) {
                  var o;
                  return fn.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            r.persist && r.persist(),
                            (o = e.submitForm),
                            (n.next = 4),
                            t(r)
                          );
                        case 4:
                          o(r);
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            r = (function () {
              var n = mn()(
                fn.a.mark(function n(r, o) {
                  var a;
                  return fn.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (a = e.inlineSubmit), (n.next = 3), t(o);
                        case 3:
                          a(r, o);
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e, t) {
                return n.apply(this, arguments);
              };
            })();
          return u.a.createElement(
            ro,
            A()({}, e, {
              inlineSubmit: r,
              inputType: "url",
              onCommitAnswer: function (n, r) {
                t(r), e.onCommitAnswer(n, r);
              },
              submitForm: n,
            })
          );
        },
        Go = n(541),
        Qo = n(498),
        Jo = n(179),
        Zo = n.n(Jo),
        $o = n(789),
        Xo = n(774),
        ea = n(805),
        ta = n(73);
      function na(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ra(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? na(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : na(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var oa =
          ((Uo = {}),
          w()(Uo, ta.a.CardCvc, "createCardCvcElement"),
          w()(Uo, ta.a.CardExpiry, "createCardExpiryElement"),
          w()(Uo, ta.a.CardNumber, "createCardNumberElement"),
          Uo),
        aa = function (e, t, n) {
          var r = {
            color: "".concat(e),
            fontFamily: t,
            lineHeight: "".concat(V.s[n].lineHeight, "px"),
            fontSize: "".concat(V.s[n].fontSize, "px"),
            fontWeight: "".concat(V.l.regular),
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "".concat(e) },
          };
          return {
            base: ra(
              ra({}, r),
              {},
              {
                "::placeholder": ra(
                  ra({}, r),
                  {},
                  { color: "".concat(Object(o.A)(e)) }
                ),
              }
            ),
            invalid: { color: "#BB3C50" },
          };
        },
        ia = s.d.div.withConfig({
          displayName: "stripe-element__Root",
          componentId: "z3m6zi-0",
        })(
          ["padding-bottom:", "px;background-color:transparent !important;"],
          V.t
        ),
        ca = function (e) {
          var t = e.type,
            n = e.color,
            r = e.fontStack,
            o = e.onFocus,
            a = e.onBlur,
            i = e.onChange,
            l = e.stripeService,
            d = Object(c.useRef)(),
            p = Object(c.useRef)(),
            f = Object(v.c)(),
            b = Object(s.f)(),
            m = Object(Me.getResponsiveFontSize)(
              V.i.paymentInputText,
              f,
              b.fields.fontSize
            ),
            h = function (e) {
              var t = !!p.current._autofilled;
              i(e, t);
            };
          return (
            Object(c.useEffect)(
              function () {
                if (l)
                  return (
                    (p.current = l[oa[t]]({ style: aa(n, r, m) })),
                    p.current.on("change", h),
                    p.current.on("focus", o),
                    p.current.on("blur", a),
                    p.current.mount(d.current),
                    function () {
                      p.current && p.current.destroy();
                    }
                  );
              },
              [l]
            ),
            Object(c.useEffect)(
              function () {
                p.current && p.current.update({ style: aa(n, r, m) });
              },
              [n, f]
            ),
            u.a.createElement(ia, { ref: d })
          );
        };
      ca.defaultProps = {
        color: o.b,
        onFocus: _.a,
        onBlur: _.a,
        onChange: _.a,
      };
      var ua = ca;
      function sa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function la(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? sa(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : sa(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function da(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      var pa = (function (e) {
        An()(n, e);
        var t = da(n);
        function n(e) {
          var r, o;
          return (
            Sn()(this, n),
            (o = t.call(this, e)),
            w()(_n()(o), "shouldHideHelperText", function () {
              var e = "BUTTON" !== document.activeElement.tagName;
              o.state.hideHelperText !== e && o.setState({ hideHelperText: e });
            }),
            w()(_n()(o), "getAnswerValue", function () {
              var e,
                t = o.props.value;
              return t && t.length && t[0]
                ? t[0]
                : ((e = {}),
                  w()(e, ta.a.CardCvc, { empty: !0 }),
                  w()(e, ta.a.CardExpiry, { empty: !0 }),
                  w()(e, ta.a.CardNumber, { empty: !0 }),
                  e);
            }),
            w()(_n()(o), "handleInputBlur", function (e) {
              o.setState({
                focusStates: la(
                  la({}, o.state.focusStates),
                  {},
                  w()({}, e, !1)
                ),
              }),
                o.props.onInputBlur(),
                o.shouldHideHelperText();
            }),
            w()(_n()(o), "handleInputFocus", function (e) {
              o.setState({
                focusStates: la(
                  la({}, o.state.focusStates),
                  {},
                  w()({}, e, !0)
                ),
              }),
                o.props.onInputFocus(),
                o.shouldHideHelperText();
            }),
            w()(_n()(o), "handleCommit", function (e) {
              e.persist && e.persist(),
                setTimeout(function () {
                  o.props.isActive &&
                    o.props.onCommitAnswer(o.props.blockRef, e);
                }, 0);
            }),
            w()(_n()(o), "stage", function (e, t) {
              e &&
              !e.cardholdersName &&
              e[ta.a.CardCvc].empty &&
              e[ta.a.CardExpiry].empty &&
              e[ta.a.CardNumber].empty
                ? o.props.onStageAnswer(o.props.blockRef, [], t)
                : o.props.onStageAnswer(o.props.blockRef, [e], t);
            }),
            w()(_n()(o), "handleInputChange", function (e, t, n) {
              var r = t.type ? t : la(la({}, t), {}, { type: "change" }),
                a = n;
              if (e === ta.a.CardName) {
                var i = o.state.valueStates[e] || "";
                (a = Vt(o.lastInputEventRef.current, t, i)),
                  o.setState(
                    la(
                      la({}, o.state),
                      {},
                      {
                        valueStates: la(
                          la({}, o.state.valueStates),
                          {},
                          w()({}, e, t.target.value)
                        ),
                      }
                    )
                  );
              }
              if (a) {
                var c = o.props,
                  u = c.blockRef;
                (0, c.setBlockTrackingData)(u, P.a, P.b.BROWSER_AUTO_COMPLETE);
              }
              e !== ta.a.CardName
                ? o.stage(
                    la(
                      la({}, o.getAnswerValue()),
                      {},
                      w()({}, e, {
                        error: t.error,
                        complete: t.complete,
                        empty: t.empty,
                      })
                    ),
                    r
                  )
                : o.stage(
                    la(
                      la({}, o.getAnswerValue()),
                      {},
                      { cardholdersName: t.target.value }
                    ),
                    r
                  );
            }),
            w()(_n()(o), "handleKeyDown", function (e) {
              kt(o.props.type, e),
                Object(yt.i)(e)
                  ? (e.preventDefault(), o.handleCommit(e))
                  : (o.lastInputEventRef.current = {
                      key: e.key,
                      keyCode: e.keyCode,
                      timestamp: new Date().getTime(),
                      type: e.type,
                    });
            }),
            w()(_n()(o), "handlePaste", function (e) {
              o.lastInputEventRef.current = {
                timestamp: new Date().getTime(),
                type: e.type,
              };
            }),
            (o.lastInputEventRef = u.a.createRef(null)),
            (o.state = {
              focusStates:
                ((r = {}),
                w()(r, ta.a.CardCvc, !1),
                w()(r, ta.a.CardExpiry, !1),
                w()(r, ta.a.CardName, !1),
                w()(r, ta.a.CardNumber, !1),
                r),
              valueStates: w()({}, ta.a.CardName, !1),
              hideHelperText: !0,
            }),
            o
          );
        }
        return (
          Pn()(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.isActive &&
                  this.props.updateGlobalEventListenerRef(this.handleKeyDown);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.props.isActive &&
                  !e.isActive &&
                  this.props.updateGlobalEventListenerRef(this.handleKeyDown);
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  a,
                  i,
                  c,
                  s,
                  l,
                  d,
                  p,
                  f = this,
                  b = this.props,
                  m = b.blockRef,
                  h = b.buttonText,
                  v = b.hasDescription,
                  g = b.isCommitted,
                  O = b.layout,
                  y = b.layoutItemsSize,
                  j = b.price,
                  w = b.submitForm,
                  k = b.stripeService,
                  x = b.textAlign,
                  C = b.theme,
                  E = b.t,
                  S = b.title,
                  I = b.uniqueId,
                  P = b.validationErrors,
                  T = this.getAnswerValue(),
                  _ = this.state,
                  R = _.focusStates,
                  D = _.hideHelperText,
                  F = "".concat(I, "-card-name"),
                  N = "".concat(I, "-hint-charge"),
                  L = "".concat(I, "-hint-store"),
                  M = "".concat(I, "-supported-cards"),
                  H = Object(B.a)({
                    uniqueId: I,
                    hasDescription: v,
                    additionalIds: "".concat(N, " ").concat(L, " ").concat(M),
                  }),
                  z = {};
                return (
                  Object.keys(ta.a).forEach(function (e) {
                    var t = ta.a[e],
                      n = P.filter(function (e) {
                        return e.type === t;
                      })[0];
                    z[t] = {
                      validationError:
                        !!n && Object(Q.a)(E(null == n ? void 0 : n.label)),
                      isVisible:
                        !!n && ((null == n ? void 0 : n.showImmediately) || g),
                    };
                  }),
                  u.a.createElement(
                    it,
                    A()({}, this.props, {
                      titleFor: F,
                      titleTag: "label",
                      titleText: S,
                    }),
                    u.a.createElement(
                      Ve.a,
                      {
                        type: V.i.blockDescription,
                        color: C.colors.primary,
                        htmlTag: "p",
                        id: N,
                      },
                      E("block.payment.hintCharge"),
                      " ",
                      u.a.createElement($o.a, null, j)
                    ),
                    u.a.createElement(
                      Ve.a,
                      {
                        type: V.i.blockDescription,
                        color: C.colors.primary,
                        htmlTag: "p",
                        id: L,
                      },
                      E("block.payment.hintStore")
                    ),
                    u.a.createElement(
                      X.b,
                      { id: M },
                      ""
                        .concat(E("block.payment.supportedCards"), " ")
                        .concat(Xo.b.join(", "))
                    ),
                    u.a.createElement(ea.a, {
                      cardNameId: F,
                      cardNameElement: u.a.createElement(
                        "form",
                        null,
                        u.a.createElement(Nt.a, {
                          "aria-describedby": H,
                          autoComplete: "cc-name",
                          color: C.colors.secondary,
                          inputId: F,
                          onBlur: function () {
                            return f.handleInputBlur(ta.a.CardName);
                          },
                          onChange: function (e) {
                            return f.handleInputChange(ta.a.CardName, e);
                          },
                          onFocus: function () {
                            return f.handleInputFocus(ta.a.CardName);
                          },
                          onKeyDown: this.handleKeyDown,
                          onPaste: this.handlePaste,
                          placeholder: "Jane Smith",
                          fontSizeType: V.i.paymentInputText,
                          value: T.cardholdersName || "",
                        })
                      ),
                      cardNameErrorMessage:
                        (null === (e = z[ta.a.CardName]) || void 0 === e
                          ? void 0
                          : e.isVisible) &&
                        (null === (t = z[ta.a.CardName]) || void 0 === t
                          ? void 0
                          : t.validationError),
                      cardNumberElement: u.a.createElement(ua, {
                        color: C.colors.secondary,
                        fontStack: C.fontStack,
                        onBlur: function () {
                          return f.handleInputBlur(ta.a.CardNumber);
                        },
                        onChange: function (e, t) {
                          return f.handleInputChange(ta.a.CardNumber, e, t);
                        },
                        onFocus: function () {
                          return f.handleInputFocus(ta.a.CardNumber);
                        },
                        stripeService: k,
                        type: ta.a.CardNumber,
                      }),
                      cardNumberErrorMessage:
                        (null === (n = z[ta.a.CardNumber]) || void 0 === n
                          ? void 0
                          : n.isVisible) &&
                        (null === (r = z[ta.a.CardNumber]) || void 0 === r
                          ? void 0
                          : r.validationError),
                      cardExpiryElement: u.a.createElement(ua, {
                        color: C.colors.secondary,
                        fontStack: C.fontStack,
                        onBlur: function () {
                          return f.handleInputBlur(ta.a.CardExpiry);
                        },
                        onChange: function (e, t) {
                          return f.handleInputChange(ta.a.CardExpiry, e, t);
                        },
                        onFocus: function () {
                          return f.handleInputFocus(ta.a.CardExpiry);
                        },
                        stripeService: k,
                        type: ta.a.CardExpiry,
                      }),
                      cardExpiryErrorMessage:
                        (null === (o = z[ta.a.CardExpiry]) || void 0 === o
                          ? void 0
                          : o.isVisible) &&
                        (null === (a = z[ta.a.CardExpiry]) || void 0 === a
                          ? void 0
                          : a.validationError),
                      cardCVCElement: u.a.createElement(ua, {
                        color: C.colors.secondary,
                        fontStack: C.fontStack,
                        onBlur: function () {
                          return f.handleInputBlur(ta.a.CardCvc);
                        },
                        onChange: function (e, t) {
                          return f.handleInputChange(ta.a.CardCvc, e, t);
                        },
                        onFocus: function () {
                          return f.handleInputFocus(ta.a.CardCvc);
                        },
                        stripeService: k,
                        type: ta.a.CardCvc,
                      }),
                      cardCVCErrorMessage:
                        (null === (i = z[ta.a.CardCvc]) || void 0 === i
                          ? void 0
                          : i.isVisible) &&
                        (null === (c = z[ta.a.CardCvc]) || void 0 === c
                          ? void 0
                          : c.validationError),
                      color: C.colors.secondary,
                      id: I,
                      isCardNameErrorVisible:
                        null === (s = z[ta.a.CardName]) || void 0 === s
                          ? void 0
                          : s.isVisible,
                      isCardNameFocused: R[ta.a.CardName],
                      isCardNumberErrorVisible:
                        null === (l = z[ta.a.CardNumber]) || void 0 === l
                          ? void 0
                          : l.isVisible,
                      isCardNumberFocused: R[ta.a.CardNumber],
                      isCardCVCErrorVisible:
                        null === (d = z[ta.a.CardCvc]) || void 0 === d
                          ? void 0
                          : d.isVisible,
                      isCardCVCFocused: R[ta.a.CardCvc],
                      isCardExpiryErrorVisible:
                        null === (p = z[ta.a.CardExpiry]) || void 0 === p
                          ? void 0
                          : p.isVisible,
                      isCardExpiryFocused: R[ta.a.CardExpiry],
                      stripeLinkText: E("block.payment.securedBy"),
                      textAlign: x,
                    }),
                    u.a.createElement(De, {
                      blockRef: m,
                      buttonText: h,
                      hideHelperText: D,
                      hideIcon: !0,
                      isErrorMessageVisible: !1,
                      layout: O,
                      layoutItemsSize: y,
                      onClick: this.handleCommit,
                      submitForm: w,
                    })
                  )
                );
              },
            },
          ]),
          n
        );
      })(c.PureComponent);
      pa.defaultProps = {
        theme: { colors: { primary: o.b, secondary: o.b } },
        onInputFocus: _.a,
        onInputBlur: _.a,
        setBlockTrackingData: _.a,
        t: Zo.a,
        validationErrors: [],
        submitForm: _.a,
        value: [{ cardholdersName: "", isCardEmpty: !0, isCardValid: !1 }],
        stripeErrorCodes: {},
        updateGlobalEventListenerRef: _.a,
      };
      var fa = ft(pa),
        ba = Object(r.b)(function (e) {
          return {
            price: Object(Ee.N)(e),
            stripeErrorCodes: Qo.a,
            stripeService: Object(Go.d)(e),
          };
        })(U(Object(v.f)(fa))),
        ma = n(804);
      n(43);
      var ha = function (e) {
          var t = Object(c.useRef)([]),
            n = Object(c.useRef)(null);
          function r() {
            clearTimeout(n.current), (n.current = null);
          }
          return {
            onKeyDown: function (o) {
              Object(yt.l)(o)
                ? (null === n.current &&
                    (o.persist && o.persist(),
                    (t.current = []),
                    (n.current = setTimeout(function () {
                      e(
                        (function (e) {
                          return e.reduce(function (e, t, n) {
                            return e + t * Math.pow(10, n);
                          }, 0);
                        })(t.current),
                        o
                      );
                    }, J.e))),
                  t.current.unshift(parseInt(o.key, 10)))
                : r();
            },
            clearNumberTimeout: r,
          };
        },
        va = function (e) {
          var t = Object(c.useState)(!1),
            n = i()(t, 2),
            r = n[0],
            o = n[1],
            a = e.labels,
            s = e.blockIndex,
            l = e.blockRef,
            d = e.startAtOne,
            p = e.steps,
            f = e.theme,
            b = e.validationError,
            m = e.isActive,
            h = e.isCommitted,
            v = e.isValid,
            g = e.layout,
            O = e.layoutItemsSize,
            y = e.onCommitAnswer,
            j = e.onStageAnswer,
            w = e.submitForm,
            k = e.title,
            x = e.value,
            C = e.uniqueId,
            E = e.hasBeenInteractedWith,
            S = e.isFirstBlock,
            I = d ? 1 : 0,
            P = I + p - 1,
            T = x && x.length > 0 ? x[0] : void 0,
            _ = Object(B.c)(C),
            R = h && !v;
          Object(c.useEffect)(
            function () {
              (function () {
                var e = mn()(
                  fn.a.mark(function e() {
                    var t, n, r, o;
                    return fn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = 0 === s ? qn() : null),
                              (n = Wn(l) || t),
                              (r = n && n[0] >= I && n[0] <= P),
                              (o = x && x.some(Boolean)),
                              !m || o || E || !r)
                            ) {
                              e.next = 12;
                              break;
                            }
                            return (e.next = 7), Gn();
                          case 7:
                            if (
                              (j(l, n, null, { isFromPrefilledAnswer: !0 }), !S)
                            ) {
                              e.next = 12;
                              break;
                            }
                            return (e.next = 11), Qn();
                          case 11:
                            y(l, null, { isFromPrefilledAnswer: !0 });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [m]
          );
          var D = Object.keys(a).length > 0,
            F = Object(B.a)({
              isErrorMessageVisible: R,
              hasInputInstructions: D,
              uniqueId: C,
            }),
            N = ha(H),
            L = N.onKeyDown,
            M = N.clearNumberTimeout,
            V = Object(c.useCallback)(
              function (e) {
                Object(yt.f)(e) || Object(yt.o)(e) || e.stopPropagation(),
                  r && L(e);
              },
              [r, L]
            );
          function H(e, t) {
            M(),
              T !== e
                ? e <= P &&
                  e >= I &&
                  (j(l, [e], t),
                  setTimeout(function () {
                    y(l, t);
                  }, J.c))
                : j(l, [], t);
          }
          dt(m, V);
          return u.a.createElement(
            it,
            A()({}, e, { titleText: k, titleTag: "legend", onKeyDown: V }),
            u.a.createElement(
              hn.a,
              {
                onEnter: function () {
                  return o(!0);
                },
                onLeave: function () {
                  return o(!1);
                },
              },
              u.a.createElement(
                "div",
                null,
                u.a.createElement(ma.a, {
                  ariaDescribedBy: F,
                  color: f.colors.secondary,
                  labelLeft: a.left,
                  labelCenter: a.center,
                  labelRight: a.right,
                  max: P,
                  min: I,
                  onChange: function (e, t) {
                    H(e, t);
                  },
                  selectedAmount: T,
                }),
                (function () {
                  if (!D) return null;
                  var e = Object(B.d)(C);
                  return u.a.createElement(
                    X.b,
                    { id: e, tabIndex: "-1" },
                    a.left,
                    ", ",
                    I,
                    ", ",
                    a.right,
                    ", ",
                    P
                  );
                })()
              )
            ),
            u.a.createElement(De, {
              blockRef: l,
              blockError: b,
              errorMessageId: _,
              isErrorMessageVisible: R,
              layout: g,
              layoutItemsSize: O,
              onClick: function (e) {
                e.stopPropagation(), m && y(l, e);
              },
              submitForm: w,
            })
          );
        };
      va.defaultProps = {
        labels: {},
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        submitForm: _.a,
        theme: { colors: { secondary: o.b } },
      };
      var ga = va,
        Oa = n(792),
        ya = function (e) {
          var t = e.value,
            n = e.blockRef,
            r = e.shape,
            o = e.steps,
            a = e.theme,
            s = e.validationError,
            l = e.isActive,
            d = e.isCommitted,
            p = e.isValid,
            f = e.layout,
            b = e.layoutItemsSize,
            m = e.onCommitAnswer,
            h = e.onStageAnswer,
            v = e.submitForm,
            g = e.textAlign,
            O = e.title,
            y = e.uniqueId,
            j = Object(c.useState)(!1),
            w = i()(j, 2),
            k = w[0],
            x = w[1],
            C = o,
            E = t && t.length > 0 ? t[0] : void 0,
            S = Object(B.c)(y),
            I = d && !p,
            P = ha(D),
            T = P.onKeyDown,
            _ = P.clearNumberTimeout,
            R = Object(c.useCallback)(
              function (e) {
                var t = e.nativeEvent || e;
                Object(yt.f)(t) || Object(yt.o)(t) || e.stopPropagation(),
                  k && T(e);
              },
              [k, T]
            );
          function D(e, t) {
            _(),
              E !== e
                ? e <= C &&
                  e >= 1 &&
                  (t.persist && t.persist(),
                  h(n, [e], t),
                  setTimeout(function () {
                    m(n, t);
                  }, J.c))
                : h(n, [], t);
          }
          return (
            dt(l, R),
            u.a.createElement(
              it,
              A()({}, e, { titleText: O, titleTag: "legend", onKeyDown: R }),
              u.a.createElement(
                hn.a,
                {
                  onEnter: function () {
                    return x(!0);
                  },
                  onLeave: function () {
                    return x(!1);
                  },
                },
                u.a.createElement(
                  "div",
                  null,
                  u.a.createElement(Oa.a, {
                    ariaDescribedBy: I ? S : null,
                    color: a.colors.secondary,
                    iconName: r,
                    max: C,
                    min: 1,
                    onChange: function (e, t) {
                      D(e, t);
                    },
                    selectedAmount: E,
                    textAlign: g,
                  })
                )
              ),
              u.a.createElement(De, {
                blockRef: n,
                blockError: s,
                errorMessageId: S,
                isErrorMessageVisible: I,
                layout: f,
                layoutItemsSize: b,
                onClick: function (e) {
                  e.stopPropagation(), l && m(n, e);
                },
                submitForm: v,
              })
            )
          );
        };
      ya.defaultProps = {
        onCommitAnswer: _.a,
        onStageAnswer: _.a,
        shape: "circle",
        submitForm: _.a,
        theme: { colors: { secondary: o.b } },
      };
      var ja,
        wa = ya,
        ka =
          ((ja = {}),
          w()(ja, I.d, { component: Object(T.a)(dn) }),
          w()(ja, I.e, { component: Object(T.a)(Yr) }),
          w()(ja, I.f, { component: Object(T.a)(oo) }),
          w()(ja, I.g, { component: Object(T.a)(kn) }),
          w()(ja, I.t, { component: Object(T.a)(Jr) }),
          w()(ja, I.j, { component: Object(T.a)(to) }),
          w()(ja, I.k, { component: Object(T.a)(Bt) }),
          w()(ja, I.m, { component: Object(T.a)(hr) }),
          w()(ja, I.n, { component: Object(T.a)(io) }),
          w()(ja, I.s, { component: Object(T.a)(kr) }),
          w()(ja, I.w, { component: Object(T.a)(qo) }),
          w()(ja, I.x, { component: Object(T.a)(Zr) }),
          w()(ja, I.y, { component: Object(T.a)(Yo) }),
          w()(ja, I.A, { component: Object(T.a)(Xr) }),
          w()(ja, I.q, { component: Object(T.a)(ba) }),
          w()(ja, I.r, { component: Object(T.a)(zo) }),
          w()(ja, I.p, { component: Object(T.a)(ga) }),
          w()(ja, I.v, { component: Object(T.a)(wa) }),
          ja),
        xa = { component: Object(T.a)(vt) },
        Ca = function (e) {
          var t = e.type,
            n = S()(e, ["type"]);
          Object(c.useEffect)(
            function () {
              var e = n.blockRef,
                t = n.isActive,
                r = n.isLivePreview,
                o = n.onStageAnswer,
                a = n.partialResponse,
                i = n.setBlockTrackingData,
                c = n.value;
              r ||
                !t ||
                !a ||
                (null != c && c.length) ||
                (i(e, P.a, P.b.PARTIAL_RESPONSE),
                o(e, a, null, { isFromPrefilledAnswer: !0 }));
            },
            [n.isActive]
          );
          var r = ka[t] || xa;
          return u.a.createElement(
            r.component,
            Object.assign({ type: t }, n, r.props)
          );
        };
      Ca.defaultProps = { setBlockTrackingData: _.a };
      var Ea = Ca,
        Sa = n(249),
        Ia = n(334),
        Pa = n(118),
        Ta = n(10);
      function _a() {
        return { type: Ta.L, payload: { isInputFocused: !0 } };
      }
      var Ra,
        Aa = n(535),
        Da = n(72),
        Ba = n(127),
        Fa =
          ((Ra = {}),
          w()(Ra, "ABSTAIN", "off"),
          w()(Ra, "LOCATION_ADDRESS", "street-address"),
          w()(Ra, "USER_BIRTHDAY_DATE", "bday"),
          w()(Ra, "LOCATION_COUNTRY", "country"),
          w()(Ra, "USER_EMAIL", "email"),
          w()(Ra, "USER_FIRST_NAME", "given-name"),
          w()(Ra, "USER_LAST_NAME", "family-name"),
          w()(Ra, "USER_NAME", "name"),
          w()(Ra, "COMPANY_NAME", "organization"),
          w()(Ra, "USER_INFO_JOB_ROLE", "organization-title"),
          w()(Ra, "USER_PHONE", "tel"),
          w()(Ra, "LOCATION_ZIP_CODE", "postal-code"),
          w()(Ra, "USER_GENDER", "sex"),
          w()(Ra, "USER_WEBSITE", "off"),
          Ra),
        Na = n(111),
        La = (n(215), n(226), n(86));
      function Ma(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Va(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ma(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ma(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Ha,
        za,
        Ka,
        Ua = x()(JSON.stringify, Ee.i),
        qa = function (e, t) {
          var n = null;
          return function (r, o) {
            var a,
              i = Object(Ee.p)(r, o),
              c = Object(Ee.c)(r, o),
              u = Object(Pe.b)(r, i),
              s = c && Object(Ee.e)(c),
              l = Object(Re.h)(r),
              d = !Object(Ee.Q)(r) && !Object(Ee.P)(r);
            if (
              n &&
              !u &&
              n.isActive === u &&
              n.theme === l &&
              n.isCommitted === s &&
              n.isBlockListVisible === d
            )
              return n;
            var p = Object(Pe.i)(Object(Se.d)(r), i.type),
              f = !Object(Ee.E)(i.type, c),
              b = c && Object(Ee.f)(c),
              m = c && Object(Ee.d)(c),
              h = Object(Ie.c)(r, o),
              v = Object(Ie.d)(r, o),
              O = Object(Da.g)(r),
              y = e(r),
              j = t(r),
              w = O(y, { allowHyperlinks: !0 }),
              k = O(j, { allowHyperlinks: !0 }),
              x = i.application
                ? (function (e, t) {
                    var n,
                      r = Object(Ee.p)(e, t);
                    if (
                      null !== (n = r.application) &&
                      void 0 !== n &&
                      n.iframeUrl
                    ) {
                      var o = new URL(r.application.iframeUrl),
                        a = new URLSearchParams(o.search);
                      return (
                        Object(Da.a)(t)(e).forEach(function (e) {
                          e.value !== La.b && a.set(e.ref, e.value);
                        }),
                        (o.search = a),
                        "".concat(o)
                      );
                    }
                  })(r, o)
                : void 0,
              C = Object(Na.e)(r),
              E = Object(Se.C)(r),
              S = !C && !Object(Se.f)(r),
              I = !C && !Object(Se.p)(r),
              P = Object(Aa.a)(r, o),
              T = Fa[P],
              _ = Object(g.h)(
                null === (a = l.fields) || void 0 === a ? void 0 : a.alignment,
                i.layout.type
              ),
              R = Va(
                Va({}, i),
                {},
                {
                  iframeUrl: x,
                  field: Object(Ee.z)(r, o),
                  blockIndex: Object(Ee.q)(r, o),
                  isFirstBlock: Object(Pe.j)(r, o),
                  title: w,
                  description: k,
                  hasBranding: E,
                  hasNavigationArrows: S,
                  hasProgress: I,
                  hasDescription: Boolean(j && j.length),
                  formId: Object(Se.c)(r),
                  uniqueId: Object(Pe.c)(r, o),
                  autoComplete: T,
                  encryptable: p,
                  isAnswered: f,
                  isActive: u,
                  isValid: b,
                  hasBeenInteractedWith: m,
                  validationError: h,
                  validationErrors: v,
                  theme: l,
                  isCommitted: s,
                  isFocused: u && Object(Pe.a)(r),
                  isBlockListVisible: d,
                  isReviewModeEnabled: Object(Se.q)(r),
                  isScrollNearTop: Object(Se.r)(r),
                  isVisibleGroupStickyHeader: Object(Ee.F)(r),
                  isLivePreview: Object(Se.m)(r),
                  language: Object(Se.v)(r),
                  shouldClearInput: !f && Object(Se.m)(r),
                  partialResponse: Object(Ba.b)(r, o),
                  value: Ua(c),
                  scrolling: Object(Se.A)(r),
                  ref: void 0,
                  textAlign: _,
                }
              );
            return (n = R), R;
          };
        },
        Wa = function () {
          return (
            Object(Ct.c)() && window.scrollBy(0, 0),
            function (e) {
              setTimeout(function () {
                e({ type: Ta.L, payload: { isInputFocused: !1 } });
              }, 50);
            }
          );
        },
        Ya = Object(r.b)(
          function (e, t) {
            var n = t.blockRef,
              r = Object(Da.c)(n),
              o = Object(Da.b)(n),
              a = qa(r, o);
            return function (e) {
              return a(e, n);
            };
          },
          function (e) {
            return Va(
              {},
              Object(C.b)(
                {
                  onCommitAnswer: Sa.a,
                  onStageAnswer: Sa.b,
                  goToBlock: f.h,
                  recenter: f.n,
                  scrollToChoice: f.o,
                  endAutoScroll: f.d,
                  onInputFocus: _a,
                  onInputBlur: Wa,
                  onRequireStickyFooter: xe.a,
                  onRequireStickyHeader: Ia.a,
                  onUnrecoverableError: Ce.d,
                  setBlockTrackingData: Pa.b,
                  submitForm: b.b,
                  inlineSubmit: b.a,
                },
                e
              )
            );
          }
        )(Ea),
        Ga = n(293),
        Qa = n(177),
        Ja =
          null === (Ha = window) ||
          void 0 === Ha ||
          null === (za = Ha.location) ||
          void 0 === za ||
          null === (Ka = za.search) ||
          void 0 === Ka
            ? void 0
            : Ka.includes("typeform-render-all-blocks=true"),
        Za = function (e, t, n, r) {
          var o = n.currentRef,
            a = n.previousRef,
            i = n.previousActiveRef,
            c = n.nextRef,
            u = e.ref === o,
            s = e.ref === i,
            l = e.ref === a,
            d = e.ref === c,
            p = Object(D.c)(e.type),
            f = null == t ? void 0 : t.hasBeenInteractedWith;
          return Ja || (r && (u || l || s)) || u || l || d || (p && f);
        },
        $a = function (e) {
          return (
            e &&
            e.attachment &&
            "image" === e.attachment.type &&
            e.attachment.resource &&
            e.attachment.resource.src
          );
        },
        Xa = function (e, t) {
          return e.findIndex(function (e) {
            return e.ref === t;
          });
        },
        ei = function (e, t) {
          return e.find(function (e) {
            return e.blockRef === t;
          });
        },
        ti = n(646),
        ni = n(85),
        ri = n(647),
        oi = n.n(ri);
      function ai(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      var ii = s.d.div.withConfig({
          displayName: "MouseWheelTrigger__Root",
          componentId: "sc-1nbmmxo-0",
        })(["outline:none;width:100%;"]),
        ci = (function (e) {
          An()(n, e);
          var t = ai(n);
          function n() {
            var e;
            Sn()(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(o))),
              w()(_n()(e), "Lethargy", new oi.a()),
              w()(_n()(e), "accumulated", 0),
              w()(_n()(e), "timeout", null),
              w()(_n()(e), "disableTimeout", null),
              w()(_n()(e), "disabledSwipe", !1),
              w()(_n()(e), "handleWheelScroll", function (t) {
                var n = e.props,
                  r = n.upHandler,
                  o = n.downHandler,
                  a = e.Lethargy.check(t),
                  i = t.deltaY;
                e.disabledSwipe ||
                  !1 === a ||
                  ((e.accumulated += i),
                  e.setTimeout(function () {
                    e.accumulated = 0;
                  })),
                  e.accumulated < -300 &&
                    (r(), (e.accumulated = 0), e.disableSwipe(500)),
                  e.accumulated > 300 &&
                    (o(), (e.accumulated = 0), e.disableSwipe(500));
              }),
              e
            );
          }
          return (
            Pn()(n, [
              {
                key: "setTimeout",
                value: (function (e) {
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function (e) {
                  this.timeout && clearTimeout(this.timeout),
                    (this.timeout = setTimeout(e, 500));
                }),
              },
              {
                key: "disableSwipe",
                value: function (e) {
                  var t = this;
                  this.disableTimeout && clearTimeout(this.disableTimeout),
                    (this.disabledSwipe = !0),
                    (this.disableTimeout = setTimeout(function () {
                      t.disabledSwipe = !1;
                    }, e));
                },
              },
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    ii,
                    {
                      style: this.props.customStyle,
                      onWheel: this.handleWheelScroll,
                    },
                    this.props.children
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        ui = function (e) {
          var t = e.canSwipeNext,
            n = e.canSwipePrevious,
            r = e.goToNextBlock,
            o = e.goToPreviousBlock,
            a = e.fullHeight,
            i = e.children,
            s = Object(c.useRef)(),
            l = Object(c.useRef)(),
            d = Object(c.useRef)(),
            p = a ? { height: "100%" } : {};
          return u.a.createElement(
            ci,
            {
              customStyle: p,
              downHandler: function () {
                t && r({ navigationType: ni.d });
              },
              upHandler: function () {
                n && o({ navigationType: ni.e });
              },
            },
            u.a.createElement(
              ti.a,
              A()(
                {
                  style: p,
                  onSwiped: function (e) {
                    s.current = !1;
                    Math.abs(e.deltaY) <= 50 / e.velocity ||
                      ("Up" !== e.dir || !t || l.current
                        ? "Down" === e.dir &&
                          n &&
                          !d.current &&
                          o({ navigationType: ni.f })
                        : r({ navigationType: ni.g }));
                  },
                  onSwiping: function () {
                    if (s.current) return !1;
                    (l.current = !t), (d.current = !n), (s.current = !0);
                  },
                },
                {
                  delta: 10,
                  preventDefaultTouchmoveEvent: !1,
                  trackTouch: !0,
                  trackMouse: !1,
                }
              ),
              i
            )
          );
        },
        si = s.d.div.withConfig({
          displayName: "BlockListItem__Wrapper",
          componentId: "sc-3hkawb-0",
        })(
          [
            "position:absolute;width:100%;height:100%;padding-top:",
            "px;",
            ";",
            ";transition:transform ",
            "ms ease,opacity ",
            "ms ease;",
            ";",
            ";",
            ";",
          ],
          function (e) {
            return e.topOffset;
          },
          function (e) {
            return (
              !e.isVisible && "\n    opacity: 0;\n    pointer-events: none;\n  "
            );
          },
          function (e) {
            return (e.shouldBeUp || e.shouldBeDown) && "pointer-events: none";
          },
          J.c,
          J.c / 2,
          function (e) {
            return (e.shouldBeUp || e.shouldBeDown) && "opacity: 0";
          },
          function (e) {
            return e.shouldBeUp && "transform: translateY(-100vh)";
          },
          function (e) {
            return e.shouldBeDown && "transform: translateY(100vh)";
          }
        ),
        li = function (e) {
          var t = e.answer,
            n = e.areBlocksVisible,
            r = e.block,
            o = e.blockIndex,
            a = e.component,
            i = e.currentBlockIndex,
            c = e.currentRef,
            s = e.disableNavigation,
            l = e.enableNavigation,
            d = e.goToBlock,
            p = e.handleCanSwipeChange,
            f = e.handleIsVideoPlayingChange,
            b = e.isDisplayed,
            m = e.isVideoPlaying,
            h = e.layoutItemsSize,
            v = e.listIndexText,
            g = e.nextRef,
            O = e.previousActiveRef,
            y = e.previousRef,
            j = e.topOffset,
            w = r.ref === g,
            k = r.ref === c,
            x = r.ref === O,
            C = n && (k || x),
            E =
              !Za(
                r,
                t,
                {
                  currentRef: c,
                  previousRef: y,
                  previousActiveRef: O,
                  nextRef: g,
                },
                n
              ) ||
              (!Ja && w && !n);
          return u.a.createElement(
            si,
            {
              key: r.ref,
              isVisible: C,
              shouldBeUp: o < i,
              shouldBeDown: o > i || !n,
              topOffset: j,
              onFocus: function (e) {
                return d(r.ref, { navigationType: Object(Qa.a)(e) });
              },
            },
            !E &&
              b &&
              u.a.createElement(a, {
                blockRef: r.ref,
                disableNavigation: s,
                enableNavigation: l,
                isVideoPlaying: m,
                layoutItemsSize: h,
                listIndexText: v,
                onChangeCanSwipe: p,
                onVideoClick: f,
              })
          );
        },
        di = u.a.memo(li),
        pi = s.d.div.withConfig({
          displayName: "BlockList__Root",
          componentId: "ny54fa-0",
        })(["height:100%;"]),
        fi = function (e) {
          var t,
            n,
            r = e.answers,
            o = e.blockChanging,
            a = e.blocks,
            s = e.canShowSubmitButton,
            l = e.component,
            d = e.currentPath,
            p = e.currentRef,
            f = e.disableNavigation,
            b = e.enableNavigation,
            j = e.forceSubmitButtonVisible,
            w = e.goToBlock,
            k = e.goToNextBlock,
            x = e.goToNextBlockFollowingLogic,
            C = e.goToPreviousBlock,
            E = e.inlineSubmit,
            S = e.isBlockChanging,
            I = e.isLivePreview,
            P = e.isSubmitButtonVisible,
            T = e.isVisible,
            _ = e.layoutItemsSize,
            R = e.nextRef,
            A = e.previousActiveRef,
            D = e.previousRef,
            B = e.theme,
            F = e.topOffset,
            N = Object(Ga.a)(d),
            L = Xa(a, p),
            M = Object(y.a)(),
            V = Object(c.useState)(!1),
            H = i()(V, 2),
            z = H[0],
            K = H[1],
            U = Object(c.useState)(!1),
            W = i()(U, 2),
            Y = W[0],
            G = W[1],
            Q = Object(c.useState)(!1),
            J = i()(Q, 2),
            Z = J[0],
            $ = J[1],
            X = Object(c.useState)(!M),
            ee = i()(X, 2),
            te = ee[0],
            ne = ee[1];
          Object(c.useEffect)(
            function () {
              te || M || ne(!0);
            },
            [p, z]
          ),
            Object(c.useEffect)(
              function () {
                M && ne(!1);
              },
              [M]
            ),
            Object(c.useEffect)(
              function () {
                K(T);
              },
              [T]
            ),
            Object(c.useEffect)(
              function () {
                z && o();
              },
              [z]
            );
          var re = Object(v.c)(),
            oe = (function (e, t) {
              return e.find(function (e) {
                return e.ref === t;
              });
            })(a, p),
            ae =
              (null == oe || null === (t = oe.layout) || void 0 === t
                ? void 0
                : t.type) || g.d.STACK,
            ie =
              (null == oe || null === (n = oe.layout) || void 0 === n
                ? void 0
                : n.attachment) || (null == oe ? void 0 : oe.attachment),
            ce = Object(c.useCallback)(
              function (e) {
                var t = e.next,
                  n = e.previous;
                t !== Y && G(t), n !== Z && $(n);
              },
              [Y, Z]
            ),
            ue = function () {
              M ||
                (null == ie ? void 0 : ie.type) !== O.b.video ||
                ne(function (e) {
                  return !e;
                });
            },
            se = Object(c.useCallback)(
              function (e, t) {
                if (
                  (Object(yt.j)(e) && ue(),
                  Object(yt.o)(e) && !Object(yt.m)(e) && !P && s && t)
                ) {
                  if (
                    "payment" !== oe.type &&
                    ((n = "block-".concat(oe.ref)),
                    (r = e.srcElement),
                    null !=
                      (a =
                        null === (o = document.getElementById(n)) ||
                        void 0 === o
                          ? void 0
                          : o.querySelectorAll(
                              'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex="0"]'
                            )) &&
                      a.length &&
                      a[a.length - 1] !== r)
                  )
                    return;
                  return j(!0), void e.preventDefault();
                }
                var n, r, o, a;
                if (Object(yt.f)(e)) return E(p, e), void e.preventDefault();
                if (Object(yt.i)(e) && !P && !Object(yt.m)(e) && !t) {
                  var i = Object(Qa.a)(e);
                  x(p, { navigationType: i }), e.preventDefault();
                }
              },
              [ue, P, s, j, E, x, Qa.a, oe]
            ),
            le = {
              currentRef: p,
              previousRef: D,
              previousActiveRef: A,
              nextRef: R,
            };
          return u.a.createElement(
            pi,
            null,
            u.a.createElement(
              q.Provider,
              { value: S },
              u.a.createElement(
                lt,
                { commonHandleKeydown: se, areGlobalListenersDisabled: I },
                u.a.createElement(
                  ui,
                  {
                    goToPreviousBlock: C,
                    goToNextBlock: k,
                    canSwipeNext: Y,
                    canSwipePrevious: Z,
                    fullHeight: !0,
                  },
                  u.a.createElement(
                    m.b,
                    {
                      hasAttachment: !!ie,
                      backgroundColor: B.colors.background,
                      blocksMedia: a.map(function (e) {
                        return (function (e, t, n, r, o, a, i) {
                          var c,
                            s,
                            l,
                            d,
                            p,
                            f = t.layout || { type: g.d.STACK },
                            b = f.type,
                            v = Object(g.g)(b, n),
                            O = r.currentRef,
                            y =
                              b === g.d.STACK
                                ? t.attachment
                                : null === (c = t.layout) || void 0 === c
                                ? void 0
                                : c.attachment;
                          if (!m.a.includes(v) || !y || !Za(t, e, r, o))
                            return null;
                          var j = null == y ? void 0 : y.href,
                            w = null == y ? void 0 : y.type,
                            k =
                              null !==
                                (s =
                                  null == y ||
                                  null === (l = y.properties) ||
                                  void 0 === l
                                    ? void 0
                                    : l.focalPoint) && void 0 !== s
                                ? s
                                : g.a,
                            x =
                              null == y ||
                              null === (d = y.properties) ||
                              void 0 === d
                                ? void 0
                                : d.brightness,
                            C =
                              null == y ||
                              null === (p = y.properties) ||
                              void 0 === p
                                ? void 0
                                : p.description,
                            E = t.ref === O;
                          return u.a.createElement(h.a, {
                            attachmentAlt: C,
                            attachmentBrightness: x,
                            attachmentFocalPoint: k,
                            attachmentHref: j,
                            attachmentType: w,
                            breakpoint: n,
                            isVisible: E,
                            key: t.ref,
                            layoutType: b,
                            pexelsApiKey:
                              "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                            layoutPlacement: f.placement,
                            isVideoPlaying: a && E,
                            onVideoClick: i,
                          });
                        })(ei(r, e.ref), e, re, le, z, te, ue);
                      }),
                      breakpoint: re,
                      isVisible: z,
                      layoutType: ae,
                    },
                    a.map(function (e, t, n) {
                      var o = e.ref,
                        a = ei(r, o),
                        i = (function (e, t) {
                          return t.some(function (t) {
                            return t.ref === e.ref;
                          });
                        })(e, d),
                        c = N[Xa(d, o)],
                        s = Xa(n, o);
                      return u.a.createElement(di, {
                        answer: a,
                        areBlocksVisible: z,
                        block: e,
                        blockIndex: s,
                        component: l,
                        currentBlockIndex: L,
                        currentRef: p,
                        disableNavigation: f,
                        enableNavigation: b,
                        goToBlock: w,
                        handleCanSwipeChange: ce,
                        handleIsVideoPlayingChange: ue,
                        isDisplayed: i,
                        isVideoPlaying: te,
                        key: o,
                        layoutItemsSize: _,
                        listIndexText: c,
                        nextRef: R,
                        previousActiveRef: A,
                        previousRef: D,
                        topOffset: F,
                      });
                    })
                  )
                )
              )
            )
          );
        };
      fi.defaultProps = {
        blocks: [],
        blockChanging: _.a,
        component: Ya,
        goToBlock: _.a,
        theme: { colors: { background: o.b } },
      };
      var bi = fi,
        mi = {
          blockChanging: f.a,
          disableNavigation: f.b,
          enableNavigation: f.c,
          forceSubmitButtonVisible: f.g,
          goToBlock: f.h,
          goToNextBlock: f.j,
          goToNextBlockFollowingLogic: f.k,
          goToPreviousBlock: f.l,
          inlineSubmit: b.a,
          onEndAutoScroll: f.d,
        },
        hi = Object(r.b)(function (e) {
          var t = Object(Ee.x)(e),
            n = Object(o.n)() && Object(Se.k)(e),
            r = !Object(Na.a)(e) && !n && Object(Ee.F)(e),
            a = r ? Object(Se.E)(e) : null,
            i = $a(a),
            c = Object(Re.g)(e),
            u = 0;
          return (
            r && !c && (u = i ? 88 : 60),
            {
              answers: Object(Ee.l)(e),
              blocks: Object(Ee.t)(e),
              canShowSubmitButton: Object(Se.a)(e, t),
              currentPath: Object(Ee.w)(e),
              currentRef: t,
              isBlockChanging: Object(Se.i)(e),
              isLivePreview: Object(Se.m)(e),
              isSubmitButtonVisible: Object(Se.s)(e, t),
              nextRef: Object(Ee.K)(e, t),
              previousActiveRef: Object(Se.w)(e),
              previousRef: Object(Pe.q)(e),
              scrolling: Object(Se.A)(e),
              theme: Object(Re.h)(e),
              topOffset: u,
            }
          );
        }, mi)(bi),
        vi = n(644),
        gi = n.n(vi);
      function Oi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function yi(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nn()(e);
          if (t) {
            var o = Nn()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Bn()(this, n);
        };
      }
      var ji,
        wi,
        ki = function (e) {
          return e
            ? e.childOfGroup && e.listIndexText
              ? null
              : e.titleCounterIcon || "arrow"
            : null;
        },
        xi = s.d.div.withConfig({
          displayName: "StickyHeaderContainer__Wrapper",
          componentId: "sc-1tjdqrs-0",
        })(
          ["position:absolute;top:0;left:0;width:100%;z-index:", ";", ";"],
          V.u.level3,
          function (e) {
            return e.isVisible ? "" : "pointer-events: none;";
          }
        ),
        Ci = Qe.a ? 0 : 300,
        Ei =
          ((ji = gi.a),
          (wi = Ci),
          (function (e) {
            An()(n, e);
            var t = yi(n);
            function n(e) {
              var r;
              return (
                Sn()(this, n),
                ((r = t.call(this, e)).state = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Oi(Object(n), !0).forEach(function (t) {
                          w()(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : Oi(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, e)),
                (r.shouldRender = !1),
                (r.updateState = Object(Ge.debounce)(wi, r.updateState)),
                r
              );
            }
            return (
              Pn()(n, [
                {
                  key: "UNSAFE_componentWillReceiveProps",
                  value: function (e) {
                    (this.shouldRender = !1), this.updateState(e);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.updateState.cancel();
                  },
                },
                {
                  key: "updateState",
                  value: function (e) {
                    (this.shouldRender = !0), this.setState(e);
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function () {
                    return this.shouldRender;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return u.a.createElement(ji, this.state);
                  },
                },
              ]),
              n
            );
          })(c.Component)),
        Si = Object(v.f)(
          Object(r.b)(function (e, t) {
            var n = Object(Na.a)(e),
              r = Object(Se.k)(e),
              a = Object(o.n)() && r,
              i = !n && Object(Se.j)(e) && "sm" !== t.breakpoint && !a,
              c = !n && !Object(Re.g)(e) && Object(Ee.F)(e) && !a,
              u = i ? Object(Se.D)(e) : null,
              s = c ? Object(Se.E)(e) : null,
              l = ki(s),
              d = ki(u),
              p = Object(Da.g)(e);
            return {
              groupHeaderVisible: c,
              groupTitle: (null == s ? void 0 : s.title) && p(s.title),
              groupHeaderIcon: l,
              groupHeaderCounter: s && s.listIndexText,
              groupHeaderImage: $a(s),
              questionHeaderVisible: i,
              questionTitle: (null == u ? void 0 : u.title) && p(u.title),
              questionHeaderIcon: d,
              questionHeaderCounter: u && u.listIndexText,
              contextBackgroundColor: Object(Re.a)(e),
              contentColor: Object(Re.e)(e),
              counterColor: Object(Re.f)(e),
              oldLayout: !0,
              isBlockChanging: Object(Se.i)(e),
              activeBlockRef: u ? u.ref : null,
              groupBlock: s,
            };
          })(function (e) {
            var t = e.isBlockChanging,
              n = e.questionHeaderVisible,
              r = e.questionTitle,
              o = e.groupHeaderVisible,
              a = e.groupTitle,
              s = e.activeBlockRef,
              l = S()(e, [
                "isBlockChanging",
                "questionHeaderVisible",
                "questionTitle",
                "groupHeaderVisible",
                "groupTitle",
                "activeBlockRef",
              ]),
              d = Object(c.useState)(!1),
              p = i()(d, 2),
              f = p[0],
              b = p[1];
            Object(c.useEffect)(
              function () {
                if (!t) {
                  var e = setTimeout(function () {
                    return b(!1);
                  }, Ci);
                  return function () {
                    return clearTimeout(e);
                  };
                }
                b(!0);
              },
              [t]
            );
            var m = !f && !t && (o || n);
            return u.a.createElement(
              xi,
              {
                "aria-hidden": !0,
                "data-qa-stickyheader-visible": m,
                "data-qa-stickyheader-blockref": s,
                isVisible: !f && !t && (o || n),
              },
              u.a.createElement(
                Ei,
                A()(
                  {
                    questionHeaderVisible: n && !f && !t,
                    groupHeaderVisible: o,
                    questionHeaderContent: r,
                    groupHeaderContent: a,
                  },
                  l
                )
              )
            );
          })
        ),
        Ii = n(241),
        Pi = n(702),
        Ti = n.n(Pi),
        _i = n(294),
        Ri = n(238),
        Ai = n(499),
        Di = {
          nextButtonOnClick: function (e) {
            return Object(f.j)({ navigationType: Object(Qa.a)(e) });
          },
          previousButtonOnClick: function (e) {
            return Object(f.l)({ navigationType: Object(Qa.a)(e) });
          },
          onClickBrandButton: function () {
            return Object(Pa.d)("typeform-footer");
          },
        },
        Bi = Object(Lt.a)(
          Object(r.b)(function (e, t) {
            var n = Object(Na.e)(e),
              r = Object(_e.b)(e),
              a = Object(Se.m)(e)
                ? null
                : r("https://www.typeform.com/explore/", "typeform-footer"),
              i = Object(Ie.b)(e),
              c = Object(Ee.k)(e);
            return {
              answeredText: t.t("label.progress.proportion", {
                step: i,
                total: c,
              }),
              brandButtonHref: a,
              brandButtonText: Object(Q.a)(t.t("label.branding.poweredby")),
              buttonsColor: Object(Re.c)(e),
              buttonsContentColor: Object(Re.d)(e),
              contextBackgroundColor: Object(Re.a)(e),
              dataQa: "fixed-footer",
              isBrandLogoVisible: Object(Ri.c)(e),
              isTopBarProgressRedesign: Object(Ai.a)(
                e,
                "PINT-327_RendererFooterNav_Rollout"
              ),
              nextButtonDisabled: !Object(_i.a)(e),
              percentageText: t.t("label.progress.percent", {
                percent: Math.round((100 * i) / c),
              }),
              previousButtonDisabled: !Object(_i.b)(e),
              progressBackgroundColor: Object(Re.a)(e),
              progressColor: Object(Re.e)(e),
              progressCompletedAmount: Object(Ie.b)(e),
              progressTotalAmount: Object(Ee.k)(e),
              progressType: Object(Se.x)(e),
              transparentButtons: Object(Re.i)(e),
              visible: !Object(o.n)() || !Object(Se.k)(e),
              withBackground: !n,
              withBranding: Object(Se.C)(e),
              withNavigationArrows: !n && !Object(Se.f)(e),
              withProgress: !n && !Object(Se.p)(e),
            };
          }, Di)(Ti.a)
        ),
        Fi = n(456),
        Ni = n(299),
        Li = n.n(Ni),
        Mi = n(143),
        Vi = n.n(Mi),
        Hi = n(245),
        zi = n(534),
        Ki = s.d.div.withConfig({
          displayName: "StickyFooter__CommitButtonWrapper",
          componentId: "sc-1ud3eur-0",
        })(["display:flex;align-items:center;"]),
        Ui = s.d.div.withConfig({
          displayName: "StickyFooter__StickyFooterPlaceholder",
          componentId: "sc-1ud3eur-1",
        })(
          [
            "position:absolute;width:100%;overflow:hidden;bottom:",
            "px;z-index:",
            ";opacity:",
            ";visibility:",
            ";",
          ],
          function (e) {
            return e.hasFormFooter ? V.m : 0;
          },
          function (e) {
            return e.isActive ? V.u.level3 : V.u.level0;
          },
          function (e) {
            return e.isActive ? "1" : "0";
          },
          function (e) {
            return e.isActive ? "visible" : "hidden";
          }
        ),
        qi = s.d.div.withConfig({
          displayName: "StickyFooter__StickyFooterWrapper",
          componentId: "sc-1ud3eur-2",
        })(
          [
            "display:flex;align-items:center;justify-content:space-between;border-top:1px solid;height:",
            "px;background-color:",
            ";border-color:",
            ";",
          ],
          function (e) {
            return e.$height;
          },
          function (e) {
            return Object(o.y)(
              Object(o.r)(e.contextBackgroundColor, e.$color, 0.2)
            );
          },
          function (e) {
            return Object(o.r)(e.contextBackgroundColor, e.$color, 0.3);
          }
        ),
        Wi = function (e) {
          var t = e.blockRef,
            n = e.show,
            r = e.theme,
            o = e.t,
            a = e.breakpoint,
            i = e.buttonText,
            c = e.showButtonIcon,
            s = e.hasFormFooter,
            l = e.helperText,
            d = e.isButtonTypeSubmit,
            f = e.isEnabled,
            b = e.isLivePreview,
            m = e.isPaymentBlockAnswered,
            h = e.onCommitAnswer,
            v = e.price,
            g = e.recenter,
            O = e.submit,
            y = e.submitForm,
            j = Object(ue.useIsTouch)();
          if (!f) return null;
          var w = "sm" === a,
            k = w || j ? "" : Object(Q.a)(o(l));
          return u.a.createElement(
            Ui,
            {
              "aria-hidden": !0,
              "data-qa": "sticky-footer-placeholder",
              isActive: n,
              hasFormFooter: s,
            },
            u.a.createElement(
              p.b,
              { type: "slideUp", isVisible: n },
              u.a.createElement(
                qi,
                {
                  $height: 56,
                  contextBackgroundColor: r.colors.background,
                  $color: r.colors.secondary,
                  "data-qa": "sticky-footer",
                  "data-qa-visible": n,
                },
                u.a.createElement(
                  Fi.b,
                  null,
                  u.a.createElement(
                    Ki,
                    null,
                    d
                      ? u.a.createElement(de, {
                          centered: w,
                          fullWidth: w,
                          helperText: "",
                          isComplete: O.isComplete,
                          isLivePreview: b,
                          isPaymentBlockAnswered: m,
                          isSubmitting: O.isSubmitting,
                          onClick: function (e) {
                            g("bottom"), y(e);
                          },
                          price: v,
                          size: "medium",
                          t: o,
                          theme: r,
                        })
                      : u.a.createElement(
                          Vi.a,
                          {
                            fullWidth: w,
                            onClick: function (e) {
                              h(t, e, { source: zi.a });
                            },
                            iconSvg: c ? ce.a : null,
                            size: "medium",
                            color: r.colors.button,
                            contentColor: r.colors.buttonContent,
                            contextBackgroundColor: r.colors.background,
                            transparent: r.hasTransparentButton,
                            dataQa: "sticky-footer-button",
                          },
                          o(i)
                        ),
                    k &&
                      u.a.createElement(
                        M.a,
                        { left: 2 },
                        u.a.createElement(Li.a, {
                          text: k,
                          color: r.colors.secondary,
                        })
                      )
                  )
                )
              )
            ),
            u.a.createElement(Hi.a, null)
          );
        };
      Wi.defaultProps = {
        t: function (e) {
          return e;
        },
        recenter: function (e) {
          return e;
        },
        buttonText: "label.button.ok",
        showButtonIcon: !0,
        isEnabled: !0,
        theme: { colors: { background: o.b, button: o.b, secondary: o.b } },
        submit: { retry: {}, isComplete: !1, isSubmitting: !1 },
      };
      var Yi = Object(v.f)(Object(T.a)(Wi)),
        Gi = { onCommitAnswer: Sa.a, recenter: f.n, submitForm: b.b },
        Qi = Object(r.b)(function (e) {
          var t = Object(Ee.x)(e),
            n = Object(Se.z)(e),
            r = Object(Ee.p)(e, n);
          if (!r || n !== t) return { show: !1, theme: Object(Re.h)(e) };
          var a = Object(o.n)() && Object(Se.k)(e),
            i = Object(Se.h)(e, n),
            c = G() ? "label.buttonHint.submit-mac" : "label.buttonHint.submit",
            u = Object(Na.e)(e),
            s = Object(Se.C)(e),
            l = !u && !Object(Se.f)(e),
            d = !u && !Object(Se.p)(e),
            p = s || l || d;
          return {
            blockRef: n,
            buttonText: r.buttonText,
            hasFormFooter: p,
            helperText: i ? c : "label.buttonHint.default",
            isButtonTypeSubmit: i,
            isEnabled: Object(o.n)(),
            isLivePreview: Object(Se.m)(e),
            isPaymentBlockAnswered: Object(Ie.m)(e),
            price: Object(Ee.N)(e),
            show: !Object(Na.e)(e) && !a,
            showButtonIcon: !Object(Ee.G)(r),
            submit: Object(Ee.S)(e),
            theme: Object(Re.h)(e),
          };
        }, Gi)(Yi),
        Ji = n(793),
        Zi = function (e) {
          var t = e.breakpoint,
            n = e.href,
            r = e.isOnScreen,
            o = e.isStickyHeaderVisible,
            a = e.isVisible,
            i = (function (e, t, n) {
              return "sm" === t ? (n ? Ji.a.TOP_LEFT : Ji.a.BOTTOM_LEFT) : e;
            })(e.placement, t, r),
            c = i === Ji.a.TOP_LEFT && o;
          return u.a.createElement(Ji.b, {
            href: n,
            isVisible: a && !c,
            placement: i,
          });
        },
        $i = Object(v.f)(
          Object(r.b)(function (e, t) {
            var n = Object(Se.j)(e) && "sm" !== t.breakpoint,
              r = Object(Ee.F)(e);
            return {
              breakpoint: t.breakpoint,
              href: Object(Ri.a)(e),
              isOnScreen: Object(Ee.P)(e) || Object(Ee.Q)(e),
              isStickyHeaderVisible: (n || r) && !Object(Na.a)(e),
              isVisible: Object(Ri.c)(e),
              placement: Object(Ri.b)(e),
            };
          })(Zi)
        ),
        Xi = n(544),
        ec = n.n(Xi),
        tc = s.d.div.withConfig({
          displayName: "top-progress__Positioner",
          componentId: "qym04i-0",
        })(
          ["position:absolute;top:0;left:0;right:0;z-index:", ";"],
          V.u.level3
        ),
        nc = function (e) {
          var t = e.color,
            n = e.isEnabled,
            r = e.progressCompletedAmount,
            o = e.progressTotalAmount;
          return n
            ? u.a.createElement(
                tc,
                null,
                u.a.createElement(ec.a, {
                  color: t,
                  isRounded: !1,
                  min: 0,
                  max: o,
                  value: r,
                })
              )
            : null;
        },
        rc = Object(r.b)(function (e) {
          var t = Object(Ai.a)(e, "PINT-327_RendererFooterNav_Rollout");
          return {
            color: Object(Re.c)(e),
            isEnabled: t && !Object(Se.p)(e),
            progressCompletedAmount: Object(Ie.b)(e),
            progressTotalAmount: Object(Ee.k)(e),
          };
        })(nc),
        oc = s.d.div.withConfig({
          displayName: "Form__Root",
          componentId: "sc-18c4ntz-0",
        })(["height:100%;overflow:hidden;"]),
        ac = s.d.div.withConfig({
          displayName: "Form__FooterWrapper",
          componentId: "sc-18c4ntz-1",
        })([
          "position:absolute;opacity:inherit;right:0;left:0;bottom:0;z-index:10;pointer-events:none;",
        ]),
        ic = function (e) {
          "stkv-form-root" === e.target.id && (e.target.scrollTop = 0);
        },
        cc = function (e) {
          var t = e.layoutItemsSize,
            n = e.showBlockList,
            r = e.showThankYouScreen,
            o = e.showWelcomeScreen,
            a = Object(Ii.a)(),
            s = Object(c.useState)(Object(Ct.c)()),
            l = i()(s, 2),
            d = l[0],
            f = l[1];
          return (
            Object(c.useEffect)(
              function () {
                if (n && Object(Ct.c)()) {
                  var e = setTimeout(function () {
                    return f(!1);
                  }, J.c + 200);
                  return function () {
                    return clearTimeout(e);
                  };
                }
                return function () {};
              },
              [n]
            ),
            a && o
              ? null
              : u.a.createElement(
                  oc,
                  { "aria-hidden": r || o, id: "stkv-form-root", onScroll: ic },
                  n && u.a.createElement(rc, null),
                  u.a.createElement(Si, null),
                  !r &&
                    u.a.createElement(
                      u.a.Fragment,
                      null,
                      u.a.createElement(hi, {
                        component: Ya,
                        isVisible: n,
                        layoutItemsSize: t,
                      }),
                      u.a.createElement(Qi, null)
                    ),
                  u.a.createElement(
                    p.b,
                    {
                      isVisible: n,
                      type: "fade",
                      duration: Qe.a ? 0 : 500,
                      delay: Qe.a ? 0 : 300,
                    },
                    u.a.createElement(
                      ac,
                      { "aria-hidden": d },
                      u.a.createElement(Bi, null)
                    )
                  ),
                  u.a.createElement($i, null)
                )
          );
        };
      cc.defaultProps = { layoutItemsSize: {} };
      var uc = cc;
      t.default = Object(r.b)(function (e) {
        return {
          theme: e.form.theme,
          showBlockList: !Object(Ee.Q)(e) && !Object(Ee.P)(e),
          isFooterVisible: !Object(o.n)() || !Object(Se.k)(e),
          hasBlocksWithAnswer: Object(Ie.f)(e),
          showThankYouScreen: Object(Ee.P)(e),
          showWelcomeScreen: Object(Ee.Q)(e),
        };
      })(uc);
    },
    797: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return Wn;
        });
      var r = n(220),
        o = n(626),
        a = n(632),
        i = n(10),
        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      function u(e) {
        for (var t = "", n = 0; n < e; n++)
          t += c.charAt(Math.floor(Math.random() * c.length));
        return t;
      }
      var s = n(2),
        l = n.n(s);
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.type;
        switch (n) {
          case i.s:
            return p(p({}, e), {}, { isFormMarkAsClosed: !0 });
          case i.E:
            return p(
              p({}, e),
              {},
              { isFormMarkAsClosed: !0, isCloseScreenVisible: !0 }
            );
          default:
            return e;
        }
      };
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var h = function (e, t) {
          var n = t.payload.ref;
          return m(
            m({}, e),
            {},
            {
              currentRef: n,
              previousRef: e.currentRef,
              requireStickyFooter: null,
              forceSubmitButtonVisible: !1,
            }
          );
        },
        v = function (e, t) {
          var n = t.payload;
          return m(m({}, e), {}, { isBlockChanging: n });
        },
        g = function (e, t) {
          var n = t.payload;
          return m(m({}, e), {}, { forceSubmitButtonVisible: n });
        };
      n(527);
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var j = function (e, t) {
          var n = t.payload,
            r = n.anchor,
            o = n.target,
            a = n.fast;
          return y(
            y({}, e),
            {},
            {
              scrolling: {
                scrollType: "recenter",
                anchor: r,
                target: o,
                fast: a,
              },
            }
          );
        },
        w = function (e, t) {
          var n = t.payload.ref;
          return y(
            y({}, e),
            {},
            { scrolling: { ref: n, scrollType: "choice" } }
          );
        },
        k = function (e, t) {
          var n = t.payload.ref;
          return y(y({}, e), {}, { currentScreenRef: n });
        },
        x = function (e) {
          return y(y({}, e), {}, { currentScreenRef: null });
        };
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function S(e, t) {
        var n = t.payload.isScrollNearTop;
        return E(E({}, e), {}, { isScrollNearTop: n });
      }
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function T(e, t) {
        var n = t.payload,
          r = n.blockRef,
          o = n.show,
          a = void 0 !== o && o;
        return a || e.requireStickyFooter === r
          ? P(P({}, e), {}, { requireStickyFooter: a ? r : null })
          : e;
      }
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function A(e) {
        return R(R({}, e), {}, { scrolling: null });
      }
      var D = n(132),
        B = n(234);
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var L = n(286);
      n(25), n(26), n(51), n(21);
      var M = n(112),
        V = n.n(M),
        H = n(633),
        z = n.n(H),
        K = n(287),
        U = n(214),
        q = n(3);
      function W(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var G = { answersList: [] },
        Q = function (e, t) {
          var n = t.payload,
            r = n.validationErrors,
            o = n.blockRef,
            a = Object(U.a)(e.answersList, o),
            i = e.answersList[a];
          return Y(
            Y({}, e),
            {},
            {
              answersList: z()(
                a,
                Y(
                  Y({}, i),
                  {},
                  {
                    validationErrors: null != r ? r : [],
                    isValid: !r || 0 === r.length,
                  }
                ),
                e.answersList
              ),
            }
          );
        },
        J = function (e, t) {
          var n = t.payload.answer,
            r = Object(q.b)(n),
            o = Object(U.a)(e.answersList, r);
          return Y(
            Y({}, e),
            {},
            {
              answersList: z()(
                o,
                Y(Y({}, n), {}, { isCommitted: !1, hasBeenInteractedWith: !0 }),
                e.answersList
              ),
            }
          );
        },
        Z = function (e, t) {
          var n = t.payload.ref;
          return Y(
            Y({}, e),
            {},
            {
              answersList: e.answersList.map(function (e) {
                return Object(q.b)(e) !== n
                  ? e
                  : Y(Y({}, e), {}, { isCommitted: !0 });
              }),
            }
          );
        },
        $ = function (e, t) {
          var n = t.payload.ref;
          return Y(
            Y({}, e),
            {},
            {
              answersList: e.answersList.map(function (e) {
                return Object(q.b)(e) !== n
                  ? e
                  : Y(Y({}, e), {}, { isCommitted: !0 });
              }),
            }
          );
        },
        X = function (e) {
          return Y(
            Y({}, e),
            {},
            {
              answersList: e.answersList.map(function (e) {
                return Y(Y({}, e), {}, { isCommitted: !0 });
              }),
            }
          );
        };
      var ee = [];
      n(35), n(40);
      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var re = {
        legacyAccountId: "",
        accountUid: "",
        cookieAccountUids: null,
        formId: "",
        initialized: !1,
        isFormCreator: !1,
        isFirstConversation: null,
        sessionId: null,
        planName: "",
        blockRefTracking: {},
      };
      var oe = function () {
        var e,
          t,
          n,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
          o = arguments.length > 1 ? arguments[1] : void 0,
          a = o.type,
          c = o.payload;
        switch (a) {
          case i.M:
            return ne(
              ne({}, r),
              {},
              {
                initialized: !0,
                segmentKey: null == c ? void 0 : c.segmentKey,
                isFormCreator:
                  null !==
                    (e =
                      null == c ||
                      null === (t = c.cookieAccountUids) ||
                      void 0 === t
                        ? void 0
                        : t.includes(r.accountUid)) &&
                  void 0 !== e &&
                  e,
                isFirstConversation: null == c ? void 0 : c.isFirstConversation,
                sessionId: u(12),
              }
            );
          case i.D:
            return ne(
              ne({}, r),
              {},
              { visitCurrentCycle: c.visitCurrentCycle }
            );
          case i.C:
            var s = c.ref,
              d = c.responseFilled,
              p =
                (null === (n = r.blockRefTracking) || void 0 === n
                  ? void 0
                  : n[s]) || {};
            return ne(
              ne({}, r),
              {},
              {
                blockRefTracking: ne(
                  ne({}, r.blockRefTracking),
                  {},
                  l()({}, s, ne(ne({}, p), {}, { responseFilled: d }))
                ),
              }
            );
          default:
            return r;
        }
      };
      n(89), n(20);
      function ae(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ae(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ce = {
          backgroundOpacity: 1,
          hideHeaders: !1,
          minimalFooter: !1,
          mode: null,
        },
        ue = function (e, t) {
          return Object.keys(e).every(function (e) {
            return Object.keys(t).includes(e);
          });
        };
      var se = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ue(ce, e) || (e = ie(ie({}, ce), e)), e;
        },
        le = n(301),
        de = n(68),
        pe = n(19);
      function fe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? fe(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function me(e, t) {
        var n = t.payload,
          r = n.currentBlockRef,
          o = n.paymentProviders,
          a = n.resetAnswers,
          i = Object(le.a)(t.payload),
          c = be(
            be({}, e),
            {},
            {
              submit: a ? B.a : e.submit,
              form: be(
                be({}, i),
                {},
                {
                  currentRef: e.form.currentRef,
                  currentScreenRef: e.form.currentScreenRef,
                  isScrollNearTop: !0,
                  isLivePreview: e.form.isLivePreview,
                }
              ),
              paymentProviders: be(be({}, e.paymentProviders), o),
            }
          ),
          u = Object(q.t)(c),
          s = (function (e, t, n) {
            var r = Object(K.a)(t);
            if (n) return r;
            var o = e.filter(function (e) {
              return !!t.find(function (t) {
                return t.ref === e.blockRef;
              });
            });
            return [].concat(
              V()(o),
              V()(
                r.filter(function (t) {
                  return !e.find(function (e) {
                    return Object(q.b)(e) === Object(q.b)(t);
                  });
                })
              )
            );
          })(Object(q.l)(e), u, a);
        if (
          ((c.answers = { answersList: s }), (c.pipingAnswers = s), null != r)
        )
          if (Object(de.b)(c, r) || Object(de.a)(c, r))
            c.form.currentScreenRef = r;
          else {
            c.form.currentScreenRef = null;
            var l = Object(pe.m)(c, r) ? r : Object(pe.d)(c);
            l && (c.form.currentRef = l);
          }
        return c;
      }
      var he = n(285);
      function ve(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ve(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Oe = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : he.a,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            r = t.payload;
          switch (n) {
            case i.L:
              return ge(ge({}, e), {}, { isInputFocused: r.isInputFocused });
            default:
              return e;
          }
        },
        ye = function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case i.j:
              return !0;
            case i.h:
              return !1;
            default:
              return e;
          }
        };
      function je(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : je(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ke = {
        stripePaymentMethodId: null,
        stripePaymentIntentId: null,
        service: null,
      };
      var xe = Object(r.c)({
          accessScheduling: f,
          answers: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : G,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case i.U:
                return Q(e, t);
              case i.G:
                return J(e, t);
              case i.f:
                return Z(e, t);
              case i.e:
                return $(e, t);
              case i.c:
                return X(e);
              default:
                return e;
            }
          },
          autoFocus: ye,
          embedSettings: se,
          form: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case i.a:
                return h(e, t);
              case i.b:
                return v(e, t);
              case i.o:
                return g(e, t);
              case i.F:
                return k(e, t);
              case i.p:
                return x(e);
              case i.B:
                return w(e, t);
              case i.t:
                return j(e, t);
              case i.l:
                return A(e);
              case i.w:
                return S(e, t);
              case i.v:
                return T(e, t);
              default:
                return e;
            }
          },
          input: Oe,
          paymentProviders: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ke,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.payload;
            switch (n) {
              case i.z:
                return we(
                  we({}, e),
                  {},
                  {
                    stripe: we(
                      we({}, e.stripe),
                      {},
                      { stripePaymentMethodId: r }
                    ),
                  }
                );
              case i.y:
                return we(
                  we({}, e),
                  {},
                  {
                    stripe: we(
                      we({}, e.stripe),
                      {},
                      { stripePaymentIntentId: r }
                    ),
                  }
                );
              case i.A:
                return we(
                  we({}, e),
                  {},
                  { stripe: we(we({}, e.stripe), {}, { service: r }) }
                );
              default:
                return e;
            }
          },
          pipingAnswers: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ee,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case i.S:
                return t.payload;
              default:
                return e;
            }
          },
          reviewMode: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : L.a,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case i.n:
                return { isReviewModeEnabled: !0 };
              case i.m:
                return { isReviewModeEnabled: !1 };
              default:
                return e;
            }
          },
          submit: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : B.a,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.payload;
            switch (n) {
              case i.H:
                return N(
                  N({}, e),
                  {},
                  {
                    isSubmitting: !(null != r && r.isLivePreview),
                    isSuccess: !1,
                    isComplete: !1,
                    errorMessage: null,
                    retry: N(N({}, e.retry), {}, { timeout: 0 }),
                    navigationType: null == r ? void 0 : r.navigationType,
                  }
                );
              case i.K:
                return N(
                  N({}, e),
                  {},
                  {
                    isSubmitting: !1,
                    isSuccess: !0,
                    isComplete: !0,
                    retry: N(
                      N({}, e.retry),
                      {},
                      { count: 0, showMessage: !1, timeout: 0 }
                    ),
                  }
                );
              case i.J:
                var o = e.retry,
                  a = o.showMessage,
                  c = o.count;
                return N(
                  N({}, e),
                  {},
                  {
                    isSubmitting: !0,
                    isSuccess: !1,
                    isComplete: !1,
                    retry: N(
                      N({}, e.retry),
                      {},
                      {
                        count: c + 1,
                        timeout: r.retry.timeout,
                        showMessage: a || c >= D.g,
                      }
                    ),
                  }
                );
              case i.g:
                var u = e.retry.timeout - 1;
                return N(
                  N({}, e),
                  {},
                  { retry: N(N({}, e.retry), {}, { timeout: u > 0 ? u : 0 }) }
                );
              case i.x:
                return N(
                  N({}, e),
                  {},
                  { retry: N(N({}, e.retry), {}, { count: 2 }) }
                );
              case i.r:
                return N(
                  N({}, e),
                  {},
                  {
                    responseId: r.responseId,
                    landingId: r.landingId,
                    landingAt: r.landingAt,
                  }
                );
              case i.q:
                return e;
              case i.I:
                return N(
                  N({}, e),
                  {},
                  {
                    isSubmitting: !1,
                    isSuccess: !1,
                    isComplete: !1,
                    errorMessage: r.message,
                    retry: N({}, B.a.retry),
                  }
                );
              case i.G:
                return N(N({}, e), {}, { errorMessage: null });
              default:
                return e;
            }
          },
          tracking: oe,
          abTests: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return e;
          },
          brandLogo: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return e;
          },
          disableNavigation: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case i.i:
                return !0;
              case i.k:
                return !1;
              default:
                return e;
            }
          },
          disableSubmit: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e;
          },
          disableTracking: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e;
          },
          featureFlags: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return e;
          },
          hideSubmitButton: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e;
          },
          intents: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            return e;
          },
          isLivePreview: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e;
          },
          isOfflineMode: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e;
          },
          isLimitedToParentSize: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e;
          },
          testVariants: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return e;
          },
          timeToComplete: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return e;
          },
          uniqueId: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : u(16);
            return e;
          },
          unrecoverableError: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case i.u:
                return t.payload;
              default:
                return e;
            }
          },
        }),
        Ce = function (e, t) {
          switch (t.type) {
            case i.T:
              return me(e, t);
            default:
              return xe(e, t);
          }
        },
        Ee = (n(107), n(215), n(311), n(87)),
        Se = n.n(Ee),
        Ie = (n(169), n(463)),
        Pe = n(499),
        Te = n(27),
        _e = n(538),
        Re = n(469),
        Ae = n(93),
        De = n(28),
        Be = Se.a.mark(Fe);
      function Fe(e) {
        var t, n, r;
        return Se.a.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (o.next = 2), Object(Ie.i)(Te.c);
              case 2:
                return (t = o.sent), (o.next = 5), Object(Ie.i)(Re.i);
              case 5:
                return (n = o.sent), (o.next = 8), Object(Ie.i)(de.c);
              case 8:
                return (
                  (r = o.sent), (o.next = 11), Object(Ie.g)(Object(Ae.e)())
                );
              case 11:
                return (o.next = 13), Object(Ie.g)(Object(De.p)(r.ref));
              case 13:
                if ("function" != typeof e) {
                  o.next = 16;
                  break;
                }
                return (o.next = 16), Object(Ie.b)(e, t, n);
              case 16:
              case "end":
                return o.stop();
            }
        }, Be);
      }
      n(113);
      var Ne = n(485),
        Le = n.n(Ne),
        Me = n(530),
        Ve = n(7),
        He = n(8),
        ze = n(6),
        Ke = n(223),
        Ue = n(535),
        qe = n(467),
        We = (n(66), n(108), n(134)),
        Ye = n.n(We),
        Ge = n(228),
        Qe = n.n(Ge);
      function Je(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Je(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Je(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var $e = { All: !1, Natero: !0, Iterable: !0 },
        Xe = function () {
          var e,
            t = parseInt(Qe.a.get("ajs_user_id"), 10) || null;
          try {
            e =
              parseInt(window.localStorage.getItem("ajs_user_id"), 10) || null;
          } catch (e) {}
          return t || e;
        },
        et = function (e) {
          return new Promise(function (t) {
            Le.a.identify(
              e,
              null,
              { context: { ip: "0.0.0.0" }, integrations: $e },
              t
            );
          });
        },
        tt = function (e) {
          var t = window.analytics.user();
          t && t.anonymousId(e);
        },
        nt = function (e) {
          Object(Ke.e)(e);
        },
        rt = (function () {
          var e = Ye()(
            Se.a.mark(function e(t, n) {
              var r, o;
              return Se.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = Xe()), (e.next = 3), et("renderer");
                    case 3:
                      return (
                        (e.next = 5),
                        Promise.all(
                          t
                            .map(function (e) {
                              return {
                                data: e.data || {},
                                options: e.options || {},
                              };
                            })
                            .map(function (e) {
                              return {
                                data: Ze({}, e.data),
                                options: Ze(
                                  Ze({}, e.options),
                                  {},
                                  {
                                    context: { ip: "0.0.0.0" },
                                    integrations: e.options.integrations || $e,
                                  }
                                ),
                              };
                            })
                            .map(function (e) {
                              return (
                                (t = e.data.event),
                                (n = e.data),
                                (r = e.options),
                                new Promise(function (e) {
                                  Le.a.sendEvent(t, n, r, e);
                                })
                              );
                              var t, n, r;
                            })
                        )
                      );
                    case 5:
                      if (!r || "null" === r) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 8), et(r);
                    case 8:
                      e.next = 11;
                      break;
                    case 10:
                      window.analytics &&
                        ((o =
                          window.analytics.user() &&
                          window.analytics.user().anonymousId()),
                        window.analytics.reset(),
                        tt(o));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        ot = n(111),
        at = n(534),
        it = n(118),
        ct = n(83),
        ut = n(531),
        st = n(533),
        lt = Se.a.mark(dt);
      function dt(e, t) {
        var n, r, o, a, i, c, u, s, l, d;
        return Se.a.wrap(function (p) {
          for (;;)
            switch ((p.prev = p.next)) {
              case 0:
                return (p.next = 2), Object(Ie.i)(ut.b);
              case 2:
                if (((n = p.sent), (r = Object.keys(n)).length)) {
                  p.next = 6;
                  break;
                }
                return p.abrupt("return");
              case 6:
                return (p.next = 8), Object(Ie.i)(Te.c);
              case 8:
                return (o = p.sent), (p.next = 11), Object(Ie.i)(qe.i);
              case 11:
                return (a = p.sent), (p.next = 14), Object(Ie.i)(qe.g);
              case 14:
                (i = p.sent), (c = 0), (u = r);
              case 16:
                if (!(c < u.length)) {
                  p.next = 25;
                  break;
                }
                return (
                  (s = u[c]),
                  (l = n[s]),
                  (d = {
                    event: st.a,
                    attribution_user_id: Me.getUser(),
                    test_id: s,
                    variant_label: l,
                    form_uid: o,
                    account_id: a.legacyAccountId,
                    typeform_view_id: i,
                  }),
                  (p.next = 22),
                  Object(Ie.g)(e, { data: d, options: t })
                );
              case 22:
                c++, (p.next = 16);
                break;
              case 25:
              case "end":
                return p.stop();
            }
        }, lt);
      }
      var pt = n(497),
        ft = Se.a.mark(Gt),
        bt = Se.a.mark(Qt),
        mt = Se.a.mark(Jt),
        ht = Se.a.mark(Zt),
        vt = Se.a.mark($t),
        gt = Se.a.mark(Xt),
        Ot = Se.a.mark(en),
        yt = Se.a.mark(tn),
        jt = Se.a.mark(nn),
        wt = Se.a.mark(rn),
        kt = Se.a.mark(on),
        xt = Se.a.mark(an),
        Ct = Se.a.mark(cn),
        Et = Se.a.mark(un),
        St = Se.a.mark(sn),
        It = Se.a.mark(ln),
        Pt = Se.a.mark(dn),
        Tt = Se.a.mark(pn);
      function _t(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _t(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _t(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var At = "block_answered",
        Dt = "block_focused",
        Bt = "block_footer_clicked",
        Ft = "block_footer_visible",
        Nt = "conversation_submitted",
        Lt = "item_clicked",
        Mt = "present_conversation",
        Vt = "review_mode_entered",
        Ht = "start_conversation",
        zt = "submit_button_shown",
        Kt = "typeform_previewed",
        Ut = { integrations: { All: !1 } },
        qt = function () {
          return Object(Ve.n)() ? "mobile" : "desktop";
        },
        Wt = function () {
          return new Date().getTimezoneOffset();
        },
        Yt = function () {
          try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
          } catch (e) {
            return null;
          }
        };
      function Gt() {
        var e,
          t,
          n,
          r,
          a,
          c,
          u = arguments;
        return Se.a.wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                return (
                  (e = u.length > 0 && void 0 !== u[0] ? u[0] : 2e3),
                  (t = u.length > 1 && void 0 !== u[1] ? u[1] : 1e3),
                  (s.next = 4),
                  Object(Ie.k)(i.M)
                );
              case 4:
                return (s.next = 6), Object(Ie.b)(Qt);
              case 6:
                return (s.next = 8), Object(Ie.b)(o.b, o.a.expanding(10));
              case 8:
                return (n = s.sent), (s.next = 11), Object(Ie.f)(Jt, n, e);
              case 11:
                return (s.next = 13), Object(Ie.f)(dt, n, Ut);
              case 13:
                return (s.next = 15), Object(Ie.i)(qe.f);
              case 15:
                if (!s.sent) {
                  s.next = 24;
                  break;
                }
                return (
                  (r = {
                    integrations: {
                      All: !1,
                      Natero: !0,
                      "Google Analytics": !0,
                      "Facebook Pixel": !0,
                      AdWords: !0,
                    },
                  }),
                  (s.next = 20),
                  Object(Ie.b)(un)
                );
              case 20:
                return (
                  (a = s.sent),
                  (s.next = 23),
                  Object(Ie.g)(n, { data: a, options: r })
                );
              case 23:
                return s.abrupt("return");
              case 24:
                return (s.next = 26), Object(Ie.b)(on);
              case 26:
                return (
                  (c = s.sent),
                  (s.next = 29),
                  Object(Ie.g)(n, { data: Rt({}, c) })
                );
              case 29:
                return (
                  (s.next = 31),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Object(Ie.b)(
                                  pt.a,
                                  Se.a.mark(function e(t) {
                                    var r, o, a;
                                    return Se.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2), Object(Ie.i)(Te.c)
                                            );
                                          case 2:
                                            return (
                                              (r = e.sent),
                                              (e.next = 5),
                                              Object(Ie.b)(nt, r)
                                            );
                                          case 5:
                                            return (
                                              (e.next = 7),
                                              Object(Ie.b)(Ke.f, r)
                                            );
                                          case 7:
                                            return (
                                              (o = e.sent),
                                              (e.next = 10),
                                              Object(Ie.g)(Object(it.c)(o))
                                            );
                                          case 10:
                                            return (
                                              (e.next = 12), Object(Ie.b)(nn, t)
                                            );
                                          case 12:
                                            return (
                                              (a = e.sent),
                                              (e.next = 15),
                                              Object(Ie.g)(n, { data: a })
                                            );
                                          case 15:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 31:
                return (
                  (s.next = 33),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var t;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(Ie.k)(i.K);
                            case 2:
                              return (e.next = 4), Object(Ie.b)(an);
                            case 4:
                              return (
                                (t = e.sent),
                                (e.next = 7),
                                Object(Ie.g)(n, { data: t })
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 33:
                return (
                  (s.next = 35),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var t, r, o, a, c;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 3), Object(Ie.k)(i.v);
                            case 3:
                              return (
                                (r = e.sent), (e.next = 6), Object(Ie.i)(q.x)
                              );
                            case 6:
                              if (
                                ((o = e.sent),
                                (a = r.payload.blockRef),
                                r.payload.show)
                              ) {
                                e.next = 10;
                                break;
                              }
                              return e.abrupt("continue", 0);
                            case 10:
                              if (a !== o) {
                                e.next = 20;
                                break;
                              }
                              if (t !== a) {
                                e.next = 13;
                                break;
                              }
                              return e.abrupt("continue", 0);
                            case 13:
                              return (
                                (t = a), (e.next = 16), Object(Ie.b)(cn, Ft)
                              );
                            case 16:
                              if (!(c = e.sent)) {
                                e.next = 20;
                                break;
                              }
                              return (
                                (e.next = 20),
                                Object(Ie.g)(n, { data: c, options: Ut })
                              );
                            case 20:
                              e.next = 0;
                              break;
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 35:
                return (
                  (s.next = 37),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var t, r;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 3), Object(Ie.k)(i.d);
                            case 3:
                              if (((t = e.sent), t.payload.source === at.a)) {
                                e.next = 7;
                                break;
                              }
                              return e.abrupt("continue", 0);
                            case 7:
                              return (e.next = 9), Object(Ie.b)(cn, Bt);
                            case 9:
                              if (!(r = e.sent)) {
                                e.next = 13;
                                break;
                              }
                              return (
                                (e.next = 13),
                                Object(Ie.g)(n, { data: r, options: Ut })
                              );
                            case 13:
                              e.next = 0;
                              break;
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 37:
                return (
                  (s.next = 39),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var t, r, o, a;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 3), Object(Ie.k)(i.n);
                            case 3:
                              return (e.next = 5), Object(Ie.i)(U.g);
                            case 5:
                              return (
                                (t = e.sent),
                                (r = { invalid_answers_amount: t }),
                                (e.next = 9),
                                Object(Ie.b)($t, Vt, r)
                              );
                            case 9:
                              return (
                                (o = e.sent),
                                (a = Ut),
                                (e.next = 13),
                                Object(Ie.g)(n, { data: o, options: a })
                              );
                            case 13:
                              e.next = 0;
                              break;
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 39:
                return (
                  (s.next = 41),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var t, r, o, a, c, u, s, l, d;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 3), Object(Ie.k)([i.a, i.O]);
                            case 3:
                              return (
                                (t = e.sent),
                                (r = t.payload),
                                (o = r.ref),
                                (e.next = 8),
                                Object(Ie.i)(Te.s, o)
                              );
                            case 8:
                              if (e.sent) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt("continue", 0);
                            case 11:
                              return (e.next = 13), Object(Ie.i)(qe.i);
                            case 13:
                              return (
                                (a = e.sent), (e.next = 16), Object(Ie.i)(Te.c)
                              );
                            case 16:
                              return (
                                (c = e.sent), (e.next = 19), Object(Ie.i)(qe.g)
                              );
                            case 19:
                              return (
                                (u = e.sent),
                                (e.next = 22),
                                Object(Ie.i)(q.p, o)
                              );
                            case 22:
                              return (
                                (s = e.sent),
                                (l = {
                                  account_id: a.legacyAccountId,
                                  attribution_user_id: Me.getUser(),
                                  block_ref: o,
                                  block_type: s ? s.type : null,
                                  event: zt,
                                  form_uid: c,
                                  typeform_view_id: u,
                                  ws_owner_account_id: a.legacyAccountId,
                                }),
                                (d = Ut),
                                (e.next = 27),
                                Object(Ie.g)(n, { data: l, options: d })
                              );
                            case 27:
                              e.next = 0;
                              break;
                            case 29:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 41:
                return (
                  (s.next = 43),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var r, o, a, c, u, s, l, d, p, f;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = { integrations: { All: !1 } }),
                                (e.next = 3),
                                Object(Ie.i)(q.y)
                              );
                            case 3:
                              return (
                                (o = e.sent),
                                (a = !!o),
                                (e.next = 7),
                                Object(Ie.i)(q.x)
                              );
                            case 7:
                              return (
                                (c = e.sent), (e.next = 10), Object(Ie.i)(qe.a)
                              );
                            case 10:
                              if (((u = e.sent), (s = u(c)), !a)) {
                                e.next = 18;
                                break;
                              }
                              return (e.next = 15), Object(Ie.b)(Xt, o, Dt);
                            case 15:
                              (l = e.sent), (e.next = 24);
                              break;
                            case 18:
                              return (e.next = 20), Object(Ie.i)(U.h, c);
                            case 20:
                              return (
                                (d = e.sent),
                                (e.next = 23),
                                Object(Ie.b)(en, c, Dt, {
                                  prefilled_block: d,
                                  response_prefilled: s.responseFilled || null,
                                })
                              );
                            case 23:
                              l = e.sent;
                            case 24:
                              return (
                                (e.next = 26),
                                Object(Ie.g)(n, { data: l, options: r })
                              );
                            case 26:
                              f = Se.a.mark(function e() {
                                var o, a, c, l;
                                return Se.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), Object(Ie.k)(i.a);
                                      case 2:
                                        return (
                                          (o = e.sent),
                                          (a = o.payload),
                                          (e.next = 6),
                                          Object(Ie.i)(U.h, a.ref)
                                        );
                                      case 6:
                                        return (
                                          (c = e.sent),
                                          (e.next = 9),
                                          Object(Ie.d)()
                                        );
                                      case 9:
                                        return (
                                          (e.next = 11), Object(Ie.i)(qe.a)
                                        );
                                      case 11:
                                        return (
                                          (u = e.sent),
                                          (s = u(a.ref)),
                                          (e.next = 15),
                                          Object(Ie.b)(en, a.ref, Dt, {
                                            navigation_type: a.navigationType,
                                            prefilled_block: c,
                                            response_prefilled:
                                              s.responseFilled || null,
                                          })
                                        );
                                      case 15:
                                        if ((l = e.sent)) {
                                          e.next = 18;
                                          break;
                                        }
                                        return e.abrupt("return", "continue");
                                      case 18:
                                        if (!p) {
                                          e.next = 21;
                                          break;
                                        }
                                        return (e.next = 21), Object(Ie.c)(p);
                                      case 21:
                                        return (
                                          (e.next = 23),
                                          Object(Ie.f)(
                                            Se.a.mark(function e() {
                                              return Se.a.wrap(function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        (e.next = 2),
                                                        Object(Ie.d)(t)
                                                      );
                                                    case 2:
                                                      return (
                                                        (e.next = 4),
                                                        Object(Ie.g)(n, {
                                                          data: l,
                                                          options: r,
                                                        })
                                                      );
                                                    case 4:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              }, e);
                                            })
                                          )
                                        );
                                      case 23:
                                        p = e.sent;
                                      case 24:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              });
                            case 27:
                              return e.delegateYield(f(), "t0", 29);
                            case 29:
                              if ("continue" !== e.t0) {
                                e.next = 32;
                                break;
                              }
                              return e.abrupt("continue", 27);
                            case 32:
                              e.next = 27;
                              break;
                            case 34:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 43:
                return (
                  (s.next = 45),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var r, o, a;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (r = { integrations: { All: !1 } }),
                                (a = Se.a.mark(function e() {
                                  var a, c, u, s, l, d, p, f, b, m, h;
                                  return Se.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            Object(Ie.k)([i.a, i.H])
                                          );
                                        case 2:
                                          return (
                                            (a = e.sent),
                                            (c = a.type),
                                            (u = a.payload),
                                            (e.next = 7),
                                            Object(Ie.i)(q.x)
                                          );
                                        case 7:
                                          return (
                                            (s = e.sent),
                                            (e.next = 10),
                                            Object(Ie.i)(Te.w)
                                          );
                                        case 10:
                                          if (
                                            ((l = e.sent), c !== i.a || s !== l)
                                          ) {
                                            e.next = 13;
                                            break;
                                          }
                                          return e.abrupt("return", "continue");
                                        case 13:
                                          return (
                                            (d = c === i.H ? s : l),
                                            (e.next = 16),
                                            Object(Ie.i)(q.D, d)
                                          );
                                        case 16:
                                          return (
                                            (p = e.sent),
                                            (e.next = 19),
                                            Object(Ie.i)(U.l, d)
                                          );
                                        case 19:
                                          return (
                                            (f = e.sent),
                                            (e.next = 22),
                                            Object(Ie.i)(qe.a)
                                          );
                                        case 22:
                                          return (
                                            (b = e.sent),
                                            (m = b(d)),
                                            (e.next = 26),
                                            Object(Ie.b)(en, d, At, {
                                              changed_prefilled_value: f,
                                              answered: p,
                                              navigation_type: u.navigationType,
                                              response_filled:
                                                m.responseFilled || null,
                                            })
                                          );
                                        case 26:
                                          if ((h = e.sent)) {
                                            e.next = 29;
                                            break;
                                          }
                                          return e.abrupt("return", "continue");
                                        case 29:
                                          if (!o) {
                                            e.next = 32;
                                            break;
                                          }
                                          return (e.next = 32), Object(Ie.c)(o);
                                        case 32:
                                          return (
                                            (e.next = 34),
                                            Object(Ie.f)(
                                              Se.a.mark(function e() {
                                                return Se.a.wrap(function (e) {
                                                  for (;;)
                                                    switch ((e.prev = e.next)) {
                                                      case 0:
                                                        return (
                                                          (e.next = 2),
                                                          Object(Ie.d)(t)
                                                        );
                                                      case 2:
                                                        return (
                                                          (e.next = 4),
                                                          Object(Ie.g)(n, {
                                                            data: h,
                                                            options: r,
                                                          })
                                                        );
                                                      case 4:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                              })
                                            )
                                          );
                                        case 34:
                                          o = e.sent;
                                        case 35:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                }));
                            case 2:
                              return e.delegateYield(a(), "t0", 4);
                            case 4:
                              if ("continue" !== e.t0) {
                                e.next = 7;
                                break;
                              }
                              return e.abrupt("continue", 2);
                            case 7:
                              e.next = 2;
                              break;
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 45:
                return (
                  (s.next = 47),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var t, r, o, a;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 3), Object(Ie.k)(i.N);
                            case 3:
                              return (
                                (t = e.sent),
                                (r = t.payload),
                                (o = r.label),
                                (e.next = 8),
                                Object(Ie.b)(ln, o)
                              );
                            case 8:
                              return (
                                (a = e.sent),
                                (e.next = 11),
                                Object(Ie.g)(n, { data: a })
                              );
                            case 11:
                              e.next = 0;
                              break;
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 47:
                return (
                  (s.next = 49),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var t, r, o, a, c;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 3), Object(Ie.k)(i.Q);
                            case 3:
                              return (
                                (t = e.sent),
                                (r = t.payload),
                                (o = r.label),
                                (a = r.navigationType),
                                (e.next = 8),
                                Object(Ie.b)(dn, o, a)
                              );
                            case 8:
                              return (
                                (c = e.sent),
                                (e.next = 11),
                                Object(Ie.g)(n, { data: c })
                              );
                            case 11:
                              e.next = 0;
                              break;
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 49:
                return (
                  (s.next = 51),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      var t, r, o, a;
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 3), Object(Ie.k)(i.P);
                            case 3:
                              return (
                                (t = e.sent),
                                (r = t.payload),
                                (o = r.label),
                                (e.next = 8),
                                Object(Ie.b)(pn, o)
                              );
                            case 8:
                              return (
                                (a = e.sent),
                                (e.next = 11),
                                Object(Ie.g)(n, { data: a })
                              );
                            case 11:
                              e.next = 0;
                              break;
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 51:
              case "end":
                return s.stop();
            }
        }, ft);
      }
      function Qt() {
        var e, t;
        return Se.a.wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (n.next = 2), Object(Ie.i)(qe.j);
              case 2:
                if (!(e = n.sent)) {
                  n.next = 9;
                  break;
                }
                return (n.next = 6), Object(Ie.b)(Zt);
              case 6:
                return (
                  (t = n.sent),
                  (n.next = 9),
                  Object(Ie.b)(Le.a.initRenderer, e, t)
                );
              case 9:
              case "end":
                return n.stop();
            }
        }, bt);
      }
      function Jt(e, t) {
        var n, r, o, a, c, u;
        return Se.a.wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                return (s.next = 3), Object(Ie.k)(e);
              case 3:
                return (n = s.sent), (s.next = 6), Object(Ie.e)(e);
              case 6:
                return (
                  (r = s.sent),
                  (o = [n].concat(V()(r))),
                  (s.next = 10),
                  Object(Ie.i)(qe.i)
                );
              case 10:
                return (
                  (a = s.sent),
                  (s.next = 13),
                  Object(Ie.b)(rt, o, a.legacyAccountId)
                );
              case 13:
                return (s.next = 15), Object(Ie.i)(q.m);
              case 15:
                return (c = s.sent), (s.next = 18), Object(Ie.i)(Re.a);
              case 18:
                if (((u = s.sent), c || u)) {
                  s.next = 22;
                  break;
                }
                return (
                  (s.next = 22),
                  Object(Ie.h)({
                    delay: Object(Ie.d)(t),
                    cancel: Object(Ie.k)(i.H),
                  })
                );
              case 22:
                s.next = 0;
                break;
              case 24:
              case "end":
                return s.stop();
            }
        }, mt);
      }
      function Zt() {
        var e, t, n, r;
        return Se.a.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (o.next = 2), Object(Ie.i)(Te.c);
              case 2:
                return (e = o.sent), (o.next = 5), Object(Ie.i)(qe.g);
              case 5:
                return (t = o.sent), (o.next = 8), Object(Ie.i)(qe.i);
              case 8:
                return (n = o.sent), (o.next = 11), Object(Ie.b)(Ke.a, e);
              case 11:
                return (
                  (r = o.sent),
                  o.abrupt("return", {
                    account_id: n.legacyAccountId,
                    attribution_user_id: Me.getUser(),
                    form_uid: e,
                    form_visitor_id: r,
                    typeform_view_id: t,
                    ws_owner_account_id: n.legacyAccountId,
                  })
                );
              case 13:
              case "end":
                return o.stop();
            }
        }, ht);
      }
      function $t(e, t) {
        var n;
        return Se.a.wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (r.next = 2), Object(Ie.b)(Zt);
              case 2:
                return (
                  (n = r.sent),
                  r.abrupt("return", Rt(Rt({}, n), {}, { event: e }, t))
                );
              case 4:
              case "end":
                return r.stop();
            }
        }, vt);
      }
      function Xt(e, t, n) {
        var r, o, a, i, c, u;
        return Se.a.wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                return (s.next = 2), Object(Ie.i)(q.U);
              case 2:
                if ((r = s.sent)) {
                  s.next = 5;
                  break;
                }
                return s.abrupt("return", null);
              case 5:
                return (s.next = 7), Object(Ie.i)(Re.c);
              case 7:
                return (
                  (o = s.sent),
                  (a = new Date().getTime()),
                  (i =
                    window.performance &&
                    window.performance.timing &&
                    window.performance.timing.domComplete),
                  (c = Rt(
                    {
                      attachment_type:
                        (r.attachment && r.attachment.type) || null,
                      block_index: 0,
                      block_ref: e,
                      block_type: ze.z,
                      landing_token: o,
                      layout_type: (r.layout && r.layout.type) || He.d.STACK,
                      question_intent: null,
                      question_required: null,
                      response_id: null,
                      prefilled_block: null,
                      response_prefilled: null,
                      time_since_page_load: i ? Math.round(a - i) : 0,
                    },
                    n
                  )),
                  (s.next = 13),
                  Object(Ie.b)($t, t, c)
                );
              case 13:
                return (u = s.sent), s.abrupt("return", u);
              case 15:
              case "end":
                return s.stop();
            }
        }, gt);
      }
      function en(e, t, n) {
        var r, o, a, i, c, u, s, l, d, p, f;
        return Se.a.wrap(function (b) {
          for (;;)
            switch ((b.prev = b.next)) {
              case 0:
                return (b.next = 2), Object(Ie.i)(q.t);
              case 2:
                if (
                  ((r = b.sent),
                  (o = r.find(function (t) {
                    return t.ref === e;
                  })))
                ) {
                  b.next = 6;
                  break;
                }
                return b.abrupt("return", null);
              case 6:
                return (
                  (a = r.findIndex(function (t) {
                    return t.ref === e;
                  })),
                  (b.next = 9),
                  Object(Ie.i)(Re.c)
                );
              case 9:
                return (i = b.sent), (b.next = 12), Object(Ie.i)(Re.e);
              case 12:
                return (c = b.sent), (b.next = 15), Object(Ie.i)(pe.g, e);
              case 15:
                return (u = b.sent), (b.next = 18), Object(Ie.i)(Ue.a, e);
              case 18:
                return (
                  (s = b.sent),
                  (l = new Date().getTime()),
                  (d =
                    window.performance &&
                    window.performance.timing &&
                    window.performance.timing.domComplete),
                  (p = Rt(
                    {
                      attachment_type:
                        (o.attachment && o.attachment.type) || null,
                      block_index: a,
                      block_ref: e,
                      block_type: o.type,
                      landing_token: i,
                      layout_type: (o.layout && o.layout.type) || He.d.STACK,
                      question_intent: s || null,
                      question_required: u,
                      response_id: c,
                      time_since_page_load: d ? Math.round(l - d) : 0,
                    },
                    n
                  )),
                  (b.next = 24),
                  Object(Ie.b)($t, t, p)
                );
              case 24:
                return (f = b.sent), b.abrupt("return", f);
              case 26:
              case "end":
                return b.stop();
            }
        }, Ot);
      }
      function tn() {
        return Se.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ie.i)(ot.d);
              case 2:
                if (!e.sent) {
                  e.next = 19;
                  break;
                }
                return (e.next = 6), Object(Ie.i)(ot.c);
              case 6:
                return (e.t0 = e.sent), (e.next = 9), Object(Ie.i)(ot.a);
              case 9:
                return (e.t1 = !e.sent), (e.next = 12), Object(Ie.i)(ot.e);
              case 12:
                return (e.t2 = !e.sent), (e.next = 15), Object(Ie.i)(ot.b);
              case 15:
                return (
                  (e.t3 = e.sent),
                  (e.t4 = 100 * e.t3),
                  (e.t5 = 100 - e.t4),
                  e.abrupt("return", {
                    embedding_mode: e.t0,
                    headers_displayed: e.t1,
                    footers_displayed: e.t2,
                    transparency: e.t5,
                  })
                );
              case 19:
                return e.abrupt("return", { embedding_mode: null });
              case 20:
              case "end":
                return e.stop();
            }
        }, yt);
      }
      function nn(e) {
        var t, n, r, o, a, i, c, u, s, l, d, p;
        return Se.a.wrap(function (f) {
          for (;;)
            switch ((f.prev = f.next)) {
              case 0:
                return (t = e.navigationType), (f.next = 3), Object(Ie.i)(Te.c);
              case 3:
                return (n = f.sent), (f.next = 6), Object(Ie.i)(qe.e);
              case 6:
                return (r = f.sent), (f.next = 9), Object(Ie.i)(U.j);
              case 9:
                return (o = f.sent), (f.next = 12), Object(Ie.b)(Ke.c, n);
              case 12:
                return (a = f.sent), (f.next = 15), Object(Ie.i)(qe.k);
              case 15:
                return (i = f.sent), (f.next = 18), Object(Ie.i)(q.U);
              case 18:
                if (((c = f.sent), (u = ze.z), c)) {
                  f.next = 25;
                  break;
                }
                return (f.next = 23), Object(Ie.i)(q.o, 0);
              case 23:
                (s = f.sent), (u = null == s ? void 0 : s.type);
              case 25:
                return (
                  (l = {
                    distribution_channel: "standard",
                    height: window.innerHeight,
                    is_first_conversation: r,
                    local_time_offset: Wt(),
                    local_timezone: Yt() || null,
                    natero_feature_name: Ht,
                    navigation_type: t,
                    platform: qt(),
                    prefilled_data: o,
                    renderer_version: "louvre",
                    respondent_method: "web_renderer",
                    visit_number: a,
                    visit_number_current_cycle: i,
                    width: window.innerWidth,
                    block_type: u,
                  }),
                  (f.next = 28),
                  Object(Ie.b)($t, Ht, l)
                );
              case 28:
                return (d = f.sent), (f.next = 31), Object(Ie.b)(tn);
              case 31:
                return (
                  (p = f.sent), (d = Rt(Rt({}, d), p)), f.abrupt("return", d)
                );
              case 34:
              case "end":
                return f.stop();
            }
        }, jt);
      }
      function rn() {
        var e, t;
        return Se.a.wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (n.next = 2), Object(Ie.i)(Te.c);
              case 2:
                return (e = n.sent), (n.next = 5), Object(Ie.b)(Ke.d, e);
              case 5:
                return (
                  (t = n.sent), (n.next = 8), Object(Ie.g)(Object(it.c)(t))
                );
              case 8:
                return n.abrupt("return", t);
              case 9:
              case "end":
                return n.stop();
            }
        }, wt);
      }
      function on() {
        var e, t, n, r, o, a, i;
        return Se.a.wrap(function (c) {
          for (;;)
            switch ((c.prev = c.next)) {
              case 0:
                return (c.next = 2), Object(Ie.i)(U.j);
              case 2:
                return (e = c.sent), (c.next = 5), Object(Ie.i)(Te.c);
              case 5:
                return (t = c.sent), (c.next = 8), Object(Ie.b)(rn, t);
              case 8:
                return (n = c.sent), (c.next = 11), Object(Ie.b)(Ke.c, t);
              case 11:
                return (
                  (r = c.sent),
                  (o = {
                    natero_feature_name: "".concat(Mt, "_").concat("standard"),
                    distribution_channel: "standard",
                    respondent_method: "web_renderer",
                    platform: qt(),
                    prefilled_data: e,
                    embedding_mode: null,
                    renderer_version: "louvre",
                    local_time_offset: Wt(),
                    local_timezone: Yt() || null,
                    visit_number_current_cycle: n,
                    visit_number: r,
                  }),
                  (c.next = 15),
                  Object(Ie.b)($t, Mt, o)
                );
              case 15:
                return (a = c.sent), (c.next = 18), Object(Ie.b)(tn);
              case 18:
                return (
                  (i = c.sent),
                  (a = Rt(Rt(Rt({}, a), i), ct.c.getEventsToBeTracked())),
                  c.abrupt("return", a)
                );
              case 21:
              case "end":
                return c.stop();
            }
        }, kt);
      }
      function an() {
        var e, t, n, r, o, a, i, c, u, s, l, d, p, f, b;
        return Se.a.wrap(function (m) {
          for (;;)
            switch ((m.prev = m.next)) {
              case 0:
                return (m.next = 2), Object(Ie.i)(Te.c);
              case 2:
                return (e = m.sent), (m.next = 5), Object(Ie.i)(qe.e);
              case 5:
                return (t = m.sent), (m.next = 8), Object(Ie.i)(Re.c);
              case 8:
                return (n = m.sent), (m.next = 11), Object(Ie.i)(Re.e);
              case 11:
                return (r = m.sent), (m.next = 14), Object(Ie.i)(Re.d);
              case 14:
                return (o = m.sent), (m.next = 17), Object(Ie.i)(U.j);
              case 17:
                return (a = m.sent), (m.next = 20), Object(Ie.b)(Ke.c, e);
              case 20:
                return (i = m.sent), (m.next = 23), Object(Ie.i)(qe.k);
              case 23:
                return (
                  (c = m.sent),
                  (u = new Date().getTime()),
                  (s =
                    window.performance &&
                    window.performance.timing &&
                    window.performance.timing.domComplete),
                  (l = {
                    distribution_channel: "standard",
                    is_first_conversation: t,
                    landing_token: n,
                    local_time_offset: Wt(),
                    local_timezone: Yt() || null,
                    natero_feature_name: Nt,
                    navigation_type: o,
                    platform: qt(),
                    prefilled_data: a,
                    respondent_method: "web_renderer",
                    response_id: r,
                    time_to_submit: s ? Math.round((u - s) / 1e3) : -1,
                    visit_number_current_cycle: c,
                    visit_number: i,
                  }),
                  (m.next = 29),
                  Object(Ie.b)($t, Nt, l)
                );
              case 29:
                return (d = m.sent), (m.next = 32), Object(Ie.i)(Te.o);
              case 32:
                return (
                  (p = m.sent),
                  (f = p ? { online: window.navigator.onLine } : {}),
                  (m.next = 36),
                  Object(Ie.b)(tn)
                );
              case 36:
                return (
                  (b = m.sent),
                  (d = Rt(Rt(Rt({}, d), b), f)),
                  m.abrupt("return", d)
                );
              case 39:
              case "end":
                return m.stop();
            }
        }, xt);
      }
      function cn(e) {
        var t, n, r, o;
        return Se.a.wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (a.next = 2), Object(Ie.i)(qe.e);
              case 2:
                return (
                  (t = a.sent),
                  (n = {
                    distribution_channel: "standard",
                    height: window.innerHeight,
                    is_first_conversation: t,
                    local_time_offset: Wt(),
                    local_timezone: Yt() || null,
                    natero_feature_name: e,
                    platform: qt(),
                    renderer_version: "louvre",
                    respondent_method: "web_renderer_one_question_per_screen",
                    width: window.innerWidth,
                  }),
                  (a.next = 6),
                  Object(Ie.b)($t, e, n)
                );
              case 6:
                return (r = a.sent), (a.next = 9), Object(Ie.b)(tn);
              case 9:
                return (
                  (o = a.sent), (r = Rt(Rt({}, r), o)), a.abrupt("return", r)
                );
              case 12:
              case "end":
                return a.stop();
            }
        }, Ct);
      }
      function un() {
        var e, t, n;
        return Se.a.wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (r.next = 2), Object(Ie.i)(qe.i);
              case 2:
                return (e = r.sent), (r.next = 5), Object(Ie.i)(Te.c);
              case 5:
                return (
                  (t = r.sent),
                  (n = {
                    event: Kt,
                    form_uid: t,
                    account_id: e.legacyAccountId,
                    natero_feature_name: Kt,
                  }),
                  r.abrupt("return", n)
                );
              case 8:
              case "end":
                return r.stop();
            }
        }, Et);
      }
      function sn(e) {
        var t, n, r, o, a;
        return Se.a.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (i.next = 2), Object(Ie.i)(qe.e);
              case 2:
                return (t = i.sent), (i.next = 5), Object(Ie.i)(Re.c);
              case 5:
                return (n = i.sent), (i.next = 8), Object(Ie.i)(Re.e);
              case 8:
                return (r = i.sent), (i.next = 11), Object(Ie.b)(tn);
              case 11:
                return (
                  (o = i.sent),
                  (a = Rt(
                    Rt(
                      {
                        is_first_conversation: t,
                        landing_token: n,
                        platform: qt(),
                        response_id: r,
                      },
                      o
                    ),
                    e
                  )),
                  i.abrupt("return", a)
                );
              case 14:
              case "end":
                return i.stop();
            }
        }, St);
      }
      function ln(e) {
        var t, n;
        return Se.a.wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (r.next = 2),
                  Object(Ie.b)(sn, { item: "viral_branding", label: e })
                );
              case 2:
                return (t = r.sent), (r.next = 5), Object(Ie.b)($t, Lt, t);
              case 5:
                return (n = r.sent), r.abrupt("return", n);
              case 7:
              case "end":
                return r.stop();
            }
        }, It);
      }
      function dn(e, t) {
        var n, r;
        return Se.a.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (
                  (o.next = 2),
                  Object(Ie.b)(sn, {
                    item: "thankyou_screen_again",
                    label: e,
                    navigation_type: t,
                  })
                );
              case 2:
                return (n = o.sent), (o.next = 5), Object(Ie.b)($t, Lt, n);
              case 5:
                return (r = o.sent), o.abrupt("return", r);
              case 7:
              case "end":
                return o.stop();
            }
        }, Pt);
      }
      function pn(e) {
        var t, n;
        return Se.a.wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (r.next = 2),
                  Object(Ie.b)(sn, { item: "thankyou_screen_social", label: e })
                );
              case 2:
                return (t = r.sent), (r.next = 5), Object(Ie.b)($t, Lt, t);
              case 5:
                return (n = r.sent), r.abrupt("return", n);
              case 7:
              case "end":
                return r.stop();
            }
        }, Tt);
      }
      var fn = n(543),
        bn = n(642),
        mn = n.n(bn),
        hn = n(539),
        vn = Se.a.mark(On),
        gn = Se.a.mark(yn);
      function On() {
        return Se.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ie.k)(i.M);
              case 2:
                return (e.next = 4), Object(Ie.j)(yn);
              case 4:
              case "end":
                return e.stop();
            }
        }, vn);
      }
      function yn() {
        var e, t, n, r, o, a, c;
        return Se.a.wrap(
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  return (u.next = 2), Object(Ie.i)(Te.c);
                case 2:
                  return (e = u.sent), (u.next = 5), Object(Ie.i)(qe.g);
                case 5:
                  return (
                    (t = u.sent),
                    (n = navigator.userAgent),
                    (u.prev = 7),
                    (r = { formId: e, responseId: t, userAgent: n }),
                    (o = new mn.a(r, {
                      endpoint: ""
                        .concat(hn.a.apiHost, "/forms/")
                        .concat(e, "/")
                        .concat(hn.a.endpoints.insights),
                    })),
                    (u.next = 12),
                    Object(Ie.l)(
                      i.R,
                      Se.a.mark(function e() {
                        return Se.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), Object(Ie.b)([o, o.onClose])
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  );
                case 12:
                  return (u.next = 14), Object(Ie.i)(q.Q);
                case 14:
                  if (!u.sent) {
                    u.next = 20;
                    break;
                  }
                  return (
                    (u.next = 18),
                    Object(Ie.b)([o, o.onActivateBlock], {
                      id: "WelcomeScreenID",
                    })
                  );
                case 18:
                  return (u.next = 20), Object(Ie.k)(i.p);
                case 20:
                  return (u.next = 22), Object(Ie.i)(q.x);
                case 22:
                  return (a = u.sent), (u.next = 25), Object(Ie.i)(q.p, a);
                case 25:
                  if (!(c = u.sent)) {
                    u.next = 29;
                    break;
                  }
                  return (
                    (u.next = 29),
                    Object(Ie.b)([o, o.onActivateBlock], { id: c.id })
                  );
                case 29:
                  return (
                    (u.next = 31),
                    Object(Ie.l)(
                      i.a,
                      Se.a.mark(function e(t) {
                        var n;
                        return Se.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), Object(Ie.i)(q.p, t.payload.ref)
                                );
                              case 2:
                                if (!(n = e.sent)) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (e.next = 6),
                                  Object(Ie.b)([o, o.onActivateBlock], {
                                    id: n.id,
                                  })
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  );
                case 31:
                  return (
                    (u.next = 33),
                    Object(Ie.l)(
                      i.K,
                      Se.a.mark(function e() {
                        return Se.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), Object(Ie.b)([o, o.onSubmit])
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  );
                case 33:
                  u.next = 38;
                  break;
                case 35:
                  (u.prev = 35), (u.t0 = u.catch(7)), console.error(u.t0);
                case 38:
                case "end":
                  return u.stop();
              }
          },
          gn,
          null,
          [[7, 35]]
        );
      }
      var jn = n(532),
        wn = {
          sendEvent: function (e, t) {
            var n = t.formId,
              r = t.value;
            window.ga && window.ga("send", "event", n, e, r);
          },
          events: function (e) {
            switch (e) {
              case i.f:
                return {
                  eventName: "TypeformQuestionPassed",
                  mapStateToEventData: function (e) {
                    var t = Object(q.x)(e),
                      n = Object(q.p)(e, t);
                    return { formId: Object(Te.c)(e), value: n.title };
                  },
                  shouldSendEvent: function (e) {
                    var t = Object(q.x)(e),
                      n = Object(q.p)(e, t);
                    return !!n && n.type !== ze.x && n.type !== ze.t;
                  },
                };
              case i.K:
                return {
                  eventName: "TypeformSubmit",
                  mapStateToEventData: function (e) {
                    return { formId: Object(Te.c)(e), value: Object(Te.e)(e) };
                  },
                };
              default:
                return !1;
            }
          },
        },
        kn = !0,
        xn = {
          sendEvent: function (e, t) {
            window.fbq && window.fbq("trackSingleCustom", t.pixelId, e);
          },
          events: function (e) {
            switch (e) {
              case i.a:
              case i.f:
              case i.p:
                return {
                  eventName: "TypeformFirstInteraction",
                  mapStateToEventData: function (e) {
                    return { pixelId: Object(qe.c)(e) };
                  },
                  shouldSendEvent: Cn,
                };
              case i.K:
                return {
                  eventName: "TypeformSubmit",
                  mapStateToEventData: function (e) {
                    return { pixelId: Object(qe.c)(e) };
                  },
                };
              default:
                return !1;
            }
          },
        };
      function Cn() {
        return !!kn && ((kn = !1), !0);
      }
      var En,
        Sn = !0,
        In = {
          sendEvent: function (e) {
            window.googleTagManager &&
              window.googleTagManager.push({ event: e });
          },
          events: function (e) {
            switch (e) {
              case i.a:
              case i.f:
              case i.p:
                return {
                  eventName: "TypeformFirstInteraction",
                  shouldSendEvent: Pn(),
                };
              case i.K:
                return { eventName: "TypeformSubmit" };
              default:
                return !1;
            }
          },
        };
      function Pn() {
        return !!Sn && ((Sn = !1), !0);
      }
      var Tn =
          ((En = {}),
          l()(En, jn.c, wn),
          l()(En, jn.b, xn),
          l()(En, jn.d, In),
          En),
        _n = Se.a.mark(Dn),
        Rn = Se.a.mark(Bn),
        An = Se.a.mark(Fn);
      function Dn() {
        var e;
        return Se.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Object(Ie.i)(qe.h);
              case 2:
                return (
                  (e = t.sent),
                  (t.next = 5),
                  Object(Ie.f)(
                    Se.a.mark(function t() {
                      var n;
                      return Se.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), Object(Ie.k)(i.K);
                            case 2:
                              return (
                                (n = t.sent),
                                (t.next = 5),
                                Object(Ie.b)(Bn, n, Tn, e)
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )
                );
              case 5:
                return (
                  (t.next = 7),
                  Object(Ie.f)(
                    Se.a.mark(function t() {
                      var n;
                      return Se.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 3), Object(Ie.k)(i.f);
                            case 3:
                              return (
                                (n = t.sent),
                                (t.next = 6),
                                Object(Ie.b)(Bn, n, Tn, e)
                              );
                            case 6:
                              t.next = 0;
                              break;
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )
                );
              case 7:
                return (
                  (t.next = 9),
                  Object(Ie.f)(
                    Se.a.mark(function t() {
                      var n;
                      return Se.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), Object(Ie.k)(i.p);
                            case 2:
                              return (
                                (n = t.sent),
                                (t.next = 5),
                                Object(Ie.b)(Bn, n, Tn, e)
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )
                );
              case 9:
                return (
                  (t.next = 11),
                  Object(Ie.f)(
                    Se.a.mark(function t() {
                      var n;
                      return Se.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 3), Object(Ie.k)(i.a);
                            case 3:
                              return (
                                (n = t.sent),
                                (t.next = 6),
                                Object(Ie.b)(Bn, n, Tn, e)
                              );
                            case 6:
                              t.next = 0;
                              break;
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )
                );
              case 11:
              case "end":
                return t.stop();
            }
        }, _n);
      }
      function Bn(e, t, n) {
        var r;
        return Se.a.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (
                  (r = n.filter(function (n) {
                    return t[n] && !!t[n].events(e.type);
                  })),
                  (o.next = 3),
                  Object(Ie.a)(
                    r.map(function (n) {
                      return Object(Ie.b)(Fn, t[n], e);
                    })
                  )
                );
              case 3:
              case "end":
                return o.stop();
            }
        }, Rn);
      }
      function Fn(e, t) {
        var n, r;
        return Se.a.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                if (!(n = e.events(t.type)).shouldSendEvent) {
                  o.next = 7;
                  break;
                }
                return (o.next = 4), Object(Ie.i)(n.shouldSendEvent);
              case 4:
                (o.t0 = o.sent), (o.next = 8);
                break;
              case 7:
                o.t0 = !0;
              case 8:
                if (!o.t0) {
                  o.next = 20;
                  break;
                }
                if (!n.mapStateToEventData) {
                  o.next = 16;
                  break;
                }
                return (o.next = 13), Object(Ie.i)(n.mapStateToEventData);
              case 13:
                (o.t1 = o.sent), (o.next = 17);
                break;
              case 16:
                o.t1 = void 0;
              case 17:
                return (
                  (r = o.t1),
                  (o.next = 20),
                  Object(Ie.b)(e.sendEvent, n.eventName, r)
                );
              case 20:
              case "end":
                return o.stop();
            }
        }, An);
      }
      var Nn = n(536),
        Ln = n(628),
        Mn = n(537),
        Vn = Se.a.mark(Kn),
        Hn = Se.a.mark(Un),
        zn = Se.a.mark(qn);
      function Kn(e) {
        var t, n, r;
        return Se.a.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (o.next = 2), Object(Ie.i)(Te.m);
              case 2:
                return (t = o.sent), (o.next = 5), Object(Ie.i)(Te.t);
              case 5:
                return (n = o.sent), (o.next = 8), Object(Ie.i)(Te.o);
              case 8:
                return (r = o.sent), (o.next = 11), Object(Ie.i)(Te.u);
              case 11:
                if (!o.sent) {
                  o.next = 15;
                  break;
                }
                return (o.next = 15), Object(Ie.j)(Gt);
              case 15:
                if (!n && !t) {
                  o.next = 19;
                  break;
                }
                return o.delegateYield(qn(e), "t0", 17);
              case 17:
                o.next = 24;
                break;
              case 19:
                if (!r) {
                  o.next = 23;
                  break;
                }
                return o.delegateYield(Object(Ln.a)(), "t1", 21);
              case 21:
                o.next = 24;
                break;
              case 23:
                return o.delegateYield(Un(), "t2", 24);
              case 24:
              case "end":
                return o.stop();
            }
        }, Vn);
      }
      function Un() {
        return Se.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ie.i)(Te.u);
              case 2:
                if (!e.sent) {
                  e.next = 14;
                  break;
                }
                return (e.next = 6), Object(Ie.j)(fn.b);
              case 6:
                return (e.next = 8), Object(Ie.j)(Dn);
              case 8:
                return (
                  (e.next = 10),
                  Object(Ie.i)(Pe.a, "res-906-enable-insights-tracking")
                );
              case 10:
                if (!e.sent) {
                  e.next = 14;
                  break;
                }
                return (e.next = 14), Object(Ie.j)(On);
              case 14:
                return (e.next = 16), Object(Ie.f)(Nn.a);
              case 16:
                return (e.next = 18), Object(Ie.f)(Mn.a);
              case 18:
                return (
                  (e.next = 20),
                  Object(Ie.f)(
                    Se.a.mark(function e() {
                      return Se.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(Ie.b)(pt.a, _e.c);
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 20:
                return (e.next = 22), Object(Ie.a)([Object(Ie.m)(i.H, _e.d)]);
              case 22:
              case "end":
                return e.stop();
            }
        }, Hn);
      }
      function qn(e) {
        return Se.a.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Object(Ie.f)(Nn.a);
              case 2:
                return (t.next = 4), Object(Ie.a)([Object(Ie.l)(i.H, Fe, e)]);
              case 4:
              case "end":
                return t.stop();
            }
        }, zn);
      }
      function Wn(e, t) {
        var n = Object(o.c)({
            onError: function (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            },
          }),
          i = [a.a, n],
          c = r.d;
        var u = Object(r.e)(Ce, e, c(r.a.apply(void 0, i)));
        return n.run(Kn, t), u;
      }
    },
    801: function (e, t, n) {
      "use strict";
      n.r(t);
      n(35);
      var r = n(2),
        o = n.n(r),
        a = n(52),
        i = n(220),
        c = n(165),
        u = n(171),
        s = (n(36), n(67), n(25), n(20), n(31), n(57), n(11)),
        l = n.n(s),
        d = n(0),
        p = n.n(d),
        f = (n(1), n(326)),
        b = n.n(f),
        m = n(457),
        h = n(170),
        v = n.n(h),
        g = n(455),
        O = n(7),
        y = n(161),
        j = n(5),
        w = n(56),
        k = n(244),
        x = n(543),
        C = n(34),
        E = n(132),
        S = n(705),
        I = n(706),
        P = n(707),
        T = [
          {
            name: "Facebook",
            icon: p.a.createElement(S.a, null),
            link: "https://www.facebook.com/sharer/sharer.php?u=",
            utmSource: "facebook",
          },
          {
            name: "Twitter",
            icon: p.a.createElement(I.a, null),
            link: "https://twitter.com/intent/tweet?url=",
            utmSource: "twitter",
          },
          {
            name: "LinkedIn",
            icon: p.a.createElement(P.a, null),
            link: "https://www.linkedin.com/shareArticle?url=",
            utmSource: "linkedin",
          },
        ],
        _ = n(53),
        R = n(540),
        A = n(177),
        D = n(133),
        B = n(298),
        F = (n(136), n(21), n(560), n(18)),
        N = n.n(F),
        L = n(704),
        M = n(227);
      function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var H = function (e) {
          var t = e.providers,
            n = e.thankYouScreenRef,
            r = e.appendUtmSourceParam;
          return t.map(function (e) {
            var t = e.link,
              a = e.utmSource,
              i = N()(e, ["link", "utmSource"]),
              c = "".concat(
                (function (e, t, n) {
                  if (!Object(M.a)()) return "";
                  var r = ""
                    .concat(window.location.origin)
                    .concat(window.location.pathname);
                  return (
                    e &&
                      (r = ""
                        .concat(r, "?")
                        .concat("typeform-ty-screen-ref", "=")
                        .concat(e)),
                    t &&
                      (r = (function (e, t) {
                        var n = e.indexOf("?") > 0 ? "&" : "?";
                        return ""
                          .concat(e)
                          .concat(n, "utm_source=")
                          .concat(t, "&utm_content=typeform_social");
                      })(r, n)),
                    r
                  );
                })(n, r, a)
              ),
              u = encodeURIComponent(c);
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? V(Object(n), !0).forEach(function (t) {
                      o()(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : V(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({ link: "".concat(t).concat(u) }, i);
          });
        },
        z = function (e) {
          var t = e.providers,
            n = e.thankYouScreenRef,
            r = e.appendUtmSourceParam,
            o = e.layoutType,
            a = e.onClick,
            i = H({
              providers: t,
              thankYouScreenRef: n,
              appendUtmSourceParam: r,
            });
          return p.a.createElement(L.a, {
            layoutType: o,
            onClick: a,
            providers: i,
          });
        };
      z.defaultProps = { providers: [] };
      var K = z,
        U = function (e) {
          var t,
            n,
            r = e.screenDetails,
            o = e.showScreen,
            a = e.brandingUrl,
            i = e.theme,
            c = e.t,
            u = e.isRedirectEnabled,
            s = e.isWinningOutcome,
            f = e.hasUtmSource,
            h = e.isFocusable,
            O = e.showBranding,
            S = e.trackBrandingCtaClick,
            I = e.trackButtonClick,
            P = e.trackSocialIconClick,
            F = Object(d.useRef)(null),
            N = Object(d.useRef)(null),
            L = Object(k.a)(),
            M = Object(d.useState)(!L),
            V = l()(M, 2),
            H = V[0],
            z = V[1];
          if (
            (Object(d.useEffect)(
              function () {
                if (F.current && h && o) {
                  var e = setTimeout(function () {
                    F.current.focus();
                  }, g.a);
                  return function () {
                    return clearTimeout(e);
                  };
                }
              },
              [h, o]
            ),
            Object(d.useEffect)(
              function () {
                L && z(!1);
              },
              [L]
            ),
            !r || !Object.keys(r).length)
          )
            return null;
          var U = r.layout,
            q = r.buttonLabel,
            W = void 0 === q ? "" : q,
            Y = r.description,
            G = r.shareIcons,
            Q = r.showButton,
            J = r.title,
            Z =
              (null === (t = r.layout) || void 0 === t
                ? void 0
                : t.attachment) || r.attachment,
            $ = (null == U ? void 0 : U.type) || Object(y.a)(Z),
            X = function () {
              L || (null == Z ? void 0 : Z.type) !== w.b.video || z(!H);
            },
            ee = function (e) {
              if (!N.current && u) {
                var t = r.ref,
                  n = r.redirectUrl,
                  o = Object(A.a)(e);
                I(t, n, o),
                  (N.current = setTimeout(function () {
                    !(function (e) {
                      if (e) {
                        var t = e.replace(/\s/g, "%20");
                        b()(t) || Object(x.a)("invalidRedirectUrl"),
                          Object(R.b)(e);
                      } else window.location.reload();
                    })(n || "");
                  }, E.f));
              }
            };
          return p.a.createElement(
            g.b,
            { isVisible: o, duration: E.h },
            p.a.createElement(
              B.a,
              {
                "data-qa": "thank-you-screen-wrapper",
                isVisible: o,
                ref: F,
                onKeyDown: function (e) {
                  o &&
                    (Object(D.j)(e) && X(),
                    Q && e.key === C.a.ENTER && (e.stopPropagation(), ee(e)));
                },
                tabIndex: -1,
              },
              p.a.createElement(
                m.a,
                {
                  attachment: Z,
                  brandingText: Object(_.a)(c("label.branding.create")),
                  brandingMotto: Object(_.a)(c("label.branding.motto")),
                  brandingUrl: a,
                  buttonColor: i.colors.button,
                  buttonContentColor: i.colors.buttonContent,
                  buttonContent: Object(_.a)(c(W)),
                  buttonDataQa: "thank-you-button",
                  buttonEnabled: !!Q,
                  contextBackgroundColor: i.colors.background,
                  dataQa: "thank-you-screen"
                    .concat(
                      o ? "-visible" : "",
                      " deep-purple-thank-you-screen"
                    )
                    .concat(o ? "-visible" : ""),
                  helperColor: i.colors.primary,
                  helperText: Object(_.a)(c("label.buttonHint.default")),
                  isBrandingEnabled: O,
                  key: r.ref,
                  layoutPlacement: null == U ? void 0 : U.placement,
                  layoutType: $,
                  onBrandingBtnClick: S,
                  onButtonClick: ee,
                  pexelsApiKey:
                    "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                  secondaryColor:
                    null === (n = i.colors) || void 0 === n
                      ? void 0
                      : n.secondary,
                  showScreen: o,
                  isVideoPlaying: H,
                  onVideoClick: X,
                },
                J &&
                  p.a.createElement(
                    v.a,
                    {
                      color: i.colors.primary,
                      htmlTag: "h1",
                      type: j.i.screenTitle,
                    },
                    J
                  ),
                Y &&
                  p.a.createElement(
                    v.a,
                    {
                      color: i.colors.primary,
                      htmlTag: "p",
                      type: j.i.screenDescription,
                    },
                    Y
                  ),
                G &&
                  p.a.createElement(K, {
                    appendUtmSourceParam: f,
                    layoutType: $,
                    onClick: function (e) {
                      var t = e.toLowerCase();
                      P(t);
                    },
                    providers: T,
                    thankYouScreenRef: s ? r.ref : null,
                  })
              )
            )
          );
        };
      U.defaultProps = {
        breakpoint: "lg",
        hasUtmSource: !1,
        isWinningOutcome: !1,
        isRedirectEnabled: !0,
        screenDetails: {},
        t: function (e) {
          return e;
        },
        theme: { colors: { button: O.b, background: O.b, primary: O.b } },
      };
      var q = U,
        W = n(68),
        Y = n(3),
        G = n(27),
        Q = n(60),
        J = function (e) {
          return !!e.form.outcome;
        },
        Z =
          (n(40),
          function (e) {
            return (
              !!e.form.hidden &&
              !!Object.keys(e.form.hidden).includes("utm_source")
            );
          }),
        $ = n(467),
        X = n(118),
        ee = n(531),
        te = n(533);
      function ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ne(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var oe = ["again", "reload"],
        ae = function (e, t) {
          return Object(G.m)(e)
            ? null
            : Object($.b)(e)("https://www.typeform.com/explore/", t);
        };
      t.default = Object(a.b)(
        function (e) {
          var t = Object(ee.a)(e, te.b),
            n = ae(e, "typeform-thankyou"),
            r = Object(W.c)(e) || {},
            o = r.ref,
            a = r.redirectUrl,
            i = r.buttonLabel,
            c = "done_variant" === t,
            u = "create_variant" === t,
            s = oe.includes(i),
            l = !s || !!a,
            d = l ? i : u && s ? "Create a Typeform" : c && s ? "Done" : i,
            p = l
              ? a
              : "default_tys" === o || c || u
              ? ae(e, "typeform-thankyoubutton")
              : void 0;
          return {
            isRedirectEnabled: !Object(G.m)(e),
            isWinningOutcome: J(e),
            screenDetails: re(
              re({}, r),
              {},
              { buttonLabel: d, redirectUrl: p }
            ),
            showScreen: Object(Y.P)(e),
            theme: Object(Q.h)(e),
            isFocusable: Object(Y.n)(e),
            brandingUrl: n,
            hasUtmSource: Z(e),
            showBranding: Object(G.C)(e),
          };
        },
        function (e) {
          return re(
            {},
            Object(i.b)(
              {
                trackBrandingCtaClick: function () {
                  return Object(X.d)("typeform-thankyou");
                },
                trackButtonClick: function (e, t, n) {
                  return (function (e, t, n) {
                    return "default_tys" === e
                      ? Object(X.d)("typeform-thankyoubutton")
                      : t
                      ? Object(X.f)("custom_link", n)
                      : Object(X.f)("default_link", n);
                  })(e, t, n);
                },
                trackSocialIconClick: X.e,
              },
              e
            )
          );
        }
      )(Object(u.a)(Object(c.f)(q)));
    },
    803: function (e, t, n) {
      "use strict";
      n.r(t);
      n(25),
        n(26),
        n(51),
        n(107),
        n(21),
        n(43),
        n(20),
        n(66),
        n(31),
        n(502),
        n(110),
        n(311);
      var r,
        o = n(735),
        a = n.n(o),
        i = n(11),
        c = n.n(i),
        u = n(2),
        s = n.n(u),
        l = n(228),
        d = n.n(l),
        p = n(507),
        f = n(6),
        b = n(773),
        m = n(542),
        h = n(19),
        v = (n(139), n(728)),
        g = n.n(v),
        O = n(730),
        y = n.n(O),
        j = g.a.box,
        w = g.a.randomBytes,
        k = y.a.decodeUTF8,
        x = y.a.encodeBase64,
        C = y.a.decodeBase64,
        E = function (e, t, n) {
          var r = k(e),
            o = C(t),
            a = w(j.nonceLength),
            i = n.secretKey,
            c = n.publicKey;
          return (function (e) {
            var t = e.encryptedAnswer,
              n = e.nonce,
              r = e.publicKey;
            return [t, x(n), r].join("|");
          })({ encryptedAnswer: x(j(r, a, o, i)), nonce: a, publicKey: x(c) });
        };
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var P =
        ((r = {}),
        s()(r, f.d, "date"),
        s()(r, f.e, "text"),
        s()(r, f.f, "email"),
        s()(r, f.g, "file_name"),
        s()(r, f.j, "boolean"),
        s()(r, f.k, "text"),
        s()(r, f.m, "choices"),
        s()(r, f.n, "number"),
        s()(r, f.p, "number"),
        s()(r, f.s, "choices"),
        s()(r, f.v, "number"),
        s()(r, f.w, "text"),
        s()(r, f.y, "url"),
        s()(r, f.A, "boolean"),
        s()(r, f.q, "payment"),
        s()(r, f.r, "phone_number"),
        s()(r, f.u, "choices"),
        r);
      function T(e, t, n, r) {
        var o = e.block,
          a = e.answer,
          i = void 0 !== a ? a[0] : "",
          u = P[o.type],
          l = Object(b.a)(o.definition, a);
        if (l) return l;
        switch (o.type) {
          case f.e:
            i = (function (e, t) {
              var n = (function (e, t) {
                return e
                  .map(function (e) {
                    var n = (function (e, t) {
                      return t.properties.choices.find(function (t) {
                        return t.ref === e;
                      });
                    })(e, t);
                    return n ? { id: n.id, label: n.label } : null;
                  })
                  .filter(function (e) {
                    return null !== e;
                  });
              })(t, e);
              return n.length ? n[0].label : t[0];
            })(o, a);
            break;
          case f.r:
            i = Object(p.a)(i.number, i.countryCode).format("E.164");
            break;
          case f.d:
            i = (function (e) {
              var t = e.split("-"),
                n = c()(t, 3),
                r = n[0],
                o = n[1],
                a = n[2],
                i = ""
                  .concat(r.padStart(4, "0"), "-")
                  .concat(o.padStart(2, "0"), "-")
                  .concat(a.padStart(2, "0"));
              return new Date(i).toISOString();
            })(i);
            break;
          case f.g:
            i = i.s3Filename;
            break;
          case f.q:
            i = I(
              { amount: t, currency: o.currency, name: i.cardholdersName },
              n
            );
            break;
          case f.w:
          case f.y:
          case f.f:
            if ("" === i) return null;
            break;
          case f.k:
            if ("" === i) return null;
            i &&
              Object(h.i)(r, o.type) &&
              (i = (function (e, t) {
                return E(e, t, j.keyPair());
              })(i, r));
        }
        return (function (e, t, n, r) {
          return s()({ field: { id: e, type: t }, type: n }, n, r);
        })(o.id, o.type, u, i);
      }
      function _(e, t) {
        var n = e[t.variable],
          r = t.choices.find(function (e) {
            return e.ref === n;
          });
        if (!r)
          throw new m.a(
            "MISSING_WINNING_OUTCOME",
            "Could not find matching winning outcome",
            "winningOutcomeRef:  ".concat(e[t.variable])
          );
        return r;
      }
      t.default = function (e) {
        var t,
          n,
          r = e.formId,
          o = e.landingAt,
          i = void 0 === o ? "" : o,
          c = e.landingId,
          u = e.payment,
          l = e.values,
          p = (l = void 0 === l ? {} : l).answers,
          f = void 0 === p ? [] : p,
          b = l.hidden,
          m = void 0 === b ? {} : b,
          h = l.variables,
          v = void 0 === h ? {} : h,
          g = e.outcome,
          O = e.formPublicKey,
          y =
            ((t = m),
            Object.keys(t).map(function (e) {
              return { key: e, value: t[e] };
            })),
          j = (function (e, t) {
            var n = a()(["price"], e);
            return Object.keys(n).map(function (n) {
              if (t && n === t.variable)
                return { key: n, type: "outcome_id", outcome_id: _(e, t).id };
              var r = e[n],
                o = "string" == typeof r ? "text" : "number";
              return s()({ key: n, type: o }, o, r);
            });
          })(v, g),
          w = (function (e, t) {
            if (!t) return null;
            var n = _(e, t);
            return { id: n.id, title: n.title };
          })(v, g),
          k = (function (e, t, n, r) {
            return ((o = e),
            (a = function (e) {
              return T(e, t, n, r);
            }),
            o.map(a).reduce(function (e, t) {
              return [].concat(e, t);
            }, [])).filter(function (e) {
              return e && void 0 !== e.type;
            });
            var o, a;
          })(f, v.price, u, O),
          x =
            null === (n = d.a.get("hubspotutk") || null)
              ? null
              : {
                  hubspot: {
                    utk: n,
                    page_name: document.title,
                    page_url: window.location.href,
                  },
                };
        return I(
          I(
            I(
              I(
                I(
                  { signature: c, form_id: r, landed_at: parseInt(i) },
                  y.length ? { hidden: y } : null
                ),
                j.length ? { variables: j } : null
              ),
              k.length ? { answers: k } : null
            ),
            x ? { integrations_metadata: x } : null
          ),
          w ? { outcome: w } : null
        );
      };
    },
    93: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return l;
      }),
        n.d(t, "e", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return b;
        });
      var r = n(10),
        o = n(27),
        a = n(177),
        i = n(3),
        c = n(214),
        u = n(28),
        s = n(240);
      function l(e) {
        var t = Object(a.a)(e);
        return function (e, n) {
          var a = n();
          if (
            (e(Object(s.b)(Object(i.l)(a))), e(Object(s.a)()), Object(c.i)(a))
          ) {
            var l = Object(o.m)(a);
            e(Object(u.e)()),
              e(
                (function (e, t) {
                  return {
                    type: r.H,
                    payload: { isLivePreview: e, navigationType: t },
                  };
                })(l, t)
              );
          } else {
            Object(o.q)(a) || e(Object(u.f)()), e(Object(u.i)(t));
          }
        };
      }
      function d() {
        return { type: r.K };
      }
      function p(e, t) {
        return {
          type: r.J,
          error: !0,
          payload: { retry: { timeout: e }, errorCode: t },
        };
      }
      function f(e, t, n, o) {
        return {
          type: r.I,
          error: !0,
          payload: {
            message: e,
            errorCode: t,
            errorDescription: n,
            errorDetails: o,
          },
        };
      }
      function b(e, t) {
        return function (n, r) {
          var a = r();
          Object(o.s)(a, e) && n(l(t));
        };
      }
    },
  },
]);

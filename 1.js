/*! mping 05-05-2016 */ ! function(a) {
    function b(a) {
        this._init(), "function" == typeof a && (this.ready = a)
    }

    function c(a) {
        this.name = a
    }

    function d(a) {
        c.call(this, "PV", null), this.type = j.Type.PV, this.setTs("page_ts"), this.setPageParam(), this.setSourceParam(), this.setPvParams(), this.setPageId(a)
    }

    function e(a) {
        c.call(this, "Click", null), this.type = j.Type.CLICK, this.event_id = a, this.setTs("click_ts"), this.setPageParam(), this.setPageId()
    }

    function f(a, b) {
        e.call(this, a, null), this.reportAsOrder(b)
    }

    function g(a, b) {
        e.call(this, a, null)
    }

    function h(a) {
        c.call(this, "Order", null), this.type = j.Type.ORDER, this.prod_id = a, this.setTs("order_ts")
    }

    function i() {}
    var j = {
            ProjectId: "3",
            Biz: "mba",
            Key: "5YT%aC89$22OI@pQ",
            Method: {
                bpReport: "bp.report",
                bpSearch: "bp.search"
            },
            Client: {
                IOS_M: {
                    UAname: "iPhone",
                    value: "IOS-M"
                },
                ANDROID_M: {
                    UAname: "android",
                    value: "ANDROID-M"
                },
                IPAD_M: {
                    UAname: "iPad",
                    value: "iPad-M"
                },
                MICRO_M: {
                    UAname: "MicroMessenger",
                    value: "WEIXIN-M"
                },
                MM: {
                    UAname: "MM",
                    value: "M-M"
                }
            },
            Type: {
                PV: "1",
                PERFORMANCE: "2",
                CLICK: "3",
                ORDER: "4"
            },
            Storage: {
                current: "mba_cur_series",
                cached: "mba_cached_series"
            },
            MCookie: {
                sessionCookieTimeout: 18e5,
                visitorCookieTimeout: 15552e6
            },
            common: {
                pageId: "",
                client: "",
                channel: ""
            },
            browser_info: null,
            _init_const_common: !1
        },
        k = {
            common: {
                report_ts: "",
                method: "",
                token: "",
                proj_id: "",
                biz: "",
                uid: "",
                pinid: "",
                guid: "",
                client: "",
                appv: "",
                resolu: "",
                device: "",
                osv: "",
                build: "",
                net_type: "",
                sdkv: "",
                channel: ""
            }
        };
    b.prototype = {
        _init: function() {
            this.initCommonData(), this.initUid()
        },
        initCommonData: function() {
            var a = b.tools.Tools,
                c = b.tools.md5,
                d = k.common;
            this._initConst(), d.report_ts = a.getCurTime(), d.token = c.hex_md5(d.report_ts + j.Key), d.reserved3 = this._reservedCookies()
        },
        _initConst: function() {
            if (!j._init_const_common) {
                var b = j.Client,
                    c = k.common,
                    d = navigator.userAgent;
                if (d.indexOf("jdapp") > -1) {
                    var e = d.split(";");
                    e[1] == b.IOS_M.UAname ? c.client = b.IOS_M.value : e[1] == b.ANDROID_M.UAname ? c.client = b.ANDROID_M.value : e[1] == b.IPAD_M.UAname && (c.client = b.IPAD_M.value), c.device = c.client, c.appv = e[2], c.osv = e[3], c.guid = e[4]
                } else d.indexOf(b.MICRO_M.UAname) > -1 ? c.client = b.MICRO_M.value : c.client = b.MM.value, c.device = this._getOs();
                c.proj_id = j.ProjectId, c.biz = j.Biz, c.method = j.Method.bpReport, c.resolu = a.innerWidth + "*" + a.innerHeight, c.reserved1 = this._getShortRefer(document.referrer), j._init_const_common = !0
            }
        },
        _reservedCookies: function() {
            for (var a = b.tools.Tools, c = ["__jda", "__jdv", "__jdb", "__jdu", "__jdb", "mu_subsite", "mt_xid", "unpl"], d = [], e = 0, f = c.length; f > e; e++) d.push(a.getCookie(c[e]));
            return d.join("_").replace(/\|/g, "_")
        },
        _getShortRefer: function(a) {
            if (!a) return "";
            if (a.indexOf("360buy.com") > -1 || a.indexOf("jd.com") > -1 || a.length < 128) return a;
            var c = b.tools.Tools,
                d = ["word", "wd", "text", "p", "keyword", "q"],
                e = [];
            if (a.indexOf("?") > -1) {
                for (var f = 0; f < d.length; f++) {
                    var g = c.getParameter(a, d[f]);
                    g && e.push(d[f] + "=" + g)
                }
                return a.substr(0, a.indexOf("?") + 1) + e.join("&")
            }
            return a
        },
        _getOs: function() {
            var a = navigator.userAgent.toLowerCase(),
                b = /android|iphone|ipad|ipod|windows phone|symbianos|nokia|bb/,
                c = /linux|windows|mac|sunos|solaris/,
                d = b.exec(a) || c.exec(a);
            return null == d ? "other" : d[0]
        },
        _getBrowserInfo: function() {
            if (j.browser_info) return j.browser_info;
            var a = navigator.userAgent.toLowerCase(),
                b = /(UCBrowser|CriOS|MQQBrowser|baidubrowser|GaoSuBrowerIPhone|MicroMessenger|Safari)\/(.*?)(?:\s{1}|$)/i,
                c = b.exec(a),
                d = j.browser_info = {};
            return c && (d.browser = c[1], d.borwser_version = c[2], d.mobile_model = this._getOs()), d
        },
        initUid: function() {
            var c = b.tools.Tools;
            (new Date).getTime();
            if (c.isEmbedded() || c.isMobile()) {
                var d = new o,
                    e = d.getSidSeq();
                this.options.mba_muid = d.getMuid(), this.options.mba_sid = e[0], this.privates.mba_seq = e[1], c.isEmbedded() && (this.privates.pv_sid = e[0], this.privates.pv_seq = e[1])
            }
            var f = c.getCookie("pinId"),
                g = c.getCookie("pwdt_id");
            this.options.pinid = f ? f : "", this.options.m_userid = g ? g : "", this.options.pin_sid = c.getParameter(a.location.href, "sid") || c.getCookie("sid")
        },
        send: function(a, b) {
            this.isSpider() || this.sendByRequest(a, b)
        },
        sendByRequest: function(b, c) {
            var d = new a.XMLHttpRequest;
            d.open("POST", ("https:" == document.location.protocol ? "https:" : "http:") + "//stat.m.jd.com/m/access", !0), d.setRequestHeader("Content-Type", "text/plain"), d.onreadystatechange = function() {
                4 == d.readyState && (c && c(), d = null)
            };
            var e = JSON.stringify(this.getReportData(b));
            d.send(e)
        },
        sendByImg: function(a, b) {
            var c = encodeURIComponent(JSON.stringify(this.getReportData(a))),
                d = ("https:" == document.location.protocol ? "https:" : "http:") + "//stat.m.jd.com/m/access.jpg?",
                e = [];
            e.push("data=" + c);
            var f = d + e.join("&"),
                g = new Image(1, 1);
            g.onload = function() {
                g.onload = null, g = null, b && b()
            }, g.src = f
        },
        getReportData: function(a) {
            var c = b.tools.Tools,
                d = {
                    data: []
                },
                e = this._getBrowserInfo();
            if (c.extend(d, k.common, j.common), c.extend(d, this.options), c.extend(d, e), a instanceof b.Request) {
                var f = a.getReportObj();
                f.pinid ? d.pinid = f.pinid : f.pinid = this.options.pinid, f.mba_seq = this.privates.mba_seq, c.isEmbedded() && (f.pv_sid = this.privates.pv_sid, f.pv_seq = this.privates.pv_seq), d.data.push(f)
            }
            return d
        },
        isSpider: function() {
            var a = navigator.userAgent,
                b = /Googlebot|Feedfetcher-Google|Mediapartners-Google|Adsbot-Google|Sogou\s{1}web\s{1}spider|Sogou\s{1}inst\s{1}spider|Sogou\s{1}inst\s{1}spider\/4\.0|HaoSouSpider|360Spider|Baiduspider|bingbot|qihoobot|YoudaoBot|Sosospider|Sogou\s{1}web\s{1}spider|iaskspider|msnbot|Yahoo!\s{1}Slurp|Yahoo!\s{1}Slurp\s{1}China|yisouspider|msnbot/,
                c = b.test(a);
            return c
        }
    }, b.prototype.options = {
        m_userid: "",
        pinid: "",
        mba_muid: "",
        mba_sid: "",
        pin_sid: ""
    }, b.prototype.privates = {
        mba_seq: "",
        pv_sid: "",
        pv_seq: ""
    }, b.prototype.ready = function() {}, b.Request = c, c.prototype.getReportObj = function() {
        var a = {};
        for (var b in this) "function" != typeof this[b] && "name" !== b && (a[b] = this[b] ? this[b] + "" : "");
        return a
    }, c.prototype.getTime = function() {
        var a = (new Date).valueOf() / 1e3 + "";
        return a
    }, c.prototype.setTs = function(a) {
        this[a] = this.getTime()
    }, c.prototype.setPageParam = function() {
        var a = this.getUrlInfo();
        this.page_name = a[0], this.page_param = a[1]
    }, c.prototype.getUrlInfo = function(b) {
        b || (b = a.location.href);
        var c = b.split("#")[0].split("?");
        return c
    }, d.prototype = new c, d.prototype.setSourceParam = function() {
        var c = a.location.search,
            d = b.tools.Tools,
            e = ["utm_source", "utm_medium", "utm_term", "utm_campaign"],
            f = new RegExp(".*(" + e.join("|") + ")=.*");
        if (f.test(c))
            for (var g = d.getSearchObj(c), h = 0, i = e.length; i > h; h++) {
                var j = e[h];
                this[j] = g[j]
            }
    }, d.prototype.setPvParams = function() {
        var a = b.tools.Tools;
        this.jdv = a.getCookie("__jdv")
    }, d.prototype.setPageId = function(a) {
        if (("string" == typeof a || "number" == typeof a) && (j.common.pageId = a), a && "object" == typeof a)
            for (var b in j.common) "client" == b && a[b] && "" != a[b] && (a[b] += "-M"), j.common[b] = a[b];
        this.pageId = j.common.pageId
    }, e.prototype = new c, e.prototype.updateEventSeries = function() {
        b.EventSeries && b.EventSeries.updateSeries(this)
    }, e.prototype.setPageId = function() {
        j.common.pageId && (this.pageId = j.common.pageId)
    }, e.attachEvent = function(c) {
        if (!e.attachedEvent) {
            c || (c = "J_ping");
            var d = "touchstart" in a ? "touchstart" : "click",
                f = document.querySelector("body"),
                g = b.tools.Tools;
            f.addEventListener(d, function(d) {
                for (var e, h = d.target; h != f;) {
                    if (h.className && h.className.indexOf(c) > -1) {
                        e = h;
                        break
                    }
                    h = h.parentNode ? h.parentNode : f
                }
                if (e) {
                    var i = g.attr(e, "href"),
                        j = (function() {
                            return function() {
                                i && /http:\/\/.*?/.exec(i) && "_blank" !== g.attr(e, "target") && (a.location.href = i)
                            }
                        }(), e.getAttribute("report-eventid") ? e.getAttribute("report-eventid") : ""),
                        k = e.getAttribute("report-pagename") ? e.getAttribute("report-pagename") : "",
                        l = e.getAttribute("report-pageparam") ? e.getAttribute("report-pageparam") : "",
                        m = new b.inputs.Click(j),
                        n = new b;
                    m.event_param = e.getAttribute("report-eventparam") ? e.getAttribute("report-eventparam") : "", m.event_level = e.getAttribute("report-eventlevel") ? e.getAttribute("report-eventlevel") : "", k && (m.page_name = k), l && (m.page_param = l), m.updateEventSeries(), n.send(m), i && /http:\/\/.*?/.exec(i) && "_blank" !== g.attr(e, "target") && (d.preventDefault ? d.preventDefault() : d.returnValue = !1, setTimeout(function() {
                        a.location.href = i
                    }, 200))
                }
            }, !1), e.attachedEvent = !0
        }
    }, f.prototype = new e, f.prototype.reportAsOrder = function(a) {
        if (a) {
            var c = new h(a),
                d = new b;
            d.send(c)
        }
    }, g.prototype = new e, h.prototype = new c, h.prototype.setPageParam = function() {}, h.prototype.setParams = function() {
        b.tools.Tools
    }, b.inputs = {}, b.inputs.PV = d, b.inputs.Click = e, b.inputs.AddCart = f, b.inputs.RmCart = g, b.inputs.Order = h;
    var l = "",
        m = {
            eventSeries: {},
            getSeries: function(a) {
                var c = b.tools.Tools,
                    d = new o,
                    e = d.getSidSeq(),
                    f = {
                        m_source: c.isEmbedded() ? "1" : "0",
                        event_series: this.eventSeries,
                        jda: c.getCookie("__jda")
                    };
                return c.isEmbedded() ? (f.pv_sid = e[0] + "", f.pv_seq = e[1] + "", f.pv_timestamp = (new Date).getTime() + "") : (f.mba_muid = d.getMuid(), f.mba_sid = e[0] + ""), JSON.stringify(f)
            },
            androidSeries: function() {
                var b = this.getSeries();
                try {
                    a.AndriodPing.setSeries(b)
                } catch (c) {}
            },
            writeSeries: function(a) {},
            updateUA: function(a) {
                if (b.tools.Tools.isEmbedded()) {
                    l = a;
                    var c = new o;
                    c.setSid("pv")
                }
            },
            updateSeries: function(a) {
                if (b.tools.Tools.isEmbedded()) {
                    var c = a.event_id,
                        d = a.event_level,
                        e = d || c && b.events && b.events.map[c];
                    e && (this.eventSeries.event_id = c, this.eventSeries.event_level = e, this.eventSeries.event_param = a.event_param, this.eventSeries.page_name = a.page_name, this.eventSeries.page_param = a.page_param)
                }
            }
        };
    b.EventSeries = m, i.prototype = {
        getCurTime: function() {
            var a = (new Date).valueOf() / 1e3 + "";
            return a
        },
        getUniq: function() {
            for (var a = (new Date).getTime() + "-", b = 1; 18 >= b; b++) {
                var c = Math.floor(16 * Math.random()).toString(16);
                a += c
            }
            return a
        },
        extend: function(a) {
            if (!this.isObject(a)) return a;
            for (var b, c, d = 1, e = arguments.length; e > d; d++) {
                b = arguments[d];
                for (c in b) Object.prototype.hasOwnProperty.call(b, c) && b[c] && (a[c] = b[c])
            }
            return a
        },
        isObject: function(a) {
            var b = typeof a;
            return "object" === b && !!a
        },
        isArray: function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        },
        isString: function(a) {
            return "[object String]" === Object.prototype.toString.call(a)
        },
        isFunction: function(a) {
            return "[object Function]" === Object.prototype.toString.call(a)
        },
        isMobile: function() {
            return !0
        },
        isEmbedded: function() {
            return navigator.userAgent.indexOf("jdapp") > -1
        },
        attr: function(a, b) {
            var c;
            return a && 1 !== a.nodeType ? void 0 : !(c = a.getAttribute(b)) && b in a ? a[b] : c
        },
        getCookie: function(a) {
            var b = document.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)"));
            return null != b ? decodeURI(b[2]) : null
        },
        setCookie: function(a, b, c) {
            var d = new Date;
            (null === c || void 0 === c) && (c = 18e5), d.setTime(d.getTime() + c), document.cookie = a + "=" + encodeURI(b) + ";expires=" + d.toGMTString() + ";path=/;domain=" + this.getRootDomain(this.getDomain()) + ";"
        },
        getRootDomain: function(a) {
            a = a.replace(/\/$/gi, ""), a = a.replace(/^(http|ftp|https|ssh):\/\//gi, ""), a = a.replace(/(.hk|.com|.info|.net|.org|.me|.mobi|.us|.biz|.xxx|.ca|.mx|.tv|.ws|.com.ag|.net.ag|.org.ag|.ag|.am|.asia|.at|.be|.com.br|.net.br|.com.bz|.net.bz|.bz|.cc|.com.co|.net.co|.com.co|.co|.de|.com.es|.nom.es|.org.es|.es|.eu|.fm|.fr|.gs|.co.in|.firm.in|.gen.in|.ind.in|.net.in|.org.in|.in|.it|.jobs|.jp|.ms|.com.mx|.nl|.nu|.co.nz|.net.nz|.org.nz|.se|.tc|.tk|.com.tw|.idv.tw|.org.tw|.tw|.co.uk|.me.uk|.org.uk|.vg|.com.cn|.gov|.gov.cn|.cn)$/gi, "%divide%$1");
            var b = a.split("%divide%")[1];
            "undefined" == typeof b && (b = ""), a = a.split("%divide%")[0];
            var c = a.split(".");
            return "." + c[c.length - 1] + b
        },
        getDomain: function() {
            var b = a.location.href;
            return b = b.replace(/^(http|ftp|https|ssh):\/\//gi, ""), b.split("/")[0]
        },
        getTopDomain: function() {
            var a = (location.hostname + "/").match(/[\w-]+\.(com|info|net|org|me|mobi|hk|us|biz|xxx|ca|mx|tv|ws|am|asia|at|be|bz|cc|co|de|nom|es|eu|fm|fr|gs|firm|gen|ind|in|it|jobs|jp|ms|nl|nu|se|tc|tk|idv|tw|vg|gov|cn|ha)(\.(cn|hk|jp|tw|kr|mo|uk|ag|es|co|nz|in|br|bz|mx))*\//gi);
            return a ? 0 < a.length ? a[0].substr(0, a[0].length - 1) : void 0 : document.domain
        },
        contains: function(a, b) {
            return a.indexOf(b) > -1
        },
        getSearchObj: function(a) {
            a || (a = location.search);
            for (var b = (a + "").replace(/(&amp;|\?)/g, "&").split("&"), c = {}, d = 0, e = b.length; e > d; d++) {
                var f = b[d].indexOf("="); - 1 != f && (c[b[d].substr(0, f).replace(/[^a-zA-Z0-9_]/g, "")] = decodeURIComponent(b[d].substr(f + 1)))
            }
            return c
        },
        getParameter: function(a, b) {
            var c = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
            return c ? c[3] : null
        },
        compare: function(a, b) {
            var c, d = a.split("."),
                e = b.split("."),
                f = parseFloat(d[0]),
                g = parseFloat(d[1]),
                h = parseFloat(e[0]),
                i = parseFloat(e[1]);
            return c = f > h ? a : f == h && g >= i ? a : b
        }
    };
    var n = new i,
        o = function() {
            if (o._instance) return o._instance;
            o._instance = this;
            var a, b;
            return this.getMuid = function() {
                return this.setMuid(), a[0]
            }, this.getSidSeq = function() {
                var a;
                this.setSid(), a = (b || []).slice(0);
                for (var c = 0; c < a.length; c++) a[c] = a[c] + "";
                return a
            }, this.setMuid = function() {
                n.getCookie("mba_muid") ? a[0] = n.getCookie("mba_muid").split(".")[0] : a[0] = n.getUniq(), this.setMuidCookie()
            }, this.setSid = function(a) {
                return n.isEmbedded() ? void this.setPVSid(a) : (n.getCookie("mba_sid") ? (b = n.getCookie("mba_sid").split("."), b[1] = 1 * (void 0 == b[1] ? 1 : b[1]) + ("pv" === a ? 1 : 0)) : (b[0] = (new Date).getTime() + "" + parseInt(1e16 * Math.random()), b[1] = "pv" === a ? 1 : 0), void this.setSidCookie())
            }, this.setPVSid = function(c) {
                var d, e, f, g = navigator.userAgent,
                    h = /(?:^|;)pv\/(.+?)(?:;|$)/,
                    i = g.match(h);
                if (i) {
                    if (d = i[1], l) {
                        var k = l.match(h);
                        k && (d = n.compare(d, k[1]))
                    }
                } else d = "1.0";
                if (n.getCookie("mba_sid")) e = n.getCookie("mba_sid");
                else {
                    var m = n.getCookie("mba_muid"),
                        o = m.split(".");
                    if (3 == o.length) {
                        var p = o[1],
                            q = parseInt(o[2]);
                        e = (new Date).getTime() - q > j.MCookie.sessionCookieTimeout ? [1 * p + 1, 0].join(".") : [p, 0].join(".")
                    } else e = "1.0"
                }
                f = n.compare(d, e), b[0] = f.split(".")[0], b[1] = 1 * (f.split(".")[1] ? f.split(".")[1] : 0) + ("pv" === c ? 1 : 0), a[1] = b[0], a[2] = (new Date).getTime(), this.setSidCookie(), this.setMuidCookie()
            }, this.setMuidCookie = function() {
                n.setCookie("mba_muid", a.join("."), j.MCookie.visitorCookieTimeout)
            }, this.setSidCookie = function() {
                n.setCookie("mba_sid", b.join("."), j.MCookie.sessionCookieTimeout)
            }, this.initialize = function() {
                return a = [], b = [], this.setMuid(), this.setSid("pv"), this
            }, this.initialize(), o._instance
        };
    ! function() {
        n.isMobile() && new o
    }(), b.tools || (b.tools = {}), b.tools.Tools = n, a.MPing = b
}(window),
function(a) {
    var b = {
        MTimeLimitDiscount_TopTab: 3,
        MTimeLimitDiscount_TopTabSlide: 4,
        MTimeLimitDiscount_TabExpand: 4,
        MTimeLimitDiscount_Activity: 4,
        MTimeLimitDiscount_JumpToNext: 4,
        MTimeLimitDiscount_ToTop: 4,
        MOneForAll_TopBanner: 3,
        MOneForAll_HotProduct: 3,
        MOneForAll_SoonFull: 3,
        MOneForAll_PopularOutbreak: 4,
        MOneForAll_Product: 4,
        MOneForAll_ADollarGrabTreasure: 4,
        MOneForAll_ParticipationRecord: 4,
        MOneForAll_ClassificationTab: 3,
        MOneForAll_ClassificationTabSlide: 4,
        MOneForAll_ClassificationProduct: 4,
        MOneForAll_GrabTreasure: 4,
        MOneForAll_PicSlide: 4,
        MOneForAll_Pic: 4,
        MOneForAll_Details: 4,
        MOneForAll_Past: 4,
        MOneForAll_FastSelect: 4,
        MOneForAll_Confirm: 4,
        MOneForAll_AllNum: 4,
        MOneForAll_Next: 4,
        MOneForAll_PastProduct: 4,
        MOneForAll_ScreenSlideUp: 4,
        MOneForAll_MoreLottery: 4,
        MOneForAll_Balance: 4,
        MOneForAll_JingBean: 4,
        MOneForAll_Coupon: 4,
        MOneForAll_Pay: 4,
        MOneForAll_Order: 4,
        MOneForAll_ContinueBuy: 4,
        MOneForAll_OrderTracking: 4,
        MOneForAll_LogisticsDetails: 4,
        MOneForAll_ReceivingInformation: 4,
        MOneForAll_AllRecords: 4,
        MOneForAll_ContinueToGrabTreasure: 4,
        MAuction_TopBanner: 4,
        MAuction_Classification: 4,
        MAuction_PopularCategory: 4,
        MAuction_BottomTab: 4,
        MAuction_TodaySpecial: 4,
        MAuction_FirstLevelNavigation: 4,
        MAuction_ClassificationJump: 4,
        MAuction_TwoCategory: 4,
        MAuction_MyAuction: 4,
        MAuction_MyProduct: 4,
        MAuction_MyBond: 4,
        MAuction_MyCommodity: 4,
        MAuction_Rule: 4,
        MAuction_TimeSelect: 4,
        MAuction_SecondCategory: 4,
        MAuction_Commodity: 4,
        MAuction_CommodityDescription: 4,
        MAuction_CustomerService: 4,
        MAuction_BidRecord: 4,
        MAuction_MarginRule: 4,
        MAuction_SellerCommitment: 4,
        MAuction_GoToMyAuction: 4,
        MGroupPurchase_BottomNavigation: 3,
        MProductdetail_Promotion: 5,
        MProductdetail_CommentBackToTop: 5,
        MProductdetail_ConsultationBackToTop: 5,
        MProductdetail_DetailViewGoods: 5,
        MProductdetail_ProductTab: 5,
        MProductdetail_DetailTab: 5,
        MProductdetail_CommentTab: 5,
        MProductdetail_ProductTabSlide: 5,
        MProductdetail_DetailTabSlide: 5,
        MProductdetail_CommentTabSlide: 5,
        MProductdetail_PriceNotice: 5,
        MProductdetail_SpecificationsPackUp: 5,
        MProductdetail_PicComment: 5,
        MProductdetail_OnlyComment: 5,
        MProductdetail_MobileAccessory: 5,
        MProductdetail_ContactJIMI: 5,
        MProductdetail_MoreYouLike: 5,
        MProductdetail_ArrivalNotice: 5,
        MProductdetail_Similar: 5,
        MProductdetail_DepreciatePriceInput: 5,
        MProductdetail_DepreciateNumInput: 5,
        MProductdetail_DepreciateCancel: 5,
        MProductdetail_DepreciateConfirm: 5,
        MProductdetail_DepreciateMask: 5,
        MProductdetail_ArrivalNumInput: 5,
        MProductdetail_ArrivalCancel: 5,
        MProductdetail_ArrivalConfirm: 5,
        MProductdetail_ArrivalMask: 5,
        MProductdetail_EnergySaving: 5,
        MJingDouHome_ShopActivity: 2,
        Mrecommendation_Product: 3,
        MHome_FocusPic: 1,
        Mhome_Classification: 1,
        Mhome_Cart: 1,
        MRecharge_Recharge: 1,
        MHome_Lottery: 1,
        MHome_MyJD: 1,
        MHome_HandSeckill: 1,
        MHome_ActivitiesInFloors: 1,
        MHome_ThemeHall: 1,
        MHome_Searchthi: 2,
        MHome_Search: 1,
        MHome_SearchDropDownAssociationalWords: 1,
        MHome_SearchDropDownHistoryWords: 1,
        MHome_AirTicket: 1,
        MHome_Icons: 1,
        MHomeGuessYouLike_Login: 1,
        MHomeGuessYouLike_Products: 1,
        MHomeGuessYouLike_Similarities: 1,
        MHomeSimilarities_Products: 1,
        MHome_FloatEntrance: 1,
        MHome_BacktoTop: 1,
        MVirtual_ProductDetail_Expose: 1,
        MProductList_Search: 2,
        MSearch_Search: 2,
        MSearch_SearchButton: 2,
        MSearch_Searchthi: 2,
        MSearch_SearchDropDownAssociationalWords: 2,
        MSearch_HistoryRecords: 2,
        MSearch_HotWords: 2,
        MSearch_Productid: 3,
        MCommonHead_NavigateButton: 1,
        MCommonHead_home: 1,
        MCommonHead_CategorySearch: 1,
        MCommonHead_Cart: 1,
        MCommonHead_MYJD: 1,
        MCommonHTail_Account: 1,
        MCommonHTail_ToTop: 1,
        MCommonHTail_ClientApp: 1,
        MDownLoadFloat_OpenNow: 1,
        MGroupBuy_ChannelIcons: 2,
        MJingDouHome_Activity: 2,
        MJingDouHome_JindouExCoupon: 2,
        MJingDouHome_JingdouBuyLottery: 2,
        MJingDouHome_Jump: 2,
        MJingDouHome_Cut: 2,
        MJingDouHome_ProductPic: 2,
        MJingDouShare_GetMyJingdou: 2,
        MJingDouJigsaw_Jigsaw_Expose: 2,
        MMyJDOrders_Categories: 2,
        MMyJDFollowed_Commodities: 2,
        MMyJDFollowed_Shops: 2,
        MMyJDFollowed_Commodity: 2,
        MMyJDFollowed_Shop: 2,
        MMyJDBrowsedHistory_Commodites: 2,
        MMyJDService_Categories: 2,
        MMyJDAccountManage_Categories: 2,
        MMyJD_Ordersnotpay: 2,
        MMyJD_Ordersnotreceiving: 2,
        MMyJD_MyMessages: 2,
        MMyJD_FuntionMenus: 2,
        MMyJD_GuessYouLike: 2,
        MHandSecKill_Commodity: 2,
        MHandSecKill_GotoAPPA: 2,
        Jshop_FocusPic: 4,
        Jshop_ProductID: 4,
        Jshop_CategoryTab: 4,
        Jshop_ProductID_Category: 4,
        Jshop_Navigation: 4,
        Jshop_CountDown: 4,
        Jshop_Lottery: 4,
        Jshop_GroupBuy: 4,
        Jshop_ShopRec: 4,
        Jshop_PromoRec: 4,
        Jshop_PromoTurns: 4,
        Jshop_PreSale: 4,
        Jshop_Html_Content: 4,
        Jshop_ImgWord: 4,
        Jshop_PullDown: 4,
        Jshop_PullDown_ProductID: 4,
        Jshop_AddtoCart: 4,
        MProductShow_ProductSku: 4,
        MMCDDownLoad_DownloadNow: 4,
        MobileWare_TreasureBoxEntrance: 4,
        MMobileWareLocate_Search: 4,
        MMobileWareLocate_Searchthi: 4,
        MMobileWareLocate_Locating: 4,
        MMobileWareLocate_HistoryAddr: 4,
        MMobileWareLocate_AssociateAddr: 4,
        MMobileWareCommonHead_GoToCart: 4,
        MMobileWareCommonHead_ChangeAddr: 4,
        MMobileWareProductList_BackToTop: 4,
        MMobileWareProductList_Product: 4,
        MMobileWareProductDetail_ProductMsg: 4,
        MMobileWareProductDetail_ProductIntroduction: 4,
        MMobileWareProductDetail_ProductSpecification: 4,
        MMobileWareProductDetail_ProductPackage: 4,
        MMobileWareProductDetail_AddToCart: 4,
        MMobileWareProductDetail_DeliveryAddr: 4,
        MMobileWareCart_DeleteProduct: 4,
        MMobileWareCart_NumIncrease: 4,
        MMobileWareCart_NumDecrease: 4,
        MMobileWareCart_SelectAll: 4,
        MMobileWareCart_CheckOut: 4,
        MMobileWareCheckout_ChangeAddr: 4,
        MMobileWareCheckout_MapCoordinate: 4,
        MMobileWareCheckout_OrderSubmit: 4,
        MMobileWareCheckout_PaperInvoice: 4,
        Shopcart_Productid: 5,
        Shopcart_Stroll: 5,
        Shopcart_Label: 5,
        Shopcart_Getresent: 5,
        Shopcart_Warranty: 5,
        Shopcart_Pay: 5,
        Shopcart_AddtoCart: 5,
        Shopcart_Present: 5,
        MProductdetail_Photo: 5,
        MProductdetail_Productinfo: 5,
        MProductdetail_Saleinfo: 5,
        MProductdetail_Shopid: 5,
        MProductdetail_GuessYouLike: 5,
        MProductdetail_Addtocart: 5,
        MProductdetail_Easybuy: 5,
        MProductdetail_GotoCart: 5,
        MProductdetail_AddtoFollowed: 5,
        MNeworder_Submit: 5,
        MNeworder_Function: 5,
        MNeworder_Address: 5,
        MNeworder_PayType: 5,
        MNeworder_ProdictList: 5,
        MHome_OrderSubmit: 5,
        MPayFinish_HomeMain: 5,
        MLOCOffLineProductDetail_BuyNow: 2,
        MLOCShopList_Call: 3,
        MLOCCheckOut_Submit: 4,
        LOCOffLineProductDetail_BuyNow: 2,
        LOCOnLineProductDetail_BuyNow: 2,
        MLOCOnLineProductDetail_BuyNow: 2,
        MLOCShopList_CallMap: 3,
        MFlashbuy_NewArrival: 2,
        MFlashbuy_LastSale: 2,
        MFlashbuy_ActivityForecast: 2,
        Mflashbuy_FocusPic: 2,
        MFlashbuy_NewArrivalFloor: 2,
        MFlashbuy_LastSaleFloor: 2,
        MFlashbuy_ActivityForecastFloor: 2,
        MFlashbuy_ProductPic: 3,
        MPresell_GetFreshFloor: 2,
        MTopic_FocusPic: 2,
        MTopic_SecKill: 2,
        MTopic_Floors: 2,
        MTopic_Products: 2,
        MTopic_Menus: 2,
        MTopic_Classify: 2,
        MTopic_recommend: 2,
        MTopic_brand: 2,
        Jshop_AD_button: 4,
        "Jshop_AD_TopCarousel ": 4,
        Jshop_AD_Tab: 4,
        Jshop_AD_Picture: 4,
        Jshop_AD_Rolled: 4,
        Jshop_AD_Close: 4,
        Jshop_Hot_Tab: 4,
        Jshop_Hot_ProductID: 4,
        "Jshop_Commended_ProductID ": 4,
        Jshop_Commended_GotoShop: 4,
        Jshop_Commended_Pic: 4,
        Jshop_Commended_Url: 4,
        MShopCheckIn_Pic: 2,
        MShopCheckIn_CheckInGetGift: 2,
        MShopCheckIn_RecommendShopid: 2,
        MShopCheckIn_MoreShops: 2,
        ShopHome_CheckInGetGift: 3,
        ShopCheckIn_Productid: 4,
        MJingDouHome_CouponCenter: 1,
        MWidget_Sign: 1,
        Widget_Operate: 1,
        Widget_Commodity: 1,
        Widget_More: 1,
        MJingDouHome_Checkin: 2,
        MSeckill_OrderSubmit: 5,
        MMyJD_MyPurse: 2,
        MMyJD_MyFollows: 2,
        MMyJD_BrowserHistory: 2,
        MMyJD_ServiceManager: 2,
        MMyJD_AccountManager: 2,
        MMyJD_MyAppointment: 2,
        MMyJD_ApplicationRecommend: 2,
        MMyJD_JCode: 2,
        MNeworder_Coupons: 5,
        MNeworder_Jdcard: 5,
        MNeworder_JdBean: 5,
        MNeworder_Invoice: 5,
        MNeworder_RestAccount: 5,
        MNeworder_GuessYouLike: 5,
        MNeworder_UnavaliableCoupons: 5,
        MMyJD_AllOrders: 2,
        MSaleBDCoupon_BannerPic: 3,
        MSaleBDCouponResult_BannerPic: 3,
        MShopcart_Productid: 4,
        MShopcart_EditAmount: 5,
        MShopcart_Amount: 5,
        MShopcart_Stroll: 4,
        MShopcart_CheckProd: 4,
        MShopcart_CheckAll: 4,
        MShopcart_Label: 4,
        MShopcart_Getresent: 5,
        MShopcart_Warranty: 5,
        MShopcart_Delete: 5,
        MShopcart_Pay: 5,
        MShopcart_Present: 5,
        MShopcartDeleteProduct_Sure: 5,
        MShopcartDeleteProduct_Cancel: 5,
        MShopcart_Login: 5,
        MShopcart_ShopEntrance: 5,
        MShopcart_GuessYouLikeFold: 5,
        MShopcart_GuessYouLike: 4,
        MShopcart_SimilaritiesEntrance: 5,
        MShopcart_SimilaritiesProductList: 4,
        MCategory_1st: 2,
        MCategory_3rd: 2,
        MCategory_Banner: 2,
        MCategory_Recommend: 2,
        MList_AdProducts: 3,
        MListFilter_Brand: 3,
        MListFilter_Back: 3,
        MListFilter_Address: 3,
        MShopLIst_JDShop: 3,
        MShopLIst_POPShop: 3,
        MShopcart_LoginEmptyCart: 5,
        MShopcart_LoginFullCart: 5,
        MJDMembersHome_SecKillProducts: 3,
        MJDMembersSecKill_Products: 4,
        MJDMembersHome_MemberProducts: 3,
        MJDMembersHome_MemberProductsToCart: 3,
        MJDMembersHome_AllMemberProducts: 3,
        MJDMembersSpecialSale_Categories: 4,
        MJDMembersSpecialSale_Products: 4,
        MJDMembers_FocusPic: 3,
        MJDMembers_Shopid: 3,
        MJDMembers_GetCoupon: 3,
        MVacationHonme_banner: 3,
        MVacationHonme_Destinations: 3,
        MVacationHonme_More: 3,
        MVacationHonme_HotDestinations: 3,
        MVacationHonme_SetOutCity: 3,
        MVacationHonme_SearchBox: 3,
        MVacationHonme_RecommendedProducts: 3,
        MVacationSearch_HotWord: 4,
        MVacationSearchResult_SearchBox: 4,
        MVacationSearchResult_Synthesize: 4,
        MVacationSearchResult_SalesVolume: 4,
        MVacationSearchResult_Price: 4,
        MVacationSearchResult_Fliter: 4,
        MVacationSearchResult_Lines: 4,
        MVacationProductDetail_Calendar: 5,
        MVacationProductDetail_ProductPoint: 5,
        MVacationProductDetail_Schedule: 5,
        MVacationProductDetail_Comment: 5,
        MVacationProductDetail_Costs: 5,
        MVacationProductDetail_ReserveNotice: 5,
        MVacationProductDetail_VisaInfo: 5,
        MVacationProductDetail_ContactService: 5,
        MVacationProductDetail_Call: 5,
        MVacationProductDetail_ReserveNow: 5,
        MJingDouHome_ShopCheckin: 2,
        MJingDouHome_GetJBean: 2,
        MJingDouHome_Topic: 2,
        MProductdetail_Specification: 5,
        MProductdetail_ProductdetailEntrance: 5,
        MProductdetail_Address: 5,
        MProductdetail_FirstAddress: 5,
        MProductdetail_SecondAddress: 5,
        MProductdetail_ThirdAddress: 5,
        MProductdetail_AskServiceEntrance: 5,
        MProductdetail_ProductCommentEntrance: 5,
        MProductdetail_ProductShowEntrance: 5,
        MProductdetail_ServiceInfo: 5,
        MProductdetail_Advert: 5,
        MProductdetail_ConsultEntrance: 5,
        MSearch_ClearHistory: 1,
        MProductdetail_Insurances: 5,
        MSearch_ChangeKeyWords: 1,
        MHome_SearchButton: 2,
        MProductdetail_SalesPromotion: 5,
        MProductdetail_Back: 5,
        MProductdetail_PreferentialPackage: 5,
        MProductdetail_PackageAddToCart: 5,
        MProductdetail_InsurancesSelect: 5,
        MProductdetail_FourthAddress: 5,
        MTicketsProductdetail_Tab: 5,
        MTicketsSearchResult_Fliter: 4,
        MTicketsProductdetail_TicketBomb: 5,
        MTicketsProductdetail_MoreTickets: 5,
        MTicketsSearchResult_SightSpot: 4,
        MTicketsHome_Theme: 3,
        MTicketsProductdetail_ReserveNow: 5,
        MTicketsSearchResult_SearchBox: 4,
        MTicketsHome_SightSpot: 3,
        MTicketsHome_Banner: 3,
        MTicketsHome_Location: 3,
        MTicketsThemes_Theme: 4,
        MTicketsSearch_Hotword: 4,
        MTicketsProductdetail_Map: 5,
        MTicketsHome_More: 3,
        MFlashbuy_CategoryBeautyFloor: 2,
        MTwelve_Play: 4,
        MProductdetail_ad: 3,
        MProductdetail_Comment: 5,
        MProductdetail_CommentPhoto: 5,
        MProductdetail_CouponSlide: 5,
        MProductdetail_Coupon: 5,
        MProductdetail_IdentifyingCodeInput: 5,
        MProductdetail_IdentifyingCodeImage: 5,
        MProductdetail_IdentifyingCodeCancel: 5,
        MProductdetail_IdentifyingCodeConfirm: 5,
        MProductdetail_IdentifyingCodeClose: 5,
        MProductdetail_ChooseSpecifications: 5,
        MProductdetail_ChooseInsurance: 5,
        MProductdetail_EnterShop: 5,
        MProductdetail_BackToTop: 5,
        MProductdetail_SubscribeImmediately: 5,
        MProductdetail_PurchaseImmediately: 5,
        MProductdetail_OrderImmediately: 5,
        MProductdetail_ShoppingCodeBuy: 5,
        MProductdetail_DetailProductIntroduction: 5,
        MProductdetail_DetailParameter: 5,
        MProductdetail_DetailCustomerService: 5,
        MProductdetail_DetailBackToTop: 5,
        MProductdetail_CommentAllTab: 5,
        MProductdetail_CommentFavorableTab: 5,
        MProductdetail_CommentMediumTab: 5,
        MProductdetail_CommentPoorTab: 5,
        MProductdetail_CommentPictureTab: 5,
        MProductdetail_CommentLikebutton: 5,
        MProductdetail_CommentReply: 5,
        MProductdetail_CommentAll: 5,
        MProductdetail_ReplyCommentInput: 5,
        MProductdetail_ReplyCommentSend: 5,
        MProductdetail_ReplyCommentReply: 5,
        MBMobileWareProductDetail_ProductMsg: 4,
        MBMobileWareProductDetail_ProductIntroduction: 4,
        MBMobileWareProductDetail_ProductSpecification: 4,
        MBMobileWareProductDetail_ProductPackage: 4,
        MBMobileWareProductDetail_AddToCart: 4,
        MBMobileWareProductDetail_DeliveryAddr: 4,
        MBProductdetail_Photo: 5,
        MBProductdetail_Productinfo: 5,
        MBProductdetail_Saleinfo: 5,
        MBProductdetail_Shopid: 5,
        MBProductdetail_GuessYouLike: 5,
        MBProductdetail_Addtocart: 5,
        MBProductdetail_Easybuy: 5,
        MBProductdetail_GotoCart: 5,
        MBProductdetail_AddtoFollowed: 5,
        MBProductdetail_Advert: 5,
        MBProductdetail_SalesPromotion: 5,
        MBProductdetail_PreferentialPackage: 5,
        MBProductdetail_Specification: 5,
        MBProductdetail_Address: 5,
        MBProductdetail_ServiceInfo: 5,
        MBProductdetail_Insurances: 5,
        MBProductdetail_InsurancesSelect: 5,
        MBProductdetail_ProductdetailEntrance: 5,
        MBProductdetail_ProductCommentEntrance: 5,
        MBProductdetail_ProductShowEntrance: 5,
        MBProductdetail_ConsultEntrance: 5,
        MBProductdetail_AskServiceEntrance: 5,
        MRecharge_PhoneBillTab: 4,
        MRecharge_PhoneTrafficTab: 4,
        MRecharge_Product: 4,
        MRecharge_ViewRechargeRecords: 4,
        MRecharge_ImmediateRecharge: 4,
        MRecharge_Coupons: 4,
        MRecharge_JDBeans: 4,
        MRecharge_ConfirmThePayment: 4,
        MRecharge_TrafficOrder: 4,
        MRecharge_TelephoneBill: 4,
        MRecharge_OrderBuyAgain: 4,
        MRecharge_OrderGoToPay: 4,
        MRecharge_Order: 4,
        MRecharge_OrderDetailBuyAgain: 4,
        MRecharge_OrderDetailGoToPay: 4,
        MGroupPurchase_TopClassification: 4,
        MGroupPurchase_Search: 4,
        MGroupPurchase_FocusPic: 4,
        MGroupPurchase_TimeSlotProduct: 4,
        MGroupPurchase_TimeSlot: 4,
        MGroupPurchase_1Plus2AdPosition: 4,
        MGroupPurchase_TodayProduct: 4,
        MGroupPurchase_BrandProduct: 4,
        MGroupPurchase_BrandSearch: 4,
        MGroupPurchase_LifeLocation: 4,
        MGroupPurchase_LifeSearch: 4,
        MGroupPurchase_LifeFocusPic: 4,
        MGroupPurchase_LifeClassificationIcon: 4,
        MGroupPurchase_Life1Plus2AdPosition: 4,
        MGroupPurchase_LifeYouLikeProduct: 4,
        MProductCoupon_GetSpecialcoupon: 2,
        MProductCoupon_Get: 2,
        MList_Comprehensive: 1,
        MSearch_Banner: 3,
        MExplosionPurchase_Qualification: 4,
        MExplosionPurchase_Purchase: 4,
        MDoubleElevenStrategy_RemindMe: 4,
        MShake_GoToProductDetail: 4,
        MJingDouHome_Exclusive: 2,
        MJingDouHome_Rank: 2,
        MTopic_Search: 2,
        MTopic_TopFocusPic: 2,
        MTopic_AdvancedFocusPic: 2,
        MTopic_Words: 2,
        MTopic_SecKillProduct: 2,
        MTopic_HighFocusPic: 2,
        MTopic_SingleRecommendProduct: 2,
        MTopic_DoubleRecommendProduct: 2,
        MTopic_LongPicProduct: 2,
        MTopic_SecondMenus: 2,
        MShopcartShare_AddtoMyShopcart: 2,
        MHandSecKill_Morespecialslae: 2,
        MHandSecKill_Preferential: 2,
        MHandSecKill_Banner: 2,
        MAuction_PreProduct: 4,
        MJingDouHome_Ad: 2,
        MJingDouHome_TopicProduct: 4,
        MProductdetail_ImmediatelyBuy: 5,
        MCashierPay_RecommendProduct: 3,
        MMyJD_MyCommodityCard: 4,
        MMarket_Eight: 4,
        MMarket_Twelve: 4,
        MMarket_Twenty: 4,
        MMarket_BuyNow: 4,
        MMarket_Product: 4,
        MMarket_ShopCart: 4,
        MCarSteward_TireShop: 4,
        MCarSteward_TireChange: 4,
        MCarSteward_TireAddress: 4,
        MCarSteward_TireConfirmUnlogin: 4,
        MCarSteward_TireTelNum: 4,
        MCarSteward_TireConfirmLogin: 4,
        MSpringPurchase_Strategy: 4,
        MSpringPurchase_RedBag: 4,
        MSpringPurchase_SecKillTime: 3,
        MSpringPurchase_SecKillProduct: 4,
        MSpringPurchase_SellingTabProduct: 3,
        MSpringPurchase_MainSubField: 3,
        MSpringPurchase_SubField: 3,
        MSpringPurchase_FieldProduct: 4,
        MSpringPurchase_SellingTab: 3,
        MSpringPurchase_SellingTabProduct: 4,
        MSpringPurchaseNavigation_AllTheMeeting: 3,
        MSpringPurchaseNavigation_FirstClassDirectory: 3,
        MSpringPurchaseNavigation_SecondClassDirectory: 3,
        MSpringPurchaseNavigation_FieldProduct: 4,
        MSpringPurchaseNavigation_NavigationBottomTab: 3,
        MSpringPurchase_MemberActivity: 3,
        MSpringPurchase_BIField: 3,
        MCarSteward_Accessory: 4,
        MCarSteward_Maintenance: 4,
        MCarSteward_Models: 4,
        MCarStewardModels_BrandLetter: 4,
        MCarStewardModels_Models: 4,
        MCarSteward_AccessoryType: 4,
        MCarSteward_QueryAccessory: 4,
        MCarSteward_QueryMaintenance: 4,
        MCarSteward_Product: 4,
        MCarSteward_Check: 4,
        MCarSteward_Change: 4,
        MCarStewardChange_SalesVolume: 4,
        MCarStewardChange_Price: 4,
        MCarStewardChange_Popularity: 4,
        MCarStewardChange_Product: 4,
        MCarStewardChange_Selection: 4,
        MCarSteward_ShoppingCart: 4,
        MDonotClose_Banner: 3,
        MDonotClose_SubField: 3,
        MDonotClose_WBanner: 3,
        MDonotClose_WSubField: 3,
        Babel_HtmlContent: 4,
        Babel_CodeContent: 4,
        MFlashbuy_TopTab: 3,
        MFlashbuy_FocusPic: 3,
        MFlashbuy_RecommendLeft: 3,
        MFlashbuy_RecommendRightUp: 3,
        MFlashbuy_RecommendRightDownLeft: 3,
        MFlashbuy_RecommendRightDownRight: 3,
        MFlashbuy_ValueRush: 4,
        MFlashbuy_Brand: 3,
        MFlashbuy_BrandProduct: 4,
        MList_BSelfProduct: 4,
        MList_BPopProduct: 4,
        MList_Product: 4,
        Morder_Allorders_Cancel: 4,
        Morder_Cancelorder_Buy: 5,
        Morder_Orderdetailed_Buy: 5,
        Morder_Allorders_Buy: 5,
        MLifeTravel_Banner: 3,
        MLifeTravel_PlaneTicket: 3,
        MLifeTravel_Hotel: 3,
        MLifeTravel_Vacation: 3,
        MLifeTravel_AdmissionTicket: 3,
        MLifeTravel_Popular: 4,
        MLifeTravel_SecKill: 4,
        MLifeTravel_CharacteristicUL: 3,
        MLifeTravel_CharacteristicUR: 3,
        MLifeTravel_CharacteristicDL: 3,
        MLifeTravel_CharacteristicDM: 3,
        MLifeTravel_CharacteristicDR: 3,
        MLifeTravel_Travel: 3,
        MLifeTravel_Selected: 4,
        MSeaStore_Banner: 3,
        MSeaStore_SubField: 3,
        MSeaStore_WBanner: 3,
        MSeaStore_WSubField: 3,
        MHotel_Banner: 3,
        MHotel_HotelNear: 3,
        MHotel_Search: 3,
        MHotel_ListHotel: 4,
        MHotel_DetailOrder: 5,
        MHotel_OrderOrderAgain: 5,
        MHotel_OrderDetailOrderAgain: 5,
        MShopcartShare_Product: 2,
        MHome_Floor: 1,
        MBuyer_Banner: 3,
        MBuyer_InfoSpecial: 3,
        MBuyer_DetailPic: 4,
        MBuyer_CoDetailProduct: 4,
        MSeaGroup_Product: 4,
        MSeaGroup_MyGroupProduct: 4,
        MSeaGroup_GroupPurchase: 4,
        MSeaGroup_Friend: 4,
        MSeaGroup_Purchase: 4,
        MSeaGroup_LaunchPurchase: 4,
        MSeaGroup_WMyGroupProduct: 4,
        MSeaGroup_WProduct: 4,
        MSeaGroup_WGroupPurchase: 4,
        MSeaGroup_WParticipate: 4,
        MSeaGroup_WLaunchPurchase: 4,
        MSpringThunder_SecTabProduct: 4,
        MSpringThunder_SubField: 3,
        MSpringThunder_ClassificationTab: 3,
        MSpringThunder_ClassificationTabProduct: 4,
        MSpringThunder_AllFieldTab: 3,
        MSpringThunder_ClassificationOne: 3,
        MSpringThunder_ClassificationTwo: 3,
        MSpringThunder_MoreProduct: 3,
        MShopcartsale_JoinProduct: 4,
        MShopcartsale_AllClassification: 4,
        MShopcartsale_SecondClassification: 4,
        MShopcartsale_HotSale: 4,
        MShopcartsale_SecKill: 4,
        MShopcart_BProductid: 4,
        MShopcart_BStroll: 4,
        MShopcart_BCheckProd: 4,
        MShopcart_BCheckAll: 4,
        MShopcart_BLabel: 4,
        MShopcart_BPay: 5,
        MShopcart_BGuessYouLike: 4,
        MShopcart_BSimilaritiesEntrance: 5,
        MShopcart_BSimilaritiesProductList: 4,
        MShopcart_BCoupon: 4,
        MShopcart_BFreightnote: 4,
        MShopcart_BShopEntrance: 5,
        MSeaGroup_WFriend: 4,
        MSeaGroup_WPurchase: 4,
        MKProductDetail_AddtoShoppingCart: 2,
        MKProductDetail_BuyNow: 2,
        MKShoppingCart_RecommendSku: 1,
        MKShoppingCart_GotoBuy: 3,
        MKCheckOut_GotoBuy: 4,
        MMobileVip_Banner: 3,
        MMobileVip_SecKill: 4,
        MMobileVip_Tab: 3,
        MMobileVip_Product: 4,
        MGlobalPurchase_Zero: 3,
        MGlobalPurchase_Sixteen: 3,
        MGlobalPurchase_BuyNow: 4,
        MGlobalPurchase_Product: 4,
        MGlobalPurchase_ShopCart: 5,
        MNewPeople_RecProduct: 4,
        MNewPeople_Tab: 3,
        MNewPeople_Product: 4,
        MShop_AllProduct: 4,
        MShop_Update: 4,
        MShop_Promotion: 4,
        MShop_Coupon: 4,
        MShop_Banner: 4,
        MShop_Activity: 4,
        MShop_Product: 4,
        MShop_AllProduct: 4,
        MProductSale_Product: 4,
        MProductSale_LookMore: 4,
        MSameShopSale_Product: 5,
        ShopBrandCelebration_HeadLine: 2,
        ShopBrandCelebration_Shop: 2,
        ShopBrandCelebration_BottomButton: 2,
        ShopBrandCelebration_ShopStreet: 2,
        MNewFunctionNavigation_QuickEntrance: 1,
        MStarDesign_Article: 3,
        MProductdetail_WindowMask: 4,
        MProductdetail_WindowClose: 4,
        MProductdetail_WindowProduct: 4,
        MProductdetail_WindowStroll: 4,
        MProductdetail_WindowShopCart: 5,
        MProductdetail_MoreYouLike: 3,
        MStarDesign_DetailPic: 4,
        MStarDesign_CoDetailProduct: 4,
        MStarDesign_Banner: 3,
        MStarDesign_SpecialLT: 3,
        MStarDesign_SpecialLB: 3,
        MStarDesign_SpecialRT: 3,
        MStarDesign_SpecialRB: 3,
        MJingDouBuy_Product: 4,
        MJingDouBuy_AddToCart: 5,
        MFlashbuy_KillProduct: 4,
        MKCheckOut_Confirm: 4,
        MNewPeople_BottomBanner: 3,
        MTopic_TimeLimitSeckillMore: 2,
        MTopic_TimeLimitSeckillTab: 2,
        MTopic_TimeLimitSeckillProduct: 2,
        MTopic_TimeLimitSeckillBuy: 2,
        MTopic_TryTab: 2,
        MTopic_TryProduct: 2,
        MTopic_TryPayPostageApply: 2,
        MTopic_TryCouponApply: 2,
        MTopic_IntelligentSale: 2,
        MTopic_ForumMessagesFstTab: 2,
        MTopic_ForumMessagesScdTab: 2,
        MTopic_ForumMessagesProduct: 2,
        MTopic_ForumMessagesBuyNow: 2,
        MTopic_ForumMessagesArticle: 2,
        MTopic_BuyPerDayPic: 2,
        MHandSecKill_Brand: 2,
        MHandSecKill_BrandProduct: 4,
        MHandSecKill_BrandDetailProduct: 4
    };
    MPing.events = {}, MPing.events.map = b
}(window),
function(a) {
    function b(a) {
        return d(c(e(a)))
    }

    function c(a) {
        return g(h(f(a), 8 * a.length))
    }

    function d(a) {
        try {} catch (b) {
            p = 0
        }
        for (var c, d = p ? "0123456789ABCDEF" : "0123456789abcdef", e = "", f = 0; f < a.length; f++) c = a.charCodeAt(f), e += d.charAt(c >>> 4 & 15) + d.charAt(15 & c);
        return e
    }

    function e(a) {
        for (var b, c, d = "", e = -1; ++e < a.length;) b = a.charCodeAt(e), c = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, b >= 55296 && 56319 >= b && c >= 56320 && 57343 >= c && (b = 65536 + ((1023 & b) << 10) + (1023 & c), e++), 127 >= b ? d += String.fromCharCode(b) : 2047 >= b ? d += String.fromCharCode(192 | b >>> 6 & 31, 128 | 63 & b) : 65535 >= b ? d += String.fromCharCode(224 | b >>> 12 & 15, 128 | b >>> 6 & 63, 128 | 63 & b) : 2097151 >= b && (d += String.fromCharCode(240 | b >>> 18 & 7, 128 | b >>> 12 & 63, 128 | b >>> 6 & 63, 128 | 63 & b));
        return d
    }

    function f(a) {
        for (var b = Array(a.length >> 2), c = 0; c < b.length; c++) b[c] = 0;
        for (var c = 0; c < 8 * a.length; c += 8) b[c >> 5] |= (255 & a.charCodeAt(c / 8)) << c % 32;
        return b
    }

    function g(a) {
        for (var b = "", c = 0; c < 32 * a.length; c += 8) b += String.fromCharCode(a[c >> 5] >>> c % 32 & 255);
        return b
    }

    function h(a, b) {
        a[b >> 5] |= 128 << b % 32, a[(b + 64 >>> 9 << 4) + 14] = b;
        for (var c = 1732584193, d = -271733879, e = -1732584194, f = 271733878, g = 0; g < a.length; g += 16) {
            var h = c,
                i = d,
                o = e,
                p = f;
            c = j(c, d, e, f, a[g + 0], 7, -680876936), f = j(f, c, d, e, a[g + 1], 12, -389564586), e = j(e, f, c, d, a[g + 2], 17, 606105819), d = j(d, e, f, c, a[g + 3], 22, -1044525330), c = j(c, d, e, f, a[g + 4], 7, -176418897), f = j(f, c, d, e, a[g + 5], 12, 1200080426), e = j(e, f, c, d, a[g + 6], 17, -1473231341), d = j(d, e, f, c, a[g + 7], 22, -45705983), c = j(c, d, e, f, a[g + 8], 7, 1770035416), f = j(f, c, d, e, a[g + 9], 12, -1958414417), e = j(e, f, c, d, a[g + 10], 17, -42063), d = j(d, e, f, c, a[g + 11], 22, -1990404162), c = j(c, d, e, f, a[g + 12], 7, 1804603682), f = j(f, c, d, e, a[g + 13], 12, -40341101), e = j(e, f, c, d, a[g + 14], 17, -1502002290), d = j(d, e, f, c, a[g + 15], 22, 1236535329), c = k(c, d, e, f, a[g + 1], 5, -165796510), f = k(f, c, d, e, a[g + 6], 9, -1069501632), e = k(e, f, c, d, a[g + 11], 14, 643717713), d = k(d, e, f, c, a[g + 0], 20, -373897302), c = k(c, d, e, f, a[g + 5], 5, -701558691), f = k(f, c, d, e, a[g + 10], 9, 38016083), e = k(e, f, c, d, a[g + 15], 14, -660478335), d = k(d, e, f, c, a[g + 4], 20, -405537848), c = k(c, d, e, f, a[g + 9], 5, 568446438), f = k(f, c, d, e, a[g + 14], 9, -1019803690), e = k(e, f, c, d, a[g + 3], 14, -187363961), d = k(d, e, f, c, a[g + 8], 20, 1163531501), c = k(c, d, e, f, a[g + 13], 5, -1444681467), f = k(f, c, d, e, a[g + 2], 9, -51403784), e = k(e, f, c, d, a[g + 7], 14, 1735328473), d = k(d, e, f, c, a[g + 12], 20, -1926607734), c = l(c, d, e, f, a[g + 5], 4, -378558), f = l(f, c, d, e, a[g + 8], 11, -2022574463), e = l(e, f, c, d, a[g + 11], 16, 1839030562), d = l(d, e, f, c, a[g + 14], 23, -35309556), c = l(c, d, e, f, a[g + 1], 4, -1530992060), f = l(f, c, d, e, a[g + 4], 11, 1272893353), e = l(e, f, c, d, a[g + 7], 16, -155497632), d = l(d, e, f, c, a[g + 10], 23, -1094730640), c = l(c, d, e, f, a[g + 13], 4, 681279174), f = l(f, c, d, e, a[g + 0], 11, -358537222), e = l(e, f, c, d, a[g + 3], 16, -722521979), d = l(d, e, f, c, a[g + 6], 23, 76029189), c = l(c, d, e, f, a[g + 9], 4, -640364487), f = l(f, c, d, e, a[g + 12], 11, -421815835), e = l(e, f, c, d, a[g + 15], 16, 530742520), d = l(d, e, f, c, a[g + 2], 23, -995338651), c = m(c, d, e, f, a[g + 0], 6, -198630844), f = m(f, c, d, e, a[g + 7], 10, 1126891415), e = m(e, f, c, d, a[g + 14], 15, -1416354905), d = m(d, e, f, c, a[g + 5], 21, -57434055), c = m(c, d, e, f, a[g + 12], 6, 1700485571), f = m(f, c, d, e, a[g + 3], 10, -1894986606), e = m(e, f, c, d, a[g + 10], 15, -1051523), d = m(d, e, f, c, a[g + 1], 21, -2054922799), c = m(c, d, e, f, a[g + 8], 6, 1873313359), f = m(f, c, d, e, a[g + 15], 10, -30611744), e = m(e, f, c, d, a[g + 6], 15, -1560198380), d = m(d, e, f, c, a[g + 13], 21, 1309151649), c = m(c, d, e, f, a[g + 4], 6, -145523070), f = m(f, c, d, e, a[g + 11], 10, -1120210379), e = m(e, f, c, d, a[g + 2], 15, 718787259), d = m(d, e, f, c, a[g + 9], 21, -343485551), c = n(c, h), d = n(d, i), e = n(e, o), f = n(f, p)
        }
        return Array(c, d, e, f)
    }

    function i(a, b, c, d, e, f) {
        return n(o(n(n(b, a), n(d, f)), e), c)
    }

    function j(a, b, c, d, e, f, g) {
        return i(b & c | ~b & d, a, b, e, f, g)
    }

    function k(a, b, c, d, e, f, g) {
        return i(b & d | c & ~d, a, b, e, f, g)
    }

    function l(a, b, c, d, e, f, g) {
        return i(b ^ c ^ d, a, b, e, f, g)
    }

    function m(a, b, c, d, e, f, g) {
        return i(c ^ (b | ~d), a, b, e, f, g)
    }

    function n(a, b) {
        var c = (65535 & a) + (65535 & b),
            d = (a >> 16) + (b >> 16) + (c >> 16);
        return d << 16 | 65535 & c
    }

    function o(a, b) {
        return a << b | a >>> 32 - b
    }
    var p = 0;
    MPing.tools || (MPing.tools = {}), MPing.tools.md5 = {
        hex_md5: b
    }
}(window);

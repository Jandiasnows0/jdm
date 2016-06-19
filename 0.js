/* jdf-1.0.0/ ja.js Date:2016-05-10 10:42:32 */ ! function(window, document, screen, navigator) {
    function showDebugMsg() {}
    window.console || (window.console = {}, window.console.log = showDebugMsg, window.console.debug = showDebugMsg, window.console.info = showDebugMsg, window.console.warn = showDebugMsg, window.console.error = showDebugMsg), "undefined" == typeof jap && (jap = {
        siteId: "JA2015_111145",
        heatmapEnable: 0,
        jumpAppEnable: 0,
        account: "",
        skuid: "",
        shopid: "",
        orderid: "",
        adsCookieName: "",
        openJA: 1,
        extParams: {},
        topic: "",
        anchorpvflag: 0,
        autoLogPv: 1
    });

    function Store() {
        if ("undefined" == typeof Store._initialized) {
            var a = document.domain.replace(/.*?(\w+\.\w+)$/, "$1");
            var b = function(a) {
                return document.cookie.length > 0 && a && (c_start = document.cookie.indexOf(a + "="), -1 != c_start) ? (c_start = c_start + a.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), decodeURIComponent(document.cookie.substring(c_start, c_end))) : ""
            };
            var c = function(b, c, d) {
                if (b) {
                    var e = "";
                    if (d) {
                        var f = new Date;
                        f.setTime(f.getTime() + 1e3 * d), e = ";expires=" + f.toGMTString()
                    }
                    document.cookie = b + "=" + encodeURIComponent(c) + e + ";path=/;domain=" + a + ";"
                }
            };
            Store.prototype.setItem = function(a, b, d) {
                c(a, b, d)
            }, Store.prototype.getItem = function(a) {
                return b(a)
            }, Store._initialized = !0
        }
    }
    var store = new Store;
    "object" != typeof JSON && (JSON = {}),
        function() {
            function f(a) {
                return 10 > a ? "0" + a : a
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            });
            var cx, escapable, gap, indent, meta;

            function quote(a) {
                return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                    var b = meta[a];
                    return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }

            function str(a, b) {
                var c, d, e, f, h, g = gap,
                    i = b[a];
                switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), typeof i) {
                    case "string":
                        return quote(i);
                    case "number":
                        return isFinite(i) ? String(i) : "null";
                    case "boolean":
                    case "null":
                        return String(i);
                    case "object":
                        if (!i) return "null";
                        if (gap += indent, h = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                            for (f = i.length, c = 0; f > c; c += 1) h[c] = str(c, i) || "null";
                            return e = 0 === h.length ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                        }
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                        return e = 0 === h.length ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
                }
            }
            "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, JSON.stringify = function(a, b) {
                var c;
                if (gap = "", indent = "", "number" == typeof b)
                    for (c = 0; b > c; c += 1) indent += " ";
                else "string" == typeof b && (indent = b);
                return str("", {
                    "": a
                })
            }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text) {
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return eval("(" + text + ")");
                throw new SyntaxError("JSON.parse")
            })
        }();
    var ja_code_version = "1.1";
    var clstag_service_type_id = "cl";
    var clstag_service_version = 1;
    var heatmap_service_type_id = "hm";
    var heatmap_service_version = 1;
    var pv_service_type_id = "pv";
    var pv_service_version = 1;
    var _JdaExpireSeconds = 15552e3;
    var _JdbExpireSeconds = 1800;
    var _JdvExpireSeconds = 1296e3;
    var _JduExpireSeconds = 15552e3;
    var mtSubsiteExpireSeconds = 31536e3;
    var __cookie_jda = jap.__cookie_jda || "__jda";
    var __cookie_jdb = jap.__cookie_jdb || "__jdb";
    var __cookie_jdc = jap.__cookie_jdc || "__jdc";
    var __cookie_jdu = jap.__cookie_jdu || "__jdu";
    var __cookie_jdv = jap.__cookie_jdv || "__jdv";
    var _log_url_ = ("https:" == document.location.protocol ? "https://venus" : "http://venus") + ".jd.com/log.gif";
    var _uuid_url_ = ("https:" == document.location.protocol ? "https://venus" : "http://venus") + ".jd.com/view-uuid";

    function isNumeric(a) {
        return !(a instanceof Array) && a - parseFloat(a) + 1 >= 0
    }

    function isInteger(a) {
        return isNumeric(a) && a % 1 === 0
    }

    function hash(a) {
        var d, b = 1,
            c = 0;
        if (a)
            for (b = 0, d = a.length - 1; d >= 0; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = 266338304 & b, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    }

    function flashChecker() {
        var a = 0;
        var b = 0;
        var c;
        var d = 0;
        if (d) {
            if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), c && (a = 1, b = c.GetVariable("$version"))) {
                var e = b.split(" ")[1].split(",");
                b = e[0] + "." + e[1] + " r" + e[2]
            }
        } else navigator.plugins && navigator.plugins.length > 0 && (c = navigator.plugins["Shockwave Flash"], c && (a = 1, b = c.description.split(" "), b && b.length >= 4 && (b = b[2] + " " + b[3])));
        return {
            f: a,
            v: b
        }
    }

    function getParameter(a, b) {
        var c = new RegExp("(?:^|&|[?]|[/])" + b + "=([^&]*)");
        var d = c.exec(a);
        return d ? decodeURIComponent(d[1]) : null
    }

    function appendParameter(a, b, c, d) {
        var e = "?";
        return a.lastIndexOf(e) > 0 && (e = "&"), a + e + b + "=" + (d ? encodeURIComponent(c) : c)
    }

    function removeParameter(a, b) {
        if (!a) return a;
        var c = new RegExp("(?:^|&|[?]|[/])" + b + "=([^&]*)");
        if (a = a.replace(c, ""), a.indexOf("?") < 0 && a.indexOf("&") >= 0) {
            var d = a.indexOf("&");
            a = a.substring(0, d) + "?" + a.substring(d + 1, a.length)
        }
        return a
    }

    function join(a, b) {
        if (b || (b = "|||"), a instanceof Array) {
            var c = "";
            for (var d = 0, e = a.length; e > d; d++) c += a[d] + (d == e - 1 ? "" : b);
            return c
        }
        return a
    }

    function getSkuid() {
        var a;
        return "undefined" != typeof pageConfig && (a = pageConfig.product ? pageConfig.product.skuid : 0), a || ""
    }

    function getShopid() {
        var a;
        return "undefined" != typeof pageConfig && (a = pageConfig.product ? pageConfig.product.shopId : 0), a || ""
    }

    function getOrderid() {
        var a;
        return a = "undefined" != typeof SucInfo_OrderId ? SucInfo_OrderId : getParameter(document.location.href, "suc_orderid"), a || ""
    }

    function getHashDomain() {
        var a = document.domain.replace(/.*?(\w+\.\w+)$/, "$1");
        return hash(a)
    }

    function getUuid() {
        return Math.round(2147483647 * Math.random()) ^ 2147483647 & Ic()
    }

    function Hc() {
        var a = {},
            b = window.navigator,
            c = window.screen;
        return a.D = c ? c.width + "x" + c.height : "", a.C = c ? c.colorDepth + "-bit" : "", a.language = (b && (b.language || b.browserLanguage) || "").toLowerCase(), a.javaEnabled = b && b.javaEnabled() ? 1 : 0, a.characterSet = document.characterSet || document.charset || "", a
    }

    function Ic() {
        var a = Hc();
        var b = window.navigator;
        var c = b.appName + b.version + a.language + b.platform + b.userAgent + a.javaEnabled + a.D + a.C + (document.cookie ? document.cookie : "") + (document.referrer ? document.referrer : "");
        var d = c.length;
        var e = window.history.length;
        for (; e > 0;) c += e-- ^ d++;
        return hash(c)
    }

    function isNotStartWithHttp(a) {
        return !/^http[s]?:\/\//i.test(a)
    }

    function isNotStartWithJavascript(a) {
        return !/^javascript:\/\//i.test(a)
    }

    function isNotStartWithFile(a) {
        return !/^file:\/\//i.test(a)
    }

    function isNotStartWithWellNumber(a) {
        return !/^#/i.test(a)
    }

    function hasContainedColon(a) {
        return /:\/\//.test(a)
    }
    var jsonp = function(a) {
        var b = function(a, b) {
            for (var c in b) a[c] = b[c]
        };
        var c = {
            create: function(a) {
                var c = function() {};
                return b(c, a), c.create = function(a) {
                    var d = new c;
                    return b(d, a), d.init && d.init(), d
                }, c
            }
        };
        var d = c.create({
            prototype: {
                on_complete: function() {
                    a[this.id] && (a[this.id] = null)
                },
                on_failed: function() {
                    this.failed && (this.failed(), this.failed = null)
                },
                on_timeout: function() {
                    this.js.onload(void 0, !0)
                },
                init: function() {
                    var c, a = this,
                        b = this.js;
                    b.onload = b.onreadystatechange = function(d, e) {
                        (e || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b = null, e ? a.on_failed() : (c && clearTimeout(c), a.on_complete()))
                    }, a.failed && (c = setTimeout(function() {
                        a.on_timeout()
                    }, a.timeout))
                }
            }
        });
        var e = function(b, c, e, g, h) {
            var i = document.getElementsByTagName("head")[0],
                j = document.createElement("script");
            j.async = !0, h || (h = "utf-8");
            var k = "ja_cls_jsonp" + f.guid++;
            var l = /^[0-9]+.?[0-9]*$/;
            g && l.test(g) || (g = 1e3 * f.request_timeout), finalUrl = b.replace("callback=?", "callback=" + k);
            var m = new Date;
            d.create({
                id: k,
                url: finalUrl,
                charset: h,
                failed: e,
                success: c,
                js: j,
                stat_time: m,
                timeout: g
            });
            return a[k] = c, j.charset = h, j.src = finalUrl, i.appendChild(j), k
        };
        var f = function() {
            e.apply(null, arguments)
        };
        return b(f, {
            guid: 0,
            requests: {},
            avail_tag: [],
            request_timeout: 5
        }), f
    }(window);
    var siteId = jap.siteId || "JA2015_111145",
        account = "undefined" != typeof jap.account ? jap.account : store.getItem("pin"),
        pinId = store.getItem("pinId") || "",
        topic = jap.topic || "traffic-oth",
        adsCookieName = jap.adsCookieName || "",
        ads = "",
        pre_app = "",
        extParams = jap.extParams && "object" == typeof jap.extParams ? jap.extParams : "",
        domain = document.domain.replace(/.*?(\w+\.\w+)$/, "$1"),
        currentTime = Math.round((new Date).getTime() / 1e3),
        pageTitle = document.title,
        refererUrl = document.referrer,
        currentUrl = document.location.href,
        browserInfo = function() {
            var a = {
                    name: "other",
                    version: "0"
                },
                b = navigator.userAgent.toLowerCase();
            browserRegExp = {
                se360: /360se/,
                se360_2x: /qihu/,
                ie: /msie[ ]([\w.]+)/,
                firefox: /firefox[|\/]([\w.]+)/,
                chrome: /chrome[|\/]([\w.]+)/,
                safari: /version[|\/]([\w.]+)(\s\w.+)?\s?safari/,
                opera: /opera[|\/]([\w.]+)/
            };
            for (var c in browserRegExp) {
                var d = browserRegExp[c].exec(b);
                if (d) {
                    a.name = c, a.version = d[1] || "0";
                    break
                }
            }
            return a
        }(),
        browserName = browserInfo.name,
        browserVersion = browserInfo.version,
        os = function() {
            var a = /(win|android|linux|nokia|ipad|iphone|ipod|mac|sunos|solaris)/.exec(navigator.platform.toLowerCase());
            return null === a ? "other" : a[0]
        }(),
        screenResolution = screen ? screen.width + "x" + screen.height : "",
        colorDeep = screen ? screen.colorDepth + "-bit" : "",
        language = (navigator && (navigator.language || navigator.browserLanguage) || "").toLowerCase(),
        javaEnabled = navigator && navigator.javaEnabled() ? "1" : "0",
        charset = document.characterSet || document.charset || "",
        visitTimes = 1,
        sequenceNum = 0,
        jda = (store.getItem(__cookie_jda) || "").split("."),
        jdb = (store.getItem(__cookie_jdb) || "").split("."),
        jdv = (store.getItem(__cookie_jdv) || "").split("|"),
        jdu = store.getItem(__cookie_jdu) || "",
        jdc = store.getItem(__cookie_jdc) || "",
        firstSessionCreateTime, prevVisitCreateTime, uuid, all_uuid, hashDomain, utm_source = "direct",
        utm_campaign = "-",
        utm_medium = "none",
        utm_term = "-",
        flash_ver = "";
    jda.length > 5 ? (hashDomain = jda[0], uuid = isInteger(jda[1]) ? jda[1] : null, firstSessionCreateTime = jda[2], prevVisitCreateTime = jda[3], visitTimes = isInteger(jda[5]) ? 1 * jda[5] : visitTimes) : (uuid = getUuid(), firstSessionCreateTime = currentTime, prevVisitCreateTime = currentTime), jdb.length > 3 && (hashDomain = jdb[0], sequenceNum = isInteger(jdb[1]) ? 1 * jdb[1] : 0), jdv.length > 4 && (hashDomain = jdv[0], utm_source = jdv[1], utm_campaign = jdv[2], utm_medium = jdv[3], utm_term = jdv[4]), jdu && "" !== jdu && (all_uuid = jdu), jdc && "" !== jdc && (hashDomain = jdc);
    var umz = [];
    var isNewSession = jdb.length < 4;
    var utsr = getParameter(currentUrl, "utm_source");
    if (utsr) {
        var camp = getParameter(currentUrl, "utm_campaign"),
            medi = getParameter(currentUrl, "utm_medium"),
            term = getParameter(currentUrl, "utm_term");
        umz.push(utsr || utm_source), umz.push(camp || utm_campaign), umz.push(medi || utm_medium), umz.push(term || utm_term), utm_term = umz[3]
    } else {
        var search = "baidu:wd,baidu:word,so.com:q,so.360.cn:q,360so.com:q,360sou.com:q,baidu:q1,m.baidu:word,m.baidu:w,wap.soso:key,m.so:q,page.yicha:key,sz.roboo:q,i.easou:q,wap.sogou:keyword,google:q,soso:w,sogou:query,youdao:q,ucweb:keyword,ucweb:word,114so:kw,yahoo:p,yahoo:q,live:q,msn:q,bing:q,aol:query,aol:q,daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,alice:qs,yandex:text,najdi:q,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,ozu:q,terra:query,rambler:query".split(",");
        var sign = !0;
        var rdomain = refererUrl && refererUrl.split("/")[2];
        if (rdomain && rdomain.indexOf(domain) < 0) {
            for (var i = 0; i < search.length; i++) {
                var e = search[i].split(":");
                if (rdomain.indexOf(e[0].toLowerCase()) > -1 && refererUrl.indexOf((e[1] + "=").toLowerCase()) > -1) {
                    var word = getParameter(refererUrl, e[1]);
                    umz.push(e[0]), umz.push("-"), umz.push("organic"), umz.push(word || "not set"), utm_term = umz[3], sign = !1;
                    break
                }
            }
            sign && (rdomain.indexOf("zol.com.cn") > -1 ? (umz.push("zol.com.cn"), umz.push("-"), umz.push("cpc"), umz.push("not set")) : (umz.push(rdomain), umz.push("-"), umz.push("referral"), umz.push("-")))
        }
    }
    isNewSession || !isNewSession && umz.length > 0 && (umz[0] !== utm_source || umz[1] !== utm_campaign || umz[2] !== utm_medium) && "referral" !== umz[2] ? (utm_source = umz[0] || utm_source, utm_campaign = umz[1] || utm_campaign, utm_medium = umz[2] || utm_medium, utm_term = umz[3] || utm_term, jda.length > 5 ? (firstSessionCreateTime = jda[2], prevVisitCreateTime = jda[4], visitTimes++, sequenceNum = 1) : (visitTimes = 1, sequenceNum = 1)) : sequenceNum++;
    var preSession, preSeqnum;
    var userAgent = navigator.userAgent;
    if (userAgent && (userAgent.toLowerCase().indexOf("android") >= 0 || userAgent.toLowerCase().indexOf("iphone") >= 0)) {
        var beginIndex, endIndex;
        userAgent += ";", userAgent.indexOf("psn/") >= 0 && (beginIndex = userAgent.indexOf("psn/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (preSession = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("psq/") >= 0 && (beginIndex = userAgent.indexOf("psq/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (preSeqnum = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("ref/") >= 0 && (beginIndex = userAgent.indexOf("ref/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (refererUrl = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("pap/") >= 0 && (beginIndex = userAgent.indexOf("pap/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (pre_app = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("usc/") >= 0 && (beginIndex = userAgent.indexOf("usc/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (utm_source = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("usp/") >= 0 && (beginIndex = userAgent.indexOf("usp/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (utm_campaign = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("umd/") >= 0 && (beginIndex = userAgent.indexOf("umd/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (utm_medium = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("utr/") >= 0 && (beginIndex = userAgent.indexOf("utr/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (utm_term = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("adk/") >= 0 && (beginIndex = userAgent.indexOf("adk/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (adsCookieName = userAgent.substring(beginIndex, endIndex))), userAgent.indexOf("ads/") >= 0 && (beginIndex = userAgent.indexOf("ads/") + 4, endIndex = userAgent.indexOf(";", beginIndex), endIndex >= beginIndex && (ads = userAgent.substring(beginIndex, endIndex)))
    }
    preSession && preSeqnum ? (store.setItem("pre_session", preSession), store.setItem("pre_seq", preSeqnum)) : (preSession = store.getItem("pre_session") || "", preSeqnum = store.getItem("pre_seq") || ""), hashDomain || (hashDomain = getHashDomain()), store.setItem(__cookie_jda, [hashDomain, uuid, firstSessionCreateTime || "-", prevVisitCreateTime || "-", currentTime, visitTimes || 1].join("."), _JdaExpireSeconds), store.setItem(__cookie_jdb, [hashDomain, sequenceNum || 1, uuid + "|" + (visitTimes || 1), currentTime].join("."), _JdbExpireSeconds), store.setItem(__cookie_jdv, [hashDomain, utm_source || "direct", utm_campaign || "-", utm_medium || "none", utm_term || "-"].join("|"), _JdvExpireSeconds), store.setItem(__cookie_jdc, hashDomain), all_uuid ? store.setItem(__cookie_jdu, all_uuid, _JduExpireSeconds) : jsonp(_uuid_url_ + "?callback=?", function(a) {
        a && a.auuid && store.setItem(__cookie_jdu, a.auuid, _JduExpireSeconds)
    }, function() {}, 500, "utf-8");
    var fls = flashChecker();
    fls.f && (flash_ver = fls.v);
    var jaCommonData = {
        siteId: siteId,
        account: account,
        pinId: pinId,
        domain: domain,
        currentTime: currentTime,
        pageTitle: pageTitle,
        refererUrl: refererUrl,
        currentUrl: currentUrl,
        browserName: browserName,
        browserVersion: browserVersion,
        os: os,
        screenResolution: screenResolution,
        colorDeep: colorDeep,
        language: language,
        javaEnabled: javaEnabled,
        charset: charset,
        firstSessionCreateTime: firstSessionCreateTime,
        prevVisitCreateTime: prevVisitCreateTime,
        visitTimes: visitTimes,
        sessionId: uuid + "|" + visitTimes,
        sequenceNum: sequenceNum,
        jda: jda,
        jdb: jdb,
        jdv: jdv,
        skuid: jap.skuid || getSkuid(),
        orderid: jap.orderid || getOrderid(),
        shopid: jap.shopid || getShopid(),
        utm_source: utm_source,
        utm_campaign: utm_campaign,
        utm_medium: utm_medium,
        utm_term: utm_term,
        flash_ver: flash_ver,
        preSession: preSession,
        preSeqnum: preSeqnum,
        uuid: uuid,
        all_uuid: all_uuid,
        adsCookieName: adsCookieName,
        ads: ads,
        pre_app: pre_app,
        extParams: extParams,
        topic: topic
    };

    function log(a, b, c) {
        var d = "ot";
        ("pv" === a || "cl" === a) && (d = a);
        var e = JSON.stringify(c);
        var f = _log_url_ + "?ut=s&d=web&lgt=" + encodeURIComponent(a) + "&lgv=" + encodeURIComponent(b) + "&sfj=" + encodeURIComponent(e) + "&uid=" + encodeURIComponent(jaCommonData.uuid) + "&pid=" + encodeURIComponent(jaCommonData.pinId) + "&cul=" + encodeURIComponent(jaCommonData.currentUrl) + "&ref=" + encodeURIComponent(jaCommonData.refererUrl) + "&pin=" + encodeURIComponent(jaCommonData.account) + "&ws=" + encodeURIComponent(jaCommonData.siteId) + "&vt=" + encodeURIComponent(jaCommonData.visitTimes) + "&sn=" + encodeURIComponent(jaCommonData.sequenceNum) + "&cut=" + encodeURIComponent(Math.round((new Date).getTime() / 1e3)) + "&tpc=" + encodeURIComponent(jaCommonData.topic + "." + d);
        var g = new Image(1, 1);
        g.src = f, g.onload = function() {
            g.onload = null, g.onerror = null
        }, g.onerror = function() {
            g.onload = null, g.onerror = null
        }
    }
    var jaService = {};
    jaService.lg = function(a, b, c) {
        var d = store.getItem(jaCommonData.adsCookieName);
        var e = {};
        if (ja_code_version && (e.jvr = ja_code_version), jaCommonData.utm_source && (e.usc = jaCommonData.utm_source), jaCommonData.utm_campaign && (e.ucp = jaCommonData.utm_campaign), jaCommonData.utm_medium && (e.umd = jaCommonData.utm_medium), jaCommonData.utm_term && (e.utr = jaCommonData.utm_term), jaCommonData.adsCookieName && (e.adk = jaCommonData.adsCookieName), d && (e.ads = d), c && "object" == typeof c)
            for (var f in c) e[f] = c[f];
        log(a, b, e)
    }, window.lg = jaService.lg, jaService.logHeatmap = function(a, b, c, d) {
        var e = store.getItem(jaCommonData.adsCookieName);
        var f = {};
        ja_code_version && (f.jvr = ja_code_version), jaCommonData.utm_source && (f.usc = jaCommonData.utm_source), jaCommonData.utm_campaign && (f.ucp = jaCommonData.utm_campaign), jaCommonData.utm_medium && (f.umd = jaCommonData.utm_medium), jaCommonData.utm_term && (f.utr = jaCommonData.utm_term), jaCommonData.adsCookieName && (f.adk = jaCommonData.adsCookieName), e && (f.ads = e), a && (f.cls = a), b && (f.x = String(b)), c && (f.y = String(c)), document.body.scrollWidth && (f.scw = String(document.body.scrollWidth)), document.body.scrollHeight && (f.sch = String(document.body.scrollHeight)), d && (f.ofl = String(d)), log(heatmap_service_type_id, heatmap_service_version, f)
    }, jaService.logClstag = function(a, b) {
        var c = store.getItem(jaCommonData.adsCookieName);
        var d = {};
        a && (d.cls = a), b && (d.tar = b), ja_code_version && (d.jvr = ja_code_version), jaCommonData.screenResolution && (d.scr = jaCommonData.screenResolution), jaCommonData.utm_source && (d.usc = jaCommonData.utm_source), jaCommonData.utm_campaign && (d.ucp = jaCommonData.utm_campaign), jaCommonData.utm_medium && (d.umd = jaCommonData.utm_medium), jaCommonData.utm_term && (d.utr = jaCommonData.utm_term), jaCommonData.adsCookieName && (d.adk = jaCommonData.adsCookieName), c && (d.ads = c), log(clstag_service_type_id, clstag_service_version, d)
    }, jaService.logPv = function() {
        var a = store.getItem(jaCommonData.adsCookieName);
        var b = 0;
        "undefined" != typeof jdpts && jdpts._st && (b = 1e3 * jaCommonData.currentTime - jdpts._st);
        var c = {};
        jaCommonData.os && (c.osp = jaCommonData.os), ja_code_version && (c.jvr = ja_code_version), jaCommonData.screenResolution && (c.scr = jaCommonData.screenResolution), jaCommonData.colorDeep && (c.clr = jaCommonData.colorDeep), jaCommonData.browserName && (c.bst = jaCommonData.browserName), jaCommonData.browserVersion && (c.bsv = jaCommonData.browserVersion), jaCommonData.firstSessionCreateTime && (c.fst = jaCommonData.firstSessionCreateTime), jaCommonData.prevVisitCreateTime && (c.pst = jaCommonData.prevVisitCreateTime), jaCommonData.currentTime && (c.vct = jaCommonData.currentTime), b && (c.ldt = String(b)), jaCommonData.language && (c.bsl = jaCommonData.language), jaCommonData.charset && (c.bsc = jaCommonData.charset), jaCommonData.javaEnabled && (c.jav = jaCommonData.javaEnabled), jaCommonData.flash_ver && (c.flv = jaCommonData.flash_ver), jaCommonData.pageTitle && (c.tit = jaCommonData.pageTitle), jaCommonData.utm_source && (c.usc = jaCommonData.utm_source), jaCommonData.utm_campaign && (c.ucp = jaCommonData.utm_campaign), jaCommonData.utm_medium && (c.umd = jaCommonData.utm_medium), jaCommonData.utm_term && (c.utr = jaCommonData.utm_term), jaCommonData.skuid && (c.sku = String(jaCommonData.skuid)), jaCommonData.orderid && (c.ord = String(jaCommonData.orderid)), jaCommonData.shopid && (c.shp = String(jaCommonData.shopid)), jaCommonData.preSession && (c.psn = jaCommonData.preSession), jaCommonData.preSeqnum && (c.psq = jaCommonData.preSeqnum), jaCommonData.adsCookieName && (c.adk = jaCommonData.adsCookieName), a && (c.ads = a), jaCommonData.pre_app && (c.pap = jaCommonData.pre_app), jaCommonData.extParams && (c.ext = jaCommonData.extParams), log(pv_service_type_id, pv_service_version, c)
    }, window.lgPv = jaService.logPv;

    function isMeta(a) {
        if (a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) return !0;
        var b = a.which,
            c = a.button;
        return b || void 0 === c ? 2 === b ? !0 : 2 === c ? !0 : !1 : 1 & !c && 2 & !c && 4 & c
    }
    document.onclick = function(a) {
        a = a || event;
        var b = a.srcElement || a.target;
        var c = b;
        var d = b.getAttribute("clstag");
        for (; !d && "BODY" != b.nodeName && "HTML" != b.nodeName && (b = b.parentNode, b && ("BODY" != b.nodeName || "HTML" == b.nodeName));) d = b.getAttribute("clstag");
        var e;
        if (d) {
            var f = d.split("|"),
                g = f[1],
                h = f[2],
                i = f[3];
            if ("keycount" === g) {
                e = h + "|" + i;
                var j = c.getAttribute("href");
                jaService.logClstag(e, j), j && /^(http:\/\/|https:\/\/|\/\/).*/.exec(j) && "_blank" !== c.getAttribute("target") && !isMeta(a) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, setTimeout(function() {
                    window.location.href = j
                }, 200))
            }
        }
        var k = window.location.hostname.toLowerCase();
        if (jap.heatmapEnable && /(sale|mall|jmall|pop|bdp).(jd|360buy).com/.test(k)) {
            var l = 0,
                m = 0;
            a.pageX || a.pageY ? (l = a.pageX, m = a.pageY) : (l = a.clientX + document.body.scrollLeft - document.body.clientLeft, m = a.clientY + document.body.scrollTop - document.body.clientTop);
            var n = window.screen.width >= 1210 ? 1210 : 990;
            var o = document.body.clientWidth > n ? Math.round((document.body.clientWidth - n) / 2) : 0;
            jaService.logHeatmap(e, l, m, o)
        }
    };

    function getUnionSeriesJsonObj() {
        var a = {
            psn: jaCommonData.sessionId,
            psq: jaCommonData.sequenceNum,
            ref: jaCommonData.currentUrl,
            usc: jaCommonData.utm_source,
            usp: jaCommonData.utm_campaign,
            umd: jaCommonData.utm_medium,
            utr: jaCommonData.utm_term,
            adk: jaCommonData.adsCookieName,
            ads: store.getItem(jaCommonData.adsCookieName),
            ext: jaCommonData.extParams
        };
        return a
    }

    function getUnionSeries() {
        var a = {
            psn: jaCommonData.sessionId,
            psq: jaCommonData.sequenceNum,
            ref: jaCommonData.currentUrl,
            usc: jaCommonData.utm_source,
            usp: jaCommonData.utm_campaign,
            umd: jaCommonData.utm_medium,
            utr: jaCommonData.utm_term,
            adk: jaCommonData.adsCookieName,
            ads: store.getItem(jaCommonData.adsCookieName)
        };
        var b = JSON.stringify(a);
        return b
    }

    function getAndroidUnionSeries() {
        var a = getUnionSeries();
        try {
            window.AndriodPing.setSeriesUnion(a)
        } catch (b) {}
    }
    window.getUnionSeries = getUnionSeries, window.getAndroidUnionSeries = getAndroidUnionSeries, window.getUnionSeriesJsonObj = getUnionSeriesJsonObj;
    var _org_start_with_ = String.prototype.startWith;
    String.prototype.startWith = function(a) {
        var b = new RegExp("^" + a);
        return b.test(this)
    };

    function isJdChannel() {
        return "mt_subsite" === jaCommonData.adsCookieName
    }

    function isNotProcessByUnionSystem() {
        return "true" !== cu
    }
    var cu = getParameter(jaCommonData.currentUrl, "cu");
    if (isJdChannel() && isNotProcessByUnionSystem() && 1 === jaCommonData.sequenceNum) {
        var utm_source = jaCommonData.utm_source;
        var utm_campaign = jaCommonData.utm_campaign;
        var utm_medium = jaCommonData.utm_medium;
        var utm_term = jaCommonData.utm_term;
        var refererUrl = jaCommonData.refererUrl;
        var rdomain = refererUrl && refererUrl.split("/")[2] || "";
        var currentTime = jaCommonData.currentTime;
        var channelId = 125;
        var channelLevel = 3;
        "cpc" === utm_medium ? (channelLevel = 3, "baidu" === utm_source ? channelId = 60 : "sougou" === utm_source ? channelId = 61 : "google" === utm_source ? channelId = 62 : "youdao" === utm_source ? channelId = 63 : "360" === utm_source ? channelId = 64 : "media" === utm_source ? utm_term.startWith("media_12_") ? channelId = 60 : utm_term.startWith("media_13_") ? channelId = 61 : utm_term.startWith("media_14_") ? channelId = 64 : utm_term.startWith("media_4_") ? channelId = 65 : utm_term.startWith("media_10_") ? channelId = 66 : utm_term.startWith("media_11_") ? channelId = 126 : utm_term.startWith("media_8_") ? (channelLevel = 2, channelId = 67) : utm_term.startWith("media_5_") ? (channelLevel = 2, channelId = 68) : utm_term.startWith("media_9_") ? (channelLevel = 2, channelId = 69) : channelId = utm_term.startWith("media_15_") ? 144 : utm_term.startWith("media_16_") ? 144 : utm_term.startWith("media_17_") ? 144 : 144 : channelId = 144) : "ppc" === utm_medium ? (channelLevel = 3, channelId = 144) : "organic" === utm_medium ? (channelLevel = 3, channelId = "gouwu.sogou.com" === rdomain ? 187 : "gouwu.baidu.com" === rdomain ? 190 : "baidu" === utm_source ? 180 : "so.com" === utm_source ? 181 : "haoso.com" === utm_source ? 181 : "so.360.cn" === utm_source ? 181 : "sogou" === utm_source ? 182 : "google" === utm_source ? 183 : "bing" === utm_source ? 184 : 185) : "none" === utm_medium ? (channelLevel = 1, channelId = 122) : "referral" === utm_medium ? (channelLevel = 3, channelId = "gouwu.hao123.com" === rdomain ? 188 : "weigou.baidu.com" === rdomain ? 189 : 121) : "direct" === utm_source ? (channelLevel = 1, channelId = 122) : (channelLevel = 3, channelId = 125);
        var mt = store.getItem(jaCommonData.adsCookieName) || "";
        var mtParts = mt.split("|");
        if (mtParts && 3 === mtParts.length) mtParts[channelLevel - 1] = encodeURIComponent(channelId + "," + currentTime);
        else {
            mtParts = [];
            for (var j = 0; 3 > j; j++) mtParts[j] = j === channelLevel - 1 ? encodeURIComponent(channelId + "," + currentTime) : ""
        }
        mt = join(mtParts, "|"), store.setItem(jaCommonData.adsCookieName, mt, mtSubsiteExpireSeconds)
    }
    jaCommonData.ads && store.setItem(jaCommonData.adsCookieName, jaCommonData.ads, mtSubsiteExpireSeconds), String.prototype.startWith = _org_start_with_, _org_start_with_ = null, ("undefined" == typeof jap.autoLogPv || jap.autoLogPv) && (jaService.logPv(), jap.anchorpvflag && window.addEventListener("hashchange", function() {
        jaCommonData.refererUrl = jaCommonData.currentUrl, jaCommonData.currentUrl = document.location.href, jaCommonData.account = "undefined" != typeof jap.account ? jap.account : store.getItem("pin"), jaService.logPv()
    }))
}(window, document, window.screen, window.navigator);

/**
 * Created with JetBrains PhpStorm.
 * User: Julian Warren
 * Date: 19/08/13
 * Time: 7:35 AM
 * To change this template use File | Settings | File Templates.
 */

jQuery(document).ready(function (a) {
    a("html").removeClass("no-js").addClass("js");
    moComments.init();
    moContact.init();
    a("#access .menu-main-container ul").superfish({hoverClass: "hover", animation: {opacity: "show", height: "show"}, delay: 600, speed: 200, dropShadows: false, autoArrows: false});
    a("#responsive-menu-switcher a").click(function (b) {
        b.preventDefault();
        a("body, html").scrollTop(0);
        a(this).toggleClass("active");
        a(".responsive-menu").animate({height: "toggle"}, 250)
    });
    a(".gallery").preloader({delay: 100, imgSelector: ".gallery-image"});
    if (a.tools.validator != undefined) {
        a.tools.validator.addEffect("contact-form", function (c, b) {
            a.each(c, function (f, e) {
                var d = e.input;
                d.addClass("invalid")
            })
        }, function (b) {
            b.removeClass("invalid")
        });
        a(".widget_contact_form .contact-form").validator({effect: "contact-form"}).submit(function (c) {
            var b = a(this);
            if (!c.isDefaultPrevented()) {
                a.post(this.action, {token: a('input[name="contact_token"]').val(), _wpnonce: a('input[name="contact_wpnonce"]').val(), name: a('input[name="contact_name"]').val(), email: a('input[name="contact_email"]').val(), subject: a('input[name="contact_subject"]').val(), message: a('textarea[name="contact_message"]').val()}, function (d) {
                    if (d == "success") {
                        b.fadeOut("fast", function () {
                            b.siblings(".error").hide();
                            b.siblings(".success").show();
                            a('input[name="contact_email"]').val("");
                            a('input[name="contact_subject"]').val("");
                            a('textarea[name="contact_message"]').val("");
                            setTimeout(function () {
                                b.fadeIn("fast").siblings(".success").hide()
                            }, 5000)
                        })
                    } else {
                        b.siblings(".error").show()
                    }
                });
                c.preventDefault()
            }
        });
        a(".contact-form-wrap .contact-form").validator({effect: "contact-form"}).submit(function (c) {
            var b = a(this);
            if (!c.isDefaultPrevented()) {
                var d = b.find('input[name="contact_widget_id"]').val();
                a.post(this.action, {token: a('input[name="contact_token_' + d + '"]').val(), _wpnonce: a('input[name="contact_wpnonce_' + d + '"]').val(), name: a('input[name="contact_name_' + d + '"]').val(), email: a('input[name="contact_email_' + d + '"]').val(), subject: a('input[name="contact_subject_' + d + '"]').val(), message: a('textarea[name="contact_message_' + d + '"]').val()}, function (e) {
                    if (e == "success") {
                        b.fadeOut("fast", function () {
                            b.siblings(".error").hide();
                            b.siblings(".success").show();
                            a('input[name="contact_email_' + d + '"]').val("");
                            a('input[name="contact_subject_' + d + '"]').val("");
                            a('textarea[name="contact_message_' + d + '"]').val("");
                            setTimeout(function () {
                                b.fadeIn("fast").siblings(".success").hide()
                            }, 5000)
                        })
                    } else {
                        b.siblings(".error").show()
                    }
                });
                c.preventDefault()
            }
        });
        a(".emailus-form-wrap .contact-form").validator({effect: "contact-form"}).submit(function (c) {
            var b = a(this);
            if (!c.isDefaultPrevented()) {
                var d = b.find('input[name="contact_widget_id"]').val();
                a.post(this.action, {token: a('input[name="contact_token_' + d + '"]').val(), _wpnonce: a('input[name="contact_wpnonce_' + d + '"]').val(), first_name: a('input[name="contact_first_name_' + d + '"]').val(), last_name: a('input[name="contact_last_name_' + d + '"]').val(), email: a('input[name="contact_email_' + d + '"]').val()}, function (e) {
                    if (e == "success") {
                        b.fadeOut("fast", function () {
                            b.siblings(".error").hide();
                            b.siblings(".success").show();
                            a('input[name="contact_first_name_' + d + '"]').val("");
                            a('input[name="contact_last_name_' + d + '"]').val("");
                            a('input[name="email' + d + '"]').val("");
                            setTimeout(function () {
                                b.fadeIn("fast").siblings(".success").hide()
                            }, 5000)
                        })
                    } else {
                        b.siblings(".error").show()
                    }
                });
                c.preventDefault()
            }
        })
    }
    a(".tabs-container").each(function () {
        var b = a(this).attr("data-history");
        if (b != undefined && b == "true") {
            b = true
        } else {
            b = false
        }
        var c = a(this).attr("data-initialIndex");
        if (c == undefined) {
            c = 0
        }
        a("ul.tabs", this).tabs("div.panes > div", {tabs: "a", effect: "fade", fadeOutSpeed: -400, history: b, initialIndex: c})
    });
    if (a.tools != undefined) {
        if (a.tools.tabs != undefined) {
            a.tools.tabs.addEffect("slide", function (c, b) {
                this.getPanes().slideUp();
                this.getPanes().eq(c).slideDown(function () {
                    b.call()
                })
            })
        }
    }
    a(".accordion").each(function () {
        var b = a(this).attr("data-initialIndex");
        if (b == undefined) {
            b = 0
        }
        a(this).tabs("div.pane", {tabs: ".tab", effect: "slide", initialIndex: b})
    });
    a(".toggle-title").click(function () {
        var b = a(this).parent(".toggle");
        if (b.is(".toggle-active")) {
            b.removeClass("toggle-active");
            a(this).siblings(".toggle-content").slideUp("fast")
        } else {
            b.addClass("toggle-active");
            a(this).siblings(".toggle-content").slideDown("fast")
        }
    });
    a(".top a").click(function (b) {
        b.preventDefault();
        a("html, body").animate({scrollTop: 0}, 250)
    });
    if (a("body").is(".scroll-to-top")) {
        a("body").append('<a href="#top" id="to-top" class="btn"></a>');
        a(window).scroll(function () {
            if (a(this).scrollTop() > 400) {
                a("#to-top").fadeIn()
            } else {
                a("#to-top").fadeOut()
            }
        });
        a("#to-top").click(function (b) {
            b.preventDefault();
            a("body, html").animate({scrollTop: 0}, 250)
        })
    }
    a('a.fancybox[href*="http://www.youtube.com/watch?"]', a(this)).each(function () {
        a(this).attr("href", this.href.replace(new RegExp("watch\\?v=", "i"), "v/") + "?autoplay=1")
    });
    a('a.fancybox[href*="http://www.vimeo.com/"]', a(this)).each(function () {
        a(this).attr("href", this.href.replace("www.vimeo.com/", "player.vimeo.com/video/"))
    });
    a('a.fancybox[href*="http://vimeo.com/"]', a(this)).each(function () {
        a(this).attr("href", this.href.replace("vimeo.com/", "player.vimeo.com/video/"))
    });
    a('a.fancybox[href*="http://player.vimeo.com/"]', a(this)).each(function () {
        a(this).removeClass("fancybox").addClass("fancy-video")
    });
    a('a.fancybox[href*="http://www.youtube.com/v/"]', a(this)).each(function () {
        a(this).removeClass("fancybox").addClass("fancy-video")
    });
    a('a.fancybox[href*=".swf"]', a(this)).each(function () {
        a(this).removeClass("fancybox").addClass("fancy-video")
    });
    a(".fancy-video").each(function () {
        var b = a(this).attr("data-width");
        if (b == undefined) {
            b = 854
        }
        var c = a(this).attr("data-height");
        if (c == undefined) {
            c = 480
        }
        a(this).colorbox({iframe: true, innerWidth: parseInt(b), innerHeight: parseInt(c), opacity: 0.5})
    });
    a(".fancy-iframe").each(function () {
        var b = a(this).attr("data-width");
        if (b == undefined) {
            b = 854
        }
        var c = a(this).attr("data-height");
        if (c == undefined) {
            c = 480
        }
        a(this).colorbox({iframe: true, inline: a(this).hasClass("fancy-inline"), innerWidth: parseInt(b), innerHeight: parseInt(c), opacity: 0.5, onComplete: function () {
            jQuery("#colorbox .gmap").trigger("initGmap")
        }})
    });
    a(".fancybox").colorbox({maxWidth: "95%", maxHeight: "85%", opacity: 0.5});
    a("#top-bar .widget_social a.social").attr("data-placement", "bottom");
    if (a("body").hasClass("fixed-header")) {
        a(window).scroll(function () {
            if (a(this).scrollTop() > 400 && !a("#branding").hasClass("fixed")) {
                a("body").css({paddingTop: a("#branding").height()});
                a("#branding").css({top: -a("#branding").height()}).addClass("fixed").animate({top: 0}, 250)
            } else {
                if (a(this).scrollTop() < 200) {
                    a("body").css({paddingTop: 0});
                    a("#branding").removeClass("fixed")
                }
            }
        })
    }
    a(window).resize(function () {
        if (a("body").hasClass("logo-on-top")) {
            if (a(".menu-main-container > ul").width() > a("#branding .inner").width() - a("#searchform").width()) {
                a("#branding").addClass("small")
            } else {
                a("#branding").removeClass("small")
            }
        } else {
            if (a(".menu-main-container > ul").width() > a("#branding .inner").width() - a("#branding hgroup").width() - a("#searchform").width() - 10) {
                a("#branding").addClass("small")
            } else {
                a("#branding").removeClass("small")
            }
        }
    }).resize();
    a(".searchform-icon").click(function () {
        a(this).addClass("focus");
        a("#searchform").animate({width: 220, marginRight: 0}, 200, "easeOutCubic", function () {
            a("#s").focus();
            a(this).css({overflow: "visible"})
        });
        if (a("body").hasClass("logo-on-top") && a("body").width() > 640) {
            if (a(".menu-main-container > ul").width() > a("#branding .inner").width() - 220) {
                a(".menu-main-container").animate({opacity: 0.2, marginLeft: -220, marginRight: 265}, 150)
            }
        } else {
            if (a(".menu-main-container > ul").width() > a("#branding .inner").width() - a("#branding hgroup").width() - a("#searchform").width() - 220) {
                a("#branding").addClass("small")
            }
            if (a("#branding").width() - a("#branding hgroup").width() - 130 < 180) {
                a("#branding hgroup").animate({opacity: 0.2, marginLeft: -180, marginRight: (a("body").width() > 640) ? 0 : 280}, 150)
            }
        }
    });
    a("#s").blur(function () {
        a(".searchform-icon").removeClass("focus");
        a("#searchform").css({overflow: "hidden"}).animate({width: 50, marginRight: -10}, 200, "easeOutCubic", function () {
            a(window).resize()
        });
        if (a("#branding hgroup").css("opacity") != 1) {
            a("#branding hgroup").animate({opacity: 1, marginLeft: 0, marginRight: (a("body").width() > 640) ? 20 : 100}, 250)
        }
        if (a(".menu-main-container").css("opacity") != 1) {
            a(".menu-main-container").animate({opacity: 1, marginLeft: 0, marginRight: 45}, 250)
        }
    });
    a("article").one("mouseenter", function () {
        Socialite.load(a(this)[0])
    });
    a("body").tooltip({selector: "*[data-toggle=tooltip]"})
});
(function (a) {
    a.fn.preloader = function (b) {
        var c = a.extend({}, a.fn.preloader.defaults, b);
        return this.each(function () {
            c.beforeShowAll.call(this);
            var e = a(this);
            var d = e.find(c.imgSelector).css({opacity: 0, visibility: "hidden"});
            var g = d.length;
            var f = function (i, h) {
                if (i.data.source != undefined) {
                    h = i.data.holder;
                    i = i.data.source
                }
                g--;
                if (c.delay <= 0) {
                    i.css("visibility", "visible").animate({opacity: 1}, c.animSpeed, function () {
                        c.afterShow.call(this)
                    })
                }
                if (g == 0) {
                    h.removeData("count");
                    if (c.delay <= 0) {
                        c.afterShowAll.call(h[0])
                    } else {
                        if (c.gradualDelay) {
                            d.each(function (j, l) {
                                var k = a(this);
                                setTimeout(function () {
                                    k.css("visibility", "visible").animate({opacity: 1}, c.animSpeed, function () {
                                        c.afterShow.call(this)
                                    })
                                }, c.delay * (j + 1))
                            });
                            setTimeout(function () {
                                c.afterShowAll.call(h[0])
                            }, c.delay * d.length + c.animSpeed)
                        } else {
                            setTimeout(function () {
                                d.each(function (j, k) {
                                    a(this).css("visibility", "visible").animate({opacity: 1}, c.animSpeed, function () {
                                        c.afterShow.call(this)
                                    })
                                });
                                setTimeout(function () {
                                    c.afterShowAll.call(h[0])
                                }, c.animSpeed)
                            }, c.delay)
                        }
                    }
                }
            };
            if (g == 0) {
                c.afterShowAll.call(this)
            } else {
                d.each(function (h) {
                    c.beforeShow.call(this);
                    image = a(this);
                    if (this.complete == true) {
                        f(image, e)
                    } else {
                        image.bind("error load", {source: image, holder: e}, f);
                        if (a.browser.opera || (a.browser.msie && parseInt(jQuery.browser.version, 10) == 9 && document.documentMode == 9)) {
                            image.trigger("load")
                        }
                    }
                })
            }
        })
    };
    a.fn.preloader.defaults = {delay: 1000, gradualDelay: true, imgSelector: "img", animSpeed: 500, beforeShowAll: function () {
    }, beforeShow: function () {
    }, afterShow: function () {
    }, afterShowAll: function () {
    }}
})(jQuery);
(function (a) {
    a.fn.autoResize = function (d) {
        var c = a.extend({onResize: function () {
        }, animate: true, animateDuration: 150, animateCallback: function () {
        }, extraSpace: 20, limit: 1000}, d);
        this.filter("textarea").each(function () {
            var l = a(this).css({resize: "none", "overflow-y": "hidden"}), b = l.height(), j = (function () {
                var f = ["height", "width", "lineHeight", "textDecoration", "letterSpacing"], g = {};
                a.each(f, function (k, i) {
                    g[i] = l.css(i)
                });
                return l.clone().removeAttr("id").removeAttr("name").css({position: "absolute", top: 0, left: -9999}).css(g).attr("tabIndex", "-1").insertBefore(l)
            })(), e = null, h = function () {
                j.height(0).val(a(this).val()).scrollTop(10000);
                var g = Math.max(j.scrollTop(), b) + c.extraSpace, f = a(this).add(j);
                if (e === g) {
                    return
                }
                e = g;
                if (g >= c.limit) {
                    a(this).css("overflow-y", "");
                    return
                }
                c.onResize.call(this);
                c.animate && l.css("display") === "block" ? f.stop().animate({height: g}, c.animateDuration, c.animateCallback) : f.height(g)
            };
            l.unbind(".dynSiz").bind("keyup.dynSiz", h).bind("keydown.dynSiz", h).bind("change.dynSiz", h)
        });
        return this
    }
})(jQuery);
var moComments;
(function (a) {
    moComments = a.extend(moComments, {init: function () {
        a("#respond").addClass("js");
        a.each(a("#commentform input, textarea#comment"), function () {
            if (a(this).val() !== "") {
                moComments.hideLabels(a(this))
            }
        });
        a("#commentform input").change(function () {
            moComments.toggleLabel(a(this))
        }).focus(function () {
                    moComments.hideLabels(a(this))
                }).blur(function () {
                    moComments.showLabels(a(this))
                });
        a("#commentform label").click(function () {
            moComments.hideLabels(a(this).parent().children("input"))
        });
        a("textarea#comment").autoResize({animate: false}).trigger("change.dynSiz").focus(function () {
            moComments.hideLabels(a(this))
        }).blur(function () {
                    moComments.showLabels(a(this))
                }).keydown(function (b) {
                    if ("undefined" != typeof b.keyCode && 9 == b.keyCode) {
                        b.preventDefault();
                        a("#submit").focus()
                    }
                })
    }, toggleLabel: function (b) {
        if (!b.val().length) {
            b.parents("#commentform p").children("label").css({opacity: 1})
        } else {
            b.parents("#commentform p").children("label").css({opacity: 0.05})
        }
    }, hideLabels: function (b) {
        b.parents("#commentform p").children("label").animate({opacity: 0}, 150, function () {
            a(this).hide()
        });
        b.parent().addClass("active")
    }, showLabels: function (b) {
        if (!b.val().length) {
            b.parents("#commentform p").children("label").show().animate({opacity: 1}, 150)
        }
        b.parent().removeClass("active")
    }})
})(jQuery);
var moContact;
(function (a) {
    moContact = a.extend(moContact, {init: function () {
        a.each(a(".contact-form input, .contact-form textarea"), function () {
            if (a(this).val() !== "") {
                moContact.hideLabels(a(this))
            }
        });
        a(".contact-form input").change(function () {
            moContact.toggleLabel(a(this))
        }).focus(function () {
                    moContact.hideLabels(a(this))
                }).blur(function () {
                    moContact.showLabels(a(this))
                });
        a(".contact-form label").click(function () {
            moContact.hideLabels(a(this).parent().children("input"))
        });
        a(".contact-form textarea").autoResize({animate: false}).trigger("change.dynSiz").focus(function () {
            moContact.hideLabels(a(this))
        }).blur(function () {
                    moContact.showLabels(a(this))
                }).keydown(function (b) {
                    if ("undefined" != typeof b.keyCode && 9 == b.keyCode) {
                        b.preventDefault();
                        a(".contact-form .button").focus()
                    }
                })
    }, toggleLabel: function (b) {
        if (!b.val().length) {
            b.parents(".contact-form p").children("label").css({opacity: 1})
        } else {
            b.parents(".contact-form p").children("label").css({opacity: 0.05})
        }
    }, hideLabels: function (b) {
        b.parents(".contact-form p").children("label").animate({opacity: 0}, 150, function () {
            a(this).hide()
        });
        b.parent().addClass("active")
    }, showLabels: function (b) {
        if (!b.val().length) {
            b.parents(".contact-form p").children("label").show().animate({opacity: 1}, 150)
        }
        b.parent().removeClass("active")
    }})
})(jQuery);


/*!
 * Socialite v2.0
 * http://socialitejs.com
 * Copyright (c) 2011 David Bushell
 * Dual-licensed under the BSD or MIT licenses: http://socialitejs.com/license.txt
 */
window.Socialite = (function (f, g, d) {
    var e = 0, a = [], i = {}, h = {}, b = /^($|loaded|complete)/, j = f.encodeURIComponent;
    var c = {settings: {}, trim: function (k) {
        return k.trim ? k.trim() : k.replace(/^\s+|\s+$/g, "")
    }, hasClass: function (k, l) {
        return(" " + k.className + " ").indexOf(" " + l + " ") !== -1
    }, addClass: function (k, l) {
        if (!c.hasClass(k, l)) {
            k.className = (k.className === "") ? l : k.className + " " + l
        }
    }, removeClass: function (k, l) {
        k.className = c.trim(" " + k.className + " ".replace(" " + l + " ", " "))
    }, extendObject: function (o, n, k) {
        for (var m in n) {
            var l = o[m] !== d;
            if (l && typeof n[m] === "object") {
                c.extendObject(o[m], n[m], k)
            } else {
                if (k || !l) {
                    o[m] = n[m]
                }
            }
        }
    }, getElements: function (l, p) {
        var k = 0, o = [], n = !!l.getElementsByClassName, m = n ? l.getElementsByClassName(p) : l.getElementsByTagName("*");
        for (; k < m.length; k++) {
            if (n || c.hasClass(m[k], p)) {
                o.push(m[k])
            }
        }
        return o
    }, getDataAttributes: function (l, s, k) {
        var o = 0, q = "", n = {}, p = l.attributes;
        for (; o < p.length; o++) {
            var r = p[o].name, m = p[o].value;
            if (m.length && r.indexOf("data-") === 0) {
                if (s) {
                    r = r.substring(5)
                }
                if (k) {
                    n[r] = m
                } else {
                    q += j(r) + "=" + j(m) + "&"
                }
            }
        }
        return k ? n : q
    }, copyDataAttributes: function (p, o, n, m) {
        var k = c.getDataAttributes(p, n, true);
        for (var l in k) {
            o.setAttribute(m ? l.replace(/-/g, "_") : l, k[l])
        }
    }, createIframe: function (m, k) {
        var l = g.createElement("iframe");
        l.style.cssText = "overflow: hidden; border: none;";
        c.extendObject(l, {src: m, allowtransparency: "true", frameborder: "0", scrolling: "no"}, true);
        if (k) {
            l.onload = l.onreadystatechange = function () {
                if (b.test(l.readyState || "")) {
                    l.onload = l.onreadystatechange = null;
                    c.activateInstance(k)
                }
            }
        }
        return l
    }, networkReady: function (k) {
        return i[k] ? i[k].loaded : d
    }, appendNetwork: function (k) {
        if (!k || k.appended) {
            return
        }
        if (typeof k.append === "function" && k.append(k) === false) {
            k.appended = k.loaded = true;
            c.activateAll(k);
            return
        }
        if (k.script) {
            k.el = g.createElement("script");
            c.extendObject(k.el, k.script, true);
            k.el.async = true;
            k.el.onload = k.el.onreadystatechange = function () {
                if (b.test(k.el.readyState || "")) {
                    k.el.onload = k.el.onreadystatechange = null;
                    k.loaded = true;
                    if (typeof k.onload === "function" && k.onload(k) === false) {
                        return
                    }
                    c.activateAll(k)
                }
            };
            g.body.appendChild(k.el)
        }
        k.appended = true
    }, removeNetwork: function (k) {
        if (!c.networkReady(k.name)) {
            return false
        }
        k.el.parentNode.removeChild(k.el);
        return !(k.appended = k.loaded = false)
    }, reloadNetwork: function (k) {
        var l = i[k];
        if (l && c.removeNetwork(l)) {
            c.appendNetwork(l)
        }
    }, createInstance: function (l, n) {
        var m = true, k = {el: l, uid: e++, widget: n};
        a.push(k);
        if (n.process !== d) {
            m = (typeof n.process === "function") ? n.process(k) : false
        }
        if (m) {
            c.processInstance(k)
        }
        k.el.setAttribute("data-socialite", k.uid);
        k.el.className = "socialite " + n.name + " socialite-instance";
        return k
    }, processInstance: function (k) {
        var m = k.el;
        k.el = g.createElement("div");
        k.el.className = m.className;
        c.copyDataAttributes(m, k.el);
        if (m.nodeName.toLowerCase() === "a" && !m.getAttribute("data-default-href")) {
            k.el.setAttribute("data-default-href", m.getAttribute("href"))
        }
        var l = m.parentNode;
        l.insertBefore(k.el, m);
        l.removeChild(m)
    }, activateInstance: function (k) {
        if (k && !k.loaded) {
            k.loaded = true;
            if (typeof k.widget.activate === "function") {
                k.widget.activate(k)
            }
            c.addClass(k.el, "socialite-loaded");
            return k.onload ? k.onload(k.el) : null
        }
    }, activateAll: function (m) {
        if (typeof m === "string") {
            m = i[m]
        }
        for (var l = 0; l < a.length; l++) {
            var k = a[l];
            if (k.init && k.widget.network === m) {
                c.activateInstance(k)
            }
        }
    }, load: function (m, n, s, p, l) {
        m = (m && typeof m === "object" && m.nodeType === 1) ? m : g;
        if (!n || typeof n !== "object") {
            c.load(m, c.getElements(m, "socialite"), s, p, l);
            return
        }
        var q;
        if (/Array/.test(Object.prototype.toString.call(n))) {
            for (q = 0; q < n.length; q++) {
                c.load(m, n[q], s, p, l)
            }
            return
        }
        if (n.nodeType !== 1) {
            return
        }
        if (!s || !h[s]) {
            s = null;
            var o = n.className.split(" ");
            for (q = 0; q < o.length; q++) {
                if (h[o[q]]) {
                    s = o[q];
                    break
                }
            }
            if (!s) {
                return
            }
        }
        var u, r = h[s], k = parseInt(n.getAttribute("data-socialite"), 10);
        if (!isNaN(k)) {
            for (q = 0; q < a.length; q++) {
                if (a[q].uid === k) {
                    u = a[q];
                    break
                }
            }
        } else {
            u = c.createInstance(n, r)
        }
        if (l || !u) {
            return
        }
        if (!u.init) {
            u.init = true;
            u.onload = (typeof p === "function") ? p : null;
            r.init(u)
        }
        if (!r.network.appended) {
            c.appendNetwork(r.network)
        } else {
            if (c.networkReady(r.network.name)) {
                c.activateInstance(u)
            }
        }
    }, activate: function (l, k, m) {
        f.Socialite.load(null, l, k, m)
    }, process: function (l, m, k) {
        f.Socialite.load(l, m, k, null, true)
    }, network: function (l, k) {
        i[l] = {name: l, el: null, appended: false, loaded: false, widgets: {}};
        if (k) {
            c.extendObject(i[l], k)
        }
    }, widget: function (m, k, l) {
        l.name = m + "-" + k;
        if (!i[m] || h[l.name]) {
            return
        }
        l.network = i[m];
        i[m].widgets[k] = h[l.name] = l
    }, setup: function (k) {
        c.extendObject(c.settings, k, true)
    }};
    return c
})(window, window.document);
(function (i, j, f, e) {
    f.setup({facebook: {lang: "en_GB", appId: null}, twitter: {lang: "en"}, googleplus: {lang: "en-GB"}, vkontakte: {apiId: 3363546, group: {id: 0, mode: 0, width: 300, height: 290}, like: {type: "button", height: 20}}});
    f.network("facebook", {script: {src: "//connect.facebook.net/{{language}}/all.js", id: "facebook-jssdk"}, append: function (p) {
        var o = j.createElement("div"), n = f.settings.facebook, m = {onlike: "edge.create", onunlike: "edge.remove", onsend: "message.send"};
        o.id = "fb-root";
        j.body.appendChild(o);
        p.script.src = p.script.src.replace("{{language}}", n.lang);
        i.fbAsyncInit = function () {
            i.FB.init({appId: n.appId, xfbml: true});
            for (var q in m) {
                if (typeof n[q] === "function") {
                    i.FB.Event.subscribe(m[q], n[q])
                }
            }
        }
    }});
    f.widget("facebook", "like", {init: function (m) {
        var n = j.createElement("div");
        n.className = "fb-like";
        f.copyDataAttributes(m.el, n);
        m.el.appendChild(n);
        if (i.FB && i.FB.XFBML) {
            i.FB.XFBML.parse(m.el)
        }
    }});
    f.network("twitter", {script: {src: "//platform.twitter.com/widgets.js", id: "twitter-wjs", charset: "utf-8"}, append: function () {
        var o = (typeof i.twttr !== "object"), n = f.settings.twitter, m = ["click", "tweet", "retweet", "favorite", "follow"];
        if (o) {
            i.twttr = (t = {_e: [], ready: function (p) {
                t._e.push(p)
            }})
        }
        i.twttr.ready(function (p) {
            for (var q = 0; q < m.length; q++) {
                var r = m[q];
                if (typeof n["on" + r] === "function") {
                    p.events.bind(r, n["on" + r])
                }
            }
            f.activateAll("twitter")
        });
        return o
    }});
    var h = function (m) {
        var n = j.createElement("a");
        n.className = m.widget.name + "-button";
        f.copyDataAttributes(m.el, n);
        n.setAttribute("href", m.el.getAttribute("data-default-href"));
        n.setAttribute("data-lang", m.el.getAttribute("data-lang") || f.settings.twitter.lang);
        m.el.appendChild(n)
    };
    var b = function (m) {
        if (i.twttr && typeof i.twttr.widgets === "object" && typeof i.twttr.widgets.load === "function") {
            i.twttr.widgets.load()
        }
    };
    f.widget("twitter", "share", {init: h, activate: b});
    f.widget("twitter", "follow", {init: h, activate: b});
    f.widget("twitter", "hashtag", {init: h, activate: b});
    f.widget("twitter", "mention", {init: h, activate: b});
    f.widget("twitter", "embed", {process: function (m) {
        m.innerEl = m.el;
        if (!m.innerEl.getAttribute("data-lang")) {
            m.innerEl.setAttribute("data-lang", f.settings.twitter.lang)
        }
        m.el = j.createElement("div");
        m.el.className = m.innerEl.className;
        m.innerEl.className = "";
        m.innerEl.parentNode.insertBefore(m.el, m.innerEl);
        m.el.appendChild(m.innerEl)
    }, init: function (m) {
        m.innerEl.className = "twitter-tweet"
    }, activate: b});
    f.network("googleplus", {script: {src: "//apis.google.com/js/plusone.js"}, append: function (m) {
        if (i.gapi) {
            return false
        }
        i.___gcfg = {lang: f.settings.googleplus.lang, parsetags: "explicit"}
    }});
    var g = function (m) {
        var n = j.createElement("div");
        n.className = "g-" + m.widget.gtype;
        f.copyDataAttributes(m.el, n);
        m.el.appendChild(n);
        m.gplusEl = n
    };
    var l = function (m, n) {
        return(typeof n !== "function") ? null : function (o) {
            n(m.el, o)
        }
    };
    var c = function (m) {
        var q = m.widget.gtype;
        if (i.gapi && i.gapi[q]) {
            var p = f.settings.googleplus, r = f.getDataAttributes(m.el, true, true), o = ["onstartinteraction", "onendinteraction", "callback"];
            for (var n = 0; n < o.length; n++) {
                r[o[n]] = l(m, p[o[n]])
            }
            i.gapi[q].render(m.gplusEl, r)
        }
    };
    f.widget("googleplus", "one", {init: g, activate: c, gtype: "plusone"});
    f.widget("googleplus", "share", {init: g, activate: c, gtype: "plus"});
    f.widget("googleplus", "badge", {init: g, activate: c, gtype: "plus"});
    f.network("linkedin", {script: {src: "//platform.linkedin.com/in.js"}});
    var k = function (m) {
        var n = j.createElement("script");
        n.type = "IN/" + m.widget.intype;
        f.copyDataAttributes(m.el, n);
        m.el.appendChild(n);
        if (typeof i.IN === "object" && typeof i.IN.parse === "function") {
            i.IN.parse(m.el);
            f.activateInstance(m)
        }
    };
    f.widget("linkedin", "share", {init: k, intype: "Share"});
    f.widget("linkedin", "recommend", {init: k, intype: "RecommendProduct"});
    f.network("pinterest", {script: {src: "//assets.pinterest.com/js/pinit.js"}});
    f.widget("pinterest", "pinit", {process: function (m) {
        if (m.el.nodeName.toLowerCase() !== "a") {
            return true
        }
        var o = "socialite-instance-" + m.uid, n = m.el.getAttribute("href");
        m.el.id = o;
        m.el.href = "#" + o;
        m.el.setAttribute("data-default-href", n);
        m.el.setAttribute("onclick", '(function(){window.open("' + n + '")})();')
    }, init: function (m) {
        f.processInstance(m);
        var n = j.createElement("a");
        n.className = "pin-it-button";
        f.copyDataAttributes(m.el, n);
        n.setAttribute("href", m.el.getAttribute("data-default-href"));
        n.setAttribute("count-layout", m.el.getAttribute("data-count-layout") || "horizontal");
        m.el.appendChild(n);
        if (f.networkReady("pinterest")) {
            f.reloadNetwork("pinterest")
        }
    }});
    /*!
     * Socialite v2.0 - Vkontakte extension
     * http://socialitejs.com
     * Dual-licensed under the BSD or MIT licenses: http://socialitejs.com/license.txt
     */
    var a = [];
    f.network("vkontakte", {script: {src: "//userapi.com/js/api/openapi.js?49", id: "vk-jsapi"}, onload: function (p) {
        var o = f.settings.vkontakte;
        VK.init({apiId: o.apiId, onlyWidgets: true});
        for (var m = 0, n = a.length; m < n; a[m].call(this), m++) {
        }
    }});
    var d = function (r, o, q) {
        var m = {}, p;
        for (var n = 0, s = o.length; n < s; p = o[n], m[p] = r.getAttribute("data-" + p) || q[p], n++) {
        }
        return m
    };
    f.widget("vkontakte", "group", {init: function (m) {
        if (typeof i.VK !== "object") {
            a.push(function () {
                var o = j.createElement("div"), n = f.settings.vkontakte;
                o.className = "vk-group";
                o.id = "vkontakte-group-" + (new Date()).getTime();
                f.copyDataAttributes(m.el, o);
                group = d(m.el, ["id", "mode", "width", "height"], n.group);
                m.el.appendChild(o);
                VK.Widgets.Group(o.id, group, group.id)
            })
        }
    }});
    f.widget("vkontakte", "like", {init: function (m) {
        if (typeof i.VK !== "object") {
            a.push(function () {
                var o = j.createElement("div"), n = f.settings.vkontakte;
                o.className = "vk-like";
                o.id = "vkontakte-like-" + (new Date()).getTime() + Math.random().toString().replace(".", "-");
                f.copyDataAttributes(m.el, o);
                like = d(m.el, ["type", "height"], n.like);
                m.el.appendChild(o);
                VK.Widgets.Like(o.id, like)
            })
        }
    }})
})(window, window.document, window.Socialite);
(function () {
    var c = window._socialite;
    if (/Array/.test(Object.prototype.toString.call(c))) {
        for (var b = 0, a = c.length; b < a; b++) {
            if (typeof c[b] === "function") {
                c[b]()
            }
        }
    }
})();

// ColorBox v1.3.20.1 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function (K, m, Y) {
    var L = {transition: "elastic", speed: 300, width: false, initialWidth: "600", innerWidth: false, maxWidth: false, height: false, initialHeight: "450", innerHeight: false, maxHeight: false, scalePhotos: true, scrolling: true, inline: false, html: false, iframe: false, fastIframe: true, photo: false, href: false, title: false, rel: false, opacity: 0.9, preloading: true, current: "image {current} of {total}", previous: "previous", next: "next", close: "close", xhrError: "This content failed to load.", imgError: "This image failed to load.", open: false, returnFocus: true, reposition: true, loop: true, slideshow: false, slideshowAuto: true, slideshowSpeed: 2500, slideshowStart: "start slideshow", slideshowStop: "stop slideshow", onOpen: false, onLoad: false, onComplete: false, onCleanup: false, onClosed: false, overlayClose: true, escKey: true, arrowKey: true, top: false, bottom: false, left: false, right: false, fixed: false, data: undefined}, y = "colorbox", U = "cbox", s = U + "Element", X = U + "_open", e = U + "_load", W = U + "_complete", v = U + "_cleanup", ae = U + "_closed", i = U + "_purge", w = !K.support.opacity && !K.support.style, ah = w && !Y.XMLHttpRequest, ac = U + "_IE6", R, ai, aj, d, I, q, b, Q, c, ab, O, k, h, p, u, Z, t, T, A, C, ag, ak, n, g, a, x, J, o, E, aa, N, B, M, af = "div", ad;

    function H(al, ao, an) {
        var am = m.createElement(al);
        if (ao) {
            am.id = U + ao
        }
        if (an) {
            am.style.cssText = an
        }
        return K(am)
    }

    function F(am) {
        var al = c.length, an = (J + am) % al;
        return(an < 0) ? al + an : an
    }

    function P(al, am) {
        return Math.round((/%/.test(al) ? ((am === "x" ? l() : S()) / 100) : 1) * parseInt(al, 10))
    }

    function D(al) {
        return ag.photo || /\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(al)
    }

    function l() {
        return Y.innerWidth || ab.width()
    }

    function S() {
        return Y.innerHeight || ab.height()
    }

    function V() {
        var al, am = K.data(x, y);
        if (am == null) {
            ag = K.extend({}, L);
            if (console && console.log) {
                console.log("Error: cboxElement missing settings object")
            }
        } else {
            ag = K.extend({}, am)
        }
        for (al in ag) {
            if (K.isFunction(ag[al]) && al.slice(0, 2) !== "on") {
                ag[al] = ag[al].call(x)
            }
        }
        ag.rel = ag.rel || x.rel || K(x).data("rel") || "nofollow";
        ag.href = ag.href || K(x).attr("href");
        ag.title = ag.title || x.title;
        if (typeof ag.href === "string") {
            ag.href = K.trim(ag.href)
        }
    }

    function G(al, am) {
        K.event.trigger(al);
        if (am) {
            am.call(x)
        }
    }

    function z() {
        var am, ao = U + "Slideshow_", ap = "click." + U, aq, an, al;
        if (ag.slideshow && c[1]) {
            aq = function () {
                Z.html(ag.slideshowStop).unbind(ap).bind(W,function () {
                    if (ag.loop || c[J + 1]) {
                        am = setTimeout(M.next, ag.slideshowSpeed)
                    }
                }).bind(e,function () {
                    clearTimeout(am)
                }).one(ap + " " + v, an);
                ai.removeClass(ao + "off").addClass(ao + "on");
                am = setTimeout(M.next, ag.slideshowSpeed)
            };
            an = function () {
                clearTimeout(am);
                Z.html(ag.slideshowStart).unbind([W, e, v, ap].join(" ")).one(ap, function () {
                    M.next();
                    aq()
                });
                ai.removeClass(ao + "on").addClass(ao + "off")
            };
            if (ag.slideshowAuto) {
                aq()
            } else {
                an()
            }
        } else {
            ai.removeClass(ao + "off " + ao + "on")
        }
    }

    function f(al) {
        if (!N) {
            x = al;
            V();
            c = K(x);
            J = 0;
            if (ag.rel !== "nofollow") {
                c = K("." + s).filter(function () {
                    var an = K.data(this, y), am;
                    if (an) {
                        am = K(this).data("rel") || an.rel || this.rel
                    }
                    return(am === ag.rel)
                });
                J = c.index(x);
                if (J === -1) {
                    c = c.add(x);
                    J = c.length - 1
                }
            }
            if (!E) {
                E = aa = true;
                ai.show();
                if (ag.returnFocus) {
                    K(x).blur().one(ae, function () {
                        K(this).focus()
                    })
                }
                R.css({opacity: +ag.opacity, cursor: ag.overlayClose ? "pointer" : "auto"}).show();
                ag.w = P(ag.initialWidth, "x");
                ag.h = P(ag.initialHeight, "y");
                M.position();
                if (ah) {
                    ab.bind("resize." + ac + " scroll." + ac,function () {
                        R.css({width: l(), height: S(), top: ab.scrollTop(), left: ab.scrollLeft()})
                    }).trigger("resize." + ac)
                }
                G(X, ag.onOpen);
                C.add(p).hide();
                A.html(ag.close).show()
            }
            M.load(true)
        }
    }

    function r() {
        if (!ai && m.body) {
            ad = false;
            ab = K(Y);
            ai = H(af).attr({id: y, "class": w ? U + (ah ? "IE6" : "IE") : ""}).hide();
            R = H(af, "Overlay", ah ? "position:absolute" : "").hide();
            h = H(af, "LoadingOverlay").add(H(af, "LoadingGraphic"));
            aj = H(af, "Wrapper");
            d = H(af, "Content").append(O = H(af, "LoadedContent", "width:0; height:0; overflow:hidden"), p = H(af, "Title"), u = H(af, "Current"), t = H(af, "Next"), T = H(af, "Previous"), Z = H(af, "Slideshow").bind(X, z), A = H(af, "Close"));
            aj.append(H(af).append(H(af, "TopLeft"), I = H(af, "TopCenter"), H(af, "TopRight")), H(af, false, "clear:left").append(q = H(af, "MiddleLeft"), d, b = H(af, "MiddleRight")), H(af, false, "clear:left").append(H(af, "BottomLeft"), Q = H(af, "BottomCenter"), H(af, "BottomRight"))).find("div div").css({"float": "left"});
            k = H(af, false, "position:absolute; width:9999px; visibility:hidden; display:none");
            C = t.add(T).add(u).add(Z);
            K(m.body).append(R, ai.append(aj, k))
        }
    }

    function j() {
        if (ai) {
            if (!ad) {
                ad = true;
                ak = I.height() + Q.height() + d.outerHeight(true) - d.height();
                n = q.width() + b.width() + d.outerWidth(true) - d.width();
                g = O.outerHeight(true);
                a = O.outerWidth(true);
                ai.css({"padding-bottom": ak, "padding-right": n});
                t.click(function () {
                    M.next()
                });
                T.click(function () {
                    M.prev()
                });
                A.click(function () {
                    M.close()
                });
                R.click(function () {
                    if (ag.overlayClose) {
                        M.close()
                    }
                });
                K(m).bind("keydown." + U, function (am) {
                    var al = am.keyCode;
                    if (E && ag.escKey && al === 27) {
                        am.preventDefault();
                        M.close()
                    }
                    if (E && ag.arrowKey && c[1]) {
                        if (al === 37) {
                            am.preventDefault();
                            T.click()
                        } else {
                            if (al === 39) {
                                am.preventDefault();
                                t.click()
                            }
                        }
                    }
                });
                K("." + s, m).live("click", function (al) {
                    if (!(al.which > 1 || al.shiftKey || al.altKey || al.metaKey)) {
                        al.preventDefault();
                        f(this)
                    }
                })
            }
            return true
        }
        return false
    }

    if (K.colorbox) {
        return
    }
    K(r);
    M = K.fn[y] = K[y] = function (al, an) {
        var am = this;
        al = al || {};
        r();
        if (j()) {
            if (!am[0]) {
                if (am.selector) {
                    return am
                }
                am = K("<a/>");
                al.open = true
            }
            if (an) {
                al.onComplete = an
            }
            am.each(function () {
                K.data(this, y, K.extend({}, K.data(this, y) || L, al))
            }).addClass(s);
            if ((K.isFunction(al.open) && al.open.call(am)) || al.open) {
                f(am[0])
            }
        }
        return am
    };
    M.position = function (an, ap) {
        var ar, au = 0, am = 0, aq = ai.offset(), al, ao;
        ab.unbind("resize." + U);
        ai.css({top: -90000, left: -90000});
        al = ab.scrollTop();
        ao = ab.scrollLeft();
        if (ag.fixed && !ah) {
            aq.top -= al;
            aq.left -= ao;
            ai.css({position: "fixed"})
        } else {
            au = al;
            am = ao;
            ai.css({position: "absolute"})
        }
        if (ag.right !== false) {
            am += Math.max(l() - ag.w - a - n - P(ag.right, "x"), 0)
        } else {
            if (ag.left !== false) {
                am += P(ag.left, "x")
            } else {
                am += Math.round(Math.max(l() - ag.w - a - n, 0) / 2)
            }
        }
        if (ag.bottom !== false) {
            au += Math.max(S() - ag.h - g - ak - P(ag.bottom, "y"), 0)
        } else {
            if (ag.top !== false) {
                au += P(ag.top, "y")
            } else {
                au += Math.round(Math.max(S() - ag.h - g - ak, 0) / 2)
            }
        }
        ai.css({top: aq.top, left: aq.left});
        an = (ai.width() === ag.w + a && ai.height() === ag.h + g) ? 0 : an || 0;
        aj[0].style.width = aj[0].style.height = "9999px";
        function at(av) {
            I[0].style.width = Q[0].style.width = d[0].style.width = av.style.width;
            d[0].style.height = q[0].style.height = b[0].style.height = av.style.height
        }

        ar = {width: ag.w + a, height: ag.h + g, top: au, left: am};
        if (an === 0) {
            ai.css(ar)
        }
        ai.dequeue().animate(ar, {duration: an, complete: function () {
            at(this);
            aa = false;
            aj[0].style.width = (ag.w + a + n) + "px";
            aj[0].style.height = (ag.h + g + ak) + "px";
            if (ag.reposition) {
                setTimeout(function () {
                    ab.bind("resize." + U, M.position)
                }, 1)
            }
            if (ap) {
                ap()
            }
        }, step: function () {
            at(this)
        }})
    };
    M.resize = function (al) {
        if (E) {
            al = al || {};
            if (al.width) {
                ag.w = P(al.width, "x") - a - n
            }
            if (al.innerWidth) {
                ag.w = P(al.innerWidth, "x")
            }
            O.css({width: ag.w});
            if (al.height) {
                ag.h = P(al.height, "y") - g - ak
            }
            if (al.innerHeight) {
                ag.h = P(al.innerHeight, "y")
            }
            if (!al.innerHeight && !al.height) {
                O.css({height: "auto"});
                ag.h = O.height()
            }
            O.css({height: ag.h});
            M.position(ag.transition === "none" ? 0 : ag.speed)
        }
    };
    M.prep = function (am) {
        if (!E) {
            return
        }
        var ap, an = ag.transition === "none" ? 0 : ag.speed;
        O.remove();
        O = H(af, "LoadedContent").append(am);
        function al() {
            ag.w = ag.w || O.width();
            ag.w = ag.mw && ag.mw < ag.w ? ag.mw : ag.w;
            return ag.w
        }

        function ao() {
            ag.h = ag.h || O.height();
            ag.h = ag.mh && ag.mh < ag.h ? ag.mh : ag.h;
            return ag.h
        }

        O.hide().appendTo(k.show()).css({width: al(), overflow: ag.scrolling ? "auto" : "hidden"}).css({height: ao()}).prependTo(d);
        k.hide();
        K(o).css({"float": "none"});
        if (ah) {
            K("select").not(ai.find("select")).filter(function () {
                return this.style.visibility !== "hidden"
            }).css({visibility: "hidden"}).one(v, function () {
                this.style.visibility = "inherit"
            })
        }
        ap = function () {
            var aB, ay, az = c.length, av, aA = "frameBorder", au = "allowTransparency", ar, aq, ax, aw;
            if (!E) {
                return
            }
            function at() {
                if (w) {
                    ai[0].style.removeAttribute("filter")
                }
            }

            ar = function () {
                clearTimeout(B);
                h.detach().hide();
                G(W, ag.onComplete)
            };
            if (w) {
                if (o) {
                    O.fadeIn(100)
                }
            }
            p.html(ag.title).add(O).show();
            if (az > 1) {
                if (typeof ag.current === "string") {
                    u.html(ag.current.replace("{current}", J + 1).replace("{total}", az)).show()
                }
                t[(ag.loop || J < az - 1) ? "show" : "hide"]().html(ag.next);
                T[(ag.loop || J) ? "show" : "hide"]().html(ag.previous);
                if (ag.slideshow) {
                    Z.show()
                }
                if (ag.preloading) {
                    aB = [F(-1), F(1)];
                    while (ay = c[aB.pop()]) {
                        aw = K.data(ay, y);
                        if (aw && aw.href) {
                            aq = aw.href;
                            if (K.isFunction(aq)) {
                                aq = aq.call(ay)
                            }
                        } else {
                            aq = ay.href
                        }
                        if (D(aq)) {
                            ax = new Image();
                            ax.src = aq
                        }
                    }
                }
            } else {
                C.hide()
            }
            if (ag.iframe) {
                av = H("iframe")[0];
                if (aA in av) {
                    av[aA] = 0
                }
                if (au in av) {
                    av[au] = "true"
                }
                if (!ag.scrolling) {
                    av.scrolling = "no"
                }
                K(av).attr({src: ag.href, name: (new Date()).getTime(), "class": U + "Iframe", allowFullScreen: true, webkitAllowFullScreen: true, mozallowfullscreen: true}).one("load", ar).one(i,function () {
                    av.src = "//about:blank"
                }).appendTo(O);
                if (ag.fastIframe) {
                    K(av).trigger("load")
                }
            } else {
                ar()
            }
            if (ag.transition === "fade") {
                ai.fadeTo(an, 1, at)
            } else {
                at()
            }
        };
        if (ag.transition === "fade") {
            ai.fadeTo(an, 0, function () {
                M.position(0, ap)
            })
        } else {
            M.position(an, ap)
        }
    };
    M.load = function (an) {
        var am, ao, al = M.prep;
        aa = true;
        o = false;
        x = c[J];
        if (!an) {
            V()
        }
        G(i);
        G(e, ag.onLoad);
        ag.h = ag.height ? P(ag.height, "y") - g - ak : ag.innerHeight && P(ag.innerHeight, "y");
        ag.w = ag.width ? P(ag.width, "x") - a - n : ag.innerWidth && P(ag.innerWidth, "x");
        ag.mw = ag.w;
        ag.mh = ag.h;
        if (ag.maxWidth) {
            ag.mw = P(ag.maxWidth, "x") - a - n;
            ag.mw = ag.w && ag.w < ag.mw ? ag.w : ag.mw
        }
        if (ag.maxHeight) {
            ag.mh = P(ag.maxHeight, "y") - g - ak;
            ag.mh = ag.h && ag.h < ag.mh ? ag.h : ag.mh
        }
        am = ag.href;
        B = setTimeout(function () {
            h.show().appendTo(d)
        }, 100);
        if (ag.inline) {
            H(af).hide().insertBefore(K(am)[0]).one(i, function () {
                K(this).replaceWith(O.children())
            });
            al(K(am))
        } else {
            if (ag.iframe) {
                al(" ")
            } else {
                if (ag.html) {
                    al(ag.html)
                } else {
                    if (D(am)) {
                        K(o = new Image()).addClass(U + "Photo").error(function () {
                            ag.title = false;
                            al(H(af, "Error").html(ag.imgError))
                        }).load(function () {
                            var ap;
                            o.onload = null;
                            if (ag.scalePhotos) {
                                ao = function () {
                                    o.height -= o.height * ap;
                                    o.width -= o.width * ap
                                };
                                if (ag.mw && o.width > ag.mw) {
                                    ap = (o.width - ag.mw) / o.width;
                                    ao()
                                }
                                if (ag.mh && o.height > ag.mh) {
                                    ap = (o.height - ag.mh) / o.height;
                                    ao()
                                }
                            }
                            if (ag.h) {
                                o.style.marginTop = Math.max(ag.h - o.height, 0) / 2 + "px"
                            }
                            if (c[1] && (ag.loop || c[J + 1])) {
                                o.style.cursor = "pointer";
                                o.onclick = function () {
                                    M.next()
                                }
                            }
                            if (w) {
                                o.style.msInterpolationMode = "bicubic"
                            }
                            setTimeout(function () {
                                al(o)
                            }, 1)
                        });
                        setTimeout(function () {
                            o.src = am
                        }, 1)
                    } else {
                        if (am) {
                            k.load(am, ag.data, function (aq, ap, ar) {
                                al(ap === "error" ? H(af, "Error").html(ag.xhrError) : K(this).contents())
                            })
                        }
                    }
                }
            }
        }
    };
    M.next = function () {
        if (!aa && c[1] && (ag.loop || c[J + 1])) {
            J = F(1);
            M.load()
        }
    };
    M.prev = function () {
        if (!aa && c[1] && (ag.loop || J)) {
            J = F(-1);
            M.load()
        }
    };
    M.close = function () {
        if (E && !N) {
            N = true;
            E = false;
            G(v, ag.onCleanup);
            ab.unbind("." + U + " ." + ac);
            R.fadeTo(200, 0);
            ai.stop().fadeTo(300, 0, function () {
                ai.add(R).css({opacity: 1, cursor: "auto"}).hide();
                G(i);
                O.remove();
                setTimeout(function () {
                    N = false;
                    G(ae, ag.onClosed)
                }, 1)
            })
        }
    };
    M.remove = function () {
        K([]).add(ai).add(R).remove();
        ai = null;
        K("." + s).removeData(y).removeClass(s).die()
    };
    M.element = function () {
        return K(x)
    };
    M.settings = L
}(jQuery, document, window));

/*
 * jQuery Tools History
 */
(function (d) {
    var f, c, b, a;
    d.tools = d.tools || {version: "@VERSION"};
    d.tools.history = {init: function (g) {
        if (a) {
            return
        }
        if (d.browser.msie && d.browser.version < "8") {
            if (!c) {
                c = d("<iframe/>").attr("src", "javascript:false;").hide().get(0);
                d("body").prepend(c);
                setInterval(function () {
                    var i = c.contentWindow.document, j = i.location.hash;
                    if (f !== j) {
                        d(window).trigger("hash", j)
                    }
                }, 100);
                e(location.hash || "#")
            }
        } else {
            setInterval(function () {
                var i = location.hash;
                if (i !== f) {
                    d(window).trigger("hash", i)
                }
            }, 100)
        }
        b = !b ? g : b.add(g);
        g.click(function (i) {
            var h = d(this).attr("href");
            if (c) {
                e(h)
            }
            if (h.slice(0, 1) != "#") {
                location.href = "#" + h;
                return i.preventDefault()
            }
        });
        a = true
    }};
    function e(g) {
        if (g) {
            var i = c.contentWindow.document;
            i.open().close();
            i.location.hash = g
        }
    }

    d(window).bind("hash", function (i, g) {
        if (g) {
            b.filter(function () {
                var h = d(this).attr("href");
                return h == g || h == g.replace("#", "")
            }).trigger("history", [g])
        } else {
            b.eq(0).trigger("history", [g])
        }
        f = g
    });
    d.fn.history = function (g) {
        d.tools.history.init(this);
        return this.bind("history", g)
    }
})(jQuery);

/*
 * jQuery Tools Tabs
 */
(function (e) {
    e.tools = e.tools || {version: "@VERSION"};
    e.tools.tabs = {conf: {tabs: "a", current: "current", onBeforeClick: null, onClick: null, effect: "default", initialIndex: 0, event: "click", rotate: false, slideUpSpeed: 400, slideDownSpeed: 400, history: false}, addEffect: function (f, g) {
        d[f] = g
    }};
    var d = {"default": function (g, f) {
        this.getPanes().hide().eq(g).show();
        f.call()
    }, fade: function (h, f) {
        var g = this.getConf(), k = g.fadeOutSpeed, j = this.getPanes();
        if (k) {
            j.fadeOut(k)
        } else {
            j.hide()
        }
        j.eq(h).fadeIn(g.fadeInSpeed, f)
    }, slide: function (h, f) {
        var g = this.getConf();
        this.getPanes().slideUp(g.slideUpSpeed);
        this.getPanes().eq(h).slideDown(g.slideDownSpeed, f)
    }, ajax: function (g, f) {
        this.getPanes().eq(0).load(this.getTabs().eq(g).attr("href"), f)
    }};
    var c, b;
    e.tools.tabs.addEffect("horizontal", function (h, f) {
        if (c) {
            return
        }
        var g = this.getPanes().eq(h), j = this.getCurrentPane();
        b || (b = this.getPanes().eq(0).width());
        c = true;
        g.show();
        j.animate({width: 0}, {step: function (i) {
            g.css("width", b - i)
        }, complete: function () {
            e(this).hide();
            f.call();
            c = false
        }});
        if (!j.length) {
            f.call();
            c = false
        }
    });
    function a(f, k, i) {
        var g = this, h = f.add(this), j = f.find(i.tabs), l = k.jquery ? k : f.children(k), m;
        if (!j.length) {
            j = f.children()
        }
        if (!l.length) {
            l = f.parent().find(k)
        }
        if (!l.length) {
            l = e(k)
        }
        e.extend(this, {click: function (n, q) {
            var o = j.eq(n);
            if (typeof n == "string" && n.replace("#", "")) {
                o = j.filter("[href*=" + n.replace("#", "") + "]");
                n = Math.max(j.index(o), 0)
            }
            if (i.rotate) {
                var p = j.length - 1;
                if (n < 0) {
                    return g.click(p, q)
                }
                if (n > p) {
                    return g.click(0, q)
                }
            }
            if (!o.length) {
                if (m >= 0) {
                    return g
                }
                n = i.initialIndex;
                o = j.eq(n)
            }
            if (n === m) {
                return g
            }
            q = q || e.Event();
            q.type = "onBeforeClick";
            h.trigger(q, [n]);
            if (q.isDefaultPrevented()) {
                return
            }
            d[i.effect].call(g, n, function () {
                m = n;
                q.type = "onClick";
                h.trigger(q, [n])
            });
            j.removeClass(i.current);
            o.addClass(i.current);
            return g
        }, getConf: function () {
            return i
        }, getTabs: function () {
            return j
        }, getPanes: function () {
            return l
        }, getCurrentPane: function () {
            return l.eq(m)
        }, getCurrentTab: function () {
            return j.eq(m)
        }, getIndex: function () {
            return m
        }, next: function () {
            return g.click(m + 1)
        }, prev: function () {
            return g.click(m - 1)
        }, destroy: function () {
            j.unbind(i.event).removeClass(i.current);
            l.find("a[href^=#]").unbind("click.T");
            return g
        }});
        e.each("onBeforeClick,onClick".split(","), function (o, n) {
            if (e.isFunction(i[n])) {
                e(g).bind(n, i[n])
            }
            g[n] = function (p) {
                if (p) {
                    e(g).bind(n, p)
                }
                return g
            }
        });
        if (i.history && e.fn.history) {
            e.tools.history.init(j);
            i.event = "history"
        }
        j.each(function (n) {
            e(this).bind(i.event, function (o) {
                g.click(n, o);
                return o.preventDefault()
            })
        });
        l.find("a[href^=#]").bind("click.T", function (n) {
            g.click(e(this).attr("href"), n)
        });
        if (location.hash && i.tabs == "a" && f.find("[href=" + location.hash + "]").length) {
            g.click(location.hash)
        } else {
            if (i.initialIndex === 0 || i.initialIndex > 0) {
                g.click(i.initialIndex)
            }
        }
    }

    e.fn.tabs = function (g, f) {
        var h = this.data("tabs");
        if (h) {
            h.destroy();
            this.removeData("tabs")
        }
        if (e.isFunction(f)) {
            f = {onBeforeClick: f}
        }
        f = e.extend({}, e.tools.tabs.conf, f);
        this.each(function () {
            h = new a(e(this), g, f);
            e(this).data("tabs", h)
        });
        return f.api ? h : this
    }
})(jQuery);
(function (c) {
    var a;
    a = c.tools.tabs.slideshow = {conf: {next: ".forward", prev: ".backward", disabledClass: "disabled", autoplay: false, autopause: true, interval: 3000, clickable: true, api: false}};
    function b(l, j) {
        var o = this, f = l.add(this), k = l.data("tabs"), e, d = true;

        function i(q) {
            var p = c(q);
            return p.length < 2 ? p : l.parent().find(q)
        }

        var n = i(j.next).click(function () {
            k.next()
        });
        var m = i(j.prev).click(function () {
            k.prev()
        });

        function h() {
            e = setTimeout(function () {
                k.next()
            }, j.interval)
        }

        c.extend(o, {getTabs: function () {
            return k
        }, getConf: function () {
            return j
        }, play: function () {
            if (e) {
                return o
            }
            var p = c.Event("onBeforePlay");
            f.trigger(p);
            if (p.isDefaultPrevented()) {
                return o
            }
            d = false;
            f.trigger("onPlay");
            f.bind("onClick", h);
            return o
        }, pause: function () {
            if (!e) {
                return o
            }
            var p = c.Event("onBeforePause");
            f.trigger(p);
            if (p.isDefaultPrevented()) {
                return o
            }
            e = clearTimeout(e);
            f.trigger("onPause");
            f.unbind("onClick", h);
            return o
        }, resume: function () {
            d || o.play()
        }, stop: function () {
            o.pause();
            d = true
        }});
        c.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","), function (q, p) {
            if (c.isFunction(j[p])) {
                c(o).bind(p, j[p])
            }
            o[p] = function (r) {
                return c(o).bind(p, r)
            }
        });
        if (j.autopause) {
            k.getTabs().add(n).add(m).add(k.getPanes()).hover(o.pause, o.resume)
        }
        if (j.autoplay) {
            o.play()
        }
        if (j.clickable) {
            k.getPanes().click(function () {
                k.next()
            })
        }
        if (!k.getConf().rotate) {
            var g = j.disabledClass;
            if (!k.getIndex()) {
                m.addClass(g)
            }
            k.onBeforeClick(function (q, p) {
                m.toggleClass(g, !p);
                n.toggleClass(g, p == k.getTabs().length - 1)
            })
        }
    }

    c.fn.slideshow = function (d) {
        var e = this.data("slideshow");
        if (e) {
            return e
        }
        d = c.extend({}, a.conf, d);
        this.each(function () {
            e = new b(c(this), d);
            c(this).data("slideshow", e)
        });
        return d.api ? e : this
    }
})(jQuery);

/*
 * jQuery Tools Validator
 */
(function (f) {
    f.tools = f.tools || {version: "@VERSION"};
    var j = /\[type=([a-z]+)\]/, h = /^-?[0-9]*(\.[0-9]+)?$/, c = f.tools.dateinput, a = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i, g = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i, i;
    i = f.tools.validator = {conf: {grouped: false, effect: "default", errorClass: "invalid", inputEvent: null, errorInputEvent: "keyup", formEvent: "submit", lang: "en", message: "<div/>", messageAttr: "data-message", messageClass: "error", offset: [0, 0], position: "center right", singleError: false, speed: "normal"}, messages: {"*": {en: "Please correct this value"}}, localize: function (n, m) {
        f.each(m, function (o, p) {
            i.messages[o] = i.messages[o] || {};
            i.messages[o][n] = p
        })
    }, localizeFn: function (m, n) {
        i.messages[m] = i.messages[m] || {};
        f.extend(i.messages[m], n)
    }, fn: function (n, o, m) {
        if (f.isFunction(o)) {
            m = o
        } else {
            if (typeof o == "string") {
                o = {en: o}
            }
            this.messages[n.key || n] = o
        }
        var p = j.exec(n);
        if (p) {
            n = e(p[1])
        }
        k.push([n, m])
    }, addEffect: function (m, n, o) {
        b[m] = [n, o]
    }};
    function l(o, n, q) {
        var t = o.offset().top, p = o.offset().left, r = q.position.split(/,?\s+/), s = r[0], u = r[1];
        t -= n.outerHeight() - q.offset[0];
        p += o.outerWidth() + q.offset[1];
        if (/iPad/i.test(navigator.userAgent)) {
            t -= f(window).scrollTop()
        }
        var v = n.outerHeight() + o.outerHeight();
        if (s == "center") {
            t += v / 2
        }
        if (s == "bottom") {
            t += v
        }
        var m = o.outerWidth();
        if (u == "center") {
            p -= (m + n.outerWidth()) / 2
        }
        if (u == "left") {
            p -= m
        }
        return{top: t, left: p}
    }

    function e(n) {
        function m() {
            return this.getAttribute("type") == n
        }

        m.key = "[type=" + n + "]";
        return m
    }

    var k = [], b = {"default": [function (m) {
        var n = this.getConf();
        f.each(m, function (p, q) {
            var o = q.input;
            o.addClass(n.errorClass);
            var r = o.data("msg.el");
            if (!r) {
                r = f(n.message).addClass(n.messageClass).appendTo(document.body);
                o.data("msg.el", r)
            }
            r.css({visibility: "hidden"}).find("p").remove();
            f.each(q.messages, function (u, t) {
                f("<p/>").html(t).appendTo(r)
            });
            if (r.outerWidth() == r.parent().width()) {
                r.add(r.find("p")).css({display: "inline"})
            }
            var s = l(o, r, n);
            r.css({visibility: "visible", position: "absolute", top: s.top, left: s.left}).fadeIn(n.speed)
        })
    }, function (m) {
        var n = this.getConf();
        m.removeClass(n.errorClass).each(function () {
            var o = f(this).data("msg.el");
            if (o) {
                o.css({visibility: "hidden"})
            }
        })
    }]};
    f.each("email,url,number".split(","), function (n, m) {
        f.expr[":"][m] = function (o) {
            return o.getAttribute("type") === m
        }
    });
    f.fn.oninvalid = function (m) {
        return this[m ? "bind" : "trigger"]("OI", m)
    };
    i.fn(":email", "Please enter a valid email address", function (n, m) {
        return !m || a.test(m)
    });
    i.fn(":url", "Please enter a valid URL", function (n, m) {
        return !m || g.test(m)
    });
    i.fn(":number", "Please enter a numeric value.", function (n, m) {
        return h.test(m)
    });
    i.fn("[max]", "Please enter a value no larger than $1", function (o, n) {
        if (n === "" || c && o.is(":date")) {
            return true
        }
        var m = o.attr("max");
        return parseFloat(n) <= parseFloat(m) ? true : [m]
    });
    i.fn("[min]", "Please enter a value of at least $1", function (o, m) {
        if (m === "" || c && o.is(":date")) {
            return true
        }
        var n = o.attr("min");
        return parseFloat(m) >= parseFloat(n) ? true : [n]
    });
    i.fn("[required]", "Please complete this mandatory field.", function (n, m) {
        if (n.is(":checkbox")) {
            return n.is(":checked")
        }
        return !!m
    });
    i.fn("[pattern]", function (m) {
        var n = new RegExp("^" + m.attr("pattern") + "$");
        return n.test(m.val())
    });
    function d(m, r, p) {
        var o = this, q = r.add(o);
        m = m.not(":button, :image, :reset, :submit");
        r.attr("novalidate", "novalidate");
        function n(x, v, t) {
            if (!p.grouped && x.length) {
                return
            }
            var w;
            if (t === false || f.isArray(t)) {
                w = i.messages[v.key || v] || i.messages["*"];
                w = w[p.lang] || i.messages["*"].en;
                var u = w.match(/\$\d/g);
                if (u && f.isArray(t)) {
                    f.each(u, function (y) {
                        w = w.replace(this, t[y])
                    })
                }
            } else {
                w = t[p.lang] || t
            }
            x.push(w)
        }

        f.extend(o, {getConf: function () {
            return p
        }, getForm: function () {
            return r
        }, getInputs: function () {
            return m
        }, reflow: function () {
            m.each(function () {
                var t = f(this), u = t.data("msg.el");
                if (u) {
                    var v = l(t, u, p);
                    u.css({top: v.top, left: v.left})
                }
            });
            return o
        }, invalidate: function (t, u) {
            if (!u) {
                var v = [];
                f.each(t, function (x, y) {
                    var w = m.filter("[name='" + x + "']");
                    if (w.length) {
                        w.trigger("OI", [y]);
                        v.push({input: w, messages: [y]})
                    }
                });
                t = v;
                u = f.Event()
            }
            u.type = "onFail";
            q.trigger(u, [t]);
            if (!u.isDefaultPrevented()) {
                b[p.effect][0].call(o, t, u)
            }
            return o
        }, reset: function (t) {
            t = t || m;
            t.removeClass(p.errorClass).each(function () {
                var u = f(this).data("msg.el");
                if (u) {
                    u.remove();
                    f(this).data("msg.el", null)
                }
            }).unbind(p.errorInputEvent || "");
            return o
        }, destroy: function () {
            r.unbind(p.formEvent + ".V").unbind("reset.V");
            m.unbind(p.inputEvent + ".V").unbind("change.V");
            return o.reset()
        }, checkValidity: function (u, w) {
            u = u || m;
            u = u.not(":disabled");
            if (!u.length) {
                return true
            }
            w = w || f.Event();
            w.type = "onBeforeValidate";
            q.trigger(w, [u]);
            if (w.isDefaultPrevented()) {
                return w.result
            }
            var t = [];
            u.not(":radio:not(:checked)").each(function () {
                var z = [], x = f(this).data("messages", z), y = c && x.is(":date") ? "onHide.v" : p.errorInputEvent + ".v";
                x.unbind(y);
                f.each(k, function () {
                    var C = this, A = C[0];
                    if (x.filter(A).length) {
                        var B = C[1].call(o, x, x.val());
                        if (B !== true) {
                            w.type = "onBeforeFail";
                            q.trigger(w, [x, A]);
                            if (w.isDefaultPrevented()) {
                                return false
                            }
                            var D = x.attr(p.messageAttr);
                            if (D) {
                                z = [D];
                                return false
                            } else {
                                n(z, A, B)
                            }
                        }
                    }
                });
                if (z.length) {
                    t.push({input: x, messages: z});
                    x.trigger("OI", [z]);
                    if (p.errorInputEvent) {
                        x.bind(y, function (A) {
                            o.checkValidity(x, A)
                        })
                    }
                }
                if (p.singleError && t.length) {
                    return false
                }
            });
            var v = b[p.effect];
            if (!v) {
                throw'Validator: cannot find effect "' + p.effect + '"'
            }
            if (t.length) {
                o.invalidate(t, w);
                return false
            } else {
                v[1].call(o, u, w);
                w.type = "onSuccess";
                q.trigger(w, [u]);
                u.unbind(p.errorInputEvent + ".v")
            }
            return true
        }});
        f.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","), function (u, t) {
            if (f.isFunction(p[t])) {
                f(o).bind(t, p[t])
            }
            o[t] = function (v) {
                if (v) {
                    f(o).bind(t, v)
                }
                return o
            }
        });
        if (p.formEvent) {
            r.bind(p.formEvent + ".V", function (t) {
                if (!o.checkValidity(null, t)) {
                    return t.preventDefault()
                }
                t.target = r;
                t.type = p.formEvent
            })
        }
        r.bind("reset.V", function () {
            o.reset()
        });
        if (m[0] && m[0].validity) {
            m.each(function () {
                this.oninvalid = function () {
                    return false
                }
            })
        }
        if (r[0]) {
            r[0].checkValidity = o.checkValidity
        }
        if (p.inputEvent) {
            m.bind(p.inputEvent + ".V", function (t) {
                o.checkValidity(f(this), t)
            })
        }
        m.filter(":checkbox, select").filter("[required]").bind("change.V", function (u) {
            var t = f(this);
            if (this.checked || (t.is("select") && f(this).val())) {
                b[p.effect][1].call(o, t, u)
            }
        });
        var s = m.filter(":radio").change(function (t) {
            o.checkValidity(s, t)
        });
        f(window).resize(function () {
            o.reflow()
        })
    }

    f.fn.validator = function (n) {
        var m = this.data("validator");
        if (m) {
            m.destroy();
            this.removeData("validator")
        }
        n = f.extend(true, {}, i.conf, n);
        if (this.is("form")) {
            return this.each(function () {
                var o = f(this);
                m = new d(o.find(":input"), o, n);
                o.data("validator", m)
            })
        } else {
            m = new d(this, this.eq(0).closest("form"), n);
            return this.data("validator", m)
        }
    }
})(jQuery);

/**
 * hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 */
(function (a) {
    a.fn.hoverIntent = function (l, k, d) {
        var m = {sensitivity: 7, interval: 100, timeout: 0};
        m = a.extend(m, k ? {over: l, out: k} : l);
        var o, n, i, h;
        var e = function (f) {
            o = f.pageX;
            n = f.pageY
        };
        var c = function (g, f) {
            f.hoverIntent_t = clearTimeout(f.hoverIntent_t);
            if ((Math.abs(i - o) + Math.abs(h - n)) < m.sensitivity) {
                a(f).unbind("mousemove", e);
                f.hoverIntent_s = 1;
                return m.over.apply(f, [g])
            } else {
                i = o;
                h = n;
                f.hoverIntent_t = setTimeout(function () {
                    c(g, f)
                }, m.interval)
            }
        };
        var j = function (g, f) {
            f.hoverIntent_t = clearTimeout(f.hoverIntent_t);
            f.hoverIntent_s = 0;
            return m.out.apply(f, [g])
        };
        var b = function (p) {
            var g = jQuery.extend({}, p);
            var f = this;
            if (f.hoverIntent_t) {
                f.hoverIntent_t = clearTimeout(f.hoverIntent_t)
            }
            if (p.type == "mouseenter") {
                i = g.pageX;
                h = g.pageY;
                a(f).bind("mousemove", e);
                if (f.hoverIntent_s != 1) {
                    f.hoverIntent_t = setTimeout(function () {
                        c(g, f)
                    }, m.interval)
                }
            } else {
                a(f).unbind("mousemove", e);
                if (f.hoverIntent_s == 1) {
                    f.hoverIntent_t = setTimeout(function () {
                        j(g, f)
                    }, m.timeout)
                }
            }
        };
        if (d) {
            return a(this).on({mouseenter: b, mouseleave: b}, d)
        } else {
            return this.bind("mouseenter", b).bind("mouseleave", b)
        }
    }
})(jQuery);

/*
 * Superfish v1.5.1 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 */
(function (b) {
    b.fn.superfish = function (h) {
        var i = b.fn.superfish, k = i.c, l = b('<span class="' + k.arrowClass + '"> &#187;</span>'), j = function (m) {
            var c = b(this), n = e(c);
            clearTimeout(n.sfTimer);
            c.showSuperfishUl().siblings().hideSuperfishUl()
        }, f = function () {
            var c = b(this), n = e(c), m = i.op;
            clearTimeout(n.sfTimer);
            n.sfTimer = setTimeout(function () {
                m.retainPath = (b.inArray(c[0], m.$path) > -1);
                c.hideSuperfishUl();
                if (m.$path.length && c.parents("li." + m.hoverClass).length < 1) {
                    m.onIdle.call(this);
                    j.call(m.$path)
                }
            }, m.delay)
        }, e = function (c) {
            if (c.hasClass(k.menuClass)) {
                b.error("Superfish requires you to update to a version of hoverIntent that supports event-delegation, such as this one: https://github.com/joeldbirch/onHoverIntent")
            }
            var m = c.closest("." + k.menuClass)[0];
            i.op = i.o[m.serial];
            return m
        }, g = function (m) {
            var c = "li:has(ul)";
            if (b.fn.hoverIntent && !i.op.disableHI) {
                m.hoverIntent(j, f, c)
            } else {
                m.on("mouseenter", c, j);
                m.on("mouseleave", c, f)
            }
            m.on("focusin", c, j);
            m.on("focusout", c, f)
        }, d = function (c) {
            c.addClass(k.anchorClass).append(l.clone())
        };
        return this.addClass(k.menuClass).each(function () {
            var m = this.serial = i.o.length;
            var n = b.extend({}, i.defaults, h);
            var c = b(this);
            n.$path = c.find("li." + n.pathClass).slice(0, n.pathLevels).each(function () {
                b(this).addClass(n.hoverClass + " " + k.bcClass).filter("li:has(ul)").removeClass(n.pathClass)
            });
            i.o[m] = i.op = n;
            g(c);
            c.find("li:has(ul)").each(function () {
                if (n.autoArrows) {
                    d(b(">a:first-child", this))
                }
            }).not("." + k.bcClass).hideSuperfishUl();
            n.onInit.call(this)
        })
    };
    var a = b.fn.superfish;
    a.o = [];
    a.op = {};
    a.c = {bcClass: "sf-breadcrumb", menuClass: "sf-js-enabled", anchorClass: "sf-with-ul", arrowClass: "sf-sub-indicator"};
    a.defaults = {hoverClass: "sfHover", pathClass: "overideThisToUse", pathLevels: 1, delay: 800, animation: {opacity: "show"}, speed: "normal", autoArrows: true, disableHI: false, onInit: function () {
    }, onBeforeShow: function () {
    }, onShow: function () {
    }, onHide: function () {
    }, onIdle: function () {
    }};
    b.fn.extend({hideSuperfishUl: function () {
        var e = a.op, d = (e.retainPath === true) ? e.$path : "";
        e.retainPath = false;
        var c = b("li." + e.hoverClass, this).add(this).not(d).removeClass(e.hoverClass).find(">ul").hide().css("visibility", "hidden");
        e.onHide.call(c);
        return this
    }, showSuperfishUl: function () {
        var d = a.op, c = this.addClass(d.hoverClass).find(">ul:hidden").css("visibility", "visible");
        d.onBeforeShow.call(c);
        c.animate(d.animation, d.speed, function () {
            d.onShow.call(c)
        });
        return this
    }})
})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {def: "easeOutQuad", swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
}, easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a
}, easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a
}, easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f + a
    }
    return -h / 2 * ((--f) * (f - 2) - 1) + a
}, easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a
}, easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a
}, easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f * f + a
    }
    return h / 2 * ((f -= 2) * f * f + 2) + a
}, easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a
}, easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a
}, easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f * f * f + a
    }
    return -h / 2 * ((f -= 2) * f * f * f - 2) + a
}, easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a
}, easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a
}, easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f * f * f * f + a
    }
    return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
}, easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
}, easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin(f / g * (Math.PI / 2)) + a
}, easeInOutSine: function (e, f, a, h, g) {
    return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
}, easeInExpo: function (e, f, a, h, g) {
    return(f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
}, easeOutExpo: function (e, f, a, h, g) {
    return(f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
}, easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
        return a
    }
    if (f == g) {
        return a + h
    }
    if ((f /= g / 2) < 1) {
        return h / 2 * Math.pow(2, 10 * (f - 1)) + a
    }
    return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
}, easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
}, easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
}, easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
    }
    return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
}, easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
        return e
    }
    if ((h /= k) == 1) {
        return e + l
    }
    if (!j) {
        j = k * 0.3
    }
    if (g < Math.abs(l)) {
        g = l;
        var i = j / 4
    } else {
        var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
}, easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
        return e
    }
    if ((h /= k) == 1) {
        return e + l
    }
    if (!j) {
        j = k * 0.3
    }
    if (g < Math.abs(l)) {
        g = l;
        var i = j / 4
    } else {
        var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
}, easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
        return e
    }
    if ((h /= k / 2) == 2) {
        return e + l
    }
    if (!j) {
        j = k * (0.3 * 1.5)
    }
    if (g < Math.abs(l)) {
        g = l;
        var i = j / 4
    } else {
        var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    if (h < 1) {
        return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    }
    return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
}, easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
        g = 1.70158
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a
}, easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
        g = 1.70158
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
}, easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
        g = 1.70158
    }
    if ((f /= h / 2) < 1) {
        return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
    }
    return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
}, easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
}, easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < (1 / 2.75)) {
        return h * (7.5625 * f * f) + a
    } else {
        if (f < (2 / 2.75)) {
            return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
        } else {
            if (f < (2.5 / 2.75)) {
                return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
            } else {
                return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
            }
        }
    }
}, easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
        return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
    }
    return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
}});

/* ===========================================================
 * bootstrap-transition.js v2.3.0
 * ========================================================== */
!function (a) {
    a(function () {
        a.support.transition = (function () {
            var b = (function () {
                var e = document.createElement("bootstrap"), d = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"}, c;
                for (c in d) {
                    if (e.style[c] !== undefined) {
                        return d[c]
                    }
                }
            }());
            return b && {end: b}
        })()
    })
}(window.jQuery);

/* ===========================================================
 * bootstrap-alert.js v2.3.0
 * ========================================================== */
!function (d) {
    var c = '[data-dismiss="alert"]', b = function (e) {
        d(e).on("click", c, this.close)
    };
    b.prototype.close = function (j) {
        var i = d(this), g = i.attr("data-target"), h;
        if (!g) {
            g = i.attr("href");
            g = g && g.replace(/.*(?=#[^\s]*$)/, "")
        }
        h = d(g);
        j && j.preventDefault();
        h.length || (h = i.hasClass("alert") ? i : i.parent());
        h.trigger(j = d.Event("close"));
        if (j.isDefaultPrevented()) {
            return
        }
        h.removeClass("in");
        function f() {
            h.trigger("closed").remove()
        }

        d.support.transition && h.hasClass("fade") ? h.on(d.support.transition.end, f) : f()
    };
    var a = d.fn.alert;
    d.fn.alert = function (e) {
        return this.each(function () {
            var g = d(this), f = g.data("alert");
            if (!f) {
                g.data("alert", (f = new b(this)))
            }
            if (typeof e == "string") {
                f[e].call(g)
            }
        })
    };
    d.fn.alert.Constructor = b;
    d.fn.alert.noConflict = function () {
        d.fn.alert = a;
        return this
    };
    d(document).on("click.alert.data-api", c, b.prototype.close)
}(window.jQuery);

/* ===========================================================
 * bootstrap-tooltip.js v2.3.0
 * ========================================================== */
!function (c) {
    var b = function (e, d) {
        this.init("tooltip", e, d)
    };
    b.prototype = {constructor: b, init: function (k, h, f) {
        var l, d, j, e, g;
        this.type = k;
        this.$element = c(h);
        this.options = this.getOptions(f);
        this.enabled = true;
        j = this.options.trigger.split(" ");
        for (g = j.length; g--;) {
            e = j[g];
            if (e == "click") {
                this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this))
            } else {
                if (e != "manual") {
                    l = e == "hover" ? "mouseenter" : "focus";
                    d = e == "hover" ? "mouseleave" : "blur";
                    this.$element.on(l + "." + this.type, this.options.selector, c.proxy(this.enter, this));
                    this.$element.on(d + "." + this.type, this.options.selector, c.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? (this._options = c.extend({}, this.options, {trigger: "manual", selector: ""})) : this.fixTitle()
    }, getOptions: function (d) {
        d = c.extend({}, c.fn[this.type].defaults, d, this.$element.data());
        if (d.delay && typeof d.delay == "number") {
            d.delay = {show: d.delay, hide: d.delay}
        }
        return d
    }, enter: function (f) {
        var d = c(f.currentTarget)[this.type](this._options).data(this.type);
        if (!d.options.delay || !d.options.delay.show) {
            return d.show()
        }
        clearTimeout(this.timeout);
        d.hoverState = "in";
        this.timeout = setTimeout(function () {
            if (d.hoverState == "in") {
                d.show()
            }
        }, d.options.delay.show)
    }, leave: function (f) {
        var d = c(f.currentTarget)[this.type](this._options).data(this.type);
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        if (!d.options.delay || !d.options.delay.hide) {
            return d.hide()
        }
        d.hoverState = "out";
        this.timeout = setTimeout(function () {
            if (d.hoverState == "out") {
                d.hide()
            }
        }, d.options.delay.hide)
    }, show: function () {
        var i, k, g, j, d, h, f = c.Event("show");
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(f);
            if (f.isDefaultPrevented()) {
                return
            }
            i = this.tip();
            this.setContent();
            if (this.options.animation) {
                i.addClass("fade")
            }
            d = typeof this.options.placement == "function" ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement;
            i.detach().css({top: 0, left: 0, display: "block"});
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            k = this.getPosition();
            g = i[0].offsetWidth;
            j = i[0].offsetHeight;
            switch (d) {
                case"bottom":
                    h = {top: k.top + k.height, left: k.left + k.width / 2 - g / 2};
                    break;
                case"top":
                    h = {top: k.top - j, left: k.left + k.width / 2 - g / 2};
                    break;
                case"left":
                    h = {top: k.top + k.height / 2 - j / 2, left: k.left - g};
                    break;
                case"right":
                    h = {top: k.top + k.height / 2 - j / 2, left: k.left + k.width};
                    break
            }
            this.applyPlacement(h, d);
            this.$element.trigger("shown")
        }
    }, applyPlacement: function (g, h) {
        var i = this.tip(), e = i[0].offsetWidth, l = i[0].offsetHeight, d, j, k, f;
        i.offset(g).addClass(h).addClass("in");
        d = i[0].offsetWidth;
        j = i[0].offsetHeight;
        if (h == "top" && j != l) {
            g.top = g.top + l - j;
            f = true
        }
        if (h == "bottom" || h == "top") {
            k = 0;
            if (g.left < 0) {
                k = g.left * -2;
                g.left = 0;
                i.offset(g);
                d = i[0].offsetWidth;
                j = i[0].offsetHeight
            }
            this.replaceArrow(k - e + d, d, "left")
        } else {
            this.replaceArrow(j - l, j, "top")
        }
        if (f) {
            i.offset(g)
        }
    }, replaceArrow: function (f, e, d) {
        this.arrow().css(d, f ? (50 * (1 - f / e) + "%") : "")
    }, setContent: function () {
        var e = this.tip(), d = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](d);
        e.removeClass("fade in top bottom left right")
    }, hide: function () {
        var d = this, g = this.tip(), f = c.Event("hide");
        this.$element.trigger(f);
        if (f.isDefaultPrevented()) {
            return
        }
        g.removeClass("in");
        function h() {
            var e = setTimeout(function () {
                g.off(c.support.transition.end).detach()
            }, 500);
            g.one(c.support.transition.end, function () {
                clearTimeout(e);
                g.detach()
            })
        }

        c.support.transition && this.$tip.hasClass("fade") ? h() : g.detach();
        this.$element.trigger("hidden");
        return this
    }, fixTitle: function () {
        var d = this.$element;
        if (d.attr("title") || typeof(d.attr("data-original-title")) != "string") {
            d.attr("data-original-title", d.attr("title") || "").attr("title", "")
        }
    }, hasContent: function () {
        return this.getTitle()
    }, getPosition: function () {
        var d = this.$element[0];
        return c.extend({}, (typeof d.getBoundingClientRect == "function") ? d.getBoundingClientRect() : {width: d.offsetWidth, height: d.offsetHeight}, this.$element.offset())
    }, getTitle: function () {
        var f, d = this.$element, e = this.options;
        f = d.attr("data-original-title") || (typeof e.title == "function" ? e.title.call(d[0]) : e.title);
        return f
    }, tip: function () {
        return this.$tip = this.$tip || c(this.options.template)
    }, arrow: function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, validate: function () {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null
        }
    }, enable: function () {
        this.enabled = true
    }, disable: function () {
        this.enabled = false
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    }, toggle: function (f) {
        var d = f ? c(f.currentTarget)[this.type](this._options).data(this.type) : this;
        d.tip().hasClass("in") ? d.hide() : d.show()
    }, destroy: function () {
        this.hide().$element.off("." + this.type).removeData(this.type)
    }};
    var a = c.fn.tooltip;
    c.fn.tooltip = function (d) {
        return this.each(function () {
            var g = c(this), f = g.data("tooltip"), e = typeof d == "object" && d;
            if (!f) {
                g.data("tooltip", (f = new b(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            }
        })
    };
    c.fn.tooltip.Constructor = b;
    c.fn.tooltip.defaults = {animation: true, placement: "top", selector: false, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, container: false};
    c.fn.tooltip.noConflict = function () {
        c.fn.tooltip = a;
        return this
    }
}(window.jQuery);

/**
 * jQuery gMap - Google Maps API V3
 *
 * @url        http://github.com/marioestrada/jQuery-gMap
 * @author    Mario Estrada <me@mario.ec> based on original plugin by Cedric Kastner <cedric@nur-text.de>
 * @version    2.1.3
 */
(function (a) {
    a.fn.gMap = function (b, d) {
        switch (b) {
            case"addMarker":
                return a(this).trigger("gMap.addMarker", [d.latitude, d.longitude, d.content, d.icon, d.popup]);
            case"centerAt":
                return a(this).trigger("gMap.centerAt", [d.latitude, d.longitude, d.zoom]);
            case"clearMarkers":
                return a(this).trigger("gMap.clearMarkers")
        }
        var c = a.extend({}, a.fn.gMap.defaults, b);
        return this.each(function () {
            var g = new google.maps.Map(this);
            var k = new google.maps.Geocoder();
            if (c.address) {
                k.geocode({address: c.address}, function (n, j) {
                    if (n && n.length) {
                        g.setCenter(n[0].geometry.location)
                    }
                })
            } else {
                if (c.latitude && c.longitude) {
                    g.setCenter(new google.maps.LatLng(c.latitude, c.longitude))
                } else {
                    if (a.isArray(c.markers) && c.markers.length > 0) {
                        if (c.markers[0].address) {
                            k.geocode({address: c.markers[0].address}, function (n, j) {
                                if (n && n.length > 0) {
                                    g.setCenter(n[0].geometry.location)
                                }
                            })
                        } else {
                            g.setCenter(new google.maps.LatLng(c.markers[0].latitude, c.markers[0].longitude))
                        }
                    } else {
                        g.setCenter(new google.maps.LatLng(34.885931, 9.84375))
                    }
                }
            }
            g.setZoom(c.zoom);
            g.setMapTypeId(google.maps.MapTypeId[c.maptype]);
            var f = {scrollwheel: c.scrollwheel, disableDoubleClickZoom: !c.doubleclickzoom};
            if (c.controls === false) {
                a.extend(f, {disableDefaultUI: true})
            } else {
                if (c.controls.length != 0) {
                    a.extend(f, c.controls, {disableDefaultUI: true})
                }
            }
            g.setOptions(f);
            var l = new google.maps.Marker();
            marker_icon = new google.maps.MarkerImage(c.icon.image);
            marker_icon.size = new google.maps.Size(c.icon.iconsize[0], c.icon.iconsize[1]);
            marker_icon.anchor = new google.maps.Point(c.icon.iconanchor[0], c.icon.iconanchor[1]);
            l.setIcon(marker_icon);
            if (c.icon.shadow) {
                marker_shadow = new google.maps.MarkerImage(c.icon.shadow);
                marker_shadow.size = new google.maps.Size(c.icon.shadowsize[0], c.icon.shadowsize[1]);
                marker_shadow.anchor = new google.maps.Point(c.icon.shadowanchor[0], c.icon.shadowanchor[1]);
                l.setShadow(marker_shadow)
            }
            a(this).bind("gMap.centerAt", function (o, p, n, j) {
                if (j) {
                    g.setZoom(j)
                }
                g.panTo(new google.maps.LatLng(parseFloat(p), parseFloat(n)))
            });
            var h = [];
            a(this).bind("gMap.clearMarkers", function () {
                while (h[0]) {
                    h.pop().setMap(null)
                }
            });
            var i;
            a(this).bind("gMap.addMarker", function (r, t, j, s, u, n) {
                var o = new google.maps.LatLng(parseFloat(t), parseFloat(j));
                var q = new google.maps.Marker({position: o});
                if (u) {
                    marker_icon = new google.maps.MarkerImage(u.image);
                    marker_icon.size = new google.maps.Size(u.iconsize[0], u.iconsize[1]);
                    marker_icon.anchor = new google.maps.Point(u.iconanchor[0], u.iconanchor[1]);
                    q.setIcon(marker_icon);
                    if (u.shadow) {
                        marker_shadow = new google.maps.MarkerImage(u.shadow);
                        marker_shadow.size = new google.maps.Size(u.shadowsize[0], u.shadowsize[1]);
                        marker_shadow.anchor = new google.maps.Point(u.shadowanchor[0], u.shadowanchor[1]);
                        l.setShadow(marker_shadow)
                    }
                } else {
                    q.setIcon(l.getIcon());
                    q.setShadow(l.getShadow())
                }
                if (s) {
                    if (s == "_latlng") {
                        s = t + ", " + j
                    }
                    var p = new google.maps.InfoWindow({content: c.html_prepend + s + c.html_append});
                    google.maps.event.addListener(q, "click", function () {
                        i && i.close();
                        p.open(g, q);
                        i = p
                    });
                    if (n) {
                        google.maps.event.addListenerOnce(g, "tilesloaded", function () {
                            p.open(g, q)
                        })
                    }
                }
                q.setMap(g);
                h.push(q)
            });
            for (var e = 0; e < c.markers.length; e++) {
                marker = c.markers[e];
                if (marker.address) {
                    if (marker.html == "_address") {
                        marker.html = marker.address
                    }
                    var m = this;
                    k.geocode({address: marker.address}, (function (j, n) {
                        return function (p, o) {
                            if (p && p.length > 0) {
                                a(n).trigger("gMap.addMarker", [p[0].geometry.location.lat(), p[0].geometry.location.lng(), j.html, j.icon, j.popup])
                            }
                        }
                    })(marker, m))
                } else {
                    a(this).trigger("gMap.addMarker", [marker.latitude, marker.longitude, marker.html, marker.icon, marker.popup])
                }
            }
        })
    };
    a.fn.gMap.defaults = {address: "", latitude: 0, longitude: 0, zoom: 1, markers: [], controls: [], scrollwheel: false, doubleclickzoom: true, maptype: "ROADMAP", html_prepend: '<div class="gmap_marker">', html_append: "</div>", icon: {image: "http://www.google.com/mapfiles/marker.png", shadow: "http://www.google.com/mapfiles/shadow50.png", iconsize: [20, 34], shadowsize: [37, 34], iconanchor: [9, 34], shadowanchor: [6, 34]}}
})(jQuery);
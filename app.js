webpackJsonp([1], {
    112: function(e, t, i) {
        i(90);
        var n = i(34)(i(47), i(113), null, null);
        e.exports = n.exports
    },
    113: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "wdg-dropdown",
                    attrs: {
                        id: e.uid
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault()
                        }
                    }
                }, [i("label", {
                    staticClass: "wdg-dropdown__label"
                }, [e._v(e._s(e.label))]), e._v(" "), i("div", {
                    staticClass: "wdg-dropdown__current-variant",
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.is_variants_visible = !e.is_variants_visible
                        }
                    }
                }, [e._v(e._s(e.value ? e.variants_dict[e.value].title : ""))]), e._v(" "), i("div", {
                    staticClass: "wdg-dropdown__icon",
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.is_variants_visible = !e.is_variants_visible
                        }
                    }
                }, [i("svg", {
                    attrs: {
                        width: "8px",
                        height: "14px",
                        viewBox: "0 0 8 14",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [i("defs"), e._v(" "), i("g", {
                    attrs: {
                        id: "Page-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }
                }, [i("g", {
                    attrs: {
                        id: "Artboard",
                        transform: "translate(-1208.000000, -298.000000)",
                        fill: "#8D979C"
                    }
                }, [i("g", {
                    attrs: {
                        id: "Dropdown",
                        transform: "translate(1208.000000, 298.000000)"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M3.031944,0.34488948 C3.33911531,-0.115867489 3.83834477,-0.114057941 4.14430972,0.34488948 L7.031944,4.6763409 C7.33911531,5.13709786 7.13509055,5.51061519 6.59109672,5.51061519 L0.585156996,5.51061519 C0.0345124553,5.51061519 -0.161655228,5.13528832 0.144309718,4.6763409 L3.031944,0.34488948 Z",
                        id: "Triangle"
                    }
                }), e._v(" "), i("path", {
                    attrs: {
                        d: "M3.031944,8.34488948 C3.33911531,7.88413251 3.83834477,7.88594206 4.14430972,8.34488948 L7.031944,12.6763409 C7.33911531,13.1370979 7.13509055,13.5106152 6.59109672,13.5106152 L0.585156996,13.5106152 C0.0345124553,13.5106152 -0.161655228,13.1352883 0.144309718,12.6763409 L3.031944,8.34488948 Z",
                        id: "Triangle",
                        transform: "translate(3.587705, 10.755308) scale(1, -1) translate(-3.587705, -10.755308) "
                    }
                })])])])])]), e._v(" "), e.is_variants_visible ? i("div", {
                    staticClass: "wdg-dropdown__variants"
                }, e._l(e.variants, function(t) {
                    return i("div", {
                        staticClass: "wdg-dropdown__variants__item",
                        class: {
                            "wdg-dropdown__variants__item--selected": t.value === e.value
                        },
                        on: {
                            click: function(i) {
                                e.select_variant(t.value)
                            }
                        }
                    }, [i("div", {
                        staticClass: "wdg-dropdown__variants__item__title"
                    }, [e._v(e._s(t.title))]), e._v(" "), i("div", {
                        staticClass: "wdg-dropdown__variants__item__description"
                    }, [e._v(e._s(t.description))])])
                })) : e._e()])
            },
            staticRenderFns: []
        }
    },
    114: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return e.is_supported ? i("div", {
                    class: {
                        "is-mobile-ios": e.is_mobile_ios, "is-mobile": e.is_mobile
                    },
                    attrs: {
                        id: "app"
                    }
                }, [i("form", {
                    staticClass: "central__form",
                    attrs: {
                        id: "filter-form-id"
                    },
                    on: {
                        submit: function(e) {
                            e.preventDefault()
                        }
                    }
                }, [i("div", {
                    staticClass: "central__form__item"
                }, [i("label", {
                    attrs: {
                        for: "padding-pixels-id",
                        title: "user-specified URL of resource to be filtered"
                    }
                }, [e._v("Padding between\n                elements (px):\n            ")]), e._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.padding_pixels,
                        expression: "padding_pixels"
                    }],
                    staticClass: "central__form__input_field",
                    attrs: {
                        type: "number",
                        id: "padding-pixels-id",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.padding_pixels
                    },
                    on: {
                        change: function(t) {
                            e.generate_css_sprite()
                        },
                        input: function(t) {
                            t.target.composing || (e.padding_pixels = t.target.value)
                        },
                        blur: function(t) {
                            e.$forceUpdate()
                        }
                    }
                })]), e._v(" "), i("div", {
                    staticClass: "central__form__item"
                }, [i("dropdown", {
                    attrs: {
                        label: "Align elements:",
                        variants: e.pack_algorithm_variants
                    },
                    on: {
                        input: function(t) {
                            e.generate_css_sprite()
                        }
                    },
                    model: {
                        value: e.pack_algorithm,
                        callback: function(t) {
                            e.pack_algorithm = t
                        },
                        expression: "pack_algorithm"
                    }
                })], 1)]), e._v(" "), i("div", {
                    staticClass: "tool-container tool__drop-upload-zone",
                    class: {
                        "tool__drop-upload-zone--hover": e.is_drop_upload_zone_hover, "tool__drop-upload-zone--drop": e.is_drop_upload_zone_drop
                    }
                }, [i("div", {
                    staticClass: "tool"
                }, [i("div", {
                    staticClass: "tool__area",
                    class: {
                        "tool__area--files-selected": e.files_list.length > 0
                    }
                }, [i("div", {
                    staticClass: "tool__area__item"
                }, [i("div", {
                    staticClass: "tool__area__item__files-list",
                    attrs: {
                        id: "css-data"
                    }
                }, e._l(e.files_list, function(t, n) {
                    return i("div", {
                        staticClass: "tool__area__item__files-list__item"
                    }, [i("div", {
                        staticStyle: {
                            height: "50px",
                            float: "left",
                            margin: "5px"
                        }
                    }, [i("img", {
                        attrs: {
                            src: t.small_img_uri,
                            width: Math.round(t.small_width / 2),
                            height: Math.round(t.small_height / 2)
                        }
                    })]), e._v(" "), i("div", {
                        staticStyle: {
                            "text-align": "left"
                        }
                    }, [i("a", {
                        staticStyle: {
                            float: "right",
                            margin: "0 5px"
                        },
                        attrs: {
                            href: "#",
                            title: "Remove the image"
                        },
                        on: {
                            click: function(t) {
                                t.preventDefault(), e.files_list.splice(n, 1), e.generate_css_sprite()
                            }
                        }
                    }, [e._v("x")]), e._v(" "), i("pre", {
                        staticStyle: {
                            overflow: "auto"
                        },
                        attrs: {
                        onclick: "$(this).selectText();toastr['success']('Your Text is successfully copied to clipboard');"
                        }
                    }, [e._v(".bg-" + e._s(t.sprite_info.class_name) + " {\n    width: " + e._s(t.width) + "px; height: " + e._s(t.height) + "px;\n    background: url('css_sprites.png') -" + e._s(t.sprite_info.x ? t.sprite_info.x + "px" : "0") + " -" + e._s(t.sprite_info.y ? t.sprite_info.y + "px" : "0") + ";\n}")])]), e._v(" "), i("div", {
                        staticStyle: {
                            clear: "both"
                        }
                    })])
                })), e._v(" "), i("div", {
                    staticClass: "tool__area__item__add-files"
                }, [i("p", [e._v("\n                            Drag & Drop files here or\n                            select them using:\n                        ")]), e._v(" "), i("input", {
                    ref: "upload-files-id",
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        type: "file",
                        multiple: ""
                    },
                    on: {
                        change: function(t) {
                            e.handle_new_file(t.target.files)
                        }
                    }
                }), e._v(" "), i("div", {
                    staticClass: "central__form__button central__form__button--accent clickable",
                    on: {
                        click: function(t) {
                            e.$refs["upload-files-id"].click()
                        }
                    }
                }, [e._v("\n                            CHOOSE FILES\n                        ")])])]), e._v(" "), i("div", {
                    staticClass: "tool__area__item"
                }, [i("div", {
                    staticClass: "tool__area__item__sprites"
                }, [0 === e.files_list.length ? i("div", [i("svg", {
                    attrs: {
                        width: "26px",
                        height: "26px",
                        viewBox: "0 0 26 26",
                        version: "1.1"
                    }
                }, [i("g", {
                    attrs: {
                        id: "Page-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }
                }, [i("g", {
                    attrs: {
                        id: "CSS-Sprites-Updates",
                        transform: "translate(-1337.000000, -670.000000)",
                        "fill-rule": "nonzero",
                        fill: "#969FA9"
                    }
                }, [i("g", {
                    attrs: {
                        id: "ic_filter",
                        transform: "translate(1337.000000, 670.000000)"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M17.62,11.005 L14.4116667,15.135 L12.125,12.3816667 L8.91666667,16.5 L21.75,16.5 L17.62,11.005 L17.62,11.005 Z M2.5,4.83333333 L0.166666667,4.83333333 L0.166666667,23.5 C0.166666667,24.7833333 1.21666667,25.8333333 2.5,25.8333333 L21.1666667,25.8333333 L21.1666667,23.5 L2.5,23.5 L2.5,4.83333333 L2.5,4.83333333 Z M23.5,0.166666667 L7.16666667,0.166666667 C5.88333333,0.166666667 4.83333333,1.21666667 4.83333333,2.5 L4.83333333,18.8333333 C4.83333333,20.1166667 5.88333333,21.1666667 7.16666667,21.1666667 L23.5,21.1666667 C24.7833333,21.1666667 25.8333333,20.1166667 25.8333333,18.8333333 L25.8333333,2.5 C25.8333333,1.21666667 24.7833333,0.166666667 23.5,0.166666667 L23.5,0.166666667 Z M23.5,18.8333333 L7.16666667,18.8333333 L7.16666667,2.5 L23.5,2.5 L23.5,18.8333333 L23.5,18.8333333 Z",
                        id: "CSS_Icon"
                    }
                })])])])]), e._v(" "), i("p", [e._v("No images uploaded, yet.")])]) : e._e(), e._v(" "), i("div", {
                    staticClass: "central__form__button central__form__button--accent clickable",
                    on: {
                        click: function(t) {
                            e.download(e.sprite_image_uri, "css_sprites.png", "image/png")
                        }
                    }
                }, [e._v("\n                            DOWNLOAD\n                        ")])]), e._v(" "), i("div", {
                    staticClass: "tool__area__item__css-sprite-container"
                }, [e.files_list.length > 0 ? i("img", {
                    staticClass: "tool__area__item__css-sprite",
                    attrs: {
                        src: e.sprite_image_uri
                    }
                }) : e._e()])])])])])]) : i("h1", {
                    staticClass: "header-error"
                }, [e._v("\n    Sorry, but your browser doesn't support this tool."), i("br"), e._v("\n    We recommend to use latest Chrome Browser.\n")])
            },
            staticRenderFns: []
        }
    },
    21: function(e, t, i) {
        "use strict";

        function n(e) {
            a = e
        }
        t.a = n;
        var a = {};
        t.b = {
            computed: {
                config: function() {
                    return a
                }
            }
        }
    },
    35: function(e, t, i) {
        "use strict";

        function n(e) {
            return console.log(e), new o.a(function(t, i) {
                var n = new XMLHttpRequest;
                n.open("GET", e), n.send(), n.onload = function() {
                    200 === n.status ? t(JSON.parse(n.responseText)) : (console.error("Failed to get config", n.responseText), i("Bad server response for config request"))
                }
            })
        }
        var a = i(7),
            o = i.n(a);
        t.a = n
    },
    36: function(e, t, i) {
        i(91), i(93), i(92);
        var n = i(34)(i(46), i(114), null, null);
        e.exports = n.exports
    },
    39: function(e, t) {
        var i = function() {
            var e = !1;
            return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e
        };
        e.exports = i
    },
    40: function(e, t) {
        var i = function() {
            return !(!navigator || !navigator.userAgent) && navigator.userAgent.match(/(iPod|iPhone|iPad)/)
        };
        e.exports = i
    },
    41: function(e, t) {
        var i = {
            requestFullScreen: function() {},
            cancelFullScreen: function() {}
        };
        i.isFullScreen = !1, i.requestFullScreen = function(e) {
            e.requestFullscreen && e.requestFullscreen(), e.msRequestFullscreen && e.msRequestFullscreen(), e.mozRequestFullScreen && e.mozRequestFullScreen(), e.webkitRequestFullscreen && e.webkitRequestFullscreen(), this.isFullScreen = !0
        }, i.cancelFullScreen = function() {
            document.exitFullscreen && document.exitFullscreen(), document.msExitFullscreen && document.msExitFullscreen(), document.mozCancelFullScreen && document.mozCancelFullScreen(), document.webkitCancelFullScreen && document.webkitCancelFullScreen(), this.isFullScreen = !1
        }, i.toggleFullScreen = function(e) {
            this.isFullScreen ? this.cancelFullScreen() : i.requestFullScreen(e)
        }, e.exports = i
    },
    42: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(37),
            a = i(36),
            o = i.n(a),
            s = i(35),
            r = i(21);
        i.i(s.a)(window.GET_CONFIG_URI).then(function(e) {
            i.i(r.a)(e), new n.a({
                el: "#app",
                render: function(e) {
                    return e(o.a)
                }
            })
        })
    },
    43: function(e, t, i) {
        "use strict";

        function n(e, t) {
            var i = window.document.createElement("canvas");
            return i.width = e, i.height = t, i
        }
        t.a = n
    },
    44: function(e, t, i) {
        "use strict";

        function n(e) {
            return new o.a(function(t, i) {
                var n = new Image;
                n.onload = function() {
                    t(n)
                }, n.onerror = function() {
                    i(new Error("Failed to load image"))
                }, n.src = e
            })
        }
        var a = i(7),
            o = i.n(a);
        t.a = n
    },
    45: function(e, t, i) {
        "use strict";

        function n(e) {
            return new o.a(function(t, i) {
                var n = new FileReader;
                n.onload = function(e) {
                    return t(e.target.result)
                }, n.onerror = function() {
                    return i(new Error("Failed to read image file:", e.name))
                }, n.readAsDataURL(e)
            })
        }
        var a = i(7),
            o = i.n(a);
        t.a = n
    },
    46: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(7),
            a = i.n(n),
            o = i(21),
            s = i(43),
            r = i(44),
            l = i(45),
            d = i(107),
            c = i(39),
            _ = i(40),
            u = (i(41), i(53), i(89)),
            p = i(103);
        t.default = {
            mixins: [o.b],
            name: "app",
            data: function() {
                return {
                    is_supported: void 0 !== window.FileReader,
                    is_mobile: c(),
                    is_mobile_ios: _(),
                    is_full_screen: !1,
                    pack_algorithm: "binary-tree",
                    pack_algorithm_variants: [{
                        title: "Binary Tree",
                        description: "Most size-efficient algorithm",
                        value: "binary-tree"
                    }, {
                        title: "Diagonal",
                        description: "Each element can have unlimited horizontal or vertical padding without intersection with other sprite elements.",
                        value: "diagonal"
                    }, {
                        title: "Diagonal (Alternative)",
                        description: "Same as Diagonal, but alternative diagonal used.",
                        value: "alt-diagonal"
                    }, {
                        title: "Top-down",
                        description: "Top-down element by element layout",
                        value: "top-down"
                    }, {
                        title: "Left-right",
                        description: "Left-right element by element layout",
                        value: "left-right"
                    }],
                    status: {
                        type: "ready",
                        total_to_process: 1,
                        rest_to_process: 0,
                        rest_images: 0
                    },
                    padding_pixels: 10,
                    files_list: [],
                    sprite_image_uri: "",
                    is_drop_upload_zone_hover: !1,
                    is_drop_upload_zone_drop: !1
                }
            },
            components: {
                dropdown: i(112)
            },
            mounted: function() {
                var e = this;
                if (!this.is_supported) return !1;
                this.drop_upload_zone = window.document.getElementsByClassName("tool__drop-upload-zone")[0], this.maxFileSize = 1048576, this.drop_upload_zone.ondragover = function(t) {
                    return t.stopPropagation(), t.preventDefault(), e.is_drop_upload_zone_hover = !0, t.dataTransfer.dropEffect = "copy", !1
                }, this.drop_upload_zone.ondragleave = function() {
                    return e.is_drop_upload_zone_hover = !1, !1
                }, this.drop_upload_zone.ondrop = function(t) {
                    t.preventDefault(), console.log("Dropped!"), e.is_drop_upload_zone_hover = !1, e.is_drop_upload_zone_drop = !0, setTimeout(function() {
                        e.is_drop_upload_zone_drop = !1
                    }, 500);
                    var i = t.dataTransfer.files;
                    e.handle_new_file(i)
                }
            },
            methods: {
                download: u,
                handle_new_file: function(e) {
                    for (var t = this, n = [], o = 0; o < e.length; o++) {
                        var d = e[o];
                        (d.type.match("image.*"), d.type.match("image/tiff.*")) || function(e) {
                            n.push(i.i(l.a)(e).then(r.a).then(function(n) {
                                var a = {
                                        width: 100,
                                        height: 200
                                    },
                                    o = {};
                                n.width / n.height > a.width / a.height ? (o.width = Math.min(n.width, a.width), o.height = o.width * n.height / n.width) : (o.height = Math.min(n.height, a.height), o.width = o.height * n.width / n.height);
                                var r = i.i(s.a)(o.width, o.height);
                                r.getContext("2d").drawImage(n, 0, 0, o.width, o.height);
                                var l = r.toDataURL(),
                                    d = {
                                        filename: e.name,
                                        width: n.width,
                                        height: n.height,
                                        img: n,
                                        small_width: o.width,
                                        small_height: o.height,
                                        small_img_uri: l,
                                        sprite_info: {
                                            x: 0,
                                            y: 0
                                        }
                                    };
                                t.files_list.push(d)
                            }).catch(function(t) {
                                console.error("Failed to load image: " + e.name)
                            }))
                        }(d)
                    }
                    a.a.all(n).then(function() {
                        t.generate_css_sprite()
                    })
                },
                generate_css_sprite: d(500, function() {
                    var e = this,
                        t = p(this.pack_algorithm);
                    this.padding_pixels < 0 && (this.padding_pixels = 0), this.files_list.forEach(function(i) {
                        t.addItem({
                            width: i.width + 2 * parseInt(e.padding_pixels),
                            height: i.height + 2 * parseInt(e.padding_pixels),
                            file: i
                        })
                    });
                    var n = t.export(),
                        a = i.i(s.a)(n.width, n.height),
                        o = a.getContext("2d");
                    n.items.forEach(function(t) {
                        o.drawImage(t.file.img, t.x + parseInt(e.padding_pixels), t.y + parseInt(e.padding_pixels), t.file.width, t.file.height), t.file.sprite_info.x = t.x + parseInt(e.padding_pixels), t.file.sprite_info.y = t.y + parseInt(e.padding_pixels), console.log(t.file.filename, t.file.filename.split("."));
                        var i = t.file.filename.split(".");
                        i.pop(), t.file.sprite_info.class_name = i.join(".").replace(/[\.\s\-\(\)\[\]\{\}]/g, "_")
                    }), this.sprite_image_uri = a.toDataURL(), console.log(n)
                })
            },
            watch: {}
        }
    },
    47: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            model: {
                prop: "value",
                event: "input"
            },
            props: {
                label: {
                    type: String,
                    required: !0
                },
                value: {
                    required: !0
                },
                variants: {
                    type: Array,
                    required: !0
                }
            },
            computed: {},
            components: {},
            data: function() {
                var e = {};
                return this.variants.forEach(function(t) {
                    e[t.value] = t
                }), {
                    is_variants_visible: !1,
                    variants_dict: e,
                    uid: "dropdown-" + Math.round(1e6 * Math.random())
                }
            },
            mounted: function() {
                var e = this;
                this.hide_select = function() {
                    e.is_variants_visible = !1
                }, this.stop_hide_select = function(e) {
                    e.stopPropagation()
                }, window.document.getElementById(this.uid).addEventListener("click", this.stop_hide_select, !1), window.addEventListener("click", this.hide_select, !1)
            },
            destroyed: function() {
                window.document.getElementById(this.uid).removeEventListener("click", this.stop_hide_select, !1), window.removeEventListener("click", this.hide_select, !1)
            },
            methods: {
                select_variant: function(e) {
                    this.$emit("input", e), this.is_variants_visible = !1
                }
            },
            watch: {}
        }
    },
    90: function(e, t) {},
    91: function(e, t) {},
    92: function(e, t) {},
    93: function(e, t) {}
}, [42]);

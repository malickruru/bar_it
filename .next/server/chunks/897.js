"use strict";
exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dg": () => (/* binding */ flexRowAround),
/* harmony export */   "Ht": () => (/* binding */ flexColumnStart),
/* harmony export */   "KO": () => (/* binding */ flexLeft),
/* harmony export */   "_": () => (/* binding */ flexRowCenter),
/* harmony export */   "i3": () => (/* binding */ flexColumn),
/* harmony export */   "mU": () => (/* binding */ flexColumnEnd)
/* harmony export */ });
/* unused harmony exports flexRight, flexColumnLeft, flexRowBetween, flexColumnRight, flexRowEvenly, flexAlignStart */
const flexColumn = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
};
const flexColumnEnd = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column"
};
const flexColumnStart = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column"
};
const flexRight = {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    flexDirection: "row"
};
const flexLeft = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "row"
};
const flexAlignStart = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
};
const flexColumnLeft = {
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-start",
    flexDirection: "column"
};
const flexColumnRight = {
    display: "flex",
    justifyContent: "right",
    alignItems: "flex-start",
    flexDirection: "column"
};
const flexRowCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const flexRowAround = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
};
const flexRowBetween = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
};
const flexRowEvenly = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
};



/***/ }),

/***/ 505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Bouton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Bouton({ text , rounded ="" , onclick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "bit-btn" + rounded,
        onClick: onclick,
        children: text
    });
}


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Col_2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);



function Col_2({ left , right , flex =[
    _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexRowCenter */ ._,
    {}
] , id =""  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row py-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-md-6 position-relative py-5",
                    "data-aos": "fade-right",
                    style: flex[0],
                    children: left
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-md-6 py-5",
                    "data-aos": "fade-left",
                    style: flex[1],
                    children: right
                })
            ]
        })
    });
}


/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Col_4)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Col_4({ one , two , three , four , style =[
    {},
    {},
    {},
    {}
] , anchor =""  }) {
    if (anchor = "bottom") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-3 py-2",
                        style: style[0],
                        "data-aos": "fade-up",
                        "data-aos-offset": "100",
                        "data-anchor-placement": "top-bottom",
                        children: one
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-3 py-2",
                        style: style[1],
                        "data-aos": "fade-up",
                        "data-aos-offset": "150",
                        "data-anchor-placement": "top-bottom",
                        children: two
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-3 py-2",
                        style: style[2],
                        "data-aos": "fade-up",
                        "data-aos-offset": "200",
                        "data-anchor-placement": "top-bottom",
                        children: three
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-3 py-2 ",
                        style: style[3],
                        "data-aos": "fade-up",
                        "data-aos-offset": "250",
                        "data-anchor-placement": "top-bottom",
                        children: four
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row py-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-sm-3 py-3",
                    style: style[0],
                    "data-aos": "fade-up",
                    "data-aos-offset": "100",
                    children: one
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-sm-3 py-3",
                    style: style[1],
                    "data-aos": "fade-up",
                    "data-aos-offset": "150",
                    children: two
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-sm-3 py-3",
                    style: style[2],
                    "data-aos": "fade-up",
                    "data-aos-offset": "200",
                    children: three
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-sm-3 py-3",
                    style: style[3],
                    "data-aos": "fade-up",
                    "data-aos-offset": "250",
                    children: four
                })
            ]
        })
    });
}


/***/ }),

/***/ 597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);



const ScrollToTopButton = ()=>{
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleScroll = ()=>{
        setVisible(window.pageYOffset > 600);
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleClick = ()=>{
        window.scrollTo(0, 0);
    };
    if (!visible) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "scroll-to-top-button",
        onClick: handleClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronDoubleUp, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTopButton); // 


/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _Partials_Bouton_Bouton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(505);
/* harmony import */ var _Partials_Layout_Col_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(463);





function Contact() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Layout_Col_2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        id: "contact",
        left: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "roboto-bold",
                    children: [
                        "Des projets en t\xeate ? n'hesitez pas",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " \xe0 nous contacter ou ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "roboto-bold",
                            style: {
                                color: "#F27289"
                            },
                            children: "juste nous faire un coucou. "
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexColumn */ .i3,
                    className: "contact-card",
                    id: "left-card",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                ..._Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexLeft */ .KO,
                                width: "80%"
                            },
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/Action/location-pin.png"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "m-0 roboto-bold",
                                            children: "Adresse"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "roboto",
                                            children: "Paris-Abidjan-Madagascar"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                ..._Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexLeft */ .KO,
                                width: "80%"
                            },
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/Action/email.png"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "m-0 roboto-bold",
                                            children: "Adresse mail"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "roboto",
                                            children: "contactbar.it@lebar-it.com"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        }),
        right: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "contact-card",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                    className: "text-center roboto-bold",
                    children: [
                        "Envoyez nous ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " un message"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    style: _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexColumn */ .i3,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "contact-input",
                            type: "text",
                            placeholder: "Nom prenom"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "contact-input",
                            type: "text",
                            placeholder: "Adresse mail"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "contact-input",
                            type: "text",
                            placeholder: "Telephone"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "contact-input",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: ".",
                                    children: "Sujet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "J'ai une question",
                                    children: "J'ai une question"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "J'ai un projet",
                                    children: "J'ai un projet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Je veux proposer mes services au bar IT",
                                    children: "Je veux proposer mes services au bar IT"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            className: "contact-input",
                            placeholder: "Message"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Bouton_Bouton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            text: "Envoyer",
                            rounded: "-rounded"
                        })
                    ]
                })
            ]
        }),
        flex: [
            {},
            _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexRowCenter */ ._
        ]
    });
}


/***/ }),

/***/ 629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _Partials_Layout_Col_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);




function bold({ text  }) {
    /*#__PURE__*/ _jsx("b", {
        children: text
    });
}
function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-fluid footer",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Layout_Col_4__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            anchor: "bottom",
            one: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        height: 60,
                        src: "/logo.png"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: {
                            fontWeight: 100,
                            fontSize: 14
                        },
                        className: "roboto",
                        children: [
                            "Copyright \xa9 2022 lebar it.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Tous les droits sont r\xe9serv\xe9s.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Designed & Developed by lebar IT"
                        ]
                    })
                ]
            }),
            two: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "roboto-bold",
                        children: "Heure d'ouverture:"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: {
                            fontWeight: 100,
                            fontSize: 14
                        },
                        className: "roboto",
                        children: [
                            "Lundi - vendredi: 8h30 - 18h",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Samedi : 8h30 - 12h",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Dimanche: Ferm\xe9"
                        ]
                    })
                ]
            }),
            three: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "roboto-bold",
                        children: "Adresse:"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: {
                            fontWeight: 100,
                            fontSize: 14
                        },
                        className: "roboto",
                        children: [
                            "Paris - Abidjan - Madagascar",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    })
                ]
            }),
            four: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "roboto-bold",
                        children: "Contact:"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: {
                            fontWeight: 100,
                            fontSize: 14
                        },
                        className: "roboto",
                        children: [
                            "+ 33 7 69 61 92 12",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "footer-link roboto",
                                href: "mailto:contactbar.it@lebar-it.com",
                                children: "contactbar.it@lebar-it.com"
                            })
                        ]
                    })
                ]
            }),
            style: [
                _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexColumnStart */ .Ht,
                _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexColumnStart */ .Ht,
                _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexColumnStart */ .Ht,
                _Assets_Style_Flex__WEBPACK_IMPORTED_MODULE_2__/* .flexColumnStart */ .Ht
            ]
        })
    });
}


/***/ })

};
;
"use strict";
(() => {
var exports = {};
exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Card({ dataAos ="" , dataAosOffset ="" , title , subTitle , image , textAlign ="center" , w ="auto" , imgH =50 , component  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "Card",
        style: {
            width: w
        },
        "data-aos": dataAos,
        "data-aos-offset": dataAosOffset,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: image,
                height: imgH
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                style: {
                    textAlign: textAlign
                },
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                style: {
                    textAlign: textAlign
                },
                children: subTitle
            }),
            component
        ]
    });
}


/***/ }),

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BarInfluence)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/Partials/ScrollToTopButton/ScrollToTopButton.js
var ScrollToTopButton = __webpack_require__(597);
// EXTERNAL MODULE: ./src/Section/Bienvenu/Bienvenu.js + 1 modules
var Bienvenu = __webpack_require__(925);
// EXTERNAL MODULE: ./src/Section/Contact/Contact.js
var Contact = __webpack_require__(751);
;// CONCATENATED MODULE: external "react-icons/hi2"
const hi2_namespaceObject = require("react-icons/hi2");
// EXTERNAL MODULE: ./src/Partials/Bouton/Bouton.js
var Bouton = __webpack_require__(505);
// EXTERNAL MODULE: ./src/Assets/Style/Flex.js
var Flex = __webpack_require__(27);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/Section/DevenirInfluenceur/DevenirInfluenceur.js







function DevenirInfluenceur() {
    const [translate, setTranslate] = (0,external_react_.useState)(false);
    function translationValue() {
        if (!translate) {
            return 0;
        } else {
            return 95;
        }
    }
    const form = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "form-infuenceur",
            ref: form,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "call_to_action",
                    style: {
                        color: "#F27289"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(hi2_namespaceObject.HiSpeakerWave, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "p-0 m-0 desktop-only ",
                            style: {
                                writingMode: "vertical-rl"
                            },
                            children: "DEVENIR INFLUENCEUR"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "p-0 m-0 mobile-only-block",
                            style: {
                                writingMode: "vertical-rl"
                            },
                            onClick: ()=>{
                                form.current.style.transform = "translateX(" + translationValue() + "%)";
                                setTranslate(!translate);
                            },
                            children: "DEVENIR INFLUENCEUR"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(hi2_namespaceObject.HiArrowLeftCircle, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-100 p-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-100 p-2 close-inf",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>{
                                    form.current.style.transform = "translateX(95%)";
                                    setTranslate(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsXLg, {})
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                            className: "text-center p-2",
                            children: [
                                "Rejoindre le r\xe9seau de nos",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        color: "#F27289"
                                    },
                                    children: " infuenceur africain"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "influenceur-layout",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    style: {
                                        ...Flex/* flexColumn */.i3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: Flex/* flexRowAround */.Dg,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "contact-input",
                                                    type: "radio",
                                                    name: "sexe",
                                                    value: "femme",
                                                    checked: true
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    for: "femme",
                                                    children: "femme"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "contact-input",
                                                    type: "radio",
                                                    name: "sexe",
                                                    value: "homme"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    for: "homme",
                                                    children: "homme"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "contact-input",
                                            type: "text",
                                            placeholder: "Vos noms et pr\xe9noms"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "contact-input",
                                            type: "text",
                                            placeholder: "Pays"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "contact-input",
                                            type: "text",
                                            placeholder: "E-mail"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "contact-input",
                                            type: "text",
                                            placeholder: "Telephone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "contact-input",
                                            type: "text",
                                            placeholder: "Votre domaine"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    style: {
                                        ...Flex/* flexColumn */.i3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsInstagram, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "contact-input insta",
                                                    style: {
                                                        width: "80%"
                                                    },
                                                    type: "text",
                                                    placeholder: "Votre compte Instagram"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFacebook, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "contact-input insta",
                                                    style: {
                                                        width: "80%"
                                                    },
                                                    type: "text",
                                                    placeholder: "Votre compte Facebook"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsTwitter, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "contact-input insta",
                                                    style: {
                                                        width: "80%"
                                                    },
                                                    type: "text",
                                                    placeholder: "Votre compte Twitter"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTiktok, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "contact-input insta",
                                                    style: {
                                                        width: "80%"
                                                    },
                                                    type: "text",
                                                    placeholder: "Votre compte Tik Tok"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                width: "70%"
                                            },
                                            className: "roboto-thin",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "m-2",
                                                    type: "checkbox",
                                                    placeholder: "Lien de votre site web",
                                                    style: {
                                                        display: "inline"
                                                    }
                                                }),
                                                "En soumettant ce formulaire, j'accepte que les informations saisies soient exploit\xe9es afin de traiter ma demande.*"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-100 my-3",
                            style: Flex/* flexRowCenter */._,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Bouton/* default */.Z, {
                                text: "Nous rejoindre",
                                rounded: "-rounded"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/Section/Footer/Footer.js
var Footer = __webpack_require__(629);
// EXTERNAL MODULE: ./src/Section/Hero/Hero.js
var Hero = __webpack_require__(109);
// EXTERNAL MODULE: ./src/Partials/Card/Card.js
var Card = __webpack_require__(823);
// EXTERNAL MODULE: ./src/Partials/Layout/Col_4.js
var Col_4 = __webpack_require__(26);
// EXTERNAL MODULE: ./src/Partials/Title/Title.js
var Title = __webpack_require__(858);
;// CONCATENATED MODULE: ./src/Section/Influenceur/Influenceur.js








function Influenceur() {
    const [showOverlay, setShowOverlay] = (0,external_react_.useState)(false);
    const handleOverlayOpen = ()=>{
        setShowOverlay(true);
    };
    const handleOverlayClose = ()=>{
        setShowOverlay(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row py-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                            title: "Nos Influenceurs",
                            subTitle: "Lorem ipsum set dolor"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Col_4/* default */.Z, {
                        one: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                            subTitle: "Communication - 50 abonn\xe9s",
                            image: "https://images.pexels.com/photos/3602934/pexels-photo-3602934.jpeg?auto=compress&cs=tinysrgb&w=600",
                            textAlign: "left",
                            imgH: 90,
                            component: /*#__PURE__*/ jsx_runtime_.jsx(Bouton/* default */.Z, {
                                onclick: handleOverlayOpen,
                                text: "Il m'int\xe9resse"
                            })
                        }),
                        two: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                            subTitle: "Marketing - 50 abonn\xe9s",
                            image: "https://images.pexels.com/photos/7676824/pexels-photo-7676824.jpeg?auto=compress&cs=tinysrgb&w=600",
                            textAlign: "left",
                            imgH: 90,
                            component: /*#__PURE__*/ jsx_runtime_.jsx(Bouton/* default */.Z, {
                                onclick: handleOverlayOpen,
                                text: "Elle m'int\xe9resse"
                            })
                        }),
                        three: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                            subTitle: "Communication - 50 abonn\xe9s",
                            image: "https://images.pexels.com/photos/8276328/pexels-photo-8276328.jpeg?auto=compress&cs=tinysrgb&w=600",
                            textAlign: "left",
                            imgH: 90,
                            component: /*#__PURE__*/ jsx_runtime_.jsx(Bouton/* default */.Z, {
                                onclick: handleOverlayOpen,
                                text: "Il m'int\xe9resse"
                            })
                        }),
                        four: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                            subTitle: "Journalisme - 50 abonn\xe9s",
                            image: "https://images.pexels.com/photos/7481973/pexels-photo-7481973.jpeg?auto=compress&cs=tinysrgb&w=600",
                            textAlign: "left",
                            imgH: 90,
                            component: /*#__PURE__*/ jsx_runtime_.jsx(Bouton/* default */.Z, {
                                onclick: handleOverlayOpen,
                                text: "Il m'int\xe9resse"
                            })
                        })
                    })
                ]
            }),
            showOverlay && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onclick: handleOverlayClose,
                className: "overlay d-flex flex-column align-items-center justify-content-center position-fixed w-100 h-100",
                style: {
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    zIndex: 9,
                    backdropFilter: "blur(5px)"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    style: {
                        ...Flex/* flexColumn */.i3,
                        backgroundColor: "#fff",
                        width: "50%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: handleOverlayClose,
                            className: "Influenceur-close",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsXLg, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            className: "contact-input",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: ".",
                                    children: "Type de projet"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "Campagne influence",
                                    children: "J'ai une question"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "Placement de produit",
                                    children: "J'ai un projet"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "contact-input",
                            type: "text",
                            placeholder: "Adresse mail"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "contact-input",
                            type: "text",
                            placeholder: "Telephone"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "contact-input",
                            type: "text",
                            placeholder: "Nom prenom"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            className: "contact-input",
                            placeholder: "Message"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Bouton/* default */.Z, {
                            text: "Envoyer",
                            rounded: "-rounded"
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/Section/SavoirPlus/SavoirPlus.js
var SavoirPlus = __webpack_require__(458);
;// CONCATENATED MODULE: ./src/pages/BarInfluence.js










function BarInfluence() {
    (0,external_react_.useEffect)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                image: "/img/hero/3.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Bienvenu/* default */.Z, {
                image: "/img/hero/3.png",
                paragraphe: `Parcequ une strategie d influence peut booster votre notoriete
        Ou vos ventes. lls vous faut mesurer les impacts et les KPI pour
        cela et fort de notre expertise, nous vous accompagnons.
        `,
                titre: "Qu'est-ce que le Bar a influence ?",
                smallTitle: "-small"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Influenceur, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SavoirPlus/* default */.Z, {
                a: 1,
                b: 0
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTopButton/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(DevenirInfluenceur, {})
        ]
    });
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [897,433], () => (__webpack_exec__(300)));
module.exports = __webpack_exports__;

})();
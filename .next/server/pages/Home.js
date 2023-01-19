"use strict";
(() => {
var exports = {};
exports.id = 336;
exports.ids = [336];
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

/***/ 568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/Partials/ScrollToTopButton/ScrollToTopButton.js
var ScrollToTopButton = __webpack_require__(597);
// EXTERNAL MODULE: ./src/Partials/Card/Card.js
var Card = __webpack_require__(823);
// EXTERNAL MODULE: ./src/Partials/Layout/Col_4.js
var Col_4 = __webpack_require__(26);
// EXTERNAL MODULE: ./src/Partials/Title/Title.js
var Title = __webpack_require__(858);
;// CONCATENATED MODULE: ./src/Section/Action/Action.js





function Action() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row py-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        title: "Ce que nous faisons",
                        subTitle: "Notre p\xe9rimetre d'action"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Col_4/* default */.Z, {
                one: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    title: "Site web",
                    subTitle: "Vitrine & e-commerce",
                    image: "/img/Action/navigateur-web.png"
                }),
                two: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    title: "Applications",
                    subTitle: "Android & IOS",
                    image: "/img/Action/application.png"
                }),
                three: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    title: "Logiciels",
                    subTitle: "M\xe9tier",
                    image: "/img/Action/navigateur-web.png"
                }),
                four: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    title: "Entreprise",
                    subTitle: "ressource planning",
                    image: "/img/Action/presentation-commerciale.png"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/Section/Bienvenu/Bienvenu.js + 1 modules
var Bienvenu = __webpack_require__(925);
// EXTERNAL MODULE: ./src/Section/Contact/Contact.js
var Contact = __webpack_require__(751);
;// CONCATENATED MODULE: ./src/Section/Demarche/Demarche.js





function Demarche() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row py-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        title: "Processus de travail",
                        subTitle: "Notre d\xe9marche"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Col_4/* default */.Z, {
                one: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    title: "Collecte",
                    subTitle: "d'informations",
                    image: "/img/Action/navigateur-web.png"
                }),
                two: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    title: "Planification",
                    subTitle: "d'idees",
                    image: "/img/Action/application.png"
                }),
                three: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    title: "Analyse",
                    subTitle: "de conception",
                    image: "/img/Action/navigateur-web.png"
                }),
                four: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                    title: "Conception",
                    subTitle: "et r\xe9alisation",
                    image: "/img/Action/presentation-commerciale.png"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/Section/Footer/Footer.js
var Footer = __webpack_require__(629);
// EXTERNAL MODULE: ./src/Section/Hero/Hero.js
var Hero = __webpack_require__(109);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(96);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/Section/Project/Project.js




function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        className: "ProjectSlide",
        // centerMode:true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row py-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        title: "Nos projets r\xe9cents",
                        subTitle: "Ils nous ont fait confiance \uD83D\uDE04"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row py-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                        ...settings,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ProjectCard",
                                "data-aos": "zoom-in",
                                "data-aos-offset": "100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ProjectCard",
                                "data-aos": "zoom-in",
                                "data-aos-offset": "150",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ProjectCard",
                                "data-aos": "zoom-in",
                                "data-aos-offset": "200",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ProjectCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ProjectCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ProjectCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/Section/SavoirPlus/SavoirPlus.js
var SavoirPlus = __webpack_require__(458);
;// CONCATENATED MODULE: ./src/Section/Team/Team.js





function Team() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: "ProjectSlide",
        // centerMode:true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row py-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        title: "Notre team",
                        subTitle: "Qualifi\xe9s et motiv\xe9s"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row py-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                        ...settings,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                dataAos: "zoom-in",
                                dataAosOffset: "100",
                                w: "200px",
                                imgH: 75,
                                // textAlign={'left'}
                                title: "Juliette aka Mina",
                                subTitle: "Fondatrice - chef de projet IT",
                                image: "https://media.licdn.com/dms/image/D4E03AQHsS0XH4SR1AQ/profile-displayphoto-shrink_800_800/0/1667004646741?e=1678320000&v=beta&t=ZlSADxPZwIU_KSHvsaMHg8NxD9RvNRX878hjnVs5Pcg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                dataAos: "zoom-in",
                                dataAosOffset: "150",
                                w: "200px",
                                imgH: 75,
                                // textAlign={'left'}
                                title: "Marcel",
                                subTitle: "Ux designer - D\xe9veloppeur front ",
                                image: "https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                dataAos: "zoom-in",
                                dataAosOffset: "200",
                                w: "200px",
                                imgH: 75,
                                textAlign: "left",
                                title: "Finoana",
                                subTitle: " D\xe9veloppeur Fullstack ",
                                image: "https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                dataAos: "zoom-in",
                                dataAosOffset: "250",
                                w: "200px",
                                imgH: 75,
                                textAlign: "left",
                                title: "Logan",
                                subTitle: "Architecte r\xe9seaux ",
                                image: "https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                w: "200px",
                                imgH: 75,
                                // textAlign={'left'}
                                title: "Juliette aka Mina",
                                subTitle: "Fondatrice - chef de projet IT",
                                image: "https://media.licdn.com/dms/image/D4E03AQHsS0XH4SR1AQ/profile-displayphoto-shrink_800_800/0/1667004646741?e=1678320000&v=beta&t=ZlSADxPZwIU_KSHvsaMHg8NxD9RvNRX878hjnVs5Pcg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                w: "200px",
                                imgH: 75,
                                // textAlign={'left'}
                                title: "Marcel",
                                subTitle: "Ux designer - D\xe9veloppeur front ",
                                image: "https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                w: "200px",
                                imgH: 75,
                                textAlign: "left",
                                title: "Finoana",
                                subTitle: " D\xe9veloppeur Fullstack ",
                                image: "https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                w: "200px",
                                imgH: 75,
                                textAlign: "left",
                                title: "Logan",
                                subTitle: "Architecte r\xe9seaux ",
                                image: "https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/Home.js












function Home() {
    (0,external_react_.useEffect)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                image: "/img/hero/2.png",
                bottom: "20px"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Bienvenu/* default */.Z, {
                image: "/img/hero/2.png",
                paragraphe: `Introduction Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo, Nemo enim ipsam.
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
        quia consequuntur magni dolores eos qui ratione voluptatem,
        ‘sequi nesciunt. Neque porro quisquam `,
                titre: "Bienvenue sur le bar it"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Action, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Project, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Team, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Demarche, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SavoirPlus/* default */.Z, {
                a: 2,
                b: 1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTopButton/* default */.Z, {})
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

/***/ 96:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [897,433], () => (__webpack_exec__(568)));
module.exports = __webpack_exports__;

})();
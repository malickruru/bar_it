"use strict";
(() => {
var exports = {};
exports.id = 736;
exports.ids = [736];
exports.modules = {

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Realisation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/Partials/ScrollToTopButton/ScrollToTopButton.js
var ScrollToTopButton = __webpack_require__(597);
// EXTERNAL MODULE: ./src/Section/Contact/Contact.js
var Contact = __webpack_require__(751);
// EXTERNAL MODULE: ./src/Section/Footer/Footer.js
var Footer = __webpack_require__(629);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(96);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/Section/RealisationSection/RealisationSection.js



function RealisationSection() {
    const [showOverlay, setShowOverlay] = (0,external_react_.useState)(false);
    const [selectedImage, setSelectedImage] = (0,external_react_.useState)(null);
    const handleImageClick = (url)=>{
        setSelectedImage(url);
        setShowOverlay(true);
    };
    const handleOverlayClose = ()=>{
        setShowOverlay(false);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        rows: 3,
        slidesPerRow: 3,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesPerRow: 1,
                    rows: 1,
                    dots: false,
                    autoplay: true
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-5 container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "Realisation-space"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                        ...settings,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                style: {
                                    margin: "20px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "RealisationCard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128",
                                    onClick: ()=>handleImageClick("https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128")
                                })
                            })
                        ]
                    })
                ]
            }),
            showOverlay && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "overlay d-flex flex-column align-items-center justify-content-center position-fixed w-100 h-100",
                style: {
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    zIndex: 9,
                    backdropFilter: "blur(5px)"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: selectedImage,
                        alt: "Selected",
                        onClick: handleOverlayClose,
                        style: {
                            width: "50%"
                        },
                        className: "mt-5 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-primary ",
                        onClick: handleOverlayClose,
                        children: "Fermer"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/Realisation.js






function Realisation() {
    (0,external_react_.useEffect)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(RealisationSection, {}),
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
var __webpack_exports__ = __webpack_require__.X(0, [897], () => (__webpack_exec__(49)));
module.exports = __webpack_exports__;

})();
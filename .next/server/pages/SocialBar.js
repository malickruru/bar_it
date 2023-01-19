"use strict";
(() => {
var exports = {};
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SocialBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/Section/Bienvenu/Bienvenu.js + 1 modules
var Bienvenu = __webpack_require__(925);
// EXTERNAL MODULE: ./src/Section/Hero/Hero.js
var Hero = __webpack_require__(109);
// EXTERNAL MODULE: ./src/Section/SavoirPlus/SavoirPlus.js
var SavoirPlus = __webpack_require__(458);
// EXTERNAL MODULE: ./src/Section/Contact/Contact.js
var Contact = __webpack_require__(751);
// EXTERNAL MODULE: ./src/Section/Footer/Footer.js
var Footer = __webpack_require__(629);
// EXTERNAL MODULE: ./src/Partials/ScrollToTopButton/ScrollToTopButton.js
var ScrollToTopButton = __webpack_require__(597);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: ./src/Assets/Style/Flex.js
var Flex = __webpack_require__(27);
;// CONCATENATED MODULE: ./src/Partials/ImageGrid/ImageGrid.js




const ImageGrid = ()=>{
    const [imageUrls, setImageUrls] = (0,external_react_.useState)([]);
    const [showOverlay, setShowOverlay] = (0,external_react_.useState)(false);
    const [selectedImage, setSelectedImage] = (0,external_react_.useState)(null);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            const response = await fetch("https://picsum.photos/v2/list?limit=9");
            const data = await response.json();
            setImageUrls(data.map((item)=>item.download_url));
            setIsLoading(false);
        };
        fetchData();
    }, []);
    const handleImageClick = (url)=>{
        setSelectedImage(url);
        setShowOverlay(true);
    };
    const handleOverlayClose = ()=>{
        setShowOverlay(false);
    };
    if (isLoading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container p-5",
            style: Flex/* flexRowCenter */._,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "lds-ring",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "image-grid d-flex flex-wrap",
                children: imageUrls.map((url, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "img col-md-4 col-12 p-2",
                        onClick: ()=>handleImageClick(url),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: url,
                                alt: ` ${index + 1}`,
                                style: {
                                    width: "100%"
                                },
                                loading: "lazy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img-hover",
                                style: Flex/* flexRowCenter */._,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        ...Flex/* flexRowCenter */._,
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        backgroundColor: "#fff",
                                        color: "#F27289"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiPlus, {})
                                })
                            })
                        ]
                    });
                })
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
};
/* harmony default export */ const ImageGrid_ImageGrid = (ImageGrid);

// EXTERNAL MODULE: ./src/Partials/Title/Title.js
var Title = __webpack_require__(858);
;// CONCATENATED MODULE: ./src/Section/Ambiance/Ambiance.js




function Ambiance() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row py-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        title: "Ambiance",
                        subTitle: "Notre p\xe9rimetre d'action",
                        disable: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageGrid_ImageGrid, {})
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/SocialBar.js









function SocialBar() {
    (0,external_react_.useEffect)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                image: "/img/hero/1.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Bienvenu/* default */.Z, {
                image: "/img/hero/1.png",
                paragraphe: `Introduction Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo, Nemo enim ipsam.
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
        quia consequuntur magni dolores eos qui ratione voluptatem,
        ‘sequi nesciunt. Neque porro quisquam `,
                titre: "Bienvenue au social bar"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Ambiance, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SavoirPlus/* default */.Z, {
                a: 2,
                b: 0
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
var __webpack_exports__ = __webpack_require__.X(0, [897,433], () => (__webpack_exec__(666)));
module.exports = __webpack_exports__;

})();
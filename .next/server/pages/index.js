(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,561];
exports.modules = {

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOperators": () => (/* binding */ getOperators)
/* harmony export */ });
const fakeOperators = [{
  id: 1,
  name: "МТС",
  logoURL: "https://upload.wikimedia.org/wikipedia/commons/8/86/MTS_logo_2015.svg"
}, {
  id: 2,
  name: "Билайн",
  logoURL: "https://upload.wikimedia.org/wikipedia/commons/7/7a/BeeLine_logo.png"
}, {
  id: 3,
  name: "Мегафон",
  logoURL: "https://upload.wikimedia.org/wikipedia/commons/9/9e/MegaFon_logo.svg"
}];
const getOperators = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(fakeOperators), 2000);
  });
};

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
;// CONCATENATED MODULE: ./common/constants.js
const colors = {
  primary: "#623CE7",
  text_dark: "#242424",
  text_gray_light: "#afafaf",
  red: "#D83749",
  btn_primary_hover: "#4924CA",
  btn_primary_active: "#301a7d",
  btn_primary_focus: "#7E5DF1",
  btn_primary_text_disabled: "#BEBEBE",
  btn_primary_disable: "#ACA0D2",
  shadow_primary: "rgba(98, 60, 231, 0.25)"
};
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "540px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
const PAY_PATH = "/pay";
;// CONCATENATED MODULE: ./styles/OperatorsList.js


const OperatorsStyled = (external_styled_components_default()).ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0 16px;

  & > li {
    width: 100%;
    margin-top: 25px;
  }

  @media ${device.mobileXL} {
    & > li {
      width: 49%;
    }
  }

  @media ${device.tablet} {
    & > li {
      width: 32%;
    }
  }
`;
const OperatorsLoaderStyled = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  & img {
    width: 100px;
  }
`;
const OperatorsEmptyListStyled = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  & span {
    font-weight: 500;
    font-size: 50px;
    color: ${colors.text_gray_light};
    text-align: center;
  }
`;
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(409);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./pages/api/app.tsx
var app = __webpack_require__(843);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/index.tsx









const Home = props => {
  console.log(props);
  const {
    0: showLoader,
    1: setShowLoader
  } = (0,external_react_.useState)(true);
  const {
    0: operators,
    1: setOperators
  } = (0,external_react_.useState)([]);

  if (showLoader) {
    return /*#__PURE__*/jsx_runtime_.jsx(OperatorsLoaderStyled, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/spinner.svg",
        alt: "loader"
      })
    });
  }

  if (!operators.length) {
    return /*#__PURE__*/jsx_runtime_.jsx(OperatorsEmptyListStyled, {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\u0421\u043F\u0438\u0441\u043E\u043A \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u043F\u0443\u0441\u0442"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Home_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Create Next App"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: (Home_module_default()).main,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        className: (Home_module_default()).title,
        children: ["Welcome to ", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://nextjs.org",
          children: "Next.js!"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: (Home_module_default()).description,
        children: ["Get started by editing", " ", /*#__PURE__*/jsx_runtime_.jsx("code", {
          className: (Home_module_default()).code,
          children: "pages/index.js"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).grid,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "https://nextjs.org/docs",
          className: (Home_module_default()).card,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Documentation \u2192"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Find in-depth information about Next.js features and API."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "https://nextjs.org/learn",
          className: (Home_module_default()).card,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Learn \u2192"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Learn about Next.js in an interactive course with quizzes!"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "https://github.com/vercel/next.js/tree/master/examples",
          className: (Home_module_default()).card,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Examples \u2192"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Discover and deploy boilerplate example Next.js projects."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
          className: (Home_module_default()).card,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Deploy \u2192"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Instantly deploy your Next.js site to a public URL with Vercel."
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: (Home_module_default()).footer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (Home_module_default()).logo,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            width: 72,
            height: 16
          })
        })]
      })
    })]
  });
};

async function getStaticProps(context) {
  console.log("getStaticProps");
  console.log(context);
  const res = await (0,app.getOperators)();
  console.log(res); // Call an external API endpoint to get posts

  return {
    props: {} // will be passed to the page component as props

  };
}
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 409:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(23)));
module.exports = __webpack_exports__;

})();
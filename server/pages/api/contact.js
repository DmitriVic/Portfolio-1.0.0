"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    (__webpack_require__(5142).config)();
    let nodemailer = __webpack_require__(5184);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.mail.ru",
        auth: {
            user: "mis_sham@mail.ru",
            pass: "M9Pu3wg8c21us3N8ZAkp"
        },
        secure: true
    });
    const mailData = {
        from: "mis_sham@mail.ru",
        to: "mr_vlasov@mail.ru",
        subject: `Сообщение от ${req.body.name}`,
        text: req.body.message + " | Pnone number: " + req.body.newPhone,
        html: `<div>${req.body.message}</div><p> Отправить на номер:
		  ${req.body.newPhone} </p>`
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    res.status(200);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7221));
module.exports = __webpack_exports__;

})();
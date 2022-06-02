"use strict";
exports.__esModule = true;
exports.options = void 0;
var multer_1 = require("multer");
var path_1 = require("path");
exports.options = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: function (req, file, cb) {
            var randomName = Array(32)
                .fill(null)
                .map(function () { return Math.round(Math.random() * 16).toString(16); })
                .join('');
            cb(null, "".concat(randomName).concat((0, path_1.extname)(file.originalname)));
        }
    })
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_controller_1 = __importDefault(require("./test.controller"));
const router = express_1.Router();
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
router.post('/v1/test/algorithm', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Ronny!');
    const dir = Direction.Up;
    console.log(dir);
    console.log(req.body);
    yield test_controller_1.default.algorithm(req)
        .then((response) => {
        // standarResponse({ res, req, response })
        return response;
    })
        .catch((e) => next(e));
}));
exports.default = router;
//# sourceMappingURL=test.router.js.map
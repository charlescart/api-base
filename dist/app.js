"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const server_1 = __importDefault(require("./server/server"));
const test_router_1 = __importDefault(require("./features/test/test.router"));
// const port: number = process.env.PORT;
const server = server_1.default.init(3000);
server.app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(`${__dirname}/public`));
});
server.app.use(test_router_1.default);
server.start(() => {
    console.log(`Running in port: ${3000}`);
});
//# sourceMappingURL=app.js.map
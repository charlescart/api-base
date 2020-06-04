"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000 || process.env.PORT;
// const routePrefix = process.env.ROUTE_PREFIX || '/api';
// app.use(routePrefix, express.static(`${__dirname}/public`));
routing_controllers_1.useExpressServer(app, {
    routePrefix: '/api',
    cors: true,
    controllers: [`${__dirname}/features/**/*Controller.js`]
});
app.listen(port, function () {
    console.log(`Run in the port ${port}`);
});
//# sourceMappingURL=app.js.map
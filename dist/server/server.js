"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    static init(port) {
        if (!this.server)
            this.server = new Server(port);
        return new Server(port);
    }
    start(callback) {
        this.app.listen(this.port, callback);
        this.publicPath();
    }
    publicPath() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map
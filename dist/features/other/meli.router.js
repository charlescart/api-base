"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.json({ ok: true });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ id, ok: true });
});
exports.default = router;
//# sourceMappingURL=meli.router.js.map
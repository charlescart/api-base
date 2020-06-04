"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testRepository = {
    algorithm: (body) => {
        // eslint-disable-next-line prefer-const
        let { a, b } = body;
        if (b == 1)
            return a;
        else {
            b = b - 1;
            return (a + testRepository.algorithm({ a, b }));
        }
    }
};
exports.default = testRepository;
//# sourceMappingURL=test.repository.js.map
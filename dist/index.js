"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const health_controller_1 = require("./api/controllers/health.controller");
const app = (0, express_1.default)();
const port = 3000;
const v1_BASE_PATH = '/api/v1';
app.use(v1_BASE_PATH, health_controller_1.healthRouter);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

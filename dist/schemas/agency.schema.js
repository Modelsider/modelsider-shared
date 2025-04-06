"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyTypeEnum = void 0;
const zod_1 = require("zod");
exports.AgencyTypeEnum = zod_1.z.enum(["mother", "booking"]);

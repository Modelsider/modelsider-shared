"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
const zod_1 = require("zod");
exports.CommentSchema = zod_1.z.object({
    id: zod_1.z.number(),
    text: zod_1.z.string(),
    user_id: zod_1.z.string(),
    agency_id: zod_1.z.number(),
    agency_name: zod_1.z.string(),
    agency_type: zod_1.z.string(),
    type: zod_1.z.literal("Comment"),
    types: zod_1.z.array(zod_1.z.string()),
    is_anonymous: zod_1.z.boolean(),
    created_at: zod_1.z.union([zod_1.z.string(), zod_1.z.date()]).optional(),
    likes_count: zod_1.z.number().optional(),
    replies_count: zod_1.z.number().optional(),
    attachments: zod_1.z.array(zod_1.z.any()).optional(),
});

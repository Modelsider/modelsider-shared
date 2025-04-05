"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersByIdsInputSchema = exports.UserInfoSchema = exports.UserStatusTypeEnum = void 0;
const zod_1 = require("zod");
exports.UserStatusTypeEnum = zod_1.z.enum([
    "waiting",
    "approved",
    "refused",
    "default",
    "",
]);
exports.UserInfoSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    dateOfBirth: zod_1.z.string(),
    location: zod_1.z.string(),
    email: zod_1.z.string(),
    userName: zod_1.z.string(),
    profilePictureUrl: zod_1.z.string(),
    status: exports.UserStatusTypeEnum,
    notifications: zod_1.z.object({
        bookmarksAgencies: zod_1.z.boolean(),
        bookmarksComments: zod_1.z.boolean(),
        likes: zod_1.z.boolean(),
        replies: zod_1.z.boolean(),
        news: zod_1.z.boolean(),
    }),
    docId: zod_1.z.string(),
    is_anonymous: zod_1.z.boolean().optional(),
    created_at: zod_1.z.any().optional(),
    is_first_time_login: zod_1.z.boolean().nullable(),
    gender: zod_1.z.string(),
    size: zod_1.z.string(),
    height: zod_1.z.string(),
    notifications_count: zod_1.z.number().optional(),
});
exports.GetUsersByIdsInputSchema = zod_1.z.object({
    usersIds: zod_1.z.array(zod_1.z.string()),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkAllNotificationsAsReadOutputSchema = exports.MarkAllNotificationsAsReadInputSchema = exports.GetNotificationsOutputSchema = exports.UserSchema = exports.GetNotificationsInputSchema = exports.SaveDeviceTokenOutputSchema = exports.SaveDeviceTokenInputSchema = exports.NotificationSchema = exports.NotificationTypeEnum = void 0;
const zod_1 = require("zod");
exports.NotificationTypeEnum = zod_1.z.enum(["like", "reply"]);
exports.NotificationSchema = zod_1.z.object({
    body: zod_1.z.string(),
    title: zod_1.z.string(),
    deeplink: zod_1.z.string().optional(),
    timestamp: zod_1.z.union([zod_1.z.string(), zod_1.z.date()]),
    user_from_id: zod_1.z.string(),
    user_to_id: zod_1.z.string(),
    type: exports.NotificationTypeEnum,
});
exports.SaveDeviceTokenInputSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    deviceToken: zod_1.z.string(),
});
exports.SaveDeviceTokenOutputSchema = zod_1.z.object({
    status: zod_1.z.enum(["saved", "exists"]),
});
exports.GetNotificationsInputSchema = zod_1.z.object({
    userId: zod_1.z.string(),
});
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    avatar: zod_1.z.string().optional(),
});
exports.GetNotificationsOutputSchema = exports.NotificationSchema.extend({
    user: exports.UserSchema.nullable(),
});
exports.MarkAllNotificationsAsReadInputSchema = zod_1.z.object({
    userId: zod_1.z.string(),
});
exports.MarkAllNotificationsAsReadOutputSchema = zod_1.z.object({
    status: zod_1.z.literal("ok"),
});

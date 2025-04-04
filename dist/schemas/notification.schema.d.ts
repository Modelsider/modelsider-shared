import { z } from "zod";
export declare const NotificationTypeEnum: z.ZodEnum<["like", "reply"]>;
export declare const NotificationSchema: z.ZodObject<{
    body: z.ZodString;
    title: z.ZodString;
    deeplink: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodUnion<[z.ZodString, z.ZodDate]>;
    user_from_id: z.ZodString;
    user_to_id: z.ZodString;
    type: z.ZodEnum<["like", "reply"]>;
}, "strip", z.ZodTypeAny, {
    type: "like" | "reply";
    body: string;
    title: string;
    timestamp: string | Date;
    user_from_id: string;
    user_to_id: string;
    deeplink?: string | undefined;
}, {
    type: "like" | "reply";
    body: string;
    title: string;
    timestamp: string | Date;
    user_from_id: string;
    user_to_id: string;
    deeplink?: string | undefined;
}>;
export declare const SaveDeviceTokenInputSchema: z.ZodObject<{
    userId: z.ZodString;
    deviceToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
    deviceToken: string;
}, {
    userId: string;
    deviceToken: string;
}>;
export declare const SaveDeviceTokenOutputSchema: z.ZodObject<{
    status: z.ZodEnum<["saved", "exists"]>;
}, "strip", z.ZodTypeAny, {
    status: "saved" | "exists";
}, {
    status: "saved" | "exists";
}>;
export declare const GetNotificationsInputSchema: z.ZodObject<{
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
}, {
    userId: string;
}>;
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
    avatar?: string | undefined;
}, {
    id: string;
    name?: string | undefined;
    avatar?: string | undefined;
}>;
export declare const GetNotificationsOutputSchema: z.ZodObject<z.objectUtil.extendShape<{
    body: z.ZodString;
    title: z.ZodString;
    deeplink: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodUnion<[z.ZodString, z.ZodDate]>;
    user_from_id: z.ZodString;
    user_to_id: z.ZodString;
    type: z.ZodEnum<["like", "reply"]>;
}, {
    user: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name?: string | undefined;
        avatar?: string | undefined;
    }, {
        id: string;
        name?: string | undefined;
        avatar?: string | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    type: "like" | "reply";
    body: string;
    title: string;
    user: {
        id: string;
        name?: string | undefined;
        avatar?: string | undefined;
    } | null;
    timestamp: string | Date;
    user_from_id: string;
    user_to_id: string;
    deeplink?: string | undefined;
}, {
    type: "like" | "reply";
    body: string;
    title: string;
    user: {
        id: string;
        name?: string | undefined;
        avatar?: string | undefined;
    } | null;
    timestamp: string | Date;
    user_from_id: string;
    user_to_id: string;
    deeplink?: string | undefined;
}>;
export declare const MarkAllNotificationsAsReadInputSchema: z.ZodObject<{
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
}, {
    userId: string;
}>;
export declare const MarkAllNotificationsAsReadOutputSchema: z.ZodObject<{
    status: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    status: "ok";
}, {
    status: "ok";
}>;
export type SaveDeviceTokenInput = z.infer<typeof SaveDeviceTokenInputSchema>;
export type SaveDeviceTokenOutput = z.infer<typeof SaveDeviceTokenOutputSchema>;
export type GetNotificationsInput = z.infer<typeof GetNotificationsInputSchema>;
export type User = z.infer<typeof UserSchema>;
export type Notification = z.infer<typeof NotificationSchema>;
export type GetNotificationsOutput = z.infer<typeof GetNotificationsOutputSchema>;
export type MarkAllNotificationsAsReadInput = z.infer<typeof MarkAllNotificationsAsReadInputSchema>;
export type MarkAllNotificationsAsReadOutput = z.infer<typeof MarkAllNotificationsAsReadOutputSchema>;
export type INotification = z.infer<typeof NotificationSchema>;
export type NotificationType = z.infer<typeof NotificationTypeEnum>;

import { z } from "zod";

export const NotificationTypeEnum = z.enum(["like", "reply"]);

export const NotificationSchema = z.object({
  body: z.string(),
  title: z.string(),
  deeplink: z.string().optional(),
  timestamp: z.any(),
  comment: z.string().optional(),
  user_from_id: z.string(),
  user_to_id: z.string(),
  type: NotificationTypeEnum,
});

export const SaveDeviceTokenInputSchema = z.object({
  userId: z.string(),
  deviceToken: z.string(),
});

export const SaveDeviceTokenOutputSchema = z.object({
  status: z.enum(["saved", "exists"]),
});

export const GetNotificationsInputSchema = z.object({
  userId: z.string(),
});

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  avatar: z.string().optional(),
});

export const GetNotificationsOutputSchema = NotificationSchema.extend({
  user: UserSchema.nullable(),
});

export const MarkAllNotificationsAsReadInputSchema = z.object({
  userId: z.string(),
});

export const MarkAllNotificationsAsReadOutputSchema = z.object({
  status: z.literal("ok"),
});

export type SaveDeviceTokenInput = z.infer<typeof SaveDeviceTokenInputSchema>;
export type SaveDeviceTokenOutput = z.infer<typeof SaveDeviceTokenOutputSchema>;
export type GetNotificationsInput = z.infer<typeof GetNotificationsInputSchema>;
export type User = z.infer<typeof UserSchema>;
export type Notification = z.infer<typeof NotificationSchema>;
export type GetNotificationsOutput = z.infer<
  typeof GetNotificationsOutputSchema
>;
export type MarkAllNotificationsAsReadInput = z.infer<
  typeof MarkAllNotificationsAsReadInputSchema
>;
export type MarkAllNotificationsAsReadOutput = z.infer<
  typeof MarkAllNotificationsAsReadOutputSchema
>;
export type INotification = z.infer<typeof NotificationSchema>;
export type NotificationType = z.infer<typeof NotificationTypeEnum>;

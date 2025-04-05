import { z } from "zod";

export const UserStatusTypeEnum = z.enum([
  "waiting",
  "approved",
  "refused",
  "default",
  "",
]);

export const UserInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
  dateOfBirth: z.string(),
  location: z.string(),
  email: z.string(),
  userName: z.string(),
  profilePictureUrl: z.string(),
  status: UserStatusTypeEnum,
  notifications: z.object({
    bookmarksAgencies: z.boolean(),
    bookmarksComments: z.boolean(),
    likes: z.boolean(),
    replies: z.boolean(),
    news: z.boolean(),
  }),
  docId: z.string(),
  is_anonymous: z.boolean().optional(),
  created_at: z.any().optional(),
  is_first_time_login: z.boolean().nullable(),
  gender: z.string(),
  size: z.string(),
  height: z.string(),
  notifications_count: z.number().optional(),
});

export const GetUsersByIdsInputSchema = z.object({
  usersIds: z.array(z.string()),
});

export type IUserInfo = z.infer<typeof UserInfoSchema>;
export type GetUsersByIdsInput = z.infer<typeof GetUsersByIdsInputSchema>;
export type UserStatusType = z.infer<typeof UserStatusTypeEnum>;

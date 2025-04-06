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

export const CreateUserInputSchema = z.object({
  userInfo: UserInfoSchema,
});

export const DeleteUserInputSchema = z.object({
  docId: z.string(),
  uid: z.string(),
});

export const GetUserInputSchema = z.object({
  id: z.string(),
});

export const UpdateUserInputSchema = z.object({
  docId: z.string(),
  data: z.record(z.any()),
});

export const DefaultSuccessResponseSchema = z.object({
  success: z.literal(true),
});

export const GetUserOutputSchema = UserInfoSchema.nullable();

export const GetUsersByIdsOutputSchema = z.array(UserInfoSchema);

export type IUserInfo = z.infer<typeof UserInfoSchema>;
export type GetUsersByIdsInput = z.infer<typeof GetUsersByIdsInputSchema>;
export type UserStatusType = z.infer<typeof UserStatusTypeEnum>;
export type CreateUserInput = z.infer<typeof CreateUserInputSchema>;
export type DeleteUserInput = z.infer<typeof DeleteUserInputSchema>;
export type GetUserInput = z.infer<typeof GetUserInputSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserInputSchema>;
export type DefaultSuccessResponse = z.infer<
  typeof DefaultSuccessResponseSchema
>;
export type GetUserOutput = z.infer<typeof GetUserOutputSchema>;
export type GetUsersByIdsOutput = z.infer<typeof GetUsersByIdsOutputSchema>;

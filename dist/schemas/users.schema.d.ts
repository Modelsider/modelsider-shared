import { z } from "zod";
export declare const UserStatusTypeEnum: z.ZodEnum<["waiting", "approved", "refused", "default", ""]>;
export declare const UserInfoSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    dateOfBirth: z.ZodString;
    location: z.ZodString;
    email: z.ZodString;
    userName: z.ZodString;
    profilePictureUrl: z.ZodString;
    status: z.ZodEnum<["waiting", "approved", "refused", "default", ""]>;
    notifications: z.ZodObject<{
        bookmarksAgencies: z.ZodBoolean;
        bookmarksComments: z.ZodBoolean;
        likes: z.ZodBoolean;
        replies: z.ZodBoolean;
        news: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        news: boolean;
        replies: boolean;
        bookmarksAgencies: boolean;
        bookmarksComments: boolean;
        likes: boolean;
    }, {
        news: boolean;
        replies: boolean;
        bookmarksAgencies: boolean;
        bookmarksComments: boolean;
        likes: boolean;
    }>;
    docId: z.ZodString;
    is_anonymous: z.ZodOptional<z.ZodBoolean>;
    created_at: z.ZodOptional<z.ZodAny>;
    is_first_time_login: z.ZodNullable<z.ZodBoolean>;
    gender: z.ZodString;
    size: z.ZodString;
    height: z.ZodString;
    notifications_count: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    location: string;
    id: string;
    notifications: {
        news: boolean;
        replies: boolean;
        bookmarksAgencies: boolean;
        bookmarksComments: boolean;
        likes: boolean;
    };
    height: string;
    email: string;
    size: string;
    status: "" | "default" | "waiting" | "approved" | "refused";
    dateOfBirth: string;
    userName: string;
    profilePictureUrl: string;
    docId: string;
    is_first_time_login: boolean | null;
    gender: string;
    is_anonymous?: boolean | undefined;
    created_at?: any;
    notifications_count?: number | undefined;
}, {
    name: string;
    location: string;
    id: string;
    notifications: {
        news: boolean;
        replies: boolean;
        bookmarksAgencies: boolean;
        bookmarksComments: boolean;
        likes: boolean;
    };
    height: string;
    email: string;
    size: string;
    status: "" | "default" | "waiting" | "approved" | "refused";
    dateOfBirth: string;
    userName: string;
    profilePictureUrl: string;
    docId: string;
    is_first_time_login: boolean | null;
    gender: string;
    is_anonymous?: boolean | undefined;
    created_at?: any;
    notifications_count?: number | undefined;
}>;
export declare const GetUsersByIdsInputSchema: z.ZodObject<{
    usersIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    usersIds: string[];
}, {
    usersIds: string[];
}>;
export type IUserInfo = z.infer<typeof UserInfoSchema>;
export type GetUsersByIdsInput = z.infer<typeof GetUsersByIdsInputSchema>;
export type UserStatusType = z.infer<typeof UserStatusTypeEnum>;

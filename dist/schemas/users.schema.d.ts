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
export declare const CreateUserInputSchema: z.ZodObject<{
    userInfo: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    userInfo: {
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
    };
}, {
    userInfo: {
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
    };
}>;
export declare const DeleteUserInputSchema: z.ZodObject<{
    docId: z.ZodString;
    uid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    docId: string;
    uid: string;
}, {
    docId: string;
    uid: string;
}>;
export declare const GetUserInputSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const UpdateUserInputSchema: z.ZodObject<{
    docId: z.ZodString;
    data: z.ZodRecord<z.ZodString, z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    data: Record<string, any>;
    docId: string;
}, {
    data: Record<string, any>;
    docId: string;
}>;
export declare const DefaultSuccessResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    success: true;
}, {
    success: true;
}>;
export declare const GetUserOutputSchema: z.ZodNullable<z.ZodObject<{
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
}>>;
export declare const GetUsersByIdsOutputSchema: z.ZodArray<z.ZodObject<{
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
}>, "many">;
export declare const GetUsersByAgencyIdInputSchema: z.ZodObject<{
    agencyId: z.ZodNumber;
    type: z.ZodEnum<["mother", "booking"]>;
}, "strip", z.ZodTypeAny, {
    type: "mother" | "booking";
    agencyId: number;
}, {
    type: "mother" | "booking";
    agencyId: number;
}>;
export declare const GetUsersByAgencyIdOutputSchema: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
}, {
    createdAt: z.ZodNullable<z.ZodAny>;
}>, "strip", z.ZodTypeAny, {
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
    createdAt?: any;
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
    createdAt?: any;
}>, "many">;
export declare const GetAllUsersInputSchema: z.ZodVoid;
export declare const GetAllUsersOutputSchema: z.ZodArray<z.ZodObject<{
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
}>, "many">;
export type GetUsersByAgencyIdInput = z.infer<typeof GetUsersByAgencyIdInputSchema>;
export type GetUsersByAgencyIdOutput = z.infer<typeof GetUsersByAgencyIdOutputSchema>;
export type IUserInfo = z.infer<typeof UserInfoSchema>;
export type GetUsersByIdsInput = z.infer<typeof GetUsersByIdsInputSchema>;
export type UserStatusType = z.infer<typeof UserStatusTypeEnum>;
export type CreateUserInput = z.infer<typeof CreateUserInputSchema>;
export type DeleteUserInput = z.infer<typeof DeleteUserInputSchema>;
export type GetUserInput = z.infer<typeof GetUserInputSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserInputSchema>;
export type DefaultSuccessResponse = z.infer<typeof DefaultSuccessResponseSchema>;
export type GetUserOutput = z.infer<typeof GetUserOutputSchema>;
export type GetUsersByIdsOutput = z.infer<typeof GetUsersByIdsOutputSchema>;
export type GetAllUsersInput = z.infer<typeof GetAllUsersInputSchema>;
export type GetAllUsersOutput = z.infer<typeof GetAllUsersOutputSchema>;

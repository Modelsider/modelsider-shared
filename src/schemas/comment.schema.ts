import { z } from "zod";

export const CommentSchema = z.object({
  id: z.number(),
  text: z.string(),
  user_id: z.string(),
  agency_id: z.number(),
  agency_name: z.string(),
  agency_type: z.string(),
  type: z.literal("Comment"),
  types: z.array(z.string()),
  is_anonymous: z.boolean(),
  created_at: z.union([z.string(), z.date()]).optional(),
  likes_count: z.number().optional(),
  replies_count: z.number().optional(),
  attachments: z.array(z.any()).optional(),
});

export type Comment = z.infer<typeof CommentSchema>;

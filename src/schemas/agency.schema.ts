import { z } from "zod";

export const AgencyTypeEnum = z.enum(["mother", "booking"]);

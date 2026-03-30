import { Prisma } from "@prisma/client";

export type SubmissionDetail = Prisma.SubmissionGetPayload<{
  include: {
    codeSubmissions: true,
    assignment: {
      select: {
        due_at: true
      }
    }
  }
}>
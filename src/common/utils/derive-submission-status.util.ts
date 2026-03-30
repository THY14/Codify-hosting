export type DisplayStatus = 'SUBMITTED' | 'MISSED' | 'LATE' | 'NOT SUBMITTED';

export function deriveSubmissionStatus(
  submittedAt: Date | null,
  dueAt: Date
): DisplayStatus {
  const now = new Date();

  if (!submittedAt) {
    return now > dueAt ? 'MISSED' : 'NOT SUBMITTED';
  }

  if (submittedAt > dueAt) {
    return 'LATE';
  }

  return 'SUBMITTED';
}
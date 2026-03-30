import { ApiProperty, ApiSchema } from '@nestjs/swagger';

@ApiSchema({ name: 'AssignmentListItem' })
export class AssignmentListItemDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  classroomId: number;

  @ApiProperty({ example: 'Homework 1' })
  title: string;

  @ApiProperty({ example: 'Solve exercises 1-10' })
  description: string;

  @ApiProperty({ example: '2025-02-01T23:59:00.000Z' })
  dueAt: Date;

  @ApiProperty({ example: true })
  isPublished: boolean;

  @ApiProperty({ example: 'SUBMITTED', required: false })
  submissionStatus?: string;

  @ApiProperty({ example: '2025-02-02T10:00:00.000Z', required: false })
  submittedAt?: Date;

  @ApiProperty({ example: 85, required: false })
  totalScore?: number;
}
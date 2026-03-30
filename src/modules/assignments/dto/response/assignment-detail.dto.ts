import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { AssignmentChallengeDto } from './assignment-challenge.dto';

@ApiSchema({ name: 'AssignmentDetail' })
export class AssignmentDetailDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Homework 1' })
  title: string;

  @ApiProperty({ example: 'Solve exercises 1-10' })
  description: string;

  @ApiProperty({ example: '2025-02-01T23:59:00.000Z' })
  dueAt: Date;

  @ApiProperty({ example: true })
  isPublished: boolean;

  @ApiProperty({ type: [AssignmentChallengeDto] })
  codingChallenges: AssignmentChallengeDto[];
}
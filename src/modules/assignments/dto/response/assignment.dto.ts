import { ApiProperty, ApiSchema } from '@nestjs/swagger';

@ApiSchema({ name: 'Assignment' })
export class AssignmentDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Homework 1' })
  title: string;

  @ApiProperty({
    example: 'Solve exercises 1-10',
    required: false,
  })
  description?: string;

  @ApiProperty({ example: '2025-02-01T23:59:00.000Z' })
  dueAt: Date;

  @ApiProperty({ example: false })
  isPublished: boolean;
}

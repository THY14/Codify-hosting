import { ApiProperty, ApiSchema } from "@nestjs/swagger";
import { AssignmentTestCaseDto } from "./assignment-testcase.dto";

@ApiSchema({ name: 'AssignmentChallengeDetail' })
export class AssignmentChallengeDetailDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  assignmentId: number;

  @ApiProperty({ example: 1 })
  originalChallengeId: number;

  @ApiProperty({ example: 'FizzBuzz Challenge' })
  title: string;

  @ApiProperty({ example: 'Implement FizzBuzz for 1-100' })
  description: string;

  @ApiProperty({ example: 'function fizzBuzz() {}' })
  startCode: string;

  @ApiProperty({ example: 'typescript' })
  language: string;

  @ApiProperty({ example: 'MEDIUM' })
  difficulty: string;

  // @ApiProperty({ type: String, format: 'date-time' })
  // createdAt: Date;

  // @ApiProperty({ type: String, format: 'date-time' })
  // updatedAt: Date;

  @ApiProperty({ type: [AssignmentTestCaseDto] })
  testCases: AssignmentTestCaseDto[];
}


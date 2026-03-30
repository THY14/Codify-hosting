import { Assignment } from "../assignment.entity";
import { AssignmentChallengeWithTestCases, AssignmentWithChallenges, AssignmentWithSubmission } from "../assignment.types";
import { AssignmentChallenge } from "../assignment-challenge.entity";

export interface AssignmentRepository {
  // 1. CREATE
  create(assignment: Assignment): Promise<Assignment>;

  // 2. READ (SINGLE)
  findById(id: number): Promise<Assignment | null>;
  findAssignmentChallenge(
    assignmentChallengeId: number
  ): Promise<AssignmentChallenge | null>;
  findAssignmentChallengeDetail(
    assignmentId: number,
    challengeId: number
  ): Promise<AssignmentChallengeWithTestCases | null>;

  // 3. READ (COLLECTIONS / RELATIONS)
  findAssignmentChallenges(
    assignmentId: number
  ): Promise<AssignmentChallenge[]>;
  findOneWithChallenges(
    id: number
  ): Promise<AssignmentWithChallenges | null>;
  findAllByClassroom(
    classroomId: number,
    userId: number
  ): Promise<AssignmentWithSubmission[]>;

  // 4. Update
  update(assignment: Assignment): Promise<Assignment>;
  updateAssignmentChallenge(
    assignmentChallengeId: number,
    aChallenge: AssignmentChallenge
  ): Promise<AssignmentChallenge>;

  // 5. DELETE
  deleteById(id: number): Promise<void>;
  removeChallenge(
    assignmentId: number,
    challengeId: number
  ): Promise<boolean>;

  // 6. RELATIONSHIP / ULTILITY METHODS  
  attachChallenges(
    assignmentId: number,
    challengeIds: number[]
  ): Promise<void>;
  challengeExistsInAssignment(
    assignmentId: number,
    challengeId: number
  ): Promise<boolean>;
}

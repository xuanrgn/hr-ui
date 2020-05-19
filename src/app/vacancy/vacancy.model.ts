import { Employee } from '../employee/employee';
import { Candidate } from '../candidate/candidate.model';

export class Vacancy {
  id: string;
  name: string;
  position: string;
  employeeIds: string[];
  candidateIds: string[];
  description: string;
}

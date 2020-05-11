import { Candidate } from '../candidate/candidate.model';
import { Employee } from '../employee/employee';

export class Interview {
  id: string;
  status: string;
  candidate: Candidate;
  employees: Employee[];
  address: string;
  interviewDate: Date;
}

import { Candidate } from '../candidate/candidate.model';

export class Interview {
  id: string;
  status: string;
  candidate: Candidate;
  address: string;
  interviewDate: Date;
}

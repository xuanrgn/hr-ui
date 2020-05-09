import { Employee } from '../employee';

export class Vacancy {
  id: string;
  name: string;
  employees: [Employee];
  candidates: [];
}

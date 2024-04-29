export interface StudentsList {
  id: number;
  name: string;
  lastname: string;
  email: string;
  phone?: string;
  birthdate?: string;
  age?: number;
  courses: string;
  courses_id: number;
  semester?: number;
  average?: number;
  createAt?: number;
}

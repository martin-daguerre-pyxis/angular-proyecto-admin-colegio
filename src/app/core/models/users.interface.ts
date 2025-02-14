export type UserRole = 'ADMIN' | 'USER';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string,
  password: string,
  role: UserRole;
  createdAt?: Date;
}

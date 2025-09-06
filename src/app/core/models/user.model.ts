export interface UserModel {
  id: number;
  username: string;
  email?: string;
  role?: string;
  fullName: string;
  status: string;
  avatar?: string;
}
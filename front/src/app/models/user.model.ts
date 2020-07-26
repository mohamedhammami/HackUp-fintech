export interface UserModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstname: string;
  lastname: string;
  login: string;
  email: string;
  password?: string;
  role: "Client" | "Admin";
}

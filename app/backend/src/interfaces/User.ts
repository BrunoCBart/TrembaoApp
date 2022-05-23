interface IUser {
  id: number;
  username: string;
  password: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface UserPayload {
  id: number;
  username: string;
  admin: boolean;
}

interface UserBody {
  username: string;
  password: string;
  admin?: boolean;
}

export { IUser, UserPayload, UserBody }

export interface LoginDetailsInterface {
  token?: JWTTokenInterface;
  user?: LoginUserInterface;
}

export interface LoginUserInterface {
  _id: string;
  user_name: string;
  role_id: string;
  email_id: string;
  is_email_verified: boolean;
  avatar: string;
  reset_password_verification?: any;
  email_verification?: any;
  reset_email_verification?: any;
  is_registered: boolean;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface JWTTokenInterface {
  accessToken: string;
  refreshToken: string;
}

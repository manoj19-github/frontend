import { create } from "zustand";
import {
  JWTTokenInterface,
  LoginUserInterface,
} from "@/_models/userLogin.models";

export type LoginStoreType = {
  token?: JWTTokenInterface;
  user?: LoginUserInterface;
  updateJWTToken: (token: JWTTokenInterface) => void;
  updateLoginUser: (user: LoginUserInterface) => void;
  logoutUser: () => void;
};

export const useLoginDetails = create<LoginStoreType>((set) => ({
  token: undefined,
  user: undefined,
  updateJWTToken: (token: JWTTokenInterface) => set({ token }),
  updateLoginUser: (user: LoginUserInterface) => set({ user }),
  logoutUser: () => set({ token: undefined, user: undefined }),
}));

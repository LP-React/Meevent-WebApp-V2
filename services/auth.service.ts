import { http } from "@/lib/http";
import { LoginRequest, LoginResponse, SignupRequest } from "@/types/api/auth";
import { SignInResponse } from "next-auth/react";

export const AuthService = {

    login: (payload: LoginRequest) =>
        http<LoginResponse>("/api/Usuarios/loginUsuario", {
            method: "POST",
            data: payload,
        }),

    signup: (payload: SignupRequest) =>
        http<SignInResponse>("/api/Usuarios/registrarUsuario", {
            method: "POST",
            data: payload,
        }),

    verifyEmail: (email: string) =>
        http<boolean>(`/api/Usuarios/verificarEmail/${email}`)
};
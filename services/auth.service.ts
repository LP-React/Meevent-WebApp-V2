import { http } from "@/lib/http";
import { LoginRequest, LoginResponse } from "@/types/api/auth";

export const AuthService = {
    login: (payload: LoginRequest) =>
        http<LoginResponse>("/api/Usuarios/loginUsuario", {
            method: "POST",
            data: payload,
        }),
};

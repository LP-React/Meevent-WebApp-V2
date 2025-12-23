import { http } from "@/lib/http";
import { GetUsersResponse, PatchUserRequest, PatchUserResponse, UsuarioApi } from "@/types/api/users";

export const UsersService = {
    getAll: () =>
        http<GetUsersResponse>("/api/Usuarios/ListarUsuarios"),

    getById: (id: number) =>
        http<UsuarioApi>(`/api/Usuarios/Buscar${id}`),

    getByEmail: (email: string) =>
        http<UsuarioApi>(`/api/Usuarios/Buscar-Por-correo/${email}`),

    editUser: async (id: number, payload: PatchUserRequest) =>
        http<PatchUserResponse>(`/api/Usuarios/editarUsuario?id=${id}`, {
            method: "PATCH",
            data: payload
        })

};

import { http } from "@/lib/http";
import { GetUsersResponse, PatchUserRequest, PatchUserResponse, UsuarioApi } from "@/types/api/users";
import { mapUsuarioFromApi } from "@/types/mappers/user.mapper";

export const UsersService = {
    getAll: () =>
        http<GetUsersResponse>("/api/Usuarios/ListarUsuarios"),

    getById: (id: number) =>
        http<UsuarioApi>(`/api/Usuarios/Buscar${id}`),

    getByEmail: (email: string) =>
        http<UsuarioApi>(`/api/Usuarios/Buscar-Por-correo/${email}`),

    // WITH MAPPER
    // editUser: async (id: number, payload: PatchUserRequest) => {

    //     const resp = await http<PatchUserResponse>(`/api/Usuarios/editarUsuario/${id}`, {
    //         method: "POST",
    //         data: payload
    //     })

    //     return {
    //         success: resp.exitoso,
    //         message: resp.mensaje,
    //         updated_user: mapUsuarioFromApi(resp.usuarioActualizado)
    //     }
    // }

    editUser: async (id: number, payload: PatchUserRequest) =>
        http<PatchUserResponse>(`/api/Usuarios/editarUsuario/${id}`, {
            method: "PATCH",
            data: payload
        })

};

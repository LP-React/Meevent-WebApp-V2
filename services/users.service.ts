import { http } from "@/lib/http";
import { GetUsersResponse, UsuarioApi } from "@/types/api/users";

export const UsersService = {
    getAll: () => http<GetUsersResponse>("/api/Usuarios/ListarUsuarios"),
    getById: (id: number) => http<UsuarioApi>(`/api/Usuarios/Buscar${id}`),
    getByEmail: (email: string) => http<UsuarioApi>(`/api/Usuarios/Buscar-Por-correo/${email}`)
};



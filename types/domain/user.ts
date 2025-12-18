export interface User {
    id: number;
    fullname: string;
    email: string;
    phone: string | null;
    url_profile: string | null;
    birthdate: string | null;
    profile_type: 'artista' | 'normal' | 'organizador';
}

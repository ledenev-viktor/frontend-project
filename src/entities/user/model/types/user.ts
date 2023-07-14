export interface User {
  id: number | string;
  name: string;
}

export interface UserScheme {
  authData?: User;
}

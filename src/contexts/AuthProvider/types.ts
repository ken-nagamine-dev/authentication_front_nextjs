export interface IAuthProvider {
   children: JSX.Element
}

export interface IUser {
   name: string;
   email: string;
   avatar_url: string;
 }
 
 export interface ISignInData {
   email: string;
   password: string;
 }
 
 export interface IAuthContextType {
   isAuthenticated: boolean;
   user: IUser | null;
   signIn: (data: ISignInData) => Promise<void>
   signOut: () =>  Promise<void>
 }
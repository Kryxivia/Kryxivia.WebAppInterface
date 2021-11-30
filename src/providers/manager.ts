import { ErrorResponse } from "./error";
import AuthRequest from "./requests/auth";
import AuthResponse from "./responses/auth";

export default class ManagerProvider
{
    public static baseUrl: string = process.env?.REACT_APP_MANAGER_URL ?? "http://127.0.0.1:3000"

    public static authRequest(authRequest: AuthRequest): Promise<AuthResponse> {
        return new Promise<AuthResponse>((resolve, reject) => {
            fetch(`${this.baseUrl}api/v1/login`, {
                method: 'post',
                body:    JSON.stringify(authRequest),
                headers: { 'Content-Type': 'application/json' },
            })
            .then((res: any) => {
                (res.status === 200) ? resolve(res.json() as AuthResponse) : reject(res.json() as ErrorResponse)
            })
            .catch((error: any) => reject(error));
        })
    }
}
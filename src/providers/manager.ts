import { ErrorResponse } from "./error";
import AuthRequest from "./requests/auth";
import AuthResponse from "./responses/auth";
import { MintResponse } from "./responses/mint";

export default class ManagerProvider {
    public static baseUrl: string = process.env?.REACT_APP_MANAGER_URL ?? "http://127.0.0.1:3000";

    public static authRequest(authRequest: AuthRequest): Promise<AuthResponse> {
        return new Promise<AuthResponse>((resolve, reject) => {
            fetch(`${this.baseUrl}api/v1/login`, {
                method: "post",
                body: JSON.stringify(authRequest),
                headers: { "Content-Type": "application/json" },
            })
                .then((res: any) => {
                    res.status === 200 ? resolve(res.json() as AuthResponse) : reject(res.json() as ErrorResponse);
                })
                .catch((error: any) => reject(error));
        });
    }

    public static claimRewardRequest(accessToken: string): Promise<MintResponse> {
        return new Promise<MintResponse>((resolve, reject) => {
            fetch(`${this.baseUrl}api/v1/alpha/claim`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then((res: any) => {
                    res.status === 200 ? resolve(res.json() as MintResponse) : reject(res.text() as string);
                })
                .catch((error: any) => {
                    reject(error)
                });
        });
    }
}

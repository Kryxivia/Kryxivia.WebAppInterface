import ManagerProvider from "../providers/manager"
import AuthResponse from "../providers/responses/auth"


export default class WalletService {
    public static async authWallet(addr: string, sign: string): Promise<boolean> {
        try {
            const result: AuthResponse = await ManagerProvider.authRequest({
                publicKey: addr,
                signature: sign
            })
        
            if (result) {
                localStorage.setItem('session-' + addr.toLowerCase(), JSON.stringify({token: result.token, addr: addr}))
            }
            return result.auth;
        }
        catch (error) {
            console.error(error)
            return false;
        }
    }

    public static verifySessionIntegrity(currAcc: string): boolean {
        if (localStorage.getItem("session-" + currAcc.toLowerCase()) != null) {
            const session = JSON.parse(localStorage.getItem("session-" + currAcc.toLowerCase()) as string)
            return session !== undefined;
          }
        else if (localStorage.getItem("session-" + currAcc) == null) {
            return false;
        }
        return false;
    }

}
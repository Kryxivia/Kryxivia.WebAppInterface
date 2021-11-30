import ManagerProvider from "../providers/manager"
import AuthResponse from "../providers/responses/auth"


export default class WalletService {
    public static async authWallet(addr: string, sign: string): Promise<boolean>
    {
        try
        {
            const result: AuthResponse = await ManagerProvider.authRequest({
                publicKey: addr,
                signature: sign
            })
        
            if (result) {
                localStorage.setItem('session', JSON.stringify({token: result.token, addr: addr}))
            }
            return result.auth;
        }
        catch (error)
        {
            console.error(error)
            return false;
        }
    }

    public static verifySessionIntegrity(currAcc: string): boolean {
        if (localStorage.getItem("session") != null) {
            const session = JSON.parse(localStorage.getItem("session") as string)
            if (session.addr !== currAcc) { 
              localStorage.removeItem('session')
              return false;
            }
          }
        else if (localStorage.getItem("session") == null) { return false; }
        
        return true;
    }

}
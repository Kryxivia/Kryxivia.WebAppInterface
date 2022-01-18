import ManagerProvider from "../providers/manager"
import { MintResponse } from "../providers/responses/mint";


export default class MintService {
    public static async claimReward(account: string | null | undefined): Promise<MintResponse>  {
        try  {
            const session = JSON.parse(localStorage.getItem("session-" + (account || "").toLowerCase()) as string);
            if (!session) {
                // eslint-disable-next-line
                throw "Sign-in to the website by signing the message from your wallet."
            }
            const result: MintResponse = await ManagerProvider.claimRewardRequest(session.token);
            return result;
        }
        catch (error)  {
            return await error as any;
        }
    }
}
import ManagerProvider from "../providers/manager"
import { RegisterAlpha } from "../providers/responses/register_alpha";

export default class RegisterAlphaService {
    public static async register(contactDiscord: string, contactTelegram: string, contactEmail: string): Promise<Boolean>
    {
        try
        {
            const session = JSON.parse(localStorage.getItem('session') as string);
            const result = await ManagerProvider.registerAlphaRequest(
                session.token,
                contactDiscord,
                contactTelegram,
                contactEmail
            );
            return result;
        }
        catch (error)
        {
            return await error as any;
        }
    }

    public static async get(): Promise<RegisterAlpha>
    {
        try
        {
            const session = JSON.parse(localStorage.getItem('session') as string);
            const result: RegisterAlpha = await ManagerProvider.getRegisterAlphaRequest(session.token);
            return result;
        }
        catch (error)
        {
            return await error as any;
        }
    }
}

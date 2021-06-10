import { BulkSendMessageOptionsRaw, SendMessageOptions, SendMessageResult } from '../interfaces';
export default class API {
    static BASE_URL: string;
    static SEND_URL: string;
    static Send(key: string, user_id: string, sender: string, options: SendMessageOptions): Promise<SendMessageResult>;
    static BULK_SEND_URL: string;
    static BulkSend(key: string, user_id: string, sender: string, options: BulkSendMessageOptionsRaw): Promise<SendMessageResult>;
}

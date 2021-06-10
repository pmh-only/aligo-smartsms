import { post } from 'superagent'
import { BulkSendMessageOptionsRaw, SendMessageOptions, SendMessageResult } from '../interfaces'

const BASE_URL = 'https://apis.aligo.in'

export default class API {
  public static BASE_URL = BASE_URL
  public static SEND_URL = BASE_URL + '/send/'
  public static async Send (key: string, user_id: string, sender: string, options: SendMessageOptions) {
    const res = await post(this.SEND_URL)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ key, user_id, sender, ...options })

    return res.body as SendMessageResult
  }

  public static BULK_SEND_URL = BASE_URL + '/send_mass/'
  public static async BulkSend (key: string, user_id: string, sender: string, options: BulkSendMessageOptionsRaw) {
    const res = await post(this.SEND_URL)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ key, user_id, sender, ...options })

    return res.body as SendMessageResult
  }
}

import { Interface } from "readline"

export type MessageType = 'SMS' | 'LMS' | 'MMS'
export type TestModeType = 'Y' | 'N'

export interface InitOptions {
  /** 인증용 API Key */
  key: string

  /** 사용자id */
  user_id: string

  /** 발신자 전화번호 (최대 16bytes) */
  sender: string
}

export interface SendMessageOptions {
  /** 수신자 전화번호 - 최대 1천명 */
  receiver: string[] | string

  /** 메시지 내용 */
  msg: string

  /** SMS(단문) , LMS(장문), MMS(그림문자) 구분 */
  msg_type?: MessageType
  
  /** 문자제목(LMS,MMS만 허용) */
  title?: string

  /** %고객명% 치환용 입력 */
  destination?: string

  /** 예약일 (현재일이상) */
  rdate?: string

  /** 예약시간 - 현재시간기준 10분이후 */
  rtime?: string

  /** 첨부이미지 */
  image?: Buffer

  /**
   * 연동테스트시 Y 적용
   * 
   * testmode_yn 을 Y로 설정하시는 경우 과금프로세스와
   * 실제문자 전송을 제외한 나머지가 실제와 동일하게
   * 동작이 되므로 연동작업시 유용하게 사용하실 수 있습니다.
   * */
  testmode_yn?: TestModeType
}

export interface SendMessageResult {
  /** 결과코드(API 수신유무) */
  result_code: number

  /** 결과 메세지( result_code 가 0 보다 작은경우 실패사유 표기) */
  message: string

  /** 메세지 고유 ID */
  msg_id: number

  /** 요청성공 건수 */
  success_cnt: number

  /** 요청실패 건수 */
  error_cnt: number

  /** 메시지 타입 (1. SMS, 2.LMS, 3. MMS) */
  msg_type: MessageType
}

export interface BulkSendMessageOptions {
  /** 보낼 메시지 목록 */
  msg: {
    /** 수신자 전화번호 */
    receiver: string

    /** 메시지 내용 */
    content: string
  }[]

  /** SMS(단문) , LMS(장문), MMS(그림문자) 구분 */
  msg_type: MessageType

  /** 메세지 전송건수(번호,메세지 매칭건수) */
  cnt?: number

  /** 문자제목(LMS,MMS만 허용) */
  title?: string

  /** 예약일 (현재일이상) */
  rdate?: string

  /** 예약시간 - 현재시간기준 10분이후 */
  rtime?: string

  /** 첨부이미지 */
  image?: Buffer

  /**
   * 연동테스트시 Y 적용
   * 
   * testmode_yn 을 Y로 설정하시는 경우 과금프로세스와
   * 실제문자 전송을 제외한 나머지가 실제와 동일하게
   * 동작이 되므로 연동작업시 유용하게 사용하실 수 있습니다.
   * */
  testmode_yn?: TestModeType
}

export interface BulkSendMessageOptionsRaw {
  msg_type: MessageType
  cnt: number
  title?: string
  rdate?: string
  rtime?: string
  image?: Buffer
  testmode_yn?: TestModeType
  [key: string]: any
}

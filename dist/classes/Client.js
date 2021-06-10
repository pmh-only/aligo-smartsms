"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var API_1 = __importDefault(require("./API"));
/**
 * 알리고 문자 API를 사용하기 위한 클라이언트
 */
var Client = /** @class */ (function () {
    function Client(_a) {
        var key = _a.key, user_id = _a.user_id, sender = _a.sender;
        this.key = key;
        this.sender = sender;
        this.user_id = user_id;
    }
    /**
     * 문자보내기
     *
     * 동일한 내용의 문자를 컴마(,)로 분기하여 동시 1천명에게 전송하실 수 있습니다.
       * 발신번호는 사이트내에서 미리 등록된 번호만 사용하실 수 있습니다.
       * msg_type을 지정하지 않으시면 90byte를 초과하는 메시지 발송 시 LMS(첨부파일 없는 MMS) 형태로 자동 전환됩니다.
     * (단, 시스템별 개행문자등의 Byte가 다를 수 있으므로 전송전 90Byte 체크를 하여 msg_type을 지정하시는것을 권장합니다.)
     */
    Client.prototype.sendMessages = function (options) {
        if (Array.isArray(options.receiver))
            options.receiver = options.receiver.join(',');
        if (options.receiver.split(',').length > 999)
            throw new Error('최대 전송 가능 수신자수 1천명을 넘김');
        return API_1.default.Send(this.key, this.user_id, this.sender, options);
    };
    /**
     * 문자보내기(대량)
     *
     * 각각 다른 내용의 문자를 500명에게 동시 전송하실 수 있습니다.
     * 사이트내 엑셀전송하기와 동일한 기능이며, 수신인1\~500 / 내용1\~500 을 각각 설정할 수 있습니다.
     * 단문(SMS),장문(LMS) 구분을 직접 선택하셔야 하며 혼용은 불가합니다.
     * title(문자제목)항목은 LMS,MMS에만 적용되며, 설정시 1~500번 문자에 공통으로 적용됩니다.
     * 그림문자(사진첨부) 전송시 수신번호별 개별설정이 불가능하므로 동일사진 첨부시에만 사용하시기 바랍니다.
     */
    Client.prototype.bulkSendMessages = function (options) {
        var optionsRaw = options;
        if (options.cnt > 500)
            throw new Error('최대 전송 가능 수신자수 5백명을 넘김');
        for (var i = 1; i <= optionsRaw.cnt; i++) {
            optionsRaw['msg_' + i] = options.msg[i].content;
            optionsRaw['rec_' + i] = options.msg[i].receiver;
        }
        return API_1.default.BulkSend(this.key, this.user_id, this.sender, optionsRaw);
    };
    return Client;
}());
exports.Client = Client;

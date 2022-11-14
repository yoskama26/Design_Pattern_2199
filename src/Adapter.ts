import { Yamato } from './Yamato'
export class Message {
    public request(message : string): void {
        Yamato.getInstance().cockpitMessage(`Global info [ ${message} is equipped ]`);
    }
}

export class EncrypMessage {
    public specificRequest(message: string): string {
        return message;
    }
}

export class Adapter extends Message {
    private msg: EncrypMessage;

    constructor(message: EncrypMessage) {
        super();
        this.msg = message;
    }

    public request(message: string): void {
        const result = this.msg.specificRequest(message).split('').reverse().join('');
        Yamato.getInstance().cockpitMessage(`L'adapter (adaptateur en francais) ${result} est équipé ]`);
    }
}

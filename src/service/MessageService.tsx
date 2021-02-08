export class Message {
    ch1: Array<string>;
    ch2: Array<string>;
    constructor(ch1: Array<string>, ch2: Array<string>) {
      this.ch1 = ch1;
      this.ch2 = ch2;
    }
  };

const apiHttp = 'http';
const apiURL = 'localhost';
const apiPort = '4000';

export default class MessageService {
    getBaseURL() : string {
        return apiHttp + `://` + apiURL + `:` + apiPort + `/api/`;
    };

    getChannels(): Promise<string[]> {
        return fetch(this.getBaseURL() + `channels`)
            .then(res => res.json())
    }

    getChannelMsg(channel: string): Promise<string[]> {
        return fetch(this.getBaseURL() +`messages/${channel}`)
            .then(res => res.json())
    }

    createChannelMsg(channel: string, msg: string): Promise<Message[]> {
        return fetch(this.getBaseURL() +`${channel}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: '{"' + channel + '":"' + msg +'"}',
        })
        .then(res => res.json())
    }
};
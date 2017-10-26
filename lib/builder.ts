
export interface JSONMessage {
	type: string;
	message: string;
	code?: number;
	extra?: any;
}

export class Message {

	constructor(private type: string, private message: string, private _code?: number, private _extra?: any) {

	}

	public json(): JSONMessage {
		const msg: JSONMessage = {
			type: this.type,
			message: this.message
		};
		// Apply the error code if we're wanting it
		if (this._code) {
			msg.code = this._code;
		}
		// Apply extra meta if needed
		if (this._extra) {
			msg.extra = this._extra;
		}

		return msg;
	}

	public string(): string {
		return JSON.stringify(this.json());
	}

	public code(code: number): Message {
		this._code = code;
		return this;
	}

	public extra(extra: any): Message {
		this._extra = extra;
		return this;
	}
}

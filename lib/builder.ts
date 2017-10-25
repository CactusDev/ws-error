
export interface JSONError {
	type: string;
	message: string;
	code?: number;
	extra?: any;
}

export class Error {

	constructor(private type: string, private message: string, private _code?: number, private _extra?: any) {

	}

	public json(): JSONError {
		const error: JSONError = {
			type: this.type,
			message: this.message
		};
		// Apply the error code if we're wanting it
		if (this._code) {
			error.code = this._code;
		}
		// Apply extra meta if needed
		if (this._extra) {
			error.extra = this._extra;
		}

		return error;
	}

	public string(): string {
		return JSON.stringify(this.json());
	}

	public code(code: number): Error {
		this._code = code;
		return this;
	}

	public extra(extra: any): Error {
		this._extra = extra;
		return this;
	}
}


export interface JSONError {
	message: string;
	code?: number;
	extra?: any;
}

export class Error {

	constructor(private message: string, private code?: number, private extra?: any) {

	}

	public json(): JSONError {
		const error: JSONError = {
			message: this.message
		};
		// Apply the error code if we're wanting it
		if (this.code) {
			error.code = this.code;
		}
		// Apply extra meta if needed
		if (this.extra) {
			error.extra = this.extra;
		}

		return error;
	}

	public string(): string {
		return JSON.stringify(this.json());
	}
}

export class ErrorBuilder {

}

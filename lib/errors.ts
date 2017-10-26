
import { Message } from "./builder";

export function invalidData(message?: string): Message {
	const msg = message || "invalid data sent";
	return new Message("invalid_data", msg);
}

export function closing(reason?: string): Message {
	const msg = reason || "closing";
	return new Message("closing", msg);
}

export function badLogin(message?: string): Message {
	const msg = message || "invalid login";
	return new Message("bad_login", msg);
}

export function ok(message?: string): Message {
	const msg = message || "ok";
	return new Message("accepted", msg);
}

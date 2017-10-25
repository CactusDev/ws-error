
import { Error } from "./builder";

export function invalidData(message?: string): Error {
	const msg = message || "invalid data sent";
	return new Error("invalid_data", msg);
}

export function closing(reason?: string): Error {
	const msg = reason || "closing";
	return new Error("closing", msg);
}

export function badLogin(message?: string): Error {
	const msg = message || "invalid login";
	return new Error("bad_login", msg);
}

export class InternalError extends Error {
	constructor(public message: string, protected code: number = 500, protected description?: string) {
		super(message);
		this.name = this.constructor.name;
		// This allow to capture the exact code error location
		Error.captureStackTrace(this, this.constructor);
	}
}

export class CustomErrors extends Error {
	public readonly statusCode: number

	constructor(message: string, statusCode: number) {
		super(message)
		this.statusCode = statusCode
	}
}

export class BadRequestError extends CustomErrors {
	constructor(message: string) {
		super(message, 400)
	}
}

export class NotFoundError extends CustomErrors {
	constructor(message: string) {
		super(message, 404)
	}
}

export class FailedDependencyError extends CustomErrors {
	constructor(message: string) {
		super(message, 424)
	}
}

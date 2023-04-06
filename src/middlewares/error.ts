import { NextFunction, Request, Response } from 'express'
import { CustomErrors } from '../helpers/customErrors'

export const errorMiddleware = (
	error: Error & Partial<CustomErrors>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = error.statusCode ?? 500
	const message = error.statusCode ? error.message : 'Internal Server Error'
	return res.status(statusCode).json({ message })
}

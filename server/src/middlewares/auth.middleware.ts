import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IDecode {
  _id: string,
  email: string,
  iat: number,
};

export interface CustomRequest extends Request {
  user?: IDecode | undefined
 }

export function authenticateJWT(req: CustomRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      throw new Error("Access denied.");
    }

    const decode = <IDecode> jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
    req.user = decode;
    next();
  } catch (error) {
    res.status(400).send(error);
  }

}
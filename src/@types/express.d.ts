// This overwrites the type of Express to add custom attributes to any type required
// In this case, the property user on request

declare namespace Express {
  // this is not an overwriting, this is an "append"
  export interface Request {
    user: {
      id: string;
    };
  }
}

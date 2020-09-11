export type HTTPStatusCodeType = {
  code: number;
  name: string;
  description?: string;
};

export class HTTPStatusCode implements HTTPStatusCodeType {
  code: number;
  name: string;
  description?: string;

  /**
   *
   */
  constructor(code: number, name: string, descrtiption: string) {
    this.code = code;
    this.name = name;
    this.description = descrtiption;
  }
}

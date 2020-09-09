# http-sts: HTTP status codes mapper from MDN HTTP status codes

## Motivation

This is a mapping based on the actual code number, so for `200` we have `CODE_200`.
The codes contain the number, the name, and also the description gathered from MDN's https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## Install

Just run:

```
npm i http-sts
```

## Description

The codes follow this format:

```ts
export declare type HTTPStatusCodeType = {
  code: number;
  name: string;
  description?: string;
};
```

## Usage

```ts
import { HTTPStatusCodes } from "http-sts";

// do stuff with the codes
console.log(HTTPStatusCodes.CODE_200);

// which outputs something like
/*
HTTPStatusCode {
  code: 200,
  name: 'OK',
  description: 'The request has succeeded. The meaning of the success depends on the HTTP method:\n' +
    'GET: The resource has been fetched and is transmitted in the message body.\n' +
    'HEAD: The entity headers are in the message body.\n' +
    'PUT or POST: The resource describing the result of the action is transmitted in the message body.\n' +
    'TRACE: The message body contains the request message as received by the server'
}
*/
```

## Supported codes

All codes from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status are supported

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

| Status Code | Path     | Name                            | MDN Link                                                     |
| ----------- | -------- | ------------------------------- | ------------------------------------------------------------ |
| 100         | CODE_100 | Continue                        | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100 |
| 101         | CODE_101 | Switching protocol              | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101 |
| 102         | CODE_102 | Processing                      | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102 |
| 103         | CODE_103 | Early hints                     | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103 |
| 200         | CODE_200 | OK                              | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200 |
| 201         | CODE_201 | Created                         | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201 |
| 202         | CODE_202 | Accepted                        | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202 |
| 203         | CODE_203 | Non-Authoritative Information   | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203 |
| 204         | CODE_204 | No Content                      | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204 |
| 205         | CODE_205 | Reset Content                   | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205 |
| 206         | CODE_206 | Partial Content                 | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206 |
| 207         | CODE_207 | Multi-Status                    | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207 |
| 208         | CODE_208 | Already Reported                | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208 |
| 226         | CODE_226 | IM Used                         | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226 |
| 300         | CODE_300 | Multiple Choice                 | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300 |
| 301         | CODE_301 | Moved Permanently               | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301 |
| 302         | CODE_302 | Found                           | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302 |
| 303         | CODE_303 | See Other                       | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303 |
| 304         | CODE_304 | Not Modified                    | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304 |
| 305         | CODE_305 | Use Proxy                       | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305 |
| 306         | CODE_306 | unused                          | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306 |
| 307         | CODE_307 | Temporary Redirect              | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307 |
| 308         | CODE_308 | Permanent Redirect              | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308 |
| 400         | CODE_400 | Bad Request                     | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400 |
| 401         | CODE_401 | Unauthorized                    | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401 |
| 402         | CODE_402 | Payment Required                | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402 |
| 403         | CODE_403 | Forbidden                       | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403 |
| 404         | CODE_404 | Not Found                       | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404 |
| 405         | CODE_405 | Method Not Allowed              | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405 |
| 406         | CODE_406 | Not Acceptable                  | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406 |
| 407         | CODE_407 | Proxy Authentication Required   | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407 |
| 408         | CODE_408 | Request Timeout                 | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408 |
| 409         | CODE_409 | Conflict                        | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409 |
| 410         | CODE_410 | Gone                            | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410 |
| 411         | CODE_411 | Length Required                 | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411 |
| 412         | CODE_412 | Precondition Failed             | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412 |
| 413         | CODE_413 | Payload Too Large               | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413 |
| 414         | CODE_414 | URI Too Long                    | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414 |
| 415         | CODE_415 | Unsupported Media Type          | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415 |
| 416         | CODE_416 | Range Not Satisfiable           | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416 |
| 417         | CODE_417 | Expectation Failed              | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417 |
| 418         | CODE_418 | I'm a teapot                    | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 |
| 421         | CODE_421 | Misdirected Request             | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421 |
| 422         | CODE_422 | Unprocessable Entity            | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422 |
| 423         | CODE_423 | Locked                          | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423 |
| 424         | CODE_424 | Failed Dependency               | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424 |
| 425         | CODE_425 | Too Early                       | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425 |
| 426         | CODE_426 | Upgrade Required                | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426 |
| 428         | CODE_428 | Precondition Required           | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428 |
| 429         | CODE_429 | Too Many Requests               | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429 |
| 431         | CODE_431 | Request Header Fields Too Large | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431 |
| 451         | CODE_451 | Unavailable For Legal Reasons   | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451 |
| 500         | CODE_500 | Internal Server Error           | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 |
| 501         | CODE_501 | Not Implemented                 | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501 |
| 502         | CODE_502 | Bad Gateway                     | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502 |
| 503         | CODE_503 | Service Unavailable             | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503 |
| 504         | CODE_504 | Gateway Timeout                 | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504 |
| 505         | CODE_505 | HTTP Version Not Supported      | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505 |
| 506         | CODE_506 | Variant Also Negotiates         | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506 |
| 507         | CODE_507 | Insufficient Storage            | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507 |
| 508         | CODE_508 | Loop Detected                   | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508 |
| 510         | CODE_510 | Not Extended                    | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510 |
| 511         | CODE_511 | Network Authentication Required | https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511 |

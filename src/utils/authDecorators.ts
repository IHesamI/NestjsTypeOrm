import { Response } from "express";
import { FlimApi } from "src/types";


export function Autheticator(): MethodDecorator {
    return function (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value;
        if (typeof originalMethod == 'function') {
            descriptor.value = function (body: FlimApi, response: Response) {
                // console.error(response);
                const result = originalMethod.apply(target,[body,response]);
                console.error('result');
                return result;
            }
        }
        return descriptor;
    }
}


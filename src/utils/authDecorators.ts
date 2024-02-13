import { Response } from "express";
import { CreateFilmDto } from "src/films/dto/create-film.dto";
import { FlimApi, filmsValidationtype } from "src/types";


export function Validation(type: filmsValidationtype): MethodDecorator {
    return function (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value;
        if (typeof originalMethod == 'function') {
            descriptor.value = function (body: FlimApi, response: Response) {
                const result = originalMethod.apply(target, [body, response]);

                return result;
            }
        }
        return descriptor;
    }
}


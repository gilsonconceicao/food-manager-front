import {StringSchema} from 'yup';
import { registrationNumberValidate } from '../Validations/registrationNumberValidate';

declare module 'yup' {
    interface StringSchema {
        registrationNumberValidate(): StringSchema;
    }
}

StringSchema.prototype.registrationNumberValidate = function () {
    return this.test('registrationNumberValidate', 'CPF informado é inválido', function (value) {
        if (!value) {
            return true;
        }
        return registrationNumberValidate(value);
    });
};
import {StringSchema} from 'yup';
import { registrationNumberValidate } from '../Validations/registrationNumberValidate';

declare module 'yup' {
    interface StringSchema {
        registratioNumberValidate(): StringSchema;
    }
}

StringSchema.prototype.registratioNumberValidate = function () {
    return this.test('registratioNumberValidate', 'CPF informado é inválido', function (value) {
        if (!value) {
            return true;
        }
        return registrationNumberValidate(value);
    });
};
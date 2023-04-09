import validators from './ValidatorConfig';

interface ValidatorResult {
    isValid:    boolean;
    errorMsg:  string;
}

interface ValidatorResultPassword extends ValidatorResult {
    passwordErrorMsg?: string;
}

const unknownValidator: ValidatorResult = {
    isValid:      false,
    errorMsg:   'Неизвестный тип поля',
};

const validValidator: ValidatorResult = {
    isValid:      true,
    errorMsg:     '',
};

const emptyValidator: ValidatorResult = {
    isValid:      false,
    errorMsg:     'Пустое поле',
}

// function validateEmptyField(input: { id: string, value: string }): ValidatorResult {
//     if (input.value === '') {
//         return emptyValidator;
//     }
//
//     return { isValid: true, errorMsg: '' };
// };

function validateInput(input: { id: string, value: string }): ValidatorResult {
    if (input.value === '') {
        return emptyValidator;
    }

    const validator = validators.get(input.id);
    if (!validator) {
        return unknownValidator;
    }

    const isValid = validator.regExp.test(input.value);
    if (!isValid) {
        return { isValid: false, errorMsg: validator.errorMsg };
    }

    return validValidator;
}

function validatePasswords(password: string, repeatPassword: string): ValidatorResultPassword {
    const validatedPassword: ValidatorResult = validateInput({id: 'password', value: password });
    if (!validatedPassword.isValid) {
        return { isValid: false, errorMsg: validatedPassword.errorMsg, passwordErrorMsg: validators.get('repeat-password')?.errorMsg };
    }

    if (password !== repeatPassword) {
        return { isValid: false, errorMsg: validatedPassword.errorMsg, passwordErrorMsg: validators.get('repeat-password')?.errorMsg };
    }

    return { isValid: true, errorMsg: '' };
}

export { ValidatorResult, validateInput, validatePasswords };

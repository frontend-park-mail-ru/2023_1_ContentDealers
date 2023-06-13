import validators from './ValidatorConfig';

export interface ValidatorResult {
    isValid: boolean;
    errorMsg: string;
}

interface ValidatorResultPassword extends ValidatorResult {
    passwordErrorMsg?: string;
}

const unknownValidator: ValidatorResult = {
    isValid: false,
    errorMsg: 'Неизвестный тип поля',
};

const validValidator: ValidatorResult = {
    isValid: true,
    errorMsg: '',
};

function validateInput(input: { id: string; value: string }): ValidatorResult {
    if (input.id === 'avatar') {
        return validValidator;
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
    if (password !== repeatPassword) {
        return {
            isValid: false,
            errorMsg: validators.get('repeat-password')?.errorMsg as string,
            passwordErrorMsg: validators.get('repeat-password')?.errorMsg,
        };
    }

    return { isValid: true, errorMsg: '' };
}

export { validateInput, validatePasswords };

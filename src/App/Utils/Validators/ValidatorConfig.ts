interface IValidator {
    regExp: RegExp;
    errorMsg: string;
}

const validators: Map<string, IValidator> = new Map([
    [
        'email',
        {
            regExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            errorMsg: 'Введённый email имеет некорректный вид',
        },
    ],
    [
        'password',
        {
            regExp: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
            errorMsg:
                'Пароль должен содержать минимум 8 латинских букв, включая одну цифру',
        },
    ],
    [
        'repeat-password',
        {
            regExp: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
            errorMsg: 'Пароли должны совпадать',
        },
    ],
]);

export default validators;

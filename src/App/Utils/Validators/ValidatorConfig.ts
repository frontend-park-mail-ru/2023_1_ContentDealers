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
            errorMsg: 'Пароль должен содержать минимум 8 символов, включая только цифры и латинские буквы',
        },
    ],
    [
        'new-password',
        {
            regExp: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
            errorMsg: 'Пароль должен содержать минимум 8 символов, включая только цифры и латинские буквы',
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

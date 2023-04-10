interface I_REQUEST_METHODS {
    GET: string,
    POST: string,
    PUT: string,
    DELETE: string,
}

const REQUEST_METHODS: I_REQUEST_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

const DEFAULT_AVATAR = '/img/profile/profile.jpg'

const headersWithUnicode: { [index: string]: string } = {
    'Content-Type': 'application/json;charset=utf-8',
};

const headersWithUndefined: { [index: string]: undefined } = {
    'Content-Type': undefined,
};

const failureDefaultStatuses: { [index: string]: string } = {
    '400': 'Неверный запрос',
    '401': 'No Cookie',
    '405': 'Неверный HTTP метод',
    '500': 'Ошибка сервера',
};

interface IApi {
    url: string;
    method: string;
    headers: { [index: string]: string | undefined };
    statuses: {
        success: { [index: string]: string };
        failure: { [index: string]: string };
    };
}

interface IConfig {
    host: string;
    api: { [index: string]: IApi };
}

const config: IConfig = {
    // host: 'http://89.208.199.170/',
    host: 'http://filmium.ru/api',
    api: {
        csrf: {
            url: '/user/csrf',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    // '200': 'Авторизация успешна',
                },
                failure: failureDefaultStatuses,
            },
        },
        signIn: {
            url: '/user/signin',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Авторизация успешна',
                },
                failure: {
                    '404': 'Пользователь не найден',
                    '500': 'Ошибка сервера',
                },
            },
        },
        signUp: {
            url: '/user/signup',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    // '200': 'Регистрация успешна',
                    '201': 'Регистрация успешна',
                },
                failure: {
                    // '404': 'Пользователь не найден',
                    '500': 'Ошибка сервера',
                },
            },
        },
        logout: {
            url: '/user/logout',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Успешно',
                },
                failure: failureDefaultStatuses,
            },
        },
        profile: {
            url: '/user/profile',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Успешно',
                },
                failure: failureDefaultStatuses,
            },
        },
        film: {
            url: '/films/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Фильм успешно получен',
                },
                failure: {
                    // '405': 'Неверный HTTP метод',
                    '500': 'Ошибка сервера',
                },
            },
        },
        selections: {
            url: '/selections',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Подборки успешно получены',
                },
                failure: {
                    // '405': 'Неверный HTTP метод',
                    '500': 'Ошибка сервера',
                },
            },
        },
        person: {
            url: '/persons/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Человек успешно получен',
                },
                failure: {
                    // '405': 'Неверный HTTP метод',
                    '500': 'Ошибка сервера',
                },
            },
        },
        update: {
            url: '/user/update',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные успешно обновлены',
                },
                failure: {
                    // '405': 'Неверный HTTP метод',
                    '500': 'Ошибка сервера',
                },
            },
        },
        avatarUpdate: {
            url: '/user/avatar/update',
            method: REQUEST_METHODS.POST,
            headers: headersWithUndefined,
            statuses: {
                success: {
                    '200': 'Данные успешно обновлены',
                },
                failure: {
                    // '405': 'Неверный HTTP метод',
                    '500': 'Ошибка сервера',
                },
            },
        },
        avatarDelete: {
            url: '/user/avatar/delete',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные успешно обновлены',
                },
                failure: {
                    // '405': 'Неверный HTTP метод',
                    '500': 'Ошибка сервера',
                },
            },
        }
    }
};

export { REQUEST_METHODS, DEFAULT_AVATAR, IApi, config };

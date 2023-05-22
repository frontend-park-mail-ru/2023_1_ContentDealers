interface I_REQUEST_METHODS {
    GET: string;
    POST: string;
    PUT: string;
    DELETE: string;
}

const REQUEST_METHODS: I_REQUEST_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

const CsrfTokenName = 'csrf_token';

const headersWithUnicode: { [index: string]: string } = {
    'Content-Type': 'application/json;charset=utf-8',
};

const headersWithNoCache: { [index: string]: string } = {
    'Content-Type': 'application/json;charset=utf-8',
    'Cache-Control': 'no-cache',
};

// const headersWithEmpty: { [index: string]: string } = {
//     'Content-Type': ,
// };

const failureDefaultStatuses: { [index: string]: string } = {
    '400': 'Неверный запрос',
    // '401': 'No Cookie',
    // '405': 'Неверный HTTP метод',
    '500': 'Ошибка сервера',
};

const customFailures: { [index: string]: string } = {
    '1': 'Пользователь уже существует',
    '2': 'Неверный формат почты',
    '3': 'Пароль должен быть...',
    '4': 'Неверная почта или пароль',
    '5': 'Размер файла выше максимально допустимого',
    '6': 'Файл не является картинкой формата jpg',
    '7': 'Пользователь с этой почтой уже существует',
};

export interface IApi {
    url: string;
    method: string;
    headers: { [index: string]: string };
    statuses: {
        success: { [index: string]: string };
        failure: { [index: string]: string };
    };
}

interface IConfig {
    host: string;
    api: { [index: string]: IApi };
    isAuthUrl: (url: string) => boolean;
}

function isAuthUrl(url: string): boolean {
    return url === config.api.signIn.url || url === config.api.signUp.url;
}

const config: IConfig = {
    // host: 'http://89.208.199.170/',
    host: 'https://filmium.ru/api',
    // host: 'http://89.208.199.170:8100/api',
    api: {
        csrf: {
            url: '/user/csrf',
            method: REQUEST_METHODS.GET,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': '',
                },
                failure: failureDefaultStatuses,
            },
        },
        signIn: {
            url: '/user/signin',
            method: REQUEST_METHODS.POST,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Авторизация успешна',
                },
                failure: failureDefaultStatuses,
            },
        },
        signUp: {
            url: '/user/signup',
            method: REQUEST_METHODS.POST,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Регистрация успешна',
                },
                failure: failureDefaultStatuses,
            },
        },
        logout: {
            url: '/user/logout',
            method: REQUEST_METHODS.POST,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Пользователь вышел',
                },
                failure: failureDefaultStatuses,
            },
        },
        profile: {
            url: '/user/profile',
            method: REQUEST_METHODS.GET,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Данные о пользователе успешно получены',
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
                    '200': 'Данные о фильме успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        series: {
            url: '/series/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные о сериале успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        // seasons: {
        //     url: '/series/{:seriesId}/seasons/{:seasonsId}',
        //     method: REQUEST_METHODS.GET,
        //     headers: headersWithUnicode,
        //     statuses: {
        //         success: {
        //             '200': 'Данные о сезоне успешно получены',
        //         },
        //         failure: failureDefaultStatuses,
        //     },
        // },
        selections: {
            url: '/selections',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Подборки успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        genres: {
            url: '/genres',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Жанры успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        person: {
            url: '/persons/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные о персоне успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        update: {
            url: '/user/update',
            method: REQUEST_METHODS.POST,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Данные успешно обновлены',
                },
                failure: failureDefaultStatuses,
            },
        },
        avatarUpdate: {
            url: '/user/avatar/update',
            method: REQUEST_METHODS.POST,
            headers: {},
            statuses: {
                success: {
                    '200': 'Аватарка успешно обновлена',
                },
                failure: {
                    ...failureDefaultStatuses,
                    '413': 'Слишком большой размер файла',
                },
            },
        },
        avatarDelete: {
            url: '/user/avatar/delete',
            method: REQUEST_METHODS.POST,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Аватарка успешно удалена',
                },
                failure: failureDefaultStatuses,
            },
        },
        search: {
            url: '/search?query={query}&limit={limit}',
            method: REQUEST_METHODS.GET,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Данные успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        favoritesContent: {
            url: '/favorites/content?order={order}',
            method: REQUEST_METHODS.GET,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Данные успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        favoritesContentHas: {
            url: '/favorites/content/{:id}/has',
            method: REQUEST_METHODS.GET,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Данные успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        favoritesContentAdd: {
            url: '/favorites/content/add',
            method: REQUEST_METHODS.POST,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Добавлено в избранное',
                },
                failure: failureDefaultStatuses,
            },
        },
        favoritesContentDelete: {
            url: '/favorites/content/delete',
            method: REQUEST_METHODS.POST,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Удалено из избранного',
                },
                failure: failureDefaultStatuses,
            },
        },
        genresById: {
            url: '/genres/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        selectionsById: {
            url: '/selections/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        payment: {
            url: '/payment/link',
            method: REQUEST_METHODS.GET,
            headers: headersWithNoCache,
            statuses: {
                success: {
                    '200': 'Данные успешно получены',
                },
                failure: failureDefaultStatuses,
            }
        },
        updateViewsTime: {
            url: '/views/update',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': '',
                },
                failure: failureDefaultStatuses,
            },
        },
        viewsHas: {
            url: '/views/content/{:id}/has',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': '',
                },
                failure: failureDefaultStatuses,
            },
        },
        views: {
            url: '/views',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Просмотры успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        addRating: {
            url: '/rating/add',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Рейтинг добавлен',
                },
                failure: failureDefaultStatuses,
            },
        },
        deleteRating: {
            url: '/rating/delete',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Рейтинг удалён',
                },
                failure: failureDefaultStatuses,
            },
        },
        hasRating: {
            url: '/rating/content/{:id}/has',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Рейтинг успешно получен',
                },
                failure: failureDefaultStatuses,
            },
        }
    },
    isAuthUrl,
};

export { REQUEST_METHODS, CsrfTokenName, config, customFailures };

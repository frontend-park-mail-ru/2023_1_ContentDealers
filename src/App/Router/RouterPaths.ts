/**
 * Конфигурация URL адресов приложения
 * @category Router
 * @constant {Object}
 */
const paths = {
    main: '/',
    catalog: '/catalog',
    store: '/store',
    myMovie: '/my-movie',
    settings: '/settings',
    signIn: '/signIn',
    signUp: '/signUp',
    logout: '/logout',
    films: '/films/{:id}',
    persons: '/persons/{:id}',

    series: '/series/{:id}',
}

export default paths;

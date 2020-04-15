import Vue from 'vue'
import Url from 'url-parse'

import VueResource from 'vue-resource'
Vue.use(VueResource);

/*
 * Функция инициализации запросов
 */
export function init(config) {
    return {
        request: (input) => {
            return request({
                config,
                ...input
            })
        }
    }
}

/*
 * Функция отправки запроса
 */
export function request(input) {
    return new Promise((resolve, reject) => {
        validate(input).then(valide => {
            /*
             * Добавление авторизационных данных в запрос
             */
            let headers = {};
            // let accessToken = Cookies.get(constants.AUTH.ACCESS_TOKEN);
            // headers.Authorization = (input.headers && accessToken) ? 'Bearer ' + accessToken : undefined;

            /*
             * Генераци адреса запроса
             */
            let url = Url(input.mock ? input.config.mockApi || input.config.api : input.config.api);
            url.set('pathname', url.pathname + input.url);
            let newQueries = {};

            /*
             * Добавление query параметров
             */
            if (input.query) {
                for (let i in input.query) {
                    let item = input.query[i];
                    if (Array.isArray(item)) {
                        for (let k in item) {
                            let key = `${i}[${k}]`;
                            newQueries[key] = item[k]
                        }
                    }
                    else if (item) {
                        newQueries[i] = item
                    }
                }
            }

            /*
             * Добавление пагинации
             */
            if (input.pagination) {
                let p = input.pagination;
                if (p.limit) {
                    newQueries['limit'] = p.limit
                }

                if (p.page && p.page > 1) {
                    newQueries['offset'] = (p.page - 1) * p.limit
                } else if (p.offset) {
                    newQueries['offset'] = p.offset
                }
            }

            url.set('query', newQueries);

            /*
             * Создание тела запроса
             */
            switch (input.type) {
                case 'POST':
                case 'PUT':
                    /*
                     * Проверка тела запроса
                     */
                    if (!input.body) {
                        reject('Укажите тело запроса')
                    }

                    Vue.http[input.type.toLowerCase()](
                        url.href,
                        input.body,
                        {headers}
                    ).then(response => {
                        resolve(response.body);
                    }, error => {
                        reject(error)
                    });
                    break;

                default:
                    Vue.http.get(url.href, {headers}).then(response => {
                        resolve(input.response ? response : response.body);
                    }, error => {
                        reject(error)
                    })
            }
        }, error => {
            reject(error)
        });
    });
}


/*
 * Валидация запроса
 */
export function validate(input) {
    return new Promise((resolve, reject) => {
        /*
         * Проверка адреса запроса
         */
        if (!input.config && input.config.api) {
            reject('Укажите конфигурационные данные')
        }

        /*
         * Проверка адреса запроса
         */
        if (!input.url) {
            reject('Укажите адрес запроса')
        }

        /*
         * Проверка типа запроса
         */
        if (!input.type) {
            reject('Укажите тип запроса')
        }

        resolve(true)
    });
}

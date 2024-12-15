const brandArr = [
    {
        "title": "Belluna 1",
        "photoSrc": "pictures/models/5891.png",
        "price": 25550,
        "alt": 5981,
        "brand": 'Belluna',
        "year": 2021,
        "article": 12988299,
        "category": "cassette"
    },
    {
        "title": "Daikin 1",
        "photoSrc": "pictures/models/5892.png",
        "price": 60550,
        "alt": 5982,
        "brand": 'Daikin',
        "year": 2022,
        "article": 58692316,
        "category": "multisplit"
    },
    {
        "title": "Sapien 1",
        "photoSrc": "pictures/models/5893.png",
        "price": 40550,
        "alt": 5983,
        "brand": 'Sapien',
        "year": 2023,
        "article": 62063793,
        "category": "ceiling-floor"
    },
    {
        "title": "Nunc 1",
        "photoSrc": "pictures/models/5891.png",
        "price": 35550,
        "alt": 5984,
        "brand": 'Nunc',
        "year": 2019,
        "article": 37574339,
        "category": "canal"
    },
    {
        "title": "Morbi 1",
        "photoSrc": "pictures/models/5892.png",
        "price": 70550,
        "alt": 5985,
        "brand": 'Morbi',
        "year": 2018,
        "article": 90711730,
        "category": "ventilation"
    },
    {
        "title": "In-nulla 1",
        "photoSrc": "pictures/models/5893.png",
        "price": 45550,
        "alt": 5986,
        "brand": 'In-nulla',
        "year": 2017,
        "article": 77936585,
        "category": "freeze"
    },
    {
        "title": "Mauris-interdum 1",
        "photoSrc": "pictures/models/5891.png",
        "price": 20000,
        "alt": 5981,
        "brand": 'Mauris-interdum',
        "year": 2016,
        "article": 17992802,
        "category": "cassette"
    },
    {
        "title": "Quisque-sed 1",
        "photoSrc": "pictures/models/5892.png",
        "price": 60000,
        "alt": 5982,
        "brand": 'Quisque-sed',
        "year": 2015,
        "article": 30477499,
        "category": "multisplit"
    },
    {
        "title": "Magna 1",
        "photoSrc": "pictures/models/5893.png",
        "price": 49550,
        "alt": 5983,
        "brand": 'Magna',
        "year": 2020,
        "article": 68220740,
        "category": "ceiling-floor"
    },
    {
        "title": "Blandit 1",
        "photoSrc": "pictures/models/5891.png",
        "price": 34000,
        "alt": 5984,
        "brand": 'Blandit',
        "year": 2010,
        "article": 24072410,
        "category": "canal"
    },
    {
        "title": "Lacus 1",
        "photoSrc": "pictures/models/5892.png",
        "price": 45500,
        "alt": 5985,
        "brand": 'Lacus',
        "year": 2009,
        "article": 63693803,
        "category": "ventilation"
    },
    {
        "title": "Et-posuere 1",
        "photoSrc": "pictures/models/5893.png",
        "price": 47000,
        "alt": 5986,
        "brand": 'Et-posuere',
        "year": 2008,
        "article": 19058338,
        "category": "freeze"
    },
    {
        "title": "Belluna 2",
        "photoSrc": "pictures/models/5891.png",
        "price": 25550,
        "alt": 5981,
        "brand": 'Belluna',
        "year": 2021,
        "article": 12988299,
        "category": "cassette"
    },
    {
        "title": "Daikin 2",
        "photoSrc": "pictures/models/5892.png",
        "price": 60550,
        "alt": 5982,
        "brand": 'Daikin',
        "year": 2022,
        "article": 58692316,
        "category": "multisplit"
    },
    {
        "title": "Sapien 2",
        "photoSrc": "pictures/models/5893.png",
        "price": 40550,
        "alt": 5983,
        "brand": 'Sapien',
        "year": 2023,
        "article": 62063793,
        "category": "ceiling-floor"
    },
    {
        "title": "Nunc 2",
        "photoSrc": "pictures/models/5891.png",
        "price": 35550,
        "alt": 5984,
        "brand": 'Nunc',
        "year": 2019,
        "article": 37574339,
        "category": "canal"
    },
    {
        "title": "Morbi 2",
        "photoSrc": "pictures/models/5892.png",
        "price": 70550,
        "alt": 5985,
        "brand": 'Morbi',
        "year": 2018,
        "article": 90711730,
        "category": "ventilation"
    },
    {
        "title": "In-nulla 2",
        "photoSrc": "pictures/models/5893.png",
        "price": 45550,
        "alt": 5986,
        "brand": 'In-nulla',
        "year": 2017,
        "article": 77936585,
        "category": "freeze"
    },
    {
        "title": "Mauris-interdum 2",
        "photoSrc": "pictures/models/5891.png",
        "price": 20000,
        "alt": 5981,
        "brand": 'Mauris-interdum',
        "year": 2016,
        "article": 17992802,
        "category": "cassette"
    },
    {
        "title": "Quisque-sed 2",
        "photoSrc": "pictures/models/5892.png",
        "price": 60000,
        "alt": 5982,
        "brand": 'Quisque-sed',
        "year": 2015,
        "article": 30477499,
        "category": "multisplit"
    },
    {
        "title": "Magna 2",
        "photoSrc": "pictures/models/5893.png",
        "price": 49550,
        "alt": 5983,
        "brand": 'Magna',
        "year": 2020,
        "article": 68220740,
        "category": "ceiling-floor"
    },
    {
        "title": "Blandit 2",
        "photoSrc": "pictures/models/5891.png",
        "price": 34000,
        "alt": 5984,
        "brand": 'Blandit',
        "year": 2010,
        "article": 24072410,
        "category": "canal"
    },
    {
        "title": "Lacus 2",
        "photoSrc": "pictures/models/5892.png",
        "price": 45500,
        "alt": 5985,
        "brand": 'Lacus',
        "year": 2009,
        "article": 63693803,
        "category": "ventilation"
    },
    {
        "title": "Et-posuere 2",
        "photoSrc": "pictures/models/5893.png",
        "price": 47000,
        "alt": 5986,
        "brand": 'Et-posuere',
        "year": 2008,
        "article": 19058338,
        "category": "freeze"
    },
    {
        "title": "Belluna 3",
        "photoSrc": "pictures/models/5891.png",
        "price": 25550,
        "alt": 5981,
        "brand": 'Belluna',
        "year": 2021,
        "article": 12988299,
        "category": "cassette"
    },
    {
        "title": "Daikin 3",
        "photoSrc": "pictures/models/5892.png",
        "price": 60550,
        "alt": 5982,
        "brand": 'Daikin',
        "year": 2022,
        "article": 58692316,
        "category": "multisplit"
    },
    {
        "title": "Sapien 3",
        "photoSrc": "pictures/models/5893.png",
        "price": 40550,
        "alt": 5983,
        "brand": 'Sapien',
        "year": 2023,
        "article": 62063793,
        "category": "ceiling-floor"
    },
    {
        "title": "Nunc 3",
        "photoSrc": "pictures/models/5891.png",
        "price": 35550,
        "alt": 5984,
        "brand": 'Nunc',
        "year": 2019,
        "article": 37574339,
        "category": "canal"
    },
    {
        "title": "Morbi 3",
        "photoSrc": "pictures/models/5892.png",
        "price": 70550,
        "alt": 5985,
        "brand": 'Morbi',
        "year": 2018,
        "article": 90711730,
        "category": "ventilation"
    },
    {
        "title": "In-nulla 3",
        "photoSrc": "pictures/models/5893.png",
        "price": 45550,
        "alt": 5986,
        "brand": 'In-nulla',
        "year": 2017,
        "article": 77936585,
        "category": "freeze"
    },
    {
        "title": "Mauris-interdum 3",
        "photoSrc": "pictures/models/5891.png",
        "price": 20000,
        "alt": 5981,
        "brand": 'Mauris-interdum',
        "year": 2016,
        "article": 17992802,
        "category": "cassette"
    },
    {
        "title": "Quisque-sed 3",
        "photoSrc": "pictures/models/5892.png",
        "price": 60000,
        "alt": 5982,
        "brand": 'Quisque-sed',
        "year": 2015,
        "article": 30477499,
        "category": "multisplit"
    },
    {
        "title": "Magna 3",
        "photoSrc": "pictures/models/5893.png",
        "price": 49550,
        "alt": 5983,
        "brand": 'Magna',
        "year": 2020,
        "article": 68220740,
        "category": "ceiling-floor"
    },
    {
        "title": "Blandit 3",
        "photoSrc": "pictures/models/5891.png",
        "price": 34000,
        "alt": 5984,
        "brand": 'Blandit',
        "year": 2010,
        "article": 24072410,
        "category": "canal"
    },
    {
        "title": "Lacus 3",
        "photoSrc": "pictures/models/5892.png",
        "price": 45500,
        "alt": 5985,
        "brand": 'Lacus',
        "year": 2009,
        "article": 63693803,
        "category": "ventilation"
    },
    {
        "title": "Et-posuere 3",
        "photoSrc": "pictures/models/5893.png",
        "price": 47000,
        "alt": 5986,
        "brand": 'Et-posuere',
        "year": 2008,
        "article": 19058338,
        "category": "freeze"
    },

]

const filterBrand = (arr, filterArr) => arr.filter(element => filterArr.includes(element.brand));

const filterPrice = (arr, prices) => arr.filter(e => e.price >= prices[0] && e.price <= prices[1])

const http = require("http");

const server = http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, name');

    let parsedFilters = [];
    let parsedPrices = [];
    let filtered = [...brandArr];

    if (request.method === 'OPTIONS') {
        6
        response.writeHead(204);
        response.end();
        return;
    }

    if (request.method === 'GET') {
        const url = new URL(request.url, `http://${request.headers.host}`);
        const filters = url.searchParams.get('filters');
        const prices = url.searchParams.get('prices');
        const select = url.searchParams.get('opt');
        const gottenCategory = url.searchParams.get('category');

        console.log('Полученные фильтры:', filters);
        console.log('Полученные цены:', prices);
        console.log('Полученные год:', select);
        console.log('Полученные категория:', gottenCategory);

        const toFilter = () => {
            try {
                if (filters !== 'null') {
                    parsedFilters = JSON.parse(filters);
                    console.log('Парсинг фильтров:', parsedFilters);
                }
            } catch (error) {
                console.error('Ошибка парсинга фильтров JSON:', error);
            }

            try {
                if (prices !== 'null') {
                    parsedPrices = JSON.parse(prices).map(element => element === '' ? 0 : parseInt(element));
                    parsedPrices.sort((a, b) => a - b)
                    console.log('Парсинг цен:', parsedPrices);
                }
            } catch (error) {
                console.error('Ошибка парсинга цен JSON:', error);
            }

            if (parsedPrices.reduce((e, acc) => e + acc) > 0) filtered = filterPrice(filtered, parsedPrices);
            if (parsedFilters.length !== 0) filtered = filterBrand(filtered, parsedFilters);
            switch (select) {
                case 'old': filtered.sort((a, b) => a.year - b.year); break;
                case 'new': filtered.sort((a, b) => b.year - a.year); break;
            }

            if (gottenCategory !== 'null') filtered = filtered.filter(e => e.category === gottenCategory)

        }

        filters && prices && select ? toFilter() : filtered.sort((a, b) => b.year - a.year);
        console.log(filtered)

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: "Фильтры успешно получены", filters: filtered }));
    } else {
        response.writeHead(405, { 'Content-Type': 'text/plain' });
        response.end('Метод не поддерживается');
    }
});

server.listen(3000, function () { console.log("Сервер запущен по адресу http://localhost:3000") })
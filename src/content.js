const content = {
    room: [{
            name: '',
            text: 'Черт, как болят глаза. Что, сколько я проспал? Где я?',
            player: false,
        },
        {
            name: 'Мисти',
            text: 'О, ты наконец очнулся. Как тебя зовут?',
            player: false,
            img: 'http://localhost:8000/dist/person/Misty_OS.png'
        },
        {
            name: '',
            text: '',
            player: false,
        },
        {
            name: 'Мисти',
            text: 'Я - Мисти, лучший рыболов и ловец покемонов водного типа в этой деревне. Приятно познакомиться.',
            player: false,
            img: 'http://localhost:8000/dist/person/Misty_pokemon.png'
        },
        {
            name: 'Мисти',
            text: 'Что с тобой произошло? Мы нашли тебя на входе в деревню.',
            player: false,
        },
        {
            name: '',
            text: 'Прости. Дорога потребовала больше сил и времени, чем я планировал. Так что я просто свалился без чувств, когда понял, что дошел.',
            player: true,
        },
        {
            name: '',
            text: 'Я со свои покемоном планировал половить местных покемонов, что бы поднять нам уровень. Но где он?',
            player: true,
        },
        {
            name: 'Мисти',
            text: 'Когда я тебя нашла ты был один. Какой у тебя был покемон?',
            player: false,
            img: 'http://localhost:8000/dist/person/Misty_2.png'
        },
        {
            name: '',
            text: '',
            player: true,
        },
        {
            name: 'Мисти',
            text: 'Похоже низкоуровневый покемон испугался. Я думаю, он мог спрятаться неподалеку.',
            player: false,
        },
        {
            name: 'Мисти',
            text: 'Тебе стоит проверить любимое место твоего покемона. Посмотри в своем покедексе.',
            player: false,
        },
    ],
    choiceRoom: [{
            name: '',
            text: 'Так его тип [[pokemonType]], думаю я знаю, где его искать.',
            player: true,
            img: 'http://localhost:8000/dist/things/pokedex.png'
        },
        {
            name: '',
            text: '',
            player: true,

        },
    ],
    wrongRoom: [{
        name: '',
        text: 'Думаю, [[pokemonName]] не отправился бы туда. Хм, стоит проверить данные в покедексе еще раз.',
        player: true,
        img: 'http://localhost:8000/dist/things/pokedex.png'
    }, ],
    selectedRoom: [{
            name: '',
            text: '[[pokemonName]] должен быть где-то здесь.',
            player: true,

        },
        {
            name: '',
            text: 'Оу вот ты где. Не убегай больше.',
            player: true,
            img: '[[pokemonImg]]'
        },
        {
            name: '[[pokemonName]]',
            text: '[[pokemonName]] рад, что его нашли',
            player: false,
        },
    ]
}
export const pokemons = [{
        name: 'Бульбазавр',
        type: 'трава',
        background: 'http://localhost:8000/dist/background/bulbasaurBackground.jpg',
        img: 'http://localhost:8000/dist/pokemon/Bulbasaur.png',
        gif: 'http://localhost:8000/dist/pokemon/bulbasaur.gif',
    },
    {
        name: 'Чармандер',
        type: 'огонь',
        background: 'http://localhost:8000/dist/background/charmanderBackground.jpg',
        img: 'http://localhost:8000/dist/pokemon/Charmander.png',
        gif: 'http://localhost:8000/dist/pokemon/charmander.gif',
    },
    {
        name: 'Сквиртл',
        type: 'вода',
        background: 'http://localhost:8000/dist/background/squirtleBackground.jpg',
        img: 'http://localhost:8000/dist/pokemon/Squirtle.png',
        gif: 'http://localhost:8000/dist/pokemon/squirtle.gif',
    },
    {
        name: 'Пикачу',
        type: 'электричество',
        background: 'http://localhost:8000/dist/background/pikachuBackground.jpg',
        img: 'http://localhost:8000/dist/pokemon/Pikachu.png',
        gif: 'http://localhost:8000/dist/pokemon/pikachu.gif',
    },
]
export const places = [{
        name: 'Тайный сад',
        type: 'трава',
    },
    {
        name: 'Старый вулкан',
        type: 'огонь',
    },
    {
        name: 'Тихое озеро',
        type: 'вода',
    },
    {
        name: 'Лес',
        type: 'электричество',
    },
]



export function addContent(root, i, src) {
    if (i < content[root].length) {
        let text = '';
        let name = '';
        let player = content[root][i].player;
        if (!content[root][i].player) {
            name = content[root][i].name;
        } else {
            name = sessionStorage.getItem('name')
        }
        const pokemon = JSON.parse(sessionStorage.getItem('pokemon'));
        text = content[root][i].text;
        if (content[root][i].img) {
            src = content[root][i].img
        }
        if (pokemon) {
            text = text.replace('[[pokemonType]]', pokemon.type);
            text = text.replace('[[pokemonName]]', pokemon.name);
            name = name.replace('[[pokemonName]]', pokemon.name);
            src = src.replace('[[pokemonImg]]', pokemon.img);

        }
        return { name, text, src, player }
    } else {
        return null
    }
}
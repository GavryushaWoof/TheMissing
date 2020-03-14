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
        }, {
            name: '',
            text: 'Так его тип [[pokemonType]], думаю я знаю, где его искать.',
            player: true,
            img: 'http://localhost:8000/dist/things/pokedex.png'
        },
    ],
}
export const pokemons = [{
        name: 'Бульбазавр',
        type: 'трава',
        background: 'http://localhost:8000/dist/background/bulbasaurBackground.jpg',
        img: 'http://localhost:8000/dist/pokemon/bulbasaur.png',
        gif: 'http://localhost:8000/dist/pokemon/bulbasaur.gif',
    },
    {
        name: 'Чармандер',
        type: 'огонь',
        background: 'http://localhost:8000/dist/background/charmanderBackground.png',
        img: 'http://localhost:8000/dist/pokemon/charmande.png',
        gif: 'http://localhost:8000/dist/pokemon/charmander.gif',
    },
    {
        name: 'Сквиртл',
        type: 'вода',
        background: 'http://localhost:8000/dist/background/squirtleBackground.jpg',
        img: 'http://localhost:8000/dist/pokemon/squirtle.png',
        gif: 'http://localhost:8000/dist/pokemon/squirtle.gif',
    },
    {
        name: 'Пикачу',
        type: 'электричество',
        background: 'http://localhost:8000/dist/background/pikachuBackground.jpg',
        img: 'http://localhost:8000/dist/pokemon/pikachu.png',
        gif: 'http://localhost:8000/dist/pokemon/pikachu.gif',
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
        const pokemonType = JSON.parse(sessionStorage.getItem('pokemon'));
        text = content[root][i].text;
        if (pokemonType) {
            text = text.replace('[[pokemonType]]', pokemonType.type);
        }
        if (content[root][i].img) {
            src = content[root][i].img
        }
        return { name, text, src, player }
    } else {
        return null
    }
}
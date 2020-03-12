const content = {
    room: [{
            name: '',
            text: 'Что сколько я проспал? Где я?',
            player: false,
        },
        {
            name: 'Мисти',
            text: 'О ты наконец очнулся. Как тебя зовут?',
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
            text: 'Приятно познакомиться. Я Мисти лучший рыболов и повец покемонов водного типа в этой деревне',
            player: false,
            img: 'http://localhost:8000/dist/person/Misty_pokemon.png'
        },
        {
            name: 'Мисти',
            text: 'Что стобой произошло? Мы нашли тебя на входе в деревню.',
            player: false,
        },
        {
            name: '',
            text: 'Дорога потребовала больше сил и времени чем я планировал. Так что я просто свалился без чувств, когда понял что дошел. Извини за причиненные неудобства.',
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
            text: 'Похоже низкоуровневый покемон испугался. Я думаю он мог спрятоться неподалеку.',
            player: false,
        },
        {
            name: 'Мисти',
            text: 'Тебе стоит проверить люимое место твоего покемона. Посмотри в своем покедексе.',
            player: false,
        },
    ],
}

window.addContent = addContent;

export function addContent(root, name, i, text, src) {
    if (i < content[root].length) {
        if (!content[root][i].player) {
            name = content[root][i].name;
        } else {
            name = sessionStorage.getItem(name)
        }
        text = content[root][i].text;
        if (content[root][i].img) {
            src = content[root][i].img
        }
        return { name, text, src }
    } else {
        return null
    }
}
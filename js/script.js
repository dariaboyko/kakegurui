const DATA = [
  {
    id: 1,
    name: 'Yumeko Jabami',
    img: './img/yumeko.png',
    desc: 'Yumeko Jabami (蛇喰 夢子 Jabami Yumeko) is the main protagonist of Kakegurui - Compulsive Gambler. She is a transfer student at Hyakkaou Private Academy and the classmate of Ryota Suzui and Mary Saotome. Yumeko’s family is aligned with the family of Kirari Momobami.'
  },
  {
    id: 2,
    name: 'Kirari Momobami',
    img: '../img/kirari.png',
    desc: 'Kirari Momobami (桃喰 綺羅莉 Momobami Kirari), is a major antagonist from Kakegurui. She is the 105th Student Council President at Hyakkaou Private Academy and the one responsible for the current hierarchy at the academy whose family is aligned with the family of Yumeko Jabami.'
  },
  {
    id: 3,
    name: 'Runa Yomozuki',
    img: '../img/runa.png',
    desc: 'Runa Yomozuki (黄泉月 るな Yomozuki Runa) is a member of the Student Council and the leader of the Election Committee who serves as a referee during election gambling matches.'
  },
  {
    id: 4,
    name: 'Sayaka Igarashi',
    img: '../img/sayaka.png',
    desc: 'Sayaka Igarashi (五十嵐 清華 Igarashi Sayaka) is a supporting character in Kakegurui. She is the Secretary of the Student Council and the Personal Assistant of the current Student Council President, Kirari Momobami.'
  },
  {
    id: 5,
    name: 'Itsuki Sumeragi',
    img: '../img/itsuki.png',
    desc: 'Itsuki Sumeragi (皇 伊月 Sumeragi Itsuki) is a supporting character in Kakegurui. She is a first-year student who belongs to the "Flower" class at Hyakkaou Private Academy and a member of the Student Council. Her father is the president of a prominent toy company in Japan.'
  }
];

const nav = document.querySelector('#nav');
const contentWrapper = document.querySelector('#contentWrapper');
const mainBackground = document.querySelector('#mainBackground');

const createNavElement = (name) => {
  const navElement = `
  <li class="characterButton">
    <a class="buttonText" href="#${name.toLowerCase().replace(' ', '-')}">${name}</a> 
  </li>
  `;

  return navElement;
};

const generateNavElements = (data) => {
  let navContent = '';

  data.forEach((character) => {
    navContent += createNavElement(character.name);
  });

  nav.innerHTML = navContent;
};

const filterData = (data, searchName) => {
  return data.filter((character) => {
    if (character.name === searchName) return character;
  });
};

const createContent = (character) => {
  const content = `
    <img class="image" src="${character.img}" alt="${character.name}" />
    <p class="info">${character.desc}</p>
  `;

  return content;
};

nav.addEventListener('click', (e) => {
  const linkName = e.target.textContent;

  const result = filterData(DATA, linkName);

  contentWrapper.innerHTML = createContent(result[0]);
  mainBackground.style.display ="none";
});

// init
generateNavElements(DATA);

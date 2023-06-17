const username = document.getElementById('username'); //mojombo
const searchBtn = document.getElementById('search');


//arrowfunction / ES6

const onSearch = () => {
    console.log('Button clicked');
}

searchBtn.addEventListener('click',onSearch);
const username = document.getElementById('username'); //mojombo
const searchBtn = document.getElementById('search');


//arrowfunction / ES6
const getUser = async (username) => {
    try{
    const url =  'https://api.github.com/users/${username}';
    console.log(url);
    const response = await (await (fetch (url))).json();

}catch (err) {
    
    console.log(err.toString());
    errorUsername.innerHTML = 'Something is wrong';

}
}
const onSearch = () => {
    console.log('Button clicked');
    const errorUsername = document.getElementById('error');
    

    if (username.value === ''){
        console.log('please enter username');
        errorUsername.insertAdjacentHTML("afterend",'Please enter username');
    }else {
        
        //to do fetch user

    }
}

searchBtn.addEventListener('click',onSearch);
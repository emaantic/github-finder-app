const username = document.getElementById('username'); //finds element*(input) by id  in this case username
const searchBtn = document.getElementById('search'); //finds element*(button) by id  in this case search
const errorUsername = document.getElementById('error');

//arrowfunction - ES6 
const getUser = async (username) => {
    try{
    const url =  `https://api.gitub.com/users/${username}`;
    console.log(url);
    const response = await (await (fetch (url))).json();
    if (response.message === 'Not Found'){
        console.log(err.toString()); 
        errorUsername.insertAdjacentHTML("beforeend",'Invalid username');

    }

    }catch (err) {

        
    console.log(err.toString()); 
    errorUsername.innerHTML = 'Something is wrong';
    
    } 
}

const onSearch = () => {
    console.log('Button clicked');
    
    errorUsername.innerHTML = '';
    

    if (username.value === ''){
        console.log('please enter username');
        errorUsername.insertAdjacentHTML("beforeend",'Please enter username');
    }else {

        

        //to do fetch user
        console.log(username.value);
        getUser(username.value);

    }
}

searchBtn.addEventListener('click',onSearch); // add event listener for click event on search button with a listener function that is going to be called
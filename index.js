const username = document.getElementById('username'); //finds element*(input) by id  in this case username
const searchBtn = document.getElementById('search'); //finds element*(button) by id  in this case search
const errorUsername = document.getElementById('error');
const results = document.getElementById('results');


const numberToMonth = (number) => {
    const calendar = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (number >= 1 && number <= 12) {
        return calendar[number - 1];
    }

}

//arrowfunction - ES6 
const getUser = async (username) => {
    try {
        const url = `https://api.github.com/users/${username}`;
        console.log(url)
        const response = await (await (fetch(url))).json();
        if (response.message === 'Not Found') {

            errorUsername.insertAdjacentHTML("beforeend", 'Invalid username');

        } else {
            console.log(response)
            console.log(response.created_at)

            //ternarni operator
            const name = response.name ? response.name : "Not Provided";

            /*
            if(response.name){
                name = response.name;
            }else{
                name = 'Not provided';
            }*/

            const username = response.login;
            //const date_created = response.created_at;
            const repositories = response.public_repos ? response.followers : 0;
            const followers = response.followers ? response.followers : 0;
            const following = response.following ? response.following : 0;
            const company = response.company ? response.company : "Not Provided";
            const bio = response.bio ? response.bio : "No Bio";
            const email = response.email ? response.email : "No Email";
            const location = response.location ? response.location : "No Location";
            const blog = response.blog ? response.blog : "No blog";

            //date
            //split function at ['T']

            const date_created = response.created_at.split('T')[0];
            //takes first element of array which is year-month-day

            console.log(date_created)

            const year = date_created.split('-')[0];
            let month = date_created.split('-')[1];
            const day = date_created.split('-')[2];

            month = numberToMonth(Number(month));


            //showing the data

            const card = `
            <h2>Results:</h2>
            <article class="card">
                <div class="d-flex gap-4">
                    <div>
                        <img class="avatar" src="https://github.com/${username}.png">
                    </div>
                    <div>                                                
                        <div class="d-flex align-center gap-2">
                            
                                <img src="./icon/🦆 icon _clock_.svg" alt="" width="16px" height="16px">                            
                                <p>Joined ${day}. ${month} ${year}</p> 
                             
                        </div>
                        <div>
                            <p>${name}</p>    
                        </div>    
                        <div>
                            <p>${username}</p>    
                        </div>
                                            
                    </div>
                </div> 
                <div class="inner-card d-flex row gap-11 ">  
                    <div>
                        <p>${repositories}</p> 
                        <p>Repositories</p>     
                    </div>  
                    <div>
                        <p>${followers}</p>
                        <p>Followers</p>     
                    </div> 
                    <div>
                        <p>${following}</p>   
                        <p>Following</p>     
 
                    </div> 

                </div>
                <div class="d-flex">
                    <img src="./icon/🦆 icon _building_.svg" alt="" width="16px" height="20px"> 
                    <p>${company}</p> 
                </div>
                <div class="d-flex" >
                    <div style="width: 50%">
                        <div class="d-flex align-center g-3">
                            <img src="./icon/🦆 icon _id_.svg " alt="" width="16px" height="20px"> 
                            <p>${bio}</p>
                        </div>
                        <div class="d-flex align-center g-3">
                            <img src="./icon/🦆 icon _email_.svg" alt="" width="20px" height="14px"> 
                            <p>${email}</p>
                        </div>
                    </div>                        
                    <div style="width: 50%">
                        <div class="d-flex align-center g-3">
                            <img src="./icon/🦆 icon _location pin_.svg " alt="" width="16px" height="20px"> 
                            <p>${location}</p>
                        </div>
                        <div class="d-flex align-center g-3">
                            <img src="./icon/🦆 icon _link_.svg" alt="" width="20px" height="14px"> 
                            <p>${blog}</p>
                        </div>
                    
                    </div>
                </div>            
            </article>
        
        `
            //results.innerHTML = card;
            results.insertAdjacentHTML("beforeend", card);
        }

    } catch (err) {


        console.log(err.toString());
        errorUsername.innerHTML = 'Something is wrong';

    }
}

const onSearch = () => {
    console.log('Button clicked');

    errorUsername.innerHTML = '';


    if (username.value === '') {
        console.log('please enter username');
        errorUsername.insertAdjacentHTML("beforeend", 'Please enter username');
    } else {
        //to do fetch user
        console.log(username.value);
        getUser(username.value);

    }
}

searchBtn.addEventListener('click', onSearch); // add event listener for click event on search button with a listener function that is going to be called
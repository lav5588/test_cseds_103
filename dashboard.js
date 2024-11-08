
// console.log(localStorage.getItem('username'));

const githubUserNames = [];

const welcomeElement = document.getElementById('welcome');
welcomeElement.innerHTML = `welcome ${localStorage.getItem('username')}`;

const fetchBtn = document.getElementById('fetchBtn');

const fetchUsers = async() =>{
    try{
        const response = await fetch("https:/api.github.com/users?per_page=10");
        // console.log(response)
        const data = await response.json();
        
        const ul = document.getElementById('userLists');
        data.forEach(ele => {
            githubUserNames.push(ele.login);
            const li = document.createElement('li');
            li.innerHTML = ele.login;
            ul.appendChild(li);
        });
        // console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

fetchBtn.addEventListener('click',fetchUsers)


const logout = async() =>{
    localStorage.removeItem('username');
    window.location.replace('login.html')
}

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click',logout)


const selectEle = document.getElementById('sorting');

const sorting = () =>{
    if(selectEle.value == 'yes' && githubUserNames.length > 1){
        githubUserNames.sort();
        const ul = document.getElementById('userLists');
        ul.innerHTML = '';
        githubUserNames.forEach(ele => {
            const li = document.createElement('li');
            li.innerHTML = ele;
            ul.appendChild(li);
        });

    }
    // console.log(githubUserNames)
}


selectEle.addEventListener('change',sorting)
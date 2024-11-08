
console.log(localStorage.getItem('username'));

const welcomeElement = document.getElementById('welcome');
welcomeElement.innerHTML = `welcome ${localStorage.getItem('username')}`;

const fetchBtn = document.getElementById('fetchBtn');

const fetchUsers = async() =>{
    try{
        const response = await fetch('https://api.github.com/users?per_page=10');
        clg(response)
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

fetchBtn.addEventListener('click',fetchUsers)
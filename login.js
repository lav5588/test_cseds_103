
const username = document.getElementById('username');
const password = document.getElementById('password');
const logInButton = document.getElementById('logInBtn');

// console.log(window.location)
const handleLogIn = (e) =>{
    
    e.preventDefault();
    const usernameValus = username.value;
    const passwordValue = password.value;
    if(!usernameValus.trim() || !passwordValue.trim()){
        alert('Either username or password is missing');
        return;
    }
    if(passwordValue.length < 6 || passwordValue.length > 20){
        alert('password must be at least 6 characters and at most 20 characters');
        return
    }
    // alert(`welcome ${usernameValus}`);
    localStorage.setItem('username', usernameValus);
    window.location.replace('dashboard.html')
}

logInButton.addEventListener('click',handleLogIn );


const welcomeElement = document.getElementById('welcome');

if(localStorage.getItem('username')){
    welcomeElement.innerText = `Welcome, ${localStorage.getItem('username')}`;
}

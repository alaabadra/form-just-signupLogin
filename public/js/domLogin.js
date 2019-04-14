const login_btn = document.querySelector('.login_btn')
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password')
const message = document.querySelector('.message');
const formLogin = document.querySelector('.login_form');
const startProfile = document.querySelector('.start-profile')

formLogin.addEventListener('submit',e=>{
    e.preventDefault();
    
     const requestInfoLogin = {
        email: emailInput.value,
        password: passwordInput.value
    }
    console.log(requestInfoLogin);
    
    fetch('/login', {
    method: 'POST',
    body: JSON.stringify(requestInfoLogin),
    headers: {
        'content-type': 'application/json'
    }
}).then((res)=>{
    if(res){
     message.textContent='login succefully';
    window.location.href = "/profile";
    startProfile.textContent = "welcome in your page"    
    }else{
        message.textContent='not register';
    }
   
}


)
})

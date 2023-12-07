const loginFormHandler = async(event) => {
    event.preventDefault();
    console.log('clicked')
    const usernameEl = document.querySelector('#username-login');
    const passwordEl = document.querySelector('#password-login');
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl,
            password: passwordEl,
        }),
        headers: {'Content-Type': 'application/json'},
    });
    if(response.ok) {
        document.location.replace('/');
    }else{
        alert('Something Wrong!')
    }
};
document.querySelector('.login-form').addEventListener('submit',loginFormHandler);
const signupFormHandler = async(event) => {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
        }),
        header:{'Content': 'application/json'},
    });
    if(response.ok){
        document.location.replace('/homepage');
    }else{
        alert('Something wrong!');
    }
};
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
document.getElementById('loginButton').addEventListener('click', function() {
    event.preventDefault();
    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('password').value;
    let data = {
        user: usernameInput,
        type: passwordInput,
      };
    
    console.log('Username:', usernameInput);
    console.log('Password:', passwordInput);
    const url = 'https://abaya-looks-backend.vercel.app/api/v1/test'; 

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify(data) 
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok'); 
    return response.json();
  }else{
    alert('Login register succesfully')
    window.location.reload();
  }
 
})

.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});
})





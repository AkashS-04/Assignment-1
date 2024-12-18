document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Both fields are required!');
        return;
    }

    console.log('Login Attempt:', username, password);
    // Here you would typically handle the form submission to the server
});

/*
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Login Attempt:', username, password);
    // Here you would typically send the data to a server
});
*/
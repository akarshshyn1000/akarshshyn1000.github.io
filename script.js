document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    localStorage.setItem('userName', name);
    window.location.href = 'message.html';
});

document.getElementById('sendButton').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    const name = localStorage.getItem('userName');
    if (message) {
        alert('This message will be converted into Morse code due to certain reasons and will be highly encrypted. Please hit continue to send the message.');
        // Save message to localStorage for demo purposes
        let messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name, message });
        localStorage.setItem('messages', JSON.stringify(messages));
        window.location.href = 'admin-panel.html';
    }
});

document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'akarsh_shyn' && password === 'ilovemehek') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        displayMessages();
    } else {
        alert('Invalid credentials');
    }
});

function displayMessages() {
    const messagesContainer = document.getElementById('messagesContainer');
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(msg => {
        const messageBox = document.createElement('div');
        messageBox.className = 'messageBox';
        messageBox.innerHTML = `<h2>${msg.name}</h2><p>${msg.message}</p>`;
        messagesContainer.appendChild(messageBox);
    });
}   
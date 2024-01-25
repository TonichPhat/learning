const socket = io();

const btn = document.getElementById('send');
const handle = document.getElementById('handle');
const message = document.getElementById('message');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');
const btnRoom = document.getElementById('room');

// Create Event
btn.addEventListener('click', () => {
  socket.emit('chat', {
    handle: handle.value,
    message: message.value,
  });
});

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
});

// Listen for Events
socket.on('connected', (data) => {
  setTimeout(() => {
    output.innerHTML = `<p><strong>${data}</strong></p>`;
  }, 1000);
});

socket.on('chat', (data) => {
  feedback.innerText = '';
  output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`;
  message.value = '';
});

socket.on('typing', (data) => {
  feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});

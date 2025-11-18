const clickBox = document.getElementById('click-box');
const hoverBox = document.getElementById('hover-box');
const resetBtn = document.getElementById('reset-btn');
const simulateBtn = document.getElementById('simulate-btn');
const eventLog = document.getElementById('event-log');
const usernameInput = document.getElementById('username-input');
const submitBtn = document.getElementById('submit-btn');

function log(message) {
    const line = document.createElement('div');
    line.textContent = message;
    eventLog.appendChild(line);
    // keep the newest message in view
    eventLog.scrollTop = eventLog.scrollHeight;
}

let clickCount = 0;
// click event
clickBox.addEventListener('click', () => {
    clickCount++;
    clickBox.classList.add('clicked');
    clickBox.textContent = `Clicked ${clickCount} times!`;
    log(`Clicked the box (${clickCount})`);
});

// added double click event
clickBox.addEventListener('dblclick', () => {
    clickBox.style.backgroundColor = '#007bff';
    clickBox.style.color = 'white';
    log('Double-clicked! Box turned blue');
});

//hover events
hoverBox.addEventListener('mouseenter', () => {
hoverBox.style.backgroundColor = '#fff3cd';
hoverBox.textContent = 'Hover over me! (Practice requirement)';
log('Mouse entered the hover box');
});

hoverBox.addEventListener('mouseleave', () => {
hoverBox.style.backgroundColor = '';
hoverBox.textContent = 'Hover over me! (Practice requirement)';
log('Mouse left the hover box');
});

// keydown event
document.addEventListener('keydown', (event) =>{
    log(`Key pressed: ${event.key}`);
});

// log every key press
usernameInput.addEventListener('keydown', (event) => {
    log(`Typing username: Key "${event.key}" pressed`);    
});

// submit button functionality
submitBtn.addEventListener('click', () => {
log('Form Submitted!');
});

// enter key to submit
usernameInput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter')  {
        log('Form Submitted with Enter Key!');
    }
});

// reset button
resetBtn.addEventListener('click', () => {
    clickCount = 0;
    clickBox.classList.remove('clicked');
    clickBox.textContent = 'Click me! (Practice requirement)';
    hoverBox.style.backgroundColor = '';
    hoverBox.textContent = 'Hover over me! (Practice requirement)';
    eventLog.innerHTML = '';
    log('All reset!');
});

//simulate button
simulateBtn.addEventListener('click', () => {
log('Simulating actions...');
clickBox.click(); // triggers the click listener
const enter = new MouseEvent('mouseenter', {bubbles: true});
const leave = new MouseEvent('mouseleave', {bubbles: true});
hoverBox.dispatchEvent(enter);
setTimeout(() => hoverBox.dispatchEvent(leave), 800);
});
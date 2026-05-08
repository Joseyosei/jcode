/*
╔══════════════════════════════════════════════════════════════╗
║  IMPORTANT JAVASCRIPT CONCEPTS — REFERENCE NOTES            ║
╠══════════════════════════════════════════════════════════════╣
║  document.getElementById('id')                              ║
║    → Grabs an HTML element by its id="..." attribute.       ║
║                                                             ║
║  element.textContent = 'text'                               ║
║    → Changes visible text inside an element.                ║
║                                                             ║
║  element.classList.add('class')                             ║
║    → Adds a CSS class → changes the element's style.        ║
║                                                             ║
║  element.classList.remove('class')                          ║
║    → Removes a CSS class.                                   ║
║                                                             ║
║  localStorage.setItem('key', value)                         ║
║    → Saves data in the browser (survives page refresh).     ║
║                                                             ║
║  localStorage.getItem('key')                                ║
║    → Reads previously saved data.                           ║
║                                                             ║
║  setTimeout(function, ms)                                   ║
║    → Runs a function after a delay (ms = milliseconds).     ║
║                                                             ║
║  element.scrollIntoView()                                   ║
║    → Smoothly scrolls the page to that element.             ║
╚══════════════════════════════════════════════════════════════╝
*/

/* ── ON PAGE LOAD ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* Restore any previously saved journal thoughts */
  var saved1 = localStorage.getItem('yb_thought1');
  var saved2 = localStorage.getItem('yb_thought2');
  if (saved1) document.getElementById('thoughtInput1').value = saved1;
  if (saved2) document.getElementById('thoughtInput2').value = saved2;

});

/* ── NAVIGATION ──────────────────────────────────────────────── */
/*
  toggleNav() opens or closes the slide-down navigation drawer.
  It adds/removes the 'open' CSS class which changes max-height.
*/
function toggleNav() {
  var nav = document.getElementById('navbar');
  var isOpen = nav.classList.contains('open');
  nav.classList.toggle('open');
  nav.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
}

/* closeNav() is called when a nav link is clicked */
function closeNav() {
  var nav = document.getElementById('navbar');
  nav.classList.remove('open');
  nav.setAttribute('aria-hidden', 'true');
}

/* ── IMAGE HELPERS ───────────────────────────────────────────── */
/*
  imgLoaded(img) → called by onload="" in HTML.
  Fades the real image in and hides the placeholder.

  imgError(img) → called by onerror="" in HTML.
  Hides the broken-image icon; placeholder stays visible.
*/
function imgLoaded(img) {
  img.classList.add('loaded');
  var ph = img.parentElement.querySelector('.img-placeholder');
  if (ph) ph.style.display = 'none';
}

function imgError(img) {
  img.style.display = 'none';
}

/* ── JOIN COMMUNITY ──────────────────────────────────────────── */
/*
  ► REPLACE the alert with: window.location.href = 'signup.html';
  when you have a sign-up page ready.
*/
function handleJoin() {
  alert(
    'Welcome! 🎉\n\n' +
    'Replace this alert in script.js:\n' +
    '  window.location.href = "signup.html";'
  );
}

/* ── READ MORE ───────────────────────────────────────────────── */
/*
  ► REPLACE the alert with: window.location.href = 'story' + id + '.html';
*/
function readMore(id) {
  alert(
    'Opening story ' + id + '...\n\n' +
    'Replace with: window.location.href = "story' + id + '.html";'
  );
}

/* ── SAVE THOUGHTS ───────────────────────────────────────────── */
/*
  Saves both journal textareas to browser localStorage.
  localStorage keeps the data even after the page is refreshed.
*/
function saveThoughts() {
  var t1  = document.getElementById('thoughtInput1').value;
  var t2  = document.getElementById('thoughtInput2').value;
  var msg = document.getElementById('saveMsg');

  if (!t1.trim() && !t2.trim()) {
    msg.textContent  = 'Write something first!';
    msg.style.color  = '#999';
    clearAfter(msg, 2500);
    return;
  }

  localStorage.setItem('yb_thought1', t1);
  localStorage.setItem('yb_thought2', t2);

  msg.textContent = '✓ Saved!';
  msg.style.color = 'var(--accent)';
  clearAfter(msg, 3000);
}

function clearAfter(el, ms) {
  setTimeout(function () { el.textContent = ''; }, ms);
}

/* ── ADD FRIEND ──────────────────────────────────────────────── */
/*
  Toggles a friend card button between "+ Add" and "✓ Added".
  The button becomes disabled after clicking so it can't be
  clicked again accidentally.

  ► In a real app, replace the console.log with an API call
  that sends a friend request to your backend.
*/
function addFriend(button, name) {
  if (button.disabled) return;

  button.textContent = '✓ Added';
  button.classList.add('added');
  button.style.background    = 'var(--accent-light)';
  button.style.borderColor   = 'var(--accent)';
  button.style.color         = 'var(--accent)';
  button.disabled            = true;

  /* ► Replace this with a real API call when your backend is ready */
  console.log('Friend request sent to: ' + name);
}

/* ── SEE ALL FRIENDS ─────────────────────────────────────────── */
/*
  ► REPLACE the alert with: window.location.href = 'friends.html';
*/
function seeAllFriends() {
  alert(
    'Opening all friends...\n\n' +
    'Replace with: window.location.href = "friends.html";'
  );
}

/* ── JOIN GROUP ──────────────────────────────────────────────── */
/*
  Changes the "Join Group" button to "✓ Joined" when clicked.
  ► In a real app, replace console.log with an API request.
*/
function joinGroup(button, groupName) {
  if (button.disabled) return;

  button.textContent = '✓ Joined!';
  button.disabled    = true;
  button.style.opacity = '.7';

  /* ► Replace this with a real join API call */
  console.log('Joined group: ' + groupName);
}

/* ── RSVP (EVENTS) ───────────────────────────────────────────── */
/*
  Marks the RSVP button as confirmed.
  ► Replace console.log with an API call to register the user.
*/
function rsvp(button, eventName) {
  if (button.disabled) return;

  button.textContent = '✓ You\'re in!';
  button.disabled    = true;
  button.style.background = '#c0392b';

  /* ► Replace with a real RSVP API call */
  console.log('RSVP confirmed for: ' + eventName);
}

/* ── SUPPORT CHAT ────────────────────────────────────────────── */
/*
  sendMessage() reads the chat input, adds the user's message
  as a bubble on the right, then adds an auto-reply after a
  short delay.

  Auto-replies are chosen randomly from the replies array.
  ► Replace the replies array with real responses, or connect
    this function to an actual chat / AI API.
*/
var chatReplies = [
  'Thank you for sharing that with us. ❤️',
  'We\'re so glad you\'re here!',
  'You\'re not alone — our community is here for you. 🌍',
  'That takes courage to share. We appreciate you.',
  'We hear you. Would you like to connect with a community group?',
  'You belong here, always. 💛'
];

function sendMessage() {
  var input    = document.getElementById('chatInput');
  var messages = document.getElementById('chatMessages');
  var text     = input.value.trim();

  if (!text) return;

  /* Add the user's message (right-aligned bubble) */
  var userBubble       = document.createElement('div');
  userBubble.className = 'chat-bubble sent';
  userBubble.textContent = text;
  messages.appendChild(userBubble);

  /* Clear input */
  input.value = '';

  /* Scroll to bottom of chat */
  messages.scrollTop = messages.scrollHeight;

  /* Send an auto-reply after a short delay */
  setTimeout(function () {
    var reply       = chatReplies[Math.floor(Math.random() * chatReplies.length)];
    var replyBubble       = document.createElement('div');
    replyBubble.className = 'chat-bubble received';
    replyBubble.textContent = reply;
    messages.appendChild(replyBubble);
    messages.scrollTop = messages.scrollHeight;
  }, 900);
}

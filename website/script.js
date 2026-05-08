/*
╔══════════════════════════════════════════════════════════════╗
║  IMPORTANT JAVASCRIPT CONCEPTS — REFERENCE NOTES            ║
╠══════════════════════════════════════════════════════════════╣
║  document.getElementById('id')                              ║
║    → Grabs an HTML element by its id="" attribute.          ║
║                                                             ║
║  element.textContent = 'new text'                           ║
║    → Changes the visible text inside an element.            ║
║                                                             ║
║  element.classList.add('className')                         ║
║    → Adds a CSS class to an element (changes its style).    ║
║                                                             ║
║  element.classList.remove('className')                      ║
║    → Removes a CSS class from an element.                   ║
║                                                             ║
║  localStorage.setItem('key', value)                         ║
║    → Saves data in the browser so it persists on reload.    ║
║                                                             ║
║  localStorage.getItem('key')                                ║
║    → Reads saved data back from the browser.                ║
║                                                             ║
║  alert('message')                                           ║
║    → Shows a pop-up dialog box.                             ║
║                                                             ║
║  console.log('message')                                     ║
║    → Prints to browser DevTools console (for debugging).    ║
║    → Open DevTools: F12 → Console tab                       ║
╚══════════════════════════════════════════════════════════════╝
*/

/* ── ON PAGE LOAD ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* Restore any previously saved thoughts from browser storage */
  const saved = localStorage.getItem('youbelong_thoughts');
  if (saved) {
    const textarea = document.getElementById('thoughtsInput');
    if (textarea) textarea.value = saved;
  }

});

/* ── NAVIGATION ─────────────────────────────────────────────── */
/*
  setActive() highlights the link that was just clicked.
  It removes "active" from all nav links, then adds it to the
  clicked one so the green highlight follows your selection.
*/
function setActive(event, clickedLink) {
  event.preventDefault();                           /* stop page jump */
  document.querySelectorAll('.nav-link')
          .forEach(link => link.classList.remove('active'));
  clickedLink.classList.add('active');
}

/* ── SEARCH ──────────────────────────────────────────────────── */
/*
  handleSearch() reads the search box value.
  Right now it just shows an alert — replace the alert() with
  code that filters your content or sends to a search results page.
*/
function handleSearch() {
  const input = document.getElementById('searchInput');
  const query = input.value.trim();

  if (!query) {
    input.focus();
    return;
  }

  /* ► REPLACE this alert with real search logic when you're ready */
  alert('Searching for: "' + query + '"');
}

/* ── JOIN COMMUNITY ──────────────────────────────────────────── */
/*
  handleJoin() runs when someone clicks "Join Community".
  ► REPLACE the alert with navigation to a sign-up page, e.g.:
     window.location.href = 'signup.html';
*/
function handleJoin() {
  alert('Welcome! Redirecting to sign-up...\n\n► Replace this with: window.location.href = "signup.html"');
}

/* ── READ MORE (STORIES) ─────────────────────────────────────── */
/*
  readMore(id) is called with the story number (1, 2, or 3).
  ► REPLACE the alert with a link to the full story page, e.g.:
     window.location.href = 'story' + id + '.html';
*/
function readMore(id) {
  alert('Opening story ' + id + '...\n\n► Replace with: window.location.href = "story' + id + '.html"');
}

/* ── SAVE THOUGHTS ───────────────────────────────────────────── */
/*
  saveThoughts() saves the textarea content to localStorage
  so it's still there when the user refreshes the page.
  localStorage stores data right in the user's browser — no
  server needed.
*/
function saveThoughts() {
  const textarea = document.getElementById('thoughtsInput');
  const msg      = document.getElementById('saveMsg');

  if (!textarea.value.trim()) {
    msg.textContent = 'Nothing to save yet.';
    msg.style.color = '#e57373';
    clearMsgAfter(msg, 2500);
    return;
  }

  /* Save to browser storage */
  localStorage.setItem('youbelong_thoughts', textarea.value);

  msg.textContent = '✓ Saved!';
  msg.style.color = 'var(--green-main)';
  clearMsgAfter(msg, 3000);
}

/* Helper — clears the save message after a delay */
function clearMsgAfter(el, ms) {
  setTimeout(function () { el.textContent = ''; }, ms);
}

/* ── ADD FRIEND ──────────────────────────────────────────────── */
/*
  addFriend() toggles a friend card between "Add friend"
  and "✓ Added!" states.
  The button reference and friend name are passed in from HTML.
*/
function addFriend(button, name) {
  if (button.classList.contains('added')) return;   /* already added */

  button.classList.add('added');
  button.textContent = '✓ Added!';
  button.disabled = true;

  /* ► REPLACE this alert with a real API call to add the friend */
  setTimeout(function () {
    console.log('Friend request sent to: ' + name);
  }, 300);
}

/* ── SEE ALL FRIENDS ─────────────────────────────────────────── */
/*
  seeAllFriends() navigates to a friends page.
  ► REPLACE the alert with: window.location.href = 'friends.html';
*/
function seeAllFriends() {
  alert('Opening all friends...\n\n► Replace with: window.location.href = "friends.html"');
}

/* ── IMAGE HELPERS ───────────────────────────────────────────── */
/*
  imgLoaded(img) — called from onload="" in HTML.
  Shows the real image and hides the placeholder box.

  imgError(img) — called from onerror="" in HTML.
  Keeps the placeholder visible when the image file is missing.
*/
function imgLoaded(img) {
  img.classList.add('loaded');           /* fade image in via CSS */

  /* Hide the sibling placeholder div */
  const placeholder = img.parentElement.querySelector('.img-placeholder');
  if (placeholder) placeholder.style.display = 'none';
}

function imgError(img) {
  img.style.display = 'none';           /* hide broken-image icon */
  /* Placeholder remains visible automatically */
}

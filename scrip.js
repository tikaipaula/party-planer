let guests = [];

function saveParty() {
  const date = document.getElementById("partyDate").value;
  const desc = document.getElementById("partyDescription").value;
  const message = document.getElementById("inviteMessage").value;

  const fullInvite = `🎈 You're invited! 🎈\n\n📅 Date: ${date}\n📋 Description: ${desc}\n\n💌 Message: ${message}`;
  document.getElementById("showInvite").textContent = fullInvite;
}

function addGuest() {
  const name = document.getElementById("guestName").value.trim();
  const surname = document.getElementById("guestSurname").value.trim();

  if (!name || !surname) {
    alert("Please fill in both first and last names.");
    return;
  }

  const fullName = `${name} ${surname}`;
  guests.push(fullName);

  renderGuestList();
  document.getElementById("guestName").value = '';
  document.getElementById("guestSurname").value = '';
}

function renderGuestList() {
  const list = document.getElementById("guestList");
  list.innerHTML = "";
  guests.forEach(guest => {
    const li = document.createElement("li");
    li.textContent = guest;
    list.appendChild(li);
  });
}

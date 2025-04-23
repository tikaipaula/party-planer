let guests = [];

document.getElementById("saveParty").addEventListener("click", () => {
  const date = document.getElementById("partyDate").value;
  const desc = document.getElementById("partyDescription").value;
  const message = document.getElementById("inviteMessage").value;

  const fullInvite = `🎈 You're invited! 🎈\n\n📅 Date: ${date}\n📋 Description: ${desc}\n\n💌 Message: ${message}`;
  document.getElementById("showInvite").textContent = fullInvite;
});

document.getElementById("addGuest").addEventListener("click", () => {
  const name = document.getElementById("guestName").value.trim();
  const surname = document.getElementById("guestSurname").value.trim();

  if (!name || !surname) {
    alert("Please enter both first and last names.");
    return;
  }

  const fullName = `${name} ${surname}`;
  guests.push(fullName);

  updateGuestList();
  document.getElementById("guestName").value = '';
  document.getElementById("guestSurname").value = '';
});

function updateGuestList() {
  const list = document.getElementById("guestList");
  list.innerHTML = '';
  guests.forEach(guest => {
    const li = document.createElement("li");
    li.textContent = guest;
    list.appendChild(li);
  });
}

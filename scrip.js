let partyData = {
    date: '',
    desc: '',
    inviteMsg: '',
    guests: []
  };
  
  function setParty() {
    const date = document.getElementById('party-date').value;
    const desc = document.getElementById('party-desc').value.trim();
    const msg = document.getElementById('invite-msg').value.trim();
  
    if (!date || !desc || !msg) {
      alert("Please fill out all the fields!");
      return;
    }
  
    partyData.date = date;
    partyData.desc = desc;
    partyData.inviteMsg = msg;
  
    document.getElementById('info-date').textContent = date;
    document.getElementById('info-desc').textContent = desc;
    document.getElementById('info-msg').textContent = msg;
    document.getElementById('party-info').classList.remove('hidden');
  }
  
  function registerGuest() {
    const first = document.getElementById('first-name').value.trim();
    const last = document.getElementById('last-name').value.trim();
  
    if (!first || !last) {
      alert("Please enter your full name.");
      return;
    }
  
    const fullName = `${first} ${last}`;
    partyData.guests.push(fullName);
  
    const li = document.createElement('li');
    li.textContent = fullName;
    document.getElementById('guest-list').appendChild(li);
  
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
  }
  
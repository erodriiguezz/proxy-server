const tokenWrap = document.querySelector(".token");
const getTokenBtn = document.querySelector("#button");

const getToken = async () => {
  const url = "/api/token";

  const auth = await fetch(url);
  const authData = await auth.json();

  addTokenToDOM(authData);

  const listAttendees = await fetch(`/api/attendees?accesstoken=${authData.accesstoken}&eventid=652916&offset=0`);
  const listAttendeesData = await listAttendees.json();

  console.log(listAttendeesData);
};

const addTokenToDOM = (data) => {
  tokenWrap.innerHTML = `<h6>Token: ${data.accesstoken}</h6>`;
};

getTokenBtn.onclick = () => {
  getToken();
};

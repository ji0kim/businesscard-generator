const form = document.getElementById("card-form");
const businessCard = document.getElementById("business-card");
let firstName;
let secondName;
let company;
let jobTitle;
let email;
let phoneNumber;

form.addEventListener("submit", (event) => {
  //   event;
  firstName = event.target[0].value;
  secondName = event.target[1].value;
  company = event.target[2].value;
  jobTitle = event.target[3].value;
  email = event.target[4].value;
  phoneNumber = event.target[5].value;

  businessCard.innerHTML = `Name :${firstName} ${secondName} ${company} ${jobTitle} ${email} ${phoneNumber}`;
  event.preventDefault();
});

const searchStr = document.location.search; // '?name=Paul&age=34'
const queries = new URLSearchParams(searchStr);
const businessCard = document.getElementById('business-card');
const firstName = queries.get('firstName');
const secondName = queries.get('secondName');
const company = queries.get('companyName');
const jobTitle = queries.get('jobTitle');
const email = queries.get('email');
const phoneNumber = queries.get('phoneNumber');

businessCard.innerHTML = `
<ul class="">
  <li>${firstName}</li>
  <li>${secondName}</li>
  <li>${company}</li>
  <li>${jobTitle}</li>
  <li>${email}</li>
  <li>${phoneNumber}</li>
</ul>
`;

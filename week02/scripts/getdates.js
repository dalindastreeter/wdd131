const now = new Date();
const month = now.getMonth();
const day = now.getDay();
const year = now.getFullYear();
const todayDate = `${day}/${month}/${year}`;

const footerYear = document.querySelector("footer #currentYear");
footerYear.textContent = `© ${year}`;
const footerDate = document.querySelector("footer #currentDate");
footerDate.textContent = todayDate;

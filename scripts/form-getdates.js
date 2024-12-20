const now = new Date();
const lastModified = new Date(document.lastModified);
const footerYear = document.querySelector("footer #currentYear");
footerYear.textContent = now.getFullYear();
const footerDate = document.querySelector("footer #lastModified");
footerDate.textContent = `Last Modified: ${lastModified.toString()}`;

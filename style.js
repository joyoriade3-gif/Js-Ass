// let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
// console.log(email.test("joyoriAde3@gmail.com"));

const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{1,}$/;
console.log(emailPattern.test("joyoriAde3@gmail.uk.ng")); // true


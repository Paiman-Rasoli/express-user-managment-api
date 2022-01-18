/**
 * @author : Paiman-Rasoli
 * @email : paiman.rasoli2000@gmail.com
 */
const btn = document.getElementById("form-login");
async function loginHandler(e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  // send request through AJAX to Server
  const req = await fetch(window.location + "api/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  console.log("rr ", req.status);
}
btn.addEventListener("submit", loginHandler);

let c = document.createElement("code");
c.textContent = window.location.pathname;
document.currentScript!.replaceWith(c);

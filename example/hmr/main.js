const msg = require('./msg.js');
console.log(msg);
document.body.textContent = msg;

if (module.hot) module.hot.accept()

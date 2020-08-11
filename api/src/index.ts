const message: string = "Hello, world!";

setInterval(() => {
  console.log(message, new Date().toLocaleString());
}, 1000);

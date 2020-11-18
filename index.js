const options = {
  /* ... */
};
const io = require("socket.io")(options);

const socket = io("ws://localhost:3000");

socket.on("connect", () => {
  // either with send()
  socket.send("Hello!");

  // or with emit() and custom event names
  socket.emit(
    "salutations",
    "Hello!",
    { mr: "john" },
    Uint8Array.from([1, 2, 3, 4])
  );
});

io.listen(3000);

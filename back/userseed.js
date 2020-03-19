const { users } = require("./models/index");

users
  .create([
    {
      email: "german@german.com",
      password: "1234"
    },
    {
      email: "german2@german.com",
      password: "1234"
    }
  ])
  .then(() => {
    console.log("HECHO");
  });

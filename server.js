import app from "./index.js";
let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on port 4000`);
});

const express =
  require("express");

const path =
  require("path");

const app =
  express();

const PORT =
  process.env.PORT || 3000;

// FRONTEND

app.use(
  express.static(
    path.join(__dirname, "../frontend")
  )
);

// START SERVER

app.listen(PORT, () => {

  console.log(
    `AI Browser running on port ${PORT}`
  );
});
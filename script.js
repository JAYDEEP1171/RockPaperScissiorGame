let userscore = 0;
let compscore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");

const computerturn = () => {
  const outcomes = ["stone", "paper", "scissior"];
  let rand = Math.floor(Math.random() * 3);

  return outcomes[rand];
};

const playgame = (usercoise, compchoise) => {
  if (usercoise === compchoise) {
    console.log("match draw");
    msg.innerText = "Match draw";
  } else {
    userwin = true;
    if (usercoise == "stone") {
      userwin = compchoise == "scissior" ? true : false;
    } else if (usercoise == "paper") {
      userwin = compchoise == "scissior" ? false : true;
    } else if (usercoise == "scissior") {
      userwin = compchoise == "paper" ? true : false;
    }

    if (userwin) {
      userscore++;
      document.querySelector("#userScore").innerText = userscore;
      console.log(
        `user win \n score is user :${userscore}    comp :${compscore}    `
      );
      msg.innerText = `your ${usercoise} beat  ${compchoise}`;
    } else {
      compscore++;
      document.querySelector("#compScore").innerText = compscore;
      console.log(
        `computer win  \n score is     comp :${compscore}  user :${userscore}    `
      );
      msg.innerText = `${compchoise} beat your ${usercoise}`;
    }
  }
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    let usercoise = option.getAttribute("id");
    console.log(usercoise);
    const compchoise = computerturn();
    console.log(compchoise);
    playgame(usercoise, compchoise);
  });
});

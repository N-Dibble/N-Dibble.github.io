const games = [
  {name:"CoolMath", link:"https://www.coolmathgames.com"},
  {name:"Itch.io", link:"https://itch.io"},
  {name:"Newgrounds", link:"https://www.newgrounds.com"},
];

const gameContainer = document.getElementById("games");

function renderGames(filter="") {
  gameContainer.innerHTML="";
  games
    .filter(g => g.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(g => {
      const div = document.createElement("div");
      div.className="game-card";
      div.innerHTML=`<h3>${g.name}</h3>
        <a href="${g.link}" target="_blank">Play</a>`;
      gameContainer.appendChild(div);
    });
}
renderGames();

document.getElementById("search").addEventListener("input", e=>{
  renderGames(e.target.value);
});

function toggleTheme(){
  document.body.classList.toggle("light");
}

function addScore(){
  const name = document.getElementById("playerName").value;
  const score = document.getElementById("score").value;
  let board = JSON.parse(localStorage.getItem("board")) || [];
  board.push({name,score});
  board.sort((a,b)=>b.score-a.score);
  localStorage.setItem("board",JSON.stringify(board));
  displayBoard();
}

function displayBoard(){
  let board = JSON.parse(localStorage.getItem("board")) || [];
  const list = document.getElementById("leaderboard");
  list.innerHTML="";
  board.forEach(p=>{
    const li=document.createElement("li");
    li.textContent=`${p.name}: ${p.score}`;
    list.appendChild(li);
  });
}
displayBoard();

function sendMessage(){
  const input=document.getElementById("chatInput");
  const chat=document.getElementById("chatBox");
  const msg=document.createElement("div");
  msg.textContent=input.value;
  chat.appendChild(msg);
  input.value="";
}

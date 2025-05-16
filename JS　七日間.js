const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const dayOfWeek = today.getDay();

const weekDays = ["日","月","火","水","木","金","土",];

document.getElementById("dateTitle").textContent
=  `${year}年${month}月${day}日（${weekDays[dayOfWeek]}）`;


const weekRow = document.getElementById("tBody");

for(let date = 1; date <= 7; date++) {
    const cell = document.createElement("td");
    cell.textContent = date;
    weekRow.appendChild(cell);
}
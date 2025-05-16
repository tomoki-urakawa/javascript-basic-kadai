//今日の情報をシステムから取得(日付の表示に必要)
const today = new Date();
const year = today.getFullYear();//今年の数字を取得する
const month = today.getMonth() + 1;//今月(INdexは0スタートなので月に直すと数字が+1になる)を取得する
const day = today.getDate();//今日の日にちを取得する
const dayOfWeek = today.getDay();//今日の曜日を取得する


//曜日を日本語で定義しておく
const weekDays = ["日","月","火","水","木","金","土",];


document.getElementById("dateTitle").textContent
=  `${year}年${month}月${day}日（${weekDays[dayOfWeek]}）`;

//今月の最初の日を取得(日付の一致に必要)する
const firstDay = new Date(year, month - 1, 1);
const startDay = firstDay.getDay();//最初の日の曜日を取得


//月末の日を取得(日付の一致に必要)する
const lastDate = new Date(year, month, 0).getDate();


//日付を表示する
const tBody = document.querySelector("tbody");


let date = 1;//日付は動くので変数として定義する


while (date <= lastDate) {
    const tr = document.createElement("tr");//行を作る

    for (let i = 0; i < 7; i++) {//一週間は7日
        const td = document.createElement("td");

        if ((date === 1 && i < startDay) || date > lastDate) {
            //最初の日付のIndexよりも小さい(＝先月の最終週)、もしくは
            // その月の最終日(lastDate)を過ぎた(＝来月の初週)の場合は空白を入れる
            td.textContent = "";//セルに空白を表示
        }else{
            td.textContent = date;//セルに日付(date)を表示
            date++
        }

        tr.appendChild(td);
    }

    tBody.appendChild(tr);

}
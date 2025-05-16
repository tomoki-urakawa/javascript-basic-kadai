//全体像としての流れ

//1⃣ 今日を取得して表示する

//2⃣ 月の開始と終了を把握する

//3⃣ 1日からスタートして、日付を順に配置する

//4⃣ 1週間ずつ <tr> を作る

//5⃣ 日付が始まる前や終わった後は空白にする(if処理)

//6⃣ 日付をセルに入れてインクリメントする

//7⃣ 日付が月末になるまで繰り返す



//1⃣ 今日を取得して表示する

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

//2⃣ 月の開始と終了を把握する

//今月の最初の日を取得(日付の一致に必要)する
const firstDay = new Date(year, month - 1, 1);
const startDay = firstDay.getDay();//最初の日の曜日を取得


//月末の日を取得(日付の一致に必要)する
const lastDate = new Date(year, month, 0).getDate();


//日付を表示する
const tBody = document.querySelector("tbody");//カレンダーの中身（tbody）を定数tBodyとして編集できるようにする


let date = 1;//日付は動くので変数dateとして定義する


while (date <= lastDate) {
    const tr = document.createElement("tr");//一週間分の行を作る

    for (let i = 0; i < 7; i++) {//一週間は7日分のセルを作成
        const td = document.createElement("td");

        if ((date === 1 && i < startDay) || date > lastDate) {
            //最初の日付のIndexよりも小さい(＝先月の最終週)、もしくは
            // その月の最終日(lastDate)を過ぎた(＝来月の初週)の場合は空白を入れる
            td.textContent = "";//セルに空白を表示
        }else{
            td.textContent = date;//セルに日付(date)を表示
            date++//
        }

        tr.appendChild(td);//日付を追加する処理
    }

    tBody.appendChild(tr);//週を追加する処理

}
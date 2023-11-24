//変数todayにデータを格納
const today = new Date();
//年月日を取得
const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();

console.log(year +'年'+ month +'月'+ date+'日');



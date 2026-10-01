// ==準備:HTML要素を取得する==//
const textInput = document.querySelector('#text');
const bgButton = document.querySelector('#btn-bg');
const displayButton = document.querySelector('#display');
const addButton = document.querySelector('#addition');
const displayArea = document.querySelector('#display-area');
const countSpan = document.querySelector('#count');
const tableBody = document.querySelector('#table-body');

//==設問１,設問３:入力表示とハイライト切り替え==//
displayButton.addEventListener('click',()=>{
    const inputValue = textInput.value;

    //設問１-b:空入力チェック
    if (inputValue === ''){
        alert('入力値が空です');
    }else{
        //設問１-a:テキストを表示
        displayArea.textContent = inputValue;
        //設問３:highlight クラスのトグル
        displayArea.classList.toggle('highlight');
    }
});

//==設問２:背景色の変更(循環処理)==//
const colors = ['lightblue','lightgreen','lightcoral'];
let currentColorIndex = 0;

bgButton.addEventListener('click',()=>{
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex +1)%colors.length;
});

//==設問４,５,６:データの追加・削除・最大３件制限==//
addButton.addEventListener('click',()=>{
    const inputValue = textInput.value;

    if(inputValue === ''){
        alert('入力値が空です');
        return;
    }
    //設問４-a:新しい行と「削除」ボタンを作成してデータテーブルの最下部に追加
    const newRow = document.createElement('tr');
    newRow.innerHTML =`
    <td>${inputValue}</td>
    <td><button class="delete-btn">削除</button></td>
    `;
    tableBody.appendChild(newRow);

    //設問６:最大３件制限（４件目以降が追加されたら一番古い先頭行を削除）
    const currentRows = tableBody.querySelectorAll('tr');
    if(currentRows.length>3){
        currentRows[0].remove();
    }

    //入力欄をクリア
    textInput.value='';

    //行数を更新
    updateCount();
});

//設問５-a:削除ボタンクリック処理
tableBody.addEventListener('Click',(event)=>{
    if(event.target.classList,contains('delete-btn')){
        //該当業を削除
        event.target,closest('tr').remove();
        //設問５-b & 4-b :行数と表示ボタンの制御を更新
        updateCount();
    }
});

//共通関数:行数更新＆制御（設問４-b,５-b）
function updateCount(){
    const rowCount=tableBody.querySelectorAll('tr').length;
    countSpan.textContent=roeCount;

    //設問４-b & 設問５-b :３件以上なら表示ボタンを非表示、３件未満なら再表示
    if(rowCount>=3){
        displayButton.style.display='none';
    }else{
        displayButton.style.display='inline-block';
    }
}

//設問７:ループ表示（１~５のログ出力）
for(let i=1;i<=5;i++){
    console.log(i);
}
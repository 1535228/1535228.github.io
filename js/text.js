// varとfunction持ちがいはなんだ

function diary(day) {
    var message = "";

    if (day == 1) {
        message = "トンビが９階あたりを飛んでいた";
    } else if (day == 2) {
        message = "時速40キロで坂を下った";
    }
    alert(message)
}

function di() {
    $('#di-1').show();
}

function di() {
    $('#di-2').show();
}


$(function () {

    // 画面読込時に実行する。
    $("#wk1").hide();
    $("#wk2").hide(); // 初期表示で隠しておく

    // 指定ボタンを押下すると処理を開始する
    $("#btn1").on("click", function () {
        $("#wk1").show(); // div領域を表示
    });

    $("#btn1").on("click", function () {
        $("#wk1").hide(); // div領域を隠す
    });

    // 指定ボタンを押下すると処理を開始する
    $("#btn2").on("click", function () {
        $("#wk2").show(); // div領域を表示
    });

    $("#btn2").on("click", function () {
        $("#wk2").hide(); // div領域を隠す
    });

});
function tattoo(reason) {
    var reference = "";

    if (reason == 1) {
        reference = "表現の自由、個人の解釈の範囲内";
    } else if (reason == 2) {
        reference = "強さの象徴、威嚇";
    } else if (reason == 3) {
        reference = "部族の通過儀礼、集団の印";
    } else if (reason == 4) {
        reference = "ラッパーなどのファッションとしての証";
    }

    alert(reference)
}

function reason() {
    $('#rs-1').toggle();
}
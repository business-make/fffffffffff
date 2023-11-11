$(".address_exchange_item").click(function() {
    $(".address_exchange_item").removeClass("active_wallet");
    $(this).addClass("active_wallet");
});

// --------------ADDRESS-COPY----------------------------------------------------------------------------------------

/* сохраняем текстовое поле в переменную text */
var text = document.getElementById("inputText");

/* сохраняем кнопку в переменную btn */
var btn = document.getElementById("copyText");

/* вызываем функцию при нажатии на кнопку */
btn.onclick = function() {
    text.select();
    document.execCommand("copy");
}

/* сохраняем текстовое поле в переменную text */
var text2 = document.getElementById("inputText2");

/* сохраняем кнопку в переменную btn */
var btn2 = document.getElementById("copyText2");

/* вызываем функцию при нажатии на кнопку */
btn2.onclick = function() {
    text2.select();
    document.execCommand("copy");
}

// ---------------WALLET-----------------------------------------------------------------------------------------
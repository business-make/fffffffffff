/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function submenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function submenuInfo() {
    document.getElementById("myDropdownInfo").classList.toggle("show");
}

function submenuCart() {
    document.getElementById("myDropdownCart").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.menu_list').toggleClass('active')
    });
});

// ----------------BUY-CARDS-------------------------------------------------------------------------------------------

// $(document).ready(function() {
//     $(".contact_icon").click(function() {
//         $(".contact_form").toggle();
//     });
// });

// -------------------Technical-menu-----------------------------------------------------------

function openChat() {
    document.getElementById("chatBox").style.display = "block";
}

function closeChat() {
    document.getElementById("chatBox").style.display = "none";
}

function checkInput() {
    var messageInput = document.getElementById("chatMessage");
    var sendButton = document.querySelector(".send-button");

    if (messageInput.value.trim() !== "") {
        sendButton.removeAttribute("disabled");
        messageInput.style.border = "1px solid #ccc"; // Видаляємо червоний бордер
    } else {
        sendButton.setAttribute("disabled", "disabled");
        messageInput.style.border = "1px solid red"; // Додаємо червоний бордер
    }
}

function sendMessage() {
    var messageInput = document.getElementById("chatMessage");
    var message = messageInput.value.trim();
    
    if (message !== "") {
        var telegramUsername = "ctopusCC"; // Замініть на своє ім'я користувача в Telegram
        var telegramLink = "https://t.me/" + telegramUsername + "?start=" + encodeURIComponent(message);
        window.open(telegramLink, "_blank");
    }
}

function closeChatOnOutsideClick(event) {
    var chatBox = document.getElementById("chatBox");
    
    // Перевірка, чи було клікнуто поза вікном чату і не на "chatBox" або його дочірні елементи
    if (event.target !== chatBox && !chatBox.contains(event.target)) {
        closeChat();
    }
}

// Змінюємо обробник подій з "click" на "mousedown"
document.body.addEventListener("mousedown", closeChatOnOutsideClick);
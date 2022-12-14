$(document).ready(function () {
    $(".btn").on("click", function () {
        buttonClicked();
    });

    $("#data").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            $(".btn").click();
        }
    });
});

function buttonClicked() {
    $value = $("#data").val();
    $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>' + $value + '</p></div></div>';
    $(".form").append($msg);
    $("#data").val('');

    // start ajax code
    $.ajax({
        url: 'message.php',
        type: 'POST',
        data: 'text=' + $value,
        success: function (result) {
            $replay = '<div class="bot-inbox inbox"> <div class="icon"> <img src="images/triniti.png" alt=""></div> <div class="msg-header"><p>'+ result + '</p></div></div>';
            $(".form").append($replay);
            // when chat goes down the scroll bar automatically comes to the bottom
            $(".form").scrollTop($(".form")[0].scrollHeight);
        }
    });
}



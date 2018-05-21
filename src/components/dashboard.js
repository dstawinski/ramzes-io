var currentTokenPrice = null;

$(document).ready(function () {
    console.log('Document ready')

    if (location.href.indexOf('OK') !== -1) {
        let $message = $('#transaction_message');
        $message.show();

        const address = "0x2f1b062A1240760D424aB81dEd28689708CD395D";
        const url = 'http://206.189.48.168:8081/api/checkBalance/' + address;
        let value;
        $.post(
            url,
            function (data, status) {
                var obj = JSON.parse(data)
                console.log(data);
                if (obj && obj.balance) {
                    value = obj.balance;
                }
            }
        )

        setInterval(function () {
            $.post(
                url,
                function (data, status) {
                    var obj = JSON.parse(data)
                    console.log(data);
                    if (obj && obj.balance && obj.balance > value) {
                        $message.html('Balance updated: ' + obj.balance);
                    }
                }
            )
        }, 2500);

    }

    $('#submit').click(function () {
        const address = "0x2f1b062A1240760D424aB81dEd28689708CD395D";
        const urlOrder = 'http://206.189.48.168:8081/api/order/' + address

        $.post(urlOrder).done(function (result) {
            console.log(result);
            window.location.href = result.href;
        });
    });

    const getTokensURL = 'http://206.189.48.168:8081/api/getTokens';
    var tokens = $.ajax({
        url: getTokensURL
    }).done(function (res) {
        $("#ico_list").empty();
        tokens = JSON.parse(res);
        $.each(tokens, function (i, val) {
            var newListElem = `
            <li id=${val._id}>
                <img src='http://via.placeholder.com/66x66'>
                <div>
                <p class="ico_name">${val.token}</p>
                <p>
                    <strong>${val.currency}: </strong>${val.value}</p>
                <p>
                    <strong>Tokens left: </strong>${val.ourSupply}</p>
                </div>
            </li>`;
            $("#ico_list").append(newListElem);
            $("#" + val._id).click(function () {
                selectToken(val._id, val.value, val.ourSupply, val.symbol);
            });
        });
        console.log($("#ico_list").first());
        $("li").first().trigger("click");
    });

    $("input[name=fiat_amount]").change(function() {
        countValueToSpend();
    });
    $("input[name=token_amount]").change(function() {
        countValueToSpend();
    });
});

function selectToken(id, value, supply, symbol) {
    currentTokenPrice = value;
    $.each($("li"), function (i, el) {
        if (el.id == id) {
            $(el).addClass("current_ICO");
        } else {
            $(el).removeClass("current_ICO");
        }
    });

    $("#token_name").html(symbol);
    countValueToSpend();
    $("#crypto_in_stock").html("<strong>max.</strong> " + supply);
}

function countValueToSpend() {
    var tokenAmount = $("input[name=token_amount]").val();
    var valueToSpend = tokenAmount * currentTokenPrice;
    console.log(valueToSpend);
    $("input[name=fiat_amount]").val(valueToSpend);
}
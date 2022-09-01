function make_deck() {
    var deck = [];
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["S", "D", "C", "H"];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push(ranks[j] + suits[i]);
        }
    }
    console.log(deck)
    return deck;
}

function shuffle(deck) {
    return deck.sort(() => Math.random() - 0.5);
}


$(document).ready(function() {


    function deal(numberOfCards, deck) {
        for (let index = 0; index < numberOfCards; index++) {
            $("<img>")
                .attr({
                    src: `/static/playing_card_images/${deck.pop()}.png`,
                    class: "card playerCard",
                    id: `playerCard${index + 1}`
                }).css("left", ((index + 1) * 12.5) + "%")
                .on("dblclick", data = index, function(event) {
                    $(`#playerCard${index + 1}`).animate({
                        // left: (6 - event.data) * 12.5 + "%"
                        left: "86.5%",
                        bottom: "50%"
                    })
                })
                .appendTo("#playerCardZone");
        }
        $(".playerCard").show();
    }

    var deck = shuffle(make_deck());
    console.log(deck);
    deal(6, deck);

});
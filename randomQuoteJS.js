function getQuote () {
    $.getJSON(
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        function(apiResult) {
            $('#quote').html(apiResult[0].content);
            $('#author').html("- " + apiResult[0].title);
        });
}
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getColor() {
    var randColors = ['#7cf9cc', '#92f779', '#f77878', '#e8dd66', '#7966e8', '#e866df', '#66e8e1' ];
    var newColor = randColors[getRandInt(0, randColors.length)];
    $('body').css({'background-color': newColor });
}

$(function() {
    getQuote();
    $.ajaxSetup({cache: false});
    $("#quote-button").on("click", function() {
        getQuote();
        getColor();
    });
});
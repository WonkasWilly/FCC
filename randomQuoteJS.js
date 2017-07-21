// This fetches the quote from an API that gives the data in JSON format. Set up aJax to stop caching page
function getQuote () {
    $.getJSON(
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        function(apiResult) {
            $('#quote').html(apiResult[0].content);
            $('#author').html("- " + apiResult[0].title);
        });
}

// This will get you any random integer
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// This function will get you any random color from the array of colors listed in the function
function getColor() {
    var randColors = ['#7cf9cc', '#92f779', '#f77878', '#e8dd66', '#7966e8', '#e866df', '#66e8e1' ];
    var newColor = randColors[getRandInt(0, randColors.length)];
    $('body').css({'background-color': newColor });
}

// This will set up the Twitter button to launch a new window with the quote populated in the textbox
function twitQuote() {
  $('#twitter').on('click', function() {
      var theQuote = $('#quote').html();
      var removeTags = /[^<p>].*[^<\/p>]/gi;
      var newQuote = theQuote.match(removeTags);
     window.open('https://twitter.com/intent/tweet?text=' + newQuote);
  });
}

// This is the body of the code

$(function() {
    $.ajaxSetup({cache: false});
    getQuote();
    $("#quote-button").on("click", function() {
        getQuote();
        getColor();
    });
    twitQuote();
});
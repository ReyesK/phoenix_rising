
(function() {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    script.type = "text/javascript";
    script.onload = function() { // do jquery stuff here
        var $ = window.jQuery;


        $(document).ready(function(){
          $('.sidebar__content').height(window.innerHeight - 140);

          if ($('.sidebar--right > .sidebar__content').children().length === 0) {
            $('.sidebar--left > .sidebar__content').show();
          } else {
            $('.sidebar__content').show();
          }

          $('.sidebar__content').css({
            backgroundColor: '#f7f9fb',
            marginTop: '20px',
            borderRadius: '4px',
            padding: '10px 5px 10px 10px'
          });
        });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();


(function() {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    script.type = "text/javascript";
    script.onload = function() {
        var $ = window.jQuery;
        $(document).ready(function(){ // do jquery stuff here
          $('.sidebar--left > .sidebar__content').height(window.innerHeight - 140);
        });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

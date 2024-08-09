$(document).ready(function(){
    $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

    $(".shopnow").hover(
        function(){
            $(this).css('background-color', '#FF7F50');
            $(".shopnow a h2").css('color', '#15202B');
        },

        function(){
            $(this).css('background-color', 'transparent');
            $(".shopnow a h2").css('color', '#FF7F50');
        }
    );
});
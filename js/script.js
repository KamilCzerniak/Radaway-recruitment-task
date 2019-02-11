$(document).ready(function () {

    $(".js-slider").waypoint(function (direction) {
            if (direction === "down") {
                $(".start-link").addClass("sticky")

            } else {
                $(".start-link").removeClass("sticky")
            }
        },
        );

});

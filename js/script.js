$(document).ready(function () {
    // Кількість зображень в .parallax
    var imageCount = $(".parallax img").length;

    // Ширина кожного зображення у відсотках
    var imageWidthPercentage = 100 / imageCount;

    $(".parallax-container").hover(
        function () {
            $(".infinity_anim").css("animation", "none");
        },
        function () {
            $(".infinity_anim").css("animation", "scroll 10s linear infinite");
        }
    );
});
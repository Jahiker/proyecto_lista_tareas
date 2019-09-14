$(".txtb").on("keyup", function(event) {
    //El valor 13 es la tecla Enter
    if (event.keyCode == 13 && $(".txtb").val() != "") {
        var task = $("<div class='task'></div>").text($(".txtb").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function() {
            var p = $(this).parent();
            p.fadeOut(function() {
                p.remove();
            });
        });
        var check = $("<i class='fas fa-check'></i>").click(function() {
            var p = $(this).parent();
            p.fadeOut(function() {
                $(".comp").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });

        $(".notcomp").append(task);
        task.append(del, check)
        $(".txtb").val("");
    }
});
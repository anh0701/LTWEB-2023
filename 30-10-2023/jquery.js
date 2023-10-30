$(document).ready(function () {
    $("#click").click(function () {
        $("#test").hide();
    });

    $("#hide").click(function () {
        $("p").hide();
    });

    $("#show").click(function () {
        $("p").show();
    });

    $("#toggle").click(function () {
        $("p").toggle();
    });

    $('#btn1').click(function () {
        $('p').append('<b>Append text </b>')
    });

    $('#btn2').click(function () {
        $('ol').append("<li>Append items</li>")
    });
    
    $('#btn3').click(function () {
        $('ol').prepend("<li>prepend item</li>")
    })

    $('#btn4').click(function () {
        $('ol').before('<li>before item</li>')
    })
    
    $('#btn5').click(function () {
        $('ol').after('<li>after item</li>')
    })
});


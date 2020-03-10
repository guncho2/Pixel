var paleta = document.getElementById('paleta');
// var grillaPixeles = document.getElementById('grilla-pixeles');
var grillaPixeles = $("#grilla-pixeles");
var cantPixels = 1750;
var indicadordecolor = $("#indicacador-de-color");
var clickApretado = false;





var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


function gererarPaletaCol() {
    for (var i = 0; i < nombreColores.length; i++) {
        var color = document.createElement("div");
        color.style.backgroundColor = nombreColores[i];
        color.className = 'color-paleta';
        paleta.appendChild(color);
    }
}

function generarGrillaPixels() {
    for (var i = 0; i < cantPixels; i++) {
        // var totpixeles = document.createElement("div");
        // totpixeles.id = "div" + i;
        var totpixeles = $('<div>');

        grillaPixeles.append(totpixeles);

    }
}

generarGrillaPixels();

gererarPaletaCol();





// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        // Completar para que cambie el indicador-de-color al colorActual
        // indicadordecolor.style.backgroundColor = colorActual
        $('#indicador-de-color').css('background-color', colorActual);



    })
);

function cambiarColorSeleccionado() {
    colorActual = $(this).css('background-color');

    $('#indicador-de-color').css('background-color', colorActual);
}


function pintarPixel() {
    $(this).css('background-color', colorActual);
}



// pintar toma colorActual y si clickApretado es true (mousedown)
// pega colorActual con .mousemove(pintar) a '#grilla-pixeles div'


function pintar() {
    if (clickApretado) {
        $(this).css('background-color', colorActual);
    }
}


// Cuando hago click en color-paleta funciona cambiarColorSeleccionado
//cambiarColorSeleccionado toma valor actual y lo copia en indicador-de-color

$('.color-paleta').on('click', cambiarColorSeleccionado);

//Cuando clickeo en grilla-pixeles funciona pintarPixel QUE TOMA colorActual y lo pone en 
//background-color de la grilla-pixeles div

$('#grilla-pixeles div').on('click', pintarPixel);


function elegirSuperheroe() {
    var superheroe = $(this).attr('id');


    switch (superheroe) {
        case 'batman':
            cargarSuperheroe(batman);
            break;

        case 'wonder':
            cargarSuperheroe(wonder);
            break;

        case 'flash':
            cargarSuperheroe(flash);
            break;

        case 'invisible':
            cargarSuperheroe(invisible);
            break;


        default:
            break;

    }
}

$('html').mousedown(function() {
    clickApretado = true;

}).mouseup(function() {
    clickApretado = false;
});

$('#grilla-pixeles div').mousemove(pintar);

//funcion borrarTodo hace animate en '#grilla-pixeles div' y coloca en background-color de
//la grilla div color blanco ffffff al hacer click con $('#borrar').click(borrarTodo);
//(Apretando ID '#borrar')


function borrarTodo() {
    $('#grilla-pixeles div').animate({
        'background-color': '#ffffff'
    }, 4000);
}


$('#borrar').click(borrarTodo);



$('#guardar').click(guardarPixelArt);



$('.imgs img').click(elegirSuperheroe);



















// var el = document.getElementById('grilla-pixeles');
// el.addEventListener("click", captarColor);



// function captarColor(e) {
//     e.target.style.backgroundColor('background-color');
// }

// captarColor();
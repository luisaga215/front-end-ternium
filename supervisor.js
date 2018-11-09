function generateList(){
    //Variable lista de empleados activos
    var employees = [
        'Luis Glz',
        'Ruben',
        'Denisse',
        'Rodrigo',
        'Alex',
        'Nestor',
        'Missael',
        'Fernanda',
        'Luis C.',
        'Luis Hdz',
        'Vania',
        'JuanPi',
        'Diego',
        'Christofer'
    ];

    //Generar lista
    var ul = document.createElement('ul');
    ul.setAttribute('id', "myUL");
    document.getElementById("div_activos").appendChild(ul);

    //Funcion para agregar empleados activos a la lista
    employees.forEach(function (employees) {
        var a = document.createElement('a');
        a.setAttribute('href', "#");
        var li = document.createElement('li');
        li.setAttribute('class', "the_li");
        ul.appendChild(li);
        li.appendChild(a);
        a.innerHTML += employees;
    });

    //Funcion para cambiar el color del content en la lista al hacer click
    $("ul a").click(function () {
        $("ul a").removeClass('active');
        $(this).addClass('active');
    });

};

//Barra de busqueda
function filterList() {
    var input, filter, ul2, li2, i2, a2;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul2 = document.getElementById("myUL");
    li2 = ul2.getElementsByClassName("the_li");
    for (i = 0; i < li2.length; i++) {
        a2 = li2[i].getElementsByTagName("a")[0];
        if (a2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li2[i].style.display = "";
        } else {
            li2[i].style.display = "none";
        }
    }
}

function resizeCanvas() {
    var canvs = document.getElementById("supCanva");
    canvs.width = $(".div_mapas").width();
    canvs.height = $(".div_mapas").height();

    var cWidth = canvs.width;
    var cHeight = canvs.height;

    //Get image
    var ctx = canvs.getContext("2d");
    var mapImg = new Image();
    mapImg.src = "./assets/inside_map.jpg";

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, cWidth, cHeight);

    ctx.drawImage(mapImg, 0, 0, cWidth,cHeight);
}

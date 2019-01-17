$(document).ready(function(){    
    var contador = 1;
    var campo = `
        <div class="row">
            <div class="columns large-9">
                <label for="palabra">Palabra</label>
                <input type="text" placeholder="Escriba una bella palabra" name="palabra" id="palabra">
            </div>     
            <div class="columns large-3">
                <button class="button alert eliminarPalabra"><i class="fas fa-minus"></i></button>
            </div>
        </div>
    `;
    $('.annadirPalabra').click(function(e){       
        e.preventDefault();
        $('#formulario').append(campo);
        contador++;
    });
    $('#formulario').on("click",".eliminarPalabra", function(e){ //user click on remove text links
        e.preventDefault();
        $(this).closest('.row').remove();
        contador--;
    });
    $('#form').submit(function(e){
        e.preventDefault();
        var palabras = $('input[type="text"]');
        $('#lista > ul').remove();
        $('#lista').append('<ul></ul>');
        for(var i=0; i<palabras.length; i++){
            $('#lista > ul').append('<li>' + palabras[i].value + '</li>');
        }
    });
});
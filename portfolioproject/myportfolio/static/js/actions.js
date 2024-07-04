
$(document).ready(function() {
    const pro1 = 'ghp_VZJAbnjTteT5JNsWLgl9y';
    const pro2 = '1emWMRd1w17uwhx';
    const token = pro1+pro2;
    const nombreUsuario = 'AlvaFM'; 
    const contenedorRepos = $('#proyectos');
    // extractor de datos de los repositorios
    $.ajax({
        url: `https://api.github.com/users/${nombreUsuario}/repos`,
        headers: {
            'Authorization': 'token ' + token
        },
        success: function(repos) {
            
            repos.forEach(repo => {
                const repoDiv = $(`
                    <div class="proyecto col-md-4 text-center" >
                        
                        <a  href="${repo.html_url}" target="_blank"><h3>${repo.name}</h3></a>
                    </div>
                `);
                
                contenedorRepos.append(repoDiv);
            });
        },
        error: function() {
            alert('Error al obtener los repositorios');
        }
    });

    // numero total de repositorios de mi Github
    $.ajax({
        url: `https://api.github.com/users/${nombreUsuario}`,
        headers: {
            'Authorization': 'token ' + token
        },
        success: function(usuario) {
            const numeroRepositorios = usuario.public_repos;
            contenedorRepos.prepend(`<p class="text-left fw-bold mb-4">N° de Repositorios conectados: ${numeroRepositorios}</p>`);
        },
        error: function() {
            alert('Error al obtener la información del usuario');
        }
    });
});
//Para ocultar la descripcion de los lenguajes de programacion en las skills
var isHidden1 = true; 
var isHidden2 = true; 
var isHidden3 = true; 
var isHidden4 = true; 

$("#parrafo1").hide();
$("#botonUp1").click(function(){
    if (isHidden1) {
        $("#parrafo1").slideDown(); 
    } else {
        $("#parrafo1").slideUp(); 
    }
    isHidden1 = !isHidden1; 
});

$("#parrafo2").hide();
$("#botonUp2").click(function(){
    if (isHidden2) {
        $("#parrafo2").slideDown(); 
    } else {
        $("#parrafo2").slideUp(); 
    }
    isHidden2 = !isHidden2; 
});

$("#parrafo3").hide();
$("#botonUp3").click(function(){
    if (isHidden3) {
        $("#parrafo3").slideDown(); 
    } else {
        $("#parrafo3").slideUp(); 
    }
    isHidden3 = !isHidden3; 
});

$("#parrafo4").hide();
$("#botonUp4").click(function(){
    if (isHidden4) {
        $("#parrafo4").slideDown(); 
    } else {
        $("#parrafo4").slideUp(); 
    }
    isHidden4 = !isHidden4; 
});
//para que el formulario no envie nada si es que este esta vacio 
$('form').submit(function(event){
    var nombre = $('#name').val();
    var correo = $('#email').val();
    var mensaje = $('#message').val();

    if (nombre ===''||correo===''||mensaje === ''){
        alert('Por favor rellene todos los campos')
        event.preventDefault();
    }
    
    

});








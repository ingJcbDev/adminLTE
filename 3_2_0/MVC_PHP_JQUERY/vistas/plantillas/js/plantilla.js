$(document).ready(function () {
	$(".nav-link").on("click", function () {
		$(".nav-link").removeClass("active");
		$(this).addClass("active");
	});
});
CargarContenido = function (pagina_php, contenedor) {
	$("." + contenedor).load(pagina_php);
};

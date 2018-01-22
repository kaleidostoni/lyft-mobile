function loadPage(){
	setTimeout(function () { $(".splash-view ").fadeOut(2000); }, 3000);
	setTimeout(function () { $(".main-view").fadeIn(2000); }, 3000);
	$("#demo").intlTelInput();
	$('.number-input').keyup(validate);
	$('#input-verify').keyup(validateCode);
};

//función para hablilitar el botón sign up
var validate = function () {
var signUpNumber = $('.number-input').val();
if(signUpNumber.length >= 10){
	$('#btn-next').removeClass('disabled').addClass('active');
}else if(signUpNumber.length < 9){
	alert('ingresa número de 10 dígitos valido');
}
}

var random = Math.floor(Math.random() * 999) + 100;
// esta función genera el còdigo random del modal 
$('#btn-next').click(function(){
	$('#random-code').text(random);
})

//esta función verifica el código


var validateCode = function () {
var codeNumber = $('#input-verify').val();
console.log(codeNumber);
if(codeNumber===random){
	$('#btn-next2').removeClass('disabled').addClass('active');
	}
}



$(document).ready(loadPage);
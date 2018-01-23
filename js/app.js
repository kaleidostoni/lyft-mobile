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
	$('#btn-next').attr('disabled', false);
}else if(signUpNumber.length < 9){
	$('#btn-next').attr('disabled', true);
}	
}


var random = Math.floor(Math.random() * 999) + 100;

// esta función genera el código random del modal 
$('#btn-next').click(function(){
	var randomSaved = $('#random-code').text(random);
	console.log(randomSaved);
})

//esta función verifica el código
var validateCode = function () {
var codeNumber = parseInt($('#input-verify').val());
//console.log(codeNumber);
if(codeNumber===random){
	$('#btn-next2').attr('disabled', false);
	$('#anchor').attr('href','form.html');
	;
	}
}

//esta función valida la form
var formValidation = function(){
	if($('#checkbox').checked()){
		$('#btn-next').attr('disabled', false)
	}
}

/*$('#info-form').bind('change keyup', function() {

    if($(this).validate().checkForm()) {

        $('#btn-next').attr('disabled', false);

    } else {

        $('#btn-next').attr('disabled', true);

    } });
*/


$(document).ready(loadPage);
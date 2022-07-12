function go() {
	window.location.href = window.location.href+$('#path').val();
	return false;
}

$(function(){
	$('#path').focus();
});
$(document).ready(function() {
	$("form#survey").submit(function(event) {
		event.preventDefault();
		$(".name").text($("#name").val());
		$(".music").text($("#music").val());
		$(".iceCream").text($("input:radio[name=flavor]:checked").val());
		$(".born").text($("#born").val());
		$(".color").text($("#color").val());
		$("#output").show();
	});
});

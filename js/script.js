$(document).ready(function() {
    $('article').hide();
    $('#welcome).show();

	$('.btn').click(function() {
		$('article').hide();
		$($(this).data("target")).show();
	});
});

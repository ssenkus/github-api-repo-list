$(document).ready(function() {
	
	$.ajax({
		type:		"GET",
		url: 		"https://api.github.com/users/ssenkus/repos",
		dataType:	"json",
		success:    function(data) {
						for (var x = 0; x < data.length; x++) {
							$('#output').append('<a href="' + data[x]['html_url'] + '" target="_blank"><h3>' + data[x]['name'] + '</h3></a>' + 
												'<p>' + data[x]['description'] + '</p>'
												
												);
						}
					},
		error:		function() {
						alert('error');
					}
	});
	
});
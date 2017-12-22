

function clearFields()
{
	$('#task-title').text("");
	$('#task-due-date').text("");
	$('#task-duration').text("");
	$('#task-category').text("");
	$('#task-context').text("");
}

$(document).ready(function() {

	$("#text-input").keyup(function() {
		var text = $('#text-input').val();
		console.log(markdown.toHTML(text));
		$('#output').append(markdown.toHTML(text));
	});
	// $("#text-input").keyup(function() {
	// 	var text = $('#text-input').val();
	// 	var regex = /([^+#@~]*)(?:(\+[^+#@~]*)|(\~[^+~@#]*)|(\#[^~#+@]*)|(\@[^~#+@]*))*/;
	// 	var result = regex.exec(text);
	// 	$('#task-title').text(result[1]);
	// 	result.forEach(function(match) {
	// 		if (match == null)
	// 		{
	// 			//clearFields();
	// 		}
	// 		else
	// 		{
	// 			var firstChar = match.slice(0,1);
	// 			var value = $.trim(match.slice(1));
	// 			switch (firstChar)
	// 			{
	// 				case '+':
	// 					$('#task-due-date').text(value);
	// 					break;
	// 				case '~':
	// 					$('#task-duration').text(value);
	// 					break;
	// 				case '#':
	// 					$('#task-category').text(value);
	// 					break;
	// 				case '@':
	// 					$('#task-context').text(value);
	// 					break;
	// 				default:
	// 					break;
	// 			}
	// 		}
    //
	// 	});
    //
	// });


});

<?php

class TaskParser {

	function __construct($inputString)
	{
		preg_match("([^+#@~]*){1} (?:\s\+(.*)|\s\~(.*)|\s\#(.*)|\s\@(.*)){0,4}","hey");

	}
}

<?php

class TaskParser {
	public $title;
	public $dueDateString;
	public $durationString;
	public $category;
	public $context;

	function __construct($inputString)
	{
		preg_match("/([^+#@~]*)(?:(\+[^+#@~]*)|(\~[^+~@#]*)|(\#[^~#+@]*)|(\@[^~#+@]*))*/",$inputString, $matches);
		$this->title = $matches[1];
		foreach ($matches as $index=>$match)
		{
			if ($index === 0 || $index === 1)
			{
				continue;
			}

			switch (substr($match,0,1))
			{
				case '+':
					$this->dueDateString = ltrim($match, '+');
					break;
				case '~':
					$this->durationString = ltrim($match, '~');
					break;
				case '#':
					$this->category = ltrim($match, '#');
					break;
				case '@':
					$this->context = ltrim($match, '@');
					break;
				default:
					continue;
			}
		}
		//echo print_r($matches, true);

	}
}

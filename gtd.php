<?php
require_once('TaskParser.php');
//Title +dueDate #category +duration @context
$thoughts = array();
$line = "";
while (true)
{
	echo "What's on your mind? (Press Enter to submit)\n";
    $handle = fopen ("php://stdin","r");
    $line = trim( fgets($handle) );
	if ($line === "done")
	{
		break;
	}
	$thoughts[] = $line;
	$taskParser = new TaskParser($line);
	echo print_r($taskParser, true);
}
die;
$defined = array();
$abstract = array();

foreach ($thoughts as $thought)
{
	echo "Can you clearly identify this task as a task, event, or note/reference? (yes/no)\n";
	echo $thought . "\n";
	$handle = fopen ("php://stdin","r");
    $line = trim( fgets($handle) );
	if (strtolower($line) === "yes")
	{
		$defined[] = $thought;
	}
	else
	{
		$abstract[] = $thought;
	}
}
echo "defined: " . print_r($defined, true);
echo "abstract: " . print_r($abstract, true);

$tasks = array();
$events = array();
$notes = array();

foreach ($defined as $item)
{
	echo "Is this a task, event, or note/reference material? (t/e/n)\n";
	echo $item . "\n";
	$handle = fopen ("php://stdin","r");
    $line = trim( fgets($handle) );
	switch ( strtolower($line) )
	{
		case "t":
			$tasks[] = $item;
			break;
		case "e":
			$events[] = $item;
			break;
		case "n":
			$notes[] = $item;
			break;
		default:
			break;
	}
}

foreach ($tasks as $task)
{
	echo "What else do you know about this task?\n";
	echo "Follow this format: Title +dueDate ~duration #category @context\n";
	echo "Example: algebra hw 6.8 +monday ~1hr #school @textbook\n";
	echo $task . "\n";
	$handle = fopen ("php://stdin","r");
    $line = trim( fgets($handle) );
	$taskParser = new TaskParser($line);
}

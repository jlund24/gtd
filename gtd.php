<?php
//Title +dueDate #category ~duration @context

echo "Enter a task:\n";
$handle = fopen ("php://stdin","r");
$line = fgets($handle);
echo $line;

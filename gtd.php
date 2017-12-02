<?php
//Title +dueDate #category +duration @context
while ($line !== 'done')
{
    echo "Enter a task:\n";
    $handle = fopen ("php://stdin","r");
    $line = fgets($handle);
}

echo $line;

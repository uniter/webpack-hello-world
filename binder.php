<?php

print 'Hello from binder.php!';

return function ($document) {
    $messageBox = $document->getElementById('myMessage');

    $document->getElementById('helloButton')->addEventListener('click', function () use ($messageBox) {
        $messageBox->textContent = 'You clicked Hello!';
    });

    $document->getElementById('worldButton')->addEventListener('click', function () use ($messageBox) {
        $messageBox->textContent = 'You clicked World!';
    });

    $document->getElementById('throwButton')->addEventListener('click', function () use ($messageBox) {
        $messageBox->textContent = 'Aw snap - check the console for the error! ' .
            'Try setting a breakpoint in your browser\'s devtools.';

        throw new Exception('This is a test exception');
    });
};

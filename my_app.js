(async () => {
    // Run the PHP module and capture its result Closure.
    const binder = (await require('./binder.php')).getNative();

    // Call the PHP closure function returned from binder.php, from JavaScript!
    binder(document);
})();

const getTime = t => {
    var date = new Date();
    return date.toISOString();
}

(() => {
    console.log(`hello bitch ${getTime()}`)
})();


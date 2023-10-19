function download(url) {
    return new Promise(function dow(resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function () {
            const data = "dumy data";
            resolve(data);
            console.log("Finished downloading");
        }, 3000);
    });
}
x = download("abc.com");

x.then(function resolveHandler(value) {
    console.log("Downloaded data is", value);
});

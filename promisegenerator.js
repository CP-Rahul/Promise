function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, 1000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function wrtie() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    })
}

function doAfterReceiving(value) {
    const future = iterator.next(value);
    if (!future.done) {
        future.value.then(doAfterReceiving);
    }
}

function generator() {
    const downloadedData = yield download("www.xyz.com");
    console.log("Downloaded data is", downloadedData);
    const file = yield writeFile(downloadedData);
    console.log("fiele written is", file);
    const response = yield uploadData(file, "www.abc.com");
    console.log("Uploaded status is", response);
}

const iterator = generator();
const future = iterator.next();
future.value.then(doAfterReceiving);

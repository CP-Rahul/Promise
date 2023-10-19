// Tasks: (Don't use promises only use promises)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function downloadData(url) {
    return new Promise(function down(resolve, reject) {
        console.log("Downloading starts");
        setTimeout(function exec() {
            console.log("Downloading completed");
            let data = "dummy data"
            resolve(data);
        } ,5000)
    })
}

function saveData(data) {
    return new Promise(function save(resolve, reject) {
        console.log("Saving starts");
        setTimeout(function exec() {
            let file = "data.txt";
        console.log("Saving completed");
            resolve(file);
        } ,5000)
    })
}

function uploadData(data) {
    return new Promise(function upload(resolve, reject) {
        console.log("Uploading starts");
        setTimeout(function exec() {
            console.log("Uploading completed");
            let response = "success";
            resolve(response);
        } ,5000)
    })
}


let x = downloadData("www.abc.com");
x
.then(function processDownloadData(data) {
    console.log("Downloaded data is", data);
    return saveData(data);
})
.then(function processSavedData(file) {
    console.log("Data saved in the file", file);
    return uploadData("www.abc.com");
})
.then(function processUploadedData(status) {
    console.log("Uploading status is", status);
})
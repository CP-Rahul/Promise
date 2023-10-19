// Tasks: (Don't use promises only use callbacks)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function downloadData(url, cb) {
    console.log("Downloading starts");
    setTimeout(function down() {
        console.log("Downloading completed");
        let data = "dummy data";
        cb(data);
    }, 5000)
}

function saveData(data, cb) {
    console.log("Saving starts");
    setTimeout(function save() {
        let file = "data.txt";
        console.log("Saving completed");
        cb(file);
    }, 5000)
}

function uploadFile(url, cb) {
    console.log("Uploading starts");
    setTimeout(function upload() {
        console.log("Uploading completed");
        let response = "Success";
        cb(response);
    }, 5000)
}

downloadData("www.abc.com", function(value) {
    console.log("Downloaded data is", value);
    saveData(value, function cb(file) {
        console.log("Data saved in the file", file);
        uploadFile("xyz.com", function(response) {
            console.log("Uploading status is", response)
        })
    })
})
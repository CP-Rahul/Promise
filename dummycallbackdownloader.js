
function download(url, cb) {
    console.log("Started downloading form", url) 
        setTimeout(function dow() {
            const data = "dummy data";
            console.log("Downloaded finished")
            cb(data)
        }, 5000)
    } 

download("abc.com", function processDownloading(value) {
    console.log("Downloaded data is ", value)
})
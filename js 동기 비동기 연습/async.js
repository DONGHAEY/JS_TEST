const phtos = []

async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            phtos.push('Profile inc');
            resolve("Phtoo Uploaded");
        }, 3000)
    });
    let result = await uploadStatus;
    console.log(result);
    console.log(phtos.length);
}

photoUpload();
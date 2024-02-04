const fetching = (url, mxretries) => {
    return new Promise((resolve, reject) => {
        let retries = 0;

        const fetchData = () => {

            fetch(url).then((response) => {
                resolve(response)
            })
                .catch((err) => {
                    retries++;
                    if (retries <= mxretries) {
                        fetchData()
                    } else {
                        reject(err)
                    }
                })
        }
        fetchData()

    })



}

fetching('https://example.com/data', 5).then((res) => {
    console.log(res);
    })
    .catch((err) => {
        console.log('Error');
    })
    .finally(() => {
        console.log("Promise Finished");
    })
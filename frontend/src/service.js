const service = (url, dado) => {
    return (
            // console.log('dado');
            // console.log(dado);
            new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "text/plain");
                xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                xhr.onreadystatechange = () => {
        
                    if (xhr.readyState === 4) {
        
                        if (xhr.status === 200) {
        
                            //resolve(xhr.responseText);
                            resolve(JSON.parse(xhr.responseText));
                        } else {
        
                            reject(xhr.responseText);
                        }
                    }
                };
                console.log(dado);
                xhr.send(dado);
                // xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
            })
    )  
} 

export default service;
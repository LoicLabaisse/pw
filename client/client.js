async function subscribe(){
    let sw =await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey: process.env.PROCESS_ENV_PUBLICKEY
    })
    console.log(JSON.stringify(push));
}

if("serviceWorker" in navigator){
    addEventListener('load'), async() =>{
        let sw = await navigator.serviceWorker.register("./worker.js");
        console.log(sw);
    }
}
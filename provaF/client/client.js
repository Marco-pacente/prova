const zmq= require('zeromq');

async function run() {
    const sock= new zmq.Push();
    await sock.connect("tcp://server:3000");
    console.log("Connesso a tcp://server:3000");

    let i=1;
    while(true){
        const message= `lavoro ${i++}`;
        await sock.send(message);
        console.log("Inviato: ", message);
        await new Promise(resolve => setTimeout(resolve,1000));
    }
    
}

run().catch(console.error);
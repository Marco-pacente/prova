const zmq= require("zeromq");

async function run(){
    const sock= new zmq.Pull();
    await sock.bind("tcp://0.0.0.0:3000");
    console.log("in ascolto su 0.0.0.0:3000");

    for await (const [msg] of sock){
        console.log("Ricevuto: ", msg.toString());
    }
}


run().catch(err =>{
    console.error(err);
    process.exit(1);
})
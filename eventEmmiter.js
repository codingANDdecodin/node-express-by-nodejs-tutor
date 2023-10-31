import events from 'events'
// import { EventEmitter } from 'stream';
var eventEmitter = new events.EventEmitter();
const con1=()=>{
    console.log("con1 exicute..")
}
const con2=()=>{
    console.log("con2 excicute..")
}

eventEmitter.on("connection",con1);
eventEmitter.on("connection",con2);

eventEmitter.emit('connection')

var count=events.EventEmitter.listenerCount(eventEmitter,'connection')
console.log(count)

eventEmitter.removeListener('connection',con1)

eventEmitter.emit('connection')
var count2=events.EventEmitter.listenerCount(eventEmitter,'connection')
console.log(count2)
console.log("program ended")

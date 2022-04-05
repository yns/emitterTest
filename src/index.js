import EventEmitter from "eventemitter3";

var emitter = new EventEmitter();

var emitEventName = "DUMMY-EVENT";

document.getElementById("emit").addEventListener("click", () => {
    emitter.emit(emitEventName,"data");
});

document.getElementById("emit_on").addEventListener("click", () => {
    emitter.on(emitEventName, gotPayload);
    emitter.on(emitEventName, gotPayloadNew);
});

document.getElementById("emit_off").addEventListener("click", () => {
    //emitter.off(emitEventName, gotPayload);
    emitter.off(emitEventName);
});

document.getElementById("list_emit").addEventListener("click", () => {
    updateEmitList();
});


function gotPayload(payload) {
    console.log("Got payload: " + payload);
}

function gotPayloadNew(payload) {
    console.log("Got payload New: " + payload);
}

function updateEmitList() {
    document.getElementById("emitList").innerHTML = "";

    emitter.listeners(emitEventName).forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = element;
        document.getElementById("emitList").appendChild(div);
    });
}

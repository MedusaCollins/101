var queue = [];
var maxQueueLength = 6;
var list = [5, 12, 9, 8, 0, 1, 7];

function enQueue(number) {
    if (queue.length < maxQueueLength){
        queue.push(number); // Kuyruğun sonuna yeni elemanı ekler.
    }else{
        // console.log("Queue is full");
    }
}

function deQueue() {
    if (queue.length > 0){
        let firstElement = queue[0];
        queue.shift(); // Kuyruktaki ilk elemanı siler.
        // console.log(`${firstElement} kuyruktan çıkarıldı.`);
    }else{
        // console.log("Kuyrukta eleman yoktur.");
    }
}

for(let i = 0; i <= 10; i++){
    if(i < list.length){
        enQueue(list[i]);
    }else if(i >= 7 && i <= 9){
        deQueue();
    }else{
        enQueue(5)
    }

    console.log(`${i}. adım => ${queue}`);
}


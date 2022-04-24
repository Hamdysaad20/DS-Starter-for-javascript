export defult class Queue {
constructor() {
this.items =[];

}
enqueue(items){
this.items.push(items);
}
dequeue(){
return this.items.shift();
}
peek(){
return thias.items[0];
}
getSize(){
return this.items.length;
}
isEmpty(){
return this.getSize() === 0 ;
}
}

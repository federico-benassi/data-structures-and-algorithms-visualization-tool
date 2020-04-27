class LinkedList{
    
    constructor(){
        this.head = null;
    }

    size(){
        if(this.head === null){
            return 0;
        }

        let counter = 1;
        let currentNode = this.head;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
            counter++;
        }

        return counter;
    }

    isEmpty(){
        return !this.head;
    }

    getValueAt(index){
        if(index > this.size - 1) throw new Error(`Index ${ index } is out of bounds`);
        else {
            let counter = 0;
            currentNode = this.head;
            while(index !== counter && currentNode.nextNode != null){
                currentNode = currentNode.nextNode;
                counter++;
            }

            return currentNode.value;
        }
    }

    push(value){
        if(!this.head){
            this.head = new Node(value, null);
            return;
        }

        let currentNode = this.head;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = new Node(value, null);
    }

    pop(){
        if(!this.head) throw new Error("No items inside");
        if(this.head && !this.head.nextNode){
            let toReturn = this.head;
            this.head = null;
            return toReturn;
        }

        let currentNode = this.head;
        let previousNode = null;
        while(currentNode.nextNode){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        previousNode.nextNode = null;
        return currentNode.value;
    }

    pushFront(value){
        if(!this.head) this.head = new Node(value, null);
        else {
            let newHead = new Node(value, this.head);
            this.head = newHead;
        }
    }

    popFront(){
        if(!this.head) throw new Error("No Items Inside");
        else if(this.size() === 1) {
            const toReturn = this.head;
            this.head = null;
            return toReturn.value;
        }
        else {
            let toReturn = this.head;
            this.head = this.head.nextNode;
            return toReturn.value;
        }
    }

    front(){
        if(!this.head) return null;
        else return this.head.value;
    }

    back(){
        if(!this.head) return null;
        else if(this.size() === 1) return this.head.value;
        else {
            let currentNode = this.head;
            while(currentNode.nextNode){
                currentNode = currentNode.nextNode;
            }

            return currentNode.value;
        }
    }
}

class Node {
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = LinkedList;
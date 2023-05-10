class SingletonExample{
    public static instance: SingletonExample;
    
    private numbers: number[] = [6, 5, 4]; 

    private constructor(numbers: number[]){
        this.numbers = numbers;
    }

    public static getInstance():SingletonExample{
        if(SingletonExample.instance == null){
            SingletonExample.instance = new SingletonExample([]);
        }

        return SingletonExample.instance;
    }

    public addNumber(_number:number){
        this.numbers.push(_number);
    }

    public getNumbers():number[]{
        return SingletonExample.instance.numbers;
    }
}


function SingletonImplementation() {
    const implementation1 = SingletonExample.getInstance();
    const implementation2 = SingletonExample.getInstance();
    implementation1.addNumber(3)
    
    console.log("Singleton Implementation");
    console.log("Implementation 1 numbers after adding 3 to implementation 1", implementation1.getNumbers());
    console.log("Implementation 2 numbers after adding 3 to implementation 1", implementation2.getNumbers());
    console.log("Even though we called the method to add the number only to implementation 1, the number was added to both implementations because they are one instance")
    console.log("This will turn true if the implementations are one instance: ", implementation1 === implementation2);
}

export {SingletonImplementation};
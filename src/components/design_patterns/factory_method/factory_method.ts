interface Person{
    name:string;
    introduction():string;
}

class Person1 implements Person{
    name:string;

    constructor(){
        this.name = "Jon";
    }

    introduction():string{
        return "Jon is a student";
    }
}

class Person2 implements Person{
    name:string;

    constructor(){
        this.name = "Juan";
    }

    introduction():string{
        return "Juan is a doctor";
    }
}

abstract class PersonCreator{
    abstract createPerson():Person;

    introducePerson():string{
        const person = this.createPerson();
        return person.introduction();
    };
}

class PersonCreator1 extends PersonCreator{
    createPerson(): Person {
        return new Person1();
    }
}

class PersonCreator2 extends PersonCreator{
    createPerson(): Person {
        return new Person2();
    }
}

function FactoryMethodImplementation(creatorType:number){
    const creator = creatorType === 0 ? new PersonCreator1() : new PersonCreator2();

    console.log("Factory method implementation");

    console.log("Person Creator's person: ",creator.introducePerson());
}

export {FactoryMethodImplementation};
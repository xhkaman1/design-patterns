interface Mediator{
    notify(sender:Component, message:string);
}

class AccessMediator implements Mediator{
    person: Person;
    site: Site;

    notify(sender: Component, message:string) {
        if(sender === this.person && message === "AgeChange"){
            console.log("Person changed age to: " + this.person.age);
            this.site.giveAccess(this.person.age);
        }
        if(sender === this.site && message === "AccessGranted"){
            console.log("Allowed access to person");
        }
        if(sender === this.site && message === "AccessNotAllowed"){
            console.log("Access not allowed to person");
        }
    }
}

class Component{
    mediator:Mediator;
}

class Person extends Component{
    age:number;

    constructor(_mediator: Mediator){
        super();
        super.mediator = _mediator;
    }

    setAge(_age:number){
        this.age = _age;
        this.mediator.notify(this,"AgeChange");
    }
}

class Site extends Component{
    access:boolean;

    constructor(_mediator: Mediator){
        super();
        super.mediator = _mediator;
    }

    giveAccess(age:number){
        this.access = age >= 18;
        if(this.access){
            this.mediator.notify(this, "AccessGranted");
        }else{
            this.mediator.notify(this, "AccessNotAllowed");
        }
        return this.access
    }
}

function MediatorImplementation(){
    console.log("Mediator Implementation")

    const access = new AccessMediator();
    console.log("Mediator created");

    const person = new Person(access);
    const site = new Site(access);
    console.log("Person, Site Created");

    person.setAge(15);
    person.setAge(19);
}

export {MediatorImplementation};
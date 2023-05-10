interface Mediator{
    notify(sender:Component, message:string);
}

class AccessMediator implements Mediator{
    person: Person;
    site: Site;

    constructor(_person:Person, _site:Site){
        this.person = _person;
        this.person.mediator = this;
        this.site = _site;
        this.site.mediator = this;
    }

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

    setAge(_age:number){
        this.age = _age;
        this.mediator.notify(this,"AgeChange");
    }
}

class Site extends Component{
    access:boolean;

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

    const person = new Person();
    const site = new Site();
    console.log("Person, Site Created");

    const access = new AccessMediator(person, site);
    console.log("Mediator created");

    person.setAge(15);
    person.setAge(19);
}

export {MediatorImplementation};
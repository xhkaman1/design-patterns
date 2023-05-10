class AlbaniaTime{
    hours:number;
    minutes:number;

    constructor(_hours:number, _minutes:number){
        this.hours = _hours;
        this.minutes = _minutes;
    }

    timeInAlbania():string{
        return this.hours + ":" + this.minutes;
    }
}

class USTime{
    hours:number;
    minutes:number;

    constructor(_hours:number, _minutes:number){
        this.hours = _hours;
        this.minutes = _minutes;
    }

    timeInUSA():string{
        return this.hours + ":" + this.minutes;
    }
}

class AlbaniaToUSAdapter extends USTime{

    constructor(_AlTime: AlbaniaTime){
        const USHours = _AlTime.hours - 5;
        const USMinutes = _AlTime.minutes;
        super(USHours, USMinutes);
    }

    timeInUSA(): string {
        return super.timeInUSA();
    }
}

function AdapterImplementation(){
    const alTime: AlbaniaTime = new AlbaniaTime(10,46);
    const alToUSAdapter: AlbaniaToUSAdapter = new AlbaniaToUSAdapter(alTime);
    const usTime: USTime = new USTime(5,46);

    console.log("Adapter Implementation");
    console.log("Time in us(USTime class)", usTime.timeInUSA());
    console.log("Time in us(AlToUSAdapter class)", alToUSAdapter.timeInUSA());
    console.log("This will print true if time in US is the same as the time given from the adapter: ", usTime.timeInUSA() === alToUSAdapter.timeInUSA());

}

export {AdapterImplementation};
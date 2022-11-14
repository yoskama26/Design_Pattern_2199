import { Yamato } from './Yamato'


interface Command {
    execute(): void;
}

export class ShieldsCommand implements Command {
    Yamato: Yamato;

    constructor(Yamato: Yamato){
        this.Yamato = Yamato
    }
    execute(): void {
        this.Yamato.shieldsSystem();
    }
    
}

export class MotionSensorCommand implements Command {
    private receiver: Receiver;
    private state: boolean;

    constructor(receiver: Receiver, state: boolean) {
        this.receiver = receiver;
        this.state = state;
    }

    execute(): void {
        this.receiver.activesMotionSensor(this.state);
    }
    
}

export class RadarSensorCommand implements Command {
    private receiver: Receiver;
    private state: boolean;

    constructor(receiver: Receiver, state: boolean) {
        this.receiver = receiver;
        this.state = state;
    }

    execute(): void {
        this.receiver.activesRadarSensor(this.state);
    }
    
}

export class MissilesCommand implements Command {
    private receiver: Receiver;
    private count: number;

    constructor(receiver: Receiver, count: number) {
        this.receiver = receiver;
        this.count = count;
    }

    execute(): void {
        this.receiver.activesMissiles(this.count);
    }
    
}

export class Receiver {
    Yamato: Yamato;

    constructor(Yamato: Yamato){
        this.Yamato = Yamato
    }
    public activesMotionSensor(state: boolean): void {
        if(state){
            console.log(`MotionSensor is active`);
        }else{
            console.log(`MotionSensor is enactive`);
        }
    }

    public activesRadarSensor(state: boolean): void {
        if(state){
            console.log(`RadarSensor is active`);
        }else{
            console.log(`RadarSensor is enactive`);
        }
    }

    public activesMissiles(count: number): void {
        this.Yamato.feuuuu(count);
    }
}

export class Invoker {
    private onStart: Command;
    private onFinish: Command;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public commandExecute(): void {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
}
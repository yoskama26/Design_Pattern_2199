import { EventManager } from "./Observer";
export interface IMotionSensor{
    manufacturer: String;
    isActivate: boolean;
    manager : EventManager;
    Equipped(): void;
    message(): Map<string, string>;
    setStat():void
}

export interface IRadarSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;
    Equipped(): void;
    message(): Map<string, string>;
    setStat():void
}

export class MotionSensorA implements IMotionSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.manager = EventManager.getInstance();
    }

    Equipped(): void{
        this.manager.emit("add-component", this.message())
    }

    message(){
        return new Map([
            ["Motion",("Motion Sensor of " + this.manufacturer)]
        ])
    }

    setStat():void{
        this.isActivate = !this.isActivate;
    }
}

export class MotionSensorB implements IMotionSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.manager = EventManager.getInstance();
    }

    Equipped(): void{
        this.manager.emit("add-component", this.message())
    }

    message(){
        return new Map([
            ["Motion",("Motion Sensor of " + this.manufacturer)]
        ])
    }

    setStat():void{
        this.isActivate = !this.isActivate;
    }
}

export class MotionSensorC implements IMotionSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.manager = EventManager.getInstance();
    }

    Equipped(): void{
        this.manager.emit("add-component", this.message())
    }

    message(){
        return new Map([
            ["Motion",("Motion Sensor of " + this.manufacturer)]
        ])
    }

    setStat():void{
        this.isActivate = !this.isActivate;
    }
}



export class RadarSensorA implements IRadarSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.manager = EventManager.getInstance();
    }

    Equipped(): void{
        this.manager.emit("add-component", this.message())
    }

    message(){
        return new Map([
            ["Radar",("Radar Sensor of " + this.manufacturer).split('').reverse().join('')]
        ])

    }
    
    setStat():void{
        this.isActivate = !this.isActivate;
    }
}

export class RadarSensorB implements IRadarSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.manager = EventManager.getInstance();
    }

    Equipped(): void{
        this.manager.emit("add-component", this.message())
    }

    message(){
        return new Map([
            ["Radar",("Radar Sensor of " + this.manufacturer).split('').reverse().join('')]
        ])

    }
    
    setStat():void{
        this.isActivate = !this.isActivate;
    }
}

export class RadarSensorC implements IRadarSensor{
    manufacturer: String;
    manager : EventManager;
    isActivate: boolean;

    constructor(manufacturerCompany: string){
        this.manufacturer = manufacturerCompany;
        this.isActivate = false;
        this.manager = EventManager.getInstance();
    }

    Equipped(): void{
        this.manager.emit("add-component", this.message())
    }

    message(){
        return new Map([
            ["Radar",("Radar Sensor of " + this.manufacturer).split('').reverse().join('')]
        ])

    }
    
    setStat():void{
        this.isActivate = !this.isActivate;
    }
}
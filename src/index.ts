//import
import { ManufacturerA_Factory } from './AbstractFactory';
import { Yamato } from './Yamato'
import {IObserver, EventManager, } from './Observer';
import { Message, EncrypMessage, Adapter } from './Adapter'
import { Invoker, Receiver, ShieldsCommand, MissilesCommand, RadarSensorCommand, MotionSensorCommand} from './Command'

//Constants Global **********************************
const NOM_VAISSEAUX = 'Yamato_1';
const TIR_CANNON_DISPO: number = 10;
const MANUFACTURE_TYPE = new ManufacturerA_Factory();

//***************************************************

//factory pour les sensors
const factory = MANUFACTURE_TYPE;

//observer pour les evenements
const eventManager = EventManager.getInstance();

const sendMessage = new Message();
const adapter = new Adapter(new EncrypMessage);

class Observer implements IObserver {
    public update(data: Map<string, string>): void {
        //si equiper message
        if(data.has("Motion")) sendMessage.request(data.get("Motion"));
        if(data.has("Radar")) adapter.request(data.get("Radar"));
    }
}

//Event
const observer = new Observer();
eventManager.on("add-component", observer);

// creation Sensors
const motionSensor = factory.createMotionSensor(); 
const radarSensor = factory.createRadarSensor();

// creation du Yamato
Yamato.setInstance(NOM_VAISSEAUX, TIR_CANNON_DISPO);
const Yamato = Yamato.getInstance(); 
Yamato.cockpitMessage("Initialisation ...");

//ajoute des Sensor au vaisseaux
Yamato.addComponent("motionSensor", motionSensor);
motionSensor.Equipped();
Yamato.addComponent("radarSensor", radarSensor);
radarSensor.Equipped();

Yamato.cockpitMessage(`decollage... \n le Yamato ${Yamato.name} est dans l'espace\n`);


//command pattern
const invoker = new Invoker();
const receiver = new Receiver(Yamato);

//active motion sensor
invoker.setOnStart(new MotionSensorCommand(receiver, true));
invoker.commandExecute();

//shield on
invoker.setOnStart(new ShieldsCommand(Yamato));
invoker.commandExecute();

//active heat sensor => real threat
invoker.setOnStart(new RadarSensorCommand(receiver, true));
invoker.commandExecute();

//turn off shield
Yamato.cockpitMessage("Menace détecté, combat mode engage (et la normalement y'a la musique : https://www.youtube.com/watch?v=-zVAa79o1Q4)")
invoker.setOnStart(new ShieldsCommand(Yamato));
invoker.commandExecute();


//Tir du cannon
invoker.setOnStart(new MissilesCommand(receiver, 3));
invoker.commandExecute();

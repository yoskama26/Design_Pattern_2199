import { IMotionSensor, IRadarSensor, MotionSensorA, RadarSensorA} from "./Data";

export interface IAbstractFactory {
    createMotionSensor(): IMotionSensor;

    createRadarSensor(): IRadarSensor;
}

const ManufacturerList ={
    A: 'Nerv',
    B: 'Yokohama',
    C: 'The Moon'
}

export class ManufacturerA_Factory implements IAbstractFactory {
    manufacturer: string = ManufacturerList.A;
    public createMotionSensor(): IMotionSensor {
        return new MotionSensorA(this.manufacturer);
    }

    public createRadarSensor(): IRadarSensor {
        return new RadarSensorA(this.manufacturer);
    }
}

export class ManufacturerB_Factory implements IAbstractFactory {
    manufacturer: string = ManufacturerList.B;
    public createMotionSensor(): IMotionSensor {
        return new MotionSensorA(this.manufacturer);
    }

    public createRadarSensor(): IRadarSensor {
        return new RadarSensorA(this.manufacturer);
    }
}

export class ManufacturerC_Factory implements IAbstractFactory {
    manufacturer: string = ManufacturerList.C;
    public createMotionSensor(): IMotionSensor {
        return new MotionSensorA(this.manufacturer);
    }

    public createRadarSensor(): IRadarSensor {
        return new RadarSensorA(this.manufacturer);
    }
}

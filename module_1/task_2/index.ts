interface CarBasicInfo {
    tradeMark: string;
    color: string;
    race: number;
    year: number;
}

interface CarStatus {
    isWheelsAble: boolean;
    isControlAble: boolean;
    isConditionerAble: boolean;
    isLightAble: boolean;
}

interface Car extends CarBasicInfo, CarStatus {
    getCarInfo: () => CarBasicInfo;
    getCarStatus: () => CarStatus;
    updateCarInfo: (info: Partial<CarBasicInfo>) => void;
    updateCarStatus: (status: Partial<CarStatus>) => void;
}

{
    const newCar: Car = {
        tradeMark: 'Mercedes',
        color: 'pink',
        race: 0,
        year: 2024,
        isWheelsAble: true,
        isControlAble: false,
        isConditionerAble: false,
        isLightAble: true,
    
        getCarInfo () {
            return {
                tradeMark: this.tradeMark,
                color: this.color,
                race: this.race,
                year: this.year,
            }
        },
    
        getCarStatus () {
            return {
                isWheelsAble: this.isWheelsAble,
                isControlAble: this.isControlAble,
                isConditionerAble: this.isConditionerAble,
                isLightAble: this.isLightAble,
            }
        },
    
        updateCarInfo (info: Partial<CarBasicInfo>) {
            this.color = info.color ?? this.color;
            this.year = info.year ?? this.year;
            this.tradeMark = info.tradeMark ?? this.tradeMark;
            this.race = info.race ?? this.race;
    
            return this.getCarInfo();
        },
    
        updateCarStatus (status: Partial<CarStatus>) {
            this.isWheelsAble = status.isWheelsAble ?? this.isWheelsAble;
            this.isControlAble = status.isControlAble ?? this.isControlAble;
            this.isConditionerAble = status.isConditionerAble ?? this.isConditionerAble;
            this.isLightAble = status.isLightAble ?? this.isLightAble;
    
            return this.getCarStatus();
        }
    }
    
    console.log(newCar.getCarInfo());
    console.log(newCar.getCarStatus());
    console.log(newCar.updateCarInfo({
        color: 'blue',
        year: 2023,
    }));
    console.log(newCar.updateCarStatus({
        isControlAble: true,
        isConditionerAble: true,
    }))
    
}
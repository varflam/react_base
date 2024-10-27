{
    const newCar = {
        tradeMark: 'Mercedes',
        color: 'pink',
        race: 0,
        year: 2024,
        isWheelsAble: true,
        isControlAble: false,
        isConditionerAble: false,
        isLightAble: true,
        getCarInfo() {
            return {
                tradeMark: this.tradeMark,
                color: this.color,
                race: this.race,
                year: this.year,
            };
        },
        getCarStatus() {
            return {
                isWheelsAble: this.isWheelsAble,
                isControlAble: this.isControlAble,
                isConditionerAble: this.isConditionerAble,
                isLightAble: this.isLightAble,
            };
        },
        updateCarInfo(info) {
            this.color = info.color;
            this.year = info.year;
            this.tradeMark = info.tradeMark;
            this.race = info.race;
            return this.getCarInfo();
        },
        updateCarStatus(status) {
            this.isWheelsAble = status.isWheelsAble;
            this.isControlAble = status.isControlAble;
            this.isConditionerAble = status.isConditionerAble;
            this.isLightAble = status.isLightAble;
            return this.getCarStatus();
        }
    };
    console.log(newCar.getCarInfo());
    console.log(newCar.getCarStatus());
    console.log(newCar.updateCarInfo({
        tradeMark: newCar.tradeMark,
        color: 'blue',
        race: 0,
        year: 2023,
    }));
    console.log(newCar.updateCarStatus({
        isWheelsAble: newCar.isWheelsAble,
        isControlAble: true,
        isConditionerAble: true,
        isLightAble: newCar.isLightAble,
    }));
}

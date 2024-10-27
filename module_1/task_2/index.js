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
            var _a, _b, _c, _d;
            this.color = (_a = info.color) !== null && _a !== void 0 ? _a : this.color;
            this.year = (_b = info.year) !== null && _b !== void 0 ? _b : this.year;
            this.tradeMark = (_c = info.tradeMark) !== null && _c !== void 0 ? _c : this.tradeMark;
            this.race = (_d = info.race) !== null && _d !== void 0 ? _d : this.race;
            return this.getCarInfo();
        },
        updateCarStatus(status) {
            var _a, _b, _c, _d;
            this.isWheelsAble = (_a = status.isWheelsAble) !== null && _a !== void 0 ? _a : this.isWheelsAble;
            this.isControlAble = (_b = status.isControlAble) !== null && _b !== void 0 ? _b : this.isControlAble;
            this.isConditionerAble = (_c = status.isConditionerAble) !== null && _c !== void 0 ? _c : this.isConditionerAble;
            this.isLightAble = (_d = status.isLightAble) !== null && _d !== void 0 ? _d : this.isLightAble;
            return this.getCarStatus();
        }
    };
    console.log(newCar.getCarInfo());
    console.log(newCar.getCarStatus());
    console.log(newCar.updateCarInfo({
        color: 'blue',
        year: 2023,
    }));
    console.log(newCar.updateCarStatus({
        isControlAble: true,
        isConditionerAble: true,
    }));
}

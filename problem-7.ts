class Car {
    constructor(
        public make: string,
        public model: string,
        public year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(): number {
        const currentYear = new Date().getFullYear();
        const ageOfCar = currentYear - this.year
        // console.log(ageOfCar);
        return ageOfCar;
    }
}

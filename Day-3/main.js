class Vehicle{
    constructor(x, y, speed, fuel) {
        this.x = x
        this.y = y
        this._speed = speed
        this._fuel = fuel
        Vehicle.carsSold++
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    set fuel(fuel) {
        if(fuel < 0 || fuel > 150){
            return console.log("Fuel must be between 0 to 150")
        }
        this._fuel = fuel
    }

    get speed(){
        return this._speed
    }

    get fuel(){
        return this._fuel
    }


   static getInfo(){
       console.log(`we sold ${Vehicle.carsSold}`)
   }

   static calculateMoney(){
       console.log(Vehicle.carsSold * 30000)
   }
}
 Vehicle.carsSold = 0

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = 2
c.fuel = 13
console.log(c.fuel)
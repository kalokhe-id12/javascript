
console.log(`-----------------------------step 1-----------------------------------------`);

console.log(`--Vehical details--`);
class Vehicle{
    constructor(VehicleName , VehicleNumber ,VehicleCompany,VehicleColor,VehiclePrise){
        this.VehicleName = VehicleName;
        this.VehicleNumber = VehicleNumber;
        this.VehicleCompany = VehicleCompany;
        this.VehicleColor = VehicleColor;
        this.VehiclePrise = VehiclePrise;

    }
    getDetails(){
        console.log(`VehicleName: ${this.VehicleName}, VehicleNumbe: ${this.VehicleNumber}, VehicleCompany: ${this.VehicleCompany}, VehicleColor: ${this.VehicleColor}, VehiclePrise: ${this.VehiclePrise} `);
     }
}
const eon = new Vehicle("Eon" , "MH-12-00123" , "Hundai" , "Red" , "4 lakh");
console.log(eon.VehicleName);
eon.getDetails();

const Venue = new Vehicle("Venue" , "MH-14-00125", "hundai", "White", "12 lakh");
const Verana = new Vehicle("Verana", "MH-14-012345","Honda", "Blue", "14 lakh");
const Vento = new Vehicle("Vento", "MH-13-1145", "Suzuki", "Silver", "15 lakh");


console.log(`....Traversing array of Object...`);
console.log(`--Vehical details--`);

const arrayVehicle = [eon ,Venue,Verana,Vento];
for (const element of arrayVehicle) {
    element.getDetails();
}

        
    




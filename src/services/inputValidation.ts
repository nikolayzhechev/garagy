import { getVehicleByRegistrationNumber } from "@/database/vehicleRepository";
import { SQLiteDatabase } from "expo-sqlite";

/* Contains all input validations */

export async function isValidRegistration (db: SQLiteDatabase, registrationNumber: string): Promise<boolean> {
    const vehicle = await getVehicleByRegistrationNumber(db, registrationNumber);

    return vehicle ? false : true;
}
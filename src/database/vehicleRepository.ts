import type { SQLiteDatabase } from 'expo-sqlite';
import { Vehicle } from '@/models/Vehicle';

/* Main Db operations: create, get, update, delete vehicles  */
export type CreateVehicleInput = {
    make: string;
    model: string;
    year?: number;
    engine?: string;
    fuel?: string;
    registration_number?: string;
    gearbox?: string;
    drivetrain?: string;
    package?: string;
    trim?: string;
    weight?: number;
    odometer: number;
};

export async function createVehicle (db: SQLiteDatabase, vehicle: CreateVehicleInput): Promise<number>{
    const result = await db.runAsync(
        `
            INSERT INTO vehicles (
                make,
                model,
                year,
                engine,
                fuel,
                registration_number,
                gearbox,
                drivetrain,
                package,
                trim,
                weight,
                fuel_consumption_avg,
                odometer,
                image_name,
                image_data
            )
            VALUES (
                $make,
                $model,
                $year,
                $engine,
                $fuel,
                $registrationNumber,
                $gearbox,
                $drivetrain,
                $package,
                $trim,
                $weight,
                $fuelConsumptionAvg,
                $odometer,
                '',
                X''
            )
        `,
        {
            $make: vehicle.make.trim(),
            $model: vehicle.model.trim(),
            $year: vehicle.year || null,
            $engine: vehicle.engine?.trim() || null,
            $fuel: vehicle.fuel?.trim() ?? null,
            $registrationNumber: vehicle.registration_number?.trim() || null,
            $gearbox: vehicle.gearbox?.trim() || null,
            $drivetrain: vehicle.drivetrain?.trim() || null,
            $package: vehicle.package?.trim() || null,
            $trim: vehicle.trim?.trim() || null,
            $weight: vehicle.weight ?? null,
            $odometer: vehicle.odometer,
        }
    );

    return result.lastInsertRowId;
}

export async function getVehicles (db: SQLiteDatabase):  Promise<Vehicle[]>{
    return db.getAllAsync<Vehicle>(
        `
            SELECT
                id,
                make,
                model,
                year,
                registration_number,
                odometer,
                created_at
            FROM vehicles
            ORDER BY created_at DESC
        `
    );
}

export async function getVehicleById (db: SQLiteDatabase, vehicleId: number): Promise<Vehicle | null>{
    return db.getFirstAsync<Vehicle>(
        `
            SELECT
                id,
                make,
                model,
                year,
                registration_number,
                odometer,
                created_at
            FROM vehicles
            WHERE id = ?
        `,
        vehicleId
    );
}

export function getVehicleByRegistrationNumber (db: SQLiteDatabase, registrationNumber: string): Promise<Vehicle | null>{
    return db.getFirstAsync<Vehicle>(
        `
            SELECT
                id,
                registration_number
            FROM vehicles
            WHERE registration_number = ?
        `,
        registrationNumber
    );
}

export async function deleteVehicle (db: SQLiteDatabase, vehicleId: number): Promise<void> {
    await db.runAsync(
        `DELETE FROM vehicles WHERE id = ?`,
        vehicleId
    );
}

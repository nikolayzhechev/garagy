import type { SQLiteDatabase } from 'expo-sqlite';

/* Db migration functions: migrateToV{version} */
export async function migrateToV1(
    db: SQLiteDatabase
): Promise<void> {
    /*
     vehicles
        │
        ├──── maintenance_records
        │
        └──── maintenance_schedules
                        │
                        └── last_done_record_id
                                │
                                ▼
                        maintenance_records
    */
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS vehicles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            make TEXT NOT NULL,
            model TEXT NOT NULL,
            year INTEGER,
            engine TEXT,
            fuel TEXT,
            registration_number TEXT,
            gearbox TEXT,
            drivetrain TEXT,
            package TEXT,
            trim TEXT,
            weight INTEGER,
            fuel_consumption_avg INTEGER,
            odometer INTEGER,
            image_name TEXT NOT NULL DEFAULT '',
            image_data BLOB NOT NULL DEFAULT X'',
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS maintenance_records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            vehicle_id INTEGER NOT NULL,
            service_type TEXT NOT NULL,
            description TEXT,
            mileage INTEGER,
            cost REAL,
            service_date TEXT NOT NULL,
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY (vehicle_id)
                REFERENCES vehicles(id)
                ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS maintenance_schedules (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            vehicle_id INTEGER NOT NULL,
            category TEXT,
            title TEXT,
            intervaL INTEGER,
            interval_months INTEGER,
            last_done_record_id INTEGER,
            is_active INT,

            FOREIGN KEY (vehicle_id)
                REFERENCES vehicles(id)
                ON DELETE CASCADE
        )
    `);
}

export async function migrateToV2(
    db: SQLiteDatabase
): Promise<void> {
    await db.execAsync(`
       
    `);
}

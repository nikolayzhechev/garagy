import type { SQLiteDatabase } from 'expo-sqlite';
import * as migration from './migrations';

/*
    Installed app
        │
        │ database version = 1
        ▼
    App update
        │
        ├── V1? already done
        │
        ├── V2? run migration
        │
        └── V3? run migration
                │
                ▼
        database version = 3
*/

/*
    Brand-new Installation
        version 0
        ↓
        migration V1
        ↓
        migration V2
        ↓
        migration V3
        ↓
        version 3
*/

const DATABASE_VERSION = 1;

export async function initDatabase(
    db: SQLiteDatabase
): Promise<void> {
    await db.execAsync(`
       PRAGMA journal_mode = WAL;
       PRAGMA foreign_keys = ON;
    `);

    await migrateDatabase(db);
}

async function migrateDatabase(
    db: SQLiteDatabase
): Promise<void> {
    const result = await db.getFirstAsync< { user_version: number }>(
        'PRAGMA user_version'
    );

    let currentVersion = result?.user_version ?? 0;

    if (currentVersion < 1) {
        await migration.migrateToV1(db);
        currentVersion = 1;
    }

    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
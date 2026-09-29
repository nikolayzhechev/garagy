export type MaintenanceRecord = {
    id: number;
    vehicle_id: number;
    date: Date,
    mileage: number;
    category: string;
    title: string;
    notes: string;
    cost: string;
    currency: string;
    shop_name: string;
    created_at: string;
};
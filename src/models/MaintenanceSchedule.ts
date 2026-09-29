export type MaintenanceSchedule = {
    id: number;
    vehicle_id: number;
    category: string;
    title: string;
    interval: string;
    interval_months: string;
    last_done_record_id: number;
    is_active: boolean;
};
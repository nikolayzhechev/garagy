import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { getVehicleById } from "@/database/vehicleRepository";
import { Vehicle } from "@/models/Vehicle";
import { globalStyles } from "@/styles/global";

export default function VehicleDetails() {
    const db = useSQLiteContext();
    const { vehicleId } = useLocalSearchParams();
    const [currentVehicle, setCurrentVehicle] = useState<Vehicle | null>(null);

    useEffect(() => {
        const getVehicleData = async () => {
            try {
                const data = await getVehicleById(db, Number(vehicleId));
    
                if (!data) {
                    // TODO: implement
                }

                setCurrentVehicle(() => data);
            } catch (error) {
                console.error(`Unable to fetch vehicle by id: ${vehicleId}`, error);
            }
        }

        getVehicleData();
    }, []);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{currentVehicle?.make + " " + currentVehicle?.model + currentVehicle?.package + currentVehicle?.package}</Text>
            <Text style={globalStyles.text}>{ currentVehicle?.year.toString() }</Text>
            <Text style={globalStyles.sectionTitle}>{ currentVehicle?.registration_number }</Text>
            <Text style={globalStyles.sectionTitle}>{ currentVehicle?.odometer }</Text>
            <Text style={globalStyles.text}>{ currentVehicle?.engine }</Text>
            <Text style={globalStyles.sectionTitle}>Service and Maintenance</Text>
            <Text style={globalStyles.text}>{ currentVehicle?.service_interval }</Text>
            <Pressable style={globalStyles.baseBtn}>
                <Text>Service Details</Text>
            </Pressable>
        </View>
    );
}
import { globalStyles } from "@/styles/global";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, Pressable, ScrollView } from "react-native";
import { Vehicle } from "../../../models/Vehicle";
import VehicleCard from "../../../componenets/VehicleCard";
import { useSQLiteContext } from "expo-sqlite";
import { getVehicles } from "@/database/vehicleRepository";

export default function Garage() {
    const db = useSQLiteContext();
    const [myVehicles, setMyVehicles] = useState<Vehicle[] | undefined>([]);
    
    useEffect(() => {
        console.log("triggerd")
        const getVehiclesList = async () => {
            const vehicles = await getVehicles(db);

            if (!vehicles) {
                // TODO: add check
            }

            setMyVehicles(() => vehicles);
        };

        getVehiclesList();
    }, []);

    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>My Garage</Text>
            <Pressable
                style={({ pressed }) => [
                    globalStyles.baseBtn,
                    pressed && globalStyles.pressed,
                ]}
                onPress={() => router.push("/add-vehicle")}
            >
                <Text>Add New Vehicle</Text>
            </Pressable>

            <Text style={globalStyles.sectionTitle}>My Vehicles</Text>
            { myVehicles !== undefined ?
                myVehicles?.map((v:Vehicle) => (
                    <VehicleCard
                        vehicle={v}
                        key={v.id}
                    ></VehicleCard>
                ))
            :
                <Text>Your garage is empty! Add a new vehicle.</Text>
            }
        </ScrollView>
    );
}
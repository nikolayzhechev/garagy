import { Vehicle } from "@/models/Vehicle";
import { globalStyles } from "@/styles/global";
import { Image } from "expo-image";
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

type VehicleCardProps = {
    vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    // TODO: kms/miles should be passed in by global config
    // TODO: calculate service intervals [service]
    return (
        <View style={globalStyles.card}>
            <Text style={globalStyles.btnTitle}>{vehicle.make + " " + vehicle.model}</Text>
            <Text style={globalStyles.text}>{vehicle.odometer} km</Text>
            <Image source={vehicle.img}></Image>
            <Pressable
                style={globalStyles.baseBtn}
                onPress={() => router.push({
                    pathname: "/garage/[vehicleId]",
                    params: { vehicleId: vehicle.id },
                })}
            >
                <Text>Details</Text>
            </Pressable>
        </View>
    );
} 
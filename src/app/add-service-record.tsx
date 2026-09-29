import { useState } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "@/styles/global";

export default function AddServiceRecord() {
    const [title, setTitle] = useState<string>("Add service record");

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
                {title}
            </Text>
        </View>
    );
}
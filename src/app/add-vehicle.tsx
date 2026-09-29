import { colors, globalStyles } from "@/styles/global";
import { Text, TextInput, Pressable, View, ScrollView } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { createVehicle } from "@/database/vehicleRepository";
import { useSQLiteContext } from "expo-sqlite";
import { isValidRegistration } from "@/services/inputValidation";

export default function AddVehicle() {
    const db = useSQLiteContext();
    const [make, setMake] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [transmission, setTransmission] = useState<string>("");
    const [mileage, setMileage] = useState<string>("");
    const [registrationNumber, setRegistrationNumber] = useState<string>("");
    const [engine, setEngine] = useState<string>("");
    const [fuel, setFuel] = useState<string>("");
    const [drivetrain, setDrivetrain] = useState<string>("");
    const [pack, setPack] = useState<string>("");
    const [trim, setTrim] = useState<string>("");
    const [viewSpecs, setViewSpecs] = useState<boolean>(false);
    const [viewOptions, setViewOptions] = useState<boolean>(false);
    const [validInput, setValidInput] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const handleAddNewVehicle = async () => {
        try {
            let result = await createVehicle(db, {
                make: make,
                model: model,
                year: Number(year),
                engine: engine,
                fuel: fuel,
                registration_number: registrationNumber,
                gearbox: transmission,
                drivetrain: drivetrain,
                package: pack,
                trim: trim,
                odometer: Number(mileage)
            });

            if (result) {
                router.push("/(tabs)/garage");
            }
        } catch (error) {
            console.error("Could not create vehicle", error);
            setError("Unable to save vehicle due to an error.");
        }
    };

    const validateInputHandler = async () => {
        setValidInput(await isValidRegistration(db, registrationNumber));
    }
    
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: colors.background }}
            contentContainerStyle={{
                paddingTop: 60,
                paddingHorizontal: 20,
                paddingBottom: 60,
            }}
            contentInsetAdjustmentBehavior="automatic"
            automaticallyAdjustKeyboardInsets
            keyboardShouldPersistTaps="handled"
        >
            <Pressable 
                style={globalStyles.baseBtn}
                onPress={() => {
                    if (router.canGoBack()) {
                        router.back();
                    } else {
                        router.replace("/garage");
                    }
                }}
                >
                    <Text>Go Back</Text>
            </Pressable>
            <Text style={globalStyles.title}>Add Vehicle</Text>
            <Text style={globalStyles.empty}>Add's a new vehicle to your garage</Text>

            <Text style={globalStyles.sectionTitle}>Make</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={setMake}  
                value={make}
            />

            <Text style={globalStyles.sectionTitle}>Model</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={setModel}
                value={model}
            />

            <Text style={globalStyles.sectionTitle}>Transmission</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={setTransmission}
                value={transmission}
            />

            <Text style={globalStyles.sectionTitle}>Current Mileage</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={setMileage}
                value={mileage}
            />   

            <Text style={globalStyles.sectionTitle}>Year</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={setYear}
                value={year}
            />

            <Text style={globalStyles.sectionTitle}>Registration Number</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={setRegistrationNumber}
                onEndEditing={validateInputHandler}
                value={registrationNumber}
            />  

            <Text style={globalStyles.empty}>Additional vehicle specs</Text>
            <View style={globalStyles.secondaryContainer}>
                <Pressable
                    style={globalStyles.secondaryBtn}
                    onPress={() => {
                        setViewSpecs(current => !current);
                        setViewOptions(() => false);
                    }}
                    >
                    <Text>Engine Specs</Text>
                </Pressable>
                <Pressable
                    style={globalStyles.secondaryBtn}
                    onPress={() => {
                        setViewOptions(current => !current);
                        setViewSpecs(() => false);
                    }}
                    >
                    <Text>Options</Text>
                </Pressable>
            </View>

            {
                viewSpecs && (
                <View style={globalStyles.outlinedContainer}>
                    <Text style={globalStyles.sectionTitle}>Engine</Text>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={setEngine}
                        value={engine}
                    />
                    <Text style={globalStyles.sectionTitle}>Fuel</Text>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={setFuel}
                        value={fuel}
                    />
                    <Text style={globalStyles.sectionTitle}>Drivetrain</Text>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={setDrivetrain}
                        value={drivetrain}
                    />
                </View>
            )}

            {
                viewOptions && (
                <View style={globalStyles.outlinedContainer}>
                    <Text style={globalStyles.sectionTitle}>Package</Text>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={setPack}
                        value={pack}
                    />
                    <Text style={globalStyles.sectionTitle}>Trim</Text>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={setTrim}
                        value={trim}
                    />
                </View>
            )}

			<Text style={globalStyles.empty}>Selected: {`${make} ${model}`}</Text>

            {
                validInput ?? <Text style={globalStyles.danger}>There are errors.</Text> // todo: get validation failiure
            }

            { error ?? <Text style={globalStyles.danger}>error</Text> }

            <Pressable
                style={globalStyles.submitBtn}
                onPress={handleAddNewVehicle}
                disabled={validInput}
                >   
                <Text style={globalStyles.btnFont}>Add Vehicle</Text>
            </Pressable>

        </ScrollView>
    );
}

import { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAllDestinations, deleteDestination } from "../../services/api";
import Card from "../../components/Card";

const Destinations = () => {
    const [destinations, setDestinations] = useState([])
    const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    const lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'D', 'X', 'Y', 'Z'];
    const navigation = useNavigation();

    const screenWidth = Dimensions.get("window").width;

    const fetchDestintions = async () => {
        try {
            const data = await getAllDestinations();
            setDestinations(data);
        } catch (err) {
            alert(err.message);
        }
    };

    const handleDeleteDestinations = async (id) => {
        const result = await deleteDestination(id);
        if (result.success) {
            alert(result.message); // Mensaje de éxito
            // Actualizo la lista de destinos?
        } else {
            alert(`Error: ${result.message}`);
        }
    };

    useFocusEffect(() => {
        fetchDestintions();
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DESTINOS</Text>
            <View style={styles.content}>
                <FlatList
                    data={destinations}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            name={item.name}
                            description={item.description}
                            difficulty={item.difficulty}
                            favourite={item.isFavorite}
                            onPressEdit={() => navigation.navigate('EditDestinations', { destination: item })}
                            onPressDelete={() => { handleDeleteDestinations(item.id) }}
                        />
                    )}
                />
            </View>
        </View>
    );
}

export default Destinations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    content: {
        width: "85%",
        flex: 1,
    },
});



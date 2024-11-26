import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { updatedDestinations } from '../../services/api';

const EditDestinations = ({ route, navigation }) => {
    const { destination } = route.params;

    const [name, setName] = useState(destination.name);
    const [description, setDescription] = useState(destination.description);
    const [difficulty, setDifficulty] = useState(destination.difficulty);
    const [isFavorite, setisFavorite] = useState(destination.isFavorite);

    const handleUpdateDestinations = async () => {
        const updatedDestination = {
            name,
            description,
            difficulty,
            isFavorite
        };

        try {
            await updatedDestinations(destination.id, updatedDestination);
            alert('Destino actualizado correctamente.');
            navigation.navigate('Destinations');
        } catch (error) {
            alert(`Error al actualizar el destino: ${error.message}`);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre del destino"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción del viaje"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Dificultad del viaje"
                value={difficulty}
                onChangeText={setDifficulty}
            />
            <TextInput
                style={styles.input}
                placeholder="Marcar como favorito"
                value={isFavorite}
                onChangeText={setisFavorite}
            />
            <Button title="Guardar Cambios" onPress={handleUpdateDestinations} color="#28a745" />
        </View>
    );

}

export default EditDestinations;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
        alignSelf: 'center',
        width: "85%"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
});


import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Alert, Text, TextInput, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { addDestination } from '../../services/api';
import Checkbox from 'expo-checkbox';

const AddDestination = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [value, setValue] = useState('')

    const navigation = useNavigation();

    const handleAddDestination = async () => {
        if (!name || !description || !difficulty) {
            setMessage('Error: Por favor completa todos los campos.');
            return;
        }

        const newDestination = {
            name,
            description,
            difficulty,
        };

        try {
            const result = await addDestination(newDestination);

            if (result.success) {
                alert('Destino agregado correctamente.');
                setName('');
                setDescription('');
                //Como desmarco un checkbox?
            } else {
                setMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    const screenWidth = Dimensions.get('window').width; // Obtener ancho de la pantalla

    const [message, setMessage] = useState(''); // Estado para los mensajes

    return (
        <ScrollView contentContainerStyle={[styles.container, { width: screenWidth * 0.85 }]}>
            <Text style={styles.title}>Agregar Nuevo Destino</Text>

            {message ? <Text style={styles.message}>{message}</Text> : null} {/* Muestra el mensaje si existe */}

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
            <Text>Dificultad del viaje:</Text>
            <View value={styles.checksContainer}>
                <Checkbox onValueChange={() => setDifficulty(difficulty === "hard" ? "" : "hard")} value={difficulty === "hard"} />
                <Text>HARD</Text>
                <Checkbox onValueChange={() => setDifficulty(difficulty === "medium" ? "" : "medium")} value={difficulty === "medium"} />
                <Text>MEDIUM</Text>
                <Checkbox onValueChange={() => setDifficulty(difficulty === "easy" ? "" : "easy")} value={difficulty === "easy"} />
                <Text>EASY</Text>
            </View>
            <Button title="Agregar Destino" onPress={handleAddDestination} color="#007BFF" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
        alignSelf: 'center', // Centra horizontalmente el formulario
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
    message: {
        fontSize: 16,
        color: '#007BFF', // Azul para mensajes exitosos
        marginBottom: 15,
        textAlign: 'center',
    },
    checksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    }
});

export default AddDestination;

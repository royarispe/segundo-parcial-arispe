import React from 'react';
import { View, Text, Tag, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ name, description, difficulty, favorite, onPressEdit, onPressDelete }) => {
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <View>
                    <Text style={styles.genericText}>{description}</Text>
                    <Text style={[styles.genericText, { backgroundColor: difficulty === "hard" ? "purple" : difficulty === "medium" ? "yellow" : "green" }]}>{difficulty}</Text>
                    <Text style={styles.genericText}>{favorite}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onPressEdit} style={styles.buttonEdit}>
                            <Text style={styles.buttonText}>Editar Destino</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPressDelete} style={styles.buttonDelete}>
                            <Text style={styles.buttonText}>Borrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textContainer: {
        padding: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    genericText: {
        fontSize: 14,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    buttonEdit: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    buttonDelete: {
        backgroundColor: '#FF4C4C',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Card;
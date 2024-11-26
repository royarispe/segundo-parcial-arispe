const URL = 'http://10.13.167.3:8000/destinations'

export const getAllDestinations = async () => {
    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error(`Error al obtener los destinos: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en getAllDestinations:', error.message);
        throw error;
    }
}

export const deleteDestination = async (id) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error al borrar el destino: ${response.statusText}`);
        }

        return { success: true, message: 'Destino eliminado correctamente' };
    } catch (error) {
        console.error('Error en deleteDestino:', error.message);
        return { success: false, message: error.message };
    }
};

export const updatedDestinations = async (id, updatedDestinations) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedDestinations),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el destino.');
        }

        return { success: true, message: 'Destino actualizado correctamente.' };
    } catch (error) {
        console.error('Error en updateDestinations:', error.message);
        return { success: false, message: error.message };
    }
};

export const addDestination = async (newDestination) => {
    try {
        const response = await fetch(`${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDestination),
        });

        if (!response.ok) {
            throw new Error('Error al agregar el destino');
        }
        return { success: true, message: 'Destino agregado correctamente.' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
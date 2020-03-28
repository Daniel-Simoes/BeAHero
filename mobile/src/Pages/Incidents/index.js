import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

import api from '../../services/api';

import logImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    const [ incidents, setIncidents ] = useState([]); 
    const [ total, setTotal ] = useState(0); 

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    async function loadIncidents() {
        const response = await api.get('incidents');

        setIncidents(response.data); 
        setTotal(response.headers['x-total-count']);
    }

    useEffect(() => {
        loadIncidents();
    },[]);

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logImg}/>
                <Text style={styles.headerText}>
                Total <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
        </View>

            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            
            <FlatList
                data={incidents}
                style={styles.incidentList}   
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={ false }
                renderItem={({ item: incident }) =>(
                        <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>Incident</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>Valor</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('en-UK', { style: 'currency', currency: 'EUR' }).format(incident.value)}</Text>

                        <TouchableOpacity
                            style={styles.detailButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailButtonText}>Ver Mais Detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />        
        </View>
    );
}
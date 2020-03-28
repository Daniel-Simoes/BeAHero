import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logImg}/>
                <Text style={styles.headerText}>
                Total <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
        </View>

            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
        
            <FlatList 
                data={[1,2,3]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                renderItem={() =>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG</Text>
                        <Text style={styles.incidentValue}>Vivei</Text>

                        <Text style={styles.incidentProperty}>Incident</Text>
                        <Text style={styles.incidentValue}>Cirugy to Dog</Text>

                        <Text style={styles.incidentProperty}>Valor</Text>
                        <Text style={styles.incidentValue}>R$100</Text>

                        <TouchableOpacity
                            style={styles.detailButton}
                            onPress={()=>{}}
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

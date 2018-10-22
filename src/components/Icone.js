import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import pedra from '../../imgs/pedra.png';
import papel from '../../imgs/papel.png';
import tesoura from '../../imgs/tesoura.png';

class Icone extends Component {
    render() {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.txtIcone}>
                    <Text style={styles.txtJogada}>{this.props.jogador}</Text>
                    <Image source={pedra} />
                </View>
            );
        } else if (this.props.escolha === 'papel') {
            return (
                <View style={styles.txtIcone}>
                    <Text style={styles.txtJogada}>{this.props.jogador}</Text>
                    <Image source={papel} />
                </View>
            );
        } else if (this.props.escolha === 'tesoura') {
            return (
                <View style={styles.txtIcone}>
                    <Text style={styles.txtJogada}>{this.props.jogador}</Text>
                    <Image source={tesoura} />
                </View>
            );
        }        
        return false;
    }
}

const styles = StyleSheet.create({
    txtIcone: {
        alignItems: 'center',
        marginTop: 20,
    },
    txtJogada: {
        fontSize: 18
    }
});

export default Icone;

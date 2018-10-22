import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			escolhaUsuario: '',
			escolhaComputador: '',
			resultado: ''
		};
	}

	jokenpo(escolhaUsuario) {
		const numero = this.numeroAleatorio();
		const escolhaComputador = this.possibilidade()[numero];
		const resultado = this.vencedor(escolhaUsuario, escolhaComputador);

		this.setState({
			escolhaUsuario,
			escolhaComputador,
			resultado
		});
	}

	numeroAleatorio() {
		return Math.floor(Math.random() * 3);
	}

	possibilidade() {
		return ['pedra', 'papel', 'tesoura'];
	}

	vencedor(usuario, computador) {
		if (usuario === computador) {
			return 'Empate';
		}

		if (usuario === 'pedra') {
			if (computador === 'papel') {
				return 'Computador ganhou';
			} 
		}

		if (usuario === 'papel') {
			if (computador === 'tesoura') {
				return 'Computador ganhou';
			} 
		}

		if (usuario === 'tesoura') {
			if (computador === 'pedra') {
				return 'Computador ganhou';
			} 
		}

		return 'Você ganhou';
	}

	render() {
		return (
			<View >
				<Topo />
				<View style={styles.painelAcoes}>
					<View style={styles.btn}>
						<Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
					</View>
					<View style={styles.btn}>
						<Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
					</View>
					<View style={styles.btn}>
						<Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
					</View>
				</View>

				<View style={styles.palco}>
					<Text style={styles.txtResultado}>{this.state.resultado}</Text>	
					<Icone escolha={this.state.escolhaUsuario} jogador='Você' />
					<Icone escolha={this.state.escolhaComputador} jogador='Computador' />
				</View>							
			</View>
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		width: 90
	},
	painelAcoes: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20
	},
	palco: {
		alignItems: 'center',
		marginTop: 20
	},
	txtResultado: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'red',
		height: 35
	}
});


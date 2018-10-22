
import React, { Component } from 'react';
import { View, Image } from 'react-native';

import jokenpo from '../../imgs/jokenpo.png';

class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={jokenpo} />
            </View>
        );
    }
}

export default Topo;

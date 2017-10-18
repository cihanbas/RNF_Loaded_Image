import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


import {pick} from './src/api/picker';
import {upload} from './src/api/upload';

const log = (d) => console.log(d);
export default class App extends Component {
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.upload = this.upload.bind(this);
        this.state = {
            avatarSource: null,
            data: null
        };
    }

    show() {
        pick((source, data) => this.setState({avatarSource: source, data: data}));
    }

    upload() {
        upload([
            {name: 'namess', data: 'user'},
            {name: 'avatar', filename: 'avatar.png', data: this.state.data},
        ])
            .then((resp) => {
                log(resp)
            }).catch((err) => {
            log(err)
        })
    }

    render() {
        const img = this.state.avatarSource === null
            ? null : <Image
                source={this.state.avatarSource}
                style={{
                    height: 250,
                    width: 250
                }}/>;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.show()}>
                    <Text style={styles.welcome}>
                        Show
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.upload()}>
                    <Text style={styles.welcome}>
                        Show
                    </Text>

                </TouchableOpacity>
                {img}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

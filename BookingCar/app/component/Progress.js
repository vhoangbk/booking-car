import React from 'react'
import { View, 
    StyleSheet, 
    Dimensions,
    ActivityIndicator,
 } from 'react-native'


export default class Progress extends React.Component {

    render() {
        return (
            <View style={styles.styleContainer}>
                <ActivityIndicator
                    animating={true}
                    style={[styles.centering, { height: 80 }]}
                    color='black'
                    size="large"
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    styleContainer: {
        backgroundColor: '#88888850', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height, 
        position: 'absolute', top: 0, left: 0
    },
    
})
import React from 'react'
import { Pressable, Text } from 'react-native'

import { StyleSheet } from 'react-native'


export default function Button(){
    return(
        <Pressable style={styles.button} onPress={onPress}>
			<Text>{text}</Text>
		</Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: '#ffaa77',
    }
});


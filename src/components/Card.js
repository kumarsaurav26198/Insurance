import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ text, image, onPress }) => {
    return (
        <>

            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image
                    style={styles.thumb}
                    // source={require("../../assets/phone.png")}
                    source={image}
                />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: 160,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginHorizontal: 5,
        justifyContent: "center",
        alignContent: "center",
    },
    thumb: {
        height: 40,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: 40,
        alignSelf: "center"
    },
    infoContainer: {
        padding: 5,
        width: 160,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        marginLeft: 10,
        textAlign: "center"

    },
});
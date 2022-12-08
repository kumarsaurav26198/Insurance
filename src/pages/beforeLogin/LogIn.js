import React, { useState } from 'react';
import { View, Alert, StyleSheet, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

const LogIn = () => {

    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("+91");

    const sendCode = () => {
        if (phoneNumber.length == 13)
        {
            signInWithPhoneNumber(phoneNumber);
        } else
        {
            Alert.alert("Not a valid Number ");
        }
    };
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try
        {
            await confirm.confirm(code);
        } catch (error)
        {
            console.log('Invalid code.');
        }
    }

    if (!confirm)
    {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../../assets/images/loanLogo.png")} style={{ height: "100%", width: "100%" }} />
                    </View>
                    <CustomTextInput value={phoneNumber} onChangeText={setPhoneNumber} placeholder="Phone Number" icon={require("../../assets/phone.png")} keyboardType={"numeric"} />
                    <CustomButton title={"Send Code"} onPress={sendCode} color={"#fff"} backgroundColor={"#210715"} />
                </View>
            </>
        );
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require("../../assets/images/loanLogo.png")} style={{ height: "100%", width: "100%" }} />
                </View>
                <CustomTextInput value={code} onChangeText={setCode} placeholder="Phone Code" icon={require("../../assets/otp.png")} keyboardType={"numeric"} />
                <CustomButton title={"Confirm Code"} onPress={confirmCode} color={"#fff"} backgroundColor={"#210715"} />
            </View>
        </>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#ff5a66",
        marginTop: 20,
        marginBottom: 20,
    },
    leftTitle: {
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 20,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 140,
        borderWidth: 0.5,
        width: 140,
        borderRadius: 100,
        marginBottom: 70,
        marginTop: 60,
        marginLeft: "33%"
    },
    accountText: {
        marginTop: 30,
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "#878786",
        textDecorationLine: "underline"
    },
    warning: {
        marginTop: 10,
        marginLeft: 24,
        left: 0,
        color: "red",
    }

});
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';
import CardContainer from '../../container/CardContainer';

const Home = () => {
    const user = "Magnet";
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: 20, paddingTop: 10, paddingBottom: 20 }}>
                <CustomText text={`Welcome,${ user }`} />
                <TouchableOpacity style={styles.bottomTab}
                    onPress={() => {
                    }}
                >
                    <Image source={require("../../assets/images/avatar.png")} style={{
                        width: 30, height: 30,
                    }} />
                </TouchableOpacity>
            </View>
            <CustomText text={"Get Insurance"} />
            <CardContainer />
            <CustomText text={"Quick actions"} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    bottomTab: {
        justifyContent: "center",
        alignItems: "center",
    },
});

import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getInsuranceList } from "../services/InsuranceService";

const CardContainer = () => {
    const [insurance, setInsurance] = useState([]);

    function renderProduct({ item: product }) {
        return (
            <View style={styles.bannerContainer}>
                <Card
                    {...product}
                // onPress={() => {
                //     navigation.navigate('ProductDetails', {
                //         productId: product.id,
                //     });
                // }}
                />
            </View>
        );
    }
    useEffect(() => {
        setInsurance(getInsuranceList());
    }, []);
    return (
        <>
            <View>
                <FlatList
                    style={styles.productsList}
                    contentContainerStyle={styles.productsListContainer}
                    keyExtractor={(item) => item.id.toString()}
                    data={insurance}
                    horizontal={true}
                    renderItem={renderProduct}
                />
            </View>
        </>
    );
};

export default CardContainer;

const styles = StyleSheet.create({
    productsListContainer: {
        // backgroundColor: '#eeeeee',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginHorizontal: 8,
        marginVertical: 8,
    },
});
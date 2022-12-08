const INSURANCELIST = [
    {
        id: 104,
        text: 'Car',
        image: require('../assets/images/sedan.png'),
    },
    {
        id: 100,
        text: 'Bike',
        image: require('../assets/images/motorbike.png'),
    },

    {
        id: 102,
        text: 'Health',
        image: require('../assets/images/healthcare.png'),
    },
    {
        id: 107,
        text: 'Mobile',
        image: require('../assets/phone.png'),
    },
    {
        id: 101,
        text: 'Home',
        image: require('../assets/images/home.png'),

    },
];

export function getInsuranceList() {
    return INSURANCELIST;
}

export function getInsurance(id) {
    return INSURANCELIST.find((product) => (product.id == id));
}

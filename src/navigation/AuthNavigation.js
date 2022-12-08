import React from 'react';
import { useEffect, useState } from 'react';
import { SignedInStack, SignedOutStack } from './AppNavigation';
import auth from '@react-native-firebase/auth';

const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState("");

    function onAuthStateChanged(user) {
        setCurrentUser(user);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <>
            {currentUser ? <SignedInStack /> : <SignedOutStack />}
        </>
    );
};

export default AuthNavigation;
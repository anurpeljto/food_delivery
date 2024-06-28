import { useState } from "react";
import { Alert } from "react-native";
const CRCT_USERNAME = 'username';
const CRCT_PASSWORD = 'password';


const useLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if(username === CRCT_USERNAME && password === CRCT_PASSWORD){
            Alert.alert("Success", 'Successfully logged in', [{text: 'Ok'}]);
        } else {
            Alert.alert("Error", "Invalid credentials", [{text:'Ok'}]);
        }
    }

    return {
        username,
        setUsername,
        password,
        setPassword,
        handleLogin
    }
}

export default useLogin;
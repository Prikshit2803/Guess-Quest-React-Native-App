import { Platform, StyleSheet, Text } from "react-native";

export default function Title({children}){
    return <Text style={styles.title}>{children}</Text>;
}


const styles = StyleSheet.create({
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 28,
        // fontWeight : 'bold',
        color : 'white',
        // borderWidth : Platform.OS === 'ios' ? 2 : 3,
        borderWidth : Platform.select({'ios' : 2 , 'android' : 3}),
        borderColor : 'white',
        textAlign : 'center',
        padding : 12,
        maxWidth : "80%",
        width : 300,
    }
});
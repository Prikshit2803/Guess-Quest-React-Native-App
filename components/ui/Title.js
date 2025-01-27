import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export default function Title({children}){
    return <Text style={styles.title}>{children}</Text>;
}


const styles = StyleSheet.create({
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 28,
        // fontWeight : 'bold',
        color : 'white',
        borderWidth : 2,
        borderColor : 'white',
        textAlign : 'center',
        padding : 12,
        maxWidth : "80%",
        width : 300,
    }
});
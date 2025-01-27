import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({children}){
    return (
        <View style={styles.container} >
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container : {
        borderWidth : 4,
        borderColor : Colors.accent500,
        padding : deviceWidth < 380 ? 15 : 24,
        margin : deviceWidth < 380 ? 15 : 24,
        borderRadius : 8,
        alignItems : 'center',
        justifyContent : 'center'
    },
    numberText : {
        fontFamily : 'open-sans-bold',
        fontSize : deviceWidth < 380 ? 28 : 36,
        color : Colors.accent500,
        // fontWeight : 'bold'
    }
});
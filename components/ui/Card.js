import { Dimensions, StyleSheet, View } from "react-native"
import Colors from "../../constants/colors";

export default function Card({children}){
    return  <View style={styles.card} >{children}</View>
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card : {
        justifyContent : 'center',
        alignItems : 'center',
        padding : 16,
        marginTop : deviceWidth < 380 ? 24 : 45,
        marginHorizontal : 24,
        borderRadius : 8,
        backgroundColor : Colors.primary800,
        elevation : 4,
        shadowColor : 'black',
        shadowOffset : {width : 0 , height : 2},
        shadowRadius : 6,
        shadowOpacity : 0.5,
    }

});
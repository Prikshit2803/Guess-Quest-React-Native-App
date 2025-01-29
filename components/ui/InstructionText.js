import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors.ios";


export default function InstructionText({children, style}){
    return  <Text style={[styles.instructionText,style]}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText : {
        fontFamily : 'open-sans',
        fontSize : 24,
        color : Colors.accent500,
    },
});
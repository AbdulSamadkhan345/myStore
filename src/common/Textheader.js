import { StyleSheet,View ,Text } from "react-native";
import React from "react";
export default function Textheader() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,
            color:'#333',
            textAlign:'center'}}>
                best product
                </Text>             
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    
        padding:10,
        paddingVertical:6
    }
})
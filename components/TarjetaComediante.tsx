import { Text, View, Image, StyleSheet } from "react-native";


export default function TarjetaComediante(){

    return(
        <View style={styles.container}>
            <View style={styles.containerTarjeta}>
                <View style={styles.containerImagen}>
                    <Image source= {require('@/assets/images/Matienzo.png')} style={styles.imagen}/>
                </View>
                <View style={styles.containerTexto}>
                    <Text style={styles.titleText}> Mattienzo </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        width: 300,
        height: 300,
    },

    containerTarjeta:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        borderRadius: 30,
    },

    containerImagen:{
        width: 150,
        height: 150,
        backgroundColor: 'red',
        borderRadius: 200,
        marginTop: 40,
    },

    imagen:{
        flex: 3,
        borderRadius: 200,
        width:'auto',
    },

    containerTexto:{
        marginTop: 30,
    },

    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
    },

})
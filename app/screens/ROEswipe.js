import React from "react";
import {View,Text,StyleSheet,Image,Button} from "react-native";
import Swiper from "react-native-web-swiper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15
    },
    slide1: {
        backgroundColor: "rgb(49,119,226)"
    },
    slide2: {
        backgroundColor: "rgb(238,225,96)"
    },
    ROEtitle: {
        fontSize: 50,
        color: 'white',
        textShadowRadius: 5,
        textShadowColor: 'rgb(76,76,76)',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ROEsubtitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    ROEdef: {
        fontSize: 20,
        textAlign: 'center',
        
    }
    
});
export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Text style={styles.ROEtitle}>Rules of Engagement</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <Image source={require('./assets/365/haloemoji.png')} style={{width:70, height:70, marginBottom: 30}}></Image>
                        <Text style={styles.ROEsubtitle}>Be Curious.</Text>
                        <Text style={styles.ROEdef}>Be curious, open-minded, creative, and commited.</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Image source={require('./assets/365/haloemoji.png')} style={{width:70, height:70, marginBottom: 30}}></Image>
                        <Text style={styles.ROEsubtitle}>Be nice.</Text>
                        <Text style={styles.ROEdef}>Do not purposely embarrass, hurt, or offend anyone.</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <Image source={require('./assets/365/nobeer.png')} style={{width:70, height:70, marginBottom: 30}}></Image>
                        <Text style={styles.ROEsubtitle}>No drugs.</Text>
                        <Text style={styles.ROEdef}>Do not take drugs and alcohol in order to have the courage to do a first.</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Image source={require('./assets/365/haloemoji.png')} style={{width:70, height:70, marginBottom: 30}}></Image>
                        <Text style={styles.ROEsubtitle}>No pressure.</Text>
                        <Text style={styles.ROEdef}>Do not dare or pressure yourself or others into doing a first. Don’t do anything against your will.</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <Image source={require('./assets/365/nerdemoji.png')} style={{width:70, height:70, marginBottom: 30}}></Image>
                        <Text style={styles.ROEsubtitle}>Learn.</Text>
                        <Text style={styles.ROEdef}>Take the good experiences with the bad ones—they’re all opportunities to grow, learn, and explore who you are.</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Image source={require('./assets/365/crossarmsemoji.png')} style={{width:70, height:70, marginBottom: 30}}></Image>
                        <Text style={styles.ROEsubtitle}>No harm.</Text>
                        <Text style={styles.ROEdef}>Do not do anything illegal, immoral (in accordance to your code of conduct) or harmful to yourself physically, emotionally, or in anyway.</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <Image source={require('./assets/365/shakeemoji.png')} style={{width:70, height:70, marginBottom: 30}}></Image>
                        <Text style={styles.ROEsubtitle}>Support.</Text>
                        <Text style={styles.ROEdef}>Engage to support, motivate, and encourage yourself and others around you.</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Image source={require('./assets/365/selfieemoji.png')} style={{width:70, height:70, marginBottom: 30}}></Image>
                        <Text style={styles.ROEsubtitle}>Share.</Text>
                        <Text style={styles.ROEdef}>Capture. Document. And Share your experiences #365FirstsChallenge every chance you have!</Text>
                        <View style={{marginTop: 30, width: 80, height: 40, backgroundColor: 'rgb(238,225,96)', borderRadius: 9}}>
                        <Button
                          title= 'EXIT'
                          color= 'black'
                          fontWeight= 'bold'
                        ></Button>
                        </View>
                    </View>

                </Swiper>
            </View>
        )
    }
}

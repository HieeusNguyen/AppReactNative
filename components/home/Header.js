import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/361619189_2104218889926158_7784223562316445152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qKUCVP4xNBAAX92FhhN&_nc_ht=scontent.fhan5-3.fna&oh=00_AfDnBdWZmdylGIYSycj1GsabafmPchLa-za0OS-YVAEKWQ&oe=653B5442",
                }}
                style={styles.avatar}
            />
            <Text style={{fontWeight:'700', fontSize: 18}}>Home</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={require("../../assets/logo/add.png")} style={styles.icon}/>
                <Image source={require("../../assets/logo/option.png")} style={styles.icon}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 15,
    },
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 99,
        marginRight: 40
    },
    icon:{
        width: 30,
        height: 30
    }
});

export default Header;

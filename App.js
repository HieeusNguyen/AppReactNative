import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View, Button, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const image = {
  uri: "https://marketplace.canva.com/EAErLHYem8k/1/0/450w/canva-h%E1%BB%93ng-b%C3%B4ng-hoa-h%C3%ACnh-v%E1%BA%BD-ngu%E1%BB%87ch-ngo%E1%BA%A1c-t%E1%BB%91i-gi%E1%BA%A3n-l%E1%BB%9Di-kh%E1%BA%B3ng-%C4%91%E1%BB%8Bnh-tr%C3%ADch-d%E1%BA%ABn-chung-h%C3%ACnh-n%E1%BB%81n-%C4%91i%E1%BB%87n-tho%E1%BA%A1i--OYk6j3NDCw.jpg",
};

function DetailsScreen({ navigation }) {
  return (
    <View>
      <View style={styles.details}>
      <View style={{ width: 40, height: 40, backgroundColor: '#fc5c65' }}></View>
      <View style={{ width: 40, height: 40, backgroundColor: '#4ECDC4' }}></View>
    </View>
    <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image1}
      ></ImageBackground>
    </View>
    
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    flex: 1,
    backgroundColor: "#fc5c65",
  },
  box2: {
    flex: 1,
    backgroundColor: "#4ECDC4",
  },
  details:{ 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  image1: {
    width: '100%',
    height: '90%',
  }
});

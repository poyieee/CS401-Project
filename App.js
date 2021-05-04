import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList,SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  {styles, mainApp} from './styles/getStarted';
import {Feather} from '@expo/vector-icons'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {LottieView} from 'lottie-react-native';
import { render } from 'react-dom';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};





function Home ({navigation}) {
  const image = {uri: "https://www.enjpg.com/img/2020/kobe-bryant-14.jpg"};
  const recentImage = {uri: "https://images-na.ssl-images-amazon.com/images/I/71SJcBnwZVL._AC_SY445_.jpg"};
  

  const [gallery, setgallery] = useState([
      { image:{uri: 
          "https://i.pinimg.com/originals/79/41/61/794161756c5eb8765bfd4cf1356b58f3.png"}, title: 'Lebron James',  key: '1' },
      { image:{uri:
          "https://www.oldsportscards.com/wp-content/uploads/2019/01/1996-Skybox-E-X2000-30-Kobe-Bryant-Basketball-Card-1.jpg"}, title: 'Kobe Bryant',key: '2' },
      { image:{uri:
          "http://beckett-www.s3.amazonaws.com/news/news-content/uploads/2015/10/2015-16-Panini-Absolute-Basketball-Base-DAngelo-Russell.jpg"}, title: 'D`Angelo Russell',key: '3' },
      { image:{uri:
          "https://i.pinimg.com/originals/7e/36/6e/7e366e326e75a8fc360e4f243133a861.png"}, title: 'Kevin Durant', key: '4' },
          { image:{uri:
              "https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/09/2019-20-Donruss-Basketball-NBA-Cards-Base-Karl-Anthony-Towns.jpg"}, title: 'Karl Anthony Towns', key: '5' }
      ]);
  return(
<View style={{flexGrow:1, height:'100%'}}>
            <View>
                <ImageBackground
                source={image}
                style={{width: '100%',height:270}}
                imageStyle={{borderBottomRightRadius:65}}>


            <View style={styles.DarkOverlay}></View>
            <View style={styles.searchContainer}>
                <Text style={styles.UserGreet}>Hi There,</Text> 
                <Text style={styles.UserText}>Explore Rare Cards Today</Text> 
            </View>
            <View>
                <TextInput
                style={styles.searchBox}
                placeholder='Search Card'
                placeholderTextColor='#2c3e50'>

                </TextInput>
                <Feather name='search' size={22} color='#2c3e50' style={{position: 'absolute',
                 top: 30, right: 60, opacity: 0.6}}/>
            </View>
            <TouchableOpacity>
            <Image 
              style={{position: 'relative',bottom:185,
               left: 16, opacity:1, width:28, height:28}}
              source={require('./hamburger.png')}
              />
            </TouchableOpacity>
            <Feather name='bell' size={30} color='#ecf0f1' style={{position: 'absolute',
                 top: 40, right: 30}}/>
                </ImageBackground>
            </View> 
           
            <ScrollView>
            <View style={{padding: 16}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Top Cards</Text>
            </View>
            <View>
                <FlatList 
                horizontal={true}
                data={gallery}
                renderItem={({item}) => {
                    return(
                        <View style={{paddingVertical: 20, paddingLeft: 16}}>
                            <TouchableOpacity onPress={()=> navigation.navigate("cardDetails")}>
                                <Image source={item.image} style={{width: 150, 
                                marginRight: 14, height: 250, borderRadius: 10}} />
                                <View style={styles.ImageOverlay}></View>
                                <Feather name = 'star' size={16} color='white'
                                style={styles.imageLocationIcon}/>
                                <Text style={styles.ImageText}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                />
            </View>
            <View>
                <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                   <Text style={{fontSize: 20, fontWeight: 'bold', color: '#e74c3c'}}>Recently Viewed</Text>
                   <TouchableOpacity onPress={()=> navigation.navigate("Cards")}>
                   <Text style={{fontSize:20, fontWeight: 'bold', color: '#e74c3c'}}>View All</Text>
                   </TouchableOpacity>
                </View>
                <Image
                source={recentImage}
                style={{width: '90%', height: 250, borderRadius: 10, alignSelf: 'center'}}/>
                <View style={{position: 'absolute', bottom: 0, padding: 16 }}>
                    <View style = {{flexDirection: 'row'}}>
                    <Feather name = 'star' size={16} color='white' size ={22}
                                style={{marginRight: 10, position: 'relative',top: 4}}/>
                                <Text style={{fontSize: 22, color: '#ecf0f1', fontWeight: 'normal',
                            marginBottom:10}}>Michael Jordan</Text>
                    </View>
                   
                </View>
            </View>
            </ScrollView>

           




                
        </View>
  );
}



function GetStarted ({navigation}){
  return(
    <View style={mainApp.app}>
   
      <Text style={styles.titleText}>NBA Card Compendium</Text>
      <Image
        style={styles.mainPic}
        source={require('./mainpic.png')}
        
      />
      <Text style={styles.mainText}>Discover NBA Cards and show off your collection!</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")}> 
   <Text style = {styles.button1} >
       Get Started
   </Text>
</TouchableOpacity >
      <StatusBar style="auto" />
    </View>
  );
}



function Login ({navigation}){
  return(
    <View style={mainApp.loginapp}>
      <Image
      style={styles.loginPic}
      source={require('./loginlogo.png')}
      />
      <TextInput style={styles.textInput1}
      placeholderTextColor="#2c3e50"
        placeholder="Username"
      />

        <TextInput secureTextEntry={true} style={styles.textInput2} placeholderTextColor="#2c3e50"
        placeholder="Password"
      />
      <TouchableOpacity onPress={()=> navigation.navigate("Home")}> 
   <Text style = {styles.button2} >
       Login
   </Text>
</TouchableOpacity >
<TouchableOpacity onPress={()=> navigation.navigate("Register")}>
  <Text style={styles.button3}>
    Don't have an account? Sign up!
  </Text>
</TouchableOpacity>
    </View>

  )
}



function Register ({navigation}){
    return(
      <View style={mainApp.registerapp}>
        <Text style={styles.textColor}>Username</Text>
      <TextInput  style={styles.textInput2} placeholderTextColor="#2c3e50"
        placeholder="ex.Poyieee" />
        <Text style={styles.textColor}>Password</Text>
      <TextInput secureTextEntry={true} style={styles.textInput2} placeholderTextColor="#2c3e50"
      placeholder="Password"/>

<TouchableOpacity onPress={()=> navigation.navigate("Login")}> 
   <Text style = {styles.button2} >
        Register
   </Text>
   </TouchableOpacity>
      </View>
      
    )
}

function Cards ({navigation}){
  return(
<View style={mainApp.app}>
<ScrollView style={styles.ScrollView}>
<Text style={styles.titleText}>Collections</Text>
<Image
  style={styles.cardPic}
  source={require('./lebrown.png')}

/>

<Image
  style={styles.cardPic}
  source={require('./kari.jpg')}

/>

<Image
  style={styles.cardPic}
  source={require('./uni.png')}

/>

<Image
  style={styles.cardPic}
  source={require('./jords.jpg')}

/>
<StatusBar style="auto" />
</ScrollView>
</View>
);
  }

function cardDetails ({navigation}){
  return(
    <View style={mainApp.app}>
      <Text style={styles.titleText}>Lebron James</Text>
      <Image
        style={styles.cardDetails}
        source={require('./CardDetails.png')}
        
      />
      <Text style={styles.mainText}>Rarity 10</Text>
    </View>
  )
}
  
function accountDetails ({navigation}){
  const image = {uri: "https://www.enjpg.com/img/2020/kobe-bryant-14.jpg"};
  return(
    <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("./assets/profile_pic.png.png")} style={styles.image} resizeMode="center"></Image>
                    </View>
                    <View style={styles.dm}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                    </View>
                    <View style={styles.active}></View>
                    <View style={styles.add}>
                        <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Poyieee</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Gamer</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[styles.text, styles.subText]}>Cards</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                        <Text style={[styles.text, styles.subText]}>Following</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("./kari.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("./kari.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("./kari.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                    </ScrollView>
                    <View style={styles.mediaCount}>
                        <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>70</Text>
                        <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Media</Text>
                    </View>
                </View>
                <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Started following <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Started following <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  );
}

function FAQ ({navigation}){
  return(
    <View style={mainApp.app}>
      
    <ScrollView style={styles.scrollView}>


    
    <Text style={styles.titleText}>FAQS</Text>

    <Text style = {styles.txtStyle2}>How much does the NBA card cost?</Text>

    <Text style = {styles.txtStyle3}>The price ranges from 8,000-10,000</Text>
    <Text style = {styles.txtStyle2}>How can i start collecting NBA cards?</Text>
    <Text style = {styles.txtStyle3}>Determine who you want to collect, Autographs, and earn How To Find A Card’s Value. </Text>
    <Text style = {styles.txtStyle2}> Is it worth it to collect NBA cards?</Text>
    <Text style = {styles.txtStyle3}>Yes, it is worth it to collect NBA cards because you can gain profit from it just by collecting rare basketball cards, their value can go up to five and six figure price levels. </Text>

    
      
   
    <StatusBar style="auto" />
    </ScrollView>
  </View>

  
);
  
}


function aboutUs ({navigation}){
  return(
      <View style={mainApp.app}>
        <Image
        style={styles.aboutUsPic}
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0345/7046/9435/files/Footer_pages_-_about_us.png?v=1585014057',
        }}
      />
      <Text style={styles.txtStyle2}>This is an app that unite collectors of NBA Cards. This app allows them to socialize and show off their collection</Text>
      <Text style={styles.txtStyle2}>This app is created by 5 students from Technological Institute of the Philippines</Text>
      </View>

  )
}
function ContactUs ({navigation}){
  return(
    <View style={mainApp.registerapp}>
      <Text style={styles.textColor}>Name</Text>
    <TextInput  style={styles.textInput2} placeholderTextColor="#2c3e50"
      placeholder="Name" />
      <Text style={styles.textColor}>Email</Text>
    <TextInput style={styles.textInput2} placeholderTextColor="#2c3e50"
    placeholder="Email"/>

<TextInput style={styles.textInput2} placeholderTextColor="#2c3e50"
    placeholder="Message"/>

<TouchableOpacity onPress={()=> navigation.navigate("Login")}> 
 <Text style = {styles.button2} >
      Submit
 </Text>
 </TouchableOpacity>
    </View>
    
  )
}


function DrawerRoutes(){
  return(
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Card" component={Cards}/>
        <Drawer.Screen name="Account" component={accountDetails}/>
        <Drawer.Screen name="FAQ" component={FAQ}/>
        <Drawer.Screen name="About Us" component={aboutUs}/>
        <Drawer.Screen name="Contact Us" component={ContactUs}/>
      </Drawer.Navigator>



  )
}
 
export default function  App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Get Started" component={GetStarted} options={{title: 'Get Started',
          headerStyle: {
            backgroundColor: '#e74c3c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            transitionSpec: {
              open: config,
              close: config,
            }
          }} />

<Stack.Screen name="Login" component={Login} options={{title: 'Login',
          headerStyle: {
            backgroundColor: '#e74c3c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            transitionSpec: {
              open: config,
              close: config,
            },
          }} />

          
<Stack.Screen name="Register" component={Register} options={{title: 'Register',
          headerStyle: {
            backgroundColor: '#e74c3c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            transitionSpec: {
              open: config,
              close: config,
            },
           
          }} />

<Stack.Screen name="Home" component={DrawerRoutes} options={{title: 'Home',
          headerStyle: {
            backgroundColor: '#e74c3c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            transitionSpec: {
              open: config,
              close: config,
            },
          }} />

<Stack.Screen name="Cards" component={Cards} options={{title: 'Cards',
          headerStyle: {
            backgroundColor: '#e74c3c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            transitionSpec: {
              open: config,
              close: config,
            },
          }} />
          <Stack.Screen name="cardDetails" component={cardDetails} options={{title: 'Card Details',
          headerStyle: {
            backgroundColor: '#e74c3c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            transitionSpec: {
              open: config,
              close: config,
            },
          
          }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
        
}




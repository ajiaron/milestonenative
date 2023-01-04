import  React, {useState} from "react";
import { Text, StyleSheet, View, Image, Pressable, TextInput, ScrollView } from "react-native";
import { Icon } from 'react-native-elements'
import AppLoading from 'expo-app-loading'
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from './Footer'

const Post = ({username, caption}) => {
    return (
     <View style={[styles.postContainer]}>
        <View style={[styles.postHeader]}>
            <View style={[styles.profilePicContainer]}>
            <Image
                style={styles.profilePic}
                resizeMode="contain"
                source={require("../assets/profile-pic-empty.png")}/>
            </View>
            <View style={[styles.postUserHeader]}>
                <Text style={[styles.postOwnerName]}> {username} </Text>
                <Text style={[styles.postOwnerTime]}> Today at Jan 02</Text>
            </View>
        </View>
        <View style={[styles.postWrapper]}>
        </View>
        <View style={[styles.actionbarContainer]}>
            <View style={[styles.actionIcon, styles.actionThumbsUp]}>
                <Icon 
                    size={27}
                    name='thumb-up-off-alt'
                    color='white'
                />
            </View>
            <View style={[styles.actionIcon, styles.actionComment]}>
                <Icon 
                    size={25.5}
                    name='question-answer'
                    color='white'
                />
            </View>
            <View style={[styles.actionIcon]}>
                <Image
                    style={styles.milebookImage}
                    resizeMode="contain"
                    source={require("../assets/milebook-logo.png")} 
                />
            </View>
        </View>
        <View style={[styles.commentsContainer]}>
            <Text style={[styles.commentsContent]}>{caption}</Text>
            <Text style={[styles.viewPostLink]}>View Milestones {'&'} Groups</Text>
        </View>
     </View>
    );
}

const Feed = () => {
    return (
      <View style={styles.feedPage}>
        <View style={styles.feedContainer}>
         <ScrollView>
          <View style={styles.feedSpace}/>
            <Post username={'ajiaron'} caption={'call me kyrie cause i aint playing this year'}/>
            <Post username={'hzenry'} caption={'once you start learning the L goes silent'}/>
            <Post username={'antruong'} caption={'yodie gang i am obliviated'}/>
            <Post username={'jdason'} caption={'generic test caption'}/>
            <Post username={'timwang'} caption={'my story written in braille'}/>
          <View style={styles.footerSpace}/>
         </ScrollView>
        </View>
        <Footer/>
      </View>
    );
}

const styles = StyleSheet.create({
    actionbarContainer: {
        flex:1,
        paddingTop:8,
        flexDirection:"row",
        backgroundColor:"rgba(28, 28, 28, 1)",
        maxHeight:38
    },
    actionIcon: {
        marginLeft:32,
    },
    actionThumbsUp: {
        marginTop:1,
        marginRight:2,
        marginLeft:20
    },
    actionComment: {
        marginTop:3,
        marginRight:4
    },
    milebookImage: {
        maxHeight:26,
        maxWidth:26
    },
    feedSpace: {
        marginTop:44, 
    },
    footerSpace: {
        marginTop:10,
        backgroundColor:"rgba(28, 28, 28, 1)"
    },
    postWrapper: {
        height:252,
        maxWidth:"100%",
        backgroundColor:"rgba(10,10,10,1)",
        position:"relative",
        borderRadius:6,
    },
    profilePicContainer: {
        minHeight:30,
        minWidth:30,
        marginLeft:12,
        alignItems:"center",
    },
    profilePic: {
        maxHeight:34,
        maxWidth:34,
    },
    postContainer: {
        minHeight:304,
        minWidth:"100%"
    },
    postHeader: {
        maxHeight:58,
        justifyContent:"center",
        flex:1,
        flexDirection:"row",
        backgroundColor:"rgba(28, 28, 28, 1)",
        paddingTop:13,
    },
    commentsContent: {
        fontFamily:"InterSemiLight",
        fontSize:14,
        color:"white"
    },
    viewPostLink: {
        fontFamily:"InterLight",
        marginTop:6,
        color: "rgb(144, 144, 144)",
        fontSize:11
    },
    commentsContainer: {
        paddingLeft:20,
        paddingTop:10,
        minHeight:80,
        flex:1,
        backgroundColor:"rgba(28, 28, 28, 1)",
    },
    postUserHeader: {
        minHeight:34,
        flex:1,
        textAlign:"left"
    },
    postOwnerName: {
        fontFamily:"InterBold",
        left:8,
        color:"white",
        top:-1,
        fontSize:14.5
    },
    postOwnerTime: {
        fontFamily:"InterSemiLight",
        left:8,
        color:"white",
        bottom:-1,
        fontSize:11
    },
    feedContainer: {
        justifyContent:"center",
        flex:1,
        alignItems:"center",
        alignSelf:"center"
    },
    feedPage: {
        backgroundColor:"rgba(28, 28, 28, 1)",
        flex: 1,
        minWidth: "100%",
        minHeight: "100%",
        overflow: "hidden",
    },
    feedText: {
        fontFamily:"Inter",
        color:"white",
        alignSelf:"center",
        fontSize:22,
        
    }
})
export default Feed
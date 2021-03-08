import React,{useState} from "react";
import {View,Text, Button, FlatList} from 'react-native';

const ColorScreen = () =>{
    const [Colors, setColors] = useState([]);
    console.log(Colors);
    return(
    <View>
        <Button title="Add a color" onPress={()=>{
            setColors([...Colors,randomRgb()]);
        }}></Button>
        
        <FlatList data={Colors} keyExtractor={(item)=>item} renderItem={({item})=>{
            return <View style={{height:100,width:100,backgroundColor:item}}/>
        }}></FlatList>
    </View>
    );
};

const randomRgb=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

export default ColorScreen;
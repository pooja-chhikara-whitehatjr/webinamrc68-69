import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { CAMERA } from 'expo-permissions';

export default class Transaction extends Component{
constructor()
{
    super()
    this.state={
        hasCameraPermission:null,
        scannedData:"",
        scanned:false,
        buttonState:"normal"
    }
}

getCameraPermission=async()=>{
const {status}=await Permissions.askAsync(Permissions.CAMERA);
this.setState({
    hasCameraPermission:status==="granted",
    scannedData:"scan the data",
    buttonState:"clicked",
    scanned:false
})
}
handleBarCodeScanner=async({type,data})=>{
    this.setState({
        buttonState:"normal",
        scanned:true,
        scannedData:data
    })

}
render(){
   const camPermission=this.state.hasCameraPermission;
   if(this.state.buttonState=="clicked" && camPermission){
       return(
           <BarCodeScanner
           onBarCodeScanned={this.state.scanned?undefined:this.handleBarCodeScanner}
           style={StyleSheet.absoluteFillObject}
           />
       )
   }
   else if (this.state.buttonState==="normal"){

   
    return(
<View style={{margin:50}}>
    <Text>QR code </Text>
    <Text>{camPermission===true?this.state.scannedData:"request camera permission"}</Text>
    <TouchableOpacity style={{backgroundColor:"blue",width:100,height:50}}
    onPress={()=>{this.getCameraPermission()}}
    >
    <Text>scan the QR code</Text>
    </TouchableOpacity>
    
</View>

    )
}
}
}

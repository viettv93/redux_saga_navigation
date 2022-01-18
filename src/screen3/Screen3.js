import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

import { useSelector } from "react-redux"

const Screen3 = (props) => {
    const view = useSelector(state => state.reducer)
    return (
        <View style={{flex: 1}}>

            <View style={{ backgroundColor: '#33907C' , height: '50%'}}></View>

            <View style={{ backgroundColor: 'white', flex: 1,alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ position: 'absolute', top: - 200, left: 35, backgroundColor: 'white',width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={view.nen2} />
                </View>
                <Text style={{ color: '#33907C', fontSize: 20 }}>{view.text4}</Text>
                <Text style={{ color: '#33907C', fontSize: 20 }}>{view.text5}</Text>
                <Image source={view.mid} resizeMode="contain" style={{marginVertical: 30}}/>
                
                <TouchableOpacity 
                onPress={()=>props.onpress()}
                style={{ backgroundColor: '#33907C', borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: '85%' }}>
                    <Text style={{ color: 'white', fontSize: 18, padding: 5 }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Screen3
import React, { useRef } from "react"
import { View, Image, TouchableOpacity, Text } from "react-native"
import { useSelector } from "react-redux"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Screen2 = (props) => {

    const view = useSelector(state => state.reducer)
    return (

        <View style={{ backgroundColor: 'red' }} >
            <View style={{ backgroundColor: '#33907C', height: '50%' }}></View>
            <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <View style={{ position: 'absolute', top: - 200, left: 35, backgroundColor: 'white', width: '80%', justifyContent: 'center', alignItems: 'center' }} >
                    <Image source={view.nen1} resizeMode="cover" />
                </View>
                <Text style={{ color: '#33907C', fontSize: 20 }}>{view.text2}</Text>
                <Text style={{ color: '#33907C', fontSize: 20 }}>{view.text3}</Text>
                <Image source={view.start} resizeMode="contain" style={{ marginVertical: 30 }} />
                <TouchableOpacity
                    onPress={() => props.onpress()}
                    style={{ backgroundColor: '#33907C', borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: '85%' }}>
                    <Text style={{ color: 'white', fontSize: 18, padding: 5 }}>Next</Text>
                </TouchableOpacity>
            </View>

            {/*          <View style={{height:RFvalue(32,812)}}>
                <Text style={{fontFamily: 'TheNautigal-Bold', fontSize: 40}}>
                Have an account ? Sign in
            </Text>
            </View>
             */}

        </View>
    )
}

export default Screen2
import React, { useState } from "react"
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native"
import { useSelector } from "react-redux"
import ModalDropdown from 'react-native-modal-dropdown';
const DEMO_OPTIONS_1 = ["+ 86","+ 84" ,'+ 85','+ 70' ,"+ 83","+ 80","+ 79","+ 89","+ 90"];

const Screen7 = ({navigation}) => {
    const [value, setValue] = useState('')
    const view = useSelector(state => state.reducer)
    const nextScreen=()=>{
       navigation.navigate('Eight')
    }
    return (
        <View style={{ backgroundColor: '#33907C', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>{view.text21}</Text>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '400', marginTop: 30 }}>{view.text22}</Text>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>{view.text23}</Text>
            <View style={{ flexDirection: 'row', borderRadius: 20, borderColor: 'white', borderWidth: 1, width: '90%', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <ModalDropdown
                        renderRow={(option, index, isSelected) => {
                            return (
                                <Text style={{ fontSize: 20, width: 200 }}>{option}</Text>
                            )
                        }}
                        textStyle={{ color: 'white', fontSize: 20 }}
                        style={styles.dropdown_1}
                        options={DEMO_OPTIONS_1}
                        defaultValue = "+ 84"
                    />
                    <Image style={{position: 'absolute', right: 0}} source={require('../image/down.png')} />
                </TouchableOpacity>
                <TextInput
                    keyboardType="number-pad"
                    style={{ color: 'white', fontSize: 20 }}
                    value={value}
                    onChangeText={(value) => {
                        setValue(value)
                    }} />
            </View>

            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400', marginTop: 50 }}>{view.text24}</Text>
            <TouchableOpacity 
            onPress={nextScreen}
            style={{ borderRadius: 15, alignItems: 'center', justifyContent: 'center', width: '90%', backgroundColor: 'white', marginTop: 20 }}>
                <Text style={{ fontWeight: '500', color: '#13B58C', fontSize: 18, padding: 9 }}>Next</Text>
            </TouchableOpacity>


        </View>
    )
}


const styles = StyleSheet.create({
    dropdown_1: {
        width: 60, 
    },
})

export default Screen7
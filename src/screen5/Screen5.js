import React from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"

const Screen5 = ({ navigation }) => {
    const view = useSelector(state => state.reducer)
    const screenSignUp = () => {
        navigation.navigate('Six')
    }
    return (
        <View style={{ backgroundColor: '#33907C', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '500', marginVertical: 50 }}>{view.text8}</Text>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: '400', marginBottom: 30 }}>{view.text9}</Text>
            <TextInput
                placeholderTextColor={'white'}
                placeholder={view.text10}
                style={{ borderWidth: 1, borderRadius: 20, borderColor: 'white', width: '90%', fontSize: 18, color: 'white' }} />
            <TextInput
                placeholderTextColor={'white'}
                secureTextEntry={true}
                keyboardType="numeric"
                placeholder={view.text11}
                style={{ borderWidth: 1, borderRadius: 20, borderColor: 'white', width: '90%', marginVertical: 20, fontSize: 18, color: 'white' }} />
            <TouchableOpacity
                onPress={() => { }}
                style={{ backgroundColor: 'white', borderRadius: 15, width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#13B58C', fontSize: 18, padding: 9 }}>Login</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 18, marginTop: 30 }}>{view.text12}</Text>
            <View style={{ flexDirection: 'row', marginVertical: 40 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>{view.text13}</Text>
                <Text
                    onPress={screenSignUp}
                    style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{view.text14}</Text>
            </View>

        </View>
    )
}

export default Screen5
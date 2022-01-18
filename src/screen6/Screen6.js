import React from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"

const Screen6 = ({ navigation }) => {
    const view = useSelector(state => state.reducer)
    const nextSignUp = () => {
        navigation.navigate('Seven')
    }
    const logIn = () => {
        navigation.navigate('Five')
    }
    return (
        <View style={{ backgroundColor: '#33907C', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>{view.text8}</Text>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>{view.text15}</Text>
            <TextInput style={{ borderColor: 'white', borderRadius: 20, borderWidth: 1, width: '90%', marginVertical: 10 ,fontSize: 18}}
                placeholder={view.text16}
                placeholderTextColor={'white'} />
            <TextInput style={{ borderColor: 'white', borderRadius: 20, borderWidth: 1, width: '90%',fontSize: 18 }}
                placeholder={view.text17}
                placeholderTextColor={'white'} />
            <TextInput style={{ borderColor: 'white', borderRadius: 20, borderWidth: 1, width: '90%', marginVertical: 10 ,fontSize: 18}}
                placeholder={view.text18}
                keyboardType="numeric"
                placeholderTextColor={'white'} />
            <TextInput style={{ borderColor: 'white', borderRadius: 20, borderWidth: 1, width: '90%',fontSize: 18 }}
                placeholder={view.text11}
                secureTextEntry={true}
                keyboardType="numeric"
                placeholderTextColor={'white'} />
            <TextInput style={{ borderColor: 'white', borderRadius: 20, borderWidth: 1, width: '90%', marginVertical: 10,fontSize: 18 }}
                placeholder={view.text19}
                keyboardType="numeric"
                secureTextEntry={true}
                placeholderTextColor={'white'} />
            <TouchableOpacity
                onPress={nextSignUp}
                style={{ borderRadius: 15, width: '90%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 16, color: '#13B58C', padding: 10, fontWeight: '500' }}>Creat</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginVertical: 40 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>{view.text20}</Text>
                <Text
                    onPress={logIn}
                    style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{view.text}</Text>
            </View>



        </View>
    )
}

export default Screen6
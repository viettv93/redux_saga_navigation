import React from "react"
import { View, Image, Text } from "react-native"
import { useSelector } from "react-redux"

const Screen1 = ({ navigation }) => {
    const nextScreen = () => {
        navigation.navigate('Two')
    }
    const view = useSelector(state => state.reducer)
    setTimeout(nextScreen, 3000)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#33907C' }}>
            <Image source={view.commit} />
            <Text>{view.text1}</Text>
        </View>
    )
}

export default Screen1
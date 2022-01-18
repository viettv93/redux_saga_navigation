import React, { useRef } from "react"
import { View, StyleSheet } from "react-native"
import PagerView from 'react-native-pager-view';
import Screen2 from "../screen/Screen2";
import Screen3 from "../screen3/Screen3";
import Screen4 from "../screen4/Screen4";
const ScreenView = ({ navigation }) => {
    const ref = useRef(null)

    const onScreen1Press = () => {
        ref.current?.setPage(1)
    }
    const onScreen2Press = () => {
        ref.current?.setPage(2)
    }
    const onScreen3Press = () => {
        navigation.navigate('Five')
    }
    return (


        <PagerView ref={ref} style={styles.pagerView} initialPage={0} showPageIndicator={true}>
            <View key='1'>
                <Screen2 onpress={onScreen1Press} />
                {/* <TouchableOpacity onPress={() => {
                    ref.current?.setPage(1)
                }}>
                    <Text>First page</Text>
                </TouchableOpacity> */}
            </View>
            <View key="2">
                <Screen3 onpress={onScreen2Press} />
                {/* <TouchableOpacity onPress={() => {
                    ref.current?.setPage(0)
                }}>
                    <Text>Second page</Text>
                </TouchableOpacity> */}
            </View>
            <View key='3'>
                <Screen4 onpress={onScreen3Press} />
            </View>
        </PagerView>
    )
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
});

export default ScreenView
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Screen8 = () => {
    const view = useSelector(state => state.reducer)
    return (
        <View style={{ backgroundColor: '#33907C', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>{view.text25}</Text>
            <Text style={{ color: 'white', fontWeight: '400', fontSize: 16 ,marginVertical: 30}}>{view.text26}</Text>
            <View>
                <OTPInputView
                    style={{ width: '80%', height: 100 }}
                    pinCount={6}
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    autoFocusOnLoad
                    keyboardAppearance="light"
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />

            </View>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 , marginTop: 40}}>{view.text27}</Text>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 , marginBottom: 30}}>{view.text28}</Text>
            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 20, width: '90%', alignItems: 'center', justifyContent: 'center' , marginTop:40 }}>
                <Text style={{ fontSize: 16, color: '#13B58C', fontWeight: '500', padding: 10 }}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 45,
      height: 45,
      fontSize: 25,
      fontWeight: '600'
    },
   
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
   
    underlineStyleBase: {
      width: 45,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      fontSize: 25,
      fontWeight:'600'
    },
   
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  });


export default Screen8
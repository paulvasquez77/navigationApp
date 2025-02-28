import { Text, View } from 'react-native'
import "./global.css"
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
    return (
        <SafeAreaView>
            <View className='mt-6 mx-2.5'>
                <Text className='text-2xl font-work-black'>Hola nea</Text>
                <Text className='text-2xl font-work-medium'>Hola nea</Text>
                <Text className='text-2xl font-work-light'>Hola nea</Text>
            </View>
        </SafeAreaView>
    )
}
import { Text, View } from 'react-native'
import "./global.css"
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

export default function index() {
    return <Redirect href={"/home"} />
    // return (
    //     <SafeAreaView>
    //         <View className='mt-6 mx-2.5'>
    //             <Text className='text-2xl font-work-black text-secondary-100'>Hola nea</Text>
    //             <Text className='text-2xl font-work-medium text-primary'>Hola nea</Text>
    //             <Text className='text-2xl font-work-light'>Hola nea</Text>

    //             <Link href='/products/index'>
    //                 Productos
    //             </Link>
    //         </View>
    //     </SafeAreaView>
    // )
}
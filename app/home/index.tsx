import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View className='px-10'>
                <Link href="/products" asChild>
                    <CustomButton color='primary'>Productos</CustomButton>
                </Link>

                <CustomButton color='primary' onPress={() => router.push('/products')}>Productos</CustomButton>

                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
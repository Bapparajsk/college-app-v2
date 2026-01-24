import { Text, View } from 'react-native';
import SubjectCard from './subject-card';

export default function SubjectList() {

    return (
        <View className='w-full h-auto mt-4 mb-32'>
            <View className='w-full flex-row justify-between items-center mb-4'>
                <Text className='text-3xl font-poppins-semibold'>Subjects</Text>
            </View>
            <SubjectCard/>
        </View>
    )
}
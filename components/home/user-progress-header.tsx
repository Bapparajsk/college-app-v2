import { shadows } from '@/theme/shadow'
import { GraduationCapIcon } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import Button, { ButtonWrapper } from '../ui/button'

export default function UserProgressHeader() {
    return (
        <View className='w-full h-[80px] justify-center items-center my-3'>
            <View
                className='w-full h-full'>
                <TouchableOpacity activeOpacity={0.65} style={shadows.sm} className='w-full  h-full px-4 flex-row justify-between items-center bg-[#ced4da] rounded-[30px]'>
                    <View>
                        <View className='flex-row items-center gap-3'>
                            <View className='size-14'>
                                <Button>
                                    {({ hovered, pressed }) => (
                                        <ButtonWrapper
                                            hovered={hovered}
                                            pressed={pressed}
                                            variant="default"
                                            rounded="full"
                                            className="px-3 py-1 rounded-full"
                                        >
                                            <GraduationCapIcon size={28} />
                                        </ButtonWrapper>
                                    )}
                                </Button>
                            </View>
                            <View>
                                <Text className='font-poppins-semibold text-lg'>
                                    Progress
                                </Text>
                                <Text className='font-inter-medium text-gray-700'>
                                    1st Year - Semester 1
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View className='border-l-2 border-gray-400 pl-4 '>
                        <Text className='font-poppins-semibold text-lg '>
                            <Text className='text-2xl'>45</Text>%
                        </Text>
                        <Text className='font-inter-medium text-gray-600 text-center text-sm'>
                            best
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

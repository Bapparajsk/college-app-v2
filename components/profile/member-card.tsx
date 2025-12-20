import { ShareIcon, StarIcon } from 'lucide-react-native';
import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export type MemberCardProps = {
    profileImgUrl?: string;
    name: string;
    year: string;
    rating: number;
    skill_avg: number;
    project_count: number;
    experience: string;
}
const MemberCard: FC<MemberCardProps> = ({ profileImgUrl, name, year, rating, skill_avg, project_count, experience }) => {
    return (
        <View className='w-full h-60 rounded-3xl mt-4 bg-[#eae9e9] overflow-hidden p-4'>
            <View className='flex-row items-center'>
                <View className='size-28 p-2'>
                    <Image
                        source={{ uri: profileImgUrl || 'https://overgear.com/guides/wp-content/uploads/2025/04/delta-force-nox-operator-guide.png' }}
                        className='w-full h-full rounded-3xl border-2 border-gray-500'
                    />
                </View>
                <View className='w-auto items-start justify-center ml-4'>
                    <Text className='text-2xl font-poppins-medium text-gray-800'>
                        {name}
                    </Text>
                    <View className='px-3 py-2 bg-[#d4d6d6] rounded-xl'>
                        <Text className='text-[14px] leading-none font-poppins-medium'>
                            {year} Year
                        </Text>
                    </View>
                </View>
                <TouchableOpacity hitSlop={10} className='ml-auto mb-auto mt-2 mr-2'>
                    <ShareIcon size={24} color="#555555" />
                </TouchableOpacity>
            </View>
            <View className='w-full py-4 flex-row justify-around mb-3'>
                <View className='items-start gap-1.5'>
                    <Text className='font-poppins-medium text-base text-gray-500'>Rating</Text>
                    <View className='flex-row items-center'>
                        <Text className='text-2xl font-poppins-medium'>{rating}</Text>
                        <StarIcon size={20} />
                    </View>
                </View>
                <View className='items-start gap-1.5'>
                    <Text className='font-poppins-medium text-base text-gray-500'>Skill avg.</Text>
                    <Text className='text-2xl font-poppins-medium'>{skill_avg}/10</Text>
                </View>
                <View className='items-start gap-1.5'>
                    <Text className='font-poppins-medium text-base text-gray-500'>Projects</Text>
                    <Text className='text-2xl font-poppins-medium'>{project_count}</Text>
                </View>
                <View className='items-start gap-1.5'>
                    <Text className='font-poppins-medium text-base text-gray-500'>Experience</Text>
                    <Text className='text-2xl font-poppins-medium'>+{experience}</Text>
                </View>
            </View>
        </View>
    )
}

export default MemberCard;
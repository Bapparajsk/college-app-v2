import { projectCardGradient } from '@/theme/linear-gradients'
import { LinearGradient } from 'expo-linear-gradient'
import { AtSignIcon, BookmarkIcon, CogIcon, CpuIcon, PanelsTopLeftIcon, StarIcon, UsersRoundIcon } from 'lucide-react-native'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export type ProjectCardProps = {
    title: string;
    subTitle: string;
    tags: string[];
    rating: number;
    members: number;
    contributors: number;
    type: "iot" | "web" | "mobile" | "ai" | "game";
}

const ProjectCard: FC<ProjectCardProps> = ({ title, subTitle, tags, rating, members, contributors, type }) => {
    return (
        <View className='w-full h-[430px] border-[3px] overflow-hidden rounded-[40px] border-gray-200 mb-5'>
            <LinearGradient
                className={"flex-1 relative"}
                colors={projectCardGradient[type]}
            >
                <LinearGradient
                    className='absolute bottom-0 flex-1 w-full h-9'
                    colors={['transparent', '#ffffffbb']}
                />
                <LinearGradient
                    className='absolute left-0 bottom-0 flex-1 w-9 h-full'
                    colors={['#ffffffbb', 'transparent']}
                    start={{ x: 0, y: 1 }}
                />
                <LinearGradient
                    className='absolute bottom-0 flex-1 w-9 h-full right-0'
                    colors={['#ffffffbb', 'transparent']}
                    start={{ x: 1, y: 1 }}
                />

                <View className='w-full h-q px-10 py-5'>
                    <View className='w-full h-12 items-end justify-center'>
                        <TouchableOpacity hitSlop={10}>
                            <CogIcon size={26} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View className='w-full h-auto items-start'>
                        <View className='w-full h-20'>
                            <View className='size-20'>
                                <View className='size-full rounded-full overflow-hidden bg-[#7BDFF2] items-center justify-center'>
                                    <CpuIcon size={30} />
                                </View>
                            </View>
                        </View>
                        <View className='w-full h-auto mt-3'>
                            <View className='w-full h-auto'>
                                <Text className='capitalize font-poppins-medium text-3xl'>
                                    {title || 'Code king'}
                                </Text>
                                <Text className='capitalize font-poppins-medium text-xl text-gray-500 mt-1'>
                                    {subTitle || "AI Developer"}
                                </Text>
                            </View>
                        </View>
                        <View className='w-full h-auto mt-2 flex-row items-center gap-2'>
                            {tags?.map((tag, index) => (
                                <View key={index} className='px-3 py-2 bg-[#b6e0e0b2] rounded-full'>
                                    <Text className='text-[14px] leading-tight font-poppins-medium'>
                                        {tag}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View className='w-full h-20 mt-6 flex-row items-center justify-between'>
                        <View className='w-auto h-full justify-center items-center'>
                            <View className='flex-row items-center gap-1'>
                                <StarIcon size={22} color='#000000' />
                                <Text className='font-poppins-medium text-2xl'>{rating}</Text>
                            </View>
                            <Text className='font-poppins-medium text-gray-500 text-lg'>Rating</Text>
                        </View>
                        <View className='h-2/4 w-0.5 rounded-full bg-white/50'/>
                        <View className='w-auto h-full justify-center items-center'>
                            <View className='flex-row items-center gap-1'>
                                <UsersRoundIcon size={22} color='#000000' />
                                <Text className='font-poppins-medium text-2xl'>{members}</Text>
                            </View>
                            <Text className='font-poppins-medium text-gray-500 text-lg'>Member</Text>
                        </View>
                        <View className='h-2/4 w-0.5 rounded-full bg-white/50'/>
                        <View className='w-auto h-full justify-center items-center'>
                            <View className='flex-row items-center gap-1'>
                                <AtSignIcon size={22} color='#000000' />
                                <Text className='font-poppins-medium text-2xl'>{contributors}</Text>
                            </View>
                            <Text className='font-poppins-medium text-gray-500 text-lg'>Contributors</Text>
                        </View>
                    </View>
                    <View className="h-16 w-full flex-row items-start justify-center  mt-4 gap-4">
                        <TouchableOpacity className='flex-grow h-full bg-white/20 rounded-full flex-row items-center justify-center gap-2 border-white px-4 relative z-10 border-b-2 border-r-2'>
                            <PanelsTopLeftIcon size={20} color='#000000' />
                            <Text className='font-poppins-semibold text-lg'>Overview</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='size-16 bg-white rounded-full items-center justify-center'>
                            <BookmarkIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default ProjectCard;
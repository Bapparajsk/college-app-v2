import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { LucideIcon, MoveRightIcon, RadicalIcon } from 'lucide-react-native';
import { FC } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

type SubjectCardProps = {
    bgUri: string;
    title: string;
    subTitle: string;
    Icon: LucideIcon;
    href: string;
}

const SubjectCard: FC<SubjectCardProps> = ({ bgUri, title, subTitle, Icon, href }) => {
    return (
        <View className='h-52 w-1/2 relative overflow-hidden p-2'>
            <View className='size-full relative bg-[#7BDFF2] rounded-[30px] mb-2 overflow-hidden flex items-center justify-between'>
                <ImageBackground
                    source={{
                        uri: bgUri || "https://wallpapers.com/images/hd/english-2000-x-1261-wallpaper-niju8wupslurmn2i.jpg"
                    }}
                    className='size-full absolute top-0 left-0 -z-20'
                />
                <View
                    className={`absolute top-0 bottom-0 size-full bg-black/40 -z-10`}
                />
                <View className='w-full px-2 pt-2 pb-2 flex-row gap-2 items-center '>
                    <View className='size-14 bg-white/80 rounded-full items-center justify-center'>
                        {Icon ? <Icon size={24} /> : <RadicalIcon size={24} />}

                    </View>
                    <View>
                        <Text className='font-poppins-semibold text-lg text-white'>
                            {title}
                        </Text>

                        <Text className='font-inter-medium text-sm text-white/90'>
                            {subTitle}
                        </Text>
                    </View>
                </View>
                <Link href={href as any} asChild>
                    <TouchableOpacity activeOpacity={0.7} className='w-10/12 h-12 items-center justify-center mb-2 rounded-full overflow-hidden border border-white/30'>
                        <BlurView intensity={40} tint="dark" className='size-full flex-row items-center justify-center gap-2'>
                            <Text className='text-base font-poppins-medium text-white'>Learn more</Text>
                            <MoveRightIcon size={16} color='white' />
                        </BlurView>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

export default SubjectCard;
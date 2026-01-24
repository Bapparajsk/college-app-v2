import { shadows } from '@/theme/shadow'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowRightIcon, BookOpenCheckIcon, CircleQuestionMarkIcon, FlaskConicalIcon, ListChecksIcon, LucideIcon } from 'lucide-react-native'
import { Text, View } from 'react-native'
import { AnimatedButton } from '../ui/button'
import CircularProgress from '../ui/CircularProgress'

export default function SubjectCard() {
    return (
        <View className='w-full h-72'>
            <View style={shadows.md} className='w-full h-full'>
                <View className='w-full h-[28%] flex-row'>
                    <View className='relative h-full w-7/12 bg-[#daedfe] rounded-t-3xl p-2'>
                        <View
                            className='absolute size-10 bg-white -bottom-3 -right-7 rounded-bl-full '
                            style={{
                                borderBottomWidth: 10,
                                borderLeftWidth: 10,
                                borderColor: "#daedfe",
                            }}
                        />
                        <View className='w-full h-full'>
                            <LinearGradient
                                colors={['transparent', 'transparent', '#ffffffA0']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                className='w-full h-full flex-row justify-center items-center gap-4'
                                style={{ borderRadius: 99999, borderWidth: 2, borderColor: '#ffffff' }}
                            >
                                <Text className='font-poppins-semibold text-2xl'>
                                    Physics
                                </Text>
                                <FlaskConicalIcon size={20} />
                            </LinearGradient>
                        </View>
                    </View>
                    <View className='h-full w-5/12 p-2'>
                        <AnimatedButton scale={0.97}>
                            <LinearGradient
                                colors={['#45c5f7', '#0d8bfe']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                className='w-full h-full items-center justify-center'
                                style={{ borderRadius: 999999, ...shadows.md, }}
                            >
                                <View className='w-full h-full'>
                                    <View className='w-full h-full flex-row justify-center items-center gap-1'>
                                        <Text className='font-poppins-semibold text-2xl text-white'>
                                            Learning
                                        </Text>
                                        <ArrowRightIcon size={28} color="#ffffff" />
                                    </View>
                                </View>
                            </LinearGradient>
                        </AnimatedButton>
                    </View>
                </View>
                <LinearGradient
                    colors={['#daedfe', '#d5e9fe']}
                    className='w-full h-[72%] flex-1'
                    style={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopRightRadius: 24 }}
                >
                    <View className='w-full h-full rounded-b-3xl rounded-tr-2xl'>
                        <View className='w-full h-full flex-row'>
                            <View className='w-4/12 h-full items-center justify-center'>
                                <CircularProgress gradient={{
                                    startColor: "#22c1c3",
                                    endColor: "#3a7bd5"
                                }} bgColor='#22c1c3' size={100} strokeWidth={10} progress={85} duration={1000}>
                                    <Text className='text-2xl font-poppins-semibold'>
                                        85% {"\n"}
                                        <Text className='font-poppins text-sm'>
                                            Completed
                                        </Text>
                                    </Text>

                                </CircularProgress>
                            </View>
                            <View className='w-8/12 h-full justify-center'>
                                <View className='w-full h-auto'>
                                    <Text className='font-poppins text-lg'>
                                        Topic: <Text className='font-poppins-semibold'>Thermodynamics</Text>
                                    </Text>
                                </View>
                                <View className='w-full h-auto mt-5 flex-row gap-2'>

                                    <Card
                                        Icon={BookOpenCheckIcon}
                                        title="Lessons"
                                        count={12}
                                    />

                                    <Card
                                        Icon={CircleQuestionMarkIcon}
                                        title="Questions"
                                        count={8}
                                        color='#8380fb'
                                    />
                                    <Card
                                        Icon={ListChecksIcon}
                                        title="Tests"
                                        count={0}
                                        color='#39cd76'
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}


function Card({
    Icon,
    title,
    count,
    color
}: {
    Icon: LucideIcon;
    title: "Lessons" | "Questions" | "Tests";
    count: number;
    color?: `#${string}`;
}) {
    
    return (
        <View style={shadows.sm} className='bg-white py-3 px-3 rounded-2xl items-center'>
            <Icon size={24} color={color || "#0d8bfe"} />
            <Text className='font-poppins-semibold text-xl'> {count} </Text>
            <Text className='font-poppins text-center'> {title} </Text>
        </View>
    );
}
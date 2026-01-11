import { shadows } from '@/theme/shadow';
import { colors } from '@/theme/theme';
import { DayTypes, formatHourTo12 } from '@/units/date';
import { AlarmClockIcon, CheckIcon, ChevronDownIcon, ClockIcon, House, MessageCircleIcon, NotebookTextIcon } from 'lucide-react-native';
import { memo, useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import { AnimatedButton } from '../ui/button';
import Chip from '../ui/chip';
import CircularProgress from '../ui/CircularProgress';
import ClassDetailsTag from './class-details-tag';
import { getTodaysRoutine } from './routing-details';


type RoutingListProps = {
    day?: DayTypes;
};

const RoutingList = memo(({ day }: RoutingListProps) => {
    const classData = useMemo(() => {
        return getTodaysRoutine(day);
    }, [day]);

    if (!classData.length) {
        return (
            <View className="flex-1 items-center justify-center px-6 py-12">
                <Text className="font-inter text-gray-500 text-lg text-center">
                    {day
                        ? `No classes scheduled for ${day}`
                        : "No classes scheduled today"}
                </Text>
            </View>
        );
    }

    const { room, teacher, color, classType, topics, classTypeIcon: ClassTypeIcon, time, subject } = classData[0];

    return (
        <View className='w-full h-auto px-4 mb-32'>
            <View className='w-full h-auto rounded-3xl bg-white border border-stone-200 p-4'>
                <View className='w-full h-12 flex-row items-center justify-between border-b border-stone-300 pb-2 px-1'>
                    <Text className='font-poppins-semibold text-2xl'>
                        Class Details
                    </Text>
                    <View className='flex-row gap-2 items-center'>
                        <Chip
                            title={"Today"}
                            titleClassName='font-poppins-medium'
                            color={'primary'}
                        />
                        <AnimatedButton hitSlop={20}>
                            {({ pressed }) => {
                                return (
                                    <View style={{ backgroundColor: pressed ? '#e5e7eb' : '#f3f4f6' }} className='bg-gray-200 p-2 rounded-full'>
                                        <ChevronDownIcon size={20} color="#374151" />
                                    </View>
                                )
                            }}
                        </AnimatedButton>
                    </View>
                </View>
                <View className='w-full h-32 justify-center items-start' >
                    <View className='w-auto h-auto flex-row justify-center items-center'>
                        <View className='relative'>
                            <CircularProgress
                                size={70}
                                strokeWidth={0}
                                progress={100}
                                duration={0}
                            >
                                <Image
                                    source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.Sko8CQSOZhYy3u_kQB6J3QHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" }}
                                    className="size-full rounded-full"
                                />

                            </CircularProgress>
                            <View className='absolute bottom-0 right-1 size-5 bg-success rounded-full border-2 border-white justify-center items-center'>
                                <CheckIcon size={10} color="#ffffff" strokeWidth={3} />
                            </View>
                        </View>

                        <View className='ml-4'>
                            <Text className='font-poppins-medium text-3xl'>
                                {subject}
                            </Text>
                            <Text className='font-poppins-medium text-lg text-gray-600 mt-1'>
                                Prof. {teacher?.fullName || <Text className="text-gray-400">N/A</Text>}
                            </Text>
                        </View>
                    </View>
                </View>
                <View className='w-full h-auto bg-gray-100 rounded-3xl p-2'>
                    <View className="px-3 h-auto">
                        <View className="py-2">
                            <View className="flex-row flex-wrap justify-between gap-2 gap-y-8">
                                <ClassDetailsTag
                                    title="Time"
                                    subTitle={`${formatHourTo12(time.start)} - ${formatHourTo12(time.end)}`}
                                    Icon={ClockIcon}
                                    color={colors.primary}
                                />
                                <ClassDetailsTag
                                    title="Room"
                                    subTitle={room || "N/A"}
                                    Icon={House}
                                    color="#6B7280"
                                />
                                <ClassDetailsTag
                                    title="Type"
                                    subTitle={classType || "N/A"}
                                    Icon={ClassTypeIcon}
                                    color={colors.secondary}
                                />
                                <ClassDetailsTag
                                    title="Topic"
                                    subTitle={topics || "No topics assigned"}
                                    Icon={NotebookTextIcon}
                                    color={colors.warning}
                                    subTitleColor={colors.warning}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View className='w-full h-16 flex-row items-center justify-end gap-3 px-2 mt-4'>
                    <AnimatedButton className='w-1/2'>
                        <View style={shadows.sm} className='py-3 w-full flex-row bg-white border-2 border-gray-400 rounded-full justify-center items-center gap-2'>
                            <MessageCircleIcon size={20} color="#9ca3af" />
                            <Text className='font-poppins-medium text-gray-500 mt-1'>
                                Message
                            </Text>
                        </View>
                    </AnimatedButton>
                    <AnimatedButton className='w-1/2'>
                        <View style={shadows.sm} className='py-3 w-full flex-row bg-primary rounded-full justify-center items-center gap-2'>
                            <AlarmClockIcon size={20} color="#ffffff" />
                            <Text className='font-poppins-medium text-white mt-1'>
                                Reminder
                            </Text>
                        </View>
                    </AnimatedButton>
                </View>
            </View>
        </View>
        // <FlashList
        //     data={classData}
        //     renderItem={({ item }) => {
        //         return <RoutingCard {...item} />;
        //     }}
        //     keyExtractor={(item) =>` ${item.subject}_${item.time.start}_${item.time.end}` }
        //     contentContainerStyle={{
        //         paddingTop: 12,
        //         paddingBottom: 80,
        //         paddingHorizontal: 16
        //     }}
        //     showsVerticalScrollIndicator={false}
        //     removeClippedSubviews={true}
        // />
    );
});

RoutingList.displayName = 'RoutingList';

export default RoutingList;
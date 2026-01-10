import { cn } from '@/units/cn';
import React, { useState } from 'react';
import {
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { CalendarEvent } from '../../types/calender';

interface AddEventModalProps {
    visible: boolean;
    selectedDate: Date;
    onClose: () => void;
    onAddEvent: (event: Omit<CalendarEvent, 'id'>) => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({
    visible,
    selectedDate,
    onClose,
    onAddEvent,
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('10:00');

    const handleSubmit = () => {
        if (!title.trim()) return;

        onAddEvent({
            title: title.trim(),
            description: description.trim(),
            date: selectedDate,
            startTime,
            endTime,
        });

        // Reset form
        setTitle('');
        setDescription('');
        setStartTime('09:00');
        setEndTime('10:00');
        onClose();
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            presentationStyle="pageSheet"
            onRequestClose={onClose}
        >
            <View className={cn('flex-1 bg-white pt-10')}>
                <View className={cn('flex-row items-center justify-between px-4 pb-4 border-b border-gray-200')}>
                    <Text className={cn('text-xl font-bold text-gray-900')}>Add Event</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text className={cn('text-lg text-gray-500')}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className={cn('flex-1 px-4')}>
                    <View className={cn('py-4')}>
                        <Text className={cn('text-gray-600 mb-2')}>
                            Date: {selectedDate.toLocaleDateString()}
                        </Text>

                        <Text className={cn('font-medium text-gray-900 mb-2')}>Title</Text>
                        <TextInput
                            className={cn('border border-gray-300 rounded-lg px-3 py-2 mb-4')}
                            value={title}
                            onChangeText={setTitle}
                            placeholder="Event title"
                        />

                        <Text className={cn('font-medium text-gray-900 mb-2')}>Description</Text>
                        <TextInput
                            className={cn('border border-gray-300 rounded-lg px-3 py-2 mb-4 h-20')}
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Event description"
                            multiline
                        />

                        <View className={cn('flex-row mb-4')}>
                            <View className={cn('flex-1 mr-2')}>
                                <Text className={cn('font-medium text-gray-900 mb-2')}>Start Time</Text>
                                <TextInput
                                    className={cn('border border-gray-300 rounded-lg px-3 py-2')}
                                    value={startTime}
                                    onChangeText={setStartTime}
                                    placeholder="09:00"
                                />
                            </View>
                            <View className={cn('flex-1 ml-2')}>
                                <Text className={cn('font-medium text-gray-900 mb-2')}>End Time</Text>
                                <TextInput
                                    className={cn('border border-gray-300 rounded-lg px-3 py-2')}
                                    value={endTime}
                                    onChangeText={setEndTime}
                                    placeholder="10:00"
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            className={cn('bg-primary-500 rounded-lg py-3 mt-4')}
                            onPress={handleSubmit}
                        >
                            <Text className={cn('text-white text-center font-semibold text-lg')}>
                                Add Event
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

export default AddEventModal;
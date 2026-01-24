import { Link } from 'expo-router';
import { AtomIcon, FlaskConicalIcon, LigatureIcon, RadicalIcon } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import SubjectCard from './subject-card';

export default function SubjectsList() {
    return (
        <View className='w-full h-auto mt-4'>
            <View className='w-full flex-row justify-between items-center mb-2 px-1'>
                <Text className='font-poppins-semibold text-xl'>Subjects</Text>
                <Link href="/subjects">
                    <Text className='font-inter-medium text-base text-blue-500'>See all</Text>
                </Link>
            </View>
            <View className='w-full h-auto flex-row justify-between'>
                <SubjectCard
                    bgUri="https://garden.spoonflower.com/c/3814195/i/xs/h0PI2NUgq5DdHh7Q3tBjMVdaLA19HoVnm38/3814195.jpg"
                    title="Mathematics"
                    subTitle="10 Lessons"
                    href="/subjects"
                    Icon={RadicalIcon}
                    
                />
                <SubjectCard
                    bgUri="https://wallpapers.com/images/hd/english-2000-x-1261-wallpaper-niju8wupslurmn2i.jpg"
                    title="English"
                    subTitle="10 Lessons"
                    href="/subjects/english"
                    Icon={LigatureIcon}
                />
            </View>
            <View className='w-full h-auto flex-row justify-between'>
                <SubjectCard
                    bgUri="https://tse3.mm.bing.net/th/id/OIP.31yBQ8XgDkL5rImn2LNhzQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
                    title="Chemistry"
                    subTitle="10 Lessons"
                    href="/subjects/chemistry"
                    Icon={FlaskConicalIcon}
                />
                <SubjectCard
                    bgUri="https://media.istockphoto.com/id/160380663/vector/seamless-physics-pattern-in-blue-ink.jpg?s=170667a&w=0&k=20&c=X5uD00MDumJO6vxOb-kQyf50-_e4qe5eH8ZiA5VP6_A="
                    title="Physics"
                    subTitle="10 Lessons"
                    href="/subjects/physics"
                    Icon={AtomIcon}
                />
            </View>
        </View>
    );
}


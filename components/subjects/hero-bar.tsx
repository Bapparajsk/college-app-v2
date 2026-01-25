import { useMemo } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

type ImageItem = {
    id: string;
    uri: string;
};

const IMAGES: ImageItem[] = [
    {
        id: '1',
        uri: "https://static.vecteezy.com/system/resources/previews/003/689/696/non_2x/interracial-four-readers-with-books-book-day-celebration-vector.jpg",
    },
    {
        id: '2',
        uri: "https://cdni.iconscout.com/illustration/premium/thumb/business-people-working-together-illustration-download-in-svg-png-gif-file-formats--teamwork-group-employee-woman-office-and-team-works-pack-illustrations-10300302.png",
    },
    {
        id: '3',
        uri: "https://img.freepik.com/premium-vector/student-council-isolated-cartoon-vector-illustration_107173-27641.jpg"
    }
];

export default function HeroBar() {
    const randomImage = useMemo(() => {
        return IMAGES[Math.floor(Math.random() * IMAGES.length)];
    }, []);
    return (
        <View className="w-full" style={{ aspectRatio: 1 }}>
            <Animated.Image
                source={{ uri: randomImage.uri }}
                className="w-full h-full"
                resizeMode="cover"
            />
        </View>
    )
}
import { BottomSheetContent, BottomSheetHeader } from '@/components/ui/BottomSheetComponents';
import { AnimatedButton } from '@/components/ui/button';
import { useManagedBottomSheet } from '@/hooks/useBottomSheetInstance';
import { ChevronDownIcon } from 'lucide-react-native';
import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';

const YourComponent = () => {
  const { show, expand, close } = useManagedBottomSheet();
  const sheetId = useRef<string | null>(null);

  useEffect(() => {
    // Store the sheet ID returned by show()
    const id = show(
      <BottomSheetContent>
        <BottomSheetHeader
          title="Date Picker"
          subtitle="Select a date range"
        />
        <View style={{ padding: 20 }}>
          <Text>Select your date range here</Text>
          {/* Add your date picker component */}
        </View>
      </BottomSheetContent>,
    );
    console.log(id);
    
    sheetId.current = id;

    return () => {
      // Cleanup if component unmounts
      // close();
    };
  }, []);


  // Alternative: If you need to control a specific sheet
  // const { expand } = useBottomSheet();
  const handleExpandSpecific = () => {
    console.log();
    
    expand();
  };

  return (
    <AnimatedButton
      scale={0.99}
      onPress={handleExpandSpecific} // or handleExpandSpecific
    >
      <View className="px-3 py-2 bg-white rounded-full">
        <View className="flex-row items-center gap-1">
          <Text className="font-inter leading-none">
            Dec 2025
          </Text>
          <ChevronDownIcon size={20} />
        </View>
      </View>
    </AnimatedButton>
  );
};

export default YourComponent;
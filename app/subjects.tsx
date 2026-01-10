import { BottomSheetContent } from '@/components/ui/BottomSheetComponents';
import { AnimatedButton } from '@/components/ui/button';
import { useManagedBottomSheet } from '@/hooks/useBottomSheetInstance';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { ChevronDownIcon } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';

// 提取内容组件，使其能独立更新
const BottomSheetContentComponent = ({ text, onPress }: { text: string; onPress: () => void }) => (
  <BottomSheetContent>
    <View style={{ padding: 20 }}>
      <TouchableOpacity 
        onPress={onPress} 
        className="mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        <Text className="text-center">{text}</Text>
      </TouchableOpacity>
    </View>
  </BottomSheetContent>
);

const YourComponent = () => {
  const { show, expand, close } = useManagedBottomSheet();
  const [text, setText] = useState('Open Calendar');
  const [version, setVersion] = useState(0); // 添加版本号强制重新渲染
  const sheetId = useRef<string | null>(null);

  const handleTextPress = () => {
    const newText = text + " pressed!";
    setText(newText);
    // 触发重新渲染
    setVersion(prev => prev + 1);
  };

  const openOrRefreshBottomSheet = () => {
    // 关闭现有的
    if (sheetId.current) {
      close();
      sheetId.current = null;
    }

    // 延迟后重新打开
    setTimeout(() => {
      const content = <BottomSheetContentComponent text={text} onPress={handleTextPress} />;
      const id = show(content, {
        snapPoints: ['80%'],
        enablePanDownToClose: false,
        enableHandlePanningGesture: false,
      });
      sheetId.current = id;
    }, 100);
  };

  const handleButtonPress = () => {
    if (sheetId.current) {
      expand();
    }
  };

  // 当 text 或 version 变化时，更新底部工作表
  useEffect(() => {
    openOrRefreshBottomSheet();
  }, [version]);

  // 初始打开
  useEffect(() => {
    openOrRefreshBottomSheet();
  }, []);

  return (
    <AnimatedButton
      scale={0.99}
      onPress={handleButtonPress}
    >
      <View className="px-3 py-2 bg-white rounded-full">
        <View className="flex-row items-center gap-1">
          <Text className="font-inter leading-none">{text}</Text>
          <ChevronDownIcon size={20} />
        </View>
      </View>
    </AnimatedButton>
  );
};

export default YourComponent;
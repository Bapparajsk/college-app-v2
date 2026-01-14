// BottomSheetContext.tsx - Fixed Version
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';

export type BottomSheetSnapPoint = string | number;

export type BottomSheetConfig = {
  snapPoints: (string | number)[];
  index?: number;
  enablePanDownToClose?: boolean;
  enableOverDrag?: boolean;
  backdropComponent?: React.FC<BottomSheetBackdropProps> | null;
  handleComponent?: React.FC<any> | null;
  enableDismissOnClose?: boolean;
  enableContentPanningGesture?: boolean;
  enableHandlePanningGesture?: boolean;
  keyboardBehavior?: 'interactive' | 'extend' | 'fillParent';
  keyboardBlurBehavior?: 'none' | 'restore';
  onClose?: () => void;
};

type BottomSheetItem = {
  id: string;
  content: React.ReactNode;
  config: BottomSheetConfig;
  isVisible: boolean;
  isPresented: boolean;
};

type BottomSheetContextType = {
  show: (content: React.ReactNode, config?: Partial<BottomSheetConfig>) => string;
  close: (id?: string) => void;
  dismiss: (id?: string) => void;
  expand: (id?: string) => void;
  collapse: (id?: string) => void;
  isOpen: (id?: string) => boolean;
  getActiveId: () => string | null;
  present: (id?: string) => void; // Add present method
  updateContent: (id: string, content: React.ReactNode) => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(undefined);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within BottomSheetProvider');
  }
  return context;
};

export const BottomSheetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [sheets, setSheets] = useState<Record<string, BottomSheetItem>>({});
  const [activeSheetId, setActiveSheetId] = useState<string | null>(null);

  const generateId = useCallback(() => 
    `bottom-sheet-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, 
    []
  );

  // Open and manage sheet presentation
  const presentSheet = useCallback((id: string) => {
    const sheet = sheets[id];
    if (!sheet || !sheet.isVisible || sheet.isPresented) return;

    setSheets(prev => ({
      ...prev,
      [id]: { ...sheet, isPresented: true }
    }));

    setActiveSheetId(id);
    
    requestAnimationFrame(() => {
      bottomSheetModalRef.current?.present();
    });
  }, [sheets]);

  // Show new sheet
  const show = useCallback((
    content: React.ReactNode,
    config?: Partial<BottomSheetConfig>
  ) => {
    const id = generateId();
    
    const newSheet: BottomSheetItem = {
      id,
      content,
      config: {
        snapPoints: ['25%', '50%', '90%'],
        index: 0,
        enablePanDownToClose: true,
        enableOverDrag: true,
        backdropComponent: (props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            opacity={0.5}
            pressBehavior="close"
          />
        ),
        handleComponent: null,
        enableDismissOnClose: true,
        enableContentPanningGesture: true,
        enableHandlePanningGesture: true,
        keyboardBehavior: 'interactive',
        keyboardBlurBehavior: 'none',
        ...config,
      },
      isVisible: true,
      isPresented: false,
    };

    setSheets(prev => ({ ...prev, [id]: newSheet }));
    presentSheet(id);
    
    return id;
  }, [generateId, presentSheet]);

  // Close sheet but keep it in state
  const close = useCallback((id?: string) => {
    const targetId = id || activeSheetId;
    if (!targetId || !sheets[targetId]) return;

    bottomSheetModalRef.current?.close();
    
    setSheets(prev => ({
      ...prev,
      [targetId]: {
        ...prev[targetId],
        isPresented: false,
      }
    }));
    
    setActiveSheetId(null);
    
    // Call onClose callback
    sheets[targetId].config.onClose?.();
  }, [activeSheetId, sheets]);

  // Dismiss and remove sheet
  const dismiss = useCallback((id?: string) => {
    const targetId = id || activeSheetId;
    if (!targetId || !sheets[targetId]) return;

    bottomSheetModalRef.current?.dismiss();
    
    setSheets(prev => {
      const newSheets = { ...prev };
      delete newSheets[targetId];
      return newSheets;
    });
    
    setActiveSheetId(null);
    
    // Call onClose callback
    sheets[targetId].config.onClose?.();
  }, [activeSheetId, sheets]);

  // Present a sheet (re-open it)
  const present = useCallback((id?: string) => {
    const targetId = id || activeSheetId;
    if (!targetId || !sheets[targetId]) return;

    presentSheet(targetId);
  }, [activeSheetId, sheets, presentSheet]);

  // Expand active sheet
  const expand = useCallback((id?: string) => {
    const targetId = id || activeSheetId;
    if (!targetId || !sheets[targetId]) return;

    const sheet = sheets[targetId];
    if (!sheet.isPresented) {
      presentSheet(targetId);
      // Wait a bit for sheet to present, then expand
      setTimeout(() => {
        bottomSheetModalRef.current?.snapToIndex(sheet.config.snapPoints.length - 1);
      }, 100);
    } else {
      bottomSheetModalRef.current?.snapToIndex(sheet.config.snapPoints.length - 1);
    }
  }, [activeSheetId, sheets, presentSheet]);

  // Collapse active sheet
  const collapse = useCallback((id?: string) => {
    const targetId = id || activeSheetId;
    if (!targetId || !sheets[targetId]) return;

    const sheet = sheets[targetId];
    if (!sheet.isPresented) {
      presentSheet(targetId);
      // Wait a bit for sheet to present, then collapse
      setTimeout(() => {
        bottomSheetModalRef.current?.snapToIndex(0);
      }, 100);
    } else {
      bottomSheetModalRef.current?.snapToIndex(0);
    }
  }, [activeSheetId, sheets, presentSheet]);

  const isOpen = useCallback((id?: string) => {
    const targetId = id || activeSheetId;
    if (!targetId) return false;
    return sheets[targetId]?.isVisible || false;
  }, [activeSheetId, sheets]);

  const getActiveId = useCallback(() => activeSheetId, [activeSheetId]);

  const updateContent = useCallback((id: string, content: React.ReactNode) => {
    if (!sheets[id]) return;
    
    setSheets(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        content,
      }
    }));
  }, [sheets]);

  // Get current active sheet
  const activeSheet = activeSheetId ? sheets[activeSheetId] : null;

  // Handle sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1 && activeSheetId) {
      // Sheet was dismissed
      setSheets(prev => ({
        ...prev,
        [activeSheetId]: {
          ...prev[activeSheetId],
          isPresented: false,
        }
      }));
      setActiveSheetId(null);
      
      if (activeSheet?.config.onClose) {
        activeSheet.config.onClose();
      }
    }
  }, [activeSheetId, activeSheet]);

  return (
    <BottomSheetContext.Provider
      value={{
        show,
        close,
        dismiss,
        expand,
        collapse,
        isOpen,
        getActiveId,
        present,
        updateContent,
      }}
    >
      <BottomSheetModalProvider>
        {children}
        
        {activeSheet && (
          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={activeSheet.config.snapPoints}
            index={activeSheet.config.index || 0}
            onDismiss={() => handleSheetChanges(-1)}
            onChange={handleSheetChanges}
            enablePanDownToClose={activeSheet.config.enablePanDownToClose}
            enableOverDrag={activeSheet.config.enableOverDrag}
            backdropComponent={activeSheet.config.backdropComponent || undefined}
            handleComponent={activeSheet.config.handleComponent}
            enableDismissOnClose={activeSheet.config.enableDismissOnClose}
            enableContentPanningGesture={activeSheet.config.enableContentPanningGesture}
            enableHandlePanningGesture={activeSheet.config.enableHandlePanningGesture}
            keyboardBehavior={activeSheet.config.keyboardBehavior}
            keyboardBlurBehavior={activeSheet.config.keyboardBlurBehavior}
            android_keyboardInputMode="adjustResize"
            
          >
            {activeSheet.content}
          </BottomSheetModal>
        )}
      </BottomSheetModalProvider>
    </BottomSheetContext.Provider>
  );
};
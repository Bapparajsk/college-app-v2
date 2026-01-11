// useManagedBottomSheet.ts
import { BottomSheetConfig, useBottomSheet } from '@/providers/bottomsheet';
import { useCallback, useEffect, useRef } from 'react';

export const useManagedBottomSheet = () => {
    const sheetIdRef = useRef<string | null>(null);
    const { show, close, dismiss, expand, collapse, present, isOpen, updateContent } = useBottomSheet();

    // Auto cleanup on unmount
    useEffect(() => {
        return () => {
            if (sheetIdRef.current) {
                close(sheetIdRef.current);
            }
        };
    }, []);

    const showSheet = useCallback((
        content: React.ReactNode,
        config?: Partial<BottomSheetConfig>
    ) => {
        // Close previous sheet if exists
        if (sheetIdRef.current) {
            close(sheetIdRef.current);
        }

        const id = show(content, {
            
            ...config,
        });
        sheetIdRef.current = id;
        return id;
    }, [show, close]);

    const expandSheet = useCallback(() => {        
        if (!sheetIdRef.current) return;
        
        // If sheet is not open, present it first
        if (!isOpen(sheetIdRef.current)) {
            present(sheetIdRef.current);
            // Expand after a short delay
            setTimeout(() => {
                expand(sheetIdRef.current!);
            }, 50);
        } else {
            expand(sheetIdRef.current);
        }
    }, [expand, present, isOpen]);

    const collapseSheet = useCallback(() => {
        if (!sheetIdRef.current) return;

        if (!isOpen(sheetIdRef.current)) {
            present(sheetIdRef.current);
            setTimeout(() => {
                collapse(sheetIdRef.current!);
            }, 50);
        } else {
            collapse(sheetIdRef.current);
        }
    }, [collapse, present, isOpen]);

    return {
        show: showSheet,
        close: useCallback(() => {            
            if (sheetIdRef.current) {
                console.log("close-2");
                close(sheetIdRef.current);
                sheetIdRef.current = null;
            }
        }, [close]),
        dismiss: useCallback(() => {
            if (sheetIdRef.current) {
                dismiss(sheetIdRef.current);
                sheetIdRef.current = null;
            }
        }, [dismiss]),
        expand: expandSheet,
        collapse: collapseSheet,
        present: useCallback(() => {
            if (sheetIdRef.current) {
                present(sheetIdRef.current);
            }
        }, [present]),
        updateContent: useCallback((content: React.ReactNode) => {
            if (sheetIdRef.current) {
                updateContent(sheetIdRef.current, content);
            }
        }, [updateContent]),
        isOpen: () => sheetIdRef.current ? isOpen(sheetIdRef.current) : false,
        getSheetId: () => sheetIdRef.current,
    };
};
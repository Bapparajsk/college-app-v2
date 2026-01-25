import React, { Children, isValidElement, memo, ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface IfProps {
    condition?: boolean;
    then?: React.ReactNode;
    otherwise?: React.ReactNode;
    children?: React.ReactNode;
    wrapperStyle?: StyleProp<ViewStyle>;
}

interface ThenProps {
    children: React.ReactNode;
}

interface ElseProps {
    children: React.ReactNode;
}

// Type-safe component definitions
const Then: React.FC<ThenProps> = ({ children }) => <>{children}</>;
const Else: React.FC<ElseProps> = ({ children }) => <>{children}</>;

// Type guard functions
function isThenElement(element: any): element is ReactElement<ThenProps> {
    return isValidElement(element) && element.type === Then;
}

function isElseElement(element: any): element is ReactElement<ElseProps> {
    return isValidElement(element) && element.type === Else;
}

const IfComponent: React.FC<IfProps> = ({
    condition = false,
    then,
    otherwise,
    children,
    wrapperStyle,
}) => {
    // Handle Then/Else pattern
    if (children) {
        const childrenArray = Children.toArray(children);

        // Safely extract Then and Else children
        const thenElement = childrenArray.find(child =>
            isThenElement(child)
        );
        const elseElement = childrenArray.find(child =>
            isElseElement(child)
        );

        const content = condition
            ? (thenElement as ReactElement<ThenProps>)?.props?.children
            : (elseElement as ReactElement<ElseProps>)?.props?.children;

        if (wrapperStyle && content) {
            return <View style={wrapperStyle}>{content}</View>;
        }

        return <>{content}</>;
    }

    // Handle props pattern
    const content = condition ? then : otherwise;

    if (wrapperStyle && content) {
        return <View style={wrapperStyle}>{content}</View>;
    }

    return <>{content}</>;
};

const If = Object.assign(memo(IfComponent), { Then, Else });
export { If };
export default If;
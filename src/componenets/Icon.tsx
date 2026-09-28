import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';

type IconProps = {
    name: React.ComponentProps<typeof Ionicons>['name'];
    size?: number;
    color?: string;
}

export function Icon({ name, size = 24, color = '#222' }: IconProps) {
    return <Ionicons name={name} size={size} color={color}></Ionicons>;
}
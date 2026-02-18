import { Text, TouchableOpacity, View } from "react-native";

const Button = ({ onPress, title }: { onPress?: () => void, title?: string }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                backgroundColor: 'blue',
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 5,
                margin: 5
            }}>
                <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
import { Image, Text, View } from "react-native";
import Button from "./button";
const Error = ({ message = "Please try again", onPress }: { message?: string, onPress?: () => void }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 14,
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 15,
            margin: 5
        }}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/497/497738.png' }}
                style={{ width: 32, height: 32, }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red', }}>Error!</Text>
            <Text style={{ fontSize: 18, fontWeight: 'medium' }}>{message}</Text>
            <Button onPress={onPress} />
        </View>
    );
};
export default Error;
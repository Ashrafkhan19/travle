import { ActivityIndicator, Text, View } from "react-native";

const Loader = () => {
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
            marginHorizontal: 5
        }}>
            <ActivityIndicator />
            <Text style={{ fontSize: 18, fontWeight: 'medium' }}>Loading...</Text>
        </View>

    );
};

export default Loader;
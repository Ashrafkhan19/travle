import { Image, Text, TouchableOpacity, View } from "react-native"
import { Product } from "../../domain/Product";
import Button from "../../../../core/components/button";

const ProductItem = ({ item, onPress }: { item: Product, onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                //gap: 10,
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 10,

                elevation: 5,
                flex: 1,
                marginBottom: 12,

            }}>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, margin: 10 }} />
                <View style={{ flex: 1, gap: 14 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'medium' }}>{item.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>${item.price}</Text>
                        <Button onPress={onPress} title="View Details" />
                    </View>
                </View>


            </View>
        </TouchableOpacity>

    )
}

export default ProductItem;
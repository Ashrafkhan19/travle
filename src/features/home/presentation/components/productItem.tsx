import { Image, Text, TouchableOpacity, View } from "react-native"
import { Product } from "../../domain/Product";
import Button from "../../../../core/components/button";
import { useAppDispatch } from "../../../../app/hook";
import { addItem } from "../../../cart/store/cartSlice";

const ProductItem = ({ item, onPress }: { item: Product, onPress: () => void }) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(item));
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>${item.price}</Text>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Button onPress={handleAddToCart} title="Add" />
                            <Button onPress={onPress} title="View" />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;
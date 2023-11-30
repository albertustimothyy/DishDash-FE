import React, { useState} from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import categories from "./categories";
import { FontAwesome } from '@expo/vector-icons'; 

interface Recipe {
  id: number;
  name: string;
  image: any;
  category: string;
  price: number;
  rating: number;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Cheese Burger",
    image: require("../assets/images/dishes/burger-1.jpg"),
    category: "Burger",
    price: 25.000,
    rating: 4.5
  },
  {
    id: 2,
    name: "Chicken Burger",
    image: require("../assets/images/dishes/burger-2.jpg"),
    category: "Burger",
    price: 20.000,
    rating: 4.4
  },
  {
    id: 3,
    name: "Veg Burger",
    image: require("../assets/images/dishes/burger-3.jpg"),
    category: "Burger",
    price: 15.000,
    rating: 4.8
  },
  {
    id: 4,
    name: "Chicken Pizza",
    image: require("../assets/images/dishes/pizza-1.jpg"),
    category: "Pizza",
    price: 30.000,
    rating: 4.7
  },
  {
    id: 5,
    name: "Veg Pizza",
    image: require("../assets/images/dishes/pizza-2.jpg"),
    category: "Pizza",
    price: 25.000,
    rating: 4.5
  },
  {
    id: 6,
    name: "Mushroom Pizza",
    image: require("../assets/images/dishes/pizza-3.jpg"),
    category: "Pizza",
    price: 30.000,
    rating: 4.6
  }
];

interface FoodsProps {
  activeCategory: number | null;
}

const FoodItem: React.FC<{ item: Recipe }> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <View style={{ flex: 0.5, marginHorizontal: 4, marginBottom: 8 }}>
      {/* Card-like structure for each food item */}
      <View style={{ borderRadius: 10, overflow: 'hidden', backgroundColor: '#ffffff', elevation: 3, padding: 12 }}>
        <Image
          style={{ width: "100%", height: 150, borderRadius: 10 }}
          source={item.image}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: "#ababab" }}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(item.price)}
        </Text>
        {/* Food rating */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
          <FontAwesome name="star" size={14} color="#f8d64e" style={{ marginRight: 4 }} />
          <Text>{item.rating.toFixed(1)}</Text>
        </View>
        {/* Add to Cart button */}
        <TouchableOpacity
        style={{
        backgroundColor: quantity === 0 ? '#ff9431' : 'white',
        borderRadius: 50,
        padding: 8,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ff9431', // Border color when background is white
        }}
        onPress={quantity === 0 ? handleAddToCart : undefined}
        >
          {quantity === 0 ? (
            <>
              <Text style={{ color: quantity === 0 ? '#fff' : '#ff9431' }}>+</Text>
            </>
          ) : (
            <>
              <TouchableOpacity onPress={handleDecrement} style={{ marginRight: 8 }}>
                <Text style={{ color: '#ff9431', fontWeight: 'bold', fontSize: 18 }}>-</Text>
              </TouchableOpacity>
              <Text style={{ color: '#ff9431', fontSize: 16 }}>{quantity}</Text>
              <TouchableOpacity onPress={handleIncrement} style={{ marginLeft: 8 }}>
                <Text style={{ color: '#ff9431', fontWeight: 'bold', fontSize: 18 }}>+</Text>
              </TouchableOpacity>
            </>
          )}
        </TouchableOpacity>

      </View>
    </View>
  );
};

const Foods: React.FC<FoodsProps> = ({ activeCategory }) => {
  const filteredRecipes = activeCategory
    ? recipes.filter(recipe => recipe.category === (activeCategory.toString()))
    : recipes;

  return (
    <View style={{ marginTop: 16, paddingHorizontal: 8 }}>
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FoodItem item={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Foods;
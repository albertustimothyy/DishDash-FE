import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ingredientsItem } from '../(dashboard)/shopping';
import { Link } from 'expo-router';


export const ingredientsData: ingredientsItem[] = [
    {
        id: 1,
        vendorId: "v1",
        name: "Fresh Chicken",
        desc: "Savour the exquisite taste of our premium Fresh Chicken, thoughtfully sourced and carefully selected to elevate your culinary creations. Our chickens are raised in optimal conditions, ensuring the highest quality and freshness. Tender and succulent, they promise a delightful dining experience for you and your loved ones. Whether you're grilling, roasting, or simmering in a savory stew, our Fresh Chicken guarantees a mouthwatering result every time. Packed with natural flavors and lean protein, it's the perfect choice for those who appreciate the finest in non- vegetarian cuisine.",
        category: "Meat",
        foodType: "Non-Vegetarian",
        price: 97500,
        rating: 4.8,
        image: require("../../assets/images/shopping/chicken.jpg"),
    },
    {
        id: 2,
        vendorId: "v1",
        name: "Broccoli",
        desc: "Discover the crisp and vibrant flavor of our premium Broccoli. Sourced from the finest farms, our broccoli is handpicked to ensure freshness and nutritional quality. Each bite offers a burst of wholesome goodness, making it an excellent choice for a nutritious and satisfying vegetarian meal. Whether steamed, stir-fried, or added to your favorite salads, our Broccoli complements a variety of dishes. Packed with essential vitamins and antioxidants, it's not only delicious but also a health-conscious addition to your diet.",
        category: "Vegetarian",
        foodType: "Vegetarian",
        price: 31999,
        rating: 4.5,
        image: require("../../assets/images/shopping/broccoli.jpg"),
    },
    {
        id: 3,
        vendorId: "v2",
        name: "Bandung's Letuce",
        desc: "Indulge in the freshness of Bandung's Lettuce, a premium choice for your vegetarian culinary adventures. Sourced from the lush fields of Bandung, each leaf is carefully cultivated to bring you the finest quality and flavor. Our lettuce is not just a salad staple; it's a versatile ingredient that adds crispness and vitality to your sandwiches, wraps, and other creations. Elevate your dishes with the wholesome goodness of Bandung's Lettuce, where every bite is a celebration of freshness and health.",
        category: "Vegetarian",
        foodType: "Vegetarian",
        price: 23000,
        rating: 4.2,
        image: require("../../assets/images/shopping/letuce.jpg"),
    },
    {
        id: 4,
        vendorId: "v2",
        name: "Margherita Pizza",
        desc: "Simple pizza with tomato, mozzarella, and basil.",
        category: "Pizza",
        foodType: "Vegetarian",
        price: 11.99,
        rating: 4.6,
        image: require("../../assets/images/shopping/ginger.jpeg"),
    },
    {
        id: 5,
        vendorId: "v3",
        name: "Lasagna",
        desc: "Layered pasta dish with meat sauce and cheese.",
        category: "Pasta",
        foodType: "Non-Vegetarian",
        price: 15.99,
        rating: 4.7,
        image: require("../../assets/images/dishes/burger-1.jpg"),
    },
    {
        id: 6,
        vendorId: "v3",
        name: "Garlic Bread",
        desc: "Bread with a layer of garlic butter.",
        category: "Bread",
        foodType: "Vegetarian",
        price: 5.99,
        rating: 4.4,
        image: require("../../assets/images/dishes/burger-1.jpg"),
    },
    {
        id: 7,
        vendorId: "v4",
        name: "Caesar Salad",
        desc: "Romaine lettuce with croutons, parmesan, and Caesar dressing.",
        category: "Salad",
        foodType: "Vegetarian",
        price: 7.99,
        rating: 4.3,
        image: require("../../assets/images/dishes/burger-1.jpg"),
    },
    {
        id: 8,
        vendorId: "v4",
        name: "Chocolate Cake",
        desc: "Rich, moist cake with chocolate frosting.",
        category: "Dessert",
        foodType: "Vegetarian",
        price: 13.99,
        rating: 4.9,
        image: require("../../assets/images/dishes/burger-1.jpg"),
    },
    {
        id: 9,
        vendorId: "v5",
        name: "Vanilla Ice Cream",
        desc: "Creamy ice cream with vanilla flavor.",
        category: "Dessert",
        foodType: "Vegetarian",
        price: 6.99,
        rating: 4.8,
        image: require("../../assets/images/dishes/burger-1.jpg"),
    },
    // Additional items
    {
        id: 10,
        vendorId: "v5",
        name: "Chicken Noodle Soup",
        desc: "Comforting soup with chicken and noodles.",
        category: "Soup",
        foodType: "Non-Vegetarian",
        price: 8.99,
        rating: 4.0,
        image: require("../../assets/images/dishes/burger-1.jpg"),
    },
    {
        id: 11,
        vendorId: "v6",
        name: "Greek Salad",
        desc: "Healthy salad with feta, olives, and tomatoes.",
        category: "Salad",
        foodType: "Vegetarian",
        price: 9.99,
        rating: 4.6,
        image: require("../../assets/images/dishes/burger-1.jpg"),
    },
];


const order = () => {
    const firstFourItems = ingredientsData.slice(0, 3);

    // Map through the first 4 items
    const renderedItems = firstFourItems.map((item) => (
        <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <hr />
        </div>
    ));

    // Calculate total price
    const totalPrice = firstFourItems.reduce((total, item) => total + item.price, 0);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#ff9432] bg-white shadow-sm">
                    <View>
                        <Text className="text-xl font-bold text-center">My Order</Text>
                    </View>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Ionicons name="fast-food" color="#ff9432" size={30} />
                    <TouchableOpacity>
                        <Text className="text-[#ff9432]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y gap-4 divide-gray-200">
                    {
                        firstFourItems.map((item) => (
                            <View key={item.id} className='flex-row justify-between items-center px-4'>
                                <View className='flex-row gap-2 items-center'>
                                    <Image source={item.image} className='w-14 h-14 rounded-xl' />
                                    <Text className='font-bold'>{item.name}</Text>
                                </View>
                                <Text className=''>{new Intl.NumberFormat("id", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(item.price || 0)}
                                </Text>
                            </View>
                        ))
                    }
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4 ">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            {new Intl.NumberFormat("id", {
                                style: "currency",
                                currency: "IDR",
                            }).format(totalPrice)}
                        </Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">
                            {new Intl.NumberFormat("id", {
                                style: "currency",
                                currency: "IDR",
                            }).format(14000)}
                        </Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400 font-bold">Order Total</Text>
                        <Text className=" text-[#1f1f20] font-extrabold">
                            {new Intl.NumberFormat("id", {
                                style: "currency",
                                currency: "IDR",
                            }).format(totalPrice + 14000)}
                        </Text>
                    </View>
                    <Link href="/preparingScreen/" asChild><TouchableOpacity
                        className="rounded-lg bg-[#ff9432] p-4 shadow-xl"
                    >
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity></Link>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default order
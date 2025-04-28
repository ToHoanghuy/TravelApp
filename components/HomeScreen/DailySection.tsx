import React, { useEffect, useRef, useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions, ActivityIndicator, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window')
const CARD_WIDTH = width - 240;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + 24;

interface DailySectionProps {
    categoryId: string | undefined; // Nhận categoryId từ HomeScreen
    navigation: any;
}

export default function DailySection({ categoryId}: DailySectionProps) {

    const [locations, setLocations] = useState<any[]>([]);
    const [RCM, setRCM] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const isFirstLoadRef = useRef(true);
    const isPageReady = useRef(false);
    

    useEffect(() => {
        console.log('category: ', categoryId)
        if (categoryId === "all") {
            getAllLocations(1);
            return;
        }
        if (categoryId) {
            fetchPopularLocations(categoryId, 1);
        }
        //fetchRecommendedLocations();
    }, [categoryId]);

    const fetchPopularLocations = async (id: string, pageNumber: number) => {

    };


  const getAllLocations = async (pageNumber: number, isLoadMore = false) => {
  };


    return (
        <View>
            <Text style={styles.titleText}>Gợi ý hằng ngày</Text>
            <FlatList
                data={locations}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item._id}
                contentContainerStyle={styles.container}

                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: 24,
                            marginRight: index === locations.length - 1 ? 24 : 0,
                        }}
                    >
                        <View style={styles.card}>
                            <View style={styles.imageBox}>
                                <Image
                                    style={styles.image}
                                    source={
                                        item?.image?.[0]?.url
                                            ? { uri: item.image[0].url }
                                            : require('../../assets/images/bai-truoc-20.jpg')
                                    }
                                />
                            </View>
                            <View style={styles.footer}>
                                <Text style={[styles.textStyle, { fontSize: 16 }]}>
                                    {item?.name || 'Khách sạn mới'}
                                </Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={[styles.textStyle, { fontSize: 12 }]}>
                                    {item?.province || 'Tỉnh/Thành phố'}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                numColumns={2} 
                onEndReached={() => {
                    // if (isPageReady.current) {
                        if (categoryId === 'all') {
                            getAllLocations(page, true);
                        } else if (categoryId) {
                            fetchPopularLocations(categoryId, page);
                        }
                    // } 
                    // else {
                    //     isPageReady.current = true;
                    // }
                }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    isFetchingMore ? (
                        <ActivityIndicator size="small" color="#000" style={{ marginHorizontal: 24 }} />
                    ) : null
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        //flexWrap: 'wrap',
    },

    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        left: 20,
        marginBottom: 10,

    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 1
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        borderRadius: 24,
        overflow: 'hidden',
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        resizeMode: 'cover',

    },
    textBox: {
        flexDirection: 'row',
        backgroundColor: '#4D5652',
        borderRadius: 20,
        alignItems: 'center',
        height: 30,
    },
    textStyle: {
        marginTop: 6,
        fontWeight: 'medium',
        color: 'black',
        marginLeft: 5,
        marginVertical: 2,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
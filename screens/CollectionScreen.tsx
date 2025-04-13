import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native';
import React,{ useState, useEffect } from 'react'
import {Button, Text, View,  StyleSheet, Image, TouchableOpacity, TextInput,Modal, Dimensions, FlatList} from 'react-native';
import { NativeStackNavigationProp, NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useUser } from '@/context/UserContext';
import Ticket from '@/components/BookingScreen/Booking';
import CollectionItem from '@/components/CollectionScreen/Location';
import LoadingScreen from '@/components/Loading/LoadingScreen';



const { height } = Dimensions.get('window');

type RootStackParamList = {
  'add-new-collection-screen': undefined;
  register: undefined;
  "detail-screen": { id: string };
};



type CollectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'add-new-collection-screen'
>;

export default function CollectionScreen ()
{
    const navigation = useNavigation<CollectionScreenNavigationProp>();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [tickets, setTickets] = useState<any[]>([]);
    const [collections, setCollections] = useState<any[]>([]);
    const [selectedCollectionLocations, setSelectedCollectionLocations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true); 
    const [reloadTrigger, setReloadTrigger] = useState(false);

      useEffect(() => {
        setModalVisible(false);
      }, []);

      useEffect(() => {
        fetchCollections();
      }, [reloadTrigger]);

      const onRefresh = async () => {
        setReloadTrigger(!reloadTrigger);  // Đổi trạng thái trigger để reload danh sách
      };

      useEffect(() => {
        fetchCollections();
      }, [reloadTrigger]);


      const fetchCollections = async () => {
      }

      useEffect(() => {
        fetchCollections();
      }, []);

      const handleCollectionClick = async (collectionId: string) => {

      };

      if (loading) {
        return <LoadingScreen />; // Hiển thị LoadingScreen khi dữ liệu đang được tải
      }

    return (
        <View style = {styles.container}>
            <View style = {{alignItems:'center', width:'100%'}}>
                <View style={styles.search}>
                    <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
                        <Image source={require('../assets/icons/Search.png')} style={styles.icon} />
                    </TouchableOpacity>                   
                    <TextInput
                        style={styles.input}
                        placeholder="Tìm kiếm"
                        placeholderTextColor="#000000"
                    />
                    <Image source={require('../assets/icons/logoblue.png')} style={styles.logo}/>
                </View>
            </View>
            <Text style={styles.collections }>Bộ sưu tập</Text>
            <View style={styles.list}>
                <FlatList

                  data={[...collections, { _id: 'add-new', name: 'Thêm mới', isAddNew: true }]}
                  keyExtractor={(item) => item._id}
                  renderItem={({ item, index }) =>
                    item.isAddNew ? (
                      // Giao diện ô "Thêm mới"
                      <View style={{ width: '50%', alignItems: 'center', marginVertical: 10 }}>
                        <TouchableOpacity
                          style={styles.square}
                          onPress={() => navigation.navigate('add-new-collection-screen')}
                        >
                          <Image
                            source={require('../assets/icons/plus.png')}
                            style={styles.iconplus}
                          />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10, fontSize: 20 }}>{item.name}</Text>
                      </View>
                    ) : (
                      // Giao diện collections thông thường
                      <View style={{ width: '50%', alignItems: 'center', marginVertical: 10 }}>
                        <TouchableOpacity style={styles.square} onPress={() => handleCollectionClick(item._id)}>
                        <Image
                          source={
                            item.previewImageUrl
                              ? { uri: item.previewImageUrl }
                              : require('../assets/images/defaultlocation.png') // fallback image nếu không có ảnh
                          }
                          style={{ width: 150, height: 150, borderRadius: 20 }}
                        />

                        </TouchableOpacity>
                        <Text style={{ marginTop: 10, fontSize: 20 }}>{item.name}</Text>
                      </View>
                    )
                  }
                  numColumns={2} 
                  refreshing={false} // Nếu muốn thêm loading indicator khi đang refreshing
                  onRefresh={onRefresh}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.exitButton}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Image source={require('../assets/icons/exit.png')} style={styles.exitIcon} />
                        </TouchableOpacity>
                        <Image source={require('../assets/images/collectionstart.png')}></Image>
                        <Text style={styles.modalText}>Lưu lại những địa điểm yêu thích của bạn</Text>
                        <Text style={styles.modalText2}>Nhấn vào biểu tượng trái tim ở bất cứ địa điểm nào và trải nghiệm với bộ sưu tập của bạn</Text>
                        <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.closeButtonText}>Tôi đã hiểu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                setModalVisible2(!modalVisible2);
                }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent1}>
                        <TouchableOpacity
                            style={styles.exitButton}
                            onPress={() => setModalVisible2(!modalVisible2)}>
                            <Image source={require('../assets/icons/exit.png')} style={styles.exitIcon} />
                        </TouchableOpacity>
                        <View style={{width:'100%', height:'100%', marginTop: 30,}}>
                          <FlatList
                            data={selectedCollectionLocations}
                            keyExtractor={(item) => item._id} // Giả sử mỗi location có _id
                            renderItem={({ item }) => (
                              <CollectionItem
                                imageUrl={item.image?.[0]?.url || "https://via.placeholder.com/150"}
                                name={item.name}
                                rating={item.rating || 1.0}
                                province={item.province || ""}
                                minPrice={item.minPrice || 0}
                                cancellation="Hủy miễn phí trong 24h"
                                onPress={() => { 
                                  navigation.navigate('detail-screen', { id: item._id });
                                  setModalVisible2(false);
                                }}// Thêm logic nếu cần
                              />
                            )}
                            showsVerticalScrollIndicator={false}
                          />
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },

    logo:{
      marginTop: 0,
      width:35,
      height:35,
      marginLeft: 10,
  },

    search: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 24,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#F3F8FE',
        width: '90%',
      },
    icon: {
        width: 20, 
        height: 20, 
        marginRight: 10,
        color:'black',
      },
    input: {
        flex: 1,
        height: 40,
        color: '#000000',
      },

    collections:{
        marginTop: 30,
        marginLeft: 25,
        fontSize:26,
        fontWeight:'bold',
      },

    list: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        width:'100%',
      },
    square: {
        width: 150,
        height: 150,
        backgroundColor: '#D2D2D2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        
      },
      iconplus: {
        width: 40,
        height: 40,
      },

      modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'flex-start',
        alignContent:'flex-start',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContent: {
        width: '100%',
        height: height * 0.6,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalContent1: {
        width: '100%',
        height: height * 0.8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
      },
      modalText2:{
        fontSize: 14,
        marginBottom: 20,
        textAlign:'center',
      },
      closeButton: {
        width:'90%',
        marginTop: 30,
        backgroundColor: '#196EEE',
        borderRadius: 18,
        padding: 10,
        elevation: 2,
      },
      closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:18,
        paddingHorizontal:5,
        paddingVertical:5,
      },
    
      exitButton: {
        position: 'absolute',
        top: 10,
        left: 10,
      },
      exitIcon: {
        width: 20,
        height: 20,
      },
});
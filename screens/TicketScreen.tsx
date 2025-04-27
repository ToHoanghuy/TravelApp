import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, RefreshControl, Button, TextInput, ScrollView } from 'react-native';
import Ticket from '@/components/BookingScreen/Booking';
import { useUser } from '@/context/UserContext';
import * as ImagePicker from 'expo-image-picker';


export default function TicketScreen() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [locationId, setLocationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [locationData, setLocationData] = useState({
    name: 'Huy ', 
    address: 'long an', 
    description: '', 
  });


  const fetchTickets = async () => {
  };

  const onRefresh = async () => {
    setRefreshing(true); 
    await fetchTickets(); 
    setRefreshing(false); 
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      alert('Please select an image first!');
      return;
    }

    // Kiểm tra xem tất cả các trường cần thiết có giá trị hay không
    if (!locationData.name || !locationData.address) {
      alert('Location name and address are required!');
      return;
    }

    setLoading(true);

  };


  return (
    <View style={styles.container}>
          
      <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
      <Text style={styles.collections}>Tất cả Booking</Text>

        <FlatList
            data={tickets}
            keyExtractor={(item) => item?._id} // Sử dụng _id làm key
            renderItem={({ item }) => (
                <Ticket
                title={item?.locationName} // Hiển thị roomId (hoặc tuỳ chỉnh)
                date={`${new Date(item?.checkinDate).toLocaleDateString()} - ${new Date(item?.checkoutDate).toLocaleDateString()}`}
                status={item?.status}
                imageUrl={item?.imageUrl || 'https://via.placeholder.com/150'}
                onCancel={() => console.log(`Cancel ticket: ${item?._id}`)}
                bookingId={item?._id}
                locationId={locationId}
                />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  
 
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  textArea: { height: 80 },
  imagePreview: { flexDirection: 'row', marginTop: 10 },
  image: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  errorText: { color: 'red', marginTop: 10 },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 20,
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  collections: {
    marginTop: 30,
    marginLeft: 25,
    fontSize: 26,
    fontWeight: 'bold',
  },
});

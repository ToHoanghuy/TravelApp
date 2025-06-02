// types/navigation.ts
export type SelectedRoom = {
    roomId: string;
    count: number;
    roomDetails: {
      name: string;
      price: number;
      checkinDate: Date;
      checkoutDate: Date;
    };
    nights: number;
  };

export type RootStackParamList = {
  'welcome1': undefined;
  'login': undefined;
  'register': undefined;
  'register2': undefined;
  'main-screen': undefined;
  'collection-screen': undefined;
  'booking-screen': undefined;
  'notifications-screen': undefined;
  'personal-information-screen': undefined;
  'voucher-screen': undefined;
  'add-new-collection-screen': undefined;
  'detail-screen': undefined;
  'available-room-screen': undefined;
  'chat-screen': undefined;
  'chat-board-screen': undefined;
  'lucky-wheel-screen': undefined;
  'search-location-screen': undefined;
  'view-map-screen': undefined;
  'profile-social-screen': undefined;
  'notifications-social-screen': undefined;
  'reservation-required-screen': { selectedRoomsData: SelectedRoom[], selectedServicesData: any,locationId: string};


};

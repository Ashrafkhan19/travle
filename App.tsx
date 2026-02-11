import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const { width: screenWidth } = Dimensions.get('window');



const App = () => {
  const [search, setSearch] = useState('Search');
  var [splash, setSplash] = useState(true);
  const [isHome, setHome] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Executed after 3 seconds");
    setSplash(false);
  }, 3000);

  return () => clearTimeout(timer); // cleanup
}, []);

  const renderPopularItem = (isSelected = false) => (
    <View
      style={[
        styles.popularItem,
        isSelected ? styles.popularItemSelected : null,
      ]}>
      <Text style={[styles.popularText, isSelected ? styles.popularTextSelected : null]}>
        Most Viewed
      </Text>
    </View>
  );

  const renderBoxItem = ({ item: index }) => (
    <TouchableOpacity onPress={() => {
      setHome(false)
    }}>
      <ImageBackground imageStyle={{
        borderRadius: 20
      }} style={styles.boxItem} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbgzk2MxIacfKD02COg-_yr47y6NbXBm8SQ&s' }}>
        <View style={styles.favoriteIcon}>
          {/* <Icon name="favorite-border" size={24} color="#9E9E9E" /> */}
        </View>

        <View style={styles.bottomOverlay}>
          <View style={styles.textContainer}>
            <View style={styles.locationRow}>
              <Text style={styles.mainLocation}>Mount fuji{index + 1}</Text>
              <Text style={styles.subLocation}>Tokyo{index + 1}</Text>
            </View>
            <View style={styles.locationRow}>
              <Text style={styles.subLocation}>Tokyo{index + 1}</Text>
              <Text style={styles.subLocation}>Japan{index + 1}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  if(splash){
    return (<Spalsh/>);
  }




  if (isHome) {

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Hi, David👋</Text>
              <Text style={styles.subtitle}>Explore the world!</Text>
            </View>
            <View style={styles.profileIcon} />
          </View>

          <View style={styles.searchRow}>
            <TextInput
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
              placeholderTextColor="#9E9E9E"
            />
            <View style={styles.divider} />
            <View style={styles.searchIcon} />
          </View>

          <View style={styles.popularHeader}>
            <Text style={styles.popularTitle}>Popular places</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          <View style={styles.popularRow}>
            {renderPopularItem(true)}
            {renderPopularItem()}
            {renderPopularItem()}
          </View>

          <FlatList
            data={[0, 1, 2]}
            renderItem={renderBoxItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.lazyRow}
            ItemSeparatorComponent={() => <View style={{ width: 24 }} />}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (!isHome) {
    return (
      <SafeAreaView>
        <DetailScreen style={styles} onBackClick={() => {setHome(true)}} />
      </SafeAreaView>
    );
  }
};

const WHITE = '#FFFFFF';
const BLACK = '#000000';
const GRAY = '#808080';
const RED = '#FF0000';

const DetailScreen = ({ style, onBackClick }) => {
  return (
    <View style={[styles.container, style]}>
      <DetailCardItem index={1} onBackClick={onBackClick} />

      <View style={styles.overviewRow}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.detailsTitle}>Details</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.gradientTextContainer}>
          <View style={styles.full}>
            <Text style={styles.loremText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.bookNowContainer}>
        <Text style={styles.bookNowText}>Book Now</Text>
      </View>
    </View >
  );
};

const DetailCardItem = ({ index, onBackClick }) => {
  return (
    <TouchableOpacity onPress={onBackClick} >
      <ImageBackground
        imageStyle={{
          borderRadius: 20
        }}
        style={styles.cardContainer}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbgzk2MxIacfKD02COg-_yr47y6NbXBm8SQ&s' }}>
        <View style={styles.favoriteIconContainer}>
          <Image source={{ uri: 'https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-back-icon-png-image_4224444.jpg' }} style={{ height: 24, width: 24 }} />


        </View>

        <View style={[styles.favoriteIconContainer, styles.topEnd]}>

        </View>

        <View style={styles.infoOverlay}>
          <View style={styles.infoColumn}>
            <View style={styles.locationRow}>
              <Text style={styles.mainLocation}>Mount fuji{index}</Text>
              <Text style={styles.subLocation}>Tokyo{index}</Text>
            </View>

            <View style={styles.locationRow}>
              <Text style={styles.subLocation}>Tokyo{index}</Text>
              <Text style={styles.subLocation}>Japan{index}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Spalsh = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'cyan',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Text style={{fontSize: 32, color: 'white'}}>Travel</Text>

       <Text style={{fontSize: 16, color: 'white'}}>Find your dream destination with us</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    padding: 28,
    flexDirection: "column"
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // flex: 2
  },
  greetingContainer: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'red',
    //height: 60

  },
  greeting: {
    fontSize: 32,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
  profileIcon: {
    marginLeft: 12,
    backgroundColor: 'blue',
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    padding: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 16,
    height: 48,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    color: 'gray',
    fontSize: 16,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: 'gray',
  },
  searchIcon: {
    marginLeft: 12,
    backgroundColor: 'green',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  popularHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },
  popularTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 18,
  },
  popularRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  popularItem: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    borderRadius: 16,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  popularItemSelected: {
    backgroundColor: 'black',
  },
  popularText: {
    color: 'gray',
    fontSize: 16,
  },
  popularTextSelected: {
    color: 'white',
  },
  lazyRow: {
    paddingTop: 32,
  },
  boxItem: {
    width: 220,
    height: 292,
    backgroundColor: 'red',
    borderRadius: 28,
    position: 'relative',
    overflow: 'hidden',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 12,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    width: '85%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 12,
  },
  textContainer: {
    flex: 1,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainLocation: {
    color: 'white',
    fontSize: 16,
    marginRight: 4,
  },
  subLocation: {
    color: 'gray',
    fontSize: 16,
  },
  overviewRow: {
    flexDirection: 'row',
    paddingTop: 32,
    width: '100%',
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 32,
  },
  detailsTitle: {
    fontSize: 18,
  },
  contentContainer: {
    //flex: 1,
    paddingTop: 32,
  },
  gradientTextContainer: {
    //flex: 1,
  },
  full: {
    //flex: 1,
  },
  loremText: {
    fontSize: 18,
    //flex: 1,
    color: 'black'
  },
  bookNowContainer: {
    marginBottom: 32,
    width: '100%',
    backgroundColor: BLACK + 'CC',
    borderRadius: 20,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookNowText: {
    fontSize: 18,
    color: WHITE,
  },
  cardContainer: {
    width: '100%',
    aspectRatio: 1,
    //backgroundColor: RED,
    borderRadius: 10,
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 12,
    left: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topEnd: {
    right: 16,
    left: undefined,
  },
  infoOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    width: screenWidth * 0.85 - 48,
    backgroundColor: BLACK + '80',
    borderRadius: 20,
    padding: 12,
  },
  infoColumn: {
    flex: 1,
  },
  locationRow1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainLocation1: {
    fontSize: 16,
    color: WHITE,
    marginRight: 4,
  },
  subLocation1: {
    fontSize: 16,
    color: GRAY,
  },
});

export default App;

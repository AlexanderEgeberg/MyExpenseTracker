import React from 'react';
import {
  Appbar,
  BottomNavigation,
  Divider,
  Menu,
  Provider,
  Text,
} from 'react-native-paper';
import HomePage from '../screens/HomePage';
import { logOut } from '../utils';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Layout = ({ children, user }) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    albums: AlbumsRoute,
    home: HomePage,
    recents: RecentsRoute,
  });

  return (
    <Provider>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          title="Welcome"
          subtitle={user.displayName.substring(0, 9)}
        />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              color="white"
              icon="dots-vertical"
              onPress={openMenu}
            />
          }>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={logOut} title="Logout" />
        </Menu>
      </Appbar.Header>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </Provider>
  );
};

export default Layout;

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { AnimatedSplash } from './src/components';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/app/store';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigator } from './src/navigation';
import { navigationRef } from './src/navigation/TabNavigator';
export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [showAnimatedSplash, setShowAnimatedSplash] = useState(true);

  useEffect(() => {
    async function prepare() {
      setAppReady(true);
    }
    prepare();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
          <StatusBar barStyle="dark-content" />
          {showAnimatedSplash && appReady && (
            <AnimatedSplash onFinish={() => setShowAnimatedSplash(false)} />
          )}
          <NavigationContainer ref={navigationRef}>
            <TabNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

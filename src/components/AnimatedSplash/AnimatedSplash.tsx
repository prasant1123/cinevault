import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function AnimatedSplash({ onFinish }: { onFinish: () => void }) {
  const scale = useRef(new Animated.Value(0.9)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      // subtle logo grow (Spotify-like)
      Animated.timing(scale, {
        toValue: 1.05,
        duration: 450,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(200),
      // fade out splash
      Animated.timing(opacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(onFinish);
  }, [scale, opacity, onFinish]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Animated.Image
        source={require('../../../assets/splash_logo.png')}
        resizeMode="contain"
        style={[
          styles.logo,
          {
            width: width * 0.5,
            height: width * 0.5,
            transform: [{ scale }],
          },
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  logo: {},
});

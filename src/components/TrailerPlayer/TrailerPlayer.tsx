import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

type Props = {
  url: string;
};

const getVideoId = (url: string) => {
  const match = url.match(/v=([^&]+)/);
  return match?.[1] ?? '';
};

const TrailerPlayer = ({ url }: Props) => {
  const videoId = useMemo(() => getVideoId(url), [url]);

  if (!videoId) return null;

  return (
    <View style={styles.container}>
      <YoutubePlayer height={220} play={false} videoId={videoId} />
    </View>
  );
};

export default TrailerPlayer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
  },
});

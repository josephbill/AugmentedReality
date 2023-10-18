// src/ModelViewer.js
import React, { useEffect, useState } from 'react';
import { View, Entity, asset, Environment } from 'react-360';
import axios from 'axios';

const ModelViewer = () => {
  const [modelUri, setModelUri] = useState(null);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const response = await axios.get(
          'https://res.cloudinary.com/dqlqmfjkt/image/upload/v1697663878/scanned_adidas_sports_shoe_id3l7d.glb'
        );
        setModelUri(response.data.url);
      } catch (error) {
        console.error('Error fetching model:', error);
      }
    };

    fetchModel();
  }, []);

  return (
    <View>
      {modelUri && <Entity source={{ glb: asset(modelUri) }} />}
      <Environment />
    </View>
  );
};

export default ModelViewer;

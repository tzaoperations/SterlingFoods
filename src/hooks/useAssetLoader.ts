import { useState, useEffect } from 'react';

/**
 * A hook that forces the app to wait until specific images are fully downloaded.
 * @param imageUrls Array of image paths that MUST be loaded before showing the page.
 * @param minimumLoadTime Minimum time in ms to show the loader (prevents flashing on fast connections).
 */
export const useAssetLoader = (imageUrls: string[], minimumLoadTime = 1200) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const loadImages = async () => {
      const promises = imageUrls.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          // Resolve whether it succeeds or fails so the app doesn't hang forever
          img.onload = resolve;
          img.onerror = resolve; 
        });
      });

      await Promise.all(promises);

      // Ensure the loader shows for at least the minimum time for a premium feel
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (imageUrls.length > 0) {
      loadImages();
    } else {
      // If no images provided, just wait the minimum time
      setTimeout(() => setIsLoading(false), minimumLoadTime);
    }
  }, [imageUrls, minimumLoadTime]);

  return isLoading;
};
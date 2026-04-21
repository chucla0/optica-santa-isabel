'use client';

import { useEffect } from 'react';

const RESET_KEY = 'optica-sw-reset-v1';

export function DevServiceWorkerReset() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    const alreadyReset = sessionStorage.getItem(RESET_KEY);
    if (alreadyReset) {
      return;
    }

    const cleanup = async () => {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));

      if ('caches' in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));
      }

      sessionStorage.setItem(RESET_KEY, 'done');
      window.location.reload();
    };

    void cleanup();
  }, []);

  return null;
}
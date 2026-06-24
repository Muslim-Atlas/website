'use client';

import { Toaster } from 'sonner';

export const GlobalToasters = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: 'hsl(222 40% 9%)',
          border: '1px solid hsl(217 32% 17%)',
          color: 'hsl(210 40% 98%)',
        },
      }}
    />
  );
};

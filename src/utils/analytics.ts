export const trackEvent = (eventName: string, metadata?: Record<string, any>) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Track]: ${eventName}`, metadata);
  }
  // TODO: send to analytics provider
};

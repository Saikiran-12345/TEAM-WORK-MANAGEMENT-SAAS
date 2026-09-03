import React from 'react';
export const Badge: React.FC<{children: React.ReactNode}> = ({children}) => <span className='px-2 py-1 bg-primary text-white rounded-full text-xs font-bold'>{children}</span>;

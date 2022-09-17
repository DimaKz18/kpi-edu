import { useEffect } from 'react';

export const useMountEffect = (fun: React.EffectCallback) => useEffect(fun, []);

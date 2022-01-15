import {LoaderFactory} from '../interface.js';

const factory: LoaderFactory = async ({mode}) => {
    if (mode !== 'production') {
        return null;
    }

    try {
        const {default: loader} = await import('@reskript/config-img-loader');
        return loader;
    }
    catch {
        return null;
    }
};

export default factory;

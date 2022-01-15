import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {LoaderFactory} from '../interface.js';

const factory: LoaderFactory = async () => {
    return {
        loader: MiniCssExtractPlugin.default.loader,
    };
};

export default factory;

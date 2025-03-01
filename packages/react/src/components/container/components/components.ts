import React from 'react';
import * as components from './version/11-01-2025';
import * as interfaces from './interfaces/IContainer';
import * as loaders from '../../loaders/loader';

const Block = React.lazy(() => import('./version/11-01-2025').then(module => ({ default: module.Block })));
const Flex = React.lazy(() => import('./version/11-01-2025').then(module => ({ default: module.Flex })));
const Grid = React.lazy(() => import('./version/11-01-2025').then(module => ({ default: module.Grid })));
const Scroll = React.lazy(() => import('./version/11-01-2025').then(module => ({ default: module.Scroll })));
const SkeletonLoader = loaders.SkeletonLoader;

export {
    SkeletonLoader,
    Block,
    Flex,
    Grid,
    Scroll,
    interfaces
}
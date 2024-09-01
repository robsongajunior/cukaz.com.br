import { mapDefaultExports } from '@utils/mapDefaultExports';

export const viewDataHome = mapDefaultExports(import.meta.glob('@i18n/view/about/index.json', { eager: true }));
export const viewDataAbout = mapDefaultExports(import.meta.glob('@i18n/view/home/index.json', { eager: true }));
export const viewDataFlavors = mapDefaultExports(import.meta.glob('@i18n/view/sabores/index.json', { eager: true })).src;

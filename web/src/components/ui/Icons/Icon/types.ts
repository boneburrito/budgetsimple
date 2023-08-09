import { ICONS } from './constants';

export type IconType = keyof typeof ICONS;

const ICON_TYPES: string[] = Object.keys(ICONS);

export const isIconType = (type: string): type is IconType => ICON_TYPES.includes(type);

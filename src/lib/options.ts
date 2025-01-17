import { PresetIconsItem } from '../types';
import { Icon } from './icon';

async function evaluatePresetIconItemToPagePaths(presetIconItem: PresetIconsItem): Promise<Icon[]> {
  // TODO: 十分時間が経過したら例外を投げるのをやめる
  if (typeof presetIconItem === 'string') throw new Error('`string` type is deprecated.');
  if (presetIconItem instanceof Icon) return [presetIconItem];
  if (Array.isArray(presetIconItem)) {
    const promises = presetIconItem.map(evaluatePresetIconItemToPagePaths);
    return (await Promise.all(promises)).flat();
  }
  if (presetIconItem instanceof Promise) {
    return evaluatePresetIconItemToPagePaths(await presetIconItem);
  }
  const presetIconItems = await presetIconItem();
  const promises = presetIconItems.map(evaluatePresetIconItemToPagePaths);
  return (await Promise.all(promises)).flat();
}

/**
 * `PresetIconItem[]` を評価して `Icon[]` に変換する関数。
 * `PresetIconItem` が関数から構成される場合は、関数呼び出しをして、その戻り値から `Icon[]` を取り出してくれる。
 * */
export async function evaluatePresetIconItemsToIcons(presetIconItems: PresetIconsItem[]): Promise<Icon[]> {
  const nestedPagePaths = await Promise.all(presetIconItems.map(evaluatePresetIconItemToPagePaths));
  return nestedPagePaths.flat();
}

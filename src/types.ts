export type FormData = {
  query: string;
};

/**
 * アイコンを表す型。
 * @example
 * const icon1: Icon = {
 *   pagePath: 'done',
 *   imgAlt: 'done',
 *   imgTitle: 'done',
 *   imgSrc: '/api/pages/current-project/done/icon',
 *   notation: '[done.icon]',
 * };
 * const icon2: Icon = {
 *   pagePath: 'a/b',
 *   imgAlt: 'a/b',
 *   imgTitle: 'a/b',
 *   imgSrc: '/api/pages/current-project/a%2Fb/icon',
 *   notation: '[a/b.icon]',
 * };
 * const icon3: Icon = {
 *   pagePath: '日本語',
 *   imgAlt: '日本語',
 *   imgTitle: '日本語',
 *   imgSrc: '/api/pages/current-project/%E6%97%A5%E6%9C%AC%E8%AA%9E/icon',
 *   notation: '[日本語.icon]',
 * };
 * const icon4: Icon = {
 *   pagePath: '/icons/done',
 *   imgAlt: '/icons/done',
 *   imgTitle: '/icons/done',
 *   imgSrc: '/api/pages/icons/done/icon',
 *   notation: '[/icons/done.icon]',
 * };
 */
export type Icon = {
  /** アイコンとして表示されるページのパス */
  pagePath: string;
  /** アイコンを img タグにした時に alt 属性にセットされる値 */
  imgAlt: string;
  /** アイコンを img タグにした時に title 属性にセットされる値 */
  imgTitle: string;
  /** アイコンを img タグにした時に src 属性にセットされる値 */
  imgSrc: string;
  /** アイコン記法の文字列表現 */
  notation: string;
};

export type CursorPosition = {
  styleTop: number;
  styleLeft: number;
};

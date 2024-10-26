/**
 * https?: httpまたはhttpsに対応
 * \/\/: URLのスラッシュ
 * [^\s]+: スペース以外の文字が1文字以上続く
 */
export const url = /(https?:\/\/[^\s]+)/g;

/**
 * 動画の拡張子
 */
export const movie = /\.(mp4|webm|ogg)$/;
export const isVideo = (src) => /\.(mp4|webm|ogg|mov|m4v)$/i.test(src);

/** @typedef {{
 *   title: string;
 *   images: string[];
 *   poster?: string;
 *   visit?: { href: string; label?: string };
 *   wip?: boolean;
 * }} Exploration
 */

/** @type {Exploration[]} */
export const explorations = [
  {
    title: 'Micro-animation, Interaction',
    images: ['/showcase/explorations/your-showcase/showcase-image.png'],
    poster: '/showcase/explorations/your-showcase/showcase-image.png', // (Optional) If something went wrong this will showup instead
    //   visit: { href: 'https://doremi.finance/', label: 'Visit' }, // With Visit Link
    //   wip: true, // WIP tag
  },
];

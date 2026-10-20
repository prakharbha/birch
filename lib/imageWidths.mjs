// The only widths next/image may request. scripts/image-variants.mjs builds an AVIF for each.
export const DEVICE_SIZES = [640, 828, 1080, 1600, 2048]
export const IMAGE_SIZES = [128, 256, 384]
export const IMAGE_WIDTHS = [...IMAGE_SIZES, ...DEVICE_SIZES]

export const layoutOptions = ["list", "grid", "pack"] as const;

export type LayoutOptions = (typeof layoutOptions)[number];

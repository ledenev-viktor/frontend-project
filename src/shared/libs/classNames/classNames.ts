export type Mods = Record<string, boolean | string>;

export function classnames(
  cls: string,
  mods: Mods = {},
  addition: string[] = []
): string {
  return [
    cls,
    ...addition.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}

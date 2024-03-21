
type Mods = Record<string, boolean | string>

export function classNames(cls:string, mods : Mods, addittional: string[]): string{
    return [
        cls,
        ...addittional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}

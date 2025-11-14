import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const counterAtom = atom(0)
export const useCounter = () => useAtom(counterAtom)

export const themeAtom = atomWithStorage('theme', 'light')
export const useTheme = () => useAtom(themeAtom)
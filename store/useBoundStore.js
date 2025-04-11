import { create } from 'zustand'
import { useDictionaryStore } from './useDictionary'

export const useBoundStore = create((...a) => ({
	...useDictionaryStore(...a),
   
}))
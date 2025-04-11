export const useDictionaryStore = (set) => ({
   letter: '',
   setLetter: (letter) => set(() => ({ letter })),
   dictionary: [], 
   addToDictionary: (word, definition, image, link) => set((state) => ({
      dictionary: [
         ...state.dictionary, 
         { word, definition, image, link },
      ],
   })),
   removeFromDictionary: (word) => set((state) => ({
      dictionary: state.dictionary.filter((entry) => entry.word !== word),
   })),
});
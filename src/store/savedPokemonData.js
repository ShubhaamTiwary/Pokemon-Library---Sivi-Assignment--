import { types, onSnapshot } from "mobx-state-tree"
import React, { useEffect } from 'react'
import axios from "axios";


const SavedPokemonModel = types.model({
    id: types.number,
    pok_name: types.string,
    pok_url: types.string
});

const SavedPokemonListModel = types.model({
    savedPokemon: types.map(SavedPokemonModel),
}).actions(self => ({
    addSavedPokemon(id, pok_name, pok_url) {
        self.savedPokemon.set(String(id), { id, pok_name, pok_url });
    },
    removeSavedPokemon(id) {
        self.savedPokemon.delete(String(id));
    },
}));

export const savedPokemonList = SavedPokemonListModel.create();
// savedPokemonList.addSavedPokemon(3, "Bulbasaur", "bulbasaur.jpg");

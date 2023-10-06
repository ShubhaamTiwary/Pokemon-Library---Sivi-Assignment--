import { types, onSnapshot } from "mobx-state-tree"
import React, { useEffect } from 'react'
import axios from "axios";

const ObjectModel = types.model({
    id: types.number,
    pok_name: types.string,
    pok_url: types.string
});

const ArrayOfObjectsModel = types
    .model({
        objects: types.array(ObjectModel),
    })
    .actions(self => ({
        addObject(id, pok_name, pok_url) {
            self.objects.push({ id, pok_name, pok_url });
        },
        removeObject(index) {
            self.objects.splice(index, 1);
        },
    }));
export const Data = ArrayOfObjectsModel.create({
    objects: [],
});
const fetchData = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50");
        const arr = response.data.results;

        const pokemonDetails = await Promise.all(arr.map(async (ele, i) => {
            try {
                const response = await axios.get(ele.url);
                const ans = response.data.sprites.front_default;
                Data.addObject(i + 1, ele.name, ans);
            } catch (error) {
                console.error("Error fetching data: ", error);
                return null;
            }
        }));
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};
await fetchData();



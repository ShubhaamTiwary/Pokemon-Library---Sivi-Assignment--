import { types, onSnapshot } from "mobx-state-tree"
import React, { useEffect } from 'react'

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


const setData=()=>{
    Data.addObject(1, "Pikachu", "https://example.com/pikachu");
    Data.addObject(2, "Charmander", "https://example.com/charmander");
}
// setData();

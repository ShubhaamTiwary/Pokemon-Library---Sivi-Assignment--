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
export const Data = ArrayOfObjectsModel.create({ });



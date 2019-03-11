import Realm from 'realm';

import { ItemSchema } from './models'

const db = () => (
    Realm.open({
        path: 'wuha.realm',
        schema: [ItemSchema],
        schemaVersion: 0,
    })
        .catch(err => console.log(`Unable to create Realm schema. Stacktrace: ${err}`))
);

export { db };

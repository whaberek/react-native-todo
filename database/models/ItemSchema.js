class ItemSchema {}

ItemSchema.schema = {
    name: 'Item',
    primaryKey: 'id',
    properties: {
        id: 'string',
        checked: {
            type: 'bool',
            default: false,
        },
        text:  'string',
        created: 'int',
    },
};

export { ItemSchema };

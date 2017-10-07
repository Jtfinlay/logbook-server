'use strict';

module.exports = { getAll };

let logs = {
    data: [{
        type: 'entry',
        id: '70257a51-bda4-4ce0-9c8b-7e68644c301f',
        attributes: {
            'created-at': '2017-08-27T22:50:36.137Z',
            'elapsed-time': 356000
        }
    },
    {
        type: 'entry',
        id: '70257a51-bda4-4ce0-9c8b-7e68644c301g',
        attributes: {
            'created-at': '2017-09-27T22:50:36.137Z',
            'elapsed-time': 2600
        }
    }]
};

function getAll(req, res) {
    res.json( logs );
}
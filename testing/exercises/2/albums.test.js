const {getAlbumNames} = require('./albums');
const spotify = require('./spotify');
const {testData} = require('./testData');

jest.mock('./spotify');

test('album names are in alphabetical order', () => {
    return getAlbumNames('meat loaf').mockResolvedValue(testData)
        .then(val => {
            expect(val).toBe(testData);
        });
});



// test('album names are in alphabetical order', () => {
//     return getAlbumNames('meat loaf').then(
//         albumNames => {
//             expect(albumNames).toEqual(albumNames.sort());
//         }
//     );
// });


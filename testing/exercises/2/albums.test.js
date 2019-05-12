const {getAlbumNames} = require('./albums');
const spotify = require('./spotify');
const {testValues} = require('./testData');

jest.mock('./spotify');

test('album names are in alphabetical order', () => {
    spotify.search.mockResolvedValue(testValues);

    return getAlbumNames('meat loaf').then(albums => { 
        expect(albums).toBe(albums.sort());
    });
});

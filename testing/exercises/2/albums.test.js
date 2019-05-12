const {getAlbumNames} = require('./albums');
const spotify = require('./spotify');
const {testValues} = require('./testData');

jest.mock('./spotify');

test('album names are in alphabetical order', () => {
    spotify.search.mockResolvedValue(testValues);

    return getAlbumNames('meat loaf').then(albums => { 
        expect(albums).toBe(albums);
    });
});



// const { getAlbumNames } = require("./albums");
// const spotify = require("./spotify");

// jest.mock("./spotify");

// test("album names are in alphabetical order", () => {
//     spotify.search.mockResolvedValue({
//         albums: {
//             items: [
//                 { name: "album1" },
//                 { name: "calbum3" },
//                 { name: "dalbum4" },
//                 { name: "galbum1" }
//             ]
//         }
//     });
//     return getAlbumNames("meat loaf").then(albumNames => {
//         expect(albumNames).toEqual(albumNames.sort());
//     });
// });
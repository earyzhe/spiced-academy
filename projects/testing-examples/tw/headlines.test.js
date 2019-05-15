const headlines = require('./headlines');
const twiApi = require('./twiApi');

// Here we are creating a mock of all functions in the Twi Api file
jest.mock('./twiApi');

test('headlines filters out tweets that dopn\'t have exactly one link',  () => {
    twiApi.getTweets.mockResolvedValue(
        [
            {
                entities:{
                    urls: [
                        {
                            url:'www.google.com'
                        },
                    ]
                },
                full_text: 'Salt is great' ,
            },
            {
                entities:{
                    urls: [
                        {
                            url:'www.bbc.co.uk'
                        },
                    ]
                },
                full_text: 'The BBC' ,
            }, 
            {
                entities:{
                    urls: [
                        {
                            url:'www.spiced-academy.com'
                        },
                    ]
                },
                full_text: 'Salt is great' ,
            },    
        ]
    );
});
const mongoose = require('mongoose');
const Country = require('./models/countries');
const Countries = require('./models/countries');

//Connect to DB
mongoose.connect('mongodb://localhost:27017/lockDownFinderDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('Mongo Connection Open');
}).catch((err) => {
    console.log('Mongo error connection');
    console.log(err);
});

const seedCountries = [
    {
        name: 'spain',
        inLockDown: 'partial',
        restrictions: ['On Sunday, 25 October, Spain began its nationwide curfew, after the government declared a new state of emergency.',
        'People in all regions, with the exception of the Canary Islands, will have to stay at home between 23:00 and 06:00.',
        'The only permitted journeys are going to work, buying medicine or caring for elderly people or children.',
        'Public and private gatherings are limited to six people.'
        ],
        countryURL: 'https://images.unsplash.com/photo-1578912996078-305d92249aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        endDate: '2021-05-01'
    },
    {
        name: 'france',
        inLockDown: 'Yes',
        restrictions: ['People are allowed to leave their homes only to go to work (if they cannot work from home), to buy essential goods, seek medical help or to exercise for one hour a day.',
        'Anyone going outside has to carry a written statement justifying their journey, as happened in the first lockdown in March.',
        'All non-essential shops, restaurants and bars are shut, but schools and creches remain open.',
        'Social gatherings are banned.'
        ],
        countryURL: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        endDate: '2020-12-01'
    },
    {
        name: 'germany',
        inLockDown: 'Partial',
        restrictions: ['Since 2 November, new restrictions across the country have included the closure of cinemas, theatres, gyms, pools and saunas, as well as restaurants and bars, except for takeaway.',
        'Social contacts are limited to two households with a maximum of 10 people.',
        'Large events are cancelled and no crowds are allowed at sports fixtures.',
        'Overnight stays in hotels for leisure purposes are banned and all non-essential travel strongly discouraged.',
        'However, schools and creches are open and visits to nursing homes are allowed.',
        'Shops and hairdressers are able to stay open, with strict hygiene rules and limits on the number of customers. Church services and protests are also permitted.'
        ],
        countryURL: 'https://images.unsplash.com/photo-1554062669-9603197b21f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1464&q=80',
        endDate: '2020-11-01'
    }
]


Country.insertMany(seedCountries)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});



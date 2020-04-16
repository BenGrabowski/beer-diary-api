const xss = require('xss');
const Treeize = require('treeize');

const BeersService = {
    getUsersBeers(db, user_id) {
        return db
            .from('beers')
            .select(
                'beers.id',
                'beers.user_id',
                'beers.beer_name',
                'beers.type',
                'beers.brewery',
                'beers.ABV',
                'beers.rating'
            )
            .where('beers.user_id', user_id)
            .orderBy('id', 'desc');
    },
    serializeBeer(beer) {
        const beerTree = new Treeize();
        const beerData = beerTree.grow([ beer ]).getData()[0];

        return {
            id: beerData.id,
            user_id: beerData.user_id,
            beer_name: xss(beerData.beer_name),
            type: beerData.type,
            brewery: xss(beerData.brewery),
            ABV: beerData.ABV,
            rating: beerData.rating
        };
    },
    serializeBeers(beers) {
        return beers.map(this.serializeBeer);
    },
};

module.exports = BeersService;
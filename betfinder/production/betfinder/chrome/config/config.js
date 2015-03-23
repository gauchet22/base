var config =
{
    handlers: {
        // Mobile site
        mobileSite: ['lukia.', 'tipico.', 'unibet.', 'bet365.', 'ladbrokes.', '888sport.', 'paf.'],

        // Set handles to country
        countryHandlers: {
            spanishHandlers: ['luckia', 'sportium'],
            englishUkHandlers: ['marathonbetUk']
        },

        // Worlwide bookies
        worldwide: {
            code: 'wo',
            path: 'handlers/worldwideHandlers/'
        },

        // Spanish bookies
        spanishHandlers: {
            code: 'es',
            path: 'handlers/spanishHandlers/'
        },

        // UK English bookies
        englishUkHandlers: {
            code: 'uk',
            path: 'handlers/englishUkHandlers/'
        },

        // Parent class handlers
        coreHandler: {
            path: 'handlers/coreHandlers/',
            parentClass:{
                'core24hpoker': ['24hpoker', 'smartlivegaming', 'noxwin'],
                'corePaf': ['paf', 'unibet', 'luckia', '888sport','32redsport'],
                'coreTitanbet': ['titanbet', 'winner','vernons'],
                'coreMarathonbet': ['marathonbet', 'marathonbetUk'],
                'coreBetVictor': ['mcbookie', 'betvictor'],
                'core12bet': ['12bet', '1bet'],
                'coretipico':['tipico','rivalo']
            }
        }
    }
}
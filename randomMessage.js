const activities = [
    'hiking', 
    'eating the local cuisine', 
    'chasing waterfalls', 
    'relaxing on a beach', 
    'swimming with sharks',
    'dancing',
    'falling in love',
    'taking a bike tour',
    'drinking wine',
    'exploring ruins',
    'bungee jumping',
    'on a boat',
    'learning to bake',
    'seeing wild animals',
    'getting lost',
    'seeing a show',
    'surfing',
    'having a photoshoot',
    'learning a language',
    'at a spa',

];

const locations = [
    'Italy',
    'Greece',
    'Costa Rica',
    'Iceland',
    'Switzerland',
    'France',
    'Thailand',
    'Africa',
    'Egypt',
    'Peru',
    'New York',
    'Vietnam',
    'China',
    'Japan',
    'Las Vegas',
    'Antarctica',
    'Hawaii',
    'Morocco',
    'Portugal',
    'Aruba',
    'New Zealand',
    'Australia',
    'Ireland',
    'Scotland',
    'Spain',
    'Germany',
    'South Korea',
    'Croatia',
    'England',
    'Sweden',
    'Norway',
    'Belgium',
    'The Netherlands',
    'Nicaragua',
    'The Bahamas',
    'Mexico',
    'Chile'
];

const companions = [
    'yourself',
    'a stranger',
    'your best friend',
    'your mom',
    'your boss',
    'your ex',
    'your pet',
    'your dad',
    'your sibling'
];

const generateVacation = (activities, locations, companions) => {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const companion = companions[Math.floor(Math.random() * companions.length)];

    return `You will be ${activity} in ${location} with ${companion}.`
}

console.log('Your next vacation:');
console.log(generateVacation(activities, locations, companions));


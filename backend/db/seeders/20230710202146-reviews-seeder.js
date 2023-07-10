'use strict';
const {Review} = require('../models')

let options = {}

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Review.bulkCreate([
    {
      spotId: 1,
      userId: 1,
      review: 'Hobbiton was a delightful stay. All the Hobbits made my stay feel so special. One Hobbit had a scary ring that drew unwanted attention. Would have been a 5 star stay if not for this',
      stars: 3
    },
    {
      spotId: 2,
      userId: 2,
      review: 'Great place, but the cupboard under the stairs was a bit cramped. Also, the owl post kept waking me up in the morning. 3 stars for the nostalgia, but would appreciate more room next time.',
      stars: 3
    },
    {
      spotId: 3,
      userId: 1,
      review: 'Was hoping for more honey but got chased by a Heffalump instead. Also, too many stick-throwing games. Lost a lot of time, but overall a sweet stay.',
      stars: 3
    },
    {
      spotId: 4,
      userId: 3,
      review: 'Travel was fast and efficient but finding the platform was a bit tricky. Nearly got hit by a Muggle train. The chocolate frogs were a nice touch though.',
      stars: 4
    },
    {
      spotId: 5,
      userId: 4,
      review: 'The place was decent but I kept hearing violin music at odd hours. Also, I am not sure but I think my host deduced my entire life story just by looking at me.',
      stars: 4
    },
    {
      spotId: 6,
      userId: 2,
      review: 'Overall nice but kept getting woken up by loud battle cries of "I choose you!" in the middle of the night. Also, could not find the bathroom. Are we supposed to go in the tall grass?',
      stars: 3
    },
    {
      spotId: 7,
      userId: 3,
      review: 'Great location, friendly neighbors. Spongebob was a bit too loud but Squidward made up for it. Krabby Patty is overrated.',
      stars: 4
    },
    {
      spotId: 8,
      userId: 1,
      review: 'Went in expecting to chill out in a nest. Spent the entire time being taught the alphabet and how to count. Great for kids, not so much if you want to relax.',
      stars: 2
    },
    {
      spotId: 9,
      userId: 2,
      review: 'Stay was alright. Ended up getting caught in a city-wide scandal involving a miniature horse. Would recommend if you are into waffles and chaos.',
      stars: 3
    },
    {
      spotId: 10,
      userId: 4,
      review: 'Very interesting place, but I kept getting hit on the head by a mischievous baby with a mallet. Homer was good company, though. D\'oh!',
      stars: 3
    },
    {
      spotId: 11,
      userId: 3,
      review: 'Great place with grandeur. But Thor kept throwing his hammer around and it got quite noisy. I would recommend it if you can put up with constant thunder.',
      stars: 4
    },
    {
      spotId: 12,
      userId: 1,
      review: 'A different residence but again with the violin music and life deducing. The deductions were accurate but a bit unnerving.',
      stars: 4
    },
    {
      spotId: 13,
      userId: 2,
      review: 'I was expecting water but instead got a bunch of sea life talking to me about some trident. Aquaman was no help. The scenery was beautiful though.',
      stars: 3
    },
    {
      spotId: 14,
      userId: 4,
      review: 'Great views but the atmosphere is a bit thin. Met Elon Musk though, so that was a plus. Bring your own oxygen.',
      stars: 3
    },
    {
      spotId: 15,
      userId: 1,
      review: 'Lovely stay, but Zeus kept throwing lightning bolts. Also, being fed nectar and ambrosia all day gets a bit monotonous.',
      stars: 4
    },
    {
      spotId: 16,
      userId: 3,
      review: 'Narnia is a fantastic place, but the talking animals got a bit too political. Also, I now have a fur allergy.',
      stars: 3
    },
    {
      spotId: 17,
      userId: 4,
      review: 'Kong was a bit too loud and I kept finding giant footprints everywhere. But the location is a nature lover\'s dream. Just avoid going out during Kong\'s feeding time.',
      stars: 3
    },
    {
      spotId: 18,
      userId: 1,
      review: 'Not a great place for a holiday. The hockey-masked caretaker was a bit too overbearing. Definitely not for the faint-hearted.',
      stars: 1
    },
    {
      spotId: 19,
      userId: 2,
      review: 'Third time here, still the violin and the deductions. Watson was a pleasant company though. Nice tea.',
      stars: 4
    },
    {
      spotId: 20,
      userId: 3,
      review: 'Felt a bit strange being the only adult without superpowers. Kept getting challenged to telepathic chess by a guy in a wheelchair. Still, the mansion was impressive.',
      stars: 4
    },
    {
      spotId: 21,
      userId: 4,
      review: 'I could not breathe, 0/10 would not recommend unless you can fly and have heat vision.',
      stars: 1
    },
    {
      spotId: 22,
      userId: 1,
      review: 'Decent place but the night time archery noises were a bit much. Also, the green hooded guy kept giving me self-righteous speeches.',
      stars: 3
    },
    {
      spotId: 23,
      userId: 2,
      review: 'Loved the stay, but had to deal with some strange weather changes. One moment it was sunny, then it was snowing. The housekeeper with the umbrella was a bit too cheerful.',
      stars: 3
    },
    {
      spotId: 24,
      userId: 3,
      review: 'Good location but the dentist was a bit weird. Fish in the tank kept planning an escape. Also, got chased by a seagull on the way out.',
      stars: 3
    },
    {
      spotId: 2,
      userId: 2,
      review: 'Staying at the Dursley Residence was alright until an owl delivered my Amazon package through the window. I guess Prime Delivery is more efficient here. Vernon wasnt too happy.',
      stars: 3
    },
    {
      spotId: 3,
      userId: 3,
      review: 'Stayed at Pooh\'s House, couldn\'t find a single pot of honey. Pooh ate it all! But enjoyed the peaceful atmosphere of Hundred Acre Wood.',
      stars: 4
    },
    {
      spotId: 4,
      userId: 4,
      review: 'Missed the Hogwarts Express even though I was right on time. Found out later you have to run into a wall to get on the platform. Would have been nice to know!',
      stars: 2
    },
    {
      spotId: 5,
      userId: 1,
      review: 'Stayed at Sherlock\'s place. He deduced my entire life story within a minute of meeting me. A bit unnerving, but he makes a decent cup of tea.',
      stars: 4
    },
    {
      spotId: 6,
      userId: 2,
      review: 'At Ash Ketchum\'s House, found a Squirtle in the toilet. Other than the occasional Pokemon battle noise, it was a pleasant stay.',
      stars: 4
    },
    {
      spotId: 7,
      userId: 3,
      review: 'Stayed in the pineapple house. Woke up every morning to the sound of "I\'m Ready!". A little damp, but Ive always wanted to live under the sea.',
      stars: 3
    },
    {
      spotId: 8,
      userId: 4,
      review: 'Visited Big Bird\'s Nest, good view but was kept awake all night by a Cookie Monster rummaging through the bins for cookies. Typical city life.',
      stars: 2
    },
    {
      spotId: 25,
      userId: 4,
      review: 'At the Wonka Chocolate Factory, I thought I was in for a treat, but I ended up turning blue and almost got carried away by small singing men. At least the chocolate was good.',
      stars: 3
    },
    {
      spotId: 26,
      userId: 1,
      review: 'At Rivendell, the Elves were a bit high-brow, and the place was too quiet for my taste. But the view was breathtaking.',
      stars: 4
    },
    {
      spotId: 26,
      userId: 2,
      review: 'At the Fortress of Solitude, it was... well, too solitary. The ice decor was chic but not very cosy. Also, I couldnt find the bathroom.',
      stars: 2
    },
    {
      spotId: 1,
      userId: 4,
      review: 'Wonderful stay at Hobbiton. Had an amazing breakfast, second breakfast, elevenses, lunch, afternoon tea, dinner, and supper. That ring issue though - major party buzzkill.',
      stars: 3
    },
    {
      spotId: 2,
      userId: 1,
      review: 'The stairs room was a little small indeed. And the spiders...I do not miss those. Plus the excessive letter delivery was quite noisy. I need to check my mail preferences.',
      stars: 2
    },
    {
      spotId: 3,
      userId: 4,
      review: 'Hundred Acre Woods was nice, the honey pot was indeed empty. Got lost in the North Pole part though. Could use better signage.',
      stars: 3
    },
    {
      spotId: 4,
      userId: 2,
      review: 'Missed my stop at Diagon Alley, landed in Knockturn Alley instead. Scary place, great for thrill-seekers. Do not miss the trolley witchs pumpkin pasties!',
      stars: 3
    },
    {
      spotId: 5,
      userId: 3,
      review: '221B Baker Street was quite an experience. The violin at 3am was a unique wake-up call. The deductions, though? Spot on but intimidating.',
      stars: 3
    },
    {
      spotId: 6,
      userId: 4,
      review: 'Pallet Town was a tad too wild for my taste. The constant talk about evolution and gyms was confusing. Plus, the Pokemon in my bed was a shock.',
      stars: 2
    },
    {
      spotId: 7,
      userId: 1,
      review: 'The pineapple under the sea was an adventurous experience. SpongeBob\'s laughter can be a bit too much. Squidward\'s art lessons, however, were priceless.',
      stars: 3
    },
    {
      spotId: 8,
      userId: 3,
      review: 'Sesame Street was colorful. Accidentally joined the Count in counting bats at midnight. Who knew puppets could be night owls?',
      stars: 3
    },
    {
      spotId: 9,
      userId: 3,
      review: 'Pawnee was fun, but getting roped into a city council meeting was not on my itinerary. Leslie Knope sure loves her town. Waffles were A+ though.',
      stars: 4
    },
    {
      spotId: 10,
      userId: 2,
      review: '742 Evergreen Terrace was lively, if not chaotic. Homer did share his beer though. Watch out for the skateboarder!',
      stars: 3
    },
    {
      spotId: 11,
      userId: 4,
      review: 'Asgard was stunning, but the constant hammering got tiresome. Meeting a god was cool, but Thor has a loud voice. Earplugs recommended.',
      stars: 3
    },
    {
      spotId: 12,
      userId: 2,
      review: 'Second visit to Baker Street, was not disappointed. Deductions were faster this time. Be prepared for some violin music at 2 AM.',
      stars: 4
    },
    {
      spotId: 13,
      userId: 4,
      review: 'Atlantis was awe-inspiring. Aquaman didnt help with directions, got lost in the East Australian Current. Make sure to bring a waterproof map.',
      stars: 3
    },
    {
      spotId: 14,
      userId: 1,
      review: 'Mars was something else. Low gravity was fun but the dust gets everywhere. Also, not a fan of potatoes anymore.',
      stars: 3
    },
    {
      spotId: 15,
      userId: 2,
      review: 'Mount Olympus was heavenly. Literally. But Zeus does have a temper. Beautiful views, just dodge the lightning.',
      stars: 4
    },
    {
      spotId: 16,
      userId: 4,
      review: 'Narnia was fascinating. Politics aside, the wildlife is friendly. Could do without the wardrobe commute though.',
      stars: 3
    },
    {
      spotId: 17,
      userId: 1,
      review: 'Skull Island was a bit too wild. Kong was friendly once you get used to the size. Fantastic flora and fauna, minus the gigantic insects.',
      stars: 3
    },
    {
      spotId: 18,
      userId: 3,
      review: 'Crystal Lake was not as relaxing as I hoped. The local wildlife was... disturbing. On a positive note, the lake is beautiful.',
      stars: 1
    },
    {
      spotId: 19,
      userId: 1,
      review: 'Baker Street has its quirks but its charming. Watson is indeed a great host. Must love tea and have an intriguing backstory.',
      stars: 4
    },
    {
      spotId: 20,
      userId: 2,
      review: 'The Xavier Institute was astounding. Bit out of place without any superpowers. But hey, free chess lessons!',
      stars: 4
    },
    {
      spotId: 21,
      userId: 3,
      review: 'Fortress of Solitude was too icy and quiet. Good if you want to escape from everything, literally. Pack a heavy coat.',
      stars: 2
    },
    {
      spotId: 22,
      userId: 4,
      review: 'Star City was interesting. Green Arrow\'s speeches can be a bit much, and theres quite a bit of night-time vigilante action. Not a spot for light sleepers.',
      stars: 3
    },
    {
      spotId: 23,
      userId: 1,
      review: '17 Cherry Tree Lane had unexpected weather indoors. Mary Poppins sings quite a bit. A spoonful of sugar helps, they said. They lied.',
      stars: 3
    },
    {
      spotId: 24,
      userId: 2,
      review: '42 Wallaby Way was unforgettable. The tank fish do make a lot of plans. Bubbles was a great conversation partner though.',
      stars: 3
    },
    {
      spotId: 2,
      userId: 3,
      review: 'Stay at Dursley Residence was decent. Dudleys second bedroom is surprisingly spacious. Watch out for the mail though. Flying letters can be hazardous.',
      stars: 3
    },
    {
      spotId: 3,
      userId: 2,
      review: 'Poohs House is peaceful. Could not locate any honey though. Hes a bit of a chatterbox but great company for long walks in the woods.',
      stars: 4
    },
    {
      spotId: 4,
      userId: 1,
      review: 'Getting to Hogwarts Express was an adventure. Mind you, platform 9 ¾ doesnt show up on GPS. Beware of the wall!',
      stars: 2
    },
        {
          spotId: 1,
          userId: 2,
          review: 'Spent a week in Hobbiton and was quite taken by the rustic charm. Could do without the intense debates about second breakfast though. And the ring? Definitely too much drama.',
          stars: 3
        },
        {
          spotId: 2,
          userId: 1,
          review: 'I must say, the Dursley household left much to be desired. I felt a bit ostracized in the cupboard. Thankfully, I did enjoy Hedwigs company, such a lovely owl.',
          stars: 2
        },
        {
          spotId: 3,
          userId: 2,
          review: 'The Hundred Acre Woods has some lovely wildlife. However, I was ambushed by Tigger during one of his pouncing sessions. The honey situation could also be improved.',
          stars: 3
        },
        {
          spotId: 4,
          userId: 1,
          review: 'The Hogwarts Express journey was definitely magical. Nearly got flattened by a luggage trolley at platform 9¾ though. The pumpkin pasties were delicious!',
          stars: 4
        },
        {
          spotId: 5,
          userId: 2,
          review: 'The eccentricities of Baker Street were both fascinating and disturbing. Could do with less violin at 3 am. Holmes was good company though, if not a bit intense.',
          stars: 3
        },
        {
          spotId: 6,
          userId: 1,
          review: 'Pallet town has a charming rural atmosphere. The nightly Pokémon battles were a bit loud though. I swear Pikachu zapped my alarm clock, had to buy a new one.',
          stars: 3
        },
        {
          spotId: 7,
          userId: 2,
          review: 'Bikini Bottom was quite the experience, Squidward was a bit grumpy. The clarinet playing could definitely be improved. Krabby Patty was surprisingly good though.',
          stars: 3
        },
        {
          spotId: 8,
          userId: 1,
          review: 'Sesame Street was a bit louder than expected. Could do with less singing in the morning. Its perfect for learning numbers and letters though!',
          stars: 3
        },
        {
          spotId: 9,
          userId: 1,
          review: 'Pawnee was a rollercoaster. Leslie was full of energy and Rons steak was excellent. The mini horse was an unexpected plus.',
          stars: 4
        },
        {
          spotId: 10,
          userId: 2,
          review: 'The Simpsons residence was quite lively. Homer was welcoming, but their baby kept trying to hit me with a mallet. Managed to avoid it mostly, so 3 stars.',
          stars: 3
        },
        {
          spotId: 11,
          userId: 2,
          review: 'The Asgardian palace was impressive. Thor was a bit boisterous. Could do with less hammer throwing. The view of the cosmos was phenomenal.',
          stars: 4
        },
        {
          spotId: 12,
          userId: 2,
          review: '221B Baker Street was definitely an experience. Sherlock was engaging, but his deductions were too personal. The violin playing at night didnt help either.',
          stars: 3
        },
        {
          spotId: 13,
          userId: 1,
          review: 'Atlantis was stunning. Aquaman was less helpful than hoped. It was weird to see fish talk though. Still, 3 stars for the amazing underwater scenery.',
          stars: 3
        },
        {
          spotId: 14,
          userId: 1,
          review: 'Mars is red and barren, just like in the pictures. Met Elon Musk, which was cool. But really missed fresh air.',
          stars: 2
        },
        {
          spotId: 15,
          userId: 2,
          review: 'Mount Olympus was divine. Literally. The constant lightning was disruptive though. Nectar and ambrosia diet was challenging but the view of Earth from the mountaintop was incredible.',
          stars: 4
        },
        {
          spotId: 16,
          userId: 4,
          review: 'Narnia is an enchanting place, but politics and fur everywhere can be overwhelming. The wardrobe was a bit snug. Met a friendly faun though!',
          stars: 3
        },
        {
          spotId: 17,
          userId: 3,
          review: 'Skull Island was surprisingly serene when Kong was sleeping. Got a few good nature shots, but Kongs roar can be heard everywhere. You have been warned.',
          stars: 3
        },
        {
          spotId: 18,
          userId: 2,
          review: 'Stay at Crystal Lake was a bit too thrilling for my taste. The caretaker has some odd hobbies. 1 star for the nice lake view, at least during daylight.',
          stars: 1
        },
        {
          spotId: 19,
          userId: 1,
          review: 'Sherlock\'s flat at 221B Baker Street was again a mixed bag. Constant deductions and violin music were tiresome. Watsons company was a relief. Good biscuits.',
          stars: 3
        },
        {
          spotId: 20,
          userId: 4,
          review: 'The Xavier Institute is impressive, but unsettling. Its weird when people can read your thoughts. Facilities are top-notch though, and the Danger Room is worth seeing.',
          stars: 4
        },
        {
          spotId: 21,
          userId: 3,
          review: 'Krypton is not suitable for humans, it turns out. Had a hard time breathing and there was no sign of Superman. Not recommended unless youre Kryptonian.',
          stars: 1
        },
        {
          spotId: 22,
          userId: 3,
          review: 'Star City has its charms but the vigilante problem is quite real. Late-night archery noises were a bit much. Green Arrow could do with some public speaking lessons.',
          stars: 3
        },
        {
          spotId: 23,
          userId: 1,
          review: 'Staying at the Banks Residence was a whirlwind of odd events. The kids were well-behaved but the nanny kept flying around with her umbrella. Weather was unpredictable.',
          stars: 3
        },
        {
          spotId: 24,
          userId: 4,
          review: 'Stay at P. Shermans was interesting. Woke up to the sound of fish planning their escape. Fish tank was a nice feature but dentist drills can be unnerving.',
          stars: 3
        },
        {
          spotId: 2,
          userId: 3,
          review: 'Another stay at the Dursleys. Got an invitation to a magical school by an owl. Vernon wasnt pleased. Was glad to get out of the cupboard, at least.',
          stars: 3
        },

    {
      spotId: 1,
      userId: 4,
      review: 'Enjoyed the lush green landscapes of Hobbiton but got lost in the maze of Hobbit holes. Friendly locals but too many feasts. Spotted a peculiar ring, rather unsettling.',
      stars: 3
    },
    {
      spotId: 2,
      userId: 1,
      review: 'Stayed at the Dursleys. Dudley was rather rude but Harry was interesting company. Strange events kept happening, flying car at one point. Quite an adventure.',
      stars: 3
    },
    {
      spotId: 3,
      userId: 2,
      review: 'The Hundred Acre Wood had a certain charm to it. However, got chased by bees during a honey hunting expedition with Pooh. Beware of the Heffalumps!',
      stars: 3
    },
    {
      spotId: 4,
      userId: 1,
      review: 'Hogwarts Express was a unique experience. Had a bit of trouble with the wall at Platform 9¾. Loved the magic-themed snacks. Watch out for dementors!',
      stars: 4
    },
    {
      spotId: 5,
      userId: 3,
      review: 'Staying at 221B Baker Street was intriguing. Had an intense conversation with Sherlock about beekeeping. The violin serenades at midnight were a bit eerie though.',
      stars: 4
    },
    {
      spotId: 6,
      userId: 1,
      review: 'Stayed at Ash\'s House in Pallet Town. Had a lovely time except for when a wild Pikachu knocked out the power. Exciting but sleep-depriving.',
      stars: 3
    },
    {
      spotId: 7,
      userId: 4,
      review: 'Stayed at the pineapple under the sea. Interesting neighbors. The local cuisine, especially the Krabby Patty, was unique. Spongebob needs to learn to lower his volume.',
      stars: 3
    },
    {
      spotId: 8,
      userId: 2,
      review: 'Stayed at Sesame Street. Constantly being educated on numbers and alphabets. Met some friendly puppets. Big Bird needs to learn some nighttime quietness.',
      stars: 3
    },
    {
      spotId: 9,
      userId: 1,
      review: 'Stayed in Pawnee. Found the miniature horse quite charming. Got unexpectedly roped into a community project. Excellent waffles though.',
      stars: 3
    },
    {
      spotId: 10,
      userId: 3,
      review: 'Stayed in Springfield. Constant fear of nuclear meltdown was discomforting. Homer was great company though. Marge makes a mean pork chop.',
      stars: 3
    },
    {
      spotId: 11,
      userId: 4,
      review: 'Stayed in Asgard. Beautiful place, grand halls. Thors constant thunder summoning was a bit disruptive. Got to ride a Pegasus though.',
      stars: 4
    },
    {
      spotId: 12,
      userId: 2,
      review: 'Baker Street again. Intriguing, but Sherlocks deductions, while accurate, are a bit creepy. The mystery solving can get chaotic.',
      stars: 3
    },
    {
      spotId: 13,
      userId: 4,
      review: 'Stayed in Atlantis. Stunning architecture, friendly fishes. Confusing politics, Aquaman was no help. Managed to avoid the sharks.',
      stars: 4
    },
    {
      spotId: 14,
      userId: 2,
      review: 'Mars stay was fascinating but chilly. No atmosphere. Met Elon Musk which was interesting. Oxygen tanks a must.',
      stars: 3
    },
    {
      spotId: 15,
      userId: 3,
      review: 'Stayed in Olympus. Stunning view, divine food. But Zeus needs to chill with his lightning bolts. Great if you like living on the edge.',
      stars: 3
    },
    {
      spotId: 16,
      userId: 4,
      review: 'Narnia was a magical experience. However, Mr. Tumnus wouldnt stop talking about politics. Also, the constant winter-summer shifts were disorienting.',
      stars: 3
    },
    {
      spotId: 17,
      userId: 2,
      review: 'Stayed on Skull Island. Nature was incredible. But Kong kept roaring all night. Giant footprints were a tripping hazard.',
      stars: 3
    },
    {
      spotId: 18,
      userId: 3,
      review: 'Stayed at Camp Crystal Lake. Atmosphere was too intense. The caretaker needs to switch up his wardrobe. Not recommended for a relaxing holiday.',
      stars: 1
    },
    {
      spotId: 19,
      userId: 1,
      review: 'Baker Street once more. Watson is an excellent host. But Sherlock keeps deducing everything. Lost a game of chess in three moves.',
      stars: 3
    },
    {
      spotId: 20,
      userId: 2,
      review: 'Stayed at the Xavier Institute. Felt a little out of place amongst the mutants. Mansion is incredible though. Avoid telepathic chess at all costs.',
      stars: 3
    },
    {
      spotId: 21,
      userId: 3,
      review: 'Stayed in Krypton. Oxygen was non-existent. Couldnt handle the low gravity. Not recommended for non-Kryptonians.',
      stars: 1
    },
    {
      spotId: 22,
      userId: 4,
      review: 'Stayed in Star City. Night was noisy with vigilante fights. The green-hooded guy needs to work on his speeches. Good for adventure seekers though.',
      stars: 3
    },
    {
      spotId: 23,
      userId: 1,
      review: 'Stayed at the Banks\' residence. Strange weather changes, even stranger housekeeper. Got to fly a kite though. Worth it if you enjoy the unpredictable.',
      stars: 3
    },
    {
      spotId: 24,
      userId: 4,
      review: 'Stayed at P. Shermans. The fish tank was fascinating but the fish were plotting something. Also, watch out for seagulls.',
      stars: 3
    },
    {
      spotId: 25,
      userId: 2,
      review: 'Visited Wonkas Chocolate Factory. Saw a girl turn into a blueberry. The chocolate river was a delight. Oompa Loompas are good at giving moral life lessons.',
      stars: 4
    },
    {
      spotId: 26,
      userId: 3,
      review: 'Visited Rivendell. Tranquil and serene. But the Elven songs are a bit too melancholic. Fantastic view of the waterfall.',
      stars: 4
    },
    {
      spotId: 24,
      userId: 4,
      review: 'Stayed in the Fortress of Solitude. It was indeed, very solitary. Ice decor is not very warm or inviting. Could use a central heating system.',
      stars: 2
    }




   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

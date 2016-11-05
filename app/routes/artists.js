import Ember from 'ember';

let artists = [{
    name: 'Leonardo Da Vinci',
    nationality: 'Italian',
    movement: 'Italian Classical- High Renaissance',
    timePeriod: '16th c.',
    alive: false,
    description: "Italian polymath whose areas of interest included invention, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography. He has been variously called the father of palaeontology, ichnology, and architecture, and is widely considered one of the greatest painters of all time. Sometimes credited with the inventions of the parachute, helicopter and tank, he epitomised the Renaissance humanist ideal.",
    image: "https://uploads0.wikiart.org/images/leonardo-da-vinci.jpg!Portrait.jpg"
  }, {
    name: 'Wassily Kandinsky',
    nationality: 'Russian',
    movement: 'Expressionism, Abstract',
    timePeriod: 'Late 19th - Early/mid 20th century',
    alive: false,
    description: 'Russian painter and art theorist. He is credited with painting one of the first purely abstract works.',
    image: "https://s-media-cache-ak0.pinimg.com/originals/88/c3/20/88c320bf17d107d390b08f9d55ad5470.jpg"
  }, {
    name: 'John Cage',
    nationality: 'American',
    movement: 'Abstract Expressionism, Neo-Dada',
    timePeriod: '1970s+',
    alive: false,
    description: 'American composer, music theorist, writer, philosopher, and artist. A pioneer of indeterminacy in music, electroacoustic music, and non-standard use of musical instruments, Cage was one of the leading figures of the post-war avant-garde. Critics have lauded him as one of the most influential American composers of the 20th century.',
    image: "https://uploads4.wikiart.org/temp/44a9e08b-b2f5-4df3-b66f-a61435df6afc.jpg"
  }, {
    name: 'Jeff Koons',
    nationality: 'American',
    movement: 'Contemporary',
    timePeriod: '21st c.',
    alive: true,
    description: 'American artist known for working with popular culture subjects and his reproductions of banal objects—such as balloon animals produced in stainless steel with mirror-finish surfaces. Critics are sharply divided in their views of Koons. Some view his work as pioneering and of major art-historical importance. Others dismiss his work as kitsch, crass, and based on cynical self-merchandising. Koons has stated that there are no hidden meanings in his works, nor any critiques.',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Jeff_Koons_01.JPG/800px-Jeff_Koons_01.JPG"
  }, {
    name: 'J.M William Turner',
    nationality: 'English',
    movement: 'Romanticism',
    timePeriod: 'Late 18th - Mid 19th century',
    alive: false,
    description: 'English Romanticist landscape painter. Turner was considered a controversial figure in his day, but is now regarded as the artist who elevated landscape painting to an eminence rivalling history painting.',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Turner_selfportrait.jpg/800px-Turner_selfportrait.jpg"
  }];

export default Ember.Route.extend({
  model() {
    return artists;
  }
});

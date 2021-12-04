let words = document.getElementById("words");

function* def(i)
{
    while (true)
    {
        yield `<h3 id="${i}">#${i}: ${shuffled[Object.keys(shuffled)[i]]}<input id="${i}i"/></h3><br>`;
        i++;
    }
}

const wrd = {
  communal: "(adj) public; shared commonly by a group",
  throng: "(n) a large crowd gathered together",
  miscellaneous: "(adj) made up of a variety of different items; difficult to categorize",
  consensus: "(n) general agreement among a group of people",
  congregate: "(v) to gather; to come together",
  complement: "(n) something that harmonizes with something else; (v) to harmonize with or complete something else",
  accompany: "(v) to go someplace with another as a companion",
  assimilate: "(v) to absorb into the larger culture / group",
  accomplice: "(n) a person who helps another carry out a crime",
  affiliate: "(v) to join with a larger group; (n) a person / group joined with a larger group",
  puerile: "(adj) childish; immature",
  venerable: "(adj) worthy of great respect because of age / dignity",
  antiquated: "(adj) too old to be useful / suitable",
  Geriatrics: "(n) the medical study of the elderly and their diseases",
  centenarian: "(n) a person who is 100 years or older",
  infantile: "(adj) having to do with an infant or with that stage of life",
  longevity: "(long life / long time spent at job / activity",
  fledgling: "(adj) inexperienced; (n) an inexperienced person; (n) a bird that has just grown the feathers needed to fly",
  nascent: "(adj) just coming into existence; emerging",
  frail: "(adj) weak; delicate",
  exemplary: "(adj) worthy of imitation; admirable",
  rectify: "(v) to fix or correct; to set right",
  humanitarian: "(n) a person concerned with improving human welfare; (adj) intended to help others",
  altruism: "(n) unselfish concern and action for welfare of others",
  civility: "(n) courteous behavior; politeness",
  amicable: "(adj) friendly, showing goodwill",
  benign: "(adj) kind and gentle; harmless, not dangerous to health",
  indulge: "(v) to yield to desire or wishes",
  benefactor: "(n) a person who gives financial or other aid",
  bountiful: "(adj) abundant; plentiful",
  medieval: "(adj) referring to middle ages, the period in European history from (575 - 1450)",
  belated: "(adj) done or sent late",
  subsequently: "(adv) later on; on a later date",
  respite: "(n) a short time of rest / relief",
  simultaneous: "(adj) happening; existing, or done at the same time",
  Renaissance: "(n) a rebirth / revival; historical European period from 1400 - 1600 REMEMBER CAPS IF IT'S USED AS THE ACTUAL TIME PERIOD",
  conception: "(n) beginning of an idea; a general idea / understanding",
  duration: "(n) period of time during which something exists / persists",
  incessantly: "(adv) constantly; continually, without interruption",
  expires: "(v) to come to an end; to die",
  authoritarian: "(adj) requiring obedience to a single ruler / group",
  anarchy: "(n) a lack of government; disorder and confusion",
  tyrant: "(n) a ruler who exercises power in a cruel, excessive manner",
  dominion: "(n) control; the territory one controls",
  Spartan: "(adj) self-disciplened; simple; lacking in comfort",
  delegate: "(n) a representative chosen to speak / act for others; (v) to give out power / responsibility",
  conservative: "(adj) favoring traditional values and institutions; (v) a person favoring traditional values and institutions",
  liberal: "(adj) favoring social progress and civil liberties; (n) a person who favors social progress and liberties",
  impeach: "(v) to accuse a public official of unacceptable conduct",
  inaugurate: "(v) to install in office by ceremony"
}

function knuthShuffle(arr) {
    var rand, temp, i;
 
    for (i = arr.length - 1; i > 0; i -= 1) {
        rand = Math.floor((i + 1) * Math.random());//get random between zero and i (inclusive)
        temp = arr[rand];//swap i and the zero-indexed number
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


let shuffled = Object.fromEntries(knuthShuffle(Object.entries(wrd)));

let j = 0;

let gen = def(0);

for (; j < Object.keys(wrd).length; j++) {
    words.innerHTML += gen.next().value;
}

document.getElementById("submit").onclick = () =>
{
    for (let i = 0; i < j; i++)
    { 
        if (Object.keys(shuffled)[i].toLowerCase() == document.getElementById(i + "i").value)
        {
            alert(`${document.getElementById(i + "i").value} is correct for ${shuffled[Object.keys(shuffled)[i].toLowerCase()]}`)
        } else
        {
            alert(`${Object.keys(shuffled)[i].toLowerCase()} means ${shuffled[Object.keys(shuffled)[i]]}, #${i}, you wrote ${document.getElementById(i+"i").value}`);
        }
    }
}
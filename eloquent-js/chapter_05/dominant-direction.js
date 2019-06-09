require('../scripts.js');

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupDirection) {
  let counts = [];
  for (let item of items) {
    let direction = groupDirection(item);
    let known = counts.findIndex(c => c.direction == direction);
    if (known == -1) {
      counts.push({direction, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

const dominantDirection = (text) => {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({direction}) => direction != "none");
  
  return scripts.sort((a, b) => {
    return b.count - a.count;
  })[0]["direction"];
};

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection('ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡ,Hey, مساء الخير'))
// → ttb
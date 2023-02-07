import { writeFile } from "fs/promises";

// inclusive min, exclusive max
function randomRange(min: number, max: number, not: number = -1): number {
  let result = Math.floor(Math.random() * (max - min)) + min;
  if (result === not) return randomRange(min, max, not);
  return result;
}

function randomChoice<T>(choices: T[]): T {
  return choices[randomRange(0, choices.length)];
}

function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomRange(0, i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

interface Intersection {
  id: number;
  stoplightTime: number;
}

const intersections: Intersection[] = [];
for (let i = 0; i < 100; i++) {
  intersections.push({
    id: i,
    stoplightTime: randomChoice([0, 30, 30, 60, 60, 120]),
  });
}

interface Street {
  id: number;
  from: number;
  to: number;
  distance: number;
}

interface SpeedData {
  streetId: number;
  speed: number;
}

const streets: Street[] = [];
const speedData: SpeedData[] = [];

for (let i = 0; i < 1000; i++) {
  streets.push({
    id: i,
    from: randomRange(0, 100),
    to: randomRange(0, 100, i),
    distance: randomRange(1, 100),
  });

  const averageSpeed = randomRange(20, 70);

  for (let j = 0; j < 40; j++) {
    speedData.push({
      streetId: i,
      speed: averageSpeed + randomRange(-5, 5),
    });
  }
}

shuffle(intersections);
shuffle(streets);
shuffle(speedData);

const output = {
  intersections,
  streets,
  speedData,
};

writeFile("data.json", JSON.stringify(output, null, 2));

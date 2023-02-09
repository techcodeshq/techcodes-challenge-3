# TechCodes Challenge 3!

>❗ Your data is in the `data.json` file!

**OBJECTIVE**: Find the path (as a list of nodes) and the time it takes from intersection 99 to intersection 0 which takes the **least amount of time**.
- Intersections are marked with an ID. Streets have an ID too, they connect two intersections (with the `from` and `to` field being the intersection's IDs). Speed data (see below) has a associated street ID as well as a speed.
> ℹ️ It might be useful to organize the raw data into a HashMap or dictionary first. Why isn't the data created that way? idk

- You have a bunch of data on the length of the streets and the speeds of the cars traveling on it. Consider the "speed" of the street to be the average of the cars speeds.
> 💡 Recording the average speed on cars is how Google Maps and other services measure the traffic level on roads.

- At each intersection there is a fixed amount of time you'll have to wait. This is the `stoplightTime` field.

**NOTE**: The times have no units! Don't worry about the units! I made a dumb mistake!!!!

### Schema

```typescript
interface Intersection {
    id: number;
    stoplightTime: number;
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

interface Data {
    intersections: Intersection[];
    streets: Street[];
    speedData: SpeedData[];
}
```

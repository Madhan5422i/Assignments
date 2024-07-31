const array = ["a", "b", "c", "d", "e"];
const objects = [];

for (let i = 0; i < array.length; i++) {
    const obj = {
        [i]: array[i]
    };
    objects.push(obj);
}

console.log(objects);
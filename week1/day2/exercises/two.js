var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

var b = {};

for (var key in a) {
    b[a[key]] = key;
}

console.log("Contents of a = " + a);
printContentsof(a);

console.log("Contents of b = " + b);
printContentsof(b);

function printContentsof(obj) {
    for (var key in obj) {
        console.log("key: " + key + " - " + "Value: " + obj[key]);
    }
}

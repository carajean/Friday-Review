function recursiveMap(arr, cb) {
    if (arr.length === 0) return [];


    if (Array.isArray(arr[0])) {
        return recursiveMap(arr[0], cb).concat(recursiveMap(arr.slice(1), cb));
    }

    let value = cb(arr[0]);

    return [value].concat(recursiveMap(arr.slice(1), cb));
}

/* Stole this code from here:
 * http://jsfiddle.net/6Dgbu/
 * https://stackoverflow.com/questions/8175093/simple-function-to-sort-an-array-of-objects/8175221
 */
export const sorting = (json_object, key_to_sort_by) => {
    function sortByKey(a, b) {
        var x = a[key_to_sort_by];
        var y = b[key_to_sort_by];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
    return json_object.sort(sortByKey);
}
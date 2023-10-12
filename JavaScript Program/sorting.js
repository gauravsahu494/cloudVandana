function selectionSortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }

    return arr;
}

const numbers = [5, 1, 3, 8, 2, 7];
const descendingSorted = selectionSortDescending(numbers);

console.log("Sorted array in descending order:", descendingSorted);

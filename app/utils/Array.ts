export function mergeArrays(array1: any, array2: any, id: string) {
    const mergedArray: any = [];
    const ids = new Set();

    // Thêm các phần tử từ array1 trước
    array1.forEach((item:any) => {
        if (!ids.has(item[id])) {
            mergedArray.push(item);
            ids.add(item[id]);
        }
    });

    // Thêm các phần tử từ array2, bỏ qua phần tử có id đã xuất hiện trong array1
    array2.forEach((item:any) => {
        if (!ids.has(item[id])) {
            mergedArray.push(item);
            ids.add(item[id]);
        }
    });

    return mergedArray;
}

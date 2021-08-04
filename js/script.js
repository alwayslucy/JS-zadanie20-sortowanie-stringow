const sortString = (arr) => {

    const compareLength = (a, b) => {
        return a.length - b.length
    }

    arr.sort(compareLength);

    return arr;
}

console.log(sortString(['dlugieslowo', 'string', 'ala', 'pi', 'koty', 'blablabla']));
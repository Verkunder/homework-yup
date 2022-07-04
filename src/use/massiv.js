const a = [1, 2, 3]
console.log(Array.isArray(a))
console.log('________________')
const b = [4, 5, 6, ...a]
console.log(b)
console.log('________________')
const c = [1, 2, 'apple']
const d = [...c, 'pineapple', 'orange', 'apple']
d.forEach((item) => {
    typeof(item) === 'string' ? console.log('Yes') : console.log('No')
})
console.log('________________')
const i = [{}, 1, 2, 'apple']
i.forEach((item) => {
    typeof(item) === 'number' ? console.log('Yes') : console.log('No')
})
console.log('________________')
const f = Array.from({length: 10}, () => 'orange')
console.log(f)
console.log('________________')
const g = [{type: 'content', id: 23}, {type: 'decor', id: 43}, {type: 'content', id: 13}]
const h = g.filter(({type}) => type === 'content')
console.log(h)
const j = g.filter(({id}) => id === 43)
console.log(j)
console.log(g.findIndex(({id}) => id === 43))
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
const k = g.map(({type}) => type)
console.log(unique(k))
const l = g.map(({id}) => id)
console.log(l)
const m = [[1, 2, [3, 5, 6]], [2, [6]], 0]
/*console.log(m.flatMap((item) => item.flat ? item.flat() : item))*/
console.log(m.flat(Infinity))
/*console.log(m.join().split(','))*/
const n = [3, 4, 14, 1, 2, 34, 7]
console.log(n.sort((a, b) => {
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
    return 0
}))
const bukvi = ['apple', 'orange']
console.log(Array.from(bukvi.join('')))
console.log(['pr', 't', 'type'].join(''))
console.log([10, 100].reverse())
console.log(['discount', 'select', 'active'].filter(item => item === 'discount'))
const objec = ['discount', 'select', 'active']
const result = objec.reduce((o, k, i) => ({...o, [k]: objec[i]}), {})
console.log(result)
const fourteen = [1, 2, 3, "hello world", 4.12, true]
console.log(fourteen.slice(0, 3))
console.log(fourteen)
fourteen.splice(1, 2, 'discount', 'select', 'active')
console.log(fourteen)

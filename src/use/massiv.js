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
const k = []


console.log(k)

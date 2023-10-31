import url from 'url'

const parseData=url.parse('https://www.example.com:8080/path?key=value#hash');
// console.log(parseData)
// console.log(parseData.path)
// console.log(parseData.port)
// console.log(parseData.host)

const obj={
    path: '/path?key=ajit',
    port:8080,
    host:"www.example.com:8080"
}
const furl=url.format(obj)
console.log(url.parse(furl))
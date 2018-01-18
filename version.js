const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const dist = `${__dirname}/build/`
const fileName = 'package.json'

//1.读取package.json配置文件 2.版本迭代+1 3.写入package.json
const readFile = (path, fileName) => {
  let promise = new Promise((resolve, reject) => {
    let text = fs.readFile(`${path}/${fileName}`, {
      flag: 'r+',
      encoding: 'utf8'
    }, function (err, data) {
      if (err) {
        console.error(err);
        reject("")
      }
      resolve(data)
    });
  })
  return promise
}
//2.将版本迭代加1
const plusVersion = (json) => {
  // console.log('plusVersion', json)
  let {version} = json
  let versions = version
    .split('.')
    .map(_ => Number(_))
  let lastIndex = versions.length > 0
    ? versions.length - 1
    : 0
  versions.splice(lastIndex, 1, versions[lastIndex] + 1)
  json['version'] = versions.join('.')
  return beautify(JSON.stringify(json))
}
const writeFile = (path, fileName, text) => {
  var tdata = new Buffer(text)
  fs.writeFile(`${path}/${fileName}`, tdata, {
    indent_size: 2
  },() => {});
}
readFile(dist, fileName).then((data) => plusVersion(JSON.parse(data))).then((text) => writeFile(dist, fileName, text))
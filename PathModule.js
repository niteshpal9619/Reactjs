const path=require('path')

//console.log(path.sep)

//const filepath=path.join('/content','subfolder','test.txt')

//console.log(path.basename(filepath))

const abs=path.resolve(__dirname,'/content','subfolder','test.txt')
console.log(abs)

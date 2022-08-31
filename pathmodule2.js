const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./Content/SubFolder/first.txt','utf8')

const second=readFileSync('./Content/subFolder/Second.txt','utf8')

// console.log(first)
// console.log(second)

writeFileSync(
    './content/testing.txt',
    'this is the test file'
)
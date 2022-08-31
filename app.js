// const names=require('./Mdule1')
// const sysHello=require('./Module2')
// const data=require('./alternetway')

// const calladd=require('./mind-graned')

// // sysHello(names.name1)
// // sysHello(names.name2)
// // sysHello(names.name3)

// console.log(calladd)

// //console.log(data.items)


const os=require('os')
//info about current user

const user=os.userInfo();
console.log(user)

//method returns the system uptime in seconds.

//console.log(`System time is ${os.uptime()}`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}
// for object we generally use for-in loop
for (const key in myObj) {
        console.log(key,myObj[key]);
    }

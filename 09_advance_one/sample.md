```javascript
const requestURL = 'https://api.github.com/users/ESHUshri202'
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            console.log(xhr.readyState)
            if(xhr.readyState === 4){
                console.log(this.responseText)
            }
        }
        xhr.open('GET', requestURL)
        xhr.send()
```
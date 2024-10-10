let button =document.querySelector('button');
button.addEventListener('click', function(){
        const table = parseFloat(document.getElementById('table').value);
        // tableform.textContent =`Your Grad is A ${table}`
        for(let count=1; count<=10; count++){
              if (count ==1 ) {
                  tableform1.textContent =`${table} x = ${table * 1}`
              }else if (count == 2) {
                    tableform2.textContent =`${table} x = ${table * 2}`
              }else if (count == 3) {
                    tableform3.textContent =`${table} x = ${table * 3}`
              }else if (count == 4) {
                    tableform4.textContent =`${table} x = ${table * 4}`
              }else if (count == 5) {
                    tableform5.textContent =`${table} x = ${table * 5}`
              }else if (count == 6) {
                    tableform6.textContent =`${table} x = ${table * 6}`
              }else if (count == 7) {
                    tableform7.textContent =`${table} x = ${table * 7}`
              }else if (count == 8) {
                    tableform8.textContent =`${table} x = ${table * 8}`
              }else if (count == 9) {
                    tableform9.textContent =`${table} x = ${table * 9}`
              }else if (count == 10) {
                    tableform0.textContent =`${table} x = ${table * 10}`
              }
              
        }
        
                 
        
})
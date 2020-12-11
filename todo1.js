

        const getList=async ()=>{
            try{
                const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
                const lists=res.data;
                console.log(lists);
                let listcontent='';
                listcontent+=`<thead class="thead-dark"><tr class="table-item"><th scope="col">Userid</th><th scope="col">Id</th><th scope="col">Title</th> <th scope="col">Completed</th></tr></thead>`//<tbody><tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr></tbody>`
                lists.forEach((el,index)=>{
                    var i=0;
                   // for( i=0;i<4;i++){
                    // listcontent+=`<tbody><tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr></tbody>`
                      listcontent+=`<tbody><tr><td>${el.userId}</td><td>${el.id}</td><td> ${el.title}</td><td><input  type="checkbox" id="myCheck" class="checkbox" ${el.completed?'disabled':""}/></td><td class="checkbox" ${el.completed?'disabled':''} ${index%2?'table-item-info':'table-item-success'}"></tr></tbody>`
                       // listcontent+=`<<tr><td class="table-item ${el.completed?'disabledList':''} ${index%2?'table-item-info':'table-item-success'}"><label for=""> ${el.userId}</label> <label for=""> ${el.id}</label><label for=""> ${el.title}</label><input type="checkbox" class="checkbox" ${el.completed?' checked':''}/>  </td></tr>`
                      
                  //  }
                     listcontent+=`<br>`
                    });
                $('#ranking-table').html(listcontent);
                if(checkedCount){
                    checkedCount=0;
                }
        
            }
            catch(e){
                console.log('failed to fetch data',e);
            }
        }
        
        // $('#getList').on('click',(e)=>{
        //     e.preventDefault();
        //     getList();
        // });
        
        
        let checkedCount=0;
        
        const alertPromise= ()=>{
             return new Promise((resolve,reject)=>{
        
                 
                if(checkedCount===5){
                    resolve(checkedCount)
                }
                else{
                    reject('count not equal to 5');
                }
            });
        }
        
        const promiseCall=()=>{
            alertPromise().then((data)=>{
                alert(`Congratulations on completing ${data} activities today`);
            })
            .catch((err)=>{
                console.log('promise rejected');
            })
        }
        
        
        getList();
        
        $('#ranking-table').on('change','.checkbox',function(e){
            if($(this).prop('checked')===true){
                console.log('checked');
                checkedCount++; 
                $(this).parent().addClass('active');
            }
            else{
                checkedCount--;
                console.log('unchecked');
                $(this).parent().removeClass('active');
            }
            
            promiseCall();
        
        
        });
 //const rankingsBody =document.querySelector("#ranking-table > tbody");
// function ajax(){
//     var xhttp =new XMLHttpRequest();
//     xhttp.open("get","https://jsonplaceholder.typicode.com/todos",true);
 
     
//   xhttp.onreadystatechange = function(){
//     // if(this.readyState==4&&this.status==200){
//     //  try{
//         var response = JSON.parse(this.responseText);
//        // populateRanking(response);
//       generate_table(response);
//      //    }
//      //  catch (e){
//         // console.warn("coudn't load");
//        //   }
//        //  }
//        } 
//       xhttp.send();
         
//         }

        // function populateRanking(response){
        //     console.log(response);
        //      while(rankingsBody.firstChild){
        //       rankingsBody.removeChild(rankingsBody.firstChild);
        //      } 
        //     // Object.values(response);
        //      console.log(response);
        //      response.forEach(row => {
        //      // Object.values(response);
        //       const tr =document.createElement("tr");
        //         row.forEach(cell => {
        //            const td =document.createElement("td");
        //            td.textContent=cell;
        //            tr.appendChild(td);
        //            })
        //       rankingsBody.appendChild(tr);
        //     })   
        //   }
        // function disable() {
        //     document.getElementById("myCheck").disabled = true;
        // }       


// function generate_table(response) {
//     // get the reference for the body
//     var body = document.getElementsByTagName("body")[0];
//   console.log(response); 
//     // creates a <table> element and a <tbody> element
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
//     for(var i=0;i<response.length;i++){
//         for(var j=0;j<4;j++){
//     // creating all cells
//     //for (var i = 0; i < 2; i++) {
//       // creates a table row
//       var row = document.createElement("tr");
//       for(var j=0;j<4;j++){
//      // for (var j = 0; j < 2; j++) {
//         // Create a <td> element and a text node, make the text
//         // node the contents of the <td>, and put the <td> at
//         // the end of the table row
//         var cell = document.createElement("td");
//        // var cellText = document.createTextNode("cell in row "+i+", column "+j);
//        var cellText=cell.textContent;
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       // add the row to the end of the table body
//       tblBody.appendChild(row);
//     }
  
//     // put the <tbody> in the <table>
//     tbl.appendChild(tblBody);
//     // appends <table> into <body>
//     body.appendChild(tbl);
//     // sets the border attribute of tbl to 2;
//     //tbl.setAttribute("border", "2");
//     //document.addEventListener("DOMContentLoaded",() => {ajax();}); 
//   }
// }
// ${el.completed?' checked':''}

const htmlList = (node, {loops,firstNo,secondNo}) => {

    const arrStart = () => [...Array(loops).keys()].map(elem => elem+1)

    let arr = arrStart()
    
    console.log('loops', loops)
    console.log('arr', arr)

    let html = '<ul  class="list-group" id="idHtmlList" >'
    
    for (let i = 0; i<arr.length; i++){
        html +='<li class="list-group-item">'
        if (arr[i]%firstNo==0 && arr[i]%secondNo==0){
            html += 'bish-bosh'          
        }
        else if(arr[i]%firstNo==0){
            html += 'bish'          
        }
        else if(arr[i]%secondNo==0){
            html += 'bosh'          
        }
        else{
            html += `${arr[i]}`          
        }  
        html += '</li>'      
    }
    //node.innerHTML += html + '</ul>'  //bugg i js
    
    const prevHtmlList = document.querySelector('#idHtmlList')

    prevHtmlList && prevHtmlList.remove() 

    node.insertAdjacentHTML('beforeend', html + '</ul>')

}

export {htmlList}
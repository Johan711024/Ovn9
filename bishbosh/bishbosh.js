import { formComponent } from "./components/formComponent.js"
import { htmlList } from "./components/htmlList.js"
//import { buggtest } from "./components/buggtest.js"

function bishBosh(node) 
{
    const localState={
        loops : 25,
        firstNo: 3,
        secondNo: 4,
    }

    const updateState = async (nodeForm) => {
    
        localState.loops=+nodeForm['loops'].value
        localState.firstNo= +nodeForm['firstNo'].value
        localState.secondNo =+nodeForm['secondNo'].value
        console.log('updateState', localState)
    }
    
    const updateList = (nodeForm) => {
        updateState(nodeForm).then(result =>console.log('synkroniserat localstate',localState)) 
        htmlList(node, localState)
    }

    formComponent(node, localState, updateList)
    //buggtest(node, localState)
    
    htmlList(node,localState)  
  
}


export {bishBosh}
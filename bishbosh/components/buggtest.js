const buggtest = (node, {loops,firstNo,secondNo}) => {

    let i = 'testar bugg';
    //node.innerHTML = i   //bugg i DOM o js. Sabbar föregående eventlisteners!!!

    node.insertAdjacentHTML('beforeend', i)  //funkar istället!!

}

export {buggtest}
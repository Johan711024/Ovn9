
const formComponent = (node, {loops,firstNo,secondNo}, updateFunc) => {
    
    node.innerHTML += 
     `
    <form id='idNodeForm'>
    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="loops" placeholder="Endast heltal" value="${loops}">
    <label for="loops">Antal repetitioner</label>
    </div>
    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="firstNo" placeholder="Endast heltal" value="${firstNo}">
    <label for="firstNo">Bish värde</label>
    </div>
    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="secondNo" placeholder="Endast heltal" value="${secondNo}">
    <label for="secondNo">Bosh värde</label>
    </div>
    </form>
    
    `
    const nodeForm = document.querySelector('#idNodeForm')

    nodeForm.addEventListener(('keydown'), e => Number.isNaN(+e.key) && e.key!=='Tab' && e.key!=='Backspace' && e.preventDefault())
    nodeForm.addEventListener(('keyup'), e => updateFunc(nodeForm))
}

export {formComponent}
function reorderButtons(){
    //define the clock way path - how it needs to be updated.
    const auxSeq = [1,2,3,6,9,8,7,4];
    let previousValue;

    for (let i = 0; i < auxSeq.length; i++) {
        if (i===0){
            previousValue = document.getElementById('btn'+auxSeq[i]).innerText
            document.getElementById('btn'+auxSeq[i]).innerText = document.getElementById('btn'+auxSeq[auxSeq.length-1]).innerText;    
        }else{
            const currentValue = document.getElementById('btn'+auxSeq[i]).innerText
            document.getElementById('btn'+auxSeq[i]).innerText = previousValue;
            previousValue = currentValue;
        }
    }
}
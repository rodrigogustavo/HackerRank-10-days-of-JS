function incrementLabel(){
    const button = document.getElementById('btn');
    const newLabelValue = button.value++;
    button.value(newLabelValue);
}
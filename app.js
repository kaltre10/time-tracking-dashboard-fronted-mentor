
window.addEventListener('load', () => {
    getData();
    document.getElementById('daily').addEventListener('click', () => { 
        getData('daily');
        toogleAction('daily');
    })
    document.getElementById('weekly').addEventListener('click', () => {
        getData('weekly');
        toogleAction('weekly');
    });
    document.getElementById('monthly').addEventListener('click', () => {
        getData('monthly');
        toogleAction('monthly');
    });
});

function getData(option = 'daily') {
    fetch('data.json')
        .then(res => res.json())
        .then(res => {
        res.forEach(element => addData(element, option));
    }); 
};

function addData(data, option){
    document.getElementById(data.title).innerHTML = `
        <p class='title-text-content'>${data.timeframes[option].current}hrs</p>
        <p class="sub-text">Last ${option} - ${data.timeframes[option].previous}hrs</p>
    `;
}

function toogleAction(id){
    document.querySelector('.active').classList.remove('active');
    document.getElementById(id).classList.add('active');
}
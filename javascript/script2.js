const product = [
    {id:1 ,img:'../images/cookie1.jpg', title:'شیرینی گردویی' , desc:'330000 تومان'},
    {id:2 ,img:'../images/cookie2.jpg', title:'دنیش آجیلی' , desc:'270000 تومان'},
    {id:3 ,img:'../images/cookie3.jpg', title:'دنیش نارگیلی' , desc:'315000 تومان'},
    {id:4 ,img:'../images/cookie4.jpg', title:'شیرینی دانمارکی مدادی' , desc:'189000 تومان'},
    {id:5 ,img:'../images/cookie5.jpg', title:'کیک اتریشی' , desc:'280000 تومان'},
    {id:6 ,img:'../images/cookie6.jpg', title:'کیک هویج برشی' , desc:'280000 تومان'},
    {id:7 ,img:'../images/cookie7.jpg', title:'کراگز گردویی' , desc:'245000 تومان'},
    {id:8 ,img:'../images/cookie8.jpg', title:'شیرینی لوکوم' , desc:'420000 تومان'},
]
product.map(item => {
    const col = document.createElement('div');
    col.classList.add('col-lg-3');
    col.innerHTML = `
            <div class="card border border-1 bg-white rounded-3 mt-4">
                <img src="${item.img}" class="card-img-top img-fluid">
                <span class="badges translate-middle badge rounded-5">+</span>
                <div class="card-body">
                    <p class="card-text d-flex justify-content-center align-items-center mt-2 text-black">${item.title}</p>
                    <h6 class="d-flex justify-content-center align-items-center mt-2 text-secondary">${item.desc}</h6>
                </div>
            </div>`
    
    const row = document.getElementById('row1');
    row.appendChild(col);

})
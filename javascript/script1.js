const products = [
    {id:1 ,img:'../images/cake1.jpg', title:'کیک بدون مغز شکلاتی' , desc:'374000 تومان'},
    {id:2 ,img:'../images/cake2.jpg', title:'کیک تمام خامه' , desc:'577000 تومان'},
    {id:3 ,img:'../images/cake3.jpg', title:'کیک تمام خامه' , desc:'577000 تومان'},
    {id:4 ,img:'../images/cake4.jpg', title:'کیک تمام فوندانت' , desc:'840000 تومان'},
    {id:5 ,img:'../images/cake5.jpg', title:'کیک تمام فوندانت' , desc:'840000 تومان'},
    {id:6 ,img:'../images/cake6.jpg', title:'کیک دخترانه' , desc:'120000 تومان'},
    {id:7 ,img:'../images/cake7.jpg', title:'کیک یخچتای رودولت' , desc:'374000 تومان'},
    {id:8 ,img:'../images/cake8.jpg', title:'کیک خامه تصویری' , desc:'796000 تومان'},
    {id:9 ,img:'../images/cake9.jpg', title:'کیک دخترانه سفارشی' , desc:'126000 تومان'},
    {id:10 ,img:'../images/cake10.jpg', title:'کیک عروسی و نامزدی' , desc:'522000 تومان'},
    {id:11 ,img:'../images/cake11.jpg', title:'کیک یخچالی دو نفره' , desc:'268000 تومان'},
    {id:12 ,img:'../images/cake12.jpg', title:'کیک یخچالی دو نفره' , desc:'300000 تومان'},
    {id:13 ,img:'../images/cake13.jpg', title:'کیک بزرگسال تمام خامه' , desc:'620000 تومان'},
    {id:14 ,img:'../images/cake14.jpg', title:'کیک وانیلی' , desc:'770000 تومان'},
    {id:15 ,img:'../images/cake15.jpg', title:'کیک گردویی و موزی' , desc:'770000 تومان'},
]
products.map(item => {
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
    
    const row = document.getElementById('row');
    row.appendChild(col);

})
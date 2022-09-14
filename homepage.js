let darkmode=()=>{
    document.body.classList.toggle('my_dark')
}
let loadcoupon=()=>{
    document.getElementById('coupon1').style.display='block';
    document.getElementById('topnav').style.opacity='.4'
    document.getElementById('container3').style.opacity='.4'
    document.getElementById('top3').style.opacity='.4'
}
let closecoupon=()=>{
    document.getElementById('coupon1').style.display='none';
    document.getElementById('topnav').style.opacity='1'
    document.getElementById('container3').style.opacity='1'
    document.getElementById('top3').style.opacity='1'

}
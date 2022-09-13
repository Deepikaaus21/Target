function loadcoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('search').style.opacity="0.5%";
}

const closecoupon= () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('search').style.opacity="1";

}
//adding memory cost calculation
function totalPrice() {
    let macPrice = document.getElementById('mac-cost').innerText;
    let memoryPrice = document.getElementById('memory-cost').innerText;
    let ssdMediumPrice = document.getElementById('storage-cost').innerText;
    let withDeliveryCost = document.getElementById('deliver-cost').innerText;
    let subTotal = parseInt(macPrice) + parseInt(memoryPrice) + parseInt(ssdMediumPrice) + parseInt(withDeliveryCost);
    let totalPriceText = document.getElementById('total-cost');
    totalPriceText.innerText = subTotal;
}
function updateTotal(amount) {
    //set memory cost
    const memoryPrice = document.getElementById('memory-cost');
    const memoryPriceTotal = parseInt(memoryPrice.innerText);
    const extraMemoryPrice = amount;
    memoryPrice.innerText = extraMemoryPrice;

    // Update total price
    totalPrice();
}
//8gb memory cost
document.getElementById('eight-gb-memory').addEventListener('click', function () {
    updateTotal(0);
})
//16gb memory cost
document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    updateTotal(180);
});
//adding storage cost calculation
function updateSsdTotal(ssdamount) {
    //set ssd cost
    const ssdMediumPrice = document.getElementById('storage-cost');
    const ssdMediumPriceTotal = ssdMediumPrice.innerText;
    const extraMediumSsdPrice = ssdamount;
    ssdMediumPrice.innerText = extraMediumSsdPrice;

    // Update total price
    totalPrice();
}
document.getElementById('small-ssd').addEventListener('click', function () {
    updateSsdTotal(0);
})
document.getElementById('medium-ssd').addEventListener('click', function () {
    updateSsdTotal(100);
})
document.getElementById('big-ssd').addEventListener('click', function () {
    updateSsdTotal(180);
})
function updateDeliverTotal(deliveryAmount) {
    //set delivery cost
    const withDeliveryCost = document.getElementById('deliver-cost');
    const withDeliveryCostTotal = parseInt(withDeliveryCost.innerText);
    const extraDeliveryCost = deliveryAmount;
    withDeliveryCost.innerText = extraDeliveryCost;

    // Update total price
    totalPrice();
}
document.getElementById('delivery-without-cost').addEventListener('click', function () {
    updateDeliverTotal(0);
})
document.getElementById('delivery-with-cost').addEventListener('click', function () {
    updateDeliverTotal(20);
})
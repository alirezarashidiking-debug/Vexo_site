/* VEXO store module. Loaded by index.html. */
function openCheckout(name,gold,price){selectedOrder={name,gold,price};document.getElementById('modalTitle').textContent='Review your order';document.getElementById('modalDescription').textContent='Review your selection. This prototype does not process payments.';document.getElementById('orderName').textContent=name;document.getElementById('orderGold').textContent=gold+' Gold';document.getElementById('orderPrice').textContent='$'+price.toFixed(2);document.getElementById('paymentStatus').classList.remove('show');document.getElementById('checkoutModal').classList.add('open');}

function openItem(name,gold){openCheckout(name,gold,gold*4);document.getElementById('modalDescription').textContent='Digital item preview. Live availability and purchase fulfillment are not connected.';}

function closeCheckout(){document.getElementById('checkoutModal').classList.remove('open');}

function chooseNetwork(el){document.querySelectorAll('.network').forEach(n=>n.classList.remove('selected'));el.classList.add('selected');}

function showDemoStatus(){document.getElementById('paymentStatus').classList.add('show');}

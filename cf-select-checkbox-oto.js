<script>
/**************************
* Copyright 2019 Conversion Elevation, All Rights Reserved
* Do not share, or distribute this code without author's consent.
* This copyright notice must remain in place whenever using
* this code - DO NOT REMOVE
* Author: Mr Umair Gujjar
* Website: https://conversionelevation.com
**************************/

$(function () {
$('[href="#yes-link"]').off();
$('[data-title*="cf-prod-grp"]').on('click', function () {
$('[data-title*="checkboxclk-"]').each(function () {
if($(this).children('input').prop('checked')){
var nameParts = $(this).attr('data-title').split('-');
var prodId = nameParts[nameParts.length - 1];
var buttonTitle = $('#tmp_button-66137-164-106').attr('data-title');
$('#tmp_button-66137-164-106').attr('data-title',buttonTitle+'-'+prodId);
}
});
$('.otoloading').show();
setTimeout(function () {
$('.otoloading').hide();
}, 10000);
var titleParts = $(this).attr('data-title').split(' ');
$.each(titleParts, function (index, value) {
if (value.toLowerCase().indexOf('cf-prod-grp') != -1) {
var prods = value.replace('cf-prod-grp','').split('-');
var $tmpClone = $('[data-cf-product-template="true"]').clone();
$tmpClone.find('input[name="purchase[product_id]"]').remove();
$('[data-cf-product-template="true"]').remove();
$.each(prods, function (index, value) {
var $currProd = $tmpClone.clone();
$currProd.find('[name="purchase[product_ids][]"]').val(value).attr('checked',true);
$('#cfAR').append($currProd);
});
}
});
});
});
</script>

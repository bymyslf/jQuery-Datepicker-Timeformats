$(function () {
    $.datepicker.isoTime = (function (date) {
        return (function (hour, minutes, seconds) {
            return ('0' + hour).replace(/.*(\d\d)$/, '$1') + ':' +
                   ('0' + minutes).replace(/.*(\d\d)$/, '$1') + ':' +
                   ('0' + seconds).replace(/.*(\d\d)$/, '$1');
            })(date.getHours(), date.getMinutes(), date.getSeconds());
    })(new Date());
 
    $.datepicker.meridianTime = (function (date) {
        return (function (hour, minutes, seconds) {
            return ('0' + ((hour % 12) || 12)).replace(/.*(\d\d)$/, '$1') + ':' +
                   ('0' + minutes).replace(/.*(\d\d)$/, '$1') + ':' +
                   ('0' + seconds).replace(/.*(\d\d)$/, '$1') +
                   (hour > 11 ? ' PM' : ' AM');
            })(date.getHours(), date.getMinutes(), date.getSeconds());
    })(new Date()); 
});
export const ajax = (function () {
    const AJAX_METHODS = {
      POST: 'POST',
    };

    function _ajax({ url, method, body, callback }) {
        fetch(url, {
            method: method,
            body,
            headers: {
                'Content-type': 'application/json; charset=utf8'
            }
        })
            .then(response => response.json())
            .then(callback)
    }



    return function post({ url, body, callback }) {
        _ajax({
            url,
            method: AJAX_METHODS.POST,
            body,
            callback
        });
    }
})();

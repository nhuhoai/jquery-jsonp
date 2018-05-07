function testJsonp() { // eslint-disable-line no-unused-vars
  var https = ($('#https').is(':checked')) ? 'https://' : 'http://';
  var callback = $('#callback').val();
  var url = https + $('#url').val() + '?callback=' + callback;
  var st = $('#status');

  $.ajax({
    url: url,
    dataType: 'jsonp',
    jsonpCallback: callback,
    crossDomain: true,
    beforeSend: function(xhr, settings) {
      console.log('beforeSend xhr', xhr);
      console.log('beforeSend settings', settings);
      st.html('<div>Connection to the service...</div>');
    },
    error: function(xhr, status, error) {
      console.log('error xhr', xhr);
      console.log('error status', status);
      console.log('error error', error);
      st.html('<div>Something wrong with the service</div>');
    },
    success: function(data, status, xhr) {
      console.log('success data', data);
      console.log('success status', status);
      console.log('success xhr', xhr);
      st.html('<div>Connection done. Result:</div><div>' + JSON.stringify(data) + '</div>');
    },
    complete: function(xhr, status) {
      console.log('complete xhr', xhr);
      console.log('complete status', status);
    }
  });
}

$.ajaxSetup({ 
  'beforeSend': function(xhr) { xhr.setRequestHeader("Accept", "text/javascript") }
});

var hideAllSections = function() {
  $('.section').hide();
  $('.section h2').hide();
  $('.tabs li a').removeClass('active');
}

var hideAllPeople = function() {
  $('.people').hide();
  $('.people img').hide();
  $('.headshots li a').removeClass('active');
}

$(document).ready(function() {
  hideAllSections();
  $('#bride_and_groom').before('<ul id="bridal_party_tabs" class="tabs"></ul>');
  $('.section').each(function() {
    var section = $(this);
    var h2 = $(section.children('h2:first'));
    var li = '<li><a href="#" rel="' + section.attr('id') + '">' + h2.text() + '</a></li>';
    $('ul#bridal_party_tabs').append(li);
  });

  // Init sections
  $('.section:first').show();
  $('.tabs li a:first').addClass('active');
  // $('#bridesmaids:first').show();
  // $('.tabs li a[rel="bridesmaids"]').addClass('active');

  $('ul.tabs li a').click(function() {
    var target = $(this);
    hideAllSections();
    target.addClass('active');
    $('#' + target.attr('rel')).show();
    return false;
  });

  hideAllPeople();
  $('.party p.intro').after('<ul class="headshots"></ul>');
  $('.party').each(function() {
    var party = $(this);
    party.find('.people').each(function() {
      var person = $(this);
      var h3 = $(person.children('h3:first'));
      var img = $(person.children('img:first'));
      var li = '<li><a href="#' + person.attr('id') + '" rel="' + person.attr('id') + '" title="' + h3.text() + '"><img src="' + img.attr('src') + '" alt="' + h3.text() + '" /></a></li>';
      party.find('ul.headshots').append(li);
    });
  });
  $('#bridesmaids .people p').append(' <cite>- Yea</cite>');
  $('#groomsmen .people p').append(' <cite>- PJ</cite>');
  // Init people
  $('.party').children(':nth-child(4)').show()
  $('.party ul.headshots').children(':nth-child(1)').children('a').addClass('active');

  $('ul.headshots li a').click(function() {
    var target = $(this);
    var parent = target.parents('.party');
    parent.find('.people').hide();
    parent.find('.headshots li a').removeClass('active');
    target.addClass('active');
    $('#' + target.attr('rel')).show().effect("highlight", { color : '#EAD4D7' }, 1500);
    return false;
  });

});

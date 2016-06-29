<% include OrbitPanel %>
<div id="Page">
    <% include BreadCrumbs %>
<% if $Content.exists %>
<div id="LowerPage2">
<div class="row">
    <div class="large-12 columns">$Content</div>
    </div>
</div>
<% end_if %>
<% if $TeamMember.exists %>
<% loop $TeamMember %>
<div class="row">
    <div class="large-12 columns teammember bg coolgrey">
        <div class="row">
          <div class="large-3 small-12 columns">
              <div class="row">
                  <div class="large-12 columns bg green heading">
                      <div class="arrow-right green hide-for-small"></div>
                      <h3>$Name</h3>
                      <p>$Description</p>
                  </div>
                  <div class="large-12 columns" style="margin:0;padding:0">
                      <img style="width:100%" src="{$AbsoluteBaseURL}{$Image.setWidth(255).Filename}" alt="{$Image.Title}"/>
                  </div>
              </div>
          </div>
          <div class="large-9 small-12 columns membercontent">
              <div class="row">
                  <div class="large-12 columns content">
                    $MemberContent
                  </div>
              </div>
          </div>
        </div>

    </div>
</div>
    <% end_loop %>

<% end_if %>
</div>
</div>

<script>

$(window).on("resize", function () {
//$(window).load(function() {
    var mql = window.matchMedia("screen and (min-width: 768px)")
    if(mql==true) {
        //console.log(mql);
        //  $('.slideshow-wrapper ul').removeAttr('data-orbit');
        $('.membercontent').each(function (index, item) {
            var parent = $(item).parent();
            parent.css('position', 'relative');
            $(item).css('position', 'relative').css('top', Math.round((parent.height() - $(item).outerHeight()) / 2) + 'px');
        });
    }

}).resize();



</script>
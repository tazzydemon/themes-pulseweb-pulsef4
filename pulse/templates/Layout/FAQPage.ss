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
<% if $FAQSection.exists %>
<div class="row">
    <div class="large-12 columns" id="accordion">
    <% loop $FAQSection %>
        <h2>$Description</h2>
          <div>
              $Content
          </div>
    <% end_loop %>
</div>
</div>
<% end_if %>
</div>
</div>
<script>
    $(document).ready(function() {
        $( "#accordion" ).accordion({
              heightStyle: "content",
              header: "h2",
              collapsible: true,
              active:false
            });
    });

</script>
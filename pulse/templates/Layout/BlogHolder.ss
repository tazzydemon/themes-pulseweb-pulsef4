<% include OrbitPanel %>
<div id="Page">
    <% include  BreadCrumbs %>
<div class="row">
    <% if $BlogEntries %>
        <div class="large-8 push-3 columns">
            <% loop $BlogEntries %>
                <% include BlogSummary %>
            <% end_loop %>
        </div>
        <div class="large-4 pull-10 columns">
            <%include BlogSideBar %>
        </div>
    </div>
    <% else %>
        <h2><% _t('NOENTRIES', 'There are no blog entries') %></h2>
    <% end_if %>
    <% if $BlogPagination %>
        <div class="row">
            <div class="large-8 push-3 columns ">
                <% include BlogPagination %>
            </div>
        </div>
    <% end_if %>
</div>
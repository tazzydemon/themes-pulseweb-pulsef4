<% include OrbitPanel %>
<div id="Page">
    <% include  BreadCrumbs %>
    <div class="row">
        <div class="large-8 push-3 columns">
            <small><% _t('POSTEDBY', 'Posted by') %> $Author.XML <% _t('POSTEDON', 'on') %> $Date.Long
                | $Comments.Count <% _t('COMMENTS', 'Comments') %></small>
            <small><% if TagsCollection %>
                <p class="tags">
                    <% _t('TAGS', 'Tags:') %>
                    <% loop TagsCollection %>
                        <a href="$Link" title="<% _t('VIEWALLPOSTTAGGED', 'View all posts tagged') %> '$Tag'"
                           rel="tag">$Tag</a><% if not Last %>,<% end_if %>
                    <% end_loop %>
                </p>
            <% end_if %></small>
            $Content
        </div>
        <div class="large-4 pull-10 columns">
            <% include  SideBar %>
        </div>
    </div>
    $PageComments
</div>



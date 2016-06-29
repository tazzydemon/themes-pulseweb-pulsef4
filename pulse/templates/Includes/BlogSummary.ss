<div id="BlogSummary">
    <h3 class="postTitle"><a href="$Link"
                             title="<% _t('VIEWFULL', 'View full post titled -') %> '$Title'">$MenuTitle</a></h3>

    <p class="authorDate"><% _t('POSTEDBY', 'Posted by') %> $Author.XML <% _t('POSTEDON', 'on') %> $Date.Long | <a
            href="$Link#PageComments_holder"
            title="View Comments Posted">$Comments.Count <% _t('COMMENTS', 'Comments') %></a>
        <% if TagsCollection %>
            <br/>
            Tags:
            <% loop TagsCollection %>
                <a href="$Link" title="View all posts tagged '$Tag'" rel="tag">$Tag</a><% if not Last %>,<% end_if %>
            <% end_loop %>

        <% end_if %>
    </p>
    <% if BlogHolder.ShowFullEntry %>
        $Content
    <% else %>
        <p>$Content.FirstParagraph()</p>
    <% end_if %>

</div>
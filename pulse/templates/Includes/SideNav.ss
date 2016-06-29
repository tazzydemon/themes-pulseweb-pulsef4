<h1><a href="$Link">$MenuTitle.XML</a></h1>
<% loop $Level(1) %>
<% end_loop %>
<ul class="side-nav">
    <% loop $Menu(2) %>
        <li class="<% if $LinkingMode == current %>active<% end_if %>">
            <a href="$Link">$MenuTitle.XML</a>
        </li>
    <% end_loop %>
</ul>




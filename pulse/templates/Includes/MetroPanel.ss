<!-- Example row of Metro Images -->
<% if $MetroColumnNumber > 0 %>
    <div id="MetroStrip" $MetroFontSize>
    <% loop $MetroImage %>
        <% if $First %>
            <div class="row one metroimage" style="clear:both">
            <ul class="{$Up.F4MetroListCount}">
        <% end_if %>
            <li style="margin:0px">
                    <a href="{$ImageLinkPage.AbsoluteLink}"><img class="metroradiusJJ" src="{$AbsoluteBaseURL}{$Image.FileName}" alt="$Image.Title"/>
                        <%--                <h3 class="hover" style="color: rgb(37, 37, 37); display: none; left: 0px;">$ImageLinkHTML
                </h3>--%>
                    </a>
            </li>
        <% if $Last %>
            </ul>
            </div>
<%--        <% else_if $MultipleOf($Up.MetroColumnNumber) && $TotalItems != $Up.MetroColumnNumber %>
            </ul>
            </div>
            <div class="row loop metroimage">
            <ul class="small-block-grid-2 large-block-grid-4">--%>
        <% end_if %>
    <% end_loop %>
    </div>
<% end_if %>
<% include OrbitPanel %>
<div id="Page">
<%--    <% include BreadCrumbs %>--%>

    <% if $Content.exists %>
    <div id="LowerPage2">
    <div class="row">
        <div class="large-12 columns">$Content</div>
        </div>
    </div>
    <% end_if %>

    <div id="LowerPage2">
        <% if $Children %>
        <div class="row" data-match-height>
            <% loop $Children %>
            <% if $Children %>
            <div class="{$Up.F4ColumnClass} columns">
                <div class="hubpanel title">
                    <div class="row">
                    <div class="large-12 columns"><h2>$Title</h2></div>
                    </div>
                </div>
                <div data-height-watch class="hubpanel" style="position: relative">
                    <div class="arrow-down"></div>
                        <% loop $Children %>
                        <div class="row hubrow">
                            <div class="large-12 small-12 columns">
                                <a href="{$Link}">
                                <% if $PageIcon.exists %>
                                <img src="{$PageIcon.URL}"  alt="$PageIcon.FileName" style="float:right "/>
                                <% end_if %>
                                <h5>$Title</h5>
                                </a>
                            </div>
                        </div>
                        <% end_loop %>
                </div>
            </div>

            <% end_if %>
            <% end_loop %>
        </div>
        <% end_if %>
    </div>
</div>
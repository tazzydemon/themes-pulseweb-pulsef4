<% include OrbitPanel %>
<div id="Page">
    <% include  BreadCrumbs %>
    <% if $Content.exists %>
        <div id="LowerPage1">
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
                            <div class="{$Up.F4ColumnClass} medium-12 columns">

<%--                                <div class="hubpanel title">
                                    <div class="row">
                                        <div class="small-12 columns">
                                            <div class="table-row">
                                                <div class="table-cell middle hubicon" >
                                                    <% if $PageIcon.exists %>
                                                        $PageIcon.CroppedImage(200,135)
                                                      <% end_if %>
                                                </div>
                                                <div class="table-cell middle text-left">
                                                    <h2>$Title</h2>
                                                    <% if $MenuExcerpt.exists %>
                                                    $MenuExcerpt
                                                    <% end_if %>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>--%>
                                <div data-height-watch class="newshubpanel" style="position: relative">
                                    <% loop $Children %>
                                        <div class="row newshubrow">
                                            <div class="large-12 small-12 columns">
                                                <div class="table">
                                                    <div style="display: table-row;">
                                                        <div class="table-cell middle <% if $Theme == 'Business' %>blue<% end_if %> ">
                                                        <a href="{$Link}">
                                                        <% if $MenuExcerpt.exists %>
                                                           $MenuExcerpt
                                                        <% else %>
                                                            <h5>$Title</h5>
                                                        <% end_if %>
                                                        </a>
                                                    </div></div></div>
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
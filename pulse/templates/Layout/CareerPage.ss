<% include OrbitPanel %>
<div id="Page">
    <% include BreadCrumbs %>

        <!--<div id="LowerPage">
        <% if $Children %>
        <div class="row" style="display:table;border-collapse: collapse;">
            <div style="display:table-row">
                <% loop $Children %>
                <% if $Children %>
                    <div style="display:table-cell;background-color: gray" class="{$Up.F4ColumnClass} columns">
                        <div class="panel radius">
                                  <h4>$Title</h4>
                                    <dl>
                                      <% loop $Children %>
                                    <dd><a href="$Link>">$Title</a></dd>
                                      <% end_loop %>
                                  </dl>
                        </div>
                    </div>

                <% end_if %>
                <% end_loop %>
            </div>
        </div>
        <% end_if %>
        </div>-->
<div id="LowerPage2">
<div class="row">
    <div class="large-6 columns">$Content</div>
    <div class="large-6 columns hide-for-small">
        <div class="row">
      <%--      <div class="large-3 columns"><img src="{$AbsoluteBaseURL}assets/Uploads/pages/careers/QuoteBrackets1.jpg"></div>
     --%>       <div class="large-12 columns">$Quote</div>
      <%--      <div class="large-3 columns"><img src="{$AbsoluteBaseURL}assets/Uploads/pages/careers/QuoteBrackets2.jpg"></div>
     --%>   </div>
    </div>

</div>

<% if $CareerOffer.exists %>
<% loop $CareerOffer %>
<% if $Active %>
<div class="row">
    <div class="large-12 columns">
        <div class="careerpanel title">
            <div class="arrow-down green"></div>
            <div class="row">
                <div class="large-12 columns">
                <h2>$Description</h2>
                </div>
            </div>
        </div>
        <div class="careerpanel">
            <div class="row">
                <div class="large-6 columns">
                $CareerContent
                </div>
                <div class="large-6 columns">
                $CareerContent2
                </div>
            </div>
        </div>

    </div>
</div>
<% end_if %>
    <% end_loop %>

<% end_if %>
</div>
</div>
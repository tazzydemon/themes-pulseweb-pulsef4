<% include OrbitPanel %>
<div id="Page">
    <div class="row">
        <div class="large-12 small-12 columns">
            <% include  BreadCrumbs %>
            <%--<h1><a href="$Link">$MenuTitle.XML</a></h1>--%>
            $AddressSearchForm
            $Content
            $RawText.RAW
            <% if $Form.exists %>
            <div class="row">
            <div class="large-10 columns customerform panel radius">$Form</div>
            </div>
            <% end_if %>
        </div>
    </div>
</div>

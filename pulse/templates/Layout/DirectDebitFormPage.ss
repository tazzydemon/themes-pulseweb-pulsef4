
<div id="Page">
    <div class="row">
        <div class="large-12 small-12 columns">
            <%--<h1><a href="$Link">$MenuTitle.XML</a></h1>--%>
            <%--$Content--%>
            $RawText.RAW
            <% if $DirectDebitForm.exists %>
            <div class="row">
            <div class="large-12 columns customerform panel radius">$DirectDebitForm</div>
            </div>
            <% end_if %>
        </div>
    </div>
    <% include DDTCs %>
</div>

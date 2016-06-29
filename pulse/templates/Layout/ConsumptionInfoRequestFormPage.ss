<% include OrbitPanel %>
<div id="Page">
    <div class="row">
        <div class="large-12 small-12 columns">
            <h1>Consumption Information Request Form</h1>
            $RawText.RAW
            <% if $ConsumptionInfoRequestForm.exists %>
            <div class="row">
            <div class="large-12 columns customerform panel radius">$ConsumptionInfoRequestForm</div>
            </div>
            <% end_if %>
        </div>
    </div>
    <%--<% include DDTCs %>--%>
</div>



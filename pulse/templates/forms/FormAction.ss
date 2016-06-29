<%--<% if $UseButtonTag %>--%>
<div class="row">
    <div class="large-6 columns large-centered" style="text-align:center">
	<button $AttributesHTML>
		<% if $ButtonContent %>$ButtonContent<% else %>$Title<% end_if %>
	</button>
    </div>
</div>
<%--
<% else %>
	<input $AttributesHTML />
<% end_if %>
--%>

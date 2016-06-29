<%--<div id="$Name" class="field<% if extraClass %> $extraClass<% end_if %> row">
	$Field
	<label class="right" for="$ID">$Title</label>
	<% if $Message %><span class="message $MessageType">$Message</span><% end_if %>
	<% if $Description %><span class="description">$Description</span><% end_if %>
</div>--%>




<div id="$Name" class="field<% if $extraClass %> $extraClass<% end_if %> row" >
	<div class="large-2 columns">

	</div>
    <div class="middleColumn large-10 columns">
	$Field
    <label class="not-right" for="$ID">$Title</label>
    <% if $RightTitle %><label class="placeholder not-right not-inline" for="$ID">$RightTitle</label><% end_if %>
	</div>

</div>
<% if $Message || $Description %>
<div class="row" >
    <div class="large-8 columns">
	<% if $Message %><span class="message $MessageType">$Message</span><% end_if %>
	<% if $Description %><span class="description">$Description</span><% end_if %>
    </div>
</div>
<% end_if %>
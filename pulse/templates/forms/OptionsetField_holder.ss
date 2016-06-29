<%--
<div id="$Name" class="field<% if $extraClass %> $extraClass<% end_if %>">
	<% if $Title %><label class="left">$Title</label><% end_if %>
	<div class="middleColumn">
		$Field
	</div>
	<% if $RightTitle %><label class="right">$RightTitle</label><% end_if %>
	<% if $Message %><span class="message $MessageType">$Message</span><% end_if %>
	<% if $Description %><span class="description">$Description</span><% end_if %>
</div>
--%>


<div id="$Name" class="field<% if $extraClass %> $extraClass<% end_if %> row" >
	<div class="large-3 columns">
    <% if $Title %><label class="left inline" for="$ID">$Title</label><% end_if %>
	</div>
    <div class="middleColumn large-8 columns">
	$Field
	</div>
    <div class="middleColumn large-8 columns">
	<% if $RightTitle %><label class="right" for="$ID">$RightTitle</label><% end_if %>
    </div>
</div>
<div class="row" >
    <div class="large-12 columns">
	<% if $Message %><span class="message $MessageType">$Message</span><% end_if %>
	<% if $Description %><span class="description">$Description</span><% end_if %>
    </div>
</div>

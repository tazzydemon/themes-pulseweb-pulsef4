	<% loop $Options %>
            <span style="display:inline-block;width:7em">
            <label for="$Name" class="left inline"></label>
			<input id="$ID" class="radio" name="$Name" type="radio" value="$Value"<% if $isChecked %> checked<% end_if %><% if $isDisabled %> disabled<% end_if %> style="display:none"/>
			<span class="custom radio"></span>&nbsp;{$Title}</label>
            </span>
	<% end_loop %>

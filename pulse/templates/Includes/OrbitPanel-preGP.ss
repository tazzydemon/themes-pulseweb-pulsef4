<!-- Orbit slideshow -->
<% if $SlideImage %>
<div class="row">
<div class="large-12 columns hide-for-small ">
    <% if $SlideImage.count > 1 %>
    <div class="slideshow-wrapper">
    <ul data-orbit data-options="pause_on_hover:false;timer_speed:10000;bullets:false;slide_number:false;navigation_arrows:<% if $SlideImage.Count > 1 %>true;<% else %>false;<% end_if %>variable_height:true;animation:fade;timer:<% if $SlideImage.Count > 1 %>true;<% else %>false;<% end_if %>">
        <% loop $SlideImage %>
        <li data-orbit-slide="slide-{$Pos}">
            <img style="width:100%" src="{$AbsoluteBaseURL}{$Image.Filename}" alt="{$Image.Title}"/>
            <% if $Up.SlideImage.Count > 1 && $LinkURL.exists %>
            <div class="orbit-caption" id="htmlCaption{$Pos}">
                <div class="large-2 push-10"><a href="{$LinkURL.Link}"><img src="{$ThemeDir}/images/FindOutMoreT.png"></a></div>
            </div>
            <% end_if %>
        </li>
        <% end_loop %>
    </ul>
    </div>
    <% else %>
        <% loop $SlideImage %>
        <img style="width:100%" src="{$AbsoluteBaseURL}{$Image.Filename}" alt="{$Image.Title}"/>
        <% end_loop %>
    <% end_if %>
</div>
</div>
<% end_if %>


<!--End of Orbit Slideshow-->
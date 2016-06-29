<!-- Orbit slideshow -->
<% if $SlideImage.exists %>
<div class="row orbit-container-row">
<div class="large-12 columns hide-for-smhall orbit" style="padding: 0px 0px 20px 0px">
<%--    <% if $SlideImage.count  %>--%>

    <div class="slideshow-wrapper"><!--navigation arrows only work with animation:slide-->
    <ul data-orbit data-options="pause_on_hover:false;timer_speed:15000;bullets:false;slide_number:false;navigation_arrows:<% if $SlideImage.Count > 1 %>false;<% else %>false;<% end_if %>variable_height:true;animation:fade;timer:<% if $SlideImage.Count > 1 %>true;<% else %>false;<% end_if %>">
        <% loop $SlideImage.Sort(SortID, ASC) %>
        <% if not $NotActive %>
        <li data-orbit-slide="slide-{$Pos}">
            <picture>
            	<!--[if IE 9]><video style="display: none;"><![endif]-->
            	<source srcset="{$AbsoluteBaseURL}{$Image.Filename}" media="(min-width: 769px)">
                <source srcset="<% if $MobileImage.exists %>{$AbsoluteBaseURL}{$MobileImage.Filename}<% else %>{$AbsoluteBaseURL}{$Image.Filename}<% end_if %>">
            	<!--[if IE 9]></video><![endif]-->
                <%--<img style="width:100%" src="<% if $MobileImage.exists %>{$AbsoluteBaseURL}{$MobileImage.Filename}<% else %>{$AbsoluteBaseURL}{$Image.Filename}<% end_if %>" alt="{$Image.Title}"/>--%>
                <img style="width:100%" src="{$AbsoluteBaseURL}{$Image.Filename}" alt="{$Image.Title}"/>
            </picture>


            <%--<% if $Up.SlideImage.Count > 1 %>--%>
<%--            <% if $LinkURL.exists %>--%>
            <div class="orbit-caption" id="htmlCaption{$Pos}">
                <% if $OverlayImage.exists %>
                    <% if $LinkURL.exists %>
                    <a href="{$LinkURL.Link}">
                    <% end_if %>
                        <picture>
                        	<!--[if IE 9]><video style="display: none;"><![endif]-->
                        	<source srcset="{$AbsoluteBaseURL}{$OverlayImage.Filename}" media="(min-width: 769px)">
                            <source srcset="{$AbsoluteBaseURL}{$ThemeDir}/images/blank.gif">
                        	<!--[if IE 9]></video><![endif]-->
 <%--                           <img style="width:100%" src="{$AbsoluteBaseURL}{$ThemeDir}/images/blank.gif" alt="{$Image.Title}"/>--%>
                            <img style="width:100%" src="{$AbsoluteBaseURL}{$OverlayImage.Filename}" alt="{$Image.Title}"/>

                        </picture>
                    <% if $LinkURL.exists %>
                    </a>
                    <% end_if %>
                <% else_if $LinkURL.exists %>
                <div class="large-2 push-10 text-caption">
                    <% if $LinkText.exists %>
                    <a href="{$LinkURL.Link}">{$LinkText.RAW}</a>
                    <% else %>
                    <a href="{$LinkURL.Link}"><span class="gp-button">Find out more</span></a>
                    <% end_if %>
                </div>
                <% else_if $LinkText.exists %>
                <div class="large-2 push-10 text-caption">
                    {$LinkText.RAW}
                </div>

                <% end_if %>


            </div>
  <%--          <% end_if %>--%>
<%--            <% end_if %>--%>
        </li>
        <% end_if %>
        <% end_loop %>
    </ul>
    </div>
<%--    <% else %>
        <% loop $SlideImage %>
        <img style="width:100%" src="{$AbsoluteBaseURL}{$Image.Filename}" alt="{$Image.Title}"/>
        <% end_loop %>
    <% end_if %>--%>
</div>
</div>
<% end_if %>


<!--End of Orbit Slideshow-->
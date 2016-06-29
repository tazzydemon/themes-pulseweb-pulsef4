<!-- Orbit slideshow -->
<% if OrbitImage %>
<div class="row">
<div class="large-12 columns hide-for-small ">
    <ul data-orbit data-options="timer_speed:2500;bullets:false;slide_number:false;navigation_arrows:false;variable_height:true;animation:fade">
        <% loop OrbitImage %>
        <li>
            <img style="width:100%" src="{$AbsoluteBaseURL}{$Image.Filename}" alt="{$Image.Filename}"/>
            <!--<div class="orbit-caption" id="htmlCaption{$Pos}">
                $Caption
            </div>-->
        </li>
        <% end_loop %>
    </ul>
    <!-- </div>-->
</div>
</div>
<% end_if %>
        <!--End of Orbit Slideshow-->


        <!-- Main hero unit for a primary marketing message or call to action -->
<% if Content %>
<div class="row">
<div class="large-12 hero-unit">
    <div class="panel herotext">
        $Content
    </div>
</div>
</div>
<% end_if %>
        <!-- Mobile Header -->

        <!--          <div class="row">
                    <div class="large-12 columns show-for-small ">


                    </div>
                  </div><br>-->
        <!-- End Mobile Header -->
        <!-- Example row of columns -->

        <!-- Example row of dropin columns -->
<% if DropInColumnNumber > 0 %>
    <% loop DropInPages %>
        <% if First %>
        <div class="row 1">
        <% end_if %>

        <div class="smssall-{$Up.F4DropInCSSCount} large-{$Up.F4DropInCSSCount}  columns dropin">
            <div class="panel radius">
                <img src="{$AbsoluteBaseURL}{$DropInImage.FileName}" width="100%" alt="{$SiteConfig.Title}" title="{$SiteConfig.Title}"/>
            </div>
        </div>
        <% if MultipleOf($Up.DropInColumnNumber) && $TotalItems != $Up.DropInColumnNumber %>
        </div>
        <div class="row loop">
        <% else %>
        </div>
        <% end_if %>
        <% end_loop %>
<% end_if %>
<!--<div class= "row" style="clear:both"></div>-->
        <!-- Example row of Metro Images -->
<% if MetroColumnNumber > 0 %>
    <% loop MetroImage %>
        <% if First %>
        <div class="row one metroimage" style="clear:both">
        <% end_if %>
            <div class="large-{$Up.F4MetroCSSCount} columns">
                <!--               <div class="panel radius" style="height:{$Up.MetroBoxHeight}px;min-height:{$Up.MetroBoxHeight}px;background:url('{$AbsoluteBaseURL}/$Image.Filename') no-repeat;background-size:cover">
                -->
                <div class="adius">
                    <a href="{$ImageLinkPage.AbsoluteLink}"><img class="metroradius" src="{$AbsoluteBaseURL}{$Image.FileName}"  alt="$Image.FileName" />

                        <h3 class="hover" style="color: rgb(37, 37, 37); display: none; left: 0px;">
                            <!--                                              <cufon class="cufon cufon-canvas" alt="$ImageLinkHTML" style="width: 156px; height: 15px;">
                                                                          <canvas width="160" height="16" style="width: 160px; height: 16px; top: 1px; left: -1px;"></canvas>
                                                                          <cufontext>$ImageLinkHTML</cufontext>
                                                                          </cufon>-->
                        </h3>
                    </a>
                </div>
            </div>
        <% if Last %>
        </div>
        <% else_if MultipleOf($Up.MetroColumnNumber) && $TotalItems != $Up.MetroColumnNumber %>
        </div>
        <div class="row loop metroimage">
        <% end_if %>
    <% end_loop %>
<% end_if %>
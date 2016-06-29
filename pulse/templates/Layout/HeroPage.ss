<% include OrbitPanel %>
<div id="HeroPage">

        <!-- Main hero unit for a primary marketing message or call to action -->
<% if $Content %>
<div class="row">
<div class="large-12 hero-unit">
    <div class="xpanel xherotext">
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


<% if $askNicelyHome %>
    <style>
        .an_bubble{
            background-color: #f4f4f4;
            padding:5px 10px;
            height: 85px;
            width:180px;
            margin-bottom: 10px;
            border-radius: 27px;
            -moz-border-radius: 27px;
            -webkit-border-radius: 27px;
            position: relative;
            color:white;
            box-sizing: content-box;
        }
        .an_bubble:before{
            content: " ";
            position: absolute;
            width: 0;
            height: 0;
            left: 50px;
            top: 95px;
            border: 9px solid;
            xborder-color: #f4f4f4 transparent transparent #f4f4f4;
        }

        .an_comment{
            float:left;
            width:210px;
            margin: 10px 10px 0 10px;
/*
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
*/

                        font-family: "Bitter", serif;

            font-weight: 300;
            font-size: 13px;
        }
        .an_text{
           padding:0;
           margin: 5px;
           height: 75px;
           overflow: hidden;
        }
        .an_photo{
            float:left;
            margin-right: 20px
        }
        .an_photo img, .an_avatar{
            width:50px;
            height:50px;
            border-radius: 25px;
            -moz-border-radius: 25px;
            -webkit-border-radius: 25px;
        }
        .an_avatar_name{
            position: relative;
            left:15px;
            top:12px;
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: 300;
            font-size: 18px;
            color: white;
        }
        .an_name{
            padding-top: 9px;
        }
        .an_logo{
            margin-top: -10px;
            margin-right: 5px;
            font-size: 11px;
            float: right;
            color: #7f7f7f;
            padding-right: 10px;
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: 300;
        }
        .an_logo a{
            color: #7f7f7f;
        }

        a.tooltip { outline:none;  color:white;}
        a.tooltip strong { line-height:30px;}
        a.tooltip:hover { text-decoration:none;}
        a.tooltip span {
            z-index:10;display:none; padding:14px 20px;
            margin-top:-30px; margin-left:28px;
            width:220; line-height:16px;
        }
        a.tooltip:hover span{
            display:inline; position:absolute; color:#111;
            border:1px solid #cccccc; background:#ffffff;
        }

        .callout { z-index:20;position:absolute; top:-30px; border:0; left:-12px;}

        /*CSS3 extras*/
        a.tooltip span
        {
            border-radius:4px;
            box-shadow: 0px 0px 2px #CCC;
            left:-20px;
        }

/*            .c29{
                background-color:#959595
            }
            .c29:before{
                border-color: #959595 transparent transparent #959595;
            }
            .c26{
                background-color:#ED1617
            }
            .c26:before{
                border-color: #ED1617 transparent transparent #ED1617;
            }*/

    </style>
    <div class="row">
        <div class="small-12">
                $askNicelyHome
        </div>
    </div>


<% end_if %>

<% include MetroPanel %>
</div>
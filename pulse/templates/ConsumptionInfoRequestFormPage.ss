<!DOCTYPE html>
<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en"> <!--<![endif]-->

<head>
    <% base_tag %>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width"/>
    $Metatags('false')
    <meta name="google-site-verification" content="aPuUipvihRMSccWNQB1n4HfiiBdrMy_kaIGmzWOTtho" />
    <link rel="canonical" href="$AbsoluteLink"/>
    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
    <title>{$SiteConfig.Title} | {$Title}</title>
    <script src="{$ThemeDir}/javascript/vendor/custom.modernizr.js"></script>
    <script>$SiteConfig.CustomJavaScript</script>
    <script type='text/javascript' src='//www.addressfinder.co.nz/assets/v2/widget.js'></script>
</head>
<body>
<%--
<div id="fqv" style="position:fixed;top:40px;right:40px;z-index:999;color:#fff;"><p style="font-size:12px;background:rgba(0,0,0,0.75);padding:5px;margin-bottom:1px;line-height:1.2;"><span class="left">Media:</span> <span style="font-weight:bold;" class="show-for-xlarge">Extra Large</span><span style="font-weight:bold;" class="show-for-large">Large</span><span style="font-weight:bold;" class="show-for-medium">Medium</span><span style="font-weight:bold;" class="show-for-small">Small</span><span style="font-weight:bold;" class="show-for-landscape">Landscape</span><span style="font-weight:bold;" class="show-for-portrait">Portrait</span><span style="font-weight:bold;" class="show-for-touch">Touch</span></p></div>
--%>
<div class="wrapper" >
    <% include TopBar %>
    <% include Header %>

    $Layout

    <%--<% if InSection(home) %><% else %>--%>
    <%--<div class="row">--%>
    <%--<div class="twelve columns">--%>
    <%--<% include Breadcrumbs %>--%>
    <%--</div>--%>
    <%--</div>--%>
    <%--<% end_if %>--%>

    <%-- Footer --%>
    <div class="push"></div>
</div>
    <% include  Footer %>

<script>//alert(window.location)</script>
<!--[if lte IE 8]>
<link rel="stylesheet" href="{$ThemeDir}/css/foundationIExx8.css"/>
<script src="/{$ThemeDir}/javascript/vendor/respond.src.js"></script>
<script type="text/javascript">
    $('[class*="column"] + [class*="column"]:last-child').addClass("last-child");
    //$('#FoundationForm_DirectDebitForm_payer_code').val('We will insert a unique payment code here');
    //$('#FoundationForm_DirectDebitForm_payer_ref').val('We will insert your Consumer Number here');
</script>
<![endif]-->


<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-31121409-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

</script>


</body>
</html>

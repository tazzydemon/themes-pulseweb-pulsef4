<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta name="viewport" content="width=device-width">

    <!-- <link rel="stylesheet" type="text/css" href="http://www.pulseenergy.co.nz/assets/emailassets/email.css"/>-->
    <style>
        /**********************************************
        * Ink v1.0.5 - Copyright 2013 ZURB Inc *
        **********************************************/
        /* Client-specific Styles & Reset */
        #outlook a {
            padding: 0;
            }
        body {
            width: 100% !important;
            min-width: 100%;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
            }
        .ExternalClass {
            width: 100%;
            }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
            }
        #backgroundTable {
            margin: 0;
            padding: 0;
            width: 100% !important;
            line-height: 100% !important;
            }
        img {
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
            width: auto;
            max-width: 100%;
            /* float: left;
            clear: both;
            display: block;*/
            }
        center {
            width: 100%;
            min-width: 822px;
            }
        a img {
            border: none;
            }
        p {
            margin: 0 0 0 10px;
            }
        table {
            border-spacing: 0;
            border-collapse: collapse;
            }
        td {
            word-break: break-word;
            -webkit-hyphens: auto;
            -moz-hyphens: auto;
            hyphens: auto;
            border-collapse: collapse !important;
            }
        table, tr, td {
            padding: 0;
            vertical-align: top;
            text-align: left;
            }
        hr {
            color: #d9d9d9;
            background-color: #d9d9d9;
            height: 1px;
            border: none;
            }
        /* Responsive Grid */
        table.body {
            height: 100%;
            width: 100%;
            }
        table.container {
            width: 822px;
            margin: 0 auto;
            text-align: inherit;
            display: inline-block;
            border-right: 1px solid #eeeeee;
            border-bottom: 1px solid #eeeeee;
            border-left: 1px solid #eeeeee;
            background-color: #ffffff;
            }
        .header .container {
            border-bottom: 1px solid #eeeeee;
            }
        table.row {
            padding: 0px;
            width: 100%;
            position: relative;
            }
        table.container table.row {
            display: block;
            }
        td.wrapper {
            padding: 10px 20px 0px 0px;
            position: relative;
            }
        table.columns,
        table.column {
            margin: 0 auto;
            }
        table.columns td,
        table.column td {
            padding: 0px 0px 10px;
            }
        table.columns td.sub-columns,
        table.column td.sub-columns,
        table.columns td.sub-column,
        table.column td.sub-column {
            padding-right: 10px;
            }
        td.sub-column, td.sub-columns {
            min-width: 0px;
            }
        table.row td.last,
        table.container td.last {
            padding-right: 0px;
            }
        table.one { width: 30px; }
        table.two { width: 102px; }
        table.three { width: 174px; }
        table.four { width: 246px; }
        table.five { width: 318px; }
        table.six { width: 390px; }
        table.seven { width: 462px; }
        table.eight { width: 534px; }
        table.nine { width: 606px; }
        table.ten { width: 678px; }
        table.eleven { width: 750px; }
        table.twelve { width: 822px; }
        table.one center { min-width: 30px; }
        table.two center { min-width: 102px; }
        table.three center { min-width: 174px; }
        table.four center { min-width: 246px; }
        table.five center { min-width: 318px; }
        table.six center { min-width: 390px; }
        table.seven center { min-width: 462px; }
        table.eight center { min-width: 534px; }
        table.nine center { min-width: 606px; }
        table.ten center { min-width: 678px; }
        table.eleven center { min-width: 750px; }
        table.twelve center { min-width: 822px; }
        table.one .panel center { min-width: 10px; }
        table.two .panel center { min-width: 82px; }
        table.three .panel center { min-width: 154px; }
        table.four .panel center { min-width: 226px; }
        table.five .panel center { min-width: 298px; }
        table.six .panel center { min-width: 370px }
        table.seven .panel center { min-width: 442px; }
        table.eight .panel center { min-width: 514px; }
        table.nine .panel center { min-width: 586px; }
        table.ten .panel center { min-width: 658px; }
        table.eleven .panel center { min-width: 730px; }
        table.twelve .panel center { min-width: 802px; }
        .body .columns td.one,
        .body .column td.one { width: 8.333333%; }
        .body .columns td.two,
        .body .column td.two { width: 16.666666%; }
        .body .columns td.three,
        .body .column td.three { width: 25%; }
        .body .columns td.four,
        .body .column td.four { width: 33.333333%; }
        .body .columns td.five,
        .body .column td.five { width: 41.666666%; }
        .body .columns td.six,
        .body .column td.six { width: 50%; }
        .body .columns td.seven,
        .body .column td.seven { width: 58.333333%; }
        .body .columns td.eight,
        .body .column td.eight { width: 66.666666%; }
        .body .columns td.nine,
        .body .column td.nine { width: 75%; }
        .body .columns td.ten,
        .body .column td.ten { width: 83.333333%; }
        .body .columns td.eleven,
        .body .column td.eleven { width: 91.666666%; }
        .body .columns td.twelve,
        .body .column td.twelve { width: 100%; }
        td.offset-by-one { padding-left: 50px; }
        td.offset-by-two { padding-left: 100px; }
        td.offset-by-three { padding-left: 150px; }
        td.offset-by-four { padding-left: 200px; }
        td.offset-by-five { padding-left: 250px; }
        td.offset-by-six { padding-left: 300px; }
        td.offset-by-seven { padding-left: 350px; }
        td.offset-by-eight { padding-left: 400px; }
        td.offset-by-nine { padding-left: 450px; }
        td.offset-by-ten { padding-left: 500px; }
        td.offset-by-eleven { padding-left: 550px; }
        td.expander {
            visibility: hidden;
            width: 0px;
            padding: 0 !important;
            }
        table.columns .text-pad,
        table.column .text-pad {
            padding-left: 10px;
            padding-right: 10px;
            }
        table.columns .left-text-pad,
        table.columns .text-pad-left,
        table.column .left-text-pad,
        table.column .text-pad-left {
            padding-left: 10px;
            }
        table.columns .right-text-pad,
        table.columns .text-pad-right,
        table.column .right-text-pad,
        table.column .text-pad-right {
            padding-right: 10px;
            }
        /* Block Grid */
        .block-grid {
            width: 100%;
            max-width: 580px;
            }
        .block-grid td {
            display: inline-block;
            padding: 10px;
            }
        .two-up td {
            width: 270px;
            }
        .three-up td {
            width: 173px;
            }
        .four-up td {
            width: 125px;
            }
        .five-up td {
            width: 96px;
            }
        .six-up td {
            width: 76px;
            }
        .seven-up td {
            width: 62px;
            }
        .eight-up td {
            width: 52px;
            }
        /* Alignment & Visibility Classes */
        table.center, td.center {
            text-align: center;
            }
        h1.center,
        h2.center,
        h3.center,
        h4.center,
        h5.center,
        h6.center {
            text-align: center;
            }
        span.center {
            display: block;
            width: 100%;
            text-align: center;
            }
        img.center {
            margin: 0 auto;
            float: none;
            }
        .show-for-small,
        .hide-for-desktop {
            display: none;
            }
        /* Typography */
        body, table.body, h1, h2, h3, h4, h5, h6, p, td {
            color: #222222;
            font-family: Helvetica, Arial, sans-serif;
            font-weight: normal;
            padding: 0;
            margin: 0;
            text-align: left;
            line-height: 1.3;
            }
        h1, h2, h3, h4, h5, h6 {
            word-break: normal;
            font-weight: bold;
            color: #57a946;
            }
        h1 { font-size: 36px; }
        h2 { font-size: 32px; }
        h3 { font-size: 28px; }
        h4 { font-size: 24px; }
        h5 { font-size: 22px; }
        h6 { font-size: 20px; }
        body, table.body, p, td { font-size: 14px; line-height: 19px; }
        p.lead, p.lede, p.leed {
            font-size: 18px;
            line-height: 21px;
            }
        p {
            margin-bottom: 10px;
            }
        small {
            font-size: 10px;
            }
        a {
            color: #2ba6cb;
            text-decoration: none;
            }
        a:hover {
            color: #2795b6 !important;
            }
        a:active {
            color: #2795b6 !important;
            }
        a:visited {
            color: #2ba6cb !important;
            }
        h1 a,
        h2 a,
        h3 a,
        h4 a,
        h5 a,
        h6 a {
            color: #2ba6cb;
            }
        h1 a:active,
        h2 a:active,
        h3 a:active,
        h4 a:active,
        h5 a:active,
        h6 a:active {
            color: #2ba6cb !important;
            }
        h1 a:visited,
        h2 a:visited,
        h3 a:visited,
        h4 a:visited,
        h5 a:visited,
        h6 a:visited {
            color: #2ba6cb !important;
            }
        .sub-grid table {
            width: 100%;
            }
        .sub-grid td.sub-columns {
            padding-bottom: 0;
            }
        /* Panels */
        .panel p {
            color: #222222;
            }
        .panel h1, .panel h2, .panel h3, .panel h4, .panel h5, .panel h6 {
            color: #2284a1;
            }
        .columns .panel td {
            color: #222222;
            padding-bottom: 0px;
            }
        .panel {
            background: transparent;
            border: 0px solid transparent;
            padding: 10px !important;
            color: #ffffff;
            }
        /*.panel.content h1, .panel.content h2, .panel.content h3, .panel.content h4, .panel.content h5, .panel.content h6 {
        color: #2284a1;
        }*/
        .panel.header p, .panel.header h1, .panel.header h2, .panel.header h3, .panel.header h4, .panel.header h5, .panel.header h6 {
            color: #ffffff;
            }
        .panel.header a {
            color: #ffff88;
            }
        .panel.header td {
            color: #ffffff;
            }
        .panel.header {
            background: #57a946;
            border: 0px solid transparent;
            padding: 10px !important;
            color: #ffffff;
            }
        .panel.content {
            border: 0px solid transparent !important;
            }
        .panel table, .panel tr {
            width: 100%
            }
        .panel td.blue {
            padding: 7px;
            height: 25px;
            background-color: #2284a1;
            }
        .highlight {
            border: 1px solid #57a946;
            }
        a.blue, a.blue:visited {
            color: #ffffff !important;
            color: #ffffff;
            padding: 7px;
            line-height: 25px;
            background-color: #2284a1;
            /*webkit-border-radius: 8px;*/
            /*-moz-border-radius: 8px;*/
            border-radius: 8px;
            text-align: center;
            margin-top: -7px;
            }
        a.block {
            display: block;
            margin-top: 0px;
            }
        .right {
            float: right;
            margin-left: 10px;
            }
        .left {
            float: left;
            margin-right: 10px;
            }
        .middle {
            vertical-align: middle;
            }
        /* Buttons */
        table.button,
        table.tiny-button,
        table.small-button,
        table.medium-button,
        table.large-button {
            width: 100%;
            overflow: hidden;
            }
        table.button td,
        table.tiny-button td,
        table.small-button td,
        table.medium-button td,
        table.large-button td {
            display: block;
            width: auto !important;
            text-align: center;
            background: #2ba6cb;
            border: 1px solid #2284a1;
            color: #ffffff;
            padding: 8px 0;
            }
        table.tiny-button td {
            padding: 5px 0 4px;
            }
        table.small-button td {
            padding: 8px 0 7px;
            }
        table.medium-button td {
            padding: 12px 0 10px;
            }
        table.large-button td {
            padding: 21px 0 18px;
            }
        table.button td a,
        table.tiny-button td a,
        table.small-button td a,
        table.medium-button td a,
        table.large-button td a {
            font-weight: bold;
            text-decoration: none;
            font-family: Helvetica, Arial, sans-serif;
            color: #ffffff;
            font-size: 16px;
            }
        table.tiny-button td a {
            font-size: 12px;
            font-weight: normal;
            }
        table.small-button td a {
            font-size: 16px;
            }
        table.medium-button td a {
            font-size: 20px;
            }
        table.large-button td a {
            font-size: 24px;
            }
        table.button:hover td,
        table.button:visited td,
        table.button:active td {
            background: #2795b6 !important;
            }
        table.button:hover td a,
        table.button:visited td a,
        table.button:active td a {
            color: #fff !important;
            }
        table.button:hover td,
        table.tiny-button:hover td,
        table.small-button:hover td,
        table.medium-button:hover td,
        table.large-button:hover td {
            background: #2795b6 !important;
            }
        table.button:hover td a,
        table.button:active td a,
        table.button td a:visited,
        table.tiny-button:hover td a,
        table.tiny-button:active td a,
        table.tiny-button td a:visited,
        table.small-button:hover td a,
        table.small-button:active td a,
        table.small-button td a:visited,
        table.medium-button:hover td a,
        table.medium-button:active td a,
        table.medium-button td a:visited,
        table.large-button:hover td a,
        table.large-button:active td a,
        table.large-button td a:visited {
            color: #ffffff !important;
            }
        table.secondary td {
            background: #e9e9e9;
            border-color: #d0d0d0;
            color: #555;
            }
        table.secondary td a {
            color: #555;
            }
        table.secondary:hover td {
            background: #d0d0d0 !important;
            color: #555;
            }
        table.secondary:hover td a,
        table.secondary td a:visited,
        table.secondary:active td a {
            color: #555 !important;
            }
        table.success td {
            background: #5da423;
            border-color: #457a1a;
            }
        table.success:hover td {
            background: #457a1a !important;
            }
        table.alert td {
            background: #c60f13;
            border-color: #970b0e;
            }
        table.alert:hover td {
            background: #970b0e !important;
            }
        table.radius td {
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            }
        table.round td {
            -webkit-border-radius: 500px;
            -moz-border-radius: 500px;
            border-radius: 500px;
            }
        /* Outlook First */
        body.outlook p {
            display: inline !important;
            }
        /* Media Queries */
        @media only screen and (max-width: 767px) {
            table[class="body"] img {
                width: auto !important;
                height: auto !important;
                }
            table[class="body"] center {
                min-width: 0 !important;
                }
            table[class="body"] .container {
                width: 95% !important;
                }
            table[class="body"] .row {
                width: 100% !important;
                display: block !important;
                }
            table[class="body"] .wrapper {
                display: block !important;
                padding-right: 0 !important;
                }
            table[class="body"] .columns,
            table[class="body"] .column {
                table-layout: fixed !important;
                float: none !important;
                width: 100% !important;
                padding-right: 0px !important;
                padding-left: 0px !important;
                display: block !important;
                }
            table[class="body"] .wrapper.first .columns,
            table[class="body"] .wrapper.first .column {
                display: table !important;
                }
            table[class="body"] table.columns td,
            table[class="body"] table.column td {
                width: 100% !important;
                }
            table[class="body"] table.columns td.nonresponsive,
            table[class="body"] table.column td.nonresponsive {
                width: auto !important;
                }
            body {
                background-color: #ffffff;
                }
            table[class="body"] .columns td.one,
            table[class="body"] .column td.one { width: 8.333333% !important; }
            table[class="body"] .columns td.two,
            table[class="body"] .column td.two { width: 16.666666% !important; }
            table[class="body"] .columns td.three,
            table[class="body"] .column td.three { width: 25% !important; }
            table[class="body"] .columns td.four,
            table[class="body"] .column td.four { width: 33.333333% !important; }
            table[class="body"] .columns td.five,
            table[class="body"] .column td.five { width: 41.666666% !important; }
            table[class="body"] .columns td.six,
            table[class="body"] .column td.six { width: 50% !important; }
            table[class="body"] .columns td.seven,
            table[class="body"] .column td.seven { width: 58.333333% !important; }
            table[class="body"] .columns td.eight,
            table[class="body"] .column td.eight { width: 66.666666% !important; }
            table[class="body"] .columns td.nine,
            table[class="body"] .column td.nine { width: 75% !important; }
            table[class="body"] .columns td.ten,
            table[class="body"] .column td.ten { width: 83.333333% !important; }
            table[class="body"] .columns td.eleven,
            table[class="body"] .column td.eleven { width: 91.666666% !important; }
            table[class="body"] .columns td.twelve,
            table[class="body"] .column td.twelve { width: 100% !important; }
            table[class="body"] td.offset-by-one,
            table[class="body"] td.offset-by-two,
            table[class="body"] td.offset-by-three,
            table[class="body"] td.offset-by-four,
            table[class="body"] td.offset-by-five,
            table[class="body"] td.offset-by-six,
            table[class="body"] td.offset-by-seven,
            table[class="body"] td.offset-by-eight,
            table[class="body"] td.offset-by-nine,
            table[class="body"] td.offset-by-ten,
            table[class="body"] td.offset-by-eleven {
                padding-left: 0 !important;
                }
            table[class="body"] table.columns td.expander {
                width: 1px !important;
                }
            table[class="body"] .right-text-pad,
            table[class="body"] .text-pad-right {
                padding-left: 10px !important;
                }
            table[class="body"] .left-text-pad,
            table[class="body"] .text-pad-left {
                padding-right: 10px !important;
                }
            table[class="body"] .hide-for-small,
            table[class="body"] .show-for-desktop {
                display: none !important;
                }
            table[class="body"] .show-for-small,
            table[class="body"] .hide-for-desktop {
                display: inherit !important;
                }
            .panel.content {
                border: 0px solid transparent !important;
                padding: 0px !important;
                }
            }
        table.facebook td {
            background: #3b5998;
            border-color: #2d4473;
            }
        table.facebook:hover td {
            background: #2d4473 !important;
            }
        table.twitter td {
            background: #00acee;
            border-color: #0087bb;
            }
        table.twitter:hover td {
            background: #0087bb !important;
            }
        table.google-plus td {
            background-color: #DB4A39;
            border-color: #CC0000;
            }
        table.google-plus:hover td {
            background: #CC0000 !important;
            }
        .template-label {
            color: #ffffff;
            font-weight: bold;
            font-size: 11px;
            }
        .callout .panel {
            background: #ECF8FF;
            border-color: #b9e5ff;
            }
        .header {
            background: transparent;
            }
        .footer .wrapper {
            background: #ebebeb;
            }
        .footer h5 {
            padding-bottom: 10px;
            }
        table.columns .text-pad {
            padding-left: 10px;
            padding-right: 10px;
            }
        table.columns .left-text-pad {
            padding-left: 10px;
            }
        table.columns .right-text-pad {
            padding-right: 10px;
            }
        @media only screen and (max-width: 767px) {
            table[class="body"] .right-text-pad {
                padding-left: 10px !important;
                }
            table[class="body"] .left-text-pad {
                padding-right: 10px !important;
                }
            }
    </style>
</head>
<body style="min-width: 100%;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;margin: 0;padding: 0;background-color: #f8f8f8;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;text-align: left;line-height: 19px;font-size: 14px;width: 100% !important;">
<table class="body" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;height: 100%;width: 100%;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;">

    <tbody>
    <tr style="padding: 0;vertical-align: top;text-align: left;">
        <td class="center" align="center" valign="top" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0;vertical-align: top;text-align: center;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
            <center style="width: 100%;min-width: 822px;">
                <table class="row header" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;">
                    <tbody>
                    <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td class="center" align="center" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0;vertical-align: top;text-align: center;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                            <center style="width: 100%;min-width: 822px;">
                                <table class="container" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: inherit;width: 822px;margin: 0 auto;display: inline-block;border-right: 1px solid #eeeeee;border-bottom: 1px solid #eeeeee;border-left: 1px solid #eeeeee;background-color: #ffffff;">
                                    <tbody>
                                    <tr style="padding: 0;vertical-align: top;text-align: left;">
                                        <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
                                            <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 822px;">
                                                <tbody>
                                                <tr style="padding: 0;vertical-align: top;text-align: left;">
                                                    <td class="six sub-columns" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;min-width: 0px;padding-right: 10px;width: 50%;border-collapse: collapse !important;">
                                                        <img src="https://www.pulseenergy.co.nz/assets/emailassets/PulseLogo.png" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;width: auto;max-width: 100%;">
                                                    </td>
                                                    <td class="six sub-columns last" style="text-align: right;vertical-align: middle;word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;min-width: 0px;padding-right: 0px;width: 50%;border-collapse: collapse !important;">
                                                        <span class="template-label"></span></td>
                                                    <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </center>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table class="row header" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;">
                    <tbody>
                    <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td class="center" align="center" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0;vertical-align: top;text-align: center;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                            <center style="width: 100%;min-width: 822px;">
                                <table class="container" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: inherit;width: 822px;margin: 0 auto;display: inline-block;border-right: 1px solid #eeeeee;border-bottom: 1px solid #eeeeee;border-left: 1px solid #eeeeee;background-color: #ffffff;">
                                    <tbody>
                                    <tr style="padding: 0;vertical-align: top;text-align: left;">
                                        <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
                                            <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 822px;">
                                                <tbody>
                                                <tr style="padding: 0;vertical-align: top;text-align: left;">
                                                    <td class="panel content" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px !important;vertical-align: top;text-align: left;color: #ffffff;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;background: transparent;border: 0px solid transparent !important;border-collapse: collapse !important;">
                                                        <h1 style="color: #2284a1;font-family: Helvetica, Arial, sans-serif;font-weight: bold;padding: 0;margin: 0;text-align: left;line-height: 1.3;word-break: normal;font-size: 36px;">Consumption Information Request</h1>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </center>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table class="container" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: inherit;width: 822px;margin: 0 auto;display: inline-block;border-right: 1px solid #eeeeee;border-bottom: 1px solid #eeeeee;border-left: 1px solid #eeeeee;background-color: #ffffff;">
                    <tbody>
                    <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                            <!-- content start -->
                            <table class="row" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;display: block;">
                                <tbody>
                                <tr style="padding: 0;vertical-align: top;text-align: left;">
                                    <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;border-collapse: collapse !important;">
                                        <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 822px;">
                                            <tbody>
                                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                                                <td class="panel content" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px !important;vertical-align: top;text-align: left;color: #ffffff;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;background: transparent;border: 0px solid transparent !important;border-collapse: collapse !important;">
                                                    <p style="margin: 0;margin-bottom: 10px;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px;">$CustomerName
                                                        ,</p>

                                                    $Body
                                                </td>
                                                <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <!-- <table class="six columns">
                                        <tr>
                                        <td class="panel header">
                                        <p><b>This email contains information
                                        about your Freedom Plan.</b></p>
                                        </td>
                                        <td class="expander"></td>
                                        </tr>
                                        </table>-->
                                        <br><br>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br>
                            <!-- Contact -->
                            <table class="row" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;display: block;">
                                <tbody>
                                <tr style="padding: 0;vertical-align: top;text-align: left;">
                                    <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
                                        <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 822px;">
                                            <tbody>
                                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                                                <td class="wrapper" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;border-collapse: collapse !important;">
                                                    <table class="three columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 174px;">
                                                        <tbody>
                                                        <tr style="padding: 0;vertical-align: top;text-align: left;">
                                                            <td align="center" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                                                                <img class="left" src="https://www.pulseenergy.co.nz/assets/emailassets/PhoneLogo.png" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;width: auto;max-width: 100%;float: left;margin-right: 10px;">
                                                                <h6 style="color: #57a946;font-family: Helvetica, Arial, sans-serif;font-weight: bold;padding: 0;margin: 0;text-align: left;line-height: 1.3;word-break: normal;font-size: 20px;">
                                                                    Phone</h6>

                                                                <p style="margin: 0;margin-bottom: 10px;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px;">
                                                                    <b>0800 785 733</b></p>
                                                            </td>
                                                            <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td class="wrapper" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;border-collapse: collapse !important;">
                                                    <table class="three columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 174px;">
                                                        <tbody>
                                                        <tr style="padding: 0;vertical-align: top;text-align: left;">
                                                            <td align="center" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                                                                <img class="left" src="https://www.pulseenergy.co.nz/assets/emailassets/FaxLogo.png" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;width: auto;max-width: 100%;float: left;margin-right: 10px;">
                                                                <h6 style="color: #57a946;font-family: Helvetica, Arial, sans-serif;font-weight: bold;padding: 0;margin: 0;text-align: left;line-height: 1.3;word-break: normal;font-size: 20px;">
                                                                    Fax</h6>

                                                                <p style="margin: 0;margin-bottom: 10px;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px;">
                                                                    <b>09 378 4405</b></p>
                                                            </td>
                                                            <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td class="wrapper" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;border-collapse: collapse !important;">
                                                    <table class="six columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 390px;">
                                                        <tbody>
                                                        <tr style="padding: 0;vertical-align: top;text-align: left;">
                                                            <td align="center" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                                                                <img class="left" src="https://www.pulseenergy.co.nz/assets/emailassets/EmailLogo.png" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;width: auto;max-width: 100%;float: left;margin-right: 10px;">
                                                                <h6 style="color: #57a946;font-family: Helvetica, Arial, sans-serif;font-weight: bold;padding: 0;margin: 0;text-align: left;line-height: 1.3;word-break: normal;font-size: 20px;">
                                                                    Email</h6>

                                                                <p style="margin: 0;margin-bottom: 10px;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px;">
                                                                    <b><a href="mailto:customer.service@pulsenergy.co.nz" style="color: #2ba6cb;text-decoration: none;"><span style="color: rgb(0, 0, 0);">customer.service@pulsenergy.co.nz</span></a></b>
                                                                </p></td>
                                                            <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <!-- Thank you message --><!-- Footer -->
                            <!-- Legal + Unsubscribe -->
                            <table class="row" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;display: block;">
                                <tbody>
                                <tr style="padding: 0;vertical-align: top;text-align: left;">
                                    <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
                                        <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 822px;">
                                            <tbody>
                                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                                                <td align="center" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                                                    <center style="width: 100%;min-width: 822px;">
                                                        <p style="text-align: center;margin: 0;margin-bottom: 10px;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;padding: 0;line-height: 19px;font-size: 14px;">
                                                            <a href="https://www.pulseenergy.co.nz/terms-and-conditions/" style="color: #2ba6cb;text-decoration: none;">Terms</a>
                                                            |
                                                            <a href="https://www.pulseenergy.co.nz/privacy-policy/" style="color: #2ba6cb;text-decoration: none;">Privacy</a>
                                                        </p>
                                                    </center>
                                                </td>
                                                <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: Helvetica, Arial, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <!-- container end below -->
                        </td>
                    </tr>
                    </tbody>
                </table>
            </center>
        </td>
    </tr>
    </tbody>
</table>

</body>
</html>

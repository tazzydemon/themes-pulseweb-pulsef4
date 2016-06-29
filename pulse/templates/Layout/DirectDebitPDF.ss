<!--End Header and Primary Nav-->

<%--<div id="Page" xmlns="http://www.w3.org/1999/html">--%>

<div class="row" style="page-break-after:always">
<div class="small-12 columns customerform panel radius" style="margin-bottom:0em">
<form id="FoundationForm_DirectDebitForm" class="custom" class="custom">

<p id="FoundationForm_DirectDebitForm_error" class="message " style="display: none"></p>

<fieldset>

<div class="titlepanel wide bg green"><h2>Your Energy Account Details</h2></div>
<div>&nbsp;</div>

<div class="row ">
    <div class="columns small-6">
        <div id="Name" class="ffhm field  text">
            <label for="FoundationForm_DirectDebitForm_Name">Name/Business Name</label>
            <input type="text" name="Name" class="text" id="FoundationForm_DirectDebitForm_Name" value="$Name"/>
        </div>
    </div>
    <div class="columns small-5">
        <div class="row ">
            <div class="columns columns small-8 push-4">
                <div id="ConsumerNumber" class="ffhm field  numeric text">
                    <label for="FoundationForm_DirectDebitForm_ConsumerNumber">Consumer Number</label>
                    <input value="$ConsumerNumber" type="text" name="ConsumerNumber" class="numeric text" id="FoundationForm_DirectDebitForm_ConsumerNumber" placeholder="Your 10 Digit Consumer Number" size="10"/>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row ">
    <div class="columns small-6 columns">
        <div class="row ">
            <div class="columns columns small-10">
                <div id="Street" class="ffhm field  text">
                    <label for="FoundationForm_DirectDebitForm_Street">Residential/Business Address</label>
                    <input value="$Street" type="text" name="Street" class="text" id="FoundationForm_DirectDebitForm_Street"/>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="columns columns small-8">
                <div id="Suburb" class="ffhm field  text">
                    <label for="FoundationForm_DirectDebitForm_Suburb">Suburb</label>
                    <input value="$Suburb" type="text" name="Suburb" class="text" id="FoundationForm_DirectDebitForm_Suburb"/>
                </div>
            </div>
        </div>
        <div class="row ">
            <div id="City" class="ffhm field  text columns small-9">
                <label for="FoundationForm_DirectDebitForm_City">City/Region</label>
                <input value="$City" type="text" name="City" class="text columns small-9" id="FoundationForm_DirectDebitForm_City"/>
            </div>
            <div id="Postcode" class="ffhm field  text columns small-3">
                <label for="FoundationForm_DirectDebitForm_Postcode">Postcode</label>
                <input value="$Postcode" type="text" name="Postcode" class="text columns small-3" id="FoundationForm_DirectDebitForm_Postcode"/>
            </div>
        </div>
    </div>
    <div class="columns small-5 columns">
        <div class="row ">
            <div class="columns small-10 columns push-2">
                <div id="PhoneDay" class="ffhm field  text">
                    <label for="FoundationForm_DirectDebitForm_PhoneDay">Daytime Phone Number</label>
                    <input value="$PhoneDay" type="text" name="PhoneDay" class="text" id="FoundationForm_DirectDebitForm_PhoneDay"/>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="columns small-10 columns push-2">
                <div id="PhoneNight" class="ffhm field  text">
                    <label for="FoundationForm_DirectDebitForm_PhoneNight">Night Phone Number</label>
                    <input value="$PhoneNight" type="text" name="PhoneNight" class="text" id="FoundationForm_DirectDebitForm_PhoneNight"/>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="columns small-10 columns push-2">
                <div id="Email" class="ffhm field  text">
                    <label for="FoundationForm_DirectDebitForm_Email">Email Address</label>
                    <input value="$Email" type="text" name="Email" class="text" id="FoundationForm_DirectDebitForm_Email"/>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="titlepanel wide bg green"><h2>Your Bank Account Details</h2></div>
<div>&nbsp;</div>
<div class="row ">
    <div class="columns small-6">
        <div id="NameOfAccount" class="ffhm field  text">
            <label for="FoundationForm_DirectDebitForm_NameOfAccount">Name of account to be debited</label>
            <input value="$NameOfAccount" type="text" name="NameOfAccount" class="text" id="FoundationForm_DirectDebitForm_NameOfAccount"/>
        </div>
    </div>
    <div class="columns small-4">
        <div id="SignatoryName" class="ffhm field  text">
            <label for="FoundationForm_DirectDebitForm_SignatoryName">Signatory Name (if different)</label>
            <input value="$SignatoryName" type="text" name="SignatoryName" class="text" id="FoundationForm_DirectDebitForm_SignatoryName"/>
        </div>
    </div>
</div>
<div class="row ">
    <div class="columns small-6 columns">
        <div class="row ">
            <label id="FoundationForm_DirectDebitForm_bank_label" class="readonly small-12 columns bold">Account to be
                Debited</label>

            <div class="columns small-2">
                <div id="BankCodeNum" class="ffhm field  numeric text">
                    <label for="FoundationForm_DirectDebitForm_BankCodeNum">Bank</label>
                    <input value="$BankCodeNum" type="text" name="BankCodeNum" class="numeric text" id="FoundationForm_DirectDebitForm_BankCodeNum" size="2"/>
                </div>
            </div>
            <div class="columns small-2">
                <div id="BankBranchNum" class="ffhm field  numeric text">
                    <label for="FoundationForm_DirectDebitForm_BankBranchNum">Branch</label>
                    <input value="$BankBranchNum" type="text" name="BankBranchNum" class="numeric text" id="FoundationForm_DirectDebitForm_BankBranchNum" size="4"/>
                </div>
            </div>
            <div class="columns small-4">
                <div id="BankAccountNum" class="ffhm field  numeric text">
                    <label for="FoundationForm_DirectDebitForm_BankAccountNum">Account</label>
                    <input value="$BankAccountNum" type="text" name="BankAccountNum" class="numeric text" id="FoundationForm_DirectDebitForm_BankAccountNum" size="7"/>
                </div>
            </div>
            <div class="columns small-2">
                <div id="BankAccountSuffix" class="ffhm field  numeric text">
                    <label for="FoundationForm_DirectDebitForm_BankAccountSuffix">Suffix</label>
                    <input value="$BankAccountSuffix" type="text" name="BankAccountSuffix" class="numeric text" id="FoundationForm_DirectDebitForm_BankAccountSuffix" size="3"/>
                </div>
            </div>
            <div class="columns small-12" id="accerrors"></div>
        </div>
    </div>
</div>
<div class="row ">
    <div class="columns small-6 columns">
        <div class="row ">
            <label id="FoundationForm_DirectDebitForm_bank_address_label" class="readonly small-12 columns bold">To the
                Manager</label>

            <div class="columns small-12">
                <div id="BankName" class="ffhm field  text">
                    <label for="FoundationForm_DirectDebitForm_BankName">Bank</label>
                    <input value="$BankName" type="text" name="BankName" class="text" id="FoundationForm_DirectDebitForm_BankName"/>
                </div>
            </div>
            <div class="columns small-12">

                <div id="BankBranchName" class="ffhm field  text">
                    <label for="FoundationForm_DirectDebitForm_BankBranchName">Branch</label>
                    <input value="$BankBranchName" type="text" name="BankBranchName" class="text" id="FoundationForm_DirectDebitForm_BankBranchName"/>
                </div>
            </div>
            <div class="columns small-12">
                <div id="BankAddress" class="ffhm field  text">
                    <label for="FoundationForm_DirectDebitForm_BankAddress">Address of Bank</label>
                    <input value="$BankAddress" type="text" name="BankAddress" class="text" id="FoundationForm_DirectDebitForm_BankAddress"/>
                </div>
            </div>
        </div>
    </div>
    <div class="columns small-6 columns">
        <div class="row ">
            <div class="columns hide-for-small">&nbsp;</div>
        </div>
        <div class="row ">
            <div class="columns small-5 push-7">
                <div id="auth_code" class="ffhm field  numeric text label-bold input-bold input-bigger">
                    <label for="FoundationForm_DirectDebitForm_auth_code">Authorisation Code</label>
                    <input type="text" name="auth_code" value="0227637" class="numeric text label-bold input-bold input-bigger" id="FoundationForm_DirectDebitForm_auth_code" readonly="readonly"/>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="columns small-4 push-7">
                <div id="ApplicationDateDate" class="ffhm field  date text wide label-bold input-bold input-bigger">
                    <label for="FoundationForm_DirectDebitForm_ApplicationDate">Application Date</label>
                    <input value="$ApplicationDate" type="text" name="ApplicationDate" class="date text wide label-bold input-bold input-bigger" id="FoundationForm_DirectDebitForm_Date" readonly="readonly" />
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row "><div class="large-12 columns ">&nbsp;</div></div>


<div class="row ">
    			<div class="titlepanel bg white wide large-centered radius" style="text-align: center">
    			<div id="accept_application_confirm" class="fcfhs field checkbox">
    	    <label for="FoundationForm_DirectDebitForm_accept_application_confirm" class="checkbox">
            <input type="checkbox" name="accept_application_confirm" value="1" checked="checked" class="checkbox" id="FoundationForm_DirectDebitForm_accept_application_confirm" data-parsley-required="true" data-parsley-required-message="You must check this box to proceed" data-parsley-multiple="accept_application_confirm" data-parsley-id="6933"> I/We authorise Pulse Energy Limited (hereinafter referred to as the Initiator), using Authorisation Code 0227637, until further notice to debit my/our account with all amounts the Initiator may initiate by Direct Debit.</label><div class="parsley-errors-list" id="parsley-id-multiple-accept_application_confirm"></div>
        </div>
    </div>
<div class="row "><div class="large-12 columns">&nbsp;</div></div>

<%--<div class="row ">
    <div style="text-align: center">
        <p>I/We authorise you until further notice in writing to debit my/our account with you all amounts which -</p>

        <div class="titlepanel bg white wide small-centered radius">
            Pulse Energy Limited--%><%--, PO Box 10044, Auckland 1446.<br>
            (Physical address: Pulse Energy Limited, Level 1 East, 12-16 Nicholls Lane, Carlaw Park, Parnell, Auckland 1010)--%><%--
        </div>
        <p>(hereinafter referred to as the Initiator)

        <p>

        <p>The registered Initiator of the above Authorisation Code may initiate by Direct Debit.
            I/We acknowledge and accept that the bank accepts this authority only upon the conditions listed on this
            form.</p></div>
</div>--%>
<div class="row ">
    <label id="FoundationForm_DirectDebitForm_info_to_appear" class="readonly small-12 columns bold">Information which
        will appear on your Bank Statement</label>
    <label id="FoundationForm_DirectDebitForm_info_to_appear_more" class="readonly small-12 columns">For your
        information only. These particulars are fixed.</label>

    <div class="small-12 columns hide-for-small">&nbsp;</div>
</div>
<div class="row ">
    <div class="small-2 columns"><label for="payer_particulars">Payer Particulars</div>
    <div class="columns small-5 columns pull-5">
        <div id="payer_particulars" class="ffhm field  text nolabel">
            <input type="text" name="payer_particulars" value="PULSE ENERGY" class="text nolabel" id="FoundationForm_DirectDebitForm_payer_particulars" readonly="readonly"/>
        </div>
    </div>
</div>
<div class="row ">
    <div class="small-2 columns"><label for="payer_code">Payer Code</div>
    <div class="columns small-5 columns pull-5">
        <div id="payer_code" class="ffhm field  text nolabel">
            <input type="text" name="payer_code" class="text nolabel" id="FoundationForm_DirectDebitForm_payer_code" readonly="readonly" placeholder="We will insert a unique payment code here"/>
        </div>
    </div>
</div>
<div class="row ">
    <div class="small-2 columns"><label for="payer_ref">Payer Reference</label></div>
    <div class="columns small-5 columns pull-5">
        <div id="payer_ref" class="ffhm field  text nolabel">
            <input type="text" name="payer_ref" class="text nolabel" id="FoundationForm_DirectDebitForm_payer_ref" readonly="readonly" placeholder="We will insert your Consumer Number here"/>
        </div>
    </div>
</div>
<div class="row ">
    <div class="small-12 columns ">&nbsp;</div>
    <label id="FoundationForm_DirectDebitForm_accept_authority_label" class="readonly small-12 columns bold">Conditions
        of this Authority</label>

    <div class="small-12 columns hide-for-small">&nbsp;</div>
    <div class="columns small-12">
<%--        <div class="" style="margin-bottom:0.5em">For dual signatories, please download and print the form <a style="color:#5A8C00;font-weight:bold;font-style:italic" target="_blank" href="/directdebitform">here</a> or contact us at 0800 785 755 to request a printed Direct Debit form. Please make sure that the Direct Debit form is signed by all authorised parties of the bank account, and send it back to us at:<br/><b>Pulse Energy, P.O. BOX 10044, Dominion Road, Auckland 1446.</b></div>
        <div class="" style="margin-bottom:0.5em">
            Note: If dual signatories are actually required, this form is invalid.
        A direct debit authority form is required to be signed by both signatories and returned. Please download and print the paper form <a style="color:#5A8C00;font-weight:bold;font-style:italic" target="_blank" href="/directdebitform">here</a> or contact us at 0800 785 755 to request a printed Direct Debit form and send it back to us at: <b>Pulse Energy, P.O. BOX 10044, Dominion Road, Auckland 1446.</b>
            </div>--%>
       <%-- <div class="">&nbsp;</div>--%>
        <div id="accept_authority_confirm" class="fcfhs field checkbox">
            <label style="margin-bottom:0em" for="FoundationForm_DirectDebitForm_accept_authority_confirm" class="checkbox"><input type="checkbox" name="accept_authority_confirm" value="1" checked="checked" class="checkbox" id="FoundationForm_DirectDebitForm_accept_authority_confirm" data-parsley-required="true" data-parsley-required-message="You must check this box to proceed"/>
                I confirm that I have the sole authority for the bank account submitted in this application</label>
        </div>
        <div id="accept_authority" class="fcfhs field checkbox" >
            <label style="margin-bottom:0em" for="FoundationForm_DirectDebitForm_accept_authority" class="checkbox"><input type="checkbox" name="accept_authority" value="1" checked="checked" class="checkbox" id="FoundationForm_DirectDebitForm_accept_authority" data-parsley-required="true" data-parsley-required-message="You must check this box to proceed"/>
                I accept the Conditions of this Authority which can be read on the accompanying page.</label>
        </div>
    </div>
</div>
<%--<div class="row ">
    <div class="small-12 columns hide-for-small">&nbsp;</div>
    <div class="columns small-12">

    </div>
</div>--%>
    <%--<div class="row ">

    <div class="small-12 columns hide-for-small">&nbsp;</div>

    <label id="FoundationForm_DirectDebitForm_copy_me_label" class="readonly small-12 columns bold">Email Copy</label>

    <div class="small-12 columns hide-for-small">&nbsp;</div>

    <div class="columns small-7 columns pull-5">

        <div id="copy_me" class="fcfhs field checkbox">
            <label for="FoundationForm_DirectDebitForm_copy_me" class="checkbox"><input type="checkbox" name="copy_me" value="1" class="checkbox" id="FoundationForm_DirectDebitForm_copy_me"/>
                Send a copy of this form to my Email Address</label>


        </div>
    </div>
</div>--%>
<%--<div class="clear"><!-- --></div>--%>
</fieldset>

</form>
</div>
</div>
<%--<% include DDTCs %>--%>
<%--</div>--%>









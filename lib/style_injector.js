jQuery(document).ready(function () {
    var style = '.vanadium-container > label, .vanadium-container > input, .wikistyle > label, .wikistyle > input {    margin: 10px;    padding: 10px;}.vanadium-container > input, .wikistyle > input {    border-color: blue;    border-style: solid;}div.vanadium-container {    margin: 10px;    padding: 10px;    border-color: blue;    border-style: solid;}div.vanadium-invalid {    border-color: red !important;    border-style: solid !important;}div.vanadium-valid {    border-color: green !important;    border-style: solid !important;}.vanadium-message-value {    font-style: italic;    text-decoration: underline;}.vanadium-advice.vanadium-invalid, .vanadium-advice.vanadium-invalid * {    color: red;}input.vanadium-valid {    background-color: greenyellow;    border-color: green !important;}input.vanadium-invalid {    background-color: pink;    border-color: red !important;}input.vanadium-valid ~ .vanadium-valid-advice {    display: inline !important;    color: green;}'
    jQuery('#css_placeholder').replaceWith('<style  TYPE="text/css">'+style+'</style>');
});
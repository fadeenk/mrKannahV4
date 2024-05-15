<?php

// Set email variables
$email_to = 'info@healthescortservices.com';
$email_subject =  $_POST['subject'];

// Set required fields
$required_fields = array('fullname','email','comment','subject');

// set error messages
$error_messages = array(
	'fullname' => 'Please enter a Name to proceed.',
	'email' => 'Please enter a valid Email Address to continue.',
	'comment' => 'Please enter your Message to continue.',
	'subject' => 'Please enter a valid subject to continue.'
);

// Set form status
$form_complete = FALSE;

// configure validation array
$validation = array();

// check form submittal
if(!empty($_POST)) {
	// Sanitise POST array
	foreach($_POST as $key => $value) $_POST[$key] = remove_email_injection(trim($value));
	
	// Loop into required fields and make sure they match our needs
	foreach($required_fields as $field) {		
		// the field has been submitted?
		if(!array_key_exists($field, $_POST)) array_push($validation, $field);
		
		// check there is information in the field?
		if($_POST[$field] == '') array_push($validation, $field);
		
		// validate the email address supplied
		if($field == 'email') if(!validate_email_address($_POST[$field])) array_push($validation, $field);
	}
	
	// basic validation result
	if(count($validation) == 0) {
		// Prepare our content string
		$email_content = 'New Website Comment: ' . "\n\n";
		
		// simple email content
		foreach($_POST as $key => $value) {
			if($key != 'submit') $email_content .= $key . ': ' . $value . "\n";
		}
		
		//headers
		$headers = 'Reply-To: '.$_POST['email']. "\r\n" . 
        'X-Mailer: PHP/' . phpversion(). "\r\n";
		
		// if validation passed ok then send the email
		mail($email_to, $email_subject, $email_content, $headers);
		// Update form switch
		$form_complete = TRUE;
	}
}

function validate_email_address($email = FALSE) {
	return (preg_match('/^[^@\s]+@([-a-z0-9]+\.)+[a-z]{2,}$/i', $email))? TRUE : FALSE;
}

function remove_email_injection($field = FALSE) {
   return (str_ireplace(array("\r", "\n", "%0a", "%0d", "Content-Type:", "bcc:","to:","cc:"), '', $field));
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contact, California Health Escort Services</title>
<link href="css/templatemo_style.css" rel="stylesheet" type="text/css" />

	<script type="text/javascript">
		var nameError = '<?php echo $error_messages['fullname']; ?>';
		var emailError = '<?php echo $error_messages['email']; ?>';
		var commentError = '<?php echo $error_messages['comment']; ?>';
	</script>


<script language="javascript" type="text/javascript">
function clearText(field)
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}
</script>

<link rel="stylesheet" type="text/css" href="css/ddsmoothmenu.css" />

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/ddsmoothmenu.js">

/***********************************************
* Smooth Navigational Menu- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

</script>

<script type="text/javascript">

ddsmoothmenu.init({
	mainmenuid: "templatemo_menu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

</script>

<!--////// CHOOSE ONE OF THE 3 PIROBOX STYLES  \\\\\\\-->
<link href="css_pirobox/white/style.css" media="screen" title="shadow" rel="stylesheet" type="text/css" />
<!--<link href="css_pirobox/white/style.css" media="screen" title="white" rel="stylesheet" type="text/css" />
<link href="css_pirobox/black/style.css" media="screen" title="black" rel="stylesheet" type="text/css" />-->
<!--////// END  \\\\\\\-->

<!--////// INCLUDE THE JS AND PIROBOX OPTION IN YOUR HEADER  \\\\\\\-->
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/piroBox.1_2.js"></script>
<script type="text/javascript">
$(document).ready(function() {
$().piroBox({
        my_speed: 600, //animation speed
        bg_alpha: 0.5, //background opacity
        radius: 4, //caption rounded corner
        scrollImage : false, // true == image follows the page, false == image remains in the same open position
        pirobox_next : 'piro_next', // Nav buttons -> piro_next == inside piroBox , piro_next_out == outside piroBox
        pirobox_prev : 'piro_prev',// Nav buttons -> piro_prev == inside piroBox , piro_prev_out == outside piroBox
        close_all : '.piro_close',// add class .piro_overlay(with comma)if you want overlay click close piroBox
        slideShow : 'slideshow', // just delete slideshow between '' if you don't want it.
        slideSpeed : 4 //slideshow duration in seconds(3 to 6 Recommended)
});
});
</script>
<!--////// END  \\\\\\\-->
  
</head>
<body id="sub_page">
<div id="templatemo_wrapper">
	<div id="language"><a href="index.html" title="English"><img src="images/english.jpg" alt="English"/></a><a href="arabic/index.html" title="Arabic"><img src="images/arabic.jpg" /></a></div>
   	<div id="templatemo_header">
    	<div id="site_title"><h1><a href="index.html"></a></h1></div>
        <div id="templatemo_menu" class="ddsmoothmenu">
            <ul>
              	<li><a href="index.html">Home</a></li>
         		<li><a href="about.html">About Us</a>
                    
              	</li>
          		<li><a href="services.html">Services</a>
                    <ul>
                        <li><a href="escort.html">Personal Escort</a></li>
                        <li><a href="scheduling.html">Scheduling</a></li>
                        <li><a href="guides.html">Bilingual Guides</a></li>
                        <li><a href="enter.html">Entertainment</a></li>
                  	</ul>
              	</li>
              	<li><a href="partners.html">Partners</a></li>
                <li><a href="policies.html">Policies</a></li>
                <li><a href="treatment.html">Treatment</a></li>
              	<li><a href="contact.php" class="selected">Contact</a></li>
            </ul>
            <br style="clear: left" />
        </div> <!-- end of templatemo_menu -->
    </div> <!-- end of header -->
    
    <div id="templatemo_main">
    	<h2>Contact Information</h2>
        <div class="col_w630 float_l">
        	
             <div id="contact_form">
        
                <h4>Send us a message...</h4>
                <?php if($form_complete === FALSE): ?>
                <form method="post" name="contact" action="contact.php" id="comments_form">
					
					<label for="fullname">Name:</label> <input type="text" id="fullname" name="fullname" class="validate-subject required input_field" value="<?php echo isset($_POST['fullname'])? $_POST['fullname'] : ''; ?>" /><?php if(in_array('fullname', $validation)): ?><span class="error"><?php echo $error_messages['fullname']; ?></span><?php endif; ?>
					<div class="cleaner h10"></div>
																	
					<label for="email">Email:</label> <input type="text" class="validate-subject required input_field" name="email" id="email" value="<?php echo isset($_POST['email'])? $_POST['email'] : ''; ?>" /><?php if(in_array('email', $validation)): ?><span class="error"><?php echo $error_messages['email']; ?></span><?php endif; ?>
					<div class="cleaner h10"></div>
															
					<label for="subject">Subject:</label> <input type="text" class="validate-subject required input_field" name="subject" id="subject" value="<?php echo isset($_POST['subject'])? $_POST['subject'] : ''; ?>" /><?php if(in_array('subject', $validation)): ?><span class="error"><?php echo $error_messages['subject']; ?></span><?php endif; ?>				               
					<div class="cleaner h10"></div>
											
					<label for="text">Message:</label> <textarea id="comment" name="comment" rows="0" cols="0" class="mess"><?php echo isset($_POST['comment'])? $_POST['comment'] : ''; ?></textarea><?php if(in_array('comment', $validation)): ?><span class="error"><?php echo $error_messages['comment']; ?></span><?php endif; ?>
					<div class="cleaner h10"></div>				
																
					<input type="submit" value="Send" id="submit" name="submit" class="submit_btn float_l" />
					<input type="reset" value="Reset" id="reset" name="reset" class="submit_btn float_r" /><?php else: ?><br /><p>Thank you for your Message!</p><?php endif; ?>
										
				</form>
        
            </div> 
        </div>
        
        <div class="col_w300 float_r">
            <div class="col_fw">	
            	<h4>Mailing Address</h4>
                <h6><strong>California Health Escort Services</strong></h6>
                3659 India Street, Suite 200<br />
                San Diego, California 92103<br />
                USA<br /><br />
				
				<strong>Phone:</strong> 1-619-692-4444<br />
                <strong>Fax:</strong> 1-619-692-4292<br />
                <strong>Email:</strong> <a href="mailto:info@healthescortservices.com">info@healthescortservices.com</a>
            </div>            
            <div class="col_fw_last">
                <h4>Our Location</h4>
                <div id="map"><script type="text/javascript" src="http://cdn.widgetserver.com/syndication/subscriber/InsertWidget.js"></script><script type="text/javascript">if (WIDGETBOX) WIDGETBOX.renderWidget('a91f0b48-28a5-47c4-a92e-c65bf01e4f86');</script>
<noscript>Your browser does not support this plug in.</noscript></div>                
            </div>
        </div>

        <div class="cleaner"></div>
    </div> <!-- end of main -->
</div> <!-- end of wrapper -->

<div id="templatemo_footer_wrapper">
    <div id="templatemo_footer">
        Copyright © 2012 <a href="#">California Health Escort Services</a> | 
        Created by 
        <a href="http://www.mrkannah.com" target="_parent">F. Kannah</a>
        <div class="cleaner"></div>
    </div>
</div> 

  
</body>
</html>
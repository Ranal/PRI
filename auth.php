<?php
	//Start session
	session_start();
	
	//Check whether the session variable SESS_MEMBER_ID is present or not
	if(!isset($_SESSION['SESS_MEMBER_ID']) || (trim($_SESSION['SESS_MEMBER_ID']) == '')) {
		      header("Location:login-form.php?location=" . urlencode($_SERVER['REQUEST_URI']));
              // Note: $_SERVER['REQUEST_URI'] is your current page
		exit();
	}
?>
<?php
	//Start session
	session_start();
    $_SESSION['url'] = $_SERVER['REQUEST_URI']; 

	//Check whether the session variable SESS_MEMBER_ID is present or not
	if(!isset($_SESSION['SESS_MEMBER_ID']) || (trim($_SESSION['SESS_MEMBER_ID']) == '')) {
             include 'login-form.php';
		exit();
	}
?>
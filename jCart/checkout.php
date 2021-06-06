<?php

// INCLUDE JCART BEFORE SESSION START
include 'jcart/jcart.php';

// START SESSION
session_start();

// INITIALIZE JCART AFTER SESSION START
$cart =& $_SESSION['jcart']; if(!is_object($cart)) $cart = new jcart();

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>jCart - Free Ajax/PHP shopping cart</title>
		<link rel="stylesheet" type="text/css" media="screen, projection" href="jcart/jcart.css" />
		<link rel="stylesheet" type="text/css" media="screen, projection" href="demo.css" />
	</head>
	<body>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8810347615083175"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-8810347615083175"
     data-ad-slot="9435784898"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

		<div id="wrapper">
			<div id="sidebar">
				<h2 class="title">Demo Checkout</h2>
				<div class="cart-wrapper-left">&nbsp;</div>
				<div class="cart-wrapper-center">
					<?php $cart->display_cart($jcart);?>
				</div>
				<div class="cart-wrapper-right">&nbsp;</div>
			</div>

			<div id="content">
				<p><a href="index.php">&larr; Continue shopping</a></p>
				<div class="clear"></div>
			</div>
		</div>

		<script type="text/javascript" src="jcart/jquery-1.3.2.min.js"></script>
		<script type="text/javascript" src="jcart/jcart-javascript.min.php"></script>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8810347615083175"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-8810347615083175"
     data-ad-slot="9435784898"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-187022639-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-187022639-1');
</script>
</body>
</html>

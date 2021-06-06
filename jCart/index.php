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


		<div id="wrapper">

			<div id="sidebar">
				<h2 class="title">Your Cart</h2>
				<div class="cart-wrapper-left">&nbsp;</div>
				<div class="cart-wrapper-center">
					<?php $cart->display_cart($jcart);?>
				</div>
				<div class="cart-wrapper-right">
				</div>
			</div>

			<div id="content">
				<form method="post" action="" class="jcart">
					<fieldset>
						<input type="hidden" name="my-item-id" value="1" />
						<input type="hidden" name="my-item-name" value="Soccer Ball" />
						<input type="hidden" name="my-item-price" value="25.00" />

						<ul>
							<li><strong>Soccer Ball</strong></li>
							<li>Price: $25.00</li>
							<li>
								<label>Qty: <input type="text" name="my-item-qty" value="1" size="3" /></label>
							</li>
						</ul>

						<input type="image" src="images/add-to-cart.png" name="my-add-button" value="add to cart" class="button" />
					</fieldset>
				</form>

				<form method="post" action="" class="jcart">
					<fieldset>
						<input type="hidden" name="my-item-id" value="2" />
						<input type="hidden" name="my-item-name" value="Baseball Mitt" />
						<input type="hidden" name="my-item-price" value="19.50" />

						<ul>
							<li><strong>Baseball Mitt</strong></li>
							<li>Price: $19.50</li>
							<li>
								<label>Qty: <input type="text" name="my-item-qty" value="1" size="3" /></label>
							</li>
						</ul>

						<input type="image" src="images/add-to-cart.png" name="my-add-button" value="add to cart" class="button" />
					</fieldset>
				</form>

				<form method="post" action="" class="jcart">
					<fieldset>
						<input type="hidden" name="my-item-id" value="3" />
						<input type="hidden" name="my-item-name" value="Hockey Stick" />
						<input type="hidden" name="my-item-price" value="33.25" />

						<ul>
							<li><strong>Hockey Stick</strong></li>
							<li>Price: $33.25</li>
							<li>
								<label>Qty: <input type="text" name="my-item-qty" value="1" size="3" /></label>
							</li>
						</ul>

						<input type="image" src="images/add-to-cart.png" name="my-add-button" value="add to cart" class="button" />
					</fieldset>
				</form>

				<form method="post" action="" class="jcart">
					<fieldset>
						<input type="hidden" name="my-item-id" value="4" />
						<input type="hidden" name="my-item-name" value="Golf Stick" />
						<input type="hidden" name="my-item-price" value="33.25" />

						<ul>
							<li><strong>Golf Stick</strong></li>
							<li>Price: $33.25</li>
							<li>
								<label>Qty: <input type="text" name="my-item-qty" value="1" size="3" /></label>
							</li>
						</ul>

						<input type="image" src="images/add-to-cart.png" name="my-add-button" value="add to cart" class="button" />
					</fieldset>
				</form>

				<form method="post" action="" class="jcart">
					<fieldset>
						<input type="hidden" name="my-item-id" value="5" />
						<input type="hidden" name="my-item-name" value="Futsal Ball" />
						<input type="hidden" name="my-item-price" value="33.25" />

						<ul>
							<li><strong>Futsal Ball</strong></li>
							<li>Price: $33.25</li>
							<li>
								<label>Qty: <input type="text" name="my-item-qty" value="1" size="3" /></label>
							</li>
						</ul>

						<input type="image" src="images/add-to-cart.png" name="my-add-button" value="add to cart" class="button" />
					</fieldset>
				</form>

				<div class="clear"></div>
			</div>
		</div>

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

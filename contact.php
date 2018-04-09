<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Portfolio and contact website for Braeden Beaulieu.">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<link rel="icon" href="/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-99581506-2"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-99581506-2');
	</script>
	<title>braeden beaulieu</title>
</head>

<body>
	<header>
		<h1>bb</h1>
		<div id="burger"><p id="navToggle">&#9776;</p></div>
		<nav id="nav">
			<ul>
				<li id="aboutLink">about</li>
				<li id="portfolioLink">work</li>
				<li id="contactLink">contact</li>
			</ul>
		</nav>
	</header>

	<section id="contact">
		<?php 
		if(isset($_POST['submit'])) {
			$name = $_POST["name"];
			$email = $_POST["email"];
			$to = "braedenbeaulieu@gmail.com";
			$subject = $_POST["subj"];
			$body = $_POST["body"];
			$msg = <<<EMAIL




$body



from: $name at $email.
EMAIL;
			mail($to, $subject, $msg);

			echo "<h3 id=\"sentMessage\">Thank you for sending your message! I'll get back to you ASAP. Back to <a href=\"index.html\">homepage</a></h3>";
		}
		?>
	</section>

	<footer>
		<p>all content &copy; braeden beaulieu <script>let d = new Date(); document.write(d.getFullYear());</script></p>
	</footer>
</body>
	<script src="https://use.fontawesome.com/7429206e6e.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="javascript/functions-min.js"></script>
</html>
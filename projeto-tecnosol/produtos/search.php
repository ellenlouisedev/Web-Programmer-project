<!DOCTYPE HTML>
<head>
	<title>Search</title>
	<meta charset="utf-8">
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="js/request_url.js"></script>
    <!--[if lt IE 9]>
        <script type="text/javascript" src="js/html5.js"></script>
        <link href="css/IE8.css" rel="stylesheet" type="text/css">
    <![endif]-->
</head>
<body>
<div class="grid_12">
	<div class="dynamicContent">
		<h2>Search result:</h2>
		<?php 
			if($_GET["s"]){$s=$_GET["s"];};
			include("search/results.php");
		?>
	</div>
</body>
</html>
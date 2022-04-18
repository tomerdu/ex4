<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome</h1>
    <?php
    $fn = $_GET["fullName"];
    $ps = $_GET["pass"];
    $em = $_GET["mail"];
    
    if($fn == "Tomer Duchovni" && $ps == "Ab123456" && $em == 'tomerduchovni@gmail.com')
    {
        echo "<h2> Is that really you ! " . $fn . "</h2>";
    }
    else
    {
        echo "<h2> Who are you? I do not recognize you</h2>";
    }
    ?>
    
</body>
</html>
<?php
include_once 'functions.php';
session_start();

if(!$_SESSION['logged']){
    header('Location: login.php');
}

$articolo = article($_REQUEST['article-id']);
?>

<?php include_once 'header.php'; ?>
<?php include_once 'navbar.php'; ?>

<div class="container my-3">
    <h1><?=$articolo['title']?></h1>
    <div>
        <img src=<?=$articolo['img']?> class="w-100 my-2" alt="">
        <?=$articolo['content']?>
    </div>
</div>

<?php include_once 'footer.php'; ?>
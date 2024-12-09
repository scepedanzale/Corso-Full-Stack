<?php

session_start();
$_SESSION['lang'] = 'it';

if(!$_SESSION['logged']){
    header('Location: login.php');
}

if(!isset($_SESSION['content'])){
    news($mysqli);
}

  
?>

<?php include_once 'header.php'; ?>
<?php include_once 'navbar.php'; ?>

<div class="container my-3">
    <!-- <h1><?= $_SESSION['content']['title'];?></h1>
    <h3><?= $_SESSION['content']['author'];?></h3>
    <img class="w-100" src=<?= $_SESSION['content']['img'];?> alt="">
    <p><?= $_SESSION['content']['content'];?></p> -->
    <?php 
        //print_r($_SESSION['content']);
        $articoli = $_SESSION['content'];
        foreach($articoli as $articolo){?>
            <div class="card my-3">
                <img src=<?=$articolo['img']?> class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><?=$articolo['title']?></h5>
                    <p class="card-text"><?=$articolo['author']?></p>
                    <a href="articolo.php?article-id=<?=$articolo['id']?>" class="">Leggi articolo</a>
                </div>
            </div>
        <?php }
    ?>
</div>

<?php include_once 'footer.php'; ?>
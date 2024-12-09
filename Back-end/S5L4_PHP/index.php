<?php 

    include_once 'classes/Biblioteca.php'; 
    // Ottenere il numero totale di libri

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>

    <div class="container-fluid my-5">
        <h2>Libri</h2>

        <!-- <form action="controller.php?action=addBook" method="POST">
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="titolo..." name="titolo" required>
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="autore..." name="autore" required>
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" placeholder="anno pubblicazione..." name="anno_pubb" required>
        </div>
        <button type="submit" class="btn btn-dark">Aggiungi Libro</button>
        </form> -->

        <?php 
            $b1 = new Libro('Harry Potter e la pietra filosofale', 'J. K. Rowling', '2000'); 
            $b2 = new Libro('Harry Potter e la pietra filosofale', 'J. K. Rowling', '2000'); 
            echo $b1->titolo;
        ?>

        <div class="row mt-3">
            <p><b>Numero di libri: </b><?= Libro::contaLibri()?></p>
        </div>
    </div>


   <!--  <div class="container-fluid my-5">
        <h2>DVD</h2>
        <form action="controller.php?action=addDVD">
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="titolo..." name="titolo" required>
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="regista..." name="autore" required>
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" placeholder="anno pubblicazione..." name="anno_pubb" required>
        </div>
        <button type="submit" class="btn btn-dark">Aggiungi DVD</button>
        </form>
    </div> -->


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
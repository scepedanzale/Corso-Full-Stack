<?php include_once 'header.php';?>

<div class="container pt-5">
        <h1>Login</h1>

        <form method="POST" action="controllerLog.php">
        <div class="mb-3">
            <input type="email" class="form-control" name="email" placeholder="email...">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" name="password" placeholder="password...">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

<?php include_once 'footer.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Docker na Prática</title>
</head>
<body>
<?php
  $resul = file_get_contents('http://node-container:9001/users');
  $users = json_decode($resul);
?>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($users as $key => $user) : ?>
      <tr>
        <td><?php echo $user->name; ?></td>
        <td><?php echo $user->email; ?></td>
      </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
</body>
</html>
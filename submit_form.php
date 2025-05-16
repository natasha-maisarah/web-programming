<?php

//1. Connect to the database
$connection = new mysqli("localhost", "root", "", "portfolio_db");

//2. Check connection 
if ($connection->connect_error) {
    die ("Connection failed : " . $connection->connect_error);
}

//3.Get form values
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//4. Prepare and insert into DB
$sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
$stmt = $connection->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo "Message sent successfully!";
} else {
    echo "Error : " . $stmt->error;
}

$stmt->close();
$connection->close();
?>
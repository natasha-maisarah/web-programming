<?php

//Get form values
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//Database connection variables 
$servername = "sql305.infinityfree.com";
$username = "if0_39002124";
$password = "TashAriFar404";
$dbname = "if0_39002124__portfolio";

//Connect to the database
$connection = new mysqli($servername, $username, $password, $dbname);

// Check connection 
if ($connection->connect_error) {
    echo "<script>alert('Connection failed: " . $connection->connect_error . "');</script>";
    exit();
}

//4. Prepare and insert into DB
$sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
$stmt = $connection->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo "<script>alert('Message sent successfully!'); window.history.back();</script>";
} else {
    echo "<script>alert('Error: " . $stmt->error . "'); window.history.back();</script>";
}

$stmt->close();
$connection->close();
?>
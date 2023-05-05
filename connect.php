<?php
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$comment = filter_input(INPUT_POST, 'comment', FILTER_SANITIZE_STRING);

if (!$name) {
    http_response_code(400);
    echo "Error: Name should not be empty";
    exit;
}

if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Error: Invalid email address";
    exit;
}

// Establish a database connection
$host = "sql306.epizy.com";
$dbusername = "epiz_33593309";
$dbpassword = "cWaDZSjhni";
$dbname = "epiz_33593309_contact";

$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo "Error: Failed to connect to database";
    exit;
}

// Insert a new record
$stmt = $conn->prepare("INSERT INTO contact (name, email, comment) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $comment);

if ($stmt->execute()) {
    echo '<script>alert("Your message was sent successfully");</script>';
    echo '<script>window.location.href = "about.html";</script>';
} else {
    http_response_code(500);
    echo '<script>alert("Error: Failed to send");</script>';
}

$stmt->close();
$conn->close();

?>
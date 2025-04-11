<?php
error_reporting(0);
ini_set('display_errors', 0);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $number = isset($_POST['number']) ? htmlspecialchars(trim($_POST['number'])) : '';
    $service = isset($_POST['service']) ? htmlspecialchars(trim($_POST['service'])) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["success" => false, "message" => "All fields are required"]);
        exit;
    }

    // Build entry dynamically, skip empty fields
    $entry = [ 'time' => date("Y-m-d H:i:s") ];
    if (!empty($name)) $entry['name'] = $name;
    if (!empty($email)) $entry['email'] = $email;
    if (!empty($number)) $entry['number'] = $number;
    if (!empty($service)) $entry['service'] = $service;
    if (!empty($message)) $entry['message'] = $message;

    $file = __DIR__ . '/form-submissions.json';
    $old = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $old[] = $entry;
    file_put_contents($file, json_encode($old, JSON_PRETTY_PRINT));

    // Build email rows conditionally
    $rows = '';
    if (!empty($name)) $rows .= "<tr><td><strong>Name:</strong></td><td>$name</td></tr>";
    if (!empty($email)) $rows .= "<tr><td><strong>Email:</strong></td><td>$email</td></tr>";
    if (!empty($number)) $rows .= "<tr><td><strong>Contact No:</strong></td><td>$number</td></tr>";
    if (!empty($service)) $rows .= "<tr><td><strong>Service:</strong></td><td>$service</td></tr>";
    if (!empty($message)) $rows .= "<tr><td><strong>Message:</strong></td><td>$message</td></tr>";

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 's7.itserver.biz';
        $mail->SMTPAuth = true;
        $mail->Username = 'hello@weboctane.tech';
        $mail->Password = 'M1vh7l$37';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('hello@weboctane.tech', 'WebOctane Contact');
        $mail->addAddress('hello@weboctane.tech');

        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission from $name";
        $mail->Body = "
            <div style='font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background-color: #ffffff; border: 1px solid #eaeaea;'>
                <h2 style='color: #e3b843; text-align: center;'>New Free Consultation Request</h2>
                <table style='width: 100%; margin-top: 20px;'>$rows</table>
                <hr style='margin: 30px 0; border-color: #e3b843;' />
                <p style='font-size: 12px; color: #999; text-align: center;'>Sent via Web Octane Contact Form</p>
            </div>
        ";

        $mail->send();
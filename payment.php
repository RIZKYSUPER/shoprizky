<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $productName = $_POST['productName'];
    $paymentMethod = $_POST['paymentMethod'];
    $phoneNumber = $_POST['phoneNumber'] ?? null;
    $gameId = $_POST['gameId'] ?? null;
    $serverId = $_POST['serverId'] ?? null;

    // Generate unique code
    $uniqueCode = rand(1, 700);

    // Process payment based on method
    switch ($paymentMethod) {
        case 'Dana':
            // Redirect to Dana payment page
            header("Location: dana_payment.php?product=$productName&code=$uniqueCode");
            break;
        case 'Ovo':
            // Redirect to Ovo payment page
            header("Location: ovo_payment.php?product=$productName&code=$uniqueCode");
            break;
        case 'Gopay':
            // Redirect to Gopay payment page
            header("Location: gopay_payment.php?product=$productName&code=$uniqueCode");
            break;
        case 'Qris':
            // Redirect to Qris payment page
            header("Location: qris_payment.php?product=$productName&code=$uniqueCode");
            break;
        default:
            echo "Invalid payment method";
            break;
    }
}
?>

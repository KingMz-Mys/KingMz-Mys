<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!file_exists('creds.json')) {
    file_put_contents('creds.json', json_encode([
        'username' => 'CustomerPD',
        'password' => 'CustomerVVIP'
    ]));
}

$creds = json_decode(file_get_contents('creds.json'), true);

if ($data['action'] == 'login') {
    if ($data['username'] === $creds['username'] && $data['password'] === $creds['password']) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
    }
} elseif ($data['action'] == 'adminUpdate') {
    if ($data['adminKey'] === 'KingAdmin') {
        $creds['username'] = $data['newUsername'];
        $creds['password'] = $data['newPassword'];
        file_put_contents('creds.json', json_encode($creds));
        echo json_encode(['success' => true, 'message' => 'Login updated successfully!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid Admin Password']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid Action']);
}
?>

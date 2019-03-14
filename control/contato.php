<?php

require_once("../packages/PHPMailer/class.phpmailer.php");
require_once("../packages/PHPMailer/class.smtp.php");

$nome 	   = $_REQUEST['nome'];
$email 	   = $_REQUEST['email'];
$msg       = $_REQUEST['message'];
$emaildest = "contato@buildforall.com.br"; 
$assunto   = $_REQUEST['subject'];

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'br418.hostgator.com.br';
$mail->SMTPAuth = true;
$mail->Username = $emaildest;
$mail->Password = 'V03021993adr';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

//$mail->setFrom($emaildest, 'Victor Alves');
//$mail->addReplyTo($email, $nome);
$mail->addAddress($emaildest, 'Victor Alves');
$mail->setFrom($email, $nome);

//$mail->addAttachment('local_do_anexo/arquivo.extenção', 'NomeAmigavel.extenção');

$mail->isHTML(true);
$mail->Subject = $assunto;
$mail->Body = "
<b>Nome:</b>    $nome,<br>
<b>Email:</b>   $email<br>
<br><br>
<b>Mensagem:</b><br>
$msg
";
//$mail->AltBody = 'Conteúdo alternativo (em texto simples), caso destinatário não possa receber em HTML';
/*
$resposta = $mail->send();

echo $resposta;
*/
if(!$mail->send()) {
	echo false;

} else {
	echo true;

}

?>
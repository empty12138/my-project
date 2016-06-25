<?php

$conn = mysqli_connect("localhost","root","");
	if (!$conn) {
		echo "连接失败";
	}else{
		mysqli_select_db($conn,'news');
		mysqli_query($conn,"set names utf8");//设置编码格式
		//echo "ok";
	}

?>
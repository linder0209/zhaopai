<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>找拍-我的找拍</title>
  <meta name="keywords" content="首页，任务专区，咨询活动，兑换中心， 我的找拍"/>
  <link type="text/css" rel="stylesheet" href="../../scripts/components/cropper/css/cropper.css"/>
  <link type="text/css" rel="stylesheet" href="../../styles/index.css">
</head>
<body>

<div class="personal-datum">
  <h2 class="header-title">修改密码</h2>
</div>

<form class="register-form">
  <ul class="form-items">
    <li>
      <label class="global-label">
        原密码：<br>
        <input type="password" class="global-input">
      </label>
    </li>
    <li>
      <label class="global-label">
        新密码：<br>
        <input type="password" class="global-input" placeholder="新密码不超过12个字符">
      </label>
    </li>
    <li>
      <label class="global-label">
        确认密码：<br>
        <input type="password" class="global-input">
      </label>
    </li>
    <li>
      <button class="global-button">保存修改</button>
    </li>
  </ul>

</form>

<div class="split-area"></div>
<div class="personal-datum">
  <h2 class="header-title">修改邮箱</h2>
</div>

<form class="register-form">
  <ul class="form-items">
    <li>
      <label class="global-label">
        验证邮箱：<br>
        <input type="email" class="global-input" placeholder="xxx@xxx.com">
      </label>
    </li>
    <li>
      <button class="global-button">发送验证码</button>
    </li>
    <li>
      <label class="global-label">
        验证码：<br>
        <input type="text" class="global-input checkcode-input" placeholder="验证码">
        <img src="../../myzp - 拷贝/images/checkcode.png" alt="" class="vertical-align-middle"/>
        <span class="reload-checkcode"></span>
      </label>
    </li>
    <li>
      <label class="global-label">
        新邮箱：<br>
        <input type="email" class="global-input" placeholder="xxx@xxx.com">
      </label>
    </li>
    <li>
      <button class="global-button">确认提交</button>
    </li>
  </ul>

</form>
<script src="../../scripts/components/jquery/jquery.js"></script>

<script type="text/javascript">
$(function(){
	var bodyHeight = $(document).outerHeight(true);
	var parentWindow = window.parent;
	
	parentWindow.$('#zpIframe')[0].height = bodyHeight;
	
});
		
</script>

</body>
</html>
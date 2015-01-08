<div id="myInfo">
  <div class="personal-datum">
    <h2 class="header-title">我的资料</h2>
  </div>

  <form class="register-form">
    <ul class="form-items">
      <li>
        <label class="global-label">
          手机号：<br>
          <input type="text" placeholder="请输入真实有效的手机号，以便密码找回" class="global-input">
        </label>
      </li>
      <li>
        <label class="global-label">
          真实姓名：<br>
          <input type="text" placeholder="请输入真实有效的邮箱，以便密码找回" class="global-input">
        </label>
      </li>
      <li>
        <label class="global-label">性别：</label><br>
        <label class="radio-label"><input type="radio">男</label>
        <label class="radio-label"><input type="radio">女</label>
      </li>
      <li>
        <label class="global-label">生日：</label><br>
        <select name="year" id="year" class="global-input select">        
        </select>
        <select name="month" id="month" class="global-input select">        
         </select>
        <select name="day" id="day" class="global-input select">       
        </select>
      </li>
      <li>
        <label class="global-label">
          所在地：<br>
          <select class="global-input">
            <option>北京</option>
          </select>
        </label>
      </li>
      <li>
        <label class="global-label" for="introduction">
          个人简介：
        </label>
        <br>
      <textarea name="" id="introduction" class="global-textarea">

      </textarea>
      </li>
      <li>
        <label class="global-label">固定空闲时间段：</label><br>
        <label class="radio-label"><input type="radio">选项1</label>
        <label class="radio-label"><input type="radio">选项2</label>
        <label class="radio-label"><input type="radio">选项3</label>
        <label class="radio-label"><input type="radio">选项4</label>
        <label class="radio-label"><input type="radio">选项5</label>
      </li>
      <li>
        <label class="global-label">
          居住地址：<br>
          <input type="text" class="global-input">
        </label>
      </li>
      <li>
        <label class="global-label">
          工作地址：<br>
          <input type="text" class="global-input">
        </label>
      </li>
      <li>
        <label class="global-label">
          常去地址：<br>
          <input type="text" class="global-input">
        </label>
      </li>
      <li>
        <label class="global-label">
          职业：<br>
          <select class="global-input">
            <option>无业游民</option>
          </select>
        </label>
      </li>
      <li>
        <label class="global-label">爱好：</label><br>
        <label class="radio-label"><input type="radio">选项1</label>
        <label class="radio-label"><input type="radio">选项2</label>
        <label class="radio-label"><input type="radio">选项3</label>
        <label class="radio-label"><input type="radio">选项4</label>
        <label class="radio-label"><input type="radio">选项5</label>
      </li>
    </ul>

    <div class="my-head-portrait">
      <div class="img-container head-portrait-img">
        <img src="../images/camera-img.png" alt="" class="img-responsive">
      </div>

      <a href="" class="link-orange" id="updateHeadPortrait">修改头像</a>
    </div>

  </form>
</div>

<div id="myHeadPortrait" style="display: none;">
  <div class="personal-datum">
    <h2 class="header-title">我的头像</h2>
  </div>

  <div class="my-head-portrait" style="position: static;">
    <span class="img-container head-portrait-img" style="display: inline-block;">
      <img src="../images/camera-img.png" alt="" class="img-responsive">
    </span>

    <div>
      <a href="" class="link-orange">当前头像</a>
    </div>
  </div>

  <div id="cropAvatar">
    <form class="register-form text-center margin-top-vl avatar-form" action="upload" enctype="multipart/form-data"
          method="post">
      <h3 class="font-black font-size-xxlarge">设置新头像</h3>

      <p class="font-gray font-size-large">支持JPG，可在大照片中截取满意部分。</p>

      <div class="margin-top-lg">
        <input class="avatar-src" name="avatar_src" type="hidden">
        <input class="avatar-data" name="avatar_data" type="hidden">
        <label for="avatarInput" class="font-gray">上传头像</label>
        <input class="avatar-input font-gray" id="avatarInput" name="avatar_file" type="file">
      </div>

      <div class="avatar-wrapper">
        <img src="../images/Penguins.jpg" alt=""/>
      </div>

      <p class="margin-top-lg">
        <button class="global-button avatar-save" type="submit">保存上传</button>
      </p>

      <div class="loading" aria-label="Loading" role="img" tabindex="-1"></div>
    </form>
  </div>
</div>

<script type="text/javascript">

$(function(){
	var $year = $('#year');
	var $month = $('#month');
	var $day = $('#day');
	var date = new Date();
	var year = date.getFullYear();
	var options='';
	for (var i = year; i >= year - 100; i--) {
		options += "<option value=" + i + ">" + i + "</option>";
	}
	$year.html(options);
	
	options = '';
	for (var i = 1; i <= 12; i++) {
		options += "<option value=" + i + ">" + i + "</option>";
	} 
	$month.html(options);
	
	options = '';
	for (var i = 1; i <= 31; i++) {
		options += "<option value=" + i + ">" + i + "</option>";
	} 
	$day.html(options);
	
	
	function append(o, v) {
		var option = new Option(v, v);
		o.options.add(option);
	}
	
	$('#year,#month').change(function(){
		var y = document.getElementsByName("year")[0].value;
		var m = document.getElementsByName("month")[0].value;
		var day = document.getElementsByName("day")[0];
		day.innerHTML = "";
		if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
			for (var j = 1; j <= 31; j++) {
				append(day, j);
			}
		}
		else if (m == 4 || m == 6 || m == 9 || m == 11) {
			for (var j = 1; j <= 30; j++) {
				append(day, j);
			}
		}
		else if (m == 2) {
			var flag = true;
			flag = y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
			if (flag) {
				for (var j = 1; j <= 29; j++) {
					append(day, j);
				}
			}
			else {
				for (var j = 1; j <= 28; j++) {
					append(day, j);
				}
			}
		}
		
    });
	
});
		
</script>
	  

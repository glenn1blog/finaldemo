var login = '<div class="human">\
	<svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
		viewBox="0 0 750 1334" style="enable-background:new 0 0 750 1334;" xml:space="preserve">\
		<a onclick="memberopen()">\
			<g class="svgsty">\
				<circle class="svgsty" cx="375.3" cy="227" r="117.5"/>\
				<text class="svgtxt-1" x="310" y="250" fill="black">會員</text>\
			</g>\
		</a>\
		<a onclick="login()">\
			<g class="svgsty">\
				<circle class="svgsty" cx="124.2" cy="663.6" r="58.7"/>\
				<text class="svgtxt-1" x="88" y="685" fill="black">登</text>\
				<circle class="svgsty" cx="626.3" cy="663.6" r="58.7"/>\
				<text class="svgtxt-1" x="588" y="685" fill="black">出</text>\
			</g>\
		</a>\
		<a xlink:href="http://www.google.com" target="_blank">\
			<g class="svgsty">\
				<path class="svgsty" d="M516.2,388.1c-1.5-2.2-3.1-4.2-4.8-6.1l-1.8-2.3c-1.7-2.1-3.8-3.7-6.2-4.7c-8.2-5.8-18.2-9.2-28.9-9.2H275.9\
					c-10,0-19.4,3-27.2,8.1c-3.9,0.6-7.5,2.6-10.1,5.8l-58.4,73.7h387.9L516.2,388.1z"/>\
					<text class="svgtxt-1" x="310" y="440" fill="black">圓領</text>\
			</g>\
		</a>\
		<a xlink:href="http://www.google.com" target="_blank">\
			<g class="svgsty">\
				<path class="svgsty" d="M610.8,533.2c6.9-5.5,8.1-15.6,2.6-22.5l-45.3-57.2H180.2l-45.3,57.2c-5.5,6.9-4.3,17,2.6,22.5l14.3,11.3h444.7\
					L610.8,533.2z"/>\
					<text class="svgtxt-1" x="310" y="530" fill="black">Ｖ領</text>\
				</g>\
			</a>\
			<a xlink:href="http://www.google.com" target="_blank">\
				<g class="svgsty">\
					<path class="svgsty" d="M151.7,544.5l35,27.7c6.9,5.5,17,4.3,22.5-2.6l16.5-20.8v97.7h299.1v-94.8l14.2,17.9c5.5,6.9,15.6,8.1,22.5,2.6\
						l35-27.7H151.7z"/>\
						<text class="svgtxt-1" x="255" y="630" fill="black">POLO領</text>\
					</g>\
				</a>\
				<a xlink:href="http://www.google.com" target="_blank">\
					<g class="svgsty">\
						<path class="svgsty" d="M225.7,720.2c0,27.6,22.6,50.2,50.2,50.2h198.6c27.6,0,50.2-22.6,50.2-50.2v-73.7H225.7V720.2z"/>\
						<text class="svgtxt-1" x="280" y="740" fill="black">堆堆領</text>\
					</g>\
				</a>\
				<a xlink:href="http://www.google.com" target="_blank">\
					<g class="svgsty">\
						<path class="svgsty" d="M527.9,830.7c-0.6-1.4-1.4-2.6-2.3-3.7c-2.7-5.1-8-8.6-14.2-8.6h-267c-3.9,0-7.5,1.4-10.3,3.7\
							c-4,1.4-7.4,4.4-9.3,8.5l-41.5,92.8h386L527.9,830.7z"/>\
							<text class="svgtxt-1" x="305" y="900" fill="black">連帽</text>\
						</g>\
					</a>\
					<a xlink:href="http://www.google.com" target="_blank">\
						<g class="svgsty">\
							<path class="svgsty" d="M610.1,1014.5l-40.7-91h-386l-40.7,91c-1.5,3.4-1.7,7.1-0.9,10.5c-0.1,0.8-0.2,1.6-0.2,2.4\
								c0,8.4,6.9,15.4,15.4,15.4h437.9c8.4,0,15.4-6.9,15.4-15.4c0-0.1,0-0.1,0-0.2C611.9,1023.2,612,1018.7,610.1,1014.5z"/>\
								<text class="svgtxt-1" x="305" y="1010" fill="black">其他</text>\
							</g>\
						</a>\
					</svg>\
					<!--member start-->\
					<div class="modal_memberbox">\
						<div class="modal_memberbox-content animate">\
							<span onclick="memberclose()" class="close" title="Close Modal">×</span>\
							<div class="modal_memberboxtop">\
								<div class="member_content">\
									<div class="modal_itemboxbottom">\
										<h2 class="record_title">會員專區</h2>\
										<div id="member_box">\
											<div id="member_box-left">\
												<i class="fas fa-user fa-8x"></i>\
											</div>\
											<div id="member_box-right">\
												<form id="member">\
													<ul id="ul1">\
														<li><label>姓名：</label><p>帥哥綸</p></li>\
														<li><label>e-mail：</label><p>1231231</p></li>\
														<li><label>cellphone：</label><p>066446</p></li>\
														<a id="member_editor" onclick="editor()" class="member_editor">編輯</a>\
													</ul>\
												</form>\
											</div>\
										</div>\
										<h2 class="record_title">購買紀錄：</h2>\
										<div class="record_out">\
											<div class="record_date">\
												<p class="record_text">日期：1/1</p>\
											</div>\
											<a class="record_in" onclick="window.open(\' http://www.google.com\');">\
												<div class="record_left">\
													<img src="http://fakeimg.pl/200x150" alt="">\
												</div>\
												<div class="record_right">\
													<p>商品名稱：123</p>\
													<div class="star">\
														<i class="fas fa-star star_bright"></i>\
														<i class="fas fa-star star_bright"></i>\
														<i class="fas fa-star star_bright"></i>\
														<i class="fas fa-star"></i>\
														<i class="fas fa-star"></i>\
													</div>\
													<p>留言：</p>\
													<div class="record_board">\
														123123132131332\
													</div>\
												</div>\
											</a>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
					<!--member end-->\
				</div>\
				<!--登入 start-->\
				<div id="logsign" class="modal">\
					<div class="imgcontainer">\
						<span onclick="document.getElementById(\'logsign\').style.display=\'none\'" id="close_logsign" class="close" title="Close Modal">×</span>\
					</div>\
					<div class="forms-section">\
						<div class="forms">\
							<div class="form-wrapper" id="login">\
								<button type="button" class="switcher switcher-login">\
								Login\
								<span class="underline"></span>\
								</button>\
								<form class="form form-login">\
									<fieldset>\
										<legend>Please, enter your email and password for login.</legend>\
										<div class="input-block">\
											<label for="login-email">E-mail</label>\
											<input id="login-email" type="email" required>\
										</div>\
										<div class="input-block">\
											<label for="login-password">Password</label>\
											<input id="login-password" type="password" required>\
										</div>\
									</fieldset>\
									<button type="submit" class="btn-login">Login</button>\
								</form>\
							</div>\
							<div class="form-wrapper" id="signup">\
								<button type="button" class="switcher switcher-signup">\
								Sign Up\
								<span class="underline"></span>\
								</button>\
								<form class="form form-signup">\
									<fieldset>\
										<legend>Please, enter your email, password and password confirmation for sign up.</legend>\
										<div class="input-block">\
											<label for="signup-name">name</label>\
											<input id="signup-name" type="name" required>\
										</div>\
										<div class="input-block">\
											<label for="signup-email">E-mail</label>\
											<input id="signup-email" type="email" required>\
										</div>\
										<div class="input-block">\
											<label for="signup-password">Password</label>\
											<input id="signup-password" type="password" required>\
										</div>\
										<div class="input-block">\
											<label for="signup-password-confirm">Confirm password</label>\
											<input id="signup-password-confirm" type="password" required>\
										</div>\
										<div class="input-block">\
											<label for="signup-cellphone">cellphone</label>\
											<input id="signup-cellphone" type="tel" name="phone" pattern="[0-9]{10}" required>\
										</div>\
									</fieldset>\
									<button type="submit" class="btn-signup">Continue</button>\
								</form>\
							</div>\
						</div>\
					</div>\
				</div>\
				<!--登入 end-->';
document.write(login);
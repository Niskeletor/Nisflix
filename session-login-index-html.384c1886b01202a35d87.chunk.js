"use strict"; (self.webpackChunk = self.webpackChunk || []).push([[3778], { 20777: function (t, e, a) { a.r(e), e.default = '<div id="loginPage" data-role="page" class="page standalonePage" data-backbutton="false"> <img src="https://i.postimg.cc/63kYcf5j/nisflix-XXL.png" width=350px style="padding: 0px;display:block; margin-left: auto; margin-right: auto;"> <div class="padded-left padded-right padded-bottom-page margin-auto-y">  <form class="manualLoginForm margin-auto-x hide"> <div class="padded-left padded-right flex align-items-center justify-content-center"> <h1 class="sectionTitle">${HeaderPleaseSignIn}</h1> </div> <div class="inputContainer"> <input is="emby-input" type="text" id="txtManualName" required="required" label="${LabelUser}" autocomplete="username" autocapitalize="off"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtManualPassword" type="password" label="${LabelPassword}" autocomplete="current-password"/> </div> <label class="checkboxContainer"> <input is="emby-checkbox" type="checkbox" class="chkRememberLogin" checked="checked"/> <span>${RememberMe}</span> </label> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${ButtonSignIn}</span> </button> <div style="margin-top:.5em"> <button is="emby-button" type="button" class="raised cancel block btnCancel"> <span>${ButtonCancel}</span> </button> </div> </form> <div class="visualLoginForm" style="text-align:center"> <h1 style="margin-top:1em">${HeaderPleaseSignIn}</h1> <div id="divUsers" class="itemsContainer vertical-wrap centered"></div> </div> <div class="readOnlyContent" style="margin:.5em auto 1em"> <button is="emby-button" type="button" class="raised cancel block btnManual"> <span>${ButtonManualLogin}</span> </button> <button is="emby-button" type="button" class="raised cancel block btnQuick hide"> <span>${ButtonUseQuickConnect}</span> </button> <button is="emby-button" type="button" class="raised cancel block btnForgotPassword"> <span>${ButtonForgotPassword}</span> </button> <button is="emby-button" type="button" class="raised block btnSelectServer"> <span>${ButtonChangeServer}</span> </button> <div class="disclaimerContainer"> <div class="disclaimer"></div> </div> </div> </div> </div> ' } }]);
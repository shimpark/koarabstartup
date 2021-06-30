//media query matches value
var mqWeb = window.matchMedia("screen and (min-width: 1376px)");
var mqPad = window.matchMedia("screen and (max-width: 991.98px)");
var mqMobile = window.matchMedia("screen and (max-width: 576.98px)");

//open modal event
function openModal(modalID) {
    var modalArea = $(".modal-area");
    var thisModal = $("#" + modalID)

    $("body").addClass("full");
    modalArea.not(thisModal).hide();
    thisModal.fadeIn(250);
}
//close modal event
function closeModal(modalID) {
    var thisModal = $("#" + modalID)

    $("body").removeClass("full");
    thisModal.fadeOut(250);
}
//close modal event - when click backgrouond
function closeBackmodal() {
    var modalArea = $(".modal-area");
    var modalWrap = $("[class^=modal-wrap__]");

    modalArea.on("click", function(e){
        if (!$(e.target).closest(modalWrap).length) {
            $("body").removeClass("full");
            $(this).fadeOut(150);
        }
    });
}

//main show&hide language content
function showLangCont(thisLang) {
    $("[class^='lang-cont__']").hide();
    $(".lang-cont__" + thisLang).show();
}

//textarea counter event
function txtCounter() {
    $(".keyup1000").on("keyup", function() {
        var content = $(this).val();
        var counter = $(this).next().find(".count");

        counter.html(content.length + "/1000자");
            if (content.length > 1000){
                $(this).val(content.substring(0, 1000));
                counter.html("(1000/1000자)");
            }
    });
}

//upload file name event
function uploadFileName() {
    $(".form-file").find("input[type='file']").change(function(e){
        var fileName = e.target.files[0].name;
        $(this).parents().siblings(".form-input-txt").val(fileName);
    });
}

//delete uploaded file event
function deleteFile(thisFile) {
    $(thisFile).parents("li").remove();

    if($(".form-file-list").find("li").length < 1) {
        $(".form-file-list").remove();
    }
}

//faq list event
function tglFaq() {
    var faqTit = $(".faq-list-tit-box");
    var faqCont = $(".faq-list-txt");

    faqTit.on("click", function(){
        faqTit.not($(this)).removeClass("active");
        $(this).toggleClass("active");

        faqCont.not($(this).next(faqCont)).slideUp(250);
        $(this).next(faqCont).slideToggle(250);
    });
}

//tab content event
function showTabCont(thisTabContVal) {
    var thisTabCont = $(".tab-cont__" + thisTabContVal);

    $("[class^='tab-cont__']").not(thisTabCont).hide();
    thisTabCont.show();

    return false;
}
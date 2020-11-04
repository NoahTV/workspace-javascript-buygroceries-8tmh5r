/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$(".hot").each(function() {
    $(this).removeClass("hot");
    $(this).addClass("cool");
  });

// traverse the elements
$("#one").next().next().text("milk");

// add a new element


// add by clicking the plus sign
document.getElementById("add").addEventListener("click", addElement);

function addElement() {
  // add a new element
      // add a new element

}

$("li").click(changeStyle);

//  click the li element will change the changeStyle
function changeStyle() {
  if($(this).hasClass('complete')){
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }else{
    if($(this).hasClass('cool')){
      $(this).removeClass('cool');
    $(this).addClass('complete');
    }else{
      if($(this).hasClass('hot')){
      $(this).removeClass('hot');
    $(this).addClass('complete');
    }else{
      $(this).addClass('complete');
    }
  }
}
}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
  $('li.complete').remove();
}

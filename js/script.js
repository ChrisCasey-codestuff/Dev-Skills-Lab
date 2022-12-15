
let $addSkill = $(document.getElementById('addSkill'));

$addSkill.on("click", function() {
  let $skillDiv = $(document.getElementById('skills'));
  let $miniDiv = $(document.createElement('div'));
  let $deleteButt = $(document.createElement('button'));

  $deleteButt.text('X');

  $miniDiv.append($deleteButt);
  $deleteButt.on("click", function() {
    $miniDiv.remove();
  })
 $miniDiv.append(document.getElementById('newSkill').value);
 $skillDiv.append($miniDiv);
});
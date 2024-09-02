let currentDateTime = new Date();
let hours = currentDateTime.getHours();
let minutes = currentDateTime.getMinutes();
let amOrPm = hours >= 12 ? "pm" : "am";
hours = hours % 12 || 12;
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
let timestamp = hours + ":" + minutes + " " + amOrPm;
function timeShow() {
  var reminder_time = document.getElementById("reminder_time").value;
  console.log(reminder_time);
}
function addTask() {
  let title_input = document.getElementById("title_input").value;
  let desc_input = document.getElementById("desc_input").value;
  let addtask = `
   <div id="task" class="text-right container mt-4 px-5 py-2" style="background-color: rgb(250, 210, 173); border-radius:10px;">
        <div class="d-flex">
            <h2 class="text-left" id="title">${title_input}</h2>
        </div>
        <h6 class="text-left" id="desc">${desc_input}</h6>
        <span class="text-left" id="time">${timestamp}</span>
        <!-- Button trigger modal -->
         <button style="background-color: rgb(255, 245, 227); color:black; border: 2px solid rgb(255,245,227);" type="button"
        class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Reminder
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="background-color: rgb(255, 245, 227);">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Reminder</h5>

                    <div class="time">
                        <span id="reminder_hour"></span>
                        <span>:</span>
                        <span id="reminder_min"></span>
                    </div>

                </div>
                <div class="modal-body text-left">
                    <h4>Time</h4>
                    <input type="text" style="width: 60px; height: 40px; font-size: 40px;" id="alarm_hour">
                    <span style="font-size: 50px; font-weight: bold;">:</span>
                    <input type="text" style="width: 60px; height: 40px; font-size: 40px;" id="alarm_min">
                    <input type="text" style="width: 60px; height: 40px; font-size: 40px;" id="alarm_amorpm">
                    <!-- <input type="time" name="" id="reminder_alarm"> -->
                    <div class="mt-4">
                        <h4>Title</h4>
                        <input type="text" id="reinder_title">
                    </div>
                    <div class="mt-4">
                        <h4>Description</h4>
                        <textarea name="" id="reinder_decs" class="w-100"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary px-4 py-1"
                        style="background-color: rgb(250, 210, 173); color:black; border:2px solid rgb(250, 210, 173);"
                        data-dismiss="modal" onclick="clock()">Save</button>
                </div>
            </div>
        </div>
    </div>
        <button type="button" class="btn"
            style="background-color: rgb(255, 245, 227); color:black; border: 2px solid rgb(255,245,227);"  onclick="removeTask()">Cancel</button>
    </div>`;
  document.getElementById("add").innerHTML += addtask;

  timeShow();
}
function removeTask() {
  document.getElementById("task").remove();
}

function reminder() {
  let alarmAudio = document.getElementById("alarm");
  alarmAudio.play();
  let reminder_title_input = document.getElementById("reinder_title").value;
  let reminder_desc_input = document.getElementById("reinder_decs").value;
  let reminder = `    <div class="alert alert-success container mt-2" role="alert">
        <h4 class="alert-heading" id="alert_title">${reminder_title_input}</h4>
        <p id="alert_desc">${reminder_desc_input}</p>
    </div>`;
  document.getElementById("reminder_alert").innerHTML = reminder;
}
function clock() {
  function alarm() {
    if (alarm_hour === hour && alarm_min === min && alarm_amorpm === amorpm) {
      reminder();
    }
  }
  let date = new Date();
  let min = date.getMinutes();
  let hour = date.getHours();
  let amorpm = hour >= 12 ? "pm" : "am";
  hour = hour % 12 || 12;
  document.getElementById("reminder_min").innerHTML = min + amorpm;
  document.getElementById("reminder_hour").innerHTML = hour;

  let alarm_hour = parseInt(document.getElementById("alarm_hour").value);
  let alarm_min = parseInt(document.getElementById("alarm_min").value);
  let alarm_amorpm = document.getElementById("alarm_amorpm").value;
  alarm();
}

setInterval(clock, 1000);

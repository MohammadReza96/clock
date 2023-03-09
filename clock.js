let label =document.getElementById('time')
let weekDay =document.getElementById('weekDay')

function update(){
    let date=new Date()
    label.innerHTML=formatDate(date)
    weekDay.innerHTML=formatDay()
    //---------------------------------------------- format functions  (nested functions)
    function formatDate(date){
        //------------------------------------------ config hour & pm or am
        var hour = setZero(date.getHours());
        var pm_or_am = hour > 12 ? 'pm' : 'am' ;
        hour = hour % 24 || 12;
        hour = setZero(hour)
        //------------------------------------------ config minutes
        var minutes = setZero(date.getMinutes());
        //------------------------------------------ config seconds
        var seconds = setZero(date.getSeconds());
        //------------------------------------------ set zero functions (nested functions)
        function setZero(time){
            var time = String(time)
            final_time = time.length < 2 ? "0" + time : time;
            return final_time
        }

        return `${hour}:${minutes}:${seconds} ${pm_or_am}`
    }
    function formatDay(){
        //------------------------------------------ config day of the week
        var day_lists =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        var day = day_lists[Number(date.getDay())]
        return day
    }
}

update()
setInterval(update,1000)
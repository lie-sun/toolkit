const util = {
    // 一位数转两位数
    toPairage: (argument) => {
        return argument > 9 ? argument : '0' + argument;
    },
    // 格式化日期
    formatDate: () => {
        var date = new Date();
        var year = date.getFullYear();
        var mon = date.getMonth()+1;
        var day = date.getDate();
        return this.toPairage(year)+'/'+this.toPairage(mon)+'/'+this.toPairage(day);
    },
    // 格式化时间
    formatTime:()=>{
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return this.toPairage(hour)+':'+this.toPairage(minute)+":"+this.toPairage(second);
    }

}
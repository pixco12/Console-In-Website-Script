
const originalConsoleLogXyZ = console.log
const originalConsoleInfoXyZ = console.info
const originalConsoleWarnXyZ = console.warn
const originalConsoleErrorXyZ = console.error

let logsCaptured = []
console.log = function(logsOfConsole){
    logsCaptured.push({type : "log", info : logsOfConsole})
    originalConsoleLogXyZ(logsOfConsole)
}
console.warn = function(logsOfConsole){
    logsCaptured.push({type : "warn", info : logsOfConsole})
    originalConsoleWarnXyZ(logsOfConsole)
}
console.error = function(logsOfConsole){
    logsCaptured.push({type : "error", info : logsOfConsole})
    originalConsoleErrorXyZ(logsOfConsole)
}
console.info = function(logsOfConsole){
    logsCaptured.push({type : "info", info : logsOfConsole})
    originalConsoleInfoXyZ(logsOfConsole)
}

document.querySelector("head").innerHTML = document.querySelector("head").innerHTML + `
<style>
    .consoleLOggerXYZBtn{
        z-index: 9999999999;
        position: fixed;
        right: 10px;
        bottom: 10px;
    }
    .consoleLOggerXYZBtn img{
        height: 45px;
        width: 45px;
    }
    div{
        background-color: transparent;
    }
</style>

`
document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + `

<div class="consoleLOggerXYZBtn">
    <img src="https://winaero.com/blog/wp-content/uploads/2019/06/WIndows-Terminal-icon.png" alt="">
</div>
`


function consoleLOggerXYZBtnListener() {
    document.querySelector(".consoleLOggerXYZBtn img").addEventListener("click", () => {
        


        if (document.getElementsByClassName("consoleLOggerXYZ").length > 0) {
            
            while (document.getElementsByClassName("consoleLOggerXYZ").length > 0){
                document.getElementsByClassName("consoleLOggerXYZ")[0].parentNode.removeChild(document.getElementsByClassName("consoleLOggerXYZ")[0])
            }
        } else {
            document.querySelector("head").innerHTML = document.querySelector("head").innerHTML +`
                <style class="consoleLOggerXYZ">
                    *{
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                        text-align: left;
                    }
                    .consoleLOggerXYZLogs{
                        background-color: rgb(33, 33, 33);
                        position: fixed;
                        height: 100vh;
                        z-index: 999999999;
                        color: white;
                        width: 100%;
                        font-family: 'Courier New', Courier, monospace;
                        padding: 15px;
                        font-size: 15px;
                        top: 0px;
                        right:0px;
                        left:0px;
                        bottom:0px;
                        display : flex;
                        flex-direction : column;
                        gap: 7px;
                    }
                    .consoleLOggerXYZLogs p{
                        padding-left: 10px;
                    }
                    .consoleLOggerXYZLogs .consoleLOggerXYZLogslog{
                        padding-left: 27px;
                    }
                    .consoleLOggerXYZLogs .consoleLOggerXYZLogsinfo{
                        padding-left: 27px;
                    }
                    .consoleLOggerXYZLogswarn{
                        background-color:rgba(237, 213, 126, 0.28);
                    }
                    .consoleLOggerXYZLogserror{
                        background-color:rgba(237, 126, 126, 0.28);
                    }
                </style>
            `
            document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + `
                <div class="consoleLOggerXYZ consoleLOggerXYZLogs">
                    <div>
                        <h2>Console Display</h2>
                        <br>
                        <h3>By : pixco/pixco12/pixcordel</h3>
                        <br>
                        <p>Only logs, info, warnings and errors are captured here. To refresh the stuff captured open and close the console display.</p>
                        <br>
                        <h4>Logs Captured :</h4>
                    </div>
                </div>
            `
            for (let i = 0; i < logsCaptured.length; i++){
                if (logsCaptured[i].type == "log"){
                    document.querySelector(".consoleLOggerXYZLogs").innerHTML = document.querySelector(".consoleLOggerXYZLogs").innerHTML + `<p class="consoleLOggerXYZLogslog">${logsCaptured[i].info}</p>`
                }
                if (logsCaptured[i].type == "info"){
                    document.querySelector(".consoleLOggerXYZLogs").innerHTML = document.querySelector(".consoleLOggerXYZLogs").innerHTML + `<p class="consoleLOggerXYZLogsinfo">${logsCaptured[i].info}</p>`
                }
                if (logsCaptured[i].type == "warn"){
                    document.querySelector(".consoleLOggerXYZLogs").innerHTML = document.querySelector(".consoleLOggerXYZLogs").innerHTML + `<p class="consoleLOggerXYZLogswarn">! ${logsCaptured[i].info}</p>`
                }
                if (logsCaptured[i].type == "error"){
                    document.querySelector(".consoleLOggerXYZLogs").innerHTML = document.querySelector(".consoleLOggerXYZLogs").innerHTML + `<p class="consoleLOggerXYZLogserror">× ${logsCaptured[i].info}</p>`
                }
            }


            consoleLOggerXYZBtnListener()
        }
    })
}

consoleLOggerXYZBtnListener()


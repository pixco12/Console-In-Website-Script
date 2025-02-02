const originalConsoleLogXyZ = console.log
const originalConsoleInfoXyZ = console.info
const originalConsoleWarnXyZ = console.warn
const originalConsoleErrorXyZ = console.error

let logsCaptured = []

document.querySelector("head").innerHTML = document.querySelector("head").innerHTML + `
<style>
    .consoleLOggerXYZBtn{
        box-sizing: border-box !important;
        z-index: 9999999999 !important;
        position: fixed !important;
        right: 10px !important;
        bottom: 10px !important;
        background-color: rgb(33, 33, 33) !important;
        border: 5px black solid !important;
        border-radius: 10px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        width: 50px !important;
        height: 50px !important;
    }
    .consoleLOggerXYZBtn h3{
        font-size: large !important;
        text-align: center !important;
        color: white !important;
    }
</style>

`
document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + `

<div class="consoleLOggerXYZBtn">
    <h3>>_</h3>
</div>
`
window.addEventListener("error", (e) => {
    logsCaptured.push({type : "error", info : `× ${e.message} <a href="./">${e.filename ? new URL(e.filename).pathname : e.filename}:${e.lineno}:${e.colno}</a>`})

})
function consoleLOggerXYZGrabLogs(){
    console.log = function(logsOfConsole){
        logsCaptured.push({type : "log", info : logsOfConsole})
        originalConsoleLogXyZ(logsOfConsole)
    }
    console.warn = function(logsOfConsole){
        logsCaptured.push({type : "warn", info : "! " + logsOfConsole})
        originalConsoleWarnXyZ(logsOfConsole)
    }
    console.error = function(logsOfConsole){
        logsCaptured.push({type : "error", info : "× " + logsOfConsole})
        originalConsoleErrorXyZ(logsOfConsole)
    }
    console.info = function(logsOfConsole){
        logsCaptured.push({type : "info", info : logsOfConsole})
        originalConsoleInfoXyZ(logsOfConsole)
    }
}

function consoleLOggerXYZShowLogs() {
    document.querySelector(".consoleLOggerXYZLogs").innerHTML = `
    <div>
        <h2>Console Display</h2>
        <br>
        <h3>By : pixco/pixco12/pixcordel</h3>
        <br>
        <p>Only logs, info, warnings and errors are captured here. To refresh the stuff captured open and close the console display.</p>
        <br>
        <h4>Logs Captured :</h4>
    </div>
    `
    for (let i = 0; i < logsCaptured.length; i++){
        document.querySelector(".consoleLOggerXYZLogs").innerHTML = document.querySelector(".consoleLOggerXYZLogs").innerHTML + `<p class="consoleLOggerXYZLogs${logsCaptured[i].type}">${logsCaptured[i].info}</p>`
    }
}
function consoleLOggerXYZBtnListener() {
    consoleLOggerXYZGrabLogs()
    document.querySelector(".consoleLOggerXYZBtn").addEventListener("click", () => {
        if (document.getElementsByClassName("consoleLOggerXYZ").length > 0) {
            document.querySelector(".consoleLOggerXYZBtn h3").innerHTML = ">_"
            document.querySelector(".consoleLOggerXYZBtn").style.top = ``
            document.querySelector(".consoleLOggerXYZBtn").style.bottom = `10px`
            while (document.getElementsByClassName("consoleLOggerXYZ").length > 0){
                document.getElementsByClassName("consoleLOggerXYZ")[0].parentNode.removeChild(document.getElementsByClassName("consoleLOggerXYZ")[0])
            }
        } else {
            document.querySelector(".consoleLOggerXYZBtn h3").innerHTML = "×"
            document.querySelector(".consoleLOggerXYZBtn").style.bottom = ``
            document.querySelector(".consoleLOggerXYZBtn").style.top = `10px`
            document.querySelector("head").innerHTML = document.querySelector("head").innerHTML +`
                <style class="consoleLOggerXYZ">
                    *{
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box !important;
                        text-align: left !important;
                        font-family: 'Courier New', Courier, monospace !important;
                    }
                    body{
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    .consoleLOggerXYZLogs{
                        background-color: rgb(33, 33, 33) !important;
                        position: fixed !important;
                        height: 100% !important;
                        z-index: 99999 !important;
                        color: white !important;
                        width: 100vw !important;
                        font-family: 'Courier New', Courier, monospace !important;
                        padding: 15px;
                        font-size: 15px;
                        top: 0px !important;
                        right: 0px !important;
                        left: 0px !important;
                        bottom: 0px !important;
                        display : flex !important;
                        flex-direction : column !important;
                        gap: 7px !important;
                        overflow-y: scroll !important;
                        box-sizing: border-box !important;
                        padding-bottom: 160px !important;
                    }
                    .consoleLOggerXYZLogs::-webkit-scrollbar{
                        display:none;
                    }
                    .consoleLOggerXYZLogs p {
                        padding-left: 10px !important;
                        word-wrap: break-word !important;
                        overflow-wrap: break-word !important; 
                        white-space: normal !important;
                    }
                    .consoleLOggerXYZLogs .consoleLOggerXYZLogslog{
                        padding-left: 28px !important;
                    }
                    .consoleLOggerXYZLogs .consoleLOggerXYZLogsinfo{
                        padding-left: 28px !important;
                    }
                    .consoleLOggerXYZLogswarn{
                        background-color:rgba(237, 213, 126, 0.28) !important;
                    }
                    .consoleLOggerXYZLogserror{
                        background-color:rgba(237, 126, 126, 0.28) !important;
                    }
                    div{
                        background-color: transparent !important;
                        color: white !important;
                    }
                    p{
                        background-color: transparent !important;
                        color: white !important;
                    }
                    a{
                        color: rgb(1, 156, 208) !important;
                    }
                    #consoleLOggerXYZLogstextarea {
                        resize: none !important;
                        height: 70px !important;
                        border: 0 !important;
                        border-radius: 20px !important;
                        color: rgb(255, 255, 255) !important;
                        background-color: rgb(59, 59, 59) !important;
                        box-sizing: border-box !important;
                        padding: 10px !important;
                        display: block !important;
                        width: 100% !important;
                        font-family: 'Courier New', Courier, monospace !important;
                    }

                    .consoleLOggerXYZLogscmdexecute {
                        width: 100% !important;
                        box-sizing: border-box !important;
                        overflow: hidden !important;
                        position: fixed !important;
                        z-index: 999999 !important;
                        bottom: 20px !important;
                        display: flex !important;
                        flex-direction: column !important;
                        padding-right: 20px !important;
                        padding-left: 20px !important;
                        height: fit-content !important;
                        background-color: transparent;
                    }

                    #consoleLOggerXYZLogscmdexecutebtn {
                        color: white !important;
                        background-color: rgb(77, 77, 77) !important;
                        font-family: 'Courier New', Courier, monospace !important;
                        text-align: center !important;
                        width: fit-content !important;
                        margin: auto !important;
                        margin-top: 10px !important;
                        margin-bottom: 20px !important;
                        padding: 7px !important;
                        border-radius: 7px !important;
                        box-shadow: 0 0 10px rgb(77, 77, 77) !important;
                    }

                    #consoleLOggerXYZLogstextarea:focus {
                        outline: none !important;
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
                <div class="consoleLOggerXYZLogscmdexecute consoleLOggerXYZ">
                    <h4 id="consoleLOggerXYZLogscmdexecutebtn">Execute</h4>
                    <textarea id="consoleLOggerXYZLogstextarea" placeholder="Execute Javascript Commands"></textarea>
                </div>
            `
            setTimeout(consoleLOggerXYZShowLogs, 0);
            document.querySelector("#consoleLOggerXYZLogscmdexecutebtn").addEventListener("click", () => {
                try{
                    eval(document.querySelector("#consoleLOggerXYZLogstextarea").value)
                }finally{
                    consoleLOggerXYZGrabLogs()
                    setTimeout(consoleLOggerXYZShowLogs, 0);
                    document.querySelector("#consoleLOggerXYZLogstextarea").value = ``
                }
            })

            consoleLOggerXYZBtnListener()
        }
    })
}

consoleLOggerXYZBtnListener()

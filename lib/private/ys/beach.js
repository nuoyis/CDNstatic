function gotoBeach() {
        // 好想去海边
        // CSS
        const elm_style = document.createElement("style");
        elm_style.innerHTML = `
                    :root{
                        --img0: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII=');
                        --img1: url("https://img.qijieya.cn/LightPicture/MEMZ/%E5%A5%BD%E6%83%B3%E5%8E%BB%E6%B5%B7%E8%BE%B9.jpg");
                    }

                    #gotoBeach {
                        display: block;
                        position: fixed;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        z-index: 1000000000;
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-color: #fff;
                        animation-name: launch;
                        animation-duration: 10s;
                        animation-fill-mode: forwards;
                    }
                    @keyframes launch {
                        30% {
                            background-image: var(--img0);
                        }
                        40% {
                            background-image: var(--img1);
                        }
                        90% {
                            background-image: var(--img1);
                        }
                        100% {
                            background-image: var(--img1);
                        }
                    }
        `;
        document.head.appendChild(elm_style);

        // 启动音效
        const elm_audio = document.createElement("audio");
        elm_audio.style.display = "none";
        elm_audio.loop = false;
        elm_audio.src = "https://www.qijieya.cn/game/linux/beach.mp3";
        elm_audio.play();
        // 启动画面
        const elm_div = document.createElement("div");
        elm_div.id = "gotoBeach";
        document.body.appendChild(elm_div);

        // 起洞！
        setTimeout(() => {
            //window.open("https://www.bilibili.com/video/BV1Ah411P7fK/");
            elm_div.onclick = () => {
                elm_audio.pause();
                elm_div.remove();
                elm_style.remove();
            }
        }, 12000)
    }

import { createFastboard, mount } from "@netless/fastboard";

const handleMountFastboard = async (div, uuid, data2) => {
    let app;
    try {
        app = await createFastboard({
            sdkConfig: {
                appIdentifier: "R_i7oHcBEe6QemuUoHIIuQ/4dSMOEFVsWIvng",
                region: "us-sv",
            },
            joinRoom: {
                uid: uuid,
                uuid: uuid,
                roomToken: data2,
            },
            managerConfig: {
                cursor: true,
            },
        });
        window.app = app;
        return mount(app, div);
    } catch (error) {
        console.error('Error in mountFastboard:', error);
    }
};

(async () => {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const uuid = urlParams.get('uuid');

        const options2 = {
            method: "POST",
            headers: {
                "token": "NETLESSSDK_YWs9ckNUOHRpTHVBelNYdWtmRSZub25jZT04ZjI0YTQ4MC03NzAxLTExZWUtOTA3YS02Yjk0YTA3MjA4Yjkmcm9sZT0wJnNpZz02YmY2YWFjNzEwNTc5MjFmNzg4NmViNDIwZmI4ZmEwMWExNDM5NmQ0NjM3ZmM2ZmNkY2RkNGRiMjExNjAzMjRl",
                "Content-Type": "application/json",
                "region": "us-sv"
            },
            body: JSON.stringify({
                lifespan: 3600000,
                role: "admin",
            })
        };

        const response2 = await fetch(`https://api.netless.link/v5/tokens/rooms/${uuid}`, options2);
        const data2 = await response2.json();
        console.log(data2);

        await handleMountFastboard(document.getElementById("app"), uuid, data2);
    } catch (error) {
        console.error('Error in fetch or JSON parsing:', error);
    }
})().catch((error) => {
    console.error('Unhandled Rejection:', error);
});

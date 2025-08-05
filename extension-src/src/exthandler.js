const ExtHandler = {
    // when extension is loaded
    async onLoad(app, target) {
        const account = app.getService('account');
        if (account) {
            const isLogin = await account.isLogin();
            if (!isLogin) {
                app.workspace.disableBlocks(...mustLoginBlocks);
            }
            account.onLogin(() => {
                app.workspace.enableBlocks(...mustLoginBlocks);
            });
            account.onLogout(() => {
                app.workspace.disableBlocks(...mustLoginBlocks);
            });
        }
        if (target && typeof target.isUploadMode === 'function') {
            triggerBlocksStatus(target.isUploadMode() ? 'upload' : 'debug', app);
        }
    },

    // when extension is unloaded
    onUnload(app) {
        // TODO
    },

    // when device is connected
    onConnect(app, device) {
        // TODO
    },

    // when device is disconnected
    onDisconnect(app, device) {
        // TODO
    },

    // when stop button is clicked
    onStopAll(app, device) {},

    // before switch to upload mode
    async beforeChangeUploadMode(app, device) {
        return true;
    },

    // before switch to debug mode
    async beforeChangeDebugMode(app, device) {
        return true;
    },

    // after switched to upload mode
    afterChangeUploadMode(app, device) {
        triggerBlocksStatus('upload', app, device);
        return true;
    },

    // after switched to debug mode
    afterChangeDebugMode(app, device) {
        triggerBlocksStatus('debug', app, device);
        return true;
    },

    // when device is selected
    onSelect(app, device) {
        setTimeout(() => {
            triggerBlocksStatus(device.isUploadMode() ? 'upload' : 'debug', app, device);
        }, 0);
    },

    // when device is unselected
    onUnselect(app, device) {
        triggerBlocksStatus('', app, device);
    },

    // before upload code
    beforeCodeUpload(app, device) {
        // TODO
    },

    // after code uploaded
    afterCodeUpload(app, device) {
        // TODO
    },

    // when receiving and reading byte
    onRead(app, device) {},

    // do something before firmware update
    beforeFirmwareUpdate(app, device) {
        // TODO
    },

    // do something after firmware update
    afterFirmwareUpdate(app, device) {
        // TODO
    }
}

export default ExtHandler;